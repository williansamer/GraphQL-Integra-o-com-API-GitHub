const generator = require("../../helpers/generator")
const NoPermitionError = require("../../errors/noPermissionError")

module.exports = async ({req})=>{
    const token = await req.headers.authorization;

    return {
      validate(){
        try {
          const {id} = generator.verifyToken(token); //{id} === {id: id}

          return id
        } catch (error) {
          throw new NoPermitionError("Token Inválido ou inexistente")
        }
      }
    }
  }