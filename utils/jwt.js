const jwt = require("jsonwebtoken");

const secretKey = process.env.JWT_SECRET_KEY;

module.exports = {
  sign: (data) => {
    const token = jwt.sign(data, secretKey, { expiresIn: "24h" });

    return token;
  },

  verify: (token) => {
    try {
      const data = jwt.verify(token, secretKey);

      return data;
    } catch (error) {
      return null;
    }
  },
};
