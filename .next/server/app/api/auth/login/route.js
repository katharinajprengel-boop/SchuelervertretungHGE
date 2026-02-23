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
exports.id = "app/api/auth/login/route";
exports.ids = ["app/api/auth/login/route"];
exports.modules = {

/***/ "@prisma/client":
/*!*********************************!*\
  !*** external "@prisma/client" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@prisma/client");

/***/ }),

/***/ "bcrypt":
/*!*************************!*\
  !*** external "bcrypt" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("bcrypt");

/***/ }),

/***/ "../../client/components/action-async-storage.external":
/*!*******************************************************************************!*\
  !*** external "next/dist/client/components/action-async-storage.external.js" ***!
  \*******************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/client/components/action-async-storage.external.js");

/***/ }),

/***/ "../../client/components/request-async-storage.external":
/*!********************************************************************************!*\
  !*** external "next/dist/client/components/request-async-storage.external.js" ***!
  \********************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/client/components/request-async-storage.external.js");

/***/ }),

/***/ "../../client/components/static-generation-async-storage.external":
/*!******************************************************************************************!*\
  !*** external "next/dist/client/components/static-generation-async-storage.external.js" ***!
  \******************************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/client/components/static-generation-async-storage.external.js");

/***/ }),

/***/ "next/dist/compiled/next-server/app-page.runtime.dev.js":
/*!*************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-page.runtime.dev.js" ***!
  \*************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/app-page.runtime.dev.js");

/***/ }),

/***/ "next/dist/compiled/next-server/app-route.runtime.dev.js":
/*!**************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-route.runtime.dev.js" ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/app-route.runtime.dev.js");

/***/ }),

/***/ "buffer":
/*!*************************!*\
  !*** external "buffer" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("buffer");

/***/ }),

/***/ "crypto":
/*!*************************!*\
  !*** external "crypto" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("crypto");

/***/ }),

/***/ "stream":
/*!*************************!*\
  !*** external "stream" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("stream");

/***/ }),

