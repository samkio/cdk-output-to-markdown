# cdk-output-to-markdown

Small package to convert CDK output JSON to Markdown

## Install

To use globally as a command line app:
`npm install -g cdk-output-to-markdown`

To use within a package or programtically:
`npm install --save-dev cdk-output-to-markdown`

## Command line usage

`cdkout2md [options]`

### Command line options

```
Options:
      --help           Show help                              [boolean]
      --version        Show version number                    [boolean]
  -i, --input                                       [string] [required]
  -o, --output                                      [string] [required]
      --ignore-errors                                         [boolean]
```

### Example

`cdkout2md -i cdk.output.json -o cdk.output.md --ignore-errors`

## API Reference

```javascript
import { cdkOutputToMarkdown } from "cdk-output-to-markdown";

// Passing in an Object
const markdownAsString = cdkOutputToMarkdown({
  "StackName-1": {
    "OutputName-1": "OutputValue-1",
    "OutputName-2": "OutputValue-2",
  },
  "StackName-2": {
    "OutputName-3": "OutputValue-3",
    "OutputName-4": "OutputValue-4",
  },
});
```
