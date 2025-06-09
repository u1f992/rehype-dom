// @ts-check

import assert from "node:assert";
import test from "node:test";

import rehype from "rehype";
import rehypeDOM from "./index.js";

test("rehypeDOM", async () => {
  assert.strictEqual(
    (
      await rehype()
        .use(rehypeDOM, async (document, { jsdom, file }) => {
          document.getElementsByTagName("body")[0].textContent = "hello";
        })
        .process("<html><head></head><body></body></html>")
    ).toString(),
    "<html><head></head><body>hello</body></html>",
  );
});