/***/ "util":
/*!***********************!*\
  !*** external "util" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("util");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fauth%2Flogin%2Froute&page=%2Fapi%2Fauth%2Flogin%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fauth%2Flogin%2Froute.ts&appDir=%2FUsers%2Fkatharinaprengel%2FDownloads%2Fdein-angebotsprofi-main%2Fsrc%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fkatharinaprengel%2FDownloads%2Fdein-angebotsprofi-main&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fauth%2Flogin%2Froute&page=%2Fapi%2Fauth%2Flogin%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fauth%2Flogin%2Froute.ts&appDir=%2FUsers%2Fkatharinaprengel%2FDownloads%2Fdein-angebotsprofi-main%2Fsrc%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fkatharinaprengel%2FDownloads%2Fdein-angebotsprofi-main&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   originalPathname: () => (/* binding */ originalPathname),\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   requestAsyncStorage: () => (/* binding */ requestAsyncStorage),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   staticGenerationAsyncStorage: () => (/* binding */ staticGenerationAsyncStorage)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/future/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/future/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/future/route-kind */ \"(rsc)/./node_modules/next/dist/server/future/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _Users_katharinaprengel_Downloads_dein_angebotsprofi_main_src_app_api_auth_login_route_ts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./src/app/api/auth/login/route.ts */ \"(rsc)/./src/app/api/auth/login/route.ts\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/auth/login/route\",\n        pathname: \"/api/auth/login\",\n        filename: \"route\",\n        bundlePath: \"app/api/auth/login/route\"\n    },\n    resolvedPagePath: \"/Users/katharinaprengel/Downloads/dein-angebotsprofi-main/src/app/api/auth/login/route.ts\",\n    nextConfigOutput,\n    userland: _Users_katharinaprengel_Downloads_dein_angebotsprofi_main_src_app_api_auth_login_route_ts__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { requestAsyncStorage, staticGenerationAsyncStorage, serverHooks } = routeModule;\nconst originalPathname = \"/api/auth/login/route\";\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        serverHooks,\n        staticGenerationAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIuanM/bmFtZT1hcHAlMkZhcGklMkZhdXRoJTJGbG9naW4lMkZyb3V0ZSZwYWdlPSUyRmFwaSUyRmF1dGglMkZsb2dpbiUyRnJvdXRlJmFwcFBhdGhzPSZwYWdlUGF0aD1wcml2YXRlLW5leHQtYXBwLWRpciUyRmFwaSUyRmF1dGglMkZsb2dpbiUyRnJvdXRlLnRzJmFwcERpcj0lMkZVc2VycyUyRmthdGhhcmluYXByZW5nZWwlMkZEb3dubG9hZHMlMkZkZWluLWFuZ2Vib3RzcHJvZmktbWFpbiUyRnNyYyUyRmFwcCZwYWdlRXh0ZW5zaW9ucz10c3gmcGFnZUV4dGVuc2lvbnM9dHMmcGFnZUV4dGVuc2lvbnM9anN4JnBhZ2VFeHRlbnNpb25zPWpzJnJvb3REaXI9JTJGVXNlcnMlMkZrYXRoYXJpbmFwcmVuZ2VsJTJGRG93bmxvYWRzJTJGZGVpbi1hbmdlYm90c3Byb2ZpLW1haW4maXNEZXY9dHJ1ZSZ0c2NvbmZpZ1BhdGg9dHNjb25maWcuanNvbiZiYXNlUGF0aD0mYXNzZXRQcmVmaXg9Jm5leHRDb25maWdPdXRwdXQ9JnByZWZlcnJlZFJlZ2lvbj0mbWlkZGxld2FyZUNvbmZpZz1lMzAlM0QhIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFzRztBQUN2QztBQUNjO0FBQ3lDO0FBQ3RIO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixnSEFBbUI7QUFDM0M7QUFDQSxjQUFjLHlFQUFTO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxZQUFZO0FBQ1osQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBLFFBQVEsaUVBQWlFO0FBQ3pFO0FBQ0E7QUFDQSxXQUFXLDRFQUFXO0FBQ3RCO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDdUg7O0FBRXZIIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vaGdlLXNjaHVlbGVydmVydHJldHVuZy8/OTY0NSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBcHBSb3V0ZVJvdXRlTW9kdWxlIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvZnV0dXJlL3JvdXRlLW1vZHVsZXMvYXBwLXJvdXRlL21vZHVsZS5jb21waWxlZFwiO1xuaW1wb3J0IHsgUm91dGVLaW5kIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvZnV0dXJlL3JvdXRlLWtpbmRcIjtcbmltcG9ydCB7IHBhdGNoRmV0Y2ggYXMgX3BhdGNoRmV0Y2ggfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9saWIvcGF0Y2gtZmV0Y2hcIjtcbmltcG9ydCAqIGFzIHVzZXJsYW5kIGZyb20gXCIvVXNlcnMva2F0aGFyaW5hcHJlbmdlbC9Eb3dubG9hZHMvZGVpbi1hbmdlYm90c3Byb2ZpLW1haW4vc3JjL2FwcC9hcGkvYXV0aC9sb2dpbi9yb3V0ZS50c1wiO1xuLy8gV2UgaW5qZWN0IHRoZSBuZXh0Q29uZmlnT3V0cHV0IGhlcmUgc28gdGhhdCB3ZSBjYW4gdXNlIHRoZW0gaW4gdGhlIHJvdXRlXG4vLyBtb2R1bGUuXG5jb25zdCBuZXh0Q29uZmlnT3V0cHV0ID0gXCJcIlxuY29uc3Qgcm91dGVNb2R1bGUgPSBuZXcgQXBwUm91dGVSb3V0ZU1vZHVsZSh7XG4gICAgZGVmaW5pdGlvbjoge1xuICAgICAgICBraW5kOiBSb3V0ZUtpbmQuQVBQX1JPVVRFLFxuICAgICAgICBwYWdlOiBcIi9hcGkvYXV0aC9sb2dpbi9yb3V0ZVwiLFxuICAgICAgICBwYXRobmFtZTogXCIvYXBpL2F1dGgvbG9naW5cIixcbiAgICAgICAgZmlsZW5hbWU6IFwicm91dGVcIixcbiAgICAgICAgYnVuZGxlUGF0aDogXCJhcHAvYXBpL2F1dGgvbG9naW4vcm91dGVcIlxuICAgIH0sXG4gICAgcmVzb2x2ZWRQYWdlUGF0aDogXCIvVXNlcnMva2F0aGFyaW5hcHJlbmdlbC9Eb3dubG9hZHMvZGVpbi1hbmdlYm90c3Byb2ZpLW1haW4vc3JjL2FwcC9hcGkvYXV0aC9sb2dpbi9yb3V0ZS50c1wiLFxuICAgIG5leHRDb25maWdPdXRwdXQsXG4gICAgdXNlcmxhbmRcbn0pO1xuLy8gUHVsbCBvdXQgdGhlIGV4cG9ydHMgdGhhdCB3ZSBuZWVkIHRvIGV4cG9zZSBmcm9tIHRoZSBtb2R1bGUuIFRoaXMgc2hvdWxkXG4vLyBiZSBlbGltaW5hdGVkIHdoZW4gd2UndmUgbW92ZWQgdGhlIG90aGVyIHJvdXRlcyB0byB0aGUgbmV3IGZvcm1hdC4gVGhlc2Vcbi8vIGFyZSB1c2VkIHRvIGhvb2sgaW50byB0aGUgcm91dGUuXG5jb25zdCB7IHJlcXVlc3RBc3luY1N0b3JhZ2UsIHN0YXRpY0dlbmVyYXRpb25Bc3luY1N0b3JhZ2UsIHNlcnZlckhvb2tzIH0gPSByb3V0ZU1vZHVsZTtcbmNvbnN0IG9yaWdpbmFsUGF0aG5hbWUgPSBcIi9hcGkvYXV0aC9sb2dpbi9yb3V0ZVwiO1xuZnVuY3Rpb24gcGF0Y2hGZXRjaCgpIHtcbiAgICByZXR1cm4gX3BhdGNoRmV0Y2goe1xuICAgICAgICBzZXJ2ZXJIb29rcyxcbiAgICAgICAgc3RhdGljR2VuZXJhdGlvbkFzeW5jU3RvcmFnZVxuICAgIH0pO1xufVxuZXhwb3J0IHsgcm91dGVNb2R1bGUsIHJlcXVlc3RBc3luY1N0b3JhZ2UsIHN0YXRpY0dlbmVyYXRpb25Bc3luY1N0b3JhZ2UsIHNlcnZlckhvb2tzLCBvcmlnaW5hbFBhdGhuYW1lLCBwYXRjaEZldGNoLCAgfTtcblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9YXBwLXJvdXRlLmpzLm1hcCJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fauth%2Flogin%2Froute&page=%2Fapi%2Fauth%2Flogin%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fauth%2Flogin%2Froute.ts&appDir=%2FUsers%2Fkatharinaprengel%2FDownloads%2Fdein-angebotsprofi-main%2Fsrc%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fkatharinaprengel%2FDownloads%2Fdein-angebotsprofi-main&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./src/app/api/auth/login/route.ts":
