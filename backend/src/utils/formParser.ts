import { IncomingMessage } from "node:http";
import formidable, { Fields, Files } from "formidable";

interface IFormData {
  fields: Fields;
  files: Files;
}

const formParser = async (req: IncomingMessage) => {
  return new Promise<IFormData>((resolve, reject) => {
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
