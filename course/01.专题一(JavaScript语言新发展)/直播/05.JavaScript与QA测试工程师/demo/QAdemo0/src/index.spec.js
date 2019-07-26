import React from "react";
import { render, cleanup, fireEvent } from "react-testing-library";
import { App } from "./index";

afterEach(cleanup);

// 单测
describe("基础React单元测试", function () {
    it("index组件测试", function () {
        // 把所有id取出来，渲染整个组件
        const { getByTestId } = render(<App />);
        // 取index中data-testid
        const [ul, nav] = [getByTestId("js-ul"), getByTestId("js-h2")];

        // 断言，期望结果值
        expect(ul.children.length).toBe(3);
        expect(nav.textContent).toContain("hello1");
    })
});