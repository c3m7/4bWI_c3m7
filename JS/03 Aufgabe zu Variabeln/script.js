let banana = "Banana";

let apple = "Apple";

let bananaPricePerKilo = 2.14;

let applePricePerKilo = 3.43;

let avgBananaWeight = 0.22;

let avgAppleWeight = 0.34;


console.log("Anzahl Bananen pro Kilo: " + 1 / avgBananaWeight);
console.log("Anzahl Äpfel pro Kilo: " + 1 / avgAppleWeight);
console.log("Preis pro Banane: " + bananaPricePerKilo / (1 / avgBananaWeight));
console.log("Preis pro Apfel: " + applePricePerKilo / (1 / avgAppleWeight));

console.log("Preis von 8 Äpfeln: " + 8 * applePricePerKilo);

console.log("Preis von 17 Bananen: " + 17 * bananaPricePerKilo);

console.log(
  "Preis von 1 Tonne Äpfel: " + avgAppleWeight * 1000 * applePricePerKilo
);

console.log(
  "Preis von 1 Tonne Bananen: " + avgBananaWeight * 1000 * bananaPricePerKilo
);