require('source-map-support/register')
module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 8);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__errorCode__ = __webpack_require__(12);

console.log("production");
var dbname =  false ? 'user' : 'koa';

/* harmony default export */ __webpack_exports__["a"] = ({
  app: {
    name: 'something',
    version: '1.0.0'
  },
  database: {
    driver: 'mongo',
    host: '127.0.0.1',
    port: 27017,
    dbname: 'user',
    username: 'admin',
    password: '123456',
    options: {}
  },
  server: {
    port: 3000
  },
  static_dir: {
    root: './static',
    options: {}
  },
  session: {
    secretKey: 'something'
  },
  secret: 'qweqwqw',
  md5Key: 'this is md5 key',
  errorCode: __WEBPACK_IMPORTED_MODULE_0__errorCode__["a" /* default */]
});

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(9);


/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("mongoose");

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__config__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_chalk__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_chalk___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_chalk__);



/* harmony default export */ __webpack_exports__["a"] = (function (code) {
  var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  console.log(__WEBPACK_IMPORTED_MODULE_1_chalk___default.a.yellow('ErrorCode\uFF1A' + code));
  return {
    code: code,
    data: data,
    msg: __WEBPACK_IMPORTED_MODULE_0__config__["a" /* default */].errorCode[code]
  };
});

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("koa-router");

/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mongoose__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mongoose___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_mongoose__);


var model = {
  username: {
    type: String,
    index: {
      unique: true
    }
  },
  password: String
};

/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_0_mongoose___default.a.model('Users', model));

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("chalk");

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("jsonwebtoken");

/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Users_jingangdong_Documents_nuxt_test_node_modules_babel_runtime_6_26_0_babel_runtime_regenerator__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Users_jingangdong_Documents_nuxt_test_node_modules_babel_runtime_6_26_0_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__Users_jingangdong_Documents_nuxt_test_node_modules_babel_runtime_6_26_0_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_koa__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_koa___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_koa__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_nuxt__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_nuxt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_nuxt__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__config__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__middlewares__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__models__ = __webpack_require__(23);


var _this = this;

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }








var app = new __WEBPACK_IMPORTED_MODULE_1_koa___default.a();
var host = process.env.HOST || '127.0.0.1';
var port = process.env.PORT || __WEBPACK_IMPORTED_MODULE_3__config__["a" /* default */].server.port;

var start = function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0__Users_jingangdong_Documents_nuxt_test_node_modules_babel_runtime_6_26_0_babel_runtime_regenerator___default.a.mark(function _callee2() {
    var nuxtConfig, nuxt, builder;
    return __WEBPACK_IMPORTED_MODULE_0__Users_jingangdong_Documents_nuxt_test_node_modules_babel_runtime_6_26_0_babel_runtime_regenerator___default.a.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            // Import and Set Nuxt.js options
            nuxtConfig = __webpack_require__(24);

            nuxtConfig.dev = !(app.env === 'production');

            // Instantiate nuxt.js


            // Middlewares are imported here.
            Object(__WEBPACK_IMPORTED_MODULE_4__middlewares__["a" /* default */])(app);

            nuxt = new __WEBPACK_IMPORTED_MODULE_2_nuxt__["Nuxt"](nuxtConfig);

            if (!nuxtConfig.dev) {
              _context2.next = 8;
              break;
            }

            builder = new __WEBPACK_IMPORTED_MODULE_2_nuxt__["Builder"](nuxt);
            _context2.next = 8;
            return builder.build();

          case 8:

            app.use(function () {
              var _ref2 = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0__Users_jingangdong_Documents_nuxt_test_node_modules_babel_runtime_6_26_0_babel_runtime_regenerator___default.a.mark(function _callee(ctx, next) {
                return __WEBPACK_IMPORTED_MODULE_0__Users_jingangdong_Documents_nuxt_test_node_modules_babel_runtime_6_26_0_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
                  while (1) {
                    switch (_context.prev = _context.next) {
                      case 0:
                        _context.next = 2;
                        return next();

                      case 2:
                        ctx.status = 200; // koa defaults to 404 when it sees that status is unset

                        return _context.abrupt('return', new Promise(function (resolve, reject) {
                          ctx.res.on('close', resolve);
                          ctx.res.on('finish', resolve);
                          nuxt.render(ctx.req, ctx.res, function (promise) {
                            // nuxt.render passes a rejected promise into callback on error.
                            promise.then(resolve).catch(reject);
                          });
                        }));

                      case 4:
                      case 'end':
                        return _context.stop();
                    }
                  }
                }, _callee, _this);
              }));

              return function (_x, _x2) {
                return _ref2.apply(this, arguments);
              };
            }());

            app.listen(port, host);

          case 10:
          case 'end':
            return _context2.stop();
        }
      }
    }, _callee2, _this);
  }));

  return function start() {
    return _ref.apply(this, arguments);
  };
}();

