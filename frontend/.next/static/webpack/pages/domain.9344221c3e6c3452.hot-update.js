"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/domain",{

/***/ "./pages/domain.tsx":
/*!**************************!*\
  !*** ./pages/domain.tsx ***!
  \**************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/index.mjs\");\n/* harmony import */ var _lib_web3__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../lib/web3 */ \"./lib/web3.ts\");\n/* harmony import */ var _web3_react_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @web3-react/core */ \"./node_modules/@web3-react/core/dist/core.esm.js\");\n/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ethers */ \"./node_modules/ethers/lib.esm/index.js\");\n/* harmony import */ var web3_domain_resolver__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! web3-domain-resolver */ \"./node_modules/web3-domain-resolver/lib/index.js\");\n/* harmony import */ var web3_domain_resolver__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(web3_domain_resolver__WEBPACK_IMPORTED_MODULE_4__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nconst Unstoppable = ()=>{\n    _s();\n    const web3resolver = new web3_domain_resolver__WEBPACK_IMPORTED_MODULE_4__.Web3Resolver();\n    const { activate , library , account  } = (0,_web3_react_core__WEBPACK_IMPORTED_MODULE_3__.useWeb3React)();\n    // const { metaState } = useMetamask();\n    const [publicKey, setPublicKey] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [domain, setDomain] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [address, setAddress] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const requestPublicKey = async (account)=>{\n        const result = await window.ethereum.send(\"eth_getEncryptionPublicKey\", [\n            account\n        ]);\n        return result.result;\n    };\n    const connect = async ()=>{\n        activate(_lib_web3__WEBPACK_IMPORTED_MODULE_2__.injected);\n    };\n    const handleAddressChange = (e)=>{\n        const inputValue = e.target.value;\n        setDomain(inputValue);\n    };\n    // Use the mainnet\n    // Specify your own API keys\n    // Each is optional, and if you omit it the default\n    // API key for that service will be used.\n    const ens = async ()=>{\n        const provider = new ethers__WEBPACK_IMPORTED_MODULE_5__.ethers.providers.InfuraProvider(\"homestead\", [\n            \"bc8701cbe1834b4c88966c78c6d3aab0\"\n        ]);\n        const address = await provider.resolveName(\"0xyuzu.eth\");\n        console.log(address);\n    };\n    const freename = async ()=>{\n        const resolvedDomain = await web3resolver.resolve(\"takumi.hosokawa\");\n        console.log(resolvedDomain.ownerAddress, \"domain\");\n    };\n    const search = async ()=>{\n        // Get domain information from API\n        const check = domain.indexOf(\".\");\n        let address = domain;\n        if (check !== -1) {\n            console.log(\"The string contains a period.\");\n            // Fetch address from Unstoppable Domain\n            let afterDot = domain.substring(check + 1);\n            let [nextWord] = afterDot.split(\" \");\n            if (nextWord == \"crypto\") {\n                const resp = await fetch(\"https://resolve.unstoppabledomains.com/domains/\".concat(domain), {\n                    method: \"GET\",\n                    headers: {\n                        Authorization: \"Bearer 26745ce7-3efc-42f7-bda0-691c559f48b7\"\n                    }\n                });\n                const data = await resp.json();\n                console.log(data);\n                // const text = await resp.text();\n                // console.log(text)\n                address = data.meta.owner;\n            } else if (nextWord == \"eth\") {\n                const provider = new ethers__WEBPACK_IMPORTED_MODULE_5__.ethers.providers.InfuraProvider(\"homestead\", [\n                    \"bc8701cbe1834b4c88966c78c6d3aab0\"\n                ]);\n                address = await provider.resolveName(\"0xyuzu.eth\");\n            } else {\n                address = \"invalid\";\n            }\n        }\n        setAddress(address);\n        console.log(address);\n    // set address to address\n    };\n    // const web3 = metaState.web3 as providers.Web3Provider;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Input, {\n                onChange: handleAddressChange\n            }, void 0, false, {\n                fileName: \"/Users/takumi/Documents/Yuzurypto/Development/toolbox/frontend/pages/domain.tsx\",\n                lineNumber: 118,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Button, {\n                onClick: search,\n                children: \"Search\"\n            }, void 0, false, {\n                fileName: \"/Users/takumi/Documents/Yuzurypto/Development/toolbox/frontend/pages/domain.tsx\",\n                lineNumber: 119,\n                columnNumber: 7\n            }, undefined),\n            address && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Text, {\n                children: address\n            }, void 0, false, {\n                fileName: \"/Users/takumi/Documents/Yuzurypto/Development/toolbox/frontend/pages/domain.tsx\",\n                lineNumber: 120,\n                columnNumber: 19\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Button, {\n                onClick: ens\n            }, void 0, false, {\n                fileName: \"/Users/takumi/Documents/Yuzurypto/Development/toolbox/frontend/pages/domain.tsx\",\n                lineNumber: 121,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Button, {\n                onClick: freename,\n                children: \"Freename\"\n            }, void 0, false, {\n                fileName: \"/Users/takumi/Documents/Yuzurypto/Development/toolbox/frontend/pages/domain.tsx\",\n                lineNumber: 122,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/takumi/Documents/Yuzurypto/Development/toolbox/frontend/pages/domain.tsx\",\n        lineNumber: 117,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Unstoppable, \"AJ4QhxxIxQXlQKkTcHb1LQyGtUw=\", false, function() {\n    return [\n        _web3_react_core__WEBPACK_IMPORTED_MODULE_3__.useWeb3React\n    ];\n});\n_c = Unstoppable;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Unstoppable);\nvar _c;\n$RefreshReg$(_c, \"Unstoppable\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9kb21haW4udHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7O0FBQXdDO0FBb0JkO0FBQ2E7QUFFUztBQUVoQjtBQUNvQjtBQUtwRCxNQUFNUyxjQUFjLElBQU07O0lBQ3hCLE1BQU1DLGVBQWUsSUFBSUYsOERBQVlBO0lBQ3JDLE1BQU0sRUFBRUcsU0FBUSxFQUFFQyxRQUFPLEVBQUVDLFFBQU8sRUFBRSxHQUFHUCw4REFBWUE7SUFDbkQsdUNBQXVDO0lBQ3ZDLE1BQU0sQ0FBQ1EsV0FBV0MsYUFBYSxHQUFHZCwrQ0FBUUEsQ0FBQztJQUMzQyxNQUFNLENBQUNlLFFBQVFDLFVBQVUsR0FBR2hCLCtDQUFRQSxDQUFDO0lBQ3JDLE1BQU0sQ0FBQ2lCLFNBQVNDLFdBQVcsR0FBR2xCLCtDQUFRQSxDQUFDO0lBQ3ZDLE1BQU1tQixtQkFBbUIsT0FBT1AsVUFBb0I7UUFDbEQsTUFBTVEsU0FBUyxNQUFNLE9BQWdCRSxRQUFRLENBQUNDLElBQUksQ0FDaEQsOEJBQ0E7WUFBQ1g7U0FBUTtRQUVYLE9BQU9RLE9BQU9BLE1BQU07SUFDdEI7SUFDQSxNQUFNSSxVQUFVLFVBQVk7UUFDMUJkLFNBQVNOLCtDQUFRQTtJQUNuQjtJQUVBLE1BQU1xQixzQkFBc0IsQ0FBQ0MsSUFBVztRQUN0QyxNQUFNQyxhQUFhRCxFQUFFRSxNQUFNLENBQUNDLEtBQUs7UUFDakNiLFVBQVVXO0lBQ1o7SUFFQSxrQkFBa0I7SUFFbEIsNEJBQTRCO0lBQzVCLG1EQUFtRDtJQUNuRCx5Q0FBeUM7SUFFekMsTUFBTUcsTUFBTSxVQUFZO1FBQ3RCLE1BQU1DLFdBQVcsSUFBSXpCLG1FQUErQixDQUFFLGFBQWM7WUFDbEU7U0FDRDtRQUNELE1BQU1XLFVBQVUsTUFBTWMsU0FDbkJHLFdBQVcsQ0FBQztRQUNmQyxRQUFRQyxHQUFHLENBQUNuQjtJQUNkO0lBRUEsTUFBTW9CLFdBQVcsVUFBVztRQUMxQixNQUFNQyxpQkFBaUIsTUFBTTdCLGFBQWE4QixPQUFPLENBQUM7UUFDbERKLFFBQVFDLEdBQUcsQ0FBQ0UsZUFBZUUsWUFBWSxFQUFFO0lBQzNDO0lBR0EsTUFBTUMsU0FBUyxVQUFZO1FBQ3pCLGtDQUFrQztRQUNsQyxNQUFNQyxRQUFRM0IsT0FBTzRCLE9BQU8sQ0FBQztRQUM3QixJQUFJMUIsVUFBVUY7UUFDZCxJQUFJMkIsVUFBVSxDQUFDLEdBQUc7WUFDaEJQLFFBQVFDLEdBQUcsQ0FBQztZQUNaLHdDQUF3QztZQUN4QyxJQUFJUSxXQUFXN0IsT0FBTzhCLFNBQVMsQ0FBQ0gsUUFBUTtZQUN4QyxJQUFJLENBQUNJLFNBQVMsR0FBR0YsU0FBU0csS0FBSyxDQUFDO1lBQ2hDLElBQUlELFlBQVksVUFBVTtnQkFDeEIsTUFBTUUsT0FBTyxNQUFNQyxNQUNqQixrREFBeUQsT0FBUGxDLFNBQ2xEO29CQUNFbUMsUUFBUTtvQkFDUkMsU0FBUzt3QkFDUEMsZUFBZTtvQkFDakI7Z0JBQ0Y7Z0JBR0YsTUFBTUMsT0FBTyxNQUFNTCxLQUFLTSxJQUFJO2dCQUM1Qm5CLFFBQVFDLEdBQUcsQ0FBQ2lCO2dCQUNaLGtDQUFrQztnQkFDbEMsb0JBQW9CO2dCQUNwQnBDLFVBQVVvQyxLQUFLRSxJQUFJLENBQUNDLEtBQUs7WUFDM0IsT0FBTyxJQUFJVixZQUFZLE9BQU87Z0JBQzVCLE1BQU1mLFdBQVcsSUFBSXpCLG1FQUErQixDQUFDLGFBQWE7b0JBQ2hFO2lCQUNEO2dCQUNEVyxVQUFVLE1BQU1jLFNBQVNHLFdBQVcsQ0FBQztZQUN2QyxPQUFPO2dCQUNMakIsVUFBVTtZQUNaLENBQUM7UUFDSCxDQUFDO1FBQ0RDLFdBQVdEO1FBQ1hrQixRQUFRQyxHQUFHLENBQUNuQjtJQUNaLHlCQUF5QjtJQUMzQjtJQUVBLHlEQUF5RDtJQUN6RCxxQkFDRSw4REFBQ3dDOzswQkFDQyw4REFBQ3ZELG1EQUFLQTtnQkFBQ3dELFVBQVVqQzs7Ozs7OzBCQUNqQiw4REFBQ3hCLG9EQUFNQTtnQkFBQzBELFNBQVNsQjswQkFBUTs7Ozs7O1lBQ3hCeEIseUJBQVcsOERBQUNkLGtEQUFJQTswQkFBRWM7Ozs7OzswQkFDbkIsOERBQUNoQixvREFBTUE7Z0JBQUMwRCxTQUFTN0I7Ozs7OzswQkFDakIsOERBQUM3QixvREFBTUE7Z0JBQUMwRCxTQUFTdEI7MEJBQVU7Ozs7Ozs7Ozs7OztBQUdqQztHQTdGTTdCOztRQUVtQ0gsMERBQVlBOzs7S0FGL0NHO0FBK0ZOLCtEQUFlQSxXQUFXQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2RvbWFpbi50c3g/MzQ4YiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7XG4gIEJveCxcbiAgQnV0dG9uLFxuICBGbGV4LFxuICBGb3JtQ29udHJvbCxcbiAgSW1hZ2UsXG4gIElucHV0LFxuICBMaW5rLFxuICBNb2RhbCxcbiAgTW9kYWxCb2R5LFxuICBNb2RhbENsb3NlQnV0dG9uLFxuICBNb2RhbENvbnRlbnQsXG4gIE1vZGFsT3ZlcmxheSxcbiAgU2VsZWN0LFxuICBTcGlubmVyLFxuICBUZXh0LFxuICB1c2VEaXNjbG9zdXJlLFxuICB1c2VUaGVtZSxcbiAgdXNlVG9hc3QsXG59IGZyb20gXCJAY2hha3JhLXVpL3JlYWN0XCI7XG5pbXBvcnQgeyBpbmplY3RlZCB9IGZyb20gXCIuLi9saWIvd2ViM1wiO1xuaW1wb3J0IHsgV2ViM1Byb3ZpZGVyIH0gZnJvbSBcIkBldGhlcnNwcm9qZWN0L3Byb3ZpZGVyc1wiO1xuaW1wb3J0IHsgdXNlV2ViM1JlYWN0IH0gZnJvbSBcIkB3ZWIzLXJlYWN0L2NvcmVcIjtcbmltcG9ydCB7IHVzZU1ldGFtYXNrIH0gZnJvbSBcInVzZS1tZXRhbWFza1wiO1xuaW1wb3J0IHsgZXRoZXJzIH0gZnJvbSBcImV0aGVyc1wiO1xuaW1wb3J0IHsgV2ViM1Jlc29sdmVyIH0gZnJvbSBcIndlYjMtZG9tYWluLXJlc29sdmVyXCI7XG5pbXBvcnQgKiBhcyBzaWdVdGlsIGZyb20gXCJAbWV0YW1hc2svZXRoLXNpZy11dGlsXCI7XG5pbXBvcnQgKiBhcyBldGhVdGlsIGZyb20gXCJldGhlcmV1bWpzLXV0aWxcIjtcbmltcG9ydCB7IHVzZVdlYjNNb2RhbCwgV2ViM0J1dHRvbiB9IGZyb20gXCJAd2ViM21vZGFsL3JlYWN0XCI7XG5cbmNvbnN0IFVuc3RvcHBhYmxlID0gKCkgPT4ge1xuICBjb25zdCB3ZWIzcmVzb2x2ZXIgPSBuZXcgV2ViM1Jlc29sdmVyKCk7XG4gIGNvbnN0IHsgYWN0aXZhdGUsIGxpYnJhcnksIGFjY291bnQgfSA9IHVzZVdlYjNSZWFjdDxXZWIzUHJvdmlkZXI+KCk7XG4gIC8vIGNvbnN0IHsgbWV0YVN0YXRlIH0gPSB1c2VNZXRhbWFzaygpO1xuICBjb25zdCBbcHVibGljS2V5LCBzZXRQdWJsaWNLZXldID0gdXNlU3RhdGUoXCJcIik7XG4gIGNvbnN0IFtkb21haW4sIHNldERvbWFpbl0gPSB1c2VTdGF0ZShcIlwiKTtcbiAgY29uc3QgW2FkZHJlc3MsIHNldEFkZHJlc3NdID0gdXNlU3RhdGUoXCJcIik7XG4gIGNvbnN0IHJlcXVlc3RQdWJsaWNLZXkgPSBhc3luYyAoYWNjb3VudDogc3RyaW5nKSA9PiB7XG4gICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgKHdpbmRvdyBhcyBhbnkpLmV0aGVyZXVtLnNlbmQoXG4gICAgICBcImV0aF9nZXRFbmNyeXB0aW9uUHVibGljS2V5XCIsXG4gICAgICBbYWNjb3VudF1cbiAgICApO1xuICAgIHJldHVybiByZXN1bHQucmVzdWx0O1xuICB9O1xuICBjb25zdCBjb25uZWN0ID0gYXN5bmMgKCkgPT4ge1xuICAgIGFjdGl2YXRlKGluamVjdGVkKTtcbiAgfTtcblxuICBjb25zdCBoYW5kbGVBZGRyZXNzQ2hhbmdlID0gKGU6IGFueSkgPT4ge1xuICAgIGNvbnN0IGlucHV0VmFsdWUgPSBlLnRhcmdldC52YWx1ZTtcbiAgICBzZXREb21haW4oaW5wdXRWYWx1ZSk7XG4gIH07XG5cbiAgLy8gVXNlIHRoZSBtYWlubmV0XG5cbiAgLy8gU3BlY2lmeSB5b3VyIG93biBBUEkga2V5c1xuICAvLyBFYWNoIGlzIG9wdGlvbmFsLCBhbmQgaWYgeW91IG9taXQgaXQgdGhlIGRlZmF1bHRcbiAgLy8gQVBJIGtleSBmb3IgdGhhdCBzZXJ2aWNlIHdpbGwgYmUgdXNlZC5cbiAgXG4gIGNvbnN0IGVucyA9IGFzeW5jICgpID0+IHtcbiAgICBjb25zdCBwcm92aWRlciA9IG5ldyBldGhlcnMucHJvdmlkZXJzLkluZnVyYVByb3ZpZGVyKChcImhvbWVzdGVhZFwiKSwgW1xuICAgICAgXCJiYzg3MDFjYmUxODM0YjRjODg5NjZjNzhjNmQzYWFiMFwiLFxuICAgIF0pO1xuICAgIGNvbnN0IGFkZHJlc3MgPSBhd2FpdCBwcm92aWRlclxuICAgICAgLnJlc29sdmVOYW1lKFwiMHh5dXp1LmV0aFwiKTtcbiAgICBjb25zb2xlLmxvZyhhZGRyZXNzKTtcbiAgfTtcblxuICBjb25zdCBmcmVlbmFtZSA9IGFzeW5jKCkgPT4ge1xuICAgIGNvbnN0IHJlc29sdmVkRG9tYWluID0gYXdhaXQgd2ViM3Jlc29sdmVyLnJlc29sdmUoXCJ0YWt1bWkuaG9zb2thd2FcIik7XG4gICAgY29uc29sZS5sb2cocmVzb2x2ZWREb21haW4ub3duZXJBZGRyZXNzLCBcImRvbWFpblwiKTtcbiAgfSBcblxuXG4gIGNvbnN0IHNlYXJjaCA9IGFzeW5jICgpID0+IHtcbiAgICAvLyBHZXQgZG9tYWluIGluZm9ybWF0aW9uIGZyb20gQVBJXG4gICAgY29uc3QgY2hlY2sgPSBkb21haW4uaW5kZXhPZihcIi5cIik7XG4gICAgbGV0IGFkZHJlc3MgPSBkb21haW47XG4gICAgaWYgKGNoZWNrICE9PSAtMSkge1xuICAgICAgY29uc29sZS5sb2coXCJUaGUgc3RyaW5nIGNvbnRhaW5zIGEgcGVyaW9kLlwiKTtcbiAgICAgIC8vIEZldGNoIGFkZHJlc3MgZnJvbSBVbnN0b3BwYWJsZSBEb21haW5cbiAgICAgIGxldCBhZnRlckRvdCA9IGRvbWFpbi5zdWJzdHJpbmcoY2hlY2sgKyAxKTtcbiAgICAgIGxldCBbbmV4dFdvcmRdID0gYWZ0ZXJEb3Quc3BsaXQoXCIgXCIpO1xuICAgICAgaWYgKG5leHRXb3JkID09IFwiY3J5cHRvXCIpIHtcbiAgICAgICAgY29uc3QgcmVzcCA9IGF3YWl0IGZldGNoKFxuICAgICAgICAgIGBodHRwczovL3Jlc29sdmUudW5zdG9wcGFibGVkb21haW5zLmNvbS9kb21haW5zLyR7ZG9tYWlufWAsXG4gICAgICAgICAge1xuICAgICAgICAgICAgbWV0aG9kOiBcIkdFVFwiLFxuICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICBBdXRob3JpemF0aW9uOiBcIkJlYXJlciAyNjc0NWNlNy0zZWZjLTQyZjctYmRhMC02OTFjNTU5ZjQ4YjdcIixcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgfVxuICAgICAgICApO1xuICAgICAgICBcbiAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3AuanNvbigpO1xuICAgICAgICBjb25zb2xlLmxvZyhkYXRhKVxuICAgICAgICAvLyBjb25zdCB0ZXh0ID0gYXdhaXQgcmVzcC50ZXh0KCk7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKHRleHQpXG4gICAgICAgIGFkZHJlc3MgPSBkYXRhLm1ldGEub3duZXI7XG4gICAgICB9IGVsc2UgaWYgKG5leHRXb3JkID09IFwiZXRoXCIpIHtcbiAgICAgICAgY29uc3QgcHJvdmlkZXIgPSBuZXcgZXRoZXJzLnByb3ZpZGVycy5JbmZ1cmFQcm92aWRlcihcImhvbWVzdGVhZFwiLCBbXG4gICAgICAgICAgXCJiYzg3MDFjYmUxODM0YjRjODg5NjZjNzhjNmQzYWFiMFwiLFxuICAgICAgICBdKTtcbiAgICAgICAgYWRkcmVzcyA9IGF3YWl0IHByb3ZpZGVyLnJlc29sdmVOYW1lKFwiMHh5dXp1LmV0aFwiKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGFkZHJlc3MgPSBcImludmFsaWRcIjtcbiAgICAgIH1cbiAgICB9XG4gICAgc2V0QWRkcmVzcyhhZGRyZXNzKTtcbiAgICBjb25zb2xlLmxvZyhhZGRyZXNzKTtcbiAgICAvLyBzZXQgYWRkcmVzcyB0byBhZGRyZXNzXG4gIH07XG5cbiAgLy8gY29uc3Qgd2ViMyA9IG1ldGFTdGF0ZS53ZWIzIGFzIHByb3ZpZGVycy5XZWIzUHJvdmlkZXI7XG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxJbnB1dCBvbkNoYW5nZT17aGFuZGxlQWRkcmVzc0NoYW5nZX0+PC9JbnB1dD5cbiAgICAgIDxCdXR0b24gb25DbGljaz17c2VhcmNofT5TZWFyY2g8L0J1dHRvbj5cbiAgICAgIHthZGRyZXNzICYmIDxUZXh0PnthZGRyZXNzfTwvVGV4dD59XG4gICAgICA8QnV0dG9uIG9uQ2xpY2s9e2Vuc30+PC9CdXR0b24+XG4gICAgICA8QnV0dG9uIG9uQ2xpY2s9e2ZyZWVuYW1lfT5GcmVlbmFtZTwvQnV0dG9uPlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgVW5zdG9wcGFibGU7XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsIkJ1dHRvbiIsIklucHV0IiwiVGV4dCIsImluamVjdGVkIiwidXNlV2ViM1JlYWN0IiwiZXRoZXJzIiwiV2ViM1Jlc29sdmVyIiwiVW5zdG9wcGFibGUiLCJ3ZWIzcmVzb2x2ZXIiLCJhY3RpdmF0ZSIsImxpYnJhcnkiLCJhY2NvdW50IiwicHVibGljS2V5Iiwic2V0UHVibGljS2V5IiwiZG9tYWluIiwic2V0RG9tYWluIiwiYWRkcmVzcyIsInNldEFkZHJlc3MiLCJyZXF1ZXN0UHVibGljS2V5IiwicmVzdWx0Iiwid2luZG93IiwiZXRoZXJldW0iLCJzZW5kIiwiY29ubmVjdCIsImhhbmRsZUFkZHJlc3NDaGFuZ2UiLCJlIiwiaW5wdXRWYWx1ZSIsInRhcmdldCIsInZhbHVlIiwiZW5zIiwicHJvdmlkZXIiLCJwcm92aWRlcnMiLCJJbmZ1cmFQcm92aWRlciIsInJlc29sdmVOYW1lIiwiY29uc29sZSIsImxvZyIsImZyZWVuYW1lIiwicmVzb2x2ZWREb21haW4iLCJyZXNvbHZlIiwib3duZXJBZGRyZXNzIiwic2VhcmNoIiwiY2hlY2siLCJpbmRleE9mIiwiYWZ0ZXJEb3QiLCJzdWJzdHJpbmciLCJuZXh0V29yZCIsInNwbGl0IiwicmVzcCIsImZldGNoIiwibWV0aG9kIiwiaGVhZGVycyIsIkF1dGhvcml6YXRpb24iLCJkYXRhIiwianNvbiIsIm1ldGEiLCJvd25lciIsImRpdiIsIm9uQ2hhbmdlIiwib25DbGljayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/domain.tsx\n"));

/***/ })

});