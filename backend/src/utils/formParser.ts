import { IncomingMessage } from "node:http";
import { IncomingForm, Fields, Files } from "formidable";

interface IFormData {
  fields: Fields;
  files: Files;
}

const formParser = async (req: IncomingMessage) => {
  return new Promise<IFormData>((resolve, reject) => {
    try {
      const form = new IncomingForm();
      form.parse(req, (err, fields, files) => {
        if (err) {
          reject(err);
        } else {
          resolve({ fields, files });
        }
      });
    } catch(e) {
      reject(e);
    }
  });
}

export default formParser;
