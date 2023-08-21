const mongoose = require("mongoose")

async function main(){
  try{
    await mongoose.connect(
      "mongodb+srv://desenvolvedor:desenvolvedor@cluster0.lm76wz5.mongodb.net/?retryWrites=true&w=majority"
    )
  }
  catch(error){
    console.log(`ERRO: ${error}`)
  }
}

module.exports = main