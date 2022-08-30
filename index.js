const validateCCN = (cardNumber) => {

    if( String(cardNumber).length != 16 ) return {
            errorCode: true,
            info: 'The credit card number is not valid!, 16 digits number required',
        }

    let checksum = 0;

    let cardValidation = { 
        errorCode: false, 
        info: ''
    };

    const cardNumberArray = String(cardNumber)
        .split('')
        .map((num) => {
            return Number(num);
        });

    for (let i = 0; i < cardNumberArray.length; i += 2) {
        cardNumberArray[i] = cardNumberArray[i] * 2;
        if (cardNumberArray[i] > 9) {
            cardNumberArray[i] = cardNumberArray[i] - 9;
        }
    }

    cardNumberArray.map((digit) => (checksum += digit));

    if (checksum % 10 == 0) {
        cardValidation = { 
            errorCode: false, 
            info: 'The credit card number is valid!'
        };
        return cardValidation;
    } else {
        cardValidation = {
            errorCode: true,
            info: 'The credit card number is not valid!',
        };
        return cardValidation;
    }
};

module.exports = validateCCN;