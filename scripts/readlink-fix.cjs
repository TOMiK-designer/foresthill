const fs = require("fs");

if (!fs.__forestHillReadlinkFix) {
  const originalReadlink = fs.readlink;
  const originalReadlinkSync = fs.readlinkSync;
  const originalPromisesReadlink = fs.promises && fs.promises.readlink;

  function normalizeReadlinkError(error) {
    if (error && error.code === "EISDIR") {
      error.code = "EINVAL";
      error.message = error.message.replace("EISDIR", "EINVAL");
    }
    return error;
  }

  fs.readlink = function readlink(path, options, callback) {
    if (typeof options === "function") {
      return originalReadlink.call(fs, path, (error, result) => {
        options(normalizeReadlinkError(error), result);
      });
    }

    return originalReadlink.call(fs, path, options, (error, result) => {
      callback(normalizeReadlinkError(error), result);
    });
  };

  fs.readlinkSync = function readlinkSync(path, options) {
    try {
      return originalReadlinkSync.call(fs, path, options);
    } catch (error) {
      throw normalizeReadlinkError(error);
    }
  };

  if (originalPromisesReadlink) {
    fs.promises.readlink = async function readlink(path, options) {
      try {
        return await originalPromisesReadlink.call(fs.promises, path, options);
      } catch (error) {
        throw normalizeReadlinkError(error);
      }
    };
  }

  fs.__forestHillReadlinkFix = true;
}
