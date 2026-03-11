// https://docs.astro.build/en/guides/routing/#the-page-prop
import type { Page } from 'astro';

export interface PaginationResultType {
  pageNumbers: number[];
  currentPage: number;
  lastPage: number;
}

export const getPageNumbers = (
  //
  currentPage: number,
  lastPage: number,
  maxPage = 5,
  rangePage = 2,
): number[] => {
  let startPage = Math.max(1, currentPage - rangePage);
  const endPage = Math.min(lastPage, startPage + maxPage - 1);
  if (endPage - startPage < maxPage - 1) {
    startPage = Math.max(1, endPage - maxPage + 1);
  }
  return Array.from({ length: endPage - startPage + 1 }, (_, i) => startPage + i);
};

export const getPaginationData = (
  //
  page: Page,
  maxPage = 5,
  rangePage = 2,
): PaginationResultType => {
  const pageNumbers = getPageNumbers(page.currentPage, page.lastPage, maxPage, rangePage);
  return {
    pageNumbers,
    currentPage: page.currentPage,
    lastPage: page.lastPage,
  };
};
