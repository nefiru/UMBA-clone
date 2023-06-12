/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./src/pages/_app.jsx":
/*!****************************!*\
  !*** ./src/pages/_app.jsx ***!
  \****************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ App)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _web3modal_ethereum__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @web3modal/ethereum */ \"@web3modal/ethereum\");\n/* harmony import */ var _web3modal_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @web3modal/react */ \"@web3modal/react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var wagmi__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! wagmi */ \"wagmi\");\n/* harmony import */ var wagmi_chains__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! wagmi/chains */ \"wagmi/chains\");\n/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../styles.css */ \"./src/styles.css\");\n/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_styles_css__WEBPACK_IMPORTED_MODULE_6__);\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_web3modal_ethereum__WEBPACK_IMPORTED_MODULE_1__, _web3modal_react__WEBPACK_IMPORTED_MODULE_2__, wagmi__WEBPACK_IMPORTED_MODULE_4__, wagmi_chains__WEBPACK_IMPORTED_MODULE_5__]);\n([_web3modal_ethereum__WEBPACK_IMPORTED_MODULE_1__, _web3modal_react__WEBPACK_IMPORTED_MODULE_2__, wagmi__WEBPACK_IMPORTED_MODULE_4__, wagmi_chains__WEBPACK_IMPORTED_MODULE_5__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\n\n\n\n\n\n\n// 1. Get projectID at https://cloud.walletconnect.com\nif (false) {}\nconst projectId = \"a30443e1837bd011bb9b5b73633ccd87\";\n// 2. Configure wagmi client\nconst chains = [\n    wagmi_chains__WEBPACK_IMPORTED_MODULE_5__.goerli\n];\nconst { provider  } = (0,wagmi__WEBPACK_IMPORTED_MODULE_4__.configureChains)(chains, [\n    (0,_web3modal_ethereum__WEBPACK_IMPORTED_MODULE_1__.w3mProvider)({\n        projectId\n    })\n]);\nconst wagmiClient = (0,wagmi__WEBPACK_IMPORTED_MODULE_4__.createClient)({\n    autoConnect: true,\n    connectors: (0,_web3modal_ethereum__WEBPACK_IMPORTED_MODULE_1__.w3mConnectors)({\n        version: 1,\n        chains,\n        projectId\n    }),\n    provider\n});\n// 3. Configure modal ethereum client\nconst ethereumClient = new _web3modal_ethereum__WEBPACK_IMPORTED_MODULE_1__.EthereumClient(wagmiClient, chains);\n// 4. Wrap your app with WagmiProvider and add <Web3Modal /> compoennt\nfunction App({ Component , pageProps  }) {\n    const [ready, setReady] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false);\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{\n        setReady(true);\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            ready ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(wagmi__WEBPACK_IMPORTED_MODULE_4__.WagmiConfig, {\n                client: wagmiClient,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                    ...pageProps\n                }, void 0, false, {\n                    fileName: \"E:\\\\USDTSALE\\\\src\\\\pages\\\\_app.jsx\",\n                    lineNumber: 50,\n                    columnNumber: 11\n                }, this)\n            }, void 0, false, {\n                fileName: \"E:\\\\USDTSALE\\\\src\\\\pages\\\\_app.jsx\",\n                lineNumber: 49,\n                columnNumber: 9\n            }, this) : null,\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_web3modal_react__WEBPACK_IMPORTED_MODULE_2__.Web3Modal, {\n                defaultChain: wagmi_chains__WEBPACK_IMPORTED_MODULE_5__.goerli,\n                themeMode: \"dark\",\n                themeVariables: {\n                    \"--w3m-background-color\": \"#01A8C3\",\n                    \"--w3m-accent-color\": \"#01A8C3\"\n                },\n                projectId: projectId,\n                ethereumClient: ethereumClient\n            }, void 0, false, {\n                fileName: \"E:\\\\USDTSALE\\\\src\\\\pages\\\\_app.jsx\",\n                lineNumber: 54,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n}\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvX2FwcC5qc3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBSTZCO0FBQ2dCO0FBQ0Q7QUFDdUI7QUFLN0M7QUFDQztBQUd2QixzREFBc0Q7QUFDdEQsSUFBSSxLQUFtQyxFQUFFLEVBRXhDO0FBRUQsTUFBTWdCLFlBQVlKLGtDQUFrQztBQUVwRCw0QkFBNEI7QUFDNUIsTUFBTUssU0FBUztJQUNiTixnREFBTUE7Q0FBQztBQUVULE1BQU0sRUFBRU8sU0FBUSxFQUFFLEdBQUdaLHNEQUFlQSxDQUFDVyxRQUFRO0lBQUNmLGdFQUFXQSxDQUFDO1FBQUVjO0lBQVU7Q0FBRztBQUN6RSxNQUFNRyxjQUFjWixtREFBWUEsQ0FBQztJQUMvQmEsYUFBYSxJQUFJO0lBQ2pCQyxZQUFZcEIsa0VBQWFBLENBQUM7UUFBRXFCLFNBQVM7UUFBR0w7UUFBUUQ7SUFBVTtJQUMxREU7QUFDRjtBQUVBLHFDQUFxQztBQUNyQyxNQUFNSyxpQkFBaUIsSUFBSXZCLCtEQUFjQSxDQUFDbUIsYUFBYUY7QUFFdkQsc0VBQXNFO0FBQ3ZELFNBQVNPLElBQUksRUFBRUMsVUFBUyxFQUFFQyxVQUFTLEVBQUUsRUFBRTtJQUNwRCxNQUFNLENBQUNDLE9BQU9DLFNBQVMsR0FBR3ZCLCtDQUFRQSxDQUFDLEtBQUs7SUFFeENELGdEQUFTQSxDQUFDLElBQU07UUFDZHdCLFNBQVMsSUFBSTtJQUNmLEdBQUcsRUFBRTtJQUVMLHFCQUNFOztZQUNHRCxzQkFDQyw4REFBQ25CLDhDQUFXQTtnQkFBQ3FCLFFBQVFWOzBCQUNuQiw0RUFBQ007b0JBQVcsR0FBR0MsU0FBUzs7Ozs7Ozs7Ozt1QkFFeEIsSUFBSTswQkFFUiw4REFBQ3ZCLHVEQUFTQTtnQkFDVjJCLGNBQWNuQixnREFBTUE7Z0JBQ3BCb0IsV0FBVTtnQkFDVkMsZ0JBQWdCO29CQUNkLDBCQUEyQjtvQkFDM0Isc0JBQXNCO2dCQUN4QjtnQkFFQWhCLFdBQVdBO2dCQUFXTyxnQkFBZ0JBOzs7Ozs7OztBQUc1QyxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbmV4dGpzLWV4YW1wbGUvLi9zcmMvcGFnZXMvX2FwcC5qc3g/NGM3NyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBFdGhlcmV1bUNsaWVudCxcbiAgdzNtQ29ubmVjdG9ycyxcbiAgdzNtUHJvdmlkZXIsXG59IGZyb20gXCJAd2ViM21vZGFsL2V0aGVyZXVtXCI7XG5pbXBvcnQgeyBXZWIzTW9kYWwgfSBmcm9tIFwiQHdlYjNtb2RhbC9yZWFjdFwiO1xuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgY29uZmlndXJlQ2hhaW5zLCBjcmVhdGVDbGllbnQsIFdhZ21pQ29uZmlnIH0gZnJvbSBcIndhZ21pXCI7XG5pbXBvcnQge1xuICBic2NUZXN0bmV0LFxuICBzZXBvbGlhLFxuICBnb2VybGlcbn0gZnJvbSBcIndhZ21pL2NoYWluc1wiO1xuaW1wb3J0IFwiLi4vc3R5bGVzLmNzc1wiO1xuXG5cbi8vIDEuIEdldCBwcm9qZWN0SUQgYXQgaHR0cHM6Ly9jbG91ZC53YWxsZXRjb25uZWN0LmNvbVxuaWYgKCFwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19QUk9KRUNUX0lEKSB7XG4gIHRocm93IG5ldyBFcnJvcihcIllvdSBuZWVkIHRvIHByb3ZpZGUgTkVYVF9QVUJMSUNfUFJPSkVDVF9JRCBlbnYgdmFyaWFibGVcIik7XG59XG5cbmNvbnN0IHByb2plY3RJZCA9IHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX1BST0pFQ1RfSUQ7XG5cbi8vIDIuIENvbmZpZ3VyZSB3YWdtaSBjbGllbnRcbmNvbnN0IGNoYWlucyA9IFtcbiAgZ29lcmxpXTtcblxuY29uc3QgeyBwcm92aWRlciB9ID0gY29uZmlndXJlQ2hhaW5zKGNoYWlucywgW3czbVByb3ZpZGVyKHsgcHJvamVjdElkIH0pXSk7XG5jb25zdCB3YWdtaUNsaWVudCA9IGNyZWF0ZUNsaWVudCh7XG4gIGF1dG9Db25uZWN0OiB0cnVlLFxuICBjb25uZWN0b3JzOiB3M21Db25uZWN0b3JzKHsgdmVyc2lvbjogMSwgY2hhaW5zLCBwcm9qZWN0SWQgfSksXG4gIHByb3ZpZGVyLFxufSk7XG5cbi8vIDMuIENvbmZpZ3VyZSBtb2RhbCBldGhlcmV1bSBjbGllbnRcbmNvbnN0IGV0aGVyZXVtQ2xpZW50ID0gbmV3IEV0aGVyZXVtQ2xpZW50KHdhZ21pQ2xpZW50LCBjaGFpbnMpO1xuXG4vLyA0LiBXcmFwIHlvdXIgYXBwIHdpdGggV2FnbWlQcm92aWRlciBhbmQgYWRkIDxXZWIzTW9kYWwgLz4gY29tcG9lbm50XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBcHAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9KSB7XG4gIGNvbnN0IFtyZWFkeSwgc2V0UmVhZHldID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgc2V0UmVhZHkodHJ1ZSk7XG4gIH0sIFtdKTtcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICB7cmVhZHkgPyAoXG4gICAgICAgIDxXYWdtaUNvbmZpZyBjbGllbnQ9e3dhZ21pQ2xpZW50fT5cbiAgICAgICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XG4gICAgICAgIDwvV2FnbWlDb25maWc+XG4gICAgICApIDogbnVsbH1cblxuICAgICAgPFdlYjNNb2RhbCBcbiAgICAgIGRlZmF1bHRDaGFpbj17Z29lcmxpfVxuICAgICAgdGhlbWVNb2RlPVwiZGFya1wiXG4gICAgICB0aGVtZVZhcmlhYmxlcz17e1xuICAgICAgICAnLS13M20tYmFja2dyb3VuZC1jb2xvcicgOiAnIzAxQThDMycsXG4gICAgICAgICctLXczbS1hY2NlbnQtY29sb3InOiAnIzAxQThDMydcbiAgICAgIH19XG4gICAgICBcbiAgICAgIHByb2plY3RJZD17cHJvamVjdElkfSBldGhlcmV1bUNsaWVudD17ZXRoZXJldW1DbGllbnR9IC8+XG4gICAgPC8+XG4gICk7XG59XG4iXSwibmFtZXMiOlsiRXRoZXJldW1DbGllbnQiLCJ3M21Db25uZWN0b3JzIiwidzNtUHJvdmlkZXIiLCJXZWIzTW9kYWwiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsImNvbmZpZ3VyZUNoYWlucyIsImNyZWF0ZUNsaWVudCIsIldhZ21pQ29uZmlnIiwiYnNjVGVzdG5ldCIsInNlcG9saWEiLCJnb2VybGkiLCJwcm9jZXNzIiwiZW52IiwiTkVYVF9QVUJMSUNfUFJPSkVDVF9JRCIsIkVycm9yIiwicHJvamVjdElkIiwiY2hhaW5zIiwicHJvdmlkZXIiLCJ3YWdtaUNsaWVudCIsImF1dG9Db25uZWN0IiwiY29ubmVjdG9ycyIsInZlcnNpb24iLCJldGhlcmV1bUNsaWVudCIsIkFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyIsInJlYWR5Iiwic2V0UmVhZHkiLCJjbGllbnQiLCJkZWZhdWx0Q2hhaW4iLCJ0aGVtZU1vZGUiLCJ0aGVtZVZhcmlhYmxlcyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/_app.jsx\n");

/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/***/ (() => {



/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "@web3modal/ethereum":
/*!**************************************!*\
  !*** external "@web3modal/ethereum" ***!
  \**************************************/
/***/ ((module) => {

"use strict";
module.exports = import("@web3modal/ethereum");;

/***/ }),

/***/ "@web3modal/react":
/*!***********************************!*\
  !*** external "@web3modal/react" ***!
  \***********************************/
/***/ ((module) => {

"use strict";
module.exports = import("@web3modal/react");;

/***/ }),

/***/ "wagmi":
/*!************************!*\
  !*** external "wagmi" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = import("wagmi");;

/***/ }),

/***/ "wagmi/chains":
/*!*******************************!*\
  !*** external "wagmi/chains" ***!
  \*******************************/
/***/ ((module) => {

"use strict";
module.exports = import("wagmi/chains");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./src/pages/_app.jsx"));
module.exports = __webpack_exports__;

})();