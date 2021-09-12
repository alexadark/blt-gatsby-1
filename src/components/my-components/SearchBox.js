import { connectSearchBox, Stats } from "react-instantsearch-dom";
import React from "react";
import { IoSearch } from "react-icons/io5";

import clsx from "clsx";
import { useMediaQuery } from "../../lib/hooks";
import { Button } from "../ui-components/Button";
const SearchBox = ({ currentRefinement, isSearchStalled, refine }) => {
  const isSmall = useMediaQuery("(max-width:639px)");

  return (
    <>
      <div
        className={`py-5 bg-veryLightGold md:pl-14 px-5 container max-w-big my-5`}
      >
        <form>
          <div className="relative w-auto lg:w-[940px]">
            <IoSearch
              className={clsx(
                "hidden sm:block",
                "absolute top-4 left-7",
                "text-f-24 text-grey4"
              )}
            />
            <input
              type="text"
              aria-label="search"
              placeholder={
                !isSmall
                  ? "destinations | experiences | places to stay"
                  : "What are you looking for?"
              }
              className={clsx(
                "w-full h-11 sm:h-[55px]",
                "sm:pl-20",
                "border-none shadow-input placeholder-grey3 font-semibold text-f-18 focus:placeholder-transparent  focus:ring-grey2 focus:border-none"
              )}
              onChange={(event) => refine(event.currentTarget.value)}
            />
            <Button
              aria-label="search"
              className={clsx(
                "absolute  right-0 top-0 sm:right-1 sm:top-1",
                "h-11 w-11 sm:h-[47px] sm:w-[135px] !p-0"
              )}
            >
              {isSmall ? (
                <IoSearch className={clsx("text-f-24 text-grey4")} />
              ) : (
                "Search"
              )}
            </Button>
          </div>
          <div className="flex items-center mt-5">
            <div className="ml-3 font-bold text-f-26">
              <Stats />
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default connectSearchBox(SearchBox);
