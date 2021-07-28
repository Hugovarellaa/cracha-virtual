self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Home; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* module decorator */ module = __webpack_require__.hmd(module);

var _jsxFileName = "C:\\Users\\hugon\\Documents\\GitHub\\alurakut\\alurakut\\pages\\index.js";
 // const Title = styled.h1`
//   font-size: 50px;
//   color: ${({ theme }) => theme.colors.primary};
// `

var Box = styled_components__WEBPACK_IMPORTED_MODULE_1__.default.div.withConfig({
  displayName: "pages__Box",
  componentId: "sc-1cvwks4-0"
})(["background:#fff;border-radius:8px;"]);
_c = Box;
var MainGrid = styled_components__WEBPACK_IMPORTED_MODULE_1__.default.main.withConfig({
  displayName: "pages__MainGrid",
  componentId: "sc-1cvwks4-1"
})(["display:grid;gap:10px;padding:16px;@media(min-width:860px){grid-template-areas:\"profileArea welcomeArea  profileRelationsArea\";grid-template-columns:160px 618px 312px;}"]);
_c2 = MainGrid;
function Home() {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(MainGrid, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      style: {
        gridArea: "profileArea"
      },
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Box, {
        children: "Imagem"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 34,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      style: {
        gridArea: "welcomeArea"
      },
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Box, {
        children: "Bem vindo"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 40,
        columnNumber: 7
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      style: {
        gridArea: "profileRelationsArea"
      },
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Box, {
        children: "Comunidades"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 46,
        columnNumber: 7
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 31,
    columnNumber: 5
  }, this);
}
_c3 = Home;

var _c, _c2, _c3;

$RefreshReg$(_c, "Box");
$RefreshReg$(_c2, "MainGrid");
$RefreshReg$(_c3, "Home");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiQm94Iiwic3R5bGVkIiwiTWFpbkdyaWQiLCJIb21lIiwiZ3JpZEFyZWEiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Q0FFQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQSxJQUFNQSxHQUFHLEdBQUdDLHFFQUFIO0FBQUE7QUFBQTtBQUFBLDBDQUFUO0tBQU1ELEc7QUFLTixJQUFNRSxRQUFRLEdBQUdELHNFQUFIO0FBQUE7QUFBQTtBQUFBLGtMQUFkO01BQU1DLFE7QUFpQlMsU0FBU0MsSUFBVCxHQUFnQjtBQUM3QixzQkFDRSw4REFBQyxRQUFEO0FBQUEsNEJBRUU7QUFBSyxXQUFLLEVBQUU7QUFBRUMsZ0JBQVEsRUFBRTtBQUFaLE9BQVo7QUFBQSw2QkFDRSw4REFBQyxHQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUZGLGVBUUU7QUFBSyxXQUFLLEVBQUU7QUFBRUEsZ0JBQVEsRUFBRTtBQUFaLE9BQVo7QUFBQSw2QkFDQSw4REFBQyxHQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQVJGLGVBY0U7QUFBSyxXQUFLLEVBQUU7QUFBRUEsZ0JBQVEsRUFBRTtBQUFaLE9BQVo7QUFBQSw2QkFDQSw4REFBQyxHQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQWRGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBc0JEO01BdkJ1QkQsSSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5jYjdhODI1YzZmNzBmMDMwZWY1ZC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cydcblxuLy8gY29uc3QgVGl0bGUgPSBzdHlsZWQuaDFgXG4vLyAgIGZvbnQtc2l6ZTogNTBweDtcbi8vICAgY29sb3I6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuY29sb3JzLnByaW1hcnl9O1xuLy8gYFxuY29uc3QgQm94ID0gc3R5bGVkLmRpdmBcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xuXG5gXG5jb25zdCBNYWluR3JpZCA9IHN0eWxlZC5tYWluYFxuICBkaXNwbGF5OiBncmlkO1xuICBnYXA6IDEwcHg7XG4gIHBhZGRpbmc6IDE2cHg7XG5cbiAgQG1lZGlhKG1pbi13aWR0aDogODYwcHgpe1xuICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6XG4gICAgXCJwcm9maWxlQXJlYVxuICAgICB3ZWxjb21lQXJlYSBcbiAgICAgcHJvZmlsZVJlbGF0aW9uc0FyZWFcIlxuICAgICA7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxNjBweCA2MThweCAzMTJweDtcbiAgfVxuXG5gXG5cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcbiAgcmV0dXJuIChcbiAgICA8TWFpbkdyaWQ+XG5cbiAgICAgIDxkaXYgc3R5bGU9e3sgZ3JpZEFyZWE6IFwicHJvZmlsZUFyZWFcIiB9fT5cbiAgICAgICAgPEJveCA+XG4gICAgICAgICAgSW1hZ2VtXG4gICAgICAgIDwvQm94PlxuICAgICAgPC9kaXY+XG5cbiAgICAgIDxkaXYgc3R5bGU9e3sgZ3JpZEFyZWE6IFwid2VsY29tZUFyZWFcIiB9fT5cbiAgICAgIDxCb3ggPlxuICAgICAgICBCZW0gdmluZG9cbiAgICAgIDwvQm94PlxuICAgICAgPC9kaXY+XG5cbiAgICAgIDxkaXYgc3R5bGU9e3sgZ3JpZEFyZWE6IFwicHJvZmlsZVJlbGF0aW9uc0FyZWFcIiB9fT5cbiAgICAgIDxCb3ggPlxuICAgICAgICBDb211bmlkYWRlc1xuICAgICAgPC9Cb3ggPlxuICAgICAgPC9kaXY+XG4gICAgPC9NYWluR3JpZD5cbiAgKVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==