let nowButton = document.getElementsByClassName('now-buitton')[0];
nowButton.onclick = function () {
    let wxName = document.getElementsByClassName('wxname')[0];
    let same = document.getElementsByClassName('realm')[0];
    let phoneNum = document.getElementsByClassName('phonenum')[0];
    let passwd= document.getElementsByClassName('passwd')[0];
    if (wxName.value == ''){
        alert('请输入机构名称');
    }else  if (same.value == ''){
        alert('请输入昵称');
    }else  if (phoneNum.value == ''){
        alert('请输入手机号');
    }
    else  if (passwd.value == ''){
        alert('请输入密码');
    }
}