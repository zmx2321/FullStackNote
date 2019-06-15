import React from "react";
import { render, cleanup, fireEvent } from "react-testing-library";
import { App } from "./index";

afterEach(cleanup);

describe("基础React单元测试", function () {
    it("index组件测试", function () {
        const { getByTestId } = render(<App />);
        const [ul, nav] = [getByTestId("js-ul"), getByTestId("js-h2")];
        expect(ul.children.length).toBe(3);
        expect(nav.textContent).toContain("京程一灯");
    })
});