start();

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = require("regenerator-runtime");

/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = require("koa");

/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = require("nuxt");

/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({
  0: '请求成功',
  '-1': '系统错误',
  100: '用户名或密码填写有误',
  101: '该用户名已存在',
  200: '分页参数错误',
  400: 'TokenError',
  300: '参数错误',
  600: '无效token'
});

/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Users_jingangdong_Documents_nuxt_test_node_modules_babel_runtime_6_26_0_babel_runtime_regenerator__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Users_jingangdong_Documents_nuxt_test_node_modules_babel_runtime_6_26_0_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__Users_jingangdong_Documents_nuxt_test_node_modules_babel_runtime_6_26_0_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_koa_static__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_koa_static___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_koa_static__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_koa_bodyparser__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_koa_bodyparser___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_koa_bodyparser__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__config__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__routes__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_koa_jwt__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_koa_jwt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_koa_jwt__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_koa_router__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_koa_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_koa_router__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__utils_response__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_koa_logger__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_koa_logger___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_koa_logger__);


var _this = this;

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }










/* harmony default export */ __webpack_exports__["a"] = (function (app) {
  var router = new __WEBPACK_IMPORTED_MODULE_6_koa_router___default.a();

  router.use('', __WEBPACK_IMPORTED_MODULE_4__routes__["a" /* default */].routes());

  // app.use(cors())

  app.use(__WEBPACK_IMPORTED_MODULE_8_koa_logger___default()());

  app.use(__WEBPACK_IMPORTED_MODULE_5_koa_jwt___default()({
    secret: __WEBPACK_IMPORTED_MODULE_3__config__["a" /* default */].secret
  }).unless({
    path: [/^(?!\/api).*/, /^\/api\/login/, /^\/api\/reg/, /^\/api\/logout/, /^\/api\/getArticlesList/, /^\/api\/getArticleDetail/]
  }));

  app.use(function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0__Users_jingangdong_Documents_nuxt_test_node_modules_babel_runtime_6_26_0_babel_runtime_regenerator___default.a.mark(function _callee(ctx, next) {
      return __WEBPACK_IMPORTED_MODULE_0__Users_jingangdong_Documents_nuxt_test_node_modules_babel_runtime_6_26_0_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              if (ctx.status === 401) {
                ctx.body = Object(__WEBPACK_IMPORTED_MODULE_7__utils_response__["a" /* default */])(600);
              }

              _context.next = 3;
              return next();

            case 3:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, _this);
    }));

    return function (_x, _x2) {
      return _ref.apply(this, arguments);
    };
  }());

  app.use(function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0__Users_jingangdong_Documents_nuxt_test_node_modules_babel_runtime_6_26_0_babel_runtime_regenerator___default.a.mark(function _callee2(ctx, next) {
      return __WEBPACK_IMPORTED_MODULE_0__Users_jingangdong_Documents_nuxt_test_node_modules_babel_runtime_6_26_0_babel_runtime_regenerator___default.a.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.prev = 0;
              _context2.next = 3;
              return next();

            case 3:

              // Handle 404 - throw it as an error.
              if (ctx.status === 404 && ctx.res.headersSent === false) {
                ctx.throw(404);
              }

              if (ctx.status === 200 && ctx.res.headersSent === false) {
                ctx.body = {
                  status: 200,
                  data: ctx.body
                };
              }
              _context2.next = 13;
              break;

            case 7:
              _context2.prev = 7;
              _context2.t0 = _context2['catch'](0);

              ctx.status = _context2.t0.status || 500;

              ctx.type = 'json';
              ctx.body = {
                status: ctx.status,
                message: _context2.t0.message
              };

              ctx.app.emit('error', _context2.t0, ctx);

            case 13:
            case 'end':
              return _context2.stop();
          }
        }
      }, _callee2, _this, [[0, 7]]);
    }));

    return function (_x3, _x4) {
      return _ref2.apply(this, arguments);
    };
  }());

  app.use(__WEBPACK_IMPORTED_MODULE_1_koa_static___default()(__WEBPACK_IMPORTED_MODULE_3__config__["a" /* default */].static_dir.root));

  app.use(__WEBPACK_IMPORTED_MODULE_2_koa_bodyparser___default()());

  app.use(router.routes()).use(router.allowedMethods());

  // auth check


  // Add routes by group.
  // const mount = require('koa-mount')
  // app.use(mount('/api', routes()))
});

