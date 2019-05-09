//JavaScript代码区域
axios.get('/http://cangtian:83/layui-after')
    .then(function (response) {
        console.log(response);
    })
    .catch(function (error) {
        console.log(error);
    });