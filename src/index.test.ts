import { cdkOutputToMarkdown } from ".";

describe("cdkOutputToMarkdown", () => {
  test("full", () => {
    expect(
      cdkOutputToMarkdown({
        "StackName-1": {
          "OutputName-1": "OutputValue-1",
          "OutputName-2": "OutputValue-2",
        },
        "StackName-2": {
          "OutputName-3": "OutputValue-3",
          "OutputName-4": "OutputValue-4",
        },
      })
    ).toEqual(`# StackName-1

|Name|Value|
|-|-|
|OutputName-1|OutputValue-1|
|OutputName-2|OutputValue-2|

# StackName-2

|Name|Value|
|-|-|
|OutputName-3|OutputValue-3|
|OutputName-4|OutputValue-4|`);
  });

  test("undefined", () => {
    expect(cdkOutputToMarkdown(undefined)).toEqual("");
  });
});
