const OK = (data = null, msg = "thành công") => {
  return {
    result: true,
    msg: msg,
    data,
  };
};

const Fail = (err) => {
  return {
    result: false,
    msg: err.message,
  };
};

const FailWithData = (msg, data = null) => {
  var result = {
    result: false,
    msg: msg,
  };
  if (data != null) {
    result.data = data;
  }
  return result;
};

module.exports = {
  OK,
  Fail,
  FailWithData,
};
