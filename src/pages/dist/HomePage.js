"use strict";
exports.__esModule = true;
var react_1 = require("react");
var react_router_dom_1 = require("react-router-dom");
var framer_motion_1 = require("framer-motion");
var react_intersection_observer_1 = require("react-intersection-observer");
var lucide_react_1 = require("lucide-react");
var Hero_1 = require("../components/Hero");
var SectionHeader_1 = require("../components/SectionHeader");
var InfoCard_1 = require("../components/InfoCard");
var VideoPlayer_1 = require("../components/VideoPlayer");
var HomePage = function () {
    react_1.useEffect(function () {
        document.title = "AlgodãoTech - Desvendando o Yield Gap do Algodão no Brasil";
    }, []);
    var _a = react_intersection_observer_1.useInView({
        triggerOnce: true,
        threshold: 0.1
    }), ref = _a[0], inView = _a[1];
    return (react_1["default"].createElement("div", null,
        react_1["default"].createElement(Hero_1["default"], { title: "Yield Gap do Algod\u00E3o no Brasil", subtitle: "Maximizando a produtividade para um futuro sustent\u00E1vel da cotonicultura brasileira", imageUrl: "https://images.pexels.com/photos/1595104/pexels-photo-1595104.jpeg" }),
        react_1["default"].createElement("section", { className: "section" },
            react_1["default"].createElement("div", { className: "container-custom" },
                react_1["default"].createElement(SectionHeader_1["default"], { title: "O Que \u00E9 o Yield Gap?", subtitle: "Entenda a diferen\u00E7a entre o potencial produtivo e a realidade nas lavouras de algod\u00E3o brasileiras.", centered: true }),
                react_1["default"].createElement("div", { className: "flex flex-col md:flex-row items-center gap-10" },
                    react_1["default"].createElement("div", { className: "w-full md:w-1/2" },
                        react_1["default"].createElement(VideoPlayer_1["default"], { src: "https://player.vimeo.com/external/373787639.hd.mp4?s=dee27e23aac0fc7c24892cf4b1cacce6b7c57c6c&profile_id=175&oauth2_token_id=57447761", title: "Entendendo o Yield Gap", poster: "https://images.pexels.com/photos/4946994/pexels-photo-4946994.jpeg" })),
                    react_1["default"].createElement("div", { className: "w-full md:w-1/2" },
                        react_1["default"].createElement(framer_motion_1.motion.div, { ref: ref, initial: { opacity: 0, x: 20 }, animate: inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }, transition: { duration: 0.6 } },
                            react_1["default"].createElement("h3", { className: "text-2xl font-semibold mb-4 text-primary-800" }, "Por que isso importa?"),
                            react_1["default"].createElement("p", { className: "mb-4 text-gray-700" },
                                "O ",
                                react_1["default"].createElement("strong", null, "yield gap"),
                                " (lacuna de produtividade) representa a diferen\u00E7a entre a produtividade potencial que poderia ser alcan\u00E7ada em condi\u00E7\u00F5es ideais e a produtividade real obtida nas fazendas brasileiras."),
                            react_1["default"].createElement("p", { className: "mb-4 text-gray-700" }, "Reduzir essa lacuna significa aumentar a produ\u00E7\u00E3o sem expandir a \u00E1rea plantada, resultando em maior efici\u00EAncia, sustentabilidade e lucratividade."),
                            react_1["default"].createElement("div", { className: "mt-6" },
                                react_1["default"].createElement(react_router_dom_1.Link, { to: "/what-is-yield-gap", className: "btn btn-primary" }, "Entenda o Conceito"))))))),
        react_1["default"].createElement("section", { className: "section bg-primary-50" },
            react_1["default"].createElement("div", { className: "container-custom" },
                react_1["default"].createElement(SectionHeader_1["default"], { title: "Explorando o Yield Gap", subtitle: "Conhe\u00E7a as principais \u00E1reas de estudo para entender e solucionar o yield gap do algod\u00E3o no Brasil.", centered: true }),
                react_1["default"].createElement("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6" },
                    react_1["default"].createElement(InfoCard_1["default"], { title: "O Que \u00E9 Yield Gap", description: "Entenda o conceito, os tipos de produtividade e a import\u00E2ncia de reduzir essa lacuna.", icon: lucide_react_1.Sprout, delay: 0, illustration: "https://images.pexels.com/photos/1595104/pexels-photo-1595104.jpeg" }),
                    react_1["default"].createElement(InfoCard_1["default"], { title: "Evolu\u00E7\u00E3o Hist\u00F3rica", description: "Conhe\u00E7a a evolu\u00E7\u00E3o do yield gap na cotonicultura brasileira desde 2000 at\u00E9 2025.", icon: lucide_react_1.BarChart3, delay: 1, illustration: "https://images.pexels.com/photos/4946994/pexels-photo-4946994.jpeg" }),
                    react_1["default"].createElement(InfoCard_1["default"], { title: "Ferramentas de An\u00E1lise", description: "Descubra as principais tecnologias e metodologias para identificar e quantificar o yield gap.", icon: lucide_react_1.PenTool, delay: 2, illustration: "https://images.pexels.com/photos/1112080/pexels-photo-1112080.jpeg" }),
                    react_1["default"].createElement(InfoCard_1["default"], { title: "Solu\u00E7\u00F5es Pr\u00E1ticas", description: "Conhe\u00E7a as melhores pr\u00E1ticas e tecnologias para reduzir o yield gap e aumentar a produtividade.", icon: lucide_react_1.BookOpen, delay: 3, illustration: "https://images.pexels.com/photos/440731/pexels-photo-440731.jpeg" })))),
        react_1["default"].createElement("section", { className: "section bg-white" },
            react_1["default"].createElement("div", { className: "container-custom" },
                react_1["default"].createElement("div", { className: "grid grid-cols-1 lg:grid-cols-2 gap-16 items-center" },
                    react_1["default"].createElement(framer_motion_1.motion.div, { initial: { opacity: 0, x: -20 }, whileInView: { opacity: 1, x: 0 }, transition: { duration: 0.6 }, viewport: { once: true, amount: 0.3 } },
                        react_1["default"].createElement("h2", { className: "text-3xl font-semibold mb-6 text-primary-800" }, "Transforme sua produ\u00E7\u00E3o de algod\u00E3o"),
                        react_1["default"].createElement("p", { className: "mb-4 text-gray-700" }, "Nosso objetivo \u00E9 fornecer conhecimento e solu\u00E7\u00F5es pr\u00E1ticas para agricultores, pesquisadores e estudantes interessados em melhorar a produtividade do algod\u00E3o brasileiro."),
                        react_1["default"].createElement("p", { className: "mb-6 text-gray-700" }, "Atrav\u00E9s de conte\u00FAdo educacional, ferramentas de an\u00E1lise e recomenda\u00E7\u00F5es baseadas em evid\u00EAncias cient\u00EDficas, queremos contribuir para uma cotonicultura mais eficiente e sustent\u00E1vel."),
                        react_1["default"].createElement("div", { className: "flex flex-wrap gap-4" },
                            react_1["default"].createElement(react_router_dom_1.Link, { to: "/steps-to-avoid", className: "btn btn-primary" }, "Passos Pr\u00E1ticos"),
                            react_1["default"].createElement(react_router_dom_1.Link, { to: "/about-us", className: "btn btn-outline" }, "Conhe\u00E7a Nossa Equipe"))),
                    react_1["default"].createElement(framer_motion_1.motion.div, { initial: { opacity: 0, scale: 0.9 }, whileInView: { opacity: 1, scale: 1 }, transition: { duration: 0.6 }, viewport: { once: true, amount: 0.3 }, className: "relative" },
                        react_1["default"].createElement(VideoPlayer_1["default"], { src: "https://player.vimeo.com/external/373787639.hd.mp4?s=dee27e23aac0fc7c24892cf4b1cacce6b7c57c6c&profile_id=175&oauth2_token_id=57447761", title: "Transformando a Cotonicultura", poster: "https://images.pexels.com/photos/1166209/pexels-photo-1166209.jpeg" }),
                        react_1["default"].createElement("div", { className: "absolute top-0 left-0 bg-primary-600 text-white font-semibold py-2 px-4 rounded-tl-lg rounded-br-lg" }, "Inova\u00E7\u00E3o na Cotonicultura"))))),
        react_1["default"].createElement("section", { className: "section bg-gray-900 text-white" },
            react_1["default"].createElement("div", { className: "container-custom text-center" },
                react_1["default"].createElement("h2", { className: "text-3xl md:text-4xl font-bold mb-6 text-white" }, "Pronto para maximizar sua produtividade?"),
                react_1["default"].createElement("p", { className: "text-lg text-gray-300 mb-8 max-w-3xl mx-auto" }, "Descubra como reduzir o yield gap e aumentar a efici\u00EAncia da sua produ\u00E7\u00E3o de algod\u00E3o."),
                react_1["default"].createElement("div", { className: "flex flex-wrap justify-center gap-4" },
                    react_1["default"].createElement(react_router_dom_1.Link, { to: "/solve-yield-gap", className: "btn bg-primary-500 text-white hover:bg-primary-600" }, "Explorar Solu\u00E7\u00F5es"),
                    react_1["default"].createElement(react_router_dom_1.Link, { to: "/minecraft-yield-gap", className: "btn bg-accent-500 text-white hover:bg-accent-600" }, "Jogo em Minecraft"))))));
};
exports["default"] = HomePage;