/***/ }),
/* 14 */
/***/ (function(module, exports) {

module.exports = require("koa-static");

/***/ }),
/* 15 */
/***/ (function(module, exports) {

module.exports = require("koa-bodyparser");

/***/ }),
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_koa_router__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_koa_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_koa_router__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__controllers_articles__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__controllers_user__ = __webpack_require__(19);




var router = new __WEBPACK_IMPORTED_MODULE_0_koa_router___default.a({
  prefix: '/api'
});

router.post('/getArticlesList', __WEBPACK_IMPORTED_MODULE_1__controllers_articles__["b" /* getArticleList */]);
router.post('/login', __WEBPACK_IMPORTED_MODULE_2__controllers_user__["a" /* login */]);
router.post('/logout', __WEBPACK_IMPORTED_MODULE_2__controllers_user__["b" /* logout */]);
router.post('/reg', __WEBPACK_IMPORTED_MODULE_2__controllers_user__["c" /* reg */]);
router.post('/getArticleDetail', __WEBPACK_IMPORTED_MODULE_1__controllers_articles__["a" /* getArticleDetail */]);
router.post('/publish', __WEBPACK_IMPORTED_MODULE_1__controllers_articles__["c" /* publishArticle */]);

/* harmony default export */ __webpack_exports__["a"] = (router);

/***/ }),
/* 17 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return getArticleList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getArticleDetail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return publishArticle; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Users_jingangdong_Documents_nuxt_test_node_modules_babel_runtime_6_26_0_babel_runtime_regenerator__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Users_jingangdong_Documents_nuxt_test_node_modules_babel_runtime_6_26_0_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__Users_jingangdong_Documents_nuxt_test_node_modules_babel_runtime_6_26_0_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_articles__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_users__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__utils_response__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_jsonwebtoken__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_jsonwebtoken___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_jsonwebtoken__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__config__ = __webpack_require__(0);


var _this = this;

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }







var getArticleList = function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0__Users_jingangdong_Documents_nuxt_test_node_modules_babel_runtime_6_26_0_babel_runtime_regenerator___default.a.mark(function _callee(ctx) {
    var body, articles, articlesList, articlesSize, list;
    return __WEBPACK_IMPORTED_MODULE_0__Users_jingangdong_Documents_nuxt_test_node_modules_babel_runtime_6_26_0_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            body = ctx.request.body;

            if (!(body.page <= 0)) {
              _context.next = 7;
              break;
            }

            ctx.body = Object(__WEBPACK_IMPORTED_MODULE_3__utils_response__["a" /* default */])(200);
            _context.next = 6;
            return next();

          case 6:
            return _context.abrupt('return', _context.sent);

          case 7:
            articles = __WEBPACK_IMPORTED_MODULE_1__models_articles__["a" /* default */].find();
            _context.next = 10;
            return articles.sort({ createTime: -1 }).skip((body.page - 1) * body.pageSize).limit(body.pageSize);

          case 10:
            articlesList = _context.sent;
            _context.next = 13;
            return articles.count();

          case 13:
            articlesSize = _context.sent;
            list = articlesList.map(function (item) {
              item.content = item.content.length > 150 ? item.content.substring(0, 150) + '...' : item.content;
              return item;
            });


            ctx.body = Object(__WEBPACK_IMPORTED_MODULE_3__utils_response__["a" /* default */])(0, {
              list: list,
              total: articlesSize,
              pageSize: body.pageSize
            });

            _context.next = 22;
            break;

          case 18:
            _context.prev = 18;
            _context.t0 = _context['catch'](0);

            ctx.body = Object(__WEBPACK_IMPORTED_MODULE_3__utils_response__["a" /* default */])(-1);
            throw _context.t0;

          case 22:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, _this, [[0, 18]]);
  }));

  return function getArticleList(_x) {
    return _ref.apply(this, arguments);
  };
}();

