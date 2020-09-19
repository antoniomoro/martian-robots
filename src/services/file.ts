import fs from 'fs';

class FileService {
  public static getInputValues(): string {
    return fs.readFileSync(`${__dirname}/../../input.txt`).toString();
  }
}

export default FileService;
