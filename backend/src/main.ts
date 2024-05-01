import { createServer } from "node:http";
import { IncomingMessage, ServerResponse } from "node:http";
import { readFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import { marked } from "marked";
import { createInterface } from "readline";
import { createReadStream } from "fs";

import formParser from "./utils/formParser.js";
import streamAnalyser from "./utils/streamAnalyser.js";

createServer(router).listen(8126, () => {
  console.log("Listening on http://localhost:8126");
});

async function router(req: IncomingMessage, res: ServerResponse) {
  try {
    const url = new URL(req.url ?? "/", `http://${req.headers["host"]}`);

    switch (`${req.method} ${url.pathname}`) {
      case "GET /api/challenge":
        res.writeHead(200);
        res.write(
          await marked(
            await readFile(
              fileURLToPath(new URL("../../CHALLENGE.md", import.meta.url)),
              "utf8"
            ),
            { async: true }
          )
        );
        break;

      case "POST /api/file":
        const { files } = await formParser(req);

        if (!files.file) {
          throw new Error("No file uploaded!");
        }
        const fileStream = files.file[0].filepath;
        const fileReader = createInterface({
          input: createReadStream(fileStream),
          output: process.stdout,
          terminal: false
        });
        const result = await streamAnalyser(fileReader);

        res.writeHead(200);
        res.write(JSON.stringify(result));
        break;

      default:
        res.writeHead(404);
        res.write("Not Found");
        break;
    }
  } catch (e) {
    console.error(e);
    res.writeHead(500);
    res.write("Something went wrong! Check the console...");
  } finally {
    res.end();
  }
}
