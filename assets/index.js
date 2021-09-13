!(function (e, t) {
  void 0 === t && (t = {});
  var s = t.insertAt;
  if (e && 'undefined' != typeof document) {
    var n = document.head || document.getElementsByTagName('head')[0],
      i = document.createElement('style');
    (i.type = 'text/css'),
      'top' === s && n.firstChild
        ? n.insertBefore(i, n.firstChild)
        : n.appendChild(i),
      i.styleSheet
        ? (i.styleSheet.cssText = e)
        : i.appendChild(document.createTextNode(e));
  }
})(
  '@import url(\'https://fonts.googleapis.com/css2?family=Montserrat:wght@200;400;700&display=swap\');\n@import url(\'https://fonts.googleapis.com/css2?family=Lato:wght@200;400;700&display=swap\');\n/* Breakpoints: 600, 900, 1200, 1800 */ \n:root {\n    scroll-behavior: smooth;\n    /* Fonts */\n    --font-family-default: "Lato";\n    --font-family-accent: "Montserrat";\n    \n    /* Sizes */\n    --size-base: 8px;\n    --size-025: calc(var(--size-base) * .25);\n    --size-050: calc(var(--size-base) * .5);\n    --size-075: calc(var(--size-base) * .75);\n    --size-100: var(--size-base);\n    --size-150: calc(var(--size-base) * 1.5);\n    --size-200: calc(var(--size-base) * 2);\n    --size-300: calc(var(--size-base) * 3);\n    --size-400: calc(var(--size-base) * 4); \n    --size-500: calc(var(--size-base) * 5);\n    --size-600: calc(var(--size-base) * 6);\n    --size-700: calc(var(--size-base) * 7);\n    --size-800: calc(var(--size-base) * 8);\n    --size-900: calc(var(--size-base) * 9);\n\n    --content-max-width: 1200px;\n\n    /* Responsive Spacers */\n    --spacer-025: calc(var(--size-025) / 4);\n    --spacer-050: calc(var(--size-050) / 4);\n    --spacer-075: calc(var(--size-075) / 4);\n    --spacer-100: calc(var(--size-100) / 4);\n    --spacer-150: calc(var(--size-150) / 4);\n    --spacer-200: calc(var(--size-200) / 4);\n    --spacer-300: calc(var(--size-300) / 4);\n    --spacer-400: calc(var(--size-400) / 4); \n    --spacer-500: calc(var(--size-500) / 4);\n    --spacer-600: calc(var(--size-600) / 4);\n    --spacer-700: calc(var(--size-700) / 4);\n    --spacer-800: calc(var(--size-800) / 4);\n    --spacer-900: calc(var(--size-900) / 4);\n\n    /* Colors */\n    --colors-gray-100: rgb(105,105,105);\n    --colors-gray-200: rgb(128,128,128);\n    --colors-gray-300: rgb(169,169,169);\n    --colors-gray-400: rgb(192,192,192);\n    --colors-gray-500: rgb(211,211,211);\n    --colors-gray-600: rgb(220,220,220);\n\n    --colors-white-100: rgba(255, 255, 255, 0.1);\n    --colors-white-200: rgba(255, 255, 255, 0.2);\n    --colors-white-300: rgba(255, 255, 255, 0.3);\n    --colors-white-400: rgba(255, 255, 255, 0.4);\n    --colors-white-500: rgba(255, 255, 255, 0.5);\n    --colors-white-600: rgba(255, 255, 255, 0.6);\n    --colors-white-700: rgba(255, 255, 255, 0.7);\n    --colors-white-800: rgba(255, 255, 255, 0.8);\n    --colors-white-900: rgba(255, 255, 255, 0.9);\n    \n    --colors-black-100: rgba(0, 0, 0, 0.1);\n    --colors-black-200: rgba(0, 0, 0, 0.2);\n    --colors-black-300: rgba(0, 0, 0, 0.3);\n    --colors-black-400: rgba(0, 0, 0, 0.4);\n    --colors-black-500: rgba(0, 0, 0, 0.5);\n    --colors-black-600: rgba(0, 0, 0, 0.6);\n    --colors-black-700: rgba(0, 0, 0, 0.7);\n    --colors-black-800: rgba(0, 0, 0, 0.8);\n    --colors-black-900: rgba(0, 0, 0, 0.9);\n\n    --colors-theme-1: #fffeec;\n    --colors-theme-2: #fbf9e1;\n    --colors-theme-3: #37392E;\n    --colors-theme-4: #19647E;\n    --colors-theme-5: #28AFB0;\n\n    --section-bg-1: #fbf9e1;\n    --section-bg-2: #fffeec;\n    /* Constants */\n    --z-index-nav: 50;\n}\n@media screen and (min-width: 760px) {\n    :root {\n        /* Responsive Spacers */\n        --spacer-025: calc(var(--size-025) / 2);\n        --spacer-050: calc(var(--size-050) / 2);\n        --spacer-075: calc(var(--size-075) / 2);\n        --spacer-100: calc(var(--size-100) / 2);\n        --spacer-150: calc(var(--size-150) / 2);\n        --spacer-200: calc(var(--size-200) / 2);\n        --spacer-300: calc(var(--size-300) / 2);\n        --spacer-400: calc(var(--size-400) / 2); \n        --spacer-500: calc(var(--size-500) / 2);\n        --spacer-600: calc(var(--size-600) / 2);\n        --spacer-700: calc(var(--size-700) / 2);\n        --spacer-800: calc(var(--size-800) / 2);\n        --spacer-900: calc(var(--size-900) / 2);\n    }\n}\n@media screen and (min-width: 1280px) {\n    :root {\n        /* Responsive Spacers */\n        --spacer-025: var(--size-025);\n        --spacer-050: var(--size-050);\n        --spacer-075: var(--size-075);\n        --spacer-100: var(--size-100);\n        --spacer-150: var(--size-150);\n        --spacer-200: var(--size-200);\n        --spacer-300: var(--size-300);\n        --spacer-400: var(--size-400); \n        --spacer-500: var(--size-500);\n        --spacer-600: var(--size-600);\n        --spacer-700: var(--size-700);\n        --spacer-800: var(--size-800);\n        --spacer-900: var(--size-900);\n\n        --content-max-width: 1400px;\n    }\n}\n@media screen and (min-width: 1440px) {\n    :root {\n        --content-max-width: 1800px;\n    }\n}\n@keyframes pop-in {\n    0%   {transform: scale(0)}\n    75%  {transform: scale(1.15)}\n    100% {transform: scale(1)}\n}'
);
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const e =
    'undefined' != typeof window &&
    null != window.customElements &&
    void 0 !== window.customElements.polyfillWrapFlushCallback,
  t = (e, t, s = null) => {
    for (; t !== s; ) {
      const s = t.nextSibling;
      e.removeChild(t), (t = s);
    }
  },
  s = `{{lit-${String(Math.random()).slice(2)}}}`,
  n = `\x3c!--${s}--\x3e`,
  i = new RegExp(`${s}|${n}`);
