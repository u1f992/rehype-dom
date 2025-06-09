// @ts-check

import { JSDOM } from "jsdom";
import rehype from "rehype";

/**
 * @type {import("unified").Plugin<[(document: Document, options: { jsdom: JSDOM, file: import("vfile").VFile }) => void | Promise<void>], import("unified").Settings>}
 */
const rehypeDOM = (transform) => async (tree, file) => {
  const jsdom = new JSDOM(rehype().stringify(tree));
  await transform(jsdom.window.document, { jsdom, file });
  return rehype().parse(jsdom.serialize());
};
export default rehypeDOM;
