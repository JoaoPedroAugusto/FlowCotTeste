"use strict";
exports.__esModule = true;
var react_1 = require("react");
var framer_motion_1 = require("framer-motion");
var react_intersection_observer_1 = require("react-intersection-observer");
var SectionHeader_1 = require("../components/SectionHeader");
var YieldGapChart_1 = require("../components/YieldGapChart");
var HistoricalEvolution = function () {
    react_1.useEffect(function () {
        document.title = "Evolução Histórica do Yield Gap | AlgodãoTech";
    }, []);
    var _a = react_intersection_observer_1.useInView({
        triggerOnce: true,
        threshold: 0.1
    }), ref = _a[0], inView = _a[1];
    var timelineEvents = [
        {
            year: '2000-2005',
            title: 'Expansão do Algodão no Cerrado',
            description: 'O início da expansão da cultura do algodão no Cerrado brasileiro, com a adaptação de variedades e sistema de produção específicos para a região.',
            achievement: 'Redução inicial do yield gap com adaptação de cultivares para o Cerrado.',
            color: 'bg-primary-600'
        },
        {
            year: '2006-2010',
            title: 'Adoção de Cultivares Transgênicas',
            description: 'Introdução de cultivares com tecnologias Bt e resistentes a herbicidas, alterando o manejo de pragas e plantas daninhas.',
            achievement: 'Melhor controle de pragas e redução de perdas, diminuindo o yield gap em cerca de 15%.',
            color: 'bg-primary-700'
        },
        {
            year: '2011-2015',
            title: 'Avanços em Agricultura de Precisão',
            description: 'Implementação de tecnologias de agricultura de precisão, incluindo mapeamento de solo, aplicação variável de insumos e monitoramento remoto.',
            achievement: 'Uso mais eficiente de insumos e manejo específico por local, reduzindo o yield gap em mais 10%.',
            color: 'bg-primary-800'
        },
        {
            year: '2016-2020',
            title: 'Intensificação Sustentável',
            description: 'Adoção de sistemas integrados de produção, rotação de culturas e práticas conservacionistas de manejo do solo.',
            achievement: 'Melhoria da saúde do solo e redução de estresses bióticos, contribuindo para diminuir o yield gap em mais 8%.',
            color: 'bg-primary-900'
        },
        {
            year: '2021-2025',
            title: 'Era Digital na Cotonicultura',
            description: 'Implementação de ferramentas digitais, inteligência artificial e internet das coisas (IoT) para monitoramento e tomada de decisão em tempo real.',
            achievement: 'Manejo mais preciso e responsivo, com potencial para reduzir o yield gap em mais 12% até 2025.',
            color: 'bg-primary-950'
        },
    ];
    return (react_1["default"].createElement("div", { className: "pt-24" },
        react_1["default"].createElement("section", { className: "section bg-primary-50" },
            react_1["default"].createElement("div", { className: "container-custom" },
                react_1["default"].createElement(SectionHeader_1["default"], { title: "Evolu\u00E7\u00E3o Hist\u00F3rica (2000-2025)", subtitle: "Acompanhe a trajet\u00F3ria e as transforma\u00E7\u00F5es do yield gap na cotonicultura brasileira ao longo das \u00FAltimas d\u00E9cadas", centered: true }),
                react_1["default"].createElement("div", { className: "grid grid-cols-1 lg:grid-cols-2 gap-10 items-center mb-16" },
                    react_1["default"].createElement(framer_motion_1.motion.div, { ref: ref, initial: { opacity: 0, x: -20 }, animate: inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }, transition: { duration: 0.6 } },
                        react_1["default"].createElement("h3", { className: "text-2xl font-semibold mb-4 text-primary-800" }, "Uma Jornada de Transforma\u00E7\u00E3o"),
                        react_1["default"].createElement("p", { className: "mb-4 text-gray-700" }, "Desde o ano 2000, a cotonicultura brasileira passou por profundas transforma\u00E7\u00F5es tecnol\u00F3gicas, gerenciais e estruturais. Essas mudan\u00E7as impactaram diretamente a produtividade das lavouras e, consequentemente, o yield gap do algod\u00E3o no pa\u00EDs."),
                        react_1["default"].createElement("p", { className: "mb-4 text-gray-700" }, "O Brasil saiu da posi\u00E7\u00E3o de importador para se tornar um dos maiores exportadores mundiais de algod\u00E3o, com avan\u00E7os significativos em produtividade. No entanto, apesar desses avan\u00E7os, ainda existe um potencial consider\u00E1vel para redu\u00E7\u00E3o do yield gap em diversas regi\u00F5es produtoras."),
                        react_1["default"].createElement("p", { className: "text-gray-700" }, "Nesta se\u00E7\u00E3o, exploramos os principais marcos dessa jornada, os fatores que influenciaram as mudan\u00E7as na produtividade e as tend\u00EAncias para o futuro da cotonicultura brasileira.")),
                    react_1["default"].createElement(framer_motion_1.motion.div, { initial: { opacity: 0, x: 20 }, whileInView: { opacity: 1, x: 0 }, transition: { duration: 0.6 }, viewport: { once: true } },
                        react_1["default"].createElement("img", { src: "https://images.pexels.com/photos/3680313/pexels-photo-3680313.jpeg", alt: "Evolu\u00E7\u00E3o da agricultura do algod\u00E3o", className: "rounded-lg shadow-md w-full h-auto" }))),
                react_1["default"].createElement(YieldGapChart_1["default"], null))),
        react_1["default"].createElement("section", { className: "section bg-white" },
            react_1["default"].createElement("div", { className: "container-custom" },
                react_1["default"].createElement(SectionHeader_1["default"], { title: "Linha do Tempo do Yield Gap no Algod\u00E3o Brasileiro", subtitle: "Principais marcos e avan\u00E7os que contribu\u00EDram para a redu\u00E7\u00E3o do yield gap no per\u00EDodo de 2000 a 2025", centered: true }),
                react_1["default"].createElement("div", { className: "relative" },
                    react_1["default"].createElement("div", { className: "hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-primary-200" }),
                    timelineEvents.map(function (event, index) { return (react_1["default"].createElement(framer_motion_1.motion.div, { key: index, initial: { opacity: 0, y: 20 }, whileInView: { opacity: 1, y: 0 }, transition: { duration: 0.5, delay: index * 0.1 }, viewport: { once: true, amount: 0.3 }, className: "relative flex flex-col md:flex-row items-center md:justify-between mb-12 " + (index % 2 === 0 ? 'md:flex-row-reverse' : '') },
                        react_1["default"].createElement("div", { className: "w-full md:w-5/12" },
                            react_1["default"].createElement("div", { className: "p-6 bg-white rounded-lg shadow-md border-l-4 border-primary-600 h-full" },
                                react_1["default"].createElement("h3", { className: "text-xl font-semibold mb-2 text-primary-800" }, event.title),
                                react_1["default"].createElement("div", { className: "inline-block px-3 py-1 text-sm font-semibold text-white rounded-full mb-3 mt-1 bg-primary-600" }, event.year),
                                react_1["default"].createElement("p", { className: "text-gray-700 mb-3" }, event.description),
                                react_1["default"].createElement("div", { className: "mt-3 p-3 bg-primary-50 rounded-md" },
                                    react_1["default"].createElement("p", { className: "text-primary-800 font-medium" },
                                        react_1["default"].createElement("span", { className: "font-bold" }, "Conquista:"),
                                        " ",
                                        event.achievement)))),
                        react_1["default"].createElement("div", { className: "hidden md:block absolute left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full bg-primary-600 border-4 border-white shadow" }),
                        react_1["default"].createElement("div", { className: "w-full md:w-5/12" }))); })))),
        react_1["default"].createElement("section", { className: "section bg-primary-50" },
            react_1["default"].createElement("div", { className: "container-custom" },
                react_1["default"].createElement(SectionHeader_1["default"], { title: "Fatores Que Influenciaram a Evolu\u00E7\u00E3o", subtitle: "Compreenda os principais elementos que impactaram a produtividade do algod\u00E3o brasileiro e o yield gap ao longo do tempo", centered: true }),
                react_1["default"].createElement("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" },
                    react_1["default"].createElement(framer_motion_1.motion.div, { initial: { opacity: 0, y: 20 }, whileInView: { opacity: 1, y: 0 }, transition: { duration: 0.5, delay: 0 }, viewport: { once: true }, className: "card" },
                        react_1["default"].createElement("h3", { className: "text-xl font-semibold mb-3 text-primary-800" }, "Avan\u00E7os Tecnol\u00F3gicos"),
                        react_1["default"].createElement("ul", { className: "list-disc pl-5 space-y-2 text-gray-700" },
                            react_1["default"].createElement("li", null, "Desenvolvimento de cultivares mais adaptadas e produtivas"),
                            react_1["default"].createElement("li", null, "Ado\u00E7\u00E3o de biotecnologia (cultivares Bt e RR)"),
                            react_1["default"].createElement("li", null, "Mecaniza\u00E7\u00E3o e automa\u00E7\u00E3o de processos"),
                            react_1["default"].createElement("li", null, "Agricultura de precis\u00E3o e ferramentas digitais"),
                            react_1["default"].createElement("li", null, "Sistemas de irriga\u00E7\u00E3o mais eficientes"))),
                    react_1["default"].createElement(framer_motion_1.motion.div, { initial: { opacity: 0, y: 20 }, whileInView: { opacity: 1, y: 0 }, transition: { duration: 0.5, delay: 0.1 }, viewport: { once: true }, className: "card" },
                        react_1["default"].createElement("h3", { className: "text-xl font-semibold mb-3 text-primary-800" }, "Fatores Econ\u00F4micos"),
                        react_1["default"].createElement("ul", { className: "list-disc pl-5 space-y-2 text-gray-700" },
                            react_1["default"].createElement("li", null, "Flutua\u00E7\u00F5es nos pre\u00E7os internacionais do algod\u00E3o"),
                            react_1["default"].createElement("li", null, "Pol\u00EDticas de cr\u00E9dito e financiamento agr\u00EDcola"),
                            react_1["default"].createElement("li", null, "Investimentos em pesquisa e desenvolvimento"),
                            react_1["default"].createElement("li", null, "Forma\u00E7\u00E3o de clusters produtivos"),
                            react_1["default"].createElement("li", null, "Integra\u00E7\u00E3o com mercados globais"))),
                    react_1["default"].createElement(framer_motion_1.motion.div, { initial: { opacity: 0, y: 20 }, whileInView: { opacity: 1, y: 0 }, transition: { duration: 0.5, delay: 0.2 }, viewport: { once: true }, className: "card" },
                        react_1["default"].createElement("h3", { className: "text-xl font-semibold mb-3 text-primary-800" }, "Mudan\u00E7as Clim\u00E1ticas"),
                        react_1["default"].createElement("ul", { className: "list-disc pl-5 space-y-2 text-gray-700" },
                            react_1["default"].createElement("li", null, "Altera\u00E7\u00F5es nos padr\u00F5es de precipita\u00E7\u00E3o"),
                            react_1["default"].createElement("li", null, "Aumento de temperaturas extremas"),
                            react_1["default"].createElement("li", null, "Incid\u00EAncia de eventos clim\u00E1ticos severos"),
                            react_1["default"].createElement("li", null, "Adapta\u00E7\u00E3o de sistemas de produ\u00E7\u00E3o"),
                            react_1["default"].createElement("li", null, "Desenvolvimento de variedades mais resistentes a estresses"))),
                    react_1["default"].createElement(framer_motion_1.motion.div, { initial: { opacity: 0, y: 20 }, whileInView: { opacity: 1, y: 0 }, transition: { duration: 0.5, delay: 0.3 }, viewport: { once: true }, className: "card" },
                        react_1["default"].createElement("h3", { className: "text-xl font-semibold mb-3 text-primary-800" }, "Pr\u00E1ticas de Manejo"),
                        react_1["default"].createElement("ul", { className: "list-disc pl-5 space-y-2 text-gray-700" },
                            react_1["default"].createElement("li", null, "Ado\u00E7\u00E3o do plantio direto e cobertura permanente do solo"),
                            react_1["default"].createElement("li", null, "Manejo integrado de pragas e doen\u00E7as"),
                            react_1["default"].createElement("li", null, "Rota\u00E7\u00E3o e diversifica\u00E7\u00E3o de culturas"),
                            react_1["default"].createElement("li", null, "Manejo nutricional espec\u00EDfico"),
                            react_1["default"].createElement("li", null, "Adensamento de plantio"))),
                    react_1["default"].createElement(framer_motion_1.motion.div, { initial: { opacity: 0, y: 20 }, whileInView: { opacity: 1, y: 0 }, transition: { duration: 0.5, delay: 0.4 }, viewport: { once: true }, className: "card" },
                        react_1["default"].createElement("h3", { className: "text-xl font-semibold mb-3 text-primary-800" }, "Fatores Institucionais"),
                        react_1["default"].createElement("ul", { className: "list-disc pl-5 space-y-2 text-gray-700" },
                            react_1["default"].createElement("li", null, "Programas de pesquisa em algod\u00E3o (p\u00FAblicos e privados)"),
                            react_1["default"].createElement("li", null, "Cria\u00E7\u00E3o de associa\u00E7\u00F5es de produtores"),
                            react_1["default"].createElement("li", null, "Regulamenta\u00E7\u00F5es ambientais e de uso de insumos"),
                            react_1["default"].createElement("li", null, "Transfer\u00EAncia de tecnologia e extens\u00E3o rural"),
                            react_1["default"].createElement("li", null, "Pol\u00EDticas setoriais espec\u00EDficas"))),
                    react_1["default"].createElement(framer_motion_1.motion.div, { initial: { opacity: 0, y: 20 }, whileInView: { opacity: 1, y: 0 }, transition: { duration: 0.5, delay: 0.5 }, viewport: { once: true }, className: "card" },
                        react_1["default"].createElement("h3", { className: "text-xl font-semibold mb-3 text-primary-800" }, "Desafios Fitossanit\u00E1rios"),
                        react_1["default"].createElement("ul", { className: "list-disc pl-5 space-y-2 text-gray-700" },
                            react_1["default"].createElement("li", null, "Surgimento de novas pragas e doen\u00E7as"),
                            react_1["default"].createElement("li", null, "Desenvolvimento de resist\u00EAncia a defensivos"),
                            react_1["default"].createElement("li", null, "Introdu\u00E7\u00E3o de tecnologias Bt e manejo de resist\u00EAncia"),
                            react_1["default"].createElement("li", null, "Sistemas de monitoramento e alerta"),
                            react_1["default"].createElement("li", null, "Controle biol\u00F3gico e manejo integrado"))))))));
};
exports["default"] = HistoricalEvolution;
