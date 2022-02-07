// Javascript Conditions - > if / else if / else
// - symbol
//1.() - shart uchun zarur
//2.{} - shartdan kelib chiqib bajariladigan harakatlar;

// const txt = "Salomlar";
// if (txt == "Salom") {
//   console.log("So'zlar mosligi to'g'ri");
// } else {
//   console.log("So'zlar mosligi noto'g'ri");
// }

// ${} - interplolatsiya uslubi deyiladi
const age = 36;
const nameUser = "Bobir";

if (age >= 20 && age < 30) {
  console.log("Mijoz kiritilsin");
} else if (age >= 50 && age <= 60) {
  console.log("Boboy uyga jo'nang");
} else if (age >= 30 && age <= 40) {
  console.log(`Salom ${nameUser} , pul miqdori $${age}`);
} else {
  console.log("Ketiga tepib jo'natilsin !");
}

// Simple clock
// only show the hour of the current time
const soatVaqt = new Date().getHours();
// only show the minutes of the current time
const minutVaqt = new Date().getMinutes();

// console.log(soatVaqt);
// console.log(minutVaqt);

if (soatVaqt >= 6 && soatVaqt <= 12) {
  document.body.style.backgroundColor = "red";
  console.log("Xayrli tong !");
} else if (soatVaqt >= 13 && soatVaqt <= 18) {
  document.body.style.backgroundColor = "blue";
  console.log("Xayrli kun !");
} else {
  document.body.style.backgroundColor = "black";
  console.log("Uxlayver !");
}

// switch / case / break

switch (soatVaqt) {
  case 6:
    console.log(`Xayrli tong !`);
    break;
  case 7:
    console.log("Xayrli tong !");
    break;
  case 8:
    console.log("xayrli tong !");
    break;
  case 9:
    console.log("Xayrli tong !");
    break;
  case 12:
    console.log("Xayrli obed !");
    break;
  case 18:
    console.log("Xayrli kech !");
    break;
  default:
    console.log("Vaqt bilan bog'liq muammo");
}
