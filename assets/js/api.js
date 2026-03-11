import * as mindee from "mindee";
// If you're on CommonJS:
// const mindee = require("mindee");

const apiKey = "md_HtmpdWqcclVleRpGg7fdbpZ6ELtzNvKgo743bYRiZYk";
const filePath = "/path/to/the/file.ext";
const modelId = "768bc422-c507-4996-8781-58537bd98bcc";

// Init a new client
const mindeeClient = new mindee.Client(
  { apiKey: apiKey }
);

// Set product parameters
const params = {
  modelId: modelId,
};

// Load a file from disk
const inputSource = new mindee.PathInput({ inputPath: filePath });

// Send for processing
const response = await mindeeClient.enqueueAndGetResult(
  mindee.product.Ocr,
  inputSource,
  params,
);

// print a string summary
console.log(response.inference.toString());

// Access the result OCR pages
const crops = response.inference.result.pages;
