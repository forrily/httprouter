const Token = require('../model/Token').default


class TokenCache {
  check(intAuthToken, id) {
    return new Promise(function(resolve, reject) {
      Token.findOne({
        where: {
          intAuthToken: intAuthToken,
        }
      })
        .then(token => {
          if (null !== token) {
            resolve(true);
          } else {
            resolve(false);
          }
        })
        .catch(function(err){
          console.log(err.stack());
        })
    });

  }
}

exports.default = TokenCache;