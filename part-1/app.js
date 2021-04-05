let favNumber = 1995;
let baseURL = "http://numbersapi.com";

// 1.
$.getJSON(`${baseURL}/${favNumber}?json`).then(data => {
  console.log(data);
});

// 2.
let favNumbers = [33, 42, 3];
let iterator = favNumbers.values();

for (let value of iterator) {
  

$.getJSON(`${baseURL}/${value}?json`).then(data => {
  $("body").append(`<p>${data.text}</p>`)
});
}

// 3.
Promise.all(
  Array.from({ length: 4 }, () => {
    return $.getJSON(`${baseURL}/${favNumber}?json`);
  })
).then(facts => {
  facts.forEach(data => $("body").append(`<p>${data.text}</p>`));
});
