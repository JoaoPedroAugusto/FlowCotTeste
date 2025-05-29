"use strict";
exports.__esModule = true;
var react_1 = require("react");
var framer_motion_1 = require("framer-motion");
var react_intersection_observer_1 = require("react-intersection-observer");
var SectionHeader_1 = require("../components/SectionHeader");
var YieldGapInfoGraphic_1 = require("../components/YieldGapInfoGraphic");
var WhatIsYieldGap = function () {
    react_1.useEffect(function () {
        document.title = "O que é Yield Gap no Algodão? | AlgodãoTech";
    }, []);
    var _a = react_intersection_observer_1.useInView({
        triggerOnce: true,
        threshold: 0.1
    }), ref1 = _a[0], inView1 = _a[1];
    var _b = react_intersection_observer_1.useInView({
        triggerOnce: true,
        threshold: 0.1
    }), ref2 = _b[0], inView2 = _b[1];
    return (react_1["default"].createElement("div", { className: "pt-24" },
        react_1["default"].createElement("section", { className: "section bg-primary-50" },
            react_1["default"].createElement("div", { className: "container-custom" },
                react_1["default"].createElement(SectionHeader_1["default"], { title: "O que \u00E9 Yield Gap no Algod\u00E3o?", subtitle: "Entenda a diferen\u00E7a entre o potencial produtivo e a realidade nas lavouras de algod\u00E3o", centered: true }),
                react_1["default"].createElement("div", { className: "grid grid-cols-1 lg:grid-cols-2 gap-10 items-center" },
                    react_1["default"].createElement(framer_motion_1.motion.div, { ref: ref1, initial: { opacity: 0, x: -20 }, animate: inView1 ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }, transition: { duration: 0.6 } },
                        react_1["default"].createElement("h3", { className: "text-2xl font-semibold mb-4 text-primary-800" }, "Compreendendo o Conceito"),
                        react_1["default"].createElement("p", { className: "mb-4 text-gray-700" },
                            "O ",
                            react_1["default"].createElement("strong", null, "yield gap"),
                            " ou ",
                            react_1["default"].createElement("strong", null, "lacuna de produtividade"),
                            " \u00E9 a diferen\u00E7a entre o que poderia ser produzido e o que \u00E9 realmente produzido nas lavouras de algod\u00E3o. Esta lacuna pode ser definida de diferentes formas, considerando diferentes n\u00EDveis de produtividade:"),
                        react_1["default"].createElement("ul", { className: "list-disc pl-5 space-y-2 mb-4 text-gray-700" },
                            react_1["default"].createElement("li", null,
                                react_1["default"].createElement("strong", null, "Produtividade Potencial (PP):"),
                                " \u00C9 o m\u00E1ximo rendimento te\u00F3rico que poderia ser alcan\u00E7ado em condi\u00E7\u00F5es ideais, sem limita\u00E7\u00F5es de \u00E1gua, nutrientes ou ocorr\u00EAncia de pragas e doen\u00E7as."),
                            react_1["default"].createElement("li", null,
                                react_1["default"].createElement("strong", null, "Produtividade Ating\u00EDvel (PA):"),
                                " \u00C9 o rendimento m\u00E1ximo que poderia ser alcan\u00E7ado com as melhores pr\u00E1ticas de manejo dispon\u00EDveis, considerando algumas limita\u00E7\u00F5es ambientais inevit\u00E1veis."),
                            react_1["default"].createElement("li", null,
                                react_1["default"].createElement("strong", null, "Produtividade Real (PR):"),
                                " \u00C9 o rendimento que os agricultores realmente alcan\u00E7am nas condi\u00E7\u00F5es atuais de cultivo.")),
                        react_1["default"].createElement("p", { className: "text-gray-700" }, "A diferen\u00E7a entre PA e PR \u00E9 frequentemente considerada o \"yield gap\" explor\u00E1vel, pois representa a produtividade que poderia ser alcan\u00E7ada com a ado\u00E7\u00E3o de pr\u00E1ticas de manejo melhoradas.")),
                    react_1["default"].createElement(framer_motion_1.motion.div, { ref: ref2, initial: { opacity: 0, x: 20 }, animate: inView2 ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }, transition: { duration: 0.6 } },
                        react_1["default"].createElement("img", { src: "https://images.pexels.com/photos/7457/pexels-photo.jpg", alt: "Campo de algod\u00E3o", className: "rounded-lg shadow-md w-full h-auto" }))))),
        react_1["default"].createElement("section", { className: "section bg-white" },
            react_1["default"].createElement("div", { className: "container-custom" },
                react_1["default"].createElement("div", { className: "grid grid-cols-1 lg:grid-cols-2 gap-10" },
                    react_1["default"].createElement(YieldGapInfoGraphic_1["default"], null),
                    react_1["default"].createElement(framer_motion_1.motion.div, { initial: { opacity: 0, y: 20 }, whileInView: { opacity: 1, y: 0 }, transition: { duration: 0.6 }, viewport: { once: true, amount: 0.3 }, className: "flex flex-col justify-center" },
                        react_1["default"].createElement("h3", { className: "text-2xl font-semibold mb-4 text-primary-800" }, "Por que o Yield Gap existe?"),
                        react_1["default"].createElement("p", { className: "mb-4 text-gray-700" }, "O yield gap no algod\u00E3o brasileiro pode ser atribu\u00EDdo a diversos fatores, que podem ser classificados em diferentes categorias:"),
                        react_1["default"].createElement("div", { className: "bg-primary-50 p-4 rounded-lg mb-4" },
                            react_1["default"].createElement("h4", { className: "font-semibold text-primary-800 mb-2" }, "Fatores Biof\u00EDsicos"),
                            react_1["default"].createElement("ul", { className: "list-disc pl-5 text-gray-700" },
                                react_1["default"].createElement("li", null, "Limita\u00E7\u00F5es clim\u00E1ticas (d\u00E9ficit h\u00EDdrico, temperaturas extremas)"),
                                react_1["default"].createElement("li", null, "Caracter\u00EDsticas do solo (fertilidade, compacta\u00E7\u00E3o)"),
                                react_1["default"].createElement("li", null, "Ocorr\u00EAncia de pragas, doen\u00E7as e plantas daninhas"))),
                        react_1["default"].createElement("div", { className: "bg-primary-50 p-4 rounded-lg mb-4" },
                            react_1["default"].createElement("h4", { className: "font-semibold text-primary-800 mb-2" }, "Fatores Tecnol\u00F3gicos"),
                            react_1["default"].createElement("ul", { className: "list-disc pl-5 text-gray-700" },
                                react_1["default"].createElement("li", null, "Acesso limitado a variedades melhoradas"),
                                react_1["default"].createElement("li", null, "Pr\u00E1ticas inadequadas de manejo"),
                                react_1["default"].createElement("li", null, "Baixo n\u00EDvel de mecaniza\u00E7\u00E3o e tecnologia"))),
                        react_1["default"].createElement("div", { className: "bg-primary-50 p-4 rounded-lg mb-4" },
                            react_1["default"].createElement("h4", { className: "font-semibold text-primary-800 mb-2" }, "Fatores Socioecon\u00F4micos"),
                            react_1["default"].createElement("ul", { className: "list-disc pl-5 text-gray-700" },
                                react_1["default"].createElement("li", null, "Restri\u00E7\u00F5es de capital e acesso a cr\u00E9dito"),
                                react_1["default"].createElement("li", null, "Falta de conhecimento t\u00E9cnico"),
                                react_1["default"].createElement("li", null, "Infraestrutura deficiente (estradas, armazenamento)"),
                                react_1["default"].createElement("li", null, "Pol\u00EDticas p\u00FAblicas inadequadas"))),
                        react_1["default"].createElement("p", { className: "mt-2 text-gray-700" }, "Compreender esses fatores \u00E9 essencial para desenvolver estrat\u00E9gias eficazes de redu\u00E7\u00E3o do yield gap e aumento da produtividade do algod\u00E3o no Brasil."))))),
        react_1["default"].createElement("section", { className: "section bg-primary-50" },
            react_1["default"].createElement("div", { className: "container-custom" },
                react_1["default"].createElement(SectionHeader_1["default"], { title: "Import\u00E2ncia da Redu\u00E7\u00E3o do Yield Gap", subtitle: "Por que devemos nos preocupar em reduzir a lacuna de produtividade no algod\u00E3o?", centered: true }),
                react_1["default"].createElement("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-6" },
                    react_1["default"].createElement(framer_motion_1.motion.div, { initial: { opacity: 0, y: 20 }, whileInView: { opacity: 1, y: 0 }, transition: { duration: 0.5, delay: 0 }, viewport: { once: true }, className: "card" },
                        react_1["default"].createElement("h3", { className: "text-xl font-semibold mb-3 text-primary-800" }, "Sustentabilidade Ambiental"),
                        react_1["default"].createElement("p", { className: "text-gray-700" }, "Aumentar a produtividade nas \u00E1reas j\u00E1 cultivadas reduz a press\u00E3o para expandir a fronteira agr\u00EDcola, protegendo biomas naturais e contribuindo para a conserva\u00E7\u00E3o da biodiversidade e recursos naturais.")),
                    react_1["default"].createElement(framer_motion_1.motion.div, { initial: { opacity: 0, y: 20 }, whileInView: { opacity: 1, y: 0 }, transition: { duration: 0.5, delay: 0.1 }, viewport: { once: true }, className: "card" },
                        react_1["default"].createElement("h3", { className: "text-xl font-semibold mb-3 text-primary-800" }, "Viabilidade Econ\u00F4mica"),
                        react_1["default"].createElement("p", { className: "text-gray-700" }, "Maior produtividade significa melhor aproveitamento dos recursos e insumos, resultando em maior rentabilidade para os produtores e fortalecimento da cadeia produtiva do algod\u00E3o brasileiro.")),
                    react_1["default"].createElement(framer_motion_1.motion.div, { initial: { opacity: 0, y: 20 }, whileInView: { opacity: 1, y: 0 }, transition: { duration: 0.5, delay: 0.2 }, viewport: { once: true }, className: "card" },
                        react_1["default"].createElement("h3", { className: "text-xl font-semibold mb-3 text-primary-800" }, "Competitividade Global"),
                        react_1["default"].createElement("p", { className: "text-gray-700" }, "A redu\u00E7\u00E3o do yield gap aumenta a competitividade do algod\u00E3o brasileiro no mercado internacional, contribuindo para o fortalecimento da posi\u00E7\u00E3o do Brasil como um dos principais produtores mundiais."))),
                react_1["default"].createElement(framer_motion_1.motion.div, { initial: { opacity: 0, y: 20 }, whileInView: { opacity: 1, y: 0 }, transition: { duration: 0.6 }, viewport: { once: true }, className: "mt-12 p-6 bg-white rounded-lg shadow-md" },
                    react_1["default"].createElement("h3", { className: "text-xl font-semibold mb-4 text-primary-800" }, "Uma analogia para entender melhor"),
                    react_1["default"].createElement("p", { className: "text-gray-700 mb-4" }, "Pense no yield gap como a diferen\u00E7a entre a velocidade m\u00E1xima que um carro pode atingir (produtividade potencial) e a velocidade m\u00E9dia que ele realmente mant\u00E9m em uma viagem (produtividade real). Diversos fatores podem reduzir essa velocidade: condi\u00E7\u00F5es da estrada, habilidade do motorista, congestionamento, limita\u00E7\u00F5es do ve\u00EDculo, etc."),
                    react_1["default"].createElement("p", { className: "text-gray-700" }, "Da mesma forma, o yield gap na produ\u00E7\u00E3o de algod\u00E3o \u00E9 influenciado por m\u00FAltiplos fatores que impedem que a lavoura atinja seu potencial m\u00E1ximo. Identificar e solucionar esses gargalos \u00E9 como melhorar as condi\u00E7\u00F5es da viagem para chegar mais r\u00E1pido ao destino - ou, no caso do algod\u00E3o, alcan\u00E7ar maior produtividade."))))));
};
exports["default"] = WhatIsYieldGap;
