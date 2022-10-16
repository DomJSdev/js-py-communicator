const childProcess = require("child_process");

const get_cmd_file_path = () => process.env.ComSpec;

const command_text = function (text) {
  process.stdout.write(text + "\n");
};

function command_Powershell(code, optionList = "") {
  const command = childProcess.spawn(code, [optionList], {
    cwd: __dirname,
    shell: true,
  });
  command.stdout.on("data", (data) => {
    console.log("data: ", data.toString("utf8"));
  });
  command.stderr.on("data", (data) => {
    console.log("error: ", data.toString("utf8"));
  });
  command.on("close", (close) => {
    console.log("child is closed with: ", close);
  });
}

function python_file_executer(file) {
  console.log("python_file_executer now I will execute python " + file);
  childProcess.execFile("python", [file], (error, stdout, stderr) => {
    if (error) {
      throw error;
    }
    console.log(stderr);
    console.log(stdout);
  });
}

module.exports = {
  command_Powershell,
  command_text,
  get_cmd_file_path,
  python_file_executer,
};