/*!*****************************************!*\
  !*** ./src/app/api/auth/login/route.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   POST: () => (/* binding */ POST)\n/* harmony export */ });\n/* harmony import */ var next_server__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/server */ \"(rsc)/./node_modules/next/dist/api/server.js\");\n/* harmony import */ var _lib_prisma__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/lib/prisma */ \"(rsc)/./src/lib/prisma.ts\");\n/* harmony import */ var _lib_validators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/lib/validators */ \"(rsc)/./src/lib/validators.ts\");\n/* harmony import */ var _lib_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/lib/auth */ \"(rsc)/./src/lib/auth.ts\");\n/* harmony import */ var _lib_password__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/lib/password */ \"(rsc)/./src/lib/password.ts\");\n\n\n\n\n\nasync function POST(request) {\n    const formData = await request.formData();\n    const data = {\n        email: String(formData.get(\"email\") || \"\").trim(),\n        password: String(formData.get(\"password\") || \"\")\n    };\n    const parsed = _lib_validators__WEBPACK_IMPORTED_MODULE_2__.loginSchema.safeParse(data);\n    if (!parsed.success) {\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.redirect(new URL(\"/admin/login?error=1\", request.url));\n    }\n    const user = await _lib_prisma__WEBPACK_IMPORTED_MODULE_1__[\"default\"].user.findUnique({\n        where: {\n            email: parsed.data.email\n        }\n    });\n    if (!user) {\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.redirect(new URL(\"/admin/login?error=1\", request.url));\n    }\n    const isValid = await (0,_lib_password__WEBPACK_IMPORTED_MODULE_4__.verifyPassword)(parsed.data.password, user.passwordHash);\n    if (!isValid) {\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.redirect(new URL(\"/admin/login?error=1\", request.url));\n    }\n    const token = (0,_lib_auth__WEBPACK_IMPORTED_MODULE_3__.signSession)({\n        userId: user.id,\n        role: \"ADMIN\"\n    });\n    const response = next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.redirect(new URL(\"/admin/posts\", request.url));\n    response.cookies.set({\n        name: _lib_auth__WEBPACK_IMPORTED_MODULE_3__.sessionCookieName,\n        value: token,\n        httpOnly: true,\n        sameSite: \"lax\",\n        secure: \"development\" === \"production\",\n        maxAge: _lib_auth__WEBPACK_IMPORTED_MODULE_3__.sessionMaxAge,\n        path: \"/\"\n    });\n    return response;\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvYXBwL2FwaS9hdXRoL2xvZ2luL3JvdXRlLnRzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUEyQztBQUNUO0FBQ2E7QUFDNEI7QUFDM0I7QUFFekMsZUFBZU8sS0FBS0MsT0FBZ0I7SUFDekMsTUFBTUMsV0FBVyxNQUFNRCxRQUFRQyxRQUFRO0lBQ3ZDLE1BQU1DLE9BQU87UUFDWEMsT0FBT0MsT0FBT0gsU0FBU0ksR0FBRyxDQUFDLFlBQVksSUFBSUMsSUFBSTtRQUMvQ0MsVUFBVUgsT0FBT0gsU0FBU0ksR0FBRyxDQUFDLGVBQWU7SUFDL0M7SUFFQSxNQUFNRyxTQUFTZCx3REFBV0EsQ0FBQ2UsU0FBUyxDQUFDUDtJQUNyQyxJQUFJLENBQUNNLE9BQU9FLE9BQU8sRUFBRTtRQUNuQixPQUFPbEIscURBQVlBLENBQUNtQixRQUFRLENBQUMsSUFBSUMsSUFBSSx3QkFBd0JaLFFBQVFhLEdBQUc7SUFDMUU7SUFFQSxNQUFNQyxPQUFPLE1BQU1yQixtREFBTUEsQ0FBQ3FCLElBQUksQ0FBQ0MsVUFBVSxDQUFDO1FBQ3hDQyxPQUFPO1lBQUViLE9BQU9LLE9BQU9OLElBQUksQ0FBQ0MsS0FBSztRQUFDO0lBQ3BDO0lBRUEsSUFBSSxDQUFDVyxNQUFNO1FBQ1QsT0FBT3RCLHFEQUFZQSxDQUFDbUIsUUFBUSxDQUFDLElBQUlDLElBQUksd0JBQXdCWixRQUFRYSxHQUFHO0lBQzFFO0lBRUEsTUFBTUksVUFBVSxNQUFNbkIsNkRBQWNBLENBQUNVLE9BQU9OLElBQUksQ0FBQ0ssUUFBUSxFQUFFTyxLQUFLSSxZQUFZO0lBQzVFLElBQUksQ0FBQ0QsU0FBUztRQUNaLE9BQU96QixxREFBWUEsQ0FBQ21CLFFBQVEsQ0FBQyxJQUFJQyxJQUFJLHdCQUF3QlosUUFBUWEsR0FBRztJQUMxRTtJQUVBLE1BQU1NLFFBQVF4QixzREFBV0EsQ0FBQztRQUFFeUIsUUFBUU4sS0FBS08sRUFBRTtRQUFFQyxNQUFNO0lBQVE7SUFDM0QsTUFBTUMsV0FBVy9CLHFEQUFZQSxDQUFDbUIsUUFBUSxDQUFDLElBQUlDLElBQUksZ0JBQWdCWixRQUFRYSxHQUFHO0lBQzFFVSxTQUFTQyxPQUFPLENBQUNDLEdBQUcsQ0FBQztRQUNuQkMsTUFBTTlCLHdEQUFpQkE7UUFDdkIrQixPQUFPUjtRQUNQUyxVQUFVO1FBQ1ZDLFVBQVU7UUFDVkMsUUFBUUMsa0JBQXlCO1FBQ2pDQyxRQUFRbkMsb0RBQWFBO1FBQ3JCb0MsTUFBTTtJQUNSO0lBRUEsT0FBT1Y7QUFDVCIsInNvdXJjZXMiOlsid2VicGFjazovL2hnZS1zY2h1ZWxlcnZlcnRyZXR1bmcvLi9zcmMvYXBwL2FwaS9hdXRoL2xvZ2luL3JvdXRlLnRzP2QzMWEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmV4dFJlc3BvbnNlIH0gZnJvbSBcIm5leHQvc2VydmVyXCI7XG5pbXBvcnQgcHJpc21hIGZyb20gXCJAL2xpYi9wcmlzbWFcIjtcbmltcG9ydCB7IGxvZ2luU2NoZW1hIH0gZnJvbSBcIkAvbGliL3ZhbGlkYXRvcnNcIjtcbmltcG9ydCB7IHNpZ25TZXNzaW9uLCBzZXNzaW9uQ29va2llTmFtZSwgc2Vzc2lvbk1heEFnZSB9IGZyb20gXCJAL2xpYi9hdXRoXCI7XG5pbXBvcnQgeyB2ZXJpZnlQYXNzd29yZCB9IGZyb20gXCJAL2xpYi9wYXNzd29yZFwiO1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gUE9TVChyZXF1ZXN0OiBSZXF1ZXN0KSB7XG4gIGNvbnN0IGZvcm1EYXRhID0gYXdhaXQgcmVxdWVzdC5mb3JtRGF0YSgpO1xuICBjb25zdCBkYXRhID0ge1xuICAgIGVtYWlsOiBTdHJpbmcoZm9ybURhdGEuZ2V0KFwiZW1haWxcIikgfHwgXCJcIikudHJpbSgpLFxuICAgIHBhc3N3b3JkOiBTdHJpbmcoZm9ybURhdGEuZ2V0KFwicGFzc3dvcmRcIikgfHwgXCJcIilcbiAgfTtcblxuICBjb25zdCBwYXJzZWQgPSBsb2dpblNjaGVtYS5zYWZlUGFyc2UoZGF0YSk7XG4gIGlmICghcGFyc2VkLnN1Y2Nlc3MpIHtcbiAgICByZXR1cm4gTmV4dFJlc3BvbnNlLnJlZGlyZWN0KG5ldyBVUkwoXCIvYWRtaW4vbG9naW4/ZXJyb3I9MVwiLCByZXF1ZXN0LnVybCkpO1xuICB9XG5cbiAgY29uc3QgdXNlciA9IGF3YWl0IHByaXNtYS51c2VyLmZpbmRVbmlxdWUoe1xuICAgIHdoZXJlOiB7IGVtYWlsOiBwYXJzZWQuZGF0YS5lbWFpbCB9XG4gIH0pO1xuXG4gIGlmICghdXNlcikge1xuICAgIHJldHVybiBOZXh0UmVzcG9uc2UucmVkaXJlY3QobmV3IFVSTChcIi9hZG1pbi9sb2dpbj9lcnJvcj0xXCIsIHJlcXVlc3QudXJsKSk7XG4gIH1cblxuICBjb25zdCBpc1ZhbGlkID0gYXdhaXQgdmVyaWZ5UGFzc3dvcmQocGFyc2VkLmRhdGEucGFzc3dvcmQsIHVzZXIucGFzc3dvcmRIYXNoKTtcbiAgaWYgKCFpc1ZhbGlkKSB7XG4gICAgcmV0dXJuIE5leHRSZXNwb25zZS5yZWRpcmVjdChuZXcgVVJMKFwiL2FkbWluL2xvZ2luP2Vycm9yPTFcIiwgcmVxdWVzdC51cmwpKTtcbiAgfVxuXG4gIGNvbnN0IHRva2VuID0gc2lnblNlc3Npb24oeyB1c2VySWQ6IHVzZXIuaWQsIHJvbGU6IFwiQURNSU5cIiB9KTtcbiAgY29uc3QgcmVzcG9uc2UgPSBOZXh0UmVzcG9uc2UucmVkaXJlY3QobmV3IFVSTChcIi9hZG1pbi9wb3N0c1wiLCByZXF1ZXN0LnVybCkpO1xuICByZXNwb25zZS5jb29raWVzLnNldCh7XG4gICAgbmFtZTogc2Vzc2lvbkNvb2tpZU5hbWUsXG4gICAgdmFsdWU6IHRva2VuLFxuICAgIGh0dHBPbmx5OiB0cnVlLFxuICAgIHNhbWVTaXRlOiBcImxheFwiLFxuICAgIHNlY3VyZTogcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09IFwicHJvZHVjdGlvblwiLFxuICAgIG1heEFnZTogc2Vzc2lvbk1heEFnZSxcbiAgICBwYXRoOiBcIi9cIlxuICB9KTtcblxuICByZXR1cm4gcmVzcG9uc2U7XG59XG4iXSwibmFtZXMiOlsiTmV4dFJlc3BvbnNlIiwicHJpc21hIiwibG9naW5TY2hlbWEiLCJzaWduU2Vzc2lvbiIsInNlc3Npb25Db29raWVOYW1lIiwic2Vzc2lvbk1heEFnZSIsInZlcmlmeVBhc3N3b3JkIiwiUE9TVCIsInJlcXVlc3QiLCJmb3JtRGF0YSIsImRhdGEiLCJlbWFpbCIsIlN0cmluZyIsImdldCIsInRyaW0iLCJwYXNzd29yZCIsInBhcnNlZCIsInNhZmVQYXJzZSIsInN1Y2Nlc3MiLCJyZWRpcmVjdCIsIlVSTCIsInVybCIsInVzZXIiLCJmaW5kVW5pcXVlIiwid2hlcmUiLCJpc1ZhbGlkIiwicGFzc3dvcmRIYXNoIiwidG9rZW4iLCJ1c2VySWQiLCJpZCIsInJvbGUiLCJyZXNwb25zZSIsImNvb2tpZXMiLCJzZXQiLCJuYW1lIiwidmFsdWUiLCJodHRwT25seSIsInNhbWVTaXRlIiwic2VjdXJlIiwicHJvY2VzcyIsIm1heEFnZSIsInBhdGgiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./src/app/api/auth/login/route.ts\n");

