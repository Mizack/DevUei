const logger = require("./logger");
const calculateModule11 = require("../helpers/calculateModule11");

module.exports = (digitableLine) => {
    try {
        const paymentValue = digitableLine.slice(37);
        const dueDateFactor = digitableLine.slice(33, 37);
        const position20to24 = digitableLine.slice(4, 9);
        const position25to34 = digitableLine.slice(10, 20);
        const position35to44 = digitableLine.slice(21, 31);

        const ticketNumberWithoutDV = digitableLine.slice(0, 4)
            + dueDateFactor
            + paymentValue
            + position20to24
            + position25to34
            + position35to44;


        const dv = calculateModule11(ticketNumberWithoutDV);

        const barCode = digitableLine.slice(0, 4)
            + dv
            + dueDateFactor
            + paymentValue
            + position20to24
            + position25to34
            + position35to44;

        return barCode;
    } catch (error) {
        logger.error(error);
    }
};