var getArticleDetail = function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0__Users_jingangdong_Documents_nuxt_test_node_modules_babel_runtime_6_26_0_babel_runtime_regenerator___default.a.mark(function _callee2(ctx) {
    var body, articles;
    return __WEBPACK_IMPORTED_MODULE_0__Users_jingangdong_Documents_nuxt_test_node_modules_babel_runtime_6_26_0_babel_runtime_regenerator___default.a.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            body = ctx.request.body;
            _context2.next = 4;
            return __WEBPACK_IMPORTED_MODULE_1__models_articles__["a" /* default */].findOne({ _id: body.articleId });

          case 4:
            articles = _context2.sent;


            ctx.body = Object(__WEBPACK_IMPORTED_MODULE_3__utils_response__["a" /* default */])(0, articles);

            _context2.next = 11;
            break;

          case 8:
            _context2.prev = 8;
            _context2.t0 = _context2['catch'](0);

            ctx.body = Object(__WEBPACK_IMPORTED_MODULE_3__utils_response__["a" /* default */])(-1);

          case 11:
          case 'end':
            return _context2.stop();
        }
      }
    }, _callee2, _this, [[0, 8]]);
  }));

  return function getArticleDetail(_x2) {
    return _ref2.apply(this, arguments);
  };
}();

var publishArticle = function () {
  var _ref3 = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0__Users_jingangdong_Documents_nuxt_test_node_modules_babel_runtime_6_26_0_babel_runtime_regenerator___default.a.mark(function _callee4(ctx) {
    var token;
    return __WEBPACK_IMPORTED_MODULE_0__Users_jingangdong_Documents_nuxt_test_node_modules_babel_runtime_6_26_0_babel_runtime_regenerator___default.a.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.prev = 0;
            token = ctx.request.header.authorization.split(' ')[1];
            _context4.next = 4;
            return __WEBPACK_IMPORTED_MODULE_4_jsonwebtoken___default.a.verify(token, __WEBPACK_IMPORTED_MODULE_5__config__["a" /* default */].secret, function () {
              var _ref4 = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0__Users_jingangdong_Documents_nuxt_test_node_modules_babel_runtime_6_26_0_babel_runtime_regenerator___default.a.mark(function _callee3(err, decoded) {
                var body, user;
                return __WEBPACK_IMPORTED_MODULE_0__Users_jingangdong_Documents_nuxt_test_node_modules_babel_runtime_6_26_0_babel_runtime_regenerator___default.a.wrap(function _callee3$(_context3) {
                  while (1) {
                    switch (_context3.prev = _context3.next) {
                      case 0:
                        if (!err) {
                          _context3.next = 4;
                          break;
                        }

                        ctx.body = Object(__WEBPACK_IMPORTED_MODULE_3__utils_response__["a" /* default */])(400, err);
                        _context3.next = 10;
                        break;

                      case 4:
                        body = ctx.request.body;

                        if (!(!body.title || !body.content)) {
                          _context3.next = 7;
                          break;
                        }

                        return _context3.abrupt('return', ctx.body = Object(__WEBPACK_IMPORTED_MODULE_3__utils_response__["a" /* default */])(300));

                      case 7:
                        user = __WEBPACK_IMPORTED_MODULE_2__models_users__["a" /* default */].findOne({ username: decoded.username });
                        _context3.next = 10;
                        return __WEBPACK_IMPORTED_MODULE_1__models_articles__["a" /* default */].create({
                          title: body.title,
                          content: String(body.content),
                          createTime: new Date().getTime(),
                          author: decoded.username,
                          uid: user._id
                        }).then(function () {
                          ctx.body = Object(__WEBPACK_IMPORTED_MODULE_3__utils_response__["a" /* default */])(0);
                        });

                      case 10:
                      case 'end':
                        return _context3.stop();
                    }
                  }
                }, _callee3, _this);
              }));

              return function (_x4, _x5) {
                return _ref4.apply(this, arguments);
              };
            }());

          case 4:
            _context4.next = 9;
            break;

          case 6:
            _context4.prev = 6;
            _context4.t0 = _context4['catch'](0);
            throw _context4.t0;

          case 9:
          case 'end':
            return _context4.stop();
        }
      }
    }, _callee4, _this, [[0, 6]]);
  }));

  return function publishArticle(_x3) {
    return _ref3.apply(this, arguments);
  };
}();

