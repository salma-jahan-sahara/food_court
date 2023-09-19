document.getElementById('next').onclick = function(){
    const widthItem = document.querySelector('.shop').offsetWidth;
    document.getElementById("shopList").scrollLeft += widthItem;
}
document.getElementById("prev").onclick = function () {
  const widthItem = document.querySelector(".shop").offsetWidth;
  document.getElementById("shopList").scrollLeft -= widthItem;
};