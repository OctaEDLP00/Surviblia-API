"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DOM = void 0;
/**
 * DOM
 * @construct DOM
 * constructor function to use the document functionalities
 * @example
 * ```js
 *  // import constructor function
 *  import DOM from './dom.js'
 *  // we instantiate the function
 *  const D = new DOM()
 *
 *  // this Reference document.getElemtByID()
 *  D.id('<id>')
 * ```
*/
var DOM = /** @class */ (function () {
  class DOM {
    constructor() {
      this.$query = function (selector) { return document.querySelector(selector); };
      this.$queryAll = function (selector) { return document.querySelectorAll(selector); };
      this.$id = function (id) { return document.getElementById(id); };
      this.$clsName = function (cls) { return document.getElementsByClassName(cls); };
      this.$byName = function (name) { return document.getElementsByName(name); };
      this.$byTagName = function (tagName) { return document.getElementsByTagName(tagName); };
      this.$create = function (tag, attrs) { return Object.assign(document.createElement(tag), attrs); };
      this.$append = function (children, father) {
        if (father === void 0) { father = document.body; }
        return children instanceof Array ? children.map(function (ch) { return father.appendChild(ch); }) : father.appendChild(children);
      };
      this.$remove = function (element) { return element.remove(); };
      this.$aEL = function (element, typeEvent, callbackfn) { return element.addEventListener(typeEvent, callbackfn); };
    }
  }
  return DOM;
}());
exports.DOM = DOM;
exports.default = DOM;
