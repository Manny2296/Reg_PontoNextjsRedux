webpackHotUpdate("static\\development\\pages\\user\\[id].js",{

/***/ "./pages/user/[id].js":
/*!****************************!*\
  !*** ./pages/user/[id].js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/parse-int */ "./node_modules/@babel/runtime-corejs2/core-js/parse-int.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../components/Layout */ "./components/Layout.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! isomorphic-unfetch */ "./node_modules/next/dist/build/polyfills/fetch/index.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _components_Table_scss__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../components/Table.scss */ "./components/Table.scss");
/* harmony import */ var _components_Table_scss__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_components_Table_scss__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _components_image_outbox_png__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../components/image/outbox.png */ "./components/image/outbox.png");
/* harmony import */ var _components_image_outbox_png__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_components_image_outbox_png__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _actions_userAction__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../actions/userAction */ "./actions/userAction.js");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "./node_modules/@fortawesome/react-fontawesome/index.es.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");









var _jsxFileName = "C:\\Users\\Riano\\Repo\\RegistradorPonto\\pages\\user\\[id].js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement;












var stylebutton = {
  background: 'linear-gradient(45deg, #409946 30%, #66BB6A 90%)',
  borderRadius: 3,
  border: 0,
  color: 'white',
  width: '100%',
  height: 48,
  padding: '0 10px',
  boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
  // marginLeft: 20,
  marginTop: 5 // marginRight: 20

};
var stylebackbutton = {
  background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
  borderRadius: 3,
  border: 0,
  color: 'white',
  width: '100%',
  height: 48,
  padding: '0 20px',
  boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
  // marginRight: 20,
  marginTop: 5,
  marginBottom: 10 //marginLeft: 20,

};
var textinput = {
  background: 'linear-gradient(45deg, #fafafa 30%, #f5f5f5 90%)',
  borderRadius: 3,
  fontSize: 18,
  fontFamily: 'Garamond',
  color: 'black',
  height: 35,
  padding: '0 10px',
  boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)'
};
var imgstyle = {
  width: 100,
  height: 100,
  // padding: '0 5px',
  boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
  marginLeft: 30 // resizeMode: 'stretch',

};
var imguplod = {
  display: 'none'
};
var textinputdisabled = {
  background: '#e0e0e0',
  borderRadius: 3,
  fontSize: 18,
  fontFamily: 'Garamond',
  color: 'black',
  height: 35,
  padding: '0 20px'
};

