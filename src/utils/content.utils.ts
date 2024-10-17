import { ADD_BUTTON_TEXT } from "@src/const/title.const";

type ExtractedData = {
  word: string;
  translation: string;
  details: string;
  link: string;
};

const copyToClipboard = async (text: string) => {
  try {
    await navigator.clipboard.writeText(text);
    console.log("Data copied to clipboard!");
  } catch (err) {
    console.error("Failed to copy: ", err);
  }
};

export const filterHebrewLetters = (input: string): string => {
  // Regular expression to match Hebrew letters
  const hebrewRegex = /[\u0590-\u05FF]/g;

  // Match and join the Hebrew letters in the string
  const filteredHebrew = input.match(hebrewRegex)?.join("") || "";

  return filteredHebrew;
};

export const getInfo = async () => {
  const wordRawContent = document.querySelector("h2");

  const wordRaw = wordRawContent?.textContent || "";

  const hebWord = filterHebrewLetters(wordRaw);

  const translationRawContent = document.querySelector(".lead");
  const translationRaw = translationRawContent?.textContent || "";
  const translation = translationRaw.slice(
    0,
    translationRaw.length - ADD_BUTTON_TEXT.length,
  );

  const detailsContentRaw = document.querySelector(
    "body > div > div.container > p:nth-child(3)",
  );
  const detailsContent = detailsContentRaw?.textContent || "";

  const extractedData: ExtractedData = {
    word: hebWord,
    translation,
    details: detailsContent,
    link: window.location.href,
  };

  console.log(extractedData);

  // Convert object to an array
  const rowData = [
    extractedData.word,
    extractedData.translation,
    extractedData.details,
    extractedData.link,
  ];

  // Join array values with tabs or commas for manual copying (for tab-separated):
  const tabSeparatedString = rowData.join("\t");

  await copyToClipboard(tabSeparatedString);
};
