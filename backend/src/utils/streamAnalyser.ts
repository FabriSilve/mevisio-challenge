import { EventEmitter } from "stream";

import shouldIgnoreWord from "./shouldIgnoreWord.js";

const streamAnalyser = async (fileReader: EventEmitter) => {
  return new Promise((resolve, reject) => {
    const wordsMap: Record<string, number> = {};

    try {
      fileReader.on('line', (line: string) => {
        line
          .replace(/[^a-zA-Z ]/g, '')
          .split(/\s+/)
          .forEach((word) => {
            const lower = word.toLowerCase();
            if (shouldIgnoreWord(lower)) return;
            if (wordsMap[lower]) wordsMap[lower]++;
            else wordsMap[lower] = 1;
          });
      });

      fileReader.on('close', () => {
        const wordsArray = Object.keys(wordsMap)
          .map((key) => ({
            text: key,
            value: wordsMap[key],
          }))
          .sort((a, b) => b.value - a.value);
        resolve(wordsArray)
      });
    } catch (e) {
      reject(e);
    }
  });
}

export default streamAnalyser;
