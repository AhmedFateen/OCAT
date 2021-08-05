const { LoginData } = require(`../Database`);

exports.submit = async (pass) => {
  LoginData.forge({
    username: pass.username,
    password: pass.password,
  }).save();

};
