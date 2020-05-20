export default ({ config }) => {
  const fs = require("fs");
  const dirname = "./www/";
  const dirname2 = "./www/changes/";
  const files = fs.readdirSync(dirname).filter(x => x.includes("html"));
  const changes = fs.readdirSync(dirname2).filter(x => x.includes("txt"));  
  const moveScript =  (x, y) => {
      const bundle = fs.readFileSync(y + x, "utf8");
      const escaped = JSON.stringify(bundle);
      const js = `${escaped}`;
      return js;
    };
  const ex =
    "{\n" +
    files.map(x => `"${x.slice(-8).split(".")[0]}": ${moveScript(x, dirname)},`).join("\n") +
    "}";
  const res = "export default " + ex;
  fs.writeFileSync("./src/data/output/filelist.js" , res);
  
  const ex2 = "[\n" + 
    files.map(x => `{ id: "${x.slice(-8).split(".")[0]}", name: "${x.replace(/_/g, " ").split(" MeG-CLS")[0]}", }`).join(",\n") +
    ",\n ]";
  const res2 = "export default " + ex2;
  fs.writeFileSync("./src/data/output/guidelineList.ts" , res2);
  
  const ex3 = "[\n" + 
    changes.map(x => `{ id: ${x.split(".")[0]}, name: ${moveScript(x, dirname2)}, }`).join(",\n") +
    ",\n ]";

  const res3 = "export default " + ex3;
  fs.writeFileSync("./src/data/output/changeList.ts" , res3);
  
  return {
    ...config,
  };
};