/***/ }),

/***/ "(rsc)/./src/lib/auth.ts":
/*!*************************!*\
  !*** ./src/lib/auth.ts ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   clearSessionCookie: () => (/* binding */ clearSessionCookie),\n/* harmony export */   getSessionFromCookies: () => (/* binding */ getSessionFromCookies),\n/* harmony export */   sessionCookieName: () => (/* binding */ sessionCookieName),\n/* harmony export */   sessionMaxAge: () => (/* binding */ sessionMaxAge),\n/* harmony export */   setSessionCookie: () => (/* binding */ setSessionCookie),\n/* harmony export */   signSession: () => (/* binding */ signSession),\n/* harmony export */   verifySession: () => (/* binding */ verifySession)\n/* harmony export */ });\n/* harmony import */ var next_headers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/headers */ \"(rsc)/./node_modules/next/dist/api/headers.js\");\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jsonwebtoken */ \"(rsc)/./node_modules/jsonwebtoken/index.js\");\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jsonwebtoken__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst SESSION_COOKIE = \"sv_session\";\nconst SESSION_MAX_AGE = 60 * 60 * 24 * 7;\nfunction getJwtSecret() {\n    const secret = process.env.JWT_SECRET;\n    if (!secret) {\n        throw new Error(\"JWT_SECRET ist nicht gesetzt.\");\n    }\n    return secret;\n}\nfunction signSession(payload) {\n    return jsonwebtoken__WEBPACK_IMPORTED_MODULE_1___default().sign(payload, getJwtSecret(), {\n        expiresIn: SESSION_MAX_AGE\n    });\n}\nfunction verifySession(token) {\n    try {\n        return jsonwebtoken__WEBPACK_IMPORTED_MODULE_1___default().verify(token, getJwtSecret());\n    } catch  {\n        return null;\n    }\n}\nfunction setSessionCookie(token) {\n    (0,next_headers__WEBPACK_IMPORTED_MODULE_0__.cookies)().set({\n        name: SESSION_COOKIE,\n        value: token,\n        httpOnly: true,\n        sameSite: \"lax\",\n        secure: \"development\" === \"production\",\n        maxAge: SESSION_MAX_AGE,\n        path: \"/\"\n    });\n}\nfunction clearSessionCookie() {\n    (0,next_headers__WEBPACK_IMPORTED_MODULE_0__.cookies)().set({\n        name: SESSION_COOKIE,\n        value: \"\",\n        httpOnly: true,\n        sameSite: \"lax\",\n        secure: \"development\" === \"production\",\n        maxAge: 0,\n        path: \"/\"\n    });\n}\nfunction getSessionFromCookies() {\n    const token = (0,next_headers__WEBPACK_IMPORTED_MODULE_0__.cookies)().get(SESSION_COOKIE)?.value;\n    if (!token) return null;\n    return verifySession(token);\n}\nconst sessionCookieName = SESSION_COOKIE;\nconst sessionMaxAge = SESSION_MAX_AGE;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvbGliL2F1dGgudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUF1QztBQUNSO0FBRS9CLE1BQU1FLGlCQUFpQjtBQUN2QixNQUFNQyxrQkFBa0IsS0FBSyxLQUFLLEtBQUs7QUFPdkMsU0FBU0M7SUFDUCxNQUFNQyxTQUFTQyxRQUFRQyxHQUFHLENBQUNDLFVBQVU7SUFDckMsSUFBSSxDQUFDSCxRQUFRO1FBQ1gsTUFBTSxJQUFJSSxNQUFNO0lBQ2xCO0lBQ0EsT0FBT0o7QUFDVDtBQUVPLFNBQVNLLFlBQVlDLE9BQXVCO0lBQ2pELE9BQU9WLHdEQUFRLENBQUNVLFNBQVNQLGdCQUFnQjtRQUFFUyxXQUFXVjtJQUFnQjtBQUN4RTtBQUVPLFNBQVNXLGNBQWNDLEtBQWE7SUFDekMsSUFBSTtRQUNGLE9BQU9kLDBEQUFVLENBQUNjLE9BQU9YO0lBQzNCLEVBQUUsT0FBTTtRQUNOLE9BQU87SUFDVDtBQUNGO0FBRU8sU0FBU2EsaUJBQWlCRixLQUFhO0lBQzVDZixxREFBT0EsR0FBR2tCLEdBQUcsQ0FBQztRQUNaQyxNQUFNakI7UUFDTmtCLE9BQU9MO1FBQ1BNLFVBQVU7UUFDVkMsVUFBVTtRQUNWQyxRQUFRakIsa0JBQXlCO1FBQ2pDa0IsUUFBUXJCO1FBQ1JzQixNQUFNO0lBQ1I7QUFDRjtBQUVPLFNBQVNDO0lBQ2QxQixxREFBT0EsR0FBR2tCLEdBQUcsQ0FBQztRQUNaQyxNQUFNakI7UUFDTmtCLE9BQU87UUFDUEMsVUFBVTtRQUNWQyxVQUFVO1FBQ1ZDLFFBQVFqQixrQkFBeUI7UUFDakNrQixRQUFRO1FBQ1JDLE1BQU07SUFDUjtBQUNGO0FBRU8sU0FBU0U7SUFDZCxNQUFNWixRQUFRZixxREFBT0EsR0FBRzRCLEdBQUcsQ0FBQzFCLGlCQUFpQmtCO0lBQzdDLElBQUksQ0FBQ0wsT0FBTyxPQUFPO0lBQ25CLE9BQU9ELGNBQWNDO0FBQ3ZCO0FBRU8sTUFBTWMsb0JBQW9CM0IsZUFBZTtBQUN6QyxNQUFNNEIsZ0JBQWdCM0IsZ0JBQWdCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vaGdlLXNjaHVlbGVydmVydHJldHVuZy8uL3NyYy9saWIvYXV0aC50cz82NjkyIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNvb2tpZXMgfSBmcm9tIFwibmV4dC9oZWFkZXJzXCI7XG5pbXBvcnQgand0IGZyb20gXCJqc29ud2VidG9rZW5cIjtcblxuY29uc3QgU0VTU0lPTl9DT09LSUUgPSBcInN2X3Nlc3Npb25cIjtcbmNvbnN0IFNFU1NJT05fTUFYX0FHRSA9IDYwICogNjAgKiAyNCAqIDc7XG5cbmV4cG9ydCB0eXBlIFNlc3Npb25QYXlsb2FkID0ge1xuICB1c2VySWQ6IHN0cmluZztcbiAgcm9sZTogXCJBRE1JTlwiO1xufTtcblxuZnVuY3Rpb24gZ2V0Snd0U2VjcmV0KCkge1xuICBjb25zdCBzZWNyZXQgPSBwcm9jZXNzLmVudi5KV1RfU0VDUkVUO1xuICBpZiAoIXNlY3JldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkpXVF9TRUNSRVQgaXN0IG5pY2h0IGdlc2V0enQuXCIpO1xuICB9XG4gIHJldHVybiBzZWNyZXQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzaWduU2Vzc2lvbihwYXlsb2FkOiBTZXNzaW9uUGF5bG9hZCkge1xuICByZXR1cm4gand0LnNpZ24ocGF5bG9hZCwgZ2V0Snd0U2VjcmV0KCksIHsgZXhwaXJlc0luOiBTRVNTSU9OX01BWF9BR0UgfSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB2ZXJpZnlTZXNzaW9uKHRva2VuOiBzdHJpbmcpOiBTZXNzaW9uUGF5bG9hZCB8IG51bGwge1xuICB0cnkge1xuICAgIHJldHVybiBqd3QudmVyaWZ5KHRva2VuLCBnZXRKd3RTZWNyZXQoKSkgYXMgU2Vzc2lvblBheWxvYWQ7XG4gIH0gY2F0Y2gge1xuICAgIHJldHVybiBudWxsO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzZXRTZXNzaW9uQ29va2llKHRva2VuOiBzdHJpbmcpIHtcbiAgY29va2llcygpLnNldCh7XG4gICAgbmFtZTogU0VTU0lPTl9DT09LSUUsXG4gICAgdmFsdWU6IHRva2VuLFxuICAgIGh0dHBPbmx5OiB0cnVlLFxuICAgIHNhbWVTaXRlOiBcImxheFwiLFxuICAgIHNlY3VyZTogcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09IFwicHJvZHVjdGlvblwiLFxuICAgIG1heEFnZTogU0VTU0lPTl9NQVhfQUdFLFxuICAgIHBhdGg6IFwiL1wiXG4gIH0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY2xlYXJTZXNzaW9uQ29va2llKCkge1xuICBjb29raWVzKCkuc2V0KHtcbiAgICBuYW1lOiBTRVNTSU9OX0NPT0tJRSxcbiAgICB2YWx1ZTogXCJcIixcbiAgICBodHRwT25seTogdHJ1ZSxcbiAgICBzYW1lU2l0ZTogXCJsYXhcIixcbiAgICBzZWN1cmU6IHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSBcInByb2R1Y3Rpb25cIixcbiAgICBtYXhBZ2U6IDAsXG4gICAgcGF0aDogXCIvXCJcbiAgfSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRTZXNzaW9uRnJvbUNvb2tpZXMoKTogU2Vzc2lvblBheWxvYWQgfCBudWxsIHtcbiAgY29uc3QgdG9rZW4gPSBjb29raWVzKCkuZ2V0KFNFU1NJT05fQ09PS0lFKT8udmFsdWU7XG4gIGlmICghdG9rZW4pIHJldHVybiBudWxsO1xuICByZXR1cm4gdmVyaWZ5U2Vzc2lvbih0b2tlbik7XG59XG5cbmV4cG9ydCBjb25zdCBzZXNzaW9uQ29va2llTmFtZSA9IFNFU1NJT05fQ09PS0lFO1xuZXhwb3J0IGNvbnN0IHNlc3Npb25NYXhBZ2UgPSBTRVNTSU9OX01BWF9BR0U7XG4iXSwibmFtZXMiOlsiY29va2llcyIsImp3dCIsIlNFU1NJT05fQ09PS0lFIiwiU0VTU0lPTl9NQVhfQUdFIiwiZ2V0Snd0U2VjcmV0Iiwic2VjcmV0IiwicHJvY2VzcyIsImVudiIsIkpXVF9TRUNSRVQiLCJFcnJvciIsInNpZ25TZXNzaW9uIiwicGF5bG9hZCIsInNpZ24iLCJleHBpcmVzSW4iLCJ2ZXJpZnlTZXNzaW9uIiwidG9rZW4iLCJ2ZXJpZnkiLCJzZXRTZXNzaW9uQ29va2llIiwic2V0IiwibmFtZSIsInZhbHVlIiwiaHR0cE9ubHkiLCJzYW1lU2l0ZSIsInNlY3VyZSIsIm1heEFnZSIsInBhdGgiLCJjbGVhclNlc3Npb25Db29raWUiLCJnZXRTZXNzaW9uRnJvbUNvb2tpZXMiLCJnZXQiLCJzZXNzaW9uQ29va2llTmFtZSIsInNlc3Npb25NYXhBZ2UiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./src/lib/auth.ts\n");

