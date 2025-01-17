function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
import React from 'react';
import { injectIntl, intlShape } from '@edx/frontend-platform/i18n';
import { AppContext } from '@edx/frontend-platform/react';
import { getConfig } from '@edx/frontend-platform';
import { footerLogo, svgSprite, isFooterDark, footerIcons, displayCreatedByBlock } from '@edx/brand'; // eslint-disable-line import/no-unresolved
import NavLinks from './NavLinks';
import SocialLinks from './SocialLinks';
import messages from './Footer.messages';
var SiteFooter = /*#__PURE__*/function (_React$PureComponent) {
  _inherits(SiteFooter, _React$PureComponent);
  var _super = _createSuper(SiteFooter);
  // FIXME: Remove `footerLinks` in the next release, use getFooterLinks instead.
  //        According export in the brand-openedx component should be removed as well.
  function SiteFooter(props) {
    var _this;
    _classCallCheck(this, SiteFooter);
    _this = _super.call(this, props);
    _this.state = {
      getFooterLinks: null,
      footerLinks: []
    };
    return _this;
  }
  _createClass(SiteFooter, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;
      import('@edx/brand') // eslint-disable-line import/no-unresolved
      .then(function (brand) {
        _this2.setState({
          getFooterLinks: brand.getFooterLinks || null,
          footerLinks: brand.footerLinks || []
        });
      })["catch"](function (error) {
        // eslint-disable-next-line no-console
        console.warn('Failed to load @edx/brand:', error);
      });
    }
  }, {
    key: "render",
    value: function render() {
      var intl = this.props.intl;
      var _this$state = this.state,
        getFooterLinks = _this$state.getFooterLinks,
        footerLinks = _this$state.footerLinks;
      var config = getConfig();
      var footerLinksList = typeof getFooterLinks === 'function' ? getFooterLinks(config) : footerLinks;
      return /*#__PURE__*/React.createElement("footer", {
        role: "contentinfo",
        className: "footer"
      }, /*#__PURE__*/React.createElement("div", {
        className: "holder"
      }, /*#__PURE__*/React.createElement(NavLinks, {
        footerLinks: footerLinksList
      }), /*#__PURE__*/React.createElement("div", {
        className: "footer-holder"
      }, displayCreatedByBlock && /*#__PURE__*/React.createElement("div", {
        className: "footer-support"
      }, /*#__PURE__*/React.createElement("a", {
        className: "footer-support__edx",
        href: "https://open.edx.org",
        target: "_blank",
        rel: "noopener noreferrer",
        "aria-label": intl.formatMessage(messages['footer.logo.ariaLabel'])
      }, /*#__PURE__*/React.createElement("img", {
        src: isFooterDark ? 'https://files.edx.org/openedx-logos/open-edx-logo-tag-dark.png' : 'https://files.edx.org/openedx-logos/open-edx-logo-tag.png',
        alt: intl.formatMessage(messages['footer.logo.altText'])
      })), /*#__PURE__*/React.createElement("a", {
        className: "footer-support__rg",
        href: "https://raccoongang.com/",
        target: "_blank",
        rel: "noopener noreferrer"
      }, /*#__PURE__*/React.createElement("span", {
        className: "release-name"
      }, "Redwood"), "by Raccoon Gang", /*#__PURE__*/React.createElement("svg", {
        className: isFooterDark ? 'footer-support__logo' : 'footer-support__logo footer-support__logo--is-modified'
      }, /*#__PURE__*/React.createElement("use", {
        href: "".concat(svgSprite, "#logoRaccoon")
      })))), /*#__PURE__*/React.createElement(SocialLinks, {
        footerIcons: footerIcons,
        svgSprite: svgSprite
      }), /*#__PURE__*/React.createElement("div", {
        className: "footer-logo"
      }, /*#__PURE__*/React.createElement("a", {
        href: "".concat(config.LMS_BASE_URL, "/")
      }, /*#__PURE__*/React.createElement("img", {
        src: footerLogo,
        alt: intl.formatMessage(messages['footer.logo.altText'])
      }))))));
    }
  }]);
  return SiteFooter;
}(React.PureComponent);
SiteFooter.contextType = AppContext;
SiteFooter.propTypes = {
  intl: intlShape.isRequired
};
export default injectIntl(SiteFooter);
//# sourceMappingURL=Footer.js.map