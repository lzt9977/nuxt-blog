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
/******/ 	return __webpack_require__(__webpack_require__.s = 7);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(12);


/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__errorCode__ = __webpack_require__(10);

console.log("development");
var dbname =  true ? 'user' : 'koa';

/* harmony default export */ __webpack_exports__["a"] = ({
  app: {
    name: 'something',
    version: '1.0.0'
  },
  database: {
    driver: 'mongo',
    host: '127.0.0.1',
    port: 27017,
    dbname: dbname,
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
  errorCode: __WEBPACK_IMPORTED_MODULE_0__errorCode__["a" /* default */]
});

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__config__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_chalk__ = __webpack_require__(5);
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
/* 3 */
/***/ (function(module, exports) {

module.exports = require("mongoose");

/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mongoose__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mongoose___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_mongoose__);

var model = {
  // 文章标题
  title: {
    type: String,
    index: {
      unique: true
    }
  },
  // 文章id
  articleId: {
    type: Number,
    index: {
      unique: true
    }
  },
  // 内容
  content: {
    type: String
  },
  // 标签
  tag: {
    type: String,
    index: true
  },
  // 分类
  category: {
    type: String,
    index: true
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
    type: Number
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
  }
};

/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_0_mongoose___default.a.model('Articles', model));

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("chalk");

/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mongoose__ = __webpack_require__(3);
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
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_koa__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_koa___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_koa__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_nuxt__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_nuxt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_nuxt__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__config__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__middlewares__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__models__ = __webpack_require__(24);







var app = new __WEBPACK_IMPORTED_MODULE_0_koa___default.a();
var host = process.env.HOST || '127.0.0.1';
var port = process.env.PORT || __WEBPACK_IMPORTED_MODULE_2__config__["a" /* default */].server.port;

// Import and Set Nuxt.js options
var nuxtConfig = __webpack_require__(25);
nuxtConfig.dev = !(app.env === 'production');

// Instantiate nuxt.js
var nuxt = new __WEBPACK_IMPORTED_MODULE_1_nuxt__["Nuxt"](nuxtConfig);

// Build in development
if (nuxtConfig.dev) {
  var builder = new __WEBPACK_IMPORTED_MODULE_1_nuxt__["Builder"](nuxt);
  builder.build().catch(function (e) {
    console.error(e); // eslint-disable-line no-console
    process.exit(1);
  });
}

// Middlewares are imported here.
Object(__WEBPACK_IMPORTED_MODULE_3__middlewares__["a" /* default */])(app);

// Hook Nuxt up!
// https://github.com/nuxt-community/koa-template/blob/master/template/server/index.js
app.use(function (ctx) {
  ctx.status = 200; // koa defaults to 404 when it sees that status is unset

  return new Promise(function (resolve, reject) {
    ctx.res.on('close', resolve);
    ctx.res.on('finish', resolve);
    nuxt.render(ctx.req, ctx.res, function (promise) {
      // nuxt.render passes a rejected promise into callback on error.
      promise.then(resolve).catch(reject);
    });
  });
});

app.listen(port, host);

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = require("koa");

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = require("nuxt");

/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({
  0: '请求成功',
  '-1': '系统错误',
  100: '用户名或密码填写有误',
  101: '该用户名已存在',
  200: '分页参数错误'
});

/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Users_jingangdong_Documents_nuxt_test_node_modules_babel_runtime_6_26_0_babel_runtime_regenerator__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Users_jingangdong_Documents_nuxt_test_node_modules_babel_runtime_6_26_0_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__Users_jingangdong_Documents_nuxt_test_node_modules_babel_runtime_6_26_0_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_koa_static__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_koa_static___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_koa_static__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_koa_bodyparser__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_koa_bodyparser___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_koa_bodyparser__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__config__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__routes__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_koa_jwt__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_koa_jwt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_koa_jwt__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_koa_router__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_koa_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_koa_router__);


var _this = this;

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }








/* harmony default export */ __webpack_exports__["a"] = (function (app) {
  var router = new __WEBPACK_IMPORTED_MODULE_6_koa_router___default.a();

  router.use('', __WEBPACK_IMPORTED_MODULE_4__routes__["a" /* default */].routes());

  app.use(router.routes()).use(router.allowedMethods());

  app.use(__WEBPACK_IMPORTED_MODULE_5_koa_jwt___default()({
    secret: __WEBPACK_IMPORTED_MODULE_3__config__["a" /* default */].secret
  }).unless({
    path: [/^(?!\/personal).*/]
  }));

  app.use(function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0__Users_jingangdong_Documents_nuxt_test_node_modules_babel_runtime_6_26_0_babel_runtime_regenerator___default.a.mark(function _callee(ctx, next) {
      return __WEBPACK_IMPORTED_MODULE_0__Users_jingangdong_Documents_nuxt_test_node_modules_babel_runtime_6_26_0_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              _context.next = 3;
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
              _context.next = 13;
              break;

            case 7:
              _context.prev = 7;
              _context.t0 = _context['catch'](0);

              ctx.status = _context.t0.status || 500;

              ctx.type = 'json';
              ctx.body = {
                status: ctx.status,
                message: _context.t0.message
              };

              ctx.app.emit('error', _context.t0, ctx);

            case 13:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, _this, [[0, 7]]);
    }));

    return function (_x, _x2) {
      return _ref.apply(this, arguments);
    };
  }());

  app.use(__WEBPACK_IMPORTED_MODULE_1_koa_static___default()(__WEBPACK_IMPORTED_MODULE_3__config__["a" /* default */].static_dir.root));

  app.use(__WEBPACK_IMPORTED_MODULE_2_koa_bodyparser___default()());

  // auth check


  // Add routes by group.
  // const mount = require('koa-mount')
  // app.use(mount('/api', routes()))
});

/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = require("regenerator-runtime");

/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports = require("koa-static");

/***/ }),
/* 14 */
/***/ (function(module, exports) {

module.exports = require("koa-bodyparser");

/***/ }),
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_koa_router__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_koa_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_koa_router__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__controllers_articles__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__controllers_login__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__controllers_logout__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__controllers_reg__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__controllers_articleDetail__ = __webpack_require__(21);
// import Router from 'koa-trie-router'
//
// const router = new Router()
//
// import articles from './controllers/articles'
// import login from './controllers/login'
// import logout from './controllers/logout'
// import reg from './controllers/reg'
// import articleDetail from './controllers/articleDetail'
//
// export default () => {
//
//   router.post('/getArticlesList', articles)
//   router.post('/login', login)
//   router.post('/logout', logout)
//   router.post('/reg', reg)
//   router.post('/getArticleDetail', articleDetail)
//
//   return router.middleware()
//
// }








var router = new __WEBPACK_IMPORTED_MODULE_0_koa_router___default.a({
  prefix: '/api'
});

router.post('/getArticlesList', __WEBPACK_IMPORTED_MODULE_1__controllers_articles__["a" /* default */]);
router.post('/login', __WEBPACK_IMPORTED_MODULE_2__controllers_login__["a" /* default */]);
router.post('/logout', __WEBPACK_IMPORTED_MODULE_3__controllers_logout__["a" /* default */]);
router.post('/reg', __WEBPACK_IMPORTED_MODULE_4__controllers_reg__["a" /* default */]);
router.post('/getArticleDetail', __WEBPACK_IMPORTED_MODULE_5__controllers_articleDetail__["a" /* default */]);

/* harmony default export */ __webpack_exports__["a"] = (router);

/***/ }),
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Users_jingangdong_Documents_nuxt_test_node_modules_babel_runtime_6_26_0_babel_runtime_regenerator__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Users_jingangdong_Documents_nuxt_test_node_modules_babel_runtime_6_26_0_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__Users_jingangdong_Documents_nuxt_test_node_modules_babel_runtime_6_26_0_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_articles__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils_response__ = __webpack_require__(2);


var _this = this;

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }




/* harmony default export */ __webpack_exports__["a"] = ((function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0__Users_jingangdong_Documents_nuxt_test_node_modules_babel_runtime_6_26_0_babel_runtime_regenerator___default.a.mark(function _callee(ctx, next) {
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

            ctx.body = Object(__WEBPACK_IMPORTED_MODULE_2__utils_response__["a" /* default */])(200);
            _context.next = 6;
            return next();

          case 6:
            return _context.abrupt('return', _context.sent);

          case 7:
            articles = __WEBPACK_IMPORTED_MODULE_1__models_articles__["a" /* default */].find();
            _context.next = 10;
            return articles.skip((body.page - 1) * body.pageSize).limit(body.pageSize);

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


            ctx.body = Object(__WEBPACK_IMPORTED_MODULE_2__utils_response__["a" /* default */])(0, {
              list: list,
              total: articlesSize,
              pageSize: body.pageSize
            });

            _context.next = 22;
            break;

          case 18:
            _context.prev = 18;
            _context.t0 = _context['catch'](0);

            ctx.body = Object(__WEBPACK_IMPORTED_MODULE_2__utils_response__["a" /* default */])(-1);
            throw _context.t0;

          case 22:
            _context.next = 24;
            return next();

          case 24:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, _this, [[0, 18]]);
  }));

  return function (_x, _x2) {
    return _ref.apply(this, arguments);
  };
})());

