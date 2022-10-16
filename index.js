const { readFile } = require("fs/promises");
const {
  command_text,
  command_Powershell,
  python_file_executer,
} = require("./commander");
const { file_watcher } = require("./watcher");

const file = "./python/bridge.txt";

file_watcher(file, async (msg) => {
  console.log(msg);
  let fileContent = await readFile(file, { encoding: "utf-8" });
  console.log(fileContent);
});

/*
das ist zum ausprobieren: 
hiermit kann man powershell commandos ausführen mittels Nodejs 
*/ 
function data() {
  command_Powershell("dir", "/s /b");
}

setTimeout(()=>{
  console.log('setTimeout now I will work')
  python_file_executer("./python/textRecognize.py")}, 6000);
