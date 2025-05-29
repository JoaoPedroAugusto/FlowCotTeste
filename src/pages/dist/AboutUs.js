"use strict";
exports.__esModule = true;
var react_1 = require("react");
var SectionHeader_1 = require("../components/SectionHeader");
function AboutUs() {
    return (react_1["default"].createElement("div", { className: "container mx-auto px-4 py-8" },
        react_1["default"].createElement(SectionHeader_1["default"], { title: "About Us", subtitle: "Learn more about our team and mission" }),
        react_1["default"].createElement("div", { className: "max-w-3xl mx-auto mt-8" },
            react_1["default"].createElement("p", { className: "text-lg text-gray-700 mb-6" }, "We are a dedicated team of agricultural researchers and technology enthusiasts working to bridge the yield gap in global agriculture. Our mission is to help farmers and agricultural professionals understand and overcome the challenges that prevent achieving optimal crop yields."),
            react_1["default"].createElement("p", { className: "text-lg text-gray-700 mb-6" }, "Through research, education, and innovative tools, we strive to make agricultural best practices more accessible and help create a more sustainable and productive farming future."))));
}
exports["default"] = AboutUs;
