/*
https://h6i.org/blog/posts/astro-budoux-linebreak
*/

import { HTMLProcessingParser, jaModel } from 'budoux';
import type { HTMLProcessingParser as HTMLProcessingParserType } from 'budoux';
import { win } from 'budoux/dist/win';

let cachedParser: HTMLProcessingParserType | null = null;

export function getBudouxParser() {
  if (!cachedParser) {
    const wbr = win.document.createElement('wbr');
    cachedParser = new HTMLProcessingParser(jaModel, {
      separator: wbr,
    });
  }
  return cachedParser;
}

export const budouxProcess = (html: string): string => {
  const parser = getBudouxParser();
  const processedHtml = parser.translateHTMLString(html);

  // span>タグ削除
  return processedHtml.replaceAll(/<span[^>]*>/g, '').replaceAll('</span>', '');
};
