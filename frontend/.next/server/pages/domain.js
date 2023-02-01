"use strict";
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
exports.id = "pages/domain";
exports.ids = ["pages/domain"];
exports.modules = {

/***/ "./lib/web3.ts":
/*!*********************!*\
  !*** ./lib/web3.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getNetworkFromChainId\": () => (/* binding */ getNetworkFromChainId),\n/* harmony export */   \"injected\": () => (/* binding */ injected)\n/* harmony export */ });\n/* harmony import */ var _web3_react_injected_connector__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @web3-react/injected-connector */ \"@web3-react/injected-connector\");\n/* harmony import */ var _web3_react_injected_connector__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_web3_react_injected_connector__WEBPACK_IMPORTED_MODULE_0__);\n\nconst injected = new _web3_react_injected_connector__WEBPACK_IMPORTED_MODULE_0__.InjectedConnector({});\nconst getNetworkFromChainId = (chainId)=>{\n    let chainName = \"\";\n    if (chainId == 4) {\n        chainName = \"rinkeby\";\n    }\n    if (chainId == 5) {\n        chainName = \"goerli\";\n    }\n    return chainName;\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9saWIvd2ViMy50cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQW1FO0FBSTVELE1BQU1DLFdBQVcsSUFBSUQsNkVBQWlCQSxDQUFDLENBQUMsR0FBRztBQUUzQyxNQUFNRSx3QkFBd0IsQ0FBQ0MsVUFBb0I7SUFDeEQsSUFBSUMsWUFBWTtJQUNoQixJQUFJRCxXQUFXLEdBQUc7UUFDaEJDLFlBQVk7SUFDZCxDQUFDO0lBQ0QsSUFBSUQsV0FBVyxHQUFHO1FBQ2hCQyxZQUFZO0lBQ2QsQ0FBQztJQUNELE9BQU9BO0FBQ1QsRUFBRSIsInNvdXJjZXMiOlsid2VicGFjazovL3Rvb2xib3gvLi9saWIvd2ViMy50cz8yZWZhIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGVkQ29ubmVjdG9yIH0gZnJvbSBcIkB3ZWIzLXJlYWN0L2luamVjdGVkLWNvbm5lY3RvclwiO1xuXG5cblxuZXhwb3J0IGNvbnN0IGluamVjdGVkID0gbmV3IEluamVjdGVkQ29ubmVjdG9yKHt9KTtcblxuZXhwb3J0IGNvbnN0IGdldE5ldHdvcmtGcm9tQ2hhaW5JZCA9IChjaGFpbklkOiBudW1iZXIpID0+IHtcbiAgbGV0IGNoYWluTmFtZSA9IFwiXCI7XG4gIGlmIChjaGFpbklkID09IDQpIHtcbiAgICBjaGFpbk5hbWUgPSBcInJpbmtlYnlcIjtcbiAgfVxuICBpZiAoY2hhaW5JZCA9PSA1KSB7XG4gICAgY2hhaW5OYW1lID0gXCJnb2VybGlcIjtcbiAgfVxuICByZXR1cm4gY2hhaW5OYW1lO1xufTtcbiJdLCJuYW1lcyI6WyJJbmplY3RlZENvbm5lY3RvciIsImluamVjdGVkIiwiZ2V0TmV0d29ya0Zyb21DaGFpbklkIiwiY2hhaW5JZCIsImNoYWluTmFtZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./lib/web3.ts\n");

/***/ }),

