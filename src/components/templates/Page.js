import React from "react";

import { Layout } from "../Layout";

import { Seo } from "@gatsbywpthemes/gatsby-plugin-wp-seo";
import { FrontPage } from "../frontPage";
import { window } from "browser-monads";
import { FaqPage, AboutPage, ContactPage, MyAccountPage } from "../pageLayouts";
import { Newsletter } from "../Newsletter";
import { Section, SidebarSocialShare } from "..";
import PageLayout from "../layout/PageLayout";
import { TravelQuote } from "..";

const Page = ({ page, ctx }) => {
  console.log("page ctx", ctx);
  const url = window.location.href;
  const {
    title,
    isFrontPage,
    content,
    slug,
    aboutPageContent,
    awards,
    contactUs,
    faq,
    homeHero,
    whatWeOffer,
    uri,
  } = page;

  const pageTitle = slug === "faq" ? "Frequently asked question" : title;

  const featuredImage =
    page.featuredImage?.node.localFile.childImageSharp.original;
  return (
    <Layout page={page} type="page">
      <Seo
        isFrontPage={isFrontPage}
        title={title}
        uri={uri}
        yoastSeo={ctx.yoastSeo}
        seo={ctx.seo}
        featuredImage={
          featuredImage && {
            src: featuredImage.src,
            width: featuredImage.width,
            height: featuredImage.height,
          }
        }
      />
      {isFrontPage ? (
        <FrontPage
          homeHero={homeHero}
          whatWeOffer={whatWeOffer}
          url={url}
          awards={awards}
        />
      ) : (
        <PageLayout
          title={pageTitle}
          sidebar={
            <div className="sticky top-0 space-y-base2">
              <Newsletter />
              <SidebarSocialShare url={url} />
            </div>
          }
        >
          {slug.includes("faq") && <FaqPage faq={faq} />}
          {slug.includes("about") && (
            <AboutPage aboutPageContent={aboutPageContent} />
          )}
          {slug.includes("contact") && (
            <ContactPage intro={contactUs?.contactIntro} />
          )}
          {slug?.includes("account") && <MyAccountPage />}
          {content && (
            <Section
              dangerouslySetInnerHTML={{ __html: content }}
              className="mt-5 prose max-w-none p-base2 mb-base2"
            />
          )}
        </PageLayout>
      )}
      {slug.includes("faq") && (
        <TravelQuote author="Mohammed">
          “Don't tell me how educated you are tell me how much you have
          travelled”
        </TravelQuote>
      )}
      {slug.includes("about") && (
        <TravelQuote author="Moorish proverb">
          “He who does not travel does not know the value of men.”
        </TravelQuote>
      )}
      {slug.includes("terms") && (
        <div className="container md:px-10">
          <TravelQuote author="Maya Angelou">
            “Perhaps travel cannot prevent bigotry, but by demonstrating that
            all peoples cry, laugh, eat, worry, and die, it can introduce the
            idea that if we try and understand each other, we may even become
            friends.”
          </TravelQuote>
        </div>
      )}
      {slug.includes("account") ||
        (slug.includes("contact") && (
          <TravelQuote author="John A. Shedd">
            “A ship in harbour is safe, but that is not what ships are built
            for”
          </TravelQuote>
        ))}
    </Layout>
  );
};

export default Page;
