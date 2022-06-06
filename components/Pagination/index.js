import React, { useState } from "react";
import PropTypes from "prop-types";
import ButtonPagination from "./ButtonPagination";
import { useRouter } from "next/router";

const Pagination = ({
  totalItems = 1,
  numberOfPages = 1,
  prev = true,
  next = true,
  pagePath = "/",
}) => {
  const router = useRouter();
  const [page, setPage] = useState(router.query.page ?? 1);

  const handleClick = (page) => {
    setPage(page ?? 1);
    router.push(`${pagePath}${page}`);
  };

  const handleClickPrev = () => {
    router.push(`${pagePath}${Number(page) - 1}`);
    setPage(Number(page) - 1);
  };

  const handleClickNext = () => {
    router.push(`${pagePath}${Number(page) + 1}`);
    setPage(Number(page) + 1);
  };

  return (
    <div className="flex w-full items-center gap-2 justify-center">
      {prev && (
        <ButtonPagination onClick={handleClickPrev}>&lt;</ButtonPagination>
      )}
      <div className="flex gap-2">
        {Math.ceil(totalItems / numberOfPages) > 0 &&
          Array.from(
            {
              length:
                Math.ceil(totalItems / numberOfPages) >= 10
                  ? 10
                  : Math.ceil(totalItems / numberOfPages),
            },
            (_, i) => i
          ).map((_, i) => (
            <ButtonPagination
              key={i}
              onClick={() => handleClick(i + 1)}
              bg={Number(page) === i + 1 ? "bg-orange-400" : "bg-black"}
            >
              {i + 1}
            </ButtonPagination>
          ))}
      </div>
      {next && (
        <ButtonPagination onClick={handleClickNext}>&gt;</ButtonPagination>
      )}
    </div>
  );
};

Pagination.propTypes = {
  totalItems: PropTypes.number,
  numberOfPages: PropTypes.number,
  prev: PropTypes.bool,
  next: PropTypes.bool,
  pagePath: PropTypes.string,
};

export default Pagination;
