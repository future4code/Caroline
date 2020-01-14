import * as bcrypt from "bcrypt"

const encripto = async () => {
    const generateSalt = await bcrypt.genSalt(10);
    const password = "123456"
    const result = await bcrypt.hash(password,generateSalt );
    console.log("Senha codigicada: ", result)
    
}
