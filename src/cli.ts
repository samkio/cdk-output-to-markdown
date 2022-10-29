#!/usr/bin/env node

import yargs from "yargs/yargs";
import fs from "fs";
import { CDKOutput, cdkOutputToMarkdown } from ".";

const argv = yargs(process.argv.slice(2))
  .options({
    input: { type: "string", demandOption: true, alias: "i" },
    output: { type: "string", demandOption: true, alias: "o" },
    "ignore-errors": { type: "boolean", demandOption: false, defalt: false },
  })
  .parseSync();

try {
  const inputData = fs.readFileSync(argv.input, "utf-8");
  const inputJSON = JSON.parse(inputData) as CDKOutput;
  const markdownData = cdkOutputToMarkdown(inputJSON);
  fs.writeFileSync(argv.output, markdownData);
} catch (error) {
  console.error(`Error occurred converting: ${argv.input} to ${argv.output}`);
  console.error(error);
  if (!argv["ignore-errors"]) {
    throw error;
  }
}
