// popup notification part
let popup = document.getElementById("popup");

function openPopup() {
  popup.classList.add("open-popup");
}
function closePopup() {
  popup.classList.remove("open-popup");
}
// -------------------------------------
let totalPrice = 0;
const busSeat = document.querySelectorAll(".seat");

for (let i = 0; i < busSeat.length; i++) {
  const seat = busSeat[i];
  seat.addEventListener("click", function () {
    const title = seat.querySelector("h3").innerText;

    const price = parseFloat(seat.querySelector("span").innerText);
    const priceInject = document.getElementById("priceInject");
    const p = document.createElement("p");
    p.innerText = title + " " + "Economoy" + " " + price;
      priceInject.appendChild(p);

      // calculate price
      totalPrice += price;
      document.getElementById("totalPrice").innerText = totalPrice;
  });
}


const btn = document.getElementById("apply-btn");
btn.addEventListener("click", function () {
    // value input
    const couponInput = document.getElementById("couponInput").value;
    const couponCode = couponInput.split(" ").join("").toUpperCase();
    if (totalPrice >= 550) {
        if (couponCode === "NEW15") {
            const discountPrice = totalPrice * 0.15;
            const couponPrice = totalPrice - discountPrice;

            const restTotal = document.getElementById("grandTotal");
            restTotal.innerText = couponPrice;
        } else {
            alert("need valid coupon")
        }
    }
})