/***/ }),
/* 18 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mongoose__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mongoose___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_mongoose__);

var model = {
  // 文章标题
  title: {
    type: String,
    index: {
      unique: true
    }
  },
  // // 文章id
  // articleId: {
  //   type: Number,
  //   index: {
  //     unique: true,
  //   },
  // },
  // 内容
  content: {
    type: String
  },
  // 标签
  tag: {
    type: String,
    index: true,
    default: 'js'
  },
  // 分类
  category: {
    type: String,
    index: true,
    default: 'js'
  },
  // 创建时间
  createTime: {
    type: String
  },
  // 作者
  author: {
    type: String
  },
  // 文章浏览量
  pv: {
    type: Number,
    default: 0
  },
  // 发布文章的用户id
  uid: {
    type: Number,
    index: true
  },
  // 更新时间
  updateTime: {
    type: String,
    default: Date.now()
  },
  // 状态
  status: {
    type: String,
    //pending 待审核 pass 通过
    default: 'pending'
  }
};

/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_0_mongoose___default.a.model('Articles', model));

/***/ }),
/* 19 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return login; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return reg; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return logout; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Users_jingangdong_Documents_nuxt_test_node_modules_babel_runtime_6_26_0_babel_runtime_regenerator__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Users_jingangdong_Documents_nuxt_test_node_modules_babel_runtime_6_26_0_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__Users_jingangdong_Documents_nuxt_test_node_modules_babel_runtime_6_26_0_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_users__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils_response__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_jsonwebtoken__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_jsonwebtoken___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_jsonwebtoken__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__config__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_bcrypt__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_bcrypt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_bcrypt__);


var _this = this;

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }







var login = function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0__Users_jingangdong_Documents_nuxt_test_node_modules_babel_runtime_6_26_0_babel_runtime_regenerator___default.a.mark(function _callee(ctx) {
    var body, userInfo, passCorrect, token;
    return __WEBPACK_IMPORTED_MODULE_0__Users_jingangdong_Documents_nuxt_test_node_modules_babel_runtime_6_26_0_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            body = ctx.request.body;
            _context.prev = 1;
            _context.next = 4;
            return __WEBPACK_IMPORTED_MODULE_1__models_users__["a" /* default */].findOne({ username: body.username });

          case 4:
            userInfo = _context.sent;

            if (userInfo) {
              _context.next = 7;
              break;
            }

            return _context.abrupt('return', ctx.body = Object(__WEBPACK_IMPORTED_MODULE_2__utils_response__["a" /* default */])(100));

          case 7:
            passCorrect = __WEBPACK_IMPORTED_MODULE_5_bcrypt___default.a.compareSync(body.password, userInfo.password);


            if (body.username === userInfo.username && passCorrect) {
              token = __WEBPACK_IMPORTED_MODULE_3_jsonwebtoken___default.a.sign({
                username: body.username
              }, __WEBPACK_IMPORTED_MODULE_4__config__["a" /* default */].secret, {
                expiresIn: '1h'
              });


              ctx.cookies.set('token', token);

              ctx.body = Object(__WEBPACK_IMPORTED_MODULE_2__utils_response__["a" /* default */])(0, token);
            } else {
              ctx.body = Object(__WEBPACK_IMPORTED_MODULE_2__utils_response__["a" /* default */])(100);
            }

            _context.next = 15;
            break;

          case 11:
            _context.prev = 11;
            _context.t0 = _context['catch'](1);

            ctx.body = Object(__WEBPACK_IMPORTED_MODULE_2__utils_response__["a" /* default */])(-1);
            throw _context.t0;

          case 15:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, _this, [[1, 11]]);
  }));

  return function login(_x) {
    return _ref.apply(this, arguments);
  };
}();

