const total = document.querySelector(".total span");
const tr = document.querySelectorAll(".board tr").length;
const sum = tr - 1;
console.log(sum);

total.innerHTML = sum;
