const fs = require("fs-extra");
const path = require("path");
const md5 = require("md5");
const { minify } = require("terser");

const distPath = path.resolve(__dirname, "dist");
const srcPath = path.resolve(__dirname, "src");
const horlogeJsPath = path.resolve(srcPath, "js", "horloge.js");
const indexJsPath = path.resolve(srcPath, "js", "index.js");
const indexHtmlPath = path.resolve(srcPath, "index.html");
const indexHtmlDistPath = path.resolve(distPath, "index.html");
const appJsDistPath = path.resolve(distPath, "app.js");

async function removeAndMkdir() {
  await fs.remove(distPath);
  await fs.mkdir(distPath);
}

async function buildJs() {
  // en série
  // const bufferHorloge = await fs.readFile(horlogeJsPath);
  // const bufferIndex = await fs.readFile(indexJsPath);

  // en parallèle
  const buffers = await Promise.all([
    fs.readFile(horlogeJsPath),
    fs.readFile(indexJsPath),
  ]);

  const content = Buffer.concat(buffers).toString("utf-8");

  const { code } = await minify(content);

  await fs.writeFile(appJsDistPath, code);
}

async function buildHtml() {
  let content = await fs.readFile(indexHtmlPath, { encoding: "utf-8" });
  content = content.replace(
    /<script.*<\/script>/s,
    '<script src="app.js"></script>'
  );

  await fs.writeFile(indexHtmlDistPath, content);
}

async function main() {
  try {
    await removeAndMkdir();
    // exécuter d'abord buildJs puis buildHtml (en série)
    // await buildJs();
    // await buildHtml();

    // exécuter buildJs et buildHtml en même temps (en parallèle)
    await Promise.all([buildJs(), buildHtml()]);
  } catch (err) {
    console.log(err);
  }
}

main();
