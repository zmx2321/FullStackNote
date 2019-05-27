import React from "react";

export const App = () => {
    return (
        <div>
            <h2 data-testid="js-h2">hello1</h2>
            <ul data-testid="js-ul">
                <li>JavaScript</li>
                <li>CSS</li>
            </ul>
        </div>
    )
}

// 1.单元测试 小的函数
// 2.单元测试 小的组件
// 3.接口测试 确保数据
// 4.e2e测试  确保功能
// 5.UI测试   确保样式
//6.f2etest 确保多浏览器下的实际环境  【冒烟测试】