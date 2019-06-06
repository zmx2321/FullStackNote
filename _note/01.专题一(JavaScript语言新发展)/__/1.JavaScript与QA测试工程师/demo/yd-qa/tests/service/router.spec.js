const axios = require("axios");
describe("node接口", function () {
    it("test接口测试", function (done) {
        axios.get("http://xcssss.com")
        .then(function(response){
            if(response.data.xx == ""){
                done();
            }else{
                done(new Error("数据请求出错"))
            }
        }).catch(function(error){
            done(error);
        })

    })
});