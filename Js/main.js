const numKm = parseInt(
  prompt("Quanti chilometri deve percorrere?\n(inserire un valore numerico)")
);
const userAge = parseInt(
  prompt("Qaunti anni ha?\n(inserire un valore numerico)")
);
const kmPrice = 0.21;
const percentyMinorsDiscount = 20;
const percentOver65Discount = 40;

console.log("Numero km: ", numKm);
console.log("User Age: ", userAge);

let messageOutput;

if (!isNaN(numKm) && !isNaN(userAge)) {
  let humanPrice;
  let discountedPrice;
  let discount;
  const ticketPrice = numKm * kmPrice;

  // calcolo costo biglietto se l'utente è minorenne
  if (userAge < 18) {
    discount = (ticketPrice * percentyMinorsDiscount) / 100;
    discountedPrice = ticketPrice - discount;
    humanPrice = "€ " + discountedPrice.toFixed(2);
    messageOutput = `Il costo del suo biglietto è di ${humanPrice}.\n\nApplicato sconto minorrenni del ${minorsDiscount}%`;

    console.log("ticketPrice", ticketPrice);
    console.log("discount", discount);
    console.log("discountedPrice", discountedPrice);
    console.log("humanPrice", humanPrice);
    console.log(messageOutput);
  }

  // calcolo costo biglietto se l'utente ha l'età maggiore o ugule a 65 anni
  else if (userAge >= 65) {
    discount = (ticketPrice * percentOver65Discount) / 100;
    discountedPrice = ticketPrice - discount;
    humanPrice = "€ " + discountedPrice.toFixed(2);
    messageOutput = `Il costo del suo biglietto è di ${humanPrice}.\n\nApplicato sconto Over 65 del ${over65Discount}%`;

    console.log("ticketPrice", ticketPrice);
    console.log("discount", discount);
    console.log("discountedPrice", discountedPrice);
    console.log("humanPrice", humanPrice);
    console.log(messageOutput);
  }

  // calcolo costo del bisognetti per gli utenti che hanno l'età compresa tra 18 e 64 anni
  else {
    humanPrice = "€ " + ticketPrice.toFixed(2);
    messageOutput = `Il costo del suo biglietto è di ${humanPrice}`;

    console.log("humanPrice", humanPrice);
    console.log(messageOutput);
  }
}

// Verifico il corretto inserimento di ogni singolo input
else {
  if (isNaN(numKm) && isNaN(userAge)) {
    messageOutput =
      "entrambi i valori sono errati, devono essere un valore numerico";
  } else if (isNaN(numKm)) {
    messageOutput =
      " Il valore dei Km è errato, deve essere un valore numerico";
  } else {
    messageOutput =
      " Il valore dell'età è errato, deve essere un valore numerico";
  }
  console.log("valori non corretti");
}

alert(messageOutput);
