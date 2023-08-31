let count = 1;
const value = document.querySelector("#value");
const btns = document.querySelectorAll(".btn");
const price = parseInt(document.querySelector("#price").textContent);
const item = document.getElementById("item");
const cartId = document.getElementById("cartId");
const newRow = '<tr><td colspan="7">No items </td></tr>';
const trash = document.querySelector(".trash");
// console.log(price);
const total = document.querySelector("#total");
// console.log(btns);

btns.forEach(function (btn) {
  btn.addEventListener("click", function (e) {
    const styles = e.currentTarget.classList;
    if (styles.contains("increase")) {
      count++;
    } else if (styles.contains("decrease")) {
      if (count > 1) {
        count--;
      } else {
        item.remove(item.selectedIndex);
        cartId.innerHTML += newRow;
      }
    } else {
      count = 1;
    }
    value.textContent = count;
  });
});
// console.log(typeof(count), price, typeof(parseInt(price)));

btns.forEach(function (btn) {
  btn.addEventListener("click", function (e) {
    const styles = e.currentTarget.classList;
    if (styles.contains("btn")) {
      totalPrice = count * price;
    } else {
      totalPrice = price;
    }
    total.textContent = totalPrice;
  });
});

trash.addEventListener("click", function (e) {
  // console.log("delete");
  item.remove(item.selectedIndex);
  cartId.innerHTML += newRow;
});
