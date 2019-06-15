/**
 * test2-0
 * 附加题
 */
function yideng(a,b,c){
    console.log(this.length);
    console.log(this.callee.length);
}
function fn(d){
    arguments[0](10,20,30,40,50);
}
fn(yideng,10,20,30);