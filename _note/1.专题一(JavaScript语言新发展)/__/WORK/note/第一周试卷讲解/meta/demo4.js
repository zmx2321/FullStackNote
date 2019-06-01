function test(i) {
    return test(i--);
    //TCO 浏览器支持
    TCO_ENABLED = true;
}

test(5);