/***/ }),

/***/ "(rsc)/./src/lib/password.ts":
/*!*****************************!*\
  !*** ./src/lib/password.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   hashPassword: () => (/* binding */ hashPassword),\n/* harmony export */   verifyPassword: () => (/* binding */ verifyPassword)\n/* harmony export */ });\n/* harmony import */ var bcrypt__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! bcrypt */ \"bcrypt\");\n/* harmony import */ var bcrypt__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(bcrypt__WEBPACK_IMPORTED_MODULE_0__);\n\nconst SALT_ROUNDS = 12;\nfunction hashPassword(password) {\n    return bcrypt__WEBPACK_IMPORTED_MODULE_0___default().hash(password, SALT_ROUNDS);\n}\nfunction verifyPassword(password, hash) {\n    return bcrypt__WEBPACK_IMPORTED_MODULE_0___default().compare(password, hash);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvbGliL3Bhc3N3b3JkLnRzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBNEI7QUFFNUIsTUFBTUMsY0FBYztBQUViLFNBQVNDLGFBQWFDLFFBQWdCO0lBQzNDLE9BQU9ILGtEQUFXLENBQUNHLFVBQVVGO0FBQy9CO0FBRU8sU0FBU0ksZUFBZUYsUUFBZ0IsRUFBRUMsSUFBWTtJQUMzRCxPQUFPSixxREFBYyxDQUFDRyxVQUFVQztBQUNsQyIsInNvdXJjZXMiOlsid2VicGFjazovL2hnZS1zY2h1ZWxlcnZlcnRyZXR1bmcvLi9zcmMvbGliL3Bhc3N3b3JkLnRzPzA5MDgiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGJjcnlwdCBmcm9tIFwiYmNyeXB0XCI7XG5cbmNvbnN0IFNBTFRfUk9VTkRTID0gMTI7XG5cbmV4cG9ydCBmdW5jdGlvbiBoYXNoUGFzc3dvcmQocGFzc3dvcmQ6IHN0cmluZykge1xuICByZXR1cm4gYmNyeXB0Lmhhc2gocGFzc3dvcmQsIFNBTFRfUk9VTkRTKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHZlcmlmeVBhc3N3b3JkKHBhc3N3b3JkOiBzdHJpbmcsIGhhc2g6IHN0cmluZykge1xuICByZXR1cm4gYmNyeXB0LmNvbXBhcmUocGFzc3dvcmQsIGhhc2gpO1xufVxuIl0sIm5hbWVzIjpbImJjcnlwdCIsIlNBTFRfUk9VTkRTIiwiaGFzaFBhc3N3b3JkIiwicGFzc3dvcmQiLCJoYXNoIiwidmVyaWZ5UGFzc3dvcmQiLCJjb21wYXJlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./src/lib/password.ts\n");

