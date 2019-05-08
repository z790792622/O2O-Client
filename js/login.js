
let myRemeber = document.querySelector('.remember[checked="checked"]');
myRemeber.onclick = function () {
    let mySafe = document.getElementsByClassName('safe')[0];
    let loginMassage = '记住我的登陆信息';
    let loginPublicsafe = '公用场所请勿勾选';
    if (myRemeber.checked ==  false){
        mySafe.innerHTML = loginMassage;
    } else {
        mySafe.innerHTML = loginPublicsafe;
    }
}

let loGin = document.getElementsByClassName('login')[0];
loGin.onclick = function() {
    let phoneNum = document.getElementsByClassName('phone-num')[0];
    let passwd = document.getElementsByClassName('passwd')[0];
    if (phoneNum.value == "") {
        alert("请输入用户名/手机号")
    } else if (passwd.value == '') {
        alert('请输入密码')
    }
}

