const { client, config } = require(`../../utils`);
const { InternalServerError } = require(`restify-errors`);

exports.submit = (assessment) => new Promise((resolve, reject) => {
  // this function sends a request to the API
  // finish the logic to handle the response when returned from the API
  client.post(`/assessment/submit`,
    { assessment },
    (err, req, res, body) => {
      if (err) {

        return reject(err);

      }

      if (res.statusCode !== 200) {

        return reject(new InternalServerError(`Request Error`));

      }

      resolve(body.data);

    });
});

exports.getList = () => new Promise((resolve, reject) => {
  // this function sends a request to the API
  // finish the logic to handle the response when returned from the API
  client.get(`/assessment/list`,
    (err, req, res, body) => {
      if (err) {
        return reject(err);
      }

      if (res.statusCode !== 200) {
        return reject(new InternalServerError(`Request Error`));
      }

      resolve(body.data.assessments);
    });

  exports.deleteSoft = (id) => new Promise((resolve, reject) => {
    // this function sends a request to the API
    // finish the logic to handle the response when returned from the API
    client.post(`/assessment/list`,
      { id },
      (err, req, res, body) => {
        if (err) {

          return reject(err);

        }

        if (res.statusCode !== 200) {

          return reject(new InternalServerError(`Request Error`));

        }

        resolve(body.data);

      });
  });

});