/***/ }),
/* 17 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Users_jingangdong_Documents_nuxt_test_node_modules_babel_runtime_6_26_0_babel_runtime_regenerator__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Users_jingangdong_Documents_nuxt_test_node_modules_babel_runtime_6_26_0_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__Users_jingangdong_Documents_nuxt_test_node_modules_babel_runtime_6_26_0_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_users__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils_response__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_jsonwebtoken__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_jsonwebtoken___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_jsonwebtoken__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__config__ = __webpack_require__(1);


var _this = this;

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }






/* harmony default export */ __webpack_exports__["a"] = ((function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0__Users_jingangdong_Documents_nuxt_test_node_modules_babel_runtime_6_26_0_babel_runtime_regenerator___default.a.mark(function _callee(ctx, next) {
    var body, userInfo, token;
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

            if (body.username === userInfo.username && body.password === userInfo.password) {
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

            _context.next = 12;
            break;

          case 8:
            _context.prev = 8;
            _context.t0 = _context['catch'](1);

            ctx.body = Object(__WEBPACK_IMPORTED_MODULE_2__utils_response__["a" /* default */])(-1);
            throw _context.t0;

          case 12:
            _context.next = 14;
            return next();

          case 14:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, _this, [[1, 8]]);
  }));

  return function (_x, _x2) {
    return _ref.apply(this, arguments);
  };
})());

/***/ }),
/* 18 */
/***/ (function(module, exports) {

module.exports = require("jsonwebtoken");

/***/ }),
/* 19 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Users_jingangdong_Documents_nuxt_test_node_modules_babel_runtime_6_26_0_babel_runtime_regenerator__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Users_jingangdong_Documents_nuxt_test_node_modules_babel_runtime_6_26_0_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__Users_jingangdong_Documents_nuxt_test_node_modules_babel_runtime_6_26_0_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_response__ = __webpack_require__(2);


var _this = this;

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }



/* harmony default export */ __webpack_exports__["a"] = ((function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0__Users_jingangdong_Documents_nuxt_test_node_modules_babel_runtime_6_26_0_babel_runtime_regenerator___default.a.mark(function _callee(ctx, next) {
    return __WEBPACK_IMPORTED_MODULE_0__Users_jingangdong_Documents_nuxt_test_node_modules_babel_runtime_6_26_0_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            ctx.session = null;

            try {
              ctx.body = Object(__WEBPACK_IMPORTED_MODULE_1__utils_response__["a" /* default */])(0);
            } catch (err) {
              ctx.body = Object(__WEBPACK_IMPORTED_MODULE_1__utils_response__["a" /* default */])(-1);
            }

            _context.next = 4;
            return next();

          case 4:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, _this);
  }));

  return function (_x, _x2) {
    return _ref.apply(this, arguments);
  };
})());

