// function Promise(fn){
//     var callback;
//     this.then = function(done){
//         callback = done;
//     }
//     function resolve(){
//         setTimeout(function(){
//             callback();
//         },0)
//     }
//     fn(resolve);
// }

new Promise(function(resolve){
    resolve("hello");
    // setTimeout(function(){
    //     resolve("yideng")
    // })
}).then(function(data){
    console.log(data)
})


// Promisea.all
