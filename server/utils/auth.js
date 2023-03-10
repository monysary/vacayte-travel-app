const jwt = require("jsonwebtoken");

const secret = process.env.SECRET;

module.exports = {
  authMiddleware: function ({ req }) {
    let token = req.body.token || req.query.token || req.headers.authorization;

    if (req.headers.authorization) {
      token = token.split(" ").pop().trim();
    }

    if (!token) {
      return req;
    }

    try {
      const { data } = jwt.verify(token, secret, { maxAge: "5h" });
      req.user = data;
    } catch {
      console.log("Invalid token");
    }

    return req;
  },
  signToken: function ({ _id, email, firstName, lastName }) {
    const payload = { _id, email, firstName, lastName };
    return jwt.sign({ data: payload }, secret, { expiresIn: "5h" });
  },
};
