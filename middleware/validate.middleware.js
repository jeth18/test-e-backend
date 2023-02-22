const Model = require('../schema/authorization')

async function validate(req, res, next) {
    const token = req.header("Authorization");
    if (!token) {
      return res.status(401).send('Not Authorization');
    }

    try {
      const response = await Model.AuthorizationModel.findOne({
        token: token
      })
      if(!response)  return res.status(401).send('Not Authorization');
      req.token.auth = response.token
      next()
    } catch (e) {
      console.log(e);
      res.status(400).json({ error: "Invalid token" });
    }
}

module.exports = {
  validate
}