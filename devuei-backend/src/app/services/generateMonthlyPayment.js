const { MonthlyPayment, UsersCourses, Users } = require("../models");
const logger = require("../utils/logger");
const digitableLineGenerator = require("../utils/digitableLineGenerator");
const ticketGenerator = require("../utils/ticketGenerator");
const {
    BANK_CODE,
    COMPANY_CNPJ,
} = process.env;

module.exports = async () => {
    const usersCourses = await UsersCourses.findAll({
        where: {
            SITUACAO: 1,
            SOMENTE_BASICO: 0
        }
    });

    logger.info(`User active courses: ${JSON.stringify(usersCourses)}`);
    for (const userCourse of usersCourses) {
        const date = new Date();
        const month = new Date(new Date(date.setMonth(date.getMonth() + 1, 1)).setHours(0, 0, 0, 0));
        const paymentDay = new Date(month.setDate(month.getDate() + userCourse.DIA_VENCIMENTO - 1));

        const user = await Users.findByPk(userCourse.CURSO_USUARIO_ID_USUARIO);

        const digitableLine = digitableLineGenerator(BANK_CODE, COMPANY_CNPJ, parseFloat(process.env.VALUE), paymentDay, user.CPF);
        const ticket = ticketGenerator(digitableLine);    

        await MonthlyPayment.create({
            DATA_VENCIMENTO: paymentDay,
            CODIGO_BARRAS: ticket,
            LINHA_DIGITAVEL: digitableLine,
            VALOR: parseFloat(process.env.VALUE),
            MENSALIDADE_ID_USUARIO: userCourse.CURSO_USUARIO_ID_USUARIO
        });
    }
};
