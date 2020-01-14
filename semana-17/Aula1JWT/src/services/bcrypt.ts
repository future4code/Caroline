import * as bcrypt from "bcrypt"

const encripto = async () => {
    const generateSalt = await bcrypt.genSalt(10);
    console.log(generateSalt)
    const password = "123456"
    const result = await bcrypt.hash(password,generateSalt );
    console.log("Senha codificada: ", result)
    
    const isPasswordRight = await bcrypt.compare("123456", "string imprimida criptografada");
    console.log(isPasswordRight)

    const isPasswordWrong = await bcrypt.compare("1AAAA234H56", "string imprimida criptografada");
    console.log(isPasswordWrong)
}

