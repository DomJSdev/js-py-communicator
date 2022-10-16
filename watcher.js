const watcher = require("fs").watch;

function file_watcher(file = "./python/bridge.txt", callback) {
  watcher(file, (event) => {
    let msg = `${file}: has ${event}d`;
    callback(msg);
  });
}

module.exports = {
  file_watcher,
};
