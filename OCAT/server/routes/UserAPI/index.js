const router = require(`express`).Router();
const { Users } = require(`../../../../API/src/microservices/Database`);
const bcrypt = require(`bcrypt`);

router.post(`/login`, async (req, res, next) => {
  try {
    const { pass } = req.body;
    // eslint-disable-next-line object-shorthand
    let user = await Users.where({ username: pass.username }).fetch({ require: false }).then((resData) =>
      resData);
    if (user) {
      user = user.serialize();
      const validPass = await bcrypt.compare(pass.password, user.hash);
      if (validPass) {
        if (user.is_supervisor) {
          res.status(200).json(`You have supervisor powers!`);
          return;
        }

        res.status(200).json(`Valid username and password!`);
        return;

      }
      res.json(`wrong password!`);
      return;

    }
    res.status(200).json(`User not found`);
    return;

  } catch (error) {
    next(error);
  }
});

exports.router = router;
exports.path = `/api/assessment`;
