//  ======= nave bar color change ===================

$(window).scroll(function () {
  $("nav").toggleClass("scrolled", $(this).scrollTop() > 500);
});

// ========= count incres for count section =========

// four count 850
let counts = setInterval(updated);
let upto = 0;
function updated() {
  let count = document.getElementById("counter850");
  count.innerHTML = ++upto;
  if (upto === 850) {
    clearInterval(counts);
  }
}
// four count 320

let counts320 = setInterval(update320);
let upto320 = 0;
function update320() {
  let count320 = document.getElementById("counter320");
  count320.innerHTML = ++upto320;
  if (upto320 === 320) {
    clearInterval(counts320);
  }
}
// four count 9450

let counts9540 = setInterval(update9450);
let upto9450 = 0;
function update9450() {
  let count9450 = document.getElementById("counter9450");
  count9450.innerHTML = ++upto9450;
  // to make counter faster
  ++upto9450;
  ++upto9450;
  ++upto9450;
  ++upto9450;
  ++upto9450;
  ++upto9450;
  ++upto9450;
  ++upto9450;
  ++upto9450;
  if (upto9450 === 9460) {
    clearInterval(counts9540);
  }
}
// four count 780

let counts780 = setInterval(update780);
let upto780 = 0;
function update780() {
  let count780 = document.getElementById("counter780");
  count780.innerHTML = ++upto780;
  if (upto780 === 780) {
    clearInterval(counts780);
  }
}
