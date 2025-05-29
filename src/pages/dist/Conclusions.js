"use strict";
exports.__esModule = true;
var react_1 = require("react");
var lucide_react_1 = require("lucide-react");
var SectionHeader_1 = require("../components/SectionHeader");
var InfoCard_1 = require("../components/InfoCard");
function Conclusions() {
    return (react_1["default"].createElement("div", { className: "container mx-auto px-4 py-8" },
        react_1["default"].createElement(SectionHeader_1["default"], { title: "Conclusions", subtitle: "Key takeaways about yield gap and its solutions" }),
        react_1["default"].createElement("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-8 mt-8" },
            react_1["default"].createElement(InfoCard_1["default"], { title: "Understanding Yield Gap", content: "The yield gap represents the difference between potential and actual crop yields, influenced by various environmental, technological, and management factors.", icon: lucide_react_1.BookOpen }),
            react_1["default"].createElement(InfoCard_1["default"], { title: "Solutions and Implementation", content: "Addressing yield gaps requires a combination of improved farming practices, technology adoption, and knowledge sharing among agricultural communities.", icon: lucide_react_1.BarChart2 }),
            react_1["default"].createElement(InfoCard_1["default"], { title: "Future Outlook", content: "Continuous research and development in agricultural practices will help reduce yield gaps and contribute to global food security.", icon: lucide_react_1.Lightbulb }),
            react_1["default"].createElement(InfoCard_1["default"], { title: "Call to Action", content: "Join us in our mission to minimize yield gaps and create a more sustainable agricultural future through education and implementation of best practices.", icon: lucide_react_1.ArrowRight }))));
}
exports["default"] = Conclusions;