/***/ "./pages/domain.tsx":
/*!**************************!*\
  !*** ./pages/domain.tsx ***!
  \**************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @chakra-ui/react */ \"@chakra-ui/react\");\n/* harmony import */ var _lib_web3__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../lib/web3 */ \"./lib/web3.ts\");\n/* harmony import */ var _web3_react_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @web3-react/core */ \"@web3-react/core\");\n/* harmony import */ var _web3_react_core__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_web3_react_core__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ethers */ \"ethers\");\n/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(ethers__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var web3_domain_resolver__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! web3-domain-resolver */ \"web3-domain-resolver\");\n/* harmony import */ var web3_domain_resolver__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(web3_domain_resolver__WEBPACK_IMPORTED_MODULE_6__);\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__]);\n_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\n\n\n\n\nconst Unstoppable = ()=>{\n    const web3resolver = new web3_domain_resolver__WEBPACK_IMPORTED_MODULE_6__.Web3Resolver();\n    const { activate , library , account  } = (0,_web3_react_core__WEBPACK_IMPORTED_MODULE_4__.useWeb3React)();\n    // const { metaState } = useMetamask();\n    const [publicKey, setPublicKey] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [domain, setDomain] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [address, setAddress] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const requestPublicKey = async (account)=>{\n        const result = await window.ethereum.send(\"eth_getEncryptionPublicKey\", [\n            account\n        ]);\n        return result.result;\n    };\n    const connect = async ()=>{\n        activate(_lib_web3__WEBPACK_IMPORTED_MODULE_3__.injected);\n    };\n    const handleAddressChange = (e)=>{\n        const inputValue = e.target.value;\n        setDomain(inputValue);\n    };\n    // Use the mainnet\n    // Specify your own API keys\n    // Each is optional, and if you omit it the default\n    // API key for that service will be used.\n    const ens = async ()=>{\n        const provider = new ethers__WEBPACK_IMPORTED_MODULE_5__.ethers.providers.InfuraProvider(\"homestead\", [\n            \"bc8701cbe1834b4c88966c78c6d3aab0\"\n        ]);\n        const address = await provider.resolveName(\"0xyuzu.eth\");\n        console.log(address);\n    };\n    const freename = async ()=>{\n        const resolvedDomain = await web3resolver.resolve(\"takumi.hosokawa\");\n        console.log(resolvedDomain.ownerAddress, \"domain\");\n    };\n    const search = async ()=>{\n        // Get domain information from API\n        const check = domain.indexOf(\".\");\n        let address = domain;\n        if (check !== -1) {\n            console.log(\"The string contains a period.\");\n            // Fetch address from Unstoppable Domain\n            let afterDot = domain.substring(check + 1);\n            let [nextWord] = afterDot.split(\" \");\n            if (nextWord == \"crypto\") {\n                const resp = await fetch(`https://resolve.unstoppabledomains.com/domains/${domain}`, {\n                    method: \"GET\",\n                    headers: {\n                        Authorization: \"Bearer 26745ce7-3efc-42f7-bda0-691c559f48b7\"\n                    }\n                });\n                const data = await resp.json();\n                console.log(data.records);\n                // const text = await resp.text();\n                // console.log(text)\n                address = data.meta.owner;\n            } else if (nextWord == \"eth\") {\n                const provider = new ethers__WEBPACK_IMPORTED_MODULE_5__.ethers.providers.InfuraProvider(\"homestead\", [\n                    \"bc8701cbe1834b4c88966c78c6d3aab0\"\n                ]);\n                address = await provider.resolveName(\"0xyuzu.eth\");\n            } else {\n                address = \"invalid\";\n            }\n        }\n        setAddress(address);\n        console.log(address);\n    // set address to address\n    };\n    // const web3 = metaState.web3 as providers.Web3Provider;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Input, {\n                onChange: handleAddressChange\n            }, void 0, false, {\n                fileName: \"/Users/takumi/Documents/Yuzurypto/Development/toolbox/frontend/pages/domain.tsx\",\n                lineNumber: 118,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Button, {\n                onClick: search,\n                children: \"Search\"\n            }, void 0, false, {\n                fileName: \"/Users/takumi/Documents/Yuzurypto/Development/toolbox/frontend/pages/domain.tsx\",\n                lineNumber: 119,\n                columnNumber: 7\n            }, undefined),\n            address && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Text, {\n                children: address\n            }, void 0, false, {\n                fileName: \"/Users/takumi/Documents/Yuzurypto/Development/toolbox/frontend/pages/domain.tsx\",\n                lineNumber: 120,\n                columnNumber: 19\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Button, {\n                onClick: ens\n            }, void 0, false, {\n                fileName: \"/Users/takumi/Documents/Yuzurypto/Development/toolbox/frontend/pages/domain.tsx\",\n                lineNumber: 121,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Button, {\n                onClick: freename,\n                children: \"Freename\"\n            }, void 0, false, {\n                fileName: \"/Users/takumi/Documents/Yuzurypto/Development/toolbox/frontend/pages/domain.tsx\",\n                lineNumber: 122,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/takumi/Documents/Yuzurypto/Development/toolbox/frontend/pages/domain.tsx\",\n        lineNumber: 117,\n        columnNumber: 5\n    }, undefined);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Unstoppable);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q3hCeEIseUJBQVcsOERBQUNkLGtEQUFJQTswQkFBRWM7Ozs7OzswQkFDbkIsOERBQUNoQixvREFBTUE7Z0JBQUMyRCxTQUFTOUI7Ozs7OzswQkFDakIsOERBQUM3QixvREFBTUE7Z0JBQUMyRCxTQUFTdkI7MEJBQVU7Ozs7Ozs7Ozs7OztBQUdqQztBQUVBLGlFQUFlN0IsV0FBV0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3Rvb2xib3gvLi9wYWdlcy9kb21haW4udHN4PzM0OGIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQge1xuICBCb3gsXG4gIEJ1dHRvbixcbiAgRmxleCxcbiAgRm9ybUNvbnRyb2wsXG4gIEltYWdlLFxuICBJbnB1dCxcbiAgTGluayxcbiAgTW9kYWwsXG4gIE1vZGFsQm9keSxcbiAgTW9kYWxDbG9zZUJ1dHRvbixcbiAgTW9kYWxDb250ZW50LFxuICBNb2RhbE92ZXJsYXksXG4gIFNlbGVjdCxcbiAgU3Bpbm5lcixcbiAgVGV4dCxcbiAgdXNlRGlzY2xvc3VyZSxcbiAgdXNlVGhlbWUsXG4gIHVzZVRvYXN0LFxufSBmcm9tIFwiQGNoYWtyYS11aS9yZWFjdFwiO1xuaW1wb3J0IHsgaW5qZWN0ZWQgfSBmcm9tIFwiLi4vbGliL3dlYjNcIjtcbmltcG9ydCB7IFdlYjNQcm92aWRlciB9IGZyb20gXCJAZXRoZXJzcHJvamVjdC9wcm92aWRlcnNcIjtcbmltcG9ydCB7IHVzZVdlYjNSZWFjdCB9IGZyb20gXCJAd2ViMy1yZWFjdC9jb3JlXCI7XG5pbXBvcnQgeyB1c2VNZXRhbWFzayB9IGZyb20gXCJ1c2UtbWV0YW1hc2tcIjtcbmltcG9ydCB7IGV0aGVycyB9IGZyb20gXCJldGhlcnNcIjtcbmltcG9ydCB7IFdlYjNSZXNvbHZlciB9IGZyb20gXCJ3ZWIzLWRvbWFpbi1yZXNvbHZlclwiO1xuaW1wb3J0ICogYXMgc2lnVXRpbCBmcm9tIFwiQG1ldGFtYXNrL2V0aC1zaWctdXRpbFwiO1xuaW1wb3J0ICogYXMgZXRoVXRpbCBmcm9tIFwiZXRoZXJldW1qcy11dGlsXCI7XG5pbXBvcnQgeyB1c2VXZWIzTW9kYWwsIFdlYjNCdXR0b24gfSBmcm9tIFwiQHdlYjNtb2RhbC9yZWFjdFwiO1xuXG5jb25zdCBVbnN0b3BwYWJsZSA9ICgpID0+IHtcbiAgY29uc3Qgd2ViM3Jlc29sdmVyID0gbmV3IFdlYjNSZXNvbHZlcigpO1xuICBjb25zdCB7IGFjdGl2YXRlLCBsaWJyYXJ5LCBhY2NvdW50IH0gPSB1c2VXZWIzUmVhY3Q8V2ViM1Byb3ZpZGVyPigpO1xuICAvLyBjb25zdCB7IG1ldGFTdGF0ZSB9ID0gdXNlTWV0YW1hc2soKTtcbiAgY29uc3QgW3B1YmxpY0tleSwgc2V0UHVibGljS2V5XSA9IHVzZVN0YXRlKFwiXCIpO1xuICBjb25zdCBbZG9tYWluLCBzZXREb21haW5dID0gdXNlU3RhdGUoXCJcIik7XG4gIGNvbnN0IFthZGRyZXNzLCBzZXRBZGRyZXNzXSA9IHVzZVN0YXRlKFwiXCIpO1xuICBjb25zdCByZXF1ZXN0UHVibGljS2V5ID0gYXN5bmMgKGFjY291bnQ6IHN0cmluZykgPT4ge1xuICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0ICh3aW5kb3cgYXMgYW55KS5ldGhlcmV1bS5zZW5kKFxuICAgICAgXCJldGhfZ2V0RW5jcnlwdGlvblB1YmxpY0tleVwiLFxuICAgICAgW2FjY291bnRdXG4gICAgKTtcbiAgICByZXR1cm4gcmVzdWx0LnJlc3VsdDtcbiAgfTtcbiAgY29uc3QgY29ubmVjdCA9IGFzeW5jICgpID0+IHtcbiAgICBhY3RpdmF0ZShpbmplY3RlZCk7XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlQWRkcmVzc0NoYW5nZSA9IChlOiBhbnkpID0+IHtcbiAgICBjb25zdCBpbnB1dFZhbHVlID0gZS50YXJnZXQudmFsdWU7XG4gICAgc2V0RG9tYWluKGlucHV0VmFsdWUpO1xuICB9O1xuXG4gIC8vIFVzZSB0aGUgbWFpbm5ldFxuXG4gIC8vIFNwZWNpZnkgeW91ciBvd24gQVBJIGtleXNcbiAgLy8gRWFjaCBpcyBvcHRpb25hbCwgYW5kIGlmIHlvdSBvbWl0IGl0IHRoZSBkZWZhdWx0XG4gIC8vIEFQSSBrZXkgZm9yIHRoYXQgc2VydmljZSB3aWxsIGJlIHVzZWQuXG4gIFxuICBjb25zdCBlbnMgPSBhc3luYyAoKSA9PiB7XG4gICAgY29uc3QgcHJvdmlkZXIgPSBuZXcgZXRoZXJzLnByb3ZpZGVycy5JbmZ1cmFQcm92aWRlcigoXCJob21lc3RlYWRcIiksIFtcbiAgICAgIFwiYmM4NzAxY2JlMTgzNGI0Yzg4OTY2Yzc4YzZkM2FhYjBcIixcbiAgICBdKTtcbiAgICBjb25zdCBhZGRyZXNzID0gYXdhaXQgcHJvdmlkZXJcbiAgICAgIC5yZXNvbHZlTmFtZShcIjB4eXV6dS5ldGhcIik7XG4gICAgY29uc29sZS5sb2coYWRkcmVzcyk7XG4gIH07XG5cbiAgY29uc3QgZnJlZW5hbWUgPSBhc3luYygpID0+IHtcbiAgICBjb25zdCByZXNvbHZlZERvbWFpbiA9IGF3YWl0IHdlYjNyZXNvbHZlci5yZXNvbHZlKFwidGFrdW1pLmhvc29rYXdhXCIpO1xuICAgIGNvbnNvbGUubG9nKHJlc29sdmVkRG9tYWluLm93bmVyQWRkcmVzcywgXCJkb21haW5cIik7XG4gIH0gXG5cblxuICBjb25zdCBzZWFyY2ggPSBhc3luYyAoKSA9PiB7XG4gICAgLy8gR2V0IGRvbWFpbiBpbmZvcm1hdGlvbiBmcm9tIEFQSVxuICAgIGNvbnN0IGNoZWNrID0gZG9tYWluLmluZGV4T2YoXCIuXCIpO1xuICAgIGxldCBhZGRyZXNzID0gZG9tYWluO1xuICAgIGlmIChjaGVjayAhPT0gLTEpIHtcbiAgICAgIGNvbnNvbGUubG9nKFwiVGhlIHN0cmluZyBjb250YWlucyBhIHBlcmlvZC5cIik7XG4gICAgICAvLyBGZXRjaCBhZGRyZXNzIGZyb20gVW5zdG9wcGFibGUgRG9tYWluXG4gICAgICBsZXQgYWZ0ZXJEb3QgPSBkb21haW4uc3Vic3RyaW5nKGNoZWNrICsgMSk7XG4gICAgICBsZXQgW25leHRXb3JkXSA9IGFmdGVyRG90LnNwbGl0KFwiIFwiKTtcbiAgICAgIGlmIChuZXh0V29yZCA9PSBcImNyeXB0b1wiKSB7XG4gICAgICAgIGNvbnN0IHJlc3AgPSBhd2FpdCBmZXRjaChcbiAgICAgICAgICBgaHR0cHM6Ly9yZXNvbHZlLnVuc3RvcHBhYmxlZG9tYWlucy5jb20vZG9tYWlucy8ke2RvbWFpbn1gLFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIG1ldGhvZDogXCJHRVRcIixcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICAgQXV0aG9yaXphdGlvbjogXCJCZWFyZXIgMjY3NDVjZTctM2VmYy00MmY3LWJkYTAtNjkxYzU1OWY0OGI3XCIsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgICAgXG4gICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwLmpzb24oKTtcbiAgICAgICAgY29uc29sZS5sb2coZGF0YS5yZWNvcmRzKTtcbiAgICAgICAgLy8gY29uc3QgdGV4dCA9IGF3YWl0IHJlc3AudGV4dCgpO1xuICAgICAgICAvLyBjb25zb2xlLmxvZyh0ZXh0KVxuICAgICAgICBhZGRyZXNzID0gZGF0YS5tZXRhLm93bmVyO1xuICAgICAgfSBlbHNlIGlmIChuZXh0V29yZCA9PSBcImV0aFwiKSB7XG4gICAgICAgIGNvbnN0IHByb3ZpZGVyID0gbmV3IGV0aGVycy5wcm92aWRlcnMuSW5mdXJhUHJvdmlkZXIoXCJob21lc3RlYWRcIiwgW1xuICAgICAgICAgIFwiYmM4NzAxY2JlMTgzNGI0Yzg4OTY2Yzc4YzZkM2FhYjBcIixcbiAgICAgICAgXSk7XG4gICAgICAgIGFkZHJlc3MgPSBhd2FpdCBwcm92aWRlci5yZXNvbHZlTmFtZShcIjB4eXV6dS5ldGhcIik7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBhZGRyZXNzID0gXCJpbnZhbGlkXCI7XG4gICAgICB9XG4gICAgfVxuICAgIHNldEFkZHJlc3MoYWRkcmVzcyk7XG4gICAgY29uc29sZS5sb2coYWRkcmVzcyk7XG4gICAgLy8gc2V0IGFkZHJlc3MgdG8gYWRkcmVzc1xuICB9O1xuXG4gIC8vIGNvbnN0IHdlYjMgPSBtZXRhU3RhdGUud2ViMyBhcyBwcm92aWRlcnMuV2ViM1Byb3ZpZGVyO1xuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8SW5wdXQgb25DaGFuZ2U9e2hhbmRsZUFkZHJlc3NDaGFuZ2V9PjwvSW5wdXQ+XG4gICAgICA8QnV0dG9uIG9uQ2xpY2s9e3NlYXJjaH0+U2VhcmNoPC9CdXR0b24+XG4gICAgICB7YWRkcmVzcyAmJiA8VGV4dD57YWRkcmVzc308L1RleHQ+fVxuICAgICAgPEJ1dHRvbiBvbkNsaWNrPXtlbnN9PjwvQnV0dG9uPlxuICAgICAgPEJ1dHRvbiBvbkNsaWNrPXtmcmVlbmFtZX0+RnJlZW5hbWU8L0J1dHRvbj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFVuc3RvcHBhYmxlO1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJCdXR0b24iLCJJbnB1dCIsIlRleHQiLCJpbmplY3RlZCIsInVzZVdlYjNSZWFjdCIsImV0aGVycyIsIldlYjNSZXNvbHZlciIsIlVuc3RvcHBhYmxlIiwid2ViM3Jlc29sdmVyIiwiYWN0aXZhdGUiLCJsaWJyYXJ5IiwiYWNjb3VudCIsInB1YmxpY0tleSIsInNldFB1YmxpY0tleSIsImRvbWFpbiIsInNldERvbWFpbiIsImFkZHJlc3MiLCJzZXRBZGRyZXNzIiwicmVxdWVzdFB1YmxpY0tleSIsInJlc3VsdCIsIndpbmRvdyIsImV0aGVyZXVtIiwic2VuZCIsImNvbm5lY3QiLCJoYW5kbGVBZGRyZXNzQ2hhbmdlIiwiZSIsImlucHV0VmFsdWUiLCJ0YXJnZXQiLCJ2YWx1ZSIsImVucyIsInByb3ZpZGVyIiwicHJvdmlkZXJzIiwiSW5mdXJhUHJvdmlkZXIiLCJyZXNvbHZlTmFtZSIsImNvbnNvbGUiLCJsb2ciLCJmcmVlbmFtZSIsInJlc29sdmVkRG9tYWluIiwicmVzb2x2ZSIsIm93bmVyQWRkcmVzcyIsInNlYXJjaCIsImNoZWNrIiwiaW5kZXhPZiIsImFmdGVyRG90Iiwic3Vic3RyaW5nIiwibmV4dFdvcmQiLCJzcGxpdCIsInJlc3AiLCJmZXRjaCIsIm1ldGhvZCIsImhlYWRlcnMiLCJBdXRob3JpemF0aW9uIiwiZGF0YSIsImpzb24iLCJyZWNvcmRzIiwibWV0YSIsIm93bmVyIiwiZGl2Iiwib25DaGFuZ2UiLCJvbkNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/domain.tsx\n");

/***/ }),

/***/ "@web3-react/core":
/*!***********************************!*\
  !*** external "@web3-react/core" ***!
  \***********************************/
/***/ ((module) => {

module.exports = require("@web3-react/core");

/***/ }),

/***/ "@web3-react/injected-connector":
/*!*************************************************!*\
  !*** external "@web3-react/injected-connector" ***!
  \*************************************************/
/***/ ((module) => {

module.exports = require("@web3-react/injected-connector");

/***/ }),

/***/ "ethers":
/*!*************************!*\
  !*** external "ethers" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("ethers");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "web3-domain-resolver":
/*!***************************************!*\
  !*** external "web3-domain-resolver" ***!
  \***************************************/
/***/ ((module) => {

module.exports = require("web3-domain-resolver");

/***/ }),

/***/ "@chakra-ui/react":
/*!***********************************!*\
  !*** external "@chakra-ui/react" ***!
  \***********************************/
/***/ ((module) => {

module.exports = import("@chakra-ui/react");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/domain.tsx"));
module.exports = __webpack_exports__;

})();