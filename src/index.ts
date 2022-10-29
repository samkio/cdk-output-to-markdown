export type CDKOutput = Record<string, Record<string, string>>;

/**
 * Converts a given CDK output object into a Markdown
 * string.
 *
 * Example:
 *
 * Input
 * {
 *   "StackName-1": {
 *     "OutputName-1": "OutputValue-1",
 *     "OutputName-2": "OutputValue-2"
 *   },
 *   "StackName-2": {
 *     "OutputName-3": "OutputValue-3",
 *     "OutputName-4": "OutputValue-4"
 *    }
 * }
 *
 * Output
 * # StackName-1
 *
 * |Name|Value|
 * |-|-|
 * |OutputName-1|OutputValue-1|
 * |OutputName-2|OutputValue-2|
 *
 * # StackName-2
 *
 * |Name|Value|
 * |-|-|
 * |OutputName-3|OutputValue-3|
 * |OutputName-4|OutputValue-4|
 *
 * @param cdkOutput CDK output object
 * @returns Markdown representation of the CDK output
 */
export const cdkOutputToMarkdown = (cdkOutput?: CDKOutput): string => {
  if (!cdkOutput) return "";
  return Object.keys(cdkOutput)
    .map(
      (stackName) =>
        `# ${stackName}\n\n|Name|Value|\n|-|-|\n${Object.keys(
          cdkOutput[stackName]
        )
          .map(
            (outputName) =>
              `|${outputName}|${cdkOutput[stackName][outputName]}|`
          )
          .join("\n")}`
    )
    .join("\n\n");
};