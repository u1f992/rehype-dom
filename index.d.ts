export default rehypeDOM;
/**
 * @type {import("unified").Plugin<[(document: Document, options: { jsdom: JSDOM, file: import("vfile").VFile }) => void | Promise<void>], import("unified").Settings>}
 */
declare const rehypeDOM: import("unified").Plugin<[(document: Document, options: {
    jsdom: JSDOM;
    file: import("vfile").VFile;
}) => void | Promise<void>], import("unified").Settings>;
import { JSDOM } from "jsdom";
