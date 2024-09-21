const __vite__fileDeps=["./index-BwBxooK7.js","./index-CTXfWtVt.js","./index-B7cGsFOk.css"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
import { p as process$1, r as require$$0$1, b as global, B as Buffer, g as getDefaultExportFromCjs, c as commonjsGlobal, a as getAugmentedNamespace, _ as __vitePreload } from "./index-CTXfWtVt.js";
import { r as require$$3, e as eventsExports, W as Wg } from "./___vite-browser-external_commonjs-proxy-hJkirS0h.js";
var __spreadArray = function(to2, from2, pack) {
  if (pack || arguments.length === 2)
    for (var i3 = 0, l2 = from2.length, ar2; i3 < l2; i3++) {
      if (ar2 || !(i3 in from2)) {
        if (!ar2)
          ar2 = Array.prototype.slice.call(from2, 0, i3);
        ar2[i3] = from2[i3];
      }
    }
  return to2.concat(ar2 || Array.prototype.slice.call(from2));
};
var BrowserInfo = (
  /** @class */
  /* @__PURE__ */ function() {
    function BrowserInfo2(name, version, os2) {
      this.name = name;
      this.version = version;
      this.os = os2;
      this.type = "browser";
    }
    return BrowserInfo2;
  }()
);
var NodeInfo = (
  /** @class */
  /* @__PURE__ */ function() {
    function NodeInfo2(version) {
      this.version = version;
      this.type = "node";
      this.name = "node";
      this.os = process$1.platform;
    }
    return NodeInfo2;
  }()
);
var SearchBotDeviceInfo = (
  /** @class */
  /* @__PURE__ */ function() {
    function SearchBotDeviceInfo2(name, version, os2, bot) {
      this.name = name;
      this.version = version;
      this.os = os2;
      this.bot = bot;
      this.type = "bot-device";
    }
    return SearchBotDeviceInfo2;
  }()
);
var BotInfo = (
  /** @class */
  /* @__PURE__ */ function() {
    function BotInfo2() {
      this.type = "bot";
      this.bot = true;
      this.name = "bot";
      this.version = null;
      this.os = null;
    }
    return BotInfo2;
  }()
);
var ReactNativeInfo = (
  /** @class */
  /* @__PURE__ */ function() {
    function ReactNativeInfo2() {
      this.type = "react-native";
      this.name = "react-native";
      this.version = null;
      this.os = null;
    }
    return ReactNativeInfo2;
  }()
);
var SEARCHBOX_UA_REGEX = /alexa|bot|crawl(er|ing)|facebookexternalhit|feedburner|google web preview|nagios|postrank|pingdom|slurp|spider|yahoo!|yandex/;
var SEARCHBOT_OS_REGEX = /(nuhk|curl|Googlebot|Yammybot|Openbot|Slurp|MSNBot|Ask\ Jeeves\/Teoma|ia_archiver)/;
var REQUIRED_VERSION_PARTS = 3;
var userAgentRules = [
  ["aol", /AOLShield\/([0-9\._]+)/],
  ["edge", /Edge\/([0-9\._]+)/],
  ["edge-ios", /EdgiOS\/([0-9\._]+)/],
  ["yandexbrowser", /YaBrowser\/([0-9\._]+)/],
  ["kakaotalk", /KAKAOTALK\s([0-9\.]+)/],
  ["samsung", /SamsungBrowser\/([0-9\.]+)/],
  ["silk", /\bSilk\/([0-9._-]+)\b/],
  ["miui", /MiuiBrowser\/([0-9\.]+)$/],
  ["beaker", /BeakerBrowser\/([0-9\.]+)/],
  ["edge-chromium", /EdgA?\/([0-9\.]+)/],
  [
    "chromium-webview",
    /(?!Chrom.*OPR)wv\).*Chrom(?:e|ium)\/([0-9\.]+)(:?\s|$)/
  ],
  ["chrome", /(?!Chrom.*OPR)Chrom(?:e|ium)\/([0-9\.]+)(:?\s|$)/],
  ["phantomjs", /PhantomJS\/([0-9\.]+)(:?\s|$)/],
  ["crios", /CriOS\/([0-9\.]+)(:?\s|$)/],
  ["firefox", /Firefox\/([0-9\.]+)(?:\s|$)/],
  ["fxios", /FxiOS\/([0-9\.]+)/],
  ["opera-mini", /Opera Mini.*Version\/([0-9\.]+)/],
  ["opera", /Opera\/([0-9\.]+)(?:\s|$)/],
  ["opera", /OPR\/([0-9\.]+)(:?\s|$)/],
  ["pie", /^Microsoft Pocket Internet Explorer\/(\d+\.\d+)$/],
  ["pie", /^Mozilla\/\d\.\d+\s\(compatible;\s(?:MSP?IE|MSInternet Explorer) (\d+\.\d+);.*Windows CE.*\)$/],
  ["netfront", /^Mozilla\/\d\.\d+.*NetFront\/(\d.\d)/],
  ["ie", /Trident\/7\.0.*rv\:([0-9\.]+).*\).*Gecko$/],
  ["ie", /MSIE\s([0-9\.]+);.*Trident\/[4-7].0/],
  ["ie", /MSIE\s(7\.0)/],
  ["bb10", /BB10;\sTouch.*Version\/([0-9\.]+)/],
  ["android", /Android\s([0-9\.]+)/],
  ["ios", /Version\/([0-9\._]+).*Mobile.*Safari.*/],
  ["safari", /Version\/([0-9\._]+).*Safari/],
  ["facebook", /FB[AS]V\/([0-9\.]+)/],
  ["instagram", /Instagram\s([0-9\.]+)/],
  ["ios-webview", /AppleWebKit\/([0-9\.]+).*Mobile/],
  ["ios-webview", /AppleWebKit\/([0-9\.]+).*Gecko\)$/],
  ["curl", /^curl\/([0-9\.]+)$/],
  ["searchbot", SEARCHBOX_UA_REGEX]
];
var operatingSystemRules = [
  ["iOS", /iP(hone|od|ad)/],
  ["Android OS", /Android/],
  ["BlackBerry OS", /BlackBerry|BB10/],
  ["Windows Mobile", /IEMobile/],
  ["Amazon OS", /Kindle/],
  ["Windows 3.11", /Win16/],
  ["Windows 95", /(Windows 95)|(Win95)|(Windows_95)/],
  ["Windows 98", /(Windows 98)|(Win98)/],
  ["Windows 2000", /(Windows NT 5.0)|(Windows 2000)/],
  ["Windows XP", /(Windows NT 5.1)|(Windows XP)/],
  ["Windows Server 2003", /(Windows NT 5.2)/],
  ["Windows Vista", /(Windows NT 6.0)/],
  ["Windows 7", /(Windows NT 6.1)/],
  ["Windows 8", /(Windows NT 6.2)/],
  ["Windows 8.1", /(Windows NT 6.3)/],
  ["Windows 10", /(Windows NT 10.0)/],
  ["Windows ME", /Windows ME/],
  ["Windows CE", /Windows CE|WinCE|Microsoft Pocket Internet Explorer/],
  ["Open BSD", /OpenBSD/],
  ["Sun OS", /SunOS/],
  ["Chrome OS", /CrOS/],
  ["Linux", /(Linux)|(X11)/],
  ["Mac OS", /(Mac_PowerPC)|(Macintosh)/],
  ["QNX", /QNX/],
  ["BeOS", /BeOS/],
  ["OS/2", /OS\/2/]
];
function detect(userAgent) {
  if (typeof document === "undefined" && typeof navigator !== "undefined" && navigator.product === "ReactNative") {
    return new ReactNativeInfo();
  }
  if (typeof navigator !== "undefined") {
    return parseUserAgent(navigator.userAgent);
  }
  return getNodeVersion();
}
function matchUserAgent(ua2) {
  return ua2 !== "" && userAgentRules.reduce(function(matched, _a2) {
    var browser2 = _a2[0], regex = _a2[1];
    if (matched) {
      return matched;
    }
    var uaMatch = regex.exec(ua2);
    return !!uaMatch && [browser2, uaMatch];
  }, false);
}
function parseUserAgent(ua2) {
  var matchedRule = matchUserAgent(ua2);
  if (!matchedRule) {
    return null;
  }
  var name = matchedRule[0], match = matchedRule[1];
  if (name === "searchbot") {
    return new BotInfo();
  }
  var versionParts = match[1] && match[1].split(".").join("_").split("_").slice(0, 3);
  if (versionParts) {
    if (versionParts.length < REQUIRED_VERSION_PARTS) {
      versionParts = __spreadArray(__spreadArray([], versionParts, true), createVersionParts(REQUIRED_VERSION_PARTS - versionParts.length), true);
    }
  } else {
    versionParts = [];
  }
  var version = versionParts.join(".");
  var os2 = detectOS(ua2);
  var searchBotMatch = SEARCHBOT_OS_REGEX.exec(ua2);
  if (searchBotMatch && searchBotMatch[1]) {
    return new SearchBotDeviceInfo(name, version, os2, searchBotMatch[1]);
  }
  return new BrowserInfo(name, version, os2);
}
function detectOS(ua2) {
  for (var ii = 0, count = operatingSystemRules.length; ii < count; ii++) {
    var _a2 = operatingSystemRules[ii], os2 = _a2[0], regex = _a2[1];
    var match = regex.exec(ua2);
    if (match) {
      return os2;
    }
  }
  return null;
}
function getNodeVersion() {
  var isNode = typeof process$1 !== "undefined" && process$1.version;
  return isNode ? new NodeInfo(process$1.version.slice(1)) : null;
}
function createVersionParts(count) {
  var output = [];
  for (var ii = 0; ii < count; ii++) {
    output.push("0");
  }
  return output;
}
var cjs$3 = {};
var utils = {};
var delay = {};
var hasRequiredDelay;
function requireDelay() {
  if (hasRequiredDelay)
    return delay;
  hasRequiredDelay = 1;
  Object.defineProperty(delay, "__esModule", { value: true });
  delay.delay = void 0;
  function delay$1(timeout) {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(true);
      }, timeout);
    });
  }
  delay.delay = delay$1;
  return delay;
}
var convert = {};
var constants = {};
var misc = {};
var hasRequiredMisc;
function requireMisc() {
  if (hasRequiredMisc)
    return misc;
  hasRequiredMisc = 1;
  Object.defineProperty(misc, "__esModule", { value: true });
  misc.ONE_THOUSAND = misc.ONE_HUNDRED = void 0;
  misc.ONE_HUNDRED = 100;
  misc.ONE_THOUSAND = 1e3;
  return misc;
}
var time = {};
var hasRequiredTime;
function requireTime() {
  if (hasRequiredTime)
    return time;
  hasRequiredTime = 1;
  (function(exports) {
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.ONE_YEAR = exports.FOUR_WEEKS = exports.THREE_WEEKS = exports.TWO_WEEKS = exports.ONE_WEEK = exports.THIRTY_DAYS = exports.SEVEN_DAYS = exports.FIVE_DAYS = exports.THREE_DAYS = exports.ONE_DAY = exports.TWENTY_FOUR_HOURS = exports.TWELVE_HOURS = exports.SIX_HOURS = exports.THREE_HOURS = exports.ONE_HOUR = exports.SIXTY_MINUTES = exports.THIRTY_MINUTES = exports.TEN_MINUTES = exports.FIVE_MINUTES = exports.ONE_MINUTE = exports.SIXTY_SECONDS = exports.THIRTY_SECONDS = exports.TEN_SECONDS = exports.FIVE_SECONDS = exports.ONE_SECOND = void 0;
    exports.ONE_SECOND = 1;
    exports.FIVE_SECONDS = 5;
    exports.TEN_SECONDS = 10;
    exports.THIRTY_SECONDS = 30;
    exports.SIXTY_SECONDS = 60;
    exports.ONE_MINUTE = exports.SIXTY_SECONDS;
    exports.FIVE_MINUTES = exports.ONE_MINUTE * 5;
    exports.TEN_MINUTES = exports.ONE_MINUTE * 10;
    exports.THIRTY_MINUTES = exports.ONE_MINUTE * 30;
    exports.SIXTY_MINUTES = exports.ONE_MINUTE * 60;
    exports.ONE_HOUR = exports.SIXTY_MINUTES;
    exports.THREE_HOURS = exports.ONE_HOUR * 3;
    exports.SIX_HOURS = exports.ONE_HOUR * 6;
    exports.TWELVE_HOURS = exports.ONE_HOUR * 12;
    exports.TWENTY_FOUR_HOURS = exports.ONE_HOUR * 24;
    exports.ONE_DAY = exports.TWENTY_FOUR_HOURS;
    exports.THREE_DAYS = exports.ONE_DAY * 3;
    exports.FIVE_DAYS = exports.ONE_DAY * 5;
    exports.SEVEN_DAYS = exports.ONE_DAY * 7;
    exports.THIRTY_DAYS = exports.ONE_DAY * 30;
    exports.ONE_WEEK = exports.SEVEN_DAYS;
    exports.TWO_WEEKS = exports.ONE_WEEK * 2;
    exports.THREE_WEEKS = exports.ONE_WEEK * 3;
    exports.FOUR_WEEKS = exports.ONE_WEEK * 4;
    exports.ONE_YEAR = exports.ONE_DAY * 365;
  })(time);
  return time;
}
var hasRequiredConstants;
function requireConstants() {
  if (hasRequiredConstants)
    return constants;
  hasRequiredConstants = 1;
  (function(exports) {
    Object.defineProperty(exports, "__esModule", { value: true });
    const tslib_1 = require$$0$1;
    tslib_1.__exportStar(requireMisc(), exports);
    tslib_1.__exportStar(requireTime(), exports);
  })(constants);
  return constants;
}
var hasRequiredConvert;
function requireConvert() {
  if (hasRequiredConvert)
    return convert;
  hasRequiredConvert = 1;
  Object.defineProperty(convert, "__esModule", { value: true });
  convert.fromMiliseconds = convert.toMiliseconds = void 0;
  const constants_1 = requireConstants();
  function toMiliseconds(seconds) {
    return seconds * constants_1.ONE_THOUSAND;
  }
  convert.toMiliseconds = toMiliseconds;
  function fromMiliseconds(miliseconds) {
    return Math.floor(miliseconds / constants_1.ONE_THOUSAND);
  }
  convert.fromMiliseconds = fromMiliseconds;
  return convert;
}
var hasRequiredUtils;
function requireUtils() {
  if (hasRequiredUtils)
    return utils;
  hasRequiredUtils = 1;
  (function(exports) {
    Object.defineProperty(exports, "__esModule", { value: true });
    const tslib_1 = require$$0$1;
    tslib_1.__exportStar(requireDelay(), exports);
    tslib_1.__exportStar(requireConvert(), exports);
  })(utils);
  return utils;
}
var watch$2 = {};
var hasRequiredWatch$1;
function requireWatch$1() {
  if (hasRequiredWatch$1)
    return watch$2;
  hasRequiredWatch$1 = 1;
  Object.defineProperty(watch$2, "__esModule", { value: true });
  watch$2.Watch = void 0;
  class Watch {
    constructor() {
      this.timestamps = /* @__PURE__ */ new Map();
    }
    start(label) {
      if (this.timestamps.has(label)) {
        throw new Error(`Watch already started for label: ${label}`);
      }
      this.timestamps.set(label, { started: Date.now() });
    }
    stop(label) {
      const timestamp = this.get(label);
      if (typeof timestamp.elapsed !== "undefined") {
        throw new Error(`Watch already stopped for label: ${label}`);
      }
      const elapsed = Date.now() - timestamp.started;
      this.timestamps.set(label, { started: timestamp.started, elapsed });
    }
    get(label) {
      const timestamp = this.timestamps.get(label);
      if (typeof timestamp === "undefined") {
        throw new Error(`No timestamp found for label: ${label}`);
      }
      return timestamp;
    }
    elapsed(label) {
      const timestamp = this.get(label);
      const elapsed = timestamp.elapsed || Date.now() - timestamp.started;
      return elapsed;
    }
  }
  watch$2.Watch = Watch;
  watch$2.default = Watch;
  return watch$2;
}
var types = {};
var watch$1 = {};
var hasRequiredWatch;
function requireWatch() {
  if (hasRequiredWatch)
    return watch$1;
  hasRequiredWatch = 1;
  Object.defineProperty(watch$1, "__esModule", { value: true });
  watch$1.IWatch = void 0;
  class IWatch {
  }
  watch$1.IWatch = IWatch;
  return watch$1;
}
var hasRequiredTypes;
function requireTypes() {
  if (hasRequiredTypes)
    return types;
  hasRequiredTypes = 1;
  (function(exports) {
    Object.defineProperty(exports, "__esModule", { value: true });
    const tslib_1 = require$$0$1;
    tslib_1.__exportStar(requireWatch(), exports);
  })(types);
  return types;
}
(function(exports) {
  Object.defineProperty(exports, "__esModule", { value: true });
  const tslib_1 = require$$0$1;
  tslib_1.__exportStar(requireUtils(), exports);
  tslib_1.__exportStar(requireWatch$1(), exports);
  tslib_1.__exportStar(requireTypes(), exports);
  tslib_1.__exportStar(requireConstants(), exports);
})(cjs$3);
var cjs$2 = {};
Object.defineProperty(cjs$2, "__esModule", { value: true });
cjs$2.getLocalStorage = cjs$2.getLocalStorageOrThrow = cjs$2.getCrypto = cjs$2.getCryptoOrThrow = getLocation_1 = cjs$2.getLocation = cjs$2.getLocationOrThrow = getNavigator_1 = cjs$2.getNavigator = cjs$2.getNavigatorOrThrow = getDocument_1 = cjs$2.getDocument = cjs$2.getDocumentOrThrow = cjs$2.getFromWindowOrThrow = cjs$2.getFromWindow = void 0;
function getFromWindow(name) {
  let res = void 0;
  if (typeof window !== "undefined" && typeof window[name] !== "undefined") {
    res = window[name];
  }
  return res;
}
cjs$2.getFromWindow = getFromWindow;
function getFromWindowOrThrow(name) {
  const res = getFromWindow(name);
  if (!res) {
    throw new Error(`${name} is not defined in Window`);
  }
  return res;
}
cjs$2.getFromWindowOrThrow = getFromWindowOrThrow;
function getDocumentOrThrow() {
  return getFromWindowOrThrow("document");
}
cjs$2.getDocumentOrThrow = getDocumentOrThrow;
function getDocument() {
  return getFromWindow("document");
}
var getDocument_1 = cjs$2.getDocument = getDocument;
function getNavigatorOrThrow() {
  return getFromWindowOrThrow("navigator");
}
cjs$2.getNavigatorOrThrow = getNavigatorOrThrow;
function getNavigator() {
  return getFromWindow("navigator");
}
var getNavigator_1 = cjs$2.getNavigator = getNavigator;
function getLocationOrThrow() {
  return getFromWindowOrThrow("location");
}
cjs$2.getLocationOrThrow = getLocationOrThrow;
function getLocation() {
  return getFromWindow("location");
}
var getLocation_1 = cjs$2.getLocation = getLocation;
function getCryptoOrThrow() {
  return getFromWindowOrThrow("crypto");
}
cjs$2.getCryptoOrThrow = getCryptoOrThrow;
function getCrypto() {
  return getFromWindow("crypto");
}
cjs$2.getCrypto = getCrypto;
function getLocalStorageOrThrow() {
  return getFromWindowOrThrow("localStorage");
}
cjs$2.getLocalStorageOrThrow = getLocalStorageOrThrow;
function getLocalStorage() {
  return getFromWindow("localStorage");
}
cjs$2.getLocalStorage = getLocalStorage;
var cjs$1 = {};
Object.defineProperty(cjs$1, "__esModule", { value: true });
var getWindowMetadata_1 = cjs$1.getWindowMetadata = void 0;
const window_getters_1 = cjs$2;
function getWindowMetadata() {
  let doc;
  let loc;
  try {
    doc = window_getters_1.getDocumentOrThrow();
    loc = window_getters_1.getLocationOrThrow();
  } catch (e2) {
    return null;
  }
  function getIcons() {
    const links = doc.getElementsByTagName("link");
    const icons2 = [];
    for (let i3 = 0; i3 < links.length; i3++) {
      const link = links[i3];
      const rel = link.getAttribute("rel");
      if (rel) {
        if (rel.toLowerCase().indexOf("icon") > -1) {
          const href = link.getAttribute("href");
          if (href) {
            if (href.toLowerCase().indexOf("https:") === -1 && href.toLowerCase().indexOf("http:") === -1 && href.indexOf("//") !== 0) {
              let absoluteHref = loc.protocol + "//" + loc.host;
              if (href.indexOf("/") === 0) {
                absoluteHref += href;
              } else {
                const path = loc.pathname.split("/");
                path.pop();
                const finalPath = path.join("/");
                absoluteHref += finalPath + "/" + href;
              }
              icons2.push(absoluteHref);
            } else if (href.indexOf("//") === 0) {
              const absoluteUrl = loc.protocol + href;
              icons2.push(absoluteUrl);
            } else {
              icons2.push(href);
            }
          }
        }
      }
    }
    return icons2;
  }
  function getWindowMetadataOfAny(...args) {
    const metaTags = doc.getElementsByTagName("meta");
    for (let i3 = 0; i3 < metaTags.length; i3++) {
      const tag = metaTags[i3];
      const attributes = ["itemprop", "property", "name"].map((target) => tag.getAttribute(target)).filter((attr) => {
        if (attr) {
          return args.includes(attr);
        }
        return false;
      });
      if (attributes.length && attributes) {
        const content = tag.getAttribute("content");
        if (content) {
          return content;
        }
      }
    }
    return "";
  }
  function getName() {
    let name2 = getWindowMetadataOfAny("name", "og:site_name", "og:title", "twitter:title");
    if (!name2) {
      name2 = doc.title;
    }
    return name2;
  }
  function getDescription() {
    const description2 = getWindowMetadataOfAny("description", "og:description", "twitter:description", "keywords");
    return description2;
  }
  const name = getName();
  const description = getDescription();
  const url = loc.origin;
  const icons = getIcons();
  const meta = {
    description,
    url,
    icons,
    name
  };
  return meta;
}
getWindowMetadata_1 = cjs$1.getWindowMetadata = getWindowMetadata;
var queryString = {};
var strictUriEncode = (str) => encodeURIComponent(str).replace(/[!'()*]/g, (x2) => `%${x2.charCodeAt(0).toString(16).toUpperCase()}`);
var token = "%[a-f0-9]{2}";
var singleMatcher = new RegExp("(" + token + ")|([^%]+?)", "gi");
var multiMatcher = new RegExp("(" + token + ")+", "gi");
function decodeComponents(components, split) {
  try {
    return [decodeURIComponent(components.join(""))];
  } catch (err) {
  }
  if (components.length === 1) {
    return components;
  }
  split = split || 1;
  var left = components.slice(0, split);
  var right = components.slice(split);
  return Array.prototype.concat.call([], decodeComponents(left), decodeComponents(right));
}
function decode$2(input) {
  try {
    return decodeURIComponent(input);
  } catch (err) {
    var tokens = input.match(singleMatcher) || [];
    for (var i3 = 1; i3 < tokens.length; i3++) {
      input = decodeComponents(tokens, i3).join("");
      tokens = input.match(singleMatcher) || [];
    }
    return input;
  }
}
function customDecodeURIComponent(input) {
  var replaceMap = {
    "%FE%FF": "��",
    "%FF%FE": "��"
  };
  var match = multiMatcher.exec(input);
  while (match) {
    try {
      replaceMap[match[0]] = decodeURIComponent(match[0]);
    } catch (err) {
      var result = decode$2(match[0]);
      if (result !== match[0]) {
        replaceMap[match[0]] = result;
      }
    }
    match = multiMatcher.exec(input);
  }
  replaceMap["%C2"] = "�";
  var entries = Object.keys(replaceMap);
  for (var i3 = 0; i3 < entries.length; i3++) {
    var key = entries[i3];
    input = input.replace(new RegExp(key, "g"), replaceMap[key]);
  }
  return input;
}
var decodeUriComponent = function(encodedURI) {
  if (typeof encodedURI !== "string") {
    throw new TypeError("Expected `encodedURI` to be of type `string`, got `" + typeof encodedURI + "`");
  }
  try {
    encodedURI = encodedURI.replace(/\+/g, " ");
    return decodeURIComponent(encodedURI);
  } catch (err) {
    return customDecodeURIComponent(encodedURI);
  }
};
var splitOnFirst = (string2, separator) => {
  if (!(typeof string2 === "string" && typeof separator === "string")) {
    throw new TypeError("Expected the arguments to be of type `string`");
  }
  if (separator === "") {
    return [string2];
  }
  const separatorIndex = string2.indexOf(separator);
  if (separatorIndex === -1) {
    return [string2];
  }
  return [
    string2.slice(0, separatorIndex),
    string2.slice(separatorIndex + separator.length)
  ];
};
var filterObj = function(obj, predicate) {
  var ret = {};
  var keys2 = Object.keys(obj);
  var isArr = Array.isArray(predicate);
  for (var i3 = 0; i3 < keys2.length; i3++) {
    var key = keys2[i3];
    var val = obj[key];
    if (isArr ? predicate.indexOf(key) !== -1 : predicate(key, val, obj)) {
      ret[key] = val;
    }
  }
  return ret;
};
(function(exports) {
  const strictUriEncode$1 = strictUriEncode;
  const decodeComponent = decodeUriComponent;
  const splitOnFirst$1 = splitOnFirst;
  const filterObject = filterObj;
  const isNullOrUndefined = (value) => value === null || value === void 0;
  const encodeFragmentIdentifier = Symbol("encodeFragmentIdentifier");
  function encoderForArrayFormat(options) {
    switch (options.arrayFormat) {
      case "index":
        return (key) => (result, value) => {
          const index = result.length;
          if (value === void 0 || options.skipNull && value === null || options.skipEmptyString && value === "") {
            return result;
          }
          if (value === null) {
            return [...result, [encode2(key, options), "[", index, "]"].join("")];
          }
          return [
            ...result,
            [encode2(key, options), "[", encode2(index, options), "]=", encode2(value, options)].join("")
          ];
        };
      case "bracket":
        return (key) => (result, value) => {
          if (value === void 0 || options.skipNull && value === null || options.skipEmptyString && value === "") {
            return result;
          }
          if (value === null) {
            return [...result, [encode2(key, options), "[]"].join("")];
          }
          return [...result, [encode2(key, options), "[]=", encode2(value, options)].join("")];
        };
      case "colon-list-separator":
        return (key) => (result, value) => {
          if (value === void 0 || options.skipNull && value === null || options.skipEmptyString && value === "") {
            return result;
          }
          if (value === null) {
            return [...result, [encode2(key, options), ":list="].join("")];
          }
          return [...result, [encode2(key, options), ":list=", encode2(value, options)].join("")];
        };
      case "comma":
      case "separator":
      case "bracket-separator": {
        const keyValueSep = options.arrayFormat === "bracket-separator" ? "[]=" : "=";
        return (key) => (result, value) => {
          if (value === void 0 || options.skipNull && value === null || options.skipEmptyString && value === "") {
            return result;
          }
          value = value === null ? "" : value;
          if (result.length === 0) {
            return [[encode2(key, options), keyValueSep, encode2(value, options)].join("")];
          }
          return [[result, encode2(value, options)].join(options.arrayFormatSeparator)];
        };
      }
      default:
        return (key) => (result, value) => {
          if (value === void 0 || options.skipNull && value === null || options.skipEmptyString && value === "") {
            return result;
          }
          if (value === null) {
            return [...result, encode2(key, options)];
          }
          return [...result, [encode2(key, options), "=", encode2(value, options)].join("")];
        };
    }
  }
  function parserForArrayFormat(options) {
    let result;
    switch (options.arrayFormat) {
      case "index":
        return (key, value, accumulator) => {
          result = /\[(\d*)\]$/.exec(key);
          key = key.replace(/\[\d*\]$/, "");
          if (!result) {
            accumulator[key] = value;
            return;
          }
          if (accumulator[key] === void 0) {
            accumulator[key] = {};
          }
          accumulator[key][result[1]] = value;
        };
      case "bracket":
        return (key, value, accumulator) => {
          result = /(\[\])$/.exec(key);
          key = key.replace(/\[\]$/, "");
          if (!result) {
            accumulator[key] = value;
            return;
          }
          if (accumulator[key] === void 0) {
            accumulator[key] = [value];
            return;
          }
          accumulator[key] = [].concat(accumulator[key], value);
        };
      case "colon-list-separator":
        return (key, value, accumulator) => {
          result = /(:list)$/.exec(key);
          key = key.replace(/:list$/, "");
          if (!result) {
            accumulator[key] = value;
            return;
          }
          if (accumulator[key] === void 0) {
            accumulator[key] = [value];
            return;
          }
          accumulator[key] = [].concat(accumulator[key], value);
        };
      case "comma":
      case "separator":
        return (key, value, accumulator) => {
          const isArray = typeof value === "string" && value.includes(options.arrayFormatSeparator);
          const isEncodedArray = typeof value === "string" && !isArray && decode2(value, options).includes(options.arrayFormatSeparator);
          value = isEncodedArray ? decode2(value, options) : value;
          const newValue = isArray || isEncodedArray ? value.split(options.arrayFormatSeparator).map((item) => decode2(item, options)) : value === null ? value : decode2(value, options);
          accumulator[key] = newValue;
        };
      case "bracket-separator":
        return (key, value, accumulator) => {
          const isArray = /(\[\])$/.test(key);
          key = key.replace(/\[\]$/, "");
          if (!isArray) {
            accumulator[key] = value ? decode2(value, options) : value;
            return;
          }
          const arrayValue = value === null ? [] : value.split(options.arrayFormatSeparator).map((item) => decode2(item, options));
          if (accumulator[key] === void 0) {
            accumulator[key] = arrayValue;
            return;
          }
          accumulator[key] = [].concat(accumulator[key], arrayValue);
        };
      default:
        return (key, value, accumulator) => {
          if (accumulator[key] === void 0) {
            accumulator[key] = value;
            return;
          }
          accumulator[key] = [].concat(accumulator[key], value);
        };
    }
  }
  function validateArrayFormatSeparator(value) {
    if (typeof value !== "string" || value.length !== 1) {
      throw new TypeError("arrayFormatSeparator must be single character string");
    }
  }
  function encode2(value, options) {
    if (options.encode) {
      return options.strict ? strictUriEncode$1(value) : encodeURIComponent(value);
    }
    return value;
  }
  function decode2(value, options) {
    if (options.decode) {
      return decodeComponent(value);
    }
    return value;
  }
  function keysSorter(input) {
    if (Array.isArray(input)) {
      return input.sort();
    }
    if (typeof input === "object") {
      return keysSorter(Object.keys(input)).sort((a3, b3) => Number(a3) - Number(b3)).map((key) => input[key]);
    }
    return input;
  }
  function removeHash(input) {
    const hashStart = input.indexOf("#");
    if (hashStart !== -1) {
      input = input.slice(0, hashStart);
    }
    return input;
  }
  function getHash(url) {
    let hash2 = "";
    const hashStart = url.indexOf("#");
    if (hashStart !== -1) {
      hash2 = url.slice(hashStart);
    }
    return hash2;
  }
  function extract(input) {
    input = removeHash(input);
    const queryStart = input.indexOf("?");
    if (queryStart === -1) {
      return "";
    }
    return input.slice(queryStart + 1);
  }
  function parseValue(value, options) {
    if (options.parseNumbers && !Number.isNaN(Number(value)) && (typeof value === "string" && value.trim() !== "")) {
      value = Number(value);
    } else if (options.parseBooleans && value !== null && (value.toLowerCase() === "true" || value.toLowerCase() === "false")) {
      value = value.toLowerCase() === "true";
    }
    return value;
  }
  function parse(query, options) {
    options = Object.assign({
      decode: true,
      sort: true,
      arrayFormat: "none",
      arrayFormatSeparator: ",",
      parseNumbers: false,
      parseBooleans: false
    }, options);
    validateArrayFormatSeparator(options.arrayFormatSeparator);
    const formatter = parserForArrayFormat(options);
    const ret = /* @__PURE__ */ Object.create(null);
    if (typeof query !== "string") {
      return ret;
    }
    query = query.trim().replace(/^[?#&]/, "");
    if (!query) {
      return ret;
    }
    for (const param of query.split("&")) {
      if (param === "") {
        continue;
      }
      let [key, value] = splitOnFirst$1(options.decode ? param.replace(/\+/g, " ") : param, "=");
      value = value === void 0 ? null : ["comma", "separator", "bracket-separator"].includes(options.arrayFormat) ? value : decode2(value, options);
      formatter(decode2(key, options), value, ret);
    }
    for (const key of Object.keys(ret)) {
      const value = ret[key];
      if (typeof value === "object" && value !== null) {
        for (const k2 of Object.keys(value)) {
          value[k2] = parseValue(value[k2], options);
        }
      } else {
        ret[key] = parseValue(value, options);
      }
    }
    if (options.sort === false) {
      return ret;
    }
    return (options.sort === true ? Object.keys(ret).sort() : Object.keys(ret).sort(options.sort)).reduce((result, key) => {
      const value = ret[key];
      if (Boolean(value) && typeof value === "object" && !Array.isArray(value)) {
        result[key] = keysSorter(value);
      } else {
        result[key] = value;
      }
      return result;
    }, /* @__PURE__ */ Object.create(null));
  }
  exports.extract = extract;
  exports.parse = parse;
  exports.stringify = (object, options) => {
    if (!object) {
      return "";
    }
    options = Object.assign({
      encode: true,
      strict: true,
      arrayFormat: "none",
      arrayFormatSeparator: ","
    }, options);
    validateArrayFormatSeparator(options.arrayFormatSeparator);
    const shouldFilter = (key) => options.skipNull && isNullOrUndefined(object[key]) || options.skipEmptyString && object[key] === "";
    const formatter = encoderForArrayFormat(options);
    const objectCopy = {};
    for (const key of Object.keys(object)) {
      if (!shouldFilter(key)) {
        objectCopy[key] = object[key];
      }
    }
    const keys2 = Object.keys(objectCopy);
    if (options.sort !== false) {
      keys2.sort(options.sort);
    }
    return keys2.map((key) => {
      const value = object[key];
      if (value === void 0) {
        return "";
      }
      if (value === null) {
        return encode2(key, options);
      }
      if (Array.isArray(value)) {
        if (value.length === 0 && options.arrayFormat === "bracket-separator") {
          return encode2(key, options) + "[]";
        }
        return value.reduce(formatter(key), []).join("&");
      }
      return encode2(key, options) + "=" + encode2(value, options);
    }).filter((x2) => x2.length > 0).join("&");
  };
  exports.parseUrl = (url, options) => {
    options = Object.assign({
      decode: true
    }, options);
    const [url_, hash2] = splitOnFirst$1(url, "#");
    return Object.assign(
      {
        url: url_.split("?")[0] || "",
        query: parse(extract(url), options)
      },
      options && options.parseFragmentIdentifier && hash2 ? { fragmentIdentifier: decode2(hash2, options) } : {}
    );
  };
  exports.stringifyUrl = (object, options) => {
    options = Object.assign({
      encode: true,
      strict: true,
      [encodeFragmentIdentifier]: true
    }, options);
    const url = removeHash(object.url).split("?")[0] || "";
    const queryFromUrl = exports.extract(object.url);
    const parsedQueryFromUrl = exports.parse(queryFromUrl, { sort: false });
    const query = Object.assign(parsedQueryFromUrl, object.query);
    let queryString2 = exports.stringify(query, options);
    if (queryString2) {
      queryString2 = `?${queryString2}`;
    }
    let hash2 = getHash(object.url);
    if (object.fragmentIdentifier) {
      hash2 = `#${options[encodeFragmentIdentifier] ? encode2(object.fragmentIdentifier, options) : object.fragmentIdentifier}`;
    }
    return `${url}${queryString2}${hash2}`;
  };
  exports.pick = (input, filter, options) => {
    options = Object.assign({
      parseFragmentIdentifier: true,
      [encodeFragmentIdentifier]: false
    }, options);
    const { url, query, fragmentIdentifier } = exports.parseUrl(input, options);
    return exports.stringifyUrl({
      url,
      query: filterObject(query, filter),
      fragmentIdentifier
    }, options);
  };
  exports.exclude = (input, filter, options) => {
    const exclusionFilter = Array.isArray(filter) ? (key) => !filter.includes(key) : (key, value) => !filter(key, value);
    return exports.pick(input, exclusionFilter, options);
  };
})(queryString);
var chacha20poly1305 = {};
var chacha = {};
var binary = {};
var int = {};
(function(exports) {
  Object.defineProperty(exports, "__esModule", { value: true });
  function imulShim(a3, b3) {
    var ah2 = a3 >>> 16 & 65535, al = a3 & 65535;
    var bh = b3 >>> 16 & 65535, bl = b3 & 65535;
    return al * bl + (ah2 * bl + al * bh << 16 >>> 0) | 0;
  }
  exports.mul = Math.imul || imulShim;
  function add(a3, b3) {
    return a3 + b3 | 0;
  }
  exports.add = add;
  function sub(a3, b3) {
    return a3 - b3 | 0;
  }
  exports.sub = sub;
  function rotl(x2, n4) {
    return x2 << n4 | x2 >>> 32 - n4;
  }
  exports.rotl = rotl;
  function rotr(x2, n4) {
    return x2 << 32 - n4 | x2 >>> n4;
  }
  exports.rotr = rotr;
  function isIntegerShim(n4) {
    return typeof n4 === "number" && isFinite(n4) && Math.floor(n4) === n4;
  }
  exports.isInteger = Number.isInteger || isIntegerShim;
  exports.MAX_SAFE_INTEGER = 9007199254740991;
  exports.isSafeInteger = function(n4) {
    return exports.isInteger(n4) && (n4 >= -exports.MAX_SAFE_INTEGER && n4 <= exports.MAX_SAFE_INTEGER);
  };
})(int);
Object.defineProperty(binary, "__esModule", { value: true });
var int_1 = int;
function readInt16BE(array, offset) {
  if (offset === void 0) {
    offset = 0;
  }
  return (array[offset + 0] << 8 | array[offset + 1]) << 16 >> 16;
}
binary.readInt16BE = readInt16BE;
function readUint16BE(array, offset) {
  if (offset === void 0) {
    offset = 0;
  }
  return (array[offset + 0] << 8 | array[offset + 1]) >>> 0;
}
binary.readUint16BE = readUint16BE;
function readInt16LE(array, offset) {
  if (offset === void 0) {
    offset = 0;
  }
  return (array[offset + 1] << 8 | array[offset]) << 16 >> 16;
}
binary.readInt16LE = readInt16LE;
function readUint16LE(array, offset) {
  if (offset === void 0) {
    offset = 0;
  }
  return (array[offset + 1] << 8 | array[offset]) >>> 0;
}
binary.readUint16LE = readUint16LE;
function writeUint16BE(value, out, offset) {
  if (out === void 0) {
    out = new Uint8Array(2);
  }
  if (offset === void 0) {
    offset = 0;
  }
  out[offset + 0] = value >>> 8;
  out[offset + 1] = value >>> 0;
  return out;
}
binary.writeUint16BE = writeUint16BE;
binary.writeInt16BE = writeUint16BE;
function writeUint16LE(value, out, offset) {
  if (out === void 0) {
    out = new Uint8Array(2);
  }
  if (offset === void 0) {
    offset = 0;
  }
  out[offset + 0] = value >>> 0;
  out[offset + 1] = value >>> 8;
  return out;
}
binary.writeUint16LE = writeUint16LE;
binary.writeInt16LE = writeUint16LE;
function readInt32BE(array, offset) {
  if (offset === void 0) {
    offset = 0;
  }
  return array[offset] << 24 | array[offset + 1] << 16 | array[offset + 2] << 8 | array[offset + 3];
}
binary.readInt32BE = readInt32BE;
function readUint32BE(array, offset) {
  if (offset === void 0) {
    offset = 0;
  }
  return (array[offset] << 24 | array[offset + 1] << 16 | array[offset + 2] << 8 | array[offset + 3]) >>> 0;
}
binary.readUint32BE = readUint32BE;
function readInt32LE(array, offset) {
  if (offset === void 0) {
    offset = 0;
  }
  return array[offset + 3] << 24 | array[offset + 2] << 16 | array[offset + 1] << 8 | array[offset];
}
binary.readInt32LE = readInt32LE;
function readUint32LE(array, offset) {
  if (offset === void 0) {
    offset = 0;
  }
  return (array[offset + 3] << 24 | array[offset + 2] << 16 | array[offset + 1] << 8 | array[offset]) >>> 0;
}
binary.readUint32LE = readUint32LE;
function writeUint32BE(value, out, offset) {
  if (out === void 0) {
    out = new Uint8Array(4);
  }
  if (offset === void 0) {
    offset = 0;
  }
  out[offset + 0] = value >>> 24;
  out[offset + 1] = value >>> 16;
  out[offset + 2] = value >>> 8;
  out[offset + 3] = value >>> 0;
  return out;
}
binary.writeUint32BE = writeUint32BE;
binary.writeInt32BE = writeUint32BE;
function writeUint32LE(value, out, offset) {
  if (out === void 0) {
    out = new Uint8Array(4);
  }
  if (offset === void 0) {
    offset = 0;
  }
  out[offset + 0] = value >>> 0;
  out[offset + 1] = value >>> 8;
  out[offset + 2] = value >>> 16;
  out[offset + 3] = value >>> 24;
  return out;
}
binary.writeUint32LE = writeUint32LE;
binary.writeInt32LE = writeUint32LE;
function readInt64BE(array, offset) {
  if (offset === void 0) {
    offset = 0;
  }
  var hi = readInt32BE(array, offset);
  var lo2 = readInt32BE(array, offset + 4);
  return hi * 4294967296 + lo2 - (lo2 >> 31) * 4294967296;
}
binary.readInt64BE = readInt64BE;
function readUint64BE(array, offset) {
  if (offset === void 0) {
    offset = 0;
  }
  var hi = readUint32BE(array, offset);
  var lo2 = readUint32BE(array, offset + 4);
  return hi * 4294967296 + lo2;
}
binary.readUint64BE = readUint64BE;
function readInt64LE(array, offset) {
  if (offset === void 0) {
    offset = 0;
  }
  var lo2 = readInt32LE(array, offset);
  var hi = readInt32LE(array, offset + 4);
  return hi * 4294967296 + lo2 - (lo2 >> 31) * 4294967296;
}
binary.readInt64LE = readInt64LE;
function readUint64LE(array, offset) {
  if (offset === void 0) {
    offset = 0;
  }
  var lo2 = readUint32LE(array, offset);
  var hi = readUint32LE(array, offset + 4);
  return hi * 4294967296 + lo2;
}
binary.readUint64LE = readUint64LE;
function writeUint64BE(value, out, offset) {
  if (out === void 0) {
    out = new Uint8Array(8);
  }
  if (offset === void 0) {
    offset = 0;
  }
  writeUint32BE(value / 4294967296 >>> 0, out, offset);
  writeUint32BE(value >>> 0, out, offset + 4);
  return out;
}
binary.writeUint64BE = writeUint64BE;
binary.writeInt64BE = writeUint64BE;
function writeUint64LE(value, out, offset) {
  if (out === void 0) {
    out = new Uint8Array(8);
  }
  if (offset === void 0) {
    offset = 0;
  }
  writeUint32LE(value >>> 0, out, offset);
  writeUint32LE(value / 4294967296 >>> 0, out, offset + 4);
  return out;
}
binary.writeUint64LE = writeUint64LE;
binary.writeInt64LE = writeUint64LE;
function readUintBE(bitLength, array, offset) {
  if (offset === void 0) {
    offset = 0;
  }
  if (bitLength % 8 !== 0) {
    throw new Error("readUintBE supports only bitLengths divisible by 8");
  }
  if (bitLength / 8 > array.length - offset) {
    throw new Error("readUintBE: array is too short for the given bitLength");
  }
  var result = 0;
  var mul = 1;
  for (var i3 = bitLength / 8 + offset - 1; i3 >= offset; i3--) {
    result += array[i3] * mul;
    mul *= 256;
  }
  return result;
}
binary.readUintBE = readUintBE;
function readUintLE(bitLength, array, offset) {
  if (offset === void 0) {
    offset = 0;
  }
  if (bitLength % 8 !== 0) {
    throw new Error("readUintLE supports only bitLengths divisible by 8");
  }
  if (bitLength / 8 > array.length - offset) {
    throw new Error("readUintLE: array is too short for the given bitLength");
  }
  var result = 0;
  var mul = 1;
  for (var i3 = offset; i3 < offset + bitLength / 8; i3++) {
    result += array[i3] * mul;
    mul *= 256;
  }
  return result;
}
binary.readUintLE = readUintLE;
function writeUintBE(bitLength, value, out, offset) {
  if (out === void 0) {
    out = new Uint8Array(bitLength / 8);
  }
  if (offset === void 0) {
    offset = 0;
  }
  if (bitLength % 8 !== 0) {
    throw new Error("writeUintBE supports only bitLengths divisible by 8");
  }
  if (!int_1.isSafeInteger(value)) {
    throw new Error("writeUintBE value must be an integer");
  }
  var div = 1;
  for (var i3 = bitLength / 8 + offset - 1; i3 >= offset; i3--) {
    out[i3] = value / div & 255;
    div *= 256;
  }
  return out;
}
binary.writeUintBE = writeUintBE;
function writeUintLE(bitLength, value, out, offset) {
  if (out === void 0) {
    out = new Uint8Array(bitLength / 8);
  }
  if (offset === void 0) {
    offset = 0;
  }
  if (bitLength % 8 !== 0) {
    throw new Error("writeUintLE supports only bitLengths divisible by 8");
  }
  if (!int_1.isSafeInteger(value)) {
    throw new Error("writeUintLE value must be an integer");
  }
  var div = 1;
  for (var i3 = offset; i3 < offset + bitLength / 8; i3++) {
    out[i3] = value / div & 255;
    div *= 256;
  }
  return out;
}
binary.writeUintLE = writeUintLE;
function readFloat32BE(array, offset) {
  if (offset === void 0) {
    offset = 0;
  }
  var view = new DataView(array.buffer, array.byteOffset, array.byteLength);
  return view.getFloat32(offset);
}
binary.readFloat32BE = readFloat32BE;
function readFloat32LE(array, offset) {
  if (offset === void 0) {
    offset = 0;
  }
  var view = new DataView(array.buffer, array.byteOffset, array.byteLength);
  return view.getFloat32(offset, true);
}
binary.readFloat32LE = readFloat32LE;
function readFloat64BE(array, offset) {
  if (offset === void 0) {
    offset = 0;
  }
  var view = new DataView(array.buffer, array.byteOffset, array.byteLength);
  return view.getFloat64(offset);
}
binary.readFloat64BE = readFloat64BE;
function readFloat64LE(array, offset) {
  if (offset === void 0) {
    offset = 0;
  }
  var view = new DataView(array.buffer, array.byteOffset, array.byteLength);
  return view.getFloat64(offset, true);
}
binary.readFloat64LE = readFloat64LE;
function writeFloat32BE(value, out, offset) {
  if (out === void 0) {
    out = new Uint8Array(4);
  }
  if (offset === void 0) {
    offset = 0;
  }
  var view = new DataView(out.buffer, out.byteOffset, out.byteLength);
  view.setFloat32(offset, value);
  return out;
}
binary.writeFloat32BE = writeFloat32BE;
function writeFloat32LE(value, out, offset) {
  if (out === void 0) {
    out = new Uint8Array(4);
  }
  if (offset === void 0) {
    offset = 0;
  }
  var view = new DataView(out.buffer, out.byteOffset, out.byteLength);
  view.setFloat32(offset, value, true);
  return out;
}
binary.writeFloat32LE = writeFloat32LE;
function writeFloat64BE(value, out, offset) {
  if (out === void 0) {
    out = new Uint8Array(8);
  }
  if (offset === void 0) {
    offset = 0;
  }
  var view = new DataView(out.buffer, out.byteOffset, out.byteLength);
  view.setFloat64(offset, value);
  return out;
}
binary.writeFloat64BE = writeFloat64BE;
function writeFloat64LE(value, out, offset) {
  if (out === void 0) {
    out = new Uint8Array(8);
  }
  if (offset === void 0) {
    offset = 0;
  }
  var view = new DataView(out.buffer, out.byteOffset, out.byteLength);
  view.setFloat64(offset, value, true);
  return out;
}
binary.writeFloat64LE = writeFloat64LE;
var wipe$1 = {};
Object.defineProperty(wipe$1, "__esModule", { value: true });
function wipe(array) {
  for (var i3 = 0; i3 < array.length; i3++) {
    array[i3] = 0;
  }
  return array;
}
wipe$1.wipe = wipe;
Object.defineProperty(chacha, "__esModule", { value: true });
var binary_1 = binary;
var wipe_1$3 = wipe$1;
var ROUNDS = 20;
function core(out, input, key) {
  var j02 = 1634760805;
  var j1 = 857760878;
  var j2 = 2036477234;
  var j3 = 1797285236;
  var j4 = key[3] << 24 | key[2] << 16 | key[1] << 8 | key[0];
  var j5 = key[7] << 24 | key[6] << 16 | key[5] << 8 | key[4];
  var j6 = key[11] << 24 | key[10] << 16 | key[9] << 8 | key[8];
  var j7 = key[15] << 24 | key[14] << 16 | key[13] << 8 | key[12];
  var j8 = key[19] << 24 | key[18] << 16 | key[17] << 8 | key[16];
  var j9 = key[23] << 24 | key[22] << 16 | key[21] << 8 | key[20];
  var j10 = key[27] << 24 | key[26] << 16 | key[25] << 8 | key[24];
  var j11 = key[31] << 24 | key[30] << 16 | key[29] << 8 | key[28];
  var j12 = input[3] << 24 | input[2] << 16 | input[1] << 8 | input[0];
  var j13 = input[7] << 24 | input[6] << 16 | input[5] << 8 | input[4];
  var j14 = input[11] << 24 | input[10] << 16 | input[9] << 8 | input[8];
  var j15 = input[15] << 24 | input[14] << 16 | input[13] << 8 | input[12];
  var x02 = j02;
  var x1 = j1;
  var x2 = j2;
  var x3 = j3;
  var x4 = j4;
  var x5 = j5;
  var x6 = j6;
  var x7 = j7;
  var x8 = j8;
  var x9 = j9;
  var x10 = j10;
  var x11 = j11;
  var x12 = j12;
  var x13 = j13;
  var x14 = j14;
  var x15 = j15;
  for (var i3 = 0; i3 < ROUNDS; i3 += 2) {
    x02 = x02 + x4 | 0;
    x12 ^= x02;
    x12 = x12 >>> 32 - 16 | x12 << 16;
    x8 = x8 + x12 | 0;
    x4 ^= x8;
    x4 = x4 >>> 32 - 12 | x4 << 12;
    x1 = x1 + x5 | 0;
    x13 ^= x1;
    x13 = x13 >>> 32 - 16 | x13 << 16;
    x9 = x9 + x13 | 0;
    x5 ^= x9;
    x5 = x5 >>> 32 - 12 | x5 << 12;
    x2 = x2 + x6 | 0;
    x14 ^= x2;
    x14 = x14 >>> 32 - 16 | x14 << 16;
    x10 = x10 + x14 | 0;
    x6 ^= x10;
    x6 = x6 >>> 32 - 12 | x6 << 12;
    x3 = x3 + x7 | 0;
    x15 ^= x3;
    x15 = x15 >>> 32 - 16 | x15 << 16;
    x11 = x11 + x15 | 0;
    x7 ^= x11;
    x7 = x7 >>> 32 - 12 | x7 << 12;
    x2 = x2 + x6 | 0;
    x14 ^= x2;
    x14 = x14 >>> 32 - 8 | x14 << 8;
    x10 = x10 + x14 | 0;
    x6 ^= x10;
    x6 = x6 >>> 32 - 7 | x6 << 7;
    x3 = x3 + x7 | 0;
    x15 ^= x3;
    x15 = x15 >>> 32 - 8 | x15 << 8;
    x11 = x11 + x15 | 0;
    x7 ^= x11;
    x7 = x7 >>> 32 - 7 | x7 << 7;
    x1 = x1 + x5 | 0;
    x13 ^= x1;
    x13 = x13 >>> 32 - 8 | x13 << 8;
    x9 = x9 + x13 | 0;
    x5 ^= x9;
    x5 = x5 >>> 32 - 7 | x5 << 7;
    x02 = x02 + x4 | 0;
    x12 ^= x02;
    x12 = x12 >>> 32 - 8 | x12 << 8;
    x8 = x8 + x12 | 0;
    x4 ^= x8;
    x4 = x4 >>> 32 - 7 | x4 << 7;
    x02 = x02 + x5 | 0;
    x15 ^= x02;
    x15 = x15 >>> 32 - 16 | x15 << 16;
    x10 = x10 + x15 | 0;
    x5 ^= x10;
    x5 = x5 >>> 32 - 12 | x5 << 12;
    x1 = x1 + x6 | 0;
    x12 ^= x1;
    x12 = x12 >>> 32 - 16 | x12 << 16;
    x11 = x11 + x12 | 0;
    x6 ^= x11;
    x6 = x6 >>> 32 - 12 | x6 << 12;
    x2 = x2 + x7 | 0;
    x13 ^= x2;
    x13 = x13 >>> 32 - 16 | x13 << 16;
    x8 = x8 + x13 | 0;
    x7 ^= x8;
    x7 = x7 >>> 32 - 12 | x7 << 12;
    x3 = x3 + x4 | 0;
    x14 ^= x3;
    x14 = x14 >>> 32 - 16 | x14 << 16;
    x9 = x9 + x14 | 0;
    x4 ^= x9;
    x4 = x4 >>> 32 - 12 | x4 << 12;
    x2 = x2 + x7 | 0;
    x13 ^= x2;
    x13 = x13 >>> 32 - 8 | x13 << 8;
    x8 = x8 + x13 | 0;
    x7 ^= x8;
    x7 = x7 >>> 32 - 7 | x7 << 7;
    x3 = x3 + x4 | 0;
    x14 ^= x3;
    x14 = x14 >>> 32 - 8 | x14 << 8;
    x9 = x9 + x14 | 0;
    x4 ^= x9;
    x4 = x4 >>> 32 - 7 | x4 << 7;
    x1 = x1 + x6 | 0;
    x12 ^= x1;
    x12 = x12 >>> 32 - 8 | x12 << 8;
    x11 = x11 + x12 | 0;
    x6 ^= x11;
    x6 = x6 >>> 32 - 7 | x6 << 7;
    x02 = x02 + x5 | 0;
    x15 ^= x02;
    x15 = x15 >>> 32 - 8 | x15 << 8;
    x10 = x10 + x15 | 0;
    x5 ^= x10;
    x5 = x5 >>> 32 - 7 | x5 << 7;
  }
  binary_1.writeUint32LE(x02 + j02 | 0, out, 0);
  binary_1.writeUint32LE(x1 + j1 | 0, out, 4);
  binary_1.writeUint32LE(x2 + j2 | 0, out, 8);
  binary_1.writeUint32LE(x3 + j3 | 0, out, 12);
  binary_1.writeUint32LE(x4 + j4 | 0, out, 16);
  binary_1.writeUint32LE(x5 + j5 | 0, out, 20);
  binary_1.writeUint32LE(x6 + j6 | 0, out, 24);
  binary_1.writeUint32LE(x7 + j7 | 0, out, 28);
  binary_1.writeUint32LE(x8 + j8 | 0, out, 32);
  binary_1.writeUint32LE(x9 + j9 | 0, out, 36);
  binary_1.writeUint32LE(x10 + j10 | 0, out, 40);
  binary_1.writeUint32LE(x11 + j11 | 0, out, 44);
  binary_1.writeUint32LE(x12 + j12 | 0, out, 48);
  binary_1.writeUint32LE(x13 + j13 | 0, out, 52);
  binary_1.writeUint32LE(x14 + j14 | 0, out, 56);
  binary_1.writeUint32LE(x15 + j15 | 0, out, 60);
}
function streamXOR(key, nonce, src2, dst, nonceInplaceCounterLength) {
  if (nonceInplaceCounterLength === void 0) {
    nonceInplaceCounterLength = 0;
  }
  if (key.length !== 32) {
    throw new Error("ChaCha: key size must be 32 bytes");
  }
  if (dst.length < src2.length) {
    throw new Error("ChaCha: destination is shorter than source");
  }
  var nc;
  var counterLength;
  if (nonceInplaceCounterLength === 0) {
    if (nonce.length !== 8 && nonce.length !== 12) {
      throw new Error("ChaCha nonce must be 8 or 12 bytes");
    }
    nc = new Uint8Array(16);
    counterLength = nc.length - nonce.length;
    nc.set(nonce, counterLength);
  } else {
    if (nonce.length !== 16) {
      throw new Error("ChaCha nonce with counter must be 16 bytes");
    }
    nc = nonce;
    counterLength = nonceInplaceCounterLength;
  }
  var block = new Uint8Array(64);
  for (var i3 = 0; i3 < src2.length; i3 += 64) {
    core(block, nc, key);
    for (var j2 = i3; j2 < i3 + 64 && j2 < src2.length; j2++) {
      dst[j2] = src2[j2] ^ block[j2 - i3];
    }
    incrementCounter(nc, 0, counterLength);
  }
  wipe_1$3.wipe(block);
  if (nonceInplaceCounterLength === 0) {
    wipe_1$3.wipe(nc);
  }
  return dst;
}
chacha.streamXOR = streamXOR;
function stream(key, nonce, dst, nonceInplaceCounterLength) {
  if (nonceInplaceCounterLength === void 0) {
    nonceInplaceCounterLength = 0;
  }
  wipe_1$3.wipe(dst);
  return streamXOR(key, nonce, dst, dst, nonceInplaceCounterLength);
}
chacha.stream = stream;
function incrementCounter(counter, pos, len) {
  var carry = 1;
  while (len--) {
    carry = carry + (counter[pos] & 255) | 0;
    counter[pos] = carry & 255;
    carry >>>= 8;
    pos++;
  }
  if (carry > 0) {
    throw new Error("ChaCha: counter overflow");
  }
}
var poly1305 = {};
var constantTime = {};
Object.defineProperty(constantTime, "__esModule", { value: true });
function select(subject, resultIfOne, resultIfZero) {
  return ~(subject - 1) & resultIfOne | subject - 1 & resultIfZero;
}
constantTime.select = select;
function lessOrEqual(a3, b3) {
  return (a3 | 0) - (b3 | 0) - 1 >>> 31 & 1;
}
constantTime.lessOrEqual = lessOrEqual;
function compare(a3, b3) {
  if (a3.length !== b3.length) {
    return 0;
  }
  var result = 0;
  for (var i3 = 0; i3 < a3.length; i3++) {
    result |= a3[i3] ^ b3[i3];
  }
  return 1 & result - 1 >>> 8;
}
constantTime.compare = compare;
function equal(a3, b3) {
  if (a3.length === 0 || b3.length === 0) {
    return false;
  }
  return compare(a3, b3) !== 0;
}
constantTime.equal = equal;
(function(exports) {
  Object.defineProperty(exports, "__esModule", { value: true });
  var constant_time_12 = constantTime;
  var wipe_12 = wipe$1;
  exports.DIGEST_LENGTH = 16;
  var Poly1305 = (
    /** @class */
    function() {
      function Poly13052(key) {
        this.digestLength = exports.DIGEST_LENGTH;
        this._buffer = new Uint8Array(16);
        this._r = new Uint16Array(10);
        this._h = new Uint16Array(10);
        this._pad = new Uint16Array(8);
        this._leftover = 0;
        this._fin = 0;
        this._finished = false;
        var t0 = key[0] | key[1] << 8;
        this._r[0] = t0 & 8191;
        var t1 = key[2] | key[3] << 8;
        this._r[1] = (t0 >>> 13 | t1 << 3) & 8191;
        var t2 = key[4] | key[5] << 8;
        this._r[2] = (t1 >>> 10 | t2 << 6) & 7939;
        var t3 = key[6] | key[7] << 8;
        this._r[3] = (t2 >>> 7 | t3 << 9) & 8191;
        var t4 = key[8] | key[9] << 8;
        this._r[4] = (t3 >>> 4 | t4 << 12) & 255;
        this._r[5] = t4 >>> 1 & 8190;
        var t5 = key[10] | key[11] << 8;
        this._r[6] = (t4 >>> 14 | t5 << 2) & 8191;
        var t6 = key[12] | key[13] << 8;
        this._r[7] = (t5 >>> 11 | t6 << 5) & 8065;
        var t7 = key[14] | key[15] << 8;
        this._r[8] = (t6 >>> 8 | t7 << 8) & 8191;
        this._r[9] = t7 >>> 5 & 127;
        this._pad[0] = key[16] | key[17] << 8;
        this._pad[1] = key[18] | key[19] << 8;
        this._pad[2] = key[20] | key[21] << 8;
        this._pad[3] = key[22] | key[23] << 8;
        this._pad[4] = key[24] | key[25] << 8;
        this._pad[5] = key[26] | key[27] << 8;
        this._pad[6] = key[28] | key[29] << 8;
        this._pad[7] = key[30] | key[31] << 8;
      }
      Poly13052.prototype._blocks = function(m3, mpos, bytes) {
        var hibit = this._fin ? 0 : 1 << 11;
        var h02 = this._h[0], h1 = this._h[1], h22 = this._h[2], h32 = this._h[3], h4 = this._h[4], h5 = this._h[5], h6 = this._h[6], h7 = this._h[7], h8 = this._h[8], h9 = this._h[9];
        var r0 = this._r[0], r1 = this._r[1], r2 = this._r[2], r3 = this._r[3], r4 = this._r[4], r5 = this._r[5], r6 = this._r[6], r7 = this._r[7], r8 = this._r[8], r9 = this._r[9];
        while (bytes >= 16) {
          var t0 = m3[mpos + 0] | m3[mpos + 1] << 8;
          h02 += t0 & 8191;
          var t1 = m3[mpos + 2] | m3[mpos + 3] << 8;
          h1 += (t0 >>> 13 | t1 << 3) & 8191;
          var t2 = m3[mpos + 4] | m3[mpos + 5] << 8;
          h22 += (t1 >>> 10 | t2 << 6) & 8191;
          var t3 = m3[mpos + 6] | m3[mpos + 7] << 8;
          h32 += (t2 >>> 7 | t3 << 9) & 8191;
          var t4 = m3[mpos + 8] | m3[mpos + 9] << 8;
          h4 += (t3 >>> 4 | t4 << 12) & 8191;
          h5 += t4 >>> 1 & 8191;
          var t5 = m3[mpos + 10] | m3[mpos + 11] << 8;
          h6 += (t4 >>> 14 | t5 << 2) & 8191;
          var t6 = m3[mpos + 12] | m3[mpos + 13] << 8;
          h7 += (t5 >>> 11 | t6 << 5) & 8191;
          var t7 = m3[mpos + 14] | m3[mpos + 15] << 8;
          h8 += (t6 >>> 8 | t7 << 8) & 8191;
          h9 += t7 >>> 5 | hibit;
          var c2 = 0;
          var d02 = c2;
          d02 += h02 * r0;
          d02 += h1 * (5 * r9);
          d02 += h22 * (5 * r8);
          d02 += h32 * (5 * r7);
          d02 += h4 * (5 * r6);
          c2 = d02 >>> 13;
          d02 &= 8191;
          d02 += h5 * (5 * r5);
          d02 += h6 * (5 * r4);
          d02 += h7 * (5 * r3);
          d02 += h8 * (5 * r2);
          d02 += h9 * (5 * r1);
          c2 += d02 >>> 13;
          d02 &= 8191;
          var d1 = c2;
          d1 += h02 * r1;
          d1 += h1 * r0;
          d1 += h22 * (5 * r9);
          d1 += h32 * (5 * r8);
          d1 += h4 * (5 * r7);
          c2 = d1 >>> 13;
          d1 &= 8191;
          d1 += h5 * (5 * r6);
          d1 += h6 * (5 * r5);
          d1 += h7 * (5 * r4);
          d1 += h8 * (5 * r3);
          d1 += h9 * (5 * r2);
          c2 += d1 >>> 13;
          d1 &= 8191;
          var d22 = c2;
          d22 += h02 * r2;
          d22 += h1 * r1;
          d22 += h22 * r0;
          d22 += h32 * (5 * r9);
          d22 += h4 * (5 * r8);
          c2 = d22 >>> 13;
          d22 &= 8191;
          d22 += h5 * (5 * r7);
          d22 += h6 * (5 * r6);
          d22 += h7 * (5 * r5);
          d22 += h8 * (5 * r4);
          d22 += h9 * (5 * r3);
          c2 += d22 >>> 13;
          d22 &= 8191;
          var d32 = c2;
          d32 += h02 * r3;
          d32 += h1 * r2;
          d32 += h22 * r1;
          d32 += h32 * r0;
          d32 += h4 * (5 * r9);
          c2 = d32 >>> 13;
          d32 &= 8191;
          d32 += h5 * (5 * r8);
          d32 += h6 * (5 * r7);
          d32 += h7 * (5 * r6);
          d32 += h8 * (5 * r5);
          d32 += h9 * (5 * r4);
          c2 += d32 >>> 13;
          d32 &= 8191;
          var d4 = c2;
          d4 += h02 * r4;
          d4 += h1 * r3;
          d4 += h22 * r2;
          d4 += h32 * r1;
          d4 += h4 * r0;
          c2 = d4 >>> 13;
          d4 &= 8191;
          d4 += h5 * (5 * r9);
          d4 += h6 * (5 * r8);
          d4 += h7 * (5 * r7);
          d4 += h8 * (5 * r6);
          d4 += h9 * (5 * r5);
          c2 += d4 >>> 13;
          d4 &= 8191;
          var d5 = c2;
          d5 += h02 * r5;
          d5 += h1 * r4;
          d5 += h22 * r3;
          d5 += h32 * r2;
          d5 += h4 * r1;
          c2 = d5 >>> 13;
          d5 &= 8191;
          d5 += h5 * r0;
          d5 += h6 * (5 * r9);
          d5 += h7 * (5 * r8);
          d5 += h8 * (5 * r7);
          d5 += h9 * (5 * r6);
          c2 += d5 >>> 13;
          d5 &= 8191;
          var d6 = c2;
          d6 += h02 * r6;
          d6 += h1 * r5;
          d6 += h22 * r4;
          d6 += h32 * r3;
          d6 += h4 * r2;
          c2 = d6 >>> 13;
          d6 &= 8191;
          d6 += h5 * r1;
          d6 += h6 * r0;
          d6 += h7 * (5 * r9);
          d6 += h8 * (5 * r8);
          d6 += h9 * (5 * r7);
          c2 += d6 >>> 13;
          d6 &= 8191;
          var d7 = c2;
          d7 += h02 * r7;
          d7 += h1 * r6;
          d7 += h22 * r5;
          d7 += h32 * r4;
          d7 += h4 * r3;
          c2 = d7 >>> 13;
          d7 &= 8191;
          d7 += h5 * r2;
          d7 += h6 * r1;
          d7 += h7 * r0;
          d7 += h8 * (5 * r9);
          d7 += h9 * (5 * r8);
          c2 += d7 >>> 13;
          d7 &= 8191;
          var d8 = c2;
          d8 += h02 * r8;
          d8 += h1 * r7;
          d8 += h22 * r6;
          d8 += h32 * r5;
          d8 += h4 * r4;
          c2 = d8 >>> 13;
          d8 &= 8191;
          d8 += h5 * r3;
          d8 += h6 * r2;
          d8 += h7 * r1;
          d8 += h8 * r0;
          d8 += h9 * (5 * r9);
          c2 += d8 >>> 13;
          d8 &= 8191;
          var d9 = c2;
          d9 += h02 * r9;
          d9 += h1 * r8;
          d9 += h22 * r7;
          d9 += h32 * r6;
          d9 += h4 * r5;
          c2 = d9 >>> 13;
          d9 &= 8191;
          d9 += h5 * r4;
          d9 += h6 * r3;
          d9 += h7 * r2;
          d9 += h8 * r1;
          d9 += h9 * r0;
          c2 += d9 >>> 13;
          d9 &= 8191;
          c2 = (c2 << 2) + c2 | 0;
          c2 = c2 + d02 | 0;
          d02 = c2 & 8191;
          c2 = c2 >>> 13;
          d1 += c2;
          h02 = d02;
          h1 = d1;
          h22 = d22;
          h32 = d32;
          h4 = d4;
          h5 = d5;
          h6 = d6;
          h7 = d7;
          h8 = d8;
          h9 = d9;
          mpos += 16;
          bytes -= 16;
        }
        this._h[0] = h02;
        this._h[1] = h1;
        this._h[2] = h22;
        this._h[3] = h32;
        this._h[4] = h4;
        this._h[5] = h5;
        this._h[6] = h6;
        this._h[7] = h7;
        this._h[8] = h8;
        this._h[9] = h9;
      };
      Poly13052.prototype.finish = function(mac, macpos) {
        if (macpos === void 0) {
          macpos = 0;
        }
        var g3 = new Uint16Array(10);
        var c2;
        var mask;
        var f3;
        var i3;
        if (this._leftover) {
          i3 = this._leftover;
          this._buffer[i3++] = 1;
          for (; i3 < 16; i3++) {
            this._buffer[i3] = 0;
          }
          this._fin = 1;
          this._blocks(this._buffer, 0, 16);
        }
        c2 = this._h[1] >>> 13;
        this._h[1] &= 8191;
        for (i3 = 2; i3 < 10; i3++) {
          this._h[i3] += c2;
          c2 = this._h[i3] >>> 13;
          this._h[i3] &= 8191;
        }
        this._h[0] += c2 * 5;
        c2 = this._h[0] >>> 13;
        this._h[0] &= 8191;
        this._h[1] += c2;
        c2 = this._h[1] >>> 13;
        this._h[1] &= 8191;
        this._h[2] += c2;
        g3[0] = this._h[0] + 5;
        c2 = g3[0] >>> 13;
        g3[0] &= 8191;
        for (i3 = 1; i3 < 10; i3++) {
          g3[i3] = this._h[i3] + c2;
          c2 = g3[i3] >>> 13;
          g3[i3] &= 8191;
        }
        g3[9] -= 1 << 13;
        mask = (c2 ^ 1) - 1;
        for (i3 = 0; i3 < 10; i3++) {
          g3[i3] &= mask;
        }
        mask = ~mask;
        for (i3 = 0; i3 < 10; i3++) {
          this._h[i3] = this._h[i3] & mask | g3[i3];
        }
        this._h[0] = (this._h[0] | this._h[1] << 13) & 65535;
        this._h[1] = (this._h[1] >>> 3 | this._h[2] << 10) & 65535;
        this._h[2] = (this._h[2] >>> 6 | this._h[3] << 7) & 65535;
        this._h[3] = (this._h[3] >>> 9 | this._h[4] << 4) & 65535;
        this._h[4] = (this._h[4] >>> 12 | this._h[5] << 1 | this._h[6] << 14) & 65535;
        this._h[5] = (this._h[6] >>> 2 | this._h[7] << 11) & 65535;
        this._h[6] = (this._h[7] >>> 5 | this._h[8] << 8) & 65535;
        this._h[7] = (this._h[8] >>> 8 | this._h[9] << 5) & 65535;
        f3 = this._h[0] + this._pad[0];
        this._h[0] = f3 & 65535;
        for (i3 = 1; i3 < 8; i3++) {
          f3 = (this._h[i3] + this._pad[i3] | 0) + (f3 >>> 16) | 0;
          this._h[i3] = f3 & 65535;
        }
        mac[macpos + 0] = this._h[0] >>> 0;
        mac[macpos + 1] = this._h[0] >>> 8;
        mac[macpos + 2] = this._h[1] >>> 0;
        mac[macpos + 3] = this._h[1] >>> 8;
        mac[macpos + 4] = this._h[2] >>> 0;
        mac[macpos + 5] = this._h[2] >>> 8;
        mac[macpos + 6] = this._h[3] >>> 0;
        mac[macpos + 7] = this._h[3] >>> 8;
        mac[macpos + 8] = this._h[4] >>> 0;
        mac[macpos + 9] = this._h[4] >>> 8;
        mac[macpos + 10] = this._h[5] >>> 0;
        mac[macpos + 11] = this._h[5] >>> 8;
        mac[macpos + 12] = this._h[6] >>> 0;
        mac[macpos + 13] = this._h[6] >>> 8;
        mac[macpos + 14] = this._h[7] >>> 0;
        mac[macpos + 15] = this._h[7] >>> 8;
        this._finished = true;
        return this;
      };
      Poly13052.prototype.update = function(m3) {
        var mpos = 0;
        var bytes = m3.length;
        var want;
        if (this._leftover) {
          want = 16 - this._leftover;
          if (want > bytes) {
            want = bytes;
          }
          for (var i3 = 0; i3 < want; i3++) {
            this._buffer[this._leftover + i3] = m3[mpos + i3];
          }
          bytes -= want;
          mpos += want;
          this._leftover += want;
          if (this._leftover < 16) {
            return this;
          }
          this._blocks(this._buffer, 0, 16);
          this._leftover = 0;
        }
        if (bytes >= 16) {
          want = bytes - bytes % 16;
          this._blocks(m3, mpos, want);
          mpos += want;
          bytes -= want;
        }
        if (bytes) {
          for (var i3 = 0; i3 < bytes; i3++) {
            this._buffer[this._leftover + i3] = m3[mpos + i3];
          }
          this._leftover += bytes;
        }
        return this;
      };
      Poly13052.prototype.digest = function() {
        if (this._finished) {
          throw new Error("Poly1305 was finished");
        }
        var mac = new Uint8Array(16);
        this.finish(mac);
        return mac;
      };
      Poly13052.prototype.clean = function() {
        wipe_12.wipe(this._buffer);
        wipe_12.wipe(this._r);
        wipe_12.wipe(this._h);
        wipe_12.wipe(this._pad);
        this._leftover = 0;
        this._fin = 0;
        this._finished = true;
        return this;
      };
      return Poly13052;
    }()
  );
  exports.Poly1305 = Poly1305;
  function oneTimeAuth(key, data) {
    var h4 = new Poly1305(key);
    h4.update(data);
    var digest = h4.digest();
    h4.clean();
    return digest;
  }
  exports.oneTimeAuth = oneTimeAuth;
  function equal2(a3, b3) {
    if (a3.length !== exports.DIGEST_LENGTH || b3.length !== exports.DIGEST_LENGTH) {
      return false;
    }
    return constant_time_12.equal(a3, b3);
  }
  exports.equal = equal2;
})(poly1305);
(function(exports) {
  Object.defineProperty(exports, "__esModule", { value: true });
  var chacha_1 = chacha;
  var poly1305_1 = poly1305;
  var wipe_12 = wipe$1;
  var binary_12 = binary;
  var constant_time_12 = constantTime;
  exports.KEY_LENGTH = 32;
  exports.NONCE_LENGTH = 12;
  exports.TAG_LENGTH = 16;
  var ZEROS = new Uint8Array(16);
  var ChaCha20Poly1305 = (
    /** @class */
    function() {
      function ChaCha20Poly13052(key) {
        this.nonceLength = exports.NONCE_LENGTH;
        this.tagLength = exports.TAG_LENGTH;
        if (key.length !== exports.KEY_LENGTH) {
          throw new Error("ChaCha20Poly1305 needs 32-byte key");
        }
        this._key = new Uint8Array(key);
      }
      ChaCha20Poly13052.prototype.seal = function(nonce, plaintext, associatedData, dst) {
        if (nonce.length > 16) {
          throw new Error("ChaCha20Poly1305: incorrect nonce length");
        }
        var counter = new Uint8Array(16);
        counter.set(nonce, counter.length - nonce.length);
        var authKey = new Uint8Array(32);
        chacha_1.stream(this._key, counter, authKey, 4);
        var resultLength = plaintext.length + this.tagLength;
        var result;
        if (dst) {
          if (dst.length !== resultLength) {
            throw new Error("ChaCha20Poly1305: incorrect destination length");
          }
          result = dst;
        } else {
          result = new Uint8Array(resultLength);
        }
        chacha_1.streamXOR(this._key, counter, plaintext, result, 4);
        this._authenticate(result.subarray(result.length - this.tagLength, result.length), authKey, result.subarray(0, result.length - this.tagLength), associatedData);
        wipe_12.wipe(counter);
        return result;
      };
      ChaCha20Poly13052.prototype.open = function(nonce, sealed, associatedData, dst) {
        if (nonce.length > 16) {
          throw new Error("ChaCha20Poly1305: incorrect nonce length");
        }
        if (sealed.length < this.tagLength) {
          return null;
        }
        var counter = new Uint8Array(16);
        counter.set(nonce, counter.length - nonce.length);
        var authKey = new Uint8Array(32);
        chacha_1.stream(this._key, counter, authKey, 4);
        var calculatedTag = new Uint8Array(this.tagLength);
        this._authenticate(calculatedTag, authKey, sealed.subarray(0, sealed.length - this.tagLength), associatedData);
        if (!constant_time_12.equal(calculatedTag, sealed.subarray(sealed.length - this.tagLength, sealed.length))) {
          return null;
        }
        var resultLength = sealed.length - this.tagLength;
        var result;
        if (dst) {
          if (dst.length !== resultLength) {
            throw new Error("ChaCha20Poly1305: incorrect destination length");
          }
          result = dst;
        } else {
          result = new Uint8Array(resultLength);
        }
        chacha_1.streamXOR(this._key, counter, sealed.subarray(0, sealed.length - this.tagLength), result, 4);
        wipe_12.wipe(counter);
        return result;
      };
      ChaCha20Poly13052.prototype.clean = function() {
        wipe_12.wipe(this._key);
        return this;
      };
      ChaCha20Poly13052.prototype._authenticate = function(tagOut, authKey, ciphertext, associatedData) {
        var h4 = new poly1305_1.Poly1305(authKey);
        if (associatedData) {
          h4.update(associatedData);
          if (associatedData.length % 16 > 0) {
            h4.update(ZEROS.subarray(associatedData.length % 16));
          }
        }
        h4.update(ciphertext);
        if (ciphertext.length % 16 > 0) {
          h4.update(ZEROS.subarray(ciphertext.length % 16));
        }
        var length = new Uint8Array(8);
        if (associatedData) {
          binary_12.writeUint64LE(associatedData.length, length);
        }
        h4.update(length);
        binary_12.writeUint64LE(ciphertext.length, length);
        h4.update(length);
        var tag = h4.digest();
        for (var i3 = 0; i3 < tag.length; i3++) {
          tagOut[i3] = tag[i3];
        }
        h4.clean();
        wipe_12.wipe(tag);
        wipe_12.wipe(length);
      };
      return ChaCha20Poly13052;
    }()
  );
  exports.ChaCha20Poly1305 = ChaCha20Poly1305;
})(chacha20poly1305);
var hkdf = {};
var hmac$1 = {};
var hash = {};
Object.defineProperty(hash, "__esModule", { value: true });
function isSerializableHash(h4) {
  return typeof h4.saveState !== "undefined" && typeof h4.restoreState !== "undefined" && typeof h4.cleanSavedState !== "undefined";
}
hash.isSerializableHash = isSerializableHash;
Object.defineProperty(hmac$1, "__esModule", { value: true });
var hash_1 = hash;
var constant_time_1 = constantTime;
var wipe_1$2 = wipe$1;
var HMAC = (
  /** @class */
  function() {
    function HMAC2(hash2, key) {
      this._finished = false;
      this._inner = new hash2();
      this._outer = new hash2();
      this.blockSize = this._outer.blockSize;
      this.digestLength = this._outer.digestLength;
      var pad = new Uint8Array(this.blockSize);
      if (key.length > this.blockSize) {
        this._inner.update(key).finish(pad).clean();
      } else {
        pad.set(key);
      }
      for (var i3 = 0; i3 < pad.length; i3++) {
        pad[i3] ^= 54;
      }
      this._inner.update(pad);
      for (var i3 = 0; i3 < pad.length; i3++) {
        pad[i3] ^= 54 ^ 92;
      }
      this._outer.update(pad);
      if (hash_1.isSerializableHash(this._inner) && hash_1.isSerializableHash(this._outer)) {
        this._innerKeyedState = this._inner.saveState();
        this._outerKeyedState = this._outer.saveState();
      }
      wipe_1$2.wipe(pad);
    }
    HMAC2.prototype.reset = function() {
      if (!hash_1.isSerializableHash(this._inner) || !hash_1.isSerializableHash(this._outer)) {
        throw new Error("hmac: can't reset() because hash doesn't implement restoreState()");
      }
      this._inner.restoreState(this._innerKeyedState);
      this._outer.restoreState(this._outerKeyedState);
      this._finished = false;
      return this;
    };
    HMAC2.prototype.clean = function() {
      if (hash_1.isSerializableHash(this._inner)) {
        this._inner.cleanSavedState(this._innerKeyedState);
      }
      if (hash_1.isSerializableHash(this._outer)) {
        this._outer.cleanSavedState(this._outerKeyedState);
      }
      this._inner.clean();
      this._outer.clean();
    };
    HMAC2.prototype.update = function(data) {
      this._inner.update(data);
      return this;
    };
    HMAC2.prototype.finish = function(out) {
      if (this._finished) {
        this._outer.finish(out);
        return this;
      }
      this._inner.finish(out);
      this._outer.update(out.subarray(0, this.digestLength)).finish(out);
      this._finished = true;
      return this;
    };
    HMAC2.prototype.digest = function() {
      var out = new Uint8Array(this.digestLength);
      this.finish(out);
      return out;
    };
    HMAC2.prototype.saveState = function() {
      if (!hash_1.isSerializableHash(this._inner)) {
        throw new Error("hmac: can't saveState() because hash doesn't implement it");
      }
      return this._inner.saveState();
    };
    HMAC2.prototype.restoreState = function(savedState) {
      if (!hash_1.isSerializableHash(this._inner) || !hash_1.isSerializableHash(this._outer)) {
        throw new Error("hmac: can't restoreState() because hash doesn't implement it");
      }
      this._inner.restoreState(savedState);
      this._outer.restoreState(this._outerKeyedState);
      this._finished = false;
      return this;
    };
    HMAC2.prototype.cleanSavedState = function(savedState) {
      if (!hash_1.isSerializableHash(this._inner)) {
        throw new Error("hmac: can't cleanSavedState() because hash doesn't implement it");
      }
      this._inner.cleanSavedState(savedState);
    };
    return HMAC2;
  }()
);
hmac$1.HMAC = HMAC;
function hmac(hash2, key, data) {
  var h4 = new HMAC(hash2, key);
  h4.update(data);
  var digest = h4.digest();
  h4.clean();
  return digest;
}
hmac$1.hmac = hmac;
hmac$1.equal = constant_time_1.equal;
Object.defineProperty(hkdf, "__esModule", { value: true });
var hmac_1 = hmac$1;
var wipe_1$1 = wipe$1;
var HKDF = (
  /** @class */
  function() {
    function HKDF2(hash2, key, salt, info) {
      if (salt === void 0) {
        salt = new Uint8Array(0);
      }
      this._counter = new Uint8Array(1);
      this._hash = hash2;
      this._info = info;
      var okm = hmac_1.hmac(this._hash, salt, key);
      this._hmac = new hmac_1.HMAC(hash2, okm);
      this._buffer = new Uint8Array(this._hmac.digestLength);
      this._bufpos = this._buffer.length;
    }
    HKDF2.prototype._fillBuffer = function() {
      this._counter[0]++;
      var ctr = this._counter[0];
      if (ctr === 0) {
        throw new Error("hkdf: cannot expand more");
      }
      this._hmac.reset();
      if (ctr > 1) {
        this._hmac.update(this._buffer);
      }
      if (this._info) {
        this._hmac.update(this._info);
      }
      this._hmac.update(this._counter);
      this._hmac.finish(this._buffer);
      this._bufpos = 0;
    };
    HKDF2.prototype.expand = function(length) {
      var out = new Uint8Array(length);
      for (var i3 = 0; i3 < out.length; i3++) {
        if (this._bufpos === this._buffer.length) {
          this._fillBuffer();
        }
        out[i3] = this._buffer[this._bufpos++];
      }
      return out;
    };
    HKDF2.prototype.clean = function() {
      this._hmac.clean();
      wipe_1$1.wipe(this._buffer);
      wipe_1$1.wipe(this._counter);
      this._bufpos = 0;
    };
    return HKDF2;
  }()
);
var HKDF_1 = hkdf.HKDF = HKDF;
var random = {};
var system = {};
var browser$2 = {};
Object.defineProperty(browser$2, "__esModule", { value: true });
browser$2.BrowserRandomSource = void 0;
const QUOTA = 65536;
class BrowserRandomSource {
  constructor() {
    this.isAvailable = false;
    this.isInstantiated = false;
    const browserCrypto = typeof self !== "undefined" ? self.crypto || self.msCrypto : null;
    if (browserCrypto && browserCrypto.getRandomValues !== void 0) {
      this._crypto = browserCrypto;
      this.isAvailable = true;
      this.isInstantiated = true;
    }
  }
  randomBytes(length) {
    if (!this.isAvailable || !this._crypto) {
      throw new Error("Browser random byte generator is not available.");
    }
    const out = new Uint8Array(length);
    for (let i3 = 0; i3 < out.length; i3 += QUOTA) {
      this._crypto.getRandomValues(out.subarray(i3, i3 + Math.min(out.length - i3, QUOTA)));
    }
    return out;
  }
}
browser$2.BrowserRandomSource = BrowserRandomSource;
function commonjsRequire(path) {
  throw new Error('Could not dynamically require "' + path + '". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.');
}
var node = {};
Object.defineProperty(node, "__esModule", { value: true });
node.NodeRandomSource = void 0;
const wipe_1 = wipe$1;
class NodeRandomSource {
  constructor() {
    this.isAvailable = false;
    this.isInstantiated = false;
    if (typeof commonjsRequire !== "undefined") {
      const nodeCrypto = require$$3;
      if (nodeCrypto && nodeCrypto.randomBytes) {
        this._crypto = nodeCrypto;
        this.isAvailable = true;
        this.isInstantiated = true;
      }
    }
  }
  randomBytes(length) {
    if (!this.isAvailable || !this._crypto) {
      throw new Error("Node.js random byte generator is not available.");
    }
    let buffer = this._crypto.randomBytes(length);
    if (buffer.length !== length) {
      throw new Error("NodeRandomSource: got fewer bytes than requested");
    }
    const out = new Uint8Array(length);
    for (let i3 = 0; i3 < out.length; i3++) {
      out[i3] = buffer[i3];
    }
    (0, wipe_1.wipe)(buffer);
    return out;
  }
}
node.NodeRandomSource = NodeRandomSource;
Object.defineProperty(system, "__esModule", { value: true });
system.SystemRandomSource = void 0;
const browser_1 = browser$2;
const node_1 = node;
class SystemRandomSource {
  constructor() {
    this.isAvailable = false;
    this.name = "";
    this._source = new browser_1.BrowserRandomSource();
    if (this._source.isAvailable) {
      this.isAvailable = true;
      this.name = "Browser";
      return;
    }
    this._source = new node_1.NodeRandomSource();
    if (this._source.isAvailable) {
      this.isAvailable = true;
      this.name = "Node";
      return;
    }
  }
  randomBytes(length) {
    if (!this.isAvailable) {
      throw new Error("System random byte generator is not available.");
    }
    return this._source.randomBytes(length);
  }
}
system.SystemRandomSource = SystemRandomSource;
(function(exports) {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.randomStringForEntropy = exports.randomString = exports.randomUint32 = exports.randomBytes = exports.defaultRandomSource = void 0;
  const system_1 = system;
  const binary_12 = binary;
  const wipe_12 = wipe$1;
  exports.defaultRandomSource = new system_1.SystemRandomSource();
  function randomBytes(length, prng = exports.defaultRandomSource) {
    return prng.randomBytes(length);
  }
  exports.randomBytes = randomBytes;
  function randomUint32(prng = exports.defaultRandomSource) {
    const buf = randomBytes(4, prng);
    const result = (0, binary_12.readUint32LE)(buf);
    (0, wipe_12.wipe)(buf);
    return result;
  }
  exports.randomUint32 = randomUint32;
  const ALPHANUMERIC = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
  function randomString(length, charset = ALPHANUMERIC, prng = exports.defaultRandomSource) {
    if (charset.length < 2) {
      throw new Error("randomString charset is too short");
    }
    if (charset.length > 256) {
      throw new Error("randomString charset is too long");
    }
    let out = "";
    const charsLen = charset.length;
    const maxByte = 256 - 256 % charsLen;
    while (length > 0) {
      const buf = randomBytes(Math.ceil(length * 256 / maxByte), prng);
      for (let i3 = 0; i3 < buf.length && length > 0; i3++) {
        const randomByte = buf[i3];
        if (randomByte < maxByte) {
          out += charset.charAt(randomByte % charsLen);
          length--;
        }
      }
      (0, wipe_12.wipe)(buf);
    }
    return out;
  }
  exports.randomString = randomString;
  function randomStringForEntropy(bits, charset = ALPHANUMERIC, prng = exports.defaultRandomSource) {
    const length = Math.ceil(bits / (Math.log(charset.length) / Math.LN2));
    return randomString(length, charset, prng);
  }
  exports.randomStringForEntropy = randomStringForEntropy;
})(random);
var sha256 = {};
(function(exports) {
  Object.defineProperty(exports, "__esModule", { value: true });
  var binary_12 = binary;
  var wipe_12 = wipe$1;
  exports.DIGEST_LENGTH = 32;
  exports.BLOCK_SIZE = 64;
  var SHA256 = (
    /** @class */
    function() {
      function SHA2562() {
        this.digestLength = exports.DIGEST_LENGTH;
        this.blockSize = exports.BLOCK_SIZE;
        this._state = new Int32Array(8);
        this._temp = new Int32Array(64);
        this._buffer = new Uint8Array(128);
        this._bufferLength = 0;
        this._bytesHashed = 0;
        this._finished = false;
        this.reset();
      }
      SHA2562.prototype._initState = function() {
        this._state[0] = 1779033703;
        this._state[1] = 3144134277;
        this._state[2] = 1013904242;
        this._state[3] = 2773480762;
        this._state[4] = 1359893119;
        this._state[5] = 2600822924;
        this._state[6] = 528734635;
        this._state[7] = 1541459225;
      };
      SHA2562.prototype.reset = function() {
        this._initState();
        this._bufferLength = 0;
        this._bytesHashed = 0;
        this._finished = false;
        return this;
      };
      SHA2562.prototype.clean = function() {
        wipe_12.wipe(this._buffer);
        wipe_12.wipe(this._temp);
        this.reset();
      };
      SHA2562.prototype.update = function(data, dataLength) {
        if (dataLength === void 0) {
          dataLength = data.length;
        }
        if (this._finished) {
          throw new Error("SHA256: can't update because hash was finished.");
        }
        var dataPos = 0;
        this._bytesHashed += dataLength;
        if (this._bufferLength > 0) {
          while (this._bufferLength < this.blockSize && dataLength > 0) {
            this._buffer[this._bufferLength++] = data[dataPos++];
            dataLength--;
          }
          if (this._bufferLength === this.blockSize) {
            hashBlocks(this._temp, this._state, this._buffer, 0, this.blockSize);
            this._bufferLength = 0;
          }
        }
        if (dataLength >= this.blockSize) {
          dataPos = hashBlocks(this._temp, this._state, data, dataPos, dataLength);
          dataLength %= this.blockSize;
        }
        while (dataLength > 0) {
          this._buffer[this._bufferLength++] = data[dataPos++];
          dataLength--;
        }
        return this;
      };
      SHA2562.prototype.finish = function(out) {
        if (!this._finished) {
          var bytesHashed = this._bytesHashed;
          var left = this._bufferLength;
          var bitLenHi = bytesHashed / 536870912 | 0;
          var bitLenLo = bytesHashed << 3;
          var padLength = bytesHashed % 64 < 56 ? 64 : 128;
          this._buffer[left] = 128;
          for (var i3 = left + 1; i3 < padLength - 8; i3++) {
            this._buffer[i3] = 0;
          }
          binary_12.writeUint32BE(bitLenHi, this._buffer, padLength - 8);
          binary_12.writeUint32BE(bitLenLo, this._buffer, padLength - 4);
          hashBlocks(this._temp, this._state, this._buffer, 0, padLength);
          this._finished = true;
        }
        for (var i3 = 0; i3 < this.digestLength / 4; i3++) {
          binary_12.writeUint32BE(this._state[i3], out, i3 * 4);
        }
        return this;
      };
      SHA2562.prototype.digest = function() {
        var out = new Uint8Array(this.digestLength);
        this.finish(out);
        return out;
      };
      SHA2562.prototype.saveState = function() {
        if (this._finished) {
          throw new Error("SHA256: cannot save finished state");
        }
        return {
          state: new Int32Array(this._state),
          buffer: this._bufferLength > 0 ? new Uint8Array(this._buffer) : void 0,
          bufferLength: this._bufferLength,
          bytesHashed: this._bytesHashed
        };
      };
      SHA2562.prototype.restoreState = function(savedState) {
        this._state.set(savedState.state);
        this._bufferLength = savedState.bufferLength;
        if (savedState.buffer) {
          this._buffer.set(savedState.buffer);
        }
        this._bytesHashed = savedState.bytesHashed;
        this._finished = false;
        return this;
      };
      SHA2562.prototype.cleanSavedState = function(savedState) {
        wipe_12.wipe(savedState.state);
        if (savedState.buffer) {
          wipe_12.wipe(savedState.buffer);
        }
        savedState.bufferLength = 0;
        savedState.bytesHashed = 0;
      };
      return SHA2562;
    }()
  );
  exports.SHA256 = SHA256;
  var K2 = new Int32Array([
    1116352408,
    1899447441,
    3049323471,
    3921009573,
    961987163,
    1508970993,
    2453635748,
    2870763221,
    3624381080,
    310598401,
    607225278,
    1426881987,
    1925078388,
    2162078206,
    2614888103,
    3248222580,
    3835390401,
    4022224774,
    264347078,
    604807628,
    770255983,
    1249150122,
    1555081692,
    1996064986,
    2554220882,
    2821834349,
    2952996808,
    3210313671,
    3336571891,
    3584528711,
    113926993,
    338241895,
    666307205,
    773529912,
    1294757372,
    1396182291,
    1695183700,
    1986661051,
    2177026350,
    2456956037,
    2730485921,
    2820302411,
    3259730800,
    3345764771,
    3516065817,
    3600352804,
    4094571909,
    275423344,
    430227734,
    506948616,
    659060556,
    883997877,
    958139571,
    1322822218,
    1537002063,
    1747873779,
    1955562222,
    2024104815,
    2227730452,
    2361852424,
    2428436474,
    2756734187,
    3204031479,
    3329325298
  ]);
  function hashBlocks(w3, v3, p3, pos, len) {
    while (len >= 64) {
      var a3 = v3[0];
      var b3 = v3[1];
      var c2 = v3[2];
      var d4 = v3[3];
      var e2 = v3[4];
      var f3 = v3[5];
      var g3 = v3[6];
      var h4 = v3[7];
      for (var i3 = 0; i3 < 16; i3++) {
        var j2 = pos + i3 * 4;
        w3[i3] = binary_12.readUint32BE(p3, j2);
      }
      for (var i3 = 16; i3 < 64; i3++) {
        var u3 = w3[i3 - 2];
        var t1 = (u3 >>> 17 | u3 << 32 - 17) ^ (u3 >>> 19 | u3 << 32 - 19) ^ u3 >>> 10;
        u3 = w3[i3 - 15];
        var t2 = (u3 >>> 7 | u3 << 32 - 7) ^ (u3 >>> 18 | u3 << 32 - 18) ^ u3 >>> 3;
        w3[i3] = (t1 + w3[i3 - 7] | 0) + (t2 + w3[i3 - 16] | 0);
      }
      for (var i3 = 0; i3 < 64; i3++) {
        var t1 = (((e2 >>> 6 | e2 << 32 - 6) ^ (e2 >>> 11 | e2 << 32 - 11) ^ (e2 >>> 25 | e2 << 32 - 25)) + (e2 & f3 ^ ~e2 & g3) | 0) + (h4 + (K2[i3] + w3[i3] | 0) | 0) | 0;
        var t2 = ((a3 >>> 2 | a3 << 32 - 2) ^ (a3 >>> 13 | a3 << 32 - 13) ^ (a3 >>> 22 | a3 << 32 - 22)) + (a3 & b3 ^ a3 & c2 ^ b3 & c2) | 0;
        h4 = g3;
        g3 = f3;
        f3 = e2;
        e2 = d4 + t1 | 0;
        d4 = c2;
        c2 = b3;
        b3 = a3;
        a3 = t1 + t2 | 0;
      }
      v3[0] += a3;
      v3[1] += b3;
      v3[2] += c2;
      v3[3] += d4;
      v3[4] += e2;
      v3[5] += f3;
      v3[6] += g3;
      v3[7] += h4;
      pos += 64;
      len -= 64;
    }
    return pos;
  }
  function hash2(data) {
    var h4 = new SHA256();
    h4.update(data);
    var digest = h4.digest();
    h4.clean();
    return digest;
  }
  exports.hash = hash2;
})(sha256);
var x25519 = {};
(function(exports) {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.sharedKey = exports.generateKeyPair = exports.generateKeyPairFromSeed = exports.scalarMultBase = exports.scalarMult = exports.SHARED_KEY_LENGTH = exports.SECRET_KEY_LENGTH = exports.PUBLIC_KEY_LENGTH = void 0;
  const random_1 = random;
  const wipe_12 = wipe$1;
  exports.PUBLIC_KEY_LENGTH = 32;
  exports.SECRET_KEY_LENGTH = 32;
  exports.SHARED_KEY_LENGTH = 32;
  function gf2(init) {
    const r2 = new Float64Array(16);
    if (init) {
      for (let i3 = 0; i3 < init.length; i3++) {
        r2[i3] = init[i3];
      }
    }
    return r2;
  }
  const _9 = new Uint8Array(32);
  _9[0] = 9;
  const _121665 = gf2([56129, 1]);
  function car25519(o3) {
    let c2 = 1;
    for (let i3 = 0; i3 < 16; i3++) {
      let v3 = o3[i3] + c2 + 65535;
      c2 = Math.floor(v3 / 65536);
      o3[i3] = v3 - c2 * 65536;
    }
    o3[0] += c2 - 1 + 37 * (c2 - 1);
  }
  function sel25519(p3, q2, b3) {
    const c2 = ~(b3 - 1);
    for (let i3 = 0; i3 < 16; i3++) {
      const t = c2 & (p3[i3] ^ q2[i3]);
      p3[i3] ^= t;
      q2[i3] ^= t;
    }
  }
  function pack25519(o3, n4) {
    const m3 = gf2();
    const t = gf2();
    for (let i3 = 0; i3 < 16; i3++) {
      t[i3] = n4[i3];
    }
    car25519(t);
    car25519(t);
    car25519(t);
    for (let j2 = 0; j2 < 2; j2++) {
      m3[0] = t[0] - 65517;
      for (let i3 = 1; i3 < 15; i3++) {
        m3[i3] = t[i3] - 65535 - (m3[i3 - 1] >> 16 & 1);
        m3[i3 - 1] &= 65535;
      }
      m3[15] = t[15] - 32767 - (m3[14] >> 16 & 1);
      const b3 = m3[15] >> 16 & 1;
      m3[14] &= 65535;
      sel25519(t, m3, 1 - b3);
    }
    for (let i3 = 0; i3 < 16; i3++) {
      o3[2 * i3] = t[i3] & 255;
      o3[2 * i3 + 1] = t[i3] >> 8;
    }
  }
  function unpack25519(o3, n4) {
    for (let i3 = 0; i3 < 16; i3++) {
      o3[i3] = n4[2 * i3] + (n4[2 * i3 + 1] << 8);
    }
    o3[15] &= 32767;
  }
  function add(o3, a3, b3) {
    for (let i3 = 0; i3 < 16; i3++) {
      o3[i3] = a3[i3] + b3[i3];
    }
  }
  function sub(o3, a3, b3) {
    for (let i3 = 0; i3 < 16; i3++) {
      o3[i3] = a3[i3] - b3[i3];
    }
  }
  function mul(o3, a3, b3) {
    let v3, c2, t0 = 0, t1 = 0, t2 = 0, t3 = 0, t4 = 0, t5 = 0, t6 = 0, t7 = 0, t8 = 0, t9 = 0, t10 = 0, t11 = 0, t12 = 0, t13 = 0, t14 = 0, t15 = 0, t16 = 0, t17 = 0, t18 = 0, t19 = 0, t20 = 0, t21 = 0, t22 = 0, t23 = 0, t24 = 0, t25 = 0, t26 = 0, t27 = 0, t28 = 0, t29 = 0, t30 = 0, b02 = b3[0], b1 = b3[1], b22 = b3[2], b32 = b3[3], b4 = b3[4], b5 = b3[5], b6 = b3[6], b7 = b3[7], b8 = b3[8], b9 = b3[9], b10 = b3[10], b11 = b3[11], b12 = b3[12], b13 = b3[13], b14 = b3[14], b15 = b3[15];
    v3 = a3[0];
    t0 += v3 * b02;
    t1 += v3 * b1;
    t2 += v3 * b22;
    t3 += v3 * b32;
    t4 += v3 * b4;
    t5 += v3 * b5;
    t6 += v3 * b6;
    t7 += v3 * b7;
    t8 += v3 * b8;
    t9 += v3 * b9;
    t10 += v3 * b10;
    t11 += v3 * b11;
    t12 += v3 * b12;
    t13 += v3 * b13;
    t14 += v3 * b14;
    t15 += v3 * b15;
    v3 = a3[1];
    t1 += v3 * b02;
    t2 += v3 * b1;
    t3 += v3 * b22;
    t4 += v3 * b32;
    t5 += v3 * b4;
    t6 += v3 * b5;
    t7 += v3 * b6;
    t8 += v3 * b7;
    t9 += v3 * b8;
    t10 += v3 * b9;
    t11 += v3 * b10;
    t12 += v3 * b11;
    t13 += v3 * b12;
    t14 += v3 * b13;
    t15 += v3 * b14;
    t16 += v3 * b15;
    v3 = a3[2];
    t2 += v3 * b02;
    t3 += v3 * b1;
    t4 += v3 * b22;
    t5 += v3 * b32;
    t6 += v3 * b4;
    t7 += v3 * b5;
    t8 += v3 * b6;
    t9 += v3 * b7;
    t10 += v3 * b8;
    t11 += v3 * b9;
    t12 += v3 * b10;
    t13 += v3 * b11;
    t14 += v3 * b12;
    t15 += v3 * b13;
    t16 += v3 * b14;
    t17 += v3 * b15;
    v3 = a3[3];
    t3 += v3 * b02;
    t4 += v3 * b1;
    t5 += v3 * b22;
    t6 += v3 * b32;
    t7 += v3 * b4;
    t8 += v3 * b5;
    t9 += v3 * b6;
    t10 += v3 * b7;
    t11 += v3 * b8;
    t12 += v3 * b9;
    t13 += v3 * b10;
    t14 += v3 * b11;
    t15 += v3 * b12;
    t16 += v3 * b13;
    t17 += v3 * b14;
    t18 += v3 * b15;
    v3 = a3[4];
    t4 += v3 * b02;
    t5 += v3 * b1;
    t6 += v3 * b22;
    t7 += v3 * b32;
    t8 += v3 * b4;
    t9 += v3 * b5;
    t10 += v3 * b6;
    t11 += v3 * b7;
    t12 += v3 * b8;
    t13 += v3 * b9;
    t14 += v3 * b10;
    t15 += v3 * b11;
    t16 += v3 * b12;
    t17 += v3 * b13;
    t18 += v3 * b14;
    t19 += v3 * b15;
    v3 = a3[5];
    t5 += v3 * b02;
    t6 += v3 * b1;
    t7 += v3 * b22;
    t8 += v3 * b32;
    t9 += v3 * b4;
    t10 += v3 * b5;
    t11 += v3 * b6;
    t12 += v3 * b7;
    t13 += v3 * b8;
    t14 += v3 * b9;
    t15 += v3 * b10;
    t16 += v3 * b11;
    t17 += v3 * b12;
    t18 += v3 * b13;
    t19 += v3 * b14;
    t20 += v3 * b15;
    v3 = a3[6];
    t6 += v3 * b02;
    t7 += v3 * b1;
    t8 += v3 * b22;
    t9 += v3 * b32;
    t10 += v3 * b4;
    t11 += v3 * b5;
    t12 += v3 * b6;
    t13 += v3 * b7;
    t14 += v3 * b8;
    t15 += v3 * b9;
    t16 += v3 * b10;
    t17 += v3 * b11;
    t18 += v3 * b12;
    t19 += v3 * b13;
    t20 += v3 * b14;
    t21 += v3 * b15;
    v3 = a3[7];
    t7 += v3 * b02;
    t8 += v3 * b1;
    t9 += v3 * b22;
    t10 += v3 * b32;
    t11 += v3 * b4;
    t12 += v3 * b5;
    t13 += v3 * b6;
    t14 += v3 * b7;
    t15 += v3 * b8;
    t16 += v3 * b9;
    t17 += v3 * b10;
    t18 += v3 * b11;
    t19 += v3 * b12;
    t20 += v3 * b13;
    t21 += v3 * b14;
    t22 += v3 * b15;
    v3 = a3[8];
    t8 += v3 * b02;
    t9 += v3 * b1;
    t10 += v3 * b22;
    t11 += v3 * b32;
    t12 += v3 * b4;
    t13 += v3 * b5;
    t14 += v3 * b6;
    t15 += v3 * b7;
    t16 += v3 * b8;
    t17 += v3 * b9;
    t18 += v3 * b10;
    t19 += v3 * b11;
    t20 += v3 * b12;
    t21 += v3 * b13;
    t22 += v3 * b14;
    t23 += v3 * b15;
    v3 = a3[9];
    t9 += v3 * b02;
    t10 += v3 * b1;
    t11 += v3 * b22;
    t12 += v3 * b32;
    t13 += v3 * b4;
    t14 += v3 * b5;
    t15 += v3 * b6;
    t16 += v3 * b7;
    t17 += v3 * b8;
    t18 += v3 * b9;
    t19 += v3 * b10;
    t20 += v3 * b11;
    t21 += v3 * b12;
    t22 += v3 * b13;
    t23 += v3 * b14;
    t24 += v3 * b15;
    v3 = a3[10];
    t10 += v3 * b02;
    t11 += v3 * b1;
    t12 += v3 * b22;
    t13 += v3 * b32;
    t14 += v3 * b4;
    t15 += v3 * b5;
    t16 += v3 * b6;
    t17 += v3 * b7;
    t18 += v3 * b8;
    t19 += v3 * b9;
    t20 += v3 * b10;
    t21 += v3 * b11;
    t22 += v3 * b12;
    t23 += v3 * b13;
    t24 += v3 * b14;
    t25 += v3 * b15;
    v3 = a3[11];
    t11 += v3 * b02;
    t12 += v3 * b1;
    t13 += v3 * b22;
    t14 += v3 * b32;
    t15 += v3 * b4;
    t16 += v3 * b5;
    t17 += v3 * b6;
    t18 += v3 * b7;
    t19 += v3 * b8;
    t20 += v3 * b9;
    t21 += v3 * b10;
    t22 += v3 * b11;
    t23 += v3 * b12;
    t24 += v3 * b13;
    t25 += v3 * b14;
    t26 += v3 * b15;
    v3 = a3[12];
    t12 += v3 * b02;
    t13 += v3 * b1;
    t14 += v3 * b22;
    t15 += v3 * b32;
    t16 += v3 * b4;
    t17 += v3 * b5;
    t18 += v3 * b6;
    t19 += v3 * b7;
    t20 += v3 * b8;
    t21 += v3 * b9;
    t22 += v3 * b10;
    t23 += v3 * b11;
    t24 += v3 * b12;
    t25 += v3 * b13;
    t26 += v3 * b14;
    t27 += v3 * b15;
    v3 = a3[13];
    t13 += v3 * b02;
    t14 += v3 * b1;
    t15 += v3 * b22;
    t16 += v3 * b32;
    t17 += v3 * b4;
    t18 += v3 * b5;
    t19 += v3 * b6;
    t20 += v3 * b7;
    t21 += v3 * b8;
    t22 += v3 * b9;
    t23 += v3 * b10;
    t24 += v3 * b11;
    t25 += v3 * b12;
    t26 += v3 * b13;
    t27 += v3 * b14;
    t28 += v3 * b15;
    v3 = a3[14];
    t14 += v3 * b02;
    t15 += v3 * b1;
    t16 += v3 * b22;
    t17 += v3 * b32;
    t18 += v3 * b4;
    t19 += v3 * b5;
    t20 += v3 * b6;
    t21 += v3 * b7;
    t22 += v3 * b8;
    t23 += v3 * b9;
    t24 += v3 * b10;
    t25 += v3 * b11;
    t26 += v3 * b12;
    t27 += v3 * b13;
    t28 += v3 * b14;
    t29 += v3 * b15;
    v3 = a3[15];
    t15 += v3 * b02;
    t16 += v3 * b1;
    t17 += v3 * b22;
    t18 += v3 * b32;
    t19 += v3 * b4;
    t20 += v3 * b5;
    t21 += v3 * b6;
    t22 += v3 * b7;
    t23 += v3 * b8;
    t24 += v3 * b9;
    t25 += v3 * b10;
    t26 += v3 * b11;
    t27 += v3 * b12;
    t28 += v3 * b13;
    t29 += v3 * b14;
    t30 += v3 * b15;
    t0 += 38 * t16;
    t1 += 38 * t17;
    t2 += 38 * t18;
    t3 += 38 * t19;
    t4 += 38 * t20;
    t5 += 38 * t21;
    t6 += 38 * t22;
    t7 += 38 * t23;
    t8 += 38 * t24;
    t9 += 38 * t25;
    t10 += 38 * t26;
    t11 += 38 * t27;
    t12 += 38 * t28;
    t13 += 38 * t29;
    t14 += 38 * t30;
    c2 = 1;
    v3 = t0 + c2 + 65535;
    c2 = Math.floor(v3 / 65536);
    t0 = v3 - c2 * 65536;
    v3 = t1 + c2 + 65535;
    c2 = Math.floor(v3 / 65536);
    t1 = v3 - c2 * 65536;
    v3 = t2 + c2 + 65535;
    c2 = Math.floor(v3 / 65536);
    t2 = v3 - c2 * 65536;
    v3 = t3 + c2 + 65535;
    c2 = Math.floor(v3 / 65536);
    t3 = v3 - c2 * 65536;
    v3 = t4 + c2 + 65535;
    c2 = Math.floor(v3 / 65536);
    t4 = v3 - c2 * 65536;
    v3 = t5 + c2 + 65535;
    c2 = Math.floor(v3 / 65536);
    t5 = v3 - c2 * 65536;
    v3 = t6 + c2 + 65535;
    c2 = Math.floor(v3 / 65536);
    t6 = v3 - c2 * 65536;
    v3 = t7 + c2 + 65535;
    c2 = Math.floor(v3 / 65536);
    t7 = v3 - c2 * 65536;
    v3 = t8 + c2 + 65535;
    c2 = Math.floor(v3 / 65536);
    t8 = v3 - c2 * 65536;
    v3 = t9 + c2 + 65535;
    c2 = Math.floor(v3 / 65536);
    t9 = v3 - c2 * 65536;
    v3 = t10 + c2 + 65535;
    c2 = Math.floor(v3 / 65536);
    t10 = v3 - c2 * 65536;
    v3 = t11 + c2 + 65535;
    c2 = Math.floor(v3 / 65536);
    t11 = v3 - c2 * 65536;
    v3 = t12 + c2 + 65535;
    c2 = Math.floor(v3 / 65536);
    t12 = v3 - c2 * 65536;
    v3 = t13 + c2 + 65535;
    c2 = Math.floor(v3 / 65536);
    t13 = v3 - c2 * 65536;
    v3 = t14 + c2 + 65535;
    c2 = Math.floor(v3 / 65536);
    t14 = v3 - c2 * 65536;
    v3 = t15 + c2 + 65535;
    c2 = Math.floor(v3 / 65536);
    t15 = v3 - c2 * 65536;
    t0 += c2 - 1 + 37 * (c2 - 1);
    c2 = 1;
    v3 = t0 + c2 + 65535;
    c2 = Math.floor(v3 / 65536);
    t0 = v3 - c2 * 65536;
    v3 = t1 + c2 + 65535;
    c2 = Math.floor(v3 / 65536);
    t1 = v3 - c2 * 65536;
    v3 = t2 + c2 + 65535;
    c2 = Math.floor(v3 / 65536);
    t2 = v3 - c2 * 65536;
    v3 = t3 + c2 + 65535;
    c2 = Math.floor(v3 / 65536);
    t3 = v3 - c2 * 65536;
    v3 = t4 + c2 + 65535;
    c2 = Math.floor(v3 / 65536);
    t4 = v3 - c2 * 65536;
    v3 = t5 + c2 + 65535;
    c2 = Math.floor(v3 / 65536);
    t5 = v3 - c2 * 65536;
    v3 = t6 + c2 + 65535;
    c2 = Math.floor(v3 / 65536);
    t6 = v3 - c2 * 65536;
    v3 = t7 + c2 + 65535;
    c2 = Math.floor(v3 / 65536);
    t7 = v3 - c2 * 65536;
    v3 = t8 + c2 + 65535;
    c2 = Math.floor(v3 / 65536);
    t8 = v3 - c2 * 65536;
    v3 = t9 + c2 + 65535;
    c2 = Math.floor(v3 / 65536);
    t9 = v3 - c2 * 65536;
    v3 = t10 + c2 + 65535;
    c2 = Math.floor(v3 / 65536);
    t10 = v3 - c2 * 65536;
    v3 = t11 + c2 + 65535;
    c2 = Math.floor(v3 / 65536);
    t11 = v3 - c2 * 65536;
    v3 = t12 + c2 + 65535;
    c2 = Math.floor(v3 / 65536);
    t12 = v3 - c2 * 65536;
    v3 = t13 + c2 + 65535;
    c2 = Math.floor(v3 / 65536);
    t13 = v3 - c2 * 65536;
    v3 = t14 + c2 + 65535;
    c2 = Math.floor(v3 / 65536);
    t14 = v3 - c2 * 65536;
    v3 = t15 + c2 + 65535;
    c2 = Math.floor(v3 / 65536);
    t15 = v3 - c2 * 65536;
    t0 += c2 - 1 + 37 * (c2 - 1);
    o3[0] = t0;
    o3[1] = t1;
    o3[2] = t2;
    o3[3] = t3;
    o3[4] = t4;
    o3[5] = t5;
    o3[6] = t6;
    o3[7] = t7;
    o3[8] = t8;
    o3[9] = t9;
    o3[10] = t10;
    o3[11] = t11;
    o3[12] = t12;
    o3[13] = t13;
    o3[14] = t14;
    o3[15] = t15;
  }
  function square(o3, a3) {
    mul(o3, a3, a3);
  }
  function inv25519(o3, inp) {
    const c2 = gf2();
    for (let i3 = 0; i3 < 16; i3++) {
      c2[i3] = inp[i3];
    }
    for (let i3 = 253; i3 >= 0; i3--) {
      square(c2, c2);
      if (i3 !== 2 && i3 !== 4) {
        mul(c2, c2, inp);
      }
    }
    for (let i3 = 0; i3 < 16; i3++) {
      o3[i3] = c2[i3];
    }
  }
  function scalarMult(n4, p3) {
    const z2 = new Uint8Array(32);
    const x2 = new Float64Array(80);
    const a3 = gf2(), b3 = gf2(), c2 = gf2(), d4 = gf2(), e2 = gf2(), f3 = gf2();
    for (let i3 = 0; i3 < 31; i3++) {
      z2[i3] = n4[i3];
    }
    z2[31] = n4[31] & 127 | 64;
    z2[0] &= 248;
    unpack25519(x2, p3);
    for (let i3 = 0; i3 < 16; i3++) {
      b3[i3] = x2[i3];
    }
    a3[0] = d4[0] = 1;
    for (let i3 = 254; i3 >= 0; --i3) {
      const r2 = z2[i3 >>> 3] >>> (i3 & 7) & 1;
      sel25519(a3, b3, r2);
      sel25519(c2, d4, r2);
      add(e2, a3, c2);
      sub(a3, a3, c2);
      add(c2, b3, d4);
      sub(b3, b3, d4);
      square(d4, e2);
      square(f3, a3);
      mul(a3, c2, a3);
      mul(c2, b3, e2);
      add(e2, a3, c2);
      sub(a3, a3, c2);
      square(b3, a3);
      sub(c2, d4, f3);
      mul(a3, c2, _121665);
      add(a3, a3, d4);
      mul(c2, c2, a3);
      mul(a3, d4, f3);
      mul(d4, b3, x2);
      square(b3, e2);
      sel25519(a3, b3, r2);
      sel25519(c2, d4, r2);
    }
    for (let i3 = 0; i3 < 16; i3++) {
      x2[i3 + 16] = a3[i3];
      x2[i3 + 32] = c2[i3];
      x2[i3 + 48] = b3[i3];
      x2[i3 + 64] = d4[i3];
    }
    const x32 = x2.subarray(32);
    const x16 = x2.subarray(16);
    inv25519(x32, x32);
    mul(x16, x16, x32);
    const q2 = new Uint8Array(32);
    pack25519(q2, x16);
    return q2;
  }
  exports.scalarMult = scalarMult;
  function scalarMultBase(n4) {
    return scalarMult(n4, _9);
  }
  exports.scalarMultBase = scalarMultBase;
  function generateKeyPairFromSeed(seed) {
    if (seed.length !== exports.SECRET_KEY_LENGTH) {
      throw new Error(`x25519: seed must be ${exports.SECRET_KEY_LENGTH} bytes`);
    }
    const secretKey = new Uint8Array(seed);
    const publicKey = scalarMultBase(secretKey);
    return {
      publicKey,
      secretKey
    };
  }
  exports.generateKeyPairFromSeed = generateKeyPairFromSeed;
  function generateKeyPair2(prng) {
    const seed = (0, random_1.randomBytes)(32, prng);
    const result = generateKeyPairFromSeed(seed);
    (0, wipe_12.wipe)(seed);
    return result;
  }
  exports.generateKeyPair = generateKeyPair2;
  function sharedKey(mySecretKey, theirPublicKey, rejectZero = false) {
    if (mySecretKey.length !== exports.PUBLIC_KEY_LENGTH) {
      throw new Error("X25519: incorrect secret key length");
    }
    if (theirPublicKey.length !== exports.PUBLIC_KEY_LENGTH) {
      throw new Error("X25519: incorrect public key length");
    }
    const result = scalarMult(mySecretKey, theirPublicKey);
    if (rejectZero) {
      let zeros = 0;
      for (let i3 = 0; i3 < result.length; i3++) {
        zeros |= result[i3];
      }
      if (zeros === 0) {
        throw new Error("X25519: invalid shared key");
      }
    }
    return result;
  }
  exports.sharedKey = sharedKey;
})(x25519);
function allocUnsafe(size = 0) {
  if (globalThis.Buffer != null && globalThis.Buffer.allocUnsafe != null) {
    return globalThis.Buffer.allocUnsafe(size);
  }
  return new Uint8Array(size);
}
function concat(arrays, length) {
  if (!length) {
    length = arrays.reduce((acc, curr) => acc + curr.length, 0);
  }
  const output = allocUnsafe(length);
  let offset = 0;
  for (const arr of arrays) {
    output.set(arr, offset);
    offset += arr.length;
  }
  return output;
}
function base(ALPHABET, name) {
  if (ALPHABET.length >= 255) {
    throw new TypeError("Alphabet too long");
  }
  var BASE_MAP = new Uint8Array(256);
  for (var j2 = 0; j2 < BASE_MAP.length; j2++) {
    BASE_MAP[j2] = 255;
  }
  for (var i3 = 0; i3 < ALPHABET.length; i3++) {
    var x2 = ALPHABET.charAt(i3);
    var xc = x2.charCodeAt(0);
    if (BASE_MAP[xc] !== 255) {
      throw new TypeError(x2 + " is ambiguous");
    }
    BASE_MAP[xc] = i3;
  }
  var BASE = ALPHABET.length;
  var LEADER = ALPHABET.charAt(0);
  var FACTOR = Math.log(BASE) / Math.log(256);
  var iFACTOR = Math.log(256) / Math.log(BASE);
  function encode2(source) {
    if (source instanceof Uint8Array)
      ;
    else if (ArrayBuffer.isView(source)) {
      source = new Uint8Array(source.buffer, source.byteOffset, source.byteLength);
    } else if (Array.isArray(source)) {
      source = Uint8Array.from(source);
    }
    if (!(source instanceof Uint8Array)) {
      throw new TypeError("Expected Uint8Array");
    }
    if (source.length === 0) {
      return "";
    }
    var zeroes = 0;
    var length = 0;
    var pbegin = 0;
    var pend = source.length;
    while (pbegin !== pend && source[pbegin] === 0) {
      pbegin++;
      zeroes++;
    }
    var size = (pend - pbegin) * iFACTOR + 1 >>> 0;
    var b58 = new Uint8Array(size);
    while (pbegin !== pend) {
      var carry = source[pbegin];
      var i4 = 0;
      for (var it1 = size - 1; (carry !== 0 || i4 < length) && it1 !== -1; it1--, i4++) {
        carry += 256 * b58[it1] >>> 0;
        b58[it1] = carry % BASE >>> 0;
        carry = carry / BASE >>> 0;
      }
      if (carry !== 0) {
        throw new Error("Non-zero carry");
      }
      length = i4;
      pbegin++;
    }
    var it2 = size - length;
    while (it2 !== size && b58[it2] === 0) {
      it2++;
    }
    var str = LEADER.repeat(zeroes);
    for (; it2 < size; ++it2) {
      str += ALPHABET.charAt(b58[it2]);
    }
    return str;
  }
  function decodeUnsafe(source) {
    if (typeof source !== "string") {
      throw new TypeError("Expected String");
    }
    if (source.length === 0) {
      return new Uint8Array();
    }
    var psz = 0;
    if (source[psz] === " ") {
      return;
    }
    var zeroes = 0;
    var length = 0;
    while (source[psz] === LEADER) {
      zeroes++;
      psz++;
    }
    var size = (source.length - psz) * FACTOR + 1 >>> 0;
    var b256 = new Uint8Array(size);
    while (source[psz]) {
      var carry = BASE_MAP[source.charCodeAt(psz)];
      if (carry === 255) {
        return;
      }
      var i4 = 0;
      for (var it3 = size - 1; (carry !== 0 || i4 < length) && it3 !== -1; it3--, i4++) {
        carry += BASE * b256[it3] >>> 0;
        b256[it3] = carry % 256 >>> 0;
        carry = carry / 256 >>> 0;
      }
      if (carry !== 0) {
        throw new Error("Non-zero carry");
      }
      length = i4;
      psz++;
    }
    if (source[psz] === " ") {
      return;
    }
    var it4 = size - length;
    while (it4 !== size && b256[it4] === 0) {
      it4++;
    }
    var vch = new Uint8Array(zeroes + (size - it4));
    var j3 = zeroes;
    while (it4 !== size) {
      vch[j3++] = b256[it4++];
    }
    return vch;
  }
  function decode2(string2) {
    var buffer = decodeUnsafe(string2);
    if (buffer) {
      return buffer;
    }
    throw new Error(`Non-${name} character`);
  }
  return {
    encode: encode2,
    decodeUnsafe,
    decode: decode2
  };
}
var src = base;
var _brrp__multiformats_scope_baseX = src;
const coerce = (o3) => {
  if (o3 instanceof Uint8Array && o3.constructor.name === "Uint8Array")
    return o3;
  if (o3 instanceof ArrayBuffer)
    return new Uint8Array(o3);
  if (ArrayBuffer.isView(o3)) {
    return new Uint8Array(o3.buffer, o3.byteOffset, o3.byteLength);
  }
  throw new Error("Unknown type, must be binary type");
};
const fromString$1 = (str) => new TextEncoder().encode(str);
const toString$1 = (b3) => new TextDecoder().decode(b3);
class Encoder {
  constructor(name, prefix, baseEncode) {
    this.name = name;
    this.prefix = prefix;
    this.baseEncode = baseEncode;
  }
  encode(bytes) {
    if (bytes instanceof Uint8Array) {
      return `${this.prefix}${this.baseEncode(bytes)}`;
    } else {
      throw Error("Unknown type, must be binary type");
    }
  }
}
class Decoder {
  constructor(name, prefix, baseDecode) {
    this.name = name;
    this.prefix = prefix;
    if (prefix.codePointAt(0) === void 0) {
      throw new Error("Invalid prefix character");
    }
    this.prefixCodePoint = prefix.codePointAt(0);
    this.baseDecode = baseDecode;
  }
  decode(text) {
    if (typeof text === "string") {
      if (text.codePointAt(0) !== this.prefixCodePoint) {
        throw Error(`Unable to decode multibase string ${JSON.stringify(text)}, ${this.name} decoder only supports inputs prefixed with ${this.prefix}`);
      }
      return this.baseDecode(text.slice(this.prefix.length));
    } else {
      throw Error("Can only multibase decode strings");
    }
  }
  or(decoder) {
    return or$2(this, decoder);
  }
}
class ComposedDecoder {
  constructor(decoders) {
    this.decoders = decoders;
  }
  or(decoder) {
    return or$2(this, decoder);
  }
  decode(input) {
    const prefix = input[0];
    const decoder = this.decoders[prefix];
    if (decoder) {
      return decoder.decode(input);
    } else {
      throw RangeError(`Unable to decode multibase string ${JSON.stringify(input)}, only inputs prefixed with ${Object.keys(this.decoders)} are supported`);
    }
  }
}
const or$2 = (left, right) => new ComposedDecoder({
  ...left.decoders || { [left.prefix]: left },
  ...right.decoders || { [right.prefix]: right }
});
class Codec {
  constructor(name, prefix, baseEncode, baseDecode) {
    this.name = name;
    this.prefix = prefix;
    this.baseEncode = baseEncode;
    this.baseDecode = baseDecode;
    this.encoder = new Encoder(name, prefix, baseEncode);
    this.decoder = new Decoder(name, prefix, baseDecode);
  }
  encode(input) {
    return this.encoder.encode(input);
  }
  decode(input) {
    return this.decoder.decode(input);
  }
}
const from = ({ name, prefix, encode: encode2, decode: decode2 }) => new Codec(name, prefix, encode2, decode2);
const baseX = ({ prefix, name, alphabet: alphabet2 }) => {
  const { encode: encode2, decode: decode2 } = _brrp__multiformats_scope_baseX(alphabet2, name);
  return from({
    prefix,
    name,
    encode: encode2,
    decode: (text) => coerce(decode2(text))
  });
};
const decode$1 = (string2, alphabet2, bitsPerChar, name) => {
  const codes = {};
  for (let i3 = 0; i3 < alphabet2.length; ++i3) {
    codes[alphabet2[i3]] = i3;
  }
  let end = string2.length;
  while (string2[end - 1] === "=") {
    --end;
  }
  const out = new Uint8Array(end * bitsPerChar / 8 | 0);
  let bits = 0;
  let buffer = 0;
  let written = 0;
  for (let i3 = 0; i3 < end; ++i3) {
    const value = codes[string2[i3]];
    if (value === void 0) {
      throw new SyntaxError(`Non-${name} character`);
    }
    buffer = buffer << bitsPerChar | value;
    bits += bitsPerChar;
    if (bits >= 8) {
      bits -= 8;
      out[written++] = 255 & buffer >> bits;
    }
  }
  if (bits >= bitsPerChar || 255 & buffer << 8 - bits) {
    throw new SyntaxError("Unexpected end of data");
  }
  return out;
};
const encode$1 = (data, alphabet2, bitsPerChar) => {
  const pad = alphabet2[alphabet2.length - 1] === "=";
  const mask = (1 << bitsPerChar) - 1;
  let out = "";
  let bits = 0;
  let buffer = 0;
  for (let i3 = 0; i3 < data.length; ++i3) {
    buffer = buffer << 8 | data[i3];
    bits += 8;
    while (bits > bitsPerChar) {
      bits -= bitsPerChar;
      out += alphabet2[mask & buffer >> bits];
    }
  }
  if (bits) {
    out += alphabet2[mask & buffer << bitsPerChar - bits];
  }
  if (pad) {
    while (out.length * bitsPerChar & 7) {
      out += "=";
    }
  }
  return out;
};
const rfc4648 = ({ name, prefix, bitsPerChar, alphabet: alphabet2 }) => {
  return from({
    prefix,
    name,
    encode(input) {
      return encode$1(input, alphabet2, bitsPerChar);
    },
    decode(input) {
      return decode$1(input, alphabet2, bitsPerChar, name);
    }
  });
};
const identity = from({
  prefix: "\0",
  name: "identity",
  encode: (buf) => toString$1(buf),
  decode: (str) => fromString$1(str)
});
const identityBase = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  identity
}, Symbol.toStringTag, { value: "Module" }));
const base2 = rfc4648({
  prefix: "0",
  name: "base2",
  alphabet: "01",
  bitsPerChar: 1
});
const base2$1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  base2
}, Symbol.toStringTag, { value: "Module" }));
const base8 = rfc4648({
  prefix: "7",
  name: "base8",
  alphabet: "01234567",
  bitsPerChar: 3
});
const base8$1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  base8
}, Symbol.toStringTag, { value: "Module" }));
const base10 = baseX({
  prefix: "9",
  name: "base10",
  alphabet: "0123456789"
});
const base10$1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  base10
}, Symbol.toStringTag, { value: "Module" }));
const base16 = rfc4648({
  prefix: "f",
  name: "base16",
  alphabet: "0123456789abcdef",
  bitsPerChar: 4
});
const base16upper = rfc4648({
  prefix: "F",
  name: "base16upper",
  alphabet: "0123456789ABCDEF",
  bitsPerChar: 4
});
const base16$1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  base16,
  base16upper
}, Symbol.toStringTag, { value: "Module" }));
const base32 = rfc4648({
  prefix: "b",
  name: "base32",
  alphabet: "abcdefghijklmnopqrstuvwxyz234567",
  bitsPerChar: 5
});
const base32upper = rfc4648({
  prefix: "B",
  name: "base32upper",
  alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567",
  bitsPerChar: 5
});
const base32pad = rfc4648({
  prefix: "c",
  name: "base32pad",
  alphabet: "abcdefghijklmnopqrstuvwxyz234567=",
  bitsPerChar: 5
});
const base32padupper = rfc4648({
  prefix: "C",
  name: "base32padupper",
  alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567=",
  bitsPerChar: 5
});
const base32hex = rfc4648({
  prefix: "v",
  name: "base32hex",
  alphabet: "0123456789abcdefghijklmnopqrstuv",
  bitsPerChar: 5
});
const base32hexupper = rfc4648({
  prefix: "V",
  name: "base32hexupper",
  alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUV",
  bitsPerChar: 5
});
const base32hexpad = rfc4648({
  prefix: "t",
  name: "base32hexpad",
  alphabet: "0123456789abcdefghijklmnopqrstuv=",
  bitsPerChar: 5
});
const base32hexpadupper = rfc4648({
  prefix: "T",
  name: "base32hexpadupper",
  alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUV=",
  bitsPerChar: 5
});
const base32z = rfc4648({
  prefix: "h",
  name: "base32z",
  alphabet: "ybndrfg8ejkmcpqxot1uwisza345h769",
  bitsPerChar: 5
});
const base32$1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  base32,
  base32hex,
  base32hexpad,
  base32hexpadupper,
  base32hexupper,
  base32pad,
  base32padupper,
  base32upper,
  base32z
}, Symbol.toStringTag, { value: "Module" }));
const base36 = baseX({
  prefix: "k",
  name: "base36",
  alphabet: "0123456789abcdefghijklmnopqrstuvwxyz"
});
const base36upper = baseX({
  prefix: "K",
  name: "base36upper",
  alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ"
});
const base36$1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  base36,
  base36upper
}, Symbol.toStringTag, { value: "Module" }));
const base58btc = baseX({
  name: "base58btc",
  prefix: "z",
  alphabet: "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz"
});
const base58flickr = baseX({
  name: "base58flickr",
  prefix: "Z",
  alphabet: "123456789abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ"
});
const base58 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  base58btc,
  base58flickr
}, Symbol.toStringTag, { value: "Module" }));
const base64 = rfc4648({
  prefix: "m",
  name: "base64",
  alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
  bitsPerChar: 6
});
const base64pad = rfc4648({
  prefix: "M",
  name: "base64pad",
  alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
  bitsPerChar: 6
});
const base64url = rfc4648({
  prefix: "u",
  name: "base64url",
  alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_",
  bitsPerChar: 6
});
const base64urlpad = rfc4648({
  prefix: "U",
  name: "base64urlpad",
  alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_=",
  bitsPerChar: 6
});
const base64$1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  base64,
  base64pad,
  base64url,
  base64urlpad
}, Symbol.toStringTag, { value: "Module" }));
const alphabet = Array.from("🚀🪐☄🛰🌌🌑🌒🌓🌔🌕🌖🌗🌘🌍🌏🌎🐉☀💻🖥💾💿😂❤😍🤣😊🙏💕😭😘👍😅👏😁🔥🥰💔💖💙😢🤔😆🙄💪😉☺👌🤗💜😔😎😇🌹🤦🎉💞✌✨🤷😱😌🌸🙌😋💗💚😏💛🙂💓🤩😄😀🖤😃💯🙈👇🎶😒🤭❣😜💋👀😪😑💥🙋😞😩😡🤪👊🥳😥🤤👉💃😳✋😚😝😴🌟😬🙃🍀🌷😻😓⭐✅🥺🌈😈🤘💦✔😣🏃💐☹🎊💘😠☝😕🌺🎂🌻😐🖕💝🙊😹🗣💫💀👑🎵🤞😛🔴😤🌼😫⚽🤙☕🏆🤫👈😮🙆🍻🍃🐶💁😲🌿🧡🎁⚡🌞🎈❌✊👋😰🤨😶🤝🚶💰🍓💢🤟🙁🚨💨🤬✈🎀🍺🤓😙💟🌱😖👶🥴▶➡❓💎💸⬇😨🌚🦋😷🕺⚠🙅😟😵👎🤲🤠🤧📌🔵💅🧐🐾🍒😗🤑🌊🤯🐷☎💧😯💆👆🎤🙇🍑❄🌴💣🐸💌📍🥀🤢👅💡💩👐📸👻🤐🤮🎼🥵🚩🍎🍊👼💍📣🥂");
const alphabetBytesToChars = alphabet.reduce((p3, c2, i3) => {
  p3[i3] = c2;
  return p3;
}, []);
const alphabetCharsToBytes = alphabet.reduce((p3, c2, i3) => {
  p3[c2.codePointAt(0)] = i3;
  return p3;
}, []);
function encode(data) {
  return data.reduce((p3, c2) => {
    p3 += alphabetBytesToChars[c2];
    return p3;
  }, "");
}
function decode(str) {
  const byts = [];
  for (const char of str) {
    const byt = alphabetCharsToBytes[char.codePointAt(0)];
    if (byt === void 0) {
      throw new Error(`Non-base256emoji character: ${char}`);
    }
    byts.push(byt);
  }
  return new Uint8Array(byts);
}
const base256emoji = from({
  prefix: "🚀",
  name: "base256emoji",
  encode,
  decode
});
const base256emoji$1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  base256emoji
}, Symbol.toStringTag, { value: "Module" }));
new TextEncoder();
new TextDecoder();
const bases = {
  ...identityBase,
  ...base2$1,
  ...base8$1,
  ...base10$1,
  ...base16$1,
  ...base32$1,
  ...base36$1,
  ...base58,
  ...base64$1,
  ...base256emoji$1
};
function createCodec(name, prefix, encode2, decode2) {
  return {
    name,
    prefix,
    encoder: {
      name,
      prefix,
      encode: encode2
    },
    decoder: { decode: decode2 }
  };
}
const string = createCodec("utf8", "u", (buf) => {
  const decoder = new TextDecoder("utf8");
  return "u" + decoder.decode(buf);
}, (str) => {
  const encoder = new TextEncoder();
  return encoder.encode(str.substring(1));
});
const ascii = createCodec("ascii", "a", (buf) => {
  let string2 = "a";
  for (let i3 = 0; i3 < buf.length; i3++) {
    string2 += String.fromCharCode(buf[i3]);
  }
  return string2;
}, (str) => {
  str = str.substring(1);
  const buf = allocUnsafe(str.length);
  for (let i3 = 0; i3 < str.length; i3++) {
    buf[i3] = str.charCodeAt(i3);
  }
  return buf;
});
const BASES = {
  utf8: string,
  "utf-8": string,
  hex: bases.base16,
  latin1: ascii,
  ascii,
  binary: ascii,
  ...bases
};
function fromString(string2, encoding = "utf8") {
  const base3 = BASES[encoding];
  if (!base3) {
    throw new Error(`Unsupported encoding "${encoding}"`);
  }
  if ((encoding === "utf8" || encoding === "utf-8") && globalThis.Buffer != null && globalThis.Buffer.from != null) {
    return globalThis.Buffer.from(string2, "utf8");
  }
  return base3.decoder.decode(`${base3.prefix}${string2}`);
}
function toString(array, encoding = "utf8") {
  const base3 = BASES[encoding];
  if (!base3) {
    throw new Error(`Unsupported encoding "${encoding}"`);
  }
  if ((encoding === "utf8" || encoding === "utf-8") && globalThis.Buffer != null && globalThis.Buffer.from != null) {
    return globalThis.Buffer.from(array.buffer, array.byteOffset, array.byteLength).toString("utf8");
  }
  return base3.encoder.encode(array).substring(1);
}
const C$3 = { waku: { publish: "waku_publish", batchPublish: "waku_batchPublish", subscribe: "waku_subscribe", batchSubscribe: "waku_batchSubscribe", subscription: "waku_subscription", unsubscribe: "waku_unsubscribe", batchUnsubscribe: "waku_batchUnsubscribe", batchFetchMessages: "waku_batchFetchMessages" }, irn: { publish: "irn_publish", batchPublish: "irn_batchPublish", subscribe: "irn_subscribe", batchSubscribe: "irn_batchSubscribe", subscription: "irn_subscription", unsubscribe: "irn_unsubscribe", batchUnsubscribe: "irn_batchUnsubscribe", batchFetchMessages: "irn_batchFetchMessages" }, iridium: { publish: "iridium_publish", batchPublish: "iridium_batchPublish", subscribe: "iridium_subscribe", batchSubscribe: "iridium_batchSubscribe", subscription: "iridium_subscription", unsubscribe: "iridium_unsubscribe", batchUnsubscribe: "iridium_batchUnsubscribe", batchFetchMessages: "iridium_batchFetchMessages" } };
const Ir$1 = ":";
function dn(e2) {
  const [t, r2] = e2.split(Ir$1);
  return { namespace: t, reference: r2 };
}
function zo(e2, t = []) {
  const r2 = [];
  return Object.keys(e2).forEach((i3) => {
    if (t.length && !t.includes(i3))
      return;
    const n4 = e2[i3];
    r2.push(...n4.accounts);
  }), r2;
}
function _r$1(e2, t) {
  return e2.includes(":") ? [e2] : t.chains || [];
}
var Qo = Object.defineProperty, bn = Object.getOwnPropertySymbols, Jo = Object.prototype.hasOwnProperty, Go = Object.prototype.propertyIsEnumerable, yn = (e2, t, r2) => t in e2 ? Qo(e2, t, { enumerable: true, configurable: true, writable: true, value: r2 }) : e2[t] = r2, wn = (e2, t) => {
  for (var r2 in t || (t = {}))
    Jo.call(t, r2) && yn(e2, r2, t[r2]);
  if (bn)
    for (var r2 of bn(t))
      Go.call(t, r2) && yn(e2, r2, t[r2]);
  return e2;
};
const xn = "ReactNative", qt$1 = { reactNative: "react-native", node: "node", browser: "browser", unknown: "unknown" }, En = "js";
function pi() {
  return typeof process$1 < "u" && typeof process$1.versions < "u" && typeof process$1.versions.node < "u";
}
function er$1() {
  return !getDocument_1() && !!getNavigator_1() && navigator.product === xn;
}
function pr$1() {
  return !pi() && !!getNavigator_1() && !!getDocument_1();
}
function We$2() {
  return er$1() ? qt$1.reactNative : pi() ? qt$1.node : pr$1() ? qt$1.browser : qt$1.unknown;
}
function Wo() {
  var e2;
  try {
    return er$1() && typeof global < "u" && typeof (global == null ? void 0 : global.Application) < "u" ? (e2 = global.Application) == null ? void 0 : e2.applicationId : void 0;
  } catch {
    return;
  }
}
function Sn(e2, t) {
  let r2 = queryString.parse(e2);
  return r2 = wn(wn({}, r2), t), e2 = queryString.stringify(r2), e2;
}
function Xo() {
  return getWindowMetadata_1() || { name: "", description: "", url: "", icons: [""] };
}
function Nn() {
  if (We$2() === qt$1.reactNative && typeof global < "u" && typeof (global == null ? void 0 : global.Platform) < "u") {
    const { OS: r2, Version: i3 } = global.Platform;
    return [r2, i3].join("-");
  }
  const e2 = detect();
  if (e2 === null)
    return "unknown";
  const t = e2.os ? e2.os.replace(" ", "").toLowerCase() : "unknown";
  return e2.type === "browser" ? [t, e2.name, e2.version].join("-") : [t, e2.version].join("-");
}
function In() {
  var e2;
  const t = We$2();
  return t === qt$1.browser ? [t, ((e2 = getLocation_1()) == null ? void 0 : e2.host) || "unknown"].join(":") : t;
}
function _n(e2, t, r2) {
  const i3 = Nn(), n4 = In();
  return [[e2, t].join("-"), [En, r2].join("-"), i3, n4].join("/");
}
function $o({ protocol: e2, version: t, relayUrl: r2, sdkVersion: i3, auth: n4, projectId: o3, useOnCloseEvent: h4, bundleId: p3 }) {
  const b3 = r2.split("?"), m3 = _n(e2, t, i3), w3 = { auth: n4, ua: m3, projectId: o3, useOnCloseEvent: h4 || void 0, origin: p3 || void 0 }, y3 = Sn(b3[1] || "", w3);
  return b3[0] + "?" + y3;
}
function _e$1(e2, t) {
  return e2.filter((r2) => t.includes(r2)).length === e2.length;
}
function i0(e2) {
  return Object.fromEntries(e2.entries());
}
function n0(e2) {
  return new Map(Object.entries(e2));
}
function a0(e2 = cjs$3.FIVE_MINUTES, t) {
  const r2 = cjs$3.toMiliseconds(e2 || cjs$3.FIVE_MINUTES);
  let i3, n4, o3;
  return { resolve: (h4) => {
    o3 && i3 && (clearTimeout(o3), i3(h4));
  }, reject: (h4) => {
    o3 && n4 && (clearTimeout(o3), n4(h4));
  }, done: () => new Promise((h4, p3) => {
    o3 = setTimeout(() => {
      p3(new Error(t));
    }, r2), i3 = h4, n4 = p3;
  }) };
}
function u0(e2, t, r2) {
  return new Promise(async (i3, n4) => {
    const o3 = setTimeout(() => n4(new Error(r2)), t);
    try {
      const h4 = await e2;
      i3(h4);
    } catch (h4) {
      n4(h4);
    }
    clearTimeout(o3);
  });
}
function vi(e2, t) {
  if (typeof t == "string" && t.startsWith(`${e2}:`))
    return t;
  if (e2.toLowerCase() === "topic") {
    if (typeof t != "string")
      throw new Error('Value must be "string" for expirer target type: topic');
    return `topic:${t}`;
  } else if (e2.toLowerCase() === "id") {
    if (typeof t != "number")
      throw new Error('Value must be "number" for expirer target type: id');
    return `id:${t}`;
  }
  throw new Error(`Unknown expirer target type: ${e2}`);
}
function h0(e2) {
  return vi("topic", e2);
}
function c0(e2) {
  return vi("id", e2);
}
function l0(e2) {
  const [t, r2] = e2.split(":"), i3 = { id: void 0, topic: void 0 };
  if (t === "topic" && typeof r2 == "string")
    i3.topic = r2;
  else if (t === "id" && Number.isInteger(Number(r2)))
    i3.id = Number(r2);
  else
    throw new Error(`Invalid target, expected id:number or topic:string, got ${t}:${r2}`);
  return i3;
}
function d0(e2, t) {
  return cjs$3.fromMiliseconds(Date.now() + cjs$3.toMiliseconds(e2));
}
function p0(e2) {
  return Date.now() >= cjs$3.toMiliseconds(e2);
}
function v0(e2, t) {
  return `${e2}${t ? `:${t}` : ""}`;
}
function ge$2(e2 = [], t = []) {
  return [.../* @__PURE__ */ new Set([...e2, ...t])];
}
async function m0({ id: e2, topic: t, wcDeepLink: r2 }) {
  try {
    if (!r2)
      return;
    const i3 = typeof r2 == "string" ? JSON.parse(r2) : r2;
    let n4 = i3 == null ? void 0 : i3.href;
    if (typeof n4 != "string")
      return;
    n4.endsWith("/") && (n4 = n4.slice(0, -1));
    const o3 = `${n4}/wc?requestId=${e2}&sessionTopic=${t}`, h4 = We$2();
    h4 === qt$1.browser ? o3.startsWith("https://") || o3.startsWith("http://") ? window.open(o3, "_blank", "noreferrer noopener") : window.open(o3, "_self", "noreferrer noopener") : h4 === qt$1.reactNative && typeof (global == null ? void 0 : global.Linking) < "u" && await global.Linking.openURL(o3);
  } catch (i3) {
    console.error(i3);
  }
}
async function g0(e2, t) {
  try {
    return await e2.getItem(t) || (pr$1() ? localStorage.getItem(t) : void 0);
  } catch (r2) {
    console.error(r2);
  }
}
var On = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function A0(e2) {
  var t = e2.default;
  if (typeof t == "function") {
    var r2 = function() {
      return t.apply(this, arguments);
    };
    r2.prototype = t.prototype;
  } else
    r2 = {};
  return Object.defineProperty(r2, "__esModule", { value: true }), Object.keys(e2).forEach(function(i3) {
    var n4 = Object.getOwnPropertyDescriptor(e2, i3);
    Object.defineProperty(r2, i3, n4.get ? n4 : { enumerable: true, get: function() {
      return e2[i3];
    } });
  }), r2;
}
var Pn = { exports: {} };
/**
* [js-sha3]{@link https://github.com/emn178/js-sha3}
*
* @version 0.8.0
* @author Chen, Yi-Cyuan [emn178@gmail.com]
* @copyright Chen, Yi-Cyuan 2015-2018
* @license MIT
*/
(function(e2) {
  (function() {
    var t = "input is invalid type", r2 = "finalize already called", i3 = typeof window == "object", n4 = i3 ? window : {};
    n4.JS_SHA3_NO_WINDOW && (i3 = false);
    var o3 = !i3 && typeof self == "object", h4 = !n4.JS_SHA3_NO_NODE_JS && typeof process$1 == "object" && process$1.versions && process$1.versions.node;
    h4 ? n4 = On : o3 && (n4 = self);
    var p3 = !n4.JS_SHA3_NO_COMMON_JS && true && e2.exports, b3 = !n4.JS_SHA3_NO_ARRAY_BUFFER && typeof ArrayBuffer < "u", m3 = "0123456789abcdef".split(""), w3 = [31, 7936, 2031616, 520093696], y3 = [4, 1024, 262144, 67108864], S2 = [1, 256, 65536, 16777216], I2 = [6, 1536, 393216, 100663296], N2 = [0, 8, 16, 24], C2 = [1, 0, 32898, 0, 32906, 2147483648, 2147516416, 2147483648, 32907, 0, 2147483649, 0, 2147516545, 2147483648, 32777, 2147483648, 138, 0, 136, 0, 2147516425, 0, 2147483658, 0, 2147516555, 0, 139, 2147483648, 32905, 2147483648, 32771, 2147483648, 32770, 2147483648, 128, 2147483648, 32778, 0, 2147483658, 2147483648, 2147516545, 2147483648, 32896, 2147483648, 2147483649, 0, 2147516424, 2147483648], F = [224, 256, 384, 512], U2 = [128, 256], J2 = ["hex", "buffer", "arrayBuffer", "array", "digest"], Bt2 = { 128: 168, 256: 136 };
    (n4.JS_SHA3_NO_NODE_JS || !Array.isArray) && (Array.isArray = function(u3) {
      return Object.prototype.toString.call(u3) === "[object Array]";
    }), b3 && (n4.JS_SHA3_NO_ARRAY_BUFFER_IS_VIEW || !ArrayBuffer.isView) && (ArrayBuffer.isView = function(u3) {
      return typeof u3 == "object" && u3.buffer && u3.buffer.constructor === ArrayBuffer;
    });
    for (var G = function(u3, E3, _3) {
      return function(B3) {
        return new s2(u3, E3, u3).update(B3)[_3]();
      };
    }, H = function(u3, E3, _3) {
      return function(B3, R) {
        return new s2(u3, E3, R).update(B3)[_3]();
      };
    }, z2 = function(u3, E3, _3) {
      return function(B3, R, T2, P2) {
        return f3["cshake" + u3].update(B3, R, T2, P2)[_3]();
      };
    }, Pt2 = function(u3, E3, _3) {
      return function(B3, R, T2, P2) {
        return f3["kmac" + u3].update(B3, R, T2, P2)[_3]();
      };
    }, W = function(u3, E3, _3, B3) {
      for (var R = 0; R < J2.length; ++R) {
        var T2 = J2[R];
        u3[T2] = E3(_3, B3, T2);
      }
      return u3;
    }, Rt2 = function(u3, E3) {
      var _3 = G(u3, E3, "hex");
      return _3.create = function() {
        return new s2(u3, E3, u3);
      }, _3.update = function(B3) {
        return _3.create().update(B3);
      }, W(_3, G, u3, E3);
    }, Yt3 = function(u3, E3) {
      var _3 = H(u3, E3, "hex");
      return _3.create = function(B3) {
        return new s2(u3, E3, B3);
      }, _3.update = function(B3, R) {
        return _3.create(R).update(B3);
      }, W(_3, H, u3, E3);
    }, Y = function(u3, E3) {
      var _3 = Bt2[u3], B3 = z2(u3, E3, "hex");
      return B3.create = function(R, T2, P2) {
        return !T2 && !P2 ? f3["shake" + u3].create(R) : new s2(u3, E3, R).bytepad([T2, P2], _3);
      }, B3.update = function(R, T2, P2, O3) {
        return B3.create(T2, P2, O3).update(R);
      }, W(B3, z2, u3, E3);
    }, Vt2 = function(u3, E3) {
      var _3 = Bt2[u3], B3 = Pt2(u3, E3, "hex");
      return B3.create = function(R, T2, P2) {
        return new v3(u3, E3, T2).bytepad(["KMAC", P2], _3).bytepad([R], _3);
      }, B3.update = function(R, T2, P2, O3) {
        return B3.create(R, P2, O3).update(T2);
      }, W(B3, Pt2, u3, E3);
    }, A2 = [{ name: "keccak", padding: S2, bits: F, createMethod: Rt2 }, { name: "sha3", padding: I2, bits: F, createMethod: Rt2 }, { name: "shake", padding: w3, bits: U2, createMethod: Yt3 }, { name: "cshake", padding: y3, bits: U2, createMethod: Y }, { name: "kmac", padding: y3, bits: U2, createMethod: Vt2 }], f3 = {}, a3 = [], c2 = 0; c2 < A2.length; ++c2)
      for (var d4 = A2[c2], g3 = d4.bits, x2 = 0; x2 < g3.length; ++x2) {
        var M2 = d4.name + "_" + g3[x2];
        if (a3.push(M2), f3[M2] = d4.createMethod(g3[x2], d4.padding), d4.name !== "sha3") {
          var l2 = d4.name + g3[x2];
          a3.push(l2), f3[l2] = f3[M2];
        }
      }
    function s2(u3, E3, _3) {
      this.blocks = [], this.s = [], this.padding = E3, this.outputBits = _3, this.reset = true, this.finalized = false, this.block = 0, this.start = 0, this.blockCount = 1600 - (u3 << 1) >> 5, this.byteCount = this.blockCount << 2, this.outputBlocks = _3 >> 5, this.extraBytes = (_3 & 31) >> 3;
      for (var B3 = 0; B3 < 50; ++B3)
        this.s[B3] = 0;
    }
    s2.prototype.update = function(u3) {
      if (this.finalized)
        throw new Error(r2);
      var E3, _3 = typeof u3;
      if (_3 !== "string") {
        if (_3 === "object") {
          if (u3 === null)
            throw new Error(t);
          if (b3 && u3.constructor === ArrayBuffer)
            u3 = new Uint8Array(u3);
          else if (!Array.isArray(u3) && (!b3 || !ArrayBuffer.isView(u3)))
            throw new Error(t);
        } else
          throw new Error(t);
        E3 = true;
      }
      for (var B3 = this.blocks, R = this.byteCount, T2 = u3.length, P2 = this.blockCount, O3 = 0, Ct2 = this.s, D2, q2; O3 < T2; ) {
        if (this.reset)
          for (this.reset = false, B3[0] = this.block, D2 = 1; D2 < P2 + 1; ++D2)
            B3[D2] = 0;
        if (E3)
          for (D2 = this.start; O3 < T2 && D2 < R; ++O3)
            B3[D2 >> 2] |= u3[O3] << N2[D2++ & 3];
        else
          for (D2 = this.start; O3 < T2 && D2 < R; ++O3)
            q2 = u3.charCodeAt(O3), q2 < 128 ? B3[D2 >> 2] |= q2 << N2[D2++ & 3] : q2 < 2048 ? (B3[D2 >> 2] |= (192 | q2 >> 6) << N2[D2++ & 3], B3[D2 >> 2] |= (128 | q2 & 63) << N2[D2++ & 3]) : q2 < 55296 || q2 >= 57344 ? (B3[D2 >> 2] |= (224 | q2 >> 12) << N2[D2++ & 3], B3[D2 >> 2] |= (128 | q2 >> 6 & 63) << N2[D2++ & 3], B3[D2 >> 2] |= (128 | q2 & 63) << N2[D2++ & 3]) : (q2 = 65536 + ((q2 & 1023) << 10 | u3.charCodeAt(++O3) & 1023), B3[D2 >> 2] |= (240 | q2 >> 18) << N2[D2++ & 3], B3[D2 >> 2] |= (128 | q2 >> 12 & 63) << N2[D2++ & 3], B3[D2 >> 2] |= (128 | q2 >> 6 & 63) << N2[D2++ & 3], B3[D2 >> 2] |= (128 | q2 & 63) << N2[D2++ & 3]);
        if (this.lastByteIndex = D2, D2 >= R) {
          for (this.start = D2 - R, this.block = B3[P2], D2 = 0; D2 < P2; ++D2)
            Ct2[D2] ^= B3[D2];
          k2(Ct2), this.reset = true;
        } else
          this.start = D2;
      }
      return this;
    }, s2.prototype.encode = function(u3, E3) {
      var _3 = u3 & 255, B3 = 1, R = [_3];
      for (u3 = u3 >> 8, _3 = u3 & 255; _3 > 0; )
        R.unshift(_3), u3 = u3 >> 8, _3 = u3 & 255, ++B3;
      return E3 ? R.push(B3) : R.unshift(B3), this.update(R), R.length;
    }, s2.prototype.encodeString = function(u3) {
      var E3, _3 = typeof u3;
      if (_3 !== "string") {
        if (_3 === "object") {
          if (u3 === null)
            throw new Error(t);
          if (b3 && u3.constructor === ArrayBuffer)
            u3 = new Uint8Array(u3);
          else if (!Array.isArray(u3) && (!b3 || !ArrayBuffer.isView(u3)))
            throw new Error(t);
        } else
          throw new Error(t);
        E3 = true;
      }
      var B3 = 0, R = u3.length;
      if (E3)
        B3 = R;
      else
        for (var T2 = 0; T2 < u3.length; ++T2) {
          var P2 = u3.charCodeAt(T2);
          P2 < 128 ? B3 += 1 : P2 < 2048 ? B3 += 2 : P2 < 55296 || P2 >= 57344 ? B3 += 3 : (P2 = 65536 + ((P2 & 1023) << 10 | u3.charCodeAt(++T2) & 1023), B3 += 4);
        }
      return B3 += this.encode(B3 * 8), this.update(u3), B3;
    }, s2.prototype.bytepad = function(u3, E3) {
      for (var _3 = this.encode(E3), B3 = 0; B3 < u3.length; ++B3)
        _3 += this.encodeString(u3[B3]);
      var R = E3 - _3 % E3, T2 = [];
      return T2.length = R, this.update(T2), this;
    }, s2.prototype.finalize = function() {
      if (!this.finalized) {
        this.finalized = true;
        var u3 = this.blocks, E3 = this.lastByteIndex, _3 = this.blockCount, B3 = this.s;
        if (u3[E3 >> 2] |= this.padding[E3 & 3], this.lastByteIndex === this.byteCount)
          for (u3[0] = u3[_3], E3 = 1; E3 < _3 + 1; ++E3)
            u3[E3] = 0;
        for (u3[_3 - 1] |= 2147483648, E3 = 0; E3 < _3; ++E3)
          B3[E3] ^= u3[E3];
        k2(B3);
      }
    }, s2.prototype.toString = s2.prototype.hex = function() {
      this.finalize();
      for (var u3 = this.blockCount, E3 = this.s, _3 = this.outputBlocks, B3 = this.extraBytes, R = 0, T2 = 0, P2 = "", O3; T2 < _3; ) {
        for (R = 0; R < u3 && T2 < _3; ++R, ++T2)
          O3 = E3[R], P2 += m3[O3 >> 4 & 15] + m3[O3 & 15] + m3[O3 >> 12 & 15] + m3[O3 >> 8 & 15] + m3[O3 >> 20 & 15] + m3[O3 >> 16 & 15] + m3[O3 >> 28 & 15] + m3[O3 >> 24 & 15];
        T2 % u3 === 0 && (k2(E3), R = 0);
      }
      return B3 && (O3 = E3[R], P2 += m3[O3 >> 4 & 15] + m3[O3 & 15], B3 > 1 && (P2 += m3[O3 >> 12 & 15] + m3[O3 >> 8 & 15]), B3 > 2 && (P2 += m3[O3 >> 20 & 15] + m3[O3 >> 16 & 15])), P2;
    }, s2.prototype.arrayBuffer = function() {
      this.finalize();
      var u3 = this.blockCount, E3 = this.s, _3 = this.outputBlocks, B3 = this.extraBytes, R = 0, T2 = 0, P2 = this.outputBits >> 3, O3;
      B3 ? O3 = new ArrayBuffer(_3 + 1 << 2) : O3 = new ArrayBuffer(P2);
      for (var Ct2 = new Uint32Array(O3); T2 < _3; ) {
        for (R = 0; R < u3 && T2 < _3; ++R, ++T2)
          Ct2[T2] = E3[R];
        T2 % u3 === 0 && k2(E3);
      }
      return B3 && (Ct2[R] = E3[R], O3 = O3.slice(0, P2)), O3;
    }, s2.prototype.buffer = s2.prototype.arrayBuffer, s2.prototype.digest = s2.prototype.array = function() {
      this.finalize();
      for (var u3 = this.blockCount, E3 = this.s, _3 = this.outputBlocks, B3 = this.extraBytes, R = 0, T2 = 0, P2 = [], O3, Ct2; T2 < _3; ) {
        for (R = 0; R < u3 && T2 < _3; ++R, ++T2)
          O3 = T2 << 2, Ct2 = E3[R], P2[O3] = Ct2 & 255, P2[O3 + 1] = Ct2 >> 8 & 255, P2[O3 + 2] = Ct2 >> 16 & 255, P2[O3 + 3] = Ct2 >> 24 & 255;
        T2 % u3 === 0 && k2(E3);
      }
      return B3 && (O3 = T2 << 2, Ct2 = E3[R], P2[O3] = Ct2 & 255, B3 > 1 && (P2[O3 + 1] = Ct2 >> 8 & 255), B3 > 2 && (P2[O3 + 2] = Ct2 >> 16 & 255)), P2;
    };
    function v3(u3, E3, _3) {
      s2.call(this, u3, E3, _3);
    }
    v3.prototype = new s2(), v3.prototype.finalize = function() {
      return this.encode(this.outputBits, true), s2.prototype.finalize.call(this);
    };
    var k2 = function(u3) {
      var E3, _3, B3, R, T2, P2, O3, Ct2, D2, q2, De2, X2, Z2, Fe2, $2, tt2, Te, et2, rt2, Ue2, it2, nt2, ke2, ft2, ot2, qe2, st2, at2, Ke2, ut2, ht2, He2, ct2, lt2, ze2, dt2, pt2, Le, vt2, mt2, je2, gt2, At2, Qe2, bt2, yt2, Je2, wt2, xt2, Ge2, Mt2, Et2, Ye2, St2, Nt2, Ve2, It2, _t2, Me2, Ee2, Se2, Ne, Ie;
      for (B3 = 0; B3 < 48; B3 += 2)
        R = u3[0] ^ u3[10] ^ u3[20] ^ u3[30] ^ u3[40], T2 = u3[1] ^ u3[11] ^ u3[21] ^ u3[31] ^ u3[41], P2 = u3[2] ^ u3[12] ^ u3[22] ^ u3[32] ^ u3[42], O3 = u3[3] ^ u3[13] ^ u3[23] ^ u3[33] ^ u3[43], Ct2 = u3[4] ^ u3[14] ^ u3[24] ^ u3[34] ^ u3[44], D2 = u3[5] ^ u3[15] ^ u3[25] ^ u3[35] ^ u3[45], q2 = u3[6] ^ u3[16] ^ u3[26] ^ u3[36] ^ u3[46], De2 = u3[7] ^ u3[17] ^ u3[27] ^ u3[37] ^ u3[47], X2 = u3[8] ^ u3[18] ^ u3[28] ^ u3[38] ^ u3[48], Z2 = u3[9] ^ u3[19] ^ u3[29] ^ u3[39] ^ u3[49], E3 = X2 ^ (P2 << 1 | O3 >>> 31), _3 = Z2 ^ (O3 << 1 | P2 >>> 31), u3[0] ^= E3, u3[1] ^= _3, u3[10] ^= E3, u3[11] ^= _3, u3[20] ^= E3, u3[21] ^= _3, u3[30] ^= E3, u3[31] ^= _3, u3[40] ^= E3, u3[41] ^= _3, E3 = R ^ (Ct2 << 1 | D2 >>> 31), _3 = T2 ^ (D2 << 1 | Ct2 >>> 31), u3[2] ^= E3, u3[3] ^= _3, u3[12] ^= E3, u3[13] ^= _3, u3[22] ^= E3, u3[23] ^= _3, u3[32] ^= E3, u3[33] ^= _3, u3[42] ^= E3, u3[43] ^= _3, E3 = P2 ^ (q2 << 1 | De2 >>> 31), _3 = O3 ^ (De2 << 1 | q2 >>> 31), u3[4] ^= E3, u3[5] ^= _3, u3[14] ^= E3, u3[15] ^= _3, u3[24] ^= E3, u3[25] ^= _3, u3[34] ^= E3, u3[35] ^= _3, u3[44] ^= E3, u3[45] ^= _3, E3 = Ct2 ^ (X2 << 1 | Z2 >>> 31), _3 = D2 ^ (Z2 << 1 | X2 >>> 31), u3[6] ^= E3, u3[7] ^= _3, u3[16] ^= E3, u3[17] ^= _3, u3[26] ^= E3, u3[27] ^= _3, u3[36] ^= E3, u3[37] ^= _3, u3[46] ^= E3, u3[47] ^= _3, E3 = q2 ^ (R << 1 | T2 >>> 31), _3 = De2 ^ (T2 << 1 | R >>> 31), u3[8] ^= E3, u3[9] ^= _3, u3[18] ^= E3, u3[19] ^= _3, u3[28] ^= E3, u3[29] ^= _3, u3[38] ^= E3, u3[39] ^= _3, u3[48] ^= E3, u3[49] ^= _3, Fe2 = u3[0], $2 = u3[1], yt2 = u3[11] << 4 | u3[10] >>> 28, Je2 = u3[10] << 4 | u3[11] >>> 28, at2 = u3[20] << 3 | u3[21] >>> 29, Ke2 = u3[21] << 3 | u3[20] >>> 29, Ee2 = u3[31] << 9 | u3[30] >>> 23, Se2 = u3[30] << 9 | u3[31] >>> 23, gt2 = u3[40] << 18 | u3[41] >>> 14, At2 = u3[41] << 18 | u3[40] >>> 14, lt2 = u3[2] << 1 | u3[3] >>> 31, ze2 = u3[3] << 1 | u3[2] >>> 31, tt2 = u3[13] << 12 | u3[12] >>> 20, Te = u3[12] << 12 | u3[13] >>> 20, wt2 = u3[22] << 10 | u3[23] >>> 22, xt2 = u3[23] << 10 | u3[22] >>> 22, ut2 = u3[33] << 13 | u3[32] >>> 19, ht2 = u3[32] << 13 | u3[33] >>> 19, Ne = u3[42] << 2 | u3[43] >>> 30, Ie = u3[43] << 2 | u3[42] >>> 30, St2 = u3[5] << 30 | u3[4] >>> 2, Nt2 = u3[4] << 30 | u3[5] >>> 2, dt2 = u3[14] << 6 | u3[15] >>> 26, pt2 = u3[15] << 6 | u3[14] >>> 26, et2 = u3[25] << 11 | u3[24] >>> 21, rt2 = u3[24] << 11 | u3[25] >>> 21, Ge2 = u3[34] << 15 | u3[35] >>> 17, Mt2 = u3[35] << 15 | u3[34] >>> 17, He2 = u3[45] << 29 | u3[44] >>> 3, ct2 = u3[44] << 29 | u3[45] >>> 3, ft2 = u3[6] << 28 | u3[7] >>> 4, ot2 = u3[7] << 28 | u3[6] >>> 4, Ve2 = u3[17] << 23 | u3[16] >>> 9, It2 = u3[16] << 23 | u3[17] >>> 9, Le = u3[26] << 25 | u3[27] >>> 7, vt2 = u3[27] << 25 | u3[26] >>> 7, Ue2 = u3[36] << 21 | u3[37] >>> 11, it2 = u3[37] << 21 | u3[36] >>> 11, Et2 = u3[47] << 24 | u3[46] >>> 8, Ye2 = u3[46] << 24 | u3[47] >>> 8, Qe2 = u3[8] << 27 | u3[9] >>> 5, bt2 = u3[9] << 27 | u3[8] >>> 5, qe2 = u3[18] << 20 | u3[19] >>> 12, st2 = u3[19] << 20 | u3[18] >>> 12, _t2 = u3[29] << 7 | u3[28] >>> 25, Me2 = u3[28] << 7 | u3[29] >>> 25, mt2 = u3[38] << 8 | u3[39] >>> 24, je2 = u3[39] << 8 | u3[38] >>> 24, nt2 = u3[48] << 14 | u3[49] >>> 18, ke2 = u3[49] << 14 | u3[48] >>> 18, u3[0] = Fe2 ^ ~tt2 & et2, u3[1] = $2 ^ ~Te & rt2, u3[10] = ft2 ^ ~qe2 & at2, u3[11] = ot2 ^ ~st2 & Ke2, u3[20] = lt2 ^ ~dt2 & Le, u3[21] = ze2 ^ ~pt2 & vt2, u3[30] = Qe2 ^ ~yt2 & wt2, u3[31] = bt2 ^ ~Je2 & xt2, u3[40] = St2 ^ ~Ve2 & _t2, u3[41] = Nt2 ^ ~It2 & Me2, u3[2] = tt2 ^ ~et2 & Ue2, u3[3] = Te ^ ~rt2 & it2, u3[12] = qe2 ^ ~at2 & ut2, u3[13] = st2 ^ ~Ke2 & ht2, u3[22] = dt2 ^ ~Le & mt2, u3[23] = pt2 ^ ~vt2 & je2, u3[32] = yt2 ^ ~wt2 & Ge2, u3[33] = Je2 ^ ~xt2 & Mt2, u3[42] = Ve2 ^ ~_t2 & Ee2, u3[43] = It2 ^ ~Me2 & Se2, u3[4] = et2 ^ ~Ue2 & nt2, u3[5] = rt2 ^ ~it2 & ke2, u3[14] = at2 ^ ~ut2 & He2, u3[15] = Ke2 ^ ~ht2 & ct2, u3[24] = Le ^ ~mt2 & gt2, u3[25] = vt2 ^ ~je2 & At2, u3[34] = wt2 ^ ~Ge2 & Et2, u3[35] = xt2 ^ ~Mt2 & Ye2, u3[44] = _t2 ^ ~Ee2 & Ne, u3[45] = Me2 ^ ~Se2 & Ie, u3[6] = Ue2 ^ ~nt2 & Fe2, u3[7] = it2 ^ ~ke2 & $2, u3[16] = ut2 ^ ~He2 & ft2, u3[17] = ht2 ^ ~ct2 & ot2, u3[26] = mt2 ^ ~gt2 & lt2, u3[27] = je2 ^ ~At2 & ze2, u3[36] = Ge2 ^ ~Et2 & Qe2, u3[37] = Mt2 ^ ~Ye2 & bt2, u3[46] = Ee2 ^ ~Ne & St2, u3[47] = Se2 ^ ~Ie & Nt2, u3[8] = nt2 ^ ~Fe2 & tt2, u3[9] = ke2 ^ ~$2 & Te, u3[18] = He2 ^ ~ft2 & qe2, u3[19] = ct2 ^ ~ot2 & st2, u3[28] = gt2 ^ ~lt2 & dt2, u3[29] = At2 ^ ~ze2 & pt2, u3[38] = Et2 ^ ~Qe2 & yt2, u3[39] = Ye2 ^ ~bt2 & Je2, u3[48] = Ne ^ ~St2 & Ve2, u3[49] = Ie ^ ~Nt2 & It2, u3[0] ^= C2[B3], u3[1] ^= C2[B3 + 1];
    };
    if (p3)
      e2.exports = f3;
    else
      for (c2 = 0; c2 < a3.length; ++c2)
        n4[a3[c2]] = f3[a3[c2]];
  })();
})(Pn);
var b0 = Pn.exports;
const y0 = "logger/5.7.0";
let Dn = false, Fn = false;
const Cr$1 = { debug: 1, default: 2, info: 2, warning: 3, error: 4, off: 5 };
let Tn = Cr$1.default, gi = null;
function w0() {
  try {
    const e2 = [];
    if (["NFD", "NFC", "NFKD", "NFKC"].forEach((t) => {
      try {
        if ("test".normalize(t) !== "test")
          throw new Error("bad normalize");
      } catch {
        e2.push(t);
      }
    }), e2.length)
      throw new Error("missing " + e2.join(", "));
    if (String.fromCharCode(233).normalize("NFD") !== String.fromCharCode(101, 769))
      throw new Error("broken implementation");
  } catch (e2) {
    return e2.message;
  }
  return null;
}
const Un = w0();
var Ai;
(function(e2) {
  e2.DEBUG = "DEBUG", e2.INFO = "INFO", e2.WARNING = "WARNING", e2.ERROR = "ERROR", e2.OFF = "OFF";
})(Ai || (Ai = {}));
var re$1;
(function(e2) {
  e2.UNKNOWN_ERROR = "UNKNOWN_ERROR", e2.NOT_IMPLEMENTED = "NOT_IMPLEMENTED", e2.UNSUPPORTED_OPERATION = "UNSUPPORTED_OPERATION", e2.NETWORK_ERROR = "NETWORK_ERROR", e2.SERVER_ERROR = "SERVER_ERROR", e2.TIMEOUT = "TIMEOUT", e2.BUFFER_OVERRUN = "BUFFER_OVERRUN", e2.NUMERIC_FAULT = "NUMERIC_FAULT", e2.MISSING_NEW = "MISSING_NEW", e2.INVALID_ARGUMENT = "INVALID_ARGUMENT", e2.MISSING_ARGUMENT = "MISSING_ARGUMENT", e2.UNEXPECTED_ARGUMENT = "UNEXPECTED_ARGUMENT", e2.CALL_EXCEPTION = "CALL_EXCEPTION", e2.INSUFFICIENT_FUNDS = "INSUFFICIENT_FUNDS", e2.NONCE_EXPIRED = "NONCE_EXPIRED", e2.REPLACEMENT_UNDERPRICED = "REPLACEMENT_UNDERPRICED", e2.UNPREDICTABLE_GAS_LIMIT = "UNPREDICTABLE_GAS_LIMIT", e2.TRANSACTION_REPLACED = "TRANSACTION_REPLACED", e2.ACTION_REJECTED = "ACTION_REJECTED";
})(re$1 || (re$1 = {}));
const kn = "0123456789abcdef";
let L$4 = class L {
  constructor(t) {
    Object.defineProperty(this, "version", { enumerable: true, value: t, writable: false });
  }
  _log(t, r2) {
    const i3 = t.toLowerCase();
    Cr$1[i3] == null && this.throwArgumentError("invalid log level name", "logLevel", t), !(Tn > Cr$1[i3]) && console.log.apply(console, r2);
  }
  debug(...t) {
    this._log(L.levels.DEBUG, t);
  }
  info(...t) {
    this._log(L.levels.INFO, t);
  }
  warn(...t) {
    this._log(L.levels.WARNING, t);
  }
  makeError(t, r2, i3) {
    if (Fn)
      return this.makeError("censored error", r2, {});
    r2 || (r2 = L.errors.UNKNOWN_ERROR), i3 || (i3 = {});
    const n4 = [];
    Object.keys(i3).forEach((b3) => {
      const m3 = i3[b3];
      try {
        if (m3 instanceof Uint8Array) {
          let w3 = "";
          for (let y3 = 0; y3 < m3.length; y3++)
            w3 += kn[m3[y3] >> 4], w3 += kn[m3[y3] & 15];
          n4.push(b3 + "=Uint8Array(0x" + w3 + ")");
        } else
          n4.push(b3 + "=" + JSON.stringify(m3));
      } catch {
        n4.push(b3 + "=" + JSON.stringify(i3[b3].toString()));
      }
    }), n4.push(`code=${r2}`), n4.push(`version=${this.version}`);
    const o3 = t;
    let h4 = "";
    switch (r2) {
      case re$1.NUMERIC_FAULT: {
        h4 = "NUMERIC_FAULT";
        const b3 = t;
        switch (b3) {
          case "overflow":
          case "underflow":
          case "division-by-zero":
            h4 += "-" + b3;
            break;
          case "negative-power":
          case "negative-width":
            h4 += "-unsupported";
            break;
          case "unbound-bitwise-result":
            h4 += "-unbound-result";
            break;
        }
        break;
      }
      case re$1.CALL_EXCEPTION:
      case re$1.INSUFFICIENT_FUNDS:
      case re$1.MISSING_NEW:
      case re$1.NONCE_EXPIRED:
      case re$1.REPLACEMENT_UNDERPRICED:
      case re$1.TRANSACTION_REPLACED:
      case re$1.UNPREDICTABLE_GAS_LIMIT:
        h4 = r2;
        break;
    }
    h4 && (t += " [ See: https://links.ethers.org/v5-errors-" + h4 + " ]"), n4.length && (t += " (" + n4.join(", ") + ")");
    const p3 = new Error(t);
    return p3.reason = o3, p3.code = r2, Object.keys(i3).forEach(function(b3) {
      p3[b3] = i3[b3];
    }), p3;
  }
  throwError(t, r2, i3) {
    throw this.makeError(t, r2, i3);
  }
  throwArgumentError(t, r2, i3) {
    return this.throwError(t, L.errors.INVALID_ARGUMENT, { argument: r2, value: i3 });
  }
  assert(t, r2, i3, n4) {
    t || this.throwError(r2, i3, n4);
  }
  assertArgument(t, r2, i3, n4) {
    t || this.throwArgumentError(r2, i3, n4);
  }
  checkNormalize(t) {
    Un && this.throwError("platform missing String.prototype.normalize", L.errors.UNSUPPORTED_OPERATION, { operation: "String.prototype.normalize", form: Un });
  }
  checkSafeUint53(t, r2) {
    typeof t == "number" && (r2 == null && (r2 = "value not safe"), (t < 0 || t >= 9007199254740991) && this.throwError(r2, L.errors.NUMERIC_FAULT, { operation: "checkSafeInteger", fault: "out-of-safe-range", value: t }), t % 1 && this.throwError(r2, L.errors.NUMERIC_FAULT, { operation: "checkSafeInteger", fault: "non-integer", value: t }));
  }
  checkArgumentCount(t, r2, i3) {
    i3 ? i3 = ": " + i3 : i3 = "", t < r2 && this.throwError("missing argument" + i3, L.errors.MISSING_ARGUMENT, { count: t, expectedCount: r2 }), t > r2 && this.throwError("too many arguments" + i3, L.errors.UNEXPECTED_ARGUMENT, { count: t, expectedCount: r2 });
  }
  checkNew(t, r2) {
    (t === Object || t == null) && this.throwError("missing new", L.errors.MISSING_NEW, { name: r2.name });
  }
  checkAbstract(t, r2) {
    t === r2 ? this.throwError("cannot instantiate abstract class " + JSON.stringify(r2.name) + " directly; use a sub-class", L.errors.UNSUPPORTED_OPERATION, { name: t.name, operation: "new" }) : (t === Object || t == null) && this.throwError("missing new", L.errors.MISSING_NEW, { name: r2.name });
  }
  static globalLogger() {
    return gi || (gi = new L(y0)), gi;
  }
  static setCensorship(t, r2) {
    if (!t && r2 && this.globalLogger().throwError("cannot permanently disable censorship", L.errors.UNSUPPORTED_OPERATION, { operation: "setCensorship" }), Dn) {
      if (!t)
        return;
      this.globalLogger().throwError("error censorship permanent", L.errors.UNSUPPORTED_OPERATION, { operation: "setCensorship" });
    }
    Fn = !!t, Dn = !!r2;
  }
  static setLogLevel(t) {
    const r2 = Cr$1[t.toLowerCase()];
    if (r2 == null) {
      L.globalLogger().warn("invalid log level - " + t);
      return;
    }
    Tn = r2;
  }
  static from(t) {
    return new L(t);
  }
};
L$4.errors = re$1, L$4.levels = Ai;
const x0 = "bytes/5.7.0", Dt$1 = new L$4(x0);
function qn(e2) {
  return !!e2.toHexString;
}
function rr$1(e2) {
  return e2.slice || (e2.slice = function() {
    const t = Array.prototype.slice.call(arguments);
    return rr$1(new Uint8Array(Array.prototype.slice.apply(e2, t)));
  }), e2;
}
function M0(e2) {
  return Qt(e2) && !(e2.length % 2) || ir$1(e2);
}
function Kn(e2) {
  return typeof e2 == "number" && e2 == e2 && e2 % 1 === 0;
}
function ir$1(e2) {
  if (e2 == null)
    return false;
  if (e2.constructor === Uint8Array)
    return true;
  if (typeof e2 == "string" || !Kn(e2.length) || e2.length < 0)
    return false;
  for (let t = 0; t < e2.length; t++) {
    const r2 = e2[t];
    if (!Kn(r2) || r2 < 0 || r2 >= 256)
      return false;
  }
  return true;
}
function Ot$1(e2, t) {
  if (t || (t = {}), typeof e2 == "number") {
    Dt$1.checkSafeUint53(e2, "invalid arrayify value");
    const r2 = [];
    for (; e2; )
      r2.unshift(e2 & 255), e2 = parseInt(String(e2 / 256));
    return r2.length === 0 && r2.push(0), rr$1(new Uint8Array(r2));
  }
  if (t.allowMissingPrefix && typeof e2 == "string" && e2.substring(0, 2) !== "0x" && (e2 = "0x" + e2), qn(e2) && (e2 = e2.toHexString()), Qt(e2)) {
    let r2 = e2.substring(2);
    r2.length % 2 && (t.hexPad === "left" ? r2 = "0" + r2 : t.hexPad === "right" ? r2 += "0" : Dt$1.throwArgumentError("hex data is odd-length", "value", e2));
    const i3 = [];
    for (let n4 = 0; n4 < r2.length; n4 += 2)
      i3.push(parseInt(r2.substring(n4, n4 + 2), 16));
    return rr$1(new Uint8Array(i3));
  }
  return ir$1(e2) ? rr$1(new Uint8Array(e2)) : Dt$1.throwArgumentError("invalid arrayify value", "value", e2);
}
function E0(e2) {
  const t = e2.map((n4) => Ot$1(n4)), r2 = t.reduce((n4, o3) => n4 + o3.length, 0), i3 = new Uint8Array(r2);
  return t.reduce((n4, o3) => (i3.set(o3, n4), n4 + o3.length), 0), rr$1(i3);
}
function S0(e2, t) {
  e2 = Ot$1(e2), e2.length > t && Dt$1.throwArgumentError("value out of range", "value", arguments[0]);
  const r2 = new Uint8Array(t);
  return r2.set(e2, t - e2.length), rr$1(r2);
}
function Qt(e2, t) {
  return !(typeof e2 != "string" || !e2.match(/^0x[0-9A-Fa-f]*$/) || t && e2.length !== 2 + 2 * t);
}
const bi = "0123456789abcdef";
function Kt$1(e2, t) {
  if (t || (t = {}), typeof e2 == "number") {
    Dt$1.checkSafeUint53(e2, "invalid hexlify value");
    let r2 = "";
    for (; e2; )
      r2 = bi[e2 & 15] + r2, e2 = Math.floor(e2 / 16);
    return r2.length ? (r2.length % 2 && (r2 = "0" + r2), "0x" + r2) : "0x00";
  }
  if (typeof e2 == "bigint")
    return e2 = e2.toString(16), e2.length % 2 ? "0x0" + e2 : "0x" + e2;
  if (t.allowMissingPrefix && typeof e2 == "string" && e2.substring(0, 2) !== "0x" && (e2 = "0x" + e2), qn(e2))
    return e2.toHexString();
  if (Qt(e2))
    return e2.length % 2 && (t.hexPad === "left" ? e2 = "0x0" + e2.substring(2) : t.hexPad === "right" ? e2 += "0" : Dt$1.throwArgumentError("hex data is odd-length", "value", e2)), e2.toLowerCase();
  if (ir$1(e2)) {
    let r2 = "0x";
    for (let i3 = 0; i3 < e2.length; i3++) {
      let n4 = e2[i3];
      r2 += bi[(n4 & 240) >> 4] + bi[n4 & 15];
    }
    return r2;
  }
  return Dt$1.throwArgumentError("invalid hexlify value", "value", e2);
}
function N0(e2) {
  if (typeof e2 != "string")
    e2 = Kt$1(e2);
  else if (!Qt(e2) || e2.length % 2)
    return null;
  return (e2.length - 2) / 2;
}
function Hn(e2, t, r2) {
  return typeof e2 != "string" ? e2 = Kt$1(e2) : (!Qt(e2) || e2.length % 2) && Dt$1.throwArgumentError("invalid hexData", "value", e2), t = 2 + 2 * t, r2 != null ? "0x" + e2.substring(t, 2 + 2 * r2) : "0x" + e2.substring(t);
}
function oe$1(e2, t) {
  for (typeof e2 != "string" ? e2 = Kt$1(e2) : Qt(e2) || Dt$1.throwArgumentError("invalid hex string", "value", e2), e2.length > 2 * t + 2 && Dt$1.throwArgumentError("value out of range", "value", arguments[1]); e2.length < 2 * t + 2; )
    e2 = "0x0" + e2.substring(2);
  return e2;
}
function zn(e2) {
  const t = { r: "0x", s: "0x", _vs: "0x", recoveryParam: 0, v: 0, yParityAndS: "0x", compact: "0x" };
  if (M0(e2)) {
    let r2 = Ot$1(e2);
    r2.length === 64 ? (t.v = 27 + (r2[32] >> 7), r2[32] &= 127, t.r = Kt$1(r2.slice(0, 32)), t.s = Kt$1(r2.slice(32, 64))) : r2.length === 65 ? (t.r = Kt$1(r2.slice(0, 32)), t.s = Kt$1(r2.slice(32, 64)), t.v = r2[64]) : Dt$1.throwArgumentError("invalid signature string", "signature", e2), t.v < 27 && (t.v === 0 || t.v === 1 ? t.v += 27 : Dt$1.throwArgumentError("signature invalid v byte", "signature", e2)), t.recoveryParam = 1 - t.v % 2, t.recoveryParam && (r2[32] |= 128), t._vs = Kt$1(r2.slice(32, 64));
  } else {
    if (t.r = e2.r, t.s = e2.s, t.v = e2.v, t.recoveryParam = e2.recoveryParam, t._vs = e2._vs, t._vs != null) {
      const n4 = S0(Ot$1(t._vs), 32);
      t._vs = Kt$1(n4);
      const o3 = n4[0] >= 128 ? 1 : 0;
      t.recoveryParam == null ? t.recoveryParam = o3 : t.recoveryParam !== o3 && Dt$1.throwArgumentError("signature recoveryParam mismatch _vs", "signature", e2), n4[0] &= 127;
      const h4 = Kt$1(n4);
      t.s == null ? t.s = h4 : t.s !== h4 && Dt$1.throwArgumentError("signature v mismatch _vs", "signature", e2);
    }
    if (t.recoveryParam == null)
      t.v == null ? Dt$1.throwArgumentError("signature missing v and recoveryParam", "signature", e2) : t.v === 0 || t.v === 1 ? t.recoveryParam = t.v : t.recoveryParam = 1 - t.v % 2;
    else if (t.v == null)
      t.v = 27 + t.recoveryParam;
    else {
      const n4 = t.v === 0 || t.v === 1 ? t.v : 1 - t.v % 2;
      t.recoveryParam !== n4 && Dt$1.throwArgumentError("signature recoveryParam mismatch v", "signature", e2);
    }
    t.r == null || !Qt(t.r) ? Dt$1.throwArgumentError("signature missing or invalid r", "signature", e2) : t.r = oe$1(t.r, 32), t.s == null || !Qt(t.s) ? Dt$1.throwArgumentError("signature missing or invalid s", "signature", e2) : t.s = oe$1(t.s, 32);
    const r2 = Ot$1(t.s);
    r2[0] >= 128 && Dt$1.throwArgumentError("signature s out of range", "signature", e2), t.recoveryParam && (r2[0] |= 128);
    const i3 = Kt$1(r2);
    t._vs && (Qt(t._vs) || Dt$1.throwArgumentError("signature invalid _vs", "signature", e2), t._vs = oe$1(t._vs, 32)), t._vs == null ? t._vs = i3 : t._vs !== i3 && Dt$1.throwArgumentError("signature _vs mismatch v and s", "signature", e2);
  }
  return t.yParityAndS = t._vs, t.compact = t.r + t.yParityAndS.substring(2), t;
}
function yi(e2) {
  return "0x" + b0.keccak_256(Ot$1(e2));
}
var Ln = { exports: {} }, I0 = {}, _0 = Object.freeze({ __proto__: null, default: I0 }), B0 = A0(_0);
(function(e2) {
  (function(t, r2) {
    function i3(A2, f3) {
      if (!A2)
        throw new Error(f3 || "Assertion failed");
    }
    function n4(A2, f3) {
      A2.super_ = f3;
      var a3 = function() {
      };
      a3.prototype = f3.prototype, A2.prototype = new a3(), A2.prototype.constructor = A2;
    }
    function o3(A2, f3, a3) {
      if (o3.isBN(A2))
        return A2;
      this.negative = 0, this.words = null, this.length = 0, this.red = null, A2 !== null && ((f3 === "le" || f3 === "be") && (a3 = f3, f3 = 10), this._init(A2 || 0, f3 || 10, a3 || "be"));
    }
    typeof t == "object" ? t.exports = o3 : r2.BN = o3, o3.BN = o3, o3.wordSize = 26;
    var h4;
    try {
      typeof window < "u" && typeof window.Buffer < "u" ? h4 = window.Buffer : h4 = B0.Buffer;
    } catch {
    }
    o3.isBN = function(f3) {
      return f3 instanceof o3 ? true : f3 !== null && typeof f3 == "object" && f3.constructor.wordSize === o3.wordSize && Array.isArray(f3.words);
    }, o3.max = function(f3, a3) {
      return f3.cmp(a3) > 0 ? f3 : a3;
    }, o3.min = function(f3, a3) {
      return f3.cmp(a3) < 0 ? f3 : a3;
    }, o3.prototype._init = function(f3, a3, c2) {
      if (typeof f3 == "number")
        return this._initNumber(f3, a3, c2);
      if (typeof f3 == "object")
        return this._initArray(f3, a3, c2);
      a3 === "hex" && (a3 = 16), i3(a3 === (a3 | 0) && a3 >= 2 && a3 <= 36), f3 = f3.toString().replace(/\s+/g, "");
      var d4 = 0;
      f3[0] === "-" && (d4++, this.negative = 1), d4 < f3.length && (a3 === 16 ? this._parseHex(f3, d4, c2) : (this._parseBase(f3, a3, d4), c2 === "le" && this._initArray(this.toArray(), a3, c2)));
    }, o3.prototype._initNumber = function(f3, a3, c2) {
      f3 < 0 && (this.negative = 1, f3 = -f3), f3 < 67108864 ? (this.words = [f3 & 67108863], this.length = 1) : f3 < 4503599627370496 ? (this.words = [f3 & 67108863, f3 / 67108864 & 67108863], this.length = 2) : (i3(f3 < 9007199254740992), this.words = [f3 & 67108863, f3 / 67108864 & 67108863, 1], this.length = 3), c2 === "le" && this._initArray(this.toArray(), a3, c2);
    }, o3.prototype._initArray = function(f3, a3, c2) {
      if (i3(typeof f3.length == "number"), f3.length <= 0)
        return this.words = [0], this.length = 1, this;
      this.length = Math.ceil(f3.length / 3), this.words = new Array(this.length);
      for (var d4 = 0; d4 < this.length; d4++)
        this.words[d4] = 0;
      var g3, x2, M2 = 0;
      if (c2 === "be")
        for (d4 = f3.length - 1, g3 = 0; d4 >= 0; d4 -= 3)
          x2 = f3[d4] | f3[d4 - 1] << 8 | f3[d4 - 2] << 16, this.words[g3] |= x2 << M2 & 67108863, this.words[g3 + 1] = x2 >>> 26 - M2 & 67108863, M2 += 24, M2 >= 26 && (M2 -= 26, g3++);
      else if (c2 === "le")
        for (d4 = 0, g3 = 0; d4 < f3.length; d4 += 3)
          x2 = f3[d4] | f3[d4 + 1] << 8 | f3[d4 + 2] << 16, this.words[g3] |= x2 << M2 & 67108863, this.words[g3 + 1] = x2 >>> 26 - M2 & 67108863, M2 += 24, M2 >= 26 && (M2 -= 26, g3++);
      return this._strip();
    };
    function p3(A2, f3) {
      var a3 = A2.charCodeAt(f3);
      if (a3 >= 48 && a3 <= 57)
        return a3 - 48;
      if (a3 >= 65 && a3 <= 70)
        return a3 - 55;
      if (a3 >= 97 && a3 <= 102)
        return a3 - 87;
      i3(false, "Invalid character in " + A2);
    }
    function b3(A2, f3, a3) {
      var c2 = p3(A2, a3);
      return a3 - 1 >= f3 && (c2 |= p3(A2, a3 - 1) << 4), c2;
    }
    o3.prototype._parseHex = function(f3, a3, c2) {
      this.length = Math.ceil((f3.length - a3) / 6), this.words = new Array(this.length);
      for (var d4 = 0; d4 < this.length; d4++)
        this.words[d4] = 0;
      var g3 = 0, x2 = 0, M2;
      if (c2 === "be")
        for (d4 = f3.length - 1; d4 >= a3; d4 -= 2)
          M2 = b3(f3, a3, d4) << g3, this.words[x2] |= M2 & 67108863, g3 >= 18 ? (g3 -= 18, x2 += 1, this.words[x2] |= M2 >>> 26) : g3 += 8;
      else {
        var l2 = f3.length - a3;
        for (d4 = l2 % 2 === 0 ? a3 + 1 : a3; d4 < f3.length; d4 += 2)
          M2 = b3(f3, a3, d4) << g3, this.words[x2] |= M2 & 67108863, g3 >= 18 ? (g3 -= 18, x2 += 1, this.words[x2] |= M2 >>> 26) : g3 += 8;
      }
      this._strip();
    };
    function m3(A2, f3, a3, c2) {
      for (var d4 = 0, g3 = 0, x2 = Math.min(A2.length, a3), M2 = f3; M2 < x2; M2++) {
        var l2 = A2.charCodeAt(M2) - 48;
        d4 *= c2, l2 >= 49 ? g3 = l2 - 49 + 10 : l2 >= 17 ? g3 = l2 - 17 + 10 : g3 = l2, i3(l2 >= 0 && g3 < c2, "Invalid character"), d4 += g3;
      }
      return d4;
    }
    o3.prototype._parseBase = function(f3, a3, c2) {
      this.words = [0], this.length = 1;
      for (var d4 = 0, g3 = 1; g3 <= 67108863; g3 *= a3)
        d4++;
      d4--, g3 = g3 / a3 | 0;
      for (var x2 = f3.length - c2, M2 = x2 % d4, l2 = Math.min(x2, x2 - M2) + c2, s2 = 0, v3 = c2; v3 < l2; v3 += d4)
        s2 = m3(f3, v3, v3 + d4, a3), this.imuln(g3), this.words[0] + s2 < 67108864 ? this.words[0] += s2 : this._iaddn(s2);
      if (M2 !== 0) {
        var k2 = 1;
        for (s2 = m3(f3, v3, f3.length, a3), v3 = 0; v3 < M2; v3++)
          k2 *= a3;
        this.imuln(k2), this.words[0] + s2 < 67108864 ? this.words[0] += s2 : this._iaddn(s2);
      }
      this._strip();
    }, o3.prototype.copy = function(f3) {
      f3.words = new Array(this.length);
      for (var a3 = 0; a3 < this.length; a3++)
        f3.words[a3] = this.words[a3];
      f3.length = this.length, f3.negative = this.negative, f3.red = this.red;
    };
    function w3(A2, f3) {
      A2.words = f3.words, A2.length = f3.length, A2.negative = f3.negative, A2.red = f3.red;
    }
    if (o3.prototype._move = function(f3) {
      w3(f3, this);
    }, o3.prototype.clone = function() {
      var f3 = new o3(null);
      return this.copy(f3), f3;
    }, o3.prototype._expand = function(f3) {
      for (; this.length < f3; )
        this.words[this.length++] = 0;
      return this;
    }, o3.prototype._strip = function() {
      for (; this.length > 1 && this.words[this.length - 1] === 0; )
        this.length--;
      return this._normSign();
    }, o3.prototype._normSign = function() {
      return this.length === 1 && this.words[0] === 0 && (this.negative = 0), this;
    }, typeof Symbol < "u" && typeof Symbol.for == "function")
      try {
        o3.prototype[Symbol.for("nodejs.util.inspect.custom")] = y3;
      } catch {
        o3.prototype.inspect = y3;
      }
    else
      o3.prototype.inspect = y3;
    function y3() {
      return (this.red ? "<BN-R: " : "<BN: ") + this.toString(16) + ">";
    }
    var S2 = ["", "0", "00", "000", "0000", "00000", "000000", "0000000", "00000000", "000000000", "0000000000", "00000000000", "000000000000", "0000000000000", "00000000000000", "000000000000000", "0000000000000000", "00000000000000000", "000000000000000000", "0000000000000000000", "00000000000000000000", "000000000000000000000", "0000000000000000000000", "00000000000000000000000", "000000000000000000000000", "0000000000000000000000000"], I2 = [0, 0, 25, 16, 12, 11, 10, 9, 8, 8, 7, 7, 7, 7, 6, 6, 6, 6, 6, 6, 6, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5], N2 = [0, 0, 33554432, 43046721, 16777216, 48828125, 60466176, 40353607, 16777216, 43046721, 1e7, 19487171, 35831808, 62748517, 7529536, 11390625, 16777216, 24137569, 34012224, 47045881, 64e6, 4084101, 5153632, 6436343, 7962624, 9765625, 11881376, 14348907, 17210368, 20511149, 243e5, 28629151, 33554432, 39135393, 45435424, 52521875, 60466176];
    o3.prototype.toString = function(f3, a3) {
      f3 = f3 || 10, a3 = a3 | 0 || 1;
      var c2;
      if (f3 === 16 || f3 === "hex") {
        c2 = "";
        for (var d4 = 0, g3 = 0, x2 = 0; x2 < this.length; x2++) {
          var M2 = this.words[x2], l2 = ((M2 << d4 | g3) & 16777215).toString(16);
          g3 = M2 >>> 24 - d4 & 16777215, d4 += 2, d4 >= 26 && (d4 -= 26, x2--), g3 !== 0 || x2 !== this.length - 1 ? c2 = S2[6 - l2.length] + l2 + c2 : c2 = l2 + c2;
        }
        for (g3 !== 0 && (c2 = g3.toString(16) + c2); c2.length % a3 !== 0; )
          c2 = "0" + c2;
        return this.negative !== 0 && (c2 = "-" + c2), c2;
      }
      if (f3 === (f3 | 0) && f3 >= 2 && f3 <= 36) {
        var s2 = I2[f3], v3 = N2[f3];
        c2 = "";
        var k2 = this.clone();
        for (k2.negative = 0; !k2.isZero(); ) {
          var u3 = k2.modrn(v3).toString(f3);
          k2 = k2.idivn(v3), k2.isZero() ? c2 = u3 + c2 : c2 = S2[s2 - u3.length] + u3 + c2;
        }
        for (this.isZero() && (c2 = "0" + c2); c2.length % a3 !== 0; )
          c2 = "0" + c2;
        return this.negative !== 0 && (c2 = "-" + c2), c2;
      }
      i3(false, "Base should be between 2 and 36");
    }, o3.prototype.toNumber = function() {
      var f3 = this.words[0];
      return this.length === 2 ? f3 += this.words[1] * 67108864 : this.length === 3 && this.words[2] === 1 ? f3 += 4503599627370496 + this.words[1] * 67108864 : this.length > 2 && i3(false, "Number can only safely store up to 53 bits"), this.negative !== 0 ? -f3 : f3;
    }, o3.prototype.toJSON = function() {
      return this.toString(16, 2);
    }, h4 && (o3.prototype.toBuffer = function(f3, a3) {
      return this.toArrayLike(h4, f3, a3);
    }), o3.prototype.toArray = function(f3, a3) {
      return this.toArrayLike(Array, f3, a3);
    };
    var C2 = function(f3, a3) {
      return f3.allocUnsafe ? f3.allocUnsafe(a3) : new f3(a3);
    };
    o3.prototype.toArrayLike = function(f3, a3, c2) {
      this._strip();
      var d4 = this.byteLength(), g3 = c2 || Math.max(1, d4);
      i3(d4 <= g3, "byte array longer than desired length"), i3(g3 > 0, "Requested array length <= 0");
      var x2 = C2(f3, g3), M2 = a3 === "le" ? "LE" : "BE";
      return this["_toArrayLike" + M2](x2, d4), x2;
    }, o3.prototype._toArrayLikeLE = function(f3, a3) {
      for (var c2 = 0, d4 = 0, g3 = 0, x2 = 0; g3 < this.length; g3++) {
        var M2 = this.words[g3] << x2 | d4;
        f3[c2++] = M2 & 255, c2 < f3.length && (f3[c2++] = M2 >> 8 & 255), c2 < f3.length && (f3[c2++] = M2 >> 16 & 255), x2 === 6 ? (c2 < f3.length && (f3[c2++] = M2 >> 24 & 255), d4 = 0, x2 = 0) : (d4 = M2 >>> 24, x2 += 2);
      }
      if (c2 < f3.length)
        for (f3[c2++] = d4; c2 < f3.length; )
          f3[c2++] = 0;
    }, o3.prototype._toArrayLikeBE = function(f3, a3) {
      for (var c2 = f3.length - 1, d4 = 0, g3 = 0, x2 = 0; g3 < this.length; g3++) {
        var M2 = this.words[g3] << x2 | d4;
        f3[c2--] = M2 & 255, c2 >= 0 && (f3[c2--] = M2 >> 8 & 255), c2 >= 0 && (f3[c2--] = M2 >> 16 & 255), x2 === 6 ? (c2 >= 0 && (f3[c2--] = M2 >> 24 & 255), d4 = 0, x2 = 0) : (d4 = M2 >>> 24, x2 += 2);
      }
      if (c2 >= 0)
        for (f3[c2--] = d4; c2 >= 0; )
          f3[c2--] = 0;
    }, Math.clz32 ? o3.prototype._countBits = function(f3) {
      return 32 - Math.clz32(f3);
    } : o3.prototype._countBits = function(f3) {
      var a3 = f3, c2 = 0;
      return a3 >= 4096 && (c2 += 13, a3 >>>= 13), a3 >= 64 && (c2 += 7, a3 >>>= 7), a3 >= 8 && (c2 += 4, a3 >>>= 4), a3 >= 2 && (c2 += 2, a3 >>>= 2), c2 + a3;
    }, o3.prototype._zeroBits = function(f3) {
      if (f3 === 0)
        return 26;
      var a3 = f3, c2 = 0;
      return a3 & 8191 || (c2 += 13, a3 >>>= 13), a3 & 127 || (c2 += 7, a3 >>>= 7), a3 & 15 || (c2 += 4, a3 >>>= 4), a3 & 3 || (c2 += 2, a3 >>>= 2), a3 & 1 || c2++, c2;
    }, o3.prototype.bitLength = function() {
      var f3 = this.words[this.length - 1], a3 = this._countBits(f3);
      return (this.length - 1) * 26 + a3;
    };
    function F(A2) {
      for (var f3 = new Array(A2.bitLength()), a3 = 0; a3 < f3.length; a3++) {
        var c2 = a3 / 26 | 0, d4 = a3 % 26;
        f3[a3] = A2.words[c2] >>> d4 & 1;
      }
      return f3;
    }
    o3.prototype.zeroBits = function() {
      if (this.isZero())
        return 0;
      for (var f3 = 0, a3 = 0; a3 < this.length; a3++) {
        var c2 = this._zeroBits(this.words[a3]);
        if (f3 += c2, c2 !== 26)
          break;
      }
      return f3;
    }, o3.prototype.byteLength = function() {
      return Math.ceil(this.bitLength() / 8);
    }, o3.prototype.toTwos = function(f3) {
      return this.negative !== 0 ? this.abs().inotn(f3).iaddn(1) : this.clone();
    }, o3.prototype.fromTwos = function(f3) {
      return this.testn(f3 - 1) ? this.notn(f3).iaddn(1).ineg() : this.clone();
    }, o3.prototype.isNeg = function() {
      return this.negative !== 0;
    }, o3.prototype.neg = function() {
      return this.clone().ineg();
    }, o3.prototype.ineg = function() {
      return this.isZero() || (this.negative ^= 1), this;
    }, o3.prototype.iuor = function(f3) {
      for (; this.length < f3.length; )
        this.words[this.length++] = 0;
      for (var a3 = 0; a3 < f3.length; a3++)
        this.words[a3] = this.words[a3] | f3.words[a3];
      return this._strip();
    }, o3.prototype.ior = function(f3) {
      return i3((this.negative | f3.negative) === 0), this.iuor(f3);
    }, o3.prototype.or = function(f3) {
      return this.length > f3.length ? this.clone().ior(f3) : f3.clone().ior(this);
    }, o3.prototype.uor = function(f3) {
      return this.length > f3.length ? this.clone().iuor(f3) : f3.clone().iuor(this);
    }, o3.prototype.iuand = function(f3) {
      var a3;
      this.length > f3.length ? a3 = f3 : a3 = this;
      for (var c2 = 0; c2 < a3.length; c2++)
        this.words[c2] = this.words[c2] & f3.words[c2];
      return this.length = a3.length, this._strip();
    }, o3.prototype.iand = function(f3) {
      return i3((this.negative | f3.negative) === 0), this.iuand(f3);
    }, o3.prototype.and = function(f3) {
      return this.length > f3.length ? this.clone().iand(f3) : f3.clone().iand(this);
    }, o3.prototype.uand = function(f3) {
      return this.length > f3.length ? this.clone().iuand(f3) : f3.clone().iuand(this);
    }, o3.prototype.iuxor = function(f3) {
      var a3, c2;
      this.length > f3.length ? (a3 = this, c2 = f3) : (a3 = f3, c2 = this);
      for (var d4 = 0; d4 < c2.length; d4++)
        this.words[d4] = a3.words[d4] ^ c2.words[d4];
      if (this !== a3)
        for (; d4 < a3.length; d4++)
          this.words[d4] = a3.words[d4];
      return this.length = a3.length, this._strip();
    }, o3.prototype.ixor = function(f3) {
      return i3((this.negative | f3.negative) === 0), this.iuxor(f3);
    }, o3.prototype.xor = function(f3) {
      return this.length > f3.length ? this.clone().ixor(f3) : f3.clone().ixor(this);
    }, o3.prototype.uxor = function(f3) {
      return this.length > f3.length ? this.clone().iuxor(f3) : f3.clone().iuxor(this);
    }, o3.prototype.inotn = function(f3) {
      i3(typeof f3 == "number" && f3 >= 0);
      var a3 = Math.ceil(f3 / 26) | 0, c2 = f3 % 26;
      this._expand(a3), c2 > 0 && a3--;
      for (var d4 = 0; d4 < a3; d4++)
        this.words[d4] = ~this.words[d4] & 67108863;
      return c2 > 0 && (this.words[d4] = ~this.words[d4] & 67108863 >> 26 - c2), this._strip();
    }, o3.prototype.notn = function(f3) {
      return this.clone().inotn(f3);
    }, o3.prototype.setn = function(f3, a3) {
      i3(typeof f3 == "number" && f3 >= 0);
      var c2 = f3 / 26 | 0, d4 = f3 % 26;
      return this._expand(c2 + 1), a3 ? this.words[c2] = this.words[c2] | 1 << d4 : this.words[c2] = this.words[c2] & ~(1 << d4), this._strip();
    }, o3.prototype.iadd = function(f3) {
      var a3;
      if (this.negative !== 0 && f3.negative === 0)
        return this.negative = 0, a3 = this.isub(f3), this.negative ^= 1, this._normSign();
      if (this.negative === 0 && f3.negative !== 0)
        return f3.negative = 0, a3 = this.isub(f3), f3.negative = 1, a3._normSign();
      var c2, d4;
      this.length > f3.length ? (c2 = this, d4 = f3) : (c2 = f3, d4 = this);
      for (var g3 = 0, x2 = 0; x2 < d4.length; x2++)
        a3 = (c2.words[x2] | 0) + (d4.words[x2] | 0) + g3, this.words[x2] = a3 & 67108863, g3 = a3 >>> 26;
      for (; g3 !== 0 && x2 < c2.length; x2++)
        a3 = (c2.words[x2] | 0) + g3, this.words[x2] = a3 & 67108863, g3 = a3 >>> 26;
      if (this.length = c2.length, g3 !== 0)
        this.words[this.length] = g3, this.length++;
      else if (c2 !== this)
        for (; x2 < c2.length; x2++)
          this.words[x2] = c2.words[x2];
      return this;
    }, o3.prototype.add = function(f3) {
      var a3;
      return f3.negative !== 0 && this.negative === 0 ? (f3.negative = 0, a3 = this.sub(f3), f3.negative ^= 1, a3) : f3.negative === 0 && this.negative !== 0 ? (this.negative = 0, a3 = f3.sub(this), this.negative = 1, a3) : this.length > f3.length ? this.clone().iadd(f3) : f3.clone().iadd(this);
    }, o3.prototype.isub = function(f3) {
      if (f3.negative !== 0) {
        f3.negative = 0;
        var a3 = this.iadd(f3);
        return f3.negative = 1, a3._normSign();
      } else if (this.negative !== 0)
        return this.negative = 0, this.iadd(f3), this.negative = 1, this._normSign();
      var c2 = this.cmp(f3);
      if (c2 === 0)
        return this.negative = 0, this.length = 1, this.words[0] = 0, this;
      var d4, g3;
      c2 > 0 ? (d4 = this, g3 = f3) : (d4 = f3, g3 = this);
      for (var x2 = 0, M2 = 0; M2 < g3.length; M2++)
        a3 = (d4.words[M2] | 0) - (g3.words[M2] | 0) + x2, x2 = a3 >> 26, this.words[M2] = a3 & 67108863;
      for (; x2 !== 0 && M2 < d4.length; M2++)
        a3 = (d4.words[M2] | 0) + x2, x2 = a3 >> 26, this.words[M2] = a3 & 67108863;
      if (x2 === 0 && M2 < d4.length && d4 !== this)
        for (; M2 < d4.length; M2++)
          this.words[M2] = d4.words[M2];
      return this.length = Math.max(this.length, M2), d4 !== this && (this.negative = 1), this._strip();
    }, o3.prototype.sub = function(f3) {
      return this.clone().isub(f3);
    };
    function U2(A2, f3, a3) {
      a3.negative = f3.negative ^ A2.negative;
      var c2 = A2.length + f3.length | 0;
      a3.length = c2, c2 = c2 - 1 | 0;
      var d4 = A2.words[0] | 0, g3 = f3.words[0] | 0, x2 = d4 * g3, M2 = x2 & 67108863, l2 = x2 / 67108864 | 0;
      a3.words[0] = M2;
      for (var s2 = 1; s2 < c2; s2++) {
        for (var v3 = l2 >>> 26, k2 = l2 & 67108863, u3 = Math.min(s2, f3.length - 1), E3 = Math.max(0, s2 - A2.length + 1); E3 <= u3; E3++) {
          var _3 = s2 - E3 | 0;
          d4 = A2.words[_3] | 0, g3 = f3.words[E3] | 0, x2 = d4 * g3 + k2, v3 += x2 / 67108864 | 0, k2 = x2 & 67108863;
        }
        a3.words[s2] = k2 | 0, l2 = v3 | 0;
      }
      return l2 !== 0 ? a3.words[s2] = l2 | 0 : a3.length--, a3._strip();
    }
    var J2 = function(f3, a3, c2) {
      var d4 = f3.words, g3 = a3.words, x2 = c2.words, M2 = 0, l2, s2, v3, k2 = d4[0] | 0, u3 = k2 & 8191, E3 = k2 >>> 13, _3 = d4[1] | 0, B3 = _3 & 8191, R = _3 >>> 13, T2 = d4[2] | 0, P2 = T2 & 8191, O3 = T2 >>> 13, Ct2 = d4[3] | 0, D2 = Ct2 & 8191, q2 = Ct2 >>> 13, De2 = d4[4] | 0, X2 = De2 & 8191, Z2 = De2 >>> 13, Fe2 = d4[5] | 0, $2 = Fe2 & 8191, tt2 = Fe2 >>> 13, Te = d4[6] | 0, et2 = Te & 8191, rt2 = Te >>> 13, Ue2 = d4[7] | 0, it2 = Ue2 & 8191, nt2 = Ue2 >>> 13, ke2 = d4[8] | 0, ft2 = ke2 & 8191, ot2 = ke2 >>> 13, qe2 = d4[9] | 0, st2 = qe2 & 8191, at2 = qe2 >>> 13, Ke2 = g3[0] | 0, ut2 = Ke2 & 8191, ht2 = Ke2 >>> 13, He2 = g3[1] | 0, ct2 = He2 & 8191, lt2 = He2 >>> 13, ze2 = g3[2] | 0, dt2 = ze2 & 8191, pt2 = ze2 >>> 13, Le = g3[3] | 0, vt2 = Le & 8191, mt2 = Le >>> 13, je2 = g3[4] | 0, gt2 = je2 & 8191, At2 = je2 >>> 13, Qe2 = g3[5] | 0, bt2 = Qe2 & 8191, yt2 = Qe2 >>> 13, Je2 = g3[6] | 0, wt2 = Je2 & 8191, xt2 = Je2 >>> 13, Ge2 = g3[7] | 0, Mt2 = Ge2 & 8191, Et2 = Ge2 >>> 13, Ye2 = g3[8] | 0, St2 = Ye2 & 8191, Nt2 = Ye2 >>> 13, Ve2 = g3[9] | 0, It2 = Ve2 & 8191, _t2 = Ve2 >>> 13;
      c2.negative = f3.negative ^ a3.negative, c2.length = 19, l2 = Math.imul(u3, ut2), s2 = Math.imul(u3, ht2), s2 = s2 + Math.imul(E3, ut2) | 0, v3 = Math.imul(E3, ht2);
      var Me2 = (M2 + l2 | 0) + ((s2 & 8191) << 13) | 0;
      M2 = (v3 + (s2 >>> 13) | 0) + (Me2 >>> 26) | 0, Me2 &= 67108863, l2 = Math.imul(B3, ut2), s2 = Math.imul(B3, ht2), s2 = s2 + Math.imul(R, ut2) | 0, v3 = Math.imul(R, ht2), l2 = l2 + Math.imul(u3, ct2) | 0, s2 = s2 + Math.imul(u3, lt2) | 0, s2 = s2 + Math.imul(E3, ct2) | 0, v3 = v3 + Math.imul(E3, lt2) | 0;
      var Ee2 = (M2 + l2 | 0) + ((s2 & 8191) << 13) | 0;
      M2 = (v3 + (s2 >>> 13) | 0) + (Ee2 >>> 26) | 0, Ee2 &= 67108863, l2 = Math.imul(P2, ut2), s2 = Math.imul(P2, ht2), s2 = s2 + Math.imul(O3, ut2) | 0, v3 = Math.imul(O3, ht2), l2 = l2 + Math.imul(B3, ct2) | 0, s2 = s2 + Math.imul(B3, lt2) | 0, s2 = s2 + Math.imul(R, ct2) | 0, v3 = v3 + Math.imul(R, lt2) | 0, l2 = l2 + Math.imul(u3, dt2) | 0, s2 = s2 + Math.imul(u3, pt2) | 0, s2 = s2 + Math.imul(E3, dt2) | 0, v3 = v3 + Math.imul(E3, pt2) | 0;
      var Se2 = (M2 + l2 | 0) + ((s2 & 8191) << 13) | 0;
      M2 = (v3 + (s2 >>> 13) | 0) + (Se2 >>> 26) | 0, Se2 &= 67108863, l2 = Math.imul(D2, ut2), s2 = Math.imul(D2, ht2), s2 = s2 + Math.imul(q2, ut2) | 0, v3 = Math.imul(q2, ht2), l2 = l2 + Math.imul(P2, ct2) | 0, s2 = s2 + Math.imul(P2, lt2) | 0, s2 = s2 + Math.imul(O3, ct2) | 0, v3 = v3 + Math.imul(O3, lt2) | 0, l2 = l2 + Math.imul(B3, dt2) | 0, s2 = s2 + Math.imul(B3, pt2) | 0, s2 = s2 + Math.imul(R, dt2) | 0, v3 = v3 + Math.imul(R, pt2) | 0, l2 = l2 + Math.imul(u3, vt2) | 0, s2 = s2 + Math.imul(u3, mt2) | 0, s2 = s2 + Math.imul(E3, vt2) | 0, v3 = v3 + Math.imul(E3, mt2) | 0;
      var Ne = (M2 + l2 | 0) + ((s2 & 8191) << 13) | 0;
      M2 = (v3 + (s2 >>> 13) | 0) + (Ne >>> 26) | 0, Ne &= 67108863, l2 = Math.imul(X2, ut2), s2 = Math.imul(X2, ht2), s2 = s2 + Math.imul(Z2, ut2) | 0, v3 = Math.imul(Z2, ht2), l2 = l2 + Math.imul(D2, ct2) | 0, s2 = s2 + Math.imul(D2, lt2) | 0, s2 = s2 + Math.imul(q2, ct2) | 0, v3 = v3 + Math.imul(q2, lt2) | 0, l2 = l2 + Math.imul(P2, dt2) | 0, s2 = s2 + Math.imul(P2, pt2) | 0, s2 = s2 + Math.imul(O3, dt2) | 0, v3 = v3 + Math.imul(O3, pt2) | 0, l2 = l2 + Math.imul(B3, vt2) | 0, s2 = s2 + Math.imul(B3, mt2) | 0, s2 = s2 + Math.imul(R, vt2) | 0, v3 = v3 + Math.imul(R, mt2) | 0, l2 = l2 + Math.imul(u3, gt2) | 0, s2 = s2 + Math.imul(u3, At2) | 0, s2 = s2 + Math.imul(E3, gt2) | 0, v3 = v3 + Math.imul(E3, At2) | 0;
      var Ie = (M2 + l2 | 0) + ((s2 & 8191) << 13) | 0;
      M2 = (v3 + (s2 >>> 13) | 0) + (Ie >>> 26) | 0, Ie &= 67108863, l2 = Math.imul($2, ut2), s2 = Math.imul($2, ht2), s2 = s2 + Math.imul(tt2, ut2) | 0, v3 = Math.imul(tt2, ht2), l2 = l2 + Math.imul(X2, ct2) | 0, s2 = s2 + Math.imul(X2, lt2) | 0, s2 = s2 + Math.imul(Z2, ct2) | 0, v3 = v3 + Math.imul(Z2, lt2) | 0, l2 = l2 + Math.imul(D2, dt2) | 0, s2 = s2 + Math.imul(D2, pt2) | 0, s2 = s2 + Math.imul(q2, dt2) | 0, v3 = v3 + Math.imul(q2, pt2) | 0, l2 = l2 + Math.imul(P2, vt2) | 0, s2 = s2 + Math.imul(P2, mt2) | 0, s2 = s2 + Math.imul(O3, vt2) | 0, v3 = v3 + Math.imul(O3, mt2) | 0, l2 = l2 + Math.imul(B3, gt2) | 0, s2 = s2 + Math.imul(B3, At2) | 0, s2 = s2 + Math.imul(R, gt2) | 0, v3 = v3 + Math.imul(R, At2) | 0, l2 = l2 + Math.imul(u3, bt2) | 0, s2 = s2 + Math.imul(u3, yt2) | 0, s2 = s2 + Math.imul(E3, bt2) | 0, v3 = v3 + Math.imul(E3, yt2) | 0;
      var Wr = (M2 + l2 | 0) + ((s2 & 8191) << 13) | 0;
      M2 = (v3 + (s2 >>> 13) | 0) + (Wr >>> 26) | 0, Wr &= 67108863, l2 = Math.imul(et2, ut2), s2 = Math.imul(et2, ht2), s2 = s2 + Math.imul(rt2, ut2) | 0, v3 = Math.imul(rt2, ht2), l2 = l2 + Math.imul($2, ct2) | 0, s2 = s2 + Math.imul($2, lt2) | 0, s2 = s2 + Math.imul(tt2, ct2) | 0, v3 = v3 + Math.imul(tt2, lt2) | 0, l2 = l2 + Math.imul(X2, dt2) | 0, s2 = s2 + Math.imul(X2, pt2) | 0, s2 = s2 + Math.imul(Z2, dt2) | 0, v3 = v3 + Math.imul(Z2, pt2) | 0, l2 = l2 + Math.imul(D2, vt2) | 0, s2 = s2 + Math.imul(D2, mt2) | 0, s2 = s2 + Math.imul(q2, vt2) | 0, v3 = v3 + Math.imul(q2, mt2) | 0, l2 = l2 + Math.imul(P2, gt2) | 0, s2 = s2 + Math.imul(P2, At2) | 0, s2 = s2 + Math.imul(O3, gt2) | 0, v3 = v3 + Math.imul(O3, At2) | 0, l2 = l2 + Math.imul(B3, bt2) | 0, s2 = s2 + Math.imul(B3, yt2) | 0, s2 = s2 + Math.imul(R, bt2) | 0, v3 = v3 + Math.imul(R, yt2) | 0, l2 = l2 + Math.imul(u3, wt2) | 0, s2 = s2 + Math.imul(u3, xt2) | 0, s2 = s2 + Math.imul(E3, wt2) | 0, v3 = v3 + Math.imul(E3, xt2) | 0;
      var Xr = (M2 + l2 | 0) + ((s2 & 8191) << 13) | 0;
      M2 = (v3 + (s2 >>> 13) | 0) + (Xr >>> 26) | 0, Xr &= 67108863, l2 = Math.imul(it2, ut2), s2 = Math.imul(it2, ht2), s2 = s2 + Math.imul(nt2, ut2) | 0, v3 = Math.imul(nt2, ht2), l2 = l2 + Math.imul(et2, ct2) | 0, s2 = s2 + Math.imul(et2, lt2) | 0, s2 = s2 + Math.imul(rt2, ct2) | 0, v3 = v3 + Math.imul(rt2, lt2) | 0, l2 = l2 + Math.imul($2, dt2) | 0, s2 = s2 + Math.imul($2, pt2) | 0, s2 = s2 + Math.imul(tt2, dt2) | 0, v3 = v3 + Math.imul(tt2, pt2) | 0, l2 = l2 + Math.imul(X2, vt2) | 0, s2 = s2 + Math.imul(X2, mt2) | 0, s2 = s2 + Math.imul(Z2, vt2) | 0, v3 = v3 + Math.imul(Z2, mt2) | 0, l2 = l2 + Math.imul(D2, gt2) | 0, s2 = s2 + Math.imul(D2, At2) | 0, s2 = s2 + Math.imul(q2, gt2) | 0, v3 = v3 + Math.imul(q2, At2) | 0, l2 = l2 + Math.imul(P2, bt2) | 0, s2 = s2 + Math.imul(P2, yt2) | 0, s2 = s2 + Math.imul(O3, bt2) | 0, v3 = v3 + Math.imul(O3, yt2) | 0, l2 = l2 + Math.imul(B3, wt2) | 0, s2 = s2 + Math.imul(B3, xt2) | 0, s2 = s2 + Math.imul(R, wt2) | 0, v3 = v3 + Math.imul(R, xt2) | 0, l2 = l2 + Math.imul(u3, Mt2) | 0, s2 = s2 + Math.imul(u3, Et2) | 0, s2 = s2 + Math.imul(E3, Mt2) | 0, v3 = v3 + Math.imul(E3, Et2) | 0;
      var Zr = (M2 + l2 | 0) + ((s2 & 8191) << 13) | 0;
      M2 = (v3 + (s2 >>> 13) | 0) + (Zr >>> 26) | 0, Zr &= 67108863, l2 = Math.imul(ft2, ut2), s2 = Math.imul(ft2, ht2), s2 = s2 + Math.imul(ot2, ut2) | 0, v3 = Math.imul(ot2, ht2), l2 = l2 + Math.imul(it2, ct2) | 0, s2 = s2 + Math.imul(it2, lt2) | 0, s2 = s2 + Math.imul(nt2, ct2) | 0, v3 = v3 + Math.imul(nt2, lt2) | 0, l2 = l2 + Math.imul(et2, dt2) | 0, s2 = s2 + Math.imul(et2, pt2) | 0, s2 = s2 + Math.imul(rt2, dt2) | 0, v3 = v3 + Math.imul(rt2, pt2) | 0, l2 = l2 + Math.imul($2, vt2) | 0, s2 = s2 + Math.imul($2, mt2) | 0, s2 = s2 + Math.imul(tt2, vt2) | 0, v3 = v3 + Math.imul(tt2, mt2) | 0, l2 = l2 + Math.imul(X2, gt2) | 0, s2 = s2 + Math.imul(X2, At2) | 0, s2 = s2 + Math.imul(Z2, gt2) | 0, v3 = v3 + Math.imul(Z2, At2) | 0, l2 = l2 + Math.imul(D2, bt2) | 0, s2 = s2 + Math.imul(D2, yt2) | 0, s2 = s2 + Math.imul(q2, bt2) | 0, v3 = v3 + Math.imul(q2, yt2) | 0, l2 = l2 + Math.imul(P2, wt2) | 0, s2 = s2 + Math.imul(P2, xt2) | 0, s2 = s2 + Math.imul(O3, wt2) | 0, v3 = v3 + Math.imul(O3, xt2) | 0, l2 = l2 + Math.imul(B3, Mt2) | 0, s2 = s2 + Math.imul(B3, Et2) | 0, s2 = s2 + Math.imul(R, Mt2) | 0, v3 = v3 + Math.imul(R, Et2) | 0, l2 = l2 + Math.imul(u3, St2) | 0, s2 = s2 + Math.imul(u3, Nt2) | 0, s2 = s2 + Math.imul(E3, St2) | 0, v3 = v3 + Math.imul(E3, Nt2) | 0;
      var $r2 = (M2 + l2 | 0) + ((s2 & 8191) << 13) | 0;
      M2 = (v3 + (s2 >>> 13) | 0) + ($r2 >>> 26) | 0, $r2 &= 67108863, l2 = Math.imul(st2, ut2), s2 = Math.imul(st2, ht2), s2 = s2 + Math.imul(at2, ut2) | 0, v3 = Math.imul(at2, ht2), l2 = l2 + Math.imul(ft2, ct2) | 0, s2 = s2 + Math.imul(ft2, lt2) | 0, s2 = s2 + Math.imul(ot2, ct2) | 0, v3 = v3 + Math.imul(ot2, lt2) | 0, l2 = l2 + Math.imul(it2, dt2) | 0, s2 = s2 + Math.imul(it2, pt2) | 0, s2 = s2 + Math.imul(nt2, dt2) | 0, v3 = v3 + Math.imul(nt2, pt2) | 0, l2 = l2 + Math.imul(et2, vt2) | 0, s2 = s2 + Math.imul(et2, mt2) | 0, s2 = s2 + Math.imul(rt2, vt2) | 0, v3 = v3 + Math.imul(rt2, mt2) | 0, l2 = l2 + Math.imul($2, gt2) | 0, s2 = s2 + Math.imul($2, At2) | 0, s2 = s2 + Math.imul(tt2, gt2) | 0, v3 = v3 + Math.imul(tt2, At2) | 0, l2 = l2 + Math.imul(X2, bt2) | 0, s2 = s2 + Math.imul(X2, yt2) | 0, s2 = s2 + Math.imul(Z2, bt2) | 0, v3 = v3 + Math.imul(Z2, yt2) | 0, l2 = l2 + Math.imul(D2, wt2) | 0, s2 = s2 + Math.imul(D2, xt2) | 0, s2 = s2 + Math.imul(q2, wt2) | 0, v3 = v3 + Math.imul(q2, xt2) | 0, l2 = l2 + Math.imul(P2, Mt2) | 0, s2 = s2 + Math.imul(P2, Et2) | 0, s2 = s2 + Math.imul(O3, Mt2) | 0, v3 = v3 + Math.imul(O3, Et2) | 0, l2 = l2 + Math.imul(B3, St2) | 0, s2 = s2 + Math.imul(B3, Nt2) | 0, s2 = s2 + Math.imul(R, St2) | 0, v3 = v3 + Math.imul(R, Nt2) | 0, l2 = l2 + Math.imul(u3, It2) | 0, s2 = s2 + Math.imul(u3, _t2) | 0, s2 = s2 + Math.imul(E3, It2) | 0, v3 = v3 + Math.imul(E3, _t2) | 0;
      var ti = (M2 + l2 | 0) + ((s2 & 8191) << 13) | 0;
      M2 = (v3 + (s2 >>> 13) | 0) + (ti >>> 26) | 0, ti &= 67108863, l2 = Math.imul(st2, ct2), s2 = Math.imul(st2, lt2), s2 = s2 + Math.imul(at2, ct2) | 0, v3 = Math.imul(at2, lt2), l2 = l2 + Math.imul(ft2, dt2) | 0, s2 = s2 + Math.imul(ft2, pt2) | 0, s2 = s2 + Math.imul(ot2, dt2) | 0, v3 = v3 + Math.imul(ot2, pt2) | 0, l2 = l2 + Math.imul(it2, vt2) | 0, s2 = s2 + Math.imul(it2, mt2) | 0, s2 = s2 + Math.imul(nt2, vt2) | 0, v3 = v3 + Math.imul(nt2, mt2) | 0, l2 = l2 + Math.imul(et2, gt2) | 0, s2 = s2 + Math.imul(et2, At2) | 0, s2 = s2 + Math.imul(rt2, gt2) | 0, v3 = v3 + Math.imul(rt2, At2) | 0, l2 = l2 + Math.imul($2, bt2) | 0, s2 = s2 + Math.imul($2, yt2) | 0, s2 = s2 + Math.imul(tt2, bt2) | 0, v3 = v3 + Math.imul(tt2, yt2) | 0, l2 = l2 + Math.imul(X2, wt2) | 0, s2 = s2 + Math.imul(X2, xt2) | 0, s2 = s2 + Math.imul(Z2, wt2) | 0, v3 = v3 + Math.imul(Z2, xt2) | 0, l2 = l2 + Math.imul(D2, Mt2) | 0, s2 = s2 + Math.imul(D2, Et2) | 0, s2 = s2 + Math.imul(q2, Mt2) | 0, v3 = v3 + Math.imul(q2, Et2) | 0, l2 = l2 + Math.imul(P2, St2) | 0, s2 = s2 + Math.imul(P2, Nt2) | 0, s2 = s2 + Math.imul(O3, St2) | 0, v3 = v3 + Math.imul(O3, Nt2) | 0, l2 = l2 + Math.imul(B3, It2) | 0, s2 = s2 + Math.imul(B3, _t2) | 0, s2 = s2 + Math.imul(R, It2) | 0, v3 = v3 + Math.imul(R, _t2) | 0;
      var ei = (M2 + l2 | 0) + ((s2 & 8191) << 13) | 0;
      M2 = (v3 + (s2 >>> 13) | 0) + (ei >>> 26) | 0, ei &= 67108863, l2 = Math.imul(st2, dt2), s2 = Math.imul(st2, pt2), s2 = s2 + Math.imul(at2, dt2) | 0, v3 = Math.imul(at2, pt2), l2 = l2 + Math.imul(ft2, vt2) | 0, s2 = s2 + Math.imul(ft2, mt2) | 0, s2 = s2 + Math.imul(ot2, vt2) | 0, v3 = v3 + Math.imul(ot2, mt2) | 0, l2 = l2 + Math.imul(it2, gt2) | 0, s2 = s2 + Math.imul(it2, At2) | 0, s2 = s2 + Math.imul(nt2, gt2) | 0, v3 = v3 + Math.imul(nt2, At2) | 0, l2 = l2 + Math.imul(et2, bt2) | 0, s2 = s2 + Math.imul(et2, yt2) | 0, s2 = s2 + Math.imul(rt2, bt2) | 0, v3 = v3 + Math.imul(rt2, yt2) | 0, l2 = l2 + Math.imul($2, wt2) | 0, s2 = s2 + Math.imul($2, xt2) | 0, s2 = s2 + Math.imul(tt2, wt2) | 0, v3 = v3 + Math.imul(tt2, xt2) | 0, l2 = l2 + Math.imul(X2, Mt2) | 0, s2 = s2 + Math.imul(X2, Et2) | 0, s2 = s2 + Math.imul(Z2, Mt2) | 0, v3 = v3 + Math.imul(Z2, Et2) | 0, l2 = l2 + Math.imul(D2, St2) | 0, s2 = s2 + Math.imul(D2, Nt2) | 0, s2 = s2 + Math.imul(q2, St2) | 0, v3 = v3 + Math.imul(q2, Nt2) | 0, l2 = l2 + Math.imul(P2, It2) | 0, s2 = s2 + Math.imul(P2, _t2) | 0, s2 = s2 + Math.imul(O3, It2) | 0, v3 = v3 + Math.imul(O3, _t2) | 0;
      var ri = (M2 + l2 | 0) + ((s2 & 8191) << 13) | 0;
      M2 = (v3 + (s2 >>> 13) | 0) + (ri >>> 26) | 0, ri &= 67108863, l2 = Math.imul(st2, vt2), s2 = Math.imul(st2, mt2), s2 = s2 + Math.imul(at2, vt2) | 0, v3 = Math.imul(at2, mt2), l2 = l2 + Math.imul(ft2, gt2) | 0, s2 = s2 + Math.imul(ft2, At2) | 0, s2 = s2 + Math.imul(ot2, gt2) | 0, v3 = v3 + Math.imul(ot2, At2) | 0, l2 = l2 + Math.imul(it2, bt2) | 0, s2 = s2 + Math.imul(it2, yt2) | 0, s2 = s2 + Math.imul(nt2, bt2) | 0, v3 = v3 + Math.imul(nt2, yt2) | 0, l2 = l2 + Math.imul(et2, wt2) | 0, s2 = s2 + Math.imul(et2, xt2) | 0, s2 = s2 + Math.imul(rt2, wt2) | 0, v3 = v3 + Math.imul(rt2, xt2) | 0, l2 = l2 + Math.imul($2, Mt2) | 0, s2 = s2 + Math.imul($2, Et2) | 0, s2 = s2 + Math.imul(tt2, Mt2) | 0, v3 = v3 + Math.imul(tt2, Et2) | 0, l2 = l2 + Math.imul(X2, St2) | 0, s2 = s2 + Math.imul(X2, Nt2) | 0, s2 = s2 + Math.imul(Z2, St2) | 0, v3 = v3 + Math.imul(Z2, Nt2) | 0, l2 = l2 + Math.imul(D2, It2) | 0, s2 = s2 + Math.imul(D2, _t2) | 0, s2 = s2 + Math.imul(q2, It2) | 0, v3 = v3 + Math.imul(q2, _t2) | 0;
      var ii = (M2 + l2 | 0) + ((s2 & 8191) << 13) | 0;
      M2 = (v3 + (s2 >>> 13) | 0) + (ii >>> 26) | 0, ii &= 67108863, l2 = Math.imul(st2, gt2), s2 = Math.imul(st2, At2), s2 = s2 + Math.imul(at2, gt2) | 0, v3 = Math.imul(at2, At2), l2 = l2 + Math.imul(ft2, bt2) | 0, s2 = s2 + Math.imul(ft2, yt2) | 0, s2 = s2 + Math.imul(ot2, bt2) | 0, v3 = v3 + Math.imul(ot2, yt2) | 0, l2 = l2 + Math.imul(it2, wt2) | 0, s2 = s2 + Math.imul(it2, xt2) | 0, s2 = s2 + Math.imul(nt2, wt2) | 0, v3 = v3 + Math.imul(nt2, xt2) | 0, l2 = l2 + Math.imul(et2, Mt2) | 0, s2 = s2 + Math.imul(et2, Et2) | 0, s2 = s2 + Math.imul(rt2, Mt2) | 0, v3 = v3 + Math.imul(rt2, Et2) | 0, l2 = l2 + Math.imul($2, St2) | 0, s2 = s2 + Math.imul($2, Nt2) | 0, s2 = s2 + Math.imul(tt2, St2) | 0, v3 = v3 + Math.imul(tt2, Nt2) | 0, l2 = l2 + Math.imul(X2, It2) | 0, s2 = s2 + Math.imul(X2, _t2) | 0, s2 = s2 + Math.imul(Z2, It2) | 0, v3 = v3 + Math.imul(Z2, _t2) | 0;
      var ni = (M2 + l2 | 0) + ((s2 & 8191) << 13) | 0;
      M2 = (v3 + (s2 >>> 13) | 0) + (ni >>> 26) | 0, ni &= 67108863, l2 = Math.imul(st2, bt2), s2 = Math.imul(st2, yt2), s2 = s2 + Math.imul(at2, bt2) | 0, v3 = Math.imul(at2, yt2), l2 = l2 + Math.imul(ft2, wt2) | 0, s2 = s2 + Math.imul(ft2, xt2) | 0, s2 = s2 + Math.imul(ot2, wt2) | 0, v3 = v3 + Math.imul(ot2, xt2) | 0, l2 = l2 + Math.imul(it2, Mt2) | 0, s2 = s2 + Math.imul(it2, Et2) | 0, s2 = s2 + Math.imul(nt2, Mt2) | 0, v3 = v3 + Math.imul(nt2, Et2) | 0, l2 = l2 + Math.imul(et2, St2) | 0, s2 = s2 + Math.imul(et2, Nt2) | 0, s2 = s2 + Math.imul(rt2, St2) | 0, v3 = v3 + Math.imul(rt2, Nt2) | 0, l2 = l2 + Math.imul($2, It2) | 0, s2 = s2 + Math.imul($2, _t2) | 0, s2 = s2 + Math.imul(tt2, It2) | 0, v3 = v3 + Math.imul(tt2, _t2) | 0;
      var fi = (M2 + l2 | 0) + ((s2 & 8191) << 13) | 0;
      M2 = (v3 + (s2 >>> 13) | 0) + (fi >>> 26) | 0, fi &= 67108863, l2 = Math.imul(st2, wt2), s2 = Math.imul(st2, xt2), s2 = s2 + Math.imul(at2, wt2) | 0, v3 = Math.imul(at2, xt2), l2 = l2 + Math.imul(ft2, Mt2) | 0, s2 = s2 + Math.imul(ft2, Et2) | 0, s2 = s2 + Math.imul(ot2, Mt2) | 0, v3 = v3 + Math.imul(ot2, Et2) | 0, l2 = l2 + Math.imul(it2, St2) | 0, s2 = s2 + Math.imul(it2, Nt2) | 0, s2 = s2 + Math.imul(nt2, St2) | 0, v3 = v3 + Math.imul(nt2, Nt2) | 0, l2 = l2 + Math.imul(et2, It2) | 0, s2 = s2 + Math.imul(et2, _t2) | 0, s2 = s2 + Math.imul(rt2, It2) | 0, v3 = v3 + Math.imul(rt2, _t2) | 0;
      var oi = (M2 + l2 | 0) + ((s2 & 8191) << 13) | 0;
      M2 = (v3 + (s2 >>> 13) | 0) + (oi >>> 26) | 0, oi &= 67108863, l2 = Math.imul(st2, Mt2), s2 = Math.imul(st2, Et2), s2 = s2 + Math.imul(at2, Mt2) | 0, v3 = Math.imul(at2, Et2), l2 = l2 + Math.imul(ft2, St2) | 0, s2 = s2 + Math.imul(ft2, Nt2) | 0, s2 = s2 + Math.imul(ot2, St2) | 0, v3 = v3 + Math.imul(ot2, Nt2) | 0, l2 = l2 + Math.imul(it2, It2) | 0, s2 = s2 + Math.imul(it2, _t2) | 0, s2 = s2 + Math.imul(nt2, It2) | 0, v3 = v3 + Math.imul(nt2, _t2) | 0;
      var si = (M2 + l2 | 0) + ((s2 & 8191) << 13) | 0;
      M2 = (v3 + (s2 >>> 13) | 0) + (si >>> 26) | 0, si &= 67108863, l2 = Math.imul(st2, St2), s2 = Math.imul(st2, Nt2), s2 = s2 + Math.imul(at2, St2) | 0, v3 = Math.imul(at2, Nt2), l2 = l2 + Math.imul(ft2, It2) | 0, s2 = s2 + Math.imul(ft2, _t2) | 0, s2 = s2 + Math.imul(ot2, It2) | 0, v3 = v3 + Math.imul(ot2, _t2) | 0;
      var ai = (M2 + l2 | 0) + ((s2 & 8191) << 13) | 0;
      M2 = (v3 + (s2 >>> 13) | 0) + (ai >>> 26) | 0, ai &= 67108863, l2 = Math.imul(st2, It2), s2 = Math.imul(st2, _t2), s2 = s2 + Math.imul(at2, It2) | 0, v3 = Math.imul(at2, _t2);
      var ui = (M2 + l2 | 0) + ((s2 & 8191) << 13) | 0;
      return M2 = (v3 + (s2 >>> 13) | 0) + (ui >>> 26) | 0, ui &= 67108863, x2[0] = Me2, x2[1] = Ee2, x2[2] = Se2, x2[3] = Ne, x2[4] = Ie, x2[5] = Wr, x2[6] = Xr, x2[7] = Zr, x2[8] = $r2, x2[9] = ti, x2[10] = ei, x2[11] = ri, x2[12] = ii, x2[13] = ni, x2[14] = fi, x2[15] = oi, x2[16] = si, x2[17] = ai, x2[18] = ui, M2 !== 0 && (x2[19] = M2, c2.length++), c2;
    };
    Math.imul || (J2 = U2);
    function Bt2(A2, f3, a3) {
      a3.negative = f3.negative ^ A2.negative, a3.length = A2.length + f3.length;
      for (var c2 = 0, d4 = 0, g3 = 0; g3 < a3.length - 1; g3++) {
        var x2 = d4;
        d4 = 0;
        for (var M2 = c2 & 67108863, l2 = Math.min(g3, f3.length - 1), s2 = Math.max(0, g3 - A2.length + 1); s2 <= l2; s2++) {
          var v3 = g3 - s2, k2 = A2.words[v3] | 0, u3 = f3.words[s2] | 0, E3 = k2 * u3, _3 = E3 & 67108863;
          x2 = x2 + (E3 / 67108864 | 0) | 0, _3 = _3 + M2 | 0, M2 = _3 & 67108863, x2 = x2 + (_3 >>> 26) | 0, d4 += x2 >>> 26, x2 &= 67108863;
        }
        a3.words[g3] = M2, c2 = x2, x2 = d4;
      }
      return c2 !== 0 ? a3.words[g3] = c2 : a3.length--, a3._strip();
    }
    function G(A2, f3, a3) {
      return Bt2(A2, f3, a3);
    }
    o3.prototype.mulTo = function(f3, a3) {
      var c2, d4 = this.length + f3.length;
      return this.length === 10 && f3.length === 10 ? c2 = J2(this, f3, a3) : d4 < 63 ? c2 = U2(this, f3, a3) : d4 < 1024 ? c2 = Bt2(this, f3, a3) : c2 = G(this, f3, a3), c2;
    }, o3.prototype.mul = function(f3) {
      var a3 = new o3(null);
      return a3.words = new Array(this.length + f3.length), this.mulTo(f3, a3);
    }, o3.prototype.mulf = function(f3) {
      var a3 = new o3(null);
      return a3.words = new Array(this.length + f3.length), G(this, f3, a3);
    }, o3.prototype.imul = function(f3) {
      return this.clone().mulTo(f3, this);
    }, o3.prototype.imuln = function(f3) {
      var a3 = f3 < 0;
      a3 && (f3 = -f3), i3(typeof f3 == "number"), i3(f3 < 67108864);
      for (var c2 = 0, d4 = 0; d4 < this.length; d4++) {
        var g3 = (this.words[d4] | 0) * f3, x2 = (g3 & 67108863) + (c2 & 67108863);
        c2 >>= 26, c2 += g3 / 67108864 | 0, c2 += x2 >>> 26, this.words[d4] = x2 & 67108863;
      }
      return c2 !== 0 && (this.words[d4] = c2, this.length++), a3 ? this.ineg() : this;
    }, o3.prototype.muln = function(f3) {
      return this.clone().imuln(f3);
    }, o3.prototype.sqr = function() {
      return this.mul(this);
    }, o3.prototype.isqr = function() {
      return this.imul(this.clone());
    }, o3.prototype.pow = function(f3) {
      var a3 = F(f3);
      if (a3.length === 0)
        return new o3(1);
      for (var c2 = this, d4 = 0; d4 < a3.length && a3[d4] === 0; d4++, c2 = c2.sqr())
        ;
      if (++d4 < a3.length)
        for (var g3 = c2.sqr(); d4 < a3.length; d4++, g3 = g3.sqr())
          a3[d4] !== 0 && (c2 = c2.mul(g3));
      return c2;
    }, o3.prototype.iushln = function(f3) {
      i3(typeof f3 == "number" && f3 >= 0);
      var a3 = f3 % 26, c2 = (f3 - a3) / 26, d4 = 67108863 >>> 26 - a3 << 26 - a3, g3;
      if (a3 !== 0) {
        var x2 = 0;
        for (g3 = 0; g3 < this.length; g3++) {
          var M2 = this.words[g3] & d4, l2 = (this.words[g3] | 0) - M2 << a3;
          this.words[g3] = l2 | x2, x2 = M2 >>> 26 - a3;
        }
        x2 && (this.words[g3] = x2, this.length++);
      }
      if (c2 !== 0) {
        for (g3 = this.length - 1; g3 >= 0; g3--)
          this.words[g3 + c2] = this.words[g3];
        for (g3 = 0; g3 < c2; g3++)
          this.words[g3] = 0;
        this.length += c2;
      }
      return this._strip();
    }, o3.prototype.ishln = function(f3) {
      return i3(this.negative === 0), this.iushln(f3);
    }, o3.prototype.iushrn = function(f3, a3, c2) {
      i3(typeof f3 == "number" && f3 >= 0);
      var d4;
      a3 ? d4 = (a3 - a3 % 26) / 26 : d4 = 0;
      var g3 = f3 % 26, x2 = Math.min((f3 - g3) / 26, this.length), M2 = 67108863 ^ 67108863 >>> g3 << g3, l2 = c2;
      if (d4 -= x2, d4 = Math.max(0, d4), l2) {
        for (var s2 = 0; s2 < x2; s2++)
          l2.words[s2] = this.words[s2];
        l2.length = x2;
      }
      if (x2 !== 0)
        if (this.length > x2)
          for (this.length -= x2, s2 = 0; s2 < this.length; s2++)
            this.words[s2] = this.words[s2 + x2];
        else
          this.words[0] = 0, this.length = 1;
      var v3 = 0;
      for (s2 = this.length - 1; s2 >= 0 && (v3 !== 0 || s2 >= d4); s2--) {
        var k2 = this.words[s2] | 0;
        this.words[s2] = v3 << 26 - g3 | k2 >>> g3, v3 = k2 & M2;
      }
      return l2 && v3 !== 0 && (l2.words[l2.length++] = v3), this.length === 0 && (this.words[0] = 0, this.length = 1), this._strip();
    }, o3.prototype.ishrn = function(f3, a3, c2) {
      return i3(this.negative === 0), this.iushrn(f3, a3, c2);
    }, o3.prototype.shln = function(f3) {
      return this.clone().ishln(f3);
    }, o3.prototype.ushln = function(f3) {
      return this.clone().iushln(f3);
    }, o3.prototype.shrn = function(f3) {
      return this.clone().ishrn(f3);
    }, o3.prototype.ushrn = function(f3) {
      return this.clone().iushrn(f3);
    }, o3.prototype.testn = function(f3) {
      i3(typeof f3 == "number" && f3 >= 0);
      var a3 = f3 % 26, c2 = (f3 - a3) / 26, d4 = 1 << a3;
      if (this.length <= c2)
        return false;
      var g3 = this.words[c2];
      return !!(g3 & d4);
    }, o3.prototype.imaskn = function(f3) {
      i3(typeof f3 == "number" && f3 >= 0);
      var a3 = f3 % 26, c2 = (f3 - a3) / 26;
      if (i3(this.negative === 0, "imaskn works only with positive numbers"), this.length <= c2)
        return this;
      if (a3 !== 0 && c2++, this.length = Math.min(c2, this.length), a3 !== 0) {
        var d4 = 67108863 ^ 67108863 >>> a3 << a3;
        this.words[this.length - 1] &= d4;
      }
      return this._strip();
    }, o3.prototype.maskn = function(f3) {
      return this.clone().imaskn(f3);
    }, o3.prototype.iaddn = function(f3) {
      return i3(typeof f3 == "number"), i3(f3 < 67108864), f3 < 0 ? this.isubn(-f3) : this.negative !== 0 ? this.length === 1 && (this.words[0] | 0) <= f3 ? (this.words[0] = f3 - (this.words[0] | 0), this.negative = 0, this) : (this.negative = 0, this.isubn(f3), this.negative = 1, this) : this._iaddn(f3);
    }, o3.prototype._iaddn = function(f3) {
      this.words[0] += f3;
      for (var a3 = 0; a3 < this.length && this.words[a3] >= 67108864; a3++)
        this.words[a3] -= 67108864, a3 === this.length - 1 ? this.words[a3 + 1] = 1 : this.words[a3 + 1]++;
      return this.length = Math.max(this.length, a3 + 1), this;
    }, o3.prototype.isubn = function(f3) {
      if (i3(typeof f3 == "number"), i3(f3 < 67108864), f3 < 0)
        return this.iaddn(-f3);
      if (this.negative !== 0)
        return this.negative = 0, this.iaddn(f3), this.negative = 1, this;
      if (this.words[0] -= f3, this.length === 1 && this.words[0] < 0)
        this.words[0] = -this.words[0], this.negative = 1;
      else
        for (var a3 = 0; a3 < this.length && this.words[a3] < 0; a3++)
          this.words[a3] += 67108864, this.words[a3 + 1] -= 1;
      return this._strip();
    }, o3.prototype.addn = function(f3) {
      return this.clone().iaddn(f3);
    }, o3.prototype.subn = function(f3) {
      return this.clone().isubn(f3);
    }, o3.prototype.iabs = function() {
      return this.negative = 0, this;
    }, o3.prototype.abs = function() {
      return this.clone().iabs();
    }, o3.prototype._ishlnsubmul = function(f3, a3, c2) {
      var d4 = f3.length + c2, g3;
      this._expand(d4);
      var x2, M2 = 0;
      for (g3 = 0; g3 < f3.length; g3++) {
        x2 = (this.words[g3 + c2] | 0) + M2;
        var l2 = (f3.words[g3] | 0) * a3;
        x2 -= l2 & 67108863, M2 = (x2 >> 26) - (l2 / 67108864 | 0), this.words[g3 + c2] = x2 & 67108863;
      }
      for (; g3 < this.length - c2; g3++)
        x2 = (this.words[g3 + c2] | 0) + M2, M2 = x2 >> 26, this.words[g3 + c2] = x2 & 67108863;
      if (M2 === 0)
        return this._strip();
      for (i3(M2 === -1), M2 = 0, g3 = 0; g3 < this.length; g3++)
        x2 = -(this.words[g3] | 0) + M2, M2 = x2 >> 26, this.words[g3] = x2 & 67108863;
      return this.negative = 1, this._strip();
    }, o3.prototype._wordDiv = function(f3, a3) {
      var c2 = this.length - f3.length, d4 = this.clone(), g3 = f3, x2 = g3.words[g3.length - 1] | 0, M2 = this._countBits(x2);
      c2 = 26 - M2, c2 !== 0 && (g3 = g3.ushln(c2), d4.iushln(c2), x2 = g3.words[g3.length - 1] | 0);
      var l2 = d4.length - g3.length, s2;
      if (a3 !== "mod") {
        s2 = new o3(null), s2.length = l2 + 1, s2.words = new Array(s2.length);
        for (var v3 = 0; v3 < s2.length; v3++)
          s2.words[v3] = 0;
      }
      var k2 = d4.clone()._ishlnsubmul(g3, 1, l2);
      k2.negative === 0 && (d4 = k2, s2 && (s2.words[l2] = 1));
      for (var u3 = l2 - 1; u3 >= 0; u3--) {
        var E3 = (d4.words[g3.length + u3] | 0) * 67108864 + (d4.words[g3.length + u3 - 1] | 0);
        for (E3 = Math.min(E3 / x2 | 0, 67108863), d4._ishlnsubmul(g3, E3, u3); d4.negative !== 0; )
          E3--, d4.negative = 0, d4._ishlnsubmul(g3, 1, u3), d4.isZero() || (d4.negative ^= 1);
        s2 && (s2.words[u3] = E3);
      }
      return s2 && s2._strip(), d4._strip(), a3 !== "div" && c2 !== 0 && d4.iushrn(c2), { div: s2 || null, mod: d4 };
    }, o3.prototype.divmod = function(f3, a3, c2) {
      if (i3(!f3.isZero()), this.isZero())
        return { div: new o3(0), mod: new o3(0) };
      var d4, g3, x2;
      return this.negative !== 0 && f3.negative === 0 ? (x2 = this.neg().divmod(f3, a3), a3 !== "mod" && (d4 = x2.div.neg()), a3 !== "div" && (g3 = x2.mod.neg(), c2 && g3.negative !== 0 && g3.iadd(f3)), { div: d4, mod: g3 }) : this.negative === 0 && f3.negative !== 0 ? (x2 = this.divmod(f3.neg(), a3), a3 !== "mod" && (d4 = x2.div.neg()), { div: d4, mod: x2.mod }) : this.negative & f3.negative ? (x2 = this.neg().divmod(f3.neg(), a3), a3 !== "div" && (g3 = x2.mod.neg(), c2 && g3.negative !== 0 && g3.isub(f3)), { div: x2.div, mod: g3 }) : f3.length > this.length || this.cmp(f3) < 0 ? { div: new o3(0), mod: this } : f3.length === 1 ? a3 === "div" ? { div: this.divn(f3.words[0]), mod: null } : a3 === "mod" ? { div: null, mod: new o3(this.modrn(f3.words[0])) } : { div: this.divn(f3.words[0]), mod: new o3(this.modrn(f3.words[0])) } : this._wordDiv(f3, a3);
    }, o3.prototype.div = function(f3) {
      return this.divmod(f3, "div", false).div;
    }, o3.prototype.mod = function(f3) {
      return this.divmod(f3, "mod", false).mod;
    }, o3.prototype.umod = function(f3) {
      return this.divmod(f3, "mod", true).mod;
    }, o3.prototype.divRound = function(f3) {
      var a3 = this.divmod(f3);
      if (a3.mod.isZero())
        return a3.div;
      var c2 = a3.div.negative !== 0 ? a3.mod.isub(f3) : a3.mod, d4 = f3.ushrn(1), g3 = f3.andln(1), x2 = c2.cmp(d4);
      return x2 < 0 || g3 === 1 && x2 === 0 ? a3.div : a3.div.negative !== 0 ? a3.div.isubn(1) : a3.div.iaddn(1);
    }, o3.prototype.modrn = function(f3) {
      var a3 = f3 < 0;
      a3 && (f3 = -f3), i3(f3 <= 67108863);
      for (var c2 = (1 << 26) % f3, d4 = 0, g3 = this.length - 1; g3 >= 0; g3--)
        d4 = (c2 * d4 + (this.words[g3] | 0)) % f3;
      return a3 ? -d4 : d4;
    }, o3.prototype.modn = function(f3) {
      return this.modrn(f3);
    }, o3.prototype.idivn = function(f3) {
      var a3 = f3 < 0;
      a3 && (f3 = -f3), i3(f3 <= 67108863);
      for (var c2 = 0, d4 = this.length - 1; d4 >= 0; d4--) {
        var g3 = (this.words[d4] | 0) + c2 * 67108864;
        this.words[d4] = g3 / f3 | 0, c2 = g3 % f3;
      }
      return this._strip(), a3 ? this.ineg() : this;
    }, o3.prototype.divn = function(f3) {
      return this.clone().idivn(f3);
    }, o3.prototype.egcd = function(f3) {
      i3(f3.negative === 0), i3(!f3.isZero());
      var a3 = this, c2 = f3.clone();
      a3.negative !== 0 ? a3 = a3.umod(f3) : a3 = a3.clone();
      for (var d4 = new o3(1), g3 = new o3(0), x2 = new o3(0), M2 = new o3(1), l2 = 0; a3.isEven() && c2.isEven(); )
        a3.iushrn(1), c2.iushrn(1), ++l2;
      for (var s2 = c2.clone(), v3 = a3.clone(); !a3.isZero(); ) {
        for (var k2 = 0, u3 = 1; !(a3.words[0] & u3) && k2 < 26; ++k2, u3 <<= 1)
          ;
        if (k2 > 0)
          for (a3.iushrn(k2); k2-- > 0; )
            (d4.isOdd() || g3.isOdd()) && (d4.iadd(s2), g3.isub(v3)), d4.iushrn(1), g3.iushrn(1);
        for (var E3 = 0, _3 = 1; !(c2.words[0] & _3) && E3 < 26; ++E3, _3 <<= 1)
          ;
        if (E3 > 0)
          for (c2.iushrn(E3); E3-- > 0; )
            (x2.isOdd() || M2.isOdd()) && (x2.iadd(s2), M2.isub(v3)), x2.iushrn(1), M2.iushrn(1);
        a3.cmp(c2) >= 0 ? (a3.isub(c2), d4.isub(x2), g3.isub(M2)) : (c2.isub(a3), x2.isub(d4), M2.isub(g3));
      }
      return { a: x2, b: M2, gcd: c2.iushln(l2) };
    }, o3.prototype._invmp = function(f3) {
      i3(f3.negative === 0), i3(!f3.isZero());
      var a3 = this, c2 = f3.clone();
      a3.negative !== 0 ? a3 = a3.umod(f3) : a3 = a3.clone();
      for (var d4 = new o3(1), g3 = new o3(0), x2 = c2.clone(); a3.cmpn(1) > 0 && c2.cmpn(1) > 0; ) {
        for (var M2 = 0, l2 = 1; !(a3.words[0] & l2) && M2 < 26; ++M2, l2 <<= 1)
          ;
        if (M2 > 0)
          for (a3.iushrn(M2); M2-- > 0; )
            d4.isOdd() && d4.iadd(x2), d4.iushrn(1);
        for (var s2 = 0, v3 = 1; !(c2.words[0] & v3) && s2 < 26; ++s2, v3 <<= 1)
          ;
        if (s2 > 0)
          for (c2.iushrn(s2); s2-- > 0; )
            g3.isOdd() && g3.iadd(x2), g3.iushrn(1);
        a3.cmp(c2) >= 0 ? (a3.isub(c2), d4.isub(g3)) : (c2.isub(a3), g3.isub(d4));
      }
      var k2;
      return a3.cmpn(1) === 0 ? k2 = d4 : k2 = g3, k2.cmpn(0) < 0 && k2.iadd(f3), k2;
    }, o3.prototype.gcd = function(f3) {
      if (this.isZero())
        return f3.abs();
      if (f3.isZero())
        return this.abs();
      var a3 = this.clone(), c2 = f3.clone();
      a3.negative = 0, c2.negative = 0;
      for (var d4 = 0; a3.isEven() && c2.isEven(); d4++)
        a3.iushrn(1), c2.iushrn(1);
      do {
        for (; a3.isEven(); )
          a3.iushrn(1);
        for (; c2.isEven(); )
          c2.iushrn(1);
        var g3 = a3.cmp(c2);
        if (g3 < 0) {
          var x2 = a3;
          a3 = c2, c2 = x2;
        } else if (g3 === 0 || c2.cmpn(1) === 0)
          break;
        a3.isub(c2);
      } while (true);
      return c2.iushln(d4);
    }, o3.prototype.invm = function(f3) {
      return this.egcd(f3).a.umod(f3);
    }, o3.prototype.isEven = function() {
      return (this.words[0] & 1) === 0;
    }, o3.prototype.isOdd = function() {
      return (this.words[0] & 1) === 1;
    }, o3.prototype.andln = function(f3) {
      return this.words[0] & f3;
    }, o3.prototype.bincn = function(f3) {
      i3(typeof f3 == "number");
      var a3 = f3 % 26, c2 = (f3 - a3) / 26, d4 = 1 << a3;
      if (this.length <= c2)
        return this._expand(c2 + 1), this.words[c2] |= d4, this;
      for (var g3 = d4, x2 = c2; g3 !== 0 && x2 < this.length; x2++) {
        var M2 = this.words[x2] | 0;
        M2 += g3, g3 = M2 >>> 26, M2 &= 67108863, this.words[x2] = M2;
      }
      return g3 !== 0 && (this.words[x2] = g3, this.length++), this;
    }, o3.prototype.isZero = function() {
      return this.length === 1 && this.words[0] === 0;
    }, o3.prototype.cmpn = function(f3) {
      var a3 = f3 < 0;
      if (this.negative !== 0 && !a3)
        return -1;
      if (this.negative === 0 && a3)
        return 1;
      this._strip();
      var c2;
      if (this.length > 1)
        c2 = 1;
      else {
        a3 && (f3 = -f3), i3(f3 <= 67108863, "Number is too big");
        var d4 = this.words[0] | 0;
        c2 = d4 === f3 ? 0 : d4 < f3 ? -1 : 1;
      }
      return this.negative !== 0 ? -c2 | 0 : c2;
    }, o3.prototype.cmp = function(f3) {
      if (this.negative !== 0 && f3.negative === 0)
        return -1;
      if (this.negative === 0 && f3.negative !== 0)
        return 1;
      var a3 = this.ucmp(f3);
      return this.negative !== 0 ? -a3 | 0 : a3;
    }, o3.prototype.ucmp = function(f3) {
      if (this.length > f3.length)
        return 1;
      if (this.length < f3.length)
        return -1;
      for (var a3 = 0, c2 = this.length - 1; c2 >= 0; c2--) {
        var d4 = this.words[c2] | 0, g3 = f3.words[c2] | 0;
        if (d4 !== g3) {
          d4 < g3 ? a3 = -1 : d4 > g3 && (a3 = 1);
          break;
        }
      }
      return a3;
    }, o3.prototype.gtn = function(f3) {
      return this.cmpn(f3) === 1;
    }, o3.prototype.gt = function(f3) {
      return this.cmp(f3) === 1;
    }, o3.prototype.gten = function(f3) {
      return this.cmpn(f3) >= 0;
    }, o3.prototype.gte = function(f3) {
      return this.cmp(f3) >= 0;
    }, o3.prototype.ltn = function(f3) {
      return this.cmpn(f3) === -1;
    }, o3.prototype.lt = function(f3) {
      return this.cmp(f3) === -1;
    }, o3.prototype.lten = function(f3) {
      return this.cmpn(f3) <= 0;
    }, o3.prototype.lte = function(f3) {
      return this.cmp(f3) <= 0;
    }, o3.prototype.eqn = function(f3) {
      return this.cmpn(f3) === 0;
    }, o3.prototype.eq = function(f3) {
      return this.cmp(f3) === 0;
    }, o3.red = function(f3) {
      return new Y(f3);
    }, o3.prototype.toRed = function(f3) {
      return i3(!this.red, "Already a number in reduction context"), i3(this.negative === 0, "red works only with positives"), f3.convertTo(this)._forceRed(f3);
    }, o3.prototype.fromRed = function() {
      return i3(this.red, "fromRed works only with numbers in reduction context"), this.red.convertFrom(this);
    }, o3.prototype._forceRed = function(f3) {
      return this.red = f3, this;
    }, o3.prototype.forceRed = function(f3) {
      return i3(!this.red, "Already a number in reduction context"), this._forceRed(f3);
    }, o3.prototype.redAdd = function(f3) {
      return i3(this.red, "redAdd works only with red numbers"), this.red.add(this, f3);
    }, o3.prototype.redIAdd = function(f3) {
      return i3(this.red, "redIAdd works only with red numbers"), this.red.iadd(this, f3);
    }, o3.prototype.redSub = function(f3) {
      return i3(this.red, "redSub works only with red numbers"), this.red.sub(this, f3);
    }, o3.prototype.redISub = function(f3) {
      return i3(this.red, "redISub works only with red numbers"), this.red.isub(this, f3);
    }, o3.prototype.redShl = function(f3) {
      return i3(this.red, "redShl works only with red numbers"), this.red.shl(this, f3);
    }, o3.prototype.redMul = function(f3) {
      return i3(this.red, "redMul works only with red numbers"), this.red._verify2(this, f3), this.red.mul(this, f3);
    }, o3.prototype.redIMul = function(f3) {
      return i3(this.red, "redMul works only with red numbers"), this.red._verify2(this, f3), this.red.imul(this, f3);
    }, o3.prototype.redSqr = function() {
      return i3(this.red, "redSqr works only with red numbers"), this.red._verify1(this), this.red.sqr(this);
    }, o3.prototype.redISqr = function() {
      return i3(this.red, "redISqr works only with red numbers"), this.red._verify1(this), this.red.isqr(this);
    }, o3.prototype.redSqrt = function() {
      return i3(this.red, "redSqrt works only with red numbers"), this.red._verify1(this), this.red.sqrt(this);
    }, o3.prototype.redInvm = function() {
      return i3(this.red, "redInvm works only with red numbers"), this.red._verify1(this), this.red.invm(this);
    }, o3.prototype.redNeg = function() {
      return i3(this.red, "redNeg works only with red numbers"), this.red._verify1(this), this.red.neg(this);
    }, o3.prototype.redPow = function(f3) {
      return i3(this.red && !f3.red, "redPow(normalNum)"), this.red._verify1(this), this.red.pow(this, f3);
    };
    var H = { k256: null, p224: null, p192: null, p25519: null };
    function z2(A2, f3) {
      this.name = A2, this.p = new o3(f3, 16), this.n = this.p.bitLength(), this.k = new o3(1).iushln(this.n).isub(this.p), this.tmp = this._tmp();
    }
    z2.prototype._tmp = function() {
      var f3 = new o3(null);
      return f3.words = new Array(Math.ceil(this.n / 13)), f3;
    }, z2.prototype.ireduce = function(f3) {
      var a3 = f3, c2;
      do
        this.split(a3, this.tmp), a3 = this.imulK(a3), a3 = a3.iadd(this.tmp), c2 = a3.bitLength();
      while (c2 > this.n);
      var d4 = c2 < this.n ? -1 : a3.ucmp(this.p);
      return d4 === 0 ? (a3.words[0] = 0, a3.length = 1) : d4 > 0 ? a3.isub(this.p) : a3.strip !== void 0 ? a3.strip() : a3._strip(), a3;
    }, z2.prototype.split = function(f3, a3) {
      f3.iushrn(this.n, 0, a3);
    }, z2.prototype.imulK = function(f3) {
      return f3.imul(this.k);
    };
    function Pt2() {
      z2.call(this, "k256", "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe fffffc2f");
    }
    n4(Pt2, z2), Pt2.prototype.split = function(f3, a3) {
      for (var c2 = 4194303, d4 = Math.min(f3.length, 9), g3 = 0; g3 < d4; g3++)
        a3.words[g3] = f3.words[g3];
      if (a3.length = d4, f3.length <= 9) {
        f3.words[0] = 0, f3.length = 1;
        return;
      }
      var x2 = f3.words[9];
      for (a3.words[a3.length++] = x2 & c2, g3 = 10; g3 < f3.length; g3++) {
        var M2 = f3.words[g3] | 0;
        f3.words[g3 - 10] = (M2 & c2) << 4 | x2 >>> 22, x2 = M2;
      }
      x2 >>>= 22, f3.words[g3 - 10] = x2, x2 === 0 && f3.length > 10 ? f3.length -= 10 : f3.length -= 9;
    }, Pt2.prototype.imulK = function(f3) {
      f3.words[f3.length] = 0, f3.words[f3.length + 1] = 0, f3.length += 2;
      for (var a3 = 0, c2 = 0; c2 < f3.length; c2++) {
        var d4 = f3.words[c2] | 0;
        a3 += d4 * 977, f3.words[c2] = a3 & 67108863, a3 = d4 * 64 + (a3 / 67108864 | 0);
      }
      return f3.words[f3.length - 1] === 0 && (f3.length--, f3.words[f3.length - 1] === 0 && f3.length--), f3;
    };
    function W() {
      z2.call(this, "p224", "ffffffff ffffffff ffffffff ffffffff 00000000 00000000 00000001");
    }
    n4(W, z2);
    function Rt2() {
      z2.call(this, "p192", "ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff");
    }
    n4(Rt2, z2);
    function Yt3() {
      z2.call(this, "25519", "7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed");
    }
    n4(Yt3, z2), Yt3.prototype.imulK = function(f3) {
      for (var a3 = 0, c2 = 0; c2 < f3.length; c2++) {
        var d4 = (f3.words[c2] | 0) * 19 + a3, g3 = d4 & 67108863;
        d4 >>>= 26, f3.words[c2] = g3, a3 = d4;
      }
      return a3 !== 0 && (f3.words[f3.length++] = a3), f3;
    }, o3._prime = function(f3) {
      if (H[f3])
        return H[f3];
      var a3;
      if (f3 === "k256")
        a3 = new Pt2();
      else if (f3 === "p224")
        a3 = new W();
      else if (f3 === "p192")
        a3 = new Rt2();
      else if (f3 === "p25519")
        a3 = new Yt3();
      else
        throw new Error("Unknown prime " + f3);
      return H[f3] = a3, a3;
    };
    function Y(A2) {
      if (typeof A2 == "string") {
        var f3 = o3._prime(A2);
        this.m = f3.p, this.prime = f3;
      } else
        i3(A2.gtn(1), "modulus must be greater than 1"), this.m = A2, this.prime = null;
    }
    Y.prototype._verify1 = function(f3) {
      i3(f3.negative === 0, "red works only with positives"), i3(f3.red, "red works only with red numbers");
    }, Y.prototype._verify2 = function(f3, a3) {
      i3((f3.negative | a3.negative) === 0, "red works only with positives"), i3(f3.red && f3.red === a3.red, "red works only with red numbers");
    }, Y.prototype.imod = function(f3) {
      return this.prime ? this.prime.ireduce(f3)._forceRed(this) : (w3(f3, f3.umod(this.m)._forceRed(this)), f3);
    }, Y.prototype.neg = function(f3) {
      return f3.isZero() ? f3.clone() : this.m.sub(f3)._forceRed(this);
    }, Y.prototype.add = function(f3, a3) {
      this._verify2(f3, a3);
      var c2 = f3.add(a3);
      return c2.cmp(this.m) >= 0 && c2.isub(this.m), c2._forceRed(this);
    }, Y.prototype.iadd = function(f3, a3) {
      this._verify2(f3, a3);
      var c2 = f3.iadd(a3);
      return c2.cmp(this.m) >= 0 && c2.isub(this.m), c2;
    }, Y.prototype.sub = function(f3, a3) {
      this._verify2(f3, a3);
      var c2 = f3.sub(a3);
      return c2.cmpn(0) < 0 && c2.iadd(this.m), c2._forceRed(this);
    }, Y.prototype.isub = function(f3, a3) {
      this._verify2(f3, a3);
      var c2 = f3.isub(a3);
      return c2.cmpn(0) < 0 && c2.iadd(this.m), c2;
    }, Y.prototype.shl = function(f3, a3) {
      return this._verify1(f3), this.imod(f3.ushln(a3));
    }, Y.prototype.imul = function(f3, a3) {
      return this._verify2(f3, a3), this.imod(f3.imul(a3));
    }, Y.prototype.mul = function(f3, a3) {
      return this._verify2(f3, a3), this.imod(f3.mul(a3));
    }, Y.prototype.isqr = function(f3) {
      return this.imul(f3, f3.clone());
    }, Y.prototype.sqr = function(f3) {
      return this.mul(f3, f3);
    }, Y.prototype.sqrt = function(f3) {
      if (f3.isZero())
        return f3.clone();
      var a3 = this.m.andln(3);
      if (i3(a3 % 2 === 1), a3 === 3) {
        var c2 = this.m.add(new o3(1)).iushrn(2);
        return this.pow(f3, c2);
      }
      for (var d4 = this.m.subn(1), g3 = 0; !d4.isZero() && d4.andln(1) === 0; )
        g3++, d4.iushrn(1);
      i3(!d4.isZero());
      var x2 = new o3(1).toRed(this), M2 = x2.redNeg(), l2 = this.m.subn(1).iushrn(1), s2 = this.m.bitLength();
      for (s2 = new o3(2 * s2 * s2).toRed(this); this.pow(s2, l2).cmp(M2) !== 0; )
        s2.redIAdd(M2);
      for (var v3 = this.pow(s2, d4), k2 = this.pow(f3, d4.addn(1).iushrn(1)), u3 = this.pow(f3, d4), E3 = g3; u3.cmp(x2) !== 0; ) {
        for (var _3 = u3, B3 = 0; _3.cmp(x2) !== 0; B3++)
          _3 = _3.redSqr();
        i3(B3 < E3);
        var R = this.pow(v3, new o3(1).iushln(E3 - B3 - 1));
        k2 = k2.redMul(R), v3 = R.redSqr(), u3 = u3.redMul(v3), E3 = B3;
      }
      return k2;
    }, Y.prototype.invm = function(f3) {
      var a3 = f3._invmp(this.m);
      return a3.negative !== 0 ? (a3.negative = 0, this.imod(a3).redNeg()) : this.imod(a3);
    }, Y.prototype.pow = function(f3, a3) {
      if (a3.isZero())
        return new o3(1).toRed(this);
      if (a3.cmpn(1) === 0)
        return f3.clone();
      var c2 = 4, d4 = new Array(1 << c2);
      d4[0] = new o3(1).toRed(this), d4[1] = f3;
      for (var g3 = 2; g3 < d4.length; g3++)
        d4[g3] = this.mul(d4[g3 - 1], f3);
      var x2 = d4[0], M2 = 0, l2 = 0, s2 = a3.bitLength() % 26;
      for (s2 === 0 && (s2 = 26), g3 = a3.length - 1; g3 >= 0; g3--) {
        for (var v3 = a3.words[g3], k2 = s2 - 1; k2 >= 0; k2--) {
          var u3 = v3 >> k2 & 1;
          if (x2 !== d4[0] && (x2 = this.sqr(x2)), u3 === 0 && M2 === 0) {
            l2 = 0;
            continue;
          }
          M2 <<= 1, M2 |= u3, l2++, !(l2 !== c2 && (g3 !== 0 || k2 !== 0)) && (x2 = this.mul(x2, d4[M2]), l2 = 0, M2 = 0);
        }
        s2 = 26;
      }
      return x2;
    }, Y.prototype.convertTo = function(f3) {
      var a3 = f3.umod(this.m);
      return a3 === f3 ? a3.clone() : a3;
    }, Y.prototype.convertFrom = function(f3) {
      var a3 = f3.clone();
      return a3.red = null, a3;
    }, o3.mont = function(f3) {
      return new Vt2(f3);
    };
    function Vt2(A2) {
      Y.call(this, A2), this.shift = this.m.bitLength(), this.shift % 26 !== 0 && (this.shift += 26 - this.shift % 26), this.r = new o3(1).iushln(this.shift), this.r2 = this.imod(this.r.sqr()), this.rinv = this.r._invmp(this.m), this.minv = this.rinv.mul(this.r).isubn(1).div(this.m), this.minv = this.minv.umod(this.r), this.minv = this.r.sub(this.minv);
    }
    n4(Vt2, Y), Vt2.prototype.convertTo = function(f3) {
      return this.imod(f3.ushln(this.shift));
    }, Vt2.prototype.convertFrom = function(f3) {
      var a3 = this.imod(f3.mul(this.rinv));
      return a3.red = null, a3;
    }, Vt2.prototype.imul = function(f3, a3) {
      if (f3.isZero() || a3.isZero())
        return f3.words[0] = 0, f3.length = 1, f3;
      var c2 = f3.imul(a3), d4 = c2.maskn(this.shift).mul(this.minv).imaskn(this.shift).mul(this.m), g3 = c2.isub(d4).iushrn(this.shift), x2 = g3;
      return g3.cmp(this.m) >= 0 ? x2 = g3.isub(this.m) : g3.cmpn(0) < 0 && (x2 = g3.iadd(this.m)), x2._forceRed(this);
    }, Vt2.prototype.mul = function(f3, a3) {
      if (f3.isZero() || a3.isZero())
        return new o3(0)._forceRed(this);
      var c2 = f3.mul(a3), d4 = c2.maskn(this.shift).mul(this.minv).imaskn(this.shift).mul(this.m), g3 = c2.isub(d4).iushrn(this.shift), x2 = g3;
      return g3.cmp(this.m) >= 0 ? x2 = g3.isub(this.m) : g3.cmpn(0) < 0 && (x2 = g3.iadd(this.m)), x2._forceRed(this);
    }, Vt2.prototype.invm = function(f3) {
      var a3 = this.imod(f3._invmp(this.m).mul(this.r2));
      return a3._forceRed(this);
    };
  })(e2, On);
})(Ln);
var K$1 = Ln.exports;
const jn = "bignumber/5.7.0";
var Rr$1 = K$1.BN;
const Ae = new L$4(jn), wi = {}, Qn = 9007199254740991;
function C0(e2) {
  return e2 != null && (V$1.isBigNumber(e2) || typeof e2 == "number" && e2 % 1 === 0 || typeof e2 == "string" && !!e2.match(/^-?[0-9]+$/) || Qt(e2) || typeof e2 == "bigint" || ir$1(e2));
}
let Jn = false;
let V$1 = class V {
  constructor(t, r2) {
    t !== wi && Ae.throwError("cannot call constructor directly; use BigNumber.from", L$4.errors.UNSUPPORTED_OPERATION, { operation: "new (BigNumber)" }), this._hex = r2, this._isBigNumber = true, Object.freeze(this);
  }
  fromTwos(t) {
    return Lt$1(j$4(this).fromTwos(t));
  }
  toTwos(t) {
    return Lt$1(j$4(this).toTwos(t));
  }
  abs() {
    return this._hex[0] === "-" ? V.from(this._hex.substring(1)) : this;
  }
  add(t) {
    return Lt$1(j$4(this).add(j$4(t)));
  }
  sub(t) {
    return Lt$1(j$4(this).sub(j$4(t)));
  }
  div(t) {
    return V.from(t).isZero() && Wt$1("division-by-zero", "div"), Lt$1(j$4(this).div(j$4(t)));
  }
  mul(t) {
    return Lt$1(j$4(this).mul(j$4(t)));
  }
  mod(t) {
    const r2 = j$4(t);
    return r2.isNeg() && Wt$1("division-by-zero", "mod"), Lt$1(j$4(this).umod(r2));
  }
  pow(t) {
    const r2 = j$4(t);
    return r2.isNeg() && Wt$1("negative-power", "pow"), Lt$1(j$4(this).pow(r2));
  }
  and(t) {
    const r2 = j$4(t);
    return (this.isNegative() || r2.isNeg()) && Wt$1("unbound-bitwise-result", "and"), Lt$1(j$4(this).and(r2));
  }
  or(t) {
    const r2 = j$4(t);
    return (this.isNegative() || r2.isNeg()) && Wt$1("unbound-bitwise-result", "or"), Lt$1(j$4(this).or(r2));
  }
  xor(t) {
    const r2 = j$4(t);
    return (this.isNegative() || r2.isNeg()) && Wt$1("unbound-bitwise-result", "xor"), Lt$1(j$4(this).xor(r2));
  }
  mask(t) {
    return (this.isNegative() || t < 0) && Wt$1("negative-width", "mask"), Lt$1(j$4(this).maskn(t));
  }
  shl(t) {
    return (this.isNegative() || t < 0) && Wt$1("negative-width", "shl"), Lt$1(j$4(this).shln(t));
  }
  shr(t) {
    return (this.isNegative() || t < 0) && Wt$1("negative-width", "shr"), Lt$1(j$4(this).shrn(t));
  }
  eq(t) {
    return j$4(this).eq(j$4(t));
  }
  lt(t) {
    return j$4(this).lt(j$4(t));
  }
  lte(t) {
    return j$4(this).lte(j$4(t));
  }
  gt(t) {
    return j$4(this).gt(j$4(t));
  }
  gte(t) {
    return j$4(this).gte(j$4(t));
  }
  isNegative() {
    return this._hex[0] === "-";
  }
  isZero() {
    return j$4(this).isZero();
  }
  toNumber() {
    try {
      return j$4(this).toNumber();
    } catch {
      Wt$1("overflow", "toNumber", this.toString());
    }
    return null;
  }
  toBigInt() {
    try {
      return BigInt(this.toString());
    } catch {
    }
    return Ae.throwError("this platform does not support BigInt", L$4.errors.UNSUPPORTED_OPERATION, { value: this.toString() });
  }
  toString() {
    return arguments.length > 0 && (arguments[0] === 10 ? Jn || (Jn = true, Ae.warn("BigNumber.toString does not accept any parameters; base-10 is assumed")) : arguments[0] === 16 ? Ae.throwError("BigNumber.toString does not accept any parameters; use bigNumber.toHexString()", L$4.errors.UNEXPECTED_ARGUMENT, {}) : Ae.throwError("BigNumber.toString does not accept parameters", L$4.errors.UNEXPECTED_ARGUMENT, {})), j$4(this).toString(10);
  }
  toHexString() {
    return this._hex;
  }
  toJSON(t) {
    return { type: "BigNumber", hex: this.toHexString() };
  }
  static from(t) {
    if (t instanceof V)
      return t;
    if (typeof t == "string")
      return t.match(/^-?0x[0-9a-f]+$/i) ? new V(wi, vr$1(t)) : t.match(/^-?[0-9]+$/) ? new V(wi, vr$1(new Rr$1(t))) : Ae.throwArgumentError("invalid BigNumber string", "value", t);
    if (typeof t == "number")
      return t % 1 && Wt$1("underflow", "BigNumber.from", t), (t >= Qn || t <= -Qn) && Wt$1("overflow", "BigNumber.from", t), V.from(String(t));
    const r2 = t;
    if (typeof r2 == "bigint")
      return V.from(r2.toString());
    if (ir$1(r2))
      return V.from(Kt$1(r2));
    if (r2)
      if (r2.toHexString) {
        const i3 = r2.toHexString();
        if (typeof i3 == "string")
          return V.from(i3);
      } else {
        let i3 = r2._hex;
        if (i3 == null && r2.type === "BigNumber" && (i3 = r2.hex), typeof i3 == "string" && (Qt(i3) || i3[0] === "-" && Qt(i3.substring(1))))
          return V.from(i3);
      }
    return Ae.throwArgumentError("invalid BigNumber value", "value", t);
  }
  static isBigNumber(t) {
    return !!(t && t._isBigNumber);
  }
};
function vr$1(e2) {
  if (typeof e2 != "string")
    return vr$1(e2.toString(16));
  if (e2[0] === "-")
    return e2 = e2.substring(1), e2[0] === "-" && Ae.throwArgumentError("invalid hex", "value", e2), e2 = vr$1(e2), e2 === "0x00" ? e2 : "-" + e2;
  if (e2.substring(0, 2) !== "0x" && (e2 = "0x" + e2), e2 === "0x")
    return "0x00";
  for (e2.length % 2 && (e2 = "0x0" + e2.substring(2)); e2.length > 4 && e2.substring(0, 4) === "0x00"; )
    e2 = "0x" + e2.substring(4);
  return e2;
}
function Lt$1(e2) {
  return V$1.from(vr$1(e2));
}
function j$4(e2) {
  const t = V$1.from(e2).toHexString();
  return t[0] === "-" ? new Rr$1("-" + t.substring(3), 16) : new Rr$1(t.substring(2), 16);
}
function Wt$1(e2, t, r2) {
  const i3 = { fault: e2, operation: t };
  return r2 != null && (i3.value = r2), Ae.throwError(e2, L$4.errors.NUMERIC_FAULT, i3);
}
function R0(e2) {
  return new Rr$1(e2, 36).toString(16);
}
const Ht$1 = new L$4(jn), mr$1 = {}, Gn = V$1.from(0), Yn = V$1.from(-1);
function Vn$1(e2, t, r2, i3) {
  const n4 = { fault: t, operation: r2 };
  return i3 !== void 0 && (n4.value = i3), Ht$1.throwError(e2, L$4.errors.NUMERIC_FAULT, n4);
}
let gr$1 = "0";
for (; gr$1.length < 256; )
  gr$1 += gr$1;
function xi(e2) {
  if (typeof e2 != "number")
    try {
      e2 = V$1.from(e2).toNumber();
    } catch {
    }
  return typeof e2 == "number" && e2 >= 0 && e2 <= 256 && !(e2 % 1) ? "1" + gr$1.substring(0, e2) : Ht$1.throwArgumentError("invalid decimal size", "decimals", e2);
}
function Mi$1(e2, t) {
  t == null && (t = 0);
  const r2 = xi(t);
  e2 = V$1.from(e2);
  const i3 = e2.lt(Gn);
  i3 && (e2 = e2.mul(Yn));
  let n4 = e2.mod(r2).toString();
  for (; n4.length < r2.length - 1; )
    n4 = "0" + n4;
  n4 = n4.match(/^([0-9]*[1-9]|0)(0*)/)[1];
  const o3 = e2.div(r2).toString();
  return r2.length === 1 ? e2 = o3 : e2 = o3 + "." + n4, i3 && (e2 = "-" + e2), e2;
}
function be$1(e2, t) {
  t == null && (t = 0);
  const r2 = xi(t);
  (typeof e2 != "string" || !e2.match(/^-?[0-9.]+$/)) && Ht$1.throwArgumentError("invalid decimal value", "value", e2);
  const i3 = e2.substring(0, 1) === "-";
  i3 && (e2 = e2.substring(1)), e2 === "." && Ht$1.throwArgumentError("missing value", "value", e2);
  const n4 = e2.split(".");
  n4.length > 2 && Ht$1.throwArgumentError("too many decimal points", "value", e2);
  let o3 = n4[0], h4 = n4[1];
  for (o3 || (o3 = "0"), h4 || (h4 = "0"); h4[h4.length - 1] === "0"; )
    h4 = h4.substring(0, h4.length - 1);
  for (h4.length > r2.length - 1 && Vn$1("fractional component exceeds decimals", "underflow", "parseFixed"), h4 === "" && (h4 = "0"); h4.length < r2.length - 1; )
    h4 += "0";
  const p3 = V$1.from(o3), b3 = V$1.from(h4);
  let m3 = p3.mul(r2).add(b3);
  return i3 && (m3 = m3.mul(Yn)), m3;
}
let dr$1 = class dr {
  constructor(t, r2, i3, n4) {
    t !== mr$1 && Ht$1.throwError("cannot use FixedFormat constructor; use FixedFormat.from", L$4.errors.UNSUPPORTED_OPERATION, { operation: "new FixedFormat" }), this.signed = r2, this.width = i3, this.decimals = n4, this.name = (r2 ? "" : "u") + "fixed" + String(i3) + "x" + String(n4), this._multiplier = xi(n4), Object.freeze(this);
  }
  static from(t) {
    if (t instanceof dr)
      return t;
    typeof t == "number" && (t = `fixed128x${t}`);
    let r2 = true, i3 = 128, n4 = 18;
    if (typeof t == "string") {
      if (t !== "fixed")
        if (t === "ufixed")
          r2 = false;
        else {
          const o3 = t.match(/^(u?)fixed([0-9]+)x([0-9]+)$/);
          o3 || Ht$1.throwArgumentError("invalid fixed format", "format", t), r2 = o3[1] !== "u", i3 = parseInt(o3[2]), n4 = parseInt(o3[3]);
        }
    } else if (t) {
      const o3 = (h4, p3, b3) => t[h4] == null ? b3 : (typeof t[h4] !== p3 && Ht$1.throwArgumentError("invalid fixed format (" + h4 + " not " + p3 + ")", "format." + h4, t[h4]), t[h4]);
      r2 = o3("signed", "boolean", r2), i3 = o3("width", "number", i3), n4 = o3("decimals", "number", n4);
    }
    return i3 % 8 && Ht$1.throwArgumentError("invalid fixed format width (not byte aligned)", "format.width", i3), n4 > 80 && Ht$1.throwArgumentError("invalid fixed format (decimals too large)", "format.decimals", n4), new dr(mr$1, r2, i3, n4);
  }
};
let Ut$1 = class Ut {
  constructor(t, r2, i3, n4) {
    t !== mr$1 && Ht$1.throwError("cannot use FixedNumber constructor; use FixedNumber.from", L$4.errors.UNSUPPORTED_OPERATION, { operation: "new FixedFormat" }), this.format = n4, this._hex = r2, this._value = i3, this._isFixedNumber = true, Object.freeze(this);
  }
  _checkFormat(t) {
    this.format.name !== t.format.name && Ht$1.throwArgumentError("incompatible format; use fixedNumber.toFormat", "other", t);
  }
  addUnsafe(t) {
    this._checkFormat(t);
    const r2 = be$1(this._value, this.format.decimals), i3 = be$1(t._value, t.format.decimals);
    return Ut.fromValue(r2.add(i3), this.format.decimals, this.format);
  }
  subUnsafe(t) {
    this._checkFormat(t);
    const r2 = be$1(this._value, this.format.decimals), i3 = be$1(t._value, t.format.decimals);
    return Ut.fromValue(r2.sub(i3), this.format.decimals, this.format);
  }
  mulUnsafe(t) {
    this._checkFormat(t);
    const r2 = be$1(this._value, this.format.decimals), i3 = be$1(t._value, t.format.decimals);
    return Ut.fromValue(r2.mul(i3).div(this.format._multiplier), this.format.decimals, this.format);
  }
  divUnsafe(t) {
    this._checkFormat(t);
    const r2 = be$1(this._value, this.format.decimals), i3 = be$1(t._value, t.format.decimals);
    return Ut.fromValue(r2.mul(this.format._multiplier).div(i3), this.format.decimals, this.format);
  }
  floor() {
    const t = this.toString().split(".");
    t.length === 1 && t.push("0");
    let r2 = Ut.from(t[0], this.format);
    const i3 = !t[1].match(/^(0*)$/);
    return this.isNegative() && i3 && (r2 = r2.subUnsafe(Wn.toFormat(r2.format))), r2;
  }
  ceiling() {
    const t = this.toString().split(".");
    t.length === 1 && t.push("0");
    let r2 = Ut.from(t[0], this.format);
    const i3 = !t[1].match(/^(0*)$/);
    return !this.isNegative() && i3 && (r2 = r2.addUnsafe(Wn.toFormat(r2.format))), r2;
  }
  round(t) {
    t == null && (t = 0);
    const r2 = this.toString().split(".");
    if (r2.length === 1 && r2.push("0"), (t < 0 || t > 80 || t % 1) && Ht$1.throwArgumentError("invalid decimal count", "decimals", t), r2[1].length <= t)
      return this;
    const i3 = Ut.from("1" + gr$1.substring(0, t), this.format), n4 = O0.toFormat(this.format);
    return this.mulUnsafe(i3).addUnsafe(n4).floor().divUnsafe(i3);
  }
  isZero() {
    return this._value === "0.0" || this._value === "0";
  }
  isNegative() {
    return this._value[0] === "-";
  }
  toString() {
    return this._value;
  }
  toHexString(t) {
    if (t == null)
      return this._hex;
    t % 8 && Ht$1.throwArgumentError("invalid byte width", "width", t);
    const r2 = V$1.from(this._hex).fromTwos(this.format.width).toTwos(t).toHexString();
    return oe$1(r2, t / 8);
  }
  toUnsafeFloat() {
    return parseFloat(this.toString());
  }
  toFormat(t) {
    return Ut.fromString(this._value, t);
  }
  static fromValue(t, r2, i3) {
    return i3 == null && r2 != null && !C0(r2) && (i3 = r2, r2 = null), r2 == null && (r2 = 0), i3 == null && (i3 = "fixed"), Ut.fromString(Mi$1(t, r2), dr$1.from(i3));
  }
  static fromString(t, r2) {
    r2 == null && (r2 = "fixed");
    const i3 = dr$1.from(r2), n4 = be$1(t, i3.decimals);
    !i3.signed && n4.lt(Gn) && Vn$1("unsigned value cannot be negative", "overflow", "value", t);
    let o3 = null;
    i3.signed ? o3 = n4.toTwos(i3.width).toHexString() : (o3 = n4.toHexString(), o3 = oe$1(o3, i3.width / 8));
    const h4 = Mi$1(n4, i3.decimals);
    return new Ut(mr$1, o3, h4, i3);
  }
  static fromBytes(t, r2) {
    r2 == null && (r2 = "fixed");
    const i3 = dr$1.from(r2);
    if (Ot$1(t).length > i3.width / 8)
      throw new Error("overflow");
    let n4 = V$1.from(t);
    i3.signed && (n4 = n4.fromTwos(i3.width));
    const o3 = n4.toTwos((i3.signed ? 0 : 1) + i3.width).toHexString(), h4 = Mi$1(n4, i3.decimals);
    return new Ut(mr$1, o3, h4, i3);
  }
  static from(t, r2) {
    if (typeof t == "string")
      return Ut.fromString(t, r2);
    if (ir$1(t))
      return Ut.fromBytes(t, r2);
    try {
      return Ut.fromValue(t, 0, r2);
    } catch (i3) {
      if (i3.code !== L$4.errors.INVALID_ARGUMENT)
        throw i3;
    }
    return Ht$1.throwArgumentError("invalid FixedNumber value", "value", t);
  }
  static isFixedNumber(t) {
    return !!(t && t._isFixedNumber);
  }
};
const Wn = Ut$1.from(1), O0 = Ut$1.from("0.5"), P0 = "strings/5.7.0", Xn = new L$4(P0);
var Or$1;
(function(e2) {
  e2.current = "", e2.NFC = "NFC", e2.NFD = "NFD", e2.NFKC = "NFKC", e2.NFKD = "NFKD";
})(Or$1 || (Or$1 = {}));
var nr$1;
(function(e2) {
  e2.UNEXPECTED_CONTINUE = "unexpected continuation byte", e2.BAD_PREFIX = "bad codepoint prefix", e2.OVERRUN = "string overrun", e2.MISSING_CONTINUE = "missing continuation byte", e2.OUT_OF_RANGE = "out of UTF-8 range", e2.UTF16_SURROGATE = "UTF-16 surrogate", e2.OVERLONG = "overlong representation";
})(nr$1 || (nr$1 = {}));
function Ei(e2, t = Or$1.current) {
  t != Or$1.current && (Xn.checkNormalize(), e2 = e2.normalize(t));
  let r2 = [];
  for (let i3 = 0; i3 < e2.length; i3++) {
    const n4 = e2.charCodeAt(i3);
    if (n4 < 128)
      r2.push(n4);
    else if (n4 < 2048)
      r2.push(n4 >> 6 | 192), r2.push(n4 & 63 | 128);
    else if ((n4 & 64512) == 55296) {
      i3++;
      const o3 = e2.charCodeAt(i3);
      if (i3 >= e2.length || (o3 & 64512) !== 56320)
        throw new Error("invalid utf-8 string");
      const h4 = 65536 + ((n4 & 1023) << 10) + (o3 & 1023);
      r2.push(h4 >> 18 | 240), r2.push(h4 >> 12 & 63 | 128), r2.push(h4 >> 6 & 63 | 128), r2.push(h4 & 63 | 128);
    } else
      r2.push(n4 >> 12 | 224), r2.push(n4 >> 6 & 63 | 128), r2.push(n4 & 63 | 128);
  }
  return Ot$1(r2);
}
function T0(e2) {
  if (e2.length % 4 !== 0)
    throw new Error("bad data");
  let t = [];
  for (let r2 = 0; r2 < e2.length; r2 += 4)
    t.push(parseInt(e2.substring(r2, r2 + 4), 16));
  return t;
}
function Si(e2, t) {
  t || (t = function(n4) {
    return [parseInt(n4, 16)];
  });
  let r2 = 0, i3 = {};
  return e2.split(",").forEach((n4) => {
    let o3 = n4.split(":");
    r2 += parseInt(o3[0], 16), i3[r2] = t(o3[1]);
  }), i3;
}
function $n(e2) {
  let t = 0;
  return e2.split(",").map((r2) => {
    let i3 = r2.split("-");
    i3.length === 1 ? i3[1] = "0" : i3[1] === "" && (i3[1] = "1");
    let n4 = t + parseInt(i3[0], 16);
    return t = parseInt(i3[1], 16), { l: n4, h: t };
  });
}
$n("221,13-1b,5f-,40-10,51-f,11-3,3-3,2-2,2-4,8,2,15,2d,28-8,88,48,27-,3-5,11-20,27-,8,28,3-5,12,18,b-a,1c-4,6-16,2-d,2-2,2,1b-4,17-9,8f-,10,f,1f-2,1c-34,33-14e,4,36-,13-,6-2,1a-f,4,9-,3-,17,8,2-2,5-,2,8-,3-,4-8,2-3,3,6-,16-6,2-,7-3,3-,17,8,3,3,3-,2,6-3,3-,4-a,5,2-6,10-b,4,8,2,4,17,8,3,6-,b,4,4-,2-e,2-4,b-10,4,9-,3-,17,8,3-,5-,9-2,3-,4-7,3-3,3,4-3,c-10,3,7-2,4,5-2,3,2,3-2,3-2,4-2,9,4-3,6-2,4,5-8,2-e,d-d,4,9,4,18,b,6-3,8,4,5-6,3-8,3-3,b-11,3,9,4,18,b,6-3,8,4,5-6,3-6,2,3-3,b-11,3,9,4,18,11-3,7-,4,5-8,2-7,3-3,b-11,3,13-2,19,a,2-,8-2,2-3,7,2,9-11,4-b,3b-3,1e-24,3,2-,3,2-,2-5,5,8,4,2,2-,3,e,4-,6,2,7-,b-,3-21,49,23-5,1c-3,9,25,10-,2-2f,23,6,3,8-2,5-5,1b-45,27-9,2a-,2-3,5b-4,45-4,53-5,8,40,2,5-,8,2,5-,28,2,5-,20,2,5-,8,2,5-,8,8,18,20,2,5-,8,28,14-5,1d-22,56-b,277-8,1e-2,52-e,e,8-a,18-8,15-b,e,4,3-b,5e-2,b-15,10,b-5,59-7,2b-555,9d-3,5b-5,17-,7-,27-,7-,9,2,2,2,20-,36,10,f-,7,14-,4,a,54-3,2-6,6-5,9-,1c-10,13-1d,1c-14,3c-,10-6,32-b,240-30,28-18,c-14,a0,115-,3,66-,b-76,5,5-,1d,24,2,5-2,2,8-,35-2,19,f-10,1d-3,311-37f,1b,5a-b,d7-19,d-3,41,57-,68-4,29-3,5f,29-37,2e-2,25-c,2c-2,4e-3,30,78-3,64-,20,19b7-49,51a7-59,48e-2,38-738,2ba5-5b,222f-,3c-94,8-b,6-4,1b,6,2,3,3,6d-20,16e-f,41-,37-7,2e-2,11-f,5-b,18-,b,14,5-3,6,88-,2,bf-2,7-,7-,7-,4-2,8,8-9,8-2ff,20,5-b,1c-b4,27-,27-cbb1,f7-9,28-2,b5-221,56,48,3-,2-,3-,5,d,2,5,3,42,5-,9,8,1d,5,6,2-2,8,153-3,123-3,33-27fd,a6da-5128,21f-5df,3-fffd,3-fffd,3-fffd,3-fffd,3-fffd,3-fffd,3-fffd,3-fffd,3-fffd,3-fffd,3-fffd,3,2-1d,61-ff7d"), "ad,34f,1806,180b,180c,180d,200b,200c,200d,2060,feff".split(",").map((e2) => parseInt(e2, 16)), Si("b5:3bc,c3:ff,7:73,2:253,5:254,3:256,1:257,5:259,1:25b,3:260,1:263,2:269,1:268,5:26f,1:272,2:275,7:280,3:283,5:288,3:28a,1:28b,5:292,3f:195,1:1bf,29:19e,125:3b9,8b:3b2,1:3b8,1:3c5,3:3c6,1:3c0,1a:3ba,1:3c1,1:3c3,2:3b8,1:3b5,1bc9:3b9,1c:1f76,1:1f77,f:1f7a,1:1f7b,d:1f78,1:1f79,1:1f7c,1:1f7d,107:63,5:25b,4:68,1:68,1:68,3:69,1:69,1:6c,3:6e,4:70,1:71,1:72,1:72,1:72,7:7a,2:3c9,2:7a,2:6b,1:e5,1:62,1:63,3:65,1:66,2:6d,b:3b3,1:3c0,6:64,1b574:3b8,1a:3c3,20:3b8,1a:3c3,20:3b8,1a:3c3,20:3b8,1a:3c3,20:3b8,1a:3c3"), Si("179:1,2:1,2:1,5:1,2:1,a:4f,a:1,8:1,2:1,2:1,3:1,5:1,3:1,4:1,2:1,3:1,4:1,8:2,1:1,2:2,1:1,2:2,27:2,195:26,2:25,1:25,1:25,2:40,2:3f,1:3f,33:1,11:-6,1:-9,1ac7:-3a,6d:-8,1:-8,1:-8,1:-8,1:-8,1:-8,1:-8,1:-8,9:-8,1:-8,1:-8,1:-8,1:-8,1:-8,b:-8,1:-8,1:-8,1:-8,1:-8,1:-8,1:-8,1:-8,9:-8,1:-8,1:-8,1:-8,1:-8,1:-8,1:-8,1:-8,9:-8,1:-8,1:-8,1:-8,1:-8,1:-8,c:-8,2:-8,2:-8,2:-8,9:-8,1:-8,1:-8,1:-8,1:-8,1:-8,1:-8,1:-8,49:-8,1:-8,1:-4a,1:-4a,d:-56,1:-56,1:-56,1:-56,d:-8,1:-8,f:-8,1:-8,3:-7"), Si("df:00730073,51:00690307,19:02BC006E,a7:006A030C,18a:002003B9,16:03B903080301,20:03C503080301,1d7:05650582,190f:00680331,1:00740308,1:0077030A,1:0079030A,1:006102BE,b6:03C50313,2:03C503130300,2:03C503130301,2:03C503130342,2a:1F0003B9,1:1F0103B9,1:1F0203B9,1:1F0303B9,1:1F0403B9,1:1F0503B9,1:1F0603B9,1:1F0703B9,1:1F0003B9,1:1F0103B9,1:1F0203B9,1:1F0303B9,1:1F0403B9,1:1F0503B9,1:1F0603B9,1:1F0703B9,1:1F2003B9,1:1F2103B9,1:1F2203B9,1:1F2303B9,1:1F2403B9,1:1F2503B9,1:1F2603B9,1:1F2703B9,1:1F2003B9,1:1F2103B9,1:1F2203B9,1:1F2303B9,1:1F2403B9,1:1F2503B9,1:1F2603B9,1:1F2703B9,1:1F6003B9,1:1F6103B9,1:1F6203B9,1:1F6303B9,1:1F6403B9,1:1F6503B9,1:1F6603B9,1:1F6703B9,1:1F6003B9,1:1F6103B9,1:1F6203B9,1:1F6303B9,1:1F6403B9,1:1F6503B9,1:1F6603B9,1:1F6703B9,3:1F7003B9,1:03B103B9,1:03AC03B9,2:03B10342,1:03B1034203B9,5:03B103B9,6:1F7403B9,1:03B703B9,1:03AE03B9,2:03B70342,1:03B7034203B9,5:03B703B9,6:03B903080300,1:03B903080301,3:03B90342,1:03B903080342,b:03C503080300,1:03C503080301,1:03C10313,2:03C50342,1:03C503080342,b:1F7C03B9,1:03C903B9,1:03CE03B9,2:03C90342,1:03C9034203B9,5:03C903B9,ac:00720073,5b:00B00063,6:00B00066,d:006E006F,a:0073006D,1:00740065006C,1:0074006D,124f:006800700061,2:00610075,2:006F0076,b:00700061,1:006E0061,1:03BC0061,1:006D0061,1:006B0061,1:006B0062,1:006D0062,1:00670062,3:00700066,1:006E0066,1:03BC0066,4:0068007A,1:006B0068007A,1:006D0068007A,1:00670068007A,1:00740068007A,15:00700061,1:006B00700061,1:006D00700061,1:006700700061,8:00700076,1:006E0076,1:03BC0076,1:006D0076,1:006B0076,1:006D0076,1:00700077,1:006E0077,1:03BC0077,1:006D0077,1:006B0077,1:006D0077,1:006B03C9,1:006D03C9,2:00620071,3:00632215006B0067,1:0063006F002E,1:00640062,1:00670079,2:00680070,2:006B006B,1:006B006D,9:00700068,2:00700070006D,1:00700072,2:00730076,1:00770062,c723:00660066,1:00660069,1:0066006C,1:006600660069,1:00660066006C,1:00730074,1:00730074,d:05740576,1:05740565,1:0574056B,1:057E0576,1:0574056D", T0), $n("80-20,2a0-,39c,32,f71,18e,7f2-f,19-7,30-4,7-5,f81-b,5,a800-20ff,4d1-1f,110,fa-6,d174-7,2e84-,ffff-,ffff-,ffff-,ffff-,ffff-,ffff-,ffff-,ffff-,ffff-,ffff-,ffff-,ffff-,2,1f-5f,ff7f-20001");
function U0(e2) {
  e2 = atob(e2);
  const t = [];
  for (let r2 = 0; r2 < e2.length; r2++)
    t.push(e2.charCodeAt(r2));
  return Ot$1(t);
}
function ef(e2, t) {
  t == null && (t = 1);
  const r2 = [], i3 = r2.forEach, n4 = function(o3, h4) {
    i3.call(o3, function(p3) {
      h4 > 0 && Array.isArray(p3) ? n4(p3, h4 - 1) : r2.push(p3);
    });
  };
  return n4(e2, t), r2;
}
function k0(e2) {
  const t = {};
  for (let r2 = 0; r2 < e2.length; r2++) {
    const i3 = e2[r2];
    t[i3[0]] = i3[1];
  }
  return t;
}
function q0(e2) {
  let t = 0;
  function r2() {
    return e2[t++] << 8 | e2[t++];
  }
  let i3 = r2(), n4 = 1, o3 = [0, 1];
  for (let H = 1; H < i3; H++)
    o3.push(n4 += r2());
  let h4 = r2(), p3 = t;
  t += h4;
  let b3 = 0, m3 = 0;
  function w3() {
    return b3 == 0 && (m3 = m3 << 8 | e2[t++], b3 = 8), m3 >> --b3 & 1;
  }
  const y3 = 31, S2 = Math.pow(2, y3), I2 = S2 >>> 1, N2 = I2 >> 1, C2 = S2 - 1;
  let F = 0;
  for (let H = 0; H < y3; H++)
    F = F << 1 | w3();
  let U2 = [], J2 = 0, Bt2 = S2;
  for (; ; ) {
    let H = Math.floor(((F - J2 + 1) * n4 - 1) / Bt2), z2 = 0, Pt2 = i3;
    for (; Pt2 - z2 > 1; ) {
      let Yt3 = z2 + Pt2 >>> 1;
      H < o3[Yt3] ? Pt2 = Yt3 : z2 = Yt3;
    }
    if (z2 == 0)
      break;
    U2.push(z2);
    let W = J2 + Math.floor(Bt2 * o3[z2] / n4), Rt2 = J2 + Math.floor(Bt2 * o3[z2 + 1] / n4) - 1;
    for (; !((W ^ Rt2) & I2); )
      F = F << 1 & C2 | w3(), W = W << 1 & C2, Rt2 = Rt2 << 1 & C2 | 1;
    for (; W & ~Rt2 & N2; )
      F = F & I2 | F << 1 & C2 >>> 1 | w3(), W = W << 1 ^ I2, Rt2 = (Rt2 ^ I2) << 1 | I2 | 1;
    J2 = W, Bt2 = 1 + Rt2 - W;
  }
  let G = i3 - 4;
  return U2.map((H) => {
    switch (H - G) {
      case 3:
        return G + 65792 + (e2[p3++] << 16 | e2[p3++] << 8 | e2[p3++]);
      case 2:
        return G + 256 + (e2[p3++] << 8 | e2[p3++]);
      case 1:
        return G + e2[p3++];
      default:
        return H - 1;
    }
  });
}
function K0(e2) {
  let t = 0;
  return () => e2[t++];
}
function H0(e2) {
  return K0(q0(e2));
}
function z0(e2) {
  return e2 & 1 ? ~e2 >> 1 : e2 >> 1;
}
function L0(e2, t) {
  let r2 = Array(e2);
  for (let i3 = 0; i3 < e2; i3++)
    r2[i3] = 1 + t();
  return r2;
}
function rf(e2, t) {
  let r2 = Array(e2);
  for (let i3 = 0, n4 = -1; i3 < e2; i3++)
    r2[i3] = n4 += 1 + t();
  return r2;
}
function j0(e2, t) {
  let r2 = Array(e2);
  for (let i3 = 0, n4 = 0; i3 < e2; i3++)
    r2[i3] = n4 += z0(t());
  return r2;
}
function Pr$1(e2, t) {
  let r2 = rf(e2(), e2), i3 = e2(), n4 = rf(i3, e2), o3 = L0(i3, e2);
  for (let h4 = 0; h4 < i3; h4++)
    for (let p3 = 0; p3 < o3[h4]; p3++)
      r2.push(n4[h4] + p3);
  return t ? r2.map((h4) => t[h4]) : r2;
}
function Q0(e2) {
  let t = [];
  for (; ; ) {
    let r2 = e2();
    if (r2 == 0)
      break;
    t.push(G0(r2, e2));
  }
  for (; ; ) {
    let r2 = e2() - 1;
    if (r2 < 0)
      break;
    t.push(Y0(r2, e2));
  }
  return k0(ef(t));
}
function J0(e2) {
  let t = [];
  for (; ; ) {
    let r2 = e2();
    if (r2 == 0)
      break;
    t.push(r2);
  }
  return t;
}
function nf(e2, t, r2) {
  let i3 = Array(e2).fill(void 0).map(() => []);
  for (let n4 = 0; n4 < t; n4++)
    j0(e2, r2).forEach((o3, h4) => i3[h4].push(o3));
  return i3;
}
function G0(e2, t) {
  let r2 = 1 + t(), i3 = t(), n4 = J0(t), o3 = nf(n4.length, 1 + e2, t);
  return ef(o3.map((h4, p3) => {
    const b3 = h4[0], m3 = h4.slice(1);
    return Array(n4[p3]).fill(void 0).map((w3, y3) => {
      let S2 = y3 * i3;
      return [b3 + y3 * r2, m3.map((I2) => I2 + S2)];
    });
  }));
}
function Y0(e2, t) {
  let r2 = 1 + t();
  return nf(r2, 1 + e2, t).map((n4) => [n4[0], n4.slice(1)]);
}
function V0(e2) {
  let t = Pr$1(e2).sort((i3, n4) => i3 - n4);
  return r2();
  function r2() {
    let i3 = [];
    for (; ; ) {
      let m3 = Pr$1(e2, t);
      if (m3.length == 0)
        break;
      i3.push({ set: new Set(m3), node: r2() });
    }
    i3.sort((m3, w3) => w3.set.size - m3.set.size);
    let n4 = e2(), o3 = n4 % 3;
    n4 = n4 / 3 | 0;
    let h4 = !!(n4 & 1);
    n4 >>= 1;
    let p3 = n4 == 1, b3 = n4 == 2;
    return { branches: i3, valid: o3, fe0f: h4, save: p3, check: b3 };
  }
}
function W0() {
  return H0(U0("AEQF2AO2DEsA2wIrAGsBRABxAN8AZwCcAEwAqgA0AGwAUgByADcATAAVAFYAIQAyACEAKAAYAFgAGwAjABQAMAAmADIAFAAfABQAKwATACoADgAbAA8AHQAYABoAGQAxADgALAAoADwAEwA9ABMAGgARAA4ADwAWABMAFgAIAA8AHgQXBYMA5BHJAS8JtAYoAe4AExozi0UAH21tAaMnBT8CrnIyhrMDhRgDygIBUAEHcoFHUPe8AXBjAewCjgDQR8IICIcEcQLwATXCDgzvHwBmBoHNAqsBdBcUAykgDhAMShskMgo8AY8jqAQfAUAfHw8BDw87MioGlCIPBwZCa4ELatMAAMspJVgsDl8AIhckSg8XAHdvTwBcIQEiDT4OPhUqbyECAEoAS34Aej8Ybx83JgT/Xw8gHxZ/7w8RICxPHA9vBw+Pfw8PHwAPFv+fAsAvCc8vEr8ivwD/EQ8Bol8OEBa/A78hrwAPCU8vESNvvwWfHwNfAVoDHr+ZAAED34YaAdJPAK7PLwSEgDLHAGo1Pz8Pvx9fUwMrpb8O/58VTzAPIBoXIyQJNF8hpwIVAT8YGAUADDNBaX3RAMomJCg9EhUeA29MABsZBTMNJipjOhc19gcIDR8bBwQHEggCWi6DIgLuAQYA+BAFCha3A5XiAEsqM7UFFgFLhAMjFTMYE1Klnw74nRVBG/ASCm0BYRN/BrsU3VoWy+S0vV8LQx+vN8gF2AC2AK5EAWwApgYDKmAAroQ0NDQ0AT+OCg7wAAIHRAbpNgVcBV0APTA5BfbPFgMLzcYL/QqqA82eBALKCjQCjqYCht0/k2+OAsXQAoP3ASTKDgDw6ACKAUYCMpIKJpRaAE4A5womABzZvs0REEKiACIQAd5QdAECAj4Ywg/wGqY2AVgAYADYvAoCGAEubA0gvAY2ALAAbpbvqpyEAGAEpgQAJgAG7gAgAEACmghUFwCqAMpAINQIwC4DthRAAPcycKgApoIdABwBfCisABoATwBqASIAvhnSBP8aH/ECeAKXAq40NjgDBTwFYQU6AXs3oABgAD4XNgmcCY1eCl5tIFZeUqGgyoNHABgAEQAaABNwWQAmABMATPMa3T34ADldyprmM1M2XociUQgLzvwAXT3xABgAEQAaABNwIGFAnADD8AAgAD4BBJWzaCcIAIEBFMAWwKoAAdq9BWAF5wLQpALEtQAKUSGkahR4GnJM+gsAwCgeFAiUAECQ0BQuL8AAIAAAADKeIheclvFqQAAETr4iAMxIARMgAMIoHhQIAn0E0pDQFC4HhznoAAAAIAI2C0/4lvFqQAAETgBJJwYCAy4ABgYAFAA8MBKYEH4eRhTkAjYeFcgACAYAeABsOqyQ5gRwDayqugEgaIIAtgoACgDmEABmBAWGme5OBJJA2m4cDeoAmITWAXwrMgOgAGwBCh6CBXYF1Tzg1wKAAFdiuABRAFwAXQBsAG8AdgBrAHYAbwCEAHEwfxQBVE5TEQADVFhTBwBDANILAqcCzgLTApQCrQL6vAAMAL8APLhNBKkE6glGKTAU4Dr4N2EYEwBCkABKk8rHAbYBmwIoAiU4Ajf/Aq4CowCAANIChzgaNBsCsTgeODcFXrgClQKdAqQBiQGYAqsCsjTsNHsfNPA0ixsAWTWiOAMFPDQSNCk2BDZHNow2TTZUNhk28Jk9VzI3QkEoAoICoQKwAqcAQAAxBV4FXbS9BW47YkIXP1ciUqs05DS/FwABUwJW11e6nHuYZmSh/RAYA8oMKvZ8KASoUAJYWAJ6ILAsAZSoqjpgA0ocBIhmDgDWAAawRDQoAAcuAj5iAHABZiR2AIgiHgCaAU68ACxuHAG0ygM8MiZIAlgBdF4GagJqAPZOHAMuBgoATkYAsABiAHgAMLoGDPj0HpKEBAAOJgAuALggTAHWAeAMEDbd20Uege0ADwAWADkAQgA9OHd+2MUQZBBhBgNNDkxxPxUQArEPqwvqERoM1irQ090ANK4H8ANYB/ADWANYB/AH8ANYB/ADWANYA1gDWBwP8B/YxRBkD00EcgWTBZAE2wiIJk4RhgctCNdUEnQjHEwDSgEBIypJITuYMxAlR0wRTQgIATZHbKx9PQNMMbBU+pCnA9AyVDlxBgMedhKlAC8PeCE1uk6DekxxpQpQT7NX9wBFBgASqwAS5gBJDSgAUCwGPQBI4zTYABNGAE2bAE3KAExdGABKaAbgAFBXAFCOAFBJABI2SWdObALDOq0//QomCZhvwHdTBkIQHCemEPgMNAG2ATwN7kvZBPIGPATKH34ZGg/OlZ0Ipi3eDO4m5C6igFsj9iqEBe5L9TzeC05RaQ9aC2YJ5DpkgU8DIgEOIowK3g06CG4Q9ArKbA3mEUYHOgPWSZsApgcCCxIdNhW2JhFirQsKOXgG/Br3C5AmsBMqev0F1BoiBk4BKhsAANAu6IWxWjJcHU9gBgQLJiPIFKlQIQ0mQLh4SRocBxYlqgKSQ3FKiFE3HpQh9zw+DWcuFFF9B/Y8BhlQC4I8n0asRQ8R0z6OPUkiSkwtBDaALDAnjAnQD4YMunxzAVoJIgmyDHITMhEYN8YIOgcaLpclJxYIIkaWYJsE+KAD9BPSAwwFQAlCBxQDthwuEy8VKgUOgSXYAvQ21i60ApBWgQEYBcwPJh/gEFFH4Q7qCJwCZgOEJewALhUiABginAhEZABgj9lTBi7MCMhqbSN1A2gU6GIRdAeSDlgHqBw0FcAc4nDJXgyGCSiksAlcAXYJmgFgBOQICjVcjKEgQmdUi1kYnCBiQUBd/QIyDGYVoES+h3kCjA9sEhwBNgF0BzoNAgJ4Ee4RbBCWCOyGBTW2M/k6JgRQIYQgEgooA1BszwsoJvoM+WoBpBJjAw00PnfvZ6xgtyUX/gcaMsZBYSHyC5NPzgydGsIYQ1QvGeUHwAP0GvQn60FYBgADpAQUOk4z7wS+C2oIjAlAAEoOpBgH2BhrCnKM0QEyjAG4mgNYkoQCcJAGOAcMAGgMiAV65gAeAqgIpAAGANADWAA6Aq4HngAaAIZCAT4DKDABIuYCkAOUCDLMAZYwAfQqBBzEDBYA+DhuSwLDsgKAa2ajBd5ZAo8CSjYBTiYEBk9IUgOwcuIA3ABMBhTgSAEWrEvMG+REAeBwLADIAPwABjYHBkIBzgH0bgC4AWALMgmjtLYBTuoqAIQAFmwB2AKKAN4ANgCA8gFUAE4FWvoF1AJQSgESMhksWGIBvAMgATQBDgB6BsyOpsoIIARuB9QCEBwV4gLvLwe2AgMi4BPOQsYCvd9WADIXUu5eZwqoCqdeaAC0YTQHMnM9UQAPH6k+yAdy/BZIiQImSwBQ5gBQQzSaNTFWSTYBpwGqKQK38AFtqwBI/wK37gK3rQK3sAK6280C0gK33AK3zxAAUEIAUD9SklKDArekArw5AEQAzAHCO147WTteO1k7XjtZO147WTteO1kDmChYI03AVU0oJqkKbV9GYewMpw3VRMk6ShPcYFJgMxPJLbgUwhXPJVcZPhq9JwYl5VUKDwUt1GYxCC00dhe9AEApaYNCY4ceMQpMHOhTklT5LRwAskujM7ANrRsWREEFSHXuYisWDwojAmSCAmJDXE6wXDchAqH4AmiZAmYKAp+FOBwMAmY8AmYnBG8EgAN/FAN+kzkHOXgYOYM6JCQCbB4CMjc4CwJtyAJtr/CLADRoRiwBaADfAOIASwYHmQyOAP8MwwAOtgJ3MAJ2o0ACeUxEAni7Hl3cRa9G9AJ8QAJ6yQJ9CgJ88UgBSH5kJQAsFklZSlwWGErNAtECAtDNSygDiFADh+dExpEzAvKiXQQDA69Lz0wuJgTQTU1NsAKLQAKK2cIcCB5EaAa4Ao44Ao5dQZiCAo7aAo5deVG1UzYLUtVUhgKT/AKTDQDqAB1VH1WwVdEHLBwplocy4nhnRTw6ApegAu+zWCKpAFomApaQApZ9nQCqWa1aCoJOADwClrYClk9cRVzSApnMApllXMtdCBoCnJw5wzqeApwXAp+cAp65iwAeEDIrEAKd8gKekwC2PmE1YfACntQCoG8BqgKeoCACnk+mY8lkKCYsAiewAiZ/AqD8AqBN2AKmMAKlzwKoAAB+AqfzaH1osgAESmodatICrOQCrK8CrWgCrQMCVx4CVd0CseLYAx9PbJgCsr4OArLpGGzhbWRtSWADJc4Ctl08QG6RAylGArhfArlIFgK5K3hwN3DiAr0aAy2zAzISAr6JcgMDM3ICvhtzI3NQAsPMAsMFc4N0TDZGdOEDPKgDPJsDPcACxX0CxkgCxhGKAshqUgLIRQLJUALJLwJkngLd03h6YniveSZL0QMYpGcDAmH1GfSVJXsMXpNevBICz2wCz20wTFTT9BSgAMeuAs90ASrrA04TfkwGAtwoAtuLAtJQA1JdA1NgAQIDVY2AikABzBfuYUZ2AILPg44C2sgC2d+EEYRKpz0DhqYAMANkD4ZyWvoAVgLfZgLeuXR4AuIw7RUB8zEoAfScAfLTiALr9ALpcXoAAur6AurlAPpIAboC7ooC652Wq5cEAu5AA4XhmHpw4XGiAvMEAGoDjheZlAL3FAORbwOSiAL3mQL52gL4Z5odmqy8OJsfA52EAv77ARwAOp8dn7QDBY4DpmsDptoA0sYDBmuhiaIGCgMMSgFgASACtgNGAJwEgLpoBgC8BGzAEowcggCEDC6kdjoAJAM0C5IKRoABZCgiAIzw3AYBLACkfng9ogigkgNmWAN6AEQCvrkEVqTGAwCsBRbAA+4iQkMCHR072jI2PTbUNsk2RjY5NvA23TZKNiU3EDcZN5I+RTxDRTBCJkK5VBYKFhZfwQCWygU3AJBRHpu+OytgNxa61A40GMsYjsn7BVwFXQVcBV0FaAVdBVwFXQVcBV0FXAVdBVwFXUsaCNyKAK4AAQUHBwKU7oICoW1e7jAEzgPxA+YDwgCkBFDAwADABKzAAOxFLhitA1UFTDeyPkM+bj51QkRCuwTQWWQ8X+0AWBYzsACNA8xwzAGm7EZ/QisoCTAbLDs6fnLfb8H2GccsbgFw13M1HAVkBW/Jxsm9CNRO8E8FDD0FBQw9FkcClOYCoMFegpDfADgcMiA2AJQACB8AsigKAIzIEAJKeBIApY5yPZQIAKQiHb4fvj5BKSRPQrZCOz0oXyxgOywfKAnGbgMClQaCAkILXgdeCD9IIGUgQj5fPoY+dT52Ao5CM0dAX9BTVG9SDzFwWTQAbxBzJF/lOEIQQglCCkKJIAls5AcClQICoKPMODEFxhi6KSAbiyfIRrMjtCgdWCAkPlFBIitCsEJRzAbMAV/OEyQzDg0OAQQEJ36i328/Mk9AybDJsQlq3tDRApUKAkFzXf1d/j9uALYP6hCoFgCTGD8kPsFKQiobrm0+zj0KSD8kPnVCRBwMDyJRTHFgMTJa5rwXQiQ2YfI/JD7BMEJEHGINTw4TOFlIRzwJO0icMQpyPyQ+wzJCRBv6DVgnKB01NgUKj2bwYzMqCoBkznBgEF+zYDIocwRIX+NgHj4HICNfh2C4CwdwFWpTG/lgUhYGAwRfv2Ts8mAaXzVgml/XYIJfuWC4HI1gUF9pYJZgMR6ilQHMAOwLAlDRefC0in4AXAEJA6PjCwc0IamOANMMCAECRQDFNRTZBgd+CwQlRA+r6+gLBDEFBnwUBXgKATIArwAGRAAHA3cDdAN2A3kDdwN9A3oDdQN7A30DfAN4A3oDfQAYEAAlAtYASwMAUAFsAHcKAHcAmgB3AHUAdQB2AHVu8UgAygDAAHcAdQB1AHYAdQALCgB3AAsAmgB3AAsCOwB3AAtu8UgAygDAAHgKAJoAdwB3AHUAdQB2AHUAeAB1AHUAdgB1bvFIAMoAwAALCgCaAHcACwB3AAsCOwB3AAtu8UgAygDAAH4ACwGgALcBpwC6AahdAu0COwLtbvFIAMoAwAALCgCaAu0ACwLtAAsCOwLtAAtu8UgAygDAA24ACwNvAAu0VsQAAzsAABCkjUIpAAsAUIusOggWcgMeBxVsGwL67U/2HlzmWOEeOgALASvuAAseAfpKUpnpGgYJDCIZM6YyARUE9ThqAD5iXQgnAJYJPnOzw0ZAEZxEKsIAkA4DhAHnTAIDxxUDK0lxCQlPYgIvIQVYJQBVqE1GakUAKGYiDToSBA1EtAYAXQJYAIF8GgMHRyAAIAjOe9YncekRAA0KACUrjwE7Ayc6AAYWAqaiKG4McEcqANoN3+Mg9TwCBhIkuCny+JwUQ29L008JluRxu3K+oAdqiHOqFH0AG5SUIfUJ5SxCGfxdipRzqTmT4V5Zb+r1Uo4Vm+NqSSEl2mNvR2JhIa8SpYO6ntdwFXHCWTCK8f2+Hxo7uiG3drDycAuKIMP5bhi06ACnqArH1rz4Rqg//lm6SgJGEVbF9xJHISaR6HxqxSnkw6shDnelHKNEfGUXSJRJ1GcsmtJw25xrZMDK9gXSm1/YMkdX4/6NKYOdtk/NQ3/NnDASjTc3fPjIjW/5sVfVObX2oTDWkr1dF9f3kxBsD3/3aQO8hPfRz+e0uEiJqt1161griu7gz8hDDwtpy+F+BWtefnKHZPAxcZoWbnznhJpy0e842j36bcNzGnIEusgGX0a8ZxsnjcSsPDZ09yZ36fCQbriHeQ72JRMILNl6ePPf2HWoVwgWAm1fb3V2sAY0+B6rAXqSwPBgseVmoqsBTSrm91+XasMYYySI8eeRxH3ZvHkMz3BQ5aJ3iUVbYPNM3/7emRtjlsMgv/9VyTsyt/mK+8fgWeT6SoFaclXqn42dAIsvAarF5vNNWHzKSkKQ/8Hfk5ZWK7r9yliOsooyBjRhfkHP4Q2DkWXQi6FG/9r/IwbmkV5T7JSopHKn1pJwm9tb5Ot0oyN1Z2mPpKXHTxx2nlK08fKk1hEYA8WgVVWL5lgx0iTv+KdojJeU23ZDjmiubXOxVXJKKi2Wjuh2HLZOFLiSC7Tls5SMh4f+Pj6xUSrNjFqLGehRNB8lC0QSLNmkJJx/wSG3MnjE9T1CkPwJI0wH2lfzwETIiVqUxg0dfu5q39Gt+hwdcxkhhNvQ4TyrBceof3Mhs/IxFci1HmHr4FMZgXEEczPiGCx0HRwzAqDq2j9AVm1kwN0mRVLWLylgtoPNapF5cY4Y1wJh/e0BBwZj44YgZrDNqvD/9Hv7GFYdUQeDJuQ3EWI4HaKqavU1XjC/n41kT4L79kqGq0kLhdTZvgP3TA3fS0ozVz+5piZsoOtIvBUFoMKbNcmBL6YxxaUAusHB38XrS8dQMnQwJfUUkpRoGr5AUeWicvBTzyK9g77+yCkf5PAysL7r/JjcZgrbvRpMW9iyaxZvKO6ceZN2EwIxKwVFPuvFuiEPGCoagbMo+SpydLrXqBzNCDGFCrO/rkcwa2xhokQZ5CdZ0AsU3JfSqJ6n5I14YA+P/uAgfhPU84Tlw7cEFfp7AEE8ey4sP12PTt4Cods1GRgDOB5xvyiR5m+Bx8O5nBCNctU8BevfV5A08x6RHd5jcwPTMDSZJOedIZ1cGQ704lxbAzqZOP05ZxaOghzSdvFBHYqomATARyAADK4elP8Ly3IrUZKfWh23Xy20uBUmLS4Pfagu9+oyVa2iPgqRP3F2CTUsvJ7+RYnN8fFZbU/HVvxvcFFDKkiTqV5UBZ3Gz54JAKByi9hkKMZJvuGgcSYXFmw08UyoQyVdfTD1/dMkCHXcTGAKeROgArsvmRrQTLUOXioOHGK2QkjHuoYFgXciZoTJd6Fs5q1QX1G+p/e26hYsEf7QZD1nnIyl/SFkNtYYmmBhpBrxl9WbY0YpHWRuw2Ll/tj9mD8P4snVzJl4F9J+1arVeTb9E5r2ILH04qStjxQNwn3m4YNqxmaNbLAqW2TN6LidwuJRqS+NXbtqxoeDXpxeGWmxzSkWxjkyCkX4NQRme6q5SAcC+M7+9ETfA/EwrzQajKakCwYyeunP6ZFlxU2oMEn1Pz31zeStW74G406ZJFCl1wAXIoUKkWotYEpOuXB1uVNxJ63dpJEqfxBeptwIHNrPz8BllZoIcBoXwgfJ+8VAUnVPvRvexnw0Ma/WiGYuJO5y8QTvEYBigFmhUxY5RqzE8OcywN/8m4UYrlaniJO75XQ6KSo9+tWHlu+hMi0UVdiKQp7NelnoZUzNaIyBPVeOwK6GNp+FfHuPOoyhaWuNvTYFkvxscMQWDh+zeFCFkgwbXftiV23ywJ4+uwRqmg9k3KzwIQpzppt8DBBOMbrqwQM5Gb05sEwdKzMiAqOloaA/lr0KA+1pr0/+HiWoiIjHA/wir2nIuS3PeU/ji3O6ZwoxcR1SZ9FhtLC5S0FIzFhbBWcGVP/KpxOPSiUoAdWUpqKH++6Scz507iCcxYI6rdMBICPJZea7OcmeFw5mObJSiqpjg2UoWNIs+cFhyDSt6geV5qgi3FunmwwDoGSMgerFOZGX1m0dMCYo5XOruxO063dwENK9DbnVM9wYFREzh4vyU1WYYJ/LRRp6oxgjqP/X5a8/4Af6p6NWkQferzBmXme0zY/4nwMJm/wd1tIqSwGz+E3xPEAOoZlJit3XddD7/BT1pllzOx+8bmQtANQ/S6fZexc6qi3W+Q2xcmXTUhuS5mpHQRvcxZUN0S5+PL9lXWUAaRZhEH8hTdAcuNMMCuVNKTEGtSUKNi3O6KhSaTzck8csZ2vWRZ+d7mW8c4IKwXIYd25S/zIftPkwPzufjEvOHWVD1m+FjpDVUTV0DGDuHj6QnaEwLu/dEgdLQOg9E1Sro9XHJ8ykLAwtPu+pxqKDuFexqON1sKQm7rwbE1E68UCfA/erovrTCG+DBSNg0l4goDQvZN6uNlbyLpcZAwj2UclycvLpIZMgv4yRlpb3YuMftozorbcGVHt/VeDV3+Fdf1TP0iuaCsPi2G4XeGhsyF1ubVDxkoJhmniQ0/jSg/eYML9KLfnCFgISWkp91eauR3IQvED0nAPXK+6hPCYs+n3+hCZbiskmVMG2da+0EsZPonUeIY8EbfusQXjsK/eFDaosbPjEfQS0RKG7yj5GG69M7MeO1HmiUYocgygJHL6M1qzUDDwUSmr99V7Sdr2F3JjQAJY+F0yH33Iv3+C9M38eML7gTgmNu/r2bUMiPvpYbZ6v1/IaESirBHNa7mPKn4dEmYg7v/+HQgPN1G79jBQ1+soydfDC2r+h2Bl/KIc5KjMK7OH6nb1jLsNf0EHVe2KBiE51ox636uyG6Lho0t3J34L5QY/ilE3mikaF4HKXG1mG1rCevT1Vv6GavltxoQe/bMrpZvRggnBxSEPEeEzkEdOxTnPXHVjUYdw8JYvjB/o7Eegc3Ma+NUxLLnsK0kJlinPmUHzHGtrk5+CAbVzFOBqpyy3QVUnzTDfC/0XD94/okH+OB+i7g9lolhWIjSnfIb+Eq43ZXOWmwvjyV/qqD+t0e+7mTEM74qP/Ozt8nmC7mRpyu63OB4KnUzFc074SqoyPUAgM+/TJGFo6T44EHnQU4X4z6qannVqgw/U7zCpwcmXV1AubIrvOmkKHazJAR55ePjp5tLBsN8vAqs3NAHdcEHOR2xQ0lsNAFzSUuxFQCFYvXLZJdOj9p4fNq6p0HBGUik2YzaI4xySy91KzhQ0+q1hjxvImRwPRf76tChlRkhRCi74NXZ9qUNeIwP+s5p+3m5nwPdNOHgSLD79n7O9m1n1uDHiMntq4nkYwV5OZ1ENbXxFd4PgrlvavZsyUO4MqYlqqn1O8W/I1dEZq5dXhrbETLaZIbC2Kj/Aa/QM+fqUOHdf0tXAQ1huZ3cmWECWSXy/43j35+Mvq9xws7JKseriZ1pEWKc8qlzNrGPUGcVgOa9cPJYIJsGnJTAUsEcDOEVULO5x0rXBijc1lgXEzQQKhROf8zIV82w8eswc78YX11KYLWQRcgHNJElBxfXr72lS2RBSl07qTKorO2uUDZr3sFhYsvnhLZn0A94KRzJ/7DEGIAhW5ZWFpL8gEwu1aLA9MuWZzNwl8Oze9Y+bX+v9gywRVnoB5I/8kXTXU3141yRLYrIOOz6SOnyHNy4SieqzkBXharjfjqq1q6tklaEbA8Qfm2DaIPs7OTq/nvJBjKfO2H9bH2cCMh1+5gspfycu8f/cuuRmtDjyqZ7uCIMyjdV3a+p3fqmXsRx4C8lujezIFHnQiVTXLXuI1XrwN3+siYYj2HHTvESUx8DlOTXpak9qFRK+L3mgJ1WsD7F4cu1aJoFoYQnu+wGDMOjJM3kiBQWHCcvhJ/HRdxodOQp45YZaOTA22Nb4XKCVxqkbwMYFhzYQYIAnCW8FW14uf98jhUG2zrKhQQ0q0CEq0t5nXyvUyvR8DvD69LU+g3i+HFWQMQ8PqZuHD+sNKAV0+M6EJC0szq7rEr7B5bQ8BcNHzvDMc9eqB5ZCQdTf80Obn4uzjwpYU7SISdtV0QGa9D3Wrh2BDQtpBKxaNFV+/Cy2P/Sv+8s7Ud0Fd74X4+o/TNztWgETUapy+majNQ68Lq3ee0ZO48VEbTZYiH1Co4OlfWef82RWeyUXo7woM03PyapGfikTnQinoNq5z5veLpeMV3HCAMTaZmA1oGLAn7XS3XYsz+XK7VMQsc4XKrmDXOLU/pSXVNUq8dIqTba///3x6LiLS6xs1xuCAYSfcQ3+rQgmu7uvf3THKt5Ooo97TqcbRqxx7EASizaQCBQllG/rYxVapMLgtLbZS64w1MDBMXX+PQpBKNwqUKOf2DDRDUXQf9EhOS0Qj4nTmlA8dzSLz/G1d+Ud8MTy/6ghhdiLpeerGY/UlDOfiuqFsMUU5/UYlP+BAmgRLuNpvrUaLlVkrqDievNVEAwF+4CoM1MZTmjxjJMsKJq+u8Zd7tNCUFy6LiyYXRJQ4VyvEQFFaCGKsxIwQkk7EzZ6LTJq2hUuPhvAW+gQnSG6J+MszC+7QCRHcnqDdyNRJ6T9xyS87A6MDutbzKGvGktpbXqtzWtXb9HsfK2cBMomjN9a4y+TaJLnXxAeX/HWzmf4cR4vALt/P4w4qgKY04ml4ZdLOinFYS6cup3G/1ie4+t1eOnpBNlqGqs75ilzkT4+DsZQxNvaSKJ//6zIbbk/M7LOhFmRc/1R+kBtz7JFGdZm/COotIdvQoXpTqP/1uqEUmCb/QWoGLMwO5ANcHzxdY48IGP5+J+zKOTBFZ4Pid+GTM+Wq12MV/H86xEJptBa6T+p3kgpwLedManBHC2GgNrFpoN2xnrMz9WFWX/8/ygSBkavq2Uv7FdCsLEYLu9LLIvAU0bNRDtzYl+/vXmjpIvuJFYjmI0im6QEYqnIeMsNjXG4vIutIGHijeAG/9EDBozKV5cldkHbLxHh25vT+ZEzbhXlqvpzKJwcEgfNwLAKFeo0/pvEE10XDB+EXRTXtSzJozQKFFAJhMxYkVaCW+E9AL7tMeU8acxidHqzb6lX4691UsDpy/LLRmT+epgW56+5Cw8tB4kMUv6s9lh3eRKbyGs+H/4mQMaYzPTf2OOdokEn+zzgvoD3FqNKk8QqGAXVsqcGdXrT62fSPkR2vROFi68A6se86UxRUk4cajfPyCC4G5wDhD+zNq4jodQ4u4n/m37Lr36n4LIAAsVr02dFi9AiwA81MYs2rm4eDlDNmdMRvEKRHfBwW5DdMNp0jPFZMeARqF/wL4XBfd+EMLBfMzpH5GH6NaW+1vrvMdg+VxDzatk3MXgO3ro3P/DpcC6+Mo4MySJhKJhSR01SGGGp5hPWmrrUgrv3lDnP+HhcI3nt3YqBoVAVTBAQT5iuhTg8nvPtd8ZeYj6w1x6RqGUBrSku7+N1+BaasZvjTk64RoIDlL8brpEcJx3OmY7jLoZsswdtmhfC/G21llXhITOwmvRDDeTTPbyASOa16cF5/A1fZAidJpqju3wYAy9avPR1ya6eNp9K8XYrrtuxlqi+bDKwlfrYdR0RRiKRVTLOH85+ZY7XSmzRpfZBJjaTa81VDcJHpZnZnSQLASGYW9l51ZV/h7eVzTi3Hv6hUsgc/51AqJRTkpbFVLXXszoBL8nBX0u/0jBLT8nH+fJePbrwURT58OY+UieRjd1vs04w0VG5VN2U6MoGZkQzKN/ptz0Q366dxoTGmj7i1NQGHi9GgnquXFYdrCfZBmeb7s0T6yrdlZH5cZuwHFyIJ/kAtGsTg0xH5taAAq44BAk1CPk9KVVbqQzrCUiFdF/6gtlPQ8bHHc1G1W92MXGZ5HEHftyLYs8mbD/9xYRUWkHmlM0zC2ilJlnNgV4bfALpQghxOUoZL7VTqtCHIaQSXm+YUMnpkXybnV+A6xlm2CVy8fn0Xlm2XRa0+zzOa21JWWmixfiPMSCZ7qA4rS93VN3pkpF1s5TonQjisHf7iU9ZGvUPOAKZcR1pbeVf/Ul7OhepGCaId9wOtqo7pJ7yLcBZ0pFkOF28y4zEI/kcUNmutBHaQpBdNM8vjCS6HZRokkeo88TBAjGyG7SR+6vUgTcyK9Imalj0kuxz0wmK+byQU11AiJFk/ya5dNduRClcnU64yGu/ieWSeOos1t3ep+RPIWQ2pyTYVbZltTbsb7NiwSi3AV+8KLWk7LxCnfZUetEM8ThnsSoGH38/nyAwFguJp8FjvlHtcWZuU4hPva0rHfr0UhOOJ/F6vS62FW7KzkmRll2HEc7oUq4fyi5T70Vl7YVIfsPHUCdHesf9Lk7WNVWO75JDkYbMI8TOW8JKVtLY9d6UJRITO8oKo0xS+o99Yy04iniGHAaGj88kEWgwv0OrHdY/nr76DOGNS59hXCGXzTKUvDl9iKpLSWYN1lxIeyywdNpTkhay74w2jFT6NS8qkjo5CxA1yfSYwp6AJIZNKIeEK5PJAW7ORgWgwp0VgzYpqovMrWxbu+DGZ6Lhie1RAqpzm8VUzKJOH3mCzWuTOLsN3VT/dv2eeYe9UjbR8YTBsLz7q60VN1sU51k+um1f8JxD5pPhbhSC8rRaB454tmh6YUWrJI3+GWY0qeWioj/tbkYITOkJaeuGt4JrJvHA+l0Gu7kY7XOaa05alMnRWVCXqFgLIwSY4uF59Ue5SU4QKuc/HamDxbr0x6csCetXGoP7Qn1Bk/J9DsynO/UD6iZ1Hyrz+jit0hDCwi/E9OjgKTbB3ZQKQ/0ZOvevfNHG0NK4Aj3Cp7NpRk07RT1i/S0EL93Ag8GRgKI9CfpajKyK6+Jj/PI1KO5/85VAwz2AwzP8FTBb075IxCXv6T9RVvWT2tUaqxDS92zrGUbWzUYk9mSs82pECH+fkqsDt93VW++4YsR/dHCYcQSYTO/KaBMDj9LSD/J/+z20Kq8XvZUAIHtm9hRPP3ItbuAu2Hm5lkPs92pd7kCxgRs0xOVBnZ13ccdA0aunrwv9SdqElJRC3g+oCu+nXyCgmXUs9yMjTMAIHfxZV+aPKcZeUBWt057Xo85Ks1Ir5gzEHCWqZEhrLZMuF11ziGtFQUds/EESajhagzcKsxamcSZxGth4UII+adPhQkUnx2WyN+4YWR+r3f8MnkyGFuR4zjzxJS8WsQYR5PTyRaD9ixa6Mh741nBHbzfjXHskGDq179xaRNrCIB1z1xRfWfjqw2pHc1zk9xlPpL8sQWAIuETZZhbnmL54rceXVNRvUiKrrqIkeogsl0XXb17ylNb0f4GA9Wd44vffEG8FSZGHEL2fbaTGRcSiCeA8PmA/f6Hz8HCS76fXUHwgwkzSwlI71ekZ7Fapmlk/KC+Hs8hUcw3N2LN5LhkVYyizYFl/uPeVP5lsoJHhhfWvvSWruCUW1ZcJOeuTbrDgywJ/qG07gZJplnTvLcYdNaH0KMYOYMGX+rB4NGPFmQsNaIwlWrfCezxre8zXBrsMT+edVLbLqN1BqB76JH4BvZTqUIMfGwPGEn+EnmTV86fPBaYbFL3DFEhjB45CewkXEAtJxk4/Ms2pPXnaRqdky0HOYdcUcE2zcXq4vaIvW2/v0nHFJH2XXe22ueDmq/18XGtELSq85j9X8q0tcNSSKJIX8FTuJF/Pf8j5PhqG2u+osvsLxYrvvfeVJL+4tkcXcr9JV7v0ERmj/X6fM3NC4j6dS1+9Umr2oPavqiAydTZPLMNRGY23LO9zAVDly7jD+70G5TPPLdhRIl4WxcYjLnM+SNcJ26FOrkrISUtPObIz5Zb3AG612krnpy15RMW+1cQjlnWFI6538qky9axd2oJmHIHP08KyP0ubGO+TQNOYuv2uh17yCIvR8VcStw7o1g0NM60sk+8Tq7YfIBJrtp53GkvzXH7OA0p8/n/u1satf/VJhtR1l8Wa6Gmaug7haSpaCaYQax6ta0mkutlb+eAOSG1aobM81D9A4iS1RRlzBBoVX6tU1S6WE2N9ORY6DfeLRC4l9Rvr5h95XDWB2mR1d4WFudpsgVYwiTwT31ljskD8ZyDOlm5DkGh9N/UB/0AI5Xvb8ZBmai2hQ4BWMqFwYnzxwB26YHSOv9WgY3JXnvoN+2R4rqGVh/LLDMtpFP+SpMGJNWvbIl5SOodbCczW2RKleksPoUeGEzrjtKHVdtZA+kfqO+rVx/iclCqwoopepvJpSTDjT+b9GWylGRF8EDbGlw6eUzmJM95Ovoz+kwLX3c2fTjFeYEsE7vUZm3mqdGJuKh2w9/QGSaqRHs99aScGOdDqkFcACoqdbBoQqqjamhH6Q9ng39JCg3lrGJwd50Qk9ovnqBTr8MME7Ps2wiVfygUmPoUBJJfJWX5Nda0nuncbFkA=="));
}
const Dr$1 = W0();
new Set(Pr$1(Dr$1)), new Set(Pr$1(Dr$1)), Q0(Dr$1), V0(Dr$1);
const X0 = new Uint8Array(32);
X0.fill(0);
const Z0 = `Ethereum Signed Message:
`;
function ff(e2) {
  return typeof e2 == "string" && (e2 = Ei(e2)), yi(E0([Ei(Z0), Ei(String(e2.length)), e2]));
}
const ts$2 = "address/5.7.0", Ar$1 = new L$4(ts$2);
function of(e2) {
  Qt(e2, 20) || Ar$1.throwArgumentError("invalid address", "address", e2), e2 = e2.toLowerCase();
  const t = e2.substring(2).split(""), r2 = new Uint8Array(40);
  for (let n4 = 0; n4 < 40; n4++)
    r2[n4] = t[n4].charCodeAt(0);
  const i3 = Ot$1(yi(r2));
  for (let n4 = 0; n4 < 40; n4 += 2)
    i3[n4 >> 1] >> 4 >= 8 && (t[n4] = t[n4].toUpperCase()), (i3[n4 >> 1] & 15) >= 8 && (t[n4 + 1] = t[n4 + 1].toUpperCase());
  return "0x" + t.join("");
}
const es$2 = 9007199254740991;
function rs$2(e2) {
  return Math.log10 ? Math.log10(e2) : Math.log(e2) / Math.LN10;
}
const Ni = {};
for (let e2 = 0; e2 < 10; e2++)
  Ni[String(e2)] = String(e2);
for (let e2 = 0; e2 < 26; e2++)
  Ni[String.fromCharCode(65 + e2)] = String(10 + e2);
const sf = Math.floor(rs$2(es$2));
function is$2(e2) {
  e2 = e2.toUpperCase(), e2 = e2.substring(4) + e2.substring(0, 2) + "00";
  let t = e2.split("").map((i3) => Ni[i3]).join("");
  for (; t.length >= sf; ) {
    let i3 = t.substring(0, sf);
    t = parseInt(i3, 10) % 97 + t.substring(i3.length);
  }
  let r2 = String(98 - parseInt(t, 10) % 97);
  for (; r2.length < 2; )
    r2 = "0" + r2;
  return r2;
}
function ns$2(e2) {
  let t = null;
  if (typeof e2 != "string" && Ar$1.throwArgumentError("invalid address", "address", e2), e2.match(/^(0x)?[0-9a-fA-F]{40}$/))
    e2.substring(0, 2) !== "0x" && (e2 = "0x" + e2), t = of(e2), e2.match(/([A-F].*[a-f])|([a-f].*[A-F])/) && t !== e2 && Ar$1.throwArgumentError("bad address checksum", "address", e2);
  else if (e2.match(/^XE[0-9]{2}[0-9A-Za-z]{30,31}$/)) {
    for (e2.substring(2, 4) !== is$2(e2) && Ar$1.throwArgumentError("bad icap checksum", "address", e2), t = R0(e2.substring(4)); t.length < 40; )
      t = "0" + t;
    t = of("0x" + t);
  } else
    Ar$1.throwArgumentError("invalid address", "address", e2);
  return t;
}
function br(e2, t, r2) {
  Object.defineProperty(e2, t, { enumerable: true, value: r2, writable: false });
}
const os$1 = new Uint8Array(32);
os$1.fill(0), V$1.from(-1);
const ss$2 = V$1.from(0), as$1 = V$1.from(1);
V$1.from("0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff"), oe$1(as$1.toHexString(), 32), oe$1(ss$2.toHexString(), 32);
var se = {}, Q$2 = {}, yr$1 = af;
function af(e2, t) {
  if (!e2)
    throw new Error(t || "Assertion failed");
}
af.equal = function(t, r2, i3) {
  if (t != r2)
    throw new Error(i3 || "Assertion failed: " + t + " != " + r2);
};
var Ii = { exports: {} };
typeof Object.create == "function" ? Ii.exports = function(t, r2) {
  r2 && (t.super_ = r2, t.prototype = Object.create(r2.prototype, { constructor: { value: t, enumerable: false, writable: true, configurable: true } }));
} : Ii.exports = function(t, r2) {
  if (r2) {
    t.super_ = r2;
    var i3 = function() {
    };
    i3.prototype = r2.prototype, t.prototype = new i3(), t.prototype.constructor = t;
  }
};
var us$1 = yr$1, hs$1 = Ii.exports;
Q$2.inherits = hs$1;
function cs$1(e2, t) {
  return (e2.charCodeAt(t) & 64512) !== 55296 || t < 0 || t + 1 >= e2.length ? false : (e2.charCodeAt(t + 1) & 64512) === 56320;
}
function ls$1(e2, t) {
  if (Array.isArray(e2))
    return e2.slice();
  if (!e2)
    return [];
  var r2 = [];
  if (typeof e2 == "string")
    if (t) {
      if (t === "hex")
        for (e2 = e2.replace(/[^a-z0-9]+/ig, ""), e2.length % 2 !== 0 && (e2 = "0" + e2), n4 = 0; n4 < e2.length; n4 += 2)
          r2.push(parseInt(e2[n4] + e2[n4 + 1], 16));
    } else
      for (var i3 = 0, n4 = 0; n4 < e2.length; n4++) {
        var o3 = e2.charCodeAt(n4);
        o3 < 128 ? r2[i3++] = o3 : o3 < 2048 ? (r2[i3++] = o3 >> 6 | 192, r2[i3++] = o3 & 63 | 128) : cs$1(e2, n4) ? (o3 = 65536 + ((o3 & 1023) << 10) + (e2.charCodeAt(++n4) & 1023), r2[i3++] = o3 >> 18 | 240, r2[i3++] = o3 >> 12 & 63 | 128, r2[i3++] = o3 >> 6 & 63 | 128, r2[i3++] = o3 & 63 | 128) : (r2[i3++] = o3 >> 12 | 224, r2[i3++] = o3 >> 6 & 63 | 128, r2[i3++] = o3 & 63 | 128);
      }
  else
    for (n4 = 0; n4 < e2.length; n4++)
      r2[n4] = e2[n4] | 0;
  return r2;
}
Q$2.toArray = ls$1;
function ds$1(e2) {
  for (var t = "", r2 = 0; r2 < e2.length; r2++)
    t += hf(e2[r2].toString(16));
  return t;
}
Q$2.toHex = ds$1;
function uf(e2) {
  var t = e2 >>> 24 | e2 >>> 8 & 65280 | e2 << 8 & 16711680 | (e2 & 255) << 24;
  return t >>> 0;
}
Q$2.htonl = uf;
function ps$1(e2, t) {
  for (var r2 = "", i3 = 0; i3 < e2.length; i3++) {
    var n4 = e2[i3];
    t === "little" && (n4 = uf(n4)), r2 += cf(n4.toString(16));
  }
  return r2;
}
Q$2.toHex32 = ps$1;
function hf(e2) {
  return e2.length === 1 ? "0" + e2 : e2;
}
Q$2.zero2 = hf;
function cf(e2) {
  return e2.length === 7 ? "0" + e2 : e2.length === 6 ? "00" + e2 : e2.length === 5 ? "000" + e2 : e2.length === 4 ? "0000" + e2 : e2.length === 3 ? "00000" + e2 : e2.length === 2 ? "000000" + e2 : e2.length === 1 ? "0000000" + e2 : e2;
}
Q$2.zero8 = cf;
function vs$1(e2, t, r2, i3) {
  var n4 = r2 - t;
  us$1(n4 % 4 === 0);
  for (var o3 = new Array(n4 / 4), h4 = 0, p3 = t; h4 < o3.length; h4++, p3 += 4) {
    var b3;
    i3 === "big" ? b3 = e2[p3] << 24 | e2[p3 + 1] << 16 | e2[p3 + 2] << 8 | e2[p3 + 3] : b3 = e2[p3 + 3] << 24 | e2[p3 + 2] << 16 | e2[p3 + 1] << 8 | e2[p3], o3[h4] = b3 >>> 0;
  }
  return o3;
}
Q$2.join32 = vs$1;
function ms$1(e2, t) {
  for (var r2 = new Array(e2.length * 4), i3 = 0, n4 = 0; i3 < e2.length; i3++, n4 += 4) {
    var o3 = e2[i3];
    t === "big" ? (r2[n4] = o3 >>> 24, r2[n4 + 1] = o3 >>> 16 & 255, r2[n4 + 2] = o3 >>> 8 & 255, r2[n4 + 3] = o3 & 255) : (r2[n4 + 3] = o3 >>> 24, r2[n4 + 2] = o3 >>> 16 & 255, r2[n4 + 1] = o3 >>> 8 & 255, r2[n4] = o3 & 255);
  }
  return r2;
}
Q$2.split32 = ms$1;
function gs$1(e2, t) {
  return e2 >>> t | e2 << 32 - t;
}
Q$2.rotr32 = gs$1;
function As$1(e2, t) {
  return e2 << t | e2 >>> 32 - t;
}
Q$2.rotl32 = As$1;
function bs$1(e2, t) {
  return e2 + t >>> 0;
}
Q$2.sum32 = bs$1;
function ys$1(e2, t, r2) {
  return e2 + t + r2 >>> 0;
}
Q$2.sum32_3 = ys$1;
function ws$1(e2, t, r2, i3) {
  return e2 + t + r2 + i3 >>> 0;
}
Q$2.sum32_4 = ws$1;
function xs$1(e2, t, r2, i3, n4) {
  return e2 + t + r2 + i3 + n4 >>> 0;
}
Q$2.sum32_5 = xs$1;
function Ms$1(e2, t, r2, i3) {
  var n4 = e2[t], o3 = e2[t + 1], h4 = i3 + o3 >>> 0, p3 = (h4 < i3 ? 1 : 0) + r2 + n4;
  e2[t] = p3 >>> 0, e2[t + 1] = h4;
}
Q$2.sum64 = Ms$1;
function Es$1(e2, t, r2, i3) {
  var n4 = t + i3 >>> 0, o3 = (n4 < t ? 1 : 0) + e2 + r2;
  return o3 >>> 0;
}
Q$2.sum64_hi = Es$1;
function Ss$1(e2, t, r2, i3) {
  var n4 = t + i3;
  return n4 >>> 0;
}
Q$2.sum64_lo = Ss$1;
function Ns$1(e2, t, r2, i3, n4, o3, h4, p3) {
  var b3 = 0, m3 = t;
  m3 = m3 + i3 >>> 0, b3 += m3 < t ? 1 : 0, m3 = m3 + o3 >>> 0, b3 += m3 < o3 ? 1 : 0, m3 = m3 + p3 >>> 0, b3 += m3 < p3 ? 1 : 0;
  var w3 = e2 + r2 + n4 + h4 + b3;
  return w3 >>> 0;
}
Q$2.sum64_4_hi = Ns$1;
function Is$1(e2, t, r2, i3, n4, o3, h4, p3) {
  var b3 = t + i3 + o3 + p3;
  return b3 >>> 0;
}
Q$2.sum64_4_lo = Is$1;
function _s$1(e2, t, r2, i3, n4, o3, h4, p3, b3, m3) {
  var w3 = 0, y3 = t;
  y3 = y3 + i3 >>> 0, w3 += y3 < t ? 1 : 0, y3 = y3 + o3 >>> 0, w3 += y3 < o3 ? 1 : 0, y3 = y3 + p3 >>> 0, w3 += y3 < p3 ? 1 : 0, y3 = y3 + m3 >>> 0, w3 += y3 < m3 ? 1 : 0;
  var S2 = e2 + r2 + n4 + h4 + b3 + w3;
  return S2 >>> 0;
}
Q$2.sum64_5_hi = _s$1;
function Bs$1(e2, t, r2, i3, n4, o3, h4, p3, b3, m3) {
  var w3 = t + i3 + o3 + p3 + m3;
  return w3 >>> 0;
}
Q$2.sum64_5_lo = Bs$1;
function Cs$1(e2, t, r2) {
  var i3 = t << 32 - r2 | e2 >>> r2;
  return i3 >>> 0;
}
Q$2.rotr64_hi = Cs$1;
function Rs$1(e2, t, r2) {
  var i3 = e2 << 32 - r2 | t >>> r2;
  return i3 >>> 0;
}
Q$2.rotr64_lo = Rs$1;
function Os$1(e2, t, r2) {
  return e2 >>> r2;
}
Q$2.shr64_hi = Os$1;
function Ps$1(e2, t, r2) {
  var i3 = e2 << 32 - r2 | t >>> r2;
  return i3 >>> 0;
}
Q$2.shr64_lo = Ps$1;
var fr = {}, lf = Q$2, Ds$1 = yr$1;
function Fr$1() {
  this.pending = null, this.pendingTotal = 0, this.blockSize = this.constructor.blockSize, this.outSize = this.constructor.outSize, this.hmacStrength = this.constructor.hmacStrength, this.padLength = this.constructor.padLength / 8, this.endian = "big", this._delta8 = this.blockSize / 8, this._delta32 = this.blockSize / 32;
}
fr.BlockHash = Fr$1, Fr$1.prototype.update = function(t, r2) {
  if (t = lf.toArray(t, r2), this.pending ? this.pending = this.pending.concat(t) : this.pending = t, this.pendingTotal += t.length, this.pending.length >= this._delta8) {
    t = this.pending;
    var i3 = t.length % this._delta8;
    this.pending = t.slice(t.length - i3, t.length), this.pending.length === 0 && (this.pending = null), t = lf.join32(t, 0, t.length - i3, this.endian);
    for (var n4 = 0; n4 < t.length; n4 += this._delta32)
      this._update(t, n4, n4 + this._delta32);
  }
  return this;
}, Fr$1.prototype.digest = function(t) {
  return this.update(this._pad()), Ds$1(this.pending === null), this._digest(t);
}, Fr$1.prototype._pad = function() {
  var t = this.pendingTotal, r2 = this._delta8, i3 = r2 - (t + this.padLength) % r2, n4 = new Array(i3 + this.padLength);
  n4[0] = 128;
  for (var o3 = 1; o3 < i3; o3++)
    n4[o3] = 0;
  if (t <<= 3, this.endian === "big") {
    for (var h4 = 8; h4 < this.padLength; h4++)
      n4[o3++] = 0;
    n4[o3++] = 0, n4[o3++] = 0, n4[o3++] = 0, n4[o3++] = 0, n4[o3++] = t >>> 24 & 255, n4[o3++] = t >>> 16 & 255, n4[o3++] = t >>> 8 & 255, n4[o3++] = t & 255;
  } else
    for (n4[o3++] = t & 255, n4[o3++] = t >>> 8 & 255, n4[o3++] = t >>> 16 & 255, n4[o3++] = t >>> 24 & 255, n4[o3++] = 0, n4[o3++] = 0, n4[o3++] = 0, n4[o3++] = 0, h4 = 8; h4 < this.padLength; h4++)
      n4[o3++] = 0;
  return n4;
};
var or$1 = {}, ae = {}, Fs$1 = Q$2, ue = Fs$1.rotr32;
function Ts$1(e2, t, r2, i3) {
  if (e2 === 0)
    return df(t, r2, i3);
  if (e2 === 1 || e2 === 3)
    return vf(t, r2, i3);
  if (e2 === 2)
    return pf(t, r2, i3);
}
ae.ft_1 = Ts$1;
function df(e2, t, r2) {
  return e2 & t ^ ~e2 & r2;
}
ae.ch32 = df;
function pf(e2, t, r2) {
  return e2 & t ^ e2 & r2 ^ t & r2;
}
ae.maj32 = pf;
function vf(e2, t, r2) {
  return e2 ^ t ^ r2;
}
ae.p32 = vf;
function Us$1(e2) {
  return ue(e2, 2) ^ ue(e2, 13) ^ ue(e2, 22);
}
ae.s0_256 = Us$1;
function ks$1(e2) {
  return ue(e2, 6) ^ ue(e2, 11) ^ ue(e2, 25);
}
ae.s1_256 = ks$1;
function qs$1(e2) {
  return ue(e2, 7) ^ ue(e2, 18) ^ e2 >>> 3;
}
ae.g0_256 = qs$1;
function Ks$1(e2) {
  return ue(e2, 17) ^ ue(e2, 19) ^ e2 >>> 10;
}
ae.g1_256 = Ks$1;
var sr$1 = Q$2, Hs$1 = fr, zs$1 = ae, _i = sr$1.rotl32, wr = sr$1.sum32, Ls$1 = sr$1.sum32_5, js$1 = zs$1.ft_1, mf = Hs$1.BlockHash, Qs$1 = [1518500249, 1859775393, 2400959708, 3395469782];
function he() {
  if (!(this instanceof he))
    return new he();
  mf.call(this), this.h = [1732584193, 4023233417, 2562383102, 271733878, 3285377520], this.W = new Array(80);
}
sr$1.inherits(he, mf);
var Js$1 = he;
he.blockSize = 512, he.outSize = 160, he.hmacStrength = 80, he.padLength = 64, he.prototype._update = function(t, r2) {
  for (var i3 = this.W, n4 = 0; n4 < 16; n4++)
    i3[n4] = t[r2 + n4];
  for (; n4 < i3.length; n4++)
    i3[n4] = _i(i3[n4 - 3] ^ i3[n4 - 8] ^ i3[n4 - 14] ^ i3[n4 - 16], 1);
  var o3 = this.h[0], h4 = this.h[1], p3 = this.h[2], b3 = this.h[3], m3 = this.h[4];
  for (n4 = 0; n4 < i3.length; n4++) {
    var w3 = ~~(n4 / 20), y3 = Ls$1(_i(o3, 5), js$1(w3, h4, p3, b3), m3, i3[n4], Qs$1[w3]);
    m3 = b3, b3 = p3, p3 = _i(h4, 30), h4 = o3, o3 = y3;
  }
  this.h[0] = wr(this.h[0], o3), this.h[1] = wr(this.h[1], h4), this.h[2] = wr(this.h[2], p3), this.h[3] = wr(this.h[3], b3), this.h[4] = wr(this.h[4], m3);
}, he.prototype._digest = function(t) {
  return t === "hex" ? sr$1.toHex32(this.h, "big") : sr$1.split32(this.h, "big");
};
var ar$1 = Q$2, Gs$1 = fr, ur$1 = ae, Ys$1 = yr$1, ie$2 = ar$1.sum32, Vs$1 = ar$1.sum32_4, Ws$1 = ar$1.sum32_5, Xs$1 = ur$1.ch32, Zs$1 = ur$1.maj32, $s$1 = ur$1.s0_256, ta = ur$1.s1_256, ea = ur$1.g0_256, ra = ur$1.g1_256, gf = Gs$1.BlockHash, ia = [1116352408, 1899447441, 3049323471, 3921009573, 961987163, 1508970993, 2453635748, 2870763221, 3624381080, 310598401, 607225278, 1426881987, 1925078388, 2162078206, 2614888103, 3248222580, 3835390401, 4022224774, 264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986, 2554220882, 2821834349, 2952996808, 3210313671, 3336571891, 3584528711, 113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291, 1695183700, 1986661051, 2177026350, 2456956037, 2730485921, 2820302411, 3259730800, 3345764771, 3516065817, 3600352804, 4094571909, 275423344, 430227734, 506948616, 659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779, 1955562222, 2024104815, 2227730452, 2361852424, 2428436474, 2756734187, 3204031479, 3329325298];
function ce() {
  if (!(this instanceof ce))
    return new ce();
  gf.call(this), this.h = [1779033703, 3144134277, 1013904242, 2773480762, 1359893119, 2600822924, 528734635, 1541459225], this.k = ia, this.W = new Array(64);
}
ar$1.inherits(ce, gf);
var Af = ce;
ce.blockSize = 512, ce.outSize = 256, ce.hmacStrength = 192, ce.padLength = 64, ce.prototype._update = function(t, r2) {
  for (var i3 = this.W, n4 = 0; n4 < 16; n4++)
    i3[n4] = t[r2 + n4];
  for (; n4 < i3.length; n4++)
    i3[n4] = Vs$1(ra(i3[n4 - 2]), i3[n4 - 7], ea(i3[n4 - 15]), i3[n4 - 16]);
  var o3 = this.h[0], h4 = this.h[1], p3 = this.h[2], b3 = this.h[3], m3 = this.h[4], w3 = this.h[5], y3 = this.h[6], S2 = this.h[7];
  for (Ys$1(this.k.length === i3.length), n4 = 0; n4 < i3.length; n4++) {
    var I2 = Ws$1(S2, ta(m3), Xs$1(m3, w3, y3), this.k[n4], i3[n4]), N2 = ie$2($s$1(o3), Zs$1(o3, h4, p3));
    S2 = y3, y3 = w3, w3 = m3, m3 = ie$2(b3, I2), b3 = p3, p3 = h4, h4 = o3, o3 = ie$2(I2, N2);
  }
  this.h[0] = ie$2(this.h[0], o3), this.h[1] = ie$2(this.h[1], h4), this.h[2] = ie$2(this.h[2], p3), this.h[3] = ie$2(this.h[3], b3), this.h[4] = ie$2(this.h[4], m3), this.h[5] = ie$2(this.h[5], w3), this.h[6] = ie$2(this.h[6], y3), this.h[7] = ie$2(this.h[7], S2);
}, ce.prototype._digest = function(t) {
  return t === "hex" ? ar$1.toHex32(this.h, "big") : ar$1.split32(this.h, "big");
};
var Bi = Q$2, bf = Af;
function ye$1() {
  if (!(this instanceof ye$1))
    return new ye$1();
  bf.call(this), this.h = [3238371032, 914150663, 812702999, 4144912697, 4290775857, 1750603025, 1694076839, 3204075428];
}
Bi.inherits(ye$1, bf);
var na = ye$1;
ye$1.blockSize = 512, ye$1.outSize = 224, ye$1.hmacStrength = 192, ye$1.padLength = 64, ye$1.prototype._digest = function(t) {
  return t === "hex" ? Bi.toHex32(this.h.slice(0, 7), "big") : Bi.split32(this.h.slice(0, 7), "big");
};
var jt$1 = Q$2, fa = fr, oa = yr$1, le = jt$1.rotr64_hi, de$1 = jt$1.rotr64_lo, yf = jt$1.shr64_hi, wf = jt$1.shr64_lo, Be$2 = jt$1.sum64, Ci = jt$1.sum64_hi, Ri = jt$1.sum64_lo, sa = jt$1.sum64_4_hi, aa = jt$1.sum64_4_lo, ua = jt$1.sum64_5_hi, ha = jt$1.sum64_5_lo, xf = fa.BlockHash, ca = [1116352408, 3609767458, 1899447441, 602891725, 3049323471, 3964484399, 3921009573, 2173295548, 961987163, 4081628472, 1508970993, 3053834265, 2453635748, 2937671579, 2870763221, 3664609560, 3624381080, 2734883394, 310598401, 1164996542, 607225278, 1323610764, 1426881987, 3590304994, 1925078388, 4068182383, 2162078206, 991336113, 2614888103, 633803317, 3248222580, 3479774868, 3835390401, 2666613458, 4022224774, 944711139, 264347078, 2341262773, 604807628, 2007800933, 770255983, 1495990901, 1249150122, 1856431235, 1555081692, 3175218132, 1996064986, 2198950837, 2554220882, 3999719339, 2821834349, 766784016, 2952996808, 2566594879, 3210313671, 3203337956, 3336571891, 1034457026, 3584528711, 2466948901, 113926993, 3758326383, 338241895, 168717936, 666307205, 1188179964, 773529912, 1546045734, 1294757372, 1522805485, 1396182291, 2643833823, 1695183700, 2343527390, 1986661051, 1014477480, 2177026350, 1206759142, 2456956037, 344077627, 2730485921, 1290863460, 2820302411, 3158454273, 3259730800, 3505952657, 3345764771, 106217008, 3516065817, 3606008344, 3600352804, 1432725776, 4094571909, 1467031594, 275423344, 851169720, 430227734, 3100823752, 506948616, 1363258195, 659060556, 3750685593, 883997877, 3785050280, 958139571, 3318307427, 1322822218, 3812723403, 1537002063, 2003034995, 1747873779, 3602036899, 1955562222, 1575990012, 2024104815, 1125592928, 2227730452, 2716904306, 2361852424, 442776044, 2428436474, 593698344, 2756734187, 3733110249, 3204031479, 2999351573, 3329325298, 3815920427, 3391569614, 3928383900, 3515267271, 566280711, 3940187606, 3454069534, 4118630271, 4000239992, 116418474, 1914138554, 174292421, 2731055270, 289380356, 3203993006, 460393269, 320620315, 685471733, 587496836, 852142971, 1086792851, 1017036298, 365543100, 1126000580, 2618297676, 1288033470, 3409855158, 1501505948, 4234509866, 1607167915, 987167468, 1816402316, 1246189591];
function ne$1() {
  if (!(this instanceof ne$1))
    return new ne$1();
  xf.call(this), this.h = [1779033703, 4089235720, 3144134277, 2227873595, 1013904242, 4271175723, 2773480762, 1595750129, 1359893119, 2917565137, 2600822924, 725511199, 528734635, 4215389547, 1541459225, 327033209], this.k = ca, this.W = new Array(160);
}
jt$1.inherits(ne$1, xf);
var Mf = ne$1;
ne$1.blockSize = 1024, ne$1.outSize = 512, ne$1.hmacStrength = 192, ne$1.padLength = 128, ne$1.prototype._prepareBlock = function(t, r2) {
  for (var i3 = this.W, n4 = 0; n4 < 32; n4++)
    i3[n4] = t[r2 + n4];
  for (; n4 < i3.length; n4 += 2) {
    var o3 = xa$1(i3[n4 - 4], i3[n4 - 3]), h4 = Ma(i3[n4 - 4], i3[n4 - 3]), p3 = i3[n4 - 14], b3 = i3[n4 - 13], m3 = ya$1(i3[n4 - 30], i3[n4 - 29]), w3 = wa(i3[n4 - 30], i3[n4 - 29]), y3 = i3[n4 - 32], S2 = i3[n4 - 31];
    i3[n4] = sa(o3, h4, p3, b3, m3, w3, y3, S2), i3[n4 + 1] = aa(o3, h4, p3, b3, m3, w3, y3, S2);
  }
}, ne$1.prototype._update = function(t, r2) {
  this._prepareBlock(t, r2);
  var i3 = this.W, n4 = this.h[0], o3 = this.h[1], h4 = this.h[2], p3 = this.h[3], b3 = this.h[4], m3 = this.h[5], w3 = this.h[6], y3 = this.h[7], S2 = this.h[8], I2 = this.h[9], N2 = this.h[10], C2 = this.h[11], F = this.h[12], U2 = this.h[13], J2 = this.h[14], Bt2 = this.h[15];
  oa(this.k.length === i3.length);
  for (var G = 0; G < i3.length; G += 2) {
    var H = J2, z2 = Bt2, Pt2 = Aa(S2, I2), W = ba$1(S2, I2), Rt2 = la(S2, I2, N2, C2, F), Yt3 = da(S2, I2, N2, C2, F, U2), Y = this.k[G], Vt2 = this.k[G + 1], A2 = i3[G], f3 = i3[G + 1], a3 = ua(H, z2, Pt2, W, Rt2, Yt3, Y, Vt2, A2, f3), c2 = ha(H, z2, Pt2, W, Rt2, Yt3, Y, Vt2, A2, f3);
    H = ma(n4, o3), z2 = ga(n4, o3), Pt2 = pa(n4, o3, h4, p3, b3), W = va(n4, o3, h4, p3, b3, m3);
    var d4 = Ci(H, z2, Pt2, W), g3 = Ri(H, z2, Pt2, W);
    J2 = F, Bt2 = U2, F = N2, U2 = C2, N2 = S2, C2 = I2, S2 = Ci(w3, y3, a3, c2), I2 = Ri(y3, y3, a3, c2), w3 = b3, y3 = m3, b3 = h4, m3 = p3, h4 = n4, p3 = o3, n4 = Ci(a3, c2, d4, g3), o3 = Ri(a3, c2, d4, g3);
  }
  Be$2(this.h, 0, n4, o3), Be$2(this.h, 2, h4, p3), Be$2(this.h, 4, b3, m3), Be$2(this.h, 6, w3, y3), Be$2(this.h, 8, S2, I2), Be$2(this.h, 10, N2, C2), Be$2(this.h, 12, F, U2), Be$2(this.h, 14, J2, Bt2);
}, ne$1.prototype._digest = function(t) {
  return t === "hex" ? jt$1.toHex32(this.h, "big") : jt$1.split32(this.h, "big");
};
function la(e2, t, r2, i3, n4) {
  var o3 = e2 & r2 ^ ~e2 & n4;
  return o3 < 0 && (o3 += 4294967296), o3;
}
function da(e2, t, r2, i3, n4, o3) {
  var h4 = t & i3 ^ ~t & o3;
  return h4 < 0 && (h4 += 4294967296), h4;
}
function pa(e2, t, r2, i3, n4) {
  var o3 = e2 & r2 ^ e2 & n4 ^ r2 & n4;
  return o3 < 0 && (o3 += 4294967296), o3;
}
function va(e2, t, r2, i3, n4, o3) {
  var h4 = t & i3 ^ t & o3 ^ i3 & o3;
  return h4 < 0 && (h4 += 4294967296), h4;
}
function ma(e2, t) {
  var r2 = le(e2, t, 28), i3 = le(t, e2, 2), n4 = le(t, e2, 7), o3 = r2 ^ i3 ^ n4;
  return o3 < 0 && (o3 += 4294967296), o3;
}
function ga(e2, t) {
  var r2 = de$1(e2, t, 28), i3 = de$1(t, e2, 2), n4 = de$1(t, e2, 7), o3 = r2 ^ i3 ^ n4;
  return o3 < 0 && (o3 += 4294967296), o3;
}
function Aa(e2, t) {
  var r2 = le(e2, t, 14), i3 = le(e2, t, 18), n4 = le(t, e2, 9), o3 = r2 ^ i3 ^ n4;
  return o3 < 0 && (o3 += 4294967296), o3;
}
function ba$1(e2, t) {
  var r2 = de$1(e2, t, 14), i3 = de$1(e2, t, 18), n4 = de$1(t, e2, 9), o3 = r2 ^ i3 ^ n4;
  return o3 < 0 && (o3 += 4294967296), o3;
}
function ya$1(e2, t) {
  var r2 = le(e2, t, 1), i3 = le(e2, t, 8), n4 = yf(e2, t, 7), o3 = r2 ^ i3 ^ n4;
  return o3 < 0 && (o3 += 4294967296), o3;
}
function wa(e2, t) {
  var r2 = de$1(e2, t, 1), i3 = de$1(e2, t, 8), n4 = wf(e2, t, 7), o3 = r2 ^ i3 ^ n4;
  return o3 < 0 && (o3 += 4294967296), o3;
}
function xa$1(e2, t) {
  var r2 = le(e2, t, 19), i3 = le(t, e2, 29), n4 = yf(e2, t, 6), o3 = r2 ^ i3 ^ n4;
  return o3 < 0 && (o3 += 4294967296), o3;
}
function Ma(e2, t) {
  var r2 = de$1(e2, t, 19), i3 = de$1(t, e2, 29), n4 = wf(e2, t, 6), o3 = r2 ^ i3 ^ n4;
  return o3 < 0 && (o3 += 4294967296), o3;
}
var Oi = Q$2, Ef = Mf;
function we() {
  if (!(this instanceof we))
    return new we();
  Ef.call(this), this.h = [3418070365, 3238371032, 1654270250, 914150663, 2438529370, 812702999, 355462360, 4144912697, 1731405415, 4290775857, 2394180231, 1750603025, 3675008525, 1694076839, 1203062813, 3204075428];
}
Oi.inherits(we, Ef);
var Ea$1 = we;
we.blockSize = 1024, we.outSize = 384, we.hmacStrength = 192, we.padLength = 128, we.prototype._digest = function(t) {
  return t === "hex" ? Oi.toHex32(this.h.slice(0, 12), "big") : Oi.split32(this.h.slice(0, 12), "big");
}, or$1.sha1 = Js$1, or$1.sha224 = na, or$1.sha256 = Af, or$1.sha384 = Ea$1, or$1.sha512 = Mf;
var Sf = {}, Xe$2 = Q$2, Sa$1 = fr, Tr$1 = Xe$2.rotl32, Nf = Xe$2.sum32, xr$1 = Xe$2.sum32_3, If = Xe$2.sum32_4, _f = Sa$1.BlockHash;
function pe$1() {
  if (!(this instanceof pe$1))
    return new pe$1();
  _f.call(this), this.h = [1732584193, 4023233417, 2562383102, 271733878, 3285377520], this.endian = "little";
}
Xe$2.inherits(pe$1, _f), Sf.ripemd160 = pe$1, pe$1.blockSize = 512, pe$1.outSize = 160, pe$1.hmacStrength = 192, pe$1.padLength = 64, pe$1.prototype._update = function(t, r2) {
  for (var i3 = this.h[0], n4 = this.h[1], o3 = this.h[2], h4 = this.h[3], p3 = this.h[4], b3 = i3, m3 = n4, w3 = o3, y3 = h4, S2 = p3, I2 = 0; I2 < 80; I2++) {
    var N2 = Nf(Tr$1(If(i3, Bf(I2, n4, o3, h4), t[_a[I2] + r2], Na(I2)), Ca[I2]), p3);
    i3 = p3, p3 = h4, h4 = Tr$1(o3, 10), o3 = n4, n4 = N2, N2 = Nf(Tr$1(If(b3, Bf(79 - I2, m3, w3, y3), t[Ba[I2] + r2], Ia(I2)), Ra$1[I2]), S2), b3 = S2, S2 = y3, y3 = Tr$1(w3, 10), w3 = m3, m3 = N2;
  }
  N2 = xr$1(this.h[1], o3, y3), this.h[1] = xr$1(this.h[2], h4, S2), this.h[2] = xr$1(this.h[3], p3, b3), this.h[3] = xr$1(this.h[4], i3, m3), this.h[4] = xr$1(this.h[0], n4, w3), this.h[0] = N2;
}, pe$1.prototype._digest = function(t) {
  return t === "hex" ? Xe$2.toHex32(this.h, "little") : Xe$2.split32(this.h, "little");
};
function Bf(e2, t, r2, i3) {
  return e2 <= 15 ? t ^ r2 ^ i3 : e2 <= 31 ? t & r2 | ~t & i3 : e2 <= 47 ? (t | ~r2) ^ i3 : e2 <= 63 ? t & i3 | r2 & ~i3 : t ^ (r2 | ~i3);
}
function Na(e2) {
  return e2 <= 15 ? 0 : e2 <= 31 ? 1518500249 : e2 <= 47 ? 1859775393 : e2 <= 63 ? 2400959708 : 2840853838;
}
function Ia(e2) {
  return e2 <= 15 ? 1352829926 : e2 <= 31 ? 1548603684 : e2 <= 47 ? 1836072691 : e2 <= 63 ? 2053994217 : 0;
}
var _a = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 7, 4, 13, 1, 10, 6, 15, 3, 12, 0, 9, 5, 2, 14, 11, 8, 3, 10, 14, 4, 9, 15, 8, 1, 2, 7, 0, 6, 13, 11, 5, 12, 1, 9, 11, 10, 0, 8, 12, 4, 13, 3, 7, 15, 14, 5, 6, 2, 4, 0, 5, 9, 7, 12, 2, 10, 14, 1, 3, 8, 11, 6, 15, 13], Ba = [5, 14, 7, 0, 9, 2, 11, 4, 13, 6, 15, 8, 1, 10, 3, 12, 6, 11, 3, 7, 0, 13, 5, 10, 14, 15, 8, 12, 4, 9, 1, 2, 15, 5, 1, 3, 7, 14, 6, 9, 11, 8, 12, 2, 10, 0, 4, 13, 8, 6, 4, 1, 3, 11, 15, 0, 5, 12, 2, 13, 9, 7, 10, 14, 12, 15, 10, 4, 1, 5, 8, 7, 6, 2, 13, 14, 0, 3, 9, 11], Ca = [11, 14, 15, 12, 5, 8, 7, 9, 11, 13, 14, 15, 6, 7, 9, 8, 7, 6, 8, 13, 11, 9, 7, 15, 7, 12, 15, 9, 11, 7, 13, 12, 11, 13, 6, 7, 14, 9, 13, 15, 14, 8, 13, 6, 5, 12, 7, 5, 11, 12, 14, 15, 14, 15, 9, 8, 9, 14, 5, 6, 8, 6, 5, 12, 9, 15, 5, 11, 6, 8, 13, 12, 5, 12, 13, 14, 11, 8, 5, 6], Ra$1 = [8, 9, 9, 11, 13, 15, 15, 5, 7, 7, 8, 11, 14, 14, 12, 6, 9, 13, 15, 7, 12, 8, 9, 11, 7, 7, 12, 7, 6, 15, 13, 11, 9, 7, 15, 11, 8, 6, 6, 14, 12, 13, 5, 14, 13, 13, 7, 5, 15, 5, 8, 11, 14, 14, 6, 14, 6, 9, 12, 9, 12, 5, 15, 8, 8, 5, 12, 9, 12, 5, 14, 6, 8, 13, 6, 5, 15, 13, 11, 11], Oa$1 = Q$2, Pa = yr$1;
function hr$2(e2, t, r2) {
  if (!(this instanceof hr$2))
    return new hr$2(e2, t, r2);
  this.Hash = e2, this.blockSize = e2.blockSize / 8, this.outSize = e2.outSize / 8, this.inner = null, this.outer = null, this._init(Oa$1.toArray(t, r2));
}
var Da$1 = hr$2;
hr$2.prototype._init = function(t) {
  t.length > this.blockSize && (t = new this.Hash().update(t).digest()), Pa(t.length <= this.blockSize);
  for (var r2 = t.length; r2 < this.blockSize; r2++)
    t.push(0);
  for (r2 = 0; r2 < t.length; r2++)
    t[r2] ^= 54;
  for (this.inner = new this.Hash().update(t), r2 = 0; r2 < t.length; r2++)
    t[r2] ^= 106;
  this.outer = new this.Hash().update(t);
}, hr$2.prototype.update = function(t, r2) {
  return this.inner.update(t, r2), this;
}, hr$2.prototype.digest = function(t) {
  return this.outer.update(this.inner.digest()), this.outer.digest(t);
}, function(e2) {
  var t = e2;
  t.utils = Q$2, t.common = fr, t.sha = or$1, t.ripemd = Sf, t.hmac = Da$1, t.sha1 = t.sha.sha1, t.sha256 = t.sha.sha256, t.sha224 = t.sha.sha224, t.sha384 = t.sha.sha384, t.sha512 = t.sha.sha512, t.ripemd160 = t.ripemd.ripemd160;
}(se);
function cr$2(e2, t, r2) {
  return r2 = { path: t, exports: {}, require: function(i3, n4) {
    return Fa(i3, n4 ?? r2.path);
  } }, e2(r2, r2.exports), r2.exports;
}
function Fa() {
  throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs");
}
var Pi = Cf;
function Cf(e2, t) {
  if (!e2)
    throw new Error(t || "Assertion failed");
}
Cf.equal = function(t, r2, i3) {
  if (t != r2)
    throw new Error(i3 || "Assertion failed: " + t + " != " + r2);
};
var fe$1 = cr$2(function(e2, t) {
  var r2 = t;
  function i3(h4, p3) {
    if (Array.isArray(h4))
      return h4.slice();
    if (!h4)
      return [];
    var b3 = [];
    if (typeof h4 != "string") {
      for (var m3 = 0; m3 < h4.length; m3++)
        b3[m3] = h4[m3] | 0;
      return b3;
    }
    if (p3 === "hex") {
      h4 = h4.replace(/[^a-z0-9]+/ig, ""), h4.length % 2 !== 0 && (h4 = "0" + h4);
      for (var m3 = 0; m3 < h4.length; m3 += 2)
        b3.push(parseInt(h4[m3] + h4[m3 + 1], 16));
    } else
      for (var m3 = 0; m3 < h4.length; m3++) {
        var w3 = h4.charCodeAt(m3), y3 = w3 >> 8, S2 = w3 & 255;
        y3 ? b3.push(y3, S2) : b3.push(S2);
      }
    return b3;
  }
  r2.toArray = i3;
  function n4(h4) {
    return h4.length === 1 ? "0" + h4 : h4;
  }
  r2.zero2 = n4;
  function o3(h4) {
    for (var p3 = "", b3 = 0; b3 < h4.length; b3++)
      p3 += n4(h4[b3].toString(16));
    return p3;
  }
  r2.toHex = o3, r2.encode = function(p3, b3) {
    return b3 === "hex" ? o3(p3) : p3;
  };
}), Jt$2 = cr$2(function(e2, t) {
  var r2 = t;
  r2.assert = Pi, r2.toArray = fe$1.toArray, r2.zero2 = fe$1.zero2, r2.toHex = fe$1.toHex, r2.encode = fe$1.encode;
  function i3(b3, m3, w3) {
    var y3 = new Array(Math.max(b3.bitLength(), w3) + 1);
    y3.fill(0);
    for (var S2 = 1 << m3 + 1, I2 = b3.clone(), N2 = 0; N2 < y3.length; N2++) {
      var C2, F = I2.andln(S2 - 1);
      I2.isOdd() ? (F > (S2 >> 1) - 1 ? C2 = (S2 >> 1) - F : C2 = F, I2.isubn(C2)) : C2 = 0, y3[N2] = C2, I2.iushrn(1);
    }
    return y3;
  }
  r2.getNAF = i3;
  function n4(b3, m3) {
    var w3 = [[], []];
    b3 = b3.clone(), m3 = m3.clone();
    for (var y3 = 0, S2 = 0, I2; b3.cmpn(-y3) > 0 || m3.cmpn(-S2) > 0; ) {
      var N2 = b3.andln(3) + y3 & 3, C2 = m3.andln(3) + S2 & 3;
      N2 === 3 && (N2 = -1), C2 === 3 && (C2 = -1);
      var F;
      N2 & 1 ? (I2 = b3.andln(7) + y3 & 7, (I2 === 3 || I2 === 5) && C2 === 2 ? F = -N2 : F = N2) : F = 0, w3[0].push(F);
      var U2;
      C2 & 1 ? (I2 = m3.andln(7) + S2 & 7, (I2 === 3 || I2 === 5) && N2 === 2 ? U2 = -C2 : U2 = C2) : U2 = 0, w3[1].push(U2), 2 * y3 === F + 1 && (y3 = 1 - y3), 2 * S2 === U2 + 1 && (S2 = 1 - S2), b3.iushrn(1), m3.iushrn(1);
    }
    return w3;
  }
  r2.getJSF = n4;
  function o3(b3, m3, w3) {
    var y3 = "_" + m3;
    b3.prototype[m3] = function() {
      return this[y3] !== void 0 ? this[y3] : this[y3] = w3.call(this);
    };
  }
  r2.cachedProperty = o3;
  function h4(b3) {
    return typeof b3 == "string" ? r2.toArray(b3, "hex") : b3;
  }
  r2.parseBytes = h4;
  function p3(b3) {
    return new K$1(b3, "hex", "le");
  }
  r2.intFromLE = p3;
}), Ur$1 = Jt$2.getNAF, Ta$1 = Jt$2.getJSF, kr = Jt$2.assert;
function Ce(e2, t) {
  this.type = e2, this.p = new K$1(t.p, 16), this.red = t.prime ? K$1.red(t.prime) : K$1.mont(this.p), this.zero = new K$1(0).toRed(this.red), this.one = new K$1(1).toRed(this.red), this.two = new K$1(2).toRed(this.red), this.n = t.n && new K$1(t.n, 16), this.g = t.g && this.pointFromJSON(t.g, t.gRed), this._wnafT1 = new Array(4), this._wnafT2 = new Array(4), this._wnafT3 = new Array(4), this._wnafT4 = new Array(4), this._bitLength = this.n ? this.n.bitLength() : 0;
  var r2 = this.n && this.p.div(this.n);
  !r2 || r2.cmpn(100) > 0 ? this.redN = null : (this._maxwellTrick = true, this.redN = this.n.toRed(this.red));
}
var Ze$2 = Ce;
Ce.prototype.point = function() {
  throw new Error("Not implemented");
}, Ce.prototype.validate = function() {
  throw new Error("Not implemented");
}, Ce.prototype._fixedNafMul = function(t, r2) {
  kr(t.precomputed);
  var i3 = t._getDoubles(), n4 = Ur$1(r2, 1, this._bitLength), o3 = (1 << i3.step + 1) - (i3.step % 2 === 0 ? 2 : 1);
  o3 /= 3;
  var h4 = [], p3, b3;
  for (p3 = 0; p3 < n4.length; p3 += i3.step) {
    b3 = 0;
    for (var m3 = p3 + i3.step - 1; m3 >= p3; m3--)
      b3 = (b3 << 1) + n4[m3];
    h4.push(b3);
  }
  for (var w3 = this.jpoint(null, null, null), y3 = this.jpoint(null, null, null), S2 = o3; S2 > 0; S2--) {
    for (p3 = 0; p3 < h4.length; p3++)
      b3 = h4[p3], b3 === S2 ? y3 = y3.mixedAdd(i3.points[p3]) : b3 === -S2 && (y3 = y3.mixedAdd(i3.points[p3].neg()));
    w3 = w3.add(y3);
  }
  return w3.toP();
}, Ce.prototype._wnafMul = function(t, r2) {
  var i3 = 4, n4 = t._getNAFPoints(i3);
  i3 = n4.wnd;
  for (var o3 = n4.points, h4 = Ur$1(r2, i3, this._bitLength), p3 = this.jpoint(null, null, null), b3 = h4.length - 1; b3 >= 0; b3--) {
    for (var m3 = 0; b3 >= 0 && h4[b3] === 0; b3--)
      m3++;
    if (b3 >= 0 && m3++, p3 = p3.dblp(m3), b3 < 0)
      break;
    var w3 = h4[b3];
    kr(w3 !== 0), t.type === "affine" ? w3 > 0 ? p3 = p3.mixedAdd(o3[w3 - 1 >> 1]) : p3 = p3.mixedAdd(o3[-w3 - 1 >> 1].neg()) : w3 > 0 ? p3 = p3.add(o3[w3 - 1 >> 1]) : p3 = p3.add(o3[-w3 - 1 >> 1].neg());
  }
  return t.type === "affine" ? p3.toP() : p3;
}, Ce.prototype._wnafMulAdd = function(t, r2, i3, n4, o3) {
  var h4 = this._wnafT1, p3 = this._wnafT2, b3 = this._wnafT3, m3 = 0, w3, y3, S2;
  for (w3 = 0; w3 < n4; w3++) {
    S2 = r2[w3];
    var I2 = S2._getNAFPoints(t);
    h4[w3] = I2.wnd, p3[w3] = I2.points;
  }
  for (w3 = n4 - 1; w3 >= 1; w3 -= 2) {
    var N2 = w3 - 1, C2 = w3;
    if (h4[N2] !== 1 || h4[C2] !== 1) {
      b3[N2] = Ur$1(i3[N2], h4[N2], this._bitLength), b3[C2] = Ur$1(i3[C2], h4[C2], this._bitLength), m3 = Math.max(b3[N2].length, m3), m3 = Math.max(b3[C2].length, m3);
      continue;
    }
    var F = [r2[N2], null, null, r2[C2]];
    r2[N2].y.cmp(r2[C2].y) === 0 ? (F[1] = r2[N2].add(r2[C2]), F[2] = r2[N2].toJ().mixedAdd(r2[C2].neg())) : r2[N2].y.cmp(r2[C2].y.redNeg()) === 0 ? (F[1] = r2[N2].toJ().mixedAdd(r2[C2]), F[2] = r2[N2].add(r2[C2].neg())) : (F[1] = r2[N2].toJ().mixedAdd(r2[C2]), F[2] = r2[N2].toJ().mixedAdd(r2[C2].neg()));
    var U2 = [-3, -1, -5, -7, 0, 7, 5, 1, 3], J2 = Ta$1(i3[N2], i3[C2]);
    for (m3 = Math.max(J2[0].length, m3), b3[N2] = new Array(m3), b3[C2] = new Array(m3), y3 = 0; y3 < m3; y3++) {
      var Bt2 = J2[0][y3] | 0, G = J2[1][y3] | 0;
      b3[N2][y3] = U2[(Bt2 + 1) * 3 + (G + 1)], b3[C2][y3] = 0, p3[N2] = F;
    }
  }
  var H = this.jpoint(null, null, null), z2 = this._wnafT4;
  for (w3 = m3; w3 >= 0; w3--) {
    for (var Pt2 = 0; w3 >= 0; ) {
      var W = true;
      for (y3 = 0; y3 < n4; y3++)
        z2[y3] = b3[y3][w3] | 0, z2[y3] !== 0 && (W = false);
      if (!W)
        break;
      Pt2++, w3--;
    }
    if (w3 >= 0 && Pt2++, H = H.dblp(Pt2), w3 < 0)
      break;
    for (y3 = 0; y3 < n4; y3++) {
      var Rt2 = z2[y3];
      Rt2 !== 0 && (Rt2 > 0 ? S2 = p3[y3][Rt2 - 1 >> 1] : Rt2 < 0 && (S2 = p3[y3][-Rt2 - 1 >> 1].neg()), S2.type === "affine" ? H = H.mixedAdd(S2) : H = H.add(S2));
    }
  }
  for (w3 = 0; w3 < n4; w3++)
    p3[w3] = null;
  return o3 ? H : H.toP();
};
function Xt$2(e2, t) {
  this.curve = e2, this.type = t, this.precomputed = null;
}
Ce.BasePoint = Xt$2, Xt$2.prototype.eq = function() {
  throw new Error("Not implemented");
}, Xt$2.prototype.validate = function() {
  return this.curve.validate(this);
}, Ce.prototype.decodePoint = function(t, r2) {
  t = Jt$2.toArray(t, r2);
  var i3 = this.p.byteLength();
  if ((t[0] === 4 || t[0] === 6 || t[0] === 7) && t.length - 1 === 2 * i3) {
    t[0] === 6 ? kr(t[t.length - 1] % 2 === 0) : t[0] === 7 && kr(t[t.length - 1] % 2 === 1);
    var n4 = this.point(t.slice(1, 1 + i3), t.slice(1 + i3, 1 + 2 * i3));
    return n4;
  } else if ((t[0] === 2 || t[0] === 3) && t.length - 1 === i3)
    return this.pointFromX(t.slice(1, 1 + i3), t[0] === 3);
  throw new Error("Unknown point format");
}, Xt$2.prototype.encodeCompressed = function(t) {
  return this.encode(t, true);
}, Xt$2.prototype._encode = function(t) {
  var r2 = this.curve.p.byteLength(), i3 = this.getX().toArray("be", r2);
  return t ? [this.getY().isEven() ? 2 : 3].concat(i3) : [4].concat(i3, this.getY().toArray("be", r2));
}, Xt$2.prototype.encode = function(t, r2) {
  return Jt$2.encode(this._encode(r2), t);
}, Xt$2.prototype.precompute = function(t) {
  if (this.precomputed)
    return this;
  var r2 = { doubles: null, naf: null, beta: null };
  return r2.naf = this._getNAFPoints(8), r2.doubles = this._getDoubles(4, t), r2.beta = this._getBeta(), this.precomputed = r2, this;
}, Xt$2.prototype._hasDoubles = function(t) {
  if (!this.precomputed)
    return false;
  var r2 = this.precomputed.doubles;
  return r2 ? r2.points.length >= Math.ceil((t.bitLength() + 1) / r2.step) : false;
}, Xt$2.prototype._getDoubles = function(t, r2) {
  if (this.precomputed && this.precomputed.doubles)
    return this.precomputed.doubles;
  for (var i3 = [this], n4 = this, o3 = 0; o3 < r2; o3 += t) {
    for (var h4 = 0; h4 < t; h4++)
      n4 = n4.dbl();
    i3.push(n4);
  }
  return { step: t, points: i3 };
}, Xt$2.prototype._getNAFPoints = function(t) {
  if (this.precomputed && this.precomputed.naf)
    return this.precomputed.naf;
  for (var r2 = [this], i3 = (1 << t) - 1, n4 = i3 === 1 ? null : this.dbl(), o3 = 1; o3 < i3; o3++)
    r2[o3] = r2[o3 - 1].add(n4);
  return { wnd: t, points: r2 };
}, Xt$2.prototype._getBeta = function() {
  return null;
}, Xt$2.prototype.dblp = function(t) {
  for (var r2 = this, i3 = 0; i3 < t; i3++)
    r2 = r2.dbl();
  return r2;
};
var Di = cr$2(function(e2) {
  typeof Object.create == "function" ? e2.exports = function(r2, i3) {
    i3 && (r2.super_ = i3, r2.prototype = Object.create(i3.prototype, { constructor: { value: r2, enumerable: false, writable: true, configurable: true } }));
  } : e2.exports = function(r2, i3) {
    if (i3) {
      r2.super_ = i3;
      var n4 = function() {
      };
      n4.prototype = i3.prototype, r2.prototype = new n4(), r2.prototype.constructor = r2;
    }
  };
}), Ua = Jt$2.assert;
function Zt$1(e2) {
  Ze$2.call(this, "short", e2), this.a = new K$1(e2.a, 16).toRed(this.red), this.b = new K$1(e2.b, 16).toRed(this.red), this.tinv = this.two.redInvm(), this.zeroA = this.a.fromRed().cmpn(0) === 0, this.threeA = this.a.fromRed().sub(this.p).cmpn(-3) === 0, this.endo = this._getEndomorphism(e2), this._endoWnafT1 = new Array(4), this._endoWnafT2 = new Array(4);
}
Di(Zt$1, Ze$2);
var ka = Zt$1;
Zt$1.prototype._getEndomorphism = function(t) {
  if (!(!this.zeroA || !this.g || !this.n || this.p.modn(3) !== 1)) {
    var r2, i3;
    if (t.beta)
      r2 = new K$1(t.beta, 16).toRed(this.red);
    else {
      var n4 = this._getEndoRoots(this.p);
      r2 = n4[0].cmp(n4[1]) < 0 ? n4[0] : n4[1], r2 = r2.toRed(this.red);
    }
    if (t.lambda)
      i3 = new K$1(t.lambda, 16);
    else {
      var o3 = this._getEndoRoots(this.n);
      this.g.mul(o3[0]).x.cmp(this.g.x.redMul(r2)) === 0 ? i3 = o3[0] : (i3 = o3[1], Ua(this.g.mul(i3).x.cmp(this.g.x.redMul(r2)) === 0));
    }
    var h4;
    return t.basis ? h4 = t.basis.map(function(p3) {
      return { a: new K$1(p3.a, 16), b: new K$1(p3.b, 16) };
    }) : h4 = this._getEndoBasis(i3), { beta: r2, lambda: i3, basis: h4 };
  }
}, Zt$1.prototype._getEndoRoots = function(t) {
  var r2 = t === this.p ? this.red : K$1.mont(t), i3 = new K$1(2).toRed(r2).redInvm(), n4 = i3.redNeg(), o3 = new K$1(3).toRed(r2).redNeg().redSqrt().redMul(i3), h4 = n4.redAdd(o3).fromRed(), p3 = n4.redSub(o3).fromRed();
  return [h4, p3];
}, Zt$1.prototype._getEndoBasis = function(t) {
  for (var r2 = this.n.ushrn(Math.floor(this.n.bitLength() / 2)), i3 = t, n4 = this.n.clone(), o3 = new K$1(1), h4 = new K$1(0), p3 = new K$1(0), b3 = new K$1(1), m3, w3, y3, S2, I2, N2, C2, F = 0, U2, J2; i3.cmpn(0) !== 0; ) {
    var Bt2 = n4.div(i3);
    U2 = n4.sub(Bt2.mul(i3)), J2 = p3.sub(Bt2.mul(o3));
    var G = b3.sub(Bt2.mul(h4));
    if (!y3 && U2.cmp(r2) < 0)
      m3 = C2.neg(), w3 = o3, y3 = U2.neg(), S2 = J2;
    else if (y3 && ++F === 2)
      break;
    C2 = U2, n4 = i3, i3 = U2, p3 = o3, o3 = J2, b3 = h4, h4 = G;
  }
  I2 = U2.neg(), N2 = J2;
  var H = y3.sqr().add(S2.sqr()), z2 = I2.sqr().add(N2.sqr());
  return z2.cmp(H) >= 0 && (I2 = m3, N2 = w3), y3.negative && (y3 = y3.neg(), S2 = S2.neg()), I2.negative && (I2 = I2.neg(), N2 = N2.neg()), [{ a: y3, b: S2 }, { a: I2, b: N2 }];
}, Zt$1.prototype._endoSplit = function(t) {
  var r2 = this.endo.basis, i3 = r2[0], n4 = r2[1], o3 = n4.b.mul(t).divRound(this.n), h4 = i3.b.neg().mul(t).divRound(this.n), p3 = o3.mul(i3.a), b3 = h4.mul(n4.a), m3 = o3.mul(i3.b), w3 = h4.mul(n4.b), y3 = t.sub(p3).sub(b3), S2 = m3.add(w3).neg();
  return { k1: y3, k2: S2 };
}, Zt$1.prototype.pointFromX = function(t, r2) {
  t = new K$1(t, 16), t.red || (t = t.toRed(this.red));
  var i3 = t.redSqr().redMul(t).redIAdd(t.redMul(this.a)).redIAdd(this.b), n4 = i3.redSqrt();
  if (n4.redSqr().redSub(i3).cmp(this.zero) !== 0)
    throw new Error("invalid point");
  var o3 = n4.fromRed().isOdd();
  return (r2 && !o3 || !r2 && o3) && (n4 = n4.redNeg()), this.point(t, n4);
}, Zt$1.prototype.validate = function(t) {
  if (t.inf)
    return true;
  var r2 = t.x, i3 = t.y, n4 = this.a.redMul(r2), o3 = r2.redSqr().redMul(r2).redIAdd(n4).redIAdd(this.b);
  return i3.redSqr().redISub(o3).cmpn(0) === 0;
}, Zt$1.prototype._endoWnafMulAdd = function(t, r2, i3) {
  for (var n4 = this._endoWnafT1, o3 = this._endoWnafT2, h4 = 0; h4 < t.length; h4++) {
    var p3 = this._endoSplit(r2[h4]), b3 = t[h4], m3 = b3._getBeta();
    p3.k1.negative && (p3.k1.ineg(), b3 = b3.neg(true)), p3.k2.negative && (p3.k2.ineg(), m3 = m3.neg(true)), n4[h4 * 2] = b3, n4[h4 * 2 + 1] = m3, o3[h4 * 2] = p3.k1, o3[h4 * 2 + 1] = p3.k2;
  }
  for (var w3 = this._wnafMulAdd(1, n4, o3, h4 * 2, i3), y3 = 0; y3 < h4 * 2; y3++)
    n4[y3] = null, o3[y3] = null;
  return w3;
};
function Ft$1(e2, t, r2, i3) {
  Ze$2.BasePoint.call(this, e2, "affine"), t === null && r2 === null ? (this.x = null, this.y = null, this.inf = true) : (this.x = new K$1(t, 16), this.y = new K$1(r2, 16), i3 && (this.x.forceRed(this.curve.red), this.y.forceRed(this.curve.red)), this.x.red || (this.x = this.x.toRed(this.curve.red)), this.y.red || (this.y = this.y.toRed(this.curve.red)), this.inf = false);
}
Di(Ft$1, Ze$2.BasePoint), Zt$1.prototype.point = function(t, r2, i3) {
  return new Ft$1(this, t, r2, i3);
}, Zt$1.prototype.pointFromJSON = function(t, r2) {
  return Ft$1.fromJSON(this, t, r2);
}, Ft$1.prototype._getBeta = function() {
  if (this.curve.endo) {
    var t = this.precomputed;
    if (t && t.beta)
      return t.beta;
    var r2 = this.curve.point(this.x.redMul(this.curve.endo.beta), this.y);
    if (t) {
      var i3 = this.curve, n4 = function(o3) {
        return i3.point(o3.x.redMul(i3.endo.beta), o3.y);
      };
      t.beta = r2, r2.precomputed = { beta: null, naf: t.naf && { wnd: t.naf.wnd, points: t.naf.points.map(n4) }, doubles: t.doubles && { step: t.doubles.step, points: t.doubles.points.map(n4) } };
    }
    return r2;
  }
}, Ft$1.prototype.toJSON = function() {
  return this.precomputed ? [this.x, this.y, this.precomputed && { doubles: this.precomputed.doubles && { step: this.precomputed.doubles.step, points: this.precomputed.doubles.points.slice(1) }, naf: this.precomputed.naf && { wnd: this.precomputed.naf.wnd, points: this.precomputed.naf.points.slice(1) } }] : [this.x, this.y];
}, Ft$1.fromJSON = function(t, r2, i3) {
  typeof r2 == "string" && (r2 = JSON.parse(r2));
  var n4 = t.point(r2[0], r2[1], i3);
  if (!r2[2])
    return n4;
  function o3(p3) {
    return t.point(p3[0], p3[1], i3);
  }
  var h4 = r2[2];
  return n4.precomputed = { beta: null, doubles: h4.doubles && { step: h4.doubles.step, points: [n4].concat(h4.doubles.points.map(o3)) }, naf: h4.naf && { wnd: h4.naf.wnd, points: [n4].concat(h4.naf.points.map(o3)) } }, n4;
}, Ft$1.prototype.inspect = function() {
  return this.isInfinity() ? "<EC Point Infinity>" : "<EC Point x: " + this.x.fromRed().toString(16, 2) + " y: " + this.y.fromRed().toString(16, 2) + ">";
}, Ft$1.prototype.isInfinity = function() {
  return this.inf;
}, Ft$1.prototype.add = function(t) {
  if (this.inf)
    return t;
  if (t.inf)
    return this;
  if (this.eq(t))
    return this.dbl();
  if (this.neg().eq(t))
    return this.curve.point(null, null);
  if (this.x.cmp(t.x) === 0)
    return this.curve.point(null, null);
  var r2 = this.y.redSub(t.y);
  r2.cmpn(0) !== 0 && (r2 = r2.redMul(this.x.redSub(t.x).redInvm()));
  var i3 = r2.redSqr().redISub(this.x).redISub(t.x), n4 = r2.redMul(this.x.redSub(i3)).redISub(this.y);
  return this.curve.point(i3, n4);
}, Ft$1.prototype.dbl = function() {
  if (this.inf)
    return this;
  var t = this.y.redAdd(this.y);
  if (t.cmpn(0) === 0)
    return this.curve.point(null, null);
  var r2 = this.curve.a, i3 = this.x.redSqr(), n4 = t.redInvm(), o3 = i3.redAdd(i3).redIAdd(i3).redIAdd(r2).redMul(n4), h4 = o3.redSqr().redISub(this.x.redAdd(this.x)), p3 = o3.redMul(this.x.redSub(h4)).redISub(this.y);
  return this.curve.point(h4, p3);
}, Ft$1.prototype.getX = function() {
  return this.x.fromRed();
}, Ft$1.prototype.getY = function() {
  return this.y.fromRed();
}, Ft$1.prototype.mul = function(t) {
  return t = new K$1(t, 16), this.isInfinity() ? this : this._hasDoubles(t) ? this.curve._fixedNafMul(this, t) : this.curve.endo ? this.curve._endoWnafMulAdd([this], [t]) : this.curve._wnafMul(this, t);
}, Ft$1.prototype.mulAdd = function(t, r2, i3) {
  var n4 = [this, r2], o3 = [t, i3];
  return this.curve.endo ? this.curve._endoWnafMulAdd(n4, o3) : this.curve._wnafMulAdd(1, n4, o3, 2);
}, Ft$1.prototype.jmulAdd = function(t, r2, i3) {
  var n4 = [this, r2], o3 = [t, i3];
  return this.curve.endo ? this.curve._endoWnafMulAdd(n4, o3, true) : this.curve._wnafMulAdd(1, n4, o3, 2, true);
}, Ft$1.prototype.eq = function(t) {
  return this === t || this.inf === t.inf && (this.inf || this.x.cmp(t.x) === 0 && this.y.cmp(t.y) === 0);
}, Ft$1.prototype.neg = function(t) {
  if (this.inf)
    return this;
  var r2 = this.curve.point(this.x, this.y.redNeg());
  if (t && this.precomputed) {
    var i3 = this.precomputed, n4 = function(o3) {
      return o3.neg();
    };
    r2.precomputed = { naf: i3.naf && { wnd: i3.naf.wnd, points: i3.naf.points.map(n4) }, doubles: i3.doubles && { step: i3.doubles.step, points: i3.doubles.points.map(n4) } };
  }
  return r2;
}, Ft$1.prototype.toJ = function() {
  if (this.inf)
    return this.curve.jpoint(null, null, null);
  var t = this.curve.jpoint(this.x, this.y, this.curve.one);
  return t;
};
function Tt$1(e2, t, r2, i3) {
  Ze$2.BasePoint.call(this, e2, "jacobian"), t === null && r2 === null && i3 === null ? (this.x = this.curve.one, this.y = this.curve.one, this.z = new K$1(0)) : (this.x = new K$1(t, 16), this.y = new K$1(r2, 16), this.z = new K$1(i3, 16)), this.x.red || (this.x = this.x.toRed(this.curve.red)), this.y.red || (this.y = this.y.toRed(this.curve.red)), this.z.red || (this.z = this.z.toRed(this.curve.red)), this.zOne = this.z === this.curve.one;
}
Di(Tt$1, Ze$2.BasePoint), Zt$1.prototype.jpoint = function(t, r2, i3) {
  return new Tt$1(this, t, r2, i3);
}, Tt$1.prototype.toP = function() {
  if (this.isInfinity())
    return this.curve.point(null, null);
  var t = this.z.redInvm(), r2 = t.redSqr(), i3 = this.x.redMul(r2), n4 = this.y.redMul(r2).redMul(t);
  return this.curve.point(i3, n4);
}, Tt$1.prototype.neg = function() {
  return this.curve.jpoint(this.x, this.y.redNeg(), this.z);
}, Tt$1.prototype.add = function(t) {
  if (this.isInfinity())
    return t;
  if (t.isInfinity())
    return this;
  var r2 = t.z.redSqr(), i3 = this.z.redSqr(), n4 = this.x.redMul(r2), o3 = t.x.redMul(i3), h4 = this.y.redMul(r2.redMul(t.z)), p3 = t.y.redMul(i3.redMul(this.z)), b3 = n4.redSub(o3), m3 = h4.redSub(p3);
  if (b3.cmpn(0) === 0)
    return m3.cmpn(0) !== 0 ? this.curve.jpoint(null, null, null) : this.dbl();
  var w3 = b3.redSqr(), y3 = w3.redMul(b3), S2 = n4.redMul(w3), I2 = m3.redSqr().redIAdd(y3).redISub(S2).redISub(S2), N2 = m3.redMul(S2.redISub(I2)).redISub(h4.redMul(y3)), C2 = this.z.redMul(t.z).redMul(b3);
  return this.curve.jpoint(I2, N2, C2);
}, Tt$1.prototype.mixedAdd = function(t) {
  if (this.isInfinity())
    return t.toJ();
  if (t.isInfinity())
    return this;
  var r2 = this.z.redSqr(), i3 = this.x, n4 = t.x.redMul(r2), o3 = this.y, h4 = t.y.redMul(r2).redMul(this.z), p3 = i3.redSub(n4), b3 = o3.redSub(h4);
  if (p3.cmpn(0) === 0)
    return b3.cmpn(0) !== 0 ? this.curve.jpoint(null, null, null) : this.dbl();
  var m3 = p3.redSqr(), w3 = m3.redMul(p3), y3 = i3.redMul(m3), S2 = b3.redSqr().redIAdd(w3).redISub(y3).redISub(y3), I2 = b3.redMul(y3.redISub(S2)).redISub(o3.redMul(w3)), N2 = this.z.redMul(p3);
  return this.curve.jpoint(S2, I2, N2);
}, Tt$1.prototype.dblp = function(t) {
  if (t === 0)
    return this;
  if (this.isInfinity())
    return this;
  if (!t)
    return this.dbl();
  var r2;
  if (this.curve.zeroA || this.curve.threeA) {
    var i3 = this;
    for (r2 = 0; r2 < t; r2++)
      i3 = i3.dbl();
    return i3;
  }
  var n4 = this.curve.a, o3 = this.curve.tinv, h4 = this.x, p3 = this.y, b3 = this.z, m3 = b3.redSqr().redSqr(), w3 = p3.redAdd(p3);
  for (r2 = 0; r2 < t; r2++) {
    var y3 = h4.redSqr(), S2 = w3.redSqr(), I2 = S2.redSqr(), N2 = y3.redAdd(y3).redIAdd(y3).redIAdd(n4.redMul(m3)), C2 = h4.redMul(S2), F = N2.redSqr().redISub(C2.redAdd(C2)), U2 = C2.redISub(F), J2 = N2.redMul(U2);
    J2 = J2.redIAdd(J2).redISub(I2);
    var Bt2 = w3.redMul(b3);
    r2 + 1 < t && (m3 = m3.redMul(I2)), h4 = F, b3 = Bt2, w3 = J2;
  }
  return this.curve.jpoint(h4, w3.redMul(o3), b3);
}, Tt$1.prototype.dbl = function() {
  return this.isInfinity() ? this : this.curve.zeroA ? this._zeroDbl() : this.curve.threeA ? this._threeDbl() : this._dbl();
}, Tt$1.prototype._zeroDbl = function() {
  var t, r2, i3;
  if (this.zOne) {
    var n4 = this.x.redSqr(), o3 = this.y.redSqr(), h4 = o3.redSqr(), p3 = this.x.redAdd(o3).redSqr().redISub(n4).redISub(h4);
    p3 = p3.redIAdd(p3);
    var b3 = n4.redAdd(n4).redIAdd(n4), m3 = b3.redSqr().redISub(p3).redISub(p3), w3 = h4.redIAdd(h4);
    w3 = w3.redIAdd(w3), w3 = w3.redIAdd(w3), t = m3, r2 = b3.redMul(p3.redISub(m3)).redISub(w3), i3 = this.y.redAdd(this.y);
  } else {
    var y3 = this.x.redSqr(), S2 = this.y.redSqr(), I2 = S2.redSqr(), N2 = this.x.redAdd(S2).redSqr().redISub(y3).redISub(I2);
    N2 = N2.redIAdd(N2);
    var C2 = y3.redAdd(y3).redIAdd(y3), F = C2.redSqr(), U2 = I2.redIAdd(I2);
    U2 = U2.redIAdd(U2), U2 = U2.redIAdd(U2), t = F.redISub(N2).redISub(N2), r2 = C2.redMul(N2.redISub(t)).redISub(U2), i3 = this.y.redMul(this.z), i3 = i3.redIAdd(i3);
  }
  return this.curve.jpoint(t, r2, i3);
}, Tt$1.prototype._threeDbl = function() {
  var t, r2, i3;
  if (this.zOne) {
    var n4 = this.x.redSqr(), o3 = this.y.redSqr(), h4 = o3.redSqr(), p3 = this.x.redAdd(o3).redSqr().redISub(n4).redISub(h4);
    p3 = p3.redIAdd(p3);
    var b3 = n4.redAdd(n4).redIAdd(n4).redIAdd(this.curve.a), m3 = b3.redSqr().redISub(p3).redISub(p3);
    t = m3;
    var w3 = h4.redIAdd(h4);
    w3 = w3.redIAdd(w3), w3 = w3.redIAdd(w3), r2 = b3.redMul(p3.redISub(m3)).redISub(w3), i3 = this.y.redAdd(this.y);
  } else {
    var y3 = this.z.redSqr(), S2 = this.y.redSqr(), I2 = this.x.redMul(S2), N2 = this.x.redSub(y3).redMul(this.x.redAdd(y3));
    N2 = N2.redAdd(N2).redIAdd(N2);
    var C2 = I2.redIAdd(I2);
    C2 = C2.redIAdd(C2);
    var F = C2.redAdd(C2);
    t = N2.redSqr().redISub(F), i3 = this.y.redAdd(this.z).redSqr().redISub(S2).redISub(y3);
    var U2 = S2.redSqr();
    U2 = U2.redIAdd(U2), U2 = U2.redIAdd(U2), U2 = U2.redIAdd(U2), r2 = N2.redMul(C2.redISub(t)).redISub(U2);
  }
  return this.curve.jpoint(t, r2, i3);
}, Tt$1.prototype._dbl = function() {
  var t = this.curve.a, r2 = this.x, i3 = this.y, n4 = this.z, o3 = n4.redSqr().redSqr(), h4 = r2.redSqr(), p3 = i3.redSqr(), b3 = h4.redAdd(h4).redIAdd(h4).redIAdd(t.redMul(o3)), m3 = r2.redAdd(r2);
  m3 = m3.redIAdd(m3);
  var w3 = m3.redMul(p3), y3 = b3.redSqr().redISub(w3.redAdd(w3)), S2 = w3.redISub(y3), I2 = p3.redSqr();
  I2 = I2.redIAdd(I2), I2 = I2.redIAdd(I2), I2 = I2.redIAdd(I2);
  var N2 = b3.redMul(S2).redISub(I2), C2 = i3.redAdd(i3).redMul(n4);
  return this.curve.jpoint(y3, N2, C2);
}, Tt$1.prototype.trpl = function() {
  if (!this.curve.zeroA)
    return this.dbl().add(this);
  var t = this.x.redSqr(), r2 = this.y.redSqr(), i3 = this.z.redSqr(), n4 = r2.redSqr(), o3 = t.redAdd(t).redIAdd(t), h4 = o3.redSqr(), p3 = this.x.redAdd(r2).redSqr().redISub(t).redISub(n4);
  p3 = p3.redIAdd(p3), p3 = p3.redAdd(p3).redIAdd(p3), p3 = p3.redISub(h4);
  var b3 = p3.redSqr(), m3 = n4.redIAdd(n4);
  m3 = m3.redIAdd(m3), m3 = m3.redIAdd(m3), m3 = m3.redIAdd(m3);
  var w3 = o3.redIAdd(p3).redSqr().redISub(h4).redISub(b3).redISub(m3), y3 = r2.redMul(w3);
  y3 = y3.redIAdd(y3), y3 = y3.redIAdd(y3);
  var S2 = this.x.redMul(b3).redISub(y3);
  S2 = S2.redIAdd(S2), S2 = S2.redIAdd(S2);
  var I2 = this.y.redMul(w3.redMul(m3.redISub(w3)).redISub(p3.redMul(b3)));
  I2 = I2.redIAdd(I2), I2 = I2.redIAdd(I2), I2 = I2.redIAdd(I2);
  var N2 = this.z.redAdd(p3).redSqr().redISub(i3).redISub(b3);
  return this.curve.jpoint(S2, I2, N2);
}, Tt$1.prototype.mul = function(t, r2) {
  return t = new K$1(t, r2), this.curve._wnafMul(this, t);
}, Tt$1.prototype.eq = function(t) {
  if (t.type === "affine")
    return this.eq(t.toJ());
  if (this === t)
    return true;
  var r2 = this.z.redSqr(), i3 = t.z.redSqr();
  if (this.x.redMul(i3).redISub(t.x.redMul(r2)).cmpn(0) !== 0)
    return false;
  var n4 = r2.redMul(this.z), o3 = i3.redMul(t.z);
  return this.y.redMul(o3).redISub(t.y.redMul(n4)).cmpn(0) === 0;
}, Tt$1.prototype.eqXToP = function(t) {
  var r2 = this.z.redSqr(), i3 = t.toRed(this.curve.red).redMul(r2);
  if (this.x.cmp(i3) === 0)
    return true;
  for (var n4 = t.clone(), o3 = this.curve.redN.redMul(r2); ; ) {
    if (n4.iadd(this.curve.n), n4.cmp(this.curve.p) >= 0)
      return false;
    if (i3.redIAdd(o3), this.x.cmp(i3) === 0)
      return true;
  }
}, Tt$1.prototype.inspect = function() {
  return this.isInfinity() ? "<EC JPoint Infinity>" : "<EC JPoint x: " + this.x.toString(16, 2) + " y: " + this.y.toString(16, 2) + " z: " + this.z.toString(16, 2) + ">";
}, Tt$1.prototype.isInfinity = function() {
  return this.z.cmpn(0) === 0;
};
var qr = cr$2(function(e2, t) {
  var r2 = t;
  r2.base = Ze$2, r2.short = ka, r2.mont = null, r2.edwards = null;
}), Kr = cr$2(function(e2, t) {
  var r2 = t, i3 = Jt$2.assert;
  function n4(p3) {
    p3.type === "short" ? this.curve = new qr.short(p3) : p3.type === "edwards" ? this.curve = new qr.edwards(p3) : this.curve = new qr.mont(p3), this.g = this.curve.g, this.n = this.curve.n, this.hash = p3.hash, i3(this.g.validate(), "Invalid curve"), i3(this.g.mul(this.n).isInfinity(), "Invalid curve, G*N != O");
  }
  r2.PresetCurve = n4;
  function o3(p3, b3) {
    Object.defineProperty(r2, p3, { configurable: true, enumerable: true, get: function() {
      var m3 = new n4(b3);
      return Object.defineProperty(r2, p3, { configurable: true, enumerable: true, value: m3 }), m3;
    } });
  }
  o3("p192", { type: "short", prime: "p192", p: "ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff", a: "ffffffff ffffffff ffffffff fffffffe ffffffff fffffffc", b: "64210519 e59c80e7 0fa7e9ab 72243049 feb8deec c146b9b1", n: "ffffffff ffffffff ffffffff 99def836 146bc9b1 b4d22831", hash: se.sha256, gRed: false, g: ["188da80e b03090f6 7cbf20eb 43a18800 f4ff0afd 82ff1012", "07192b95 ffc8da78 631011ed 6b24cdd5 73f977a1 1e794811"] }), o3("p224", { type: "short", prime: "p224", p: "ffffffff ffffffff ffffffff ffffffff 00000000 00000000 00000001", a: "ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff fffffffe", b: "b4050a85 0c04b3ab f5413256 5044b0b7 d7bfd8ba 270b3943 2355ffb4", n: "ffffffff ffffffff ffffffff ffff16a2 e0b8f03e 13dd2945 5c5c2a3d", hash: se.sha256, gRed: false, g: ["b70e0cbd 6bb4bf7f 321390b9 4a03c1d3 56c21122 343280d6 115c1d21", "bd376388 b5f723fb 4c22dfe6 cd4375a0 5a074764 44d58199 85007e34"] }), o3("p256", { type: "short", prime: null, p: "ffffffff 00000001 00000000 00000000 00000000 ffffffff ffffffff ffffffff", a: "ffffffff 00000001 00000000 00000000 00000000 ffffffff ffffffff fffffffc", b: "5ac635d8 aa3a93e7 b3ebbd55 769886bc 651d06b0 cc53b0f6 3bce3c3e 27d2604b", n: "ffffffff 00000000 ffffffff ffffffff bce6faad a7179e84 f3b9cac2 fc632551", hash: se.sha256, gRed: false, g: ["6b17d1f2 e12c4247 f8bce6e5 63a440f2 77037d81 2deb33a0 f4a13945 d898c296", "4fe342e2 fe1a7f9b 8ee7eb4a 7c0f9e16 2bce3357 6b315ece cbb64068 37bf51f5"] }), o3("p384", { type: "short", prime: null, p: "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe ffffffff 00000000 00000000 ffffffff", a: "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe ffffffff 00000000 00000000 fffffffc", b: "b3312fa7 e23ee7e4 988e056b e3f82d19 181d9c6e fe814112 0314088f 5013875a c656398d 8a2ed19d 2a85c8ed d3ec2aef", n: "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff c7634d81 f4372ddf 581a0db2 48b0a77a ecec196a ccc52973", hash: se.sha384, gRed: false, g: ["aa87ca22 be8b0537 8eb1c71e f320ad74 6e1d3b62 8ba79b98 59f741e0 82542a38 5502f25d bf55296c 3a545e38 72760ab7", "3617de4a 96262c6f 5d9e98bf 9292dc29 f8f41dbd 289a147c e9da3113 b5f0b8c0 0a60b1ce 1d7e819d 7a431d7c 90ea0e5f"] }), o3("p521", { type: "short", prime: null, p: "000001ff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff", a: "000001ff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffc", b: "00000051 953eb961 8e1c9a1f 929a21a0 b68540ee a2da725b 99b315f3 b8b48991 8ef109e1 56193951 ec7e937b 1652c0bd 3bb1bf07 3573df88 3d2c34f1 ef451fd4 6b503f00", n: "000001ff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffa 51868783 bf2f966b 7fcc0148 f709a5d0 3bb5c9b8 899c47ae bb6fb71e 91386409", hash: se.sha512, gRed: false, g: ["000000c6 858e06b7 0404e9cd 9e3ecb66 2395b442 9c648139 053fb521 f828af60 6b4d3dba a14b5e77 efe75928 fe1dc127 a2ffa8de 3348b3c1 856a429b f97e7e31 c2e5bd66", "00000118 39296a78 9a3bc004 5c8a5fb4 2c7d1bd9 98f54449 579b4468 17afbd17 273e662c 97ee7299 5ef42640 c550b901 3fad0761 353c7086 a272c240 88be9476 9fd16650"] }), o3("curve25519", { type: "mont", prime: "p25519", p: "7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed", a: "76d06", b: "1", n: "1000000000000000 0000000000000000 14def9dea2f79cd6 5812631a5cf5d3ed", hash: se.sha256, gRed: false, g: ["9"] }), o3("ed25519", { type: "edwards", prime: "p25519", p: "7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed", a: "-1", c: "1", d: "52036cee2b6ffe73 8cc740797779e898 00700a4d4141d8ab 75eb4dca135978a3", n: "1000000000000000 0000000000000000 14def9dea2f79cd6 5812631a5cf5d3ed", hash: se.sha256, gRed: false, g: ["216936d3cd6e53fec0a4e231fdd6dc5c692cc7609525a7b2c9562d608f25d51a", "6666666666666666666666666666666666666666666666666666666666666658"] });
  var h4;
  try {
    h4 = null.crash();
  } catch {
    h4 = void 0;
  }
  o3("secp256k1", { type: "short", prime: "k256", p: "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe fffffc2f", a: "0", b: "7", n: "ffffffff ffffffff ffffffff fffffffe baaedce6 af48a03b bfd25e8c d0364141", h: "1", hash: se.sha256, beta: "7ae96a2b657c07106e64479eac3434e99cf0497512f58995c1396c28719501ee", lambda: "5363ad4cc05c30e0a5261c028812645a122e22ea20816678df02967c1b23bd72", basis: [{ a: "3086d221a7d46bcde86c90e49284eb15", b: "-e4437ed6010e88286f547fa90abfe4c3" }, { a: "114ca50f7a8e2f3f657c1108d9d44cfd8", b: "3086d221a7d46bcde86c90e49284eb15" }], gRed: false, g: ["79be667ef9dcbbac55a06295ce870b07029bfcdb2dce28d959f2815b16f81798", "483ada7726a3c4655da4fbfc0e1108a8fd17b448a68554199c47d08ffb10d4b8", h4] });
});
function Re$1(e2) {
  if (!(this instanceof Re$1))
    return new Re$1(e2);
  this.hash = e2.hash, this.predResist = !!e2.predResist, this.outLen = this.hash.outSize, this.minEntropy = e2.minEntropy || this.hash.hmacStrength, this._reseed = null, this.reseedInterval = null, this.K = null, this.V = null;
  var t = fe$1.toArray(e2.entropy, e2.entropyEnc || "hex"), r2 = fe$1.toArray(e2.nonce, e2.nonceEnc || "hex"), i3 = fe$1.toArray(e2.pers, e2.persEnc || "hex");
  Pi(t.length >= this.minEntropy / 8, "Not enough entropy. Minimum is: " + this.minEntropy + " bits"), this._init(t, r2, i3);
}
var Rf = Re$1;
Re$1.prototype._init = function(t, r2, i3) {
  var n4 = t.concat(r2).concat(i3);
  this.K = new Array(this.outLen / 8), this.V = new Array(this.outLen / 8);
  for (var o3 = 0; o3 < this.V.length; o3++)
    this.K[o3] = 0, this.V[o3] = 1;
  this._update(n4), this._reseed = 1, this.reseedInterval = 281474976710656;
}, Re$1.prototype._hmac = function() {
  return new se.hmac(this.hash, this.K);
}, Re$1.prototype._update = function(t) {
  var r2 = this._hmac().update(this.V).update([0]);
  t && (r2 = r2.update(t)), this.K = r2.digest(), this.V = this._hmac().update(this.V).digest(), t && (this.K = this._hmac().update(this.V).update([1]).update(t).digest(), this.V = this._hmac().update(this.V).digest());
}, Re$1.prototype.reseed = function(t, r2, i3, n4) {
  typeof r2 != "string" && (n4 = i3, i3 = r2, r2 = null), t = fe$1.toArray(t, r2), i3 = fe$1.toArray(i3, n4), Pi(t.length >= this.minEntropy / 8, "Not enough entropy. Minimum is: " + this.minEntropy + " bits"), this._update(t.concat(i3 || [])), this._reseed = 1;
}, Re$1.prototype.generate = function(t, r2, i3, n4) {
  if (this._reseed > this.reseedInterval)
    throw new Error("Reseed is required");
  typeof r2 != "string" && (n4 = i3, i3 = r2, r2 = null), i3 && (i3 = fe$1.toArray(i3, n4 || "hex"), this._update(i3));
  for (var o3 = []; o3.length < t; )
    this.V = this._hmac().update(this.V).digest(), o3 = o3.concat(this.V);
  var h4 = o3.slice(0, t);
  return this._update(i3), this._reseed++, fe$1.encode(h4, r2);
};
var Fi$1 = Jt$2.assert;
function kt$1(e2, t) {
  this.ec = e2, this.priv = null, this.pub = null, t.priv && this._importPrivate(t.priv, t.privEnc), t.pub && this._importPublic(t.pub, t.pubEnc);
}
var Ti = kt$1;
kt$1.fromPublic = function(t, r2, i3) {
  return r2 instanceof kt$1 ? r2 : new kt$1(t, { pub: r2, pubEnc: i3 });
}, kt$1.fromPrivate = function(t, r2, i3) {
  return r2 instanceof kt$1 ? r2 : new kt$1(t, { priv: r2, privEnc: i3 });
}, kt$1.prototype.validate = function() {
  var t = this.getPublic();
  return t.isInfinity() ? { result: false, reason: "Invalid public key" } : t.validate() ? t.mul(this.ec.curve.n).isInfinity() ? { result: true, reason: null } : { result: false, reason: "Public key * N != O" } : { result: false, reason: "Public key is not a point" };
}, kt$1.prototype.getPublic = function(t, r2) {
  return typeof t == "string" && (r2 = t, t = null), this.pub || (this.pub = this.ec.g.mul(this.priv)), r2 ? this.pub.encode(r2, t) : this.pub;
}, kt$1.prototype.getPrivate = function(t) {
  return t === "hex" ? this.priv.toString(16, 2) : this.priv;
}, kt$1.prototype._importPrivate = function(t, r2) {
  this.priv = new K$1(t, r2 || 16), this.priv = this.priv.umod(this.ec.curve.n);
}, kt$1.prototype._importPublic = function(t, r2) {
  if (t.x || t.y) {
    this.ec.curve.type === "mont" ? Fi$1(t.x, "Need x coordinate") : (this.ec.curve.type === "short" || this.ec.curve.type === "edwards") && Fi$1(t.x && t.y, "Need both x and y coordinate"), this.pub = this.ec.curve.point(t.x, t.y);
    return;
  }
  this.pub = this.ec.curve.decodePoint(t, r2);
}, kt$1.prototype.derive = function(t) {
  return t.validate() || Fi$1(t.validate(), "public point not validated"), t.mul(this.priv).getX();
}, kt$1.prototype.sign = function(t, r2, i3) {
  return this.ec.sign(t, this, r2, i3);
}, kt$1.prototype.verify = function(t, r2) {
  return this.ec.verify(t, r2, this);
}, kt$1.prototype.inspect = function() {
  return "<Key priv: " + (this.priv && this.priv.toString(16, 2)) + " pub: " + (this.pub && this.pub.inspect()) + " >";
};
var qa = Jt$2.assert;
function Hr(e2, t) {
  if (e2 instanceof Hr)
    return e2;
  this._importDER(e2, t) || (qa(e2.r && e2.s, "Signature without r or s"), this.r = new K$1(e2.r, 16), this.s = new K$1(e2.s, 16), e2.recoveryParam === void 0 ? this.recoveryParam = null : this.recoveryParam = e2.recoveryParam);
}
var zr$1 = Hr;
function Ka() {
  this.place = 0;
}
function Ui$1(e2, t) {
  var r2 = e2[t.place++];
  if (!(r2 & 128))
    return r2;
  var i3 = r2 & 15;
  if (i3 === 0 || i3 > 4)
    return false;
  for (var n4 = 0, o3 = 0, h4 = t.place; o3 < i3; o3++, h4++)
    n4 <<= 8, n4 |= e2[h4], n4 >>>= 0;
  return n4 <= 127 ? false : (t.place = h4, n4);
}
function Of(e2) {
  for (var t = 0, r2 = e2.length - 1; !e2[t] && !(e2[t + 1] & 128) && t < r2; )
    t++;
  return t === 0 ? e2 : e2.slice(t);
}
Hr.prototype._importDER = function(t, r2) {
  t = Jt$2.toArray(t, r2);
  var i3 = new Ka();
  if (t[i3.place++] !== 48)
    return false;
  var n4 = Ui$1(t, i3);
  if (n4 === false || n4 + i3.place !== t.length || t[i3.place++] !== 2)
    return false;
  var o3 = Ui$1(t, i3);
  if (o3 === false)
    return false;
  var h4 = t.slice(i3.place, o3 + i3.place);
  if (i3.place += o3, t[i3.place++] !== 2)
    return false;
  var p3 = Ui$1(t, i3);
  if (p3 === false || t.length !== p3 + i3.place)
    return false;
  var b3 = t.slice(i3.place, p3 + i3.place);
  if (h4[0] === 0)
    if (h4[1] & 128)
      h4 = h4.slice(1);
    else
      return false;
  if (b3[0] === 0)
    if (b3[1] & 128)
      b3 = b3.slice(1);
    else
      return false;
  return this.r = new K$1(h4), this.s = new K$1(b3), this.recoveryParam = null, true;
};
function ki(e2, t) {
  if (t < 128) {
    e2.push(t);
    return;
  }
  var r2 = 1 + (Math.log(t) / Math.LN2 >>> 3);
  for (e2.push(r2 | 128); --r2; )
    e2.push(t >>> (r2 << 3) & 255);
  e2.push(t);
}
Hr.prototype.toDER = function(t) {
  var r2 = this.r.toArray(), i3 = this.s.toArray();
  for (r2[0] & 128 && (r2 = [0].concat(r2)), i3[0] & 128 && (i3 = [0].concat(i3)), r2 = Of(r2), i3 = Of(i3); !i3[0] && !(i3[1] & 128); )
    i3 = i3.slice(1);
  var n4 = [2];
  ki(n4, r2.length), n4 = n4.concat(r2), n4.push(2), ki(n4, i3.length);
  var o3 = n4.concat(i3), h4 = [48];
  return ki(h4, o3.length), h4 = h4.concat(o3), Jt$2.encode(h4, t);
};
var Ha = function() {
  throw new Error("unsupported");
}, Pf = Jt$2.assert;
function $t$1(e2) {
  if (!(this instanceof $t$1))
    return new $t$1(e2);
  typeof e2 == "string" && (Pf(Object.prototype.hasOwnProperty.call(Kr, e2), "Unknown curve " + e2), e2 = Kr[e2]), e2 instanceof Kr.PresetCurve && (e2 = { curve: e2 }), this.curve = e2.curve.curve, this.n = this.curve.n, this.nh = this.n.ushrn(1), this.g = this.curve.g, this.g = e2.curve.g, this.g.precompute(e2.curve.n.bitLength() + 1), this.hash = e2.hash || e2.curve.hash;
}
var za = $t$1;
$t$1.prototype.keyPair = function(t) {
  return new Ti(this, t);
}, $t$1.prototype.keyFromPrivate = function(t, r2) {
  return Ti.fromPrivate(this, t, r2);
}, $t$1.prototype.keyFromPublic = function(t, r2) {
  return Ti.fromPublic(this, t, r2);
}, $t$1.prototype.genKeyPair = function(t) {
  t || (t = {});
  for (var r2 = new Rf({ hash: this.hash, pers: t.pers, persEnc: t.persEnc || "utf8", entropy: t.entropy || Ha(this.hash.hmacStrength), entropyEnc: t.entropy && t.entropyEnc || "utf8", nonce: this.n.toArray() }), i3 = this.n.byteLength(), n4 = this.n.sub(new K$1(2)); ; ) {
    var o3 = new K$1(r2.generate(i3));
    if (!(o3.cmp(n4) > 0))
      return o3.iaddn(1), this.keyFromPrivate(o3);
  }
}, $t$1.prototype._truncateToN = function(t, r2) {
  var i3 = t.byteLength() * 8 - this.n.bitLength();
  return i3 > 0 && (t = t.ushrn(i3)), !r2 && t.cmp(this.n) >= 0 ? t.sub(this.n) : t;
}, $t$1.prototype.sign = function(t, r2, i3, n4) {
  typeof i3 == "object" && (n4 = i3, i3 = null), n4 || (n4 = {}), r2 = this.keyFromPrivate(r2, i3), t = this._truncateToN(new K$1(t, 16));
  for (var o3 = this.n.byteLength(), h4 = r2.getPrivate().toArray("be", o3), p3 = t.toArray("be", o3), b3 = new Rf({ hash: this.hash, entropy: h4, nonce: p3, pers: n4.pers, persEnc: n4.persEnc || "utf8" }), m3 = this.n.sub(new K$1(1)), w3 = 0; ; w3++) {
    var y3 = n4.k ? n4.k(w3) : new K$1(b3.generate(this.n.byteLength()));
    if (y3 = this._truncateToN(y3, true), !(y3.cmpn(1) <= 0 || y3.cmp(m3) >= 0)) {
      var S2 = this.g.mul(y3);
      if (!S2.isInfinity()) {
        var I2 = S2.getX(), N2 = I2.umod(this.n);
        if (N2.cmpn(0) !== 0) {
          var C2 = y3.invm(this.n).mul(N2.mul(r2.getPrivate()).iadd(t));
          if (C2 = C2.umod(this.n), C2.cmpn(0) !== 0) {
            var F = (S2.getY().isOdd() ? 1 : 0) | (I2.cmp(N2) !== 0 ? 2 : 0);
            return n4.canonical && C2.cmp(this.nh) > 0 && (C2 = this.n.sub(C2), F ^= 1), new zr$1({ r: N2, s: C2, recoveryParam: F });
          }
        }
      }
    }
  }
}, $t$1.prototype.verify = function(t, r2, i3, n4) {
  t = this._truncateToN(new K$1(t, 16)), i3 = this.keyFromPublic(i3, n4), r2 = new zr$1(r2, "hex");
  var o3 = r2.r, h4 = r2.s;
  if (o3.cmpn(1) < 0 || o3.cmp(this.n) >= 0 || h4.cmpn(1) < 0 || h4.cmp(this.n) >= 0)
    return false;
  var p3 = h4.invm(this.n), b3 = p3.mul(t).umod(this.n), m3 = p3.mul(o3).umod(this.n), w3;
  return this.curve._maxwellTrick ? (w3 = this.g.jmulAdd(b3, i3.getPublic(), m3), w3.isInfinity() ? false : w3.eqXToP(o3)) : (w3 = this.g.mulAdd(b3, i3.getPublic(), m3), w3.isInfinity() ? false : w3.getX().umod(this.n).cmp(o3) === 0);
}, $t$1.prototype.recoverPubKey = function(e2, t, r2, i3) {
  Pf((3 & r2) === r2, "The recovery param is more than two bits"), t = new zr$1(t, i3);
  var n4 = this.n, o3 = new K$1(e2), h4 = t.r, p3 = t.s, b3 = r2 & 1, m3 = r2 >> 1;
  if (h4.cmp(this.curve.p.umod(this.curve.n)) >= 0 && m3)
    throw new Error("Unable to find sencond key candinate");
  m3 ? h4 = this.curve.pointFromX(h4.add(this.curve.n), b3) : h4 = this.curve.pointFromX(h4, b3);
  var w3 = t.r.invm(n4), y3 = n4.sub(o3).mul(w3).umod(n4), S2 = p3.mul(w3).umod(n4);
  return this.g.mulAdd(y3, h4, S2);
}, $t$1.prototype.getKeyRecoveryParam = function(e2, t, r2, i3) {
  if (t = new zr$1(t, i3), t.recoveryParam !== null)
    return t.recoveryParam;
  for (var n4 = 0; n4 < 4; n4++) {
    var o3;
    try {
      o3 = this.recoverPubKey(e2, t, n4);
    } catch {
      continue;
    }
    if (o3.eq(r2))
      return n4;
  }
  throw new Error("Unable to find valid recovery factor");
};
var La$1 = cr$2(function(e2, t) {
  var r2 = t;
  r2.version = "6.5.4", r2.utils = Jt$2, r2.rand = function() {
    throw new Error("unsupported");
  }, r2.curve = qr, r2.curves = Kr, r2.ec = za, r2.eddsa = null;
}), ja = La$1.ec;
const Qa = "signing-key/5.7.0", qi$1 = new L$4(Qa);
let Ki = null;
function ve() {
  return Ki || (Ki = new ja("secp256k1")), Ki;
}
class Ja {
  constructor(t) {
    br(this, "curve", "secp256k1"), br(this, "privateKey", Kt$1(t)), N0(this.privateKey) !== 32 && qi$1.throwArgumentError("invalid private key", "privateKey", "[[ REDACTED ]]");
    const r2 = ve().keyFromPrivate(Ot$1(this.privateKey));
    br(this, "publicKey", "0x" + r2.getPublic(false, "hex")), br(this, "compressedPublicKey", "0x" + r2.getPublic(true, "hex")), br(this, "_isSigningKey", true);
  }
  _addPoint(t) {
    const r2 = ve().keyFromPublic(Ot$1(this.publicKey)), i3 = ve().keyFromPublic(Ot$1(t));
    return "0x" + r2.pub.add(i3.pub).encodeCompressed("hex");
  }
  signDigest(t) {
    const r2 = ve().keyFromPrivate(Ot$1(this.privateKey)), i3 = Ot$1(t);
    i3.length !== 32 && qi$1.throwArgumentError("bad digest length", "digest", t);
    const n4 = r2.sign(i3, { canonical: true });
    return zn({ recoveryParam: n4.recoveryParam, r: oe$1("0x" + n4.r.toString(16), 32), s: oe$1("0x" + n4.s.toString(16), 32) });
  }
  computeSharedSecret(t) {
    const r2 = ve().keyFromPrivate(Ot$1(this.privateKey)), i3 = ve().keyFromPublic(Ot$1(Df(t)));
    return oe$1("0x" + r2.derive(i3.getPublic()).toString(16), 32);
  }
  static isSigningKey(t) {
    return !!(t && t._isSigningKey);
  }
}
function Ga(e2, t) {
  const r2 = zn(t), i3 = { r: Ot$1(r2.r), s: Ot$1(r2.s) };
  return "0x" + ve().recoverPubKey(Ot$1(e2), i3, r2.recoveryParam).encode("hex", false);
}
function Df(e2, t) {
  const r2 = Ot$1(e2);
  if (r2.length === 32) {
    const i3 = new Ja(r2);
    return i3.publicKey;
  } else {
    if (r2.length === 33)
      return "0x" + ve().keyFromPublic(r2).getPublic(false, "hex");
    if (r2.length === 65)
      return Kt$1(r2);
  }
  return qi$1.throwArgumentError("invalid public or private key", "key", "[REDACTED]");
}
var Ff;
(function(e2) {
  e2[e2.legacy = 0] = "legacy", e2[e2.eip2930 = 1] = "eip2930", e2[e2.eip1559 = 2] = "eip1559";
})(Ff || (Ff = {}));
function Va(e2) {
  const t = Df(e2);
  return ns$2(Hn(yi(Hn(t, 1)), 12));
}
function Wa(e2, t) {
  return Va(Ga(Ot$1(e2), t));
}
const Xa = "https://rpc.walletconnect.com/v1";
async function Tf(e2, t, r2, i3, n4, o3) {
  switch (r2.t) {
    case "eip191":
      return Uf(e2, t, r2.s);
    case "eip1271":
      return await kf(e2, t, r2.s, i3, n4, o3);
    default:
      throw new Error(`verifySignature failed: Attempted to verify CacaoSignature with unknown type: ${r2.t}`);
  }
}
function Uf(e2, t, r2) {
  return Wa(ff(t), r2).toLowerCase() === e2.toLowerCase();
}
async function kf(e2, t, r2, i3, n4, o3) {
  try {
    const h4 = "0x1626ba7e", p3 = "0000000000000000000000000000000000000000000000000000000000000040", b3 = "0000000000000000000000000000000000000000000000000000000000000041", m3 = r2.substring(2), w3 = ff(t).substring(2), y3 = h4 + w3 + p3 + b3 + m3, S2 = await fetch(`${o3 || Xa}/?chainId=${i3}&projectId=${n4}`, { method: "POST", body: JSON.stringify({ id: Za(), jsonrpc: "2.0", method: "eth_call", params: [{ to: e2, data: y3 }, "latest"] }) }), { result: I2 } = await S2.json();
    return I2 ? I2.slice(0, h4.length).toLowerCase() === h4.toLowerCase() : false;
  } catch (h4) {
    return console.error("isValidEip1271Signature: ", h4), false;
  }
}
function Za() {
  return Date.now() + Math.floor(Math.random() * 1e3);
}
var $a = Object.defineProperty, tu = Object.defineProperties, eu = Object.getOwnPropertyDescriptors, qf = Object.getOwnPropertySymbols, ru = Object.prototype.hasOwnProperty, iu = Object.prototype.propertyIsEnumerable, Kf = (e2, t, r2) => t in e2 ? $a(e2, t, { enumerable: true, configurable: true, writable: true, value: r2 }) : e2[t] = r2, Hi$1 = (e2, t) => {
  for (var r2 in t || (t = {}))
    ru.call(t, r2) && Kf(e2, r2, t[r2]);
  if (qf)
    for (var r2 of qf(t))
      iu.call(t, r2) && Kf(e2, r2, t[r2]);
  return e2;
}, Hf = (e2, t) => tu(e2, eu(t));
const nu = "did:pkh:", Lr$1 = (e2) => e2 == null ? void 0 : e2.split(":"), zi = (e2) => {
  const t = e2 && Lr$1(e2);
  if (t)
    return e2.includes(nu) ? t[3] : t[1];
}, fu = (e2) => {
  const t = e2 && Lr$1(e2);
  if (t)
    return t[2] + ":" + t[3];
}, Li = (e2) => {
  const t = e2 && Lr$1(e2);
  if (t)
    return t.pop();
};
async function ou(e2) {
  const { cacao: t, projectId: r2 } = e2, { s: i3, p: n4 } = t, o3 = zf(n4, n4.iss), h4 = Li(n4.iss);
  return await Tf(h4, o3, i3, zi(n4.iss), r2);
}
const zf = (e2, t) => {
  const r2 = `${e2.domain} wants you to sign in with your Ethereum account:`, i3 = Li(t);
  if (!e2.aud && !e2.uri)
    throw new Error("Either `aud` or `uri` is required to construct the message");
  let n4 = e2.statement || void 0;
  const o3 = `URI: ${e2.aud || e2.uri}`, h4 = `Version: ${e2.version}`, p3 = `Chain ID: ${zi(t)}`, b3 = `Nonce: ${e2.nonce}`, m3 = `Issued At: ${e2.iat}`, w3 = e2.resources ? `Resources:${e2.resources.map((S2) => `
- ${S2}`).join("")}` : void 0, y3 = Qr(e2.resources);
  if (y3) {
    const S2 = Oe(y3);
    n4 = Ji$1(n4, S2);
  }
  return [r2, i3, "", n4, "", o3, h4, p3, b3, m3, w3].filter((S2) => S2 != null).join(`
`);
};
function Jf(e2) {
  return Buffer.from(JSON.stringify(e2)).toString("base64");
}
function Gf(e2) {
  return JSON.parse(Buffer.from(e2, "base64").toString("utf-8"));
}
function me$1(e2) {
  if (!e2)
    throw new Error("No recap provided, value is undefined");
  if (!e2.att)
    throw new Error("No `att` property found");
  const t = Object.keys(e2.att);
  if (!(t != null && t.length))
    throw new Error("No resources found in `att` property");
  t.forEach((r2) => {
    const i3 = e2.att[r2];
    if (Array.isArray(i3))
      throw new Error(`Resource must be an object: ${r2}`);
    if (typeof i3 != "object")
      throw new Error(`Resource must be an object: ${r2}`);
    if (!Object.keys(i3).length)
      throw new Error(`Resource object is empty: ${r2}`);
    Object.keys(i3).forEach((n4) => {
      const o3 = i3[n4];
      if (!Array.isArray(o3))
        throw new Error(`Ability limits ${n4} must be an array of objects, found: ${o3}`);
      if (!o3.length)
        throw new Error(`Value of ${n4} is empty array, must be an array with objects`);
      o3.forEach((h4) => {
        if (typeof h4 != "object")
          throw new Error(`Ability limits (${n4}) must be an array of objects, found: ${h4}`);
      });
    });
  });
}
function Yf(e2, t, r2, i3 = {}) {
  return r2 == null ? void 0 : r2.sort((n4, o3) => n4.localeCompare(o3)), { att: { [e2]: ji(t, r2, i3) } };
}
function ji(e2, t, r2 = {}) {
  t = t == null ? void 0 : t.sort((n4, o3) => n4.localeCompare(o3));
  const i3 = t.map((n4) => ({ [`${e2}/${n4}`]: [r2] }));
  return Object.assign({}, ...i3);
}
function jr(e2) {
  return me$1(e2), `urn:recap:${Jf(e2).replace(/=/g, "")}`;
}
function Oe(e2) {
  const t = Gf(e2.replace("urn:recap:", ""));
  return me$1(t), t;
}
function cu(e2, t, r2) {
  const i3 = Yf(e2, t, r2);
  return jr(i3);
}
function Qi$1(e2) {
  return e2 && e2.includes("urn:recap:");
}
function lu(e2, t) {
  const r2 = Oe(e2), i3 = Oe(t), n4 = Wf(r2, i3);
  return jr(n4);
}
function Wf(e2, t) {
  me$1(e2), me$1(t);
  const r2 = Object.keys(e2.att).concat(Object.keys(t.att)).sort((n4, o3) => n4.localeCompare(o3)), i3 = { att: {} };
  return r2.forEach((n4) => {
    var o3, h4;
    Object.keys(((o3 = e2.att) == null ? void 0 : o3[n4]) || {}).concat(Object.keys(((h4 = t.att) == null ? void 0 : h4[n4]) || {})).sort((p3, b3) => p3.localeCompare(b3)).forEach((p3) => {
      var b3, m3;
      i3.att[n4] = Hf(Hi$1({}, i3.att[n4]), { [p3]: ((b3 = e2.att[n4]) == null ? void 0 : b3[p3]) || ((m3 = t.att[n4]) == null ? void 0 : m3[p3]) });
    });
  }), i3;
}
function Ji$1(e2 = "", t) {
  me$1(t);
  const r2 = "I further authorize the stated URI to perform the following actions on my behalf: ";
  if (e2.includes(r2))
    return e2;
  const i3 = [];
  let n4 = 0;
  Object.keys(t.att).forEach((p3) => {
    const b3 = Object.keys(t.att[p3]).map((y3) => ({ ability: y3.split("/")[0], action: y3.split("/")[1] }));
    b3.sort((y3, S2) => y3.action.localeCompare(S2.action));
    const m3 = {};
    b3.forEach((y3) => {
      m3[y3.ability] || (m3[y3.ability] = []), m3[y3.ability].push(y3.action);
    });
    const w3 = Object.keys(m3).map((y3) => (n4++, `(${n4}) '${y3}': '${m3[y3].join("', '")}' for '${p3}'.`));
    i3.push(w3.join(", ").replace(".,", "."));
  });
  const o3 = i3.join(" "), h4 = `${r2}${o3}`;
  return `${e2 ? e2 + " " : ""}${h4}`;
}
function du(e2) {
  var t;
  const r2 = Oe(e2);
  me$1(r2);
  const i3 = (t = r2.att) == null ? void 0 : t.eip155;
  return i3 ? Object.keys(i3).map((n4) => n4.split("/")[1]) : [];
}
function pu(e2) {
  const t = Oe(e2);
  me$1(t);
  const r2 = [];
  return Object.values(t.att).forEach((i3) => {
    Object.values(i3).forEach((n4) => {
      var o3;
      (o3 = n4 == null ? void 0 : n4[0]) != null && o3.chains && r2.push(n4[0].chains);
    });
  }), [...new Set(r2.flat())];
}
function Qr(e2) {
  if (!e2)
    return;
  const t = e2 == null ? void 0 : e2[e2.length - 1];
  return Qi$1(t) ? t : void 0;
}
const Gi$1 = "base10", zt$1 = "base16", Jr = "base64pad", Gr = "utf8", Yi$1 = 0, lr$2 = 1, vu = 0, Zf = 1, Vi = 12, Wi$2 = 32;
function mu() {
  const e2 = x25519.generateKeyPair();
  return { privateKey: toString(e2.secretKey, zt$1), publicKey: toString(e2.publicKey, zt$1) };
}
function gu() {
  const e2 = random.randomBytes(Wi$2);
  return toString(e2, zt$1);
}
function Au(e2, t) {
  const r2 = x25519.sharedKey(fromString(e2, zt$1), fromString(t, zt$1), true), i3 = new HKDF_1(sha256.SHA256, r2).expand(Wi$2);
  return toString(i3, zt$1);
}
function bu(e2) {
  const t = sha256.hash(fromString(e2, zt$1));
  return toString(t, zt$1);
}
function yu(e2) {
  const t = sha256.hash(fromString(e2, Gr));
  return toString(t, zt$1);
}
function $f(e2) {
  return fromString(`${e2}`, Gi$1);
}
function Mr(e2) {
  return Number(toString(e2, Gi$1));
}
function wu(e2) {
  const t = $f(typeof e2.type < "u" ? e2.type : Yi$1);
  if (Mr(t) === lr$2 && typeof e2.senderPublicKey > "u")
    throw new Error("Missing sender public key for type 1 envelope");
  const r2 = typeof e2.senderPublicKey < "u" ? fromString(e2.senderPublicKey, zt$1) : void 0, i3 = typeof e2.iv < "u" ? fromString(e2.iv, zt$1) : random.randomBytes(Vi), n4 = new chacha20poly1305.ChaCha20Poly1305(fromString(e2.symKey, zt$1)).seal(i3, fromString(e2.message, Gr));
  return to({ type: t, sealed: n4, iv: i3, senderPublicKey: r2 });
}
function xu(e2) {
  const t = new chacha20poly1305.ChaCha20Poly1305(fromString(e2.symKey, zt$1)), { sealed: r2, iv: i3 } = Xi$1(e2.encoded), n4 = t.open(i3, r2);
  if (n4 === null)
    throw new Error("Failed to decrypt");
  return toString(n4, Gr);
}
function to(e2) {
  if (Mr(e2.type) === lr$2) {
    if (typeof e2.senderPublicKey > "u")
      throw new Error("Missing sender public key for type 1 envelope");
    return toString(concat([e2.type, e2.senderPublicKey, e2.iv, e2.sealed]), Jr);
  }
  return toString(concat([e2.type, e2.iv, e2.sealed]), Jr);
}
function Xi$1(e2) {
  const t = fromString(e2, Jr), r2 = t.slice(vu, Zf), i3 = Zf;
  if (Mr(r2) === lr$2) {
    const p3 = i3 + Wi$2, b3 = p3 + Vi, m3 = t.slice(i3, p3), w3 = t.slice(p3, b3), y3 = t.slice(b3);
    return { type: r2, sealed: y3, iv: w3, senderPublicKey: m3 };
  }
  const n4 = i3 + Vi, o3 = t.slice(i3, n4), h4 = t.slice(n4);
  return { type: r2, sealed: h4, iv: o3 };
}
function Mu(e2, t) {
  const r2 = Xi$1(e2);
  return eo({ type: Mr(r2.type), senderPublicKey: typeof r2.senderPublicKey < "u" ? toString(r2.senderPublicKey, zt$1) : void 0, receiverPublicKey: t == null ? void 0 : t.receiverPublicKey });
}
function eo(e2) {
  const t = (e2 == null ? void 0 : e2.type) || Yi$1;
  if (t === lr$2) {
    if (typeof (e2 == null ? void 0 : e2.senderPublicKey) > "u")
      throw new Error("missing sender public key");
    if (typeof (e2 == null ? void 0 : e2.receiverPublicKey) > "u")
      throw new Error("missing receiver public key");
  }
  return { type: t, senderPublicKey: e2 == null ? void 0 : e2.senderPublicKey, receiverPublicKey: e2 == null ? void 0 : e2.receiverPublicKey };
}
function Eu(e2) {
  return e2.type === lr$2 && typeof e2.senderPublicKey == "string" && typeof e2.receiverPublicKey == "string";
}
const ro = "irn";
function Su(e2) {
  return (e2 == null ? void 0 : e2.relay) || { protocol: ro };
}
function Nu(e2) {
  const t = C$3[e2];
  if (typeof t > "u")
    throw new Error(`Relay Protocol not supported: ${e2}`);
  return t;
}
var Iu = Object.defineProperty, _u = Object.defineProperties, Bu = Object.getOwnPropertyDescriptors, io = Object.getOwnPropertySymbols, Cu = Object.prototype.hasOwnProperty, Ru = Object.prototype.propertyIsEnumerable, no = (e2, t, r2) => t in e2 ? Iu(e2, t, { enumerable: true, configurable: true, writable: true, value: r2 }) : e2[t] = r2, fo = (e2, t) => {
  for (var r2 in t || (t = {}))
    Cu.call(t, r2) && no(e2, r2, t[r2]);
  if (io)
    for (var r2 of io(t))
      Ru.call(t, r2) && no(e2, r2, t[r2]);
  return e2;
}, Ou = (e2, t) => _u(e2, Bu(t));
function oo(e2, t = "-") {
  const r2 = {}, i3 = "relay" + t;
  return Object.keys(e2).forEach((n4) => {
    if (n4.startsWith(i3)) {
      const o3 = n4.replace(i3, ""), h4 = e2[n4];
      r2[o3] = h4;
    }
  }), r2;
}
function Pu(e2) {
  e2 = e2.includes("wc://") ? e2.replace("wc://", "") : e2, e2 = e2.includes("wc:") ? e2.replace("wc:", "") : e2;
  const t = e2.indexOf(":"), r2 = e2.indexOf("?") !== -1 ? e2.indexOf("?") : void 0, i3 = e2.substring(0, t), n4 = e2.substring(t + 1, r2).split("@"), o3 = typeof r2 < "u" ? e2.substring(r2) : "", h4 = queryString.parse(o3), p3 = typeof h4.methods == "string" ? h4.methods.split(",") : void 0;
  return { protocol: i3, topic: so(n4[0]), version: parseInt(n4[1], 10), symKey: h4.symKey, relay: oo(h4), methods: p3, expiryTimestamp: h4.expiryTimestamp ? parseInt(h4.expiryTimestamp, 10) : void 0 };
}
function so(e2) {
  return e2.startsWith("//") ? e2.substring(2) : e2;
}
function ao(e2, t = "-") {
  const r2 = "relay", i3 = {};
  return Object.keys(e2).forEach((n4) => {
    const o3 = r2 + t + n4;
    e2[n4] && (i3[o3] = e2[n4]);
  }), i3;
}
function Du(e2) {
  return `${e2.protocol}:${e2.topic}@${e2.version}?` + queryString.stringify(fo(Ou(fo({ symKey: e2.symKey }, ao(e2.relay)), { expiryTimestamp: e2.expiryTimestamp }), e2.methods ? { methods: e2.methods.join(",") } : {}));
}
function $e$1(e2) {
  const t = [];
  return e2.forEach((r2) => {
    const [i3, n4] = r2.split(":");
    t.push(`${i3}:${n4}`);
  }), t;
}
function co(e2) {
  const t = [];
  return Object.values(e2).forEach((r2) => {
    t.push(...$e$1(r2.accounts));
  }), t;
}
function lo(e2, t) {
  const r2 = [];
  return Object.values(e2).forEach((i3) => {
    $e$1(i3.accounts).includes(t) && r2.push(...i3.methods);
  }), r2;
}
function po(e2, t) {
  const r2 = [];
  return Object.values(e2).forEach((i3) => {
    $e$1(i3.accounts).includes(t) && r2.push(...i3.events);
  }), r2;
}
function Zi$1(e2) {
  return e2.includes(":");
}
function vo(e2) {
  return Zi$1(e2) ? e2.split(":")[0] : e2;
}
function mo(e2) {
  const t = {};
  return e2 == null ? void 0 : e2.forEach((r2) => {
    const [i3, n4] = r2.split(":");
    t[i3] || (t[i3] = { accounts: [], chains: [], events: [] }), t[i3].accounts.push(r2), t[i3].chains.push(`${i3}:${n4}`);
  }), t;
}
function ju(e2, t) {
  t = t.map((i3) => i3.replace("did:pkh:", ""));
  const r2 = mo(t);
  for (const [i3, n4] of Object.entries(r2))
    n4.methods ? n4.methods = ge$2(n4.methods, e2) : n4.methods = e2, n4.events = ["chainChanged", "accountsChanged"];
  return r2;
}
const go = { INVALID_METHOD: { message: "Invalid method.", code: 1001 }, INVALID_EVENT: { message: "Invalid event.", code: 1002 }, INVALID_UPDATE_REQUEST: { message: "Invalid update request.", code: 1003 }, INVALID_EXTEND_REQUEST: { message: "Invalid extend request.", code: 1004 }, INVALID_SESSION_SETTLE_REQUEST: { message: "Invalid session settle request.", code: 1005 }, UNAUTHORIZED_METHOD: { message: "Unauthorized method.", code: 3001 }, UNAUTHORIZED_EVENT: { message: "Unauthorized event.", code: 3002 }, UNAUTHORIZED_UPDATE_REQUEST: { message: "Unauthorized update request.", code: 3003 }, UNAUTHORIZED_EXTEND_REQUEST: { message: "Unauthorized extend request.", code: 3004 }, USER_REJECTED: { message: "User rejected.", code: 5e3 }, USER_REJECTED_CHAINS: { message: "User rejected chains.", code: 5001 }, USER_REJECTED_METHODS: { message: "User rejected methods.", code: 5002 }, USER_REJECTED_EVENTS: { message: "User rejected events.", code: 5003 }, UNSUPPORTED_CHAINS: { message: "Unsupported chains.", code: 5100 }, UNSUPPORTED_METHODS: { message: "Unsupported methods.", code: 5101 }, UNSUPPORTED_EVENTS: { message: "Unsupported events.", code: 5102 }, UNSUPPORTED_ACCOUNTS: { message: "Unsupported accounts.", code: 5103 }, UNSUPPORTED_NAMESPACE_KEY: { message: "Unsupported namespace key.", code: 5104 }, USER_DISCONNECTED: { message: "User disconnected.", code: 6e3 }, SESSION_SETTLEMENT_FAILED: { message: "Session settlement failed.", code: 7e3 }, WC_METHOD_UNSUPPORTED: { message: "Unsupported wc_ method.", code: 10001 } }, Ao = { NOT_INITIALIZED: { message: "Not initialized.", code: 1 }, NO_MATCHING_KEY: { message: "No matching key.", code: 2 }, RESTORE_WILL_OVERRIDE: { message: "Restore will override.", code: 3 }, RESUBSCRIBED: { message: "Resubscribed.", code: 4 }, MISSING_OR_INVALID: { message: "Missing or invalid.", code: 5 }, EXPIRED: { message: "Expired.", code: 6 }, UNKNOWN_TYPE: { message: "Unknown type.", code: 7 }, MISMATCHED_TOPIC: { message: "Mismatched topic.", code: 8 }, NON_CONFORMING_NAMESPACES: { message: "Non conforming namespaces.", code: 9 } };
function xe(e2, t) {
  const { message: r2, code: i3 } = Ao[e2];
  return { message: t ? `${r2} ${t}` : r2, code: i3 };
}
function tr$1(e2, t) {
  const { message: r2, code: i3 } = go[e2];
  return { message: t ? `${r2} ${t}` : r2, code: i3 };
}
function Er(e2, t) {
  return Array.isArray(e2) ? true : false;
}
function Yr(e2) {
  return Object.getPrototypeOf(e2) === Object.prototype && Object.keys(e2).length;
}
function Pe(e2) {
  return typeof e2 > "u";
}
function Gt$1(e2, t) {
  return t && Pe(e2) ? true : typeof e2 == "string" && !!e2.trim().length;
}
function Vr(e2, t) {
  return typeof e2 == "number" && !isNaN(e2);
}
function Qu(e2, t) {
  const { requiredNamespaces: r2 } = t, i3 = Object.keys(e2.namespaces), n4 = Object.keys(r2);
  let o3 = true;
  return _e$1(n4, i3) ? (i3.forEach((h4) => {
    const { accounts: p3, methods: b3, events: m3 } = e2.namespaces[h4], w3 = $e$1(p3), y3 = r2[h4];
    (!_e$1(_r$1(h4, y3), w3) || !_e$1(y3.methods, b3) || !_e$1(y3.events, m3)) && (o3 = false);
  }), o3) : false;
}
function Sr$1(e2) {
  return Gt$1(e2, false) && e2.includes(":") ? e2.split(":").length === 2 : false;
}
function bo(e2) {
  if (Gt$1(e2, false) && e2.includes(":")) {
    const t = e2.split(":");
    if (t.length === 3) {
      const r2 = t[0] + ":" + t[1];
      return !!t[2] && Sr$1(r2);
    }
  }
  return false;
}
function Ju(e2) {
  if (Gt$1(e2, false))
    try {
      return typeof new URL(e2) < "u";
    } catch {
      return false;
    }
  return false;
}
function Gu(e2) {
  var t;
  return (t = e2 == null ? void 0 : e2.proposer) == null ? void 0 : t.publicKey;
}
function Yu(e2) {
  return e2 == null ? void 0 : e2.topic;
}
function Vu(e2, t) {
  let r2 = null;
  return Gt$1(e2 == null ? void 0 : e2.publicKey, false) || (r2 = xe("MISSING_OR_INVALID", `${t} controller public key should be a string`)), r2;
}
function tn(e2) {
  let t = true;
  return Er(e2) ? e2.length && (t = e2.every((r2) => Gt$1(r2, false))) : t = false, t;
}
function yo(e2, t, r2) {
  let i3 = null;
  return Er(t) && t.length ? t.forEach((n4) => {
    i3 || Sr$1(n4) || (i3 = tr$1("UNSUPPORTED_CHAINS", `${r2}, chain ${n4} should be a string and conform to "namespace:chainId" format`));
  }) : Sr$1(e2) || (i3 = tr$1("UNSUPPORTED_CHAINS", `${r2}, chains must be defined as "namespace:chainId" e.g. "eip155:1": {...} in the namespace key OR as an array of CAIP-2 chainIds e.g. eip155: { chains: ["eip155:1", "eip155:5"] }`)), i3;
}
function wo(e2, t, r2) {
  let i3 = null;
  return Object.entries(e2).forEach(([n4, o3]) => {
    if (i3)
      return;
    const h4 = yo(n4, _r$1(n4, o3), `${t} ${r2}`);
    h4 && (i3 = h4);
  }), i3;
}
function xo(e2, t) {
  let r2 = null;
  return Er(e2) ? e2.forEach((i3) => {
    r2 || bo(i3) || (r2 = tr$1("UNSUPPORTED_ACCOUNTS", `${t}, account ${i3} should be a string and conform to "namespace:chainId:address" format`));
  }) : r2 = tr$1("UNSUPPORTED_ACCOUNTS", `${t}, accounts should be an array of strings conforming to "namespace:chainId:address" format`), r2;
}
function Mo(e2, t) {
  let r2 = null;
  return Object.values(e2).forEach((i3) => {
    if (r2)
      return;
    const n4 = xo(i3 == null ? void 0 : i3.accounts, `${t} namespace`);
    n4 && (r2 = n4);
  }), r2;
}
function Eo(e2, t) {
  let r2 = null;
  return tn(e2 == null ? void 0 : e2.methods) ? tn(e2 == null ? void 0 : e2.events) || (r2 = tr$1("UNSUPPORTED_EVENTS", `${t}, events should be an array of strings or empty array for no events`)) : r2 = tr$1("UNSUPPORTED_METHODS", `${t}, methods should be an array of strings or empty array for no methods`), r2;
}
function en(e2, t) {
  let r2 = null;
  return Object.values(e2).forEach((i3) => {
    if (r2)
      return;
    const n4 = Eo(i3, `${t}, namespace`);
    n4 && (r2 = n4);
  }), r2;
}
function Wu(e2, t, r2) {
  let i3 = null;
  if (e2 && Yr(e2)) {
    const n4 = en(e2, t);
    n4 && (i3 = n4);
    const o3 = wo(e2, t, r2);
    o3 && (i3 = o3);
  } else
    i3 = xe("MISSING_OR_INVALID", `${t}, ${r2} should be an object with data`);
  return i3;
}
function So(e2, t) {
  let r2 = null;
  if (e2 && Yr(e2)) {
    const i3 = en(e2, t);
    i3 && (r2 = i3);
    const n4 = Mo(e2, t);
    n4 && (r2 = n4);
  } else
    r2 = xe("MISSING_OR_INVALID", `${t}, namespaces should be an object with data`);
  return r2;
}
function No(e2) {
  return Gt$1(e2.protocol, true);
}
function Xu(e2, t) {
  let r2 = false;
  return !e2 ? r2 = true : e2 && Er(e2) && e2.length && e2.forEach((i3) => {
    r2 = No(i3);
  }), r2;
}
function Zu(e2) {
  return typeof e2 == "number";
}
function $u(e2) {
  return typeof e2 < "u" && typeof e2 !== null;
}
function th(e2) {
  return !(!e2 || typeof e2 != "object" || !e2.code || !Vr(e2.code) || !e2.message || !Gt$1(e2.message, false));
}
function eh(e2) {
  return !(Pe(e2) || !Gt$1(e2.method, false));
}
function rh(e2) {
  return !(Pe(e2) || Pe(e2.result) && Pe(e2.error) || !Vr(e2.id) || !Gt$1(e2.jsonrpc, false));
}
function ih(e2) {
  return !(Pe(e2) || !Gt$1(e2.name, false));
}
function nh(e2, t) {
  return !(!Sr$1(t) || !co(e2).includes(t));
}
function fh(e2, t, r2) {
  return Gt$1(r2, false) ? lo(e2, t).includes(r2) : false;
}
function oh(e2, t, r2) {
  return Gt$1(r2, false) ? po(e2, t).includes(r2) : false;
}
function Io(e2, t, r2) {
  let i3 = null;
  const n4 = sh(e2), o3 = ah(t), h4 = Object.keys(n4), p3 = Object.keys(o3), b3 = _o(Object.keys(e2)), m3 = _o(Object.keys(t)), w3 = b3.filter((y3) => !m3.includes(y3));
  return w3.length && (i3 = xe("NON_CONFORMING_NAMESPACES", `${r2} namespaces keys don't satisfy requiredNamespaces.
      Required: ${w3.toString()}
      Received: ${Object.keys(t).toString()}`)), _e$1(h4, p3) || (i3 = xe("NON_CONFORMING_NAMESPACES", `${r2} namespaces chains don't satisfy required namespaces.
      Required: ${h4.toString()}
      Approved: ${p3.toString()}`)), Object.keys(t).forEach((y3) => {
    if (!y3.includes(":") || i3)
      return;
    const S2 = $e$1(t[y3].accounts);
    S2.includes(y3) || (i3 = xe("NON_CONFORMING_NAMESPACES", `${r2} namespaces accounts don't satisfy namespace accounts for ${y3}
        Required: ${y3}
        Approved: ${S2.toString()}`));
  }), h4.forEach((y3) => {
    i3 || (_e$1(n4[y3].methods, o3[y3].methods) ? _e$1(n4[y3].events, o3[y3].events) || (i3 = xe("NON_CONFORMING_NAMESPACES", `${r2} namespaces events don't satisfy namespace events for ${y3}`)) : i3 = xe("NON_CONFORMING_NAMESPACES", `${r2} namespaces methods don't satisfy namespace methods for ${y3}`));
  }), i3;
}
function sh(e2) {
  const t = {};
  return Object.keys(e2).forEach((r2) => {
    var i3;
    r2.includes(":") ? t[r2] = e2[r2] : (i3 = e2[r2].chains) == null || i3.forEach((n4) => {
      t[n4] = { methods: e2[r2].methods, events: e2[r2].events };
    });
  }), t;
}
function _o(e2) {
  return [...new Set(e2.map((t) => t.includes(":") ? t.split(":")[0] : t))];
}
function ah(e2) {
  const t = {};
  return Object.keys(e2).forEach((r2) => {
    if (r2.includes(":"))
      t[r2] = e2[r2];
    else {
      const i3 = $e$1(e2[r2].accounts);
      i3 == null ? void 0 : i3.forEach((n4) => {
        t[n4] = { accounts: e2[r2].accounts.filter((o3) => o3.includes(`${n4}:`)), methods: e2[r2].methods, events: e2[r2].events };
      });
    }
  }), t;
}
function uh(e2, t) {
  return Vr(e2) && e2 <= t.max && e2 >= t.min;
}
function hh() {
  const e2 = We$2();
  return new Promise((t) => {
    switch (e2) {
      case qt$1.browser:
        t(Bo());
        break;
      case qt$1.reactNative:
        t(Co());
        break;
      case qt$1.node:
        t(Ro());
        break;
      default:
        t(true);
    }
  });
}
function Bo() {
  return pr$1() && (navigator == null ? void 0 : navigator.onLine);
}
async function Co() {
  if (er$1() && typeof global < "u" && global != null && global.NetInfo) {
    const e2 = await (global == null ? void 0 : global.NetInfo.fetch());
    return e2 == null ? void 0 : e2.isConnected;
  }
  return true;
}
function Ro() {
  return true;
}
function ch(e2) {
  switch (We$2()) {
    case qt$1.browser:
      Oo(e2);
      break;
    case qt$1.reactNative:
      Po(e2);
      break;
  }
}
function Oo(e2) {
  !er$1() && pr$1() && (window.addEventListener("online", () => e2(true)), window.addEventListener("offline", () => e2(false)));
}
function Po(e2) {
  var _a2;
  er$1() && typeof global < "u" && global != null && global.NetInfo && ((_a2 = global) == null ? void 0 : _a2.NetInfo.addEventListener((t) => e2(t == null ? void 0 : t.isConnected)));
}
const rn = {};
class lh {
  static get(t) {
    return rn[t];
  }
  static set(t, r2) {
    rn[t] = r2;
  }
  static delete(t) {
    delete rn[t];
  }
}
const suspectProtoRx = /"(?:_|\\u0{2}5[Ff]){2}(?:p|\\u0{2}70)(?:r|\\u0{2}72)(?:o|\\u0{2}6[Ff])(?:t|\\u0{2}74)(?:o|\\u0{2}6[Ff])(?:_|\\u0{2}5[Ff]){2}"\s*:/;
const suspectConstructorRx = /"(?:c|\\u0063)(?:o|\\u006[Ff])(?:n|\\u006[Ee])(?:s|\\u0073)(?:t|\\u0074)(?:r|\\u0072)(?:u|\\u0075)(?:c|\\u0063)(?:t|\\u0074)(?:o|\\u006[Ff])(?:r|\\u0072)"\s*:/;
const JsonSigRx = /^\s*["[{]|^\s*-?\d{1,16}(\.\d{1,17})?([Ee][+-]?\d+)?\s*$/;
function jsonParseTransform(key, value) {
  if (key === "__proto__" || key === "constructor" && value && typeof value === "object" && "prototype" in value) {
    warnKeyDropped(key);
    return;
  }
  return value;
}
function warnKeyDropped(key) {
  console.warn(`[destr] Dropping "${key}" key to prevent prototype pollution.`);
}
function destr(value, options = {}) {
  if (typeof value !== "string") {
    return value;
  }
  const _value = value.trim();
  if (
    // eslint-disable-next-line unicorn/prefer-at
    value[0] === '"' && value.endsWith('"') && !value.includes("\\")
  ) {
    return _value.slice(1, -1);
  }
  if (_value.length <= 9) {
    const _lval = _value.toLowerCase();
    if (_lval === "true") {
      return true;
    }
    if (_lval === "false") {
      return false;
    }
    if (_lval === "undefined") {
      return void 0;
    }
    if (_lval === "null") {
      return null;
    }
    if (_lval === "nan") {
      return Number.NaN;
    }
    if (_lval === "infinity") {
      return Number.POSITIVE_INFINITY;
    }
    if (_lval === "-infinity") {
      return Number.NEGATIVE_INFINITY;
    }
  }
  if (!JsonSigRx.test(value)) {
    if (options.strict) {
      throw new SyntaxError("[destr] Invalid JSON");
    }
    return value;
  }
  try {
    if (suspectProtoRx.test(value) || suspectConstructorRx.test(value)) {
      if (options.strict) {
        throw new Error("[destr] Possible prototype pollution");
      }
      return JSON.parse(value, jsonParseTransform);
    }
    return JSON.parse(value);
  } catch (error) {
    if (options.strict) {
      throw error;
    }
    return value;
  }
}
function wrapToPromise(value) {
  if (!value || typeof value.then !== "function") {
    return Promise.resolve(value);
  }
  return value;
}
function asyncCall(function_, ...arguments_) {
  try {
    return wrapToPromise(function_(...arguments_));
  } catch (error) {
    return Promise.reject(error);
  }
}
function isPrimitive(value) {
  const type = typeof value;
  return value === null || type !== "object" && type !== "function";
}
function isPureObject(value) {
  const proto = Object.getPrototypeOf(value);
  return !proto || proto.isPrototypeOf(Object);
}
function stringify(value) {
  if (isPrimitive(value)) {
    return String(value);
  }
  if (isPureObject(value) || Array.isArray(value)) {
    return JSON.stringify(value);
  }
  if (typeof value.toJSON === "function") {
    return stringify(value.toJSON());
  }
  throw new Error("[unstorage] Cannot stringify value!");
}
function checkBufferSupport() {
  if (typeof Buffer === void 0) {
    throw new TypeError("[unstorage] Buffer is not supported!");
  }
}
const BASE64_PREFIX = "base64:";
function serializeRaw(value) {
  if (typeof value === "string") {
    return value;
  }
  checkBufferSupport();
  const base642 = Buffer.from(value).toString("base64");
  return BASE64_PREFIX + base642;
}
function deserializeRaw(value) {
  if (typeof value !== "string") {
    return value;
  }
  if (!value.startsWith(BASE64_PREFIX)) {
    return value;
  }
  checkBufferSupport();
  return Buffer.from(value.slice(BASE64_PREFIX.length), "base64");
}
function normalizeKey(key) {
  if (!key) {
    return "";
  }
  return key.split("?")[0].replace(/[/\\]/g, ":").replace(/:+/g, ":").replace(/^:|:$/g, "");
}
function joinKeys(...keys2) {
  return normalizeKey(keys2.join(":"));
}
function normalizeBaseKey(base3) {
  base3 = normalizeKey(base3);
  return base3 ? base3 + ":" : "";
}
function defineDriver(factory) {
  return factory;
}
const DRIVER_NAME = "memory";
const memory = defineDriver(() => {
  const data = /* @__PURE__ */ new Map();
  return {
    name: DRIVER_NAME,
    options: {},
    hasItem(key) {
      return data.has(key);
    },
    getItem(key) {
      return data.get(key) ?? null;
    },
    getItemRaw(key) {
      return data.get(key) ?? null;
    },
    setItem(key, value) {
      data.set(key, value);
    },
    setItemRaw(key, value) {
      data.set(key, value);
    },
    removeItem(key) {
      data.delete(key);
    },
    getKeys() {
      return Array.from(data.keys());
    },
    clear() {
      data.clear();
    },
    dispose() {
      data.clear();
    }
  };
});
function createStorage(options = {}) {
  const context = {
    mounts: { "": options.driver || memory() },
    mountpoints: [""],
    watching: false,
    watchListeners: [],
    unwatch: {}
  };
  const getMount = (key) => {
    for (const base3 of context.mountpoints) {
      if (key.startsWith(base3)) {
        return {
          base: base3,
          relativeKey: key.slice(base3.length),
          driver: context.mounts[base3]
        };
      }
    }
    return {
      base: "",
      relativeKey: key,
      driver: context.mounts[""]
    };
  };
  const getMounts = (base3, includeParent) => {
    return context.mountpoints.filter(
      (mountpoint) => mountpoint.startsWith(base3) || includeParent && base3.startsWith(mountpoint)
    ).map((mountpoint) => ({
      relativeBase: base3.length > mountpoint.length ? base3.slice(mountpoint.length) : void 0,
      mountpoint,
      driver: context.mounts[mountpoint]
    }));
  };
  const onChange = (event, key) => {
    if (!context.watching) {
      return;
    }
    key = normalizeKey(key);
    for (const listener of context.watchListeners) {
      listener(event, key);
    }
  };
  const startWatch = async () => {
    if (context.watching) {
      return;
    }
    context.watching = true;
    for (const mountpoint in context.mounts) {
      context.unwatch[mountpoint] = await watch(
        context.mounts[mountpoint],
        onChange,
        mountpoint
      );
    }
  };
  const stopWatch = async () => {
    if (!context.watching) {
      return;
    }
    for (const mountpoint in context.unwatch) {
      await context.unwatch[mountpoint]();
    }
    context.unwatch = {};
    context.watching = false;
  };
  const runBatch = (items, commonOptions, cb) => {
    const batches = /* @__PURE__ */ new Map();
    const getBatch = (mount) => {
      let batch = batches.get(mount.base);
      if (!batch) {
        batch = {
          driver: mount.driver,
          base: mount.base,
          items: []
        };
        batches.set(mount.base, batch);
      }
      return batch;
    };
    for (const item of items) {
      const isStringItem = typeof item === "string";
      const key = normalizeKey(isStringItem ? item : item.key);
      const value = isStringItem ? void 0 : item.value;
      const options2 = isStringItem || !item.options ? commonOptions : { ...commonOptions, ...item.options };
      const mount = getMount(key);
      getBatch(mount).items.push({
        key,
        value,
        relativeKey: mount.relativeKey,
        options: options2
      });
    }
    return Promise.all([...batches.values()].map((batch) => cb(batch))).then(
      (r2) => r2.flat()
    );
  };
  const storage = {
    // Item
    hasItem(key, opts = {}) {
      key = normalizeKey(key);
      const { relativeKey, driver } = getMount(key);
      return asyncCall(driver.hasItem, relativeKey, opts);
    },
    getItem(key, opts = {}) {
      key = normalizeKey(key);
      const { relativeKey, driver } = getMount(key);
      return asyncCall(driver.getItem, relativeKey, opts).then(
        (value) => destr(value)
      );
    },
    getItems(items, commonOptions) {
      return runBatch(items, commonOptions, (batch) => {
        if (batch.driver.getItems) {
          return asyncCall(
            batch.driver.getItems,
            batch.items.map((item) => ({
              key: item.relativeKey,
              options: item.options
            })),
            commonOptions
          ).then(
            (r2) => r2.map((item) => ({
              key: joinKeys(batch.base, item.key),
              value: destr(item.value)
            }))
          );
        }
        return Promise.all(
          batch.items.map((item) => {
            return asyncCall(
              batch.driver.getItem,
              item.relativeKey,
              item.options
            ).then((value) => ({
              key: item.key,
              value: destr(value)
            }));
          })
        );
      });
    },
    getItemRaw(key, opts = {}) {
      key = normalizeKey(key);
      const { relativeKey, driver } = getMount(key);
      if (driver.getItemRaw) {
        return asyncCall(driver.getItemRaw, relativeKey, opts);
      }
      return asyncCall(driver.getItem, relativeKey, opts).then(
        (value) => deserializeRaw(value)
      );
    },
    async setItem(key, value, opts = {}) {
      if (value === void 0) {
        return storage.removeItem(key);
      }
      key = normalizeKey(key);
      const { relativeKey, driver } = getMount(key);
      if (!driver.setItem) {
        return;
      }
      await asyncCall(driver.setItem, relativeKey, stringify(value), opts);
      if (!driver.watch) {
        onChange("update", key);
      }
    },
    async setItems(items, commonOptions) {
      await runBatch(items, commonOptions, async (batch) => {
        if (batch.driver.setItems) {
          return asyncCall(
            batch.driver.setItems,
            batch.items.map((item) => ({
              key: item.relativeKey,
              value: stringify(item.value),
              options: item.options
            })),
            commonOptions
          );
        }
        if (!batch.driver.setItem) {
          return;
        }
        await Promise.all(
          batch.items.map((item) => {
            return asyncCall(
              batch.driver.setItem,
              item.relativeKey,
              stringify(item.value),
              item.options
            );
          })
        );
      });
    },
    async setItemRaw(key, value, opts = {}) {
      if (value === void 0) {
        return storage.removeItem(key, opts);
      }
      key = normalizeKey(key);
      const { relativeKey, driver } = getMount(key);
      if (driver.setItemRaw) {
        await asyncCall(driver.setItemRaw, relativeKey, value, opts);
      } else if (driver.setItem) {
        await asyncCall(driver.setItem, relativeKey, serializeRaw(value), opts);
      } else {
        return;
      }
      if (!driver.watch) {
        onChange("update", key);
      }
    },
    async removeItem(key, opts = {}) {
      if (typeof opts === "boolean") {
        opts = { removeMeta: opts };
      }
      key = normalizeKey(key);
      const { relativeKey, driver } = getMount(key);
      if (!driver.removeItem) {
        return;
      }
      await asyncCall(driver.removeItem, relativeKey, opts);
      if (opts.removeMeta || opts.removeMata) {
        await asyncCall(driver.removeItem, relativeKey + "$", opts);
      }
      if (!driver.watch) {
        onChange("remove", key);
      }
    },
    // Meta
    async getMeta(key, opts = {}) {
      if (typeof opts === "boolean") {
        opts = { nativeOnly: opts };
      }
      key = normalizeKey(key);
      const { relativeKey, driver } = getMount(key);
      const meta = /* @__PURE__ */ Object.create(null);
      if (driver.getMeta) {
        Object.assign(meta, await asyncCall(driver.getMeta, relativeKey, opts));
      }
      if (!opts.nativeOnly) {
        const value = await asyncCall(
          driver.getItem,
          relativeKey + "$",
          opts
        ).then((value_) => destr(value_));
        if (value && typeof value === "object") {
          if (typeof value.atime === "string") {
            value.atime = new Date(value.atime);
          }
          if (typeof value.mtime === "string") {
            value.mtime = new Date(value.mtime);
          }
          Object.assign(meta, value);
        }
      }
      return meta;
    },
    setMeta(key, value, opts = {}) {
      return this.setItem(key + "$", value, opts);
    },
    removeMeta(key, opts = {}) {
      return this.removeItem(key + "$", opts);
    },
    // Keys
    async getKeys(base3, opts = {}) {
      base3 = normalizeBaseKey(base3);
      const mounts = getMounts(base3, true);
      let maskedMounts = [];
      const allKeys = [];
      for (const mount of mounts) {
        const rawKeys = await asyncCall(
          mount.driver.getKeys,
          mount.relativeBase,
          opts
        );
        const keys2 = rawKeys.map((key) => mount.mountpoint + normalizeKey(key)).filter((key) => !maskedMounts.some((p3) => key.startsWith(p3)));
        allKeys.push(...keys2);
        maskedMounts = [
          mount.mountpoint,
          ...maskedMounts.filter((p3) => !p3.startsWith(mount.mountpoint))
        ];
      }
      return base3 ? allKeys.filter((key) => key.startsWith(base3) && !key.endsWith("$")) : allKeys.filter((key) => !key.endsWith("$"));
    },
    // Utils
    async clear(base3, opts = {}) {
      base3 = normalizeBaseKey(base3);
      await Promise.all(
        getMounts(base3, false).map(async (m3) => {
          if (m3.driver.clear) {
            return asyncCall(m3.driver.clear, m3.relativeBase, opts);
          }
          if (m3.driver.removeItem) {
            const keys2 = await m3.driver.getKeys(m3.relativeBase || "", opts);
            return Promise.all(
              keys2.map((key) => m3.driver.removeItem(key, opts))
            );
          }
        })
      );
    },
    async dispose() {
      await Promise.all(
        Object.values(context.mounts).map((driver) => dispose(driver))
      );
    },
    async watch(callback) {
      await startWatch();
      context.watchListeners.push(callback);
      return async () => {
        context.watchListeners = context.watchListeners.filter(
          (listener) => listener !== callback
        );
        if (context.watchListeners.length === 0) {
          await stopWatch();
        }
      };
    },
    async unwatch() {
      context.watchListeners = [];
      await stopWatch();
    },
    // Mount
    mount(base3, driver) {
      base3 = normalizeBaseKey(base3);
      if (base3 && context.mounts[base3]) {
        throw new Error(`already mounted at ${base3}`);
      }
      if (base3) {
        context.mountpoints.push(base3);
        context.mountpoints.sort((a3, b3) => b3.length - a3.length);
      }
      context.mounts[base3] = driver;
      if (context.watching) {
        Promise.resolve(watch(driver, onChange, base3)).then((unwatcher) => {
          context.unwatch[base3] = unwatcher;
        }).catch(console.error);
      }
      return storage;
    },
    async unmount(base3, _dispose = true) {
      base3 = normalizeBaseKey(base3);
      if (!base3 || !context.mounts[base3]) {
        return;
      }
      if (context.watching && base3 in context.unwatch) {
        context.unwatch[base3]();
        delete context.unwatch[base3];
      }
      if (_dispose) {
        await dispose(context.mounts[base3]);
      }
      context.mountpoints = context.mountpoints.filter((key) => key !== base3);
      delete context.mounts[base3];
    },
    getMount(key = "") {
      key = normalizeKey(key) + ":";
      const m3 = getMount(key);
      return {
        driver: m3.driver,
        base: m3.base
      };
    },
    getMounts(base3 = "", opts = {}) {
      base3 = normalizeKey(base3);
      const mounts = getMounts(base3, opts.parents);
      return mounts.map((m3) => ({
        driver: m3.driver,
        base: m3.mountpoint
      }));
    }
  };
  return storage;
}
function watch(driver, onChange, base3) {
  return driver.watch ? driver.watch((event, key) => onChange(event, base3 + key)) : () => {
  };
}
async function dispose(driver) {
  if (typeof driver.dispose === "function") {
    await asyncCall(driver.dispose);
  }
}
function promisifyRequest(request) {
  return new Promise((resolve, reject) => {
    request.oncomplete = request.onsuccess = () => resolve(request.result);
    request.onabort = request.onerror = () => reject(request.error);
  });
}
function createStore(dbName, storeName) {
  const request = indexedDB.open(dbName);
  request.onupgradeneeded = () => request.result.createObjectStore(storeName);
  const dbp = promisifyRequest(request);
  return (txMode, callback) => dbp.then((db) => callback(db.transaction(storeName, txMode).objectStore(storeName)));
}
let defaultGetStoreFunc;
function defaultGetStore() {
  if (!defaultGetStoreFunc) {
    defaultGetStoreFunc = createStore("keyval-store", "keyval");
  }
  return defaultGetStoreFunc;
}
function get(key, customStore = defaultGetStore()) {
  return customStore("readonly", (store) => promisifyRequest(store.get(key)));
}
function set$1(key, value, customStore = defaultGetStore()) {
  return customStore("readwrite", (store) => {
    store.put(value, key);
    return promisifyRequest(store.transaction);
  });
}
function del(key, customStore = defaultGetStore()) {
  return customStore("readwrite", (store) => {
    store.delete(key);
    return promisifyRequest(store.transaction);
  });
}
function clear(customStore = defaultGetStore()) {
  return customStore("readwrite", (store) => {
    store.clear();
    return promisifyRequest(store.transaction);
  });
}
function eachCursor(store, callback) {
  store.openCursor().onsuccess = function() {
    if (!this.result)
      return;
    callback(this.result);
    this.result.continue();
  };
  return promisifyRequest(store.transaction);
}
function keys(customStore = defaultGetStore()) {
  return customStore("readonly", (store) => {
    if (store.getAllKeys) {
      return promisifyRequest(store.getAllKeys());
    }
    const items = [];
    return eachCursor(store, (cursor) => items.push(cursor.key)).then(() => items);
  });
}
const JSONStringify = (data) => JSON.stringify(data, (_3, value) => typeof value === "bigint" ? value.toString() + "n" : value);
const JSONParse = (json) => {
  const numbersBiggerThanMaxInt = /([\[:])?(\d{17,}|(?:[9](?:[1-9]07199254740991|0[1-9]7199254740991|00[8-9]199254740991|007[2-9]99254740991|007199[3-9]54740991|0071992[6-9]4740991|00719925[5-9]740991|007199254[8-9]40991|0071992547[5-9]0991|00719925474[1-9]991|00719925474099[2-9])))([,\}\]])/g;
  const serializedData = json.replace(numbersBiggerThanMaxInt, '$1"$2n"$3');
  return JSON.parse(serializedData, (_3, value) => {
    const isCustomFormatBigInt = typeof value === "string" && value.match(/^\d+n$/);
    if (isCustomFormatBigInt)
      return BigInt(value.substring(0, value.length - 1));
    return value;
  });
};
function safeJsonParse(value) {
  if (typeof value !== "string") {
    throw new Error(`Cannot safe json parse value of type ${typeof value}`);
  }
  try {
    return JSONParse(value);
  } catch (_a2) {
    return value;
  }
}
function safeJsonStringify(value) {
  return typeof value === "string" ? value : JSONStringify(value) || "";
}
const x$1 = "idb-keyval";
var z$4 = (i3 = {}) => {
  const t = i3.base && i3.base.length > 0 ? `${i3.base}:` : "", e2 = (s2) => t + s2;
  let n4;
  return i3.dbName && i3.storeName && (n4 = createStore(i3.dbName, i3.storeName)), { name: x$1, options: i3, async hasItem(s2) {
    return !(typeof await get(e2(s2), n4) > "u");
  }, async getItem(s2) {
    return await get(e2(s2), n4) ?? null;
  }, setItem(s2, a3) {
    return set$1(e2(s2), a3, n4);
  }, removeItem(s2) {
    return del(e2(s2), n4);
  }, getKeys() {
    return keys(n4);
  }, clear() {
    return clear(n4);
  } };
};
const D$2 = "WALLET_CONNECT_V2_INDEXED_DB", E$5 = "keyvaluestorage";
let _$1 = class _ {
  constructor() {
    this.indexedDb = createStorage({ driver: z$4({ dbName: D$2, storeName: E$5 }) });
  }
  async getKeys() {
    return this.indexedDb.getKeys();
  }
  async getEntries() {
    return (await this.indexedDb.getItems(await this.indexedDb.getKeys())).map((t) => [t.key, t.value]);
  }
  async getItem(t) {
    const e2 = await this.indexedDb.getItem(t);
    if (e2 !== null)
      return e2;
  }
  async setItem(t, e2) {
    await this.indexedDb.setItem(t, safeJsonStringify(e2));
  }
  async removeItem(t) {
    await this.indexedDb.removeItem(t);
  }
};
var l$2 = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, c$2 = { exports: {} };
(function() {
  let i3;
  function t() {
  }
  i3 = t, i3.prototype.getItem = function(e2) {
    return this.hasOwnProperty(e2) ? String(this[e2]) : null;
  }, i3.prototype.setItem = function(e2, n4) {
    this[e2] = String(n4);
  }, i3.prototype.removeItem = function(e2) {
    delete this[e2];
  }, i3.prototype.clear = function() {
    const e2 = this;
    Object.keys(e2).forEach(function(n4) {
      e2[n4] = void 0, delete e2[n4];
    });
  }, i3.prototype.key = function(e2) {
    return e2 = e2 || 0, Object.keys(this)[e2];
  }, i3.prototype.__defineGetter__("length", function() {
    return Object.keys(this).length;
  }), typeof l$2 < "u" && l$2.localStorage ? c$2.exports = l$2.localStorage : typeof window < "u" && window.localStorage ? c$2.exports = window.localStorage : c$2.exports = new t();
})();
function k$1(i3) {
  var t;
  return [i3[0], safeJsonParse((t = i3[1]) != null ? t : "")];
}
class K {
  constructor() {
    this.localStorage = c$2.exports;
  }
  async getKeys() {
    return Object.keys(this.localStorage);
  }
  async getEntries() {
    return Object.entries(this.localStorage).map(k$1);
  }
  async getItem(t) {
    const e2 = this.localStorage.getItem(t);
    if (e2 !== null)
      return safeJsonParse(e2);
  }
  async setItem(t, e2) {
    this.localStorage.setItem(t, safeJsonStringify(e2));
  }
  async removeItem(t) {
    this.localStorage.removeItem(t);
  }
}
const N$1 = "wc_storage_version", y$5 = 1, O$3 = async (i3, t, e2) => {
  const n4 = N$1, s2 = await t.getItem(n4);
  if (s2 && s2 >= y$5) {
    e2(t);
    return;
  }
  const a3 = await i3.getKeys();
  if (!a3.length) {
    e2(t);
    return;
  }
  const m3 = [];
  for (; a3.length; ) {
    const r2 = a3.shift();
    if (!r2)
      continue;
    const o3 = r2.toLowerCase();
    if (o3.includes("wc@") || o3.includes("walletconnect") || o3.includes("wc_") || o3.includes("wallet_connect")) {
      const f3 = await i3.getItem(r2);
      await t.setItem(r2, f3), m3.push(r2);
    }
  }
  await t.setItem(n4, y$5), e2(t), j$3(i3, m3);
}, j$3 = async (i3, t) => {
  t.length && t.forEach(async (e2) => {
    await i3.removeItem(e2);
  });
};
let h$2 = class h {
  constructor() {
    this.initialized = false, this.setInitialized = (e2) => {
      this.storage = e2, this.initialized = true;
    };
    const t = new K();
    this.storage = t;
    try {
      const e2 = new _$1();
      O$3(t, e2, this.setInitialized);
    } catch {
      this.initialized = true;
    }
  }
  async getKeys() {
    return await this.initialize(), this.storage.getKeys();
  }
  async getEntries() {
    return await this.initialize(), this.storage.getEntries();
  }
  async getItem(t) {
    return await this.initialize(), this.storage.getItem(t);
  }
  async setItem(t, e2) {
    return await this.initialize(), this.storage.setItem(t, e2);
  }
  async removeItem(t) {
    return await this.initialize(), this.storage.removeItem(t);
  }
  async initialize() {
    this.initialized || await new Promise((t) => {
      const e2 = setInterval(() => {
        this.initialized && (clearInterval(e2), t());
      }, 20);
    });
  }
};
class IEvents {
}
let n$3 = class n extends IEvents {
  constructor(e2) {
    super();
  }
};
const s = cjs$3.FIVE_SECONDS, r$1 = { pulse: "heartbeat_pulse" };
let i$1 = class i extends n$3 {
  constructor(e2) {
    super(e2), this.events = new eventsExports.EventEmitter(), this.interval = s, this.interval = (e2 == null ? void 0 : e2.interval) || s;
  }
  static async init(e2) {
    const t = new i(e2);
    return await t.init(), t;
  }
  async init() {
    await this.initialize();
  }
  stop() {
    clearInterval(this.intervalRef);
  }
  on(e2, t) {
    this.events.on(e2, t);
  }
  once(e2, t) {
    this.events.once(e2, t);
  }
  off(e2, t) {
    this.events.off(e2, t);
  }
  removeListener(e2, t) {
    this.events.removeListener(e2, t);
  }
  async initialize() {
    this.intervalRef = setInterval(() => this.pulse(), cjs$3.toMiliseconds(this.interval));
  }
  pulse() {
    this.events.emit(r$1.pulse);
  }
};
function tryStringify(o3) {
  try {
    return JSON.stringify(o3);
  } catch (e2) {
    return '"[Circular]"';
  }
}
var quickFormatUnescaped = format$1;
function format$1(f3, args, opts) {
  var ss2 = opts && opts.stringify || tryStringify;
  var offset = 1;
  if (typeof f3 === "object" && f3 !== null) {
    var len = args.length + offset;
    if (len === 1)
      return f3;
    var objects = new Array(len);
    objects[0] = ss2(f3);
    for (var index = 1; index < len; index++) {
      objects[index] = ss2(args[index]);
    }
    return objects.join(" ");
  }
  if (typeof f3 !== "string") {
    return f3;
  }
  var argLen = args.length;
  if (argLen === 0)
    return f3;
  var str = "";
  var a3 = 1 - offset;
  var lastPos = -1;
  var flen = f3 && f3.length || 0;
  for (var i3 = 0; i3 < flen; ) {
    if (f3.charCodeAt(i3) === 37 && i3 + 1 < flen) {
      lastPos = lastPos > -1 ? lastPos : 0;
      switch (f3.charCodeAt(i3 + 1)) {
        case 100:
        case 102:
          if (a3 >= argLen)
            break;
          if (args[a3] == null)
            break;
          if (lastPos < i3)
            str += f3.slice(lastPos, i3);
          str += Number(args[a3]);
          lastPos = i3 + 2;
          i3++;
          break;
        case 105:
          if (a3 >= argLen)
            break;
          if (args[a3] == null)
            break;
          if (lastPos < i3)
            str += f3.slice(lastPos, i3);
          str += Math.floor(Number(args[a3]));
          lastPos = i3 + 2;
          i3++;
          break;
        case 79:
        case 111:
        case 106:
          if (a3 >= argLen)
            break;
          if (args[a3] === void 0)
            break;
          if (lastPos < i3)
            str += f3.slice(lastPos, i3);
          var type = typeof args[a3];
          if (type === "string") {
            str += "'" + args[a3] + "'";
            lastPos = i3 + 2;
            i3++;
            break;
          }
          if (type === "function") {
            str += args[a3].name || "<anonymous>";
            lastPos = i3 + 2;
            i3++;
            break;
          }
          str += ss2(args[a3]);
          lastPos = i3 + 2;
          i3++;
          break;
        case 115:
          if (a3 >= argLen)
            break;
          if (lastPos < i3)
            str += f3.slice(lastPos, i3);
          str += String(args[a3]);
          lastPos = i3 + 2;
          i3++;
          break;
        case 37:
          if (lastPos < i3)
            str += f3.slice(lastPos, i3);
          str += "%";
          lastPos = i3 + 2;
          i3++;
          a3--;
          break;
      }
      ++a3;
    }
    ++i3;
  }
  if (lastPos === -1)
    return f3;
  else if (lastPos < flen) {
    str += f3.slice(lastPos);
  }
  return str;
}
const format = quickFormatUnescaped;
var browser$1 = pino;
const _console = pfGlobalThisOrFallback().console || {};
const stdSerializers = {
  mapHttpRequest: mock,
  mapHttpResponse: mock,
  wrapRequestSerializer: passthrough,
  wrapResponseSerializer: passthrough,
  wrapErrorSerializer: passthrough,
  req: mock,
  res: mock,
  err: asErrValue
};
function shouldSerialize(serialize, serializers) {
  if (Array.isArray(serialize)) {
    const hasToFilter = serialize.filter(function(k2) {
      return k2 !== "!stdSerializers.err";
    });
    return hasToFilter;
  } else if (serialize === true) {
    return Object.keys(serializers);
  }
  return false;
}
function pino(opts) {
  opts = opts || {};
  opts.browser = opts.browser || {};
  const transmit2 = opts.browser.transmit;
  if (transmit2 && typeof transmit2.send !== "function") {
    throw Error("pino: transmit option must have a send function");
  }
  const proto = opts.browser.write || _console;
  if (opts.browser.write)
    opts.browser.asObject = true;
  const serializers = opts.serializers || {};
  const serialize = shouldSerialize(opts.browser.serialize, serializers);
  let stdErrSerialize = opts.browser.serialize;
  if (Array.isArray(opts.browser.serialize) && opts.browser.serialize.indexOf("!stdSerializers.err") > -1)
    stdErrSerialize = false;
  const levels = ["error", "fatal", "warn", "info", "debug", "trace"];
  if (typeof proto === "function") {
    proto.error = proto.fatal = proto.warn = proto.info = proto.debug = proto.trace = proto;
  }
  if (opts.enabled === false)
    opts.level = "silent";
  const level = opts.level || "info";
  const logger = Object.create(proto);
  if (!logger.log)
    logger.log = noop;
  Object.defineProperty(logger, "levelVal", {
    get: getLevelVal
  });
  Object.defineProperty(logger, "level", {
    get: getLevel,
    set: setLevel
  });
  const setOpts = {
    transmit: transmit2,
    serialize,
    asObject: opts.browser.asObject,
    levels,
    timestamp: getTimeFunction(opts)
  };
  logger.levels = pino.levels;
  logger.level = level;
  logger.setMaxListeners = logger.getMaxListeners = logger.emit = logger.addListener = logger.on = logger.prependListener = logger.once = logger.prependOnceListener = logger.removeListener = logger.removeAllListeners = logger.listeners = logger.listenerCount = logger.eventNames = logger.write = logger.flush = noop;
  logger.serializers = serializers;
  logger._serialize = serialize;
  logger._stdErrSerialize = stdErrSerialize;
  logger.child = child;
  if (transmit2)
    logger._logEvent = createLogEventShape();
  function getLevelVal() {
    return this.level === "silent" ? Infinity : this.levels.values[this.level];
  }
  function getLevel() {
    return this._level;
  }
  function setLevel(level2) {
    if (level2 !== "silent" && !this.levels.values[level2]) {
      throw Error("unknown level " + level2);
    }
    this._level = level2;
    set(setOpts, logger, "error", "log");
    set(setOpts, logger, "fatal", "error");
    set(setOpts, logger, "warn", "error");
    set(setOpts, logger, "info", "log");
    set(setOpts, logger, "debug", "log");
    set(setOpts, logger, "trace", "log");
  }
  function child(bindings, childOptions) {
    if (!bindings) {
      throw new Error("missing bindings for child Pino");
    }
    childOptions = childOptions || {};
    if (serialize && bindings.serializers) {
      childOptions.serializers = bindings.serializers;
    }
    const childOptionsSerializers = childOptions.serializers;
    if (serialize && childOptionsSerializers) {
      var childSerializers = Object.assign({}, serializers, childOptionsSerializers);
      var childSerialize = opts.browser.serialize === true ? Object.keys(childSerializers) : serialize;
      delete bindings.serializers;
      applySerializers([bindings], childSerialize, childSerializers, this._stdErrSerialize);
    }
    function Child(parent) {
      this._childLevel = (parent._childLevel | 0) + 1;
      this.error = bind(parent, bindings, "error");
      this.fatal = bind(parent, bindings, "fatal");
      this.warn = bind(parent, bindings, "warn");
      this.info = bind(parent, bindings, "info");
      this.debug = bind(parent, bindings, "debug");
      this.trace = bind(parent, bindings, "trace");
      if (childSerializers) {
        this.serializers = childSerializers;
        this._serialize = childSerialize;
      }
      if (transmit2) {
        this._logEvent = createLogEventShape(
          [].concat(parent._logEvent.bindings, bindings)
        );
      }
    }
    Child.prototype = this;
    return new Child(this);
  }
  return logger;
}
pino.levels = {
  values: {
    fatal: 60,
    error: 50,
    warn: 40,
    info: 30,
    debug: 20,
    trace: 10
  },
  labels: {
    10: "trace",
    20: "debug",
    30: "info",
    40: "warn",
    50: "error",
    60: "fatal"
  }
};
pino.stdSerializers = stdSerializers;
pino.stdTimeFunctions = Object.assign({}, { nullTime, epochTime, unixTime, isoTime });
function set(opts, logger, level, fallback) {
  const proto = Object.getPrototypeOf(logger);
  logger[level] = logger.levelVal > logger.levels.values[level] ? noop : proto[level] ? proto[level] : _console[level] || _console[fallback] || noop;
  wrap(opts, logger, level);
}
function wrap(opts, logger, level) {
  if (!opts.transmit && logger[level] === noop)
    return;
  logger[level] = /* @__PURE__ */ function(write) {
    return function LOG() {
      const ts3 = opts.timestamp();
      const args = new Array(arguments.length);
      const proto = Object.getPrototypeOf && Object.getPrototypeOf(this) === _console ? _console : this;
      for (var i3 = 0; i3 < args.length; i3++)
        args[i3] = arguments[i3];
      if (opts.serialize && !opts.asObject) {
        applySerializers(args, this._serialize, this.serializers, this._stdErrSerialize);
      }
      if (opts.asObject)
        write.call(proto, asObject(this, level, args, ts3));
      else
        write.apply(proto, args);
      if (opts.transmit) {
        const transmitLevel = opts.transmit.level || logger.level;
        const transmitValue = pino.levels.values[transmitLevel];
        const methodValue = pino.levels.values[level];
        if (methodValue < transmitValue)
          return;
        transmit(this, {
          ts: ts3,
          methodLevel: level,
          methodValue,
          transmitLevel,
          transmitValue: pino.levels.values[opts.transmit.level || logger.level],
          send: opts.transmit.send,
          val: logger.levelVal
        }, args);
      }
    };
  }(logger[level]);
}
function asObject(logger, level, args, ts3) {
  if (logger._serialize)
    applySerializers(args, logger._serialize, logger.serializers, logger._stdErrSerialize);
  const argsCloned = args.slice();
  let msg = argsCloned[0];
  const o3 = {};
  if (ts3) {
    o3.time = ts3;
  }
  o3.level = pino.levels.values[level];
  let lvl = (logger._childLevel | 0) + 1;
  if (lvl < 1)
    lvl = 1;
  if (msg !== null && typeof msg === "object") {
    while (lvl-- && typeof argsCloned[0] === "object") {
      Object.assign(o3, argsCloned.shift());
    }
    msg = argsCloned.length ? format(argsCloned.shift(), argsCloned) : void 0;
  } else if (typeof msg === "string")
    msg = format(argsCloned.shift(), argsCloned);
  if (msg !== void 0)
    o3.msg = msg;
  return o3;
}
function applySerializers(args, serialize, serializers, stdErrSerialize) {
  for (const i3 in args) {
    if (stdErrSerialize && args[i3] instanceof Error) {
      args[i3] = pino.stdSerializers.err(args[i3]);
    } else if (typeof args[i3] === "object" && !Array.isArray(args[i3])) {
      for (const k2 in args[i3]) {
        if (serialize && serialize.indexOf(k2) > -1 && k2 in serializers) {
          args[i3][k2] = serializers[k2](args[i3][k2]);
        }
      }
    }
  }
}
function bind(parent, bindings, level) {
  return function() {
    const args = new Array(1 + arguments.length);
    args[0] = bindings;
    for (var i3 = 1; i3 < args.length; i3++) {
      args[i3] = arguments[i3 - 1];
    }
    return parent[level].apply(this, args);
  };
}
function transmit(logger, opts, args) {
  const send = opts.send;
  const ts3 = opts.ts;
  const methodLevel = opts.methodLevel;
  const methodValue = opts.methodValue;
  const val = opts.val;
  const bindings = logger._logEvent.bindings;
  applySerializers(
    args,
    logger._serialize || Object.keys(logger.serializers),
    logger.serializers,
    logger._stdErrSerialize === void 0 ? true : logger._stdErrSerialize
  );
  logger._logEvent.ts = ts3;
  logger._logEvent.messages = args.filter(function(arg) {
    return bindings.indexOf(arg) === -1;
  });
  logger._logEvent.level.label = methodLevel;
  logger._logEvent.level.value = methodValue;
  send(methodLevel, logger._logEvent, val);
  logger._logEvent = createLogEventShape(bindings);
}
function createLogEventShape(bindings) {
  return {
    ts: 0,
    messages: [],
    bindings: bindings || [],
    level: { label: "", value: 0 }
  };
}
function asErrValue(err) {
  const obj = {
    type: err.constructor.name,
    msg: err.message,
    stack: err.stack
  };
  for (const key in err) {
    if (obj[key] === void 0) {
      obj[key] = err[key];
    }
  }
  return obj;
}
function getTimeFunction(opts) {
  if (typeof opts.timestamp === "function") {
    return opts.timestamp;
  }
  if (opts.timestamp === false) {
    return nullTime;
  }
  return epochTime;
}
function mock() {
  return {};
}
function passthrough(a3) {
  return a3;
}
function noop() {
}
function nullTime() {
  return false;
}
function epochTime() {
  return Date.now();
}
function unixTime() {
  return Math.round(Date.now() / 1e3);
}
function isoTime() {
  return new Date(Date.now()).toISOString();
}
function pfGlobalThisOrFallback() {
  function defd(o3) {
    return typeof o3 !== "undefined" && o3;
  }
  try {
    if (typeof globalThis !== "undefined")
      return globalThis;
    Object.defineProperty(Object.prototype, "globalThis", {
      get: function() {
        delete Object.prototype.globalThis;
        return this.globalThis = this;
      },
      configurable: true
    });
    return globalThis;
  } catch (e2) {
    return defd(self) || defd(window) || defd(this) || {};
  }
}
const Hg = /* @__PURE__ */ getDefaultExportFromCjs(browser$1);
const c$1 = { level: "info" }, n$2 = "custom_context", l$1 = 1e3 * 1024;
let O$2 = class O {
  constructor(e2) {
    this.nodeValue = e2, this.sizeInBytes = new TextEncoder().encode(this.nodeValue).length, this.next = null;
  }
  get value() {
    return this.nodeValue;
  }
  get size() {
    return this.sizeInBytes;
  }
};
let d$2 = class d {
  constructor(e2) {
    this.head = null, this.tail = null, this.lengthInNodes = 0, this.maxSizeInBytes = e2, this.sizeInBytes = 0;
  }
  append(e2) {
    const t = new O$2(e2);
    if (t.size > this.maxSizeInBytes)
      throw new Error(`[LinkedList] Value too big to insert into list: ${e2} with size ${t.size}`);
    for (; this.size + t.size > this.maxSizeInBytes; )
      this.shift();
    this.head ? (this.tail && (this.tail.next = t), this.tail = t) : (this.head = t, this.tail = t), this.lengthInNodes++, this.sizeInBytes += t.size;
  }
  shift() {
    if (!this.head)
      return;
    const e2 = this.head;
    this.head = this.head.next, this.head || (this.tail = null), this.lengthInNodes--, this.sizeInBytes -= e2.size;
  }
  toArray() {
    const e2 = [];
    let t = this.head;
    for (; t !== null; )
      e2.push(t.value), t = t.next;
    return e2;
  }
  get length() {
    return this.lengthInNodes;
  }
  get size() {
    return this.sizeInBytes;
  }
  toOrderedArray() {
    return Array.from(this);
  }
  [Symbol.iterator]() {
    let e2 = this.head;
    return { next: () => {
      if (!e2)
        return { done: true, value: null };
      const t = e2.value;
      return e2 = e2.next, { done: false, value: t };
    } };
  }
};
let L$3 = class L2 {
  constructor(e2, t = l$1) {
    this.level = e2 ?? "error", this.levelValue = browser$1.levels.values[this.level], this.MAX_LOG_SIZE_IN_BYTES = t, this.logs = new d$2(this.MAX_LOG_SIZE_IN_BYTES);
  }
  forwardToConsole(e2, t) {
    t === browser$1.levels.values.error ? console.error(e2) : t === browser$1.levels.values.warn ? console.warn(e2) : t === browser$1.levels.values.debug ? console.debug(e2) : t === browser$1.levels.values.trace ? console.trace(e2) : console.log(e2);
  }
  appendToLogs(e2) {
    this.logs.append(safeJsonStringify({ timestamp: (/* @__PURE__ */ new Date()).toISOString(), log: e2 }));
    const t = typeof e2 == "string" ? JSON.parse(e2).level : e2.level;
    t >= this.levelValue && this.forwardToConsole(e2, t);
  }
  getLogs() {
    return this.logs;
  }
  clearLogs() {
    this.logs = new d$2(this.MAX_LOG_SIZE_IN_BYTES);
  }
  getLogArray() {
    return Array.from(this.logs);
  }
  logsToBlob(e2) {
    const t = this.getLogArray();
    return t.push(safeJsonStringify({ extraMetadata: e2 })), new Blob(t, { type: "application/json" });
  }
};
let m$1 = class m {
  constructor(e2, t = l$1) {
    this.baseChunkLogger = new L$3(e2, t);
  }
  write(e2) {
    this.baseChunkLogger.appendToLogs(e2);
  }
  getLogs() {
    return this.baseChunkLogger.getLogs();
  }
  clearLogs() {
    this.baseChunkLogger.clearLogs();
  }
  getLogArray() {
    return this.baseChunkLogger.getLogArray();
  }
  logsToBlob(e2) {
    return this.baseChunkLogger.logsToBlob(e2);
  }
  downloadLogsBlobInBrowser(e2) {
    const t = URL.createObjectURL(this.logsToBlob(e2)), o3 = document.createElement("a");
    o3.href = t, o3.download = `walletconnect-logs-${(/* @__PURE__ */ new Date()).toISOString()}.txt`, document.body.appendChild(o3), o3.click(), document.body.removeChild(o3), URL.revokeObjectURL(t);
  }
};
let B$1 = class B {
  constructor(e2, t = l$1) {
    this.baseChunkLogger = new L$3(e2, t);
  }
  write(e2) {
    this.baseChunkLogger.appendToLogs(e2);
  }
  getLogs() {
    return this.baseChunkLogger.getLogs();
  }
  clearLogs() {
    this.baseChunkLogger.clearLogs();
  }
  getLogArray() {
    return this.baseChunkLogger.getLogArray();
  }
  logsToBlob(e2) {
    return this.baseChunkLogger.logsToBlob(e2);
  }
};
var x = Object.defineProperty, S$3 = Object.defineProperties, _2 = Object.getOwnPropertyDescriptors, p$3 = Object.getOwnPropertySymbols, T$2 = Object.prototype.hasOwnProperty, z$3 = Object.prototype.propertyIsEnumerable, f$4 = (r2, e2, t) => e2 in r2 ? x(r2, e2, { enumerable: true, configurable: true, writable: true, value: t }) : r2[e2] = t, i2 = (r2, e2) => {
  for (var t in e2 || (e2 = {}))
    T$2.call(e2, t) && f$4(r2, t, e2[t]);
  if (p$3)
    for (var t of p$3(e2))
      z$3.call(e2, t) && f$4(r2, t, e2[t]);
  return r2;
}, g$3 = (r2, e2) => S$3(r2, _2(e2));
function k(r2) {
  return g$3(i2({}, r2), { level: (r2 == null ? void 0 : r2.level) || c$1.level });
}
function v$3(r2, e2 = n$2) {
  return r2[e2] || "";
}
function b$3(r2, e2, t = n$2) {
  return r2[t] = e2, r2;
}
function y$4(r2, e2 = n$2) {
  let t = "";
  return typeof r2.bindings > "u" ? t = v$3(r2, e2) : t = r2.bindings().context || "", t;
}
function w$3(r2, e2, t = n$2) {
  const o3 = y$4(r2, t);
  return o3.trim() ? `${o3}/${e2}` : e2;
}
function E$4(r2, e2, t = n$2) {
  const o3 = w$3(r2, e2, t), a3 = r2.child({ context: o3 });
  return b$3(a3, o3, t);
}
function C$2(r2) {
  var e2, t;
  const o3 = new m$1((e2 = r2.opts) == null ? void 0 : e2.level, r2.maxSizeInBytes);
  return { logger: Hg(g$3(i2({}, r2.opts), { level: "trace", browser: g$3(i2({}, (t = r2.opts) == null ? void 0 : t.browser), { write: (a3) => o3.write(a3) }) })), chunkLoggerController: o3 };
}
function I$1(r2) {
  var e2;
  const t = new B$1((e2 = r2.opts) == null ? void 0 : e2.level, r2.maxSizeInBytes);
  return { logger: Hg(g$3(i2({}, r2.opts), { level: "trace" }), t), chunkLoggerController: t };
}
function A(r2) {
  return typeof r2.loggerOverride < "u" && typeof r2.loggerOverride != "string" ? { logger: r2.loggerOverride, chunkLoggerController: null } : typeof window < "u" ? C$2(r2) : I$1(r2);
}
let n$1 = class n2 extends IEvents {
  constructor(s2) {
    super(), this.opts = s2, this.protocol = "wc", this.version = 2;
  }
};
let h$1 = class h2 extends IEvents {
  constructor(s2, t) {
    super(), this.core = s2, this.logger = t, this.records = /* @__PURE__ */ new Map();
  }
};
let a$1 = class a {
  constructor(s2, t) {
    this.logger = s2, this.core = t;
  }
};
let u$1 = class u extends IEvents {
  constructor(s2, t) {
    super(), this.relayer = s2, this.logger = t;
  }
};
let g$2 = class g extends IEvents {
  constructor(s2) {
    super();
  }
};
let p$2 = class p {
  constructor(s2, t, o3, M2) {
    this.core = s2, this.logger = t, this.name = o3;
  }
};
let d$1 = class d2 extends IEvents {
  constructor(s2, t) {
    super(), this.relayer = s2, this.logger = t;
  }
};
let E$3 = class E extends IEvents {
  constructor(s2, t) {
    super(), this.core = s2, this.logger = t;
  }
};
let y$3 = class y {
  constructor(s2, t) {
    this.projectId = s2, this.logger = t;
  }
};
let v$2 = class v {
  constructor(s2, t) {
    this.projectId = s2, this.logger = t;
  }
};
let b$2 = class b {
  constructor(s2) {
    this.opts = s2, this.protocol = "wc", this.version = 2;
  }
};
let w$2 = class w {
  constructor(s2) {
    this.client = s2;
  }
};
var ed25519 = {};
var sha512 = {};
(function(exports) {
  Object.defineProperty(exports, "__esModule", { value: true });
  var binary_12 = binary;
  var wipe_12 = wipe$1;
  exports.DIGEST_LENGTH = 64;
  exports.BLOCK_SIZE = 128;
  var SHA512 = (
    /** @class */
    function() {
      function SHA5122() {
        this.digestLength = exports.DIGEST_LENGTH;
        this.blockSize = exports.BLOCK_SIZE;
        this._stateHi = new Int32Array(8);
        this._stateLo = new Int32Array(8);
        this._tempHi = new Int32Array(16);
        this._tempLo = new Int32Array(16);
        this._buffer = new Uint8Array(256);
        this._bufferLength = 0;
        this._bytesHashed = 0;
        this._finished = false;
        this.reset();
      }
      SHA5122.prototype._initState = function() {
        this._stateHi[0] = 1779033703;
        this._stateHi[1] = 3144134277;
        this._stateHi[2] = 1013904242;
        this._stateHi[3] = 2773480762;
        this._stateHi[4] = 1359893119;
        this._stateHi[5] = 2600822924;
        this._stateHi[6] = 528734635;
        this._stateHi[7] = 1541459225;
        this._stateLo[0] = 4089235720;
        this._stateLo[1] = 2227873595;
        this._stateLo[2] = 4271175723;
        this._stateLo[3] = 1595750129;
        this._stateLo[4] = 2917565137;
        this._stateLo[5] = 725511199;
        this._stateLo[6] = 4215389547;
        this._stateLo[7] = 327033209;
      };
      SHA5122.prototype.reset = function() {
        this._initState();
        this._bufferLength = 0;
        this._bytesHashed = 0;
        this._finished = false;
        return this;
      };
      SHA5122.prototype.clean = function() {
        wipe_12.wipe(this._buffer);
        wipe_12.wipe(this._tempHi);
        wipe_12.wipe(this._tempLo);
        this.reset();
      };
      SHA5122.prototype.update = function(data, dataLength) {
        if (dataLength === void 0) {
          dataLength = data.length;
        }
        if (this._finished) {
          throw new Error("SHA512: can't update because hash was finished.");
        }
        var dataPos = 0;
        this._bytesHashed += dataLength;
        if (this._bufferLength > 0) {
          while (this._bufferLength < exports.BLOCK_SIZE && dataLength > 0) {
            this._buffer[this._bufferLength++] = data[dataPos++];
            dataLength--;
          }
          if (this._bufferLength === this.blockSize) {
            hashBlocks(this._tempHi, this._tempLo, this._stateHi, this._stateLo, this._buffer, 0, this.blockSize);
            this._bufferLength = 0;
          }
        }
        if (dataLength >= this.blockSize) {
          dataPos = hashBlocks(this._tempHi, this._tempLo, this._stateHi, this._stateLo, data, dataPos, dataLength);
          dataLength %= this.blockSize;
        }
        while (dataLength > 0) {
          this._buffer[this._bufferLength++] = data[dataPos++];
          dataLength--;
        }
        return this;
      };
      SHA5122.prototype.finish = function(out) {
        if (!this._finished) {
          var bytesHashed = this._bytesHashed;
          var left = this._bufferLength;
          var bitLenHi = bytesHashed / 536870912 | 0;
          var bitLenLo = bytesHashed << 3;
          var padLength = bytesHashed % 128 < 112 ? 128 : 256;
          this._buffer[left] = 128;
          for (var i3 = left + 1; i3 < padLength - 8; i3++) {
            this._buffer[i3] = 0;
          }
          binary_12.writeUint32BE(bitLenHi, this._buffer, padLength - 8);
          binary_12.writeUint32BE(bitLenLo, this._buffer, padLength - 4);
          hashBlocks(this._tempHi, this._tempLo, this._stateHi, this._stateLo, this._buffer, 0, padLength);
          this._finished = true;
        }
        for (var i3 = 0; i3 < this.digestLength / 8; i3++) {
          binary_12.writeUint32BE(this._stateHi[i3], out, i3 * 8);
          binary_12.writeUint32BE(this._stateLo[i3], out, i3 * 8 + 4);
        }
        return this;
      };
      SHA5122.prototype.digest = function() {
        var out = new Uint8Array(this.digestLength);
        this.finish(out);
        return out;
      };
      SHA5122.prototype.saveState = function() {
        if (this._finished) {
          throw new Error("SHA256: cannot save finished state");
        }
        return {
          stateHi: new Int32Array(this._stateHi),
          stateLo: new Int32Array(this._stateLo),
          buffer: this._bufferLength > 0 ? new Uint8Array(this._buffer) : void 0,
          bufferLength: this._bufferLength,
          bytesHashed: this._bytesHashed
        };
      };
      SHA5122.prototype.restoreState = function(savedState) {
        this._stateHi.set(savedState.stateHi);
        this._stateLo.set(savedState.stateLo);
        this._bufferLength = savedState.bufferLength;
        if (savedState.buffer) {
          this._buffer.set(savedState.buffer);
        }
        this._bytesHashed = savedState.bytesHashed;
        this._finished = false;
        return this;
      };
      SHA5122.prototype.cleanSavedState = function(savedState) {
        wipe_12.wipe(savedState.stateHi);
        wipe_12.wipe(savedState.stateLo);
        if (savedState.buffer) {
          wipe_12.wipe(savedState.buffer);
        }
        savedState.bufferLength = 0;
        savedState.bytesHashed = 0;
      };
      return SHA5122;
    }()
  );
  exports.SHA512 = SHA512;
  var K2 = new Int32Array([
    1116352408,
    3609767458,
    1899447441,
    602891725,
    3049323471,
    3964484399,
    3921009573,
    2173295548,
    961987163,
    4081628472,
    1508970993,
    3053834265,
    2453635748,
    2937671579,
    2870763221,
    3664609560,
    3624381080,
    2734883394,
    310598401,
    1164996542,
    607225278,
    1323610764,
    1426881987,
    3590304994,
    1925078388,
    4068182383,
    2162078206,
    991336113,
    2614888103,
    633803317,
    3248222580,
    3479774868,
    3835390401,
    2666613458,
    4022224774,
    944711139,
    264347078,
    2341262773,
    604807628,
    2007800933,
    770255983,
    1495990901,
    1249150122,
    1856431235,
    1555081692,
    3175218132,
    1996064986,
    2198950837,
    2554220882,
    3999719339,
    2821834349,
    766784016,
    2952996808,
    2566594879,
    3210313671,
    3203337956,
    3336571891,
    1034457026,
    3584528711,
    2466948901,
    113926993,
    3758326383,
    338241895,
    168717936,
    666307205,
    1188179964,
    773529912,
    1546045734,
    1294757372,
    1522805485,
    1396182291,
    2643833823,
    1695183700,
    2343527390,
    1986661051,
    1014477480,
    2177026350,
    1206759142,
    2456956037,
    344077627,
    2730485921,
    1290863460,
    2820302411,
    3158454273,
    3259730800,
    3505952657,
    3345764771,
    106217008,
    3516065817,
    3606008344,
    3600352804,
    1432725776,
    4094571909,
    1467031594,
    275423344,
    851169720,
    430227734,
    3100823752,
    506948616,
    1363258195,
    659060556,
    3750685593,
    883997877,
    3785050280,
    958139571,
    3318307427,
    1322822218,
    3812723403,
    1537002063,
    2003034995,
    1747873779,
    3602036899,
    1955562222,
    1575990012,
    2024104815,
    1125592928,
    2227730452,
    2716904306,
    2361852424,
    442776044,
    2428436474,
    593698344,
    2756734187,
    3733110249,
    3204031479,
    2999351573,
    3329325298,
    3815920427,
    3391569614,
    3928383900,
    3515267271,
    566280711,
    3940187606,
    3454069534,
    4118630271,
    4000239992,
    116418474,
    1914138554,
    174292421,
    2731055270,
    289380356,
    3203993006,
    460393269,
    320620315,
    685471733,
    587496836,
    852142971,
    1086792851,
    1017036298,
    365543100,
    1126000580,
    2618297676,
    1288033470,
    3409855158,
    1501505948,
    4234509866,
    1607167915,
    987167468,
    1816402316,
    1246189591
  ]);
  function hashBlocks(wh, wl, hh2, hl, m3, pos, len) {
    var ah0 = hh2[0], ah1 = hh2[1], ah2 = hh2[2], ah3 = hh2[3], ah4 = hh2[4], ah5 = hh2[5], ah6 = hh2[6], ah7 = hh2[7], al0 = hl[0], al1 = hl[1], al2 = hl[2], al3 = hl[3], al4 = hl[4], al5 = hl[5], al6 = hl[6], al7 = hl[7];
    var h4, l2;
    var th2, tl;
    var a3, b3, c2, d4;
    while (len >= 128) {
      for (var i3 = 0; i3 < 16; i3++) {
        var j2 = 8 * i3 + pos;
        wh[i3] = binary_12.readUint32BE(m3, j2);
        wl[i3] = binary_12.readUint32BE(m3, j2 + 4);
      }
      for (var i3 = 0; i3 < 80; i3++) {
        var bh0 = ah0;
        var bh1 = ah1;
        var bh2 = ah2;
        var bh3 = ah3;
        var bh4 = ah4;
        var bh5 = ah5;
        var bh6 = ah6;
        var bh7 = ah7;
        var bl0 = al0;
        var bl1 = al1;
        var bl2 = al2;
        var bl3 = al3;
        var bl4 = al4;
        var bl5 = al5;
        var bl6 = al6;
        var bl7 = al7;
        h4 = ah7;
        l2 = al7;
        a3 = l2 & 65535;
        b3 = l2 >>> 16;
        c2 = h4 & 65535;
        d4 = h4 >>> 16;
        h4 = (ah4 >>> 14 | al4 << 32 - 14) ^ (ah4 >>> 18 | al4 << 32 - 18) ^ (al4 >>> 41 - 32 | ah4 << 32 - (41 - 32));
        l2 = (al4 >>> 14 | ah4 << 32 - 14) ^ (al4 >>> 18 | ah4 << 32 - 18) ^ (ah4 >>> 41 - 32 | al4 << 32 - (41 - 32));
        a3 += l2 & 65535;
        b3 += l2 >>> 16;
        c2 += h4 & 65535;
        d4 += h4 >>> 16;
        h4 = ah4 & ah5 ^ ~ah4 & ah6;
        l2 = al4 & al5 ^ ~al4 & al6;
        a3 += l2 & 65535;
        b3 += l2 >>> 16;
        c2 += h4 & 65535;
        d4 += h4 >>> 16;
        h4 = K2[i3 * 2];
        l2 = K2[i3 * 2 + 1];
        a3 += l2 & 65535;
        b3 += l2 >>> 16;
        c2 += h4 & 65535;
        d4 += h4 >>> 16;
        h4 = wh[i3 % 16];
        l2 = wl[i3 % 16];
        a3 += l2 & 65535;
        b3 += l2 >>> 16;
        c2 += h4 & 65535;
        d4 += h4 >>> 16;
        b3 += a3 >>> 16;
        c2 += b3 >>> 16;
        d4 += c2 >>> 16;
        th2 = c2 & 65535 | d4 << 16;
        tl = a3 & 65535 | b3 << 16;
        h4 = th2;
        l2 = tl;
        a3 = l2 & 65535;
        b3 = l2 >>> 16;
        c2 = h4 & 65535;
        d4 = h4 >>> 16;
        h4 = (ah0 >>> 28 | al0 << 32 - 28) ^ (al0 >>> 34 - 32 | ah0 << 32 - (34 - 32)) ^ (al0 >>> 39 - 32 | ah0 << 32 - (39 - 32));
        l2 = (al0 >>> 28 | ah0 << 32 - 28) ^ (ah0 >>> 34 - 32 | al0 << 32 - (34 - 32)) ^ (ah0 >>> 39 - 32 | al0 << 32 - (39 - 32));
        a3 += l2 & 65535;
        b3 += l2 >>> 16;
        c2 += h4 & 65535;
        d4 += h4 >>> 16;
        h4 = ah0 & ah1 ^ ah0 & ah2 ^ ah1 & ah2;
        l2 = al0 & al1 ^ al0 & al2 ^ al1 & al2;
        a3 += l2 & 65535;
        b3 += l2 >>> 16;
        c2 += h4 & 65535;
        d4 += h4 >>> 16;
        b3 += a3 >>> 16;
        c2 += b3 >>> 16;
        d4 += c2 >>> 16;
        bh7 = c2 & 65535 | d4 << 16;
        bl7 = a3 & 65535 | b3 << 16;
        h4 = bh3;
        l2 = bl3;
        a3 = l2 & 65535;
        b3 = l2 >>> 16;
        c2 = h4 & 65535;
        d4 = h4 >>> 16;
        h4 = th2;
        l2 = tl;
        a3 += l2 & 65535;
        b3 += l2 >>> 16;
        c2 += h4 & 65535;
        d4 += h4 >>> 16;
        b3 += a3 >>> 16;
        c2 += b3 >>> 16;
        d4 += c2 >>> 16;
        bh3 = c2 & 65535 | d4 << 16;
        bl3 = a3 & 65535 | b3 << 16;
        ah1 = bh0;
        ah2 = bh1;
        ah3 = bh2;
        ah4 = bh3;
        ah5 = bh4;
        ah6 = bh5;
        ah7 = bh6;
        ah0 = bh7;
        al1 = bl0;
        al2 = bl1;
        al3 = bl2;
        al4 = bl3;
        al5 = bl4;
        al6 = bl5;
        al7 = bl6;
        al0 = bl7;
        if (i3 % 16 === 15) {
          for (var j2 = 0; j2 < 16; j2++) {
            h4 = wh[j2];
            l2 = wl[j2];
            a3 = l2 & 65535;
            b3 = l2 >>> 16;
            c2 = h4 & 65535;
            d4 = h4 >>> 16;
            h4 = wh[(j2 + 9) % 16];
            l2 = wl[(j2 + 9) % 16];
            a3 += l2 & 65535;
            b3 += l2 >>> 16;
            c2 += h4 & 65535;
            d4 += h4 >>> 16;
            th2 = wh[(j2 + 1) % 16];
            tl = wl[(j2 + 1) % 16];
            h4 = (th2 >>> 1 | tl << 32 - 1) ^ (th2 >>> 8 | tl << 32 - 8) ^ th2 >>> 7;
            l2 = (tl >>> 1 | th2 << 32 - 1) ^ (tl >>> 8 | th2 << 32 - 8) ^ (tl >>> 7 | th2 << 32 - 7);
            a3 += l2 & 65535;
            b3 += l2 >>> 16;
            c2 += h4 & 65535;
            d4 += h4 >>> 16;
            th2 = wh[(j2 + 14) % 16];
            tl = wl[(j2 + 14) % 16];
            h4 = (th2 >>> 19 | tl << 32 - 19) ^ (tl >>> 61 - 32 | th2 << 32 - (61 - 32)) ^ th2 >>> 6;
            l2 = (tl >>> 19 | th2 << 32 - 19) ^ (th2 >>> 61 - 32 | tl << 32 - (61 - 32)) ^ (tl >>> 6 | th2 << 32 - 6);
            a3 += l2 & 65535;
            b3 += l2 >>> 16;
            c2 += h4 & 65535;
            d4 += h4 >>> 16;
            b3 += a3 >>> 16;
            c2 += b3 >>> 16;
            d4 += c2 >>> 16;
            wh[j2] = c2 & 65535 | d4 << 16;
            wl[j2] = a3 & 65535 | b3 << 16;
          }
        }
      }
      h4 = ah0;
      l2 = al0;
      a3 = l2 & 65535;
      b3 = l2 >>> 16;
      c2 = h4 & 65535;
      d4 = h4 >>> 16;
      h4 = hh2[0];
      l2 = hl[0];
      a3 += l2 & 65535;
      b3 += l2 >>> 16;
      c2 += h4 & 65535;
      d4 += h4 >>> 16;
      b3 += a3 >>> 16;
      c2 += b3 >>> 16;
      d4 += c2 >>> 16;
      hh2[0] = ah0 = c2 & 65535 | d4 << 16;
      hl[0] = al0 = a3 & 65535 | b3 << 16;
      h4 = ah1;
      l2 = al1;
      a3 = l2 & 65535;
      b3 = l2 >>> 16;
      c2 = h4 & 65535;
      d4 = h4 >>> 16;
      h4 = hh2[1];
      l2 = hl[1];
      a3 += l2 & 65535;
      b3 += l2 >>> 16;
      c2 += h4 & 65535;
      d4 += h4 >>> 16;
      b3 += a3 >>> 16;
      c2 += b3 >>> 16;
      d4 += c2 >>> 16;
      hh2[1] = ah1 = c2 & 65535 | d4 << 16;
      hl[1] = al1 = a3 & 65535 | b3 << 16;
      h4 = ah2;
      l2 = al2;
      a3 = l2 & 65535;
      b3 = l2 >>> 16;
      c2 = h4 & 65535;
      d4 = h4 >>> 16;
      h4 = hh2[2];
      l2 = hl[2];
      a3 += l2 & 65535;
      b3 += l2 >>> 16;
      c2 += h4 & 65535;
      d4 += h4 >>> 16;
      b3 += a3 >>> 16;
      c2 += b3 >>> 16;
      d4 += c2 >>> 16;
      hh2[2] = ah2 = c2 & 65535 | d4 << 16;
      hl[2] = al2 = a3 & 65535 | b3 << 16;
      h4 = ah3;
      l2 = al3;
      a3 = l2 & 65535;
      b3 = l2 >>> 16;
      c2 = h4 & 65535;
      d4 = h4 >>> 16;
      h4 = hh2[3];
      l2 = hl[3];
      a3 += l2 & 65535;
      b3 += l2 >>> 16;
      c2 += h4 & 65535;
      d4 += h4 >>> 16;
      b3 += a3 >>> 16;
      c2 += b3 >>> 16;
      d4 += c2 >>> 16;
      hh2[3] = ah3 = c2 & 65535 | d4 << 16;
      hl[3] = al3 = a3 & 65535 | b3 << 16;
      h4 = ah4;
      l2 = al4;
      a3 = l2 & 65535;
      b3 = l2 >>> 16;
      c2 = h4 & 65535;
      d4 = h4 >>> 16;
      h4 = hh2[4];
      l2 = hl[4];
      a3 += l2 & 65535;
      b3 += l2 >>> 16;
      c2 += h4 & 65535;
      d4 += h4 >>> 16;
      b3 += a3 >>> 16;
      c2 += b3 >>> 16;
      d4 += c2 >>> 16;
      hh2[4] = ah4 = c2 & 65535 | d4 << 16;
      hl[4] = al4 = a3 & 65535 | b3 << 16;
      h4 = ah5;
      l2 = al5;
      a3 = l2 & 65535;
      b3 = l2 >>> 16;
      c2 = h4 & 65535;
      d4 = h4 >>> 16;
      h4 = hh2[5];
      l2 = hl[5];
      a3 += l2 & 65535;
      b3 += l2 >>> 16;
      c2 += h4 & 65535;
      d4 += h4 >>> 16;
      b3 += a3 >>> 16;
      c2 += b3 >>> 16;
      d4 += c2 >>> 16;
      hh2[5] = ah5 = c2 & 65535 | d4 << 16;
      hl[5] = al5 = a3 & 65535 | b3 << 16;
      h4 = ah6;
      l2 = al6;
      a3 = l2 & 65535;
      b3 = l2 >>> 16;
      c2 = h4 & 65535;
      d4 = h4 >>> 16;
      h4 = hh2[6];
      l2 = hl[6];
      a3 += l2 & 65535;
      b3 += l2 >>> 16;
      c2 += h4 & 65535;
      d4 += h4 >>> 16;
      b3 += a3 >>> 16;
      c2 += b3 >>> 16;
      d4 += c2 >>> 16;
      hh2[6] = ah6 = c2 & 65535 | d4 << 16;
      hl[6] = al6 = a3 & 65535 | b3 << 16;
      h4 = ah7;
      l2 = al7;
      a3 = l2 & 65535;
      b3 = l2 >>> 16;
      c2 = h4 & 65535;
      d4 = h4 >>> 16;
      h4 = hh2[7];
      l2 = hl[7];
      a3 += l2 & 65535;
      b3 += l2 >>> 16;
      c2 += h4 & 65535;
      d4 += h4 >>> 16;
      b3 += a3 >>> 16;
      c2 += b3 >>> 16;
      d4 += c2 >>> 16;
      hh2[7] = ah7 = c2 & 65535 | d4 << 16;
      hl[7] = al7 = a3 & 65535 | b3 << 16;
      pos += 128;
      len -= 128;
    }
    return pos;
  }
  function hash2(data) {
    var h4 = new SHA512();
    h4.update(data);
    var digest = h4.digest();
    h4.clean();
    return digest;
  }
  exports.hash = hash2;
})(sha512);
(function(exports) {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.convertSecretKeyToX25519 = exports.convertPublicKeyToX25519 = exports.verify = exports.sign = exports.extractPublicKeyFromSecretKey = exports.generateKeyPair = exports.generateKeyPairFromSeed = exports.SEED_LENGTH = exports.SECRET_KEY_LENGTH = exports.PUBLIC_KEY_LENGTH = exports.SIGNATURE_LENGTH = void 0;
  const random_1 = random;
  const sha512_1 = sha512;
  const wipe_12 = wipe$1;
  exports.SIGNATURE_LENGTH = 64;
  exports.PUBLIC_KEY_LENGTH = 32;
  exports.SECRET_KEY_LENGTH = 64;
  exports.SEED_LENGTH = 32;
  function gf2(init) {
    const r2 = new Float64Array(16);
    if (init) {
      for (let i3 = 0; i3 < init.length; i3++) {
        r2[i3] = init[i3];
      }
    }
    return r2;
  }
  const _9 = new Uint8Array(32);
  _9[0] = 9;
  const gf0 = gf2();
  const gf1 = gf2([1]);
  const D2 = gf2([
    30883,
    4953,
    19914,
    30187,
    55467,
    16705,
    2637,
    112,
    59544,
    30585,
    16505,
    36039,
    65139,
    11119,
    27886,
    20995
  ]);
  const D22 = gf2([
    61785,
    9906,
    39828,
    60374,
    45398,
    33411,
    5274,
    224,
    53552,
    61171,
    33010,
    6542,
    64743,
    22239,
    55772,
    9222
  ]);
  const X2 = gf2([
    54554,
    36645,
    11616,
    51542,
    42930,
    38181,
    51040,
    26924,
    56412,
    64982,
    57905,
    49316,
    21502,
    52590,
    14035,
    8553
  ]);
  const Y = gf2([
    26200,
    26214,
    26214,
    26214,
    26214,
    26214,
    26214,
    26214,
    26214,
    26214,
    26214,
    26214,
    26214,
    26214,
    26214,
    26214
  ]);
  const I2 = gf2([
    41136,
    18958,
    6951,
    50414,
    58488,
    44335,
    6150,
    12099,
    55207,
    15867,
    153,
    11085,
    57099,
    20417,
    9344,
    11139
  ]);
  function set25519(r2, a3) {
    for (let i3 = 0; i3 < 16; i3++) {
      r2[i3] = a3[i3] | 0;
    }
  }
  function car25519(o3) {
    let c2 = 1;
    for (let i3 = 0; i3 < 16; i3++) {
      let v3 = o3[i3] + c2 + 65535;
      c2 = Math.floor(v3 / 65536);
      o3[i3] = v3 - c2 * 65536;
    }
    o3[0] += c2 - 1 + 37 * (c2 - 1);
  }
  function sel25519(p3, q2, b3) {
    const c2 = ~(b3 - 1);
    for (let i3 = 0; i3 < 16; i3++) {
      const t = c2 & (p3[i3] ^ q2[i3]);
      p3[i3] ^= t;
      q2[i3] ^= t;
    }
  }
  function pack25519(o3, n4) {
    const m3 = gf2();
    const t = gf2();
    for (let i3 = 0; i3 < 16; i3++) {
      t[i3] = n4[i3];
    }
    car25519(t);
    car25519(t);
    car25519(t);
    for (let j2 = 0; j2 < 2; j2++) {
      m3[0] = t[0] - 65517;
      for (let i3 = 1; i3 < 15; i3++) {
        m3[i3] = t[i3] - 65535 - (m3[i3 - 1] >> 16 & 1);
        m3[i3 - 1] &= 65535;
      }
      m3[15] = t[15] - 32767 - (m3[14] >> 16 & 1);
      const b3 = m3[15] >> 16 & 1;
      m3[14] &= 65535;
      sel25519(t, m3, 1 - b3);
    }
    for (let i3 = 0; i3 < 16; i3++) {
      o3[2 * i3] = t[i3] & 255;
      o3[2 * i3 + 1] = t[i3] >> 8;
    }
  }
  function verify32(x2, y3) {
    let d4 = 0;
    for (let i3 = 0; i3 < 32; i3++) {
      d4 |= x2[i3] ^ y3[i3];
    }
    return (1 & d4 - 1 >>> 8) - 1;
  }
  function neq25519(a3, b3) {
    const c2 = new Uint8Array(32);
    const d4 = new Uint8Array(32);
    pack25519(c2, a3);
    pack25519(d4, b3);
    return verify32(c2, d4);
  }
  function par25519(a3) {
    const d4 = new Uint8Array(32);
    pack25519(d4, a3);
    return d4[0] & 1;
  }
  function unpack25519(o3, n4) {
    for (let i3 = 0; i3 < 16; i3++) {
      o3[i3] = n4[2 * i3] + (n4[2 * i3 + 1] << 8);
    }
    o3[15] &= 32767;
  }
  function add(o3, a3, b3) {
    for (let i3 = 0; i3 < 16; i3++) {
      o3[i3] = a3[i3] + b3[i3];
    }
  }
  function sub(o3, a3, b3) {
    for (let i3 = 0; i3 < 16; i3++) {
      o3[i3] = a3[i3] - b3[i3];
    }
  }
  function mul(o3, a3, b3) {
    let v3, c2, t0 = 0, t1 = 0, t2 = 0, t3 = 0, t4 = 0, t5 = 0, t6 = 0, t7 = 0, t8 = 0, t9 = 0, t10 = 0, t11 = 0, t12 = 0, t13 = 0, t14 = 0, t15 = 0, t16 = 0, t17 = 0, t18 = 0, t19 = 0, t20 = 0, t21 = 0, t22 = 0, t23 = 0, t24 = 0, t25 = 0, t26 = 0, t27 = 0, t28 = 0, t29 = 0, t30 = 0, b02 = b3[0], b1 = b3[1], b22 = b3[2], b32 = b3[3], b4 = b3[4], b5 = b3[5], b6 = b3[6], b7 = b3[7], b8 = b3[8], b9 = b3[9], b10 = b3[10], b11 = b3[11], b12 = b3[12], b13 = b3[13], b14 = b3[14], b15 = b3[15];
    v3 = a3[0];
    t0 += v3 * b02;
    t1 += v3 * b1;
    t2 += v3 * b22;
    t3 += v3 * b32;
    t4 += v3 * b4;
    t5 += v3 * b5;
    t6 += v3 * b6;
    t7 += v3 * b7;
    t8 += v3 * b8;
    t9 += v3 * b9;
    t10 += v3 * b10;
    t11 += v3 * b11;
    t12 += v3 * b12;
    t13 += v3 * b13;
    t14 += v3 * b14;
    t15 += v3 * b15;
    v3 = a3[1];
    t1 += v3 * b02;
    t2 += v3 * b1;
    t3 += v3 * b22;
    t4 += v3 * b32;
    t5 += v3 * b4;
    t6 += v3 * b5;
    t7 += v3 * b6;
    t8 += v3 * b7;
    t9 += v3 * b8;
    t10 += v3 * b9;
    t11 += v3 * b10;
    t12 += v3 * b11;
    t13 += v3 * b12;
    t14 += v3 * b13;
    t15 += v3 * b14;
    t16 += v3 * b15;
    v3 = a3[2];
    t2 += v3 * b02;
    t3 += v3 * b1;
    t4 += v3 * b22;
    t5 += v3 * b32;
    t6 += v3 * b4;
    t7 += v3 * b5;
    t8 += v3 * b6;
    t9 += v3 * b7;
    t10 += v3 * b8;
    t11 += v3 * b9;
    t12 += v3 * b10;
    t13 += v3 * b11;
    t14 += v3 * b12;
    t15 += v3 * b13;
    t16 += v3 * b14;
    t17 += v3 * b15;
    v3 = a3[3];
    t3 += v3 * b02;
    t4 += v3 * b1;
    t5 += v3 * b22;
    t6 += v3 * b32;
    t7 += v3 * b4;
    t8 += v3 * b5;
    t9 += v3 * b6;
    t10 += v3 * b7;
    t11 += v3 * b8;
    t12 += v3 * b9;
    t13 += v3 * b10;
    t14 += v3 * b11;
    t15 += v3 * b12;
    t16 += v3 * b13;
    t17 += v3 * b14;
    t18 += v3 * b15;
    v3 = a3[4];
    t4 += v3 * b02;
    t5 += v3 * b1;
    t6 += v3 * b22;
    t7 += v3 * b32;
    t8 += v3 * b4;
    t9 += v3 * b5;
    t10 += v3 * b6;
    t11 += v3 * b7;
    t12 += v3 * b8;
    t13 += v3 * b9;
    t14 += v3 * b10;
    t15 += v3 * b11;
    t16 += v3 * b12;
    t17 += v3 * b13;
    t18 += v3 * b14;
    t19 += v3 * b15;
    v3 = a3[5];
    t5 += v3 * b02;
    t6 += v3 * b1;
    t7 += v3 * b22;
    t8 += v3 * b32;
    t9 += v3 * b4;
    t10 += v3 * b5;
    t11 += v3 * b6;
    t12 += v3 * b7;
    t13 += v3 * b8;
    t14 += v3 * b9;
    t15 += v3 * b10;
    t16 += v3 * b11;
    t17 += v3 * b12;
    t18 += v3 * b13;
    t19 += v3 * b14;
    t20 += v3 * b15;
    v3 = a3[6];
    t6 += v3 * b02;
    t7 += v3 * b1;
    t8 += v3 * b22;
    t9 += v3 * b32;
    t10 += v3 * b4;
    t11 += v3 * b5;
    t12 += v3 * b6;
    t13 += v3 * b7;
    t14 += v3 * b8;
    t15 += v3 * b9;
    t16 += v3 * b10;
    t17 += v3 * b11;
    t18 += v3 * b12;
    t19 += v3 * b13;
    t20 += v3 * b14;
    t21 += v3 * b15;
    v3 = a3[7];
    t7 += v3 * b02;
    t8 += v3 * b1;
    t9 += v3 * b22;
    t10 += v3 * b32;
    t11 += v3 * b4;
    t12 += v3 * b5;
    t13 += v3 * b6;
    t14 += v3 * b7;
    t15 += v3 * b8;
    t16 += v3 * b9;
    t17 += v3 * b10;
    t18 += v3 * b11;
    t19 += v3 * b12;
    t20 += v3 * b13;
    t21 += v3 * b14;
    t22 += v3 * b15;
    v3 = a3[8];
    t8 += v3 * b02;
    t9 += v3 * b1;
    t10 += v3 * b22;
    t11 += v3 * b32;
    t12 += v3 * b4;
    t13 += v3 * b5;
    t14 += v3 * b6;
    t15 += v3 * b7;
    t16 += v3 * b8;
    t17 += v3 * b9;
    t18 += v3 * b10;
    t19 += v3 * b11;
    t20 += v3 * b12;
    t21 += v3 * b13;
    t22 += v3 * b14;
    t23 += v3 * b15;
    v3 = a3[9];
    t9 += v3 * b02;
    t10 += v3 * b1;
    t11 += v3 * b22;
    t12 += v3 * b32;
    t13 += v3 * b4;
    t14 += v3 * b5;
    t15 += v3 * b6;
    t16 += v3 * b7;
    t17 += v3 * b8;
    t18 += v3 * b9;
    t19 += v3 * b10;
    t20 += v3 * b11;
    t21 += v3 * b12;
    t22 += v3 * b13;
    t23 += v3 * b14;
    t24 += v3 * b15;
    v3 = a3[10];
    t10 += v3 * b02;
    t11 += v3 * b1;
    t12 += v3 * b22;
    t13 += v3 * b32;
    t14 += v3 * b4;
    t15 += v3 * b5;
    t16 += v3 * b6;
    t17 += v3 * b7;
    t18 += v3 * b8;
    t19 += v3 * b9;
    t20 += v3 * b10;
    t21 += v3 * b11;
    t22 += v3 * b12;
    t23 += v3 * b13;
    t24 += v3 * b14;
    t25 += v3 * b15;
    v3 = a3[11];
    t11 += v3 * b02;
    t12 += v3 * b1;
    t13 += v3 * b22;
    t14 += v3 * b32;
    t15 += v3 * b4;
    t16 += v3 * b5;
    t17 += v3 * b6;
    t18 += v3 * b7;
    t19 += v3 * b8;
    t20 += v3 * b9;
    t21 += v3 * b10;
    t22 += v3 * b11;
    t23 += v3 * b12;
    t24 += v3 * b13;
    t25 += v3 * b14;
    t26 += v3 * b15;
    v3 = a3[12];
    t12 += v3 * b02;
    t13 += v3 * b1;
    t14 += v3 * b22;
    t15 += v3 * b32;
    t16 += v3 * b4;
    t17 += v3 * b5;
    t18 += v3 * b6;
    t19 += v3 * b7;
    t20 += v3 * b8;
    t21 += v3 * b9;
    t22 += v3 * b10;
    t23 += v3 * b11;
    t24 += v3 * b12;
    t25 += v3 * b13;
    t26 += v3 * b14;
    t27 += v3 * b15;
    v3 = a3[13];
    t13 += v3 * b02;
    t14 += v3 * b1;
    t15 += v3 * b22;
    t16 += v3 * b32;
    t17 += v3 * b4;
    t18 += v3 * b5;
    t19 += v3 * b6;
    t20 += v3 * b7;
    t21 += v3 * b8;
    t22 += v3 * b9;
    t23 += v3 * b10;
    t24 += v3 * b11;
    t25 += v3 * b12;
    t26 += v3 * b13;
    t27 += v3 * b14;
    t28 += v3 * b15;
    v3 = a3[14];
    t14 += v3 * b02;
    t15 += v3 * b1;
    t16 += v3 * b22;
    t17 += v3 * b32;
    t18 += v3 * b4;
    t19 += v3 * b5;
    t20 += v3 * b6;
    t21 += v3 * b7;
    t22 += v3 * b8;
    t23 += v3 * b9;
    t24 += v3 * b10;
    t25 += v3 * b11;
    t26 += v3 * b12;
    t27 += v3 * b13;
    t28 += v3 * b14;
    t29 += v3 * b15;
    v3 = a3[15];
    t15 += v3 * b02;
    t16 += v3 * b1;
    t17 += v3 * b22;
    t18 += v3 * b32;
    t19 += v3 * b4;
    t20 += v3 * b5;
    t21 += v3 * b6;
    t22 += v3 * b7;
    t23 += v3 * b8;
    t24 += v3 * b9;
    t25 += v3 * b10;
    t26 += v3 * b11;
    t27 += v3 * b12;
    t28 += v3 * b13;
    t29 += v3 * b14;
    t30 += v3 * b15;
    t0 += 38 * t16;
    t1 += 38 * t17;
    t2 += 38 * t18;
    t3 += 38 * t19;
    t4 += 38 * t20;
    t5 += 38 * t21;
    t6 += 38 * t22;
    t7 += 38 * t23;
    t8 += 38 * t24;
    t9 += 38 * t25;
    t10 += 38 * t26;
    t11 += 38 * t27;
    t12 += 38 * t28;
    t13 += 38 * t29;
    t14 += 38 * t30;
    c2 = 1;
    v3 = t0 + c2 + 65535;
    c2 = Math.floor(v3 / 65536);
    t0 = v3 - c2 * 65536;
    v3 = t1 + c2 + 65535;
    c2 = Math.floor(v3 / 65536);
    t1 = v3 - c2 * 65536;
    v3 = t2 + c2 + 65535;
    c2 = Math.floor(v3 / 65536);
    t2 = v3 - c2 * 65536;
    v3 = t3 + c2 + 65535;
    c2 = Math.floor(v3 / 65536);
    t3 = v3 - c2 * 65536;
    v3 = t4 + c2 + 65535;
    c2 = Math.floor(v3 / 65536);
    t4 = v3 - c2 * 65536;
    v3 = t5 + c2 + 65535;
    c2 = Math.floor(v3 / 65536);
    t5 = v3 - c2 * 65536;
    v3 = t6 + c2 + 65535;
    c2 = Math.floor(v3 / 65536);
    t6 = v3 - c2 * 65536;
    v3 = t7 + c2 + 65535;
    c2 = Math.floor(v3 / 65536);
    t7 = v3 - c2 * 65536;
    v3 = t8 + c2 + 65535;
    c2 = Math.floor(v3 / 65536);
    t8 = v3 - c2 * 65536;
    v3 = t9 + c2 + 65535;
    c2 = Math.floor(v3 / 65536);
    t9 = v3 - c2 * 65536;
    v3 = t10 + c2 + 65535;
    c2 = Math.floor(v3 / 65536);
    t10 = v3 - c2 * 65536;
    v3 = t11 + c2 + 65535;
    c2 = Math.floor(v3 / 65536);
    t11 = v3 - c2 * 65536;
    v3 = t12 + c2 + 65535;
    c2 = Math.floor(v3 / 65536);
    t12 = v3 - c2 * 65536;
    v3 = t13 + c2 + 65535;
    c2 = Math.floor(v3 / 65536);
    t13 = v3 - c2 * 65536;
    v3 = t14 + c2 + 65535;
    c2 = Math.floor(v3 / 65536);
    t14 = v3 - c2 * 65536;
    v3 = t15 + c2 + 65535;
    c2 = Math.floor(v3 / 65536);
    t15 = v3 - c2 * 65536;
    t0 += c2 - 1 + 37 * (c2 - 1);
    c2 = 1;
    v3 = t0 + c2 + 65535;
    c2 = Math.floor(v3 / 65536);
    t0 = v3 - c2 * 65536;
    v3 = t1 + c2 + 65535;
    c2 = Math.floor(v3 / 65536);
    t1 = v3 - c2 * 65536;
    v3 = t2 + c2 + 65535;
    c2 = Math.floor(v3 / 65536);
    t2 = v3 - c2 * 65536;
    v3 = t3 + c2 + 65535;
    c2 = Math.floor(v3 / 65536);
    t3 = v3 - c2 * 65536;
    v3 = t4 + c2 + 65535;
    c2 = Math.floor(v3 / 65536);
    t4 = v3 - c2 * 65536;
    v3 = t5 + c2 + 65535;
    c2 = Math.floor(v3 / 65536);
    t5 = v3 - c2 * 65536;
    v3 = t6 + c2 + 65535;
    c2 = Math.floor(v3 / 65536);
    t6 = v3 - c2 * 65536;
    v3 = t7 + c2 + 65535;
    c2 = Math.floor(v3 / 65536);
    t7 = v3 - c2 * 65536;
    v3 = t8 + c2 + 65535;
    c2 = Math.floor(v3 / 65536);
    t8 = v3 - c2 * 65536;
    v3 = t9 + c2 + 65535;
    c2 = Math.floor(v3 / 65536);
    t9 = v3 - c2 * 65536;
    v3 = t10 + c2 + 65535;
    c2 = Math.floor(v3 / 65536);
    t10 = v3 - c2 * 65536;
    v3 = t11 + c2 + 65535;
    c2 = Math.floor(v3 / 65536);
    t11 = v3 - c2 * 65536;
    v3 = t12 + c2 + 65535;
    c2 = Math.floor(v3 / 65536);
    t12 = v3 - c2 * 65536;
    v3 = t13 + c2 + 65535;
    c2 = Math.floor(v3 / 65536);
    t13 = v3 - c2 * 65536;
    v3 = t14 + c2 + 65535;
    c2 = Math.floor(v3 / 65536);
    t14 = v3 - c2 * 65536;
    v3 = t15 + c2 + 65535;
    c2 = Math.floor(v3 / 65536);
    t15 = v3 - c2 * 65536;
    t0 += c2 - 1 + 37 * (c2 - 1);
    o3[0] = t0;
    o3[1] = t1;
    o3[2] = t2;
    o3[3] = t3;
    o3[4] = t4;
    o3[5] = t5;
    o3[6] = t6;
    o3[7] = t7;
    o3[8] = t8;
    o3[9] = t9;
    o3[10] = t10;
    o3[11] = t11;
    o3[12] = t12;
    o3[13] = t13;
    o3[14] = t14;
    o3[15] = t15;
  }
  function square(o3, a3) {
    mul(o3, a3, a3);
  }
  function inv25519(o3, i3) {
    const c2 = gf2();
    let a3;
    for (a3 = 0; a3 < 16; a3++) {
      c2[a3] = i3[a3];
    }
    for (a3 = 253; a3 >= 0; a3--) {
      square(c2, c2);
      if (a3 !== 2 && a3 !== 4) {
        mul(c2, c2, i3);
      }
    }
    for (a3 = 0; a3 < 16; a3++) {
      o3[a3] = c2[a3];
    }
  }
  function pow2523(o3, i3) {
    const c2 = gf2();
    let a3;
    for (a3 = 0; a3 < 16; a3++) {
      c2[a3] = i3[a3];
    }
    for (a3 = 250; a3 >= 0; a3--) {
      square(c2, c2);
      if (a3 !== 1) {
        mul(c2, c2, i3);
      }
    }
    for (a3 = 0; a3 < 16; a3++) {
      o3[a3] = c2[a3];
    }
  }
  function edadd(p3, q2) {
    const a3 = gf2(), b3 = gf2(), c2 = gf2(), d4 = gf2(), e2 = gf2(), f3 = gf2(), g3 = gf2(), h4 = gf2(), t = gf2();
    sub(a3, p3[1], p3[0]);
    sub(t, q2[1], q2[0]);
    mul(a3, a3, t);
    add(b3, p3[0], p3[1]);
    add(t, q2[0], q2[1]);
    mul(b3, b3, t);
    mul(c2, p3[3], q2[3]);
    mul(c2, c2, D22);
    mul(d4, p3[2], q2[2]);
    add(d4, d4, d4);
    sub(e2, b3, a3);
    sub(f3, d4, c2);
    add(g3, d4, c2);
    add(h4, b3, a3);
    mul(p3[0], e2, f3);
    mul(p3[1], h4, g3);
    mul(p3[2], g3, f3);
    mul(p3[3], e2, h4);
  }
  function cswap(p3, q2, b3) {
    for (let i3 = 0; i3 < 4; i3++) {
      sel25519(p3[i3], q2[i3], b3);
    }
  }
  function pack(r2, p3) {
    const tx = gf2(), ty = gf2(), zi2 = gf2();
    inv25519(zi2, p3[2]);
    mul(tx, p3[0], zi2);
    mul(ty, p3[1], zi2);
    pack25519(r2, ty);
    r2[31] ^= par25519(tx) << 7;
  }
  function scalarmult(p3, q2, s2) {
    set25519(p3[0], gf0);
    set25519(p3[1], gf1);
    set25519(p3[2], gf1);
    set25519(p3[3], gf0);
    for (let i3 = 255; i3 >= 0; --i3) {
      const b3 = s2[i3 / 8 | 0] >> (i3 & 7) & 1;
      cswap(p3, q2, b3);
      edadd(q2, p3);
      edadd(p3, p3);
      cswap(p3, q2, b3);
    }
  }
  function scalarbase(p3, s2) {
    const q2 = [gf2(), gf2(), gf2(), gf2()];
    set25519(q2[0], X2);
    set25519(q2[1], Y);
    set25519(q2[2], gf1);
    mul(q2[3], X2, Y);
    scalarmult(p3, q2, s2);
  }
  function generateKeyPairFromSeed(seed) {
    if (seed.length !== exports.SEED_LENGTH) {
      throw new Error(`ed25519: seed must be ${exports.SEED_LENGTH} bytes`);
    }
    const d4 = (0, sha512_1.hash)(seed);
    d4[0] &= 248;
    d4[31] &= 127;
    d4[31] |= 64;
    const publicKey = new Uint8Array(32);
    const p3 = [gf2(), gf2(), gf2(), gf2()];
    scalarbase(p3, d4);
    pack(publicKey, p3);
    const secretKey = new Uint8Array(64);
    secretKey.set(seed);
    secretKey.set(publicKey, 32);
    return {
      publicKey,
      secretKey
    };
  }
  exports.generateKeyPairFromSeed = generateKeyPairFromSeed;
  function generateKeyPair2(prng) {
    const seed = (0, random_1.randomBytes)(32, prng);
    const result = generateKeyPairFromSeed(seed);
    (0, wipe_12.wipe)(seed);
    return result;
  }
  exports.generateKeyPair = generateKeyPair2;
  function extractPublicKeyFromSecretKey(secretKey) {
    if (secretKey.length !== exports.SECRET_KEY_LENGTH) {
      throw new Error(`ed25519: secret key must be ${exports.SECRET_KEY_LENGTH} bytes`);
    }
    return new Uint8Array(secretKey.subarray(32));
  }
  exports.extractPublicKeyFromSecretKey = extractPublicKeyFromSecretKey;
  const L4 = new Float64Array([
    237,
    211,
    245,
    92,
    26,
    99,
    18,
    88,
    214,
    156,
    247,
    162,
    222,
    249,
    222,
    20,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    16
  ]);
  function modL(r2, x2) {
    let carry;
    let i3;
    let j2;
    let k2;
    for (i3 = 63; i3 >= 32; --i3) {
      carry = 0;
      for (j2 = i3 - 32, k2 = i3 - 12; j2 < k2; ++j2) {
        x2[j2] += carry - 16 * x2[i3] * L4[j2 - (i3 - 32)];
        carry = Math.floor((x2[j2] + 128) / 256);
        x2[j2] -= carry * 256;
      }
      x2[j2] += carry;
      x2[i3] = 0;
    }
    carry = 0;
    for (j2 = 0; j2 < 32; j2++) {
      x2[j2] += carry - (x2[31] >> 4) * L4[j2];
      carry = x2[j2] >> 8;
      x2[j2] &= 255;
    }
    for (j2 = 0; j2 < 32; j2++) {
      x2[j2] -= carry * L4[j2];
    }
    for (i3 = 0; i3 < 32; i3++) {
      x2[i3 + 1] += x2[i3] >> 8;
      r2[i3] = x2[i3] & 255;
    }
  }
  function reduce(r2) {
    const x2 = new Float64Array(64);
    for (let i3 = 0; i3 < 64; i3++) {
      x2[i3] = r2[i3];
    }
    for (let i3 = 0; i3 < 64; i3++) {
      r2[i3] = 0;
    }
    modL(r2, x2);
  }
  function sign(secretKey, message) {
    const x2 = new Float64Array(64);
    const p3 = [gf2(), gf2(), gf2(), gf2()];
    const d4 = (0, sha512_1.hash)(secretKey.subarray(0, 32));
    d4[0] &= 248;
    d4[31] &= 127;
    d4[31] |= 64;
    const signature = new Uint8Array(64);
    signature.set(d4.subarray(32), 32);
    const hs2 = new sha512_1.SHA512();
    hs2.update(signature.subarray(32));
    hs2.update(message);
    const r2 = hs2.digest();
    hs2.clean();
    reduce(r2);
    scalarbase(p3, r2);
    pack(signature, p3);
    hs2.reset();
    hs2.update(signature.subarray(0, 32));
    hs2.update(secretKey.subarray(32));
    hs2.update(message);
    const h4 = hs2.digest();
    reduce(h4);
    for (let i3 = 0; i3 < 32; i3++) {
      x2[i3] = r2[i3];
    }
    for (let i3 = 0; i3 < 32; i3++) {
      for (let j2 = 0; j2 < 32; j2++) {
        x2[i3 + j2] += h4[i3] * d4[j2];
      }
    }
    modL(signature.subarray(32), x2);
    return signature;
  }
  exports.sign = sign;
  function unpackneg(r2, p3) {
    const t = gf2(), chk = gf2(), num = gf2(), den = gf2(), den2 = gf2(), den4 = gf2(), den6 = gf2();
    set25519(r2[2], gf1);
    unpack25519(r2[1], p3);
    square(num, r2[1]);
    mul(den, num, D2);
    sub(num, num, r2[2]);
    add(den, r2[2], den);
    square(den2, den);
    square(den4, den2);
    mul(den6, den4, den2);
    mul(t, den6, num);
    mul(t, t, den);
    pow2523(t, t);
    mul(t, t, num);
    mul(t, t, den);
    mul(t, t, den);
    mul(r2[0], t, den);
    square(chk, r2[0]);
    mul(chk, chk, den);
    if (neq25519(chk, num)) {
      mul(r2[0], r2[0], I2);
    }
    square(chk, r2[0]);
    mul(chk, chk, den);
    if (neq25519(chk, num)) {
      return -1;
    }
    if (par25519(r2[0]) === p3[31] >> 7) {
      sub(r2[0], gf0, r2[0]);
    }
    mul(r2[3], r2[0], r2[1]);
    return 0;
  }
  function verify(publicKey, message, signature) {
    const t = new Uint8Array(32);
    const p3 = [gf2(), gf2(), gf2(), gf2()];
    const q2 = [gf2(), gf2(), gf2(), gf2()];
    if (signature.length !== exports.SIGNATURE_LENGTH) {
      throw new Error(`ed25519: signature must be ${exports.SIGNATURE_LENGTH} bytes`);
    }
    if (unpackneg(q2, publicKey)) {
      return false;
    }
    const hs2 = new sha512_1.SHA512();
    hs2.update(signature.subarray(0, 32));
    hs2.update(publicKey);
    hs2.update(message);
    const h4 = hs2.digest();
    reduce(h4);
    scalarmult(p3, q2, h4);
    scalarbase(q2, signature.subarray(32));
    edadd(p3, q2);
    pack(t, p3);
    if (verify32(signature, t)) {
      return false;
    }
    return true;
  }
  exports.verify = verify;
  function convertPublicKeyToX25519(publicKey) {
    let q2 = [gf2(), gf2(), gf2(), gf2()];
    if (unpackneg(q2, publicKey)) {
      throw new Error("Ed25519: invalid public key");
    }
    let a3 = gf2();
    let b3 = gf2();
    let y3 = q2[1];
    add(a3, gf1, y3);
    sub(b3, gf1, y3);
    inv25519(b3, b3);
    mul(a3, a3, b3);
    let z2 = new Uint8Array(32);
    pack25519(z2, a3);
    return z2;
  }
  exports.convertPublicKeyToX25519 = convertPublicKeyToX25519;
  function convertSecretKeyToX25519(secretKey) {
    const d4 = (0, sha512_1.hash)(secretKey.subarray(0, 32));
    d4[0] &= 248;
    d4[31] &= 127;
    d4[31] |= 64;
    const o3 = new Uint8Array(d4.subarray(0, 32));
    (0, wipe_12.wipe)(d4);
    return o3;
  }
  exports.convertSecretKeyToX25519 = convertSecretKeyToX25519;
})(ed25519);
const JWT_IRIDIUM_ALG = "EdDSA";
const JWT_IRIDIUM_TYP = "JWT";
const JWT_DELIMITER = ".";
const JWT_ENCODING = "base64url";
const JSON_ENCODING = "utf8";
const DATA_ENCODING = "utf8";
const DID_DELIMITER = ":";
const DID_PREFIX = "did";
const DID_METHOD = "key";
const MULTICODEC_ED25519_ENCODING = "base58btc";
const MULTICODEC_ED25519_BASE = "z";
const MULTICODEC_ED25519_HEADER = "K36";
const KEY_PAIR_SEED_LENGTH = 32;
function encodeJSON(val) {
  return toString(fromString(safeJsonStringify(val), JSON_ENCODING), JWT_ENCODING);
}
function encodeIss(publicKey) {
  const header = fromString(MULTICODEC_ED25519_HEADER, MULTICODEC_ED25519_ENCODING);
  const multicodec = MULTICODEC_ED25519_BASE + toString(concat([header, publicKey]), MULTICODEC_ED25519_ENCODING);
  return [DID_PREFIX, DID_METHOD, multicodec].join(DID_DELIMITER);
}
function encodeSig(bytes) {
  return toString(bytes, JWT_ENCODING);
}
function encodeData(params) {
  return fromString([encodeJSON(params.header), encodeJSON(params.payload)].join(JWT_DELIMITER), DATA_ENCODING);
}
function encodeJWT(params) {
  return [
    encodeJSON(params.header),
    encodeJSON(params.payload),
    encodeSig(params.signature)
  ].join(JWT_DELIMITER);
}
function generateKeyPair(seed = random.randomBytes(KEY_PAIR_SEED_LENGTH)) {
  return ed25519.generateKeyPairFromSeed(seed);
}
async function signJWT(sub, aud, ttl, keyPair, iat = cjs$3.fromMiliseconds(Date.now())) {
  const header = { alg: JWT_IRIDIUM_ALG, typ: JWT_IRIDIUM_TYP };
  const iss = encodeIss(keyPair.publicKey);
  const exp = iat + ttl;
  const payload = { iss, sub, aud, iat, exp };
  const data = encodeData({ header, payload });
  const signature = ed25519.sign(keyPair.secretKey, data);
  return encodeJWT({ header, payload, signature });
}
const PARSE_ERROR = "PARSE_ERROR";
const INVALID_REQUEST = "INVALID_REQUEST";
const METHOD_NOT_FOUND = "METHOD_NOT_FOUND";
const INVALID_PARAMS = "INVALID_PARAMS";
const INTERNAL_ERROR = "INTERNAL_ERROR";
const SERVER_ERROR = "SERVER_ERROR";
const RESERVED_ERROR_CODES = [-32700, -32600, -32601, -32602, -32603];
const STANDARD_ERROR_MAP = {
  [PARSE_ERROR]: { code: -32700, message: "Parse error" },
  [INVALID_REQUEST]: { code: -32600, message: "Invalid Request" },
  [METHOD_NOT_FOUND]: { code: -32601, message: "Method not found" },
  [INVALID_PARAMS]: { code: -32602, message: "Invalid params" },
  [INTERNAL_ERROR]: { code: -32603, message: "Internal error" },
  [SERVER_ERROR]: { code: -32e3, message: "Server error" }
};
const DEFAULT_ERROR = SERVER_ERROR;
function isReservedErrorCode(code) {
  return RESERVED_ERROR_CODES.includes(code);
}
function getError(type) {
  if (!Object.keys(STANDARD_ERROR_MAP).includes(type)) {
    return STANDARD_ERROR_MAP[DEFAULT_ERROR];
  }
  return STANDARD_ERROR_MAP[type];
}
function getErrorByCode(code) {
  const match = Object.values(STANDARD_ERROR_MAP).find((e2) => e2.code === code);
  if (!match) {
    return STANDARD_ERROR_MAP[DEFAULT_ERROR];
  }
  return match;
}
function parseConnectionError(e2, url, type) {
  return e2.message.includes("getaddrinfo ENOTFOUND") || e2.message.includes("connect ECONNREFUSED") ? new Error(`Unavailable ${type} RPC url at ${url}`) : e2;
}
var cjs = {};
var crypto$1 = {};
var hasRequiredCrypto;
function requireCrypto() {
  if (hasRequiredCrypto)
    return crypto$1;
  hasRequiredCrypto = 1;
  Object.defineProperty(crypto$1, "__esModule", { value: true });
  crypto$1.isBrowserCryptoAvailable = crypto$1.getSubtleCrypto = crypto$1.getBrowerCrypto = void 0;
  function getBrowerCrypto() {
    return (commonjsGlobal === null || commonjsGlobal === void 0 ? void 0 : commonjsGlobal.crypto) || (commonjsGlobal === null || commonjsGlobal === void 0 ? void 0 : commonjsGlobal.msCrypto) || {};
  }
  crypto$1.getBrowerCrypto = getBrowerCrypto;
  function getSubtleCrypto() {
    const browserCrypto = getBrowerCrypto();
    return browserCrypto.subtle || browserCrypto.webkitSubtle;
  }
  crypto$1.getSubtleCrypto = getSubtleCrypto;
  function isBrowserCryptoAvailable() {
    return !!getBrowerCrypto() && !!getSubtleCrypto();
  }
  crypto$1.isBrowserCryptoAvailable = isBrowserCryptoAvailable;
  return crypto$1;
}
var env = {};
var hasRequiredEnv;
function requireEnv() {
  if (hasRequiredEnv)
    return env;
  hasRequiredEnv = 1;
  Object.defineProperty(env, "__esModule", { value: true });
  env.isBrowser = env.isNode = env.isReactNative = void 0;
  function isReactNative() {
    return typeof document === "undefined" && typeof navigator !== "undefined" && navigator.product === "ReactNative";
  }
  env.isReactNative = isReactNative;
  function isNode() {
    return typeof process$1 !== "undefined" && typeof process$1.versions !== "undefined" && typeof process$1.versions.node !== "undefined";
  }
  env.isNode = isNode;
  function isBrowser() {
    return !isReactNative() && !isNode();
  }
  env.isBrowser = isBrowser;
  return env;
}
(function(exports) {
  Object.defineProperty(exports, "__esModule", { value: true });
  const tslib_1 = require$$0$1;
  tslib_1.__exportStar(requireCrypto(), exports);
  tslib_1.__exportStar(requireEnv(), exports);
})(cjs);
function payloadId(entropy = 3) {
  const date = Date.now() * Math.pow(10, entropy);
  const extra = Math.floor(Math.random() * Math.pow(10, entropy));
  return date + extra;
}
function getBigIntRpcId(entropy = 6) {
  return BigInt(payloadId(entropy));
}
function formatJsonRpcRequest(method, params, id) {
  return {
    id: id || payloadId(),
    jsonrpc: "2.0",
    method,
    params
  };
}
function formatJsonRpcResult(id, result) {
  return {
    id,
    jsonrpc: "2.0",
    result
  };
}
function formatJsonRpcError(id, error, data) {
  return {
    id,
    jsonrpc: "2.0",
    error: formatErrorMessage(error)
  };
}
function formatErrorMessage(error, data) {
  if (typeof error === "undefined") {
    return getError(INTERNAL_ERROR);
  }
  if (typeof error === "string") {
    error = Object.assign(Object.assign({}, getError(SERVER_ERROR)), { message: error });
  }
  if (isReservedErrorCode(error.code)) {
    error = getErrorByCode(error.code);
  }
  return error;
}
class e {
}
class n3 extends e {
  constructor() {
    super();
  }
}
class r extends n3 {
  constructor(c2) {
    super();
  }
}
const HTTP_REGEX = "^https?:";
const WS_REGEX = "^wss?:";
function getUrlProtocol(url) {
  const matches = url.match(new RegExp(/^\w+:/, "gi"));
  if (!matches || !matches.length)
    return;
  return matches[0];
}
function matchRegexProtocol(url, regex) {
  const protocol = getUrlProtocol(url);
  if (typeof protocol === "undefined")
    return false;
  return new RegExp(regex).test(protocol);
}
function isHttpUrl(url) {
  return matchRegexProtocol(url, HTTP_REGEX);
}
function isWsUrl(url) {
  return matchRegexProtocol(url, WS_REGEX);
}
function isLocalhostUrl(url) {
  return new RegExp("wss?://localhost(:d{2,5})?").test(url);
}
function isJsonRpcPayload(payload) {
  return typeof payload === "object" && "id" in payload && "jsonrpc" in payload && payload.jsonrpc === "2.0";
}
function isJsonRpcRequest(payload) {
  return isJsonRpcPayload(payload) && "method" in payload;
}
function isJsonRpcResponse(payload) {
  return isJsonRpcPayload(payload) && (isJsonRpcResult(payload) || isJsonRpcError(payload));
}
function isJsonRpcResult(payload) {
  return "result" in payload;
}
function isJsonRpcError(payload) {
  return "error" in payload;
}
let o$1 = class o extends r {
  constructor(t) {
    super(t), this.events = new eventsExports.EventEmitter(), this.hasRegisteredEventListeners = false, this.connection = this.setConnection(t), this.connection.connected && this.registerEventListeners();
  }
  async connect(t = this.connection) {
    await this.open(t);
  }
  async disconnect() {
    await this.close();
  }
  on(t, e2) {
    this.events.on(t, e2);
  }
  once(t, e2) {
    this.events.once(t, e2);
  }
  off(t, e2) {
    this.events.off(t, e2);
  }
  removeListener(t, e2) {
    this.events.removeListener(t, e2);
  }
  async request(t, e2) {
    return this.requestStrict(formatJsonRpcRequest(t.method, t.params || [], t.id || getBigIntRpcId().toString()), e2);
  }
  async requestStrict(t, e2) {
    return new Promise(async (i3, s2) => {
      if (!this.connection.connected)
        try {
          await this.open();
        } catch (n4) {
          s2(n4);
        }
      this.events.on(`${t.id}`, (n4) => {
        isJsonRpcError(n4) ? s2(n4.error) : i3(n4.result);
      });
      try {
        await this.connection.send(t, e2);
      } catch (n4) {
        s2(n4);
      }
    });
  }
  setConnection(t = this.connection) {
    return t;
  }
  onPayload(t) {
    this.events.emit("payload", t), isJsonRpcResponse(t) ? this.events.emit(`${t.id}`, t) : this.events.emit("message", { type: t.method, data: t.params });
  }
  onClose(t) {
    t && t.code === 3e3 && this.events.emit("error", new Error(`WebSocket connection closed abnormally with code: ${t.code} ${t.reason ? `(${t.reason})` : ""}`)), this.events.emit("disconnect");
  }
  async open(t = this.connection) {
    this.connection === t && this.connection.connected || (this.connection.connected && this.close(), typeof t == "string" && (await this.connection.open(t), t = this.connection), this.connection = this.setConnection(t), await this.connection.open(), this.registerEventListeners(), this.events.emit("connect"));
  }
  async close() {
    await this.connection.close();
  }
  registerEventListeners() {
    this.hasRegisteredEventListeners || (this.connection.on("payload", (t) => this.onPayload(t)), this.connection.on("close", (t) => this.onClose(t)), this.connection.on("error", (t) => this.events.emit("error", t)), this.connection.on("register_error", (t) => this.onClose()), this.hasRegisteredEventListeners = true);
  }
};
const w$1 = () => typeof WebSocket < "u" ? WebSocket : typeof global < "u" && typeof global.WebSocket < "u" ? global.WebSocket : typeof window < "u" && typeof window.WebSocket < "u" ? window.WebSocket : typeof self < "u" && typeof self.WebSocket < "u" ? self.WebSocket : require("ws"), b$1 = () => typeof WebSocket < "u" || typeof global < "u" && typeof global.WebSocket < "u" || typeof window < "u" && typeof window.WebSocket < "u" || typeof self < "u" && typeof self.WebSocket < "u", a2 = (c2) => c2.split("?")[0], h3 = 10, S$2 = w$1();
let f$3 = class f {
  constructor(e2) {
    if (this.url = e2, this.events = new eventsExports.EventEmitter(), this.registering = false, !isWsUrl(e2))
      throw new Error(`Provided URL is not compatible with WebSocket connection: ${e2}`);
    this.url = e2;
  }
  get connected() {
    return typeof this.socket < "u";
  }
  get connecting() {
    return this.registering;
  }
  on(e2, t) {
    this.events.on(e2, t);
  }
  once(e2, t) {
    this.events.once(e2, t);
  }
  off(e2, t) {
    this.events.off(e2, t);
  }
  removeListener(e2, t) {
    this.events.removeListener(e2, t);
  }
  async open(e2 = this.url) {
    await this.register(e2);
  }
  async close() {
    return new Promise((e2, t) => {
      if (typeof this.socket > "u") {
        t(new Error("Connection already closed"));
        return;
      }
      this.socket.onclose = (n4) => {
        this.onClose(n4), e2();
      }, this.socket.close();
    });
  }
  async send(e2) {
    typeof this.socket > "u" && (this.socket = await this.register());
    try {
      this.socket.send(safeJsonStringify(e2));
    } catch (t) {
      this.onError(e2.id, t);
    }
  }
  register(e2 = this.url) {
    if (!isWsUrl(e2))
      throw new Error(`Provided URL is not compatible with WebSocket connection: ${e2}`);
    if (this.registering) {
      const t = this.events.getMaxListeners();
      return (this.events.listenerCount("register_error") >= t || this.events.listenerCount("open") >= t) && this.events.setMaxListeners(t + 1), new Promise((n4, o3) => {
        this.events.once("register_error", (s2) => {
          this.resetMaxListeners(), o3(s2);
        }), this.events.once("open", () => {
          if (this.resetMaxListeners(), typeof this.socket > "u")
            return o3(new Error("WebSocket connection is missing or invalid"));
          n4(this.socket);
        });
      });
    }
    return this.url = e2, this.registering = true, new Promise((t, n4) => {
      const o3 = new URLSearchParams(e2).get("origin"), s2 = cjs.isReactNative() ? { headers: { origin: o3 } } : { rejectUnauthorized: !isLocalhostUrl(e2) }, i3 = new S$2(e2, [], s2);
      b$1() ? i3.onerror = (r2) => {
        const l2 = r2;
        n4(this.emitError(l2.error));
      } : i3.on("error", (r2) => {
        n4(this.emitError(r2));
      }), i3.onopen = () => {
        this.onOpen(i3), t(i3);
      };
    });
  }
  onOpen(e2) {
    e2.onmessage = (t) => this.onPayload(t), e2.onclose = (t) => this.onClose(t), this.socket = e2, this.registering = false, this.events.emit("open");
  }
  onClose(e2) {
    this.socket = void 0, this.registering = false, this.events.emit("close", e2);
  }
  onPayload(e2) {
    if (typeof e2.data > "u")
      return;
    const t = typeof e2.data == "string" ? safeJsonParse(e2.data) : e2.data;
    this.events.emit("payload", t);
  }
  onError(e2, t) {
    const n4 = this.parseError(t), o3 = n4.message || n4.toString(), s2 = formatJsonRpcError(e2, o3);
    this.events.emit("payload", s2);
  }
  parseError(e2, t = this.url) {
    return parseConnectionError(e2, a2(t), "WS");
  }
  resetMaxListeners() {
    this.events.getMaxListeners() > h3 && this.events.setMaxListeners(h3);
  }
  emitError(e2) {
    const t = this.parseError(new Error((e2 == null ? void 0 : e2.message) || `WebSocket connection failed for host: ${a2(this.url)}`));
    return this.events.emit("register_error", t), t;
  }
};
var lodash_isequal = { exports: {} };
lodash_isequal.exports;
(function(module, exports) {
  var LARGE_ARRAY_SIZE = 200;
  var HASH_UNDEFINED = "__lodash_hash_undefined__";
  var COMPARE_PARTIAL_FLAG = 1, COMPARE_UNORDERED_FLAG = 2;
  var MAX_SAFE_INTEGER = 9007199254740991;
  var argsTag = "[object Arguments]", arrayTag = "[object Array]", asyncTag = "[object AsyncFunction]", boolTag = "[object Boolean]", dateTag = "[object Date]", errorTag = "[object Error]", funcTag = "[object Function]", genTag = "[object GeneratorFunction]", mapTag = "[object Map]", numberTag = "[object Number]", nullTag = "[object Null]", objectTag = "[object Object]", promiseTag = "[object Promise]", proxyTag = "[object Proxy]", regexpTag = "[object RegExp]", setTag = "[object Set]", stringTag = "[object String]", symbolTag = "[object Symbol]", undefinedTag = "[object Undefined]", weakMapTag = "[object WeakMap]";
  var arrayBufferTag = "[object ArrayBuffer]", dataViewTag = "[object DataView]", float32Tag = "[object Float32Array]", float64Tag = "[object Float64Array]", int8Tag = "[object Int8Array]", int16Tag = "[object Int16Array]", int32Tag = "[object Int32Array]", uint8Tag = "[object Uint8Array]", uint8ClampedTag = "[object Uint8ClampedArray]", uint16Tag = "[object Uint16Array]", uint32Tag = "[object Uint32Array]";
  var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;
  var reIsHostCtor = /^\[object .+?Constructor\]$/;
  var reIsUint = /^(?:0|[1-9]\d*)$/;
  var typedArrayTags = {};
  typedArrayTags[float32Tag] = typedArrayTags[float64Tag] = typedArrayTags[int8Tag] = typedArrayTags[int16Tag] = typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] = typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] = typedArrayTags[uint32Tag] = true;
  typedArrayTags[argsTag] = typedArrayTags[arrayTag] = typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] = typedArrayTags[dataViewTag] = typedArrayTags[dateTag] = typedArrayTags[errorTag] = typedArrayTags[funcTag] = typedArrayTags[mapTag] = typedArrayTags[numberTag] = typedArrayTags[objectTag] = typedArrayTags[regexpTag] = typedArrayTags[setTag] = typedArrayTags[stringTag] = typedArrayTags[weakMapTag] = false;
  var freeGlobal = typeof commonjsGlobal == "object" && commonjsGlobal && commonjsGlobal.Object === Object && commonjsGlobal;
  var freeSelf = typeof self == "object" && self && self.Object === Object && self;
  var root = freeGlobal || freeSelf || Function("return this")();
  var freeExports = exports && !exports.nodeType && exports;
  var freeModule = freeExports && true && module && !module.nodeType && module;
  var moduleExports = freeModule && freeModule.exports === freeExports;
  var freeProcess = moduleExports && freeGlobal.process;
  var nodeUtil = function() {
    try {
      return freeProcess && freeProcess.binding && freeProcess.binding("util");
    } catch (e2) {
    }
  }();
  var nodeIsTypedArray = nodeUtil && nodeUtil.isTypedArray;
  function arrayFilter(array, predicate) {
    var index = -1, length = array == null ? 0 : array.length, resIndex = 0, result = [];
    while (++index < length) {
      var value = array[index];
      if (predicate(value, index, array)) {
        result[resIndex++] = value;
      }
    }
    return result;
  }
  function arrayPush(array, values) {
    var index = -1, length = values.length, offset = array.length;
    while (++index < length) {
      array[offset + index] = values[index];
    }
    return array;
  }
  function arraySome(array, predicate) {
    var index = -1, length = array == null ? 0 : array.length;
    while (++index < length) {
      if (predicate(array[index], index, array)) {
        return true;
      }
    }
    return false;
  }
  function baseTimes(n4, iteratee) {
    var index = -1, result = Array(n4);
    while (++index < n4) {
      result[index] = iteratee(index);
    }
    return result;
  }
  function baseUnary(func) {
    return function(value) {
      return func(value);
    };
  }
  function cacheHas(cache, key) {
    return cache.has(key);
  }
  function getValue(object, key) {
    return object == null ? void 0 : object[key];
  }
  function mapToArray(map) {
    var index = -1, result = Array(map.size);
    map.forEach(function(value, key) {
      result[++index] = [key, value];
    });
    return result;
  }
  function overArg(func, transform) {
    return function(arg) {
      return func(transform(arg));
    };
  }
  function setToArray(set2) {
    var index = -1, result = Array(set2.size);
    set2.forEach(function(value) {
      result[++index] = value;
    });
    return result;
  }
  var arrayProto = Array.prototype, funcProto = Function.prototype, objectProto = Object.prototype;
  var coreJsData = root["__core-js_shared__"];
  var funcToString = funcProto.toString;
  var hasOwnProperty = objectProto.hasOwnProperty;
  var maskSrcKey = function() {
    var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || "");
    return uid ? "Symbol(src)_1." + uid : "";
  }();
  var nativeObjectToString = objectProto.toString;
  var reIsNative = RegExp(
    "^" + funcToString.call(hasOwnProperty).replace(reRegExpChar, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
  );
  var Buffer2 = moduleExports ? root.Buffer : void 0, Symbol2 = root.Symbol, Uint8Array2 = root.Uint8Array, propertyIsEnumerable = objectProto.propertyIsEnumerable, splice = arrayProto.splice, symToStringTag = Symbol2 ? Symbol2.toStringTag : void 0;
  var nativeGetSymbols = Object.getOwnPropertySymbols, nativeIsBuffer = Buffer2 ? Buffer2.isBuffer : void 0, nativeKeys = overArg(Object.keys, Object);
  var DataView2 = getNative(root, "DataView"), Map2 = getNative(root, "Map"), Promise2 = getNative(root, "Promise"), Set2 = getNative(root, "Set"), WeakMap = getNative(root, "WeakMap"), nativeCreate = getNative(Object, "create");
  var dataViewCtorString = toSource(DataView2), mapCtorString = toSource(Map2), promiseCtorString = toSource(Promise2), setCtorString = toSource(Set2), weakMapCtorString = toSource(WeakMap);
  var symbolProto = Symbol2 ? Symbol2.prototype : void 0, symbolValueOf = symbolProto ? symbolProto.valueOf : void 0;
  function Hash(entries) {
    var index = -1, length = entries == null ? 0 : entries.length;
    this.clear();
    while (++index < length) {
      var entry = entries[index];
      this.set(entry[0], entry[1]);
    }
  }
  function hashClear() {
    this.__data__ = nativeCreate ? nativeCreate(null) : {};
    this.size = 0;
  }
  function hashDelete(key) {
    var result = this.has(key) && delete this.__data__[key];
    this.size -= result ? 1 : 0;
    return result;
  }
  function hashGet(key) {
    var data = this.__data__;
    if (nativeCreate) {
      var result = data[key];
      return result === HASH_UNDEFINED ? void 0 : result;
    }
    return hasOwnProperty.call(data, key) ? data[key] : void 0;
  }
  function hashHas(key) {
    var data = this.__data__;
    return nativeCreate ? data[key] !== void 0 : hasOwnProperty.call(data, key);
  }
  function hashSet(key, value) {
    var data = this.__data__;
    this.size += this.has(key) ? 0 : 1;
    data[key] = nativeCreate && value === void 0 ? HASH_UNDEFINED : value;
    return this;
  }
  Hash.prototype.clear = hashClear;
  Hash.prototype["delete"] = hashDelete;
  Hash.prototype.get = hashGet;
  Hash.prototype.has = hashHas;
  Hash.prototype.set = hashSet;
  function ListCache(entries) {
    var index = -1, length = entries == null ? 0 : entries.length;
    this.clear();
    while (++index < length) {
      var entry = entries[index];
      this.set(entry[0], entry[1]);
    }
  }
  function listCacheClear() {
    this.__data__ = [];
    this.size = 0;
  }
  function listCacheDelete(key) {
    var data = this.__data__, index = assocIndexOf(data, key);
    if (index < 0) {
      return false;
    }
    var lastIndex = data.length - 1;
    if (index == lastIndex) {
      data.pop();
    } else {
      splice.call(data, index, 1);
    }
    --this.size;
    return true;
  }
  function listCacheGet(key) {
    var data = this.__data__, index = assocIndexOf(data, key);
    return index < 0 ? void 0 : data[index][1];
  }
  function listCacheHas(key) {
    return assocIndexOf(this.__data__, key) > -1;
  }
  function listCacheSet(key, value) {
    var data = this.__data__, index = assocIndexOf(data, key);
    if (index < 0) {
      ++this.size;
      data.push([key, value]);
    } else {
      data[index][1] = value;
    }
    return this;
  }
  ListCache.prototype.clear = listCacheClear;
  ListCache.prototype["delete"] = listCacheDelete;
  ListCache.prototype.get = listCacheGet;
  ListCache.prototype.has = listCacheHas;
  ListCache.prototype.set = listCacheSet;
  function MapCache(entries) {
    var index = -1, length = entries == null ? 0 : entries.length;
    this.clear();
    while (++index < length) {
      var entry = entries[index];
      this.set(entry[0], entry[1]);
    }
  }
  function mapCacheClear() {
    this.size = 0;
    this.__data__ = {
      "hash": new Hash(),
      "map": new (Map2 || ListCache)(),
      "string": new Hash()
    };
  }
  function mapCacheDelete(key) {
    var result = getMapData(this, key)["delete"](key);
    this.size -= result ? 1 : 0;
    return result;
  }
  function mapCacheGet(key) {
    return getMapData(this, key).get(key);
  }
  function mapCacheHas(key) {
    return getMapData(this, key).has(key);
  }
  function mapCacheSet(key, value) {
    var data = getMapData(this, key), size = data.size;
    data.set(key, value);
    this.size += data.size == size ? 0 : 1;
    return this;
  }
  MapCache.prototype.clear = mapCacheClear;
  MapCache.prototype["delete"] = mapCacheDelete;
  MapCache.prototype.get = mapCacheGet;
  MapCache.prototype.has = mapCacheHas;
  MapCache.prototype.set = mapCacheSet;
  function SetCache(values) {
    var index = -1, length = values == null ? 0 : values.length;
    this.__data__ = new MapCache();
    while (++index < length) {
      this.add(values[index]);
    }
  }
  function setCacheAdd(value) {
    this.__data__.set(value, HASH_UNDEFINED);
    return this;
  }
  function setCacheHas(value) {
    return this.__data__.has(value);
  }
  SetCache.prototype.add = SetCache.prototype.push = setCacheAdd;
  SetCache.prototype.has = setCacheHas;
  function Stack(entries) {
    var data = this.__data__ = new ListCache(entries);
    this.size = data.size;
  }
  function stackClear() {
    this.__data__ = new ListCache();
    this.size = 0;
  }
  function stackDelete(key) {
    var data = this.__data__, result = data["delete"](key);
    this.size = data.size;
    return result;
  }
  function stackGet(key) {
    return this.__data__.get(key);
  }
  function stackHas(key) {
    return this.__data__.has(key);
  }
  function stackSet(key, value) {
    var data = this.__data__;
    if (data instanceof ListCache) {
      var pairs = data.__data__;
      if (!Map2 || pairs.length < LARGE_ARRAY_SIZE - 1) {
        pairs.push([key, value]);
        this.size = ++data.size;
        return this;
      }
      data = this.__data__ = new MapCache(pairs);
    }
    data.set(key, value);
    this.size = data.size;
    return this;
  }
  Stack.prototype.clear = stackClear;
  Stack.prototype["delete"] = stackDelete;
  Stack.prototype.get = stackGet;
  Stack.prototype.has = stackHas;
  Stack.prototype.set = stackSet;
  function arrayLikeKeys(value, inherited) {
    var isArr = isArray(value), isArg = !isArr && isArguments(value), isBuff = !isArr && !isArg && isBuffer(value), isType = !isArr && !isArg && !isBuff && isTypedArray(value), skipIndexes = isArr || isArg || isBuff || isType, result = skipIndexes ? baseTimes(value.length, String) : [], length = result.length;
    for (var key in value) {
      if (hasOwnProperty.call(value, key) && !(skipIndexes && // Safari 9 has enumerable `arguments.length` in strict mode.
      (key == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
      isBuff && (key == "offset" || key == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
      isType && (key == "buffer" || key == "byteLength" || key == "byteOffset") || // Skip index properties.
      isIndex(key, length)))) {
        result.push(key);
      }
    }
    return result;
  }
  function assocIndexOf(array, key) {
    var length = array.length;
    while (length--) {
      if (eq(array[length][0], key)) {
        return length;
      }
    }
    return -1;
  }
  function baseGetAllKeys(object, keysFunc, symbolsFunc) {
    var result = keysFunc(object);
    return isArray(object) ? result : arrayPush(result, symbolsFunc(object));
  }
  function baseGetTag(value) {
    if (value == null) {
      return value === void 0 ? undefinedTag : nullTag;
    }
    return symToStringTag && symToStringTag in Object(value) ? getRawTag(value) : objectToString(value);
  }
  function baseIsArguments(value) {
    return isObjectLike(value) && baseGetTag(value) == argsTag;
  }
  function baseIsEqual(value, other, bitmask, customizer, stack) {
    if (value === other) {
      return true;
    }
    if (value == null || other == null || !isObjectLike(value) && !isObjectLike(other)) {
      return value !== value && other !== other;
    }
    return baseIsEqualDeep(value, other, bitmask, customizer, baseIsEqual, stack);
  }
  function baseIsEqualDeep(object, other, bitmask, customizer, equalFunc, stack) {
    var objIsArr = isArray(object), othIsArr = isArray(other), objTag = objIsArr ? arrayTag : getTag(object), othTag = othIsArr ? arrayTag : getTag(other);
    objTag = objTag == argsTag ? objectTag : objTag;
    othTag = othTag == argsTag ? objectTag : othTag;
    var objIsObj = objTag == objectTag, othIsObj = othTag == objectTag, isSameTag = objTag == othTag;
    if (isSameTag && isBuffer(object)) {
      if (!isBuffer(other)) {
        return false;
      }
      objIsArr = true;
      objIsObj = false;
    }
    if (isSameTag && !objIsObj) {
      stack || (stack = new Stack());
      return objIsArr || isTypedArray(object) ? equalArrays(object, other, bitmask, customizer, equalFunc, stack) : equalByTag(object, other, objTag, bitmask, customizer, equalFunc, stack);
    }
    if (!(bitmask & COMPARE_PARTIAL_FLAG)) {
      var objIsWrapped = objIsObj && hasOwnProperty.call(object, "__wrapped__"), othIsWrapped = othIsObj && hasOwnProperty.call(other, "__wrapped__");
      if (objIsWrapped || othIsWrapped) {
        var objUnwrapped = objIsWrapped ? object.value() : object, othUnwrapped = othIsWrapped ? other.value() : other;
        stack || (stack = new Stack());
        return equalFunc(objUnwrapped, othUnwrapped, bitmask, customizer, stack);
      }
    }
    if (!isSameTag) {
      return false;
    }
    stack || (stack = new Stack());
    return equalObjects(object, other, bitmask, customizer, equalFunc, stack);
  }
  function baseIsNative(value) {
    if (!isObject(value) || isMasked(value)) {
      return false;
    }
    var pattern = isFunction(value) ? reIsNative : reIsHostCtor;
    return pattern.test(toSource(value));
  }
  function baseIsTypedArray(value) {
    return isObjectLike(value) && isLength(value.length) && !!typedArrayTags[baseGetTag(value)];
  }
  function baseKeys(object) {
    if (!isPrototype(object)) {
      return nativeKeys(object);
    }
    var result = [];
    for (var key in Object(object)) {
      if (hasOwnProperty.call(object, key) && key != "constructor") {
        result.push(key);
      }
    }
    return result;
  }
  function equalArrays(array, other, bitmask, customizer, equalFunc, stack) {
    var isPartial = bitmask & COMPARE_PARTIAL_FLAG, arrLength = array.length, othLength = other.length;
    if (arrLength != othLength && !(isPartial && othLength > arrLength)) {
      return false;
    }
    var stacked = stack.get(array);
    if (stacked && stack.get(other)) {
      return stacked == other;
    }
    var index = -1, result = true, seen = bitmask & COMPARE_UNORDERED_FLAG ? new SetCache() : void 0;
    stack.set(array, other);
    stack.set(other, array);
    while (++index < arrLength) {
      var arrValue = array[index], othValue = other[index];
      if (customizer) {
        var compared = isPartial ? customizer(othValue, arrValue, index, other, array, stack) : customizer(arrValue, othValue, index, array, other, stack);
      }
      if (compared !== void 0) {
        if (compared) {
          continue;
        }
        result = false;
        break;
      }
      if (seen) {
        if (!arraySome(other, function(othValue2, othIndex) {
          if (!cacheHas(seen, othIndex) && (arrValue === othValue2 || equalFunc(arrValue, othValue2, bitmask, customizer, stack))) {
            return seen.push(othIndex);
          }
        })) {
          result = false;
          break;
        }
      } else if (!(arrValue === othValue || equalFunc(arrValue, othValue, bitmask, customizer, stack))) {
        result = false;
        break;
      }
    }
    stack["delete"](array);
    stack["delete"](other);
    return result;
  }
  function equalByTag(object, other, tag, bitmask, customizer, equalFunc, stack) {
    switch (tag) {
      case dataViewTag:
        if (object.byteLength != other.byteLength || object.byteOffset != other.byteOffset) {
          return false;
        }
        object = object.buffer;
        other = other.buffer;
      case arrayBufferTag:
        if (object.byteLength != other.byteLength || !equalFunc(new Uint8Array2(object), new Uint8Array2(other))) {
          return false;
        }
        return true;
      case boolTag:
      case dateTag:
      case numberTag:
        return eq(+object, +other);
      case errorTag:
        return object.name == other.name && object.message == other.message;
      case regexpTag:
      case stringTag:
        return object == other + "";
      case mapTag:
        var convert2 = mapToArray;
      case setTag:
        var isPartial = bitmask & COMPARE_PARTIAL_FLAG;
        convert2 || (convert2 = setToArray);
        if (object.size != other.size && !isPartial) {
          return false;
        }
        var stacked = stack.get(object);
        if (stacked) {
          return stacked == other;
        }
        bitmask |= COMPARE_UNORDERED_FLAG;
        stack.set(object, other);
        var result = equalArrays(convert2(object), convert2(other), bitmask, customizer, equalFunc, stack);
        stack["delete"](object);
        return result;
      case symbolTag:
        if (symbolValueOf) {
          return symbolValueOf.call(object) == symbolValueOf.call(other);
        }
    }
    return false;
  }
  function equalObjects(object, other, bitmask, customizer, equalFunc, stack) {
    var isPartial = bitmask & COMPARE_PARTIAL_FLAG, objProps = getAllKeys(object), objLength = objProps.length, othProps = getAllKeys(other), othLength = othProps.length;
    if (objLength != othLength && !isPartial) {
      return false;
    }
    var index = objLength;
    while (index--) {
      var key = objProps[index];
      if (!(isPartial ? key in other : hasOwnProperty.call(other, key))) {
        return false;
      }
    }
    var stacked = stack.get(object);
    if (stacked && stack.get(other)) {
      return stacked == other;
    }
    var result = true;
    stack.set(object, other);
    stack.set(other, object);
    var skipCtor = isPartial;
    while (++index < objLength) {
      key = objProps[index];
      var objValue = object[key], othValue = other[key];
      if (customizer) {
        var compared = isPartial ? customizer(othValue, objValue, key, other, object, stack) : customizer(objValue, othValue, key, object, other, stack);
      }
      if (!(compared === void 0 ? objValue === othValue || equalFunc(objValue, othValue, bitmask, customizer, stack) : compared)) {
        result = false;
        break;
      }
      skipCtor || (skipCtor = key == "constructor");
    }
    if (result && !skipCtor) {
      var objCtor = object.constructor, othCtor = other.constructor;
      if (objCtor != othCtor && ("constructor" in object && "constructor" in other) && !(typeof objCtor == "function" && objCtor instanceof objCtor && typeof othCtor == "function" && othCtor instanceof othCtor)) {
        result = false;
      }
    }
    stack["delete"](object);
    stack["delete"](other);
    return result;
  }
  function getAllKeys(object) {
    return baseGetAllKeys(object, keys2, getSymbols);
  }
  function getMapData(map, key) {
    var data = map.__data__;
    return isKeyable(key) ? data[typeof key == "string" ? "string" : "hash"] : data.map;
  }
  function getNative(object, key) {
    var value = getValue(object, key);
    return baseIsNative(value) ? value : void 0;
  }
  function getRawTag(value) {
    var isOwn = hasOwnProperty.call(value, symToStringTag), tag = value[symToStringTag];
    try {
      value[symToStringTag] = void 0;
      var unmasked = true;
    } catch (e2) {
    }
    var result = nativeObjectToString.call(value);
    if (unmasked) {
      if (isOwn) {
        value[symToStringTag] = tag;
      } else {
        delete value[symToStringTag];
      }
    }
    return result;
  }
  var getSymbols = !nativeGetSymbols ? stubArray : function(object) {
    if (object == null) {
      return [];
    }
    object = Object(object);
    return arrayFilter(nativeGetSymbols(object), function(symbol) {
      return propertyIsEnumerable.call(object, symbol);
    });
  };
  var getTag = baseGetTag;
  if (DataView2 && getTag(new DataView2(new ArrayBuffer(1))) != dataViewTag || Map2 && getTag(new Map2()) != mapTag || Promise2 && getTag(Promise2.resolve()) != promiseTag || Set2 && getTag(new Set2()) != setTag || WeakMap && getTag(new WeakMap()) != weakMapTag) {
    getTag = function(value) {
      var result = baseGetTag(value), Ctor = result == objectTag ? value.constructor : void 0, ctorString = Ctor ? toSource(Ctor) : "";
      if (ctorString) {
        switch (ctorString) {
          case dataViewCtorString:
            return dataViewTag;
          case mapCtorString:
            return mapTag;
          case promiseCtorString:
            return promiseTag;
          case setCtorString:
            return setTag;
          case weakMapCtorString:
            return weakMapTag;
        }
      }
      return result;
    };
  }
  function isIndex(value, length) {
    length = length == null ? MAX_SAFE_INTEGER : length;
    return !!length && (typeof value == "number" || reIsUint.test(value)) && (value > -1 && value % 1 == 0 && value < length);
  }
  function isKeyable(value) {
    var type = typeof value;
    return type == "string" || type == "number" || type == "symbol" || type == "boolean" ? value !== "__proto__" : value === null;
  }
  function isMasked(func) {
    return !!maskSrcKey && maskSrcKey in func;
  }
  function isPrototype(value) {
    var Ctor = value && value.constructor, proto = typeof Ctor == "function" && Ctor.prototype || objectProto;
    return value === proto;
  }
  function objectToString(value) {
    return nativeObjectToString.call(value);
  }
  function toSource(func) {
    if (func != null) {
      try {
        return funcToString.call(func);
      } catch (e2) {
      }
      try {
        return func + "";
      } catch (e2) {
      }
    }
    return "";
  }
  function eq(value, other) {
    return value === other || value !== value && other !== other;
  }
  var isArguments = baseIsArguments(/* @__PURE__ */ function() {
    return arguments;
  }()) ? baseIsArguments : function(value) {
    return isObjectLike(value) && hasOwnProperty.call(value, "callee") && !propertyIsEnumerable.call(value, "callee");
  };
  var isArray = Array.isArray;
  function isArrayLike(value) {
    return value != null && isLength(value.length) && !isFunction(value);
  }
  var isBuffer = nativeIsBuffer || stubFalse;
  function isEqual(value, other) {
    return baseIsEqual(value, other);
  }
  function isFunction(value) {
    if (!isObject(value)) {
      return false;
    }
    var tag = baseGetTag(value);
    return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
  }
  function isLength(value) {
    return typeof value == "number" && value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
  }
  function isObject(value) {
    var type = typeof value;
    return value != null && (type == "object" || type == "function");
  }
  function isObjectLike(value) {
    return value != null && typeof value == "object";
  }
  var isTypedArray = nodeIsTypedArray ? baseUnary(nodeIsTypedArray) : baseIsTypedArray;
  function keys2(object) {
    return isArrayLike(object) ? arrayLikeKeys(object) : baseKeys(object);
  }
  function stubArray() {
    return [];
  }
  function stubFalse() {
    return false;
  }
  module.exports = isEqual;
})(lodash_isequal, lodash_isequal.exports);
var lodash_isequalExports = lodash_isequal.exports;
const Gi = /* @__PURE__ */ getDefaultExportFromCjs(lodash_isequalExports);
function unfetch_module(e2, n4) {
  return n4 = n4 || {}, new Promise(function(t, r2) {
    var s2 = new XMLHttpRequest(), o3 = [], u3 = [], i3 = {}, a3 = function() {
      return { ok: 2 == (s2.status / 100 | 0), statusText: s2.statusText, status: s2.status, url: s2.responseURL, text: function() {
        return Promise.resolve(s2.responseText);
      }, json: function() {
        return Promise.resolve(s2.responseText).then(JSON.parse);
      }, blob: function() {
        return Promise.resolve(new Blob([s2.response]));
      }, clone: a3, headers: { keys: function() {
        return o3;
      }, entries: function() {
        return u3;
      }, get: function(e3) {
        return i3[e3.toLowerCase()];
      }, has: function(e3) {
        return e3.toLowerCase() in i3;
      } } };
    };
    for (var l2 in s2.open(n4.method || "get", e2, true), s2.onload = function() {
      s2.getAllResponseHeaders().replace(/^(.*?):[^\S\n]*([\s\S]*?)$/gm, function(e3, n5, t2) {
        o3.push(n5 = n5.toLowerCase()), u3.push([n5, t2]), i3[n5] = i3[n5] ? i3[n5] + "," + t2 : t2;
      }), t(a3());
    }, s2.onerror = r2, s2.withCredentials = "include" == n4.credentials, n4.headers)
      s2.setRequestHeader(l2, n4.headers[l2]);
    s2.send(n4.body || null);
  });
}
const unfetch_module$1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: unfetch_module
}, Symbol.toStringTag, { value: "Module" }));
const require$$0 = /* @__PURE__ */ getAugmentedNamespace(unfetch_module$1);
var browser = self.fetch || (self.fetch = require$$0.default || require$$0);
const Yi = /* @__PURE__ */ getDefaultExportFromCjs(browser);
var define_process_env_default = {};
function Hi(o3, e2) {
  if (o3.length >= 255)
    throw new TypeError("Alphabet too long");
  for (var t = new Uint8Array(256), i3 = 0; i3 < t.length; i3++)
    t[i3] = 255;
  for (var s2 = 0; s2 < o3.length; s2++) {
    var r2 = o3.charAt(s2), n4 = r2.charCodeAt(0);
    if (t[n4] !== 255)
      throw new TypeError(r2 + " is ambiguous");
    t[n4] = s2;
  }
  var a3 = o3.length, h4 = o3.charAt(0), l2 = Math.log(a3) / Math.log(256), d4 = Math.log(256) / Math.log(a3);
  function g3(u3) {
    if (u3 instanceof Uint8Array || (ArrayBuffer.isView(u3) ? u3 = new Uint8Array(u3.buffer, u3.byteOffset, u3.byteLength) : Array.isArray(u3) && (u3 = Uint8Array.from(u3))), !(u3 instanceof Uint8Array))
      throw new TypeError("Expected Uint8Array");
    if (u3.length === 0)
      return "";
    for (var p3 = 0, T2 = 0, D2 = 0, P2 = u3.length; D2 !== P2 && u3[D2] === 0; )
      D2++, p3++;
    for (var x2 = (P2 - D2) * d4 + 1 >>> 0, w3 = new Uint8Array(x2); D2 !== P2; ) {
      for (var O3 = u3[D2], N2 = 0, _3 = x2 - 1; (O3 !== 0 || N2 < T2) && _3 !== -1; _3--, N2++)
        O3 += 256 * w3[_3] >>> 0, w3[_3] = O3 % a3 >>> 0, O3 = O3 / a3 >>> 0;
      if (O3 !== 0)
        throw new Error("Non-zero carry");
      T2 = N2, D2++;
    }
    for (var A2 = x2 - T2; A2 !== x2 && w3[A2] === 0; )
      A2++;
    for (var G = h4.repeat(p3); A2 < x2; ++A2)
      G += o3.charAt(w3[A2]);
    return G;
  }
  function m3(u3) {
    if (typeof u3 != "string")
      throw new TypeError("Expected String");
    if (u3.length === 0)
      return new Uint8Array();
    var p3 = 0;
    if (u3[p3] !== " ") {
      for (var T2 = 0, D2 = 0; u3[p3] === h4; )
        T2++, p3++;
      for (var P2 = (u3.length - p3) * l2 + 1 >>> 0, x2 = new Uint8Array(P2); u3[p3]; ) {
        var w3 = t[u3.charCodeAt(p3)];
        if (w3 === 255)
          return;
        for (var O3 = 0, N2 = P2 - 1; (w3 !== 0 || O3 < D2) && N2 !== -1; N2--, O3++)
          w3 += a3 * x2[N2] >>> 0, x2[N2] = w3 % 256 >>> 0, w3 = w3 / 256 >>> 0;
        if (w3 !== 0)
          throw new Error("Non-zero carry");
        D2 = O3, p3++;
      }
      if (u3[p3] !== " ") {
        for (var _3 = P2 - D2; _3 !== P2 && x2[_3] === 0; )
          _3++;
        for (var A2 = new Uint8Array(T2 + (P2 - _3)), G = T2; _3 !== P2; )
          A2[G++] = x2[_3++];
        return A2;
      }
    }
  }
  function L4(u3) {
    var p3 = m3(u3);
    if (p3)
      return p3;
    throw new Error(`Non-${e2} character`);
  }
  return { encode: g3, decodeUnsafe: m3, decode: L4 };
}
var Ji = Hi, Xi = Ji;
const Ue$1 = (o3) => {
  if (o3 instanceof Uint8Array && o3.constructor.name === "Uint8Array")
    return o3;
  if (o3 instanceof ArrayBuffer)
    return new Uint8Array(o3);
  if (ArrayBuffer.isView(o3))
    return new Uint8Array(o3.buffer, o3.byteOffset, o3.byteLength);
  throw new Error("Unknown type, must be binary type");
}, Wi$1 = (o3) => new TextEncoder().encode(o3), Qi = (o3) => new TextDecoder().decode(o3);
class Zi {
  constructor(e2, t, i3) {
    this.name = e2, this.prefix = t, this.baseEncode = i3;
  }
  encode(e2) {
    if (e2 instanceof Uint8Array)
      return `${this.prefix}${this.baseEncode(e2)}`;
    throw Error("Unknown type, must be binary type");
  }
}
let es$1 = class es {
  constructor(e2, t, i3) {
    if (this.name = e2, this.prefix = t, t.codePointAt(0) === void 0)
      throw new Error("Invalid prefix character");
    this.prefixCodePoint = t.codePointAt(0), this.baseDecode = i3;
  }
  decode(e2) {
    if (typeof e2 == "string") {
      if (e2.codePointAt(0) !== this.prefixCodePoint)
        throw Error(`Unable to decode multibase string ${JSON.stringify(e2)}, ${this.name} decoder only supports inputs prefixed with ${this.prefix}`);
      return this.baseDecode(e2.slice(this.prefix.length));
    } else
      throw Error("Can only multibase decode strings");
  }
  or(e2) {
    return Fe$1(this, e2);
  }
};
let ts$1 = class ts {
  constructor(e2) {
    this.decoders = e2;
  }
  or(e2) {
    return Fe$1(this, e2);
  }
  decode(e2) {
    const t = e2[0], i3 = this.decoders[t];
    if (i3)
      return i3.decode(e2);
    throw RangeError(`Unable to decode multibase string ${JSON.stringify(e2)}, only inputs prefixed with ${Object.keys(this.decoders)} are supported`);
  }
};
const Fe$1 = (o3, e2) => new ts$1({ ...o3.decoders || { [o3.prefix]: o3 }, ...e2.decoders || { [e2.prefix]: e2 } });
let is$1 = class is {
  constructor(e2, t, i3, s2) {
    this.name = e2, this.prefix = t, this.baseEncode = i3, this.baseDecode = s2, this.encoder = new Zi(e2, t, i3), this.decoder = new es$1(e2, t, s2);
  }
  encode(e2) {
    return this.encoder.encode(e2);
  }
  decode(e2) {
    return this.decoder.decode(e2);
  }
};
const Q$1 = ({ name: o3, prefix: e2, encode: t, decode: i3 }) => new is$1(o3, e2, t, i3), V2 = ({ prefix: o3, name: e2, alphabet: t }) => {
  const { encode: i3, decode: s2 } = Xi(t, e2);
  return Q$1({ prefix: o3, name: e2, encode: i3, decode: (r2) => Ue$1(s2(r2)) });
}, ss$1 = (o3, e2, t, i3) => {
  const s2 = {};
  for (let d4 = 0; d4 < e2.length; ++d4)
    s2[e2[d4]] = d4;
  let r2 = o3.length;
  for (; o3[r2 - 1] === "="; )
    --r2;
  const n4 = new Uint8Array(r2 * t / 8 | 0);
  let a3 = 0, h4 = 0, l2 = 0;
  for (let d4 = 0; d4 < r2; ++d4) {
    const g3 = s2[o3[d4]];
    if (g3 === void 0)
      throw new SyntaxError(`Non-${i3} character`);
    h4 = h4 << t | g3, a3 += t, a3 >= 8 && (a3 -= 8, n4[l2++] = 255 & h4 >> a3);
  }
  if (a3 >= t || 255 & h4 << 8 - a3)
    throw new SyntaxError("Unexpected end of data");
  return n4;
}, rs$1 = (o3, e2, t) => {
  const i3 = e2[e2.length - 1] === "=", s2 = (1 << t) - 1;
  let r2 = "", n4 = 0, a3 = 0;
  for (let h4 = 0; h4 < o3.length; ++h4)
    for (a3 = a3 << 8 | o3[h4], n4 += 8; n4 > t; )
      n4 -= t, r2 += e2[s2 & a3 >> n4];
  if (n4 && (r2 += e2[s2 & a3 << t - n4]), i3)
    for (; r2.length * t & 7; )
      r2 += "=";
  return r2;
}, y$2 = ({ name: o3, prefix: e2, bitsPerChar: t, alphabet: i3 }) => Q$1({ prefix: e2, name: o3, encode(s2) {
  return rs$1(s2, i3, t);
}, decode(s2) {
  return ss$1(s2, i3, t, o3);
} }), ns$1 = Q$1({ prefix: "\0", name: "identity", encode: (o3) => Qi(o3), decode: (o3) => Wi$1(o3) });
var os = Object.freeze({ __proto__: null, identity: ns$1 });
const as = y$2({ prefix: "0", name: "base2", alphabet: "01", bitsPerChar: 1 });
var hs = Object.freeze({ __proto__: null, base2: as });
const cs = y$2({ prefix: "7", name: "base8", alphabet: "01234567", bitsPerChar: 3 });
var ls = Object.freeze({ __proto__: null, base8: cs });
const us = V2({ prefix: "9", name: "base10", alphabet: "0123456789" });
var ds = Object.freeze({ __proto__: null, base10: us });
const gs = y$2({ prefix: "f", name: "base16", alphabet: "0123456789abcdef", bitsPerChar: 4 }), ps = y$2({ prefix: "F", name: "base16upper", alphabet: "0123456789ABCDEF", bitsPerChar: 4 });
var Ds = Object.freeze({ __proto__: null, base16: gs, base16upper: ps });
const ys = y$2({ prefix: "b", name: "base32", alphabet: "abcdefghijklmnopqrstuvwxyz234567", bitsPerChar: 5 }), ms = y$2({ prefix: "B", name: "base32upper", alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567", bitsPerChar: 5 }), bs = y$2({ prefix: "c", name: "base32pad", alphabet: "abcdefghijklmnopqrstuvwxyz234567=", bitsPerChar: 5 }), fs = y$2({ prefix: "C", name: "base32padupper", alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567=", bitsPerChar: 5 }), Es = y$2({ prefix: "v", name: "base32hex", alphabet: "0123456789abcdefghijklmnopqrstuv", bitsPerChar: 5 }), ws = y$2({ prefix: "V", name: "base32hexupper", alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUV", bitsPerChar: 5 }), vs = y$2({ prefix: "t", name: "base32hexpad", alphabet: "0123456789abcdefghijklmnopqrstuv=", bitsPerChar: 5 }), Is = y$2({ prefix: "T", name: "base32hexpadupper", alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUV=", bitsPerChar: 5 }), Cs = y$2({ prefix: "h", name: "base32z", alphabet: "ybndrfg8ejkmcpqxot1uwisza345h769", bitsPerChar: 5 });
var Ts = Object.freeze({ __proto__: null, base32: ys, base32upper: ms, base32pad: bs, base32padupper: fs, base32hex: Es, base32hexupper: ws, base32hexpad: vs, base32hexpadupper: Is, base32z: Cs });
const _s = V2({ prefix: "k", name: "base36", alphabet: "0123456789abcdefghijklmnopqrstuvwxyz" }), Rs = V2({ prefix: "K", name: "base36upper", alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ" });
var Ss = Object.freeze({ __proto__: null, base36: _s, base36upper: Rs });
const Ps = V2({ name: "base58btc", prefix: "z", alphabet: "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz" }), xs = V2({ name: "base58flickr", prefix: "Z", alphabet: "123456789abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ" });
var Os = Object.freeze({ __proto__: null, base58btc: Ps, base58flickr: xs });
const As = y$2({ prefix: "m", name: "base64", alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", bitsPerChar: 6 }), zs = y$2({ prefix: "M", name: "base64pad", alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=", bitsPerChar: 6 }), Ns = y$2({ prefix: "u", name: "base64url", alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_", bitsPerChar: 6 }), Ls = y$2({ prefix: "U", name: "base64urlpad", alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_=", bitsPerChar: 6 });
var Us = Object.freeze({ __proto__: null, base64: As, base64pad: zs, base64url: Ns, base64urlpad: Ls });
const $e = Array.from("🚀🪐☄🛰🌌🌑🌒🌓🌔🌕🌖🌗🌘🌍🌏🌎🐉☀💻🖥💾💿😂❤😍🤣😊🙏💕😭😘👍😅👏😁🔥🥰💔💖💙😢🤔😆🙄💪😉☺👌🤗💜😔😎😇🌹🤦🎉💞✌✨🤷😱😌🌸🙌😋💗💚😏💛🙂💓🤩😄😀🖤😃💯🙈👇🎶😒🤭❣😜💋👀😪😑💥🙋😞😩😡🤪👊🥳😥🤤👉💃😳✋😚😝😴🌟😬🙃🍀🌷😻😓⭐✅🥺🌈😈🤘💦✔😣🏃💐☹🎊💘😠☝😕🌺🎂🌻😐🖕💝🙊😹🗣💫💀👑🎵🤞😛🔴😤🌼😫⚽🤙☕🏆🤫👈😮🙆🍻🍃🐶💁😲🌿🧡🎁⚡🌞🎈❌✊👋😰🤨😶🤝🚶💰🍓💢🤟🙁🚨💨🤬✈🎀🍺🤓😙💟🌱😖👶🥴▶➡❓💎💸⬇😨🌚🦋😷🕺⚠🙅😟😵👎🤲🤠🤧📌🔵💅🧐🐾🍒😗🤑🌊🤯🐷☎💧😯💆👆🎤🙇🍑❄🌴💣🐸💌📍🥀🤢👅💡💩👐📸👻🤐🤮🎼🥵🚩🍎🍊👼💍📣🥂"), Fs = $e.reduce((o3, e2, t) => (o3[t] = e2, o3), []), $s = $e.reduce((o3, e2, t) => (o3[e2.codePointAt(0)] = t, o3), []);
function Bs(o3) {
  return o3.reduce((e2, t) => (e2 += Fs[t], e2), "");
}
function Ms(o3) {
  const e2 = [];
  for (const t of o3) {
    const i3 = $s[t.codePointAt(0)];
    if (i3 === void 0)
      throw new Error(`Non-base256emoji character: ${t}`);
    e2.push(i3);
  }
  return new Uint8Array(e2);
}
const ks = Q$1({ prefix: "🚀", name: "base256emoji", encode: Bs, decode: Ms });
var Ks = Object.freeze({ __proto__: null, base256emoji: ks }), Vs = Me, Be$1 = 128, qs = 127, js = ~qs, Gs = Math.pow(2, 31);
function Me(o3, e2, t) {
  e2 = e2 || [], t = t || 0;
  for (var i3 = t; o3 >= Gs; )
    e2[t++] = o3 & 255 | Be$1, o3 /= 128;
  for (; o3 & js; )
    e2[t++] = o3 & 255 | Be$1, o3 >>>= 7;
  return e2[t] = o3 | 0, Me.bytes = t - i3 + 1, e2;
}
var Ys = de, Hs = 128, ke$1 = 127;
function de(o3, i3) {
  var t = 0, i3 = i3 || 0, s2 = 0, r2 = i3, n4, a3 = o3.length;
  do {
    if (r2 >= a3)
      throw de.bytes = 0, new RangeError("Could not decode varint");
    n4 = o3[r2++], t += s2 < 28 ? (n4 & ke$1) << s2 : (n4 & ke$1) * Math.pow(2, s2), s2 += 7;
  } while (n4 >= Hs);
  return de.bytes = r2 - i3, t;
}
var Js = Math.pow(2, 7), Xs = Math.pow(2, 14), Ws = Math.pow(2, 21), Qs = Math.pow(2, 28), Zs = Math.pow(2, 35), er = Math.pow(2, 42), tr = Math.pow(2, 49), ir = Math.pow(2, 56), sr = Math.pow(2, 63), rr = function(o3) {
  return o3 < Js ? 1 : o3 < Xs ? 2 : o3 < Ws ? 3 : o3 < Qs ? 4 : o3 < Zs ? 5 : o3 < er ? 6 : o3 < tr ? 7 : o3 < ir ? 8 : o3 < sr ? 9 : 10;
}, nr = { encode: Vs, decode: Ys, encodingLength: rr }, Ke = nr;
const Ve = (o3, e2, t = 0) => (Ke.encode(o3, e2, t), e2), qe = (o3) => Ke.encodingLength(o3), ge$1 = (o3, e2) => {
  const t = e2.byteLength, i3 = qe(o3), s2 = i3 + qe(t), r2 = new Uint8Array(s2 + t);
  return Ve(o3, r2, 0), Ve(t, r2, i3), r2.set(e2, s2), new or(o3, t, e2, r2);
};
class or {
  constructor(e2, t, i3, s2) {
    this.code = e2, this.size = t, this.digest = i3, this.bytes = s2;
  }
}
const je$1 = ({ name: o3, code: e2, encode: t }) => new ar(o3, e2, t);
class ar {
  constructor(e2, t, i3) {
    this.name = e2, this.code = t, this.encode = i3;
  }
  digest(e2) {
    if (e2 instanceof Uint8Array) {
      const t = this.encode(e2);
      return t instanceof Uint8Array ? ge$1(this.code, t) : t.then((i3) => ge$1(this.code, i3));
    } else
      throw Error("Unknown type, must be binary type");
  }
}
const Ge$1 = (o3) => async (e2) => new Uint8Array(await crypto.subtle.digest(o3, e2)), hr$1 = je$1({ name: "sha2-256", code: 18, encode: Ge$1("SHA-256") }), cr$1 = je$1({ name: "sha2-512", code: 19, encode: Ge$1("SHA-512") });
var lr$1 = Object.freeze({ __proto__: null, sha256: hr$1, sha512: cr$1 });
const Ye$1 = 0, ur = "identity", He$1 = Ue$1, dr2 = (o3) => ge$1(Ye$1, He$1(o3)), gr = { code: Ye$1, name: ur, encode: He$1, digest: dr2 };
var pr = Object.freeze({ __proto__: null, identity: gr });
new TextEncoder(), new TextDecoder();
const Je$1 = { ...os, ...hs, ...ls, ...ds, ...Ds, ...Ts, ...Ss, ...Os, ...Us, ...Ks };
({ ...lr$1, ...pr });
function Dr(o3 = 0) {
  return globalThis.Buffer != null && globalThis.Buffer.allocUnsafe != null ? globalThis.Buffer.allocUnsafe(o3) : new Uint8Array(o3);
}
function Xe$1(o3, e2, t, i3) {
  return { name: o3, prefix: e2, encoder: { name: o3, prefix: e2, encode: t }, decoder: { decode: i3 } };
}
const We$1 = Xe$1("utf8", "u", (o3) => "u" + new TextDecoder("utf8").decode(o3), (o3) => new TextEncoder().encode(o3.substring(1))), pe = Xe$1("ascii", "a", (o3) => {
  let e2 = "a";
  for (let t = 0; t < o3.length; t++)
    e2 += String.fromCharCode(o3[t]);
  return e2;
}, (o3) => {
  o3 = o3.substring(1);
  const e2 = Dr(o3.length);
  for (let t = 0; t < o3.length; t++)
    e2[t] = o3.charCodeAt(t);
  return e2;
}), yr = { utf8: We$1, "utf-8": We$1, hex: Je$1.base16, latin1: pe, ascii: pe, binary: pe, ...Je$1 };
function mr(o3, e2 = "utf8") {
  const t = yr[e2];
  if (!t)
    throw new Error(`Unsupported encoding "${e2}"`);
  return (e2 === "utf8" || e2 === "utf-8") && globalThis.Buffer != null && globalThis.Buffer.from != null ? globalThis.Buffer.from(o3, "utf8") : t.decoder.decode(`${t.prefix}${o3}`);
}
const De = "wc", Qe$1 = 2, Z = "core", z$2 = `${De}@2:${Z}:`, Ze$1 = { name: Z, logger: "error" }, et = { database: ":memory:" }, tt = "crypto", ye = "client_ed25519_seed", it = cjs$3.ONE_DAY, st = "keychain", rt = "0.3", nt = "messages", ot = "0.3", at = cjs$3.SIX_HOURS, ht = "publisher", ct = "irn", lt = "error", me = "wss://relay.walletconnect.com", be = "wss://relay.walletconnect.org", ut = "relayer", f$2 = { message: "relayer_message", message_ack: "relayer_message_ack", connect: "relayer_connect", disconnect: "relayer_disconnect", error: "relayer_error", connection_stalled: "relayer_connection_stalled", transport_closed: "relayer_transport_closed", publish: "relayer_publish" }, dt = "_subscription", E$2 = { payload: "payload", connect: "connect", disconnect: "disconnect", error: "error" }, gt = cjs$3.ONE_SECOND, pt = "2.13.0", Dt = 1e4, yt = "0.3", mt = "WALLETCONNECT_CLIENT_ID", S$1 = { created: "subscription_created", deleted: "subscription_deleted", expired: "subscription_expired", disabled: "subscription_disabled", sync: "subscription_sync", resubscribed: "subscription_resubscribed" }, bt = "subscription", ft$1 = "0.3", Et = cjs$3.FIVE_SECONDS * 1e3, wt = "pairing", vt = "0.3", B2 = { wc_pairingDelete: { req: { ttl: cjs$3.ONE_DAY, prompt: false, tag: 1e3 }, res: { ttl: cjs$3.ONE_DAY, prompt: false, tag: 1001 } }, wc_pairingPing: { req: { ttl: cjs$3.THIRTY_SECONDS, prompt: false, tag: 1002 }, res: { ttl: cjs$3.THIRTY_SECONDS, prompt: false, tag: 1003 } }, unregistered_method: { req: { ttl: cjs$3.ONE_DAY, prompt: false, tag: 0 }, res: { ttl: cjs$3.ONE_DAY, prompt: false, tag: 0 } } }, q$1 = { create: "pairing_create", expire: "pairing_expire", delete: "pairing_delete", ping: "pairing_ping" }, I = { created: "history_created", updated: "history_updated", deleted: "history_deleted", sync: "history_sync" }, It = "history", Ct$1 = "0.3", Tt = "expirer", C$1 = { created: "expirer_created", deleted: "expirer_deleted", expired: "expirer_expired", sync: "expirer_sync" }, _t = "0.3", ee = "verify-api", M$2 = "https://verify.walletconnect.com", te = "https://verify.walletconnect.org", Rt = [M$2, te], St = "echo", Pt = "https://echo.walletconnect.com";
class xt {
  constructor(e2, t) {
    this.core = e2, this.logger = t, this.keychain = /* @__PURE__ */ new Map(), this.name = st, this.version = rt, this.initialized = false, this.storagePrefix = z$2, this.init = async () => {
      if (!this.initialized) {
        const i3 = await this.getKeyChain();
        typeof i3 < "u" && (this.keychain = i3), this.initialized = true;
      }
    }, this.has = (i3) => (this.isInitialized(), this.keychain.has(i3)), this.set = async (i3, s2) => {
      this.isInitialized(), this.keychain.set(i3, s2), await this.persist();
    }, this.get = (i3) => {
      this.isInitialized();
      const s2 = this.keychain.get(i3);
      if (typeof s2 > "u") {
        const { message: r2 } = xe("NO_MATCHING_KEY", `${this.name}: ${i3}`);
        throw new Error(r2);
      }
      return s2;
    }, this.del = async (i3) => {
      this.isInitialized(), this.keychain.delete(i3), await this.persist();
    }, this.core = e2, this.logger = E$4(t, this.name);
  }
  get context() {
    return y$4(this.logger);
  }
  get storageKey() {
    return this.storagePrefix + this.version + this.core.customStoragePrefix + "//" + this.name;
  }
  async setKeyChain(e2) {
    await this.core.storage.setItem(this.storageKey, i0(e2));
  }
  async getKeyChain() {
    const e2 = await this.core.storage.getItem(this.storageKey);
    return typeof e2 < "u" ? n0(e2) : void 0;
  }
  async persist() {
    await this.setKeyChain(this.keychain);
  }
  isInitialized() {
    if (!this.initialized) {
      const { message: e2 } = xe("NOT_INITIALIZED", this.name);
      throw new Error(e2);
    }
  }
}
class Ot {
  constructor(e2, t, i3) {
    this.core = e2, this.logger = t, this.name = tt, this.initialized = false, this.init = async () => {
      this.initialized || (await this.keychain.init(), this.initialized = true);
    }, this.hasKeys = (s2) => (this.isInitialized(), this.keychain.has(s2)), this.getClientId = async () => {
      this.isInitialized();
      const s2 = await this.getClientSeed(), r2 = generateKeyPair(s2);
      return encodeIss(r2.publicKey);
    }, this.generateKeyPair = () => {
      this.isInitialized();
      const s2 = mu();
      return this.setPrivateKey(s2.publicKey, s2.privateKey);
    }, this.signJWT = async (s2) => {
      this.isInitialized();
      const r2 = await this.getClientSeed(), n4 = generateKeyPair(r2), a3 = gu(), h4 = it;
      return await signJWT(a3, s2, h4, n4);
    }, this.generateSharedKey = (s2, r2, n4) => {
      this.isInitialized();
      const a3 = this.getPrivateKey(s2), h4 = Au(a3, r2);
      return this.setSymKey(h4, n4);
    }, this.setSymKey = async (s2, r2) => {
      this.isInitialized();
      const n4 = r2 || bu(s2);
      return await this.keychain.set(n4, s2), n4;
    }, this.deleteKeyPair = async (s2) => {
      this.isInitialized(), await this.keychain.del(s2);
    }, this.deleteSymKey = async (s2) => {
      this.isInitialized(), await this.keychain.del(s2);
    }, this.encode = async (s2, r2, n4) => {
      this.isInitialized();
      const a3 = eo(n4), h4 = safeJsonStringify(r2);
      if (Eu(a3)) {
        const m3 = a3.senderPublicKey, L4 = a3.receiverPublicKey;
        s2 = await this.generateSharedKey(m3, L4);
      }
      const l2 = this.getSymKey(s2), { type: d4, senderPublicKey: g3 } = a3;
      return wu({ type: d4, symKey: l2, message: h4, senderPublicKey: g3 });
    }, this.decode = async (s2, r2, n4) => {
      this.isInitialized();
      const a3 = Mu(r2, n4);
      if (Eu(a3)) {
        const h4 = a3.receiverPublicKey, l2 = a3.senderPublicKey;
        s2 = await this.generateSharedKey(h4, l2);
      }
      try {
        const h4 = this.getSymKey(s2), l2 = xu({ symKey: h4, encoded: r2 });
        return safeJsonParse(l2);
      } catch (h4) {
        this.logger.error(`Failed to decode message from topic: '${s2}', clientId: '${await this.getClientId()}'`), this.logger.error(h4);
      }
    }, this.getPayloadType = (s2) => {
      const r2 = Xi$1(s2);
      return Mr(r2.type);
    }, this.getPayloadSenderPublicKey = (s2) => {
      const r2 = Xi$1(s2);
      return r2.senderPublicKey ? toString(r2.senderPublicKey, zt$1) : void 0;
    }, this.core = e2, this.logger = E$4(t, this.name), this.keychain = i3 || new xt(this.core, this.logger);
  }
  get context() {
    return y$4(this.logger);
  }
  async setPrivateKey(e2, t) {
    return await this.keychain.set(e2, t), e2;
  }
  getPrivateKey(e2) {
    return this.keychain.get(e2);
  }
  async getClientSeed() {
    let e2 = "";
    try {
      e2 = this.keychain.get(ye);
    } catch {
      e2 = gu(), await this.keychain.set(ye, e2);
    }
    return mr(e2, "base16");
  }
  getSymKey(e2) {
    return this.keychain.get(e2);
  }
  isInitialized() {
    if (!this.initialized) {
      const { message: e2 } = xe("NOT_INITIALIZED", this.name);
      throw new Error(e2);
    }
  }
}
class At extends a$1 {
  constructor(e2, t) {
    super(e2, t), this.logger = e2, this.core = t, this.messages = /* @__PURE__ */ new Map(), this.name = nt, this.version = ot, this.initialized = false, this.storagePrefix = z$2, this.init = async () => {
      if (!this.initialized) {
        this.logger.trace("Initialized");
        try {
          const i3 = await this.getRelayerMessages();
          typeof i3 < "u" && (this.messages = i3), this.logger.debug(`Successfully Restored records for ${this.name}`), this.logger.trace({ type: "method", method: "restore", size: this.messages.size });
        } catch (i3) {
          this.logger.debug(`Failed to Restore records for ${this.name}`), this.logger.error(i3);
        } finally {
          this.initialized = true;
        }
      }
    }, this.set = async (i3, s2) => {
      this.isInitialized();
      const r2 = yu(s2);
      let n4 = this.messages.get(i3);
      return typeof n4 > "u" && (n4 = {}), typeof n4[r2] < "u" || (n4[r2] = s2, this.messages.set(i3, n4), await this.persist()), r2;
    }, this.get = (i3) => {
      this.isInitialized();
      let s2 = this.messages.get(i3);
      return typeof s2 > "u" && (s2 = {}), s2;
    }, this.has = (i3, s2) => {
      this.isInitialized();
      const r2 = this.get(i3), n4 = yu(s2);
      return typeof r2[n4] < "u";
    }, this.del = async (i3) => {
      this.isInitialized(), this.messages.delete(i3), await this.persist();
    }, this.logger = E$4(e2, this.name), this.core = t;
  }
  get context() {
    return y$4(this.logger);
  }
  get storageKey() {
    return this.storagePrefix + this.version + this.core.customStoragePrefix + "//" + this.name;
  }
  async setRelayerMessages(e2) {
    await this.core.storage.setItem(this.storageKey, i0(e2));
  }
  async getRelayerMessages() {
    const e2 = await this.core.storage.getItem(this.storageKey);
    return typeof e2 < "u" ? n0(e2) : void 0;
  }
  async persist() {
    await this.setRelayerMessages(this.messages);
  }
  isInitialized() {
    if (!this.initialized) {
      const { message: e2 } = xe("NOT_INITIALIZED", this.name);
      throw new Error(e2);
    }
  }
}
class vr extends u$1 {
  constructor(e2, t) {
    super(e2, t), this.relayer = e2, this.logger = t, this.events = new eventsExports.EventEmitter(), this.name = ht, this.queue = /* @__PURE__ */ new Map(), this.publishTimeout = cjs$3.toMiliseconds(cjs$3.ONE_MINUTE), this.failedPublishTimeout = cjs$3.toMiliseconds(cjs$3.ONE_SECOND), this.needsTransportRestart = false, this.publish = async (i3, s2, r2) => {
      var n4;
      this.logger.debug("Publishing Payload"), this.logger.trace({ type: "method", method: "publish", params: { topic: i3, message: s2, opts: r2 } });
      const a3 = (r2 == null ? void 0 : r2.ttl) || at, h4 = Su(r2), l2 = (r2 == null ? void 0 : r2.prompt) || false, d4 = (r2 == null ? void 0 : r2.tag) || 0, g3 = (r2 == null ? void 0 : r2.id) || getBigIntRpcId().toString(), m3 = { topic: i3, message: s2, opts: { ttl: a3, relay: h4, prompt: l2, tag: d4, id: g3 } }, L4 = `Failed to publish payload, please try again. id:${g3} tag:${d4}`, u3 = Date.now();
      let p3, T2 = 1;
      try {
        for (; p3 === void 0; ) {
          if (Date.now() - u3 > this.publishTimeout)
            throw new Error(L4);
          this.logger.trace({ id: g3, attempts: T2 }, `publisher.publish - attempt ${T2}`), p3 = await await u0(this.rpcPublish(i3, s2, a3, h4, l2, d4, g3).catch((D2) => this.logger.warn(D2)), this.publishTimeout, L4), T2++, p3 || await new Promise((D2) => setTimeout(D2, this.failedPublishTimeout));
        }
        this.relayer.events.emit(f$2.publish, m3), this.logger.debug("Successfully Published Payload"), this.logger.trace({ type: "method", method: "publish", params: { id: g3, topic: i3, message: s2, opts: r2 } });
      } catch (D2) {
        if (this.logger.debug("Failed to Publish Payload"), this.logger.error(D2), (n4 = r2 == null ? void 0 : r2.internal) != null && n4.throwOnFailedPublish)
          throw D2;
        this.queue.set(g3, m3);
      }
    }, this.on = (i3, s2) => {
      this.events.on(i3, s2);
    }, this.once = (i3, s2) => {
      this.events.once(i3, s2);
    }, this.off = (i3, s2) => {
      this.events.off(i3, s2);
    }, this.removeListener = (i3, s2) => {
      this.events.removeListener(i3, s2);
    }, this.relayer = e2, this.logger = E$4(t, this.name), this.registerEventListeners();
  }
  get context() {
    return y$4(this.logger);
  }
  rpcPublish(e2, t, i3, s2, r2, n4, a3) {
    var h4, l2, d4, g3;
    const m3 = { method: Nu(s2.protocol).publish, params: { topic: e2, message: t, ttl: i3, prompt: r2, tag: n4 }, id: a3 };
    return Pe((h4 = m3.params) == null ? void 0 : h4.prompt) && ((l2 = m3.params) == null || delete l2.prompt), Pe((d4 = m3.params) == null ? void 0 : d4.tag) && ((g3 = m3.params) == null || delete g3.tag), this.logger.debug("Outgoing Relay Payload"), this.logger.trace({ type: "message", direction: "outgoing", request: m3 }), this.relayer.request(m3);
  }
  removeRequestFromQueue(e2) {
    this.queue.delete(e2);
  }
  checkQueue() {
    this.queue.forEach(async (e2) => {
      const { topic: t, message: i3, opts: s2 } = e2;
      await this.publish(t, i3, s2);
    });
  }
  registerEventListeners() {
    this.relayer.core.heartbeat.on(r$1.pulse, () => {
      if (this.needsTransportRestart) {
        this.needsTransportRestart = false, this.relayer.events.emit(f$2.connection_stalled);
        return;
      }
      this.checkQueue();
    }), this.relayer.on(f$2.message_ack, (e2) => {
      this.removeRequestFromQueue(e2.id.toString());
    });
  }
}
class Ir {
  constructor() {
    this.map = /* @__PURE__ */ new Map(), this.set = (e2, t) => {
      const i3 = this.get(e2);
      this.exists(e2, t) || this.map.set(e2, [...i3, t]);
    }, this.get = (e2) => this.map.get(e2) || [], this.exists = (e2, t) => this.get(e2).includes(t), this.delete = (e2, t) => {
      if (typeof t > "u") {
        this.map.delete(e2);
        return;
      }
      if (!this.map.has(e2))
        return;
      const i3 = this.get(e2);
      if (!this.exists(e2, t))
        return;
      const s2 = i3.filter((r2) => r2 !== t);
      if (!s2.length) {
        this.map.delete(e2);
        return;
      }
      this.map.set(e2, s2);
    }, this.clear = () => {
      this.map.clear();
    };
  }
  get topics() {
    return Array.from(this.map.keys());
  }
}
var Cr = Object.defineProperty, Tr = Object.defineProperties, _r = Object.getOwnPropertyDescriptors, zt = Object.getOwnPropertySymbols, Rr = Object.prototype.hasOwnProperty, Sr = Object.prototype.propertyIsEnumerable, Nt = (o3, e2, t) => e2 in o3 ? Cr(o3, e2, { enumerable: true, configurable: true, writable: true, value: t }) : o3[e2] = t, j$2 = (o3, e2) => {
  for (var t in e2 || (e2 = {}))
    Rr.call(e2, t) && Nt(o3, t, e2[t]);
  if (zt)
    for (var t of zt(e2))
      Sr.call(e2, t) && Nt(o3, t, e2[t]);
  return o3;
}, fe = (o3, e2) => Tr(o3, _r(e2));
class Lt extends d$1 {
  constructor(e2, t) {
    super(e2, t), this.relayer = e2, this.logger = t, this.subscriptions = /* @__PURE__ */ new Map(), this.topicMap = new Ir(), this.events = new eventsExports.EventEmitter(), this.name = bt, this.version = ft$1, this.pending = /* @__PURE__ */ new Map(), this.cached = [], this.initialized = false, this.pendingSubscriptionWatchLabel = "pending_sub_watch_label", this.pollingInterval = 20, this.storagePrefix = z$2, this.subscribeTimeout = cjs$3.toMiliseconds(cjs$3.ONE_MINUTE), this.restartInProgress = false, this.batchSubscribeTopicsLimit = 500, this.pendingBatchMessages = [], this.init = async () => {
      this.initialized || (this.logger.trace("Initialized"), this.registerEventListeners(), this.clientId = await this.relayer.core.crypto.getClientId());
    }, this.subscribe = async (i3, s2) => {
      await this.restartToComplete(), this.isInitialized(), this.logger.debug("Subscribing Topic"), this.logger.trace({ type: "method", method: "subscribe", params: { topic: i3, opts: s2 } });
      try {
        const r2 = Su(s2), n4 = { topic: i3, relay: r2 };
        this.pending.set(i3, n4);
        const a3 = await this.rpcSubscribe(i3, r2);
        return typeof a3 == "string" && (this.onSubscribe(a3, n4), this.logger.debug("Successfully Subscribed Topic"), this.logger.trace({ type: "method", method: "subscribe", params: { topic: i3, opts: s2 } })), a3;
      } catch (r2) {
        throw this.logger.debug("Failed to Subscribe Topic"), this.logger.error(r2), r2;
      }
    }, this.unsubscribe = async (i3, s2) => {
      await this.restartToComplete(), this.isInitialized(), typeof (s2 == null ? void 0 : s2.id) < "u" ? await this.unsubscribeById(i3, s2.id, s2) : await this.unsubscribeByTopic(i3, s2);
    }, this.isSubscribed = async (i3) => {
      if (this.topics.includes(i3))
        return true;
      const s2 = `${this.pendingSubscriptionWatchLabel}_${i3}`;
      return await new Promise((r2, n4) => {
        const a3 = new cjs$3.Watch();
        a3.start(s2);
        const h4 = setInterval(() => {
          !this.pending.has(i3) && this.topics.includes(i3) && (clearInterval(h4), a3.stop(s2), r2(true)), a3.elapsed(s2) >= Et && (clearInterval(h4), a3.stop(s2), n4(new Error("Subscription resolution timeout")));
        }, this.pollingInterval);
      }).catch(() => false);
    }, this.on = (i3, s2) => {
      this.events.on(i3, s2);
    }, this.once = (i3, s2) => {
      this.events.once(i3, s2);
    }, this.off = (i3, s2) => {
      this.events.off(i3, s2);
    }, this.removeListener = (i3, s2) => {
      this.events.removeListener(i3, s2);
    }, this.start = async () => {
      await this.onConnect();
    }, this.stop = async () => {
      await this.onDisconnect();
    }, this.restart = async () => {
      this.restartInProgress = true, await this.restore(), await this.reset(), this.restartInProgress = false;
    }, this.relayer = e2, this.logger = E$4(t, this.name), this.clientId = "";
  }
  get context() {
    return y$4(this.logger);
  }
  get storageKey() {
    return this.storagePrefix + this.version + this.relayer.core.customStoragePrefix + "//" + this.name;
  }
  get length() {
    return this.subscriptions.size;
  }
  get ids() {
    return Array.from(this.subscriptions.keys());
  }
  get values() {
    return Array.from(this.subscriptions.values());
  }
  get topics() {
    return this.topicMap.topics;
  }
  hasSubscription(e2, t) {
    let i3 = false;
    try {
      i3 = this.getSubscription(e2).topic === t;
    } catch {
    }
    return i3;
  }
  onEnable() {
    this.cached = [], this.initialized = true;
  }
  onDisable() {
    this.cached = this.values, this.subscriptions.clear(), this.topicMap.clear();
  }
  async unsubscribeByTopic(e2, t) {
    const i3 = this.topicMap.get(e2);
    await Promise.all(i3.map(async (s2) => await this.unsubscribeById(e2, s2, t)));
  }
  async unsubscribeById(e2, t, i3) {
    this.logger.debug("Unsubscribing Topic"), this.logger.trace({ type: "method", method: "unsubscribe", params: { topic: e2, id: t, opts: i3 } });
    try {
      const s2 = Su(i3);
      await this.rpcUnsubscribe(e2, t, s2);
      const r2 = tr$1("USER_DISCONNECTED", `${this.name}, ${e2}`);
      await this.onUnsubscribe(e2, t, r2), this.logger.debug("Successfully Unsubscribed Topic"), this.logger.trace({ type: "method", method: "unsubscribe", params: { topic: e2, id: t, opts: i3 } });
    } catch (s2) {
      throw this.logger.debug("Failed to Unsubscribe Topic"), this.logger.error(s2), s2;
    }
  }
  async rpcSubscribe(e2, t) {
    const i3 = { method: Nu(t.protocol).subscribe, params: { topic: e2 } };
    this.logger.debug("Outgoing Relay Payload"), this.logger.trace({ type: "payload", direction: "outgoing", request: i3 });
    try {
      return await await u0(this.relayer.request(i3).catch((s2) => this.logger.warn(s2)), this.subscribeTimeout) ? yu(e2 + this.clientId) : null;
    } catch {
      this.logger.debug("Outgoing Relay Subscribe Payload stalled"), this.relayer.events.emit(f$2.connection_stalled);
    }
    return null;
  }
  async rpcBatchSubscribe(e2) {
    if (!e2.length)
      return;
    const t = e2[0].relay, i3 = { method: Nu(t.protocol).batchSubscribe, params: { topics: e2.map((s2) => s2.topic) } };
    this.logger.debug("Outgoing Relay Payload"), this.logger.trace({ type: "payload", direction: "outgoing", request: i3 });
    try {
      return await await u0(this.relayer.request(i3).catch((s2) => this.logger.warn(s2)), this.subscribeTimeout);
    } catch {
      this.relayer.events.emit(f$2.connection_stalled);
    }
  }
  async rpcBatchFetchMessages(e2) {
    if (!e2.length)
      return;
    const t = e2[0].relay, i3 = { method: Nu(t.protocol).batchFetchMessages, params: { topics: e2.map((r2) => r2.topic) } };
    this.logger.debug("Outgoing Relay Payload"), this.logger.trace({ type: "payload", direction: "outgoing", request: i3 });
    let s2;
    try {
      s2 = await await u0(this.relayer.request(i3).catch((r2) => this.logger.warn(r2)), this.subscribeTimeout);
    } catch {
      this.relayer.events.emit(f$2.connection_stalled);
    }
    return s2;
  }
  rpcUnsubscribe(e2, t, i3) {
    const s2 = { method: Nu(i3.protocol).unsubscribe, params: { topic: e2, id: t } };
    return this.logger.debug("Outgoing Relay Payload"), this.logger.trace({ type: "payload", direction: "outgoing", request: s2 }), this.relayer.request(s2);
  }
  onSubscribe(e2, t) {
    this.setSubscription(e2, fe(j$2({}, t), { id: e2 })), this.pending.delete(t.topic);
  }
  onBatchSubscribe(e2) {
    e2.length && e2.forEach((t) => {
      this.setSubscription(t.id, j$2({}, t)), this.pending.delete(t.topic);
    });
  }
  async onUnsubscribe(e2, t, i3) {
    this.events.removeAllListeners(t), this.hasSubscription(t, e2) && this.deleteSubscription(t, i3), await this.relayer.messages.del(e2);
  }
  async setRelayerSubscriptions(e2) {
    await this.relayer.core.storage.setItem(this.storageKey, e2);
  }
  async getRelayerSubscriptions() {
    return await this.relayer.core.storage.getItem(this.storageKey);
  }
  setSubscription(e2, t) {
    this.logger.debug("Setting subscription"), this.logger.trace({ type: "method", method: "setSubscription", id: e2, subscription: t }), this.addSubscription(e2, t);
  }
  addSubscription(e2, t) {
    this.subscriptions.set(e2, j$2({}, t)), this.topicMap.set(t.topic, e2), this.events.emit(S$1.created, t);
  }
  getSubscription(e2) {
    this.logger.debug("Getting subscription"), this.logger.trace({ type: "method", method: "getSubscription", id: e2 });
    const t = this.subscriptions.get(e2);
    if (!t) {
      const { message: i3 } = xe("NO_MATCHING_KEY", `${this.name}: ${e2}`);
      throw new Error(i3);
    }
    return t;
  }
  deleteSubscription(e2, t) {
    this.logger.debug("Deleting subscription"), this.logger.trace({ type: "method", method: "deleteSubscription", id: e2, reason: t });
    const i3 = this.getSubscription(e2);
    this.subscriptions.delete(e2), this.topicMap.delete(i3.topic, e2), this.events.emit(S$1.deleted, fe(j$2({}, i3), { reason: t }));
  }
  async persist() {
    await this.setRelayerSubscriptions(this.values), this.events.emit(S$1.sync);
  }
  async reset() {
    if (this.cached.length) {
      const e2 = Math.ceil(this.cached.length / this.batchSubscribeTopicsLimit);
      for (let t = 0; t < e2; t++) {
        const i3 = this.cached.splice(0, this.batchSubscribeTopicsLimit);
        await this.batchFetchMessages(i3), await this.batchSubscribe(i3);
      }
    }
    this.events.emit(S$1.resubscribed);
  }
  async restore() {
    try {
      const e2 = await this.getRelayerSubscriptions();
      if (typeof e2 > "u" || !e2.length)
        return;
      if (this.subscriptions.size) {
        const { message: t } = xe("RESTORE_WILL_OVERRIDE", this.name);
        throw this.logger.error(t), this.logger.error(`${this.name}: ${JSON.stringify(this.values)}`), new Error(t);
      }
      this.cached = e2, this.logger.debug(`Successfully Restored subscriptions for ${this.name}`), this.logger.trace({ type: "method", method: "restore", subscriptions: this.values });
    } catch (e2) {
      this.logger.debug(`Failed to Restore subscriptions for ${this.name}`), this.logger.error(e2);
    }
  }
  async batchSubscribe(e2) {
    if (!e2.length)
      return;
    const t = await this.rpcBatchSubscribe(e2);
    Er(t) && this.onBatchSubscribe(t.map((i3, s2) => fe(j$2({}, e2[s2]), { id: i3 })));
  }
  async batchFetchMessages(e2) {
    if (!e2.length)
      return;
    this.logger.trace(`Fetching batch messages for ${e2.length} subscriptions`);
    const t = await this.rpcBatchFetchMessages(e2);
    t && t.messages && (this.pendingBatchMessages = this.pendingBatchMessages.concat(t.messages));
  }
  async onConnect() {
    await this.restart(), this.onEnable();
  }
  onDisconnect() {
    this.onDisable();
  }
  async checkPending() {
    if (!this.initialized || !this.relayer.connected)
      return;
    const e2 = [];
    this.pending.forEach((t) => {
      e2.push(t);
    }), await this.batchSubscribe(e2), this.pendingBatchMessages.length && (await this.relayer.handleBatchMessageEvents(this.pendingBatchMessages), this.pendingBatchMessages = []);
  }
  registerEventListeners() {
    this.relayer.core.heartbeat.on(r$1.pulse, async () => {
      await this.checkPending();
    }), this.events.on(S$1.created, async (e2) => {
      const t = S$1.created;
      this.logger.info(`Emitting ${t}`), this.logger.debug({ type: "event", event: t, data: e2 }), await this.persist();
    }), this.events.on(S$1.deleted, async (e2) => {
      const t = S$1.deleted;
      this.logger.info(`Emitting ${t}`), this.logger.debug({ type: "event", event: t, data: e2 }), await this.persist();
    });
  }
  isInitialized() {
    if (!this.initialized) {
      const { message: e2 } = xe("NOT_INITIALIZED", this.name);
      throw new Error(e2);
    }
  }
  async restartToComplete() {
    this.restartInProgress && await new Promise((e2) => {
      const t = setInterval(() => {
        this.restartInProgress || (clearInterval(t), e2());
      }, this.pollingInterval);
    });
  }
}
var Pr = Object.defineProperty, Ut2 = Object.getOwnPropertySymbols, xr = Object.prototype.hasOwnProperty, Or = Object.prototype.propertyIsEnumerable, Ft = (o3, e2, t) => e2 in o3 ? Pr(o3, e2, { enumerable: true, configurable: true, writable: true, value: t }) : o3[e2] = t, Ar = (o3, e2) => {
  for (var t in e2 || (e2 = {}))
    xr.call(e2, t) && Ft(o3, t, e2[t]);
  if (Ut2)
    for (var t of Ut2(e2))
      Or.call(e2, t) && Ft(o3, t, e2[t]);
  return o3;
};
class $t extends g$2 {
  constructor(e2) {
    super(e2), this.protocol = "wc", this.version = 2, this.events = new eventsExports.EventEmitter(), this.name = ut, this.transportExplicitlyClosed = false, this.initialized = false, this.connectionAttemptInProgress = false, this.connectionStatusPollingInterval = 20, this.staleConnectionErrors = ["socket hang up", "stalled", "interrupted"], this.hasExperiencedNetworkDisruption = false, this.requestsInFlight = /* @__PURE__ */ new Map(), this.heartBeatTimeout = cjs$3.toMiliseconds(cjs$3.THIRTY_SECONDS + cjs$3.ONE_SECOND), this.request = async (t) => {
      var i3, s2;
      this.logger.debug("Publishing Request Payload");
      const r2 = t.id || getBigIntRpcId().toString();
      await this.toEstablishConnection();
      try {
        const n4 = this.provider.request(t);
        this.requestsInFlight.set(r2, { promise: n4, request: t }), this.logger.trace({ id: r2, method: t.method, topic: (i3 = t.params) == null ? void 0 : i3.topic }, "relayer.request - attempt to publish...");
        const a3 = await new Promise(async (h4, l2) => {
          const d4 = () => {
            l2(new Error(`relayer.request - publish interrupted, id: ${r2}`));
          };
          this.provider.on(E$2.disconnect, d4);
          const g3 = await n4;
          this.provider.off(E$2.disconnect, d4), h4(g3);
        });
        return this.logger.trace({ id: r2, method: t.method, topic: (s2 = t.params) == null ? void 0 : s2.topic }, "relayer.request - published"), a3;
      } catch (n4) {
        throw this.logger.debug(`Failed to Publish Request: ${r2}`), n4;
      } finally {
        this.requestsInFlight.delete(r2);
      }
    }, this.resetPingTimeout = () => {
      if (pi())
        try {
          clearTimeout(this.pingTimeout), this.pingTimeout = setTimeout(() => {
            var t, i3, s2;
            (s2 = (i3 = (t = this.provider) == null ? void 0 : t.connection) == null ? void 0 : i3.socket) == null || s2.terminate();
          }, this.heartBeatTimeout);
        } catch (t) {
          this.logger.warn(t);
        }
    }, this.onPayloadHandler = (t) => {
      this.onProviderPayload(t), this.resetPingTimeout();
    }, this.onConnectHandler = () => {
      this.startPingTimeout(), this.events.emit(f$2.connect);
    }, this.onDisconnectHandler = () => {
      this.onProviderDisconnect();
    }, this.onProviderErrorHandler = (t) => {
      this.logger.error(t), this.events.emit(f$2.error, t), this.logger.info("Fatal socket error received, closing transport"), this.transportClose();
    }, this.registerProviderListeners = () => {
      this.provider.on(E$2.payload, this.onPayloadHandler), this.provider.on(E$2.connect, this.onConnectHandler), this.provider.on(E$2.disconnect, this.onDisconnectHandler), this.provider.on(E$2.error, this.onProviderErrorHandler);
    }, this.core = e2.core, this.logger = typeof e2.logger < "u" && typeof e2.logger != "string" ? E$4(e2.logger, this.name) : Hg(k({ level: e2.logger || lt })), this.messages = new At(this.logger, e2.core), this.subscriber = new Lt(this, this.logger), this.publisher = new vr(this, this.logger), this.relayUrl = (e2 == null ? void 0 : e2.relayUrl) || me, this.projectId = e2.projectId, this.bundleId = Wo(), this.provider = {};
  }
  async init() {
    this.logger.trace("Initialized"), this.registerEventListeners(), await Promise.all([this.messages.init(), this.subscriber.init()]);
    try {
      await this.transportOpen();
    } catch {
      this.logger.warn(`Connection via ${this.relayUrl} failed, attempting to connect via failover domain ${be}...`), await this.restartTransport(be);
    }
    this.initialized = true, setTimeout(async () => {
      this.subscriber.topics.length === 0 && this.subscriber.pending.size === 0 && (this.logger.info("No topics subscribed to after init, closing transport"), await this.transportClose(), this.transportExplicitlyClosed = false);
    }, Dt);
  }
  get context() {
    return y$4(this.logger);
  }
  get connected() {
    var e2, t, i3;
    return ((i3 = (t = (e2 = this.provider) == null ? void 0 : e2.connection) == null ? void 0 : t.socket) == null ? void 0 : i3.readyState) === 1;
  }
  get connecting() {
    var e2, t, i3;
    return ((i3 = (t = (e2 = this.provider) == null ? void 0 : e2.connection) == null ? void 0 : t.socket) == null ? void 0 : i3.readyState) === 0;
  }
  async publish(e2, t, i3) {
    this.isInitialized(), await this.publisher.publish(e2, t, i3), await this.recordMessageEvent({ topic: e2, message: t, publishedAt: Date.now() });
  }
  async subscribe(e2, t) {
    var i3;
    this.isInitialized();
    let s2 = ((i3 = this.subscriber.topicMap.get(e2)) == null ? void 0 : i3[0]) || "", r2;
    const n4 = (a3) => {
      a3.topic === e2 && (this.subscriber.off(S$1.created, n4), r2());
    };
    return await Promise.all([new Promise((a3) => {
      r2 = a3, this.subscriber.on(S$1.created, n4);
    }), new Promise(async (a3) => {
      s2 = await this.subscriber.subscribe(e2, t) || s2, a3();
    })]), s2;
  }
  async unsubscribe(e2, t) {
    this.isInitialized(), await this.subscriber.unsubscribe(e2, t);
  }
  on(e2, t) {
    this.events.on(e2, t);
  }
  once(e2, t) {
    this.events.once(e2, t);
  }
  off(e2, t) {
    this.events.off(e2, t);
  }
  removeListener(e2, t) {
    this.events.removeListener(e2, t);
  }
  async transportDisconnect() {
    if (!this.hasExperiencedNetworkDisruption && this.connected && this.requestsInFlight.size > 0)
      try {
        await Promise.all(Array.from(this.requestsInFlight.values()).map((e2) => e2.promise));
      } catch (e2) {
        this.logger.warn(e2);
      }
    this.hasExperiencedNetworkDisruption || this.connected ? await u0(this.provider.disconnect(), 2e3, "provider.disconnect()").catch(() => this.onProviderDisconnect()) : this.onProviderDisconnect();
  }
  async transportClose() {
    this.transportExplicitlyClosed = true, await this.transportDisconnect();
  }
  async transportOpen(e2) {
    await this.confirmOnlineStateOrThrow(), e2 && e2 !== this.relayUrl && (this.relayUrl = e2, await this.transportDisconnect()), await this.createProvider(), this.connectionAttemptInProgress = true, this.transportExplicitlyClosed = false;
    try {
      await new Promise(async (t, i3) => {
        const s2 = () => {
          this.provider.off(E$2.disconnect, s2), i3(new Error("Connection interrupted while trying to subscribe"));
        };
        this.provider.on(E$2.disconnect, s2), await u0(this.provider.connect(), cjs$3.toMiliseconds(cjs$3.ONE_MINUTE), `Socket stalled when trying to connect to ${this.relayUrl}`).catch((r2) => {
          i3(r2);
        }), await this.subscriber.start(), this.hasExperiencedNetworkDisruption = false, t();
      });
    } catch (t) {
      this.logger.error(t);
      const i3 = t;
      if (this.hasExperiencedNetworkDisruption = true, !this.isConnectionStalled(i3.message))
        throw t;
    } finally {
      this.connectionAttemptInProgress = false;
    }
  }
  async restartTransport(e2) {
    this.connectionAttemptInProgress || (this.relayUrl = e2 || this.relayUrl, await this.confirmOnlineStateOrThrow(), await this.transportClose(), await this.transportOpen());
  }
  async confirmOnlineStateOrThrow() {
    if (!await hh())
      throw new Error("No internet connection detected. Please restart your network and try again.");
  }
  async handleBatchMessageEvents(e2) {
    if ((e2 == null ? void 0 : e2.length) === 0) {
      this.logger.trace("Batch message events is empty. Ignoring...");
      return;
    }
    const t = e2.sort((i3, s2) => i3.publishedAt - s2.publishedAt);
    this.logger.trace(`Batch of ${t.length} message events sorted`);
    for (const i3 of t)
      try {
        await this.onMessageEvent(i3);
      } catch (s2) {
        this.logger.warn(s2);
      }
    this.logger.trace(`Batch of ${t.length} message events processed`);
  }
  startPingTimeout() {
    var e2, t, i3, s2, r2;
    if (pi())
      try {
        (t = (e2 = this.provider) == null ? void 0 : e2.connection) != null && t.socket && ((r2 = (s2 = (i3 = this.provider) == null ? void 0 : i3.connection) == null ? void 0 : s2.socket) == null || r2.once("ping", () => {
          this.resetPingTimeout();
        })), this.resetPingTimeout();
      } catch (n4) {
        this.logger.warn(n4);
      }
  }
  isConnectionStalled(e2) {
    return this.staleConnectionErrors.some((t) => e2.includes(t));
  }
  async createProvider() {
    this.provider.connection && this.unregisterProviderListeners();
    const e2 = await this.core.crypto.signJWT(this.relayUrl);
    this.provider = new o$1(new f$3($o({ sdkVersion: pt, protocol: this.protocol, version: this.version, relayUrl: this.relayUrl, projectId: this.projectId, auth: e2, useOnCloseEvent: true, bundleId: this.bundleId }))), this.registerProviderListeners();
  }
  async recordMessageEvent(e2) {
    const { topic: t, message: i3 } = e2;
    await this.messages.set(t, i3);
  }
  async shouldIgnoreMessageEvent(e2) {
    const { topic: t, message: i3 } = e2;
    if (!i3 || i3.length === 0)
      return this.logger.debug(`Ignoring invalid/empty message: ${i3}`), true;
    if (!await this.subscriber.isSubscribed(t))
      return this.logger.debug(`Ignoring message for non-subscribed topic ${t}`), true;
    const s2 = this.messages.has(t, i3);
    return s2 && this.logger.debug(`Ignoring duplicate message: ${i3}`), s2;
  }
  async onProviderPayload(e2) {
    if (this.logger.debug("Incoming Relay Payload"), this.logger.trace({ type: "payload", direction: "incoming", payload: e2 }), isJsonRpcRequest(e2)) {
      if (!e2.method.endsWith(dt))
        return;
      const t = e2.params, { topic: i3, message: s2, publishedAt: r2 } = t.data, n4 = { topic: i3, message: s2, publishedAt: r2 };
      this.logger.debug("Emitting Relayer Payload"), this.logger.trace(Ar({ type: "event", event: t.id }, n4)), this.events.emit(t.id, n4), await this.acknowledgePayload(e2), await this.onMessageEvent(n4);
    } else
      isJsonRpcResponse(e2) && this.events.emit(f$2.message_ack, e2);
  }
  async onMessageEvent(e2) {
    await this.shouldIgnoreMessageEvent(e2) || (this.events.emit(f$2.message, e2), await this.recordMessageEvent(e2));
  }
  async acknowledgePayload(e2) {
    const t = formatJsonRpcResult(e2.id, true);
    await this.provider.connection.send(t);
  }
  unregisterProviderListeners() {
    this.provider.off(E$2.payload, this.onPayloadHandler), this.provider.off(E$2.connect, this.onConnectHandler), this.provider.off(E$2.disconnect, this.onDisconnectHandler), this.provider.off(E$2.error, this.onProviderErrorHandler), clearTimeout(this.pingTimeout);
  }
  async registerEventListeners() {
    let e2 = await hh();
    ch(async (t) => {
      e2 !== t && (e2 = t, t ? await this.restartTransport().catch((i3) => this.logger.error(i3)) : (this.hasExperiencedNetworkDisruption = true, await this.transportDisconnect(), this.transportExplicitlyClosed = false));
    });
  }
  async onProviderDisconnect() {
    await this.subscriber.stop(), this.requestsInFlight.clear(), clearTimeout(this.pingTimeout), this.events.emit(f$2.disconnect), this.connectionAttemptInProgress = false, !this.transportExplicitlyClosed && setTimeout(async () => {
      await this.transportOpen().catch((e2) => this.logger.error(e2));
    }, cjs$3.toMiliseconds(gt));
  }
  isInitialized() {
    if (!this.initialized) {
      const { message: e2 } = xe("NOT_INITIALIZED", this.name);
      throw new Error(e2);
    }
  }
  async toEstablishConnection() {
    await this.confirmOnlineStateOrThrow(), !this.connected && (this.connectionAttemptInProgress && await new Promise((e2) => {
      const t = setInterval(() => {
        this.connected && (clearInterval(t), e2());
      }, this.connectionStatusPollingInterval);
    }), await this.transportOpen());
  }
}
var zr = Object.defineProperty, Bt$1 = Object.getOwnPropertySymbols, Nr = Object.prototype.hasOwnProperty, Lr = Object.prototype.propertyIsEnumerable, Mt = (o3, e2, t) => e2 in o3 ? zr(o3, e2, { enumerable: true, configurable: true, writable: true, value: t }) : o3[e2] = t, kt = (o3, e2) => {
  for (var t in e2 || (e2 = {}))
    Nr.call(e2, t) && Mt(o3, t, e2[t]);
  if (Bt$1)
    for (var t of Bt$1(e2))
      Lr.call(e2, t) && Mt(o3, t, e2[t]);
  return o3;
};
class Kt extends p$2 {
  constructor(e2, t, i3, s2 = z$2, r2 = void 0) {
    super(e2, t, i3, s2), this.core = e2, this.logger = t, this.name = i3, this.map = /* @__PURE__ */ new Map(), this.version = yt, this.cached = [], this.initialized = false, this.storagePrefix = z$2, this.recentlyDeleted = [], this.recentlyDeletedLimit = 200, this.init = async () => {
      this.initialized || (this.logger.trace("Initialized"), await this.restore(), this.cached.forEach((n4) => {
        this.getKey && n4 !== null && !Pe(n4) ? this.map.set(this.getKey(n4), n4) : Gu(n4) ? this.map.set(n4.id, n4) : Yu(n4) && this.map.set(n4.topic, n4);
      }), this.cached = [], this.initialized = true);
    }, this.set = async (n4, a3) => {
      this.isInitialized(), this.map.has(n4) ? await this.update(n4, a3) : (this.logger.debug("Setting value"), this.logger.trace({ type: "method", method: "set", key: n4, value: a3 }), this.map.set(n4, a3), await this.persist());
    }, this.get = (n4) => (this.isInitialized(), this.logger.debug("Getting value"), this.logger.trace({ type: "method", method: "get", key: n4 }), this.getData(n4)), this.getAll = (n4) => (this.isInitialized(), n4 ? this.values.filter((a3) => Object.keys(n4).every((h4) => Gi(a3[h4], n4[h4]))) : this.values), this.update = async (n4, a3) => {
      this.isInitialized(), this.logger.debug("Updating value"), this.logger.trace({ type: "method", method: "update", key: n4, update: a3 });
      const h4 = kt(kt({}, this.getData(n4)), a3);
      this.map.set(n4, h4), await this.persist();
    }, this.delete = async (n4, a3) => {
      this.isInitialized(), this.map.has(n4) && (this.logger.debug("Deleting value"), this.logger.trace({ type: "method", method: "delete", key: n4, reason: a3 }), this.map.delete(n4), this.addToRecentlyDeleted(n4), await this.persist());
    }, this.logger = E$4(t, this.name), this.storagePrefix = s2, this.getKey = r2;
  }
  get context() {
    return y$4(this.logger);
  }
  get storageKey() {
    return this.storagePrefix + this.version + this.core.customStoragePrefix + "//" + this.name;
  }
  get length() {
    return this.map.size;
  }
  get keys() {
    return Array.from(this.map.keys());
  }
  get values() {
    return Array.from(this.map.values());
  }
  addToRecentlyDeleted(e2) {
    this.recentlyDeleted.push(e2), this.recentlyDeleted.length >= this.recentlyDeletedLimit && this.recentlyDeleted.splice(0, this.recentlyDeletedLimit / 2);
  }
  async setDataStore(e2) {
    await this.core.storage.setItem(this.storageKey, e2);
  }
  async getDataStore() {
    return await this.core.storage.getItem(this.storageKey);
  }
  getData(e2) {
    const t = this.map.get(e2);
    if (!t) {
      if (this.recentlyDeleted.includes(e2)) {
        const { message: s2 } = xe("MISSING_OR_INVALID", `Record was recently deleted - ${this.name}: ${e2}`);
        throw this.logger.error(s2), new Error(s2);
      }
      const { message: i3 } = xe("NO_MATCHING_KEY", `${this.name}: ${e2}`);
      throw this.logger.error(i3), new Error(i3);
    }
    return t;
  }
  async persist() {
    await this.setDataStore(this.values);
  }
  async restore() {
    try {
      const e2 = await this.getDataStore();
      if (typeof e2 > "u" || !e2.length)
        return;
      if (this.map.size) {
        const { message: t } = xe("RESTORE_WILL_OVERRIDE", this.name);
        throw this.logger.error(t), new Error(t);
      }
      this.cached = e2, this.logger.debug(`Successfully Restored value for ${this.name}`), this.logger.trace({ type: "method", method: "restore", value: this.values });
    } catch (e2) {
      this.logger.debug(`Failed to Restore value for ${this.name}`), this.logger.error(e2);
    }
  }
  isInitialized() {
    if (!this.initialized) {
      const { message: e2 } = xe("NOT_INITIALIZED", this.name);
      throw new Error(e2);
    }
  }
}
class Vt {
  constructor(e2, t) {
    this.core = e2, this.logger = t, this.name = wt, this.version = vt, this.events = new Wg(), this.initialized = false, this.storagePrefix = z$2, this.ignoredPayloadTypes = [lr$2], this.registeredMethods = [], this.init = async () => {
      this.initialized || (await this.pairings.init(), await this.cleanup(), this.registerRelayerEvents(), this.registerExpirerEvents(), this.initialized = true, this.logger.trace("Initialized"));
    }, this.register = ({ methods: i3 }) => {
      this.isInitialized(), this.registeredMethods = [.../* @__PURE__ */ new Set([...this.registeredMethods, ...i3])];
    }, this.create = async (i3) => {
      this.isInitialized();
      const s2 = gu(), r2 = await this.core.crypto.setSymKey(s2), n4 = d0(cjs$3.FIVE_MINUTES), a3 = { protocol: ct }, h4 = { topic: r2, expiry: n4, relay: a3, active: false }, l2 = Du({ protocol: this.core.protocol, version: this.core.version, topic: r2, symKey: s2, relay: a3, expiryTimestamp: n4, methods: i3 == null ? void 0 : i3.methods });
      return this.core.expirer.set(r2, n4), await this.pairings.set(r2, h4), await this.core.relayer.subscribe(r2), { topic: r2, uri: l2 };
    }, this.pair = async (i3) => {
      this.isInitialized(), this.isValidPair(i3);
      const { topic: s2, symKey: r2, relay: n4, expiryTimestamp: a3, methods: h4 } = Pu(i3.uri);
      let l2;
      if (this.pairings.keys.includes(s2) && (l2 = this.pairings.get(s2), l2.active))
        throw new Error(`Pairing already exists: ${s2}. Please try again with a new connection URI.`);
      const d4 = a3 || d0(cjs$3.FIVE_MINUTES), g3 = { topic: s2, relay: n4, expiry: d4, active: false, methods: h4 };
      return this.core.expirer.set(s2, d4), await this.pairings.set(s2, g3), i3.activatePairing && await this.activate({ topic: s2 }), this.events.emit(q$1.create, g3), this.core.crypto.keychain.has(s2) || await this.core.crypto.setSymKey(r2, s2), await this.core.relayer.subscribe(s2, { relay: n4 }), g3;
    }, this.activate = async ({ topic: i3 }) => {
      this.isInitialized();
      const s2 = d0(cjs$3.THIRTY_DAYS);
      this.core.expirer.set(i3, s2), await this.pairings.update(i3, { active: true, expiry: s2 });
    }, this.ping = async (i3) => {
      this.isInitialized(), await this.isValidPing(i3);
      const { topic: s2 } = i3;
      if (this.pairings.keys.includes(s2)) {
        const r2 = await this.sendRequest(s2, "wc_pairingPing", {}), { done: n4, resolve: a3, reject: h4 } = a0();
        this.events.once(v0("pairing_ping", r2), ({ error: l2 }) => {
          l2 ? h4(l2) : a3();
        }), await n4();
      }
    }, this.updateExpiry = async ({ topic: i3, expiry: s2 }) => {
      this.isInitialized(), await this.pairings.update(i3, { expiry: s2 });
    }, this.updateMetadata = async ({ topic: i3, metadata: s2 }) => {
      this.isInitialized(), await this.pairings.update(i3, { peerMetadata: s2 });
    }, this.getPairings = () => (this.isInitialized(), this.pairings.values), this.disconnect = async (i3) => {
      this.isInitialized(), await this.isValidDisconnect(i3);
      const { topic: s2 } = i3;
      this.pairings.keys.includes(s2) && (await this.sendRequest(s2, "wc_pairingDelete", tr$1("USER_DISCONNECTED")), await this.deletePairing(s2));
    }, this.sendRequest = async (i3, s2, r2) => {
      const n4 = formatJsonRpcRequest(s2, r2), a3 = await this.core.crypto.encode(i3, n4), h4 = B2[s2].req;
      return this.core.history.set(i3, n4), this.core.relayer.publish(i3, a3, h4), n4.id;
    }, this.sendResult = async (i3, s2, r2) => {
      const n4 = formatJsonRpcResult(i3, r2), a3 = await this.core.crypto.encode(s2, n4), h4 = await this.core.history.get(s2, i3), l2 = B2[h4.request.method].res;
      await this.core.relayer.publish(s2, a3, l2), await this.core.history.resolve(n4);
    }, this.sendError = async (i3, s2, r2) => {
      const n4 = formatJsonRpcError(i3, r2), a3 = await this.core.crypto.encode(s2, n4), h4 = await this.core.history.get(s2, i3), l2 = B2[h4.request.method] ? B2[h4.request.method].res : B2.unregistered_method.res;
      await this.core.relayer.publish(s2, a3, l2), await this.core.history.resolve(n4);
    }, this.deletePairing = async (i3, s2) => {
      await this.core.relayer.unsubscribe(i3), await Promise.all([this.pairings.delete(i3, tr$1("USER_DISCONNECTED")), this.core.crypto.deleteSymKey(i3), s2 ? Promise.resolve() : this.core.expirer.del(i3)]);
    }, this.cleanup = async () => {
      const i3 = this.pairings.getAll().filter((s2) => p0(s2.expiry));
      await Promise.all(i3.map((s2) => this.deletePairing(s2.topic)));
    }, this.onRelayEventRequest = (i3) => {
      const { topic: s2, payload: r2 } = i3;
      switch (r2.method) {
        case "wc_pairingPing":
          return this.onPairingPingRequest(s2, r2);
        case "wc_pairingDelete":
          return this.onPairingDeleteRequest(s2, r2);
        default:
          return this.onUnknownRpcMethodRequest(s2, r2);
      }
    }, this.onRelayEventResponse = async (i3) => {
      const { topic: s2, payload: r2 } = i3, n4 = (await this.core.history.get(s2, r2.id)).request.method;
      switch (n4) {
        case "wc_pairingPing":
          return this.onPairingPingResponse(s2, r2);
        default:
          return this.onUnknownRpcMethodResponse(n4);
      }
    }, this.onPairingPingRequest = async (i3, s2) => {
      const { id: r2 } = s2;
      try {
        this.isValidPing({ topic: i3 }), await this.sendResult(r2, i3, true), this.events.emit(q$1.ping, { id: r2, topic: i3 });
      } catch (n4) {
        await this.sendError(r2, i3, n4), this.logger.error(n4);
      }
    }, this.onPairingPingResponse = (i3, s2) => {
      const { id: r2 } = s2;
      setTimeout(() => {
        isJsonRpcResult(s2) ? this.events.emit(v0("pairing_ping", r2), {}) : isJsonRpcError(s2) && this.events.emit(v0("pairing_ping", r2), { error: s2.error });
      }, 500);
    }, this.onPairingDeleteRequest = async (i3, s2) => {
      const { id: r2 } = s2;
      try {
        this.isValidDisconnect({ topic: i3 }), await this.deletePairing(i3), this.events.emit(q$1.delete, { id: r2, topic: i3 });
      } catch (n4) {
        await this.sendError(r2, i3, n4), this.logger.error(n4);
      }
    }, this.onUnknownRpcMethodRequest = async (i3, s2) => {
      const { id: r2, method: n4 } = s2;
      try {
        if (this.registeredMethods.includes(n4))
          return;
        const a3 = tr$1("WC_METHOD_UNSUPPORTED", n4);
        await this.sendError(r2, i3, a3), this.logger.error(a3);
      } catch (a3) {
        await this.sendError(r2, i3, a3), this.logger.error(a3);
      }
    }, this.onUnknownRpcMethodResponse = (i3) => {
      this.registeredMethods.includes(i3) || this.logger.error(tr$1("WC_METHOD_UNSUPPORTED", i3));
    }, this.isValidPair = (i3) => {
      var s2;
      if (!$u(i3)) {
        const { message: n4 } = xe("MISSING_OR_INVALID", `pair() params: ${i3}`);
        throw new Error(n4);
      }
      if (!Ju(i3.uri)) {
        const { message: n4 } = xe("MISSING_OR_INVALID", `pair() uri: ${i3.uri}`);
        throw new Error(n4);
      }
      const r2 = Pu(i3.uri);
      if (!((s2 = r2 == null ? void 0 : r2.relay) != null && s2.protocol)) {
        const { message: n4 } = xe("MISSING_OR_INVALID", "pair() uri#relay-protocol");
        throw new Error(n4);
      }
      if (!(r2 != null && r2.symKey)) {
        const { message: n4 } = xe("MISSING_OR_INVALID", "pair() uri#symKey");
        throw new Error(n4);
      }
      if (r2 != null && r2.expiryTimestamp && cjs$3.toMiliseconds(r2 == null ? void 0 : r2.expiryTimestamp) < Date.now()) {
        const { message: n4 } = xe("EXPIRED", "pair() URI has expired. Please try again with a new connection URI.");
        throw new Error(n4);
      }
    }, this.isValidPing = async (i3) => {
      if (!$u(i3)) {
        const { message: r2 } = xe("MISSING_OR_INVALID", `ping() params: ${i3}`);
        throw new Error(r2);
      }
      const { topic: s2 } = i3;
      await this.isValidPairingTopic(s2);
    }, this.isValidDisconnect = async (i3) => {
      if (!$u(i3)) {
        const { message: r2 } = xe("MISSING_OR_INVALID", `disconnect() params: ${i3}`);
        throw new Error(r2);
      }
      const { topic: s2 } = i3;
      await this.isValidPairingTopic(s2);
    }, this.isValidPairingTopic = async (i3) => {
      if (!Gt$1(i3, false)) {
        const { message: s2 } = xe("MISSING_OR_INVALID", `pairing topic should be a string: ${i3}`);
        throw new Error(s2);
      }
      if (!this.pairings.keys.includes(i3)) {
        const { message: s2 } = xe("NO_MATCHING_KEY", `pairing topic doesn't exist: ${i3}`);
        throw new Error(s2);
      }
      if (p0(this.pairings.get(i3).expiry)) {
        await this.deletePairing(i3);
        const { message: s2 } = xe("EXPIRED", `pairing topic: ${i3}`);
        throw new Error(s2);
      }
    }, this.core = e2, this.logger = E$4(t, this.name), this.pairings = new Kt(this.core, this.logger, this.name, this.storagePrefix);
  }
  get context() {
    return y$4(this.logger);
  }
  isInitialized() {
    if (!this.initialized) {
      const { message: e2 } = xe("NOT_INITIALIZED", this.name);
      throw new Error(e2);
    }
  }
  registerRelayerEvents() {
    this.core.relayer.on(f$2.message, async (e2) => {
      const { topic: t, message: i3 } = e2;
      if (!this.pairings.keys.includes(t) || this.ignoredPayloadTypes.includes(this.core.crypto.getPayloadType(i3)))
        return;
      const s2 = await this.core.crypto.decode(t, i3);
      try {
        isJsonRpcRequest(s2) ? (this.core.history.set(t, s2), this.onRelayEventRequest({ topic: t, payload: s2 })) : isJsonRpcResponse(s2) && (await this.core.history.resolve(s2), await this.onRelayEventResponse({ topic: t, payload: s2 }), this.core.history.delete(t, s2.id));
      } catch (r2) {
        this.logger.error(r2);
      }
    });
  }
  registerExpirerEvents() {
    this.core.expirer.on(C$1.expired, async (e2) => {
      const { topic: t } = l0(e2.target);
      t && this.pairings.keys.includes(t) && (await this.deletePairing(t, true), this.events.emit(q$1.expire, { topic: t }));
    });
  }
}
class qt extends h$1 {
  constructor(e2, t) {
    super(e2, t), this.core = e2, this.logger = t, this.records = /* @__PURE__ */ new Map(), this.events = new eventsExports.EventEmitter(), this.name = It, this.version = Ct$1, this.cached = [], this.initialized = false, this.storagePrefix = z$2, this.init = async () => {
      this.initialized || (this.logger.trace("Initialized"), await this.restore(), this.cached.forEach((i3) => this.records.set(i3.id, i3)), this.cached = [], this.registerEventListeners(), this.initialized = true);
    }, this.set = (i3, s2, r2) => {
      if (this.isInitialized(), this.logger.debug("Setting JSON-RPC request history record"), this.logger.trace({ type: "method", method: "set", topic: i3, request: s2, chainId: r2 }), this.records.has(s2.id))
        return;
      const n4 = { id: s2.id, topic: i3, request: { method: s2.method, params: s2.params || null }, chainId: r2, expiry: d0(cjs$3.THIRTY_DAYS) };
      this.records.set(n4.id, n4), this.persist(), this.events.emit(I.created, n4);
    }, this.resolve = async (i3) => {
      if (this.isInitialized(), this.logger.debug("Updating JSON-RPC response history record"), this.logger.trace({ type: "method", method: "update", response: i3 }), !this.records.has(i3.id))
        return;
      const s2 = await this.getRecord(i3.id);
      typeof s2.response > "u" && (s2.response = isJsonRpcError(i3) ? { error: i3.error } : { result: i3.result }, this.records.set(s2.id, s2), this.persist(), this.events.emit(I.updated, s2));
    }, this.get = async (i3, s2) => (this.isInitialized(), this.logger.debug("Getting record"), this.logger.trace({ type: "method", method: "get", topic: i3, id: s2 }), await this.getRecord(s2)), this.delete = (i3, s2) => {
      this.isInitialized(), this.logger.debug("Deleting record"), this.logger.trace({ type: "method", method: "delete", id: s2 }), this.values.forEach((r2) => {
        if (r2.topic === i3) {
          if (typeof s2 < "u" && r2.id !== s2)
            return;
          this.records.delete(r2.id), this.events.emit(I.deleted, r2);
        }
      }), this.persist();
    }, this.exists = async (i3, s2) => (this.isInitialized(), this.records.has(s2) ? (await this.getRecord(s2)).topic === i3 : false), this.on = (i3, s2) => {
      this.events.on(i3, s2);
    }, this.once = (i3, s2) => {
      this.events.once(i3, s2);
    }, this.off = (i3, s2) => {
      this.events.off(i3, s2);
    }, this.removeListener = (i3, s2) => {
      this.events.removeListener(i3, s2);
    }, this.logger = E$4(t, this.name);
  }
  get context() {
    return y$4(this.logger);
  }
  get storageKey() {
    return this.storagePrefix + this.version + this.core.customStoragePrefix + "//" + this.name;
  }
  get size() {
    return this.records.size;
  }
  get keys() {
    return Array.from(this.records.keys());
  }
  get values() {
    return Array.from(this.records.values());
  }
  get pending() {
    const e2 = [];
    return this.values.forEach((t) => {
      if (typeof t.response < "u")
        return;
      const i3 = { topic: t.topic, request: formatJsonRpcRequest(t.request.method, t.request.params, t.id), chainId: t.chainId };
      return e2.push(i3);
    }), e2;
  }
  async setJsonRpcRecords(e2) {
    await this.core.storage.setItem(this.storageKey, e2);
  }
  async getJsonRpcRecords() {
    return await this.core.storage.getItem(this.storageKey);
  }
  getRecord(e2) {
    this.isInitialized();
    const t = this.records.get(e2);
    if (!t) {
      const { message: i3 } = xe("NO_MATCHING_KEY", `${this.name}: ${e2}`);
      throw new Error(i3);
    }
    return t;
  }
  async persist() {
    await this.setJsonRpcRecords(this.values), this.events.emit(I.sync);
  }
  async restore() {
    try {
      const e2 = await this.getJsonRpcRecords();
      if (typeof e2 > "u" || !e2.length)
        return;
      if (this.records.size) {
        const { message: t } = xe("RESTORE_WILL_OVERRIDE", this.name);
        throw this.logger.error(t), new Error(t);
      }
      this.cached = e2, this.logger.debug(`Successfully Restored records for ${this.name}`), this.logger.trace({ type: "method", method: "restore", records: this.values });
    } catch (e2) {
      this.logger.debug(`Failed to Restore records for ${this.name}`), this.logger.error(e2);
    }
  }
  registerEventListeners() {
    this.events.on(I.created, (e2) => {
      const t = I.created;
      this.logger.info(`Emitting ${t}`), this.logger.debug({ type: "event", event: t, record: e2 });
    }), this.events.on(I.updated, (e2) => {
      const t = I.updated;
      this.logger.info(`Emitting ${t}`), this.logger.debug({ type: "event", event: t, record: e2 });
    }), this.events.on(I.deleted, (e2) => {
      const t = I.deleted;
      this.logger.info(`Emitting ${t}`), this.logger.debug({ type: "event", event: t, record: e2 });
    }), this.core.heartbeat.on(r$1.pulse, () => {
      this.cleanup();
    });
  }
  cleanup() {
    try {
      this.isInitialized();
      let e2 = false;
      this.records.forEach((t) => {
        cjs$3.toMiliseconds(t.expiry || 0) - Date.now() <= 0 && (this.logger.info(`Deleting expired history log: ${t.id}`), this.records.delete(t.id), this.events.emit(I.deleted, t, false), e2 = true);
      }), e2 && this.persist();
    } catch (e2) {
      this.logger.warn(e2);
    }
  }
  isInitialized() {
    if (!this.initialized) {
      const { message: e2 } = xe("NOT_INITIALIZED", this.name);
      throw new Error(e2);
    }
  }
}
class jt extends E$3 {
  constructor(e2, t) {
    super(e2, t), this.core = e2, this.logger = t, this.expirations = /* @__PURE__ */ new Map(), this.events = new eventsExports.EventEmitter(), this.name = Tt, this.version = _t, this.cached = [], this.initialized = false, this.storagePrefix = z$2, this.init = async () => {
      this.initialized || (this.logger.trace("Initialized"), await this.restore(), this.cached.forEach((i3) => this.expirations.set(i3.target, i3)), this.cached = [], this.registerEventListeners(), this.initialized = true);
    }, this.has = (i3) => {
      try {
        const s2 = this.formatTarget(i3);
        return typeof this.getExpiration(s2) < "u";
      } catch {
        return false;
      }
    }, this.set = (i3, s2) => {
      this.isInitialized();
      const r2 = this.formatTarget(i3), n4 = { target: r2, expiry: s2 };
      this.expirations.set(r2, n4), this.checkExpiry(r2, n4), this.events.emit(C$1.created, { target: r2, expiration: n4 });
    }, this.get = (i3) => {
      this.isInitialized();
      const s2 = this.formatTarget(i3);
      return this.getExpiration(s2);
    }, this.del = (i3) => {
      if (this.isInitialized(), this.has(i3)) {
        const s2 = this.formatTarget(i3), r2 = this.getExpiration(s2);
        this.expirations.delete(s2), this.events.emit(C$1.deleted, { target: s2, expiration: r2 });
      }
    }, this.on = (i3, s2) => {
      this.events.on(i3, s2);
    }, this.once = (i3, s2) => {
      this.events.once(i3, s2);
    }, this.off = (i3, s2) => {
      this.events.off(i3, s2);
    }, this.removeListener = (i3, s2) => {
      this.events.removeListener(i3, s2);
    }, this.logger = E$4(t, this.name);
  }
  get context() {
    return y$4(this.logger);
  }
  get storageKey() {
    return this.storagePrefix + this.version + this.core.customStoragePrefix + "//" + this.name;
  }
  get length() {
    return this.expirations.size;
  }
  get keys() {
    return Array.from(this.expirations.keys());
  }
  get values() {
    return Array.from(this.expirations.values());
  }
  formatTarget(e2) {
    if (typeof e2 == "string")
      return h0(e2);
    if (typeof e2 == "number")
      return c0(e2);
    const { message: t } = xe("UNKNOWN_TYPE", `Target type: ${typeof e2}`);
    throw new Error(t);
  }
  async setExpirations(e2) {
    await this.core.storage.setItem(this.storageKey, e2);
  }
  async getExpirations() {
    return await this.core.storage.getItem(this.storageKey);
  }
  async persist() {
    await this.setExpirations(this.values), this.events.emit(C$1.sync);
  }
  async restore() {
    try {
      const e2 = await this.getExpirations();
      if (typeof e2 > "u" || !e2.length)
        return;
      if (this.expirations.size) {
        const { message: t } = xe("RESTORE_WILL_OVERRIDE", this.name);
        throw this.logger.error(t), new Error(t);
      }
      this.cached = e2, this.logger.debug(`Successfully Restored expirations for ${this.name}`), this.logger.trace({ type: "method", method: "restore", expirations: this.values });
    } catch (e2) {
      this.logger.debug(`Failed to Restore expirations for ${this.name}`), this.logger.error(e2);
    }
  }
  getExpiration(e2) {
    const t = this.expirations.get(e2);
    if (!t) {
      const { message: i3 } = xe("NO_MATCHING_KEY", `${this.name}: ${e2}`);
      throw this.logger.warn(i3), new Error(i3);
    }
    return t;
  }
  checkExpiry(e2, t) {
    const { expiry: i3 } = t;
    cjs$3.toMiliseconds(i3) - Date.now() <= 0 && this.expire(e2, t);
  }
  expire(e2, t) {
    this.expirations.delete(e2), this.events.emit(C$1.expired, { target: e2, expiration: t });
  }
  checkExpirations() {
    this.core.relayer.connected && this.expirations.forEach((e2, t) => this.checkExpiry(t, e2));
  }
  registerEventListeners() {
    this.core.heartbeat.on(r$1.pulse, () => this.checkExpirations()), this.events.on(C$1.created, (e2) => {
      const t = C$1.created;
      this.logger.info(`Emitting ${t}`), this.logger.debug({ type: "event", event: t, data: e2 }), this.persist();
    }), this.events.on(C$1.expired, (e2) => {
      const t = C$1.expired;
      this.logger.info(`Emitting ${t}`), this.logger.debug({ type: "event", event: t, data: e2 }), this.persist();
    }), this.events.on(C$1.deleted, (e2) => {
      const t = C$1.deleted;
      this.logger.info(`Emitting ${t}`), this.logger.debug({ type: "event", event: t, data: e2 }), this.persist();
    });
  }
  isInitialized() {
    if (!this.initialized) {
      const { message: e2 } = xe("NOT_INITIALIZED", this.name);
      throw new Error(e2);
    }
  }
}
class Gt extends y$3 {
  constructor(e2, t) {
    super(e2, t), this.projectId = e2, this.logger = t, this.name = ee, this.initialized = false, this.queue = [], this.verifyDisabled = false, this.init = async (i3) => {
      if (this.verifyDisabled || er$1() || !pr$1())
        return;
      const s2 = this.getVerifyUrl(i3 == null ? void 0 : i3.verifyUrl);
      this.verifyUrl !== s2 && this.removeIframe(), this.verifyUrl = s2;
      try {
        await this.createIframe();
      } catch (r2) {
        this.logger.info(`Verify iframe failed to load: ${this.verifyUrl}`), this.logger.info(r2);
      }
      if (!this.initialized) {
        this.removeIframe(), this.verifyUrl = te;
        try {
          await this.createIframe();
        } catch (r2) {
          this.logger.info(`Verify iframe failed to load: ${this.verifyUrl}`), this.logger.info(r2), this.verifyDisabled = true;
        }
      }
    }, this.register = async (i3) => {
      this.initialized ? this.sendPost(i3.attestationId) : (this.addToQueue(i3.attestationId), await this.init());
    }, this.resolve = async (i3) => {
      if (this.isDevEnv)
        return "";
      const s2 = this.getVerifyUrl(i3 == null ? void 0 : i3.verifyUrl);
      let r2;
      try {
        r2 = await this.fetchAttestation(i3.attestationId, s2);
      } catch (n4) {
        this.logger.info(`failed to resolve attestation: ${i3.attestationId} from url: ${s2}`), this.logger.info(n4), r2 = await this.fetchAttestation(i3.attestationId, te);
      }
      return r2;
    }, this.fetchAttestation = async (i3, s2) => {
      this.logger.info(`resolving attestation: ${i3} from url: ${s2}`);
      const r2 = this.startAbortTimer(cjs$3.ONE_SECOND * 2), n4 = await fetch(`${s2}/attestation/${i3}`, { signal: this.abortController.signal });
      return clearTimeout(r2), n4.status === 200 ? await n4.json() : void 0;
    }, this.addToQueue = (i3) => {
      this.queue.push(i3);
    }, this.processQueue = () => {
      this.queue.length !== 0 && (this.queue.forEach((i3) => this.sendPost(i3)), this.queue = []);
    }, this.sendPost = (i3) => {
      var s2;
      try {
        if (!this.iframe)
          return;
        (s2 = this.iframe.contentWindow) == null || s2.postMessage(i3, "*"), this.logger.info(`postMessage sent: ${i3} ${this.verifyUrl}`);
      } catch {
      }
    }, this.createIframe = async () => {
      let i3;
      const s2 = (r2) => {
        r2.data === "verify_ready" && (this.onInit(), window.removeEventListener("message", s2), i3());
      };
      await Promise.race([new Promise((r2) => {
        const n4 = document.getElementById(ee);
        if (n4)
          return this.iframe = n4, this.onInit(), r2();
        window.addEventListener("message", s2);
        const a3 = document.createElement("iframe");
        a3.id = ee, a3.src = `${this.verifyUrl}/${this.projectId}`, a3.style.display = "none", document.body.append(a3), this.iframe = a3, i3 = r2;
      }), new Promise((r2, n4) => setTimeout(() => {
        window.removeEventListener("message", s2), n4("verify iframe load timeout");
      }, cjs$3.toMiliseconds(cjs$3.FIVE_SECONDS)))]);
    }, this.onInit = () => {
      this.initialized = true, this.processQueue();
    }, this.removeIframe = () => {
      this.iframe && (this.iframe.remove(), this.iframe = void 0, this.initialized = false);
    }, this.getVerifyUrl = (i3) => {
      let s2 = i3 || M$2;
      return Rt.includes(s2) || (this.logger.info(`verify url: ${s2}, not included in trusted list, assigning default: ${M$2}`), s2 = M$2), s2;
    }, this.logger = E$4(t, this.name), this.verifyUrl = M$2, this.abortController = new AbortController(), this.isDevEnv = pi() && define_process_env_default.IS_VITEST;
  }
  get context() {
    return y$4(this.logger);
  }
  startAbortTimer(e2) {
    return this.abortController = new AbortController(), setTimeout(() => this.abortController.abort(), cjs$3.toMiliseconds(e2));
  }
}
let Yt$1 = class Yt extends v$2 {
  constructor(e2, t) {
    super(e2, t), this.projectId = e2, this.logger = t, this.context = St, this.registerDeviceToken = async (i3) => {
      const { clientId: s2, token: r2, notificationType: n4, enableEncrypted: a3 = false } = i3, h4 = `${Pt}/${this.projectId}/clients`;
      await Yi(h4, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ client_id: s2, type: n4, token: r2, always_raw: a3 }) });
    }, this.logger = E$4(t, this.context);
  }
};
var Ur = Object.defineProperty, Ht = Object.getOwnPropertySymbols, Fr = Object.prototype.hasOwnProperty, $r = Object.prototype.propertyIsEnumerable, Jt$1 = (o3, e2, t) => e2 in o3 ? Ur(o3, e2, { enumerable: true, configurable: true, writable: true, value: t }) : o3[e2] = t, Xt$1 = (o3, e2) => {
  for (var t in e2 || (e2 = {}))
    Fr.call(e2, t) && Jt$1(o3, t, e2[t]);
  if (Ht)
    for (var t of Ht(e2))
      $r.call(e2, t) && Jt$1(o3, t, e2[t]);
  return o3;
};
let ie$1 = class ie extends n$1 {
  constructor(e2) {
    var t;
    super(e2), this.protocol = De, this.version = Qe$1, this.name = Z, this.events = new eventsExports.EventEmitter(), this.initialized = false, this.on = (n4, a3) => this.events.on(n4, a3), this.once = (n4, a3) => this.events.once(n4, a3), this.off = (n4, a3) => this.events.off(n4, a3), this.removeListener = (n4, a3) => this.events.removeListener(n4, a3), this.projectId = e2 == null ? void 0 : e2.projectId, this.relayUrl = (e2 == null ? void 0 : e2.relayUrl) || me, this.customStoragePrefix = e2 != null && e2.customStoragePrefix ? `:${e2.customStoragePrefix}` : "";
    const i3 = k({ level: typeof (e2 == null ? void 0 : e2.logger) == "string" && e2.logger ? e2.logger : Ze$1.logger }), { logger: s2, chunkLoggerController: r2 } = A({ opts: i3, maxSizeInBytes: e2 == null ? void 0 : e2.maxLogBlobSizeInBytes, loggerOverride: e2 == null ? void 0 : e2.logger });
    this.logChunkController = r2, (t = this.logChunkController) != null && t.downloadLogsBlobInBrowser && (window.downloadLogsBlobInBrowser = async () => {
      var n4, a3;
      (n4 = this.logChunkController) != null && n4.downloadLogsBlobInBrowser && ((a3 = this.logChunkController) == null || a3.downloadLogsBlobInBrowser({ clientId: await this.crypto.getClientId() }));
    }), this.logger = E$4(s2, this.name), this.heartbeat = new i$1(), this.crypto = new Ot(this, this.logger, e2 == null ? void 0 : e2.keychain), this.history = new qt(this, this.logger), this.expirer = new jt(this, this.logger), this.storage = e2 != null && e2.storage ? e2.storage : new h$2(Xt$1(Xt$1({}, et), e2 == null ? void 0 : e2.storageOptions)), this.relayer = new $t({ core: this, logger: this.logger, relayUrl: this.relayUrl, projectId: this.projectId }), this.pairing = new Vt(this, this.logger), this.verify = new Gt(this.projectId || "", this.logger), this.echoClient = new Yt$1(this.projectId || "", this.logger);
  }
  static async init(e2) {
    const t = new ie(e2);
    await t.initialize();
    const i3 = await t.crypto.getClientId();
    return await t.storage.setItem(mt, i3), t;
  }
  get context() {
    return y$4(this.logger);
  }
  async start() {
    this.initialized || await this.initialize();
  }
  async getLogsBlob() {
    var e2;
    return (e2 = this.logChunkController) == null ? void 0 : e2.logsToBlob({ clientId: await this.crypto.getClientId() });
  }
  async initialize() {
    this.logger.trace("Initialized");
    try {
      await this.crypto.init(), await this.history.init(), await this.expirer.init(), await this.relayer.init(), await this.heartbeat.init(), await this.pairing.init(), this.initialized = true, this.logger.info("Core Initialization Success");
    } catch (e2) {
      throw this.logger.warn(`Core Initialization Failure at epoch ${Date.now()}`, e2), this.logger.error(e2.message), e2;
    }
  }
};
const Br = ie$1;
const Re = "wc", Ee = 2, Se = "client", ie2 = `${Re}@${Ee}:${Se}:`, re = { name: Se, logger: "error", controller: false, relayUrl: "wss://relay.walletconnect.com" }, _e = "WALLETCONNECT_DEEPLINK_CHOICE", Ue = "proposal", Ge = "Proposal expired", ke = "session", L$2 = cjs$3.SEVEN_DAYS, Fe = "engine", f$1 = { wc_sessionPropose: { req: { ttl: cjs$3.FIVE_MINUTES, prompt: true, tag: 1100 }, res: { ttl: cjs$3.FIVE_MINUTES, prompt: false, tag: 1101 } }, wc_sessionSettle: { req: { ttl: cjs$3.FIVE_MINUTES, prompt: false, tag: 1102 }, res: { ttl: cjs$3.FIVE_MINUTES, prompt: false, tag: 1103 } }, wc_sessionUpdate: { req: { ttl: cjs$3.ONE_DAY, prompt: false, tag: 1104 }, res: { ttl: cjs$3.ONE_DAY, prompt: false, tag: 1105 } }, wc_sessionExtend: { req: { ttl: cjs$3.ONE_DAY, prompt: false, tag: 1106 }, res: { ttl: cjs$3.ONE_DAY, prompt: false, tag: 1107 } }, wc_sessionRequest: { req: { ttl: cjs$3.FIVE_MINUTES, prompt: true, tag: 1108 }, res: { ttl: cjs$3.FIVE_MINUTES, prompt: false, tag: 1109 } }, wc_sessionEvent: { req: { ttl: cjs$3.FIVE_MINUTES, prompt: true, tag: 1110 }, res: { ttl: cjs$3.FIVE_MINUTES, prompt: false, tag: 1111 } }, wc_sessionDelete: { req: { ttl: cjs$3.ONE_DAY, prompt: false, tag: 1112 }, res: { ttl: cjs$3.ONE_DAY, prompt: false, tag: 1113 } }, wc_sessionPing: { req: { ttl: cjs$3.ONE_DAY, prompt: false, tag: 1114 }, res: { ttl: cjs$3.ONE_DAY, prompt: false, tag: 1115 } }, wc_sessionAuthenticate: { req: { ttl: cjs$3.ONE_HOUR, prompt: true, tag: 1116 }, res: { ttl: cjs$3.ONE_HOUR, prompt: false, tag: 1117 } } }, ne = { min: cjs$3.FIVE_MINUTES, max: cjs$3.SEVEN_DAYS }, D$1 = { idle: "IDLE", active: "ACTIVE" }, Qe = "request", je = ["wc_sessionPropose", "wc_sessionRequest", "wc_authRequest"], ze = "wc", He = "auth", Ye = "authKeys", Xe = "pairingTopics", Je = "requests", X = `${ze}@${1.5}:${He}:`, J = `${X}:PUB_KEY`;
var Yt2 = Object.defineProperty, Xt = Object.defineProperties, Jt = Object.getOwnPropertyDescriptors, Be = Object.getOwnPropertySymbols, Bt = Object.prototype.hasOwnProperty, Wt = Object.prototype.propertyIsEnumerable, We = (R, n4, t) => n4 in R ? Yt2(R, n4, { enumerable: true, configurable: true, writable: true, value: t }) : R[n4] = t, y$1 = (R, n4) => {
  for (var t in n4 || (n4 = {}))
    Bt.call(n4, t) && We(R, t, n4[t]);
  if (Be)
    for (var t of Be(n4))
      Wt.call(n4, t) && We(R, t, n4[t]);
  return R;
}, M$1 = (R, n4) => Xt(R, Jt(n4));
class Zt extends w$2 {
  constructor(n4) {
    super(n4), this.name = Fe, this.events = new Wg(), this.initialized = false, this.requestQueue = { state: D$1.idle, queue: [] }, this.sessionRequestQueue = { state: D$1.idle, queue: [] }, this.requestQueueDelay = cjs$3.ONE_SECOND, this.expectedPairingMethodMap = /* @__PURE__ */ new Map(), this.recentlyDeletedMap = /* @__PURE__ */ new Map(), this.recentlyDeletedLimit = 200, this.init = async () => {
      this.initialized || (await this.cleanup(), this.registerRelayerEvents(), this.registerExpirerEvents(), this.registerPairingEvents(), this.client.core.pairing.register({ methods: Object.keys(f$1) }), this.initialized = true, setTimeout(() => {
        this.sessionRequestQueue.queue = this.getPendingSessionRequests(), this.processSessionRequestQueue();
      }, cjs$3.toMiliseconds(this.requestQueueDelay)));
    }, this.connect = async (t) => {
      await this.isInitialized();
      const e2 = M$1(y$1({}, t), { requiredNamespaces: t.requiredNamespaces || {}, optionalNamespaces: t.optionalNamespaces || {} });
      await this.isValidConnect(e2);
      const { pairingTopic: s2, requiredNamespaces: i3, optionalNamespaces: r2, sessionProperties: o3, relays: a3 } = e2;
      let c2 = s2, h4, p3 = false;
      try {
        c2 && (p3 = this.client.core.pairing.pairings.get(c2).active);
      } catch (P2) {
        throw this.client.logger.error(`connect() -> pairing.get(${c2}) failed`), P2;
      }
      if (!c2 || !p3) {
        const { topic: P2, uri: v3 } = await this.client.core.pairing.create();
        c2 = P2, h4 = v3;
      }
      if (!c2) {
        const { message: P2 } = xe("NO_MATCHING_KEY", `connect() pairing topic: ${c2}`);
        throw new Error(P2);
      }
      const g3 = await this.client.core.crypto.generateKeyPair(), d4 = f$1.wc_sessionPropose.req.ttl || cjs$3.FIVE_MINUTES, w3 = d0(d4), m3 = y$1({ requiredNamespaces: i3, optionalNamespaces: r2, relays: a3 ?? [{ protocol: ct }], proposer: { publicKey: g3, metadata: this.client.metadata }, expiryTimestamp: w3 }, o3 && { sessionProperties: o3 }), { reject: E3, resolve: O3, done: S2 } = a0(d4, Ge);
      this.events.once(v0("session_connect"), async ({ error: P2, session: v3 }) => {
        if (P2)
          E3(P2);
        else if (v3) {
          v3.self.publicKey = g3;
          const B3 = M$1(y$1({}, v3), { requiredNamespaces: m3.requiredNamespaces, optionalNamespaces: m3.optionalNamespaces });
          await this.client.session.set(v3.topic, B3), await this.setExpiry(v3.topic, v3.expiry), c2 && await this.client.core.pairing.updateMetadata({ topic: c2, metadata: v3.peer.metadata }), O3(B3);
        }
      });
      const N2 = await this.sendRequest({ topic: c2, method: "wc_sessionPropose", params: m3, throwOnFailedPublish: true });
      return await this.setProposal(N2, y$1({ id: N2 }, m3)), { uri: h4, approval: S2 };
    }, this.pair = async (t) => {
      await this.isInitialized();
      try {
        return await this.client.core.pairing.pair(t);
      } catch (e2) {
        throw this.client.logger.error("pair() failed"), e2;
      }
    }, this.approve = async (t) => {
      await this.isInitialized();
      try {
        await this.isValidApprove(t);
      } catch (S2) {
        throw this.client.logger.error("approve() -> isValidApprove() failed"), S2;
      }
      const { id: e2, relayProtocol: s2, namespaces: i3, sessionProperties: r2, sessionConfig: o3 } = t;
      let a3;
      try {
        a3 = this.client.proposal.get(e2);
      } catch (S2) {
        throw this.client.logger.error(`approve() -> proposal.get(${e2}) failed`), S2;
      }
      let { pairingTopic: c2, proposer: h4, requiredNamespaces: p3, optionalNamespaces: g3 } = a3;
      c2 = c2 || "";
      const d4 = await this.client.core.crypto.generateKeyPair(), w3 = h4.publicKey, m3 = await this.client.core.crypto.generateSharedKey(d4, w3), E3 = y$1(y$1({ relay: { protocol: s2 ?? "irn" }, namespaces: i3, pairingTopic: c2, controller: { publicKey: d4, metadata: this.client.metadata }, expiry: d0(L$2) }, r2 && { sessionProperties: r2 }), o3 && { sessionConfig: o3 });
      await this.client.core.relayer.subscribe(m3);
      const O3 = M$1(y$1({}, E3), { topic: m3, requiredNamespaces: p3, optionalNamespaces: g3, pairingTopic: c2, acknowledged: false, self: E3.controller, peer: { publicKey: h4.publicKey, metadata: h4.metadata }, controller: d4 });
      await this.client.session.set(m3, O3);
      try {
        await this.sendResult({ id: e2, topic: c2, result: { relay: { protocol: s2 ?? "irn" }, responderPublicKey: d4 }, throwOnFailedPublish: true }), await this.sendRequest({ topic: m3, method: "wc_sessionSettle", params: E3, throwOnFailedPublish: true });
      } catch (S2) {
        throw this.client.logger.error(S2), this.client.session.delete(m3, tr$1("USER_DISCONNECTED")), await this.client.core.relayer.unsubscribe(m3), S2;
      }
      return await this.client.core.pairing.updateMetadata({ topic: c2, metadata: h4.metadata }), await this.client.proposal.delete(e2, tr$1("USER_DISCONNECTED")), await this.client.core.pairing.activate({ topic: c2 }), await this.setExpiry(m3, d0(L$2)), { topic: m3, acknowledged: () => new Promise((S2) => setTimeout(() => S2(this.client.session.get(m3)), 500)) };
    }, this.reject = async (t) => {
      await this.isInitialized();
      try {
        await this.isValidReject(t);
      } catch (r2) {
        throw this.client.logger.error("reject() -> isValidReject() failed"), r2;
      }
      const { id: e2, reason: s2 } = t;
      let i3;
      try {
        i3 = this.client.proposal.get(e2).pairingTopic;
      } catch (r2) {
        throw this.client.logger.error(`reject() -> proposal.get(${e2}) failed`), r2;
      }
      i3 && (await this.sendError({ id: e2, topic: i3, error: s2 }), await this.client.proposal.delete(e2, tr$1("USER_DISCONNECTED")));
    }, this.update = async (t) => {
      await this.isInitialized();
      try {
        await this.isValidUpdate(t);
      } catch (p3) {
        throw this.client.logger.error("update() -> isValidUpdate() failed"), p3;
      }
      const { topic: e2, namespaces: s2 } = t, { done: i3, resolve: r2, reject: o3 } = a0(), a3 = payloadId(), c2 = getBigIntRpcId().toString(), h4 = this.client.session.get(e2).namespaces;
      return this.events.once(v0("session_update", a3), ({ error: p3 }) => {
        p3 ? o3(p3) : r2();
      }), await this.client.session.update(e2, { namespaces: s2 }), await this.sendRequest({ topic: e2, method: "wc_sessionUpdate", params: { namespaces: s2 }, throwOnFailedPublish: true, clientRpcId: a3, relayRpcId: c2 }).catch((p3) => {
        this.client.logger.error(p3), this.client.session.update(e2, { namespaces: h4 }), o3(p3);
      }), { acknowledged: i3 };
    }, this.extend = async (t) => {
      await this.isInitialized();
      try {
        await this.isValidExtend(t);
      } catch (a3) {
        throw this.client.logger.error("extend() -> isValidExtend() failed"), a3;
      }
      const { topic: e2 } = t, s2 = payloadId(), { done: i3, resolve: r2, reject: o3 } = a0();
      return this.events.once(v0("session_extend", s2), ({ error: a3 }) => {
        a3 ? o3(a3) : r2();
      }), await this.setExpiry(e2, d0(L$2)), this.sendRequest({ topic: e2, method: "wc_sessionExtend", params: {}, clientRpcId: s2, throwOnFailedPublish: true }).catch((a3) => {
        o3(a3);
      }), { acknowledged: i3 };
    }, this.request = async (t) => {
      await this.isInitialized();
      try {
        await this.isValidRequest(t);
      } catch (d4) {
        throw this.client.logger.error("request() -> isValidRequest() failed"), d4;
      }
      const { chainId: e2, request: s2, topic: i3, expiry: r2 = f$1.wc_sessionRequest.req.ttl } = t, o3 = this.client.session.get(i3), a3 = payloadId(), c2 = getBigIntRpcId().toString(), { done: h4, resolve: p3, reject: g3 } = a0(r2, "Request expired. Please try again.");
      return this.events.once(v0("session_request", a3), ({ error: d4, result: w3 }) => {
        d4 ? g3(d4) : p3(w3);
      }), await Promise.all([new Promise(async (d4) => {
        await this.sendRequest({ clientRpcId: a3, relayRpcId: c2, topic: i3, method: "wc_sessionRequest", params: { request: M$1(y$1({}, s2), { expiryTimestamp: d0(r2) }), chainId: e2 }, expiry: r2, throwOnFailedPublish: true }).catch((w3) => g3(w3)), this.client.events.emit("session_request_sent", { topic: i3, request: s2, chainId: e2, id: a3 }), d4();
      }), new Promise(async (d4) => {
        var w3;
        if (!((w3 = o3.sessionConfig) != null && w3.disableDeepLink)) {
          const m3 = await g0(this.client.core.storage, _e);
          m0({ id: a3, topic: i3, wcDeepLink: m3 });
        }
        d4();
      }), h4()]).then((d4) => d4[2]);
    }, this.respond = async (t) => {
      await this.isInitialized(), await this.isValidRespond(t);
      const { topic: e2, response: s2 } = t, { id: i3 } = s2;
      isJsonRpcResult(s2) ? await this.sendResult({ id: i3, topic: e2, result: s2.result, throwOnFailedPublish: true }) : isJsonRpcError(s2) && await this.sendError({ id: i3, topic: e2, error: s2.error }), this.cleanupAfterResponse(t);
    }, this.ping = async (t) => {
      await this.isInitialized();
      try {
        await this.isValidPing(t);
      } catch (s2) {
        throw this.client.logger.error("ping() -> isValidPing() failed"), s2;
      }
      const { topic: e2 } = t;
      if (this.client.session.keys.includes(e2)) {
        const s2 = payloadId(), i3 = getBigIntRpcId().toString(), { done: r2, resolve: o3, reject: a3 } = a0();
        this.events.once(v0("session_ping", s2), ({ error: c2 }) => {
          c2 ? a3(c2) : o3();
        }), await Promise.all([this.sendRequest({ topic: e2, method: "wc_sessionPing", params: {}, throwOnFailedPublish: true, clientRpcId: s2, relayRpcId: i3 }), r2()]);
      } else
        this.client.core.pairing.pairings.keys.includes(e2) && await this.client.core.pairing.ping({ topic: e2 });
    }, this.emit = async (t) => {
      await this.isInitialized(), await this.isValidEmit(t);
      const { topic: e2, event: s2, chainId: i3 } = t, r2 = getBigIntRpcId().toString();
      await this.sendRequest({ topic: e2, method: "wc_sessionEvent", params: { event: s2, chainId: i3 }, throwOnFailedPublish: true, relayRpcId: r2 });
    }, this.disconnect = async (t) => {
      await this.isInitialized(), await this.isValidDisconnect(t);
      const { topic: e2 } = t;
      if (this.client.session.keys.includes(e2))
        await this.sendRequest({ topic: e2, method: "wc_sessionDelete", params: tr$1("USER_DISCONNECTED"), throwOnFailedPublish: true }), await this.deleteSession({ topic: e2, emitEvent: false });
      else if (this.client.core.pairing.pairings.keys.includes(e2))
        await this.client.core.pairing.disconnect({ topic: e2 });
      else {
        const { message: s2 } = xe("MISMATCHED_TOPIC", `Session or pairing topic not found: ${e2}`);
        throw new Error(s2);
      }
    }, this.find = (t) => (this.isInitialized(), this.client.session.getAll().filter((e2) => Qu(e2, t))), this.getPendingSessionRequests = () => this.client.pendingRequest.getAll(), this.authenticate = async (t) => {
      this.isInitialized(), this.isValidAuthenticate(t);
      const { chains: e2, statement: s2 = "", uri: i3, domain: r2, nonce: o3, type: a3, exp: c2, nbf: h4, methods: p3 = [], expiry: g3 } = t, d4 = [...t.resources || []], { topic: w3, uri: m3 } = await this.client.core.pairing.create({ methods: ["wc_sessionAuthenticate"] });
      this.client.logger.info({ message: "Generated new pairing", pairing: { topic: w3, uri: m3 } });
      const E3 = await this.client.core.crypto.generateKeyPair(), O3 = bu(E3);
      if (await Promise.all([this.client.auth.authKeys.set(J, { responseTopic: O3, publicKey: E3 }), this.client.auth.pairingTopics.set(O3, { topic: O3, pairingTopic: w3 })]), await this.client.core.relayer.subscribe(O3), this.client.logger.info(`sending request to new pairing topic: ${w3}`), p3.length > 0) {
        const { namespace: T2 } = dn(e2[0]);
        let _3 = cu(T2, "request", p3);
        Qr(d4) && (_3 = lu(_3, d4.pop())), d4.push(_3);
      }
      const S2 = g3 && g3 > f$1.wc_sessionAuthenticate.req.ttl ? g3 : f$1.wc_sessionAuthenticate.req.ttl, N2 = { authPayload: { type: a3 ?? "caip122", chains: e2, statement: s2, aud: i3, domain: r2, version: "1", nonce: o3, iat: (/* @__PURE__ */ new Date()).toISOString(), exp: c2, nbf: h4, resources: d4 }, requester: { publicKey: E3, metadata: this.client.metadata }, expiryTimestamp: d0(S2) }, P2 = { eip155: { chains: e2, methods: [.../* @__PURE__ */ new Set(["personal_sign", ...p3])], events: ["chainChanged", "accountsChanged"] } }, v3 = { requiredNamespaces: {}, optionalNamespaces: P2, relays: [{ protocol: "irn" }], proposer: { publicKey: E3, metadata: this.client.metadata }, expiryTimestamp: d0(f$1.wc_sessionPropose.req.ttl) }, { done: B3, resolve: Ie, reject: ae2 } = a0(S2, "Request expired"), W = async ({ error: T2, session: _3 }) => {
        if (this.events.off(v0("session_request", K2), ce2), T2)
          ae2(T2);
        else if (_3) {
          _3.self.publicKey = E3, await this.client.session.set(_3.topic, _3), await this.setExpiry(_3.topic, _3.expiry), w3 && await this.client.core.pairing.updateMetadata({ topic: w3, metadata: _3.peer.metadata });
          const j2 = this.client.session.get(_3.topic);
          await this.deleteProposal(Q2), Ie({ session: j2 });
        }
      }, ce2 = async (T2) => {
        if (await this.deletePendingAuthRequest(K2, { message: "fulfilled", code: 0 }), T2.error) {
          const z2 = tr$1("WC_METHOD_UNSUPPORTED", "wc_sessionAuthenticate");
          return T2.error.code === z2.code ? void 0 : (this.events.off(v0("session_connect"), W), ae2(T2.error.message));
        }
        await this.deleteProposal(Q2), this.events.off(v0("session_connect"), W);
        const { cacaos: _3, responder: j2 } = T2.result, le2 = [], fe2 = [];
        for (const z2 of _3) {
          await ou({ cacao: z2, projectId: this.client.core.projectId }) || (this.client.logger.error(z2, "Signature verification failed"), ae2(tr$1("SESSION_SETTLEMENT_FAILED", "Signature verification failed")));
          const { p: he2 } = z2, pe2 = Qr(he2.resources), qe2 = [fu(he2.iss)], et2 = Li(he2.iss);
          if (pe2) {
            const de2 = du(pe2), tt2 = pu(pe2);
            le2.push(...de2), qe2.push(...tt2);
          }
          for (const de2 of qe2)
            fe2.push(`${de2}:${et2}`);
        }
        const Z2 = await this.client.core.crypto.generateSharedKey(E3, j2.publicKey);
        let ee2;
        le2.length > 0 && (ee2 = { topic: Z2, acknowledged: true, self: { publicKey: E3, metadata: this.client.metadata }, peer: j2, controller: j2.publicKey, expiry: d0(L$2), requiredNamespaces: {}, optionalNamespaces: {}, relay: { protocol: "irn" }, pairingTopic: w3, namespaces: ju([...new Set(le2)], [...new Set(fe2)]) }, await this.client.core.relayer.subscribe(Z2), await this.client.session.set(Z2, ee2), ee2 = this.client.session.get(Z2)), Ie({ auths: _3, session: ee2 });
      }, K2 = payloadId(), Q2 = payloadId();
      this.events.once(v0("session_connect"), W), this.events.once(v0("session_request", K2), ce2);
      try {
        await Promise.all([this.sendRequest({ topic: w3, method: "wc_sessionAuthenticate", params: N2, expiry: t.expiry, throwOnFailedPublish: true, clientRpcId: K2 }), this.sendRequest({ topic: w3, method: "wc_sessionPropose", params: v3, expiry: f$1.wc_sessionPropose.req.ttl, throwOnFailedPublish: true, clientRpcId: Q2 })]);
      } catch (T2) {
        throw this.events.off(v0("session_connect"), W), this.events.off(v0("session_request", K2), ce2), T2;
      }
      return await this.setProposal(Q2, y$1({ id: Q2 }, v3)), await this.setAuthRequest(K2, { request: M$1(y$1({}, N2), { verifyContext: {} }), pairingTopic: w3 }), { uri: m3, response: B3 };
    }, this.approveSessionAuthenticate = async (t) => {
      this.isInitialized();
      const { id: e2, auths: s2 } = t, i3 = this.getPendingAuthRequest(e2);
      if (!i3)
        throw new Error(`Could not find pending auth request with id ${e2}`);
      const r2 = i3.requester.publicKey, o3 = await this.client.core.crypto.generateKeyPair(), a3 = bu(r2), c2 = { type: lr$2, receiverPublicKey: r2, senderPublicKey: o3 }, h4 = [], p3 = [];
      for (const w3 of s2) {
        if (!await ou({ cacao: w3, projectId: this.client.core.projectId })) {
          const N2 = tr$1("SESSION_SETTLEMENT_FAILED", "Signature verification failed");
          throw await this.sendError({ id: e2, topic: a3, error: N2, encodeOpts: c2 }), new Error(N2.message);
        }
        const { p: m3 } = w3, E3 = Qr(m3.resources), O3 = [fu(m3.iss)], S2 = Li(m3.iss);
        if (E3) {
          const N2 = du(E3), P2 = pu(E3);
          h4.push(...N2), O3.push(...P2);
        }
        for (const N2 of O3)
          p3.push(`${N2}:${S2}`);
      }
      const g3 = await this.client.core.crypto.generateSharedKey(o3, r2);
      let d4;
      return (h4 == null ? void 0 : h4.length) > 0 && (d4 = { topic: g3, acknowledged: true, self: { publicKey: o3, metadata: this.client.metadata }, peer: { publicKey: r2, metadata: i3.requester.metadata }, controller: r2, expiry: d0(L$2), authentication: s2, requiredNamespaces: {}, optionalNamespaces: {}, relay: { protocol: "irn" }, pairingTopic: "", namespaces: ju([...new Set(h4)], [...new Set(p3)]) }, await this.client.core.relayer.subscribe(g3), await this.client.session.set(g3, d4)), await this.sendResult({ topic: a3, id: e2, result: { cacaos: s2, responder: { publicKey: o3, metadata: this.client.metadata } }, encodeOpts: c2, throwOnFailedPublish: true }), await this.client.auth.requests.delete(e2, { message: "fullfilled", code: 0 }), await this.client.core.pairing.activate({ topic: i3.pairingTopic }), { session: d4 };
    }, this.rejectSessionAuthenticate = async (t) => {
      await this.isInitialized();
      const { id: e2, reason: s2 } = t, i3 = this.getPendingAuthRequest(e2);
      if (!i3)
        throw new Error(`Could not find pending auth request with id ${e2}`);
      const r2 = i3.requester.publicKey, o3 = await this.client.core.crypto.generateKeyPair(), a3 = bu(r2), c2 = { type: lr$2, receiverPublicKey: r2, senderPublicKey: o3 };
      await this.sendError({ id: e2, topic: a3, error: s2, encodeOpts: c2 }), await this.client.auth.requests.delete(e2, { message: "rejected", code: 0 }), await this.client.proposal.delete(e2, tr$1("USER_DISCONNECTED"));
    }, this.formatAuthMessage = (t) => {
      this.isInitialized();
      const { request: e2, iss: s2 } = t;
      return zf(e2, s2);
    }, this.cleanupDuplicatePairings = async (t) => {
      if (t.pairingTopic)
        try {
          const e2 = this.client.core.pairing.pairings.get(t.pairingTopic), s2 = this.client.core.pairing.pairings.getAll().filter((i3) => {
            var r2, o3;
            return ((r2 = i3.peerMetadata) == null ? void 0 : r2.url) && ((o3 = i3.peerMetadata) == null ? void 0 : o3.url) === t.peer.metadata.url && i3.topic && i3.topic !== e2.topic;
          });
          if (s2.length === 0)
            return;
          this.client.logger.info(`Cleaning up ${s2.length} duplicate pairing(s)`), await Promise.all(s2.map((i3) => this.client.core.pairing.disconnect({ topic: i3.topic }))), this.client.logger.info("Duplicate pairings clean up finished");
        } catch (e2) {
          this.client.logger.error(e2);
        }
    }, this.deleteSession = async (t) => {
      const { topic: e2, expirerHasDeleted: s2 = false, emitEvent: i3 = true, id: r2 = 0 } = t, { self: o3 } = this.client.session.get(e2);
      await this.client.core.relayer.unsubscribe(e2), await this.client.session.delete(e2, tr$1("USER_DISCONNECTED")), this.addToRecentlyDeleted(e2, "session"), this.client.core.crypto.keychain.has(o3.publicKey) && await this.client.core.crypto.deleteKeyPair(o3.publicKey), this.client.core.crypto.keychain.has(e2) && await this.client.core.crypto.deleteSymKey(e2), s2 || this.client.core.expirer.del(e2), this.client.core.storage.removeItem(_e).catch((a3) => this.client.logger.warn(a3)), this.getPendingSessionRequests().forEach((a3) => {
        a3.topic === e2 && this.deletePendingSessionRequest(a3.id, tr$1("USER_DISCONNECTED"));
      }), i3 && this.client.events.emit("session_delete", { id: r2, topic: e2 });
    }, this.deleteProposal = async (t, e2) => {
      await Promise.all([this.client.proposal.delete(t, tr$1("USER_DISCONNECTED")), e2 ? Promise.resolve() : this.client.core.expirer.del(t)]), this.addToRecentlyDeleted(t, "proposal");
    }, this.deletePendingSessionRequest = async (t, e2, s2 = false) => {
      await Promise.all([this.client.pendingRequest.delete(t, e2), s2 ? Promise.resolve() : this.client.core.expirer.del(t)]), this.addToRecentlyDeleted(t, "request"), this.sessionRequestQueue.queue = this.sessionRequestQueue.queue.filter((i3) => i3.id !== t), s2 && (this.sessionRequestQueue.state = D$1.idle, this.client.events.emit("session_request_expire", { id: t }));
    }, this.deletePendingAuthRequest = async (t, e2, s2 = false) => {
      await Promise.all([this.client.auth.requests.delete(t, e2), s2 ? Promise.resolve() : this.client.core.expirer.del(t)]);
    }, this.setExpiry = async (t, e2) => {
      this.client.session.keys.includes(t) && (this.client.core.expirer.set(t, e2), await this.client.session.update(t, { expiry: e2 }));
    }, this.setProposal = async (t, e2) => {
      this.client.core.expirer.set(t, d0(f$1.wc_sessionPropose.req.ttl)), await this.client.proposal.set(t, e2);
    }, this.setAuthRequest = async (t, e2) => {
      const { request: s2, pairingTopic: i3 } = e2;
      this.client.core.expirer.set(t, s2.expiryTimestamp), await this.client.auth.requests.set(t, { authPayload: s2.authPayload, requester: s2.requester, expiryTimestamp: s2.expiryTimestamp, id: t, pairingTopic: i3, verifyContext: s2.verifyContext });
    }, this.setPendingSessionRequest = async (t) => {
      const { id: e2, topic: s2, params: i3, verifyContext: r2 } = t, o3 = i3.request.expiryTimestamp || d0(f$1.wc_sessionRequest.req.ttl);
      this.client.core.expirer.set(e2, o3), await this.client.pendingRequest.set(e2, { id: e2, topic: s2, params: i3, verifyContext: r2 });
    }, this.sendRequest = async (t) => {
      const { topic: e2, method: s2, params: i3, expiry: r2, relayRpcId: o3, clientRpcId: a3, throwOnFailedPublish: c2 } = t, h4 = formatJsonRpcRequest(s2, i3, a3);
      if (pr$1() && je.includes(s2)) {
        const d4 = yu(JSON.stringify(h4));
        this.client.core.verify.register({ attestationId: d4 });
      }
      let p3;
      try {
        p3 = await this.client.core.crypto.encode(e2, h4);
      } catch (d4) {
        throw await this.cleanup(), this.client.logger.error(`sendRequest() -> core.crypto.encode() for topic ${e2} failed`), d4;
      }
      const g3 = f$1[s2].req;
      return r2 && (g3.ttl = r2), o3 && (g3.id = o3), this.client.core.history.set(e2, h4), c2 ? (g3.internal = M$1(y$1({}, g3.internal), { throwOnFailedPublish: true }), await this.client.core.relayer.publish(e2, p3, g3)) : this.client.core.relayer.publish(e2, p3, g3).catch((d4) => this.client.logger.error(d4)), h4.id;
    }, this.sendResult = async (t) => {
      const { id: e2, topic: s2, result: i3, throwOnFailedPublish: r2, encodeOpts: o3 } = t, a3 = formatJsonRpcResult(e2, i3);
      let c2;
      try {
        c2 = await this.client.core.crypto.encode(s2, a3, o3);
      } catch (g3) {
        throw await this.cleanup(), this.client.logger.error(`sendResult() -> core.crypto.encode() for topic ${s2} failed`), g3;
      }
      let h4;
      try {
        h4 = await this.client.core.history.get(s2, e2);
      } catch (g3) {
        throw this.client.logger.error(`sendResult() -> history.get(${s2}, ${e2}) failed`), g3;
      }
      const p3 = f$1[h4.request.method].res;
      r2 ? (p3.internal = M$1(y$1({}, p3.internal), { throwOnFailedPublish: true }), await this.client.core.relayer.publish(s2, c2, p3)) : this.client.core.relayer.publish(s2, c2, p3).catch((g3) => this.client.logger.error(g3)), await this.client.core.history.resolve(a3);
    }, this.sendError = async (t) => {
      const { id: e2, topic: s2, error: i3, encodeOpts: r2 } = t, o3 = formatJsonRpcError(e2, i3);
      let a3;
      try {
        a3 = await this.client.core.crypto.encode(s2, o3, r2);
      } catch (p3) {
        throw await this.cleanup(), this.client.logger.error(`sendError() -> core.crypto.encode() for topic ${s2} failed`), p3;
      }
      let c2;
      try {
        c2 = await this.client.core.history.get(s2, e2);
      } catch (p3) {
        throw this.client.logger.error(`sendError() -> history.get(${s2}, ${e2}) failed`), p3;
      }
      const h4 = f$1[c2.request.method].res;
      this.client.core.relayer.publish(s2, a3, h4), await this.client.core.history.resolve(o3);
    }, this.cleanup = async () => {
      const t = [], e2 = [];
      this.client.session.getAll().forEach((s2) => {
        let i3 = false;
        p0(s2.expiry) && (i3 = true), this.client.core.crypto.keychain.has(s2.topic) || (i3 = true), i3 && t.push(s2.topic);
      }), this.client.proposal.getAll().forEach((s2) => {
        p0(s2.expiryTimestamp) && e2.push(s2.id);
      }), await Promise.all([...t.map((s2) => this.deleteSession({ topic: s2 })), ...e2.map((s2) => this.deleteProposal(s2))]);
    }, this.onRelayEventRequest = async (t) => {
      this.requestQueue.queue.push(t), await this.processRequestsQueue();
    }, this.processRequestsQueue = async () => {
      if (this.requestQueue.state === D$1.active) {
        this.client.logger.info("Request queue already active, skipping...");
        return;
      }
      for (this.client.logger.info(`Request queue starting with ${this.requestQueue.queue.length} requests`); this.requestQueue.queue.length > 0; ) {
        this.requestQueue.state = D$1.active;
        const t = this.requestQueue.queue.shift();
        if (t)
          try {
            this.processRequest(t), await new Promise((e2) => setTimeout(e2, 300));
          } catch (e2) {
            this.client.logger.warn(e2);
          }
      }
      this.requestQueue.state = D$1.idle;
    }, this.processRequest = (t) => {
      const { topic: e2, payload: s2 } = t, i3 = s2.method;
      if (!this.shouldIgnorePairingRequest({ topic: e2, requestMethod: i3 }))
        switch (i3) {
          case "wc_sessionPropose":
            return this.onSessionProposeRequest(e2, s2);
          case "wc_sessionSettle":
            return this.onSessionSettleRequest(e2, s2);
          case "wc_sessionUpdate":
            return this.onSessionUpdateRequest(e2, s2);
          case "wc_sessionExtend":
            return this.onSessionExtendRequest(e2, s2);
          case "wc_sessionPing":
            return this.onSessionPingRequest(e2, s2);
          case "wc_sessionDelete":
            return this.onSessionDeleteRequest(e2, s2);
          case "wc_sessionRequest":
            return this.onSessionRequest(e2, s2);
          case "wc_sessionEvent":
            return this.onSessionEventRequest(e2, s2);
          case "wc_sessionAuthenticate":
            return this.onSessionAuthenticateRequest(e2, s2);
          default:
            return this.client.logger.info(`Unsupported request method ${i3}`);
        }
    }, this.onRelayEventResponse = async (t) => {
      const { topic: e2, payload: s2 } = t, i3 = (await this.client.core.history.get(e2, s2.id)).request.method;
      switch (i3) {
        case "wc_sessionPropose":
          return this.onSessionProposeResponse(e2, s2);
        case "wc_sessionSettle":
          return this.onSessionSettleResponse(e2, s2);
        case "wc_sessionUpdate":
          return this.onSessionUpdateResponse(e2, s2);
        case "wc_sessionExtend":
          return this.onSessionExtendResponse(e2, s2);
        case "wc_sessionPing":
          return this.onSessionPingResponse(e2, s2);
        case "wc_sessionRequest":
          return this.onSessionRequestResponse(e2, s2);
        case "wc_sessionAuthenticate":
          return this.onSessionAuthenticateResponse(e2, s2);
        default:
          return this.client.logger.info(`Unsupported response method ${i3}`);
      }
    }, this.onRelayEventUnknownPayload = (t) => {
      const { topic: e2 } = t, { message: s2 } = xe("MISSING_OR_INVALID", `Decoded payload on topic ${e2} is not identifiable as a JSON-RPC request or a response.`);
      throw new Error(s2);
    }, this.shouldIgnorePairingRequest = (t) => {
      const { topic: e2, requestMethod: s2 } = t, i3 = this.expectedPairingMethodMap.get(e2);
      return !i3 || i3.includes(s2) ? false : !!(i3.includes("wc_sessionAuthenticate") && this.client.events.listenerCount("session_authenticate") > 0);
    }, this.onSessionProposeRequest = async (t, e2) => {
      const { params: s2, id: i3 } = e2;
      try {
        this.isValidConnect(y$1({}, e2.params));
        const r2 = s2.expiryTimestamp || d0(f$1.wc_sessionPropose.req.ttl), o3 = y$1({ id: i3, pairingTopic: t, expiryTimestamp: r2 }, s2);
        await this.setProposal(i3, o3);
        const a3 = yu(JSON.stringify(e2)), c2 = await this.getVerifyContext(a3, o3.proposer.metadata);
        this.client.events.emit("session_proposal", { id: i3, params: o3, verifyContext: c2 });
      } catch (r2) {
        await this.sendError({ id: i3, topic: t, error: r2 }), this.client.logger.error(r2);
      }
    }, this.onSessionProposeResponse = async (t, e2) => {
      const { id: s2 } = e2;
      if (isJsonRpcResult(e2)) {
        const { result: i3 } = e2;
        this.client.logger.trace({ type: "method", method: "onSessionProposeResponse", result: i3 });
        const r2 = this.client.proposal.get(s2);
        this.client.logger.trace({ type: "method", method: "onSessionProposeResponse", proposal: r2 });
        const o3 = r2.proposer.publicKey;
        this.client.logger.trace({ type: "method", method: "onSessionProposeResponse", selfPublicKey: o3 });
        const a3 = i3.responderPublicKey;
        this.client.logger.trace({ type: "method", method: "onSessionProposeResponse", peerPublicKey: a3 });
        const c2 = await this.client.core.crypto.generateSharedKey(o3, a3);
        this.client.logger.trace({ type: "method", method: "onSessionProposeResponse", sessionTopic: c2 });
        const h4 = await this.client.core.relayer.subscribe(c2);
        this.client.logger.trace({ type: "method", method: "onSessionProposeResponse", subscriptionId: h4 }), await this.client.core.pairing.activate({ topic: t });
      } else if (isJsonRpcError(e2)) {
        await this.client.proposal.delete(s2, tr$1("USER_DISCONNECTED"));
        const i3 = v0("session_connect");
        if (this.events.listenerCount(i3) === 0)
          throw new Error(`emitting ${i3} without any listeners, 954`);
        this.events.emit(v0("session_connect"), { error: e2.error });
      }
    }, this.onSessionSettleRequest = async (t, e2) => {
      const { id: s2, params: i3 } = e2;
      try {
        this.isValidSessionSettleRequest(i3);
        const { relay: r2, controller: o3, expiry: a3, namespaces: c2, sessionProperties: h4, pairingTopic: p3, sessionConfig: g3 } = e2.params, d4 = y$1(y$1({ topic: t, relay: r2, expiry: a3, namespaces: c2, acknowledged: true, pairingTopic: p3, requiredNamespaces: {}, optionalNamespaces: {}, controller: o3.publicKey, self: { publicKey: "", metadata: this.client.metadata }, peer: { publicKey: o3.publicKey, metadata: o3.metadata } }, h4 && { sessionProperties: h4 }), g3 && { sessionConfig: g3 });
        await this.sendResult({ id: e2.id, topic: t, result: true, throwOnFailedPublish: true });
        const w3 = v0("session_connect");
        if (this.events.listenerCount(w3) === 0)
          throw new Error(`emitting ${w3} without any listeners 997`);
        this.events.emit(v0("session_connect"), { session: d4 }), this.cleanupDuplicatePairings(d4);
      } catch (r2) {
        await this.sendError({ id: s2, topic: t, error: r2 }), this.client.logger.error(r2);
      }
    }, this.onSessionSettleResponse = async (t, e2) => {
      const { id: s2 } = e2;
      isJsonRpcResult(e2) ? (await this.client.session.update(t, { acknowledged: true }), this.events.emit(v0("session_approve", s2), {})) : isJsonRpcError(e2) && (await this.client.session.delete(t, tr$1("USER_DISCONNECTED")), this.events.emit(v0("session_approve", s2), { error: e2.error }));
    }, this.onSessionUpdateRequest = async (t, e2) => {
      const { params: s2, id: i3 } = e2;
      try {
        const r2 = `${t}_session_update`, o3 = lh.get(r2);
        if (o3 && this.isRequestOutOfSync(o3, i3)) {
          this.client.logger.info(`Discarding out of sync request - ${i3}`), this.sendError({ id: i3, topic: t, error: tr$1("INVALID_UPDATE_REQUEST") });
          return;
        }
        this.isValidUpdate(y$1({ topic: t }, s2));
        try {
          lh.set(r2, i3), await this.client.session.update(t, { namespaces: s2.namespaces }), await this.sendResult({ id: i3, topic: t, result: true, throwOnFailedPublish: true });
        } catch (a3) {
          throw lh.delete(r2), a3;
        }
        this.client.events.emit("session_update", { id: i3, topic: t, params: s2 });
      } catch (r2) {
        await this.sendError({ id: i3, topic: t, error: r2 }), this.client.logger.error(r2);
      }
    }, this.isRequestOutOfSync = (t, e2) => parseInt(e2.toString().slice(0, -3)) <= parseInt(t.toString().slice(0, -3)), this.onSessionUpdateResponse = (t, e2) => {
      const { id: s2 } = e2, i3 = v0("session_update", s2);
      if (this.events.listenerCount(i3) === 0)
        throw new Error(`emitting ${i3} without any listeners`);
      isJsonRpcResult(e2) ? this.events.emit(v0("session_update", s2), {}) : isJsonRpcError(e2) && this.events.emit(v0("session_update", s2), { error: e2.error });
    }, this.onSessionExtendRequest = async (t, e2) => {
      const { id: s2 } = e2;
      try {
        this.isValidExtend({ topic: t }), await this.setExpiry(t, d0(L$2)), await this.sendResult({ id: s2, topic: t, result: true, throwOnFailedPublish: true }), this.client.events.emit("session_extend", { id: s2, topic: t });
      } catch (i3) {
        await this.sendError({ id: s2, topic: t, error: i3 }), this.client.logger.error(i3);
      }
    }, this.onSessionExtendResponse = (t, e2) => {
      const { id: s2 } = e2, i3 = v0("session_extend", s2);
      if (this.events.listenerCount(i3) === 0)
        throw new Error(`emitting ${i3} without any listeners`);
      isJsonRpcResult(e2) ? this.events.emit(v0("session_extend", s2), {}) : isJsonRpcError(e2) && this.events.emit(v0("session_extend", s2), { error: e2.error });
    }, this.onSessionPingRequest = async (t, e2) => {
      const { id: s2 } = e2;
      try {
        this.isValidPing({ topic: t }), await this.sendResult({ id: s2, topic: t, result: true, throwOnFailedPublish: true }), this.client.events.emit("session_ping", { id: s2, topic: t });
      } catch (i3) {
        await this.sendError({ id: s2, topic: t, error: i3 }), this.client.logger.error(i3);
      }
    }, this.onSessionPingResponse = (t, e2) => {
      const { id: s2 } = e2, i3 = v0("session_ping", s2);
      if (this.events.listenerCount(i3) === 0)
        throw new Error(`emitting ${i3} without any listeners`);
      setTimeout(() => {
        isJsonRpcResult(e2) ? this.events.emit(v0("session_ping", s2), {}) : isJsonRpcError(e2) && this.events.emit(v0("session_ping", s2), { error: e2.error });
      }, 500);
    }, this.onSessionDeleteRequest = async (t, e2) => {
      const { id: s2 } = e2;
      try {
        this.isValidDisconnect({ topic: t, reason: e2.params }), await Promise.all([new Promise((i3) => {
          this.client.core.relayer.once(f$2.publish, async () => {
            i3(await this.deleteSession({ topic: t, id: s2 }));
          });
        }), this.sendResult({ id: s2, topic: t, result: true, throwOnFailedPublish: true }), this.cleanupPendingSentRequestsForTopic({ topic: t, error: tr$1("USER_DISCONNECTED") })]);
      } catch (i3) {
        this.client.logger.error(i3);
      }
    }, this.onSessionRequest = async (t, e2) => {
      var s2;
      const { id: i3, params: r2 } = e2;
      try {
        await this.isValidRequest(y$1({ topic: t }, r2));
        const o3 = yu(JSON.stringify(formatJsonRpcRequest("wc_sessionRequest", r2, i3))), a3 = this.client.session.get(t), c2 = await this.getVerifyContext(o3, a3.peer.metadata), h4 = { id: i3, topic: t, params: r2, verifyContext: c2 };
        await this.setPendingSessionRequest(h4), (s2 = this.client.signConfig) != null && s2.disableRequestQueue ? this.emitSessionRequest(h4) : (this.addSessionRequestToSessionRequestQueue(h4), this.processSessionRequestQueue());
      } catch (o3) {
        await this.sendError({ id: i3, topic: t, error: o3 }), this.client.logger.error(o3);
      }
    }, this.onSessionRequestResponse = (t, e2) => {
      const { id: s2 } = e2, i3 = v0("session_request", s2);
      if (this.events.listenerCount(i3) === 0)
        throw new Error(`emitting ${i3} without any listeners`);
      isJsonRpcResult(e2) ? this.events.emit(v0("session_request", s2), { result: e2.result }) : isJsonRpcError(e2) && this.events.emit(v0("session_request", s2), { error: e2.error });
    }, this.onSessionEventRequest = async (t, e2) => {
      const { id: s2, params: i3 } = e2;
      try {
        const r2 = `${t}_session_event_${i3.event.name}`, o3 = lh.get(r2);
        if (o3 && this.isRequestOutOfSync(o3, s2)) {
          this.client.logger.info(`Discarding out of sync request - ${s2}`);
          return;
        }
        this.isValidEmit(y$1({ topic: t }, i3)), this.client.events.emit("session_event", { id: s2, topic: t, params: i3 }), lh.set(r2, s2);
      } catch (r2) {
        await this.sendError({ id: s2, topic: t, error: r2 }), this.client.logger.error(r2);
      }
    }, this.onSessionAuthenticateResponse = (t, e2) => {
      const { id: s2 } = e2;
      this.client.logger.trace({ type: "method", method: "onSessionAuthenticateResponse", topic: t, payload: e2 }), isJsonRpcResult(e2) ? this.events.emit(v0("session_request", s2), { result: e2.result }) : isJsonRpcError(e2) && this.events.emit(v0("session_request", s2), { error: e2.error });
    }, this.onSessionAuthenticateRequest = async (t, e2) => {
      const { requester: s2, authPayload: i3, expiryTimestamp: r2 } = e2.params, o3 = yu(JSON.stringify(e2)), a3 = await this.getVerifyContext(o3, this.client.metadata), c2 = { requester: s2, pairingTopic: t, id: e2.id, authPayload: i3, verifyContext: a3, expiryTimestamp: r2 };
      await this.setAuthRequest(e2.id, { request: c2, pairingTopic: t }), this.client.events.emit("session_authenticate", { topic: t, params: e2.params, id: e2.id });
    }, this.addSessionRequestToSessionRequestQueue = (t) => {
      this.sessionRequestQueue.queue.push(t);
    }, this.cleanupAfterResponse = (t) => {
      this.deletePendingSessionRequest(t.response.id, { message: "fulfilled", code: 0 }), setTimeout(() => {
        this.sessionRequestQueue.state = D$1.idle, this.processSessionRequestQueue();
      }, cjs$3.toMiliseconds(this.requestQueueDelay));
    }, this.cleanupPendingSentRequestsForTopic = ({ topic: t, error: e2 }) => {
      const s2 = this.client.core.history.pending;
      s2.length > 0 && s2.filter((i3) => i3.topic === t && i3.request.method === "wc_sessionRequest").forEach((i3) => {
        const r2 = i3.request.id, o3 = v0("session_request", r2);
        if (this.events.listenerCount(o3) === 0)
          throw new Error(`emitting ${o3} without any listeners`);
        this.events.emit(v0("session_request", i3.request.id), { error: e2 });
      });
    }, this.processSessionRequestQueue = () => {
      if (this.sessionRequestQueue.state === D$1.active) {
        this.client.logger.info("session request queue is already active.");
        return;
      }
      const t = this.sessionRequestQueue.queue[0];
      if (!t) {
        this.client.logger.info("session request queue is empty.");
        return;
      }
      try {
        this.sessionRequestQueue.state = D$1.active, this.emitSessionRequest(t);
      } catch (e2) {
        this.client.logger.error(e2);
      }
    }, this.emitSessionRequest = (t) => {
      this.client.events.emit("session_request", t);
    }, this.onPairingCreated = (t) => {
      if (t.methods && this.expectedPairingMethodMap.set(t.topic, t.methods), t.active)
        return;
      const e2 = this.client.proposal.getAll().find((s2) => s2.pairingTopic === t.topic);
      e2 && this.onSessionProposeRequest(t.topic, formatJsonRpcRequest("wc_sessionPropose", { requiredNamespaces: e2.requiredNamespaces, optionalNamespaces: e2.optionalNamespaces, relays: e2.relays, proposer: e2.proposer, sessionProperties: e2.sessionProperties }, e2.id));
    }, this.isValidConnect = async (t) => {
      if (!$u(t)) {
        const { message: a3 } = xe("MISSING_OR_INVALID", `connect() params: ${JSON.stringify(t)}`);
        throw new Error(a3);
      }
      const { pairingTopic: e2, requiredNamespaces: s2, optionalNamespaces: i3, sessionProperties: r2, relays: o3 } = t;
      if (Pe(e2) || await this.isValidPairingTopic(e2), !Xu(o3)) {
        const { message: a3 } = xe("MISSING_OR_INVALID", `connect() relays: ${o3}`);
        throw new Error(a3);
      }
      !Pe(s2) && Yr(s2) !== 0 && this.validateNamespaces(s2, "requiredNamespaces"), !Pe(i3) && Yr(i3) !== 0 && this.validateNamespaces(i3, "optionalNamespaces"), Pe(r2) || this.validateSessionProps(r2, "sessionProperties");
    }, this.validateNamespaces = (t, e2) => {
      const s2 = Wu(t, "connect()", e2);
      if (s2)
        throw new Error(s2.message);
    }, this.isValidApprove = async (t) => {
      if (!$u(t))
        throw new Error(xe("MISSING_OR_INVALID", `approve() params: ${t}`).message);
      const { id: e2, namespaces: s2, relayProtocol: i3, sessionProperties: r2 } = t;
      this.checkRecentlyDeleted(e2), await this.isValidProposalId(e2);
      const o3 = this.client.proposal.get(e2), a3 = So(s2, "approve()");
      if (a3)
        throw new Error(a3.message);
      const c2 = Io(o3.requiredNamespaces, s2, "approve()");
      if (c2)
        throw new Error(c2.message);
      if (!Gt$1(i3, true)) {
        const { message: h4 } = xe("MISSING_OR_INVALID", `approve() relayProtocol: ${i3}`);
        throw new Error(h4);
      }
      Pe(r2) || this.validateSessionProps(r2, "sessionProperties");
    }, this.isValidReject = async (t) => {
      if (!$u(t)) {
        const { message: i3 } = xe("MISSING_OR_INVALID", `reject() params: ${t}`);
        throw new Error(i3);
      }
      const { id: e2, reason: s2 } = t;
      if (this.checkRecentlyDeleted(e2), await this.isValidProposalId(e2), !th(s2)) {
        const { message: i3 } = xe("MISSING_OR_INVALID", `reject() reason: ${JSON.stringify(s2)}`);
        throw new Error(i3);
      }
    }, this.isValidSessionSettleRequest = (t) => {
      if (!$u(t)) {
        const { message: c2 } = xe("MISSING_OR_INVALID", `onSessionSettleRequest() params: ${t}`);
        throw new Error(c2);
      }
      const { relay: e2, controller: s2, namespaces: i3, expiry: r2 } = t;
      if (!No(e2)) {
        const { message: c2 } = xe("MISSING_OR_INVALID", "onSessionSettleRequest() relay protocol should be a string");
        throw new Error(c2);
      }
      const o3 = Vu(s2, "onSessionSettleRequest()");
      if (o3)
        throw new Error(o3.message);
      const a3 = So(i3, "onSessionSettleRequest()");
      if (a3)
        throw new Error(a3.message);
      if (p0(r2)) {
        const { message: c2 } = xe("EXPIRED", "onSessionSettleRequest()");
        throw new Error(c2);
      }
    }, this.isValidUpdate = async (t) => {
      if (!$u(t)) {
        const { message: a3 } = xe("MISSING_OR_INVALID", `update() params: ${t}`);
        throw new Error(a3);
      }
      const { topic: e2, namespaces: s2 } = t;
      this.checkRecentlyDeleted(e2), await this.isValidSessionTopic(e2);
      const i3 = this.client.session.get(e2), r2 = So(s2, "update()");
      if (r2)
        throw new Error(r2.message);
      const o3 = Io(i3.requiredNamespaces, s2, "update()");
      if (o3)
        throw new Error(o3.message);
    }, this.isValidExtend = async (t) => {
      if (!$u(t)) {
        const { message: s2 } = xe("MISSING_OR_INVALID", `extend() params: ${t}`);
        throw new Error(s2);
      }
      const { topic: e2 } = t;
      this.checkRecentlyDeleted(e2), await this.isValidSessionTopic(e2);
    }, this.isValidRequest = async (t) => {
      if (!$u(t)) {
        const { message: a3 } = xe("MISSING_OR_INVALID", `request() params: ${t}`);
        throw new Error(a3);
      }
      const { topic: e2, request: s2, chainId: i3, expiry: r2 } = t;
      this.checkRecentlyDeleted(e2), await this.isValidSessionTopic(e2);
      const { namespaces: o3 } = this.client.session.get(e2);
      if (!nh(o3, i3)) {
        const { message: a3 } = xe("MISSING_OR_INVALID", `request() chainId: ${i3}`);
        throw new Error(a3);
      }
      if (!eh(s2)) {
        const { message: a3 } = xe("MISSING_OR_INVALID", `request() ${JSON.stringify(s2)}`);
        throw new Error(a3);
      }
      if (!fh(o3, i3, s2.method)) {
        const { message: a3 } = xe("MISSING_OR_INVALID", `request() method: ${s2.method}`);
        throw new Error(a3);
      }
      if (r2 && !uh(r2, ne)) {
        const { message: a3 } = xe("MISSING_OR_INVALID", `request() expiry: ${r2}. Expiry must be a number (in seconds) between ${ne.min} and ${ne.max}`);
        throw new Error(a3);
      }
    }, this.isValidRespond = async (t) => {
      var e2;
      if (!$u(t)) {
        const { message: r2 } = xe("MISSING_OR_INVALID", `respond() params: ${t}`);
        throw new Error(r2);
      }
      const { topic: s2, response: i3 } = t;
      try {
        await this.isValidSessionTopic(s2);
      } catch (r2) {
        throw (e2 = t == null ? void 0 : t.response) != null && e2.id && this.cleanupAfterResponse(t), r2;
      }
      if (!rh(i3)) {
        const { message: r2 } = xe("MISSING_OR_INVALID", `respond() response: ${JSON.stringify(i3)}`);
        throw new Error(r2);
      }
    }, this.isValidPing = async (t) => {
      if (!$u(t)) {
        const { message: s2 } = xe("MISSING_OR_INVALID", `ping() params: ${t}`);
        throw new Error(s2);
      }
      const { topic: e2 } = t;
      await this.isValidSessionOrPairingTopic(e2);
    }, this.isValidEmit = async (t) => {
      if (!$u(t)) {
        const { message: o3 } = xe("MISSING_OR_INVALID", `emit() params: ${t}`);
        throw new Error(o3);
      }
      const { topic: e2, event: s2, chainId: i3 } = t;
      await this.isValidSessionTopic(e2);
      const { namespaces: r2 } = this.client.session.get(e2);
      if (!nh(r2, i3)) {
        const { message: o3 } = xe("MISSING_OR_INVALID", `emit() chainId: ${i3}`);
        throw new Error(o3);
      }
      if (!ih(s2)) {
        const { message: o3 } = xe("MISSING_OR_INVALID", `emit() event: ${JSON.stringify(s2)}`);
        throw new Error(o3);
      }
      if (!oh(r2, i3, s2.name)) {
        const { message: o3 } = xe("MISSING_OR_INVALID", `emit() event: ${JSON.stringify(s2)}`);
        throw new Error(o3);
      }
    }, this.isValidDisconnect = async (t) => {
      if (!$u(t)) {
        const { message: s2 } = xe("MISSING_OR_INVALID", `disconnect() params: ${t}`);
        throw new Error(s2);
      }
      const { topic: e2 } = t;
      await this.isValidSessionOrPairingTopic(e2);
    }, this.isValidAuthenticate = (t) => {
      const { chains: e2, uri: s2, domain: i3, nonce: r2 } = t;
      if (!Array.isArray(e2) || e2.length === 0)
        throw new Error("chains is required and must be a non-empty array");
      if (!Gt$1(s2, false))
        throw new Error("uri is required parameter");
      if (!Gt$1(i3, false))
        throw new Error("domain is required parameter");
      if (!Gt$1(r2, false))
        throw new Error("nonce is required parameter");
      if ([...new Set(e2.map((a3) => dn(a3).namespace))].length > 1)
        throw new Error("Multi-namespace requests are not supported. Please request single namespace only.");
      const { namespace: o3 } = dn(e2[0]);
      if (o3 !== "eip155")
        throw new Error("Only eip155 namespace is supported for authenticated sessions. Please use .connect() for non-eip155 chains.");
    }, this.getVerifyContext = async (t, e2) => {
      const s2 = { verified: { verifyUrl: e2.verifyUrl || M$2, validation: "UNKNOWN", origin: e2.url || "" } };
      try {
        const i3 = await this.client.core.verify.resolve({ attestationId: t, verifyUrl: e2.verifyUrl });
        i3 && (s2.verified.origin = i3.origin, s2.verified.isScam = i3.isScam, s2.verified.validation = i3.origin === new URL(e2.url).origin ? "VALID" : "INVALID");
      } catch (i3) {
        this.client.logger.info(i3);
      }
      return this.client.logger.info(`Verify context: ${JSON.stringify(s2)}`), s2;
    }, this.validateSessionProps = (t, e2) => {
      Object.values(t).forEach((s2) => {
        if (!Gt$1(s2, false)) {
          const { message: i3 } = xe("MISSING_OR_INVALID", `${e2} must be in Record<string, string> format. Received: ${JSON.stringify(s2)}`);
          throw new Error(i3);
        }
      });
    }, this.getPendingAuthRequest = (t) => {
      const e2 = this.client.auth.requests.get(t);
      return typeof e2 == "object" ? e2 : void 0;
    }, this.addToRecentlyDeleted = (t, e2) => {
      if (this.recentlyDeletedMap.set(t, e2), this.recentlyDeletedMap.size >= this.recentlyDeletedLimit) {
        let s2 = 0;
        const i3 = this.recentlyDeletedLimit / 2;
        for (const r2 of this.recentlyDeletedMap.keys()) {
          if (s2++ >= i3)
            break;
          this.recentlyDeletedMap.delete(r2);
        }
      }
    }, this.checkRecentlyDeleted = (t) => {
      const e2 = this.recentlyDeletedMap.get(t);
      if (e2) {
        const { message: s2 } = xe("MISSING_OR_INVALID", `Record was recently deleted - ${e2}: ${t}`);
        throw new Error(s2);
      }
    };
  }
  async isInitialized() {
    if (!this.initialized) {
      const { message: n4 } = xe("NOT_INITIALIZED", this.name);
      throw new Error(n4);
    }
    await this.client.core.relayer.confirmOnlineStateOrThrow();
  }
  registerRelayerEvents() {
    this.client.core.relayer.on(f$2.message, async (n4) => {
      const { topic: t, message: e2 } = n4, { publicKey: s2 } = this.client.auth.authKeys.keys.includes(J) ? this.client.auth.authKeys.get(J) : { responseTopic: void 0, publicKey: void 0 }, i3 = await this.client.core.crypto.decode(t, e2, { receiverPublicKey: s2 });
      try {
        isJsonRpcRequest(i3) ? (this.client.core.history.set(t, i3), this.onRelayEventRequest({ topic: t, payload: i3 })) : isJsonRpcResponse(i3) ? (await this.client.core.history.resolve(i3), await this.onRelayEventResponse({ topic: t, payload: i3 }), this.client.core.history.delete(t, i3.id)) : this.onRelayEventUnknownPayload({ topic: t, payload: i3 });
      } catch (r2) {
        this.client.logger.error(r2);
      }
    });
  }
  registerExpirerEvents() {
    this.client.core.expirer.on(C$1.expired, async (n4) => {
      const { topic: t, id: e2 } = l0(n4.target);
      if (e2 && this.client.pendingRequest.keys.includes(e2))
        return await this.deletePendingSessionRequest(e2, xe("EXPIRED"), true);
      if (e2 && this.client.auth.requests.keys.includes(e2))
        return await this.deletePendingAuthRequest(e2, xe("EXPIRED"), true);
      t ? this.client.session.keys.includes(t) && (await this.deleteSession({ topic: t, expirerHasDeleted: true }), this.client.events.emit("session_expire", { topic: t })) : e2 && (await this.deleteProposal(e2, true), this.client.events.emit("proposal_expire", { id: e2 }));
    });
  }
  registerPairingEvents() {
    this.client.core.pairing.events.on(q$1.create, (n4) => this.onPairingCreated(n4)), this.client.core.pairing.events.on(q$1.delete, (n4) => {
      this.addToRecentlyDeleted(n4.topic, "pairing");
    });
  }
  isValidPairingTopic(n4) {
    if (!Gt$1(n4, false)) {
      const { message: t } = xe("MISSING_OR_INVALID", `pairing topic should be a string: ${n4}`);
      throw new Error(t);
    }
    if (!this.client.core.pairing.pairings.keys.includes(n4)) {
      const { message: t } = xe("NO_MATCHING_KEY", `pairing topic doesn't exist: ${n4}`);
      throw new Error(t);
    }
    if (p0(this.client.core.pairing.pairings.get(n4).expiry)) {
      const { message: t } = xe("EXPIRED", `pairing topic: ${n4}`);
      throw new Error(t);
    }
  }
  async isValidSessionTopic(n4) {
    if (!Gt$1(n4, false)) {
      const { message: t } = xe("MISSING_OR_INVALID", `session topic should be a string: ${n4}`);
      throw new Error(t);
    }
    if (this.checkRecentlyDeleted(n4), !this.client.session.keys.includes(n4)) {
      const { message: t } = xe("NO_MATCHING_KEY", `session topic doesn't exist: ${n4}`);
      throw new Error(t);
    }
    if (p0(this.client.session.get(n4).expiry)) {
      await this.deleteSession({ topic: n4 });
      const { message: t } = xe("EXPIRED", `session topic: ${n4}`);
      throw new Error(t);
    }
    if (!this.client.core.crypto.keychain.has(n4)) {
      const { message: t } = xe("MISSING_OR_INVALID", `session topic does not exist in keychain: ${n4}`);
      throw await this.deleteSession({ topic: n4 }), new Error(t);
    }
  }
  async isValidSessionOrPairingTopic(n4) {
    if (this.checkRecentlyDeleted(n4), this.client.session.keys.includes(n4))
      await this.isValidSessionTopic(n4);
    else if (this.client.core.pairing.pairings.keys.includes(n4))
      this.isValidPairingTopic(n4);
    else if (Gt$1(n4, false)) {
      const { message: t } = xe("NO_MATCHING_KEY", `session or pairing topic doesn't exist: ${n4}`);
      throw new Error(t);
    } else {
      const { message: t } = xe("MISSING_OR_INVALID", `session or pairing topic should be a string: ${n4}`);
      throw new Error(t);
    }
  }
  async isValidProposalId(n4) {
    if (!Zu(n4)) {
      const { message: t } = xe("MISSING_OR_INVALID", `proposal id should be a number: ${n4}`);
      throw new Error(t);
    }
    if (!this.client.proposal.keys.includes(n4)) {
      const { message: t } = xe("NO_MATCHING_KEY", `proposal id doesn't exist: ${n4}`);
      throw new Error(t);
    }
    if (p0(this.client.proposal.get(n4).expiryTimestamp)) {
      await this.deleteProposal(n4);
      const { message: t } = xe("EXPIRED", `proposal id: ${n4}`);
      throw new Error(t);
    }
  }
}
class es2 extends Kt {
  constructor(n4, t) {
    super(n4, t, Ue, ie2), this.core = n4, this.logger = t;
  }
}
class Ze extends Kt {
  constructor(n4, t) {
    super(n4, t, ke, ie2), this.core = n4, this.logger = t;
  }
}
class ts2 extends Kt {
  constructor(n4, t) {
    super(n4, t, Qe, ie2, (e2) => e2.id), this.core = n4, this.logger = t;
  }
}
class ss extends Kt {
  constructor(n4, t) {
    super(n4, t, Ye, X, () => J), this.core = n4, this.logger = t;
  }
}
class is2 extends Kt {
  constructor(n4, t) {
    super(n4, t, Xe, X), this.core = n4, this.logger = t;
  }
}
class rs extends Kt {
  constructor(n4, t) {
    super(n4, t, Je, X, (e2) => e2.id), this.core = n4, this.logger = t;
  }
}
class ns {
  constructor(n4, t) {
    this.core = n4, this.logger = t, this.authKeys = new ss(this.core, this.logger), this.pairingTopics = new is2(this.core, this.logger), this.requests = new rs(this.core, this.logger);
  }
  async init() {
    await this.authKeys.init(), await this.pairingTopics.init(), await this.requests.init();
  }
}
class oe extends b$2 {
  constructor(n4) {
    super(n4), this.protocol = Re, this.version = Ee, this.name = re.name, this.events = new eventsExports.EventEmitter(), this.on = (e2, s2) => this.events.on(e2, s2), this.once = (e2, s2) => this.events.once(e2, s2), this.off = (e2, s2) => this.events.off(e2, s2), this.removeListener = (e2, s2) => this.events.removeListener(e2, s2), this.removeAllListeners = (e2) => this.events.removeAllListeners(e2), this.connect = async (e2) => {
      try {
        return await this.engine.connect(e2);
      } catch (s2) {
        throw this.logger.error(s2.message), s2;
      }
    }, this.pair = async (e2) => {
      try {
        return await this.engine.pair(e2);
      } catch (s2) {
        throw this.logger.error(s2.message), s2;
      }
    }, this.approve = async (e2) => {
      try {
        return await this.engine.approve(e2);
      } catch (s2) {
        throw this.logger.error(s2.message), s2;
      }
    }, this.reject = async (e2) => {
      try {
        return await this.engine.reject(e2);
      } catch (s2) {
        throw this.logger.error(s2.message), s2;
      }
    }, this.update = async (e2) => {
      try {
        return await this.engine.update(e2);
      } catch (s2) {
        throw this.logger.error(s2.message), s2;
      }
    }, this.extend = async (e2) => {
      try {
        return await this.engine.extend(e2);
      } catch (s2) {
        throw this.logger.error(s2.message), s2;
      }
    }, this.request = async (e2) => {
      try {
        return await this.engine.request(e2);
      } catch (s2) {
        throw this.logger.error(s2.message), s2;
      }
    }, this.respond = async (e2) => {
      try {
        return await this.engine.respond(e2);
      } catch (s2) {
        throw this.logger.error(s2.message), s2;
      }
    }, this.ping = async (e2) => {
      try {
        return await this.engine.ping(e2);
      } catch (s2) {
        throw this.logger.error(s2.message), s2;
      }
    }, this.emit = async (e2) => {
      try {
        return await this.engine.emit(e2);
      } catch (s2) {
        throw this.logger.error(s2.message), s2;
      }
    }, this.disconnect = async (e2) => {
      try {
        return await this.engine.disconnect(e2);
      } catch (s2) {
        throw this.logger.error(s2.message), s2;
      }
    }, this.find = (e2) => {
      try {
        return this.engine.find(e2);
      } catch (s2) {
        throw this.logger.error(s2.message), s2;
      }
    }, this.getPendingSessionRequests = () => {
      try {
        return this.engine.getPendingSessionRequests();
      } catch (e2) {
        throw this.logger.error(e2.message), e2;
      }
    }, this.authenticate = async (e2) => {
      try {
        return await this.engine.authenticate(e2);
      } catch (s2) {
        throw this.logger.error(s2.message), s2;
      }
    }, this.formatAuthMessage = (e2) => {
      try {
        return this.engine.formatAuthMessage(e2);
      } catch (s2) {
        throw this.logger.error(s2.message), s2;
      }
    }, this.approveSessionAuthenticate = async (e2) => {
      try {
        return await this.engine.approveSessionAuthenticate(e2);
      } catch (s2) {
        throw this.logger.error(s2.message), s2;
      }
    }, this.rejectSessionAuthenticate = async (e2) => {
      try {
        return await this.engine.rejectSessionAuthenticate(e2);
      } catch (s2) {
        throw this.logger.error(s2.message), s2;
      }
    }, this.name = (n4 == null ? void 0 : n4.name) || re.name, this.metadata = (n4 == null ? void 0 : n4.metadata) || Xo(), this.signConfig = n4 == null ? void 0 : n4.signConfig;
    const t = typeof (n4 == null ? void 0 : n4.logger) < "u" && typeof (n4 == null ? void 0 : n4.logger) != "string" ? n4.logger : Hg(k({ level: (n4 == null ? void 0 : n4.logger) || re.logger }));
    this.core = (n4 == null ? void 0 : n4.core) || new Br(n4), this.logger = E$4(t, this.name), this.session = new Ze(this.core, this.logger), this.proposal = new es2(this.core, this.logger), this.pendingRequest = new ts2(this.core, this.logger), this.engine = new Zt(this), this.auth = new ns(this.core, this.logger);
  }
  static async init(n4) {
    const t = new oe(n4);
    return await t.initialize(), t;
  }
  get context() {
    return y$4(this.logger);
  }
  get pairing() {
    return this.core.pairing.pairings;
  }
  async initialize() {
    this.logger.trace("Initialized");
    try {
      await this.core.start(), await this.session.init(), await this.proposal.init(), await this.pendingRequest.init(), await this.engine.init(), await this.auth.init(), this.core.verify.init({ verifyUrl: this.metadata.verifyUrl }), this.logger.info("SignClient Initialization Success");
    } catch (n4) {
      throw this.logger.info("SignClient Initialization Failure"), this.logger.error(n4.message), n4;
    }
  }
}
var browserPonyfill = { exports: {} };
(function(module, exports) {
  var global2 = typeof self !== "undefined" ? self : commonjsGlobal;
  var __self__ = function() {
    function F() {
      this.fetch = false;
      this.DOMException = global2.DOMException;
    }
    F.prototype = global2;
    return new F();
  }();
  (function(self2) {
    (function(exports2) {
      var support = {
        searchParams: "URLSearchParams" in self2,
        iterable: "Symbol" in self2 && "iterator" in Symbol,
        blob: "FileReader" in self2 && "Blob" in self2 && function() {
          try {
            new Blob();
            return true;
          } catch (e2) {
            return false;
          }
        }(),
        formData: "FormData" in self2,
        arrayBuffer: "ArrayBuffer" in self2
      };
      function isDataView(obj) {
        return obj && DataView.prototype.isPrototypeOf(obj);
      }
      if (support.arrayBuffer) {
        var viewClasses = [
          "[object Int8Array]",
          "[object Uint8Array]",
          "[object Uint8ClampedArray]",
          "[object Int16Array]",
          "[object Uint16Array]",
          "[object Int32Array]",
          "[object Uint32Array]",
          "[object Float32Array]",
          "[object Float64Array]"
        ];
        var isArrayBufferView = ArrayBuffer.isView || function(obj) {
          return obj && viewClasses.indexOf(Object.prototype.toString.call(obj)) > -1;
        };
      }
      function normalizeName(name) {
        if (typeof name !== "string") {
          name = String(name);
        }
        if (/[^a-z0-9\-#$%&'*+.^_`|~]/i.test(name)) {
          throw new TypeError("Invalid character in header field name");
        }
        return name.toLowerCase();
      }
      function normalizeValue(value) {
        if (typeof value !== "string") {
          value = String(value);
        }
        return value;
      }
      function iteratorFor(items) {
        var iterator = {
          next: function() {
            var value = items.shift();
            return { done: value === void 0, value };
          }
        };
        if (support.iterable) {
          iterator[Symbol.iterator] = function() {
            return iterator;
          };
        }
        return iterator;
      }
      function Headers(headers) {
        this.map = {};
        if (headers instanceof Headers) {
          headers.forEach(function(value, name) {
            this.append(name, value);
          }, this);
        } else if (Array.isArray(headers)) {
          headers.forEach(function(header) {
            this.append(header[0], header[1]);
          }, this);
        } else if (headers) {
          Object.getOwnPropertyNames(headers).forEach(function(name) {
            this.append(name, headers[name]);
          }, this);
        }
      }
      Headers.prototype.append = function(name, value) {
        name = normalizeName(name);
        value = normalizeValue(value);
        var oldValue = this.map[name];
        this.map[name] = oldValue ? oldValue + ", " + value : value;
      };
      Headers.prototype["delete"] = function(name) {
        delete this.map[normalizeName(name)];
      };
      Headers.prototype.get = function(name) {
        name = normalizeName(name);
        return this.has(name) ? this.map[name] : null;
      };
      Headers.prototype.has = function(name) {
        return this.map.hasOwnProperty(normalizeName(name));
      };
      Headers.prototype.set = function(name, value) {
        this.map[normalizeName(name)] = normalizeValue(value);
      };
      Headers.prototype.forEach = function(callback, thisArg) {
        for (var name in this.map) {
          if (this.map.hasOwnProperty(name)) {
            callback.call(thisArg, this.map[name], name, this);
          }
        }
      };
      Headers.prototype.keys = function() {
        var items = [];
        this.forEach(function(value, name) {
          items.push(name);
        });
        return iteratorFor(items);
      };
      Headers.prototype.values = function() {
        var items = [];
        this.forEach(function(value) {
          items.push(value);
        });
        return iteratorFor(items);
      };
      Headers.prototype.entries = function() {
        var items = [];
        this.forEach(function(value, name) {
          items.push([name, value]);
        });
        return iteratorFor(items);
      };
      if (support.iterable) {
        Headers.prototype[Symbol.iterator] = Headers.prototype.entries;
      }
      function consumed(body) {
        if (body.bodyUsed) {
          return Promise.reject(new TypeError("Already read"));
        }
        body.bodyUsed = true;
      }
      function fileReaderReady(reader) {
        return new Promise(function(resolve, reject) {
          reader.onload = function() {
            resolve(reader.result);
          };
          reader.onerror = function() {
            reject(reader.error);
          };
        });
      }
      function readBlobAsArrayBuffer(blob) {
        var reader = new FileReader();
        var promise = fileReaderReady(reader);
        reader.readAsArrayBuffer(blob);
        return promise;
      }
      function readBlobAsText(blob) {
        var reader = new FileReader();
        var promise = fileReaderReady(reader);
        reader.readAsText(blob);
        return promise;
      }
      function readArrayBufferAsText(buf) {
        var view = new Uint8Array(buf);
        var chars = new Array(view.length);
        for (var i3 = 0; i3 < view.length; i3++) {
          chars[i3] = String.fromCharCode(view[i3]);
        }
        return chars.join("");
      }
      function bufferClone(buf) {
        if (buf.slice) {
          return buf.slice(0);
        } else {
          var view = new Uint8Array(buf.byteLength);
          view.set(new Uint8Array(buf));
          return view.buffer;
        }
      }
      function Body() {
        this.bodyUsed = false;
        this._initBody = function(body) {
          this._bodyInit = body;
          if (!body) {
            this._bodyText = "";
          } else if (typeof body === "string") {
            this._bodyText = body;
          } else if (support.blob && Blob.prototype.isPrototypeOf(body)) {
            this._bodyBlob = body;
          } else if (support.formData && FormData.prototype.isPrototypeOf(body)) {
            this._bodyFormData = body;
          } else if (support.searchParams && URLSearchParams.prototype.isPrototypeOf(body)) {
            this._bodyText = body.toString();
          } else if (support.arrayBuffer && support.blob && isDataView(body)) {
            this._bodyArrayBuffer = bufferClone(body.buffer);
            this._bodyInit = new Blob([this._bodyArrayBuffer]);
          } else if (support.arrayBuffer && (ArrayBuffer.prototype.isPrototypeOf(body) || isArrayBufferView(body))) {
            this._bodyArrayBuffer = bufferClone(body);
          } else {
            this._bodyText = body = Object.prototype.toString.call(body);
          }
          if (!this.headers.get("content-type")) {
            if (typeof body === "string") {
              this.headers.set("content-type", "text/plain;charset=UTF-8");
            } else if (this._bodyBlob && this._bodyBlob.type) {
              this.headers.set("content-type", this._bodyBlob.type);
            } else if (support.searchParams && URLSearchParams.prototype.isPrototypeOf(body)) {
              this.headers.set("content-type", "application/x-www-form-urlencoded;charset=UTF-8");
            }
          }
        };
        if (support.blob) {
          this.blob = function() {
            var rejected = consumed(this);
            if (rejected) {
              return rejected;
            }
            if (this._bodyBlob) {
              return Promise.resolve(this._bodyBlob);
            } else if (this._bodyArrayBuffer) {
              return Promise.resolve(new Blob([this._bodyArrayBuffer]));
            } else if (this._bodyFormData) {
              throw new Error("could not read FormData body as blob");
            } else {
              return Promise.resolve(new Blob([this._bodyText]));
            }
          };
          this.arrayBuffer = function() {
            if (this._bodyArrayBuffer) {
              return consumed(this) || Promise.resolve(this._bodyArrayBuffer);
            } else {
              return this.blob().then(readBlobAsArrayBuffer);
            }
          };
        }
        this.text = function() {
          var rejected = consumed(this);
          if (rejected) {
            return rejected;
          }
          if (this._bodyBlob) {
            return readBlobAsText(this._bodyBlob);
          } else if (this._bodyArrayBuffer) {
            return Promise.resolve(readArrayBufferAsText(this._bodyArrayBuffer));
          } else if (this._bodyFormData) {
            throw new Error("could not read FormData body as text");
          } else {
            return Promise.resolve(this._bodyText);
          }
        };
        if (support.formData) {
          this.formData = function() {
            return this.text().then(decode2);
          };
        }
        this.json = function() {
          return this.text().then(JSON.parse);
        };
        return this;
      }
      var methods = ["DELETE", "GET", "HEAD", "OPTIONS", "POST", "PUT"];
      function normalizeMethod(method) {
        var upcased = method.toUpperCase();
        return methods.indexOf(upcased) > -1 ? upcased : method;
      }
      function Request(input, options) {
        options = options || {};
        var body = options.body;
        if (input instanceof Request) {
          if (input.bodyUsed) {
            throw new TypeError("Already read");
          }
          this.url = input.url;
          this.credentials = input.credentials;
          if (!options.headers) {
            this.headers = new Headers(input.headers);
          }
          this.method = input.method;
          this.mode = input.mode;
          this.signal = input.signal;
          if (!body && input._bodyInit != null) {
            body = input._bodyInit;
            input.bodyUsed = true;
          }
        } else {
          this.url = String(input);
        }
        this.credentials = options.credentials || this.credentials || "same-origin";
        if (options.headers || !this.headers) {
          this.headers = new Headers(options.headers);
        }
        this.method = normalizeMethod(options.method || this.method || "GET");
        this.mode = options.mode || this.mode || null;
        this.signal = options.signal || this.signal;
        this.referrer = null;
        if ((this.method === "GET" || this.method === "HEAD") && body) {
          throw new TypeError("Body not allowed for GET or HEAD requests");
        }
        this._initBody(body);
      }
      Request.prototype.clone = function() {
        return new Request(this, { body: this._bodyInit });
      };
      function decode2(body) {
        var form = new FormData();
        body.trim().split("&").forEach(function(bytes) {
          if (bytes) {
            var split = bytes.split("=");
            var name = split.shift().replace(/\+/g, " ");
            var value = split.join("=").replace(/\+/g, " ");
            form.append(decodeURIComponent(name), decodeURIComponent(value));
          }
        });
        return form;
      }
      function parseHeaders(rawHeaders) {
        var headers = new Headers();
        var preProcessedHeaders = rawHeaders.replace(/\r?\n[\t ]+/g, " ");
        preProcessedHeaders.split(/\r?\n/).forEach(function(line) {
          var parts = line.split(":");
          var key = parts.shift().trim();
          if (key) {
            var value = parts.join(":").trim();
            headers.append(key, value);
          }
        });
        return headers;
      }
      Body.call(Request.prototype);
      function Response(bodyInit, options) {
        if (!options) {
          options = {};
        }
        this.type = "default";
        this.status = options.status === void 0 ? 200 : options.status;
        this.ok = this.status >= 200 && this.status < 300;
        this.statusText = "statusText" in options ? options.statusText : "OK";
        this.headers = new Headers(options.headers);
        this.url = options.url || "";
        this._initBody(bodyInit);
      }
      Body.call(Response.prototype);
      Response.prototype.clone = function() {
        return new Response(this._bodyInit, {
          status: this.status,
          statusText: this.statusText,
          headers: new Headers(this.headers),
          url: this.url
        });
      };
      Response.error = function() {
        var response = new Response(null, { status: 0, statusText: "" });
        response.type = "error";
        return response;
      };
      var redirectStatuses = [301, 302, 303, 307, 308];
      Response.redirect = function(url, status) {
        if (redirectStatuses.indexOf(status) === -1) {
          throw new RangeError("Invalid status code");
        }
        return new Response(null, { status, headers: { location: url } });
      };
      exports2.DOMException = self2.DOMException;
      try {
        new exports2.DOMException();
      } catch (err) {
        exports2.DOMException = function(message, name) {
          this.message = message;
          this.name = name;
          var error = Error(message);
          this.stack = error.stack;
        };
        exports2.DOMException.prototype = Object.create(Error.prototype);
        exports2.DOMException.prototype.constructor = exports2.DOMException;
      }
      function fetch2(input, init) {
        return new Promise(function(resolve, reject) {
          var request = new Request(input, init);
          if (request.signal && request.signal.aborted) {
            return reject(new exports2.DOMException("Aborted", "AbortError"));
          }
          var xhr = new XMLHttpRequest();
          function abortXhr() {
            xhr.abort();
          }
          xhr.onload = function() {
            var options = {
              status: xhr.status,
              statusText: xhr.statusText,
              headers: parseHeaders(xhr.getAllResponseHeaders() || "")
            };
            options.url = "responseURL" in xhr ? xhr.responseURL : options.headers.get("X-Request-URL");
            var body = "response" in xhr ? xhr.response : xhr.responseText;
            resolve(new Response(body, options));
          };
          xhr.onerror = function() {
            reject(new TypeError("Network request failed"));
          };
          xhr.ontimeout = function() {
            reject(new TypeError("Network request failed"));
          };
          xhr.onabort = function() {
            reject(new exports2.DOMException("Aborted", "AbortError"));
          };
          xhr.open(request.method, request.url, true);
          if (request.credentials === "include") {
            xhr.withCredentials = true;
          } else if (request.credentials === "omit") {
            xhr.withCredentials = false;
          }
          if ("responseType" in xhr && support.blob) {
            xhr.responseType = "blob";
          }
          request.headers.forEach(function(value, name) {
            xhr.setRequestHeader(name, value);
          });
          if (request.signal) {
            request.signal.addEventListener("abort", abortXhr);
            xhr.onreadystatechange = function() {
              if (xhr.readyState === 4) {
                request.signal.removeEventListener("abort", abortXhr);
              }
            };
          }
          xhr.send(typeof request._bodyInit === "undefined" ? null : request._bodyInit);
        });
      }
      fetch2.polyfill = true;
      if (!self2.fetch) {
        self2.fetch = fetch2;
        self2.Headers = Headers;
        self2.Request = Request;
        self2.Response = Response;
      }
      exports2.Headers = Headers;
      exports2.Request = Request;
      exports2.Response = Response;
      exports2.fetch = fetch2;
      Object.defineProperty(exports2, "__esModule", { value: true });
      return exports2;
    })({});
  })(__self__);
  __self__.fetch.ponyfill = true;
  delete __self__.fetch.polyfill;
  var ctx = __self__;
  exports = ctx.fetch;
  exports.default = ctx.fetch;
  exports.fetch = ctx.fetch;
  exports.Headers = ctx.Headers;
  exports.Request = ctx.Request;
  exports.Response = ctx.Response;
  module.exports = exports;
})(browserPonyfill, browserPonyfill.exports);
var browserPonyfillExports = browserPonyfill.exports;
const o2 = /* @__PURE__ */ getDefaultExportFromCjs(browserPonyfillExports);
var P = Object.defineProperty, w2 = Object.defineProperties, E$1 = Object.getOwnPropertyDescriptors, c = Object.getOwnPropertySymbols, L$1 = Object.prototype.hasOwnProperty, O$1 = Object.prototype.propertyIsEnumerable, l = (r2, t, e2) => t in r2 ? P(r2, t, { enumerable: true, configurable: true, writable: true, value: e2 }) : r2[t] = e2, p$1 = (r2, t) => {
  for (var e2 in t || (t = {}))
    L$1.call(t, e2) && l(r2, e2, t[e2]);
  if (c)
    for (var e2 of c(t))
      O$1.call(t, e2) && l(r2, e2, t[e2]);
  return r2;
}, v$1 = (r2, t) => w2(r2, E$1(t));
const j$1 = { Accept: "application/json", "Content-Type": "application/json" }, T$1 = "POST", d3 = { headers: j$1, method: T$1 }, g$1 = 10;
class f2 {
  constructor(t, e2 = false) {
    if (this.url = t, this.disableProviderPing = e2, this.events = new eventsExports.EventEmitter(), this.isAvailable = false, this.registering = false, !isHttpUrl(t))
      throw new Error(`Provided URL is not compatible with HTTP connection: ${t}`);
    this.url = t, this.disableProviderPing = e2;
  }
  get connected() {
    return this.isAvailable;
  }
  get connecting() {
    return this.registering;
  }
  on(t, e2) {
    this.events.on(t, e2);
  }
  once(t, e2) {
    this.events.once(t, e2);
  }
  off(t, e2) {
    this.events.off(t, e2);
  }
  removeListener(t, e2) {
    this.events.removeListener(t, e2);
  }
  async open(t = this.url) {
    await this.register(t);
  }
  async close() {
    if (!this.isAvailable)
      throw new Error("Connection already closed");
    this.onClose();
  }
  async send(t) {
    this.isAvailable || await this.register();
    try {
      const e2 = safeJsonStringify(t), s2 = await (await o2(this.url, v$1(p$1({}, d3), { body: e2 }))).json();
      this.onPayload({ data: s2 });
    } catch (e2) {
      this.onError(t.id, e2);
    }
  }
  async register(t = this.url) {
    if (!isHttpUrl(t))
      throw new Error(`Provided URL is not compatible with HTTP connection: ${t}`);
    if (this.registering) {
      const e2 = this.events.getMaxListeners();
      return (this.events.listenerCount("register_error") >= e2 || this.events.listenerCount("open") >= e2) && this.events.setMaxListeners(e2 + 1), new Promise((s2, i3) => {
        this.events.once("register_error", (n4) => {
          this.resetMaxListeners(), i3(n4);
        }), this.events.once("open", () => {
          if (this.resetMaxListeners(), typeof this.isAvailable > "u")
            return i3(new Error("HTTP connection is missing or invalid"));
          s2();
        });
      });
    }
    this.url = t, this.registering = true;
    try {
      if (!this.disableProviderPing) {
        const e2 = safeJsonStringify({ id: 1, jsonrpc: "2.0", method: "test", params: [] });
        await o2(t, v$1(p$1({}, d3), { body: e2 }));
      }
      this.onOpen();
    } catch (e2) {
      const s2 = this.parseError(e2);
      throw this.events.emit("register_error", s2), this.onClose(), s2;
    }
  }
  onOpen() {
    this.isAvailable = true, this.registering = false, this.events.emit("open");
  }
  onClose() {
    this.isAvailable = false, this.registering = false, this.events.emit("close");
  }
  onPayload(t) {
    if (typeof t.data > "u")
      return;
    const e2 = typeof t.data == "string" ? safeJsonParse(t.data) : t.data;
    this.events.emit("payload", e2);
  }
  onError(t, e2) {
    const s2 = this.parseError(e2), i3 = s2.message || s2.toString(), n4 = formatJsonRpcError(t, i3);
    this.events.emit("payload", n4);
  }
  parseError(t, e2 = this.url) {
    return parseConnectionError(t, e2, "HTTP");
  }
  resetMaxListeners() {
    this.events.getMaxListeners() > g$1 && this.events.setMaxListeners(g$1);
  }
}
const xa = "error", Mg = "wss://relay.walletconnect.com", qg = "wc", Bg = "universal_provider", Ea = `${qg}@2:${Bg}:`, Gg = "https://rpc.walletconnect.com/v1/", Vn = { DEFAULT_CHAIN_CHANGED: "default_chain_changed" };
var ge = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, Ui = { exports: {} };
/**
* @license
* Lodash <https://lodash.com/>
* Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
* Released under MIT license <https://lodash.com/license>
* Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
* Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
*/
(function(A2, u3) {
  (function() {
    var i3, p3 = "4.17.21", w3 = 200, b3 = "Unsupported core-js use. Try https://npms.io/search?q=ponyfill.", D2 = "Expected a function", En2 = "Invalid `variable` option passed into `_.template`", zt2 = "__lodash_hash_undefined__", pr2 = 500, It2 = "__lodash_placeholder__", Ln2 = 1, Fn2 = 2, xt2 = 4, Et2 = 1, ve2 = 2, vn = 1, ct2 = 2, Bi2 = 4, Dn2 = 8, yt2 = 16, Nn2 = 32, St2 = 64, Mn = 128, Kt2 = 256, dr3 = 512, Na2 = 30, Ha2 = "...", $a2 = 800, Ua2 = 16, Gi2 = 1, Wa2 = 2, Fa2 = 3, ht2 = 1 / 0, kn2 = 9007199254740991, Ma2 = 17976931348623157e292, _e2 = 0 / 0, Hn2 = 4294967295, qa2 = Hn2 - 1, Ba2 = Hn2 >>> 1, Ga2 = [["ary", Mn], ["bind", vn], ["bindKey", ct2], ["curry", Dn2], ["curryRight", yt2], ["flip", dr3], ["partial", Nn2], ["partialRight", St2], ["rearg", Kt2]], Ot2 = "[object Arguments]", me2 = "[object Array]", za2 = "[object AsyncFunction]", Yt3 = "[object Boolean]", Zt2 = "[object Date]", Ka2 = "[object DOMException]", we2 = "[object Error]", Pe2 = "[object Function]", zi2 = "[object GeneratorFunction]", yn2 = "[object Map]", Jt2 = "[object Number]", Ya = "[object Null]", qn2 = "[object Object]", Ki2 = "[object Promise]", Za2 = "[object Proxy]", Xt2 = "[object RegExp]", Sn2 = "[object Set]", Qt2 = "[object String]", Ae2 = "[object Symbol]", Ja2 = "[object Undefined]", Vt2 = "[object WeakMap]", Xa2 = "[object WeakSet]", kt2 = "[object ArrayBuffer]", Rt2 = "[object DataView]", gr2 = "[object Float32Array]", vr2 = "[object Float64Array]", _r2 = "[object Int8Array]", mr2 = "[object Int16Array]", wr2 = "[object Int32Array]", Pr2 = "[object Uint8Array]", Ar2 = "[object Uint8ClampedArray]", Cr2 = "[object Uint16Array]", Ir2 = "[object Uint32Array]", Qa2 = /\b__p \+= '';/g, Va2 = /\b(__p \+=) '' \+/g, ka2 = /(__e\(.*?\)|\b__t\)) \+\n'';/g, Yi2 = /&(?:amp|lt|gt|quot|#39);/g, Zi2 = /[&<>"']/g, ja2 = RegExp(Yi2.source), no2 = RegExp(Zi2.source), to2 = /<%-([\s\S]+?)%>/g, eo2 = /<%([\s\S]+?)%>/g, Ji2 = /<%=([\s\S]+?)%>/g, ro2 = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, io2 = /^\w*$/, so2 = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, xr2 = /[\\^$.*+?()[\]{}|]/g, uo = RegExp(xr2.source), Er2 = /^\s+/, ao2 = /\s/, oo2 = /\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/, fo2 = /\{\n\/\* \[wrapped with (.+)\] \*/, co2 = /,? & /, ho = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g, lo2 = /[()=,{}\[\]\/\s]/, po2 = /\\(\\)?/g, go2 = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g, Xi2 = /\w*$/, vo2 = /^[-+]0x[0-9a-f]+$/i, _o2 = /^0b[01]+$/i, mo2 = /^\[object .+?Constructor\]$/, wo2 = /^0o[0-7]+$/i, Po2 = /^(?:0|[1-9]\d*)$/, Ao2 = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g, Ce2 = /($^)/, Co2 = /['\n\r\u2028\u2029\\]/g, Ie = "\\ud800-\\udfff", Io2 = "\\u0300-\\u036f", xo2 = "\\ufe20-\\ufe2f", Eo2 = "\\u20d0-\\u20ff", Qi2 = Io2 + xo2 + Eo2, Vi2 = "\\u2700-\\u27bf", ki2 = "a-z\\xdf-\\xf6\\xf8-\\xff", yo2 = "\\xac\\xb1\\xd7\\xf7", So2 = "\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf", Oo2 = "\\u2000-\\u206f", Ro2 = " \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000", ji2 = "A-Z\\xc0-\\xd6\\xd8-\\xde", ns2 = "\\ufe0e\\ufe0f", ts3 = yo2 + So2 + Oo2 + Ro2, yr2 = "['’]", bo2 = "[" + Ie + "]", es3 = "[" + ts3 + "]", xe2 = "[" + Qi2 + "]", rs2 = "\\d+", To = "[" + Vi2 + "]", is3 = "[" + ki2 + "]", ss2 = "[^" + Ie + ts3 + rs2 + Vi2 + ki2 + ji2 + "]", Sr2 = "\\ud83c[\\udffb-\\udfff]", Lo = "(?:" + xe2 + "|" + Sr2 + ")", us2 = "[^" + Ie + "]", Or2 = "(?:\\ud83c[\\udde6-\\uddff]){2}", Rr2 = "[\\ud800-\\udbff][\\udc00-\\udfff]", bt2 = "[" + ji2 + "]", as2 = "\\u200d", os2 = "(?:" + is3 + "|" + ss2 + ")", Do = "(?:" + bt2 + "|" + ss2 + ")", fs2 = "(?:" + yr2 + "(?:d|ll|m|re|s|t|ve))?", cs2 = "(?:" + yr2 + "(?:D|LL|M|RE|S|T|VE))?", hs2 = Lo + "?", ls2 = "[" + ns2 + "]?", No2 = "(?:" + as2 + "(?:" + [us2, Or2, Rr2].join("|") + ")" + ls2 + hs2 + ")*", Ho = "\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])", $o2 = "\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])", ps2 = ls2 + hs2 + No2, Uo = "(?:" + [To, Or2, Rr2].join("|") + ")" + ps2, Wo2 = "(?:" + [us2 + xe2 + "?", xe2, Or2, Rr2, bo2].join("|") + ")", Fo = RegExp(yr2, "g"), Mo2 = RegExp(xe2, "g"), br2 = RegExp(Sr2 + "(?=" + Sr2 + ")|" + Wo2 + ps2, "g"), qo = RegExp([bt2 + "?" + is3 + "+" + fs2 + "(?=" + [es3, bt2, "$"].join("|") + ")", Do + "+" + cs2 + "(?=" + [es3, bt2 + os2, "$"].join("|") + ")", bt2 + "?" + os2 + "+" + fs2, bt2 + "+" + cs2, $o2, Ho, rs2, Uo].join("|"), "g"), Bo2 = RegExp("[" + as2 + Ie + Qi2 + ns2 + "]"), Go2 = /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/, zo2 = ["Array", "Buffer", "DataView", "Date", "Error", "Float32Array", "Float64Array", "Function", "Int8Array", "Int16Array", "Int32Array", "Map", "Math", "Object", "Promise", "RegExp", "Set", "String", "Symbol", "TypeError", "Uint8Array", "Uint8ClampedArray", "Uint16Array", "Uint32Array", "WeakMap", "_", "clearTimeout", "isFinite", "parseInt", "setTimeout"], Ko = -1, B3 = {};
    B3[gr2] = B3[vr2] = B3[_r2] = B3[mr2] = B3[wr2] = B3[Pr2] = B3[Ar2] = B3[Cr2] = B3[Ir2] = true, B3[Ot2] = B3[me2] = B3[kt2] = B3[Yt3] = B3[Rt2] = B3[Zt2] = B3[we2] = B3[Pe2] = B3[yn2] = B3[Jt2] = B3[qn2] = B3[Xt2] = B3[Sn2] = B3[Qt2] = B3[Vt2] = false;
    var q2 = {};
    q2[Ot2] = q2[me2] = q2[kt2] = q2[Rt2] = q2[Yt3] = q2[Zt2] = q2[gr2] = q2[vr2] = q2[_r2] = q2[mr2] = q2[wr2] = q2[yn2] = q2[Jt2] = q2[qn2] = q2[Xt2] = q2[Sn2] = q2[Qt2] = q2[Ae2] = q2[Pr2] = q2[Ar2] = q2[Cr2] = q2[Ir2] = true, q2[we2] = q2[Pe2] = q2[Vt2] = false;
    var Yo = { À: "A", Á: "A", Â: "A", Ã: "A", Ä: "A", Å: "A", à: "a", á: "a", â: "a", ã: "a", ä: "a", å: "a", Ç: "C", ç: "c", Ð: "D", ð: "d", È: "E", É: "E", Ê: "E", Ë: "E", è: "e", é: "e", ê: "e", ë: "e", Ì: "I", Í: "I", Î: "I", Ï: "I", ì: "i", í: "i", î: "i", ï: "i", Ñ: "N", ñ: "n", Ò: "O", Ó: "O", Ô: "O", Õ: "O", Ö: "O", Ø: "O", ò: "o", ó: "o", ô: "o", õ: "o", ö: "o", ø: "o", Ù: "U", Ú: "U", Û: "U", Ü: "U", ù: "u", ú: "u", û: "u", ü: "u", Ý: "Y", ý: "y", ÿ: "y", Æ: "Ae", æ: "ae", Þ: "Th", þ: "th", ß: "ss", Ā: "A", Ă: "A", Ą: "A", ā: "a", ă: "a", ą: "a", Ć: "C", Ĉ: "C", Ċ: "C", Č: "C", ć: "c", ĉ: "c", ċ: "c", č: "c", Ď: "D", Đ: "D", ď: "d", đ: "d", Ē: "E", Ĕ: "E", Ė: "E", Ę: "E", Ě: "E", ē: "e", ĕ: "e", ė: "e", ę: "e", ě: "e", Ĝ: "G", Ğ: "G", Ġ: "G", Ģ: "G", ĝ: "g", ğ: "g", ġ: "g", ģ: "g", Ĥ: "H", Ħ: "H", ĥ: "h", ħ: "h", Ĩ: "I", Ī: "I", Ĭ: "I", Į: "I", İ: "I", ĩ: "i", ī: "i", ĭ: "i", į: "i", ı: "i", Ĵ: "J", ĵ: "j", Ķ: "K", ķ: "k", ĸ: "k", Ĺ: "L", Ļ: "L", Ľ: "L", Ŀ: "L", Ł: "L", ĺ: "l", ļ: "l", ľ: "l", ŀ: "l", ł: "l", Ń: "N", Ņ: "N", Ň: "N", Ŋ: "N", ń: "n", ņ: "n", ň: "n", ŋ: "n", Ō: "O", Ŏ: "O", Ő: "O", ō: "o", ŏ: "o", ő: "o", Ŕ: "R", Ŗ: "R", Ř: "R", ŕ: "r", ŗ: "r", ř: "r", Ś: "S", Ŝ: "S", Ş: "S", Š: "S", ś: "s", ŝ: "s", ş: "s", š: "s", Ţ: "T", Ť: "T", Ŧ: "T", ţ: "t", ť: "t", ŧ: "t", Ũ: "U", Ū: "U", Ŭ: "U", Ů: "U", Ű: "U", Ų: "U", ũ: "u", ū: "u", ŭ: "u", ů: "u", ű: "u", ų: "u", Ŵ: "W", ŵ: "w", Ŷ: "Y", ŷ: "y", Ÿ: "Y", Ź: "Z", Ż: "Z", Ž: "Z", ź: "z", ż: "z", ž: "z", Ĳ: "IJ", ĳ: "ij", Œ: "Oe", œ: "oe", ŉ: "'n", ſ: "s" }, Zo = { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }, Jo2 = { "&amp;": "&", "&lt;": "<", "&gt;": ">", "&quot;": '"', "&#39;": "'" }, Xo2 = { "\\": "\\", "'": "'", "\n": "n", "\r": "r", "\u2028": "u2028", "\u2029": "u2029" }, Qo2 = parseFloat, Vo = parseInt, ds2 = typeof ge == "object" && ge && ge.Object === Object && ge, ko = typeof self == "object" && self && self.Object === Object && self, k2 = ds2 || ko || Function("return this")(), Tr2 = u3 && !u3.nodeType && u3, lt2 = Tr2 && true && A2 && !A2.nodeType && A2, gs2 = lt2 && lt2.exports === Tr2, Lr2 = gs2 && ds2.process, _n2 = function() {
      try {
        var h4 = lt2 && lt2.require && lt2.require("util").types;
        return h4 || Lr2 && Lr2.binding && Lr2.binding("util");
      } catch {
      }
    }(), vs2 = _n2 && _n2.isArrayBuffer, _s2 = _n2 && _n2.isDate, ms2 = _n2 && _n2.isMap, ws2 = _n2 && _n2.isRegExp, Ps2 = _n2 && _n2.isSet, As2 = _n2 && _n2.isTypedArray;
    function cn(h4, g3, d4) {
      switch (d4.length) {
        case 0:
          return h4.call(g3);
        case 1:
          return h4.call(g3, d4[0]);
        case 2:
          return h4.call(g3, d4[0], d4[1]);
        case 3:
          return h4.call(g3, d4[0], d4[1], d4[2]);
      }
      return h4.apply(g3, d4);
    }
    function jo(h4, g3, d4, C2) {
      for (var S2 = -1, U2 = h4 == null ? 0 : h4.length; ++S2 < U2; ) {
        var X2 = h4[S2];
        g3(C2, X2, d4(X2), h4);
      }
      return C2;
    }
    function mn(h4, g3) {
      for (var d4 = -1, C2 = h4 == null ? 0 : h4.length; ++d4 < C2 && g3(h4[d4], d4, h4) !== false; )
        ;
      return h4;
    }
    function nf2(h4, g3) {
      for (var d4 = h4 == null ? 0 : h4.length; d4-- && g3(h4[d4], d4, h4) !== false; )
        ;
      return h4;
    }
    function Cs2(h4, g3) {
      for (var d4 = -1, C2 = h4 == null ? 0 : h4.length; ++d4 < C2; )
        if (!g3(h4[d4], d4, h4))
          return false;
      return true;
    }
    function jn2(h4, g3) {
      for (var d4 = -1, C2 = h4 == null ? 0 : h4.length, S2 = 0, U2 = []; ++d4 < C2; ) {
        var X2 = h4[d4];
        g3(X2, d4, h4) && (U2[S2++] = X2);
      }
      return U2;
    }
    function Ee2(h4, g3) {
      var d4 = h4 == null ? 0 : h4.length;
      return !!d4 && Tt2(h4, g3, 0) > -1;
    }
    function Dr2(h4, g3, d4) {
      for (var C2 = -1, S2 = h4 == null ? 0 : h4.length; ++C2 < S2; )
        if (d4(g3, h4[C2]))
          return true;
      return false;
    }
    function G(h4, g3) {
      for (var d4 = -1, C2 = h4 == null ? 0 : h4.length, S2 = Array(C2); ++d4 < C2; )
        S2[d4] = g3(h4[d4], d4, h4);
      return S2;
    }
    function nt2(h4, g3) {
      for (var d4 = -1, C2 = g3.length, S2 = h4.length; ++d4 < C2; )
        h4[S2 + d4] = g3[d4];
      return h4;
    }
    function Nr2(h4, g3, d4, C2) {
      var S2 = -1, U2 = h4 == null ? 0 : h4.length;
      for (C2 && U2 && (d4 = h4[++S2]); ++S2 < U2; )
        d4 = g3(d4, h4[S2], S2, h4);
      return d4;
    }
    function tf(h4, g3, d4, C2) {
      var S2 = h4 == null ? 0 : h4.length;
      for (C2 && S2 && (d4 = h4[--S2]); S2--; )
        d4 = g3(d4, h4[S2], S2, h4);
      return d4;
    }
    function Hr2(h4, g3) {
      for (var d4 = -1, C2 = h4 == null ? 0 : h4.length; ++d4 < C2; )
        if (g3(h4[d4], d4, h4))
          return true;
      return false;
    }
    var ef2 = $r2("length");
    function rf2(h4) {
      return h4.split("");
    }
    function sf2(h4) {
      return h4.match(ho) || [];
    }
    function Is2(h4, g3, d4) {
      var C2;
      return d4(h4, function(S2, U2, X2) {
        if (g3(S2, U2, X2))
          return C2 = U2, false;
      }), C2;
    }
    function ye2(h4, g3, d4, C2) {
      for (var S2 = h4.length, U2 = d4 + (C2 ? 1 : -1); C2 ? U2-- : ++U2 < S2; )
        if (g3(h4[U2], U2, h4))
          return U2;
      return -1;
    }
    function Tt2(h4, g3, d4) {
      return g3 === g3 ? _f2(h4, g3, d4) : ye2(h4, xs2, d4);
    }
    function uf2(h4, g3, d4, C2) {
      for (var S2 = d4 - 1, U2 = h4.length; ++S2 < U2; )
        if (C2(h4[S2], g3))
          return S2;
      return -1;
    }
    function xs2(h4) {
      return h4 !== h4;
    }
    function Es2(h4, g3) {
      var d4 = h4 == null ? 0 : h4.length;
      return d4 ? Wr(h4, g3) / d4 : _e2;
    }
    function $r2(h4) {
      return function(g3) {
        return g3 == null ? i3 : g3[h4];
      };
    }
    function Ur2(h4) {
      return function(g3) {
        return h4 == null ? i3 : h4[g3];
      };
    }
    function ys2(h4, g3, d4, C2, S2) {
      return S2(h4, function(U2, X2, M2) {
        d4 = C2 ? (C2 = false, U2) : g3(d4, U2, X2, M2);
      }), d4;
    }
    function af2(h4, g3) {
      var d4 = h4.length;
      for (h4.sort(g3); d4--; )
        h4[d4] = h4[d4].value;
      return h4;
    }
    function Wr(h4, g3) {
      for (var d4, C2 = -1, S2 = h4.length; ++C2 < S2; ) {
        var U2 = g3(h4[C2]);
        U2 !== i3 && (d4 = d4 === i3 ? U2 : d4 + U2);
      }
      return d4;
    }
    function Fr2(h4, g3) {
      for (var d4 = -1, C2 = Array(h4); ++d4 < h4; )
        C2[d4] = g3(d4);
      return C2;
    }
    function of2(h4, g3) {
      return G(g3, function(d4) {
        return [d4, h4[d4]];
      });
    }
    function Ss2(h4) {
      return h4 && h4.slice(0, Ts2(h4) + 1).replace(Er2, "");
    }
    function hn(h4) {
      return function(g3) {
        return h4(g3);
      };
    }
    function Mr2(h4, g3) {
      return G(g3, function(d4) {
        return h4[d4];
      });
    }
    function jt2(h4, g3) {
      return h4.has(g3);
    }
    function Os2(h4, g3) {
      for (var d4 = -1, C2 = h4.length; ++d4 < C2 && Tt2(g3, h4[d4], 0) > -1; )
        ;
      return d4;
    }
    function Rs2(h4, g3) {
      for (var d4 = h4.length; d4-- && Tt2(g3, h4[d4], 0) > -1; )
        ;
      return d4;
    }
    function ff2(h4, g3) {
      for (var d4 = h4.length, C2 = 0; d4--; )
        h4[d4] === g3 && ++C2;
      return C2;
    }
    var cf2 = Ur2(Yo), hf2 = Ur2(Zo);
    function lf2(h4) {
      return "\\" + Xo2[h4];
    }
    function pf2(h4, g3) {
      return h4 == null ? i3 : h4[g3];
    }
    function Lt2(h4) {
      return Bo2.test(h4);
    }
    function df2(h4) {
      return Go2.test(h4);
    }
    function gf2(h4) {
      for (var g3, d4 = []; !(g3 = h4.next()).done; )
        d4.push(g3.value);
      return d4;
    }
    function qr2(h4) {
      var g3 = -1, d4 = Array(h4.size);
      return h4.forEach(function(C2, S2) {
        d4[++g3] = [S2, C2];
      }), d4;
    }
    function bs2(h4, g3) {
      return function(d4) {
        return h4(g3(d4));
      };
    }
    function tt2(h4, g3) {
      for (var d4 = -1, C2 = h4.length, S2 = 0, U2 = []; ++d4 < C2; ) {
        var X2 = h4[d4];
        (X2 === g3 || X2 === It2) && (h4[d4] = It2, U2[S2++] = d4);
      }
      return U2;
    }
    function Se2(h4) {
      var g3 = -1, d4 = Array(h4.size);
      return h4.forEach(function(C2) {
        d4[++g3] = C2;
      }), d4;
    }
    function vf2(h4) {
      var g3 = -1, d4 = Array(h4.size);
      return h4.forEach(function(C2) {
        d4[++g3] = [C2, C2];
      }), d4;
    }
    function _f2(h4, g3, d4) {
      for (var C2 = d4 - 1, S2 = h4.length; ++C2 < S2; )
        if (h4[C2] === g3)
          return C2;
      return -1;
    }
    function mf2(h4, g3, d4) {
      for (var C2 = d4 + 1; C2--; )
        if (h4[C2] === g3)
          return C2;
      return C2;
    }
    function Dt2(h4) {
      return Lt2(h4) ? Pf2(h4) : ef2(h4);
    }
    function On2(h4) {
      return Lt2(h4) ? Af2(h4) : rf2(h4);
    }
    function Ts2(h4) {
      for (var g3 = h4.length; g3-- && ao2.test(h4.charAt(g3)); )
        ;
      return g3;
    }
    var wf2 = Ur2(Jo2);
    function Pf2(h4) {
      for (var g3 = br2.lastIndex = 0; br2.test(h4); )
        ++g3;
      return g3;
    }
    function Af2(h4) {
      return h4.match(br2) || [];
    }
    function Cf2(h4) {
      return h4.match(qo) || [];
    }
    var If2 = function h4(g3) {
      g3 = g3 == null ? k2 : Nt2.defaults(k2.Object(), g3, Nt2.pick(k2, zo2));
      var d4 = g3.Array, C2 = g3.Date, S2 = g3.Error, U2 = g3.Function, X2 = g3.Math, M2 = g3.Object, Br2 = g3.RegExp, xf2 = g3.String, wn2 = g3.TypeError, Oe2 = d4.prototype, Ef2 = U2.prototype, Ht2 = M2.prototype, Re2 = g3["__core-js_shared__"], be2 = Ef2.toString, F = Ht2.hasOwnProperty, yf2 = 0, Ls2 = function() {
        var n4 = /[^.]+$/.exec(Re2 && Re2.keys && Re2.keys.IE_PROTO || "");
        return n4 ? "Symbol(src)_1." + n4 : "";
      }(), Te = Ht2.toString, Sf2 = be2.call(M2), Of2 = k2._, Rf2 = Br2("^" + be2.call(F).replace(xr2, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"), Le = gs2 ? g3.Buffer : i3, et2 = g3.Symbol, De2 = g3.Uint8Array, Ds2 = Le ? Le.allocUnsafe : i3, Ne = bs2(M2.getPrototypeOf, M2), Ns2 = M2.create, Hs2 = Ht2.propertyIsEnumerable, He2 = Oe2.splice, $s2 = et2 ? et2.isConcatSpreadable : i3, ne2 = et2 ? et2.iterator : i3, pt2 = et2 ? et2.toStringTag : i3, $e2 = function() {
        try {
          var n4 = mt2(M2, "defineProperty");
          return n4({}, "", {}), n4;
        } catch {
        }
      }(), bf2 = g3.clearTimeout !== k2.clearTimeout && g3.clearTimeout, Tf2 = C2 && C2.now !== k2.Date.now && C2.now, Lf = g3.setTimeout !== k2.setTimeout && g3.setTimeout, Ue2 = X2.ceil, We2 = X2.floor, Gr2 = M2.getOwnPropertySymbols, Df2 = Le ? Le.isBuffer : i3, Us2 = g3.isFinite, Nf2 = Oe2.join, Hf2 = bs2(M2.keys, M2), Q2 = X2.max, nn = X2.min, $f2 = C2.now, Uf2 = g3.parseInt, Ws2 = X2.random, Wf2 = Oe2.reverse, zr2 = mt2(g3, "DataView"), te2 = mt2(g3, "Map"), Kr2 = mt2(g3, "Promise"), $t2 = mt2(g3, "Set"), ee2 = mt2(g3, "WeakMap"), re2 = mt2(M2, "create"), Fe2 = ee2 && new ee2(), Ut3 = {}, Ff2 = wt2(zr2), Mf2 = wt2(te2), qf2 = wt2(Kr2), Bf2 = wt2($t2), Gf2 = wt2(ee2), Me2 = et2 ? et2.prototype : i3, ie3 = Me2 ? Me2.valueOf : i3, Fs2 = Me2 ? Me2.toString : i3;
      function a3(n4) {
        if (Y(n4) && !O3(n4) && !(n4 instanceof H)) {
          if (n4 instanceof Pn2)
            return n4;
          if (F.call(n4, "__wrapped__"))
            return Mu2(n4);
        }
        return new Pn2(n4);
      }
      var Wt2 = /* @__PURE__ */ function() {
        function n4() {
        }
        return function(t) {
          if (!K2(t))
            return {};
          if (Ns2)
            return Ns2(t);
          n4.prototype = t;
          var e2 = new n4();
          return n4.prototype = i3, e2;
        };
      }();
      function qe2() {
      }
      function Pn2(n4, t) {
        this.__wrapped__ = n4, this.__actions__ = [], this.__chain__ = !!t, this.__index__ = 0, this.__values__ = i3;
      }
      a3.templateSettings = { escape: to2, evaluate: eo2, interpolate: Ji2, variable: "", imports: { _: a3 } }, a3.prototype = qe2.prototype, a3.prototype.constructor = a3, Pn2.prototype = Wt2(qe2.prototype), Pn2.prototype.constructor = Pn2;
      function H(n4) {
        this.__wrapped__ = n4, this.__actions__ = [], this.__dir__ = 1, this.__filtered__ = false, this.__iteratees__ = [], this.__takeCount__ = Hn2, this.__views__ = [];
      }
      function zf2() {
        var n4 = new H(this.__wrapped__);
        return n4.__actions__ = un(this.__actions__), n4.__dir__ = this.__dir__, n4.__filtered__ = this.__filtered__, n4.__iteratees__ = un(this.__iteratees__), n4.__takeCount__ = this.__takeCount__, n4.__views__ = un(this.__views__), n4;
      }
      function Kf2() {
        if (this.__filtered__) {
          var n4 = new H(this);
          n4.__dir__ = -1, n4.__filtered__ = true;
        } else
          n4 = this.clone(), n4.__dir__ *= -1;
        return n4;
      }
      function Yf2() {
        var n4 = this.__wrapped__.value(), t = this.__dir__, e2 = O3(n4), r2 = t < 0, s2 = e2 ? n4.length : 0, o3 = ih2(0, s2, this.__views__), f3 = o3.start, c2 = o3.end, l2 = c2 - f3, v3 = r2 ? c2 : f3 - 1, _3 = this.__iteratees__, m3 = _3.length, P2 = 0, I2 = nn(l2, this.__takeCount__);
        if (!e2 || !r2 && s2 == l2 && I2 == l2)
          return fu2(n4, this.__actions__);
        var E3 = [];
        n:
          for (; l2-- && P2 < I2; ) {
            v3 += t;
            for (var T2 = -1, y3 = n4[v3]; ++T2 < m3; ) {
              var N2 = _3[T2], $2 = N2.iteratee, dn2 = N2.type, sn = $2(y3);
              if (dn2 == Wa2)
                y3 = sn;
              else if (!sn) {
                if (dn2 == Gi2)
                  continue n;
                break n;
              }
            }
            E3[P2++] = y3;
          }
        return E3;
      }
      H.prototype = Wt2(qe2.prototype), H.prototype.constructor = H;
      function dt2(n4) {
        var t = -1, e2 = n4 == null ? 0 : n4.length;
        for (this.clear(); ++t < e2; ) {
          var r2 = n4[t];
          this.set(r2[0], r2[1]);
        }
      }
      function Zf2() {
        this.__data__ = re2 ? re2(null) : {}, this.size = 0;
      }
      function Jf2(n4) {
        var t = this.has(n4) && delete this.__data__[n4];
        return this.size -= t ? 1 : 0, t;
      }
      function Xf(n4) {
        var t = this.__data__;
        if (re2) {
          var e2 = t[n4];
          return e2 === zt2 ? i3 : e2;
        }
        return F.call(t, n4) ? t[n4] : i3;
      }
      function Qf(n4) {
        var t = this.__data__;
        return re2 ? t[n4] !== i3 : F.call(t, n4);
      }
      function Vf(n4, t) {
        var e2 = this.__data__;
        return this.size += this.has(n4) ? 0 : 1, e2[n4] = re2 && t === i3 ? zt2 : t, this;
      }
      dt2.prototype.clear = Zf2, dt2.prototype.delete = Jf2, dt2.prototype.get = Xf, dt2.prototype.has = Qf, dt2.prototype.set = Vf;
      function Bn(n4) {
        var t = -1, e2 = n4 == null ? 0 : n4.length;
        for (this.clear(); ++t < e2; ) {
          var r2 = n4[t];
          this.set(r2[0], r2[1]);
        }
      }
      function kf2() {
        this.__data__ = [], this.size = 0;
      }
      function jf(n4) {
        var t = this.__data__, e2 = Be2(t, n4);
        if (e2 < 0)
          return false;
        var r2 = t.length - 1;
        return e2 == r2 ? t.pop() : He2.call(t, e2, 1), --this.size, true;
      }
      function nc(n4) {
        var t = this.__data__, e2 = Be2(t, n4);
        return e2 < 0 ? i3 : t[e2][1];
      }
      function tc(n4) {
        return Be2(this.__data__, n4) > -1;
      }
      function ec(n4, t) {
        var e2 = this.__data__, r2 = Be2(e2, n4);
        return r2 < 0 ? (++this.size, e2.push([n4, t])) : e2[r2][1] = t, this;
      }
      Bn.prototype.clear = kf2, Bn.prototype.delete = jf, Bn.prototype.get = nc, Bn.prototype.has = tc, Bn.prototype.set = ec;
      function Gn2(n4) {
        var t = -1, e2 = n4 == null ? 0 : n4.length;
        for (this.clear(); ++t < e2; ) {
          var r2 = n4[t];
          this.set(r2[0], r2[1]);
        }
      }
      function rc() {
        this.size = 0, this.__data__ = { hash: new dt2(), map: new (te2 || Bn)(), string: new dt2() };
      }
      function ic(n4) {
        var t = nr2(this, n4).delete(n4);
        return this.size -= t ? 1 : 0, t;
      }
      function sc(n4) {
        return nr2(this, n4).get(n4);
      }
      function uc(n4) {
        return nr2(this, n4).has(n4);
      }
      function ac(n4, t) {
        var e2 = nr2(this, n4), r2 = e2.size;
        return e2.set(n4, t), this.size += e2.size == r2 ? 0 : 1, this;
      }
      Gn2.prototype.clear = rc, Gn2.prototype.delete = ic, Gn2.prototype.get = sc, Gn2.prototype.has = uc, Gn2.prototype.set = ac;
      function gt2(n4) {
        var t = -1, e2 = n4 == null ? 0 : n4.length;
        for (this.__data__ = new Gn2(); ++t < e2; )
          this.add(n4[t]);
      }
      function oc(n4) {
        return this.__data__.set(n4, zt2), this;
      }
      function fc(n4) {
        return this.__data__.has(n4);
      }
      gt2.prototype.add = gt2.prototype.push = oc, gt2.prototype.has = fc;
      function Rn(n4) {
        var t = this.__data__ = new Bn(n4);
        this.size = t.size;
      }
      function cc() {
        this.__data__ = new Bn(), this.size = 0;
      }
      function hc(n4) {
        var t = this.__data__, e2 = t.delete(n4);
        return this.size = t.size, e2;
      }
      function lc(n4) {
        return this.__data__.get(n4);
      }
      function pc(n4) {
        return this.__data__.has(n4);
      }
      function dc(n4, t) {
        var e2 = this.__data__;
        if (e2 instanceof Bn) {
          var r2 = e2.__data__;
          if (!te2 || r2.length < w3 - 1)
            return r2.push([n4, t]), this.size = ++e2.size, this;
          e2 = this.__data__ = new Gn2(r2);
        }
        return e2.set(n4, t), this.size = e2.size, this;
      }
      Rn.prototype.clear = cc, Rn.prototype.delete = hc, Rn.prototype.get = lc, Rn.prototype.has = pc, Rn.prototype.set = dc;
      function Ms2(n4, t) {
        var e2 = O3(n4), r2 = !e2 && Pt2(n4), s2 = !e2 && !r2 && at2(n4), o3 = !e2 && !r2 && !s2 && Bt2(n4), f3 = e2 || r2 || s2 || o3, c2 = f3 ? Fr2(n4.length, xf2) : [], l2 = c2.length;
        for (var v3 in n4)
          (t || F.call(n4, v3)) && !(f3 && (v3 == "length" || s2 && (v3 == "offset" || v3 == "parent") || o3 && (v3 == "buffer" || v3 == "byteLength" || v3 == "byteOffset") || Zn(v3, l2))) && c2.push(v3);
        return c2;
      }
      function qs2(n4) {
        var t = n4.length;
        return t ? n4[ei(0, t - 1)] : i3;
      }
      function gc(n4, t) {
        return tr2(un(n4), vt2(t, 0, n4.length));
      }
      function vc(n4) {
        return tr2(un(n4));
      }
      function Yr2(n4, t, e2) {
        (e2 !== i3 && !bn2(n4[t], e2) || e2 === i3 && !(t in n4)) && zn2(n4, t, e2);
      }
      function se2(n4, t, e2) {
        var r2 = n4[t];
        (!(F.call(n4, t) && bn2(r2, e2)) || e2 === i3 && !(t in n4)) && zn2(n4, t, e2);
      }
      function Be2(n4, t) {
        for (var e2 = n4.length; e2--; )
          if (bn2(n4[e2][0], t))
            return e2;
        return -1;
      }
      function _c(n4, t, e2, r2) {
        return rt2(n4, function(s2, o3, f3) {
          t(r2, s2, e2(s2), f3);
        }), r2;
      }
      function Bs2(n4, t) {
        return n4 && Un2(t, V3(t), n4);
      }
      function mc(n4, t) {
        return n4 && Un2(t, on(t), n4);
      }
      function zn2(n4, t, e2) {
        t == "__proto__" && $e2 ? $e2(n4, t, { configurable: true, enumerable: true, value: e2, writable: true }) : n4[t] = e2;
      }
      function Zr(n4, t) {
        for (var e2 = -1, r2 = t.length, s2 = d4(r2), o3 = n4 == null; ++e2 < r2; )
          s2[e2] = o3 ? i3 : Si2(n4, t[e2]);
        return s2;
      }
      function vt2(n4, t, e2) {
        return n4 === n4 && (e2 !== i3 && (n4 = n4 <= e2 ? n4 : e2), t !== i3 && (n4 = n4 >= t ? n4 : t)), n4;
      }
      function An(n4, t, e2, r2, s2, o3) {
        var f3, c2 = t & Ln2, l2 = t & Fn2, v3 = t & xt2;
        if (e2 && (f3 = s2 ? e2(n4, r2, s2, o3) : e2(n4)), f3 !== i3)
          return f3;
        if (!K2(n4))
          return n4;
        var _3 = O3(n4);
        if (_3) {
          if (f3 = uh2(n4), !c2)
            return un(n4, f3);
        } else {
          var m3 = tn2(n4), P2 = m3 == Pe2 || m3 == zi2;
          if (at2(n4))
            return lu2(n4, c2);
          if (m3 == qn2 || m3 == Ot2 || P2 && !s2) {
            if (f3 = l2 || P2 ? {} : Tu(n4), !c2)
              return l2 ? Xc(n4, mc(f3, n4)) : Jc(n4, Bs2(f3, n4));
          } else {
            if (!q2[m3])
              return s2 ? n4 : {};
            f3 = ah2(n4, m3, c2);
          }
        }
        o3 || (o3 = new Rn());
        var I2 = o3.get(n4);
        if (I2)
          return I2;
        o3.set(n4, f3), ua2(n4) ? n4.forEach(function(y3) {
          f3.add(An(y3, t, e2, y3, n4, o3));
        }) : ia2(n4) && n4.forEach(function(y3, N2) {
          f3.set(N2, An(y3, t, e2, N2, n4, o3));
        });
        var E3 = v3 ? l2 ? pi2 : li : l2 ? on : V3, T2 = _3 ? i3 : E3(n4);
        return mn(T2 || n4, function(y3, N2) {
          T2 && (N2 = y3, y3 = n4[N2]), se2(f3, N2, An(y3, t, e2, N2, n4, o3));
        }), f3;
      }
      function wc(n4) {
        var t = V3(n4);
        return function(e2) {
          return Gs2(e2, n4, t);
        };
      }
      function Gs2(n4, t, e2) {
        var r2 = e2.length;
        if (n4 == null)
          return !r2;
        for (n4 = M2(n4); r2--; ) {
          var s2 = e2[r2], o3 = t[s2], f3 = n4[s2];
          if (f3 === i3 && !(s2 in n4) || !o3(f3))
            return false;
        }
        return true;
      }
      function zs2(n4, t, e2) {
        if (typeof n4 != "function")
          throw new wn2(D2);
        return le2(function() {
          n4.apply(i3, e2);
        }, t);
      }
      function ue2(n4, t, e2, r2) {
        var s2 = -1, o3 = Ee2, f3 = true, c2 = n4.length, l2 = [], v3 = t.length;
        if (!c2)
          return l2;
        e2 && (t = G(t, hn(e2))), r2 ? (o3 = Dr2, f3 = false) : t.length >= w3 && (o3 = jt2, f3 = false, t = new gt2(t));
        n:
          for (; ++s2 < c2; ) {
            var _3 = n4[s2], m3 = e2 == null ? _3 : e2(_3);
            if (_3 = r2 || _3 !== 0 ? _3 : 0, f3 && m3 === m3) {
              for (var P2 = v3; P2--; )
                if (t[P2] === m3)
                  continue n;
              l2.push(_3);
            } else
              o3(t, m3, r2) || l2.push(_3);
          }
        return l2;
      }
      var rt2 = _u2($n2), Ks2 = _u2(Xr, true);
      function Pc(n4, t) {
        var e2 = true;
        return rt2(n4, function(r2, s2, o3) {
          return e2 = !!t(r2, s2, o3), e2;
        }), e2;
      }
      function Ge2(n4, t, e2) {
        for (var r2 = -1, s2 = n4.length; ++r2 < s2; ) {
          var o3 = n4[r2], f3 = t(o3);
          if (f3 != null && (c2 === i3 ? f3 === f3 && !pn(f3) : e2(f3, c2)))
            var c2 = f3, l2 = o3;
        }
        return l2;
      }
      function Ac(n4, t, e2, r2) {
        var s2 = n4.length;
        for (e2 = R(e2), e2 < 0 && (e2 = -e2 > s2 ? 0 : s2 + e2), r2 = r2 === i3 || r2 > s2 ? s2 : R(r2), r2 < 0 && (r2 += s2), r2 = e2 > r2 ? 0 : oa2(r2); e2 < r2; )
          n4[e2++] = t;
        return n4;
      }
      function Ys2(n4, t) {
        var e2 = [];
        return rt2(n4, function(r2, s2, o3) {
          t(r2, s2, o3) && e2.push(r2);
        }), e2;
      }
      function j2(n4, t, e2, r2, s2) {
        var o3 = -1, f3 = n4.length;
        for (e2 || (e2 = fh2), s2 || (s2 = []); ++o3 < f3; ) {
          var c2 = n4[o3];
          t > 0 && e2(c2) ? t > 1 ? j2(c2, t - 1, e2, r2, s2) : nt2(s2, c2) : r2 || (s2[s2.length] = c2);
        }
        return s2;
      }
      var Jr2 = mu2(), Zs2 = mu2(true);
      function $n2(n4, t) {
        return n4 && Jr2(n4, t, V3);
      }
      function Xr(n4, t) {
        return n4 && Zs2(n4, t, V3);
      }
      function ze2(n4, t) {
        return jn2(t, function(e2) {
          return Jn2(n4[e2]);
        });
      }
      function _t2(n4, t) {
        t = st2(t, n4);
        for (var e2 = 0, r2 = t.length; n4 != null && e2 < r2; )
          n4 = n4[Wn2(t[e2++])];
        return e2 && e2 == r2 ? n4 : i3;
      }
      function Js2(n4, t, e2) {
        var r2 = t(n4);
        return O3(n4) ? r2 : nt2(r2, e2(n4));
      }
      function en2(n4) {
        return n4 == null ? n4 === i3 ? Ja2 : Ya : pt2 && pt2 in M2(n4) ? rh2(n4) : vh(n4);
      }
      function Qr2(n4, t) {
        return n4 > t;
      }
      function Cc(n4, t) {
        return n4 != null && F.call(n4, t);
      }
      function Ic(n4, t) {
        return n4 != null && t in M2(n4);
      }
      function xc(n4, t, e2) {
        return n4 >= nn(t, e2) && n4 < Q2(t, e2);
      }
      function Vr2(n4, t, e2) {
        for (var r2 = e2 ? Dr2 : Ee2, s2 = n4[0].length, o3 = n4.length, f3 = o3, c2 = d4(o3), l2 = 1 / 0, v3 = []; f3--; ) {
          var _3 = n4[f3];
          f3 && t && (_3 = G(_3, hn(t))), l2 = nn(_3.length, l2), c2[f3] = !e2 && (t || s2 >= 120 && _3.length >= 120) ? new gt2(f3 && _3) : i3;
        }
        _3 = n4[0];
        var m3 = -1, P2 = c2[0];
        n:
          for (; ++m3 < s2 && v3.length < l2; ) {
            var I2 = _3[m3], E3 = t ? t(I2) : I2;
            if (I2 = e2 || I2 !== 0 ? I2 : 0, !(P2 ? jt2(P2, E3) : r2(v3, E3, e2))) {
              for (f3 = o3; --f3; ) {
                var T2 = c2[f3];
                if (!(T2 ? jt2(T2, E3) : r2(n4[f3], E3, e2)))
                  continue n;
              }
              P2 && P2.push(E3), v3.push(I2);
            }
          }
        return v3;
      }
      function Ec(n4, t, e2, r2) {
        return $n2(n4, function(s2, o3, f3) {
          t(r2, e2(s2), o3, f3);
        }), r2;
      }
      function ae2(n4, t, e2) {
        t = st2(t, n4), n4 = Hu(n4, t);
        var r2 = n4 == null ? n4 : n4[Wn2(In2(t))];
        return r2 == null ? i3 : cn(r2, n4, e2);
      }
      function Xs2(n4) {
        return Y(n4) && en2(n4) == Ot2;
      }
      function yc(n4) {
        return Y(n4) && en2(n4) == kt2;
      }
      function Sc(n4) {
        return Y(n4) && en2(n4) == Zt2;
      }
      function oe2(n4, t, e2, r2, s2) {
        return n4 === t ? true : n4 == null || t == null || !Y(n4) && !Y(t) ? n4 !== n4 && t !== t : Oc(n4, t, e2, r2, oe2, s2);
      }
      function Oc(n4, t, e2, r2, s2, o3) {
        var f3 = O3(n4), c2 = O3(t), l2 = f3 ? me2 : tn2(n4), v3 = c2 ? me2 : tn2(t);
        l2 = l2 == Ot2 ? qn2 : l2, v3 = v3 == Ot2 ? qn2 : v3;
        var _3 = l2 == qn2, m3 = v3 == qn2, P2 = l2 == v3;
        if (P2 && at2(n4)) {
          if (!at2(t))
            return false;
          f3 = true, _3 = false;
        }
        if (P2 && !_3)
          return o3 || (o3 = new Rn()), f3 || Bt2(n4) ? Ou2(n4, t, e2, r2, s2, o3) : th2(n4, t, l2, e2, r2, s2, o3);
        if (!(e2 & Et2)) {
          var I2 = _3 && F.call(n4, "__wrapped__"), E3 = m3 && F.call(t, "__wrapped__");
          if (I2 || E3) {
            var T2 = I2 ? n4.value() : n4, y3 = E3 ? t.value() : t;
            return o3 || (o3 = new Rn()), s2(T2, y3, e2, r2, o3);
          }
        }
        return P2 ? (o3 || (o3 = new Rn()), eh2(n4, t, e2, r2, s2, o3)) : false;
      }
      function Rc(n4) {
        return Y(n4) && tn2(n4) == yn2;
      }
      function kr2(n4, t, e2, r2) {
        var s2 = e2.length, o3 = s2, f3 = !r2;
        if (n4 == null)
          return !o3;
        for (n4 = M2(n4); s2--; ) {
          var c2 = e2[s2];
          if (f3 && c2[2] ? c2[1] !== n4[c2[0]] : !(c2[0] in n4))
            return false;
        }
        for (; ++s2 < o3; ) {
          c2 = e2[s2];
          var l2 = c2[0], v3 = n4[l2], _3 = c2[1];
          if (f3 && c2[2]) {
            if (v3 === i3 && !(l2 in n4))
              return false;
          } else {
            var m3 = new Rn();
            if (r2)
              var P2 = r2(v3, _3, l2, n4, t, m3);
            if (!(P2 === i3 ? oe2(_3, v3, Et2 | ve2, r2, m3) : P2))
              return false;
          }
        }
        return true;
      }
      function Qs2(n4) {
        if (!K2(n4) || hh2(n4))
          return false;
        var t = Jn2(n4) ? Rf2 : mo2;
        return t.test(wt2(n4));
      }
      function bc(n4) {
        return Y(n4) && en2(n4) == Xt2;
      }
      function Tc(n4) {
        return Y(n4) && tn2(n4) == Sn2;
      }
      function Lc(n4) {
        return Y(n4) && ar2(n4.length) && !!B3[en2(n4)];
      }
      function Vs2(n4) {
        return typeof n4 == "function" ? n4 : n4 == null ? fn : typeof n4 == "object" ? O3(n4) ? nu2(n4[0], n4[1]) : js2(n4) : wa2(n4);
      }
      function jr2(n4) {
        if (!he2(n4))
          return Hf2(n4);
        var t = [];
        for (var e2 in M2(n4))
          F.call(n4, e2) && e2 != "constructor" && t.push(e2);
        return t;
      }
      function Dc(n4) {
        if (!K2(n4))
          return gh(n4);
        var t = he2(n4), e2 = [];
        for (var r2 in n4)
          r2 == "constructor" && (t || !F.call(n4, r2)) || e2.push(r2);
        return e2;
      }
      function ni(n4, t) {
        return n4 < t;
      }
      function ks2(n4, t) {
        var e2 = -1, r2 = an(n4) ? d4(n4.length) : [];
        return rt2(n4, function(s2, o3, f3) {
          r2[++e2] = t(s2, o3, f3);
        }), r2;
      }
      function js2(n4) {
        var t = gi2(n4);
        return t.length == 1 && t[0][2] ? Du2(t[0][0], t[0][1]) : function(e2) {
          return e2 === n4 || kr2(e2, n4, t);
        };
      }
      function nu2(n4, t) {
        return _i2(n4) && Lu(t) ? Du2(Wn2(n4), t) : function(e2) {
          var r2 = Si2(e2, n4);
          return r2 === i3 && r2 === t ? Oi2(e2, n4) : oe2(t, r2, Et2 | ve2);
        };
      }
      function Ke2(n4, t, e2, r2, s2) {
        n4 !== t && Jr2(t, function(o3, f3) {
          if (s2 || (s2 = new Rn()), K2(o3))
            Nc(n4, t, f3, e2, Ke2, r2, s2);
          else {
            var c2 = r2 ? r2(wi2(n4, f3), o3, f3 + "", n4, t, s2) : i3;
            c2 === i3 && (c2 = o3), Yr2(n4, f3, c2);
          }
        }, on);
      }
      function Nc(n4, t, e2, r2, s2, o3, f3) {
        var c2 = wi2(n4, e2), l2 = wi2(t, e2), v3 = f3.get(l2);
        if (v3) {
          Yr2(n4, e2, v3);
          return;
        }
        var _3 = o3 ? o3(c2, l2, e2 + "", n4, t, f3) : i3, m3 = _3 === i3;
        if (m3) {
          var P2 = O3(l2), I2 = !P2 && at2(l2), E3 = !P2 && !I2 && Bt2(l2);
          _3 = l2, P2 || I2 || E3 ? O3(c2) ? _3 = c2 : Z2(c2) ? _3 = un(c2) : I2 ? (m3 = false, _3 = lu2(l2, true)) : E3 ? (m3 = false, _3 = pu2(l2, true)) : _3 = [] : pe2(l2) || Pt2(l2) ? (_3 = c2, Pt2(c2) ? _3 = fa2(c2) : (!K2(c2) || Jn2(c2)) && (_3 = Tu(l2))) : m3 = false;
        }
        m3 && (f3.set(l2, _3), s2(_3, l2, r2, o3, f3), f3.delete(l2)), Yr2(n4, e2, _3);
      }
      function tu2(n4, t) {
        var e2 = n4.length;
        if (e2)
          return t += t < 0 ? e2 : 0, Zn(t, e2) ? n4[t] : i3;
      }
      function eu2(n4, t, e2) {
        t.length ? t = G(t, function(o3) {
          return O3(o3) ? function(f3) {
            return _t2(f3, o3.length === 1 ? o3[0] : o3);
          } : o3;
        }) : t = [fn];
        var r2 = -1;
        t = G(t, hn(x2()));
        var s2 = ks2(n4, function(o3, f3, c2) {
          var l2 = G(t, function(v3) {
            return v3(o3);
          });
          return { criteria: l2, index: ++r2, value: o3 };
        });
        return af2(s2, function(o3, f3) {
          return Zc(o3, f3, e2);
        });
      }
      function Hc(n4, t) {
        return ru2(n4, t, function(e2, r2) {
          return Oi2(n4, r2);
        });
      }
      function ru2(n4, t, e2) {
        for (var r2 = -1, s2 = t.length, o3 = {}; ++r2 < s2; ) {
          var f3 = t[r2], c2 = _t2(n4, f3);
          e2(c2, f3) && fe2(o3, st2(f3, n4), c2);
        }
        return o3;
      }
      function $c(n4) {
        return function(t) {
          return _t2(t, n4);
        };
      }
      function ti(n4, t, e2, r2) {
        var s2 = r2 ? uf2 : Tt2, o3 = -1, f3 = t.length, c2 = n4;
        for (n4 === t && (t = un(t)), e2 && (c2 = G(n4, hn(e2))); ++o3 < f3; )
          for (var l2 = 0, v3 = t[o3], _3 = e2 ? e2(v3) : v3; (l2 = s2(c2, _3, l2, r2)) > -1; )
            c2 !== n4 && He2.call(c2, l2, 1), He2.call(n4, l2, 1);
        return n4;
      }
      function iu2(n4, t) {
        for (var e2 = n4 ? t.length : 0, r2 = e2 - 1; e2--; ) {
          var s2 = t[e2];
          if (e2 == r2 || s2 !== o3) {
            var o3 = s2;
            Zn(s2) ? He2.call(n4, s2, 1) : si(n4, s2);
          }
        }
        return n4;
      }
      function ei(n4, t) {
        return n4 + We2(Ws2() * (t - n4 + 1));
      }
      function Uc(n4, t, e2, r2) {
        for (var s2 = -1, o3 = Q2(Ue2((t - n4) / (e2 || 1)), 0), f3 = d4(o3); o3--; )
          f3[r2 ? o3 : ++s2] = n4, n4 += e2;
        return f3;
      }
      function ri(n4, t) {
        var e2 = "";
        if (!n4 || t < 1 || t > kn2)
          return e2;
        do
          t % 2 && (e2 += n4), t = We2(t / 2), t && (n4 += n4);
        while (t);
        return e2;
      }
      function L4(n4, t) {
        return Pi2(Nu2(n4, t, fn), n4 + "");
      }
      function Wc(n4) {
        return qs2(Gt2(n4));
      }
      function Fc(n4, t) {
        var e2 = Gt2(n4);
        return tr2(e2, vt2(t, 0, e2.length));
      }
      function fe2(n4, t, e2, r2) {
        if (!K2(n4))
          return n4;
        t = st2(t, n4);
        for (var s2 = -1, o3 = t.length, f3 = o3 - 1, c2 = n4; c2 != null && ++s2 < o3; ) {
          var l2 = Wn2(t[s2]), v3 = e2;
          if (l2 === "__proto__" || l2 === "constructor" || l2 === "prototype")
            return n4;
          if (s2 != f3) {
            var _3 = c2[l2];
            v3 = r2 ? r2(_3, l2, c2) : i3, v3 === i3 && (v3 = K2(_3) ? _3 : Zn(t[s2 + 1]) ? [] : {});
          }
          se2(c2, l2, v3), c2 = c2[l2];
        }
        return n4;
      }
      var su = Fe2 ? function(n4, t) {
        return Fe2.set(n4, t), n4;
      } : fn, Mc = $e2 ? function(n4, t) {
        return $e2(n4, "toString", { configurable: true, enumerable: false, value: bi2(t), writable: true });
      } : fn;
      function qc(n4) {
        return tr2(Gt2(n4));
      }
      function Cn(n4, t, e2) {
        var r2 = -1, s2 = n4.length;
        t < 0 && (t = -t > s2 ? 0 : s2 + t), e2 = e2 > s2 ? s2 : e2, e2 < 0 && (e2 += s2), s2 = t > e2 ? 0 : e2 - t >>> 0, t >>>= 0;
        for (var o3 = d4(s2); ++r2 < s2; )
          o3[r2] = n4[r2 + t];
        return o3;
      }
      function Bc(n4, t) {
        var e2;
        return rt2(n4, function(r2, s2, o3) {
          return e2 = t(r2, s2, o3), !e2;
        }), !!e2;
      }
      function Ye2(n4, t, e2) {
        var r2 = 0, s2 = n4 == null ? r2 : n4.length;
        if (typeof t == "number" && t === t && s2 <= Ba2) {
          for (; r2 < s2; ) {
            var o3 = r2 + s2 >>> 1, f3 = n4[o3];
            f3 !== null && !pn(f3) && (e2 ? f3 <= t : f3 < t) ? r2 = o3 + 1 : s2 = o3;
          }
          return s2;
        }
        return ii(n4, t, fn, e2);
      }
      function ii(n4, t, e2, r2) {
        var s2 = 0, o3 = n4 == null ? 0 : n4.length;
        if (o3 === 0)
          return 0;
        t = e2(t);
        for (var f3 = t !== t, c2 = t === null, l2 = pn(t), v3 = t === i3; s2 < o3; ) {
          var _3 = We2((s2 + o3) / 2), m3 = e2(n4[_3]), P2 = m3 !== i3, I2 = m3 === null, E3 = m3 === m3, T2 = pn(m3);
          if (f3)
            var y3 = r2 || E3;
          else
            v3 ? y3 = E3 && (r2 || P2) : c2 ? y3 = E3 && P2 && (r2 || !I2) : l2 ? y3 = E3 && P2 && !I2 && (r2 || !T2) : I2 || T2 ? y3 = false : y3 = r2 ? m3 <= t : m3 < t;
          y3 ? s2 = _3 + 1 : o3 = _3;
        }
        return nn(o3, qa2);
      }
      function uu(n4, t) {
        for (var e2 = -1, r2 = n4.length, s2 = 0, o3 = []; ++e2 < r2; ) {
          var f3 = n4[e2], c2 = t ? t(f3) : f3;
          if (!e2 || !bn2(c2, l2)) {
            var l2 = c2;
            o3[s2++] = f3 === 0 ? 0 : f3;
          }
        }
        return o3;
      }
      function au(n4) {
        return typeof n4 == "number" ? n4 : pn(n4) ? _e2 : +n4;
      }
      function ln(n4) {
        if (typeof n4 == "string")
          return n4;
        if (O3(n4))
          return G(n4, ln) + "";
        if (pn(n4))
          return Fs2 ? Fs2.call(n4) : "";
        var t = n4 + "";
        return t == "0" && 1 / n4 == -ht2 ? "-0" : t;
      }
      function it2(n4, t, e2) {
        var r2 = -1, s2 = Ee2, o3 = n4.length, f3 = true, c2 = [], l2 = c2;
        if (e2)
          f3 = false, s2 = Dr2;
        else if (o3 >= w3) {
          var v3 = t ? null : jc(n4);
          if (v3)
            return Se2(v3);
          f3 = false, s2 = jt2, l2 = new gt2();
        } else
          l2 = t ? [] : c2;
        n:
          for (; ++r2 < o3; ) {
            var _3 = n4[r2], m3 = t ? t(_3) : _3;
            if (_3 = e2 || _3 !== 0 ? _3 : 0, f3 && m3 === m3) {
              for (var P2 = l2.length; P2--; )
                if (l2[P2] === m3)
                  continue n;
              t && l2.push(m3), c2.push(_3);
            } else
              s2(l2, m3, e2) || (l2 !== c2 && l2.push(m3), c2.push(_3));
          }
        return c2;
      }
      function si(n4, t) {
        return t = st2(t, n4), n4 = Hu(n4, t), n4 == null || delete n4[Wn2(In2(t))];
      }
      function ou2(n4, t, e2, r2) {
        return fe2(n4, t, e2(_t2(n4, t)), r2);
      }
      function Ze2(n4, t, e2, r2) {
        for (var s2 = n4.length, o3 = r2 ? s2 : -1; (r2 ? o3-- : ++o3 < s2) && t(n4[o3], o3, n4); )
          ;
        return e2 ? Cn(n4, r2 ? 0 : o3, r2 ? o3 + 1 : s2) : Cn(n4, r2 ? o3 + 1 : 0, r2 ? s2 : o3);
      }
      function fu2(n4, t) {
        var e2 = n4;
        return e2 instanceof H && (e2 = e2.value()), Nr2(t, function(r2, s2) {
          return s2.func.apply(s2.thisArg, nt2([r2], s2.args));
        }, e2);
      }
      function ui(n4, t, e2) {
        var r2 = n4.length;
        if (r2 < 2)
          return r2 ? it2(n4[0]) : [];
        for (var s2 = -1, o3 = d4(r2); ++s2 < r2; )
          for (var f3 = n4[s2], c2 = -1; ++c2 < r2; )
            c2 != s2 && (o3[s2] = ue2(o3[s2] || f3, n4[c2], t, e2));
        return it2(j2(o3, 1), t, e2);
      }
      function cu2(n4, t, e2) {
        for (var r2 = -1, s2 = n4.length, o3 = t.length, f3 = {}; ++r2 < s2; ) {
          var c2 = r2 < o3 ? t[r2] : i3;
          e2(f3, n4[r2], c2);
        }
        return f3;
      }
      function ai(n4) {
        return Z2(n4) ? n4 : [];
      }
      function oi(n4) {
        return typeof n4 == "function" ? n4 : fn;
      }
      function st2(n4, t) {
        return O3(n4) ? n4 : _i2(n4, t) ? [n4] : Fu(W(n4));
      }
      var Gc = L4;
      function ut2(n4, t, e2) {
        var r2 = n4.length;
        return e2 = e2 === i3 ? r2 : e2, !t && e2 >= r2 ? n4 : Cn(n4, t, e2);
      }
      var hu = bf2 || function(n4) {
        return k2.clearTimeout(n4);
      };
      function lu2(n4, t) {
        if (t)
          return n4.slice();
        var e2 = n4.length, r2 = Ds2 ? Ds2(e2) : new n4.constructor(e2);
        return n4.copy(r2), r2;
      }
      function fi(n4) {
        var t = new n4.constructor(n4.byteLength);
        return new De2(t).set(new De2(n4)), t;
      }
      function zc(n4, t) {
        var e2 = t ? fi(n4.buffer) : n4.buffer;
        return new n4.constructor(e2, n4.byteOffset, n4.byteLength);
      }
      function Kc(n4) {
        var t = new n4.constructor(n4.source, Xi2.exec(n4));
        return t.lastIndex = n4.lastIndex, t;
      }
      function Yc(n4) {
        return ie3 ? M2(ie3.call(n4)) : {};
      }
      function pu2(n4, t) {
        var e2 = t ? fi(n4.buffer) : n4.buffer;
        return new n4.constructor(e2, n4.byteOffset, n4.length);
      }
      function du2(n4, t) {
        if (n4 !== t) {
          var e2 = n4 !== i3, r2 = n4 === null, s2 = n4 === n4, o3 = pn(n4), f3 = t !== i3, c2 = t === null, l2 = t === t, v3 = pn(t);
          if (!c2 && !v3 && !o3 && n4 > t || o3 && f3 && l2 && !c2 && !v3 || r2 && f3 && l2 || !e2 && l2 || !s2)
            return 1;
          if (!r2 && !o3 && !v3 && n4 < t || v3 && e2 && s2 && !r2 && !o3 || c2 && e2 && s2 || !f3 && s2 || !l2)
            return -1;
        }
        return 0;
      }
      function Zc(n4, t, e2) {
        for (var r2 = -1, s2 = n4.criteria, o3 = t.criteria, f3 = s2.length, c2 = e2.length; ++r2 < f3; ) {
          var l2 = du2(s2[r2], o3[r2]);
          if (l2) {
            if (r2 >= c2)
              return l2;
            var v3 = e2[r2];
            return l2 * (v3 == "desc" ? -1 : 1);
          }
        }
        return n4.index - t.index;
      }
      function gu2(n4, t, e2, r2) {
        for (var s2 = -1, o3 = n4.length, f3 = e2.length, c2 = -1, l2 = t.length, v3 = Q2(o3 - f3, 0), _3 = d4(l2 + v3), m3 = !r2; ++c2 < l2; )
          _3[c2] = t[c2];
        for (; ++s2 < f3; )
          (m3 || s2 < o3) && (_3[e2[s2]] = n4[s2]);
        for (; v3--; )
          _3[c2++] = n4[s2++];
        return _3;
      }
      function vu2(n4, t, e2, r2) {
        for (var s2 = -1, o3 = n4.length, f3 = -1, c2 = e2.length, l2 = -1, v3 = t.length, _3 = Q2(o3 - c2, 0), m3 = d4(_3 + v3), P2 = !r2; ++s2 < _3; )
          m3[s2] = n4[s2];
        for (var I2 = s2; ++l2 < v3; )
          m3[I2 + l2] = t[l2];
        for (; ++f3 < c2; )
          (P2 || s2 < o3) && (m3[I2 + e2[f3]] = n4[s2++]);
        return m3;
      }
      function un(n4, t) {
        var e2 = -1, r2 = n4.length;
        for (t || (t = d4(r2)); ++e2 < r2; )
          t[e2] = n4[e2];
        return t;
      }
      function Un2(n4, t, e2, r2) {
        var s2 = !e2;
        e2 || (e2 = {});
        for (var o3 = -1, f3 = t.length; ++o3 < f3; ) {
          var c2 = t[o3], l2 = r2 ? r2(e2[c2], n4[c2], c2, e2, n4) : i3;
          l2 === i3 && (l2 = n4[c2]), s2 ? zn2(e2, c2, l2) : se2(e2, c2, l2);
        }
        return e2;
      }
      function Jc(n4, t) {
        return Un2(n4, vi2(n4), t);
      }
      function Xc(n4, t) {
        return Un2(n4, Ru2(n4), t);
      }
      function Je2(n4, t) {
        return function(e2, r2) {
          var s2 = O3(e2) ? jo : _c, o3 = t ? t() : {};
          return s2(e2, n4, x2(r2, 2), o3);
        };
      }
      function Ft2(n4) {
        return L4(function(t, e2) {
          var r2 = -1, s2 = e2.length, o3 = s2 > 1 ? e2[s2 - 1] : i3, f3 = s2 > 2 ? e2[2] : i3;
          for (o3 = n4.length > 3 && typeof o3 == "function" ? (s2--, o3) : i3, f3 && rn2(e2[0], e2[1], f3) && (o3 = s2 < 3 ? i3 : o3, s2 = 1), t = M2(t); ++r2 < s2; ) {
            var c2 = e2[r2];
            c2 && n4(t, c2, r2, o3);
          }
          return t;
        });
      }
      function _u2(n4, t) {
        return function(e2, r2) {
          if (e2 == null)
            return e2;
          if (!an(e2))
            return n4(e2, r2);
          for (var s2 = e2.length, o3 = t ? s2 : -1, f3 = M2(e2); (t ? o3-- : ++o3 < s2) && r2(f3[o3], o3, f3) !== false; )
            ;
          return e2;
        };
      }
      function mu2(n4) {
        return function(t, e2, r2) {
          for (var s2 = -1, o3 = M2(t), f3 = r2(t), c2 = f3.length; c2--; ) {
            var l2 = f3[n4 ? c2 : ++s2];
            if (e2(o3[l2], l2, o3) === false)
              break;
          }
          return t;
        };
      }
      function Qc(n4, t, e2) {
        var r2 = t & vn, s2 = ce2(n4);
        function o3() {
          var f3 = this && this !== k2 && this instanceof o3 ? s2 : n4;
          return f3.apply(r2 ? e2 : this, arguments);
        }
        return o3;
      }
      function wu2(n4) {
        return function(t) {
          t = W(t);
          var e2 = Lt2(t) ? On2(t) : i3, r2 = e2 ? e2[0] : t.charAt(0), s2 = e2 ? ut2(e2, 1).join("") : t.slice(1);
          return r2[n4]() + s2;
        };
      }
      function Mt2(n4) {
        return function(t) {
          return Nr2(_a2(va2(t).replace(Fo, "")), n4, "");
        };
      }
      function ce2(n4) {
        return function() {
          var t = arguments;
          switch (t.length) {
            case 0:
              return new n4();
            case 1:
              return new n4(t[0]);
            case 2:
              return new n4(t[0], t[1]);
            case 3:
              return new n4(t[0], t[1], t[2]);
            case 4:
              return new n4(t[0], t[1], t[2], t[3]);
            case 5:
              return new n4(t[0], t[1], t[2], t[3], t[4]);
            case 6:
              return new n4(t[0], t[1], t[2], t[3], t[4], t[5]);
            case 7:
              return new n4(t[0], t[1], t[2], t[3], t[4], t[5], t[6]);
          }
          var e2 = Wt2(n4.prototype), r2 = n4.apply(e2, t);
          return K2(r2) ? r2 : e2;
        };
      }
      function Vc(n4, t, e2) {
        var r2 = ce2(n4);
        function s2() {
          for (var o3 = arguments.length, f3 = d4(o3), c2 = o3, l2 = qt2(s2); c2--; )
            f3[c2] = arguments[c2];
          var v3 = o3 < 3 && f3[0] !== l2 && f3[o3 - 1] !== l2 ? [] : tt2(f3, l2);
          if (o3 -= v3.length, o3 < e2)
            return xu2(n4, t, Xe2, s2.placeholder, i3, f3, v3, i3, i3, e2 - o3);
          var _3 = this && this !== k2 && this instanceof s2 ? r2 : n4;
          return cn(_3, this, f3);
        }
        return s2;
      }
      function Pu2(n4) {
        return function(t, e2, r2) {
          var s2 = M2(t);
          if (!an(t)) {
            var o3 = x2(e2, 3);
            t = V3(t), e2 = function(c2) {
              return o3(s2[c2], c2, s2);
            };
          }
          var f3 = n4(t, e2, r2);
          return f3 > -1 ? s2[o3 ? t[f3] : f3] : i3;
        };
      }
      function Au2(n4) {
        return Yn2(function(t) {
          var e2 = t.length, r2 = e2, s2 = Pn2.prototype.thru;
          for (n4 && t.reverse(); r2--; ) {
            var o3 = t[r2];
            if (typeof o3 != "function")
              throw new wn2(D2);
            if (s2 && !f3 && je2(o3) == "wrapper")
              var f3 = new Pn2([], true);
          }
          for (r2 = f3 ? r2 : e2; ++r2 < e2; ) {
            o3 = t[r2];
            var c2 = je2(o3), l2 = c2 == "wrapper" ? di(o3) : i3;
            l2 && mi(l2[0]) && l2[1] == (Mn | Dn2 | Nn2 | Kt2) && !l2[4].length && l2[9] == 1 ? f3 = f3[je2(l2[0])].apply(f3, l2[3]) : f3 = o3.length == 1 && mi(o3) ? f3[c2]() : f3.thru(o3);
          }
          return function() {
            var v3 = arguments, _3 = v3[0];
            if (f3 && v3.length == 1 && O3(_3))
              return f3.plant(_3).value();
            for (var m3 = 0, P2 = e2 ? t[m3].apply(this, v3) : _3; ++m3 < e2; )
              P2 = t[m3].call(this, P2);
            return P2;
          };
        });
      }
      function Xe2(n4, t, e2, r2, s2, o3, f3, c2, l2, v3) {
        var _3 = t & Mn, m3 = t & vn, P2 = t & ct2, I2 = t & (Dn2 | yt2), E3 = t & dr3, T2 = P2 ? i3 : ce2(n4);
        function y3() {
          for (var N2 = arguments.length, $2 = d4(N2), dn2 = N2; dn2--; )
            $2[dn2] = arguments[dn2];
          if (I2)
            var sn = qt2(y3), gn = ff2($2, sn);
          if (r2 && ($2 = gu2($2, r2, s2, I2)), o3 && ($2 = vu2($2, o3, f3, I2)), N2 -= gn, I2 && N2 < v3) {
            var J2 = tt2($2, sn);
            return xu2(n4, t, Xe2, y3.placeholder, e2, $2, J2, c2, l2, v3 - N2);
          }
          var Tn2 = m3 ? e2 : this, Qn2 = P2 ? Tn2[n4] : n4;
          return N2 = $2.length, c2 ? $2 = _h($2, c2) : E3 && N2 > 1 && $2.reverse(), _3 && l2 < N2 && ($2.length = l2), this && this !== k2 && this instanceof y3 && (Qn2 = T2 || ce2(Qn2)), Qn2.apply(Tn2, $2);
        }
        return y3;
      }
      function Cu2(n4, t) {
        return function(e2, r2) {
          return Ec(e2, n4, t(r2), {});
        };
      }
      function Qe2(n4, t) {
        return function(e2, r2) {
          var s2;
          if (e2 === i3 && r2 === i3)
            return t;
          if (e2 !== i3 && (s2 = e2), r2 !== i3) {
            if (s2 === i3)
              return r2;
            typeof e2 == "string" || typeof r2 == "string" ? (e2 = ln(e2), r2 = ln(r2)) : (e2 = au(e2), r2 = au(r2)), s2 = n4(e2, r2);
          }
          return s2;
        };
      }
      function ci(n4) {
        return Yn2(function(t) {
          return t = G(t, hn(x2())), L4(function(e2) {
            var r2 = this;
            return n4(t, function(s2) {
              return cn(s2, r2, e2);
            });
          });
        });
      }
      function Ve2(n4, t) {
        t = t === i3 ? " " : ln(t);
        var e2 = t.length;
        if (e2 < 2)
          return e2 ? ri(t, n4) : t;
        var r2 = ri(t, Ue2(n4 / Dt2(t)));
        return Lt2(t) ? ut2(On2(r2), 0, n4).join("") : r2.slice(0, n4);
      }
      function kc(n4, t, e2, r2) {
        var s2 = t & vn, o3 = ce2(n4);
        function f3() {
          for (var c2 = -1, l2 = arguments.length, v3 = -1, _3 = r2.length, m3 = d4(_3 + l2), P2 = this && this !== k2 && this instanceof f3 ? o3 : n4; ++v3 < _3; )
            m3[v3] = r2[v3];
          for (; l2--; )
            m3[v3++] = arguments[++c2];
          return cn(P2, s2 ? e2 : this, m3);
        }
        return f3;
      }
      function Iu2(n4) {
        return function(t, e2, r2) {
          return r2 && typeof r2 != "number" && rn2(t, e2, r2) && (e2 = r2 = i3), t = Xn2(t), e2 === i3 ? (e2 = t, t = 0) : e2 = Xn2(e2), r2 = r2 === i3 ? t < e2 ? 1 : -1 : Xn2(r2), Uc(t, e2, r2, n4);
        };
      }
      function ke2(n4) {
        return function(t, e2) {
          return typeof t == "string" && typeof e2 == "string" || (t = xn2(t), e2 = xn2(e2)), n4(t, e2);
        };
      }
      function xu2(n4, t, e2, r2, s2, o3, f3, c2, l2, v3) {
        var _3 = t & Dn2, m3 = _3 ? f3 : i3, P2 = _3 ? i3 : f3, I2 = _3 ? o3 : i3, E3 = _3 ? i3 : o3;
        t |= _3 ? Nn2 : St2, t &= ~(_3 ? St2 : Nn2), t & Bi2 || (t &= ~(vn | ct2));
        var T2 = [n4, t, s2, I2, m3, E3, P2, c2, l2, v3], y3 = e2.apply(i3, T2);
        return mi(n4) && $u2(y3, T2), y3.placeholder = r2, Uu(y3, n4, t);
      }
      function hi(n4) {
        var t = X2[n4];
        return function(e2, r2) {
          if (e2 = xn2(e2), r2 = r2 == null ? 0 : nn(R(r2), 292), r2 && Us2(e2)) {
            var s2 = (W(e2) + "e").split("e"), o3 = t(s2[0] + "e" + (+s2[1] + r2));
            return s2 = (W(o3) + "e").split("e"), +(s2[0] + "e" + (+s2[1] - r2));
          }
          return t(e2);
        };
      }
      var jc = $t2 && 1 / Se2(new $t2([, -0]))[1] == ht2 ? function(n4) {
        return new $t2(n4);
      } : Di2;
      function Eu2(n4) {
        return function(t) {
          var e2 = tn2(t);
          return e2 == yn2 ? qr2(t) : e2 == Sn2 ? vf2(t) : of2(t, n4(t));
        };
      }
      function Kn2(n4, t, e2, r2, s2, o3, f3, c2) {
        var l2 = t & ct2;
        if (!l2 && typeof n4 != "function")
          throw new wn2(D2);
        var v3 = r2 ? r2.length : 0;
        if (v3 || (t &= ~(Nn2 | St2), r2 = s2 = i3), f3 = f3 === i3 ? f3 : Q2(R(f3), 0), c2 = c2 === i3 ? c2 : R(c2), v3 -= s2 ? s2.length : 0, t & St2) {
          var _3 = r2, m3 = s2;
          r2 = s2 = i3;
        }
        var P2 = l2 ? i3 : di(n4), I2 = [n4, t, e2, r2, s2, _3, m3, o3, f3, c2];
        if (P2 && dh(I2, P2), n4 = I2[0], t = I2[1], e2 = I2[2], r2 = I2[3], s2 = I2[4], c2 = I2[9] = I2[9] === i3 ? l2 ? 0 : n4.length : Q2(I2[9] - v3, 0), !c2 && t & (Dn2 | yt2) && (t &= ~(Dn2 | yt2)), !t || t == vn)
          var E3 = Qc(n4, t, e2);
        else
          t == Dn2 || t == yt2 ? E3 = Vc(n4, t, c2) : (t == Nn2 || t == (vn | Nn2)) && !s2.length ? E3 = kc(n4, t, e2, r2) : E3 = Xe2.apply(i3, I2);
        var T2 = P2 ? su : $u2;
        return Uu(T2(E3, I2), n4, t);
      }
      function yu2(n4, t, e2, r2) {
        return n4 === i3 || bn2(n4, Ht2[e2]) && !F.call(r2, e2) ? t : n4;
      }
      function Su2(n4, t, e2, r2, s2, o3) {
        return K2(n4) && K2(t) && (o3.set(t, n4), Ke2(n4, t, i3, Su2, o3), o3.delete(t)), n4;
      }
      function nh2(n4) {
        return pe2(n4) ? i3 : n4;
      }
      function Ou2(n4, t, e2, r2, s2, o3) {
        var f3 = e2 & Et2, c2 = n4.length, l2 = t.length;
        if (c2 != l2 && !(f3 && l2 > c2))
          return false;
        var v3 = o3.get(n4), _3 = o3.get(t);
        if (v3 && _3)
          return v3 == t && _3 == n4;
        var m3 = -1, P2 = true, I2 = e2 & ve2 ? new gt2() : i3;
        for (o3.set(n4, t), o3.set(t, n4); ++m3 < c2; ) {
          var E3 = n4[m3], T2 = t[m3];
          if (r2)
            var y3 = f3 ? r2(T2, E3, m3, t, n4, o3) : r2(E3, T2, m3, n4, t, o3);
          if (y3 !== i3) {
            if (y3)
              continue;
            P2 = false;
            break;
          }
          if (I2) {
            if (!Hr2(t, function(N2, $2) {
              if (!jt2(I2, $2) && (E3 === N2 || s2(E3, N2, e2, r2, o3)))
                return I2.push($2);
            })) {
              P2 = false;
              break;
            }
          } else if (!(E3 === T2 || s2(E3, T2, e2, r2, o3))) {
            P2 = false;
            break;
          }
        }
        return o3.delete(n4), o3.delete(t), P2;
      }
      function th2(n4, t, e2, r2, s2, o3, f3) {
        switch (e2) {
          case Rt2:
            if (n4.byteLength != t.byteLength || n4.byteOffset != t.byteOffset)
              return false;
            n4 = n4.buffer, t = t.buffer;
          case kt2:
            return !(n4.byteLength != t.byteLength || !o3(new De2(n4), new De2(t)));
          case Yt3:
          case Zt2:
          case Jt2:
            return bn2(+n4, +t);
          case we2:
            return n4.name == t.name && n4.message == t.message;
          case Xt2:
          case Qt2:
            return n4 == t + "";
          case yn2:
            var c2 = qr2;
          case Sn2:
            var l2 = r2 & Et2;
            if (c2 || (c2 = Se2), n4.size != t.size && !l2)
              return false;
            var v3 = f3.get(n4);
            if (v3)
              return v3 == t;
            r2 |= ve2, f3.set(n4, t);
            var _3 = Ou2(c2(n4), c2(t), r2, s2, o3, f3);
            return f3.delete(n4), _3;
          case Ae2:
            if (ie3)
              return ie3.call(n4) == ie3.call(t);
        }
        return false;
      }
      function eh2(n4, t, e2, r2, s2, o3) {
        var f3 = e2 & Et2, c2 = li(n4), l2 = c2.length, v3 = li(t), _3 = v3.length;
        if (l2 != _3 && !f3)
          return false;
        for (var m3 = l2; m3--; ) {
          var P2 = c2[m3];
          if (!(f3 ? P2 in t : F.call(t, P2)))
            return false;
        }
        var I2 = o3.get(n4), E3 = o3.get(t);
        if (I2 && E3)
          return I2 == t && E3 == n4;
        var T2 = true;
        o3.set(n4, t), o3.set(t, n4);
        for (var y3 = f3; ++m3 < l2; ) {
          P2 = c2[m3];
          var N2 = n4[P2], $2 = t[P2];
          if (r2)
            var dn2 = f3 ? r2($2, N2, P2, t, n4, o3) : r2(N2, $2, P2, n4, t, o3);
          if (!(dn2 === i3 ? N2 === $2 || s2(N2, $2, e2, r2, o3) : dn2)) {
            T2 = false;
            break;
          }
          y3 || (y3 = P2 == "constructor");
        }
        if (T2 && !y3) {
          var sn = n4.constructor, gn = t.constructor;
          sn != gn && "constructor" in n4 && "constructor" in t && !(typeof sn == "function" && sn instanceof sn && typeof gn == "function" && gn instanceof gn) && (T2 = false);
        }
        return o3.delete(n4), o3.delete(t), T2;
      }
      function Yn2(n4) {
        return Pi2(Nu2(n4, i3, Gu2), n4 + "");
      }
      function li(n4) {
        return Js2(n4, V3, vi2);
      }
      function pi2(n4) {
        return Js2(n4, on, Ru2);
      }
      var di = Fe2 ? function(n4) {
        return Fe2.get(n4);
      } : Di2;
      function je2(n4) {
        for (var t = n4.name + "", e2 = Ut3[t], r2 = F.call(Ut3, t) ? e2.length : 0; r2--; ) {
          var s2 = e2[r2], o3 = s2.func;
          if (o3 == null || o3 == n4)
            return s2.name;
        }
        return t;
      }
      function qt2(n4) {
        var t = F.call(a3, "placeholder") ? a3 : n4;
        return t.placeholder;
      }
      function x2() {
        var n4 = a3.iteratee || Ti2;
        return n4 = n4 === Ti2 ? Vs2 : n4, arguments.length ? n4(arguments[0], arguments[1]) : n4;
      }
      function nr2(n4, t) {
        var e2 = n4.__data__;
        return ch2(t) ? e2[typeof t == "string" ? "string" : "hash"] : e2.map;
      }
      function gi2(n4) {
        for (var t = V3(n4), e2 = t.length; e2--; ) {
          var r2 = t[e2], s2 = n4[r2];
          t[e2] = [r2, s2, Lu(s2)];
        }
        return t;
      }
      function mt2(n4, t) {
        var e2 = pf2(n4, t);
        return Qs2(e2) ? e2 : i3;
      }
      function rh2(n4) {
        var t = F.call(n4, pt2), e2 = n4[pt2];
        try {
          n4[pt2] = i3;
          var r2 = true;
        } catch {
        }
        var s2 = Te.call(n4);
        return r2 && (t ? n4[pt2] = e2 : delete n4[pt2]), s2;
      }
      var vi2 = Gr2 ? function(n4) {
        return n4 == null ? [] : (n4 = M2(n4), jn2(Gr2(n4), function(t) {
          return Hs2.call(n4, t);
        }));
      } : Ni2, Ru2 = Gr2 ? function(n4) {
        for (var t = []; n4; )
          nt2(t, vi2(n4)), n4 = Ne(n4);
        return t;
      } : Ni2, tn2 = en2;
      (zr2 && tn2(new zr2(new ArrayBuffer(1))) != Rt2 || te2 && tn2(new te2()) != yn2 || Kr2 && tn2(Kr2.resolve()) != Ki2 || $t2 && tn2(new $t2()) != Sn2 || ee2 && tn2(new ee2()) != Vt2) && (tn2 = function(n4) {
        var t = en2(n4), e2 = t == qn2 ? n4.constructor : i3, r2 = e2 ? wt2(e2) : "";
        if (r2)
          switch (r2) {
            case Ff2:
              return Rt2;
            case Mf2:
              return yn2;
            case qf2:
              return Ki2;
            case Bf2:
              return Sn2;
            case Gf2:
              return Vt2;
          }
        return t;
      });
      function ih2(n4, t, e2) {
        for (var r2 = -1, s2 = e2.length; ++r2 < s2; ) {
          var o3 = e2[r2], f3 = o3.size;
          switch (o3.type) {
            case "drop":
              n4 += f3;
              break;
            case "dropRight":
              t -= f3;
              break;
            case "take":
              t = nn(t, n4 + f3);
              break;
            case "takeRight":
              n4 = Q2(n4, t - f3);
              break;
          }
        }
        return { start: n4, end: t };
      }
      function sh2(n4) {
        var t = n4.match(fo2);
        return t ? t[1].split(co2) : [];
      }
      function bu2(n4, t, e2) {
        t = st2(t, n4);
        for (var r2 = -1, s2 = t.length, o3 = false; ++r2 < s2; ) {
          var f3 = Wn2(t[r2]);
          if (!(o3 = n4 != null && e2(n4, f3)))
            break;
          n4 = n4[f3];
        }
        return o3 || ++r2 != s2 ? o3 : (s2 = n4 == null ? 0 : n4.length, !!s2 && ar2(s2) && Zn(f3, s2) && (O3(n4) || Pt2(n4)));
      }
      function uh2(n4) {
        var t = n4.length, e2 = new n4.constructor(t);
        return t && typeof n4[0] == "string" && F.call(n4, "index") && (e2.index = n4.index, e2.input = n4.input), e2;
      }
      function Tu(n4) {
        return typeof n4.constructor == "function" && !he2(n4) ? Wt2(Ne(n4)) : {};
      }
      function ah2(n4, t, e2) {
        var r2 = n4.constructor;
        switch (t) {
          case kt2:
            return fi(n4);
          case Yt3:
          case Zt2:
            return new r2(+n4);
          case Rt2:
            return zc(n4, e2);
          case gr2:
          case vr2:
          case _r2:
          case mr2:
          case wr2:
          case Pr2:
          case Ar2:
          case Cr2:
          case Ir2:
            return pu2(n4, e2);
          case yn2:
            return new r2();
          case Jt2:
          case Qt2:
            return new r2(n4);
          case Xt2:
            return Kc(n4);
          case Sn2:
            return new r2();
          case Ae2:
            return Yc(n4);
        }
      }
      function oh2(n4, t) {
        var e2 = t.length;
        if (!e2)
          return n4;
        var r2 = e2 - 1;
        return t[r2] = (e2 > 1 ? "& " : "") + t[r2], t = t.join(e2 > 2 ? ", " : " "), n4.replace(oo2, `{
/* [wrapped with ` + t + `] */
`);
      }
      function fh2(n4) {
        return O3(n4) || Pt2(n4) || !!($s2 && n4 && n4[$s2]);
      }
      function Zn(n4, t) {
        var e2 = typeof n4;
        return t = t ?? kn2, !!t && (e2 == "number" || e2 != "symbol" && Po2.test(n4)) && n4 > -1 && n4 % 1 == 0 && n4 < t;
      }
      function rn2(n4, t, e2) {
        if (!K2(e2))
          return false;
        var r2 = typeof t;
        return (r2 == "number" ? an(e2) && Zn(t, e2.length) : r2 == "string" && t in e2) ? bn2(e2[t], n4) : false;
      }
      function _i2(n4, t) {
        if (O3(n4))
          return false;
        var e2 = typeof n4;
        return e2 == "number" || e2 == "symbol" || e2 == "boolean" || n4 == null || pn(n4) ? true : io2.test(n4) || !ro2.test(n4) || t != null && n4 in M2(t);
      }
      function ch2(n4) {
        var t = typeof n4;
        return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? n4 !== "__proto__" : n4 === null;
      }
      function mi(n4) {
        var t = je2(n4), e2 = a3[t];
        if (typeof e2 != "function" || !(t in H.prototype))
          return false;
        if (n4 === e2)
          return true;
        var r2 = di(e2);
        return !!r2 && n4 === r2[0];
      }
      function hh2(n4) {
        return !!Ls2 && Ls2 in n4;
      }
      var lh2 = Re2 ? Jn2 : Hi2;
      function he2(n4) {
        var t = n4 && n4.constructor, e2 = typeof t == "function" && t.prototype || Ht2;
        return n4 === e2;
      }
      function Lu(n4) {
        return n4 === n4 && !K2(n4);
      }
      function Du2(n4, t) {
        return function(e2) {
          return e2 == null ? false : e2[n4] === t && (t !== i3 || n4 in M2(e2));
        };
      }
      function ph(n4) {
        var t = sr2(n4, function(r2) {
          return e2.size === pr2 && e2.clear(), r2;
        }), e2 = t.cache;
        return t;
      }
      function dh(n4, t) {
        var e2 = n4[1], r2 = t[1], s2 = e2 | r2, o3 = s2 < (vn | ct2 | Mn), f3 = r2 == Mn && e2 == Dn2 || r2 == Mn && e2 == Kt2 && n4[7].length <= t[8] || r2 == (Mn | Kt2) && t[7].length <= t[8] && e2 == Dn2;
        if (!(o3 || f3))
          return n4;
        r2 & vn && (n4[2] = t[2], s2 |= e2 & vn ? 0 : Bi2);
        var c2 = t[3];
        if (c2) {
          var l2 = n4[3];
          n4[3] = l2 ? gu2(l2, c2, t[4]) : c2, n4[4] = l2 ? tt2(n4[3], It2) : t[4];
        }
        return c2 = t[5], c2 && (l2 = n4[5], n4[5] = l2 ? vu2(l2, c2, t[6]) : c2, n4[6] = l2 ? tt2(n4[5], It2) : t[6]), c2 = t[7], c2 && (n4[7] = c2), r2 & Mn && (n4[8] = n4[8] == null ? t[8] : nn(n4[8], t[8])), n4[9] == null && (n4[9] = t[9]), n4[0] = t[0], n4[1] = s2, n4;
      }
      function gh(n4) {
        var t = [];
        if (n4 != null)
          for (var e2 in M2(n4))
            t.push(e2);
        return t;
      }
      function vh(n4) {
        return Te.call(n4);
      }
      function Nu2(n4, t, e2) {
        return t = Q2(t === i3 ? n4.length - 1 : t, 0), function() {
          for (var r2 = arguments, s2 = -1, o3 = Q2(r2.length - t, 0), f3 = d4(o3); ++s2 < o3; )
            f3[s2] = r2[t + s2];
          s2 = -1;
          for (var c2 = d4(t + 1); ++s2 < t; )
            c2[s2] = r2[s2];
          return c2[t] = e2(f3), cn(n4, this, c2);
        };
      }
      function Hu(n4, t) {
        return t.length < 2 ? n4 : _t2(n4, Cn(t, 0, -1));
      }
      function _h(n4, t) {
        for (var e2 = n4.length, r2 = nn(t.length, e2), s2 = un(n4); r2--; ) {
          var o3 = t[r2];
          n4[r2] = Zn(o3, e2) ? s2[o3] : i3;
        }
        return n4;
      }
      function wi2(n4, t) {
        if (!(t === "constructor" && typeof n4[t] == "function") && t != "__proto__")
          return n4[t];
      }
      var $u2 = Wu2(su), le2 = Lf || function(n4, t) {
        return k2.setTimeout(n4, t);
      }, Pi2 = Wu2(Mc);
      function Uu(n4, t, e2) {
        var r2 = t + "";
        return Pi2(n4, oh2(r2, mh(sh2(r2), e2)));
      }
      function Wu2(n4) {
        var t = 0, e2 = 0;
        return function() {
          var r2 = $f2(), s2 = Ua2 - (r2 - e2);
          if (e2 = r2, s2 > 0) {
            if (++t >= $a2)
              return arguments[0];
          } else
            t = 0;
          return n4.apply(i3, arguments);
        };
      }
      function tr2(n4, t) {
        var e2 = -1, r2 = n4.length, s2 = r2 - 1;
        for (t = t === i3 ? r2 : t; ++e2 < t; ) {
          var o3 = ei(e2, s2), f3 = n4[o3];
          n4[o3] = n4[e2], n4[e2] = f3;
        }
        return n4.length = t, n4;
      }
      var Fu = ph(function(n4) {
        var t = [];
        return n4.charCodeAt(0) === 46 && t.push(""), n4.replace(so2, function(e2, r2, s2, o3) {
          t.push(s2 ? o3.replace(po2, "$1") : r2 || e2);
        }), t;
      });
      function Wn2(n4) {
        if (typeof n4 == "string" || pn(n4))
          return n4;
        var t = n4 + "";
        return t == "0" && 1 / n4 == -ht2 ? "-0" : t;
      }
      function wt2(n4) {
        if (n4 != null) {
          try {
            return be2.call(n4);
          } catch {
          }
          try {
            return n4 + "";
          } catch {
          }
        }
        return "";
      }
      function mh(n4, t) {
        return mn(Ga2, function(e2) {
          var r2 = "_." + e2[0];
          t & e2[1] && !Ee2(n4, r2) && n4.push(r2);
        }), n4.sort();
      }
      function Mu2(n4) {
        if (n4 instanceof H)
          return n4.clone();
        var t = new Pn2(n4.__wrapped__, n4.__chain__);
        return t.__actions__ = un(n4.__actions__), t.__index__ = n4.__index__, t.__values__ = n4.__values__, t;
      }
      function wh(n4, t, e2) {
        (e2 ? rn2(n4, t, e2) : t === i3) ? t = 1 : t = Q2(R(t), 0);
        var r2 = n4 == null ? 0 : n4.length;
        if (!r2 || t < 1)
          return [];
        for (var s2 = 0, o3 = 0, f3 = d4(Ue2(r2 / t)); s2 < r2; )
          f3[o3++] = Cn(n4, s2, s2 += t);
        return f3;
      }
      function Ph(n4) {
        for (var t = -1, e2 = n4 == null ? 0 : n4.length, r2 = 0, s2 = []; ++t < e2; ) {
          var o3 = n4[t];
          o3 && (s2[r2++] = o3);
        }
        return s2;
      }
      function Ah() {
        var n4 = arguments.length;
        if (!n4)
          return [];
        for (var t = d4(n4 - 1), e2 = arguments[0], r2 = n4; r2--; )
          t[r2 - 1] = arguments[r2];
        return nt2(O3(e2) ? un(e2) : [e2], j2(t, 1));
      }
      var Ch = L4(function(n4, t) {
        return Z2(n4) ? ue2(n4, j2(t, 1, Z2, true)) : [];
      }), Ih = L4(function(n4, t) {
        var e2 = In2(t);
        return Z2(e2) && (e2 = i3), Z2(n4) ? ue2(n4, j2(t, 1, Z2, true), x2(e2, 2)) : [];
      }), xh = L4(function(n4, t) {
        var e2 = In2(t);
        return Z2(e2) && (e2 = i3), Z2(n4) ? ue2(n4, j2(t, 1, Z2, true), i3, e2) : [];
      });
      function Eh(n4, t, e2) {
        var r2 = n4 == null ? 0 : n4.length;
        return r2 ? (t = e2 || t === i3 ? 1 : R(t), Cn(n4, t < 0 ? 0 : t, r2)) : [];
      }
      function yh(n4, t, e2) {
        var r2 = n4 == null ? 0 : n4.length;
        return r2 ? (t = e2 || t === i3 ? 1 : R(t), t = r2 - t, Cn(n4, 0, t < 0 ? 0 : t)) : [];
      }
      function Sh(n4, t) {
        return n4 && n4.length ? Ze2(n4, x2(t, 3), true, true) : [];
      }
      function Oh(n4, t) {
        return n4 && n4.length ? Ze2(n4, x2(t, 3), true) : [];
      }
      function Rh(n4, t, e2, r2) {
        var s2 = n4 == null ? 0 : n4.length;
        return s2 ? (e2 && typeof e2 != "number" && rn2(n4, t, e2) && (e2 = 0, r2 = s2), Ac(n4, t, e2, r2)) : [];
      }
      function qu(n4, t, e2) {
        var r2 = n4 == null ? 0 : n4.length;
        if (!r2)
          return -1;
        var s2 = e2 == null ? 0 : R(e2);
        return s2 < 0 && (s2 = Q2(r2 + s2, 0)), ye2(n4, x2(t, 3), s2);
      }
      function Bu2(n4, t, e2) {
        var r2 = n4 == null ? 0 : n4.length;
        if (!r2)
          return -1;
        var s2 = r2 - 1;
        return e2 !== i3 && (s2 = R(e2), s2 = e2 < 0 ? Q2(r2 + s2, 0) : nn(s2, r2 - 1)), ye2(n4, x2(t, 3), s2, true);
      }
      function Gu2(n4) {
        var t = n4 == null ? 0 : n4.length;
        return t ? j2(n4, 1) : [];
      }
      function bh(n4) {
        var t = n4 == null ? 0 : n4.length;
        return t ? j2(n4, ht2) : [];
      }
      function Th(n4, t) {
        var e2 = n4 == null ? 0 : n4.length;
        return e2 ? (t = t === i3 ? 1 : R(t), j2(n4, t)) : [];
      }
      function Lh(n4) {
        for (var t = -1, e2 = n4 == null ? 0 : n4.length, r2 = {}; ++t < e2; ) {
          var s2 = n4[t];
          r2[s2[0]] = s2[1];
        }
        return r2;
      }
      function zu(n4) {
        return n4 && n4.length ? n4[0] : i3;
      }
      function Dh(n4, t, e2) {
        var r2 = n4 == null ? 0 : n4.length;
        if (!r2)
          return -1;
        var s2 = e2 == null ? 0 : R(e2);
        return s2 < 0 && (s2 = Q2(r2 + s2, 0)), Tt2(n4, t, s2);
      }
      function Nh(n4) {
        var t = n4 == null ? 0 : n4.length;
        return t ? Cn(n4, 0, -1) : [];
      }
      var Hh = L4(function(n4) {
        var t = G(n4, ai);
        return t.length && t[0] === n4[0] ? Vr2(t) : [];
      }), $h = L4(function(n4) {
        var t = In2(n4), e2 = G(n4, ai);
        return t === In2(e2) ? t = i3 : e2.pop(), e2.length && e2[0] === n4[0] ? Vr2(e2, x2(t, 2)) : [];
      }), Uh = L4(function(n4) {
        var t = In2(n4), e2 = G(n4, ai);
        return t = typeof t == "function" ? t : i3, t && e2.pop(), e2.length && e2[0] === n4[0] ? Vr2(e2, i3, t) : [];
      });
      function Wh(n4, t) {
        return n4 == null ? "" : Nf2.call(n4, t);
      }
      function In2(n4) {
        var t = n4 == null ? 0 : n4.length;
        return t ? n4[t - 1] : i3;
      }
      function Fh(n4, t, e2) {
        var r2 = n4 == null ? 0 : n4.length;
        if (!r2)
          return -1;
        var s2 = r2;
        return e2 !== i3 && (s2 = R(e2), s2 = s2 < 0 ? Q2(r2 + s2, 0) : nn(s2, r2 - 1)), t === t ? mf2(n4, t, s2) : ye2(n4, xs2, s2, true);
      }
      function Mh(n4, t) {
        return n4 && n4.length ? tu2(n4, R(t)) : i3;
      }
      var qh = L4(Ku);
      function Ku(n4, t) {
        return n4 && n4.length && t && t.length ? ti(n4, t) : n4;
      }
      function Bh(n4, t, e2) {
        return n4 && n4.length && t && t.length ? ti(n4, t, x2(e2, 2)) : n4;
      }
      function Gh(n4, t, e2) {
        return n4 && n4.length && t && t.length ? ti(n4, t, i3, e2) : n4;
      }
      var zh = Yn2(function(n4, t) {
        var e2 = n4 == null ? 0 : n4.length, r2 = Zr(n4, t);
        return iu2(n4, G(t, function(s2) {
          return Zn(s2, e2) ? +s2 : s2;
        }).sort(du2)), r2;
      });
      function Kh(n4, t) {
        var e2 = [];
        if (!(n4 && n4.length))
          return e2;
        var r2 = -1, s2 = [], o3 = n4.length;
        for (t = x2(t, 3); ++r2 < o3; ) {
          var f3 = n4[r2];
          t(f3, r2, n4) && (e2.push(f3), s2.push(r2));
        }
        return iu2(n4, s2), e2;
      }
      function Ai2(n4) {
        return n4 == null ? n4 : Wf2.call(n4);
      }
      function Yh(n4, t, e2) {
        var r2 = n4 == null ? 0 : n4.length;
        return r2 ? (e2 && typeof e2 != "number" && rn2(n4, t, e2) ? (t = 0, e2 = r2) : (t = t == null ? 0 : R(t), e2 = e2 === i3 ? r2 : R(e2)), Cn(n4, t, e2)) : [];
      }
      function Zh(n4, t) {
        return Ye2(n4, t);
      }
      function Jh(n4, t, e2) {
        return ii(n4, t, x2(e2, 2));
      }
      function Xh(n4, t) {
        var e2 = n4 == null ? 0 : n4.length;
        if (e2) {
          var r2 = Ye2(n4, t);
          if (r2 < e2 && bn2(n4[r2], t))
            return r2;
        }
        return -1;
      }
      function Qh(n4, t) {
        return Ye2(n4, t, true);
      }
      function Vh(n4, t, e2) {
        return ii(n4, t, x2(e2, 2), true);
      }
      function kh(n4, t) {
        var e2 = n4 == null ? 0 : n4.length;
        if (e2) {
          var r2 = Ye2(n4, t, true) - 1;
          if (bn2(n4[r2], t))
            return r2;
        }
        return -1;
      }
      function jh(n4) {
        return n4 && n4.length ? uu(n4) : [];
      }
      function nl(n4, t) {
        return n4 && n4.length ? uu(n4, x2(t, 2)) : [];
      }
      function tl(n4) {
        var t = n4 == null ? 0 : n4.length;
        return t ? Cn(n4, 1, t) : [];
      }
      function el(n4, t, e2) {
        return n4 && n4.length ? (t = e2 || t === i3 ? 1 : R(t), Cn(n4, 0, t < 0 ? 0 : t)) : [];
      }
      function rl(n4, t, e2) {
        var r2 = n4 == null ? 0 : n4.length;
        return r2 ? (t = e2 || t === i3 ? 1 : R(t), t = r2 - t, Cn(n4, t < 0 ? 0 : t, r2)) : [];
      }
      function il(n4, t) {
        return n4 && n4.length ? Ze2(n4, x2(t, 3), false, true) : [];
      }
      function sl(n4, t) {
        return n4 && n4.length ? Ze2(n4, x2(t, 3)) : [];
      }
      var ul = L4(function(n4) {
        return it2(j2(n4, 1, Z2, true));
      }), al = L4(function(n4) {
        var t = In2(n4);
        return Z2(t) && (t = i3), it2(j2(n4, 1, Z2, true), x2(t, 2));
      }), ol = L4(function(n4) {
        var t = In2(n4);
        return t = typeof t == "function" ? t : i3, it2(j2(n4, 1, Z2, true), i3, t);
      });
      function fl(n4) {
        return n4 && n4.length ? it2(n4) : [];
      }
      function cl(n4, t) {
        return n4 && n4.length ? it2(n4, x2(t, 2)) : [];
      }
      function hl(n4, t) {
        return t = typeof t == "function" ? t : i3, n4 && n4.length ? it2(n4, i3, t) : [];
      }
      function Ci2(n4) {
        if (!(n4 && n4.length))
          return [];
        var t = 0;
        return n4 = jn2(n4, function(e2) {
          if (Z2(e2))
            return t = Q2(e2.length, t), true;
        }), Fr2(t, function(e2) {
          return G(n4, $r2(e2));
        });
      }
      function Yu2(n4, t) {
        if (!(n4 && n4.length))
          return [];
        var e2 = Ci2(n4);
        return t == null ? e2 : G(e2, function(r2) {
          return cn(t, i3, r2);
        });
      }
      var ll = L4(function(n4, t) {
        return Z2(n4) ? ue2(n4, t) : [];
      }), pl = L4(function(n4) {
        return ui(jn2(n4, Z2));
      }), dl = L4(function(n4) {
        var t = In2(n4);
        return Z2(t) && (t = i3), ui(jn2(n4, Z2), x2(t, 2));
      }), gl = L4(function(n4) {
        var t = In2(n4);
        return t = typeof t == "function" ? t : i3, ui(jn2(n4, Z2), i3, t);
      }), vl = L4(Ci2);
      function _l(n4, t) {
        return cu2(n4 || [], t || [], se2);
      }
      function ml(n4, t) {
        return cu2(n4 || [], t || [], fe2);
      }
      var wl = L4(function(n4) {
        var t = n4.length, e2 = t > 1 ? n4[t - 1] : i3;
        return e2 = typeof e2 == "function" ? (n4.pop(), e2) : i3, Yu2(n4, e2);
      });
      function Zu2(n4) {
        var t = a3(n4);
        return t.__chain__ = true, t;
      }
      function Pl(n4, t) {
        return t(n4), n4;
      }
      function er2(n4, t) {
        return t(n4);
      }
      var Al = Yn2(function(n4) {
        var t = n4.length, e2 = t ? n4[0] : 0, r2 = this.__wrapped__, s2 = function(o3) {
          return Zr(o3, n4);
        };
        return t > 1 || this.__actions__.length || !(r2 instanceof H) || !Zn(e2) ? this.thru(s2) : (r2 = r2.slice(e2, +e2 + (t ? 1 : 0)), r2.__actions__.push({ func: er2, args: [s2], thisArg: i3 }), new Pn2(r2, this.__chain__).thru(function(o3) {
          return t && !o3.length && o3.push(i3), o3;
        }));
      });
      function Cl() {
        return Zu2(this);
      }
      function Il() {
        return new Pn2(this.value(), this.__chain__);
      }
      function xl() {
        this.__values__ === i3 && (this.__values__ = aa2(this.value()));
        var n4 = this.__index__ >= this.__values__.length, t = n4 ? i3 : this.__values__[this.__index__++];
        return { done: n4, value: t };
      }
      function El() {
        return this;
      }
      function yl(n4) {
        for (var t, e2 = this; e2 instanceof qe2; ) {
          var r2 = Mu2(e2);
          r2.__index__ = 0, r2.__values__ = i3, t ? s2.__wrapped__ = r2 : t = r2;
          var s2 = r2;
          e2 = e2.__wrapped__;
        }
        return s2.__wrapped__ = n4, t;
      }
      function Sl() {
        var n4 = this.__wrapped__;
        if (n4 instanceof H) {
          var t = n4;
          return this.__actions__.length && (t = new H(this)), t = t.reverse(), t.__actions__.push({ func: er2, args: [Ai2], thisArg: i3 }), new Pn2(t, this.__chain__);
        }
        return this.thru(Ai2);
      }
      function Ol() {
        return fu2(this.__wrapped__, this.__actions__);
      }
      var Rl = Je2(function(n4, t, e2) {
        F.call(n4, e2) ? ++n4[e2] : zn2(n4, e2, 1);
      });
      function bl(n4, t, e2) {
        var r2 = O3(n4) ? Cs2 : Pc;
        return e2 && rn2(n4, t, e2) && (t = i3), r2(n4, x2(t, 3));
      }
      function Tl(n4, t) {
        var e2 = O3(n4) ? jn2 : Ys2;
        return e2(n4, x2(t, 3));
      }
      var Ll = Pu2(qu), Dl = Pu2(Bu2);
      function Nl(n4, t) {
        return j2(rr2(n4, t), 1);
      }
      function Hl(n4, t) {
        return j2(rr2(n4, t), ht2);
      }
      function $l(n4, t, e2) {
        return e2 = e2 === i3 ? 1 : R(e2), j2(rr2(n4, t), e2);
      }
      function Ju2(n4, t) {
        var e2 = O3(n4) ? mn : rt2;
        return e2(n4, x2(t, 3));
      }
      function Xu2(n4, t) {
        var e2 = O3(n4) ? nf2 : Ks2;
        return e2(n4, x2(t, 3));
      }
      var Ul = Je2(function(n4, t, e2) {
        F.call(n4, e2) ? n4[e2].push(t) : zn2(n4, e2, [t]);
      });
      function Wl(n4, t, e2, r2) {
        n4 = an(n4) ? n4 : Gt2(n4), e2 = e2 && !r2 ? R(e2) : 0;
        var s2 = n4.length;
        return e2 < 0 && (e2 = Q2(s2 + e2, 0)), or2(n4) ? e2 <= s2 && n4.indexOf(t, e2) > -1 : !!s2 && Tt2(n4, t, e2) > -1;
      }
      var Fl = L4(function(n4, t, e2) {
        var r2 = -1, s2 = typeof t == "function", o3 = an(n4) ? d4(n4.length) : [];
        return rt2(n4, function(f3) {
          o3[++r2] = s2 ? cn(t, f3, e2) : ae2(f3, t, e2);
        }), o3;
      }), Ml = Je2(function(n4, t, e2) {
        zn2(n4, e2, t);
      });
      function rr2(n4, t) {
        var e2 = O3(n4) ? G : ks2;
        return e2(n4, x2(t, 3));
      }
      function ql(n4, t, e2, r2) {
        return n4 == null ? [] : (O3(t) || (t = t == null ? [] : [t]), e2 = r2 ? i3 : e2, O3(e2) || (e2 = e2 == null ? [] : [e2]), eu2(n4, t, e2));
      }
      var Bl = Je2(function(n4, t, e2) {
        n4[e2 ? 0 : 1].push(t);
      }, function() {
        return [[], []];
      });
      function Gl(n4, t, e2) {
        var r2 = O3(n4) ? Nr2 : ys2, s2 = arguments.length < 3;
        return r2(n4, x2(t, 4), e2, s2, rt2);
      }
      function zl(n4, t, e2) {
        var r2 = O3(n4) ? tf : ys2, s2 = arguments.length < 3;
        return r2(n4, x2(t, 4), e2, s2, Ks2);
      }
      function Kl(n4, t) {
        var e2 = O3(n4) ? jn2 : Ys2;
        return e2(n4, ur2(x2(t, 3)));
      }
      function Yl(n4) {
        var t = O3(n4) ? qs2 : Wc;
        return t(n4);
      }
      function Zl(n4, t, e2) {
        (e2 ? rn2(n4, t, e2) : t === i3) ? t = 1 : t = R(t);
        var r2 = O3(n4) ? gc : Fc;
        return r2(n4, t);
      }
      function Jl(n4) {
        var t = O3(n4) ? vc : qc;
        return t(n4);
      }
      function Xl(n4) {
        if (n4 == null)
          return 0;
        if (an(n4))
          return or2(n4) ? Dt2(n4) : n4.length;
        var t = tn2(n4);
        return t == yn2 || t == Sn2 ? n4.size : jr2(n4).length;
      }
      function Ql(n4, t, e2) {
        var r2 = O3(n4) ? Hr2 : Bc;
        return e2 && rn2(n4, t, e2) && (t = i3), r2(n4, x2(t, 3));
      }
      var Vl = L4(function(n4, t) {
        if (n4 == null)
          return [];
        var e2 = t.length;
        return e2 > 1 && rn2(n4, t[0], t[1]) ? t = [] : e2 > 2 && rn2(t[0], t[1], t[2]) && (t = [t[0]]), eu2(n4, j2(t, 1), []);
      }), ir2 = Tf2 || function() {
        return k2.Date.now();
      };
      function kl(n4, t) {
        if (typeof t != "function")
          throw new wn2(D2);
        return n4 = R(n4), function() {
          if (--n4 < 1)
            return t.apply(this, arguments);
        };
      }
      function Qu2(n4, t, e2) {
        return t = e2 ? i3 : t, t = n4 && t == null ? n4.length : t, Kn2(n4, Mn, i3, i3, i3, i3, t);
      }
      function Vu2(n4, t) {
        var e2;
        if (typeof t != "function")
          throw new wn2(D2);
        return n4 = R(n4), function() {
          return --n4 > 0 && (e2 = t.apply(this, arguments)), n4 <= 1 && (t = i3), e2;
        };
      }
      var Ii2 = L4(function(n4, t, e2) {
        var r2 = vn;
        if (e2.length) {
          var s2 = tt2(e2, qt2(Ii2));
          r2 |= Nn2;
        }
        return Kn2(n4, r2, t, e2, s2);
      }), ku = L4(function(n4, t, e2) {
        var r2 = vn | ct2;
        if (e2.length) {
          var s2 = tt2(e2, qt2(ku));
          r2 |= Nn2;
        }
        return Kn2(t, r2, n4, e2, s2);
      });
      function ju2(n4, t, e2) {
        t = e2 ? i3 : t;
        var r2 = Kn2(n4, Dn2, i3, i3, i3, i3, i3, t);
        return r2.placeholder = ju2.placeholder, r2;
      }
      function na2(n4, t, e2) {
        t = e2 ? i3 : t;
        var r2 = Kn2(n4, yt2, i3, i3, i3, i3, i3, t);
        return r2.placeholder = na2.placeholder, r2;
      }
      function ta2(n4, t, e2) {
        var r2, s2, o3, f3, c2, l2, v3 = 0, _3 = false, m3 = false, P2 = true;
        if (typeof n4 != "function")
          throw new wn2(D2);
        t = xn2(t) || 0, K2(e2) && (_3 = !!e2.leading, m3 = "maxWait" in e2, o3 = m3 ? Q2(xn2(e2.maxWait) || 0, t) : o3, P2 = "trailing" in e2 ? !!e2.trailing : P2);
        function I2(J2) {
          var Tn2 = r2, Qn2 = s2;
          return r2 = s2 = i3, v3 = J2, f3 = n4.apply(Qn2, Tn2), f3;
        }
        function E3(J2) {
          return v3 = J2, c2 = le2(N2, t), _3 ? I2(J2) : f3;
        }
        function T2(J2) {
          var Tn2 = J2 - l2, Qn2 = J2 - v3, Pa2 = t - Tn2;
          return m3 ? nn(Pa2, o3 - Qn2) : Pa2;
        }
        function y3(J2) {
          var Tn2 = J2 - l2, Qn2 = J2 - v3;
          return l2 === i3 || Tn2 >= t || Tn2 < 0 || m3 && Qn2 >= o3;
        }
        function N2() {
          var J2 = ir2();
          if (y3(J2))
            return $2(J2);
          c2 = le2(N2, T2(J2));
        }
        function $2(J2) {
          return c2 = i3, P2 && r2 ? I2(J2) : (r2 = s2 = i3, f3);
        }
        function dn2() {
          c2 !== i3 && hu(c2), v3 = 0, r2 = l2 = s2 = c2 = i3;
        }
        function sn() {
          return c2 === i3 ? f3 : $2(ir2());
        }
        function gn() {
          var J2 = ir2(), Tn2 = y3(J2);
          if (r2 = arguments, s2 = this, l2 = J2, Tn2) {
            if (c2 === i3)
              return E3(l2);
            if (m3)
              return hu(c2), c2 = le2(N2, t), I2(l2);
          }
          return c2 === i3 && (c2 = le2(N2, t)), f3;
        }
        return gn.cancel = dn2, gn.flush = sn, gn;
      }
      var jl = L4(function(n4, t) {
        return zs2(n4, 1, t);
      }), np = L4(function(n4, t, e2) {
        return zs2(n4, xn2(t) || 0, e2);
      });
      function tp(n4) {
        return Kn2(n4, dr3);
      }
      function sr2(n4, t) {
        if (typeof n4 != "function" || t != null && typeof t != "function")
          throw new wn2(D2);
        var e2 = function() {
          var r2 = arguments, s2 = t ? t.apply(this, r2) : r2[0], o3 = e2.cache;
          if (o3.has(s2))
            return o3.get(s2);
          var f3 = n4.apply(this, r2);
          return e2.cache = o3.set(s2, f3) || o3, f3;
        };
        return e2.cache = new (sr2.Cache || Gn2)(), e2;
      }
      sr2.Cache = Gn2;
      function ur2(n4) {
        if (typeof n4 != "function")
          throw new wn2(D2);
        return function() {
          var t = arguments;
          switch (t.length) {
            case 0:
              return !n4.call(this);
            case 1:
              return !n4.call(this, t[0]);
            case 2:
              return !n4.call(this, t[0], t[1]);
            case 3:
              return !n4.call(this, t[0], t[1], t[2]);
          }
          return !n4.apply(this, t);
        };
      }
      function ep(n4) {
        return Vu2(2, n4);
      }
      var rp = Gc(function(n4, t) {
        t = t.length == 1 && O3(t[0]) ? G(t[0], hn(x2())) : G(j2(t, 1), hn(x2()));
        var e2 = t.length;
        return L4(function(r2) {
          for (var s2 = -1, o3 = nn(r2.length, e2); ++s2 < o3; )
            r2[s2] = t[s2].call(this, r2[s2]);
          return cn(n4, this, r2);
        });
      }), xi2 = L4(function(n4, t) {
        var e2 = tt2(t, qt2(xi2));
        return Kn2(n4, Nn2, i3, t, e2);
      }), ea2 = L4(function(n4, t) {
        var e2 = tt2(t, qt2(ea2));
        return Kn2(n4, St2, i3, t, e2);
      }), ip = Yn2(function(n4, t) {
        return Kn2(n4, Kt2, i3, i3, i3, t);
      });
      function sp(n4, t) {
        if (typeof n4 != "function")
          throw new wn2(D2);
        return t = t === i3 ? t : R(t), L4(n4, t);
      }
      function up(n4, t) {
        if (typeof n4 != "function")
          throw new wn2(D2);
        return t = t == null ? 0 : Q2(R(t), 0), L4(function(e2) {
          var r2 = e2[t], s2 = ut2(e2, 0, t);
          return r2 && nt2(s2, r2), cn(n4, this, s2);
        });
      }
      function ap(n4, t, e2) {
        var r2 = true, s2 = true;
        if (typeof n4 != "function")
          throw new wn2(D2);
        return K2(e2) && (r2 = "leading" in e2 ? !!e2.leading : r2, s2 = "trailing" in e2 ? !!e2.trailing : s2), ta2(n4, t, { leading: r2, maxWait: t, trailing: s2 });
      }
      function op(n4) {
        return Qu2(n4, 1);
      }
      function fp(n4, t) {
        return xi2(oi(t), n4);
      }
      function cp() {
        if (!arguments.length)
          return [];
        var n4 = arguments[0];
        return O3(n4) ? n4 : [n4];
      }
      function hp(n4) {
        return An(n4, xt2);
      }
      function lp(n4, t) {
        return t = typeof t == "function" ? t : i3, An(n4, xt2, t);
      }
      function pp(n4) {
        return An(n4, Ln2 | xt2);
      }
      function dp(n4, t) {
        return t = typeof t == "function" ? t : i3, An(n4, Ln2 | xt2, t);
      }
      function gp(n4, t) {
        return t == null || Gs2(n4, t, V3(t));
      }
      function bn2(n4, t) {
        return n4 === t || n4 !== n4 && t !== t;
      }
      var vp = ke2(Qr2), _p = ke2(function(n4, t) {
        return n4 >= t;
      }), Pt2 = Xs2(/* @__PURE__ */ function() {
        return arguments;
      }()) ? Xs2 : function(n4) {
        return Y(n4) && F.call(n4, "callee") && !Hs2.call(n4, "callee");
      }, O3 = d4.isArray, mp = vs2 ? hn(vs2) : yc;
      function an(n4) {
        return n4 != null && ar2(n4.length) && !Jn2(n4);
      }
      function Z2(n4) {
        return Y(n4) && an(n4);
      }
      function wp(n4) {
        return n4 === true || n4 === false || Y(n4) && en2(n4) == Yt3;
      }
      var at2 = Df2 || Hi2, Pp = _s2 ? hn(_s2) : Sc;
      function Ap(n4) {
        return Y(n4) && n4.nodeType === 1 && !pe2(n4);
      }
      function Cp(n4) {
        if (n4 == null)
          return true;
        if (an(n4) && (O3(n4) || typeof n4 == "string" || typeof n4.splice == "function" || at2(n4) || Bt2(n4) || Pt2(n4)))
          return !n4.length;
        var t = tn2(n4);
        if (t == yn2 || t == Sn2)
          return !n4.size;
        if (he2(n4))
          return !jr2(n4).length;
        for (var e2 in n4)
          if (F.call(n4, e2))
            return false;
        return true;
      }
      function Ip(n4, t) {
        return oe2(n4, t);
      }
      function xp(n4, t, e2) {
        e2 = typeof e2 == "function" ? e2 : i3;
        var r2 = e2 ? e2(n4, t) : i3;
        return r2 === i3 ? oe2(n4, t, i3, e2) : !!r2;
      }
      function Ei2(n4) {
        if (!Y(n4))
          return false;
        var t = en2(n4);
        return t == we2 || t == Ka2 || typeof n4.message == "string" && typeof n4.name == "string" && !pe2(n4);
      }
      function Ep(n4) {
        return typeof n4 == "number" && Us2(n4);
      }
      function Jn2(n4) {
        if (!K2(n4))
          return false;
        var t = en2(n4);
        return t == Pe2 || t == zi2 || t == za2 || t == Za2;
      }
      function ra2(n4) {
        return typeof n4 == "number" && n4 == R(n4);
      }
      function ar2(n4) {
        return typeof n4 == "number" && n4 > -1 && n4 % 1 == 0 && n4 <= kn2;
      }
      function K2(n4) {
        var t = typeof n4;
        return n4 != null && (t == "object" || t == "function");
      }
      function Y(n4) {
        return n4 != null && typeof n4 == "object";
      }
      var ia2 = ms2 ? hn(ms2) : Rc;
      function yp(n4, t) {
        return n4 === t || kr2(n4, t, gi2(t));
      }
      function Sp(n4, t, e2) {
        return e2 = typeof e2 == "function" ? e2 : i3, kr2(n4, t, gi2(t), e2);
      }
      function Op(n4) {
        return sa2(n4) && n4 != +n4;
      }
      function Rp(n4) {
        if (lh2(n4))
          throw new S2(b3);
        return Qs2(n4);
      }
      function bp(n4) {
        return n4 === null;
      }
      function Tp(n4) {
        return n4 == null;
      }
      function sa2(n4) {
        return typeof n4 == "number" || Y(n4) && en2(n4) == Jt2;
      }
      function pe2(n4) {
        if (!Y(n4) || en2(n4) != qn2)
          return false;
        var t = Ne(n4);
        if (t === null)
          return true;
        var e2 = F.call(t, "constructor") && t.constructor;
        return typeof e2 == "function" && e2 instanceof e2 && be2.call(e2) == Sf2;
      }
      var yi2 = ws2 ? hn(ws2) : bc;
      function Lp(n4) {
        return ra2(n4) && n4 >= -kn2 && n4 <= kn2;
      }
      var ua2 = Ps2 ? hn(Ps2) : Tc;
      function or2(n4) {
        return typeof n4 == "string" || !O3(n4) && Y(n4) && en2(n4) == Qt2;
      }
      function pn(n4) {
        return typeof n4 == "symbol" || Y(n4) && en2(n4) == Ae2;
      }
      var Bt2 = As2 ? hn(As2) : Lc;
      function Dp(n4) {
        return n4 === i3;
      }
      function Np(n4) {
        return Y(n4) && tn2(n4) == Vt2;
      }
      function Hp(n4) {
        return Y(n4) && en2(n4) == Xa2;
      }
      var $p = ke2(ni), Up = ke2(function(n4, t) {
        return n4 <= t;
      });
      function aa2(n4) {
        if (!n4)
          return [];
        if (an(n4))
          return or2(n4) ? On2(n4) : un(n4);
        if (ne2 && n4[ne2])
          return gf2(n4[ne2]());
        var t = tn2(n4), e2 = t == yn2 ? qr2 : t == Sn2 ? Se2 : Gt2;
        return e2(n4);
      }
      function Xn2(n4) {
        if (!n4)
          return n4 === 0 ? n4 : 0;
        if (n4 = xn2(n4), n4 === ht2 || n4 === -ht2) {
          var t = n4 < 0 ? -1 : 1;
          return t * Ma2;
        }
        return n4 === n4 ? n4 : 0;
      }
      function R(n4) {
        var t = Xn2(n4), e2 = t % 1;
        return t === t ? e2 ? t - e2 : t : 0;
      }
      function oa2(n4) {
        return n4 ? vt2(R(n4), 0, Hn2) : 0;
      }
      function xn2(n4) {
        if (typeof n4 == "number")
          return n4;
        if (pn(n4))
          return _e2;
        if (K2(n4)) {
          var t = typeof n4.valueOf == "function" ? n4.valueOf() : n4;
          n4 = K2(t) ? t + "" : t;
        }
        if (typeof n4 != "string")
          return n4 === 0 ? n4 : +n4;
        n4 = Ss2(n4);
        var e2 = _o2.test(n4);
        return e2 || wo2.test(n4) ? Vo(n4.slice(2), e2 ? 2 : 8) : vo2.test(n4) ? _e2 : +n4;
      }
      function fa2(n4) {
        return Un2(n4, on(n4));
      }
      function Wp(n4) {
        return n4 ? vt2(R(n4), -kn2, kn2) : n4 === 0 ? n4 : 0;
      }
      function W(n4) {
        return n4 == null ? "" : ln(n4);
      }
      var Fp = Ft2(function(n4, t) {
        if (he2(t) || an(t)) {
          Un2(t, V3(t), n4);
          return;
        }
        for (var e2 in t)
          F.call(t, e2) && se2(n4, e2, t[e2]);
      }), ca2 = Ft2(function(n4, t) {
        Un2(t, on(t), n4);
      }), fr2 = Ft2(function(n4, t, e2, r2) {
        Un2(t, on(t), n4, r2);
      }), Mp = Ft2(function(n4, t, e2, r2) {
        Un2(t, V3(t), n4, r2);
      }), qp = Yn2(Zr);
      function Bp(n4, t) {
        var e2 = Wt2(n4);
        return t == null ? e2 : Bs2(e2, t);
      }
      var Gp = L4(function(n4, t) {
        n4 = M2(n4);
        var e2 = -1, r2 = t.length, s2 = r2 > 2 ? t[2] : i3;
        for (s2 && rn2(t[0], t[1], s2) && (r2 = 1); ++e2 < r2; )
          for (var o3 = t[e2], f3 = on(o3), c2 = -1, l2 = f3.length; ++c2 < l2; ) {
            var v3 = f3[c2], _3 = n4[v3];
            (_3 === i3 || bn2(_3, Ht2[v3]) && !F.call(n4, v3)) && (n4[v3] = o3[v3]);
          }
        return n4;
      }), zp = L4(function(n4) {
        return n4.push(i3, Su2), cn(ha2, i3, n4);
      });
      function Kp(n4, t) {
        return Is2(n4, x2(t, 3), $n2);
      }
      function Yp(n4, t) {
        return Is2(n4, x2(t, 3), Xr);
      }
      function Zp(n4, t) {
        return n4 == null ? n4 : Jr2(n4, x2(t, 3), on);
      }
      function Jp(n4, t) {
        return n4 == null ? n4 : Zs2(n4, x2(t, 3), on);
      }
      function Xp(n4, t) {
        return n4 && $n2(n4, x2(t, 3));
      }
      function Qp(n4, t) {
        return n4 && Xr(n4, x2(t, 3));
      }
      function Vp(n4) {
        return n4 == null ? [] : ze2(n4, V3(n4));
      }
      function kp(n4) {
        return n4 == null ? [] : ze2(n4, on(n4));
      }
      function Si2(n4, t, e2) {
        var r2 = n4 == null ? i3 : _t2(n4, t);
        return r2 === i3 ? e2 : r2;
      }
      function jp(n4, t) {
        return n4 != null && bu2(n4, t, Cc);
      }
      function Oi2(n4, t) {
        return n4 != null && bu2(n4, t, Ic);
      }
      var nd = Cu2(function(n4, t, e2) {
        t != null && typeof t.toString != "function" && (t = Te.call(t)), n4[t] = e2;
      }, bi2(fn)), td = Cu2(function(n4, t, e2) {
        t != null && typeof t.toString != "function" && (t = Te.call(t)), F.call(n4, t) ? n4[t].push(e2) : n4[t] = [e2];
      }, x2), ed = L4(ae2);
      function V3(n4) {
        return an(n4) ? Ms2(n4) : jr2(n4);
      }
      function on(n4) {
        return an(n4) ? Ms2(n4, true) : Dc(n4);
      }
      function rd(n4, t) {
        var e2 = {};
        return t = x2(t, 3), $n2(n4, function(r2, s2, o3) {
          zn2(e2, t(r2, s2, o3), r2);
        }), e2;
      }
      function id(n4, t) {
        var e2 = {};
        return t = x2(t, 3), $n2(n4, function(r2, s2, o3) {
          zn2(e2, s2, t(r2, s2, o3));
        }), e2;
      }
      var sd = Ft2(function(n4, t, e2) {
        Ke2(n4, t, e2);
      }), ha2 = Ft2(function(n4, t, e2, r2) {
        Ke2(n4, t, e2, r2);
      }), ud = Yn2(function(n4, t) {
        var e2 = {};
        if (n4 == null)
          return e2;
        var r2 = false;
        t = G(t, function(o3) {
          return o3 = st2(o3, n4), r2 || (r2 = o3.length > 1), o3;
        }), Un2(n4, pi2(n4), e2), r2 && (e2 = An(e2, Ln2 | Fn2 | xt2, nh2));
        for (var s2 = t.length; s2--; )
          si(e2, t[s2]);
        return e2;
      });
      function ad(n4, t) {
        return la2(n4, ur2(x2(t)));
      }
      var od = Yn2(function(n4, t) {
        return n4 == null ? {} : Hc(n4, t);
      });
      function la2(n4, t) {
        if (n4 == null)
          return {};
        var e2 = G(pi2(n4), function(r2) {
          return [r2];
        });
        return t = x2(t), ru2(n4, e2, function(r2, s2) {
          return t(r2, s2[0]);
        });
      }
      function fd(n4, t, e2) {
        t = st2(t, n4);
        var r2 = -1, s2 = t.length;
        for (s2 || (s2 = 1, n4 = i3); ++r2 < s2; ) {
          var o3 = n4 == null ? i3 : n4[Wn2(t[r2])];
          o3 === i3 && (r2 = s2, o3 = e2), n4 = Jn2(o3) ? o3.call(n4) : o3;
        }
        return n4;
      }
      function cd(n4, t, e2) {
        return n4 == null ? n4 : fe2(n4, t, e2);
      }
      function hd(n4, t, e2, r2) {
        return r2 = typeof r2 == "function" ? r2 : i3, n4 == null ? n4 : fe2(n4, t, e2, r2);
      }
      var pa2 = Eu2(V3), da2 = Eu2(on);
      function ld(n4, t, e2) {
        var r2 = O3(n4), s2 = r2 || at2(n4) || Bt2(n4);
        if (t = x2(t, 4), e2 == null) {
          var o3 = n4 && n4.constructor;
          s2 ? e2 = r2 ? new o3() : [] : K2(n4) ? e2 = Jn2(o3) ? Wt2(Ne(n4)) : {} : e2 = {};
        }
        return (s2 ? mn : $n2)(n4, function(f3, c2, l2) {
          return t(e2, f3, c2, l2);
        }), e2;
      }
      function pd(n4, t) {
        return n4 == null ? true : si(n4, t);
      }
      function dd(n4, t, e2) {
        return n4 == null ? n4 : ou2(n4, t, oi(e2));
      }
      function gd(n4, t, e2, r2) {
        return r2 = typeof r2 == "function" ? r2 : i3, n4 == null ? n4 : ou2(n4, t, oi(e2), r2);
      }
      function Gt2(n4) {
        return n4 == null ? [] : Mr2(n4, V3(n4));
      }
      function vd(n4) {
        return n4 == null ? [] : Mr2(n4, on(n4));
      }
      function _d(n4, t, e2) {
        return e2 === i3 && (e2 = t, t = i3), e2 !== i3 && (e2 = xn2(e2), e2 = e2 === e2 ? e2 : 0), t !== i3 && (t = xn2(t), t = t === t ? t : 0), vt2(xn2(n4), t, e2);
      }
      function md(n4, t, e2) {
        return t = Xn2(t), e2 === i3 ? (e2 = t, t = 0) : e2 = Xn2(e2), n4 = xn2(n4), xc(n4, t, e2);
      }
      function wd(n4, t, e2) {
        if (e2 && typeof e2 != "boolean" && rn2(n4, t, e2) && (t = e2 = i3), e2 === i3 && (typeof t == "boolean" ? (e2 = t, t = i3) : typeof n4 == "boolean" && (e2 = n4, n4 = i3)), n4 === i3 && t === i3 ? (n4 = 0, t = 1) : (n4 = Xn2(n4), t === i3 ? (t = n4, n4 = 0) : t = Xn2(t)), n4 > t) {
          var r2 = n4;
          n4 = t, t = r2;
        }
        if (e2 || n4 % 1 || t % 1) {
          var s2 = Ws2();
          return nn(n4 + s2 * (t - n4 + Qo2("1e-" + ((s2 + "").length - 1))), t);
        }
        return ei(n4, t);
      }
      var Pd = Mt2(function(n4, t, e2) {
        return t = t.toLowerCase(), n4 + (e2 ? ga2(t) : t);
      });
      function ga2(n4) {
        return Ri2(W(n4).toLowerCase());
      }
      function va2(n4) {
        return n4 = W(n4), n4 && n4.replace(Ao2, cf2).replace(Mo2, "");
      }
      function Ad(n4, t, e2) {
        n4 = W(n4), t = ln(t);
        var r2 = n4.length;
        e2 = e2 === i3 ? r2 : vt2(R(e2), 0, r2);
        var s2 = e2;
        return e2 -= t.length, e2 >= 0 && n4.slice(e2, s2) == t;
      }
      function Cd(n4) {
        return n4 = W(n4), n4 && no2.test(n4) ? n4.replace(Zi2, hf2) : n4;
      }
      function Id(n4) {
        return n4 = W(n4), n4 && uo.test(n4) ? n4.replace(xr2, "\\$&") : n4;
      }
      var xd = Mt2(function(n4, t, e2) {
        return n4 + (e2 ? "-" : "") + t.toLowerCase();
      }), Ed = Mt2(function(n4, t, e2) {
        return n4 + (e2 ? " " : "") + t.toLowerCase();
      }), yd = wu2("toLowerCase");
      function Sd(n4, t, e2) {
        n4 = W(n4), t = R(t);
        var r2 = t ? Dt2(n4) : 0;
        if (!t || r2 >= t)
          return n4;
        var s2 = (t - r2) / 2;
        return Ve2(We2(s2), e2) + n4 + Ve2(Ue2(s2), e2);
      }
      function Od(n4, t, e2) {
        n4 = W(n4), t = R(t);
        var r2 = t ? Dt2(n4) : 0;
        return t && r2 < t ? n4 + Ve2(t - r2, e2) : n4;
      }
      function Rd(n4, t, e2) {
        n4 = W(n4), t = R(t);
        var r2 = t ? Dt2(n4) : 0;
        return t && r2 < t ? Ve2(t - r2, e2) + n4 : n4;
      }
      function bd(n4, t, e2) {
        return e2 || t == null ? t = 0 : t && (t = +t), Uf2(W(n4).replace(Er2, ""), t || 0);
      }
      function Td(n4, t, e2) {
        return (e2 ? rn2(n4, t, e2) : t === i3) ? t = 1 : t = R(t), ri(W(n4), t);
      }
      function Ld() {
        var n4 = arguments, t = W(n4[0]);
        return n4.length < 3 ? t : t.replace(n4[1], n4[2]);
      }
      var Dd = Mt2(function(n4, t, e2) {
        return n4 + (e2 ? "_" : "") + t.toLowerCase();
      });
      function Nd(n4, t, e2) {
        return e2 && typeof e2 != "number" && rn2(n4, t, e2) && (t = e2 = i3), e2 = e2 === i3 ? Hn2 : e2 >>> 0, e2 ? (n4 = W(n4), n4 && (typeof t == "string" || t != null && !yi2(t)) && (t = ln(t), !t && Lt2(n4)) ? ut2(On2(n4), 0, e2) : n4.split(t, e2)) : [];
      }
      var Hd = Mt2(function(n4, t, e2) {
        return n4 + (e2 ? " " : "") + Ri2(t);
      });
      function $d(n4, t, e2) {
        return n4 = W(n4), e2 = e2 == null ? 0 : vt2(R(e2), 0, n4.length), t = ln(t), n4.slice(e2, e2 + t.length) == t;
      }
      function Ud(n4, t, e2) {
        var r2 = a3.templateSettings;
        e2 && rn2(n4, t, e2) && (t = i3), n4 = W(n4), t = fr2({}, t, r2, yu2);
        var s2 = fr2({}, t.imports, r2.imports, yu2), o3 = V3(s2), f3 = Mr2(s2, o3), c2, l2, v3 = 0, _3 = t.interpolate || Ce2, m3 = "__p += '", P2 = Br2((t.escape || Ce2).source + "|" + _3.source + "|" + (_3 === Ji2 ? go2 : Ce2).source + "|" + (t.evaluate || Ce2).source + "|$", "g"), I2 = "//# sourceURL=" + (F.call(t, "sourceURL") ? (t.sourceURL + "").replace(/\s/g, " ") : "lodash.templateSources[" + ++Ko + "]") + `
`;
        n4.replace(P2, function(y3, N2, $2, dn2, sn, gn) {
          return $2 || ($2 = dn2), m3 += n4.slice(v3, gn).replace(Co2, lf2), N2 && (c2 = true, m3 += `' +
__e(` + N2 + `) +
'`), sn && (l2 = true, m3 += `';
` + sn + `;
__p += '`), $2 && (m3 += `' +
((__t = (` + $2 + `)) == null ? '' : __t) +
'`), v3 = gn + y3.length, y3;
        }), m3 += `';
`;
        var E3 = F.call(t, "variable") && t.variable;
        if (!E3)
          m3 = `with (obj) {
` + m3 + `
}
`;
        else if (lo2.test(E3))
          throw new S2(En2);
        m3 = (l2 ? m3.replace(Qa2, "") : m3).replace(Va2, "$1").replace(ka2, "$1;"), m3 = "function(" + (E3 || "obj") + `) {
` + (E3 ? "" : `obj || (obj = {});
`) + "var __t, __p = ''" + (c2 ? ", __e = _.escape" : "") + (l2 ? `, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
` : `;
`) + m3 + `return __p
}`;
        var T2 = ma2(function() {
          return U2(o3, I2 + "return " + m3).apply(i3, f3);
        });
        if (T2.source = m3, Ei2(T2))
          throw T2;
        return T2;
      }
      function Wd(n4) {
        return W(n4).toLowerCase();
      }
      function Fd(n4) {
        return W(n4).toUpperCase();
      }
      function Md(n4, t, e2) {
        if (n4 = W(n4), n4 && (e2 || t === i3))
          return Ss2(n4);
        if (!n4 || !(t = ln(t)))
          return n4;
        var r2 = On2(n4), s2 = On2(t), o3 = Os2(r2, s2), f3 = Rs2(r2, s2) + 1;
        return ut2(r2, o3, f3).join("");
      }
      function qd(n4, t, e2) {
        if (n4 = W(n4), n4 && (e2 || t === i3))
          return n4.slice(0, Ts2(n4) + 1);
        if (!n4 || !(t = ln(t)))
          return n4;
        var r2 = On2(n4), s2 = Rs2(r2, On2(t)) + 1;
        return ut2(r2, 0, s2).join("");
      }
      function Bd(n4, t, e2) {
        if (n4 = W(n4), n4 && (e2 || t === i3))
          return n4.replace(Er2, "");
        if (!n4 || !(t = ln(t)))
          return n4;
        var r2 = On2(n4), s2 = Os2(r2, On2(t));
        return ut2(r2, s2).join("");
      }
      function Gd(n4, t) {
        var e2 = Na2, r2 = Ha2;
        if (K2(t)) {
          var s2 = "separator" in t ? t.separator : s2;
          e2 = "length" in t ? R(t.length) : e2, r2 = "omission" in t ? ln(t.omission) : r2;
        }
        n4 = W(n4);
        var o3 = n4.length;
        if (Lt2(n4)) {
          var f3 = On2(n4);
          o3 = f3.length;
        }
        if (e2 >= o3)
          return n4;
        var c2 = e2 - Dt2(r2);
        if (c2 < 1)
          return r2;
        var l2 = f3 ? ut2(f3, 0, c2).join("") : n4.slice(0, c2);
        if (s2 === i3)
          return l2 + r2;
        if (f3 && (c2 += l2.length - c2), yi2(s2)) {
          if (n4.slice(c2).search(s2)) {
            var v3, _3 = l2;
            for (s2.global || (s2 = Br2(s2.source, W(Xi2.exec(s2)) + "g")), s2.lastIndex = 0; v3 = s2.exec(_3); )
              var m3 = v3.index;
            l2 = l2.slice(0, m3 === i3 ? c2 : m3);
          }
        } else if (n4.indexOf(ln(s2), c2) != c2) {
          var P2 = l2.lastIndexOf(s2);
          P2 > -1 && (l2 = l2.slice(0, P2));
        }
        return l2 + r2;
      }
      function zd(n4) {
        return n4 = W(n4), n4 && ja2.test(n4) ? n4.replace(Yi2, wf2) : n4;
      }
      var Kd = Mt2(function(n4, t, e2) {
        return n4 + (e2 ? " " : "") + t.toUpperCase();
      }), Ri2 = wu2("toUpperCase");
      function _a2(n4, t, e2) {
        return n4 = W(n4), t = e2 ? i3 : t, t === i3 ? df2(n4) ? Cf2(n4) : sf2(n4) : n4.match(t) || [];
      }
      var ma2 = L4(function(n4, t) {
        try {
          return cn(n4, i3, t);
        } catch (e2) {
          return Ei2(e2) ? e2 : new S2(e2);
        }
      }), Yd = Yn2(function(n4, t) {
        return mn(t, function(e2) {
          e2 = Wn2(e2), zn2(n4, e2, Ii2(n4[e2], n4));
        }), n4;
      });
      function Zd(n4) {
        var t = n4 == null ? 0 : n4.length, e2 = x2();
        return n4 = t ? G(n4, function(r2) {
          if (typeof r2[1] != "function")
            throw new wn2(D2);
          return [e2(r2[0]), r2[1]];
        }) : [], L4(function(r2) {
          for (var s2 = -1; ++s2 < t; ) {
            var o3 = n4[s2];
            if (cn(o3[0], this, r2))
              return cn(o3[1], this, r2);
          }
        });
      }
      function Jd(n4) {
        return wc(An(n4, Ln2));
      }
      function bi2(n4) {
        return function() {
          return n4;
        };
      }
      function Xd(n4, t) {
        return n4 == null || n4 !== n4 ? t : n4;
      }
      var Qd = Au2(), Vd = Au2(true);
      function fn(n4) {
        return n4;
      }
      function Ti2(n4) {
        return Vs2(typeof n4 == "function" ? n4 : An(n4, Ln2));
      }
      function kd(n4) {
        return js2(An(n4, Ln2));
      }
      function jd(n4, t) {
        return nu2(n4, An(t, Ln2));
      }
      var ng = L4(function(n4, t) {
        return function(e2) {
          return ae2(e2, n4, t);
        };
      }), tg = L4(function(n4, t) {
        return function(e2) {
          return ae2(n4, e2, t);
        };
      });
      function Li2(n4, t, e2) {
        var r2 = V3(t), s2 = ze2(t, r2);
        e2 == null && !(K2(t) && (s2.length || !r2.length)) && (e2 = t, t = n4, n4 = this, s2 = ze2(t, V3(t)));
        var o3 = !(K2(e2) && "chain" in e2) || !!e2.chain, f3 = Jn2(n4);
        return mn(s2, function(c2) {
          var l2 = t[c2];
          n4[c2] = l2, f3 && (n4.prototype[c2] = function() {
            var v3 = this.__chain__;
            if (o3 || v3) {
              var _3 = n4(this.__wrapped__), m3 = _3.__actions__ = un(this.__actions__);
              return m3.push({ func: l2, args: arguments, thisArg: n4 }), _3.__chain__ = v3, _3;
            }
            return l2.apply(n4, nt2([this.value()], arguments));
          });
        }), n4;
      }
      function eg() {
        return k2._ === this && (k2._ = Of2), this;
      }
      function Di2() {
      }
      function rg(n4) {
        return n4 = R(n4), L4(function(t) {
          return tu2(t, n4);
        });
      }
      var ig = ci(G), sg = ci(Cs2), ug = ci(Hr2);
      function wa2(n4) {
        return _i2(n4) ? $r2(Wn2(n4)) : $c(n4);
      }
      function ag(n4) {
        return function(t) {
          return n4 == null ? i3 : _t2(n4, t);
        };
      }
      var og = Iu2(), fg = Iu2(true);
      function Ni2() {
        return [];
      }
      function Hi2() {
        return false;
      }
      function cg() {
        return {};
      }
      function hg() {
        return "";
      }
      function lg() {
        return true;
      }
      function pg(n4, t) {
        if (n4 = R(n4), n4 < 1 || n4 > kn2)
          return [];
        var e2 = Hn2, r2 = nn(n4, Hn2);
        t = x2(t), n4 -= Hn2;
        for (var s2 = Fr2(r2, t); ++e2 < n4; )
          t(e2);
        return s2;
      }
      function dg(n4) {
        return O3(n4) ? G(n4, Wn2) : pn(n4) ? [n4] : un(Fu(W(n4)));
      }
      function gg(n4) {
        var t = ++yf2;
        return W(n4) + t;
      }
      var vg = Qe2(function(n4, t) {
        return n4 + t;
      }, 0), _g = hi("ceil"), mg = Qe2(function(n4, t) {
        return n4 / t;
      }, 1), wg = hi("floor");
      function Pg(n4) {
        return n4 && n4.length ? Ge2(n4, fn, Qr2) : i3;
      }
      function Ag(n4, t) {
        return n4 && n4.length ? Ge2(n4, x2(t, 2), Qr2) : i3;
      }
      function Cg(n4) {
        return Es2(n4, fn);
      }
      function Ig(n4, t) {
        return Es2(n4, x2(t, 2));
      }
      function xg(n4) {
        return n4 && n4.length ? Ge2(n4, fn, ni) : i3;
      }
      function Eg(n4, t) {
        return n4 && n4.length ? Ge2(n4, x2(t, 2), ni) : i3;
      }
      var yg = Qe2(function(n4, t) {
        return n4 * t;
      }, 1), Sg = hi("round"), Og = Qe2(function(n4, t) {
        return n4 - t;
      }, 0);
      function Rg(n4) {
        return n4 && n4.length ? Wr(n4, fn) : 0;
      }
      function bg(n4, t) {
        return n4 && n4.length ? Wr(n4, x2(t, 2)) : 0;
      }
      return a3.after = kl, a3.ary = Qu2, a3.assign = Fp, a3.assignIn = ca2, a3.assignInWith = fr2, a3.assignWith = Mp, a3.at = qp, a3.before = Vu2, a3.bind = Ii2, a3.bindAll = Yd, a3.bindKey = ku, a3.castArray = cp, a3.chain = Zu2, a3.chunk = wh, a3.compact = Ph, a3.concat = Ah, a3.cond = Zd, a3.conforms = Jd, a3.constant = bi2, a3.countBy = Rl, a3.create = Bp, a3.curry = ju2, a3.curryRight = na2, a3.debounce = ta2, a3.defaults = Gp, a3.defaultsDeep = zp, a3.defer = jl, a3.delay = np, a3.difference = Ch, a3.differenceBy = Ih, a3.differenceWith = xh, a3.drop = Eh, a3.dropRight = yh, a3.dropRightWhile = Sh, a3.dropWhile = Oh, a3.fill = Rh, a3.filter = Tl, a3.flatMap = Nl, a3.flatMapDeep = Hl, a3.flatMapDepth = $l, a3.flatten = Gu2, a3.flattenDeep = bh, a3.flattenDepth = Th, a3.flip = tp, a3.flow = Qd, a3.flowRight = Vd, a3.fromPairs = Lh, a3.functions = Vp, a3.functionsIn = kp, a3.groupBy = Ul, a3.initial = Nh, a3.intersection = Hh, a3.intersectionBy = $h, a3.intersectionWith = Uh, a3.invert = nd, a3.invertBy = td, a3.invokeMap = Fl, a3.iteratee = Ti2, a3.keyBy = Ml, a3.keys = V3, a3.keysIn = on, a3.map = rr2, a3.mapKeys = rd, a3.mapValues = id, a3.matches = kd, a3.matchesProperty = jd, a3.memoize = sr2, a3.merge = sd, a3.mergeWith = ha2, a3.method = ng, a3.methodOf = tg, a3.mixin = Li2, a3.negate = ur2, a3.nthArg = rg, a3.omit = ud, a3.omitBy = ad, a3.once = ep, a3.orderBy = ql, a3.over = ig, a3.overArgs = rp, a3.overEvery = sg, a3.overSome = ug, a3.partial = xi2, a3.partialRight = ea2, a3.partition = Bl, a3.pick = od, a3.pickBy = la2, a3.property = wa2, a3.propertyOf = ag, a3.pull = qh, a3.pullAll = Ku, a3.pullAllBy = Bh, a3.pullAllWith = Gh, a3.pullAt = zh, a3.range = og, a3.rangeRight = fg, a3.rearg = ip, a3.reject = Kl, a3.remove = Kh, a3.rest = sp, a3.reverse = Ai2, a3.sampleSize = Zl, a3.set = cd, a3.setWith = hd, a3.shuffle = Jl, a3.slice = Yh, a3.sortBy = Vl, a3.sortedUniq = jh, a3.sortedUniqBy = nl, a3.split = Nd, a3.spread = up, a3.tail = tl, a3.take = el, a3.takeRight = rl, a3.takeRightWhile = il, a3.takeWhile = sl, a3.tap = Pl, a3.throttle = ap, a3.thru = er2, a3.toArray = aa2, a3.toPairs = pa2, a3.toPairsIn = da2, a3.toPath = dg, a3.toPlainObject = fa2, a3.transform = ld, a3.unary = op, a3.union = ul, a3.unionBy = al, a3.unionWith = ol, a3.uniq = fl, a3.uniqBy = cl, a3.uniqWith = hl, a3.unset = pd, a3.unzip = Ci2, a3.unzipWith = Yu2, a3.update = dd, a3.updateWith = gd, a3.values = Gt2, a3.valuesIn = vd, a3.without = ll, a3.words = _a2, a3.wrap = fp, a3.xor = pl, a3.xorBy = dl, a3.xorWith = gl, a3.zip = vl, a3.zipObject = _l, a3.zipObjectDeep = ml, a3.zipWith = wl, a3.entries = pa2, a3.entriesIn = da2, a3.extend = ca2, a3.extendWith = fr2, Li2(a3, a3), a3.add = vg, a3.attempt = ma2, a3.camelCase = Pd, a3.capitalize = ga2, a3.ceil = _g, a3.clamp = _d, a3.clone = hp, a3.cloneDeep = pp, a3.cloneDeepWith = dp, a3.cloneWith = lp, a3.conformsTo = gp, a3.deburr = va2, a3.defaultTo = Xd, a3.divide = mg, a3.endsWith = Ad, a3.eq = bn2, a3.escape = Cd, a3.escapeRegExp = Id, a3.every = bl, a3.find = Ll, a3.findIndex = qu, a3.findKey = Kp, a3.findLast = Dl, a3.findLastIndex = Bu2, a3.findLastKey = Yp, a3.floor = wg, a3.forEach = Ju2, a3.forEachRight = Xu2, a3.forIn = Zp, a3.forInRight = Jp, a3.forOwn = Xp, a3.forOwnRight = Qp, a3.get = Si2, a3.gt = vp, a3.gte = _p, a3.has = jp, a3.hasIn = Oi2, a3.head = zu, a3.identity = fn, a3.includes = Wl, a3.indexOf = Dh, a3.inRange = md, a3.invoke = ed, a3.isArguments = Pt2, a3.isArray = O3, a3.isArrayBuffer = mp, a3.isArrayLike = an, a3.isArrayLikeObject = Z2, a3.isBoolean = wp, a3.isBuffer = at2, a3.isDate = Pp, a3.isElement = Ap, a3.isEmpty = Cp, a3.isEqual = Ip, a3.isEqualWith = xp, a3.isError = Ei2, a3.isFinite = Ep, a3.isFunction = Jn2, a3.isInteger = ra2, a3.isLength = ar2, a3.isMap = ia2, a3.isMatch = yp, a3.isMatchWith = Sp, a3.isNaN = Op, a3.isNative = Rp, a3.isNil = Tp, a3.isNull = bp, a3.isNumber = sa2, a3.isObject = K2, a3.isObjectLike = Y, a3.isPlainObject = pe2, a3.isRegExp = yi2, a3.isSafeInteger = Lp, a3.isSet = ua2, a3.isString = or2, a3.isSymbol = pn, a3.isTypedArray = Bt2, a3.isUndefined = Dp, a3.isWeakMap = Np, a3.isWeakSet = Hp, a3.join = Wh, a3.kebabCase = xd, a3.last = In2, a3.lastIndexOf = Fh, a3.lowerCase = Ed, a3.lowerFirst = yd, a3.lt = $p, a3.lte = Up, a3.max = Pg, a3.maxBy = Ag, a3.mean = Cg, a3.meanBy = Ig, a3.min = xg, a3.minBy = Eg, a3.stubArray = Ni2, a3.stubFalse = Hi2, a3.stubObject = cg, a3.stubString = hg, a3.stubTrue = lg, a3.multiply = yg, a3.nth = Mh, a3.noConflict = eg, a3.noop = Di2, a3.now = ir2, a3.pad = Sd, a3.padEnd = Od, a3.padStart = Rd, a3.parseInt = bd, a3.random = wd, a3.reduce = Gl, a3.reduceRight = zl, a3.repeat = Td, a3.replace = Ld, a3.result = fd, a3.round = Sg, a3.runInContext = h4, a3.sample = Yl, a3.size = Xl, a3.snakeCase = Dd, a3.some = Ql, a3.sortedIndex = Zh, a3.sortedIndexBy = Jh, a3.sortedIndexOf = Xh, a3.sortedLastIndex = Qh, a3.sortedLastIndexBy = Vh, a3.sortedLastIndexOf = kh, a3.startCase = Hd, a3.startsWith = $d, a3.subtract = Og, a3.sum = Rg, a3.sumBy = bg, a3.template = Ud, a3.times = pg, a3.toFinite = Xn2, a3.toInteger = R, a3.toLength = oa2, a3.toLower = Wd, a3.toNumber = xn2, a3.toSafeInteger = Wp, a3.toString = W, a3.toUpper = Fd, a3.trim = Md, a3.trimEnd = qd, a3.trimStart = Bd, a3.truncate = Gd, a3.unescape = zd, a3.uniqueId = gg, a3.upperCase = Kd, a3.upperFirst = Ri2, a3.each = Ju2, a3.eachRight = Xu2, a3.first = zu, Li2(a3, function() {
        var n4 = {};
        return $n2(a3, function(t, e2) {
          F.call(a3.prototype, e2) || (n4[e2] = t);
        }), n4;
      }(), { chain: false }), a3.VERSION = p3, mn(["bind", "bindKey", "curry", "curryRight", "partial", "partialRight"], function(n4) {
        a3[n4].placeholder = a3;
      }), mn(["drop", "take"], function(n4, t) {
        H.prototype[n4] = function(e2) {
          e2 = e2 === i3 ? 1 : Q2(R(e2), 0);
          var r2 = this.__filtered__ && !t ? new H(this) : this.clone();
          return r2.__filtered__ ? r2.__takeCount__ = nn(e2, r2.__takeCount__) : r2.__views__.push({ size: nn(e2, Hn2), type: n4 + (r2.__dir__ < 0 ? "Right" : "") }), r2;
        }, H.prototype[n4 + "Right"] = function(e2) {
          return this.reverse()[n4](e2).reverse();
        };
      }), mn(["filter", "map", "takeWhile"], function(n4, t) {
        var e2 = t + 1, r2 = e2 == Gi2 || e2 == Fa2;
        H.prototype[n4] = function(s2) {
          var o3 = this.clone();
          return o3.__iteratees__.push({ iteratee: x2(s2, 3), type: e2 }), o3.__filtered__ = o3.__filtered__ || r2, o3;
        };
      }), mn(["head", "last"], function(n4, t) {
        var e2 = "take" + (t ? "Right" : "");
        H.prototype[n4] = function() {
          return this[e2](1).value()[0];
        };
      }), mn(["initial", "tail"], function(n4, t) {
        var e2 = "drop" + (t ? "" : "Right");
        H.prototype[n4] = function() {
          return this.__filtered__ ? new H(this) : this[e2](1);
        };
      }), H.prototype.compact = function() {
        return this.filter(fn);
      }, H.prototype.find = function(n4) {
        return this.filter(n4).head();
      }, H.prototype.findLast = function(n4) {
        return this.reverse().find(n4);
      }, H.prototype.invokeMap = L4(function(n4, t) {
        return typeof n4 == "function" ? new H(this) : this.map(function(e2) {
          return ae2(e2, n4, t);
        });
      }), H.prototype.reject = function(n4) {
        return this.filter(ur2(x2(n4)));
      }, H.prototype.slice = function(n4, t) {
        n4 = R(n4);
        var e2 = this;
        return e2.__filtered__ && (n4 > 0 || t < 0) ? new H(e2) : (n4 < 0 ? e2 = e2.takeRight(-n4) : n4 && (e2 = e2.drop(n4)), t !== i3 && (t = R(t), e2 = t < 0 ? e2.dropRight(-t) : e2.take(t - n4)), e2);
      }, H.prototype.takeRightWhile = function(n4) {
        return this.reverse().takeWhile(n4).reverse();
      }, H.prototype.toArray = function() {
        return this.take(Hn2);
      }, $n2(H.prototype, function(n4, t) {
        var e2 = /^(?:filter|find|map|reject)|While$/.test(t), r2 = /^(?:head|last)$/.test(t), s2 = a3[r2 ? "take" + (t == "last" ? "Right" : "") : t], o3 = r2 || /^find/.test(t);
        s2 && (a3.prototype[t] = function() {
          var f3 = this.__wrapped__, c2 = r2 ? [1] : arguments, l2 = f3 instanceof H, v3 = c2[0], _3 = l2 || O3(f3), m3 = function(N2) {
            var $2 = s2.apply(a3, nt2([N2], c2));
            return r2 && P2 ? $2[0] : $2;
          };
          _3 && e2 && typeof v3 == "function" && v3.length != 1 && (l2 = _3 = false);
          var P2 = this.__chain__, I2 = !!this.__actions__.length, E3 = o3 && !P2, T2 = l2 && !I2;
          if (!o3 && _3) {
            f3 = T2 ? f3 : new H(this);
            var y3 = n4.apply(f3, c2);
            return y3.__actions__.push({ func: er2, args: [m3], thisArg: i3 }), new Pn2(y3, P2);
          }
          return E3 && T2 ? n4.apply(this, c2) : (y3 = this.thru(m3), E3 ? r2 ? y3.value()[0] : y3.value() : y3);
        });
      }), mn(["pop", "push", "shift", "sort", "splice", "unshift"], function(n4) {
        var t = Oe2[n4], e2 = /^(?:push|sort|unshift)$/.test(n4) ? "tap" : "thru", r2 = /^(?:pop|shift)$/.test(n4);
        a3.prototype[n4] = function() {
          var s2 = arguments;
          if (r2 && !this.__chain__) {
            var o3 = this.value();
            return t.apply(O3(o3) ? o3 : [], s2);
          }
          return this[e2](function(f3) {
            return t.apply(O3(f3) ? f3 : [], s2);
          });
        };
      }), $n2(H.prototype, function(n4, t) {
        var e2 = a3[t];
        if (e2) {
          var r2 = e2.name + "";
          F.call(Ut3, r2) || (Ut3[r2] = []), Ut3[r2].push({ name: t, func: e2 });
        }
      }), Ut3[Xe2(i3, ct2).name] = [{ name: "wrapper", func: i3 }], H.prototype.clone = zf2, H.prototype.reverse = Kf2, H.prototype.value = Yf2, a3.prototype.at = Al, a3.prototype.chain = Cl, a3.prototype.commit = Il, a3.prototype.next = xl, a3.prototype.plant = yl, a3.prototype.reverse = Sl, a3.prototype.toJSON = a3.prototype.valueOf = a3.prototype.value = Ol, a3.prototype.first = a3.prototype.head, ne2 && (a3.prototype[ne2] = El), a3;
    }, Nt2 = If2();
    lt2 ? ((lt2.exports = Nt2)._ = Nt2, Tr2._ = Nt2) : k2._ = Nt2;
  }).call(ge);
})(Ui, Ui.exports);
var zg = Object.defineProperty, Kg = Object.defineProperties, Yg = Object.getOwnPropertyDescriptors, ya = Object.getOwnPropertySymbols, Zg = Object.prototype.hasOwnProperty, Jg = Object.prototype.propertyIsEnumerable, Sa = (A2, u3, i3) => u3 in A2 ? zg(A2, u3, { enumerable: true, configurable: true, writable: true, value: i3 }) : A2[u3] = i3, cr = (A2, u3) => {
  for (var i3 in u3 || (u3 = {}))
    Zg.call(u3, i3) && Sa(A2, i3, u3[i3]);
  if (ya)
    for (var i3 of ya(u3))
      Jg.call(u3, i3) && Sa(A2, i3, u3[i3]);
  return A2;
}, Xg = (A2, u3) => Kg(A2, Yg(u3));
function ft(A2, u3, i3) {
  var p3;
  const w3 = dn(A2);
  return ((p3 = u3.rpcMap) == null ? void 0 : p3[w3.reference]) || `${Gg}?chainId=${w3.namespace}:${w3.reference}&projectId=${i3}`;
}
function Ct(A2) {
  return A2.includes(":") ? A2.split(":")[1] : A2;
}
function Oa(A2) {
  return A2.map((u3) => `${u3.split(":")[0]}:${u3.split(":")[1]}`);
}
function Qg(A2, u3) {
  const i3 = Object.keys(u3.namespaces).filter((w3) => w3.includes(A2));
  if (!i3.length)
    return [];
  const p3 = [];
  return i3.forEach((w3) => {
    const b3 = u3.namespaces[w3].accounts;
    p3.push(...b3);
  }), p3;
}
function Wi(A2 = {}, u3 = {}) {
  const i3 = Ra(A2), p3 = Ra(u3);
  return Ui.exports.merge(i3, p3);
}
function Ra(A2) {
  var u3, i3, p3, w3;
  const b3 = {};
  if (!Yr(A2))
    return b3;
  for (const [D2, En2] of Object.entries(A2)) {
    const zt2 = Zi$1(D2) ? [D2] : En2.chains, pr2 = En2.methods || [], It2 = En2.events || [], Ln2 = En2.rpcMap || {}, Fn2 = vo(D2);
    b3[Fn2] = Xg(cr(cr({}, b3[Fn2]), En2), { chains: ge$2(zt2, (u3 = b3[Fn2]) == null ? void 0 : u3.chains), methods: ge$2(pr2, (i3 = b3[Fn2]) == null ? void 0 : i3.methods), events: ge$2(It2, (p3 = b3[Fn2]) == null ? void 0 : p3.events), rpcMap: cr(cr({}, Ln2), (w3 = b3[Fn2]) == null ? void 0 : w3.rpcMap) });
  }
  return b3;
}
function Vg(A2) {
  return A2.includes(":") ? A2.split(":")[2] : A2;
}
function ba(A2) {
  const u3 = {};
  for (const [i3, p3] of Object.entries(A2)) {
    const w3 = p3.methods || [], b3 = p3.events || [], D2 = p3.accounts || [], En2 = Zi$1(i3) ? [i3] : p3.chains ? p3.chains : Oa(p3.accounts);
    u3[i3] = { chains: En2, methods: w3, events: b3, accounts: D2 };
  }
  return u3;
}
function Fi(A2) {
  return typeof A2 == "number" ? A2 : A2.includes("0x") ? parseInt(A2, 16) : (A2 = A2.includes(":") ? A2.split(":")[1] : A2, isNaN(Number(A2)) ? A2 : Number(A2));
}
const Ta = {}, z$1 = (A2) => Ta[A2], Mi = (A2, u3) => {
  Ta[A2] = u3;
};
class kg {
  constructor(u3) {
    this.name = "polkadot", this.namespace = u3.namespace, this.events = z$1("events"), this.client = z$1("client"), this.chainId = this.getDefaultChain(), this.httpProviders = this.createHttpProviders();
  }
  updateNamespace(u3) {
    this.namespace = Object.assign(this.namespace, u3);
  }
  requestAccounts() {
    return this.getAccounts();
  }
  getDefaultChain() {
    if (this.chainId)
      return this.chainId;
    if (this.namespace.defaultChain)
      return this.namespace.defaultChain;
    const u3 = this.namespace.chains[0];
    if (!u3)
      throw new Error("ChainId not found");
    return u3.split(":")[1];
  }
  request(u3) {
    return this.namespace.methods.includes(u3.request.method) ? this.client.request(u3) : this.getHttpProvider().request(u3.request);
  }
  setDefaultChain(u3, i3) {
    this.httpProviders[u3] || this.setHttpProvider(u3, i3), this.chainId = u3, this.events.emit(Vn.DEFAULT_CHAIN_CHANGED, `${this.name}:${u3}`);
  }
  getAccounts() {
    const u3 = this.namespace.accounts;
    return u3 ? u3.filter((i3) => i3.split(":")[1] === this.chainId.toString()).map((i3) => i3.split(":")[2]) || [] : [];
  }
  createHttpProviders() {
    const u3 = {};
    return this.namespace.chains.forEach((i3) => {
      var p3;
      const w3 = Ct(i3);
      u3[w3] = this.createHttpProvider(w3, (p3 = this.namespace.rpcMap) == null ? void 0 : p3[i3]);
    }), u3;
  }
  getHttpProvider() {
    const u3 = `${this.name}:${this.chainId}`, i3 = this.httpProviders[u3];
    if (typeof i3 > "u")
      throw new Error(`JSON-RPC provider for ${u3} not found`);
    return i3;
  }
  setHttpProvider(u3, i3) {
    const p3 = this.createHttpProvider(u3, i3);
    p3 && (this.httpProviders[u3] = p3);
  }
  createHttpProvider(u3, i3) {
    const p3 = i3 || ft(u3, this.namespace, this.client.core.projectId);
    if (!p3)
      throw new Error(`No RPC url provided for chainId: ${u3}`);
    return new o$1(new f2(p3, z$1("disableProviderPing")));
  }
}
class jg {
  constructor(u3) {
    this.name = "eip155", this.namespace = u3.namespace, this.events = z$1("events"), this.client = z$1("client"), this.httpProviders = this.createHttpProviders(), this.chainId = parseInt(this.getDefaultChain());
  }
  async request(u3) {
    switch (u3.request.method) {
      case "eth_requestAccounts":
        return this.getAccounts();
      case "eth_accounts":
        return this.getAccounts();
      case "wallet_switchEthereumChain":
        return await this.handleSwitchChain(u3);
      case "eth_chainId":
        return parseInt(this.getDefaultChain());
    }
    return this.namespace.methods.includes(u3.request.method) ? await this.client.request(u3) : this.getHttpProvider().request(u3.request);
  }
  updateNamespace(u3) {
    this.namespace = Object.assign(this.namespace, u3);
  }
  setDefaultChain(u3, i3) {
    this.httpProviders[u3] || this.setHttpProvider(parseInt(u3), i3), this.chainId = parseInt(u3), this.events.emit(Vn.DEFAULT_CHAIN_CHANGED, `${this.name}:${u3}`);
  }
  requestAccounts() {
    return this.getAccounts();
  }
  getDefaultChain() {
    if (this.chainId)
      return this.chainId.toString();
    if (this.namespace.defaultChain)
      return this.namespace.defaultChain;
    const u3 = this.namespace.chains[0];
    if (!u3)
      throw new Error("ChainId not found");
    return u3.split(":")[1];
  }
  createHttpProvider(u3, i3) {
    const p3 = i3 || ft(`${this.name}:${u3}`, this.namespace, this.client.core.projectId);
    if (!p3)
      throw new Error(`No RPC url provided for chainId: ${u3}`);
    return new o$1(new f2(p3, z$1("disableProviderPing")));
  }
  setHttpProvider(u3, i3) {
    const p3 = this.createHttpProvider(u3, i3);
    p3 && (this.httpProviders[u3] = p3);
  }
  createHttpProviders() {
    const u3 = {};
    return this.namespace.chains.forEach((i3) => {
      var p3;
      const w3 = parseInt(Ct(i3));
      u3[w3] = this.createHttpProvider(w3, (p3 = this.namespace.rpcMap) == null ? void 0 : p3[i3]);
    }), u3;
  }
  getAccounts() {
    const u3 = this.namespace.accounts;
    return u3 ? [...new Set(u3.filter((i3) => i3.split(":")[1] === this.chainId.toString()).map((i3) => i3.split(":")[2]))] : [];
  }
  getHttpProvider() {
    const u3 = this.chainId, i3 = this.httpProviders[u3];
    if (typeof i3 > "u")
      throw new Error(`JSON-RPC provider for ${u3} not found`);
    return i3;
  }
  async handleSwitchChain(u3) {
    var i3, p3;
    let w3 = u3.request.params ? (i3 = u3.request.params[0]) == null ? void 0 : i3.chainId : "0x0";
    w3 = w3.startsWith("0x") ? w3 : `0x${w3}`;
    const b3 = parseInt(w3, 16);
    if (this.isChainApproved(b3))
      this.setDefaultChain(`${b3}`);
    else if (this.namespace.methods.includes("wallet_switchEthereumChain"))
      await this.client.request({ topic: u3.topic, request: { method: u3.request.method, params: [{ chainId: w3 }] }, chainId: (p3 = this.namespace.chains) == null ? void 0 : p3[0] }), this.setDefaultChain(`${b3}`);
    else
      throw new Error(`Failed to switch to chain 'eip155:${b3}'. The chain is not approved or the wallet does not support 'wallet_switchEthereumChain' method.`);
    return null;
  }
  isChainApproved(u3) {
    return this.namespace.chains.includes(`${this.name}:${u3}`);
  }
}
class nv {
  constructor(u3) {
    this.name = "solana", this.namespace = u3.namespace, this.events = z$1("events"), this.client = z$1("client"), this.chainId = this.getDefaultChain(), this.httpProviders = this.createHttpProviders();
  }
  updateNamespace(u3) {
    this.namespace = Object.assign(this.namespace, u3);
  }
  requestAccounts() {
    return this.getAccounts();
  }
  request(u3) {
    return this.namespace.methods.includes(u3.request.method) ? this.client.request(u3) : this.getHttpProvider().request(u3.request);
  }
  setDefaultChain(u3, i3) {
    this.httpProviders[u3] || this.setHttpProvider(u3, i3), this.chainId = u3, this.events.emit(Vn.DEFAULT_CHAIN_CHANGED, `${this.name}:${u3}`);
  }
  getDefaultChain() {
    if (this.chainId)
      return this.chainId;
    if (this.namespace.defaultChain)
      return this.namespace.defaultChain;
    const u3 = this.namespace.chains[0];
    if (!u3)
      throw new Error("ChainId not found");
    return u3.split(":")[1];
  }
  getAccounts() {
    const u3 = this.namespace.accounts;
    return u3 ? [...new Set(u3.filter((i3) => i3.split(":")[1] === this.chainId.toString()).map((i3) => i3.split(":")[2]))] : [];
  }
  createHttpProviders() {
    const u3 = {};
    return this.namespace.chains.forEach((i3) => {
      var p3;
      const w3 = Ct(i3);
      u3[w3] = this.createHttpProvider(w3, (p3 = this.namespace.rpcMap) == null ? void 0 : p3[i3]);
    }), u3;
  }
  getHttpProvider() {
    const u3 = `${this.name}:${this.chainId}`, i3 = this.httpProviders[u3];
    if (typeof i3 > "u")
      throw new Error(`JSON-RPC provider for ${u3} not found`);
    return i3;
  }
  setHttpProvider(u3, i3) {
    const p3 = this.createHttpProvider(u3, i3);
    p3 && (this.httpProviders[u3] = p3);
  }
  createHttpProvider(u3, i3) {
    const p3 = i3 || ft(u3, this.namespace, this.client.core.projectId);
    if (!p3)
      throw new Error(`No RPC url provided for chainId: ${u3}`);
    return new o$1(new f2(p3, z$1("disableProviderPing")));
  }
}
class tv {
  constructor(u3) {
    this.name = "cosmos", this.namespace = u3.namespace, this.events = z$1("events"), this.client = z$1("client"), this.chainId = this.getDefaultChain(), this.httpProviders = this.createHttpProviders();
  }
  updateNamespace(u3) {
    this.namespace = Object.assign(this.namespace, u3);
  }
  requestAccounts() {
    return this.getAccounts();
  }
  getDefaultChain() {
    if (this.chainId)
      return this.chainId;
    if (this.namespace.defaultChain)
      return this.namespace.defaultChain;
    const u3 = this.namespace.chains[0];
    if (!u3)
      throw new Error("ChainId not found");
    return u3.split(":")[1];
  }
  request(u3) {
    return this.namespace.methods.includes(u3.request.method) ? this.client.request(u3) : this.getHttpProvider().request(u3.request);
  }
  setDefaultChain(u3, i3) {
    this.httpProviders[u3] || this.setHttpProvider(u3, i3), this.chainId = u3, this.events.emit(Vn.DEFAULT_CHAIN_CHANGED, `${this.name}:${this.chainId}`);
  }
  getAccounts() {
    const u3 = this.namespace.accounts;
    return u3 ? [...new Set(u3.filter((i3) => i3.split(":")[1] === this.chainId.toString()).map((i3) => i3.split(":")[2]))] : [];
  }
  createHttpProviders() {
    const u3 = {};
    return this.namespace.chains.forEach((i3) => {
      var p3;
      const w3 = Ct(i3);
      u3[w3] = this.createHttpProvider(w3, (p3 = this.namespace.rpcMap) == null ? void 0 : p3[i3]);
    }), u3;
  }
  getHttpProvider() {
    const u3 = `${this.name}:${this.chainId}`, i3 = this.httpProviders[u3];
    if (typeof i3 > "u")
      throw new Error(`JSON-RPC provider for ${u3} not found`);
    return i3;
  }
  setHttpProvider(u3, i3) {
    const p3 = this.createHttpProvider(u3, i3);
    p3 && (this.httpProviders[u3] = p3);
  }
  createHttpProvider(u3, i3) {
    const p3 = i3 || ft(u3, this.namespace, this.client.core.projectId);
    if (!p3)
      throw new Error(`No RPC url provided for chainId: ${u3}`);
    return new o$1(new f2(p3, z$1("disableProviderPing")));
  }
}
class ev {
  constructor(u3) {
    this.name = "cip34", this.namespace = u3.namespace, this.events = z$1("events"), this.client = z$1("client"), this.chainId = this.getDefaultChain(), this.httpProviders = this.createHttpProviders();
  }
  updateNamespace(u3) {
    this.namespace = Object.assign(this.namespace, u3);
  }
  requestAccounts() {
    return this.getAccounts();
  }
  getDefaultChain() {
    if (this.chainId)
      return this.chainId;
    if (this.namespace.defaultChain)
      return this.namespace.defaultChain;
    const u3 = this.namespace.chains[0];
    if (!u3)
      throw new Error("ChainId not found");
    return u3.split(":")[1];
  }
  request(u3) {
    return this.namespace.methods.includes(u3.request.method) ? this.client.request(u3) : this.getHttpProvider().request(u3.request);
  }
  setDefaultChain(u3, i3) {
    this.httpProviders[u3] || this.setHttpProvider(u3, i3), this.chainId = u3, this.events.emit(Vn.DEFAULT_CHAIN_CHANGED, `${this.name}:${this.chainId}`);
  }
  getAccounts() {
    const u3 = this.namespace.accounts;
    return u3 ? [...new Set(u3.filter((i3) => i3.split(":")[1] === this.chainId.toString()).map((i3) => i3.split(":")[2]))] : [];
  }
  createHttpProviders() {
    const u3 = {};
    return this.namespace.chains.forEach((i3) => {
      const p3 = this.getCardanoRPCUrl(i3), w3 = Ct(i3);
      u3[w3] = this.createHttpProvider(w3, p3);
    }), u3;
  }
  getHttpProvider() {
    const u3 = `${this.name}:${this.chainId}`, i3 = this.httpProviders[u3];
    if (typeof i3 > "u")
      throw new Error(`JSON-RPC provider for ${u3} not found`);
    return i3;
  }
  getCardanoRPCUrl(u3) {
    const i3 = this.namespace.rpcMap;
    if (i3)
      return i3[u3];
  }
  setHttpProvider(u3, i3) {
    const p3 = this.createHttpProvider(u3, i3);
    p3 && (this.httpProviders[u3] = p3);
  }
  createHttpProvider(u3, i3) {
    const p3 = i3 || this.getCardanoRPCUrl(u3);
    if (!p3)
      throw new Error(`No RPC url provided for chainId: ${u3}`);
    return new o$1(new f2(p3, z$1("disableProviderPing")));
  }
}
class rv {
  constructor(u3) {
    this.name = "elrond", this.namespace = u3.namespace, this.events = z$1("events"), this.client = z$1("client"), this.chainId = this.getDefaultChain(), this.httpProviders = this.createHttpProviders();
  }
  updateNamespace(u3) {
    this.namespace = Object.assign(this.namespace, u3);
  }
  requestAccounts() {
    return this.getAccounts();
  }
  request(u3) {
    return this.namespace.methods.includes(u3.request.method) ? this.client.request(u3) : this.getHttpProvider().request(u3.request);
  }
  setDefaultChain(u3, i3) {
    this.httpProviders[u3] || this.setHttpProvider(u3, i3), this.chainId = u3, this.events.emit(Vn.DEFAULT_CHAIN_CHANGED, `${this.name}:${u3}`);
  }
  getDefaultChain() {
    if (this.chainId)
      return this.chainId;
    if (this.namespace.defaultChain)
      return this.namespace.defaultChain;
    const u3 = this.namespace.chains[0];
    if (!u3)
      throw new Error("ChainId not found");
    return u3.split(":")[1];
  }
  getAccounts() {
    const u3 = this.namespace.accounts;
    return u3 ? [...new Set(u3.filter((i3) => i3.split(":")[1] === this.chainId.toString()).map((i3) => i3.split(":")[2]))] : [];
  }
  createHttpProviders() {
    const u3 = {};
    return this.namespace.chains.forEach((i3) => {
      var p3;
      const w3 = Ct(i3);
      u3[w3] = this.createHttpProvider(w3, (p3 = this.namespace.rpcMap) == null ? void 0 : p3[i3]);
    }), u3;
  }
  getHttpProvider() {
    const u3 = `${this.name}:${this.chainId}`, i3 = this.httpProviders[u3];
    if (typeof i3 > "u")
      throw new Error(`JSON-RPC provider for ${u3} not found`);
    return i3;
  }
  setHttpProvider(u3, i3) {
    const p3 = this.createHttpProvider(u3, i3);
    p3 && (this.httpProviders[u3] = p3);
  }
  createHttpProvider(u3, i3) {
    const p3 = i3 || ft(u3, this.namespace, this.client.core.projectId);
    if (!p3)
      throw new Error(`No RPC url provided for chainId: ${u3}`);
    return new o$1(new f2(p3, z$1("disableProviderPing")));
  }
}
class iv {
  constructor(u3) {
    this.name = "multiversx", this.namespace = u3.namespace, this.events = z$1("events"), this.client = z$1("client"), this.chainId = this.getDefaultChain(), this.httpProviders = this.createHttpProviders();
  }
  updateNamespace(u3) {
    this.namespace = Object.assign(this.namespace, u3);
  }
  requestAccounts() {
    return this.getAccounts();
  }
  request(u3) {
    return this.namespace.methods.includes(u3.request.method) ? this.client.request(u3) : this.getHttpProvider().request(u3.request);
  }
  setDefaultChain(u3, i3) {
    this.httpProviders[u3] || this.setHttpProvider(u3, i3), this.chainId = u3, this.events.emit(Vn.DEFAULT_CHAIN_CHANGED, `${this.name}:${u3}`);
  }
  getDefaultChain() {
    if (this.chainId)
      return this.chainId;
    if (this.namespace.defaultChain)
      return this.namespace.defaultChain;
    const u3 = this.namespace.chains[0];
    if (!u3)
      throw new Error("ChainId not found");
    return u3.split(":")[1];
  }
  getAccounts() {
    const u3 = this.namespace.accounts;
    return u3 ? [...new Set(u3.filter((i3) => i3.split(":")[1] === this.chainId.toString()).map((i3) => i3.split(":")[2]))] : [];
  }
  createHttpProviders() {
    const u3 = {};
    return this.namespace.chains.forEach((i3) => {
      var p3;
      const w3 = Ct(i3);
      u3[w3] = this.createHttpProvider(w3, (p3 = this.namespace.rpcMap) == null ? void 0 : p3[i3]);
    }), u3;
  }
  getHttpProvider() {
    const u3 = `${this.name}:${this.chainId}`, i3 = this.httpProviders[u3];
    if (typeof i3 > "u")
      throw new Error(`JSON-RPC provider for ${u3} not found`);
    return i3;
  }
  setHttpProvider(u3, i3) {
    const p3 = this.createHttpProvider(u3, i3);
    p3 && (this.httpProviders[u3] = p3);
  }
  createHttpProvider(u3, i3) {
    const p3 = i3 || ft(u3, this.namespace, this.client.core.projectId);
    if (!p3)
      throw new Error(`No RPC url provided for chainId: ${u3}`);
    return new o$1(new f2(p3, z$1("disableProviderPing")));
  }
}
class sv {
  constructor(u3) {
    this.name = "near", this.namespace = u3.namespace, this.events = z$1("events"), this.client = z$1("client"), this.chainId = this.getDefaultChain(), this.httpProviders = this.createHttpProviders();
  }
  updateNamespace(u3) {
    this.namespace = Object.assign(this.namespace, u3);
  }
  requestAccounts() {
    return this.getAccounts();
  }
  getDefaultChain() {
    if (this.chainId)
      return this.chainId;
    if (this.namespace.defaultChain)
      return this.namespace.defaultChain;
    const u3 = this.namespace.chains[0];
    if (!u3)
      throw new Error("ChainId not found");
    return u3.split(":")[1];
  }
  request(u3) {
    return this.namespace.methods.includes(u3.request.method) ? this.client.request(u3) : this.getHttpProvider().request(u3.request);
  }
  setDefaultChain(u3, i3) {
    if (this.chainId = u3, !this.httpProviders[u3]) {
      const p3 = i3 || ft(`${this.name}:${u3}`, this.namespace);
      if (!p3)
        throw new Error(`No RPC url provided for chainId: ${u3}`);
      this.setHttpProvider(u3, p3);
    }
    this.events.emit(Vn.DEFAULT_CHAIN_CHANGED, `${this.name}:${this.chainId}`);
  }
  getAccounts() {
    const u3 = this.namespace.accounts;
    return u3 ? u3.filter((i3) => i3.split(":")[1] === this.chainId.toString()).map((i3) => i3.split(":")[2]) || [] : [];
  }
  createHttpProviders() {
    const u3 = {};
    return this.namespace.chains.forEach((i3) => {
      var p3;
      u3[i3] = this.createHttpProvider(i3, (p3 = this.namespace.rpcMap) == null ? void 0 : p3[i3]);
    }), u3;
  }
  getHttpProvider() {
    const u3 = `${this.name}:${this.chainId}`, i3 = this.httpProviders[u3];
    if (typeof i3 > "u")
      throw new Error(`JSON-RPC provider for ${u3} not found`);
    return i3;
  }
  setHttpProvider(u3, i3) {
    const p3 = this.createHttpProvider(u3, i3);
    p3 && (this.httpProviders[u3] = p3);
  }
  createHttpProvider(u3, i3) {
    const p3 = i3 || ft(u3, this.namespace);
    return typeof p3 > "u" ? void 0 : new o$1(new f2(p3, z$1("disableProviderPing")));
  }
}
var uv = Object.defineProperty, av = Object.defineProperties, ov = Object.getOwnPropertyDescriptors, La = Object.getOwnPropertySymbols, fv = Object.prototype.hasOwnProperty, cv = Object.prototype.propertyIsEnumerable, Da = (A2, u3, i3) => u3 in A2 ? uv(A2, u3, { enumerable: true, configurable: true, writable: true, value: i3 }) : A2[u3] = i3, hr = (A2, u3) => {
  for (var i3 in u3 || (u3 = {}))
    fv.call(u3, i3) && Da(A2, i3, u3[i3]);
  if (La)
    for (var i3 of La(u3))
      cv.call(u3, i3) && Da(A2, i3, u3[i3]);
  return A2;
}, qi = (A2, u3) => av(A2, ov(u3));
class lr {
  constructor(u3) {
    this.events = new Wg(), this.rpcProviders = {}, this.shouldAbortPairingAttempt = false, this.maxPairingAttempts = 10, this.disableProviderPing = false, this.providerOpts = u3, this.logger = typeof (u3 == null ? void 0 : u3.logger) < "u" && typeof (u3 == null ? void 0 : u3.logger) != "string" ? u3.logger : Hg(k({ level: (u3 == null ? void 0 : u3.logger) || xa })), this.disableProviderPing = (u3 == null ? void 0 : u3.disableProviderPing) || false;
  }
  static async init(u3) {
    const i3 = new lr(u3);
    return await i3.initialize(), i3;
  }
  async request(u3, i3, p3) {
    const [w3, b3] = this.validateChain(i3);
    if (!this.session)
      throw new Error("Please call connect() before request()");
    return await this.getProvider(w3).request({ request: hr({}, u3), chainId: `${w3}:${b3}`, topic: this.session.topic, expiry: p3 });
  }
  sendAsync(u3, i3, p3, w3) {
    const b3 = (/* @__PURE__ */ new Date()).getTime();
    this.request(u3, p3, w3).then((D2) => i3(null, formatJsonRpcResult(b3, D2))).catch((D2) => i3(D2, void 0));
  }
  async enable() {
    if (!this.client)
      throw new Error("Sign Client not initialized");
    return this.session || await this.connect({ namespaces: this.namespaces, optionalNamespaces: this.optionalNamespaces, sessionProperties: this.sessionProperties }), await this.requestAccounts();
  }
  async disconnect() {
    var u3;
    if (!this.session)
      throw new Error("Please call connect() before enable()");
    await this.client.disconnect({ topic: (u3 = this.session) == null ? void 0 : u3.topic, reason: tr$1("USER_DISCONNECTED") }), await this.cleanup();
  }
  async connect(u3) {
    if (!this.client)
      throw new Error("Sign Client not initialized");
    if (this.setNamespaces(u3), await this.cleanupPendingPairings(), !u3.skipPairing)
      return await this.pair(u3.pairingTopic);
  }
  async authenticate(u3) {
    if (!this.client)
      throw new Error("Sign Client not initialized");
    this.setNamespaces(u3), await this.cleanupPendingPairings();
    const { uri: i3, response: p3 } = await this.client.authenticate(u3);
    i3 && (this.uri = i3, this.events.emit("display_uri", i3));
    const w3 = await p3();
    if (this.session = w3.session, this.session) {
      const b3 = ba(this.session.namespaces);
      this.namespaces = Wi(this.namespaces, b3), this.persist("namespaces", this.namespaces), this.onConnect();
    }
    return w3;
  }
  on(u3, i3) {
    this.events.on(u3, i3);
  }
  once(u3, i3) {
    this.events.once(u3, i3);
  }
  removeListener(u3, i3) {
    this.events.removeListener(u3, i3);
  }
  off(u3, i3) {
    this.events.off(u3, i3);
  }
  get isWalletConnect() {
    return true;
  }
  async pair(u3) {
    this.shouldAbortPairingAttempt = false;
    let i3 = 0;
    do {
      if (this.shouldAbortPairingAttempt)
        throw new Error("Pairing aborted");
      if (i3 >= this.maxPairingAttempts)
        throw new Error("Max auto pairing attempts reached");
      const { uri: p3, approval: w3 } = await this.client.connect({ pairingTopic: u3, requiredNamespaces: this.namespaces, optionalNamespaces: this.optionalNamespaces, sessionProperties: this.sessionProperties });
      p3 && (this.uri = p3, this.events.emit("display_uri", p3)), await w3().then((b3) => {
        this.session = b3;
        const D2 = ba(b3.namespaces);
        this.namespaces = Wi(this.namespaces, D2), this.persist("namespaces", this.namespaces);
      }).catch((b3) => {
        if (b3.message !== Ge)
          throw b3;
        i3++;
      });
    } while (!this.session);
    return this.onConnect(), this.session;
  }
  setDefaultChain(u3, i3) {
    try {
      if (!this.session)
        return;
      const [p3, w3] = this.validateChain(u3);
      this.getProvider(p3).setDefaultChain(w3, i3);
    } catch (p3) {
      if (!/Please call connect/.test(p3.message))
        throw p3;
    }
  }
  async cleanupPendingPairings(u3 = {}) {
    this.logger.info("Cleaning up inactive pairings...");
    const i3 = this.client.pairing.getAll();
    if (Er(i3)) {
      for (const p3 of i3)
        u3.deletePairings ? this.client.core.expirer.set(p3.topic, 0) : await this.client.core.relayer.subscriber.unsubscribe(p3.topic);
      this.logger.info(`Inactive pairings cleared: ${i3.length}`);
    }
  }
  abortPairingAttempt() {
    this.shouldAbortPairingAttempt = true;
  }
  async checkStorage() {
    if (this.namespaces = await this.getFromStore("namespaces"), this.optionalNamespaces = await this.getFromStore("optionalNamespaces") || {}, this.client.session.length) {
      const u3 = this.client.session.keys.length - 1;
      this.session = this.client.session.get(this.client.session.keys[u3]), this.createProviders();
    }
  }
  async initialize() {
    this.logger.trace("Initialized"), await this.createClient(), await this.checkStorage(), this.registerEventListeners();
  }
  async createClient() {
    this.client = this.providerOpts.client || await oe.init({ logger: this.providerOpts.logger || xa, relayUrl: this.providerOpts.relayUrl || Mg, projectId: this.providerOpts.projectId, metadata: this.providerOpts.metadata, storageOptions: this.providerOpts.storageOptions, storage: this.providerOpts.storage, name: this.providerOpts.name }), this.logger.trace("SignClient Initialized");
  }
  createProviders() {
    if (!this.client)
      throw new Error("Sign Client not initialized");
    if (!this.session)
      throw new Error("Session not initialized. Please call connect() before enable()");
    const u3 = [...new Set(Object.keys(this.session.namespaces).map((i3) => vo(i3)))];
    Mi("client", this.client), Mi("events", this.events), Mi("disableProviderPing", this.disableProviderPing), u3.forEach((i3) => {
      if (!this.session)
        return;
      const p3 = Qg(i3, this.session), w3 = Oa(p3), b3 = Wi(this.namespaces, this.optionalNamespaces), D2 = qi(hr({}, b3[i3]), { accounts: p3, chains: w3 });
      switch (i3) {
        case "eip155":
          this.rpcProviders[i3] = new jg({ namespace: D2 });
          break;
        case "solana":
          this.rpcProviders[i3] = new nv({ namespace: D2 });
          break;
        case "cosmos":
          this.rpcProviders[i3] = new tv({ namespace: D2 });
          break;
        case "polkadot":
          this.rpcProviders[i3] = new kg({ namespace: D2 });
          break;
        case "cip34":
          this.rpcProviders[i3] = new ev({ namespace: D2 });
          break;
        case "elrond":
          this.rpcProviders[i3] = new rv({ namespace: D2 });
          break;
        case "multiversx":
          this.rpcProviders[i3] = new iv({ namespace: D2 });
          break;
        case "near":
          this.rpcProviders[i3] = new sv({ namespace: D2 });
          break;
      }
    });
  }
  registerEventListeners() {
    if (typeof this.client > "u")
      throw new Error("Sign Client is not initialized");
    this.client.on("session_ping", (u3) => {
      this.events.emit("session_ping", u3);
    }), this.client.on("session_event", (u3) => {
      const { params: i3 } = u3, { event: p3 } = i3;
      if (p3.name === "accountsChanged") {
        const w3 = p3.data;
        w3 && Er(w3) && this.events.emit("accountsChanged", w3.map(Vg));
      } else if (p3.name === "chainChanged") {
        const w3 = i3.chainId, b3 = i3.event.data, D2 = vo(w3), En2 = Fi(w3) !== Fi(b3) ? `${D2}:${Fi(b3)}` : w3;
        this.onChainChanged(En2);
      } else
        this.events.emit(p3.name, p3.data);
      this.events.emit("session_event", u3);
    }), this.client.on("session_update", ({ topic: u3, params: i3 }) => {
      var p3;
      const { namespaces: w3 } = i3, b3 = (p3 = this.client) == null ? void 0 : p3.session.get(u3);
      this.session = qi(hr({}, b3), { namespaces: w3 }), this.onSessionUpdate(), this.events.emit("session_update", { topic: u3, params: i3 });
    }), this.client.on("session_delete", async (u3) => {
      await this.cleanup(), this.events.emit("session_delete", u3), this.events.emit("disconnect", qi(hr({}, tr$1("USER_DISCONNECTED")), { data: u3.topic }));
    }), this.on(Vn.DEFAULT_CHAIN_CHANGED, (u3) => {
      this.onChainChanged(u3, true);
    });
  }
  getProvider(u3) {
    if (!this.rpcProviders[u3])
      throw new Error(`Provider not found: ${u3}`);
    return this.rpcProviders[u3];
  }
  onSessionUpdate() {
    Object.keys(this.rpcProviders).forEach((u3) => {
      var i3;
      this.getProvider(u3).updateNamespace((i3 = this.session) == null ? void 0 : i3.namespaces[u3]);
    });
  }
  setNamespaces(u3) {
    const { namespaces: i3, optionalNamespaces: p3, sessionProperties: w3 } = u3;
    i3 && Object.keys(i3).length && (this.namespaces = i3), p3 && Object.keys(p3).length && (this.optionalNamespaces = p3), this.sessionProperties = w3, this.persist("namespaces", i3), this.persist("optionalNamespaces", p3);
  }
  validateChain(u3) {
    const [i3, p3] = (u3 == null ? void 0 : u3.split(":")) || ["", ""];
    if (!this.namespaces || !Object.keys(this.namespaces).length)
      return [i3, p3];
    if (i3 && !Object.keys(this.namespaces || {}).map((D2) => vo(D2)).includes(i3))
      throw new Error(`Namespace '${i3}' is not configured. Please call connect() first with namespace config.`);
    if (i3 && p3)
      return [i3, p3];
    const w3 = vo(Object.keys(this.namespaces)[0]), b3 = this.rpcProviders[w3].getDefaultChain();
    return [w3, b3];
  }
  async requestAccounts() {
    const [u3] = this.validateChain();
    return await this.getProvider(u3).requestAccounts();
  }
  onChainChanged(u3, i3 = false) {
    if (!this.namespaces)
      return;
    const [p3, w3] = this.validateChain(u3);
    w3 && (i3 || this.getProvider(p3).setDefaultChain(w3), this.namespaces[p3] ? this.namespaces[p3].defaultChain = w3 : this.namespaces[`${p3}:${w3}`] ? this.namespaces[`${p3}:${w3}`].defaultChain = w3 : this.namespaces[`${p3}:${w3}`] = { defaultChain: w3 }, this.persist("namespaces", this.namespaces), this.events.emit("chainChanged", w3));
  }
  onConnect() {
    this.createProviders(), this.events.emit("connect", { session: this.session });
  }
  async cleanup() {
    this.session = void 0, this.namespaces = void 0, this.optionalNamespaces = void 0, this.sessionProperties = void 0, this.persist("namespaces", void 0), this.persist("optionalNamespaces", void 0), this.persist("sessionProperties", void 0), await this.cleanupPendingPairings({ deletePairings: true });
  }
  persist(u3, i3) {
    this.client.core.storage.setItem(`${Ea}/${u3}`, i3);
  }
  async getFromStore(u3) {
    return await this.client.core.storage.getItem(`${Ea}/${u3}`);
  }
}
const hv = lr;
const T = "wc", S = "ethereum_provider", $ = `${T}@2:${S}:`, j = "https://rpc.walletconnect.com/v1/", u2 = ["eth_sendTransaction", "personal_sign"], y2 = ["eth_accounts", "eth_requestAccounts", "eth_sendRawTransaction", "eth_sign", "eth_signTransaction", "eth_signTypedData", "eth_signTypedData_v3", "eth_signTypedData_v4", "eth_sendTransaction", "personal_sign", "wallet_switchEthereumChain", "wallet_addEthereumChain", "wallet_getPermissions", "wallet_requestPermissions", "wallet_registerOnboarding", "wallet_watchAsset", "wallet_scanQRCode", "wallet_sendCalls", "wallet_getCapabilities", "wallet_getCallsStatus", "wallet_showCallsStatus"], g2 = ["chainChanged", "accountsChanged"], M = ["chainChanged", "accountsChanged", "message", "disconnect", "connect"];
var q = Object.defineProperty, N = Object.defineProperties, D = Object.getOwnPropertyDescriptors, O2 = Object.getOwnPropertySymbols, U = Object.prototype.hasOwnProperty, Q = Object.prototype.propertyIsEnumerable, b2 = (a3, t, s2) => t in a3 ? q(a3, t, { enumerable: true, configurable: true, writable: true, value: s2 }) : a3[t] = s2, p2 = (a3, t) => {
  for (var s2 in t || (t = {}))
    U.call(t, s2) && b2(a3, s2, t[s2]);
  if (O2)
    for (var s2 of O2(t))
      Q.call(t, s2) && b2(a3, s2, t[s2]);
  return a3;
}, E2 = (a3, t) => N(a3, D(t));
function m2(a3) {
  return Number(a3[0].split(":")[1]);
}
function v2(a3) {
  return `0x${a3.toString(16)}`;
}
function L3(a3) {
  const { chains: t, optionalChains: s2, methods: i3, optionalMethods: e2, events: n4, optionalEvents: o3, rpcMap: r2 } = a3;
  if (!Er(t))
    throw new Error("Invalid chains");
  const c2 = { chains: t, methods: i3 || u2, events: n4 || g2, rpcMap: p2({}, t.length ? { [m2(t)]: r2[m2(t)] } : {}) }, h4 = n4 == null ? void 0 : n4.filter((l2) => !g2.includes(l2)), d4 = i3 == null ? void 0 : i3.filter((l2) => !u2.includes(l2));
  if (!s2 && !o3 && !e2 && !(h4 != null && h4.length) && !(d4 != null && d4.length))
    return { required: t.length ? c2 : void 0 };
  const w3 = (h4 == null ? void 0 : h4.length) && (d4 == null ? void 0 : d4.length) || !s2, I2 = { chains: [...new Set(w3 ? c2.chains.concat(s2 || []) : s2)], methods: [...new Set(c2.methods.concat(e2 != null && e2.length ? e2 : y2))], events: [...new Set(c2.events.concat(o3 != null && o3.length ? o3 : M))], rpcMap: r2 };
  return { required: t.length ? c2 : void 0, optional: s2.length ? I2 : void 0 };
}
class C {
  constructor() {
    this.events = new eventsExports.EventEmitter(), this.namespace = "eip155", this.accounts = [], this.chainId = 1, this.STORAGE_KEY = $, this.on = (t, s2) => (this.events.on(t, s2), this), this.once = (t, s2) => (this.events.once(t, s2), this), this.removeListener = (t, s2) => (this.events.removeListener(t, s2), this), this.off = (t, s2) => (this.events.off(t, s2), this), this.parseAccount = (t) => this.isCompatibleChainId(t) ? this.parseAccountId(t).address : t, this.signer = {}, this.rpc = {};
  }
  static async init(t) {
    const s2 = new C();
    return await s2.initialize(t), s2;
  }
  async request(t, s2) {
    return await this.signer.request(t, this.formatChainId(this.chainId), s2);
  }
  sendAsync(t, s2, i3) {
    this.signer.sendAsync(t, s2, this.formatChainId(this.chainId), i3);
  }
  get connected() {
    return this.signer.client ? this.signer.client.core.relayer.connected : false;
  }
  get connecting() {
    return this.signer.client ? this.signer.client.core.relayer.connecting : false;
  }
  async enable() {
    return this.session || await this.connect(), await this.request({ method: "eth_requestAccounts" });
  }
  async connect(t) {
    if (!this.signer.client)
      throw new Error("Provider not initialized. Call init() first");
    this.loadConnectOpts(t);
    const { required: s2, optional: i3 } = L3(this.rpc);
    try {
      const e2 = await new Promise(async (o3, r2) => {
        var c2;
        this.rpc.showQrModal && ((c2 = this.modal) == null || c2.subscribeModal((h4) => {
          !h4.open && !this.signer.session && (this.signer.abortPairingAttempt(), r2(new Error("Connection request reset. Please try again.")));
        })), await this.signer.connect(E2(p2({ namespaces: p2({}, s2 && { [this.namespace]: s2 }) }, i3 && { optionalNamespaces: { [this.namespace]: i3 } }), { pairingTopic: t == null ? void 0 : t.pairingTopic })).then((h4) => {
          o3(h4);
        }).catch((h4) => {
          r2(new Error(h4.message));
        });
      });
      if (!e2)
        return;
      const n4 = zo(e2.namespaces, [this.namespace]);
      this.setChainIds(this.rpc.chains.length ? this.rpc.chains : n4), this.setAccounts(n4), this.events.emit("connect", { chainId: v2(this.chainId) });
    } catch (e2) {
      throw this.signer.logger.error(e2), e2;
    } finally {
      this.modal && this.modal.closeModal();
    }
  }
  async authenticate(t) {
    if (!this.signer.client)
      throw new Error("Provider not initialized. Call init() first");
    this.loadConnectOpts({ chains: t == null ? void 0 : t.chains });
    try {
      const s2 = await new Promise(async (e2, n4) => {
        var o3;
        this.rpc.showQrModal && ((o3 = this.modal) == null || o3.subscribeModal((r2) => {
          !r2.open && !this.signer.session && (this.signer.abortPairingAttempt(), n4(new Error("Connection request reset. Please try again.")));
        })), await this.signer.authenticate(E2(p2({}, t), { chains: this.rpc.chains })).then((r2) => {
          e2(r2);
        }).catch((r2) => {
          n4(new Error(r2.message));
        });
      }), i3 = s2.session;
      if (i3) {
        const e2 = zo(i3.namespaces, [this.namespace]);
        this.setChainIds(this.rpc.chains.length ? this.rpc.chains : e2), this.setAccounts(e2), this.events.emit("connect", { chainId: v2(this.chainId) });
      }
      return s2;
    } catch (s2) {
      throw this.signer.logger.error(s2), s2;
    } finally {
      this.modal && this.modal.closeModal();
    }
  }
  async disconnect() {
    this.session && await this.signer.disconnect(), this.reset();
  }
  get isWalletConnect() {
    return true;
  }
  get session() {
    return this.signer.session;
  }
  registerEventListeners() {
    this.signer.on("session_event", (t) => {
      const { params: s2 } = t, { event: i3 } = s2;
      i3.name === "accountsChanged" ? (this.accounts = this.parseAccounts(i3.data), this.events.emit("accountsChanged", this.accounts)) : i3.name === "chainChanged" ? this.setChainId(this.formatChainId(i3.data)) : this.events.emit(i3.name, i3.data), this.events.emit("session_event", t);
    }), this.signer.on("chainChanged", (t) => {
      const s2 = parseInt(t);
      this.chainId = s2, this.events.emit("chainChanged", v2(this.chainId)), this.persist();
    }), this.signer.on("session_update", (t) => {
      this.events.emit("session_update", t);
    }), this.signer.on("session_delete", (t) => {
      this.reset(), this.events.emit("session_delete", t), this.events.emit("disconnect", E2(p2({}, tr$1("USER_DISCONNECTED")), { data: t.topic, name: "USER_DISCONNECTED" }));
    }), this.signer.on("display_uri", (t) => {
      var s2, i3;
      this.rpc.showQrModal && ((s2 = this.modal) == null || s2.closeModal(), (i3 = this.modal) == null || i3.openModal({ uri: t })), this.events.emit("display_uri", t);
    });
  }
  switchEthereumChain(t) {
    this.request({ method: "wallet_switchEthereumChain", params: [{ chainId: t.toString(16) }] });
  }
  isCompatibleChainId(t) {
    return typeof t == "string" ? t.startsWith(`${this.namespace}:`) : false;
  }
  formatChainId(t) {
    return `${this.namespace}:${t}`;
  }
  parseChainId(t) {
    return Number(t.split(":")[1]);
  }
  setChainIds(t) {
    const s2 = t.filter((i3) => this.isCompatibleChainId(i3)).map((i3) => this.parseChainId(i3));
    s2.length && (this.chainId = s2[0], this.events.emit("chainChanged", v2(this.chainId)), this.persist());
  }
  setChainId(t) {
    if (this.isCompatibleChainId(t)) {
      const s2 = this.parseChainId(t);
      this.chainId = s2, this.switchEthereumChain(s2);
    }
  }
  parseAccountId(t) {
    const [s2, i3, e2] = t.split(":");
    return { chainId: `${s2}:${i3}`, address: e2 };
  }
  setAccounts(t) {
    this.accounts = t.filter((s2) => this.parseChainId(this.parseAccountId(s2).chainId) === this.chainId).map((s2) => this.parseAccountId(s2).address), this.events.emit("accountsChanged", this.accounts);
  }
  getRpcConfig(t) {
    var s2, i3;
    const e2 = (s2 = t == null ? void 0 : t.chains) != null ? s2 : [], n4 = (i3 = t == null ? void 0 : t.optionalChains) != null ? i3 : [], o3 = e2.concat(n4);
    if (!o3.length)
      throw new Error("No chains specified in either `chains` or `optionalChains`");
    const r2 = e2.length ? (t == null ? void 0 : t.methods) || u2 : [], c2 = e2.length ? (t == null ? void 0 : t.events) || g2 : [], h4 = (t == null ? void 0 : t.optionalMethods) || [], d4 = (t == null ? void 0 : t.optionalEvents) || [], w3 = (t == null ? void 0 : t.rpcMap) || this.buildRpcMap(o3, t.projectId), I2 = (t == null ? void 0 : t.qrModalOptions) || void 0;
    return { chains: e2 == null ? void 0 : e2.map((l2) => this.formatChainId(l2)), optionalChains: n4.map((l2) => this.formatChainId(l2)), methods: r2, events: c2, optionalMethods: h4, optionalEvents: d4, rpcMap: w3, showQrModal: !!(t != null && t.showQrModal), qrModalOptions: I2, projectId: t.projectId, metadata: t.metadata };
  }
  buildRpcMap(t, s2) {
    const i3 = {};
    return t.forEach((e2) => {
      i3[e2] = this.getRpcUrl(e2, s2);
    }), i3;
  }
  async initialize(t) {
    if (this.rpc = this.getRpcConfig(t), this.chainId = this.rpc.chains.length ? m2(this.rpc.chains) : m2(this.rpc.optionalChains), this.signer = await hv.init({ projectId: this.rpc.projectId, metadata: this.rpc.metadata, disableProviderPing: t.disableProviderPing, relayUrl: t.relayUrl, storageOptions: t.storageOptions }), this.registerEventListeners(), await this.loadPersistedSession(), this.rpc.showQrModal) {
      let s2;
      try {
        const { WalletConnectModal: i3 } = await __vitePreload(() => import("./index-BwBxooK7.js").then((n4) => n4.i), true ? __vite__mapDeps([0,1,2]) : void 0, import.meta.url);
        s2 = i3;
      } catch {
        throw new Error("To use QR modal, please install @walletconnect/modal package");
      }
      if (s2)
        try {
          this.modal = new s2(p2({ projectId: this.rpc.projectId }, this.rpc.qrModalOptions));
        } catch (i3) {
          throw this.signer.logger.error(i3), new Error("Could not generate WalletConnectModal Instance");
        }
    }
  }
  loadConnectOpts(t) {
    if (!t)
      return;
    const { chains: s2, optionalChains: i3, rpcMap: e2 } = t;
    s2 && Er(s2) && (this.rpc.chains = s2.map((n4) => this.formatChainId(n4)), s2.forEach((n4) => {
      this.rpc.rpcMap[n4] = (e2 == null ? void 0 : e2[n4]) || this.getRpcUrl(n4);
    })), i3 && Er(i3) && (this.rpc.optionalChains = [], this.rpc.optionalChains = i3 == null ? void 0 : i3.map((n4) => this.formatChainId(n4)), i3.forEach((n4) => {
      this.rpc.rpcMap[n4] = (e2 == null ? void 0 : e2[n4]) || this.getRpcUrl(n4);
    }));
  }
  getRpcUrl(t, s2) {
    var i3;
    return ((i3 = this.rpc.rpcMap) == null ? void 0 : i3[t]) || `${j}?chainId=eip155:${t}&projectId=${s2 || this.rpc.projectId}`;
  }
  async loadPersistedSession() {
    if (this.session)
      try {
        const t = await this.signer.client.core.storage.getItem(`${this.STORAGE_KEY}/chainId`), s2 = this.session.namespaces[`${this.namespace}:${t}`] ? this.session.namespaces[`${this.namespace}:${t}`] : this.session.namespaces[this.namespace];
        this.setChainIds(t ? [this.formatChainId(t)] : s2 == null ? void 0 : s2.accounts), this.setAccounts(s2 == null ? void 0 : s2.accounts);
      } catch (t) {
        this.signer.logger.error("Failed to load persisted session, clearing state..."), this.signer.logger.error(t), await this.disconnect().catch((s2) => this.signer.logger.warn(s2));
      }
  }
  reset() {
    this.chainId = 1, this.accounts = [];
  }
  persist() {
    this.session && this.signer.client.core.storage.setItem(`${this.STORAGE_KEY}/chainId`, this.chainId);
  }
  parseAccounts(t) {
    return typeof t == "string" || t instanceof String ? [this.parseAccount(t)] : t.map((s2) => this.parseAccount(s2));
  }
}
const z = C;
export {
  z as EthereumProvider,
  M as OPTIONAL_EVENTS,
  y2 as OPTIONAL_METHODS,
  g2 as REQUIRED_EVENTS,
  u2 as REQUIRED_METHODS,
  C as default
};
