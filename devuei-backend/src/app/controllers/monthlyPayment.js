const logger = require("../utils/logger");
const { MonthlyPayment, Users } = require("../models");
const {
    BANK_NAME,
    BANK_CODE,
    BANK_AGENCY,
    COMPANY_ACCOUNT,
    COMPANY_CNPJ,
    COMPANY_NAME
} = process.env;

const read = async (req, res) => {
    try {
        const monthlyPayments = await MonthlyPayment.findAll({ MENSALIDADE_ID_USUARIO: req.user });

        const response = {
            bankData: {
                bankName: BANK_NAME,
                bankCode: BANK_CODE,
                bankAgency: BANK_AGENCY,
                companyAccount: COMPANY_ACCOUNT,
                companyCNPJ: COMPANY_CNPJ,
                companyName: COMPANY_NAME,
            },
            monthlyPayments
        }

        res.status(200).send({ response });
    } catch(error) {
        logger.error(error);
        res.status(400).send({ error: error.message });
    }
};
const update = async (req, res) => {
    try {
        const { paymentCode, paymentDate } = req.body;

        const user = await Users.findByPk(req.user);

        if (user.PERFIL) throw new Error("This profile cannot edit payments");

        const monthlyPayment = await Courses.findByPk(req.params.monthlyPaymentId);

        if (!monthlyPayment) throw new Error("Course not found.");

        const courseParsed = {
            CODIGO_PAGAMENTO: paymentCode,
            DATA_PAGAMENTO: paymentDate,
        };

        await monthlyPayment.update({ ...courseParsed });

        res.status(200).send({ monthlyPayment });
    } catch (error) {
        logger.error(error);
        res.status(400).send({ error: error.message });
    }
};

module.exports = {
    read,
    update,
};
