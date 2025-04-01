const numKm = parseInt(
  prompt("Quanti chilometri deve percorrere?\n(inserire un valore numerico)")
);
const userAge = parseInt(
  prompt("Qaunti anni ha?\n(inserire un valore numerico)")
);
const kmPrice = 0.21;
const minorsDiscount = 20;
const over65Discount = 40;

console.log("Numero km: ", numKm);
console.log("User Age: ", userAge);

let messageOutput;

if (!isNaN(numKm) && !isNaN(userAge)) {
  let humanPrice;
  let discountedPrice;
  let discount;
  const ticketPrice = numKm * kmPrice;

  if (userAge < 18) {
    discount = (ticketPrice * minorsDiscount) / 100;
    discountedPrice = ticketPrice - discount;
    humanPrice = "€ " + discountedPrice.toFixed(2);
    messageOutput = `Il costo del suo biglietto è di ${humanPrice}.\n\nApplicato sconto minorrenni del ${minorsDiscount}%`;

    console.log("ticketPrice", ticketPrice);
    console.log("discount", discount);
    console.log("discountedPrice", discountedPrice);
    console.log("humanPrice", humanPrice);
    console.log(messageOutput);
  } else {
  }
} else {
  console.log("valori non corretti");
}

alert(messageOutput);