/***/ }),

/***/ "(rsc)/./src/lib/prisma.ts":
/*!***************************!*\
  !*** ./src/lib/prisma.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @prisma/client */ \"@prisma/client\");\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_0__);\n\nconst prisma = global.prisma ?? new _prisma_client__WEBPACK_IMPORTED_MODULE_0__.PrismaClient();\nif (true) {\n    global.prisma = prisma;\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (prisma);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvbGliL3ByaXNtYS50cyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBOEM7QUFPOUMsTUFBTUMsU0FBU0MsT0FBT0QsTUFBTSxJQUFJLElBQUlELHdEQUFZQTtBQUVoRCxJQUFJRyxJQUFxQyxFQUFFO0lBQ3pDRCxPQUFPRCxNQUFNLEdBQUdBO0FBQ2xCO0FBRUEsaUVBQWVBLE1BQU1BLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9oZ2Utc2NodWVsZXJ2ZXJ0cmV0dW5nLy4vc3JjL2xpYi9wcmlzbWEudHM/MDFkNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQcmlzbWFDbGllbnQgfSBmcm9tIFwiQHByaXNtYS9jbGllbnRcIjtcblxuZGVjbGFyZSBnbG9iYWwge1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdmFyXG4gIHZhciBwcmlzbWE6IFByaXNtYUNsaWVudCB8IHVuZGVmaW5lZDtcbn1cblxuY29uc3QgcHJpc21hID0gZ2xvYmFsLnByaXNtYSA/PyBuZXcgUHJpc21hQ2xpZW50KCk7XG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpIHtcbiAgZ2xvYmFsLnByaXNtYSA9IHByaXNtYTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgcHJpc21hO1xuIl0sIm5hbWVzIjpbIlByaXNtYUNsaWVudCIsInByaXNtYSIsImdsb2JhbCIsInByb2Nlc3MiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./src/lib/prisma.ts\n");