/***/ }),
/* 20 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Users_jingangdong_Documents_nuxt_test_node_modules_babel_runtime_6_26_0_babel_runtime_regenerator__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Users_jingangdong_Documents_nuxt_test_node_modules_babel_runtime_6_26_0_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__Users_jingangdong_Documents_nuxt_test_node_modules_babel_runtime_6_26_0_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_users__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils_response__ = __webpack_require__(2);


var _this = this;

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }




/* harmony default export */ __webpack_exports__["a"] = ((function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0__Users_jingangdong_Documents_nuxt_test_node_modules_babel_runtime_6_26_0_babel_runtime_regenerator___default.a.mark(function _callee(ctx, next) {
    var isUser;
    return __WEBPACK_IMPORTED_MODULE_0__Users_jingangdong_Documents_nuxt_test_node_modules_babel_runtime_6_26_0_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return __WEBPACK_IMPORTED_MODULE_1__models_users__["a" /* default */].find().where('username', ctx.request.body.username);

          case 3:
            isUser = _context.sent;

            if (!(!ctx.request.body.username || !ctx.request.body.password)) {
              _context.next = 9;
              break;
            }

            ctx.body = Object(__WEBPACK_IMPORTED_MODULE_2__utils_response__["a" /* default */])(100);

            _context.next = 8;
            return next();

          case 8:
            return _context.abrupt('return', _context.sent);

          case 9:
            if (!isUser.length) {
              _context.next = 13;
              break;
            }

            ctx.body = Object(__WEBPACK_IMPORTED_MODULE_2__utils_response__["a" /* default */])(101);
            _context.next = 15;
            break;

          case 13:
            _context.next = 15;
            return __WEBPACK_IMPORTED_MODULE_1__models_users__["a" /* default */].create(ctx.request.body).then(function () {
              ctx.body = Object(__WEBPACK_IMPORTED_MODULE_2__utils_response__["a" /* default */])(0);
            });

          case 15:
            _context.next = 21;
            break;

          case 17:
            _context.prev = 17;
            _context.t0 = _context['catch'](0);

            ctx.body = Object(__WEBPACK_IMPORTED_MODULE_2__utils_response__["a" /* default */])(-1);
            throw _context.t0;

          case 21:
            _context.next = 23;
            return next();

          case 23:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, _this, [[0, 17]]);
  }));

  return function (_x, _x2) {
    return _ref.apply(this, arguments);
  };
})());

/***/ }),
/* 21 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Users_jingangdong_Documents_nuxt_test_node_modules_babel_runtime_6_26_0_babel_runtime_regenerator__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Users_jingangdong_Documents_nuxt_test_node_modules_babel_runtime_6_26_0_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__Users_jingangdong_Documents_nuxt_test_node_modules_babel_runtime_6_26_0_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_articles__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils_response__ = __webpack_require__(2);


var _this = this;

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }




/* harmony default export */ __webpack_exports__["a"] = ((function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0__Users_jingangdong_Documents_nuxt_test_node_modules_babel_runtime_6_26_0_babel_runtime_regenerator___default.a.mark(function _callee(ctx, next) {
    var body, articles;
    return __WEBPACK_IMPORTED_MODULE_0__Users_jingangdong_Documents_nuxt_test_node_modules_babel_runtime_6_26_0_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            body = ctx.request.body;
            _context.next = 4;
            return __WEBPACK_IMPORTED_MODULE_1__models_articles__["a" /* default */].findOne({ articleId: body.articleId });

          case 4:
            articles = _context.sent;


            ctx.body = Object(__WEBPACK_IMPORTED_MODULE_2__utils_response__["a" /* default */])(0, articles);

            _context.next = 11;
            break;

          case 8:
            _context.prev = 8;
            _context.t0 = _context['catch'](0);

            ctx.body = Object(__WEBPACK_IMPORTED_MODULE_2__utils_response__["a" /* default */])(-1);

          case 11:
            _context.next = 13;
            return next();

          case 13:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, _this, [[0, 8]]);
  }));

  return function (_x, _x2) {
    return _ref.apply(this, arguments);
  };
})());

/***/ }),
/* 22 */
/***/ (function(module, exports) {

module.exports = require("koa-jwt");

/***/ }),
/* 23 */
/***/ (function(module, exports) {

module.exports = require("koa-router");

/***/ }),
/* 24 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Users_jingangdong_Documents_nuxt_test_node_modules_babel_runtime_6_26_0_babel_runtime_regenerator__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Users_jingangdong_Documents_nuxt_test_node_modules_babel_runtime_6_26_0_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__Users_jingangdong_Documents_nuxt_test_node_modules_babel_runtime_6_26_0_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_mongoose__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_mongoose___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_mongoose__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_chalk__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_chalk___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_chalk__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__config__ = __webpack_require__(1);


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
/* 25 */
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
  css: ['element-ui/lib/theme-chalk/index.css', { src: '~/assets/sass/main.scss', lang: 'scss' }],
  modules: ['@nuxtjs/axios', '@nuxtjs/proxy'],
  plugins: ['~plugins/element-ui'],
  loading: {
    color: '#ff7e79',
    height: '3px'
  },
  build: {
    vendor: ['element-ui', 'axios', '~/plugins/fetch.js', 'moment']
  },
  babel: {
    plugins: [['component', [{
      libraryName: 'element-ui',
      styleLibraryName: 'theme-default'
    }]]]
  }
};

/***/ })
/******/ ]);
//# sourceMappingURL=main.map