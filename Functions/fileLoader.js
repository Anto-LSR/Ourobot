import glob from "glob";
import { promisify } from "util";
const proGlob = promisify(glob);
async function loadFiles(dirName) {
  const Files = await proGlob(`${dirName}/**/*.js`);
  return Files;
}

export { loadFiles };
