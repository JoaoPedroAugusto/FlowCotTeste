"use strict";
exports.__esModule = true;
var react_1 = require("react");
var framer_motion_1 = require("framer-motion");
var SectionHeader_1 = require("../components/SectionHeader");
var lucide_react_1 = require("lucide-react");
var ToolsForYieldGap = function () {
    react_1.useEffect(function () {
        document.title = "Ferramentas para Descobrir o Yield Gap | AlgodãoTech";
    }, []);
    var tools = [
        {
            title: "Modelos de Simulação de Culturas",
            description: "Ferramentas computacionais que simulam o crescimento e desenvolvimento das plantas de algodão em diferentes condições ambientais e de manejo.",
            icon: lucide_react_1.LineChart,
            examples: ["DSSAT", "APSIM", "CropSyst"],
            advantages: ["Permite estimar o potencial produtivo teórico", "Ajuda a entender interações complexas entre genótipo, ambiente e manejo", "Possibilita simular diferentes cenários"]
        },
        {
            title: "Sensoriamento Remoto",
            description: "Uso de imagens de satélite e drones para monitorar o desenvolvimento das lavouras e identificar áreas com problemas de crescimento ou produtividade.",
            icon: lucide_react_1.Satellite,
            examples: ["Índice de Vegetação por Diferença Normalizada (NDVI)", "Imagens multiespectrais e hiperespectrais", "Termografia"],
            advantages: ["Cobertura de grandes áreas", "Monitoramento contínuo ao longo do ciclo", "Identificação precoce de estresses"]
        },
        {
            title: "Análise de Dados e Machine Learning",
            description: "Aplicação de técnicas estatísticas avançadas e inteligência artificial para analisar grandes volumes de dados e identificar padrões relacionados ao yield gap.",
            icon: lucide_react_1.BrainCircuit,
            examples: ["Algoritmos de aprendizado de máquina", "Redes neurais", "Análise preditiva"],
            advantages: ["Processamento de múltiplas variáveis simultaneamente", "Identificação de relações não óbvias entre fatores", "Geração de modelos preditivos"]
        },
        {
            title: "Análise Comparativa de Desempenho",
            description: "Comparação sistemática entre produtores ou regiões com diferentes níveis de produtividade para identificar práticas de manejo e fatores associados a altos rendimentos.",
            icon: lucide_react_1.BarChart,
            examples: ["Benchmarking", "Análise de eficiência", "Estudos de caso"],
            advantages: ["Baseado em dados reais de produção", "Identifica boas práticas aplicáveis localmente", "Facilita a transferência de conhecimento"]
        },
        {
            title: "Bancos de Dados Agrícolas",
            description: "Sistemas que integram e organizam informações sobre solo, clima, práticas de manejo e produtividade para facilitar a análise do yield gap em diferentes escalas.",
            icon: lucide_react_1.Database,
            examples: ["Sistema de Informações Geográficas (SIG)", "Bancos de dados de produtividade regional", "Plataformas de gestão agrícola"],
            advantages: ["Centralização de informações", "Análises temporais e espaciais", "Suporte à tomada de decisão"]
        },
        {
            title: "Experimentos de Campo",
            description: "Condução de ensaios experimentais para quantificar o impacto de diferentes práticas de manejo na produtividade do algodão e identificar limitações específicas.",
            icon: lucide_react_1.Ruler,
            examples: ["Experimentos fatoriais", "Ensaios de variedades", "Parcelas demonstrativas"],
            advantages: ["Resultados localmente adaptados", "Validação de hipóteses específicas", "Demonstração prática de potencial produtivo"]
        },
    ];
    return (react_1["default"].createElement("div", { className: "pt-24" },
        react_1["default"].createElement("section", { className: "section bg-primary-50" },
            react_1["default"].createElement("div", { className: "container-custom" },
                react_1["default"].createElement(SectionHeader_1["default"], { title: "Ferramentas para Descobrir o Yield Gap", subtitle: "Conhe\u00E7a as principais metodologias e tecnologias utilizadas para identificar e quantificar o yield gap na cultura do algod\u00E3o", centered: true }),
                react_1["default"].createElement("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-10 items-center mb-16" },
                    react_1["default"].createElement(framer_motion_1.motion.div, { initial: { opacity: 0, x: -20 }, whileInView: { opacity: 1, x: 0 }, transition: { duration: 0.6 }, viewport: { once: true } },
                        react_1["default"].createElement("h3", { className: "text-2xl font-semibold mb-4 text-primary-800" }, "A Import\u00E2ncia da Diagnose Precisa"),
                        react_1["default"].createElement("p", { className: "mb-4 text-gray-700" }, "Para reduzir efetivamente o yield gap, \u00E9 fundamental primeiro identific\u00E1-lo e compreender suas causas espec\u00EDficas. Isso requer ferramentas e metodologias apropriadas que permitam quantificar a diferen\u00E7a entre a produtividade potencial ou ating\u00EDvel e a produtividade real obtida pelos agricultores."),
                        react_1["default"].createElement("p", { className: "mb-4 text-gray-700" }, "Diferentes abordagens podem ser utilizadas, desde modelos de simula\u00E7\u00E3o que estimam o potencial te\u00F3rico at\u00E9 an\u00E1lises de dados em larga escala que identificam padr\u00F5es e tend\u00EAncias em situa\u00E7\u00F5es reais de cultivo."),
                        react_1["default"].createElement("p", { className: "text-gray-700" }, "A combina\u00E7\u00E3o dessas ferramentas permite n\u00E3o apenas determinar a magnitude do yield gap, mas tamb\u00E9m identificar os fatores limitantes espec\u00EDficos para cada regi\u00E3o ou sistema de produ\u00E7\u00E3o, orientando interven\u00E7\u00F5es mais eficazes.")),
                    react_1["default"].createElement(framer_motion_1.motion.div, { initial: { opacity: 0, x: 20 }, whileInView: { opacity: 1, x: 0 }, transition: { duration: 0.6 }, viewport: { once: true } },
                        react_1["default"].createElement("img", { src: "https://images.pexels.com/photos/1181248/pexels-photo-1181248.jpeg", alt: "An\u00E1lise de dados agr\u00EDcolas", className: "rounded-lg shadow-md w-full h-auto" }))),
                react_1["default"].createElement("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" }, tools.map(function (tool, index) { return (react_1["default"].createElement(framer_motion_1.motion.div, { key: index, initial: { opacity: 0, y: 20 }, whileInView: { opacity: 1, y: 0 }, transition: { duration: 0.5, delay: index * 0.1 }, viewport: { once: true }, className: "card" },
                    react_1["default"].createElement("div", { className: "flex items-center mb-4" },
                        react_1["default"].createElement("div", { className: "p-3 bg-primary-100 rounded-full mr-4" },
                            react_1["default"].createElement(tool.icon, { size: 24, className: "text-primary-600" })),
                        react_1["default"].createElement("h3", { className: "text-xl font-semibold text-primary-800" }, tool.title)),
                    react_1["default"].createElement("p", { className: "text-gray-700 mb-4" }, tool.description),
                    react_1["default"].createElement("div", { className: "mb-3" },
                        react_1["default"].createElement("h4", { className: "font-semibold text-gray-800 mb-2" }, "Exemplos:"),
                        react_1["default"].createElement("ul", { className: "text-gray-700 pl-5 list-disc" }, tool.examples.map(function (example, i) { return (react_1["default"].createElement("li", { key: i }, example)); }))),
                    react_1["default"].createElement("div", null,
                        react_1["default"].createElement("h4", { className: "font-semibold text-gray-800 mb-2" }, "Vantagens:"),
                        react_1["default"].createElement("ul", { className: "text-gray-700 pl-5 list-disc" }, tool.advantages.map(function (advantage, i) { return (react_1["default"].createElement("li", { key: i }, advantage)); }))))); })))),
        react_1["default"].createElement("section", { className: "section bg-white" },
            react_1["default"].createElement("div", { className: "container-custom" },
                react_1["default"].createElement(SectionHeader_1["default"], { title: "Integrando Ferramentas para Uma An\u00E1lise Completa", subtitle: "Abordagem sistem\u00E1tica para identifica\u00E7\u00E3o e quantifica\u00E7\u00E3o do yield gap no algod\u00E3o", centered: true }),
                react_1["default"].createElement(framer_motion_1.motion.div, { initial: { opacity: 0, y: 20 }, whileInView: { opacity: 1, y: 0 }, transition: { duration: 0.6 }, viewport: { once: true }, className: "bg-primary-50 rounded-xl p-6 md:p-8 shadow-md" },
                    react_1["default"].createElement("h3", { className: "text-xl font-semibold mb-6 text-primary-800" }, "Metodologia em Cinco Etapas"),
                    react_1["default"].createElement("div", { className: "space-y-6" },
                        react_1["default"].createElement("div", { className: "bg-white p-5 rounded-lg shadow-sm" },
                            react_1["default"].createElement("div", { className: "flex items-center mb-3" },
                                react_1["default"].createElement("div", { className: "bg-primary-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3" }, "1"),
                                react_1["default"].createElement("h4", { className: "text-lg font-semibold text-primary-800" }, "Defini\u00E7\u00E3o dos N\u00EDveis de Refer\u00EAncia")),
                            react_1["default"].createElement("p", { className: "text-gray-700 pl-11" }, "Estabelecer claramente os n\u00EDveis de produtividade de refer\u00EAncia (potencial, ating\u00EDvel) para a regi\u00E3o ou sistema de produ\u00E7\u00E3o espec\u00EDfico, utilizando modelos de simula\u00E7\u00E3o calibrados para as condi\u00E7\u00F5es locais.")),
                        react_1["default"].createElement("div", { className: "bg-white p-5 rounded-lg shadow-sm" },
                            react_1["default"].createElement("div", { className: "flex items-center mb-3" },
                                react_1["default"].createElement("div", { className: "bg-primary-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3" }, "2"),
                                react_1["default"].createElement("h4", { className: "text-lg font-semibold text-primary-800" }, "Quantifica\u00E7\u00E3o da Produtividade Real")),
                            react_1["default"].createElement("p", { className: "text-gray-700 pl-11" }, "Coletar dados de produtividade real de m\u00FAltiplas fontes (agricultores, experimentos, estat\u00EDsticas oficiais) e valid\u00E1-los para garantir sua representatividade e precis\u00E3o.")),
                        react_1["default"].createElement("div", { className: "bg-white p-5 rounded-lg shadow-sm" },
                            react_1["default"].createElement("div", { className: "flex items-center mb-3" },
                                react_1["default"].createElement("div", { className: "bg-primary-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3" }, "3"),
                                react_1["default"].createElement("h4", { className: "text-lg font-semibold text-primary-800" }, "An\u00E1lise Espacial e Temporal")),
                            react_1["default"].createElement("p", { className: "text-gray-700 pl-11" }, "Utilizar ferramentas de sensoriamento remoto e SIG para analisar a variabilidade espacial do yield gap, e dados hist\u00F3ricos para compreender sua evolu\u00E7\u00E3o ao longo do tempo.")),
                        react_1["default"].createElement("div", { className: "bg-white p-5 rounded-lg shadow-sm" },
                            react_1["default"].createElement("div", { className: "flex items-center mb-3" },
                                react_1["default"].createElement("div", { className: "bg-primary-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3" }, "4"),
                                react_1["default"].createElement("h4", { className: "text-lg font-semibold text-primary-800" }, "Identifica\u00E7\u00E3o de Fatores Limitantes")),
                            react_1["default"].createElement("p", { className: "text-gray-700 pl-11" }, "Aplicar an\u00E1lises estat\u00EDsticas e t\u00E9cnicas de machine learning para identificar os principais fatores associados ao yield gap, considerando vari\u00E1veis clim\u00E1ticas, ed\u00E1ficas, bi\u00F3ticas e de manejo.")),
                        react_1["default"].createElement("div", { className: "bg-white p-5 rounded-lg shadow-sm" },
                            react_1["default"].createElement("div", { className: "flex items-center mb-3" },
                                react_1["default"].createElement("div", { className: "bg-primary-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3" }, "5"),
                                react_1["default"].createElement("h4", { className: "text-lg font-semibold text-primary-800" }, "Valida\u00E7\u00E3o em Campo")),
                            react_1["default"].createElement("p", { className: "text-gray-700 pl-11" }, "Conduzir experimentos de campo para validar os fatores limitantes identificados e quantificar seu impacto na produtividade, desenvolvendo recomenda\u00E7\u00F5es espec\u00EDficas para redu\u00E7\u00E3o do yield gap."))))))));
};
exports["default"] = ToolsForYieldGap;
