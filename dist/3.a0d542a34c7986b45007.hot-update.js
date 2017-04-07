webpackHotUpdate(3,{

/***/ 74:
/***/ function(module, exports, __webpack_require__) {

	eval("exports = module.exports = __webpack_require__(328)();\n// imports\n\n\n// module\nexports.push([module.id, \"/*! normalize.css v3.0.3 | MIT License | github.com/necolas/normalize.css */\\n/**\\n * 1. Set default font family to sans-serif.\\n * 2. Prevent iOS and IE text size adjust after device orientation change,\\n *    without disabling user zoom.\\n */\\nhtml {\\n  font-family: sans-serif;\\n  /* 1 */\\n  -ms-text-size-adjust: 100%;\\n  /* 2 */\\n  -webkit-text-size-adjust: 100%;\\n  /* 2 */ }\\n\\n/**\\n * Remove default margin.\\n */\\nbody {\\n  margin: 0; }\\n\\n/* HTML5 display definitions\\n   ========================================================================== */\\n/**\\n * Correct `block` display not defined for any HTML5 element in IE 8/9.\\n * Correct `block` display not defined for `details` or `summary` in IE 10/11\\n * and Firefox.\\n * Correct `block` display not defined for `main` in IE 11.\\n */\\narticle,\\naside,\\ndetails,\\nfigcaption,\\nfigure,\\nfooter,\\nheader,\\nhgroup,\\nmain,\\nmenu,\\nnav,\\nsection,\\nsummary {\\n  display: block; }\\n\\n/**\\n * 1. Correct `inline-block` display not defined in IE 8/9.\\n * 2. Normalize vertical alignment of `progress` in Chrome, Firefox, and Opera.\\n */\\naudio,\\ncanvas,\\nprogress,\\nvideo {\\n  display: inline-block;\\n  /* 1 */\\n  vertical-align: baseline;\\n  /* 2 */ }\\n\\n/**\\n * Prevent modern browsers from displaying `audio` without controls.\\n * Remove excess height in iOS 5 devices.\\n */\\naudio:not([controls]) {\\n  display: none;\\n  height: 0; }\\n\\n/**\\n * Address `[hidden]` styling not present in IE 8/9/10.\\n * Hide the `template` element in IE 8/9/10/11, Safari, and Firefox < 22.\\n */\\n[hidden],\\ntemplate {\\n  display: none; }\\n\\n/* Links\\n   ========================================================================== */\\n/**\\n * Remove the gray background color from active links in IE 10.\\n */\\na {\\n  background-color: transparent; }\\n\\n/**\\n * Improve readability of focused elements when they are also in an\\n * active/hover state.\\n */\\na:active,\\na:hover {\\n  outline: 0; }\\n\\n/* Text-level semantics\\n   ========================================================================== */\\n/**\\n * Address styling not present in IE 8/9/10/11, Safari, and Chrome.\\n */\\nabbr[title] {\\n  border-bottom: 1px dotted; }\\n\\n/**\\n * Address style set to `bolder` in Firefox 4+, Safari, and Chrome.\\n */\\nb,\\nstrong {\\n  font-weight: bold; }\\n\\n/**\\n * Address styling not present in Safari and Chrome.\\n */\\ndfn {\\n  font-style: italic; }\\n\\n/**\\n * Address variable `h1` font-size and margin within `section` and `article`\\n * contexts in Firefox 4+, Safari, and Chrome.\\n */\\nh1 {\\n  font-size: 2em;\\n  margin: 0.67em 0; }\\n\\n/**\\n * Address styling not present in IE 8/9.\\n */\\nmark {\\n  background: #ff0;\\n  color: #000; }\\n\\n/**\\n * Address inconsistent and variable font size in all browsers.\\n */\\nsmall {\\n  font-size: 80%; }\\n\\n/**\\n * Prevent `sub` and `sup` affecting `line-height` in all browsers.\\n */\\nsub,\\nsup {\\n  font-size: 75%;\\n  line-height: 0;\\n  position: relative;\\n  vertical-align: baseline; }\\n\\nsup {\\n  top: -0.5em; }\\n\\nsub {\\n  bottom: -0.25em; }\\n\\n/* Embedded content\\n   ========================================================================== */\\n/**\\n * Remove border when inside `a` element in IE 8/9/10.\\n */\\nimg {\\n  border: 0; }\\n\\n/**\\n * Correct overflow not hidden in IE 9/10/11.\\n */\\nsvg:not(:root) {\\n  overflow: hidden; }\\n\\n/* Grouping content\\n   ========================================================================== */\\n/**\\n * Address margin not present in IE 8/9 and Safari.\\n */\\nfigure {\\n  margin: 1em 40px; }\\n\\n/**\\n * Address differences between Firefox and other browsers.\\n */\\nhr {\\n  box-sizing: content-box;\\n  height: 0; }\\n\\n/**\\n * Contain overflow in all browsers.\\n */\\npre {\\n  overflow: auto; }\\n\\n/**\\n * Address odd `em`-unit font size rendering in all browsers.\\n */\\ncode,\\nkbd,\\npre,\\nsamp {\\n  font-family: monospace, monospace;\\n  font-size: 1em; }\\n\\n/* Forms\\n   ========================================================================== */\\n/**\\n * Known limitation: by default, Chrome and Safari on OS X allow very limited\\n * styling of `select`, unless a `border` property is set.\\n */\\n/**\\n * 1. Correct color not being inherited.\\n *    Known issue: affects color of disabled elements.\\n * 2. Correct font properties not being inherited.\\n * 3. Address margins set differently in Firefox 4+, Safari, and Chrome.\\n */\\nbutton,\\ninput,\\noptgroup,\\nselect,\\ntextarea {\\n  color: inherit;\\n  /* 1 */\\n  font: inherit;\\n  /* 2 */\\n  margin: 0;\\n  /* 3 */ }\\n\\n/**\\n * Address `overflow` set to `hidden` in IE 8/9/10/11.\\n */\\nbutton {\\n  overflow: visible; }\\n\\n/**\\n * Address inconsistent `text-transform` inheritance for `button` and `select`.\\n * All other form control elements do not inherit `text-transform` values.\\n * Correct `button` style inheritance in Firefox, IE 8/9/10/11, and Opera.\\n * Correct `select` style inheritance in Firefox.\\n */\\nbutton,\\nselect {\\n  text-transform: none; }\\n\\n/**\\n * 1. Avoid the WebKit bug in Android 4.0.* where (2) destroys native `audio`\\n *    and `video` controls.\\n * 2. Correct inability to style clickable `input` types in iOS.\\n * 3. Improve usability and consistency of cursor style between image-type\\n *    `input` and others.\\n */\\nbutton,\\nhtml input[type=\\\"button\\\"],\\ninput[type=\\\"reset\\\"],\\ninput[type=\\\"submit\\\"] {\\n  -webkit-appearance: button;\\n  /* 2 */\\n  cursor: pointer;\\n  /* 3 */ }\\n\\n/**\\n * Re-set default cursor for disabled elements.\\n */\\nbutton[disabled],\\nhtml input[disabled] {\\n  cursor: default; }\\n\\n/**\\n * Remove inner padding and border in Firefox 4+.\\n */\\nbutton::-moz-focus-inner,\\ninput::-moz-focus-inner {\\n  border: 0;\\n  padding: 0; }\\n\\n/**\\n * Address Firefox 4+ setting `line-height` on `input` using `!important` in\\n * the UA stylesheet.\\n */\\ninput {\\n  line-height: normal; }\\n\\n/**\\n * It's recommended that you don't attempt to style these elements.\\n * Firefox's implementation doesn't respect box-sizing, padding, or width.\\n *\\n * 1. Address box sizing set to `content-box` in IE 8/9/10.\\n * 2. Remove excess padding in IE 8/9/10.\\n */\\ninput[type=\\\"checkbox\\\"],\\ninput[type=\\\"radio\\\"] {\\n  box-sizing: border-box;\\n  /* 1 */\\n  padding: 0;\\n  /* 2 */ }\\n\\n/**\\n * Fix the cursor style for Chrome's increment/decrement buttons. For certain\\n * `font-size` values of the `input`, it causes the cursor style of the\\n * decrement button to change from `default` to `text`.\\n */\\ninput[type=\\\"number\\\"]::-webkit-inner-spin-button,\\ninput[type=\\\"number\\\"]::-webkit-outer-spin-button {\\n  height: auto; }\\n\\n/**\\n * 1. Address `appearance` set to `searchfield` in Safari and Chrome.\\n * 2. Address `box-sizing` set to `border-box` in Safari and Chrome.\\n */\\ninput[type=\\\"search\\\"] {\\n  -webkit-appearance: textfield;\\n  /* 1 */\\n  box-sizing: content-box;\\n  /* 2 */ }\\n\\n/**\\n * Remove inner padding and search cancel button in Safari and Chrome on OS X.\\n * Safari (but not Chrome) clips the cancel button when the search input has\\n * padding (and `textfield` appearance).\\n */\\ninput[type=\\\"search\\\"]::-webkit-search-cancel-button,\\ninput[type=\\\"search\\\"]::-webkit-search-decoration {\\n  -webkit-appearance: none; }\\n\\n/**\\n * Define consistent border, margin, and padding.\\n */\\nfieldset {\\n  border: 1px solid #c0c0c0;\\n  margin: 0 2px;\\n  padding: 0.35em 0.625em 0.75em; }\\n\\n/**\\n * 1. Correct `color` not being inherited in IE 8/9/10/11.\\n * 2. Remove padding so people aren't caught out if they zero out fieldsets.\\n */\\nlegend {\\n  border: 0;\\n  /* 1 */\\n  padding: 0;\\n  /* 2 */ }\\n\\n/**\\n * Remove default vertical scrollbar in IE 8/9/10/11.\\n */\\ntextarea {\\n  overflow: auto; }\\n\\n/**\\n * Don't inherit the `font-weight` (applied by a rule above).\\n * NOTE: the default cannot safely be changed in Chrome and Safari on OS X.\\n */\\noptgroup {\\n  font-weight: bold; }\\n\\n/* Tables\\n   ========================================================================== */\\n/**\\n * Remove most spacing between table cells.\\n */\\ntable {\\n  border-collapse: collapse;\\n  border-spacing: 0; }\\n\\ntd,\\nth {\\n  padding: 0; }\\n\\n/**\\n * Set up a decent box model on the root element\\n */\\nhtml {\\n  box-sizing: border-box; }\\n\\n/**\\n * Make all elements from the DOM inherit from the parent box-sizing\\n * Since `*` has a specificity of 0, it does not override the `html` value\\n * making all elements inheriting from the root box-sizing value\\n * See: https://css-tricks.com/inheriting-box-sizing-probably-slightly-better-best-practice/\\n */\\n*, *::before, *::after {\\n  box-sizing: inherit; }\\n\\n/**\\n * Basic styles for links\\n */\\na {\\n  color: #e50050;\\n  text-decoration: none; }\\n  a:hover, a:active, a:focus {\\n    color: #222222;\\n    text-decoration: underline; }\\n\\n/**\\n * Basic typography style for copy text\\n */\\nbody {\\n  color: #222222;\\n  font: normal 125%/1.4 \\\"Open Sans\\\", \\\"Helvetica Neue Light\\\", \\\"Helvetica Neue\\\", \\\"Helvetica\\\", \\\"Arial\\\", sans-serif; }\\n\\n/**\\n * Clear inner floats\\n */\\n.clearfix::after {\\n  clear: both;\\n  content: '';\\n  display: table; }\\n\\n/**\\n * Main content containers\\n * 1. Make the container full-width with a maximum width\\n * 2. Center it in the viewport\\n * 3. Leave some space on the edges, especially valuable on small screens\\n */\\n.container {\\n  max-width: 1180px;\\n  /* 1 */\\n  margin-left: auto;\\n  /* 2 */\\n  margin-right: auto;\\n  /* 2 */\\n  padding-left: 20px;\\n  /* 3 */\\n  padding-right: 20px;\\n  /* 3 */\\n  width: 100%;\\n  /* 1 */ }\\n\\n/**\\n * Hide text while making it readable for screen readers\\n * 1. Needed in WebKit-based browsers because of an implementation bug;\\n *    See: https://code.google.com/p/chromium/issues/detail?id=457146\\n */\\n.hide-text {\\n  overflow: hidden;\\n  padding: 0;\\n  /* 1 */\\n  text-indent: 101%;\\n  white-space: nowrap; }\\n\\n/**\\n * Hide element while making it readable for screen readers\\n * Shamelessly borrowed from HTML5Boilerplate:\\n * https://github.com/h5bp/html5-boilerplate/blob/master/src/css/main.css#L119-L133\\n */\\n.visually-hidden {\\n  border: 0;\\n  clip: rect(0 0 0 0);\\n  height: 1px;\\n  margin: -1px;\\n  overflow: hidden;\\n  padding: 0;\\n  position: absolute;\\n  width: 1px; }\\n\\n.icon-bg i {\\n  color: white !important;\\n  margin-bottom: 13px;\\n  margin-top: 12px !important;\\n  float: left; }\\n\\nbody {\\n  overflow-x: hidden; }\\n\\n/* Toggle Styles */\\n#wrapper {\\n  padding-left: 0;\\n  -webkit-transition: all 0.5s ease;\\n  -moz-transition: all 0.5s ease;\\n  -o-transition: all 0.5s ease;\\n  transition: all 0.5s ease; }\\n\\n#wrapper.toggled {\\n  padding-left: 250px; }\\n\\n#sidebar-wrapper {\\n  z-index: 1000;\\n  position: fixed;\\n  left: 250px;\\n  width: 0;\\n  height: 100%;\\n  margin-left: -250px;\\n  overflow-y: auto;\\n  background: #000;\\n  -webkit-transition: all 0.5s ease;\\n  -moz-transition: all 0.5s ease;\\n  -o-transition: all 0.5s ease;\\n  transition: all 0.5s ease; }\\n\\n#wrapper.toggled #sidebar-wrapper {\\n  width: 250px; }\\n\\n#page-content-wrapper {\\n  width: 100%;\\n  position: absolute;\\n  padding: 15px; }\\n\\n#wrapper.toggled #page-content-wrapper {\\n  position: absolute;\\n  margin-right: -250px; }\\n\\n/* Sidebar Styles */\\n.sidebar-nav {\\n  position: absolute;\\n  top: 0;\\n  width: 250px;\\n  margin: 0;\\n  padding: 0;\\n  list-style: none; }\\n\\n.sidebar-nav li {\\n  text-indent: 20px;\\n  line-height: 40px; }\\n\\n.sidebar-nav li a {\\n  display: block;\\n  text-decoration: none;\\n  color: #999999; }\\n\\n.sidebar-nav li a:hover {\\n  text-decoration: none;\\n  color: #fff;\\n  background: rgba(255, 255, 255, 0.2); }\\n\\n.sidebar-nav li a:active,\\n.sidebar-nav li a:focus {\\n  text-decoration: none; }\\n\\n.sidebar-nav > .sidebar-brand {\\n  height: 65px;\\n  font-size: 18px;\\n  line-height: 60px; }\\n\\n.sidebar-nav > .sidebar-brand a {\\n  color: #999999; }\\n\\n.sidebar-nav > .sidebar-brand a:hover {\\n  color: #fff;\\n  background: none; }\\n\\n@media (min-width: 768px) {\\n  #wrapper {\\n    padding-left: 0; }\\n  #wrapper.toggled {\\n    padding-left: 250px; }\\n  #sidebar-wrapper {\\n    width: 0; }\\n  #wrapper.toggled #sidebar-wrapper {\\n    width: 250px; }\\n  #page-content-wrapper {\\n    padding: 20px;\\n    position: relative; }\\n  #wrapper.toggled #page-content-wrapper {\\n    position: relative;\\n    margin-right: 0; } }\\n\\n.navbar-fixed-bottom {\\n  background: lightgrey;\\n  height: 50px; }\\n\\n.chatbox {\\n  display: table; }\\n  .chatbox p {\\n    display: table-cell;\\n    display: flex; }\\n\\n#chatlist::-webkit-scrollbar-track {\\n  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);\\n  border-radius: 10px;\\n  background-color: #F5F5F5; }\\n\\n#chatlist::-webkit-scrollbar {\\n  width: 12px;\\n  background-color: #F5F5F5; }\\n\\n#chatlist::-webkit-scrollbar-thumb {\\n  border-radius: 10px;\\n  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);\\n  background-color: #555; }\\n\\n#chatlist {\\n  overflow-y: scroll;\\n  height: 300px;\\n  max-width: 100%;\\n  overflow-x: hidden;\\n  word-wrap: break-word; }\\n\\n.form-group {\\n  display: table; }\\n  .form-group input {\\n    display: table-cell;\\n    border-bottom-right-radius: 0px !important;\\n    border-top-right-radius: 0px !important; }\\n  .form-group span {\\n    display: table-cell; }\\n\", \"\"]);\n\n// exports\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNzQuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvc2Fzcy9tYWluLnNjc3M/YzA5OCJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKCk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIvKiEgbm9ybWFsaXplLmNzcyB2My4wLjMgfCBNSVQgTGljZW5zZSB8IGdpdGh1Yi5jb20vbmVjb2xhcy9ub3JtYWxpemUuY3NzICovXFxuLyoqXFxuICogMS4gU2V0IGRlZmF1bHQgZm9udCBmYW1pbHkgdG8gc2Fucy1zZXJpZi5cXG4gKiAyLiBQcmV2ZW50IGlPUyBhbmQgSUUgdGV4dCBzaXplIGFkanVzdCBhZnRlciBkZXZpY2Ugb3JpZW50YXRpb24gY2hhbmdlLFxcbiAqICAgIHdpdGhvdXQgZGlzYWJsaW5nIHVzZXIgem9vbS5cXG4gKi9cXG5odG1sIHtcXG4gIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xcbiAgLyogMSAqL1xcbiAgLW1zLXRleHQtc2l6ZS1hZGp1c3Q6IDEwMCU7XFxuICAvKiAyICovXFxuICAtd2Via2l0LXRleHQtc2l6ZS1hZGp1c3Q6IDEwMCU7XFxuICAvKiAyICovIH1cXG5cXG4vKipcXG4gKiBSZW1vdmUgZGVmYXVsdCBtYXJnaW4uXFxuICovXFxuYm9keSB7XFxuICBtYXJnaW46IDA7IH1cXG5cXG4vKiBIVE1MNSBkaXNwbGF5IGRlZmluaXRpb25zXFxuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG4vKipcXG4gKiBDb3JyZWN0IGBibG9ja2AgZGlzcGxheSBub3QgZGVmaW5lZCBmb3IgYW55IEhUTUw1IGVsZW1lbnQgaW4gSUUgOC85LlxcbiAqIENvcnJlY3QgYGJsb2NrYCBkaXNwbGF5IG5vdCBkZWZpbmVkIGZvciBgZGV0YWlsc2Agb3IgYHN1bW1hcnlgIGluIElFIDEwLzExXFxuICogYW5kIEZpcmVmb3guXFxuICogQ29ycmVjdCBgYmxvY2tgIGRpc3BsYXkgbm90IGRlZmluZWQgZm9yIGBtYWluYCBpbiBJRSAxMS5cXG4gKi9cXG5hcnRpY2xlLFxcbmFzaWRlLFxcbmRldGFpbHMsXFxuZmlnY2FwdGlvbixcXG5maWd1cmUsXFxuZm9vdGVyLFxcbmhlYWRlcixcXG5oZ3JvdXAsXFxubWFpbixcXG5tZW51LFxcbm5hdixcXG5zZWN0aW9uLFxcbnN1bW1hcnkge1xcbiAgZGlzcGxheTogYmxvY2s7IH1cXG5cXG4vKipcXG4gKiAxLiBDb3JyZWN0IGBpbmxpbmUtYmxvY2tgIGRpc3BsYXkgbm90IGRlZmluZWQgaW4gSUUgOC85LlxcbiAqIDIuIE5vcm1hbGl6ZSB2ZXJ0aWNhbCBhbGlnbm1lbnQgb2YgYHByb2dyZXNzYCBpbiBDaHJvbWUsIEZpcmVmb3gsIGFuZCBPcGVyYS5cXG4gKi9cXG5hdWRpbyxcXG5jYW52YXMsXFxucHJvZ3Jlc3MsXFxudmlkZW8ge1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgLyogMSAqL1xcbiAgdmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xcbiAgLyogMiAqLyB9XFxuXFxuLyoqXFxuICogUHJldmVudCBtb2Rlcm4gYnJvd3NlcnMgZnJvbSBkaXNwbGF5aW5nIGBhdWRpb2Agd2l0aG91dCBjb250cm9scy5cXG4gKiBSZW1vdmUgZXhjZXNzIGhlaWdodCBpbiBpT1MgNSBkZXZpY2VzLlxcbiAqL1xcbmF1ZGlvOm5vdChbY29udHJvbHNdKSB7XFxuICBkaXNwbGF5OiBub25lO1xcbiAgaGVpZ2h0OiAwOyB9XFxuXFxuLyoqXFxuICogQWRkcmVzcyBgW2hpZGRlbl1gIHN0eWxpbmcgbm90IHByZXNlbnQgaW4gSUUgOC85LzEwLlxcbiAqIEhpZGUgdGhlIGB0ZW1wbGF0ZWAgZWxlbWVudCBpbiBJRSA4LzkvMTAvMTEsIFNhZmFyaSwgYW5kIEZpcmVmb3ggPCAyMi5cXG4gKi9cXG5baGlkZGVuXSxcXG50ZW1wbGF0ZSB7XFxuICBkaXNwbGF5OiBub25lOyB9XFxuXFxuLyogTGlua3NcXG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcbi8qKlxcbiAqIFJlbW92ZSB0aGUgZ3JheSBiYWNrZ3JvdW5kIGNvbG9yIGZyb20gYWN0aXZlIGxpbmtzIGluIElFIDEwLlxcbiAqL1xcbmEge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7IH1cXG5cXG4vKipcXG4gKiBJbXByb3ZlIHJlYWRhYmlsaXR5IG9mIGZvY3VzZWQgZWxlbWVudHMgd2hlbiB0aGV5IGFyZSBhbHNvIGluIGFuXFxuICogYWN0aXZlL2hvdmVyIHN0YXRlLlxcbiAqL1xcbmE6YWN0aXZlLFxcbmE6aG92ZXIge1xcbiAgb3V0bGluZTogMDsgfVxcblxcbi8qIFRleHQtbGV2ZWwgc2VtYW50aWNzXFxuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG4vKipcXG4gKiBBZGRyZXNzIHN0eWxpbmcgbm90IHByZXNlbnQgaW4gSUUgOC85LzEwLzExLCBTYWZhcmksIGFuZCBDaHJvbWUuXFxuICovXFxuYWJiclt0aXRsZV0ge1xcbiAgYm9yZGVyLWJvdHRvbTogMXB4IGRvdHRlZDsgfVxcblxcbi8qKlxcbiAqIEFkZHJlc3Mgc3R5bGUgc2V0IHRvIGBib2xkZXJgIGluIEZpcmVmb3ggNCssIFNhZmFyaSwgYW5kIENocm9tZS5cXG4gKi9cXG5iLFxcbnN0cm9uZyB7XFxuICBmb250LXdlaWdodDogYm9sZDsgfVxcblxcbi8qKlxcbiAqIEFkZHJlc3Mgc3R5bGluZyBub3QgcHJlc2VudCBpbiBTYWZhcmkgYW5kIENocm9tZS5cXG4gKi9cXG5kZm4ge1xcbiAgZm9udC1zdHlsZTogaXRhbGljOyB9XFxuXFxuLyoqXFxuICogQWRkcmVzcyB2YXJpYWJsZSBgaDFgIGZvbnQtc2l6ZSBhbmQgbWFyZ2luIHdpdGhpbiBgc2VjdGlvbmAgYW5kIGBhcnRpY2xlYFxcbiAqIGNvbnRleHRzIGluIEZpcmVmb3ggNCssIFNhZmFyaSwgYW5kIENocm9tZS5cXG4gKi9cXG5oMSB7XFxuICBmb250LXNpemU6IDJlbTtcXG4gIG1hcmdpbjogMC42N2VtIDA7IH1cXG5cXG4vKipcXG4gKiBBZGRyZXNzIHN0eWxpbmcgbm90IHByZXNlbnQgaW4gSUUgOC85LlxcbiAqL1xcbm1hcmsge1xcbiAgYmFja2dyb3VuZDogI2ZmMDtcXG4gIGNvbG9yOiAjMDAwOyB9XFxuXFxuLyoqXFxuICogQWRkcmVzcyBpbmNvbnNpc3RlbnQgYW5kIHZhcmlhYmxlIGZvbnQgc2l6ZSBpbiBhbGwgYnJvd3NlcnMuXFxuICovXFxuc21hbGwge1xcbiAgZm9udC1zaXplOiA4MCU7IH1cXG5cXG4vKipcXG4gKiBQcmV2ZW50IGBzdWJgIGFuZCBgc3VwYCBhZmZlY3RpbmcgYGxpbmUtaGVpZ2h0YCBpbiBhbGwgYnJvd3NlcnMuXFxuICovXFxuc3ViLFxcbnN1cCB7XFxuICBmb250LXNpemU6IDc1JTtcXG4gIGxpbmUtaGVpZ2h0OiAwO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgdmVydGljYWwtYWxpZ246IGJhc2VsaW5lOyB9XFxuXFxuc3VwIHtcXG4gIHRvcDogLTAuNWVtOyB9XFxuXFxuc3ViIHtcXG4gIGJvdHRvbTogLTAuMjVlbTsgfVxcblxcbi8qIEVtYmVkZGVkIGNvbnRlbnRcXG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcbi8qKlxcbiAqIFJlbW92ZSBib3JkZXIgd2hlbiBpbnNpZGUgYGFgIGVsZW1lbnQgaW4gSUUgOC85LzEwLlxcbiAqL1xcbmltZyB7XFxuICBib3JkZXI6IDA7IH1cXG5cXG4vKipcXG4gKiBDb3JyZWN0IG92ZXJmbG93IG5vdCBoaWRkZW4gaW4gSUUgOS8xMC8xMS5cXG4gKi9cXG5zdmc6bm90KDpyb290KSB7XFxuICBvdmVyZmxvdzogaGlkZGVuOyB9XFxuXFxuLyogR3JvdXBpbmcgY29udGVudFxcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuLyoqXFxuICogQWRkcmVzcyBtYXJnaW4gbm90IHByZXNlbnQgaW4gSUUgOC85IGFuZCBTYWZhcmkuXFxuICovXFxuZmlndXJlIHtcXG4gIG1hcmdpbjogMWVtIDQwcHg7IH1cXG5cXG4vKipcXG4gKiBBZGRyZXNzIGRpZmZlcmVuY2VzIGJldHdlZW4gRmlyZWZveCBhbmQgb3RoZXIgYnJvd3NlcnMuXFxuICovXFxuaHIge1xcbiAgYm94LXNpemluZzogY29udGVudC1ib3g7XFxuICBoZWlnaHQ6IDA7IH1cXG5cXG4vKipcXG4gKiBDb250YWluIG92ZXJmbG93IGluIGFsbCBicm93c2Vycy5cXG4gKi9cXG5wcmUge1xcbiAgb3ZlcmZsb3c6IGF1dG87IH1cXG5cXG4vKipcXG4gKiBBZGRyZXNzIG9kZCBgZW1gLXVuaXQgZm9udCBzaXplIHJlbmRlcmluZyBpbiBhbGwgYnJvd3NlcnMuXFxuICovXFxuY29kZSxcXG5rYmQsXFxucHJlLFxcbnNhbXAge1xcbiAgZm9udC1mYW1pbHk6IG1vbm9zcGFjZSwgbW9ub3NwYWNlO1xcbiAgZm9udC1zaXplOiAxZW07IH1cXG5cXG4vKiBGb3Jtc1xcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuLyoqXFxuICogS25vd24gbGltaXRhdGlvbjogYnkgZGVmYXVsdCwgQ2hyb21lIGFuZCBTYWZhcmkgb24gT1MgWCBhbGxvdyB2ZXJ5IGxpbWl0ZWRcXG4gKiBzdHlsaW5nIG9mIGBzZWxlY3RgLCB1bmxlc3MgYSBgYm9yZGVyYCBwcm9wZXJ0eSBpcyBzZXQuXFxuICovXFxuLyoqXFxuICogMS4gQ29ycmVjdCBjb2xvciBub3QgYmVpbmcgaW5oZXJpdGVkLlxcbiAqICAgIEtub3duIGlzc3VlOiBhZmZlY3RzIGNvbG9yIG9mIGRpc2FibGVkIGVsZW1lbnRzLlxcbiAqIDIuIENvcnJlY3QgZm9udCBwcm9wZXJ0aWVzIG5vdCBiZWluZyBpbmhlcml0ZWQuXFxuICogMy4gQWRkcmVzcyBtYXJnaW5zIHNldCBkaWZmZXJlbnRseSBpbiBGaXJlZm94IDQrLCBTYWZhcmksIGFuZCBDaHJvbWUuXFxuICovXFxuYnV0dG9uLFxcbmlucHV0LFxcbm9wdGdyb3VwLFxcbnNlbGVjdCxcXG50ZXh0YXJlYSB7XFxuICBjb2xvcjogaW5oZXJpdDtcXG4gIC8qIDEgKi9cXG4gIGZvbnQ6IGluaGVyaXQ7XFxuICAvKiAyICovXFxuICBtYXJnaW46IDA7XFxuICAvKiAzICovIH1cXG5cXG4vKipcXG4gKiBBZGRyZXNzIGBvdmVyZmxvd2Agc2V0IHRvIGBoaWRkZW5gIGluIElFIDgvOS8xMC8xMS5cXG4gKi9cXG5idXR0b24ge1xcbiAgb3ZlcmZsb3c6IHZpc2libGU7IH1cXG5cXG4vKipcXG4gKiBBZGRyZXNzIGluY29uc2lzdGVudCBgdGV4dC10cmFuc2Zvcm1gIGluaGVyaXRhbmNlIGZvciBgYnV0dG9uYCBhbmQgYHNlbGVjdGAuXFxuICogQWxsIG90aGVyIGZvcm0gY29udHJvbCBlbGVtZW50cyBkbyBub3QgaW5oZXJpdCBgdGV4dC10cmFuc2Zvcm1gIHZhbHVlcy5cXG4gKiBDb3JyZWN0IGBidXR0b25gIHN0eWxlIGluaGVyaXRhbmNlIGluIEZpcmVmb3gsIElFIDgvOS8xMC8xMSwgYW5kIE9wZXJhLlxcbiAqIENvcnJlY3QgYHNlbGVjdGAgc3R5bGUgaW5oZXJpdGFuY2UgaW4gRmlyZWZveC5cXG4gKi9cXG5idXR0b24sXFxuc2VsZWN0IHtcXG4gIHRleHQtdHJhbnNmb3JtOiBub25lOyB9XFxuXFxuLyoqXFxuICogMS4gQXZvaWQgdGhlIFdlYktpdCBidWcgaW4gQW5kcm9pZCA0LjAuKiB3aGVyZSAoMikgZGVzdHJveXMgbmF0aXZlIGBhdWRpb2BcXG4gKiAgICBhbmQgYHZpZGVvYCBjb250cm9scy5cXG4gKiAyLiBDb3JyZWN0IGluYWJpbGl0eSB0byBzdHlsZSBjbGlja2FibGUgYGlucHV0YCB0eXBlcyBpbiBpT1MuXFxuICogMy4gSW1wcm92ZSB1c2FiaWxpdHkgYW5kIGNvbnNpc3RlbmN5IG9mIGN1cnNvciBzdHlsZSBiZXR3ZWVuIGltYWdlLXR5cGVcXG4gKiAgICBgaW5wdXRgIGFuZCBvdGhlcnMuXFxuICovXFxuYnV0dG9uLFxcbmh0bWwgaW5wdXRbdHlwZT1cXFwiYnV0dG9uXFxcIl0sXFxuaW5wdXRbdHlwZT1cXFwicmVzZXRcXFwiXSxcXG5pbnB1dFt0eXBlPVxcXCJzdWJtaXRcXFwiXSB7XFxuICAtd2Via2l0LWFwcGVhcmFuY2U6IGJ1dHRvbjtcXG4gIC8qIDIgKi9cXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIC8qIDMgKi8gfVxcblxcbi8qKlxcbiAqIFJlLXNldCBkZWZhdWx0IGN1cnNvciBmb3IgZGlzYWJsZWQgZWxlbWVudHMuXFxuICovXFxuYnV0dG9uW2Rpc2FibGVkXSxcXG5odG1sIGlucHV0W2Rpc2FibGVkXSB7XFxuICBjdXJzb3I6IGRlZmF1bHQ7IH1cXG5cXG4vKipcXG4gKiBSZW1vdmUgaW5uZXIgcGFkZGluZyBhbmQgYm9yZGVyIGluIEZpcmVmb3ggNCsuXFxuICovXFxuYnV0dG9uOjotbW96LWZvY3VzLWlubmVyLFxcbmlucHV0OjotbW96LWZvY3VzLWlubmVyIHtcXG4gIGJvcmRlcjogMDtcXG4gIHBhZGRpbmc6IDA7IH1cXG5cXG4vKipcXG4gKiBBZGRyZXNzIEZpcmVmb3ggNCsgc2V0dGluZyBgbGluZS1oZWlnaHRgIG9uIGBpbnB1dGAgdXNpbmcgYCFpbXBvcnRhbnRgIGluXFxuICogdGhlIFVBIHN0eWxlc2hlZXQuXFxuICovXFxuaW5wdXQge1xcbiAgbGluZS1oZWlnaHQ6IG5vcm1hbDsgfVxcblxcbi8qKlxcbiAqIEl0J3MgcmVjb21tZW5kZWQgdGhhdCB5b3UgZG9uJ3QgYXR0ZW1wdCB0byBzdHlsZSB0aGVzZSBlbGVtZW50cy5cXG4gKiBGaXJlZm94J3MgaW1wbGVtZW50YXRpb24gZG9lc24ndCByZXNwZWN0IGJveC1zaXppbmcsIHBhZGRpbmcsIG9yIHdpZHRoLlxcbiAqXFxuICogMS4gQWRkcmVzcyBib3ggc2l6aW5nIHNldCB0byBgY29udGVudC1ib3hgIGluIElFIDgvOS8xMC5cXG4gKiAyLiBSZW1vdmUgZXhjZXNzIHBhZGRpbmcgaW4gSUUgOC85LzEwLlxcbiAqL1xcbmlucHV0W3R5cGU9XFxcImNoZWNrYm94XFxcIl0sXFxuaW5wdXRbdHlwZT1cXFwicmFkaW9cXFwiXSB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgLyogMSAqL1xcbiAgcGFkZGluZzogMDtcXG4gIC8qIDIgKi8gfVxcblxcbi8qKlxcbiAqIEZpeCB0aGUgY3Vyc29yIHN0eWxlIGZvciBDaHJvbWUncyBpbmNyZW1lbnQvZGVjcmVtZW50IGJ1dHRvbnMuIEZvciBjZXJ0YWluXFxuICogYGZvbnQtc2l6ZWAgdmFsdWVzIG9mIHRoZSBgaW5wdXRgLCBpdCBjYXVzZXMgdGhlIGN1cnNvciBzdHlsZSBvZiB0aGVcXG4gKiBkZWNyZW1lbnQgYnV0dG9uIHRvIGNoYW5nZSBmcm9tIGBkZWZhdWx0YCB0byBgdGV4dGAuXFxuICovXFxuaW5wdXRbdHlwZT1cXFwibnVtYmVyXFxcIl06Oi13ZWJraXQtaW5uZXItc3Bpbi1idXR0b24sXFxuaW5wdXRbdHlwZT1cXFwibnVtYmVyXFxcIl06Oi13ZWJraXQtb3V0ZXItc3Bpbi1idXR0b24ge1xcbiAgaGVpZ2h0OiBhdXRvOyB9XFxuXFxuLyoqXFxuICogMS4gQWRkcmVzcyBgYXBwZWFyYW5jZWAgc2V0IHRvIGBzZWFyY2hmaWVsZGAgaW4gU2FmYXJpIGFuZCBDaHJvbWUuXFxuICogMi4gQWRkcmVzcyBgYm94LXNpemluZ2Agc2V0IHRvIGBib3JkZXItYm94YCBpbiBTYWZhcmkgYW5kIENocm9tZS5cXG4gKi9cXG5pbnB1dFt0eXBlPVxcXCJzZWFyY2hcXFwiXSB7XFxuICAtd2Via2l0LWFwcGVhcmFuY2U6IHRleHRmaWVsZDtcXG4gIC8qIDEgKi9cXG4gIGJveC1zaXppbmc6IGNvbnRlbnQtYm94O1xcbiAgLyogMiAqLyB9XFxuXFxuLyoqXFxuICogUmVtb3ZlIGlubmVyIHBhZGRpbmcgYW5kIHNlYXJjaCBjYW5jZWwgYnV0dG9uIGluIFNhZmFyaSBhbmQgQ2hyb21lIG9uIE9TIFguXFxuICogU2FmYXJpIChidXQgbm90IENocm9tZSkgY2xpcHMgdGhlIGNhbmNlbCBidXR0b24gd2hlbiB0aGUgc2VhcmNoIGlucHV0IGhhc1xcbiAqIHBhZGRpbmcgKGFuZCBgdGV4dGZpZWxkYCBhcHBlYXJhbmNlKS5cXG4gKi9cXG5pbnB1dFt0eXBlPVxcXCJzZWFyY2hcXFwiXTo6LXdlYmtpdC1zZWFyY2gtY2FuY2VsLWJ1dHRvbixcXG5pbnB1dFt0eXBlPVxcXCJzZWFyY2hcXFwiXTo6LXdlYmtpdC1zZWFyY2gtZGVjb3JhdGlvbiB7XFxuICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7IH1cXG5cXG4vKipcXG4gKiBEZWZpbmUgY29uc2lzdGVudCBib3JkZXIsIG1hcmdpbiwgYW5kIHBhZGRpbmcuXFxuICovXFxuZmllbGRzZXQge1xcbiAgYm9yZGVyOiAxcHggc29saWQgI2MwYzBjMDtcXG4gIG1hcmdpbjogMCAycHg7XFxuICBwYWRkaW5nOiAwLjM1ZW0gMC42MjVlbSAwLjc1ZW07IH1cXG5cXG4vKipcXG4gKiAxLiBDb3JyZWN0IGBjb2xvcmAgbm90IGJlaW5nIGluaGVyaXRlZCBpbiBJRSA4LzkvMTAvMTEuXFxuICogMi4gUmVtb3ZlIHBhZGRpbmcgc28gcGVvcGxlIGFyZW4ndCBjYXVnaHQgb3V0IGlmIHRoZXkgemVybyBvdXQgZmllbGRzZXRzLlxcbiAqL1xcbmxlZ2VuZCB7XFxuICBib3JkZXI6IDA7XFxuICAvKiAxICovXFxuICBwYWRkaW5nOiAwO1xcbiAgLyogMiAqLyB9XFxuXFxuLyoqXFxuICogUmVtb3ZlIGRlZmF1bHQgdmVydGljYWwgc2Nyb2xsYmFyIGluIElFIDgvOS8xMC8xMS5cXG4gKi9cXG50ZXh0YXJlYSB7XFxuICBvdmVyZmxvdzogYXV0bzsgfVxcblxcbi8qKlxcbiAqIERvbid0IGluaGVyaXQgdGhlIGBmb250LXdlaWdodGAgKGFwcGxpZWQgYnkgYSBydWxlIGFib3ZlKS5cXG4gKiBOT1RFOiB0aGUgZGVmYXVsdCBjYW5ub3Qgc2FmZWx5IGJlIGNoYW5nZWQgaW4gQ2hyb21lIGFuZCBTYWZhcmkgb24gT1MgWC5cXG4gKi9cXG5vcHRncm91cCB7XFxuICBmb250LXdlaWdodDogYm9sZDsgfVxcblxcbi8qIFRhYmxlc1xcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuLyoqXFxuICogUmVtb3ZlIG1vc3Qgc3BhY2luZyBiZXR3ZWVuIHRhYmxlIGNlbGxzLlxcbiAqL1xcbnRhYmxlIHtcXG4gIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XFxuICBib3JkZXItc3BhY2luZzogMDsgfVxcblxcbnRkLFxcbnRoIHtcXG4gIHBhZGRpbmc6IDA7IH1cXG5cXG4vKipcXG4gKiBTZXQgdXAgYSBkZWNlbnQgYm94IG1vZGVsIG9uIHRoZSByb290IGVsZW1lbnRcXG4gKi9cXG5odG1sIHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7IH1cXG5cXG4vKipcXG4gKiBNYWtlIGFsbCBlbGVtZW50cyBmcm9tIHRoZSBET00gaW5oZXJpdCBmcm9tIHRoZSBwYXJlbnQgYm94LXNpemluZ1xcbiAqIFNpbmNlIGAqYCBoYXMgYSBzcGVjaWZpY2l0eSBvZiAwLCBpdCBkb2VzIG5vdCBvdmVycmlkZSB0aGUgYGh0bWxgIHZhbHVlXFxuICogbWFraW5nIGFsbCBlbGVtZW50cyBpbmhlcml0aW5nIGZyb20gdGhlIHJvb3QgYm94LXNpemluZyB2YWx1ZVxcbiAqIFNlZTogaHR0cHM6Ly9jc3MtdHJpY2tzLmNvbS9pbmhlcml0aW5nLWJveC1zaXppbmctcHJvYmFibHktc2xpZ2h0bHktYmV0dGVyLWJlc3QtcHJhY3RpY2UvXFxuICovXFxuKiwgKjo6YmVmb3JlLCAqOjphZnRlciB7XFxuICBib3gtc2l6aW5nOiBpbmhlcml0OyB9XFxuXFxuLyoqXFxuICogQmFzaWMgc3R5bGVzIGZvciBsaW5rc1xcbiAqL1xcbmEge1xcbiAgY29sb3I6ICNlNTAwNTA7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7IH1cXG4gIGE6aG92ZXIsIGE6YWN0aXZlLCBhOmZvY3VzIHtcXG4gICAgY29sb3I6ICMyMjIyMjI7XFxuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lOyB9XFxuXFxuLyoqXFxuICogQmFzaWMgdHlwb2dyYXBoeSBzdHlsZSBmb3IgY29weSB0ZXh0XFxuICovXFxuYm9keSB7XFxuICBjb2xvcjogIzIyMjIyMjtcXG4gIGZvbnQ6IG5vcm1hbCAxMjUlLzEuNCBcXFwiT3BlbiBTYW5zXFxcIiwgXFxcIkhlbHZldGljYSBOZXVlIExpZ2h0XFxcIiwgXFxcIkhlbHZldGljYSBOZXVlXFxcIiwgXFxcIkhlbHZldGljYVxcXCIsIFxcXCJBcmlhbFxcXCIsIHNhbnMtc2VyaWY7IH1cXG5cXG4vKipcXG4gKiBDbGVhciBpbm5lciBmbG9hdHNcXG4gKi9cXG4uY2xlYXJmaXg6OmFmdGVyIHtcXG4gIGNsZWFyOiBib3RoO1xcbiAgY29udGVudDogJyc7XFxuICBkaXNwbGF5OiB0YWJsZTsgfVxcblxcbi8qKlxcbiAqIE1haW4gY29udGVudCBjb250YWluZXJzXFxuICogMS4gTWFrZSB0aGUgY29udGFpbmVyIGZ1bGwtd2lkdGggd2l0aCBhIG1heGltdW0gd2lkdGhcXG4gKiAyLiBDZW50ZXIgaXQgaW4gdGhlIHZpZXdwb3J0XFxuICogMy4gTGVhdmUgc29tZSBzcGFjZSBvbiB0aGUgZWRnZXMsIGVzcGVjaWFsbHkgdmFsdWFibGUgb24gc21hbGwgc2NyZWVuc1xcbiAqL1xcbi5jb250YWluZXIge1xcbiAgbWF4LXdpZHRoOiAxMTgwcHg7XFxuICAvKiAxICovXFxuICBtYXJnaW4tbGVmdDogYXV0bztcXG4gIC8qIDIgKi9cXG4gIG1hcmdpbi1yaWdodDogYXV0bztcXG4gIC8qIDIgKi9cXG4gIHBhZGRpbmctbGVmdDogMjBweDtcXG4gIC8qIDMgKi9cXG4gIHBhZGRpbmctcmlnaHQ6IDIwcHg7XFxuICAvKiAzICovXFxuICB3aWR0aDogMTAwJTtcXG4gIC8qIDEgKi8gfVxcblxcbi8qKlxcbiAqIEhpZGUgdGV4dCB3aGlsZSBtYWtpbmcgaXQgcmVhZGFibGUgZm9yIHNjcmVlbiByZWFkZXJzXFxuICogMS4gTmVlZGVkIGluIFdlYktpdC1iYXNlZCBicm93c2VycyBiZWNhdXNlIG9mIGFuIGltcGxlbWVudGF0aW9uIGJ1ZztcXG4gKiAgICBTZWU6IGh0dHBzOi8vY29kZS5nb29nbGUuY29tL3AvY2hyb21pdW0vaXNzdWVzL2RldGFpbD9pZD00NTcxNDZcXG4gKi9cXG4uaGlkZS10ZXh0IHtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICBwYWRkaW5nOiAwO1xcbiAgLyogMSAqL1xcbiAgdGV4dC1pbmRlbnQ6IDEwMSU7XFxuICB3aGl0ZS1zcGFjZTogbm93cmFwOyB9XFxuXFxuLyoqXFxuICogSGlkZSBlbGVtZW50IHdoaWxlIG1ha2luZyBpdCByZWFkYWJsZSBmb3Igc2NyZWVuIHJlYWRlcnNcXG4gKiBTaGFtZWxlc3NseSBib3Jyb3dlZCBmcm9tIEhUTUw1Qm9pbGVycGxhdGU6XFxuICogaHR0cHM6Ly9naXRodWIuY29tL2g1YnAvaHRtbDUtYm9pbGVycGxhdGUvYmxvYi9tYXN0ZXIvc3JjL2Nzcy9tYWluLmNzcyNMMTE5LUwxMzNcXG4gKi9cXG4udmlzdWFsbHktaGlkZGVuIHtcXG4gIGJvcmRlcjogMDtcXG4gIGNsaXA6IHJlY3QoMCAwIDAgMCk7XFxuICBoZWlnaHQ6IDFweDtcXG4gIG1hcmdpbjogLTFweDtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICBwYWRkaW5nOiAwO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgd2lkdGg6IDFweDsgfVxcblxcbi5pY29uLWJnIGkge1xcbiAgY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XFxuICBtYXJnaW4tYm90dG9tOiAxM3B4O1xcbiAgbWFyZ2luLXRvcDogMTJweCAhaW1wb3J0YW50O1xcbiAgZmxvYXQ6IGxlZnQ7IH1cXG5cXG5ib2R5IHtcXG4gIG92ZXJmbG93LXg6IGhpZGRlbjsgfVxcblxcbi8qIFRvZ2dsZSBTdHlsZXMgKi9cXG4jd3JhcHBlciB7XFxuICBwYWRkaW5nLWxlZnQ6IDA7XFxuICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2U7XFxuICAtbW96LXRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2U7XFxuICAtby10cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlO1xcbiAgdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZTsgfVxcblxcbiN3cmFwcGVyLnRvZ2dsZWQge1xcbiAgcGFkZGluZy1sZWZ0OiAyNTBweDsgfVxcblxcbiNzaWRlYmFyLXdyYXBwZXIge1xcbiAgei1pbmRleDogMTAwMDtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIGxlZnQ6IDI1MHB4O1xcbiAgd2lkdGg6IDA7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBtYXJnaW4tbGVmdDogLTI1MHB4O1xcbiAgb3ZlcmZsb3cteTogYXV0bztcXG4gIGJhY2tncm91bmQ6ICMwMDA7XFxuICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2U7XFxuICAtbW96LXRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2U7XFxuICAtby10cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlO1xcbiAgdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZTsgfVxcblxcbiN3cmFwcGVyLnRvZ2dsZWQgI3NpZGViYXItd3JhcHBlciB7XFxuICB3aWR0aDogMjUwcHg7IH1cXG5cXG4jcGFnZS1jb250ZW50LXdyYXBwZXIge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBwYWRkaW5nOiAxNXB4OyB9XFxuXFxuI3dyYXBwZXIudG9nZ2xlZCAjcGFnZS1jb250ZW50LXdyYXBwZXIge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgbWFyZ2luLXJpZ2h0OiAtMjUwcHg7IH1cXG5cXG4vKiBTaWRlYmFyIFN0eWxlcyAqL1xcbi5zaWRlYmFyLW5hdiB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDA7XFxuICB3aWR0aDogMjUwcHg7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgbGlzdC1zdHlsZTogbm9uZTsgfVxcblxcbi5zaWRlYmFyLW5hdiBsaSB7XFxuICB0ZXh0LWluZGVudDogMjBweDtcXG4gIGxpbmUtaGVpZ2h0OiA0MHB4OyB9XFxuXFxuLnNpZGViYXItbmF2IGxpIGEge1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICBjb2xvcjogIzk5OTk5OTsgfVxcblxcbi5zaWRlYmFyLW5hdiBsaSBhOmhvdmVyIHtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gIGNvbG9yOiAjZmZmO1xcbiAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjIpOyB9XFxuXFxuLnNpZGViYXItbmF2IGxpIGE6YWN0aXZlLFxcbi5zaWRlYmFyLW5hdiBsaSBhOmZvY3VzIHtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTsgfVxcblxcbi5zaWRlYmFyLW5hdiA+IC5zaWRlYmFyLWJyYW5kIHtcXG4gIGhlaWdodDogNjVweDtcXG4gIGZvbnQtc2l6ZTogMThweDtcXG4gIGxpbmUtaGVpZ2h0OiA2MHB4OyB9XFxuXFxuLnNpZGViYXItbmF2ID4gLnNpZGViYXItYnJhbmQgYSB7XFxuICBjb2xvcjogIzk5OTk5OTsgfVxcblxcbi5zaWRlYmFyLW5hdiA+IC5zaWRlYmFyLWJyYW5kIGE6aG92ZXIge1xcbiAgY29sb3I6ICNmZmY7XFxuICBiYWNrZ3JvdW5kOiBub25lOyB9XFxuXFxuQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XFxuICAjd3JhcHBlciB7XFxuICAgIHBhZGRpbmctbGVmdDogMDsgfVxcbiAgI3dyYXBwZXIudG9nZ2xlZCB7XFxuICAgIHBhZGRpbmctbGVmdDogMjUwcHg7IH1cXG4gICNzaWRlYmFyLXdyYXBwZXIge1xcbiAgICB3aWR0aDogMDsgfVxcbiAgI3dyYXBwZXIudG9nZ2xlZCAjc2lkZWJhci13cmFwcGVyIHtcXG4gICAgd2lkdGg6IDI1MHB4OyB9XFxuICAjcGFnZS1jb250ZW50LXdyYXBwZXIge1xcbiAgICBwYWRkaW5nOiAyMHB4O1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7IH1cXG4gICN3cmFwcGVyLnRvZ2dsZWQgI3BhZ2UtY29udGVudC13cmFwcGVyIHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBtYXJnaW4tcmlnaHQ6IDA7IH0gfVxcblxcbi5uYXZiYXItZml4ZWQtYm90dG9tIHtcXG4gIGJhY2tncm91bmQ6IGxpZ2h0Z3JleTtcXG4gIGhlaWdodDogNTBweDsgfVxcblxcbi5jaGF0Ym94IHtcXG4gIGRpc3BsYXk6IHRhYmxlOyB9XFxuICAuY2hhdGJveCBwIHtcXG4gICAgZGlzcGxheTogdGFibGUtY2VsbDtcXG4gICAgZGlzcGxheTogZmxleDsgfVxcblxcbiNjaGF0bGlzdDo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiBpbnNldCAwIDAgNnB4IHJnYmEoMCwgMCwgMCwgMC4zKTtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjVGNUY1OyB9XFxuXFxuI2NoYXRsaXN0Ojotd2Via2l0LXNjcm9sbGJhciB7XFxuICB3aWR0aDogMTJweDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNGNUY1RjU7IH1cXG5cXG4jY2hhdGxpc3Q6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAtd2Via2l0LWJveC1zaGFkb3c6IGluc2V0IDAgMCA2cHggcmdiYSgwLCAwLCAwLCAwLjMpO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzU1NTsgfVxcblxcbiNjaGF0bGlzdCB7XFxuICBvdmVyZmxvdy15OiBzY3JvbGw7XFxuICBoZWlnaHQ6IDMwMHB4O1xcbiAgbWF4LXdpZHRoOiAxMDAlO1xcbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xcbiAgd29yZC13cmFwOiBicmVhay13b3JkOyB9XFxuXFxuLmZvcm0tZ3JvdXAge1xcbiAgZGlzcGxheTogdGFibGU7IH1cXG4gIC5mb3JtLWdyb3VwIGlucHV0IHtcXG4gICAgZGlzcGxheTogdGFibGUtY2VsbDtcXG4gICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDBweCAhaW1wb3J0YW50O1xcbiAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMHB4ICFpbXBvcnRhbnQ7IH1cXG4gIC5mb3JtLWdyb3VwIHNwYW4ge1xcbiAgICBkaXNwbGF5OiB0YWJsZS1jZWxsOyB9XFxuXCIsIFwiXCJdKTtcblxuLy8gZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2Nzcy1sb2FkZXIhLi9+L3Nhc3MtbG9hZGVyIS4vc3JjL3Nhc3MvbWFpbi5zY3NzXG4vLyBtb2R1bGUgaWQgPSA3NFxuLy8gbW9kdWxlIGNodW5rcyA9IDMiXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Iiwic291cmNlUm9vdCI6IiJ9");

/***/ }

})