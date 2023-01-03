const updateVal = (e, el) => {
  el.innerText = e.target.value;
};

// Card Number
const cardNumber = document.getElementById("input-card-number");
const cardNumberDisplay = document.querySelector(".card-text__number");
cardNumber.addEventListener("input", (e) => {
  updateVal(e, cardNumberDisplay);
});

// Name
const cardFirst = document.getElementById("input-card-first-name");
const cardFirstDisplay = document.querySelector(".card-text__first");
cardFirst.addEventListener("input", (e) => {
  updateVal(e, cardFirstDisplay);
});
const cardLast = document.getElementById("input-card-last-name");
const cardLastDisplay = document.querySelector(".card-text__last");
cardLast.addEventListener("input", (e) => {
  updateVal(e, cardLastDisplay);
});

// Expiration
const cardExpiration = document.getElementById("input-card-expiration");
const cardExpirationDisplay = document.querySelector(".card-text__expiry div");
cardExpiration.addEventListener("input", (e) => {
  updateVal(e, cardExpirationDisplay);
});

// CVV
const cardCvv = document.getElementById("input-card-cvv");
const cardCvvDisplay = document.querySelector(".card-text__cvv div");
cardCvv.addEventListener("input", (e) => {
  updateVal(e, cardCvvDisplay);
});

// Zip
const cardZip = document.getElementById("input-card-zip");

const form = document.querySelector("form");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  // Fetch
  fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    body: JSON.stringify({
      number: `${cardNumber.value}`,
      first: `${cardFirst.value}`,
      last: `${cardLast.value}`,
      expiration: `${cardExpiration.value}`,
      cvv: `${cardCvv.value}`,
      zip: `${cardZip.value}`,
      userId: 999,
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
    .then((response) => response.json())
    .then((data) => {
      console.log("Success:", data);
      form.innerHTML = `
      <div class="success-message__container">
        <h2>Form Submitted Successfully</h2>  
        <p>ID: ${data.id}</p>
      </div>
      `;
    })
    .catch((error) => {
      console.error("Error:", error);
      form.innerHTML = `
      <div class="failure-message__container">
        <h2>Form Failed to Submit</h2>  
        <p>There was an error</p>
      </div>
      `;
    });
});
