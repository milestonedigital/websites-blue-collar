// Run this once on your machine: node download-images.js
// Then commit everything to GitHub

import https from "https";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const OUT_DIR = path.join(__dirname, "client/public/images/projects");
const BASE = "https://files.manuscdn.com/user_upload_by_module/session_file/310419663028378508/";

const HERO_URL = "https://private-us-east-1.manuscdn.com/sessionFile/L2BPNsAlnEjbjeW7F4RwaB/sandbox/frbXFZEyU7jYe321ZadQM8-img-1_1772153745000_na1fn_aGVyby1iZw.jpg?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvTDJCUE5zQWxuRWpiamVXN0Y0UndhQi9zYW5kYm94L2ZyYlhGWkV5VTdqWWUzMjFaYWRRTTgtaW1nLTFfMTc3MjE1Mzc0NTAwMF9uYTFmbl9hR1Z5YnkxaVp3LmpwZz94LW9zcy1wcm9jZXNzPWltYWdlL3Jlc2l6ZSx3XzE5MjAsaF8xOTIwL2Zvcm1hdCx3ZWJwL3F1YWxpdHkscV84MCIsIkNvbmRpdGlvbiI6eyJEYXRlTGVzc1RoYW4iOnsiQVdTOkVwb2NoVGltZSI6MTc5ODc2MTYwMH19fV19&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=CK8oZfarbhzPo3kCEiqEXjxCumgXIPdbZqJb6eRKpZIcfj86LbpAeHV5CLnLyZXxbVnqipDz4-spkVBKn6X42~q~jBgYH~Osj687Nw42yFNpSGyBzkvZzgW-WTkJAGPRzkOlOjkM-8auG-8F~Tf~PuxrVRaNXBkbzkG124jyf-FwLpJBRoElfAKlm5DGPeE4S69y4n1VeClPafYCR4Fmk1VeGEbB8izUHlwqg6OrzyQv-WSkIfLjapG9mTKjy0J7KqYgbi~G0GZgW5rS8CrJ-TE2szzttZcMZ7APhXGLVkHJqSM59QXnR11T0NnOBl2VVd-pX3Oa0oZpICmvONRjMA__";

const SHOWCASE_URL = "https://private-us-east-1.manuscdn.com/sessionFile/L2BPNsAlnEjbjeW7F4RwaB/sandbox/frbXFZEyU7jYe321ZadQM8-img-3_1772153757000_na1fn_d29yay1zaG93Y2FzZQ.jpg?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvTDJCUE5zQWxuRWpiamVXN0Y0UndhQi9zYW5kYm94L2ZyYlhGWkV5VTdqWWUzMjFaYWRRTTgtaW1nLTNfMTc3MjE1Mzc1NzAwMF9uYTFmbl9kMjl5YXkxemFHOTNZMkZ6WlEuanBnP3gtb3NzLXByb2Nlc3M9aW1hZ2UvcmVzaXplLHdfMTkyMCxoXzE5MjAvZm9ybWF0LHdlYnAvcXVhbGl0eSxxXzgwIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNzk4NzYxNjAwfX19XX0_&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=FgkrYIME~nPAryUSN-UJogQ-QIEt9W-ShnMzpG-ops3-hoSIBYHmNIA20aUF~TH9YKQOHvoTcWOIAO1cwKQeAXIiWKSR4dLuiTgpBriqdHEoAVb3o~8rr6Vmn4fwf2aDKIMvrRdJ5UIlpw~btCgmI9ksZ5kcKJi9hLaz~up0FqtLIa7wh3Iik~lPdJqGyVTMT1JKxIUIWbmt2UX2CmlnnncRoDGF9sNkzmEi-h4A087CToAIQdEpXN8DrczZnDh~uDlbczhZNQsOsrlgR46n1i2MbiOlljnav23Il39SVKhLSE5Dcoe4TC6Wen48pFz-pbDUKibGDcZ0f10PL9T8hg__";

const PROJECT_FILES = [
  "wZNeURfuqeEZjgJz.png","UObVloDlRhBCIAWq.png","odjypnAZlWRIVutJ.png",
  "JnzdaiIvpDUwUBEB.png","IEsjCDAhnCzfgQhA.png","CqvwdSNrItphhkLJ.png",
  "zTPgJxrsvqWpsjTV.png","IgHZeMJYMCMSQtQI.png","ZKqsMARHwvaHoNoM.png",
  "CWzrGBnffAyUPgJf.png","XycRyhxLRMoRDsEE.png","yUIzAyBzsddUaGSx.png",
  "giEGdwMLaerDOjbC.png","TRtKeEliJPZGbPBg.png","mXSdyZPiKvcJSOOK.png",
  "qhUOAlgRMBJPnYfh.png","EzdNoUPoLbGbTxHo.png","jVtEQwkdPhMOWItW.png",
  "nREaYVepsihHSYJk.png","mggarYfSzBkUtsvw.webp","HQTfzNWeaQqmztky.png",
  "TOkYgsuHGenfIpqw.png","bUWWkkKZnplSdDqI.png","OEYOecLnClqwAAoe.png",
  "cVAmBFOSzSLWgTmW.png","VYXTXihGzqqxatsu.png","DFoZIkWFIpDVtWOQ.png",
  "owwaSwFLnBtNkXIR.png","TVktLTMjjyQqSUOM.png","flodoTvZIcpMYYXd.png",
  "yYFSboXczeNXtuOA.png","PfKmBOzOZLllXIMe.png","YYKVOEkZaXJisQJN.png",
  "tTnPUtSeHCgdPjOX.png","YcGYnoIYFbGPHZoG.png","aPOnFVhjptpyPTfx.png",
  "BYfflyRNzRcaRebr.png","ReInrjmbzWjqGybG.png","WDViDwbYDGCLOQyZ.webp",
  "WeMgDjTjxZAGfKMj.png","PYwfWUWqkYDSmNTc.webp","aYZUZiYljIrKtZii.png"
];

function download(url, dest) {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(dest);
    https.get(url, (res) => {
      if (res.statusCode === 301 || res.statusCode === 302) {
        file.close();
        fs.unlinkSync(dest);
        return download(res.headers.location, dest).then(resolve).catch(reject);
      }
      res.pipe(file);
      file.on("finish", () => { file.close(); resolve(); });
    }).on("error", (err) => {
      fs.unlink(dest, () => {});
      reject(err);
    });
  });
}

async function main() {
  fs.mkdirSync(OUT_DIR, { recursive: true });
  fs.mkdirSync(path.join(__dirname, "client/public/images"), { recursive: true });

  const tasks = [
    { url: HERO_URL, dest: path.join(__dirname, "client/public/images/hero-bg.jpg"), label: "hero-bg.jpg" },
    { url: SHOWCASE_URL, dest: path.join(__dirname, "client/public/images/showcase.jpg"), label: "showcase.jpg" },
    ...PROJECT_FILES.map(f => ({ url: BASE + f, dest: path.join(OUT_DIR, f), label: f }))
  ];

  let ok = 0, fail = 0;
  for (const { url, dest, label } of tasks) {
    try {
      await download(url, dest);
      const kb = Math.round(fs.statSync(dest).size / 1024);
      console.log(`✓ ${label} (${kb}KB)`);
      ok++;
    } catch (e) {
      console.log(`✗ ${label} — ${e.message}`);
      fail++;
    }
  }

  console.log(`\nDone: ${ok} downloaded, ${fail} failed`);
  if (ok > 0) {
    console.log("\nNext steps:");
    console.log("  git add .");
    console.log('  git commit -m "add local images"');
    console.log("  git push");
  }
}

main();
