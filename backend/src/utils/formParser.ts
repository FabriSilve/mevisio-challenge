import { IncomingMessage } from "node:http";
import formidable from "formidable";

const formParser = async (req: IncomingMessage) => {
  return new Promise((resolve, reject) => {
    const form = new formidable.IncomingForm();
    form.parse(req, (err, fields, files) => {
      if (err) {
        reject(err);
      } else {
        resolve({ fields, files });
      }
    });
  });
}

export default formParser;
