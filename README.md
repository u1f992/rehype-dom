# @u1f992/rehype-dom

@u1f992/rehype-dom is a meta-plugin that converts a [hast](https://github.com/syntax-tree/hast) into DOM, applies DOM manipulations, and then converts it back to hast.

While it would be ideal to perform all operations directly on hast, its API is not as widely known as the DOM's. This plugin allows you to perform familiar DOM operations within a rehype plugin.

## Example

```javascript
import assert from "node:assert";
import test from "node:test";

import rehype from "rehype";
import rehypeDOM from "@u1f992/rehype-dom";

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
```
