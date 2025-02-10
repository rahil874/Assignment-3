function calculateTicketPrice(age, showTime) {
    let standardTicketPrice = 12;
    let discount = 0;

    if (age > 60) {
        discount = 0.3;
    } else if (age < 12) {
        discount = 0.4;
    }
    if (showTime < 17) {
        discount = Math.max(discount, 0.2)
    }


    const finalTicketPrice = standardTicketPrice - (standardTicketPrice * discount);
    return finalTicketPrice.toFixed(2);
}

console.log(calculateTicketPrice(55, 14));