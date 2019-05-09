// 为给定 ID 的 user 创建请求
axios.get('/http://cangtian:83/layui-list1')
    .then(function (response) {
        console.log(response);
    })
    .catch(function (error) {
        console.log(error);
    });