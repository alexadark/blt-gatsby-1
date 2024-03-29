import React from "react"

import {
  PostEntryTitle,
  PostEntryMedia,
  PostEntryContent,
  PostEntryMeta,
  PostEntryInfo,
  ReadMoreButton,
  PrevNextPostNavigation,
  SocialShare,
} from "baseComponents"
import { Card } from "baseUiComponents"
import normalize from "normalize-path"

export const PostEntry = ({
  isFirst = false,
  post,
  ctx,
  location,
  ...props
}) => {
  const pageTemplate = post.headlesswp?.pageTemplate || "default"
  const media = post.featuredImage
    ? post.featuredImage.node.localFile.childImageSharp.original.src
    : null

  return (
    <article className="max-w-full entry mb-14" {...props}>
      <PostEntryMedia
        location={location}
        post={post}
        className="entry-media"
        imageLoading={isFirst ? "eager" : "lazy"}
        css={{
          ".gatsby-image-wrapper":
            pageTemplate === "full width" && location === "single"
              ? { height: 500 }
              : {
                  borderRadius: "8px 8px 0 0",
                },
        }}
      />

      <Card className={`content space-y-5 ${media && "rounded-t-lg"}`}>
        <PostEntryTitle
          location={location}
          post={post}
          className="text-2xl uppercase entry-title sm:text-3xl"
        />
        <PostEntryInfo className=" entry-info" post={post} />

        <PostEntryContent location={location} post={post} />

        <div className="entry-footer">
          <PostEntryMeta className="entry-meta" post={post} />
          <ReadMoreButton location={location} post={post} />
        </div>
        {location === "single" && (
          <>
            <SocialShare
              url={normalize(`/${post.uri}`)}
              title={post.title}
              media={media}
            />
            <PrevNextPostNavigation ctx={ctx} />
          </>
        )}
      </Card>
    </article>
  )
}
