webpackHotUpdate_N_E("pages/books",{

/***/ "./pages/books.js":
/*!************************!*\
  !*** ./pages/books.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _Users_yathartharora_Blog_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _Users_yathartharora_Blog_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_yathartharora_Blog_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Users_yathartharora_Blog_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _Users_yathartharora_Blog_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ \"./node_modules/@babel/runtime/helpers/esm/classCallCheck.js\");\n/* harmony import */ var _Users_yathartharora_Blog_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ \"./node_modules/@babel/runtime/helpers/esm/createClass.js\");\n/* harmony import */ var _Users_yathartharora_Blog_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ \"./node_modules/@babel/runtime/helpers/esm/inherits.js\");\n/* harmony import */ var _Users_yathartharora_Blog_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ \"./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js\");\n/* harmony import */ var _Users_yathartharora_Blog_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ \"./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var _Ethereum_blog__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../Ethereum/blog */ \"./Ethereum/blog.js\");\n/* harmony import */ var _Components_Heading__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../Components/Heading */ \"./Components/Heading.js\");\n/* harmony import */ var _Components_Layout__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../Components/Layout */ \"./Components/Layout.js\");\n/* harmony import */ var _Components_DisplayBook__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../Components/DisplayBook */ \"./Components/DisplayBook.js\");\n/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! semantic-ui-react */ \"./node_modules/semantic-ui-react/dist/es/index.js\");\n\n\n\n\n\n\n\n\nvar _jsxFileName = \"/Users/yathartharora/Blog/pages/books.js\";\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_Users_yathartharora_Blog_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_Users_yathartharora_Blog_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_Users_yathartharora_Blog_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(this, result); }; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }\n\n\n\n\n\n\n\n\nvar Books = /*#__PURE__*/function (_Component) {\n  Object(_Users_yathartharora_Blog_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(Books, _Component);\n\n  var _super = _createSuper(Books);\n\n  function Books() {\n    Object(_Users_yathartharora_Blog_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(this, Books);\n\n    return _super.apply(this, arguments);\n  }\n\n  Object(_Users_yathartharora_Blog_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(Books, [{\n    key: \"renderRow\",\n    value: function renderRow() {\n      var _this = this;\n\n      return this.props.requests.map(function (request, index) {\n        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(_Components_DisplayBook__WEBPACK_IMPORTED_MODULE_12__[\"default\"], {\n          request: request\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 27,\n          columnNumber: 13\n        }, _this);\n      });\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(_Components_Layout__WEBPACK_IMPORTED_MODULE_11__[\"default\"], {\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(_Components_Heading__WEBPACK_IMPORTED_MODULE_10__[\"default\"], {}, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 36,\n          columnNumber: 17\n        }, this), this.renderRow()]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 35,\n        columnNumber: 13\n      }, this);\n    }\n  }], [{\n    key: \"getInitialProps\",\n    value: function () {\n      var _getInitialProps = Object(_Users_yathartharora_Blog_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_Users_yathartharora_Blog_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(props) {\n        var output, requestCount, requests;\n        return _Users_yathartharora_Blog_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {\n          while (1) {\n            switch (_context.prev = _context.next) {\n              case 0:\n                _context.next = 2;\n                return _Ethereum_blog__WEBPACK_IMPORTED_MODULE_9__[\"default\"].methods.Bookdisplay().call();\n\n              case 2:\n                output = _context.sent;\n                requestCount = output.length;\n                _context.next = 6;\n                return Promise.all(Array(parseInt(requestCount)).fill().map(function (element, index) {\n                  return _Ethereum_blog__WEBPACK_IMPORTED_MODULE_9__[\"default\"].methods.book(index).call();\n                }));\n\n              case 6:\n                requests = _context.sent;\n                return _context.abrupt(\"return\", {\n                  requests: requests,\n                  requestCount: requestCount\n                });\n\n              case 8:\n              case \"end\":\n                return _context.stop();\n            }\n          }\n        }, _callee);\n      }));\n\n      function getInitialProps(_x) {\n        return _getInitialProps.apply(this, arguments);\n      }\n\n      return getInitialProps;\n    }()\n  }]);\n\n  return Books;\n}(react__WEBPACK_IMPORTED_MODULE_8__[\"Component\"]);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Books);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvYm9va3MuanM/NzcxNSJdLCJuYW1lcyI6WyJCb29rcyIsInByb3BzIiwicmVxdWVzdHMiLCJtYXAiLCJyZXF1ZXN0IiwiaW5kZXgiLCJyZW5kZXJSb3ciLCJibG9nIiwibWV0aG9kcyIsIkJvb2tkaXNwbGF5IiwiY2FsbCIsIm91dHB1dCIsInJlcXVlc3RDb3VudCIsImxlbmd0aCIsIlByb21pc2UiLCJhbGwiLCJBcnJheSIsInBhcnNlSW50IiwiZmlsbCIsImVsZW1lbnQiLCJib29rIiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7SUFFTUEsSzs7Ozs7Ozs7Ozs7OztnQ0FlVTtBQUFBOztBQUNSLGFBQU8sS0FBS0MsS0FBTCxDQUFXQyxRQUFYLENBQW9CQyxHQUFwQixDQUF3QixVQUFDQyxPQUFELEVBQVVDLEtBQVYsRUFBb0I7QUFDL0MsNEJBRUEscUVBQUMsZ0VBQUQ7QUFDSSxpQkFBTyxFQUFJRDtBQURmO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRkE7QUFNSCxPQVBNLENBQVA7QUFRSDs7OzZCQUNPO0FBQ0osMEJBQ0kscUVBQUMsMkRBQUQ7QUFBQSxnQ0FDSSxxRUFBQyw0REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURKLEVBRUssS0FBS0UsU0FBTCxFQUZMO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURKO0FBT0g7Ozs7MlNBL0I0QkwsSzs7Ozs7Ozt1QkFDSk0sc0RBQUksQ0FBQ0MsT0FBTCxDQUFhQyxXQUFiLEdBQTJCQyxJQUEzQixFOzs7QUFBZkMsc0I7QUFFQUMsNEIsR0FBZUQsTUFBTSxDQUFDRSxNOzt1QkFDTEMsT0FBTyxDQUFDQyxHQUFSLENBQ25CQyxLQUFLLENBQUNDLFFBQVEsQ0FBQ0wsWUFBRCxDQUFULENBQUwsQ0FBOEJNLElBQTlCLEdBQXFDZixHQUFyQyxDQUF5QyxVQUFDZ0IsT0FBRCxFQUFTZCxLQUFULEVBQW1CO0FBQ3hELHlCQUFPRSxzREFBSSxDQUFDQyxPQUFMLENBQWFZLElBQWIsQ0FBa0JmLEtBQWxCLEVBQXlCSyxJQUF6QixFQUFQO0FBQ0gsaUJBRkQsQ0FEbUIsQzs7O0FBQWpCUix3QjtpREFNQztBQUFDQSwwQkFBUSxFQUFSQSxRQUFEO0FBQVdVLDhCQUFZLEVBQVpBO0FBQVgsaUI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7RUFaS1MsK0M7O0FBb0NMckIsb0VBQWYiLCJmaWxlIjoiLi9wYWdlcy9ib29rcy5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge0NvbXBvbmVudH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IGJsb2cgZnJvbSAnLi4vRXRoZXJldW0vYmxvZyc7XG5pbXBvcnQgSGVhZFRleHQgZnJvbSAnLi4vQ29tcG9uZW50cy9IZWFkaW5nJztcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vQ29tcG9uZW50cy9MYXlvdXQnO1xuaW1wb3J0IFJlcXVlc3RCb29rIGZyb20gJy4uL0NvbXBvbmVudHMvRGlzcGxheUJvb2snO1xuaW1wb3J0IHtDYXJkfSBmcm9tICdzZW1hbnRpYy11aS1yZWFjdCc7XG5cbmNsYXNzIEJvb2tzIGV4dGVuZHMgQ29tcG9uZW50e1xuXG4gICAgc3RhdGljIGFzeW5jIGdldEluaXRpYWxQcm9wcyhwcm9wcyl7XG4gICAgICAgIGNvbnN0IG91dHB1dCA9IGF3YWl0IGJsb2cubWV0aG9kcy5Cb29rZGlzcGxheSgpLmNhbGwoKTtcblxuICAgICAgICBjb25zdCByZXF1ZXN0Q291bnQgPSBvdXRwdXQubGVuZ3RoO1xuICAgICAgICBjb25zdCByZXF1ZXN0cyA9IGF3YWl0IFByb21pc2UuYWxsKFxuICAgICAgICAgICAgQXJyYXkocGFyc2VJbnQocmVxdWVzdENvdW50KSkuZmlsbCgpLm1hcCgoZWxlbWVudCxpbmRleCkgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiBibG9nLm1ldGhvZHMuYm9vayhpbmRleCkuY2FsbCgpXG4gICAgICAgICAgICB9KSBcbiAgICAgICAgKTtcblxuICAgICAgICByZXR1cm4ge3JlcXVlc3RzLCByZXF1ZXN0Q291bnR9O1xuICAgIH1cblxuICAgIHJlbmRlclJvdygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucHJvcHMucmVxdWVzdHMubWFwKChyZXF1ZXN0LCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuICggXG5cbiAgICAgICAgICAgIDxSZXF1ZXN0Qm9va1xuICAgICAgICAgICAgICAgIHJlcXVlc3QgPSB7cmVxdWVzdH1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICApO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgcmVuZGVyKCl7XG4gICAgICAgIHJldHVybihcbiAgICAgICAgICAgIDxMYXlvdXQ+XG4gICAgICAgICAgICAgICAgPEhlYWRUZXh0IC8+XG4gICAgICAgICAgICAgICAge3RoaXMucmVuZGVyUm93KCl9XG5cbiAgICAgICAgICAgIDwvTGF5b3V0PlxuICAgICAgICApXG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBCb29rczsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/books.js\n");

/***/ })

})