class r {
  constructor(e, t) {
    (this.parts = []), (this.element = t);
    const n = [],
      r = [],
      o = document.createTreeWalker(t.content, 133, null, !1);
    let h = 0,
      d = -1,
      p = 0;
    const {
      strings: u,
      values: { length: g },
    } = e;
    for (; p < g; ) {
      const e = o.nextNode();
      if (null !== e) {
        if ((d++, 1 === e.nodeType)) {
          if (e.hasAttributes()) {
            const t = e.attributes,
              { length: s } = t;
            let n = 0;
            for (let e = 0; e < s; e++) a(t[e].name, '$lit$') && n++;
            for (; n-- > 0; ) {
              const t = u[p],
                s = l.exec(t)[2],
                n = s.toLowerCase() + '$lit$',
                r = e.getAttribute(n);
              e.removeAttribute(n);
              const a = r.split(i);
              this.parts.push({
                type: 'attribute',
                index: d,
                name: s,
                strings: a,
              }),
                (p += a.length - 1);
            }
          }
          'TEMPLATE' === e.tagName && (r.push(e), (o.currentNode = e.content));
        } else if (3 === e.nodeType) {
          const t = e.data;
          if (t.indexOf(s) >= 0) {
            const s = e.parentNode,
              r = t.split(i),
              o = r.length - 1;
            for (let t = 0; t < o; t++) {
              let n,
                i = r[t];
              if ('' === i) n = c();
              else {
                const e = l.exec(i);
                null !== e &&
                  a(e[2], '$lit$') &&
                  (i =
                    i.slice(0, e.index) +
                    e[1] +
                    e[2].slice(0, -'$lit$'.length) +
                    e[3]),
                  (n = document.createTextNode(i));
              }
              s.insertBefore(n, e),
                this.parts.push({ type: 'node', index: ++d });
            }
            '' === r[o] ? (s.insertBefore(c(), e), n.push(e)) : (e.data = r[o]),
              (p += o);
          }
        } else if (8 === e.nodeType)
          if (e.data === s) {
            const t = e.parentNode;
            (null !== e.previousSibling && d !== h) ||
              (d++, t.insertBefore(c(), e)),
              (h = d),
              this.parts.push({ type: 'node', index: d }),
              null === e.nextSibling ? (e.data = '') : (n.push(e), d--),
              p++;
          } else {
            let t = -1;
            for (; -1 !== (t = e.data.indexOf(s, t + 1)); )
              this.parts.push({ type: 'node', index: -1 }), p++;
          }
      } else o.currentNode = r.pop();
    }
    for (const e of n) e.parentNode.removeChild(e);
  }
}
const a = (e, t) => {
    const s = e.length - t.length;
    return s >= 0 && e.slice(s) === t;
  },
  o = (e) => -1 !== e.index,
  c = () => document.createComment(''),
  l =
    /([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F "'>=/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/;
function h(e, t) {
  const {
      element: { content: s },
      parts: n,
    } = e,
    i = document.createTreeWalker(s, 133, null, !1);
  let r = p(n),
    a = n[r],
    o = -1,
    c = 0;
  const l = [];
  let h = null;
  for (; i.nextNode(); ) {
    o++;
    const e = i.currentNode;
    for (
      e.previousSibling === h && (h = null),
        t.has(e) && (l.push(e), null === h && (h = e)),
        null !== h && c++;
      void 0 !== a && a.index === o;

    )
      (a.index = null !== h ? -1 : a.index - c), (r = p(n, r)), (a = n[r]);
  }
  l.forEach((e) => e.parentNode.removeChild(e));
}
const d = (e) => {
    let t = 11 === e.nodeType ? 0 : 1;
    const s = document.createTreeWalker(e, 133, null, !1);
    for (; s.nextNode(); ) t++;
    return t;
  },
  p = (e, t = -1) => {
    for (let s = t + 1; s < e.length; s++) {
      const t = e[s];
      if (o(t)) return s;
    }
    return -1;
  };
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const u = new WeakMap(),
  g =
    (e) =>
    (...t) => {
      const s = e(...t);
      return u.set(s, !0), s;
    },
  m = (e) => 'function' == typeof e && u.has(e),
  f = {},
  y = {};
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
class v {
  constructor(e, t, s) {
    (this.__parts = []),
      (this.template = e),
      (this.processor = t),
      (this.options = s);
  }
  update(e) {
    let t = 0;
    for (const s of this.__parts) void 0 !== s && s.setValue(e[t]), t++;
    for (const e of this.__parts) void 0 !== e && e.commit();
  }
  _clone() {
    const t = e
        ? this.template.element.content.cloneNode(!0)
        : document.importNode(this.template.element.content, !0),
      s = [],
      n = this.template.parts,
      i = document.createTreeWalker(t, 133, null, !1);
    let r,
      a = 0,
      c = 0,
      l = i.nextNode();
    for (; a < n.length; )
      if (((r = n[a]), o(r))) {
        for (; c < r.index; )
          c++,
            'TEMPLATE' === l.nodeName &&
              (s.push(l), (i.currentNode = l.content)),
            null === (l = i.nextNode()) &&
              ((i.currentNode = s.pop()), (l = i.nextNode()));
        if ('node' === r.type) {
          const e = this.processor.handleTextExpression(this.options);
          e.insertAfterNode(l.previousSibling), this.__parts.push(e);
        } else
          this.__parts.push(
            ...this.processor.handleAttributeExpressions(
              l,
              r.name,
              r.strings,
              this.options
            )
          );
        a++;
      } else this.__parts.push(void 0), a++;
    return e && (document.adoptNode(t), customElements.upgrade(t)), t;
  }
}
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */ const b =
    window.trustedTypes &&
    trustedTypes.createPolicy('lit-html', { createHTML: (e) => e }),
  _ = ` ${s} `;
class S {
  constructor(e, t, s, n) {
    (this.strings = e),
      (this.values = t),
      (this.type = s),
      (this.processor = n);
  }
  getHTML() {
    const e = this.strings.length - 1;
    let t = '',
      i = !1;
    for (let r = 0; r < e; r++) {
      const e = this.strings[r],
        a = e.lastIndexOf('\x3c!--');
      i = (a > -1 || i) && -1 === e.indexOf('--\x3e', a + 1);
      const o = l.exec(e);
      t +=
        null === o
          ? e + (i ? _ : n)
          : e.substr(0, o.index) + o[1] + o[2] + '$lit$' + o[3] + s;
    }
    return (t += this.strings[e]), t;
  }
  getTemplateElement() {
    const e = document.createElement('template');
    let t = this.getHTML();
    return void 0 !== b && (t = b.createHTML(t)), (e.innerHTML = t), e;
  }
}
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */ const w = (e) =>
    null === e || !('object' == typeof e || 'function' == typeof e),
  x = (e) => Array.isArray(e) || !(!e || !e[Symbol.iterator]);
class z {
  constructor(e, t, s) {
    (this.dirty = !0),
      (this.element = e),
      (this.name = t),
      (this.strings = s),
      (this.parts = []);
    for (let e = 0; e < s.length - 1; e++) this.parts[e] = this._createPart();
  }
  _createPart() {
    return new P(this);
  }
  _getValue() {
    const e = this.strings,
      t = e.length - 1,
      s = this.parts;
    if (1 === t && '' === e[0] && '' === e[1]) {
      const e = s[0].value;
      if ('symbol' == typeof e) return String(e);
      if ('string' == typeof e || !x(e)) return e;
    }
    let n = '';
    for (let i = 0; i < t; i++) {
      n += e[i];
      const t = s[i];
      if (void 0 !== t) {
        const e = t.value;
        if (w(e) || !x(e)) n += 'string' == typeof e ? e : String(e);
        else for (const t of e) n += 'string' == typeof t ? t : String(t);
      }
    }
    return (n += e[t]), n;
  }
  commit() {
    this.dirty &&
      ((this.dirty = !1),
      this.element.setAttribute(this.name, this._getValue()));
  }
}
class P {
  constructor(e) {
    (this.value = void 0), (this.committer = e);
  }
  setValue(e) {
    e === f ||
      (w(e) && e === this.value) ||
      ((this.value = e), m(e) || (this.committer.dirty = !0));
  }
  commit() {
    for (; m(this.value); ) {
      const e = this.value;
      (this.value = f), e(this);
    }
    this.value !== f && this.committer.commit();
  }
}
class C {
  constructor(e) {
    (this.value = void 0), (this.__pendingValue = void 0), (this.options = e);
  }
  appendInto(e) {
    (this.startNode = e.appendChild(c())), (this.endNode = e.appendChild(c()));
  }
  insertAfterNode(e) {
    (this.startNode = e), (this.endNode = e.nextSibling);
  }
  appendIntoPart(e) {
    e.__insert((this.startNode = c())), e.__insert((this.endNode = c()));
  }
  insertAfterPart(e) {
    e.__insert((this.startNode = c())),
      (this.endNode = e.endNode),
      (e.endNode = this.startNode);
  }
  setValue(e) {
    this.__pendingValue = e;
  }
  commit() {
    if (null === this.startNode.parentNode) return;
    for (; m(this.__pendingValue); ) {
      const e = this.__pendingValue;
      (this.__pendingValue = f), e(this);
    }
    const e = this.__pendingValue;
    e !== f &&
      (w(e)
        ? e !== this.value && this.__commitText(e)
        : e instanceof S
        ? this.__commitTemplateResult(e)
        : e instanceof Node
        ? this.__commitNode(e)
        : x(e)
        ? this.__commitIterable(e)
        : e === y
        ? ((this.value = y), this.clear())
        : this.__commitText(e));
  }
  __insert(e) {
    this.endNode.parentNode.insertBefore(e, this.endNode);
  }
  __commitNode(e) {
    this.value !== e && (this.clear(), this.__insert(e), (this.value = e));
  }
  __commitText(e) {
    const t = this.startNode.nextSibling,
      s = 'string' == typeof (e = null == e ? '' : e) ? e : String(e);
    t === this.endNode.previousSibling && 3 === t.nodeType
      ? (t.data = s)
      : this.__commitNode(document.createTextNode(s)),
      (this.value = e);
  }
  __commitTemplateResult(e) {
    const t = this.options.templateFactory(e);
    if (this.value instanceof v && this.value.template === t)
      this.value.update(e.values);
    else {
      const s = new v(t, e.processor, this.options),
        n = s._clone();
      s.update(e.values), this.__commitNode(n), (this.value = s);
    }
  }
  __commitIterable(e) {
    Array.isArray(this.value) || ((this.value = []), this.clear());
    const t = this.value;
    let s,
      n = 0;
    for (const i of e)
      (s = t[n]),
        void 0 === s &&
          ((s = new C(this.options)),
          t.push(s),
          0 === n ? s.appendIntoPart(this) : s.insertAfterPart(t[n - 1])),
        s.setValue(i),
        s.commit(),
        n++;
    n < t.length && ((t.length = n), this.clear(s && s.endNode));
  }
  clear(e = this.startNode) {
    t(this.startNode.parentNode, e.nextSibling, this.endNode);
  }
}
class k {
  constructor(e, t, s) {
    if (
      ((this.value = void 0),
      (this.__pendingValue = void 0),
      2 !== s.length || '' !== s[0] || '' !== s[1])
    )
      throw new Error(
        'Boolean attributes can only contain a single expression'
      );
    (this.element = e), (this.name = t), (this.strings = s);
  }
  setValue(e) {
    this.__pendingValue = e;
  }
  commit() {
    for (; m(this.__pendingValue); ) {
      const e = this.__pendingValue;
      (this.__pendingValue = f), e(this);
    }
    if (this.__pendingValue === f) return;
    const e = !!this.__pendingValue;
    this.value !== e &&
      (e
        ? this.element.setAttribute(this.name, '')
        : this.element.removeAttribute(this.name),
      (this.value = e)),
      (this.__pendingValue = f);
  }
}
class N extends z {
  constructor(e, t, s) {
    super(e, t, s),
      (this.single = 2 === s.length && '' === s[0] && '' === s[1]);
  }
  _createPart() {
    return new E(this);
  }
  _getValue() {
    return this.single ? this.parts[0].value : super._getValue();
  }
  commit() {
    this.dirty &&
      ((this.dirty = !1), (this.element[this.name] = this._getValue()));
  }
}
class E extends P {}
let A = !1;
(() => {
  try {
    const e = {
      get capture() {
        return (A = !0), !1;
      },
    };
    window.addEventListener('test', e, e),
      window.removeEventListener('test', e, e);
  } catch (e) {}
})();
class T {
  constructor(e, t, s) {
    (this.value = void 0),
      (this.__pendingValue = void 0),
      (this.element = e),
      (this.eventName = t),
      (this.eventContext = s),
      (this.__boundHandleEvent = (e) => this.handleEvent(e));
  }
  setValue(e) {
    this.__pendingValue = e;
  }
  commit() {
    for (; m(this.__pendingValue); ) {
      const e = this.__pendingValue;
      (this.__pendingValue = f), e(this);
    }
    if (this.__pendingValue === f) return;
    const e = this.__pendingValue,
      t = this.value,
      s =
        null == e ||
        (null != t &&
          (e.capture !== t.capture ||
            e.once !== t.once ||
            e.passive !== t.passive)),
      n = null != e && (null == t || s);
    s &&
      this.element.removeEventListener(
        this.eventName,
        this.__boundHandleEvent,
        this.__options
      ),
      n &&
        ((this.__options = $(e)),
        this.element.addEventListener(
          this.eventName,
          this.__boundHandleEvent,
          this.__options
        )),
      (this.value = e),
      (this.__pendingValue = f);
  }
  handleEvent(e) {
    'function' == typeof this.value
      ? this.value.call(this.eventContext || this.element, e)
      : this.value.handleEvent(e);
  }
}
const $ = (e) =>
  e &&
  (A ? { capture: e.capture, passive: e.passive, once: e.once } : e.capture);
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */ function V(e) {
  let t = U.get(e.type);
  void 0 === t &&
    ((t = { stringsArray: new WeakMap(), keyString: new Map() }),
    U.set(e.type, t));
  let n = t.stringsArray.get(e.strings);
  if (void 0 !== n) return n;
  const i = e.strings.join(s);
  return (
    (n = t.keyString.get(i)),
    void 0 === n &&
      ((n = new r(e, e.getTemplateElement())), t.keyString.set(i, n)),
    t.stringsArray.set(e.strings, n),
    n
  );
}
const U = new Map(),
  R = new WeakMap();
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */ const M = new /**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
(class {
  handleAttributeExpressions(e, t, s, n) {
    const i = t[0];
    if ('.' === i) {
      return new N(e, t.slice(1), s).parts;
    }
    if ('@' === i) return [new T(e, t.slice(1), n.eventContext)];
    if ('?' === i) return [new k(e, t.slice(1), s)];
    return new z(e, t, s).parts;
  }
  handleTextExpression(e) {
    return new C(e);
  }
})();
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */ 'undefined' != typeof window &&
  (window.litHtmlVersions || (window.litHtmlVersions = [])).push('1.3.0');
const O = (e, ...t) => new S(e, t, 'html', M),
  /**
   * @license
   * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
   * This code may only be used under the BSD style license found at
   * http://polymer.github.io/LICENSE.txt
   * The complete set of authors may be found at
   * http://polymer.github.io/AUTHORS.txt
   * The complete set of contributors may be found at
   * http://polymer.github.io/CONTRIBUTORS.txt
   * Code distributed by Google as part of the polymer project is also
   * subject to an additional IP rights grant found at
   * http://polymer.github.io/PATENTS.txt
   */ j = (e, t) => `${e}--${t}`;
let I = !0;
void 0 === window.ShadyCSS
  ? (I = !1)
  : void 0 === window.ShadyCSS.prepareTemplateDom &&
    (console.warn(
      'Incompatible ShadyCSS version detected. Please update to at least @webcomponents/webcomponentsjs@2.0.2 and @webcomponents/shadycss@1.3.1.'
    ),
    (I = !1));
const L = (e) => (t) => {
    const n = j(t.type, e);
    let i = U.get(n);
    void 0 === i &&
      ((i = { stringsArray: new WeakMap(), keyString: new Map() }),
      U.set(n, i));
    let a = i.stringsArray.get(t.strings);
    if (void 0 !== a) return a;
    const o = t.strings.join(s);
    if (((a = i.keyString.get(o)), void 0 === a)) {
      const s = t.getTemplateElement();
      I && window.ShadyCSS.prepareTemplateDom(s, e),
        (a = new r(t, s)),
        i.keyString.set(o, a);
    }
    return i.stringsArray.set(t.strings, a), a;
  },
  B = ['html', 'svg'],
  H = new Set(),
  q = (e, t, s) => {
    H.add(e);
    const n = s ? s.element : document.createElement('template'),
      i = t.querySelectorAll('style'),
      { length: r } = i;
    if (0 === r) return void window.ShadyCSS.prepareTemplateStyles(n, e);
    const a = document.createElement('style');
    for (let e = 0; e < r; e++) {
      const t = i[e];
      t.parentNode.removeChild(t), (a.textContent += t.textContent);
    }
    ((e) => {
      B.forEach((t) => {
        const s = U.get(j(t, e));
        void 0 !== s &&
          s.keyString.forEach((e) => {
            const {
                element: { content: t },
              } = e,
              s = new Set();
            Array.from(t.querySelectorAll('style')).forEach((e) => {
              s.add(e);
            }),
              h(e, s);
          });
      });
    })(e);
    const o = n.content;
    s
      ? (function (e, t, s = null) {
          const {
            element: { content: n },
            parts: i,
          } = e;
          if (null == s) return void n.appendChild(t);
          const r = document.createTreeWalker(n, 133, null, !1);
          let a = p(i),
            o = 0,
            c = -1;
          for (; r.nextNode(); )
            for (
              c++,
                r.currentNode === s &&
                  ((o = d(t)), s.parentNode.insertBefore(t, s));
              -1 !== a && i[a].index === c;

            ) {
              if (o > 0) {
                for (; -1 !== a; ) (i[a].index += o), (a = p(i, a));
                return;
              }
              a = p(i, a);
            }
        })(s, a, o.firstChild)
      : o.insertBefore(a, o.firstChild),
      window.ShadyCSS.prepareTemplateStyles(n, e);
    const c = o.querySelector('style');
    if (window.ShadyCSS.nativeShadow && null !== c)
      t.insertBefore(c.cloneNode(!0), t.firstChild);
    else if (s) {
      o.insertBefore(a, o.firstChild);
      const e = new Set();
      e.add(a), h(s, e);
    }
  };
window.JSCompiler_renameProperty = (e, t) => e;
const F = {
    toAttribute(e, t) {
      switch (t) {
        case Boolean:
          return e ? '' : null;
        case Object:
        case Array:
          return null == e ? e : JSON.stringify(e);
      }
      return e;
    },
    fromAttribute(e, t) {
      switch (t) {
        case Boolean:
          return null !== e;
        case Number:
          return null === e ? null : Number(e);
        case Object:
        case Array:
          return JSON.parse(e);
      }
      return e;
    },
  },
  W = (e, t) => t !== e && (t == t || e == e),
  D = { attribute: !0, type: String, converter: F, reflect: !1, hasChanged: W };
class J extends HTMLElement {
  constructor() {
    super(), this.initialize();
  }
  static get observedAttributes() {
    this.finalize();
    const e = [];
    return (
      this._classProperties.forEach((t, s) => {
        const n = this._attributeNameForProperty(s, t);
        void 0 !== n && (this._attributeToPropertyMap.set(n, s), e.push(n));
      }),
      e
    );
  }
  static _ensureClassProperties() {
    if (
      !this.hasOwnProperty(JSCompiler_renameProperty('_classProperties', this))
    ) {
      this._classProperties = new Map();
      const e = Object.getPrototypeOf(this)._classProperties;
      void 0 !== e && e.forEach((e, t) => this._classProperties.set(t, e));
    }
  }
  static createProperty(e, t = D) {
    if (
      (this._ensureClassProperties(),
      this._classProperties.set(e, t),
      t.noAccessor || this.prototype.hasOwnProperty(e))
    )
      return;
    const s = 'symbol' == typeof e ? Symbol() : '__' + e,
      n = this.getPropertyDescriptor(e, s, t);
    void 0 !== n && Object.defineProperty(this.prototype, e, n);
  }
  static getPropertyDescriptor(e, t, s) {
    return {
      get() {
        return this[t];
      },
      set(n) {
        const i = this[e];
        (this[t] = n), this.requestUpdateInternal(e, i, s);
      },
      configurable: !0,
      enumerable: !0,
    };
  }
  static getPropertyOptions(e) {
    return (this._classProperties && this._classProperties.get(e)) || D;
  }
  static finalize() {
    const e = Object.getPrototypeOf(this);
    if (
      (e.hasOwnProperty('finalized') || e.finalize(),
      (this.finalized = !0),
      this._ensureClassProperties(),
      (this._attributeToPropertyMap = new Map()),
      this.hasOwnProperty(JSCompiler_renameProperty('properties', this)))
    ) {
      const e = this.properties,
        t = [
          ...Object.getOwnPropertyNames(e),
          ...('function' == typeof Object.getOwnPropertySymbols
            ? Object.getOwnPropertySymbols(e)
            : []),
        ];
      for (const s of t) this.createProperty(s, e[s]);
    }
  }
  static _attributeNameForProperty(e, t) {
    const s = t.attribute;
    return !1 === s
      ? void 0
      : 'string' == typeof s
      ? s
      : 'string' == typeof e
      ? e.toLowerCase()
      : void 0;
  }
  static _valueHasChanged(e, t, s = W) {
    return s(e, t);
  }
  static _propertyValueFromAttribute(e, t) {
    const s = t.type,
      n = t.converter || F,
      i = 'function' == typeof n ? n : n.fromAttribute;
    return i ? i(e, s) : e;
  }
  static _propertyValueToAttribute(e, t) {
    if (void 0 === t.reflect) return;
    const s = t.type,
      n = t.converter;
    return ((n && n.toAttribute) || F.toAttribute)(e, s);
  }
  initialize() {
    (this._updateState = 0),
      (this._updatePromise = new Promise(
        (e) => (this._enableUpdatingResolver = e)
      )),
      (this._changedProperties = new Map()),
      this._saveInstanceProperties(),
      this.requestUpdateInternal();
  }
  _saveInstanceProperties() {
    this.constructor._classProperties.forEach((e, t) => {
      if (this.hasOwnProperty(t)) {
        const e = this[t];
        delete this[t],
          this._instanceProperties || (this._instanceProperties = new Map()),
          this._instanceProperties.set(t, e);
      }
    });
  }
  _applyInstanceProperties() {
    this._instanceProperties.forEach((e, t) => (this[t] = e)),
      (this._instanceProperties = void 0);
  }
  connectedCallback() {
    this.enableUpdating();
  }
  enableUpdating() {
    void 0 !== this._enableUpdatingResolver &&
      (this._enableUpdatingResolver(), (this._enableUpdatingResolver = void 0));
  }
  disconnectedCallback() {}
  attributeChangedCallback(e, t, s) {
    t !== s && this._attributeToProperty(e, s);
  }
  _propertyToAttribute(e, t, s = D) {
    const n = this.constructor,
      i = n._attributeNameForProperty(e, s);
    if (void 0 !== i) {
      const e = n._propertyValueToAttribute(t, s);
      if (void 0 === e) return;
      (this._updateState = 8 | this._updateState),
        null == e ? this.removeAttribute(i) : this.setAttribute(i, e),
        (this._updateState = -9 & this._updateState);
    }
  }
  _attributeToProperty(e, t) {
    if (8 & this._updateState) return;
    const s = this.constructor,
      n = s._attributeToPropertyMap.get(e);
    if (void 0 !== n) {
      const e = s.getPropertyOptions(n);
      (this._updateState = 16 | this._updateState),
        (this[n] = s._propertyValueFromAttribute(t, e)),
        (this._updateState = -17 & this._updateState);
    }
  }
  requestUpdateInternal(e, t, s) {
    let n = !0;
    if (void 0 !== e) {
      const i = this.constructor;
      (s = s || i.getPropertyOptions(e)),
        i._valueHasChanged(this[e], t, s.hasChanged)
          ? (this._changedProperties.has(e) ||
              this._changedProperties.set(e, t),
            !0 !== s.reflect ||
              16 & this._updateState ||
              (void 0 === this._reflectingProperties &&
                (this._reflectingProperties = new Map()),
              this._reflectingProperties.set(e, s)))
          : (n = !1);
    }
    !this._hasRequestedUpdate &&
      n &&
      (this._updatePromise = this._enqueueUpdate());
  }
  requestUpdate(e, t) {
    return this.requestUpdateInternal(e, t), this.updateComplete;
  }
  async _enqueueUpdate() {
    this._updateState = 4 | this._updateState;
    try {
      await this._updatePromise;
    } catch (e) {}
    const e = this.performUpdate();
    return null != e && (await e), !this._hasRequestedUpdate;
  }
  get _hasRequestedUpdate() {
    return 4 & this._updateState;
  }
  get hasUpdated() {
    return 1 & this._updateState;
  }
  performUpdate() {
    if (!this._hasRequestedUpdate) return;
    this._instanceProperties && this._applyInstanceProperties();
    let e = !1;
    const t = this._changedProperties;
    try {
      (e = this.shouldUpdate(t)), e ? this.update(t) : this._markUpdated();
    } catch (t) {
      throw ((e = !1), this._markUpdated(), t);
    }
    e &&
      (1 & this._updateState ||
        ((this._updateState = 1 | this._updateState), this.firstUpdated(t)),
      this.updated(t));
  }
  _markUpdated() {
    (this._changedProperties = new Map()),
      (this._updateState = -5 & this._updateState);
  }
  get updateComplete() {
    return this._getUpdateComplete();
  }
  _getUpdateComplete() {
    return this._updatePromise;
  }
  shouldUpdate(e) {
    return !0;
  }
  update(e) {
    void 0 !== this._reflectingProperties &&
      this._reflectingProperties.size > 0 &&
      (this._reflectingProperties.forEach((e, t) =>
        this._propertyToAttribute(t, this[t], e)
      ),
      (this._reflectingProperties = void 0)),
      this._markUpdated();
  }
  updated(e) {}
  firstUpdated(e) {}
}
J.finalized = !0;
/**
@license
Copyright (c) 2019 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/
const Y =
    window.ShadowRoot &&
    (void 0 === window.ShadyCSS || window.ShadyCSS.nativeShadow) &&
    'adoptedStyleSheets' in Document.prototype &&
    'replace' in CSSStyleSheet.prototype,
  G = Symbol();
class K {
  constructor(e, t) {
    if (t !== G)
      throw new Error(
        'CSSResult is not constructable. Use `unsafeCSS` or `css` instead.'
      );
    this.cssText = e;
  }
  get styleSheet() {
    return (
      void 0 === this._styleSheet &&
        (Y
          ? ((this._styleSheet = new CSSStyleSheet()),
            this._styleSheet.replaceSync(this.cssText))
          : (this._styleSheet = null)),
      this._styleSheet
    );
  }
  toString() {
    return this.cssText;
  }
}
const Q = (e, ...t) => {
  const s = t.reduce(
    (t, s, n) =>
      t +
      ((e) => {
        if (e instanceof K) return e.cssText;
        if ('number' == typeof e) return e;
        throw new Error(
          `Value passed to 'css' function must be a 'css' function result: ${e}. Use 'unsafeCSS' to pass non-literal values, but\n            take care to ensure page security.`
        );
      })(s) +
      e[n + 1],
    e[0]
  );
  return new K(s, G);
};
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
(window.litElementVersions || (window.litElementVersions = [])).push('2.4.0');
const X = {};
class Z extends J {
  static getStyles() {
    return this.styles;
  }
  static _getUniqueStyles() {
    if (this.hasOwnProperty(JSCompiler_renameProperty('_styles', this))) return;
    const e = this.getStyles();
    if (Array.isArray(e)) {
      const t = (e, s) =>
          e.reduceRight(
            (e, s) => (Array.isArray(s) ? t(s, e) : (e.add(s), e)),
            s
          ),
        s = t(e, new Set()),
        n = [];
      s.forEach((e) => n.unshift(e)), (this._styles = n);
    } else this._styles = void 0 === e ? [] : [e];
    this._styles = this._styles.map((e) => {
      if (e instanceof CSSStyleSheet && !Y) {
        const t = Array.prototype.slice
          .call(e.cssRules)
          .reduce((e, t) => e + t.cssText, '');
        return new K(String(t), G);
      }
      return e;
    });
  }
  initialize() {
    super.initialize(),
      this.constructor._getUniqueStyles(),
      (this.renderRoot = this.createRenderRoot()),
      window.ShadowRoot &&
        this.renderRoot instanceof window.ShadowRoot &&
        this.adoptStyles();
  }
  createRenderRoot() {
    return this.attachShadow({ mode: 'open' });
  }
  adoptStyles() {
    const e = this.constructor._styles;
    0 !== e.length &&
      (void 0 === window.ShadyCSS || window.ShadyCSS.nativeShadow
        ? Y
          ? (this.renderRoot.adoptedStyleSheets = e.map((e) =>
              e instanceof CSSStyleSheet ? e : e.styleSheet
            ))
          : (this._needsShimAdoptedStyleSheets = !0)
        : window.ShadyCSS.ScopingShim.prepareAdoptedCssText(
            e.map((e) => e.cssText),
            this.localName
          ));
  }
  connectedCallback() {
    super.connectedCallback(),
      this.hasUpdated &&
        void 0 !== window.ShadyCSS &&
        window.ShadyCSS.styleElement(this);
  }
  update(e) {
    const t = this.render();
    super.update(e),
      t !== X &&
        this.constructor.render(t, this.renderRoot, {
          scopeName: this.localName,
          eventContext: this,
        }),
      this._needsShimAdoptedStyleSheets &&
        ((this._needsShimAdoptedStyleSheets = !1),
        this.constructor._styles.forEach((e) => {
          const t = document.createElement('style');
          (t.textContent = e.cssText), this.renderRoot.appendChild(t);
        }));
  }
  render() {
    return X;
  }
}
(Z.finalized = !0),
  (Z.render = (e, s, n) => {
    if (!n || 'object' != typeof n || !n.scopeName)
      throw new Error('The `scopeName` option is required.');
    const i = n.scopeName,
      r = R.has(s),
      a = I && 11 === s.nodeType && !!s.host,
      o = a && !H.has(i),
      c = o ? document.createDocumentFragment() : s;
    if (
      (((e, s, n) => {
        let i = R.get(s);
        void 0 === i &&
          (t(s, s.firstChild),
          R.set(s, (i = new C(Object.assign({ templateFactory: V }, n)))),
          i.appendInto(s)),
          i.setValue(e),
          i.commit();
      })(e, c, Object.assign({ templateFactory: L(i) }, n)),
      o)
    ) {
      const e = R.get(c);
      R.delete(c);
      const n = e.value instanceof v ? e.value.template : void 0;
      q(i, c, n), t(s, s.firstChild), s.appendChild(c), R.set(s, e);
    }
    !r && a && window.ShadyCSS.styleElement(s.host);
  });
/**
 * @license
 * Copyright (c) 2018 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const ee = new WeakMap(),
  te = g((e) => (t) => {
    const s = ee.get(t);
    if (void 0 === e && t instanceof P) {
      if (void 0 !== s || !ee.has(t)) {
        const e = t.committer.name;
        t.committer.element.removeAttribute(e);
      }
    } else e !== s && t.setValue(e);
    ee.set(t, e);
  });
customElements.define(
  'st-button',
  class extends Z {
    static get properties() {
      return {
        type: { type: String },
        label: { type: String },
        href: { type: String },
        icon: { type: String },
        trailingIcon: { attribute: 'trailing-icon', type: Boolean },
      };
    }
    static get styles() {
      return Q`:host{display:inline-block;--icon-gap:var(--size-100)}#container{display:inline-flex;align-items:center;cursor:pointer;border-radius:var(--size-050);padding:var(--size-200);background-color:var(--colors-gray-400);text-decoration:none;box-shadow:var(--colors-black-600) 1px 1px 8px;color:var(--colors-black-800)}#container:hover{color:#000}ion-icon{margin-right:var(--icon-gap)}:host([trailing-icon]) ion-icon{margin-right:0;margin-left:var(--icon-gap)}:host([type=primary]) #container{background-color:var(--colors-theme-5);color:var(--colors-white-800)}:host([type=secondary]) #container{background-color:var(--colors-theme-3);color:var(--colors-white-800)}:host([type]) #container:hover{color:#fff}`;
    }
    render() {
      return O`<a id="container" href="${te(this.href)}">${
        this.icon && !this.trailingIcon
          ? O`<ion-icon name="${this.icon}"></ion-icon>`
          : null
      }<st-text id="text" exportparts="container: content" label="${
        this.label
      }">${this.label}</st-text>${
        this.icon && this.trailingIcon
          ? O`<ion-icon class="trailing" name="${this.icon}"></ion-icon>`
          : null
      }</a>`;
    }
  }
);
/**
 * @license
 * Copyright (c) 2018 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
class se {
  constructor(e) {
    (this.classes = new Set()), (this.changed = !1), (this.element = e);
    const t = (e.getAttribute('class') || '').split(/\s+/);
    for (const e of t) this.classes.add(e);
  }
  add(e) {
    this.classes.add(e), (this.changed = !0);
  }
  remove(e) {
    this.classes.delete(e), (this.changed = !0);
  }
  commit() {
    if (this.changed) {
      let e = '';
      this.classes.forEach((t) => (e += t + ' ')),
        this.element.setAttribute('class', e);
    }
  }
}
const ne = new WeakMap(),
  ie = g((e) => (t) => {
    if (
      !(t instanceof P) ||
      t instanceof E ||
      'class' !== t.committer.name ||
      t.committer.parts.length > 1
    )
      throw new Error(
        'The `classMap` directive must be used in the `class` attribute and must be the only part in the attribute.'
      );
    const { committer: s } = t,
      { element: n } = s;
    let i = ne.get(t);
    void 0 === i &&
      (n.setAttribute('class', s.strings.join(' ')),
      ne.set(t, (i = new Set())));
    const r = n.classList || new se(n);
    i.forEach((t) => {
      t in e || (r.remove(t), i.delete(t));
    });
    for (const t in e) {
      const s = e[t];
      s != i.has(t) && (s ? (r.add(t), i.add(t)) : (r.remove(t), i.delete(t)));
    }
    'function' == typeof r.commit && r.commit();
  });
customElements.define(
  'st-card',
  class extends Z {
    static get properties() {
      return {
        image: { type: String },
        href: { type: String },
        heading: { type: String },
        subheading: { type: String },
        description: { type: String },
        static: { type: Boolean },
        contain: { type: Boolean },
      };
    }
    static get styles() {
      return Q`:host{display:inline-block;width:350px}#container{border:var(--size-050) solid var(--colors-gray-400);border-radius:var(--size-200);overflow:hidden;position:relative;overflow:hidden;padding-bottom:56.25%;background-repeat:no-repeat;background-size:cover;background-position:center}.link{color:#000}.image::part(container){max-width:100%;max-height:100%}.transparent-label{width:100%;box-sizing:border-box;padding:var(--size-300);background:var(--colors-white-800);position:absolute;bottom:0;left:0;transition:transform .4s}#container:hover .transparent-label{transform:translateY(0)}.header{margin-bottom:0}:host([static]) .transparent-label{transform:none}:host([contain]) #container{background-size:contain}@media screen and (min-width:960px){.transparent-label{transform:translateY(100%)}}`;
    }
    render() {
      const e = { wide: this.wide };
      return O`<a class="link" href="${te(
        this.href
      )}"><div id="container" part="container" class="${ie(
        e
      )}" style="background-image:url('${
        this.image
      }')"><div class="transparent-label"><st-header class="header" exportparts="heading, subheading, description" heading="${te(
        this.heading
      )}" subheading="${te(this.subheading)}" description="${te(
        this.description
      )}"></st-header></div></div></a>`;
    }
  }
);
customElements.define(
  'st-footer',
  class extends Z {
    static get styles() {
      return Q`:host{display:block}#section::part(container){background:#37392e;text-align:center;justify-content:center}st-header::part(description),st-header::part(heading){color:var(--colors-white-700);margin-bottom:var(--size-100)}.social-icons>*~*{margin-left:var(--spacer-200)}.social-icons a{text-decoration:none;color:var(--colors-white-700)}ion-icon{font-size:var(--size-400);color:var(--colors-white-700)}@media screen and (min-width:480px){#section::part(container){background:#37392e;text-align:left}}`;
    }
    render() {
      return O`<footer id="container" part="container"><st-section id="section" exportparts="container: section-container"><st-header heading="Contact" description="Irvine, CA" headingHref="#contact"></st-header><div class="social-icons"><a class="social-icon" href="mailto:seteramae@gmail.com?Subject=Hi!" target="_blank" title="mail"><ion-icon name="mail"></ion-icon></a><a class="social-icon" href="https://www.linkedin.com/in/sean-teramae-b89486123/" target="_blank" title="linkedin"><ion-icon name="logo-linkedin"></ion-icon></a><a class="social-icon" href="https://github.com/kekupua" target="_blank" title="github"><ion-icon name="logo-github"></ion-icon></a></div></st-section></footer>`;
    }
  }
);
customElements.define(
  'st-header',
  class extends Z {
    constructor() {
      super(), (this.hLevel = '1');
    }
    static get properties() {
      return {
        alignment: { type: String },
        hLevel: { type: Number },
        heading: { type: String },
        headingHref: { type: String },
        subheading: { type: String },
        subheadingHref: { type: String },
        description: { type: String },
      };
    }
    static get styles() {
      return Q`:host{width:100%;display:inline-block;margin-bottom:var(--size-200)}#content{display:flex;flex-direction:column}#subheading::part(container){font-weight:400}:host([alignment=center]) #content{text-align:center}`;
    }
    render() {
      return O`<div id="container" part="container"><slot name="subheading">${
        this.subheading
          ? O`<st-text id="subheading" exportparts="container: subheading" href="${te(
              this.subheadingHref
            )}" type="h${parseInt(this.hLevel) + 1}">${
              this.subheading
            }</st-text>`
          : null
      }</slot><slot name="heading">${
        this.heading
          ? O`<st-text id="heading" accent exportparts="container: heading" href="${te(
              this.headingHref
            )}" type="h${this.hLevel}">${this.heading}</st-text>`
          : null
      }</slot><slot name="description">${
        this.description
          ? O`<st-text id="description" exportparts="container : description" type="p">${this.description}</st-text>`
          : null
      }</slot></div>`;
    }
  }
);
customElements.define(
  'st-image',
  class extends Z {
    static get properties() {
      return {
        src: { type: String },
        alt: { type: String },
        clip: { type: String },
        frame: { type: Boolean },
        caption: { type: String },
        aspectRatio: { type: String, attribute: 'aspect-ratio' },
      };
    }
    static get styles() {
      return Q`:host{display:inline-block}figure{margin:0}img{vertical-align:top;height:100%;width:100%}figcaption{text-align:center}:host([clip=circle]) #image{clip-path:circle(50%)}:host([clip=diamond]) #image{clip-path:polygon(50% 0,100% 50%,50% 100%,0 50%)}:host([clip=triangle]) #image{clip-path:polygon(0 100%,50% 0,100% 100%)}:host([frame]) #image{padding:1px;border:1px solid #000}`;
    }
    render() {
      let e = O`<figure><img id="image" part="container" src="${
        this.src
      }" alt="${te(this.alt)}"> ${
        this.caption
          ? O`<figcaption><st-text>${this.caption}</st-text></figcaption>`
          : null
      }</figure>`;
      return this.aspectRatio
        ? ((e, t) => {
            if (!e) return null;
            let [s, n] = e.split(':');
            const i = (n / s) * 100 + '%';
            return (
              console.log(t),
              O`<style>:host{width:100%;position:relative;padding-top:${i}}:host>*{position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%}</style>${t}`
            );
          })(this.aspectRatio, e)
        : e;
    }
  }
);
customElements.define(
  'st-nav',
  class extends Z {
    constructor() {
      super(),
        (this.items = [
          { description: 'About', href: '#about' },
          { description: 'Projects', href: '#projects' },
          { description: 'Contact', href: '#contact' },
        ]);
    }
    static get properties() {
      return { alignment: { type: String }, items: { type: Array } };
    }
    static get styles() {
      return Q`#container{position:-webkit-sticky;position:sticky;top:0;background:var(--section-bg-1);z-index:var(--z-index-nav)}.nav-item::part(container){padding:var(--size-300);color:var(--colors-gray-200)}.nav-item::part(container):hover{color:var(--colors-gray-400)}:host([alignment=center]) #nav-items{text-align:center}:host([alignment=right]) #nav-items{text-align:right}`;
    }
    mapNavItems(e) {
      return e
        ? e.map(
            (e, t) =>
              O`<st-text href="${e.href}" class="nav-item" part="nav-item nav-item-${t}">${e.description}</st-text>`
          )
        : null;
    }
    render() {
      return O`<nav id="container" part="container"><div id="content" part="content"><div id="nav-items">${this.mapNavItems(
        this.items
      )}</div></div></nav>`;
    }
  }
);
customElements.define(
  'st-section',
  class extends Z {
    static get properties() {
      return {
        alignment: { type: String },
        heading: { type: String },
        subheading: { type: String },
        description: { type: String },
      };
    }
    static get styles() {
      return Q`:host{display:block}#container{width:100%;background-color:#fff;display:flex;justify-content:center;text-align:left}#content{width:100%;max-width:var(--content-max-width);padding:var(--spacer-800)}:host([type=secondary]) #container{background-color:gray}:host([alignment=center]) #container{text-align:center;justify-content:center}:host([alignment=right]) #container{text-align:right;justify-content:flex-end}`;
    }
    render() {
      return O`<section id="container" part="container"><div id="content" part="content"><slot name="header"><st-header part="header" heading="${te(
        this.heading
      )}" subheading="${te(this.subheading)}" description="${te(
        this.description
      )}" exportparts="heading subheading description"></st-header></slot><slot part="default-content"></slot></div></section>`;
    }
  }
);
customElements.define(
  'st-text',
  class extends Z {
    static get properties() {
      return {
        accent: { type: Boolean },
        type: { type: String },
        href: { type: String },
      };
    }
    static get styles() {
      return Q`a,h1,h2,h3,h4,h5,h6,p{margin:0;display:inline-block}a{text-decoration:none;color:#009ae4}:host{display:inline-block;font-family:var(--font-family-default),sans-serif;color:currentColor}.accent{font-family:var(--font-family-accent),sans-serif}:host([type*=h]),:host([type=p]){display:block}:host([href]){display:inline-block}`;
    }
    isHeading(e) {
      return /h[1-6]/g.test(e);
    }
    render() {
      let e = document.createElement(this.type || 'span'),
        t = document.createElement('slot');
      return (
        e.appendChild(t),
        this.accent && e.classList.add('accent'),
        this.href
          ? O`<a href="${this.href}" name="${this.href.slice(
              1
            )}" part="container">${e}</a>`
          : ((e.part = 'container'), e)
      );
    }
  }
);
