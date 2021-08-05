const { UserService } = require(`../../microservices`);
const { ResponseHandler } = require(`../../utils`);

const BASE_URL = `/assessment`;

module.exports = server => {

  server.post(
    `${BASE_URL}/login`,
    async (req, res, next) => {
      try {
        const { pass } = req.params;

        UserService.submit(await pass);
        ResponseHandler(
          res,
          `Submitted pass`,
          {},
          next,
        );
      } catch (err) {
        next(err);
      }
    },
  );

};
