// 顶部轮播图开始
let y = document.querySelectorAll(".lunbo1>li");
console.log(y);
let a = 0;
let lunbo = setTimeout(lunboa, 0);
function lunboa() {
    for (i = 0; i < y.length; i++) {
        y[i].style.display = "none";
    }
    y[a].style.display = "block";

    if (a >= y.length - 1) {
        a = 0;
    } else {
        a++;
    }
    setTimeout(lunboa, 1000);
}
// 顶部轮播图结束