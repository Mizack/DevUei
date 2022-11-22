const calculateModule11 = require("../helpers/calculateModule11");
const logger = require("./logger");

module.exports = (bankCode, companyCNPJ, value, paymentDay, userCpf) => {
    const cnpj = companyCNPJ.slice(0, 8);
    const cpf = userCpf.slice(0, 8);
    let digitableLine = bankCode + "9";

    const position05to09 = (Math.floor(Math.random() * (99999 - 00000)) + 00000).toString();
    digitableLine += position05to09.padStart(5, "0");

    //Primeiro dígito verificador
    const position10 = calculateModule11(digitableLine);
    digitableLine += position10;

    //CNPJ + 2 random
    const position11to20 = cnpj + (Math.floor(Math.random() * (99 - 00)) + 00).toString();
    digitableLine += position11to20.padStart(10, "0");


    //Segundo dígito verificador
    const position21 = calculateModule11(digitableLine);
    digitableLine += position21;
    
    //CPF usuário + 2 random
    const position22to31 = cpf + (Math.floor(Math.random() * (99 - 00)) + 00).toString();
    digitableLine += position22to31.padStart(10, "0");
    
    //Terceiro dígito verificador
    const position32 = calculateModule11(digitableLine);
    digitableLine += position32;

    //Dígito verificador geral
    const position33 = calculateModule11(digitableLine);
    digitableLine += position33;

    const differenceBetweenDays = new Date(paymentDay) - new Date("10/07/1997");
    const differenceInDays = Math.ceil(differenceBetweenDays / (1000 * 60 * 60 * 24) - 1).toString();
    digitableLine += differenceInDays.padStart(4, "0");
    logger.info(differenceInDays)
    const valueParse = value.toString().replace(".", "").padStart(10, "0");
    digitableLine += valueParse;

    return digitableLine;
};