var reg = function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0__Users_jingangdong_Documents_nuxt_test_node_modules_babel_runtime_6_26_0_babel_runtime_regenerator___default.a.mark(function _callee2(ctx) {
    var isUser, salt;
    return __WEBPACK_IMPORTED_MODULE_0__Users_jingangdong_Documents_nuxt_test_node_modules_babel_runtime_6_26_0_babel_runtime_regenerator___default.a.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            _context2.next = 3;
            return __WEBPACK_IMPORTED_MODULE_1__models_users__["a" /* default */].find().where('username', ctx.request.body.username);

          case 3:
            isUser = _context2.sent;

            if (!(!ctx.request.body.username || !ctx.request.body.password)) {
              _context2.next = 9;
              break;
            }

            ctx.body = Object(__WEBPACK_IMPORTED_MODULE_2__utils_response__["a" /* default */])(100);

            _context2.next = 8;
            return next();

          case 8:
            return _context2.abrupt('return', _context2.sent);

          case 9:
            if (!isUser.length) {
              _context2.next = 13;
              break;
            }

            ctx.body = Object(__WEBPACK_IMPORTED_MODULE_2__utils_response__["a" /* default */])(101);
            _context2.next = 16;
            break;

          case 13:
            salt = __WEBPACK_IMPORTED_MODULE_5_bcrypt___default.a.genSaltSync(10);
            _context2.next = 16;
            return __WEBPACK_IMPORTED_MODULE_1__models_users__["a" /* default */].create({
              username: ctx.request.body.username,
              password: __WEBPACK_IMPORTED_MODULE_5_bcrypt___default.a.hashSync(ctx.request.body.password, salt)
            }).then(function () {
              ctx.body = Object(__WEBPACK_IMPORTED_MODULE_2__utils_response__["a" /* default */])(0);
            });

          case 16:
            _context2.next = 22;
            break;

          case 18:
            _context2.prev = 18;
            _context2.t0 = _context2['catch'](0);

            ctx.body = Object(__WEBPACK_IMPORTED_MODULE_2__utils_response__["a" /* default */])(-1);
            throw _context2.t0;

          case 22:
          case 'end':
            return _context2.stop();
        }
      }
    }, _callee2, _this, [[0, 18]]);
  }));

  return function reg(_x2) {
    return _ref2.apply(this, arguments);
  };
}();

var logout = function logout(ctx) {
  try {
    __WEBPACK_IMPORTED_MODULE_3_jsonwebtoken___default.a.sign({
      logout: 'logout'
    }, __WEBPACK_IMPORTED_MODULE_4__config__["a" /* default */].secret, {
      expiresIn: '1h'
    });

    ctx.cookies.set('token', '');

    ctx.body = Object(__WEBPACK_IMPORTED_MODULE_2__utils_response__["a" /* default */])(0);
  } catch (err) {
    ctx.body = Object(__WEBPACK_IMPORTED_MODULE_2__utils_response__["a" /* default */])(-1);
  }
};

