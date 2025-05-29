"use strict";
exports.__esModule = true;
var react_1 = require("react");
var react_router_dom_1 = require("react-router-dom");
var lucide_react_1 = require("lucide-react");
var NotFound = function () {
    return (react_1["default"].createElement("div", { className: "min-h-screen flex items-center justify-center bg-gray-50 px-4" },
        react_1["default"].createElement("div", { className: "text-center" },
            react_1["default"].createElement("h1", { className: "text-9xl font-bold text-primary-600" }, "404"),
            react_1["default"].createElement("h2", { className: "text-3xl font-semibold text-gray-800 mt-4 mb-6" }, "P\u00E1gina n\u00E3o encontrada"),
            react_1["default"].createElement("p", { className: "text-gray-600 mb-8 max-w-md mx-auto" }, "A p\u00E1gina que voc\u00EA est\u00E1 procurando pode ter sido removida, renomeada ou est\u00E1 temporariamente indispon\u00EDvel."),
            react_1["default"].createElement("div", { className: "flex flex-wrap justify-center gap-4" },
                react_1["default"].createElement(react_router_dom_1.Link, { to: "/", className: "btn btn-primary flex items-center gap-2" },
                    react_1["default"].createElement(lucide_react_1.Home, { size: 18 }),
                    "P\u00E1gina Inicial"),
                react_1["default"].createElement("button", { onClick: function () { return window.history.back(); }, className: "btn btn-outline flex items-center gap-2" },
                    react_1["default"].createElement(lucide_react_1.ArrowLeft, { size: 18 }),
                    "Voltar")))));
};
exports["default"] = NotFound;