var userprofile =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_8__["default"])(userprofile, _Component);

  function userprofile(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__["default"])(this, userprofile);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__["default"])(userprofile).call(this, props));

    var datauser = _this.props.data.filter(function (user) {
      return user.ndoc == props.queryval;
    });

    _this.state = {
      disable: true,
      user: datauser[0],
      idusuario: 1,
      name: datauser[0].name,
      surname: datauser[0].name,
      id_Document: datauser[0].ndoc,
      mail: _this.props.user[0].mail,
      telephone: _this.props.user[0].telephone,
      password: _this.props.user[0].password,
      image_user: _this.props.user[0].image_user,
      selectedFile: null,
      imagePreviewUrl: null
    };
    _this.handleNameChange = _this.handleNameChange.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7__["default"])(_this));
    _this.handlesurnameChange = _this.handlesurnameChange.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7__["default"])(_this));
    _this.handleNoDocumentChange = _this.handleNoDocumentChange.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7__["default"])(_this));
    _this.handleEmailChange = _this.handleEmailChange.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7__["default"])(_this));
    _this.handleTelephoneChange = _this.handleTelephoneChange.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7__["default"])(_this));
    _this.handlepasswordChange = _this.handlepasswordChange.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7__["default"])(_this));
    _this.handleUploadImage = _this.handleUploadImage.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7__["default"])(_this));
    _this.URL_IMAGE_COMMON = 'http://localhost:8080/users/';
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__["default"])(userprofile, [{
    key: "handleNameChange",
    value: function handleNameChange(event) {
      this.setState({
        name: event.target.value
      });
    }
  }, {
    key: "handlesurnameChange",
    value: function handlesurnameChange(event) {
      this.setState({
        surname: event.target.value
      });
    }
  }, {
    key: "handleNoDocumentChange",
    value: function handleNoDocumentChange(event) {
      this.setState({
        id_Document: event.target.value
      });
    }
  }, {
    key: "handleEmailChange",
    value: function handleEmailChange(event) {
      this.setState({
        mail: event.target.value
      });
    }
  }, {
    key: "handleTelephoneChange",
    value: function handleTelephoneChange(event) {
      this.setState({
        telephone: event.target.value
      });
    }
  }, {
    key: "handlepasswordChange",
    value: function handlepasswordChange(event) {
      this.setState({
        password: event.target.value
      });
    }
  }, {
    key: "handleUpdateUser",
    value: function handleUpdateUser() {
      if (this.state.disable) {
        this.setState({
          disable: !this.state.disable
        });
      }
    }
  }, {
    key: "handleSaveUser",
    value: function handleSaveUser() {
      var _userupdt = [{
        idusuario: this.state.idusuario,
        name: this.state.name,
        surname: this.state.surname,
        id_Document: this.state.id_Document,
        mail: this.state.mail,
        password: this.state.password,
        telephone: _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_2___default()(this.state.telephone)
      }];
      console.log("toupdate" + _userupdt);

      Object(_actions_userAction__WEBPACK_IMPORTED_MODULE_16__["_updateUser"])(_userupdt);

      Object(_actions_userAction__WEBPACK_IMPORTED_MODULE_16__["_updateImageUser"])(this.state.selectedFile, this.state.idusuario);

      this.setState({
        disable: true
      });
    }
  }, {
    key: "handleUploadImage",
    value: function handleUploadImage(event) {
      var _this2 = this;

      this.setState({
        selectedFile: event.target.files[0]
      });
      var reader = new FileReader();

      reader.onloadend = function () {
        _this2.setState({
          imagePreviewUrl: reader.result
        });
      };

      try {
        reader.readAsDataURL(event.target.files[0]);
      } catch (error) {}
    }
  }, {
    key: "imgbasedonstate",
    value: function imgbasedonstate() {
      if (this.state.image_user != "" || this.state.imagePreviewUrl !== null) {
        //console.log('ppar if' + this.state.image_user )
        return __jsx("img", {
          style: imgstyle,
          src: this.state.imagePreviewUrl !== null ? this.state.imagePreviewUrl : this.URL_IMAGE_COMMON + this.state.image_user,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 177
          },
          __self: this
        });
      } else // console.log('ppar else - -' + this.state.image_user + '.')
        return __jsx("img", {
          style: imgstyle,
          src: __webpack_require__(/*! ../../components/image/images.png */ "./components/image/images.png"),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 186
          },
          __self: this
        });
    }
  }, {
    key: "render",
    value: function render() {
      return __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_9__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 193
        },
        __self: this
      }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_15__["Box"], {
        className: "containerDataUser",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 195
        },
        __self: this
      }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_15__["Button"], {
        title: "Volver al menu de usuarios",
        style: stylebackbutton,
        size: "large",
        variant: "contained",
        onClick: function onClick() {
          return next_router__WEBPACK_IMPORTED_MODULE_14___default.a.back();
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 196
        },
        __self: this
      }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_17__["FontAwesomeIcon"], {
        icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_18__["faBackward"],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 196
        },
        __self: this
      }), "\xA0Volver"), __jsx("table", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 197
        },
        __self: this
      }, __jsx("tbody", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 199
        },
        __self: this
      }, __jsx("tr", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 200
        },
        __self: this
      }, __jsx("th", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 201
        },
        __self: this
      }, "Nombre"), __jsx("th", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 204
        },
        __self: this
      }, __jsx("input", {
        type: "text",
        style: this.state.disable ? textinputdisabled : textinput,
        disabled: this.state.disable ? "disabled" : "",
        value: this.state.name,
        onChange: this.handleNameChange,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 205
        },
        __self: this
      }))), __jsx("tr", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 209
        },
        __self: this
      }, __jsx("th", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 210
        },
        __self: this
      }, "Apellido"), __jsx("th", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 213
        },
        __self: this
      }, __jsx("input", {
        type: "text",
        style: this.state.disable ? textinputdisabled : textinput,
        disabled: this.state.disable ? "disabled" : "",
        value: this.state.surname,
        onChange: this.handlesurnameChange,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 214
        },
        __self: this
      }))), __jsx("tr", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 217
        },
        __self: this
      }, __jsx("th", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 218
        },
        __self: this
      }, "No Documento"), __jsx("th", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 221
        },
        __self: this
      }, __jsx("input", {
        type: "number",
        style: this.state.disable ? textinputdisabled : textinput,
        disabled: this.state.disable ? "disabled" : "",
        value: this.state.id_Document,
        onChange: this.handleNoDocumentChange,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 222
        },
        __self: this
      }))), __jsx("tr", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 227
        },
        __self: this
      }, __jsx("th", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 228
        },
        __self: this
      }, "E-mail"), __jsx("th", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 231
        },
        __self: this
      }, __jsx("input", {
        type: "email",
        style: this.state.disable ? textinputdisabled : textinput,
        disabled: this.state.disable ? "disabled" : "",
        value: this.state.mail,
        onChange: this.handleEmailChange,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 232
        },
        __self: this
      }))), __jsx("tr", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 235
        },
        __self: this
      }, __jsx("th", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 236
        },
        __self: this
      }, "Telefono"), __jsx("th", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 239
        },
        __self: this
      }, __jsx("input", {
        type: "text",
        style: this.state.disable ? textinputdisabled : textinput,
        disabled: this.state.disable ? "disabled" : "",
        value: this.state.telephone,
        onChange: this.handleTelephoneChange,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 240
        },
        __self: this
      }))), __jsx("tr", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 243
        },
        __self: this
      }, __jsx("th", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 244
        },
        __self: this
      }, "Contrase\xF1a"), __jsx("th", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 247
        },
        __self: this
      }, __jsx("input", {
        type: "password",
        style: this.state.disable ? textinputdisabled : textinput,
        disabled: this.state.disable ? "disabled" : "",
        value: this.state.password,
        onChange: this.handlepasswordChange,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 248
        },
        __self: this
      }))))), __jsx("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 256
        },
        __self: this
      }, __jsx("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 257
        },
        __self: this
      }, this.imgbasedonstate(), __jsx("label", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 259
        },
        __self: this
      }, __jsx("img", {
        title: "Cargar imagen para usuario",
        src: __webpack_require__(/*! ../../components/image/outbox.png */ "./components/image/outbox.png"),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 260
        },
        __self: this
      }), __jsx("input", {
        style: imguplod,
        id: "file-input",
        type: "file",
        onChange: this.handleUploadImage,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 261
        },
        __self: this
      }))), __jsx("img", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 264
        },
        __self: this
      }), __jsx("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 265
        },
        __self: this
      }), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_15__["Button"], {
        title: "Modificar Usuario",
        onClick: this.handleUpdateUser.bind(this),
        variant: "contained",
        style: stylebutton,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 266
        },
        __self: this
      }, "\xA0Modificar usuario"), __jsx("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 267
        },
        __self: this
      }), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_15__["Button"], {
        title: "Guardar cambios Usuario",
        onClick: this.handleSaveUser.bind(this),
        variant: "contained",
        style: stylebutton,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 268
        },
        __self: this
      }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_17__["FontAwesomeIcon"], {
        icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_18__["faSave"],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 268
        },
        __self: this
      }), "\xA0 Guardar"))));
    }
  }]);

  return userprofile;
}(react__WEBPACK_IMPORTED_MODULE_13__["Component"]);

userprofile.getInitialProps =
/*#__PURE__*/
function () {
  var _ref2 = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
  /*#__PURE__*/
  _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(_ref) {
    var query, store;
    return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            query = _ref.query, store = _ref.store;
            //const res = await fetch('http://localhost:8080/users/'+ query.id);
            //const data = await res.json();
            // console.log('https://winged-pen-261210.appspot.com/users/'+ query.id)
            console.log(query.id);
            store.dispatch({
              type: 'ADD_REG_PONTO',
              payload: null
            }); //let usuario_a_load = state.data.filter(function(user){
            // return user.ndoc == numerodocumento
            // })

            return _context.abrupt("return", {
              queryval: query.id
            });

          case 4:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function (_x) {
    return _ref2.apply(this, arguments);
  };
}();

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_19__["connect"])(function (state) {
  return state;
})(userprofile));

/***/ })

})
//# sourceMappingURL=[id].js.75c61e6a505977da80cc.hot-update.js.map