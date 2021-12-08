require("dotenv").config();
const jwt = require("jsonwebtoken");

module.exports = {
  createToken(id){
    return jwt.sign(id, process.env.SECRET, {expiresIn: "1d"});
  },
  verifyToken(token){ console.log(token)
    return jwt.verify(token, process.env.SECRET)
  }
}