/***/ }),
/* 20 */
/***/ (function(module, exports) {

module.exports = require("bcrypt");

/***/ }),
/* 21 */
/***/ (function(module, exports) {

module.exports = require("koa-jwt");

/***/ }),
/* 22 */
/***/ (function(module, exports) {

module.exports = require("koa-logger");

/***/ }),
/* 23 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Users_jingangdong_Documents_nuxt_test_node_modules_babel_runtime_6_26_0_babel_runtime_regenerator__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Users_jingangdong_Documents_nuxt_test_node_modules_babel_runtime_6_26_0_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__Users_jingangdong_Documents_nuxt_test_node_modules_babel_runtime_6_26_0_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_mongoose__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_mongoose___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_mongoose__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_chalk__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_chalk___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_chalk__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__config__ = __webpack_require__(0);


var _this = this;

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }



var log = console.log;


var dblink = 'mongodb://' + __WEBPACK_IMPORTED_MODULE_3__config__["a" /* default */].database.host + ':' + __WEBPACK_IMPORTED_MODULE_3__config__["a" /* default */].database.port + '/' + __WEBPACK_IMPORTED_MODULE_3__config__["a" /* default */].database.dbname;

console.log(dblink);

__WEBPACK_IMPORTED_MODULE_1_mongoose___default.a.connect('mongodb://' + __WEBPACK_IMPORTED_MODULE_3__config__["a" /* default */].database.host + ':' + __WEBPACK_IMPORTED_MODULE_3__config__["a" /* default */].database.port + '/' + __WEBPACK_IMPORTED_MODULE_3__config__["a" /* default */].database.dbname);

var db = __WEBPACK_IMPORTED_MODULE_1_mongoose___default.a.connection;

db.on('error', function () {
  log(__WEBPACK_IMPORTED_MODULE_2_chalk___default.a.red('connection error:'));
});

db.once('open', _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0__Users_jingangdong_Documents_nuxt_test_node_modules_babel_runtime_6_26_0_babel_runtime_regenerator___default.a.mark(function _callee() {
  return __WEBPACK_IMPORTED_MODULE_0__Users_jingangdong_Documents_nuxt_test_node_modules_babel_runtime_6_26_0_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          log(__WEBPACK_IMPORTED_MODULE_2_chalk___default.a.green('mongodb connected!'));

        case 1:
        case 'end':
          return _context.stop();
      }
    }
  }, _callee, _this);
})));

/***/ }),
/* 24 */
/***/ (function(module, exports) {

// https://nuxtjs.org/api/configuration-build
module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'nuxt-blog',
    meta: [{ charset: 'utf-8' }, { name: 'viewport', content: 'width=device-width, initial-scale=1' }, { hid: 'description', name: 'description', content: 'nuxt-blog' }]
  },
  env: {
    HOST_URL: process.env.HOST_URL || 'http://127.0.0.1:3000'
  },
  /*
  ** Global CSS
  */
  css: ['element-ui/lib/theme-chalk/index.css', { src: '~/assets/sass/main.scss', lang: 'scss' }, '~/assets/css/github-markdown.css'],
  modules: ['@nuxtjs/axios', '@nuxtjs/proxy'],
  plugins: ['~plugins/element-ui'],
  loading: {
    color: '#ff7e79',
    height: '3px'
  },
  build: {
    vendor: ['element-ui', 'axios', '~/plugins/fetch.js', 'moment', 'marked']
  },
  babel: {
    plugins: [['component', [{
      libraryName: 'element-ui',
      styleLibraryName: 'theme-default'
    }]]]
  },
  router: {
    middleware: 'authCheck'
  },
  transition: {
    name: 'page',
    mode: 'out-in'
  }
};

/***/ })
/******/ ]);
//# sourceMappingURL=main.map