/***/ }),

/***/ "(rsc)/./src/lib/validators.ts":
/*!*******************************!*\
  !*** ./src/lib/validators.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   adminCreateSchema: () => (/* binding */ adminCreateSchema),\n/* harmony export */   loginSchema: () => (/* binding */ loginSchema),\n/* harmony export */   postSchema: () => (/* binding */ postSchema)\n/* harmony export */ });\n/* harmony import */ var zod__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! zod */ \"(rsc)/./node_modules/zod/v3/types.js\");\n\nconst loginSchema = zod__WEBPACK_IMPORTED_MODULE_0__.object({\n    email: zod__WEBPACK_IMPORTED_MODULE_0__.string().email(),\n    password: zod__WEBPACK_IMPORTED_MODULE_0__.string().min(1)\n});\nconst adminCreateSchema = zod__WEBPACK_IMPORTED_MODULE_0__.object({\n    email: zod__WEBPACK_IMPORTED_MODULE_0__.string().email(),\n    password: zod__WEBPACK_IMPORTED_MODULE_0__.string().min(8)\n});\nconst postSchema = zod__WEBPACK_IMPORTED_MODULE_0__.object({\n    title: zod__WEBPACK_IMPORTED_MODULE_0__.string().min(1),\n    description: zod__WEBPACK_IMPORTED_MODULE_0__.string().optional(),\n    content: zod__WEBPACK_IMPORTED_MODULE_0__.string().optional(),\n    published: zod__WEBPACK_IMPORTED_MODULE_0__.boolean(),\n    pinned: zod__WEBPACK_IMPORTED_MODULE_0__.boolean()\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvbGliL3ZhbGlkYXRvcnMudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUF3QjtBQUVqQixNQUFNQyxjQUFjRCx1Q0FBUSxDQUFDO0lBQ2xDRyxPQUFPSCx1Q0FBUSxHQUFHRyxLQUFLO0lBQ3ZCRSxVQUFVTCx1Q0FBUSxHQUFHTSxHQUFHLENBQUM7QUFDM0IsR0FBRztBQUVJLE1BQU1DLG9CQUFvQlAsdUNBQVEsQ0FBQztJQUN4Q0csT0FBT0gsdUNBQVEsR0FBR0csS0FBSztJQUN2QkUsVUFBVUwsdUNBQVEsR0FBR00sR0FBRyxDQUFDO0FBQzNCLEdBQUc7QUFFSSxNQUFNRSxhQUFhUix1Q0FBUSxDQUFDO0lBQ2pDUyxPQUFPVCx1Q0FBUSxHQUFHTSxHQUFHLENBQUM7SUFDdEJJLGFBQWFWLHVDQUFRLEdBQUdXLFFBQVE7SUFDaENDLFNBQVNaLHVDQUFRLEdBQUdXLFFBQVE7SUFDNUJFLFdBQVdiLHdDQUFTO0lBQ3BCZSxRQUFRZix3Q0FBUztBQUNuQixHQUFHIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vaGdlLXNjaHVlbGVydmVydHJldHVuZy8uL3NyYy9saWIvdmFsaWRhdG9ycy50cz8yZDg5Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHogfSBmcm9tIFwiem9kXCI7XG5cbmV4cG9ydCBjb25zdCBsb2dpblNjaGVtYSA9IHoub2JqZWN0KHtcbiAgZW1haWw6IHouc3RyaW5nKCkuZW1haWwoKSxcbiAgcGFzc3dvcmQ6IHouc3RyaW5nKCkubWluKDEpXG59KTtcblxuZXhwb3J0IGNvbnN0IGFkbWluQ3JlYXRlU2NoZW1hID0gei5vYmplY3Qoe1xuICBlbWFpbDogei5zdHJpbmcoKS5lbWFpbCgpLFxuICBwYXNzd29yZDogei5zdHJpbmcoKS5taW4oOClcbn0pO1xuXG5leHBvcnQgY29uc3QgcG9zdFNjaGVtYSA9IHoub2JqZWN0KHtcbiAgdGl0bGU6IHouc3RyaW5nKCkubWluKDEpLFxuICBkZXNjcmlwdGlvbjogei5zdHJpbmcoKS5vcHRpb25hbCgpLFxuICBjb250ZW50OiB6LnN0cmluZygpLm9wdGlvbmFsKCksXG4gIHB1Ymxpc2hlZDogei5ib29sZWFuKCksXG4gIHBpbm5lZDogei5ib29sZWFuKClcbn0pO1xuIl0sIm5hbWVzIjpbInoiLCJsb2dpblNjaGVtYSIsIm9iamVjdCIsImVtYWlsIiwic3RyaW5nIiwicGFzc3dvcmQiLCJtaW4iLCJhZG1pbkNyZWF0ZVNjaGVtYSIsInBvc3RTY2hlbWEiLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwib3B0aW9uYWwiLCJjb250ZW50IiwicHVibGlzaGVkIiwiYm9vbGVhbiIsInBpbm5lZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./src/lib/validators.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/semver","vendor-chunks/jsonwebtoken","vendor-chunks/lodash.includes","vendor-chunks/jws","vendor-chunks/lodash.once","vendor-chunks/jwa","vendor-chunks/lodash.isinteger","vendor-chunks/ecdsa-sig-formatter","vendor-chunks/lodash.isplainobject","vendor-chunks/ms","vendor-chunks/lodash.isstring","vendor-chunks/lodash.isnumber","vendor-chunks/lodash.isboolean","vendor-chunks/safe-buffer","vendor-chunks/buffer-equal-constant-time","vendor-chunks/zod"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fauth%2Flogin%2Froute&page=%2Fapi%2Fauth%2Flogin%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fauth%2Flogin%2Froute.ts&appDir=%2FUsers%2Fkatharinaprengel%2FDownloads%2Fdein-angebotsprofi-main%2Fsrc%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fkatharinaprengel%2FDownloads%2Fdein-angebotsprofi-main&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();