// read input field value
function getInputFieldValue(inputFieldId) {
    const inputField = document.getElementById(inputFieldId);
    const inputFieldValue = inputField.value;
    inputField.value = ''; //value read kore ekta variable e rakhar por reset korte hoy
    return inputFieldValue;
}

// read price from price element
function getValueFromElement(elementValue) {
    const previousPrice = parseFloat((document.getElementById(elementValue)).innerText);
    console.log(previousPrice);
    return previousPrice;
}

function setElementValue(elementId, newValue) {
    const elementValue = document.getElementById(elementId);
    elementValue.innerText = newValue;
}

function discountCalculator(value) {
    // 30% discount
    const discount = value * 0.3;
    console.log(discount);
    return discount;
}

document.getElementById('btn-discount').addEventListener('click', function () {
    const currentPrice = getValueFromElement('previous-price');

    const discountCode = getInputFieldValue('discount-code');

    if (discountCode.toUpperCase() === 'DESC30') {
        const discountAmount = discountCalculator(currentPrice);

        const afterDiscountPrice = currentPrice - discountAmount;

        const priceWithDiscount = setElementValue('discount-price', afterDiscountPrice);

        return priceWithDiscount;
    }
    else {
        return (setElementValue('discount-price', currentPrice));
    }
})