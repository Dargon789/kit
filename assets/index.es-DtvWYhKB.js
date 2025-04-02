const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./index-DX0xfL8v.js","./index-O_yJeJgE.js","./index-CHAXH4d-.css"])))=>i.map(i=>d[i]);
import { p as process$1, a as getAugmentedNamespace, c as commonjsGlobal, d as global, B as Buffer, r as recoverAddress, g as getDefaultExportFromCjs, _ as __vitePreload } from "./index-O_yJeJgE.js";
import { r as require$$0$2, a as require$$0$3, i as inherits_browserExports, e as eventsExports, w as wt$4 } from "./___vite-browser-external_commonjs-proxy-B0I-ce-R.js";
var __spreadArray = function(to2, from2, pack) {
  if (pack || arguments.length === 2) for (var i3 = 0, l2 = from2.length, ar2; i3 < l2; i3++) {
    if (ar2 || !(i3 in from2)) {
      if (!ar2) ar2 = Array.prototype.slice.call(from2, 0, i3);
      ar2[i3] = from2[i3];
    }
  }
  return to2.concat(ar2 || Array.prototype.slice.call(from2));
};
var BrowserInfo = (
  /** @class */
  /* @__PURE__ */ function() {
    function BrowserInfo2(name2, version2, os2) {
      this.name = name2;
      this.version = version2;
      this.os = os2;
      this.type = "browser";
    }
    return BrowserInfo2;
  }()
);
var NodeInfo = (
  /** @class */
  /* @__PURE__ */ function() {
    function NodeInfo2(version2) {
      this.version = version2;
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
    function SearchBotDeviceInfo2(name2, version2, os2, bot) {
      this.name = name2;
      this.version = version2;
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
  var name2 = matchedRule[0], match = matchedRule[1];
  if (name2 === "searchbot") {
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
  var version2 = versionParts.join(".");
  var os2 = detectOS(ua2);
  var searchBotMatch = SEARCHBOT_OS_REGEX.exec(ua2);
  if (searchBotMatch && searchBotMatch[1]) {
    return new SearchBotDeviceInfo(name2, version2, os2, searchBotMatch[1]);
  }
  return new BrowserInfo(name2, version2, os2);
}
function detectOS(ua2) {
  for (var ii2 = 0, count = operatingSystemRules.length; ii2 < count; ii2++) {
    var _a2 = operatingSystemRules[ii2], os2 = _a2[0], regex = _a2[1];
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
  for (var ii2 = 0; ii2 < count; ii2++) {
    output.push("0");
  }
  return output;
}
var cjs$3 = {};
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
var extendStatics = function(d4, b2) {
  extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d5, b3) {
    d5.__proto__ = b3;
  } || function(d5, b3) {
    for (var p2 in b3) if (b3.hasOwnProperty(p2)) d5[p2] = b3[p2];
  };
  return extendStatics(d4, b2);
};
function __extends(d4, b2) {
  extendStatics(d4, b2);
  function __() {
    this.constructor = d4;
  }
  d4.prototype = b2 === null ? Object.create(b2) : (__.prototype = b2.prototype, new __());
}
var __assign = function() {
  __assign = Object.assign || function __assign2(t) {
    for (var s2, i3 = 1, n3 = arguments.length; i3 < n3; i3++) {
      s2 = arguments[i3];
      for (var p2 in s2) if (Object.prototype.hasOwnProperty.call(s2, p2)) t[p2] = s2[p2];
    }
    return t;
  };
  return __assign.apply(this, arguments);
};
function __rest(s2, e2) {
  var t = {};
  for (var p2 in s2) if (Object.prototype.hasOwnProperty.call(s2, p2) && e2.indexOf(p2) < 0)
    t[p2] = s2[p2];
  if (s2 != null && typeof Object.getOwnPropertySymbols === "function")
    for (var i3 = 0, p2 = Object.getOwnPropertySymbols(s2); i3 < p2.length; i3++) {
      if (e2.indexOf(p2[i3]) < 0 && Object.prototype.propertyIsEnumerable.call(s2, p2[i3]))
        t[p2[i3]] = s2[p2[i3]];
    }
  return t;
}
function __decorate(decorators, target, key2, desc) {
  var c2 = arguments.length, r2 = c2 < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key2) : desc, d4;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r2 = Reflect.decorate(decorators, target, key2, desc);
  else for (var i3 = decorators.length - 1; i3 >= 0; i3--) if (d4 = decorators[i3]) r2 = (c2 < 3 ? d4(r2) : c2 > 3 ? d4(target, key2, r2) : d4(target, key2)) || r2;
  return c2 > 3 && r2 && Object.defineProperty(target, key2, r2), r2;
}
function __param(paramIndex, decorator) {
  return function(target, key2) {
    decorator(target, key2, paramIndex);
  };
}
function __metadata(metadataKey, metadataValue) {
  if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}
function __awaiter(thisArg, _arguments, P3, generator) {
  function adopt(value) {
    return value instanceof P3 ? value : new P3(function(resolve) {
      resolve(value);
    });
  }
  return new (P3 || (P3 = Promise))(function(resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e2) {
        reject(e2);
      }
    }
    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e2) {
        reject(e2);
      }
    }
    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }
    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
}
function __generator(thisArg, body) {
  var _3 = { label: 0, sent: function() {
    if (t[0] & 1) throw t[1];
    return t[1];
  }, trys: [], ops: [] }, f5, y3, t, g2;
  return g2 = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g2[Symbol.iterator] = function() {
    return this;
  }), g2;
  function verb(n3) {
    return function(v2) {
      return step([n3, v2]);
    };
  }
  function step(op) {
    if (f5) throw new TypeError("Generator is already executing.");
    while (_3) try {
      if (f5 = 1, y3 && (t = op[0] & 2 ? y3["return"] : op[0] ? y3["throw"] || ((t = y3["return"]) && t.call(y3), 0) : y3.next) && !(t = t.call(y3, op[1])).done) return t;
      if (y3 = 0, t) op = [op[0] & 2, t.value];
      switch (op[0]) {
        case 0:
        case 1:
          t = op;
          break;
        case 4:
          _3.label++;
          return { value: op[1], done: false };
        case 5:
          _3.label++;
          y3 = op[1];
          op = [0];
          continue;
        case 7:
          op = _3.ops.pop();
          _3.trys.pop();
          continue;
        default:
          if (!(t = _3.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
            _3 = 0;
            continue;
          }
          if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
            _3.label = op[1];
            break;
          }
          if (op[0] === 6 && _3.label < t[1]) {
            _3.label = t[1];
            t = op;
            break;
          }
          if (t && _3.label < t[2]) {
            _3.label = t[2];
            _3.ops.push(op);
            break;
          }
          if (t[2]) _3.ops.pop();
          _3.trys.pop();
          continue;
      }
      op = body.call(thisArg, _3);
    } catch (e2) {
      op = [6, e2];
      y3 = 0;
    } finally {
      f5 = t = 0;
    }
    if (op[0] & 5) throw op[1];
    return { value: op[0] ? op[1] : void 0, done: true };
  }
}
function __createBinding(o3, m4, k2, k22) {
  if (k22 === void 0) k22 = k2;
  o3[k22] = m4[k2];
}
function __exportStar(m4, exports) {
  for (var p2 in m4) if (p2 !== "default" && !exports.hasOwnProperty(p2)) exports[p2] = m4[p2];
}
function __values(o3) {
  var s2 = typeof Symbol === "function" && Symbol.iterator, m4 = s2 && o3[s2], i3 = 0;
  if (m4) return m4.call(o3);
  if (o3 && typeof o3.length === "number") return {
    next: function() {
      if (o3 && i3 >= o3.length) o3 = void 0;
      return { value: o3 && o3[i3++], done: !o3 };
    }
  };
  throw new TypeError(s2 ? "Object is not iterable." : "Symbol.iterator is not defined.");
}
function __read(o3, n3) {
  var m4 = typeof Symbol === "function" && o3[Symbol.iterator];
  if (!m4) return o3;
  var i3 = m4.call(o3), r2, ar2 = [], e2;
  try {
    while ((n3 === void 0 || n3-- > 0) && !(r2 = i3.next()).done) ar2.push(r2.value);
  } catch (error) {
    e2 = { error };
  } finally {
    try {
      if (r2 && !r2.done && (m4 = i3["return"])) m4.call(i3);
    } finally {
      if (e2) throw e2.error;
    }
  }
  return ar2;
}
function __spread() {
  for (var ar2 = [], i3 = 0; i3 < arguments.length; i3++)
    ar2 = ar2.concat(__read(arguments[i3]));
  return ar2;
}
function __spreadArrays() {
  for (var s2 = 0, i3 = 0, il = arguments.length; i3 < il; i3++) s2 += arguments[i3].length;
  for (var r2 = Array(s2), k2 = 0, i3 = 0; i3 < il; i3++)
    for (var a2 = arguments[i3], j2 = 0, jl = a2.length; j2 < jl; j2++, k2++)
      r2[k2] = a2[j2];
  return r2;
}
function __await(v2) {
  return this instanceof __await ? (this.v = v2, this) : new __await(v2);
}
function __asyncGenerator(thisArg, _arguments, generator) {
  if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
  var g2 = generator.apply(thisArg, _arguments || []), i3, q2 = [];
  return i3 = {}, verb("next"), verb("throw"), verb("return"), i3[Symbol.asyncIterator] = function() {
    return this;
  }, i3;
  function verb(n3) {
    if (g2[n3]) i3[n3] = function(v2) {
      return new Promise(function(a2, b2) {
        q2.push([n3, v2, a2, b2]) > 1 || resume(n3, v2);
      });
    };
  }
  function resume(n3, v2) {
    try {
      step(g2[n3](v2));
    } catch (e2) {
      settle(q2[0][3], e2);
    }
  }
  function step(r2) {
    r2.value instanceof __await ? Promise.resolve(r2.value.v).then(fulfill, reject) : settle(q2[0][2], r2);
  }
  function fulfill(value) {
    resume("next", value);
  }
  function reject(value) {
    resume("throw", value);
  }
  function settle(f5, v2) {
    if (f5(v2), q2.shift(), q2.length) resume(q2[0][0], q2[0][1]);
  }
}
function __asyncDelegator(o3) {
  var i3, p2;
  return i3 = {}, verb("next"), verb("throw", function(e2) {
    throw e2;
  }), verb("return"), i3[Symbol.iterator] = function() {
    return this;
  }, i3;
  function verb(n3, f5) {
    i3[n3] = o3[n3] ? function(v2) {
      return (p2 = !p2) ? { value: __await(o3[n3](v2)), done: n3 === "return" } : f5 ? f5(v2) : v2;
    } : f5;
  }
}
function __asyncValues(o3) {
  if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
  var m4 = o3[Symbol.asyncIterator], i3;
  return m4 ? m4.call(o3) : (o3 = typeof __values === "function" ? __values(o3) : o3[Symbol.iterator](), i3 = {}, verb("next"), verb("throw"), verb("return"), i3[Symbol.asyncIterator] = function() {
    return this;
  }, i3);
  function verb(n3) {
    i3[n3] = o3[n3] && function(v2) {
      return new Promise(function(resolve, reject) {
        v2 = o3[n3](v2), settle(resolve, reject, v2.done, v2.value);
      });
    };
  }
  function settle(resolve, reject, d4, v2) {
    Promise.resolve(v2).then(function(v3) {
      resolve({ value: v3, done: d4 });
    }, reject);
  }
}
function __makeTemplateObject(cooked, raw) {
  if (Object.defineProperty) {
    Object.defineProperty(cooked, "raw", { value: raw });
  } else {
    cooked.raw = raw;
  }
  return cooked;
}
function __importStar(mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) {
    for (var k2 in mod) if (Object.hasOwnProperty.call(mod, k2)) result[k2] = mod[k2];
  }
  result.default = mod;
  return result;
}
function __importDefault(mod) {
  return mod && mod.__esModule ? mod : { default: mod };
}
function __classPrivateFieldGet(receiver, privateMap) {
  if (!privateMap.has(receiver)) {
    throw new TypeError("attempted to get private field on non-instance");
  }
  return privateMap.get(receiver);
}
function __classPrivateFieldSet(receiver, privateMap, value) {
  if (!privateMap.has(receiver)) {
    throw new TypeError("attempted to set private field on non-instance");
  }
  privateMap.set(receiver, value);
  return value;
}
const tslib_es6 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  get __assign() {
    return __assign;
  },
  __asyncDelegator,
  __asyncGenerator,
  __asyncValues,
  __await,
  __awaiter,
  __classPrivateFieldGet,
  __classPrivateFieldSet,
  __createBinding,
  __decorate,
  __exportStar,
  __extends,
  __generator,
  __importDefault,
  __importStar,
  __makeTemplateObject,
  __metadata,
  __param,
  __read,
  __rest,
  __spread,
  __spreadArrays,
  __values
}, Symbol.toStringTag, { value: "Module" }));
const require$$0$1 = /* @__PURE__ */ getAugmentedNamespace(tslib_es6);
var utils$n = {};
var delay = {};
var hasRequiredDelay;
function requireDelay() {
  if (hasRequiredDelay) return delay;
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
  if (hasRequiredMisc) return misc;
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
  if (hasRequiredTime) return time;
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
  if (hasRequiredConstants) return constants;
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
  if (hasRequiredConvert) return convert;
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
  if (hasRequiredUtils) return utils$n;
  hasRequiredUtils = 1;
  (function(exports) {
    Object.defineProperty(exports, "__esModule", { value: true });
    const tslib_1 = require$$0$1;
    tslib_1.__exportStar(requireDelay(), exports);
    tslib_1.__exportStar(requireConvert(), exports);
  })(utils$n);
  return utils$n;
}
var watch$2 = {};
var hasRequiredWatch$1;
function requireWatch$1() {
  if (hasRequiredWatch$1) return watch$2;
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
  if (hasRequiredWatch) return watch$1;
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
  if (hasRequiredTypes) return types;
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
function getFromWindow(name2) {
  let res = void 0;
  if (typeof window !== "undefined" && typeof window[name2] !== "undefined") {
    res = window[name2];
  }
  return res;
}
cjs$2.getFromWindow = getFromWindow;
function getFromWindowOrThrow(name2) {
  const res = getFromWindow(name2);
  if (!res) {
    throw new Error(`${name2} is not defined in Window`);
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
    let name3 = getWindowMetadataOfAny("name", "og:site_name", "og:title", "twitter:title");
    if (!name3) {
      name3 = doc.title;
    }
    return name3;
  }
  function getDescription() {
    const description3 = getWindowMetadataOfAny("description", "og:description", "twitter:description", "keywords");
    return description3;
  }
  const name2 = getName();
  const description2 = getDescription();
  const url = loc.origin;
  const icons = getIcons();
  const meta = {
    description: description2,
    url,
    icons,
    name: name2
  };
  return meta;
}
getWindowMetadata_1 = cjs$1.getWindowMetadata = getWindowMetadata;
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
function En$3(t) {
  return t instanceof Uint8Array || ArrayBuffer.isView(t) && t.constructor.name === "Uint8Array";
}
function fe$2(t, ...e2) {
  if (!En$3(t)) throw new Error("Uint8Array expected");
  if (e2.length > 0 && !e2.includes(t.length)) throw new Error("Uint8Array expected of length " + e2 + ", got length=" + t.length);
}
function De$3(t, e2 = true) {
  if (t.destroyed) throw new Error("Hash instance has been destroyed");
  if (e2 && t.finished) throw new Error("Hash#digest() has already been called");
}
function gn$3(t, e2) {
  fe$2(t);
  const n3 = e2.outputLen;
  if (t.length < n3) throw new Error("digestInto() expects output buffer of length at least " + n3);
}
const it$2 = typeof globalThis == "object" && "crypto" in globalThis ? globalThis.crypto : void 0;
/*! noble-hashes - MIT License (c) 2022 Paul Miller (paulmillr.com) */
const _t$4 = (t) => new DataView(t.buffer, t.byteOffset, t.byteLength);
function yn$3(t) {
  if (typeof t != "string") throw new Error("utf8ToBytes expected string, got " + typeof t);
  return new Uint8Array(new TextEncoder().encode(t));
}
function de$3(t) {
  return typeof t == "string" && (t = yn$3(t)), fe$2(t), t;
}
let xn$3 = class xn {
  clone() {
    return this._cloneInto();
  }
};
function Bn$3(t) {
  const e2 = (r2) => t().update(de$3(r2)).digest(), n3 = t();
  return e2.outputLen = n3.outputLen, e2.blockLen = n3.blockLen, e2.create = () => t(), e2;
}
function he$2(t = 32) {
  if (it$2 && typeof it$2.getRandomValues == "function") return it$2.getRandomValues(new Uint8Array(t));
  if (it$2 && typeof it$2.randomBytes == "function") return it$2.randomBytes(t);
  throw new Error("crypto.getRandomValues must be defined");
}
function Cn$3(t, e2, n3, r2) {
  if (typeof t.setBigUint64 == "function") return t.setBigUint64(e2, n3, r2);
  const o3 = BigInt(32), s2 = BigInt(4294967295), a2 = Number(n3 >> o3 & s2), u2 = Number(n3 & s2), i3 = r2 ? 4 : 0, D2 = r2 ? 0 : 4;
  t.setUint32(e2 + i3, a2, r2), t.setUint32(e2 + D2, u2, r2);
}
let An$2 = class An extends xn$3 {
  constructor(e2, n3, r2, o3) {
    super(), this.blockLen = e2, this.outputLen = n3, this.padOffset = r2, this.isLE = o3, this.finished = false, this.length = 0, this.pos = 0, this.destroyed = false, this.buffer = new Uint8Array(e2), this.view = _t$4(this.buffer);
  }
  update(e2) {
    De$3(this);
    const { view: n3, buffer: r2, blockLen: o3 } = this;
    e2 = de$3(e2);
    const s2 = e2.length;
    for (let a2 = 0; a2 < s2; ) {
      const u2 = Math.min(o3 - this.pos, s2 - a2);
      if (u2 === o3) {
        const i3 = _t$4(e2);
        for (; o3 <= s2 - a2; a2 += o3) this.process(i3, a2);
        continue;
      }
      r2.set(e2.subarray(a2, a2 + u2), this.pos), this.pos += u2, a2 += u2, this.pos === o3 && (this.process(n3, 0), this.pos = 0);
    }
    return this.length += e2.length, this.roundClean(), this;
  }
  digestInto(e2) {
    De$3(this), gn$3(e2, this), this.finished = true;
    const { buffer: n3, view: r2, blockLen: o3, isLE: s2 } = this;
    let { pos: a2 } = this;
    n3[a2++] = 128, this.buffer.subarray(a2).fill(0), this.padOffset > o3 - a2 && (this.process(r2, 0), a2 = 0);
    for (let l2 = a2; l2 < o3; l2++) n3[l2] = 0;
    Cn$3(r2, o3 - 8, BigInt(this.length * 8), s2), this.process(r2, 0);
    const u2 = _t$4(e2), i3 = this.outputLen;
    if (i3 % 4) throw new Error("_sha2: outputLen should be aligned to 32bit");
    const D2 = i3 / 4, c2 = this.get();
    if (D2 > c2.length) throw new Error("_sha2: outputLen bigger than state");
    for (let l2 = 0; l2 < D2; l2++) u2.setUint32(4 * l2, c2[l2], s2);
  }
  digest() {
    const { buffer: e2, outputLen: n3 } = this;
    this.digestInto(e2);
    const r2 = e2.slice(0, n3);
    return this.destroy(), r2;
  }
  _cloneInto(e2) {
    e2 || (e2 = new this.constructor()), e2.set(...this.get());
    const { blockLen: n3, buffer: r2, length: o3, finished: s2, destroyed: a2, pos: u2 } = this;
    return e2.length = o3, e2.pos = u2, e2.finished = s2, e2.destroyed = a2, o3 % n3 && e2.buffer.set(r2), e2;
  }
};
const wt$3 = BigInt(2 ** 32 - 1), St$4 = BigInt(32);
function le$4(t, e2 = false) {
  return e2 ? { h: Number(t & wt$3), l: Number(t >> St$4 & wt$3) } : { h: Number(t >> St$4 & wt$3) | 0, l: Number(t & wt$3) | 0 };
}
function mn$3(t, e2 = false) {
  let n3 = new Uint32Array(t.length), r2 = new Uint32Array(t.length);
  for (let o3 = 0; o3 < t.length; o3++) {
    const { h: s2, l: a2 } = le$4(t[o3], e2);
    [n3[o3], r2[o3]] = [s2, a2];
  }
  return [n3, r2];
}
const _n$3 = (t, e2) => BigInt(t >>> 0) << St$4 | BigInt(e2 >>> 0), Sn$2 = (t, e2, n3) => t >>> n3, vn$3 = (t, e2, n3) => t << 32 - n3 | e2 >>> n3, In$3 = (t, e2, n3) => t >>> n3 | e2 << 32 - n3, Un$3 = (t, e2, n3) => t << 32 - n3 | e2 >>> n3, Tn$3 = (t, e2, n3) => t << 64 - n3 | e2 >>> n3 - 32, Fn$3 = (t, e2, n3) => t >>> n3 - 32 | e2 << 64 - n3, Nn$2 = (t, e2) => e2, Ln$3 = (t, e2) => t, On$3 = (t, e2, n3) => t << n3 | e2 >>> 32 - n3, Hn$3 = (t, e2, n3) => e2 << n3 | t >>> 32 - n3, zn$3 = (t, e2, n3) => e2 << n3 - 32 | t >>> 64 - n3, Mn$3 = (t, e2, n3) => t << n3 - 32 | e2 >>> 64 - n3;
function qn$3(t, e2, n3, r2) {
  const o3 = (e2 >>> 0) + (r2 >>> 0);
  return { h: t + n3 + (o3 / 2 ** 32 | 0) | 0, l: o3 | 0 };
}
const $n$2 = (t, e2, n3) => (t >>> 0) + (e2 >>> 0) + (n3 >>> 0), kn$3 = (t, e2, n3, r2) => e2 + n3 + r2 + (t / 2 ** 32 | 0) | 0, Rn$3 = (t, e2, n3, r2) => (t >>> 0) + (e2 >>> 0) + (n3 >>> 0) + (r2 >>> 0), jn$3 = (t, e2, n3, r2, o3) => e2 + n3 + r2 + o3 + (t / 2 ** 32 | 0) | 0, Zn$3 = (t, e2, n3, r2, o3) => (t >>> 0) + (e2 >>> 0) + (n3 >>> 0) + (r2 >>> 0) + (o3 >>> 0), Gn$3 = (t, e2, n3, r2, o3, s2) => e2 + n3 + r2 + o3 + s2 + (t / 2 ** 32 | 0) | 0, x$7 = { fromBig: le$4, split: mn$3, toBig: _n$3, shrSH: Sn$2, shrSL: vn$3, rotrSH: In$3, rotrSL: Un$3, rotrBH: Tn$3, rotrBL: Fn$3, rotr32H: Nn$2, rotr32L: Ln$3, rotlSH: On$3, rotlSL: Hn$3, rotlBH: zn$3, rotlBL: Mn$3, add: qn$3, add3L: $n$2, add3H: kn$3, add4L: Rn$3, add4H: jn$3, add5H: Gn$3, add5L: Zn$3 }, [Vn$3, Yn$3] = (() => x$7.split(["0x428a2f98d728ae22", "0x7137449123ef65cd", "0xb5c0fbcfec4d3b2f", "0xe9b5dba58189dbbc", "0x3956c25bf348b538", "0x59f111f1b605d019", "0x923f82a4af194f9b", "0xab1c5ed5da6d8118", "0xd807aa98a3030242", "0x12835b0145706fbe", "0x243185be4ee4b28c", "0x550c7dc3d5ffb4e2", "0x72be5d74f27b896f", "0x80deb1fe3b1696b1", "0x9bdc06a725c71235", "0xc19bf174cf692694", "0xe49b69c19ef14ad2", "0xefbe4786384f25e3", "0x0fc19dc68b8cd5b5", "0x240ca1cc77ac9c65", "0x2de92c6f592b0275", "0x4a7484aa6ea6e483", "0x5cb0a9dcbd41fbd4", "0x76f988da831153b5", "0x983e5152ee66dfab", "0xa831c66d2db43210", "0xb00327c898fb213f", "0xbf597fc7beef0ee4", "0xc6e00bf33da88fc2", "0xd5a79147930aa725", "0x06ca6351e003826f", "0x142929670a0e6e70", "0x27b70a8546d22ffc", "0x2e1b21385c26c926", "0x4d2c6dfc5ac42aed", "0x53380d139d95b3df", "0x650a73548baf63de", "0x766a0abb3c77b2a8", "0x81c2c92e47edaee6", "0x92722c851482353b", "0xa2bfe8a14cf10364", "0xa81a664bbc423001", "0xc24b8b70d0f89791", "0xc76c51a30654be30", "0xd192e819d6ef5218", "0xd69906245565a910", "0xf40e35855771202a", "0x106aa07032bbd1b8", "0x19a4c116b8d2d0c8", "0x1e376c085141ab53", "0x2748774cdf8eeb99", "0x34b0bcb5e19b48a8", "0x391c0cb3c5c95a63", "0x4ed8aa4ae3418acb", "0x5b9cca4f7763e373", "0x682e6ff3d6b2b8a3", "0x748f82ee5defb2fc", "0x78a5636f43172f60", "0x84c87814a1f0ab72", "0x8cc702081a6439ec", "0x90befffa23631e28", "0xa4506cebde82bde9", "0xbef9a3f7b2c67915", "0xc67178f2e372532b", "0xca273eceea26619c", "0xd186b8c721c0c207", "0xeada7dd6cde0eb1e", "0xf57d4f7fee6ed178", "0x06f067aa72176fba", "0x0a637dc5a2c898a6", "0x113f9804bef90dae", "0x1b710b35131c471b", "0x28db77f523047d84", "0x32caab7b40c72493", "0x3c9ebe0a15c9bebc", "0x431d67c49c100d4c", "0x4cc5d4becb3e42b6", "0x597f299cfc657e2a", "0x5fcb6fab3ad6faec", "0x6c44198c4a475817"].map((t) => BigInt(t))))(), P$4 = new Uint32Array(80), Q$3 = new Uint32Array(80);
let Jn$3 = class Jn extends An$2 {
  constructor() {
    super(128, 64, 16, false), this.Ah = 1779033703, this.Al = -205731576, this.Bh = -1150833019, this.Bl = -2067093701, this.Ch = 1013904242, this.Cl = -23791573, this.Dh = -1521486534, this.Dl = 1595750129, this.Eh = 1359893119, this.El = -1377402159, this.Fh = -1694144372, this.Fl = 725511199, this.Gh = 528734635, this.Gl = -79577749, this.Hh = 1541459225, this.Hl = 327033209;
  }
  get() {
    const { Ah: e2, Al: n3, Bh: r2, Bl: o3, Ch: s2, Cl: a2, Dh: u2, Dl: i3, Eh: D2, El: c2, Fh: l2, Fl: p2, Gh: w2, Gl: h4, Hh: g2, Hl: S4 } = this;
    return [e2, n3, r2, o3, s2, a2, u2, i3, D2, c2, l2, p2, w2, h4, g2, S4];
  }
  set(e2, n3, r2, o3, s2, a2, u2, i3, D2, c2, l2, p2, w2, h4, g2, S4) {
    this.Ah = e2 | 0, this.Al = n3 | 0, this.Bh = r2 | 0, this.Bl = o3 | 0, this.Ch = s2 | 0, this.Cl = a2 | 0, this.Dh = u2 | 0, this.Dl = i3 | 0, this.Eh = D2 | 0, this.El = c2 | 0, this.Fh = l2 | 0, this.Fl = p2 | 0, this.Gh = w2 | 0, this.Gl = h4 | 0, this.Hh = g2 | 0, this.Hl = S4 | 0;
  }
  process(e2, n3) {
    for (let d4 = 0; d4 < 16; d4++, n3 += 4) P$4[d4] = e2.getUint32(n3), Q$3[d4] = e2.getUint32(n3 += 4);
    for (let d4 = 16; d4 < 80; d4++) {
      const m4 = P$4[d4 - 15] | 0, F2 = Q$3[d4 - 15] | 0, q2 = x$7.rotrSH(m4, F2, 1) ^ x$7.rotrSH(m4, F2, 8) ^ x$7.shrSH(m4, F2, 7), z2 = x$7.rotrSL(m4, F2, 1) ^ x$7.rotrSL(m4, F2, 8) ^ x$7.shrSL(m4, F2, 7), I3 = P$4[d4 - 2] | 0, O4 = Q$3[d4 - 2] | 0, ot2 = x$7.rotrSH(I3, O4, 19) ^ x$7.rotrBH(I3, O4, 61) ^ x$7.shrSH(I3, O4, 6), tt2 = x$7.rotrSL(I3, O4, 19) ^ x$7.rotrBL(I3, O4, 61) ^ x$7.shrSL(I3, O4, 6), st2 = x$7.add4L(z2, tt2, Q$3[d4 - 7], Q$3[d4 - 16]), at2 = x$7.add4H(st2, q2, ot2, P$4[d4 - 7], P$4[d4 - 16]);
      P$4[d4] = at2 | 0, Q$3[d4] = st2 | 0;
    }
    let { Ah: r2, Al: o3, Bh: s2, Bl: a2, Ch: u2, Cl: i3, Dh: D2, Dl: c2, Eh: l2, El: p2, Fh: w2, Fl: h4, Gh: g2, Gl: S4, Hh: v2, Hl: L3 } = this;
    for (let d4 = 0; d4 < 80; d4++) {
      const m4 = x$7.rotrSH(l2, p2, 14) ^ x$7.rotrSH(l2, p2, 18) ^ x$7.rotrBH(l2, p2, 41), F2 = x$7.rotrSL(l2, p2, 14) ^ x$7.rotrSL(l2, p2, 18) ^ x$7.rotrBL(l2, p2, 41), q2 = l2 & w2 ^ ~l2 & g2, z2 = p2 & h4 ^ ~p2 & S4, I3 = x$7.add5L(L3, F2, z2, Yn$3[d4], Q$3[d4]), O4 = x$7.add5H(I3, v2, m4, q2, Vn$3[d4], P$4[d4]), ot2 = I3 | 0, tt2 = x$7.rotrSH(r2, o3, 28) ^ x$7.rotrBH(r2, o3, 34) ^ x$7.rotrBH(r2, o3, 39), st2 = x$7.rotrSL(r2, o3, 28) ^ x$7.rotrBL(r2, o3, 34) ^ x$7.rotrBL(r2, o3, 39), at2 = r2 & s2 ^ r2 & u2 ^ s2 & u2, Ct2 = o3 & a2 ^ o3 & i3 ^ a2 & i3;
      v2 = g2 | 0, L3 = S4 | 0, g2 = w2 | 0, S4 = h4 | 0, w2 = l2 | 0, h4 = p2 | 0, { h: l2, l: p2 } = x$7.add(D2 | 0, c2 | 0, O4 | 0, ot2 | 0), D2 = u2 | 0, c2 = i3 | 0, u2 = s2 | 0, i3 = a2 | 0, s2 = r2 | 0, a2 = o3 | 0;
      const At2 = x$7.add3L(ot2, st2, Ct2);
      r2 = x$7.add3H(At2, O4, tt2, at2), o3 = At2 | 0;
    }
    ({ h: r2, l: o3 } = x$7.add(this.Ah | 0, this.Al | 0, r2 | 0, o3 | 0)), { h: s2, l: a2 } = x$7.add(this.Bh | 0, this.Bl | 0, s2 | 0, a2 | 0), { h: u2, l: i3 } = x$7.add(this.Ch | 0, this.Cl | 0, u2 | 0, i3 | 0), { h: D2, l: c2 } = x$7.add(this.Dh | 0, this.Dl | 0, D2 | 0, c2 | 0), { h: l2, l: p2 } = x$7.add(this.Eh | 0, this.El | 0, l2 | 0, p2 | 0), { h: w2, l: h4 } = x$7.add(this.Fh | 0, this.Fl | 0, w2 | 0, h4 | 0), { h: g2, l: S4 } = x$7.add(this.Gh | 0, this.Gl | 0, g2 | 0, S4 | 0), { h: v2, l: L3 } = x$7.add(this.Hh | 0, this.Hl | 0, v2 | 0, L3 | 0), this.set(r2, o3, s2, a2, u2, i3, D2, c2, l2, p2, w2, h4, g2, S4, v2, L3);
  }
  roundClean() {
    P$4.fill(0), Q$3.fill(0);
  }
  destroy() {
    this.buffer.fill(0), this.set(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
  }
};
const Kn$3 = Bn$3(() => new Jn$3());
/*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */
const vt$3 = BigInt(0), be$2 = BigInt(1), Wn$3 = BigInt(2);
function It$3(t) {
  return t instanceof Uint8Array || ArrayBuffer.isView(t) && t.constructor.name === "Uint8Array";
}
function Ut$3(t) {
  if (!It$3(t)) throw new Error("Uint8Array expected");
}
function Tt$3(t, e2) {
  if (typeof e2 != "boolean") throw new Error(t + " boolean expected, got " + e2);
}
const Xn$3 = Array.from({ length: 256 }, (t, e2) => e2.toString(16).padStart(2, "0"));
function Ft$3(t) {
  Ut$3(t);
  let e2 = "";
  for (let n3 = 0; n3 < t.length; n3++) e2 += Xn$3[t[n3]];
  return e2;
}
function pe$2(t) {
  if (typeof t != "string") throw new Error("hex string expected, got " + typeof t);
  return t === "" ? vt$3 : BigInt("0x" + t);
}
const K$3 = { _0: 48, _9: 57, A: 65, F: 70, a: 97, f: 102 };
function we$2(t) {
  if (t >= K$3._0 && t <= K$3._9) return t - K$3._0;
  if (t >= K$3.A && t <= K$3.F) return t - (K$3.A - 10);
  if (t >= K$3.a && t <= K$3.f) return t - (K$3.a - 10);
}
function Ee$3(t) {
  if (typeof t != "string") throw new Error("hex string expected, got " + typeof t);
  const e2 = t.length, n3 = e2 / 2;
  if (e2 % 2) throw new Error("hex string expected, got unpadded hex of length " + e2);
  const r2 = new Uint8Array(n3);
  for (let o3 = 0, s2 = 0; o3 < n3; o3++, s2 += 2) {
    const a2 = we$2(t.charCodeAt(s2)), u2 = we$2(t.charCodeAt(s2 + 1));
    if (a2 === void 0 || u2 === void 0) {
      const i3 = t[s2] + t[s2 + 1];
      throw new Error('hex string expected, got non-hex character "' + i3 + '" at index ' + s2);
    }
    r2[o3] = a2 * 16 + u2;
  }
  return r2;
}
function Pn$2(t) {
  return pe$2(Ft$3(t));
}
function Et$4(t) {
  return Ut$3(t), pe$2(Ft$3(Uint8Array.from(t).reverse()));
}
function ge(t, e2) {
  return Ee$3(t.toString(16).padStart(e2 * 2, "0"));
}
function Nt$3(t, e2) {
  return ge(t, e2).reverse();
}
function W$1(t, e2, n3) {
  let r2;
  if (typeof e2 == "string") try {
    r2 = Ee$3(e2);
  } catch (s2) {
    throw new Error(t + " must be hex string or Uint8Array, cause: " + s2);
  }
  else if (It$3(e2)) r2 = Uint8Array.from(e2);
  else throw new Error(t + " must be hex string or Uint8Array");
  const o3 = r2.length;
  if (typeof n3 == "number" && o3 !== n3) throw new Error(t + " of length " + n3 + " expected, got " + o3);
  return r2;
}
function ye$1(...t) {
  let e2 = 0;
  for (let r2 = 0; r2 < t.length; r2++) {
    const o3 = t[r2];
    Ut$3(o3), e2 += o3.length;
  }
  const n3 = new Uint8Array(e2);
  for (let r2 = 0, o3 = 0; r2 < t.length; r2++) {
    const s2 = t[r2];
    n3.set(s2, o3), o3 += s2.length;
  }
  return n3;
}
const Lt$3 = (t) => typeof t == "bigint" && vt$3 <= t;
function Qn$3(t, e2, n3) {
  return Lt$3(t) && Lt$3(e2) && Lt$3(n3) && e2 <= t && t < n3;
}
function ft$2(t, e2, n3, r2) {
  if (!Qn$3(e2, n3, r2)) throw new Error("expected valid " + t + ": " + n3 + " <= n < " + r2 + ", got " + e2);
}
function tr$3(t) {
  let e2;
  for (e2 = 0; t > vt$3; t >>= be$2, e2 += 1) ;
  return e2;
}
const er$3 = (t) => (Wn$3 << BigInt(t - 1)) - be$2, nr$3 = { bigint: (t) => typeof t == "bigint", function: (t) => typeof t == "function", boolean: (t) => typeof t == "boolean", string: (t) => typeof t == "string", stringOrUint8Array: (t) => typeof t == "string" || It$3(t), isSafeInteger: (t) => Number.isSafeInteger(t), array: (t) => Array.isArray(t), field: (t, e2) => e2.Fp.isValid(t), hash: (t) => typeof t == "function" && Number.isSafeInteger(t.outputLen) };
function Ot$3(t, e2, n3 = {}) {
  const r2 = (o3, s2, a2) => {
    const u2 = nr$3[s2];
    if (typeof u2 != "function") throw new Error("invalid validator function");
    const i3 = t[o3];
    if (!(a2 && i3 === void 0) && !u2(i3, t)) throw new Error("param " + String(o3) + " is invalid. Expected " + s2 + ", got " + i3);
  };
  for (const [o3, s2] of Object.entries(e2)) r2(o3, s2, false);
  for (const [o3, s2] of Object.entries(n3)) r2(o3, s2, true);
  return t;
}
function xe$3(t) {
  const e2 = /* @__PURE__ */ new WeakMap();
  return (n3, ...r2) => {
    const o3 = e2.get(n3);
    if (o3 !== void 0) return o3;
    const s2 = t(n3, ...r2);
    return e2.set(n3, s2), s2;
  };
}
const M$5 = BigInt(0), N$4 = BigInt(1), nt$1 = BigInt(2), rr$3 = BigInt(3), Ht$2 = BigInt(4), Be$2 = BigInt(5), Ce$2 = BigInt(8);
function H$3(t, e2) {
  const n3 = t % e2;
  return n3 >= M$5 ? n3 : e2 + n3;
}
function or$4(t, e2, n3) {
  if (e2 < M$5) throw new Error("invalid exponent, negatives unsupported");
  if (n3 <= M$5) throw new Error("invalid modulus");
  if (n3 === N$4) return M$5;
  let r2 = N$4;
  for (; e2 > M$5; ) e2 & N$4 && (r2 = r2 * t % n3), t = t * t % n3, e2 >>= N$4;
  return r2;
}
function J$4(t, e2, n3) {
  let r2 = t;
  for (; e2-- > M$5; ) r2 *= r2, r2 %= n3;
  return r2;
}
function Ae$3(t, e2) {
  if (t === M$5) throw new Error("invert: expected non-zero number");
  if (e2 <= M$5) throw new Error("invert: expected positive modulus, got " + e2);
  let n3 = H$3(t, e2), r2 = e2, o3 = M$5, s2 = N$4;
  for (; n3 !== M$5; ) {
    const u2 = r2 / n3, i3 = r2 % n3, D2 = o3 - s2 * u2;
    r2 = n3, n3 = i3, o3 = s2, s2 = D2;
  }
  if (r2 !== N$4) throw new Error("invert: does not exist");
  return H$3(o3, e2);
}
function sr$3(t) {
  const e2 = (t - N$4) / nt$1;
  let n3, r2, o3;
  for (n3 = t - N$4, r2 = 0; n3 % nt$1 === M$5; n3 /= nt$1, r2++) ;
  for (o3 = nt$1; o3 < t && or$4(o3, e2, t) !== t - N$4; o3++) if (o3 > 1e3) throw new Error("Cannot find square root: likely non-prime P");
  if (r2 === 1) {
    const a2 = (t + N$4) / Ht$2;
    return function(i3, D2) {
      const c2 = i3.pow(D2, a2);
      if (!i3.eql(i3.sqr(c2), D2)) throw new Error("Cannot find square root");
      return c2;
    };
  }
  const s2 = (n3 + N$4) / nt$1;
  return function(u2, i3) {
    if (u2.pow(i3, e2) === u2.neg(u2.ONE)) throw new Error("Cannot find square root");
    let D2 = r2, c2 = u2.pow(u2.mul(u2.ONE, o3), n3), l2 = u2.pow(i3, s2), p2 = u2.pow(i3, n3);
    for (; !u2.eql(p2, u2.ONE); ) {
      if (u2.eql(p2, u2.ZERO)) return u2.ZERO;
      let w2 = 1;
      for (let g2 = u2.sqr(p2); w2 < D2 && !u2.eql(g2, u2.ONE); w2++) g2 = u2.sqr(g2);
      const h4 = u2.pow(c2, N$4 << BigInt(D2 - w2 - 1));
      c2 = u2.sqr(h4), l2 = u2.mul(l2, h4), p2 = u2.mul(p2, c2), D2 = w2;
    }
    return l2;
  };
}
function ir$3(t) {
  if (t % Ht$2 === rr$3) {
    const e2 = (t + N$4) / Ht$2;
    return function(r2, o3) {
      const s2 = r2.pow(o3, e2);
      if (!r2.eql(r2.sqr(s2), o3)) throw new Error("Cannot find square root");
      return s2;
    };
  }
  if (t % Ce$2 === Be$2) {
    const e2 = (t - Be$2) / Ce$2;
    return function(r2, o3) {
      const s2 = r2.mul(o3, nt$1), a2 = r2.pow(s2, e2), u2 = r2.mul(o3, a2), i3 = r2.mul(r2.mul(u2, nt$1), a2), D2 = r2.mul(u2, r2.sub(i3, r2.ONE));
      if (!r2.eql(r2.sqr(D2), o3)) throw new Error("Cannot find square root");
      return D2;
    };
  }
  return sr$3(t);
}
const ur$2 = (t, e2) => (H$3(t, e2) & N$4) === N$4, cr$3 = ["create", "isValid", "is0", "neg", "inv", "sqrt", "sqr", "eql", "add", "sub", "mul", "pow", "div", "addN", "subN", "mulN", "sqrN"];
function ar$3(t) {
  const e2 = { ORDER: "bigint", MASK: "bigint", BYTES: "isSafeInteger", BITS: "isSafeInteger" }, n3 = cr$3.reduce((r2, o3) => (r2[o3] = "function", r2), e2);
  return Ot$3(t, n3);
}
function fr$2(t, e2, n3) {
  if (n3 < M$5) throw new Error("invalid exponent, negatives unsupported");
  if (n3 === M$5) return t.ONE;
  if (n3 === N$4) return e2;
  let r2 = t.ONE, o3 = e2;
  for (; n3 > M$5; ) n3 & N$4 && (r2 = t.mul(r2, o3)), o3 = t.sqr(o3), n3 >>= N$4;
  return r2;
}
function Dr$2(t, e2) {
  const n3 = new Array(e2.length), r2 = e2.reduce((s2, a2, u2) => t.is0(a2) ? s2 : (n3[u2] = s2, t.mul(s2, a2)), t.ONE), o3 = t.inv(r2);
  return e2.reduceRight((s2, a2, u2) => t.is0(a2) ? s2 : (n3[u2] = t.mul(s2, n3[u2]), t.mul(s2, a2)), o3), n3;
}
function me$3(t, e2) {
  const n3 = e2 !== void 0 ? e2 : t.toString(2).length, r2 = Math.ceil(n3 / 8);
  return { nBitLength: n3, nByteLength: r2 };
}
function _e$4(t, e2, n3 = false, r2 = {}) {
  if (t <= M$5) throw new Error("invalid field: expected ORDER > 0, got " + t);
  const { nBitLength: o3, nByteLength: s2 } = me$3(t, e2);
  if (s2 > 2048) throw new Error("invalid field: expected ORDER of <= 2048 bytes");
  let a2;
  const u2 = Object.freeze({ ORDER: t, isLE: n3, BITS: o3, BYTES: s2, MASK: er$3(o3), ZERO: M$5, ONE: N$4, create: (i3) => H$3(i3, t), isValid: (i3) => {
    if (typeof i3 != "bigint") throw new Error("invalid field element: expected bigint, got " + typeof i3);
    return M$5 <= i3 && i3 < t;
  }, is0: (i3) => i3 === M$5, isOdd: (i3) => (i3 & N$4) === N$4, neg: (i3) => H$3(-i3, t), eql: (i3, D2) => i3 === D2, sqr: (i3) => H$3(i3 * i3, t), add: (i3, D2) => H$3(i3 + D2, t), sub: (i3, D2) => H$3(i3 - D2, t), mul: (i3, D2) => H$3(i3 * D2, t), pow: (i3, D2) => fr$2(u2, i3, D2), div: (i3, D2) => H$3(i3 * Ae$3(D2, t), t), sqrN: (i3) => i3 * i3, addN: (i3, D2) => i3 + D2, subN: (i3, D2) => i3 - D2, mulN: (i3, D2) => i3 * D2, inv: (i3) => Ae$3(i3, t), sqrt: r2.sqrt || ((i3) => (a2 || (a2 = ir$3(t)), a2(u2, i3))), invertBatch: (i3) => Dr$2(u2, i3), cmov: (i3, D2, c2) => c2 ? D2 : i3, toBytes: (i3) => n3 ? Nt$3(i3, s2) : ge(i3, s2), fromBytes: (i3) => {
    if (i3.length !== s2) throw new Error("Field.fromBytes: expected " + s2 + " bytes, got " + i3.length);
    return n3 ? Et$4(i3) : Pn$2(i3);
  } });
  return Object.freeze(u2);
}
const Se$3 = BigInt(0), gt$3 = BigInt(1);
function zt$3(t, e2) {
  const n3 = e2.negate();
  return t ? n3 : e2;
}
function ve$2(t, e2) {
  if (!Number.isSafeInteger(t) || t <= 0 || t > e2) throw new Error("invalid window size, expected [1.." + e2 + "], got W=" + t);
}
function Mt$2(t, e2) {
  ve$2(t, e2);
  const n3 = Math.ceil(e2 / t) + 1, r2 = 2 ** (t - 1);
  return { windows: n3, windowSize: r2 };
}
function dr$3(t, e2) {
  if (!Array.isArray(t)) throw new Error("array expected");
  t.forEach((n3, r2) => {
    if (!(n3 instanceof e2)) throw new Error("invalid point at index " + r2);
  });
}
function hr$3(t, e2) {
  if (!Array.isArray(t)) throw new Error("array of scalars expected");
  t.forEach((n3, r2) => {
    if (!e2.isValid(n3)) throw new Error("invalid scalar at index " + r2);
  });
}
const qt$2 = /* @__PURE__ */ new WeakMap(), Ie$2 = /* @__PURE__ */ new WeakMap();
function $t$1(t) {
  return Ie$2.get(t) || 1;
}
function lr$3(t, e2) {
  return { constTimeNegate: zt$3, hasPrecomputes(n3) {
    return $t$1(n3) !== 1;
  }, unsafeLadder(n3, r2, o3 = t.ZERO) {
    let s2 = n3;
    for (; r2 > Se$3; ) r2 & gt$3 && (o3 = o3.add(s2)), s2 = s2.double(), r2 >>= gt$3;
    return o3;
  }, precomputeWindow(n3, r2) {
    const { windows: o3, windowSize: s2 } = Mt$2(r2, e2), a2 = [];
    let u2 = n3, i3 = u2;
    for (let D2 = 0; D2 < o3; D2++) {
      i3 = u2, a2.push(i3);
      for (let c2 = 1; c2 < s2; c2++) i3 = i3.add(u2), a2.push(i3);
      u2 = i3.double();
    }
    return a2;
  }, wNAF(n3, r2, o3) {
    const { windows: s2, windowSize: a2 } = Mt$2(n3, e2);
    let u2 = t.ZERO, i3 = t.BASE;
    const D2 = BigInt(2 ** n3 - 1), c2 = 2 ** n3, l2 = BigInt(n3);
    for (let p2 = 0; p2 < s2; p2++) {
      const w2 = p2 * a2;
      let h4 = Number(o3 & D2);
      o3 >>= l2, h4 > a2 && (h4 -= c2, o3 += gt$3);
      const g2 = w2, S4 = w2 + Math.abs(h4) - 1, v2 = p2 % 2 !== 0, L3 = h4 < 0;
      h4 === 0 ? i3 = i3.add(zt$3(v2, r2[g2])) : u2 = u2.add(zt$3(L3, r2[S4]));
    }
    return { p: u2, f: i3 };
  }, wNAFUnsafe(n3, r2, o3, s2 = t.ZERO) {
    const { windows: a2, windowSize: u2 } = Mt$2(n3, e2), i3 = BigInt(2 ** n3 - 1), D2 = 2 ** n3, c2 = BigInt(n3);
    for (let l2 = 0; l2 < a2; l2++) {
      const p2 = l2 * u2;
      if (o3 === Se$3) break;
      let w2 = Number(o3 & i3);
      if (o3 >>= c2, w2 > u2 && (w2 -= D2, o3 += gt$3), w2 === 0) continue;
      let h4 = r2[p2 + Math.abs(w2) - 1];
      w2 < 0 && (h4 = h4.negate()), s2 = s2.add(h4);
    }
    return s2;
  }, getPrecomputes(n3, r2, o3) {
    let s2 = qt$2.get(r2);
    return s2 || (s2 = this.precomputeWindow(r2, n3), n3 !== 1 && qt$2.set(r2, o3(s2))), s2;
  }, wNAFCached(n3, r2, o3) {
    const s2 = $t$1(n3);
    return this.wNAF(s2, this.getPrecomputes(s2, n3, o3), r2);
  }, wNAFCachedUnsafe(n3, r2, o3, s2) {
    const a2 = $t$1(n3);
    return a2 === 1 ? this.unsafeLadder(n3, r2, s2) : this.wNAFUnsafe(a2, this.getPrecomputes(a2, n3, o3), r2, s2);
  }, setWindowSize(n3, r2) {
    ve$2(r2, e2), Ie$2.set(n3, r2), qt$2.delete(n3);
  } };
}
function br$3(t, e2, n3, r2) {
  if (dr$3(n3, t), hr$3(r2, e2), n3.length !== r2.length) throw new Error("arrays of points and scalars must have equal length");
  const o3 = t.ZERO, s2 = tr$3(BigInt(n3.length)), a2 = s2 > 12 ? s2 - 3 : s2 > 4 ? s2 - 2 : s2 ? 2 : 1, u2 = (1 << a2) - 1, i3 = new Array(u2 + 1).fill(o3), D2 = Math.floor((e2.BITS - 1) / a2) * a2;
  let c2 = o3;
  for (let l2 = D2; l2 >= 0; l2 -= a2) {
    i3.fill(o3);
    for (let w2 = 0; w2 < r2.length; w2++) {
      const h4 = r2[w2], g2 = Number(h4 >> BigInt(l2) & BigInt(u2));
      i3[g2] = i3[g2].add(n3[w2]);
    }
    let p2 = o3;
    for (let w2 = i3.length - 1, h4 = o3; w2 > 0; w2--) h4 = h4.add(i3[w2]), p2 = p2.add(h4);
    if (c2 = c2.add(p2), l2 !== 0) for (let w2 = 0; w2 < a2; w2++) c2 = c2.double();
  }
  return c2;
}
function pr$3(t) {
  return ar$3(t.Fp), Ot$3(t, { n: "bigint", h: "bigint", Gx: "field", Gy: "field" }, { nBitLength: "isSafeInteger", nByteLength: "isSafeInteger" }), Object.freeze({ ...me$3(t.n, t.nBitLength), ...t, p: t.Fp.ORDER });
}
const G$2 = BigInt(0), j$5 = BigInt(1), yt$2 = BigInt(2), wr$3 = BigInt(8), Er$3 = { zip215: true };
function gr$3(t) {
  const e2 = pr$3(t);
  return Ot$3(t, { hash: "function", a: "bigint", d: "bigint", randomBytes: "function" }, { adjustScalarBytes: "function", domain: "function", uvRatio: "function", mapToCurve: "function" }), Object.freeze({ ...e2 });
}
function yr$3(t) {
  const e2 = gr$3(t), { Fp: n3, n: r2, prehash: o3, hash: s2, randomBytes: a2, nByteLength: u2, h: i3 } = e2, D2 = yt$2 << BigInt(u2 * 8) - j$5, c2 = n3.create, l2 = _e$4(e2.n, e2.nBitLength), p2 = e2.uvRatio || ((y3, f5) => {
    try {
      return { isValid: true, value: n3.sqrt(y3 * n3.inv(f5)) };
    } catch {
      return { isValid: false, value: G$2 };
    }
  }), w2 = e2.adjustScalarBytes || ((y3) => y3), h4 = e2.domain || ((y3, f5, b2) => {
    if (Tt$3("phflag", b2), f5.length || b2) throw new Error("Contexts/pre-hash are not supported");
    return y3;
  });
  function g2(y3, f5) {
    ft$2("coordinate " + y3, f5, G$2, D2);
  }
  function S4(y3) {
    if (!(y3 instanceof d4)) throw new Error("ExtendedPoint expected");
  }
  const v2 = xe$3((y3, f5) => {
    const { ex: b2, ey: E2, ez: B3 } = y3, C2 = y3.is0();
    f5 == null && (f5 = C2 ? wr$3 : n3.inv(B3));
    const A2 = c2(b2 * f5), U2 = c2(E2 * f5), _3 = c2(B3 * f5);
    if (C2) return { x: G$2, y: j$5 };
    if (_3 !== j$5) throw new Error("invZ was invalid");
    return { x: A2, y: U2 };
  }), L3 = xe$3((y3) => {
    const { a: f5, d: b2 } = e2;
    if (y3.is0()) throw new Error("bad point: ZERO");
    const { ex: E2, ey: B3, ez: C2, et: A2 } = y3, U2 = c2(E2 * E2), _3 = c2(B3 * B3), T2 = c2(C2 * C2), $2 = c2(T2 * T2), R4 = c2(U2 * f5), V3 = c2(T2 * c2(R4 + _3)), Y2 = c2($2 + c2(b2 * c2(U2 * _3)));
    if (V3 !== Y2) throw new Error("bad point: equation left != right (1)");
    const Z2 = c2(E2 * B3), X2 = c2(C2 * A2);
    if (Z2 !== X2) throw new Error("bad point: equation left != right (2)");
    return true;
  });
  class d4 {
    constructor(f5, b2, E2, B3) {
      this.ex = f5, this.ey = b2, this.ez = E2, this.et = B3, g2("x", f5), g2("y", b2), g2("z", E2), g2("t", B3), Object.freeze(this);
    }
    get x() {
      return this.toAffine().x;
    }
    get y() {
      return this.toAffine().y;
    }
    static fromAffine(f5) {
      if (f5 instanceof d4) throw new Error("extended point not allowed");
      const { x: b2, y: E2 } = f5 || {};
      return g2("x", b2), g2("y", E2), new d4(b2, E2, j$5, c2(b2 * E2));
    }
    static normalizeZ(f5) {
      const b2 = n3.invertBatch(f5.map((E2) => E2.ez));
      return f5.map((E2, B3) => E2.toAffine(b2[B3])).map(d4.fromAffine);
    }
    static msm(f5, b2) {
      return br$3(d4, l2, f5, b2);
    }
    _setWindowSize(f5) {
      q2.setWindowSize(this, f5);
    }
    assertValidity() {
      L3(this);
    }
    equals(f5) {
      S4(f5);
      const { ex: b2, ey: E2, ez: B3 } = this, { ex: C2, ey: A2, ez: U2 } = f5, _3 = c2(b2 * U2), T2 = c2(C2 * B3), $2 = c2(E2 * U2), R4 = c2(A2 * B3);
      return _3 === T2 && $2 === R4;
    }
    is0() {
      return this.equals(d4.ZERO);
    }
    negate() {
      return new d4(c2(-this.ex), this.ey, this.ez, c2(-this.et));
    }
    double() {
      const { a: f5 } = e2, { ex: b2, ey: E2, ez: B3 } = this, C2 = c2(b2 * b2), A2 = c2(E2 * E2), U2 = c2(yt$2 * c2(B3 * B3)), _3 = c2(f5 * C2), T2 = b2 + E2, $2 = c2(c2(T2 * T2) - C2 - A2), R4 = _3 + A2, V3 = R4 - U2, Y2 = _3 - A2, Z2 = c2($2 * V3), X2 = c2(R4 * Y2), et2 = c2($2 * Y2), pt2 = c2(V3 * R4);
      return new d4(Z2, X2, pt2, et2);
    }
    add(f5) {
      S4(f5);
      const { a: b2, d: E2 } = e2, { ex: B3, ey: C2, ez: A2, et: U2 } = this, { ex: _3, ey: T2, ez: $2, et: R4 } = f5;
      if (b2 === BigInt(-1)) {
        const re2 = c2((C2 - B3) * (T2 + _3)), oe2 = c2((C2 + B3) * (T2 - _3)), mt2 = c2(oe2 - re2);
        if (mt2 === G$2) return this.double();
        const se2 = c2(A2 * yt$2 * R4), ie2 = c2(U2 * yt$2 * $2), ue2 = ie2 + se2, ce2 = oe2 + re2, ae2 = ie2 - se2, Dn2 = c2(ue2 * mt2), dn2 = c2(ce2 * ae2), hn3 = c2(ue2 * ae2), ln2 = c2(mt2 * ce2);
        return new d4(Dn2, dn2, ln2, hn3);
      }
      const V3 = c2(B3 * _3), Y2 = c2(C2 * T2), Z2 = c2(U2 * E2 * R4), X2 = c2(A2 * $2), et2 = c2((B3 + C2) * (_3 + T2) - V3 - Y2), pt2 = X2 - Z2, ee2 = X2 + Z2, ne2 = c2(Y2 - b2 * V3), un2 = c2(et2 * pt2), cn3 = c2(ee2 * ne2), an2 = c2(et2 * ne2), fn2 = c2(pt2 * ee2);
      return new d4(un2, cn3, fn2, an2);
    }
    subtract(f5) {
      return this.add(f5.negate());
    }
    wNAF(f5) {
      return q2.wNAFCached(this, f5, d4.normalizeZ);
    }
    multiply(f5) {
      const b2 = f5;
      ft$2("scalar", b2, j$5, r2);
      const { p: E2, f: B3 } = this.wNAF(b2);
      return d4.normalizeZ([E2, B3])[0];
    }
    multiplyUnsafe(f5, b2 = d4.ZERO) {
      const E2 = f5;
      return ft$2("scalar", E2, G$2, r2), E2 === G$2 ? F2 : this.is0() || E2 === j$5 ? this : q2.wNAFCachedUnsafe(this, E2, d4.normalizeZ, b2);
    }
    isSmallOrder() {
      return this.multiplyUnsafe(i3).is0();
    }
    isTorsionFree() {
      return q2.unsafeLadder(this, r2).is0();
    }
    toAffine(f5) {
      return v2(this, f5);
    }
    clearCofactor() {
      const { h: f5 } = e2;
      return f5 === j$5 ? this : this.multiplyUnsafe(f5);
    }
    static fromHex(f5, b2 = false) {
      const { d: E2, a: B3 } = e2, C2 = n3.BYTES;
      f5 = W$1("pointHex", f5, C2), Tt$3("zip215", b2);
      const A2 = f5.slice(), U2 = f5[C2 - 1];
      A2[C2 - 1] = U2 & -129;
      const _3 = Et$4(A2), T2 = b2 ? D2 : n3.ORDER;
      ft$2("pointHex.y", _3, G$2, T2);
      const $2 = c2(_3 * _3), R4 = c2($2 - j$5), V3 = c2(E2 * $2 - B3);
      let { isValid: Y2, value: Z2 } = p2(R4, V3);
      if (!Y2) throw new Error("Point.fromHex: invalid y coordinate");
      const X2 = (Z2 & j$5) === j$5, et2 = (U2 & 128) !== 0;
      if (!b2 && Z2 === G$2 && et2) throw new Error("Point.fromHex: x=0 and x_0=1");
      return et2 !== X2 && (Z2 = c2(-Z2)), d4.fromAffine({ x: Z2, y: _3 });
    }
    static fromPrivateKey(f5) {
      return O4(f5).point;
    }
    toRawBytes() {
      const { x: f5, y: b2 } = this.toAffine(), E2 = Nt$3(b2, n3.BYTES);
      return E2[E2.length - 1] |= f5 & j$5 ? 128 : 0, E2;
    }
    toHex() {
      return Ft$3(this.toRawBytes());
    }
  }
  d4.BASE = new d4(e2.Gx, e2.Gy, j$5, c2(e2.Gx * e2.Gy)), d4.ZERO = new d4(G$2, j$5, j$5, G$2);
  const { BASE: m4, ZERO: F2 } = d4, q2 = lr$3(d4, u2 * 8);
  function z2(y3) {
    return H$3(y3, r2);
  }
  function I3(y3) {
    return z2(Et$4(y3));
  }
  function O4(y3) {
    const f5 = n3.BYTES;
    y3 = W$1("private key", y3, f5);
    const b2 = W$1("hashed private key", s2(y3), 2 * f5), E2 = w2(b2.slice(0, f5)), B3 = b2.slice(f5, 2 * f5), C2 = I3(E2), A2 = m4.multiply(C2), U2 = A2.toRawBytes();
    return { head: E2, prefix: B3, scalar: C2, point: A2, pointBytes: U2 };
  }
  function ot2(y3) {
    return O4(y3).pointBytes;
  }
  function tt2(y3 = new Uint8Array(), ...f5) {
    const b2 = ye$1(...f5);
    return I3(s2(h4(b2, W$1("context", y3), !!o3)));
  }
  function st2(y3, f5, b2 = {}) {
    y3 = W$1("message", y3), o3 && (y3 = o3(y3));
    const { prefix: E2, scalar: B3, pointBytes: C2 } = O4(f5), A2 = tt2(b2.context, E2, y3), U2 = m4.multiply(A2).toRawBytes(), _3 = tt2(b2.context, U2, C2, y3), T2 = z2(A2 + _3 * B3);
    ft$2("signature.s", T2, G$2, r2);
    const $2 = ye$1(U2, Nt$3(T2, n3.BYTES));
    return W$1("result", $2, n3.BYTES * 2);
  }
  const at2 = Er$3;
  function Ct2(y3, f5, b2, E2 = at2) {
    const { context: B3, zip215: C2 } = E2, A2 = n3.BYTES;
    y3 = W$1("signature", y3, 2 * A2), f5 = W$1("message", f5), b2 = W$1("publicKey", b2, A2), C2 !== void 0 && Tt$3("zip215", C2), o3 && (f5 = o3(f5));
    const U2 = Et$4(y3.slice(A2, 2 * A2));
    let _3, T2, $2;
    try {
      _3 = d4.fromHex(b2, C2), T2 = d4.fromHex(y3.slice(0, A2), C2), $2 = m4.multiplyUnsafe(U2);
    } catch {
      return false;
    }
    if (!C2 && _3.isSmallOrder()) return false;
    const R4 = tt2(B3, T2.toRawBytes(), _3.toRawBytes(), f5);
    return T2.add(_3.multiplyUnsafe(R4)).subtract($2).clearCofactor().equals(d4.ZERO);
  }
  return m4._setWindowSize(8), { CURVE: e2, getPublicKey: ot2, sign: st2, verify: Ct2, ExtendedPoint: d4, utils: { getExtendedPublicKey: O4, randomPrivateKey: () => a2(n3.BYTES), precompute(y3 = 8, f5 = d4.BASE) {
    return f5._setWindowSize(y3), f5.multiply(BigInt(3)), f5;
  } } };
}
BigInt(0), BigInt(1);
const kt$2 = BigInt("57896044618658097711785492504343953926634992332820282019728792003956564819949"), Ue$4 = BigInt("19681161376707505956807079304988542015446066515923890162744021073123829784752");
BigInt(0);
const xr$3 = BigInt(1), Te$2 = BigInt(2);
BigInt(3);
const Br$2 = BigInt(5), Cr$2 = BigInt(8);
function Ar$3(t) {
  const e2 = BigInt(10), n3 = BigInt(20), r2 = BigInt(40), o3 = BigInt(80), s2 = kt$2, u2 = t * t % s2 * t % s2, i3 = J$4(u2, Te$2, s2) * u2 % s2, D2 = J$4(i3, xr$3, s2) * t % s2, c2 = J$4(D2, Br$2, s2) * D2 % s2, l2 = J$4(c2, e2, s2) * c2 % s2, p2 = J$4(l2, n3, s2) * l2 % s2, w2 = J$4(p2, r2, s2) * p2 % s2, h4 = J$4(w2, o3, s2) * w2 % s2, g2 = J$4(h4, o3, s2) * w2 % s2, S4 = J$4(g2, e2, s2) * c2 % s2;
  return { pow_p_5_8: J$4(S4, Te$2, s2) * t % s2, b2: u2 };
}
function mr$3(t) {
  return t[0] &= 248, t[31] &= 127, t[31] |= 64, t;
}
function _r$3(t, e2) {
  const n3 = kt$2, r2 = H$3(e2 * e2 * e2, n3), o3 = H$3(r2 * r2 * e2, n3), s2 = Ar$3(t * o3).pow_p_5_8;
  let a2 = H$3(t * r2 * s2, n3);
  const u2 = H$3(e2 * a2 * a2, n3), i3 = a2, D2 = H$3(a2 * Ue$4, n3), c2 = u2 === t, l2 = u2 === H$3(-t, n3), p2 = u2 === H$3(-t * Ue$4, n3);
  return c2 && (a2 = i3), (l2 || p2) && (a2 = D2), ur$2(a2, n3) && (a2 = H$3(-a2, n3)), { isValid: c2 || l2, value: a2 };
}
const Sr$3 = (() => _e$4(kt$2, void 0, true))(), vr$3 = (() => ({ a: BigInt(-1), d: BigInt("37095705934669439343138083508754565189542113879843219016388785533085940283555"), Fp: Sr$3, n: BigInt("7237005577332262213973186563042994240857116359379907606001950938285454250989"), h: Cr$2, Gx: BigInt("15112221349535400772501151409588531511454012693041857206046113283949847762202"), Gy: BigInt("46316835694926478169428394003475163141307993866256225615783033603165251855960"), hash: Kn$3, randomBytes: he$2, adjustScalarBytes: mr$3, uvRatio: _r$3 }))(), Rt$4 = (() => yr$3(vr$3))(), jt$2 = "EdDSA", Zt$2 = "JWT", ut$3 = ".", Dt$1 = "base64url", Gt$3 = "utf8", xt$3 = "utf8", Vt$2 = ":", Yt$3 = "did", Jt$3 = "key", dt$3 = "base58btc", Kt$2 = "z", Wt$3 = "K36", Ne$3 = 32;
function Xt$2(t) {
  return globalThis.Buffer != null ? new Uint8Array(t.buffer, t.byteOffset, t.byteLength) : t;
}
function Le$4(t = 0) {
  return globalThis.Buffer != null && globalThis.Buffer.allocUnsafe != null ? Xt$2(globalThis.Buffer.allocUnsafe(t)) : new Uint8Array(t);
}
function Oe$3(t, e2) {
  e2 || (e2 = t.reduce((o3, s2) => o3 + s2.length, 0));
  const n3 = Le$4(e2);
  let r2 = 0;
  for (const o3 of t) n3.set(o3, r2), r2 += o3.length;
  return Xt$2(n3);
}
function Ir$3(t, e2) {
  if (t.length >= 255) throw new TypeError("Alphabet too long");
  for (var n3 = new Uint8Array(256), r2 = 0; r2 < n3.length; r2++) n3[r2] = 255;
  for (var o3 = 0; o3 < t.length; o3++) {
    var s2 = t.charAt(o3), a2 = s2.charCodeAt(0);
    if (n3[a2] !== 255) throw new TypeError(s2 + " is ambiguous");
    n3[a2] = o3;
  }
  var u2 = t.length, i3 = t.charAt(0), D2 = Math.log(u2) / Math.log(256), c2 = Math.log(256) / Math.log(u2);
  function l2(h4) {
    if (h4 instanceof Uint8Array || (ArrayBuffer.isView(h4) ? h4 = new Uint8Array(h4.buffer, h4.byteOffset, h4.byteLength) : Array.isArray(h4) && (h4 = Uint8Array.from(h4))), !(h4 instanceof Uint8Array)) throw new TypeError("Expected Uint8Array");
    if (h4.length === 0) return "";
    for (var g2 = 0, S4 = 0, v2 = 0, L3 = h4.length; v2 !== L3 && h4[v2] === 0; ) v2++, g2++;
    for (var d4 = (L3 - v2) * c2 + 1 >>> 0, m4 = new Uint8Array(d4); v2 !== L3; ) {
      for (var F2 = h4[v2], q2 = 0, z2 = d4 - 1; (F2 !== 0 || q2 < S4) && z2 !== -1; z2--, q2++) F2 += 256 * m4[z2] >>> 0, m4[z2] = F2 % u2 >>> 0, F2 = F2 / u2 >>> 0;
      if (F2 !== 0) throw new Error("Non-zero carry");
      S4 = q2, v2++;
    }
    for (var I3 = d4 - S4; I3 !== d4 && m4[I3] === 0; ) I3++;
    for (var O4 = i3.repeat(g2); I3 < d4; ++I3) O4 += t.charAt(m4[I3]);
    return O4;
  }
  function p2(h4) {
    if (typeof h4 != "string") throw new TypeError("Expected String");
    if (h4.length === 0) return new Uint8Array();
    var g2 = 0;
    if (h4[g2] !== " ") {
      for (var S4 = 0, v2 = 0; h4[g2] === i3; ) S4++, g2++;
      for (var L3 = (h4.length - g2) * D2 + 1 >>> 0, d4 = new Uint8Array(L3); h4[g2]; ) {
        var m4 = n3[h4.charCodeAt(g2)];
        if (m4 === 255) return;
        for (var F2 = 0, q2 = L3 - 1; (m4 !== 0 || F2 < v2) && q2 !== -1; q2--, F2++) m4 += u2 * d4[q2] >>> 0, d4[q2] = m4 % 256 >>> 0, m4 = m4 / 256 >>> 0;
        if (m4 !== 0) throw new Error("Non-zero carry");
        v2 = F2, g2++;
      }
      if (h4[g2] !== " ") {
        for (var z2 = L3 - v2; z2 !== L3 && d4[z2] === 0; ) z2++;
        for (var I3 = new Uint8Array(S4 + (L3 - z2)), O4 = S4; z2 !== L3; ) I3[O4++] = d4[z2++];
        return I3;
      }
    }
  }
  function w2(h4) {
    var g2 = p2(h4);
    if (g2) return g2;
    throw new Error(`Non-${e2} character`);
  }
  return { encode: l2, decodeUnsafe: p2, decode: w2 };
}
var Ur$3 = Ir$3, Tr$3 = Ur$3;
const He$2 = (t) => {
  if (t instanceof Uint8Array && t.constructor.name === "Uint8Array") return t;
  if (t instanceof ArrayBuffer) return new Uint8Array(t);
  if (ArrayBuffer.isView(t)) return new Uint8Array(t.buffer, t.byteOffset, t.byteLength);
  throw new Error("Unknown type, must be binary type");
}, Fr$2 = (t) => new TextEncoder().encode(t), Nr$3 = (t) => new TextDecoder().decode(t);
let Lr$2 = class Lr {
  constructor(e2, n3, r2) {
    this.name = e2, this.prefix = n3, this.baseEncode = r2;
  }
  encode(e2) {
    if (e2 instanceof Uint8Array) return `${this.prefix}${this.baseEncode(e2)}`;
    throw Error("Unknown type, must be binary type");
  }
};
let Or$3 = class Or {
  constructor(e2, n3, r2) {
    if (this.name = e2, this.prefix = n3, n3.codePointAt(0) === void 0) throw new Error("Invalid prefix character");
    this.prefixCodePoint = n3.codePointAt(0), this.baseDecode = r2;
  }
  decode(e2) {
    if (typeof e2 == "string") {
      if (e2.codePointAt(0) !== this.prefixCodePoint) throw Error(`Unable to decode multibase string ${JSON.stringify(e2)}, ${this.name} decoder only supports inputs prefixed with ${this.prefix}`);
      return this.baseDecode(e2.slice(this.prefix.length));
    } else throw Error("Can only multibase decode strings");
  }
  or(e2) {
    return ze$2(this, e2);
  }
};
let Hr$3 = class Hr {
  constructor(e2) {
    this.decoders = e2;
  }
  or(e2) {
    return ze$2(this, e2);
  }
  decode(e2) {
    const n3 = e2[0], r2 = this.decoders[n3];
    if (r2) return r2.decode(e2);
    throw RangeError(`Unable to decode multibase string ${JSON.stringify(e2)}, only inputs prefixed with ${Object.keys(this.decoders)} are supported`);
  }
};
const ze$2 = (t, e2) => new Hr$3({ ...t.decoders || { [t.prefix]: t }, ...e2.decoders || { [e2.prefix]: e2 } });
let zr$3 = class zr {
  constructor(e2, n3, r2, o3) {
    this.name = e2, this.prefix = n3, this.baseEncode = r2, this.baseDecode = o3, this.encoder = new Lr$2(e2, n3, r2), this.decoder = new Or$3(e2, n3, o3);
  }
  encode(e2) {
    return this.encoder.encode(e2);
  }
  decode(e2) {
    return this.decoder.decode(e2);
  }
};
const Bt$3 = ({ name: t, prefix: e2, encode: n3, decode: r2 }) => new zr$3(t, e2, n3, r2), ht$3 = ({ prefix: t, name: e2, alphabet: n3 }) => {
  const { encode: r2, decode: o3 } = Tr$3(n3, e2);
  return Bt$3({ prefix: t, name: e2, encode: r2, decode: (s2) => He$2(o3(s2)) });
}, Mr$2 = (t, e2, n3, r2) => {
  const o3 = {};
  for (let c2 = 0; c2 < e2.length; ++c2) o3[e2[c2]] = c2;
  let s2 = t.length;
  for (; t[s2 - 1] === "="; ) --s2;
  const a2 = new Uint8Array(s2 * n3 / 8 | 0);
  let u2 = 0, i3 = 0, D2 = 0;
  for (let c2 = 0; c2 < s2; ++c2) {
    const l2 = o3[t[c2]];
    if (l2 === void 0) throw new SyntaxError(`Non-${r2} character`);
    i3 = i3 << n3 | l2, u2 += n3, u2 >= 8 && (u2 -= 8, a2[D2++] = 255 & i3 >> u2);
  }
  if (u2 >= n3 || 255 & i3 << 8 - u2) throw new SyntaxError("Unexpected end of data");
  return a2;
}, qr$1 = (t, e2, n3) => {
  const r2 = e2[e2.length - 1] === "=", o3 = (1 << n3) - 1;
  let s2 = "", a2 = 0, u2 = 0;
  for (let i3 = 0; i3 < t.length; ++i3) for (u2 = u2 << 8 | t[i3], a2 += 8; a2 > n3; ) a2 -= n3, s2 += e2[o3 & u2 >> a2];
  if (a2 && (s2 += e2[o3 & u2 << n3 - a2]), r2) for (; s2.length * n3 & 7; ) s2 += "=";
  return s2;
}, k$4 = ({ name: t, prefix: e2, bitsPerChar: n3, alphabet: r2 }) => Bt$3({ prefix: e2, name: t, encode(o3) {
  return qr$1(o3, r2, n3);
}, decode(o3) {
  return Mr$2(o3, r2, n3, t);
} }), $r$3 = Bt$3({ prefix: "\0", name: "identity", encode: (t) => Nr$3(t), decode: (t) => Fr$2(t) });
var kr$2 = Object.freeze({ __proto__: null, identity: $r$3 });
const Rr$3 = k$4({ prefix: "0", name: "base2", alphabet: "01", bitsPerChar: 1 });
var jr$2 = Object.freeze({ __proto__: null, base2: Rr$3 });
const Zr$3 = k$4({ prefix: "7", name: "base8", alphabet: "01234567", bitsPerChar: 3 });
var Gr$2 = Object.freeze({ __proto__: null, base8: Zr$3 });
const Vr$2 = ht$3({ prefix: "9", name: "base10", alphabet: "0123456789" });
var Yr$3 = Object.freeze({ __proto__: null, base10: Vr$2 });
const Jr$3 = k$4({ prefix: "f", name: "base16", alphabet: "0123456789abcdef", bitsPerChar: 4 }), Kr$2 = k$4({ prefix: "F", name: "base16upper", alphabet: "0123456789ABCDEF", bitsPerChar: 4 });
var Wr$3 = Object.freeze({ __proto__: null, base16: Jr$3, base16upper: Kr$2 });
const Xr$2 = k$4({ prefix: "b", name: "base32", alphabet: "abcdefghijklmnopqrstuvwxyz234567", bitsPerChar: 5 }), Pr$2 = k$4({ prefix: "B", name: "base32upper", alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567", bitsPerChar: 5 }), Qr$2 = k$4({ prefix: "c", name: "base32pad", alphabet: "abcdefghijklmnopqrstuvwxyz234567=", bitsPerChar: 5 }), to$2 = k$4({ prefix: "C", name: "base32padupper", alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567=", bitsPerChar: 5 }), eo$2 = k$4({ prefix: "v", name: "base32hex", alphabet: "0123456789abcdefghijklmnopqrstuv", bitsPerChar: 5 }), no$3 = k$4({ prefix: "V", name: "base32hexupper", alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUV", bitsPerChar: 5 }), ro$3 = k$4({ prefix: "t", name: "base32hexpad", alphabet: "0123456789abcdefghijklmnopqrstuv=", bitsPerChar: 5 }), oo$2 = k$4({ prefix: "T", name: "base32hexpadupper", alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUV=", bitsPerChar: 5 }), so$2 = k$4({ prefix: "h", name: "base32z", alphabet: "ybndrfg8ejkmcpqxot1uwisza345h769", bitsPerChar: 5 });
var io$2 = Object.freeze({ __proto__: null, base32: Xr$2, base32upper: Pr$2, base32pad: Qr$2, base32padupper: to$2, base32hex: eo$2, base32hexupper: no$3, base32hexpad: ro$3, base32hexpadupper: oo$2, base32z: so$2 });
const uo$2 = ht$3({ prefix: "k", name: "base36", alphabet: "0123456789abcdefghijklmnopqrstuvwxyz" }), co$3 = ht$3({ prefix: "K", name: "base36upper", alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ" });
var ao$3 = Object.freeze({ __proto__: null, base36: uo$2, base36upper: co$3 });
const fo$2 = ht$3({ name: "base58btc", prefix: "z", alphabet: "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz" }), Do$2 = ht$3({ name: "base58flickr", prefix: "Z", alphabet: "123456789abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ" });
var ho$2 = Object.freeze({ __proto__: null, base58btc: fo$2, base58flickr: Do$2 });
const lo$2 = k$4({ prefix: "m", name: "base64", alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", bitsPerChar: 6 }), bo$2 = k$4({ prefix: "M", name: "base64pad", alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=", bitsPerChar: 6 }), po$2 = k$4({ prefix: "u", name: "base64url", alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_", bitsPerChar: 6 }), wo$2 = k$4({ prefix: "U", name: "base64urlpad", alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_=", bitsPerChar: 6 });
var Eo$2 = Object.freeze({ __proto__: null, base64: lo$2, base64pad: bo$2, base64url: po$2, base64urlpad: wo$2 });
const Me$4 = Array.from("🚀🪐☄🛰🌌🌑🌒🌓🌔🌕🌖🌗🌘🌍🌏🌎🐉☀💻🖥💾💿😂❤😍🤣😊🙏💕😭😘👍😅👏😁🔥🥰💔💖💙😢🤔😆🙄💪😉☺👌🤗💜😔😎😇🌹🤦🎉💞✌✨🤷😱😌🌸🙌😋💗💚😏💛🙂💓🤩😄😀🖤😃💯🙈👇🎶😒🤭❣😜💋👀😪😑💥🙋😞😩😡🤪👊🥳😥🤤👉💃😳✋😚😝😴🌟😬🙃🍀🌷😻😓⭐✅🥺🌈😈🤘💦✔😣🏃💐☹🎊💘😠☝😕🌺🎂🌻😐🖕💝🙊😹🗣💫💀👑🎵🤞😛🔴😤🌼😫⚽🤙☕🏆🤫👈😮🙆🍻🍃🐶💁😲🌿🧡🎁⚡🌞🎈❌✊👋😰🤨😶🤝🚶💰🍓💢🤟🙁🚨💨🤬✈🎀🍺🤓😙💟🌱😖👶🥴▶➡❓💎💸⬇😨🌚🦋😷🕺⚠🙅😟😵👎🤲🤠🤧📌🔵💅🧐🐾🍒😗🤑🌊🤯🐷☎💧😯💆👆🎤🙇🍑❄🌴💣🐸💌📍🥀🤢👅💡💩👐📸👻🤐🤮🎼🥵🚩🍎🍊👼💍📣🥂"), go$2 = Me$4.reduce((t, e2, n3) => (t[n3] = e2, t), []), yo$2 = Me$4.reduce((t, e2, n3) => (t[e2.codePointAt(0)] = n3, t), []);
function xo$2(t) {
  return t.reduce((e2, n3) => (e2 += go$2[n3], e2), "");
}
function Bo$2(t) {
  const e2 = [];
  for (const n3 of t) {
    const r2 = yo$2[n3.codePointAt(0)];
    if (r2 === void 0) throw new Error(`Non-base256emoji character: ${n3}`);
    e2.push(r2);
  }
  return new Uint8Array(e2);
}
const Co$2 = Bt$3({ prefix: "🚀", name: "base256emoji", encode: xo$2, decode: Bo$2 });
var Ao$2 = Object.freeze({ __proto__: null, base256emoji: Co$2 }), mo$2 = $e$4, qe$3 = 128, So$2 = -128, vo$2 = Math.pow(2, 31);
function $e$4(t, e2, n3) {
  e2 = e2 || [], n3 = n3 || 0;
  for (var r2 = n3; t >= vo$2; ) e2[n3++] = t & 255 | qe$3, t /= 128;
  for (; t & So$2; ) e2[n3++] = t & 255 | qe$3, t >>>= 7;
  return e2[n3] = t | 0, $e$4.bytes = n3 - r2 + 1, e2;
}
var Io$2 = Pt$2, Uo$2 = 128, ke$4 = 127;
function Pt$2(t, r2) {
  var n3 = 0, r2 = r2 || 0, o3 = 0, s2 = r2, a2, u2 = t.length;
  do {
    if (s2 >= u2) throw Pt$2.bytes = 0, new RangeError("Could not decode varint");
    a2 = t[s2++], n3 += o3 < 28 ? (a2 & ke$4) << o3 : (a2 & ke$4) * Math.pow(2, o3), o3 += 7;
  } while (a2 >= Uo$2);
  return Pt$2.bytes = s2 - r2, n3;
}
var To$2 = Math.pow(2, 7), Fo$2 = Math.pow(2, 14), No$2 = Math.pow(2, 21), Lo$2 = Math.pow(2, 28), Oo$2 = Math.pow(2, 35), Ho$2 = Math.pow(2, 42), zo$2 = Math.pow(2, 49), Mo$2 = Math.pow(2, 56), qo$2 = Math.pow(2, 63), $o$2 = function(t) {
  return t < To$2 ? 1 : t < Fo$2 ? 2 : t < No$2 ? 3 : t < Lo$2 ? 4 : t < Oo$2 ? 5 : t < Ho$2 ? 6 : t < zo$2 ? 7 : t < Mo$2 ? 8 : t < qo$2 ? 9 : 10;
}, ko$2 = { encode: mo$2, decode: Io$2, encodingLength: $o$2 }, Re$2 = ko$2;
const je$3 = (t, e2, n3 = 0) => (Re$2.encode(t, e2, n3), e2), Ze$1 = (t) => Re$2.encodingLength(t), Qt$2 = (t, e2) => {
  const n3 = e2.byteLength, r2 = Ze$1(t), o3 = r2 + Ze$1(n3), s2 = new Uint8Array(o3 + n3);
  return je$3(t, s2, 0), je$3(n3, s2, r2), s2.set(e2, o3), new Ro$2(t, n3, e2, s2);
};
let Ro$2 = class Ro {
  constructor(e2, n3, r2, o3) {
    this.code = e2, this.size = n3, this.digest = r2, this.bytes = o3;
  }
};
const Ge$4 = ({ name: t, code: e2, encode: n3 }) => new jo$2(t, e2, n3);
let jo$2 = class jo {
  constructor(e2, n3, r2) {
    this.name = e2, this.code = n3, this.encode = r2;
  }
  digest(e2) {
    if (e2 instanceof Uint8Array) {
      const n3 = this.encode(e2);
      return n3 instanceof Uint8Array ? Qt$2(this.code, n3) : n3.then((r2) => Qt$2(this.code, r2));
    } else throw Error("Unknown type, must be binary type");
  }
};
const Ve$3 = (t) => async (e2) => new Uint8Array(await crypto.subtle.digest(t, e2)), Zo$1 = Ge$4({ name: "sha2-256", code: 18, encode: Ve$3("SHA-256") }), Go$2 = Ge$4({ name: "sha2-512", code: 19, encode: Ve$3("SHA-512") });
var Vo$2 = Object.freeze({ __proto__: null, sha256: Zo$1, sha512: Go$2 });
const Ye$2 = 0, Yo$2 = "identity", Je$1 = He$2, Jo$2 = (t) => Qt$2(Ye$2, Je$1(t)), Ko$2 = { code: Ye$2, name: Yo$2, encode: Je$1, digest: Jo$2 };
var Wo$2 = Object.freeze({ __proto__: null, identity: Ko$2 });
new TextEncoder(), new TextDecoder();
const Ke$4 = { ...kr$2, ...jr$2, ...Gr$2, ...Yr$3, ...Wr$3, ...io$2, ...ao$3, ...ho$2, ...Eo$2, ...Ao$2 };
({ ...Vo$2, ...Wo$2 });
function We$1(t, e2, n3, r2) {
  return { name: t, prefix: e2, encoder: { name: t, prefix: e2, encode: n3 }, decoder: { decode: r2 } };
}
const Xe$1 = We$1("utf8", "u", (t) => "u" + new TextDecoder("utf8").decode(t), (t) => new TextEncoder().encode(t.substring(1))), te$2 = We$1("ascii", "a", (t) => {
  let e2 = "a";
  for (let n3 = 0; n3 < t.length; n3++) e2 += String.fromCharCode(t[n3]);
  return e2;
}, (t) => {
  t = t.substring(1);
  const e2 = Le$4(t.length);
  for (let n3 = 0; n3 < t.length; n3++) e2[n3] = t.charCodeAt(n3);
  return e2;
}), Pe$1 = { utf8: Xe$1, "utf-8": Xe$1, hex: Ke$4.base16, latin1: te$2, ascii: te$2, binary: te$2, ...Ke$4 };
function ct$2(t, e2 = "utf8") {
  const n3 = Pe$1[e2];
  if (!n3) throw new Error(`Unsupported encoding "${e2}"`);
  return (e2 === "utf8" || e2 === "utf-8") && globalThis.Buffer != null && globalThis.Buffer.from != null ? globalThis.Buffer.from(t.buffer, t.byteOffset, t.byteLength).toString("utf8") : n3.encoder.encode(t).substring(1);
}
function rt$2(t, e2 = "utf8") {
  const n3 = Pe$1[e2];
  if (!n3) throw new Error(`Unsupported encoding "${e2}"`);
  return (e2 === "utf8" || e2 === "utf-8") && globalThis.Buffer != null && globalThis.Buffer.from != null ? Xt$2(globalThis.Buffer.from(t, "utf-8")) : n3.decoder.decode(`${n3.prefix}${t}`);
}
function lt$2(t) {
  return safeJsonParse(ct$2(rt$2(t, Dt$1), Gt$3));
}
function bt$1(t) {
  return ct$2(rt$2(safeJsonStringify(t), Gt$3), Dt$1);
}
function Qe$1(t) {
  const e2 = rt$2(Wt$3, dt$3), n3 = Kt$2 + ct$2(Oe$3([e2, t]), dt$3);
  return [Yt$3, Jt$3, n3].join(Vt$2);
}
function en$3(t) {
  return ct$2(t, Dt$1);
}
function nn$3(t) {
  return rt$2(t, Dt$1);
}
function rn$3(t) {
  return rt$2([bt$1(t.header), bt$1(t.payload)].join(ut$3), xt$3);
}
function on$3(t) {
  return [bt$1(t.header), bt$1(t.payload), en$3(t.signature)].join(ut$3);
}
function sn$3(t) {
  const e2 = t.split(ut$3), n3 = lt$2(e2[0]), r2 = lt$2(e2[1]), o3 = nn$3(e2[2]), s2 = rt$2(e2.slice(0, 2).join(ut$3), xt$3);
  return { header: n3, payload: r2, signature: o3, data: s2 };
}
function Po$2(t = he$2(Ne$3)) {
  const e2 = Rt$4.getPublicKey(t);
  return { secretKey: Oe$3([t, e2]), publicKey: e2 };
}
async function Qo$1(t, e2, n3, r2, o3 = cjs$3.fromMiliseconds(Date.now())) {
  const s2 = { alg: jt$2, typ: Zt$2 }, a2 = Qe$1(r2.publicKey), u2 = o3 + n3, i3 = { iss: a2, sub: t, aud: e2, iat: o3, exp: u2 }, D2 = rn$3({ header: s2, payload: i3 }), c2 = Rt$4.sign(D2, r2.secretKey.slice(0, 32));
  return on$3({ header: s2, payload: i3, signature: c2 });
}
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
function base$1(ALPHABET, name2) {
  if (ALPHABET.length >= 255) {
    throw new TypeError("Alphabet too long");
  }
  var BASE_MAP = new Uint8Array(256);
  for (var j2 = 0; j2 < BASE_MAP.length; j2++) {
    BASE_MAP[j2] = 255;
  }
  for (var i3 = 0; i3 < ALPHABET.length; i3++) {
    var x2 = ALPHABET.charAt(i3);
    var xc2 = x2.charCodeAt(0);
    if (BASE_MAP[xc2] !== 255) {
      throw new TypeError(x2 + " is ambiguous");
    }
    BASE_MAP[xc2] = i3;
  }
  var BASE = ALPHABET.length;
  var LEADER = ALPHABET.charAt(0);
  var FACTOR = Math.log(BASE) / Math.log(256);
  var iFACTOR = Math.log(256) / Math.log(BASE);
  function encode3(source) {
    if (source instanceof Uint8Array) ;
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
    var it22 = size - length;
    while (it22 !== size && b58[it22] === 0) {
      it22++;
    }
    var str = LEADER.repeat(zeroes);
    for (; it22 < size; ++it22) {
      str += ALPHABET.charAt(b58[it22]);
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
    throw new Error(`Non-${name2} character`);
  }
  return {
    encode: encode3,
    decodeUnsafe,
    decode: decode2
  };
}
var src = base$1;
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
const toString$1 = (b2) => new TextDecoder().decode(b2);
class Encoder {
  constructor(name2, prefix, baseEncode) {
    this.name = name2;
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
  constructor(name2, prefix, baseDecode) {
    this.name = name2;
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
    return or$3(this, decoder);
  }
}
class ComposedDecoder {
  constructor(decoders) {
    this.decoders = decoders;
  }
  or(decoder) {
    return or$3(this, decoder);
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
const or$3 = (left, right) => new ComposedDecoder({
  ...left.decoders || { [left.prefix]: left },
  ...right.decoders || { [right.prefix]: right }
});
class Codec {
  constructor(name2, prefix, baseEncode, baseDecode) {
    this.name = name2;
    this.prefix = prefix;
    this.baseEncode = baseEncode;
    this.baseDecode = baseDecode;
    this.encoder = new Encoder(name2, prefix, baseEncode);
    this.decoder = new Decoder(name2, prefix, baseDecode);
  }
  encode(input) {
    return this.encoder.encode(input);
  }
  decode(input) {
    return this.decoder.decode(input);
  }
}
const from = ({ name: name2, prefix, encode: encode3, decode: decode2 }) => new Codec(name2, prefix, encode3, decode2);
const baseX = ({ prefix, name: name2, alphabet: alphabet2 }) => {
  const { encode: encode3, decode: decode2 } = _brrp__multiformats_scope_baseX(alphabet2, name2);
  return from({
    prefix,
    name: name2,
    encode: encode3,
    decode: (text) => coerce(decode2(text))
  });
};
const decode$1 = (string2, alphabet2, bitsPerChar, name2) => {
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
      throw new SyntaxError(`Non-${name2} character`);
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
  const pad2 = alphabet2[alphabet2.length - 1] === "=";
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
  if (pad2) {
    while (out.length * bitsPerChar & 7) {
      out += "=";
    }
  }
  return out;
};
const rfc4648 = ({ name: name2, prefix, bitsPerChar, alphabet: alphabet2 }) => {
  return from({
    prefix,
    name: name2,
    encode(input) {
      return encode$1(input, alphabet2, bitsPerChar);
    },
    decode(input) {
      return decode$1(input, alphabet2, bitsPerChar, name2);
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
const alphabetBytesToChars = alphabet.reduce((p2, c2, i3) => {
  p2[i3] = c2;
  return p2;
}, []);
const alphabetCharsToBytes = alphabet.reduce((p2, c2, i3) => {
  p2[c2.codePointAt(0)] = i3;
  return p2;
}, []);
function encode(data) {
  return data.reduce((p2, c2) => {
    p2 += alphabetBytesToChars[c2];
    return p2;
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
function createCodec(name2, prefix, encode3, decode2) {
  return {
    name: name2,
    prefix,
    encoder: {
      name: name2,
      prefix,
      encode: encode3
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
var elliptic = {};
const name = "elliptic";
const version = "6.6.1";
const description = "EC cryptography";
const main = "lib/elliptic.js";
const files = [
  "lib"
];
const scripts = {
  lint: "eslint lib test",
  "lint:fix": "npm run lint -- --fix",
  unit: "istanbul test _mocha --reporter=spec test/index.js",
  test: "npm run lint && npm run unit",
  version: "grunt dist && git add dist/"
};
const repository = {
  type: "git",
  url: "git@github.com:indutny/elliptic"
};
const keywords = [
  "EC",
  "Elliptic",
  "curve",
  "Cryptography"
];
const author = "Fedor Indutny <fedor@indutny.com>";
const license = "MIT";
const bugs = {
  url: "https://github.com/indutny/elliptic/issues"
};
const homepage = "https://github.com/indutny/elliptic";
const devDependencies = {
  brfs: "^2.0.2",
  coveralls: "^3.1.0",
  eslint: "^7.6.0",
  grunt: "^1.2.1",
  "grunt-browserify": "^5.3.0",
  "grunt-cli": "^1.3.2",
  "grunt-contrib-connect": "^3.0.0",
  "grunt-contrib-copy": "^1.0.0",
  "grunt-contrib-uglify": "^5.0.0",
  "grunt-mocha-istanbul": "^5.0.2",
  "grunt-saucelabs": "^9.0.1",
  istanbul: "^0.4.5",
  mocha: "^8.0.1"
};
const dependencies = {
  "bn.js": "^4.11.9",
  brorand: "^1.1.0",
  "hash.js": "^1.0.0",
  "hmac-drbg": "^1.0.1",
  inherits: "^2.0.4",
  "minimalistic-assert": "^1.0.1",
  "minimalistic-crypto-utils": "^1.0.1"
};
const require$$0 = {
  name,
  version,
  description,
  main,
  files,
  scripts,
  repository,
  keywords,
  author,
  license,
  bugs,
  homepage,
  devDependencies,
  dependencies
};
var utils$m = {};
var bn$3 = { exports: {} };
bn$3.exports;
(function(module) {
  (function(module2, exports) {
    function assert2(val, msg) {
      if (!val) throw new Error(msg || "Assertion failed");
    }
    function inherits2(ctor, superCtor) {
      ctor.super_ = superCtor;
      var TempCtor = function() {
      };
      TempCtor.prototype = superCtor.prototype;
      ctor.prototype = new TempCtor();
      ctor.prototype.constructor = ctor;
    }
    function BN2(number, base3, endian) {
      if (BN2.isBN(number)) {
        return number;
      }
      this.negative = 0;
      this.words = null;
      this.length = 0;
      this.red = null;
      if (number !== null) {
        if (base3 === "le" || base3 === "be") {
          endian = base3;
          base3 = 10;
        }
        this._init(number || 0, base3 || 10, endian || "be");
      }
    }
    if (typeof module2 === "object") {
      module2.exports = BN2;
    } else {
      exports.BN = BN2;
    }
    BN2.BN = BN2;
    BN2.wordSize = 26;
    var Buffer2;
    try {
      if (typeof window !== "undefined" && typeof window.Buffer !== "undefined") {
        Buffer2 = window.Buffer;
      } else {
        Buffer2 = require$$0$2.Buffer;
      }
    } catch (e2) {
    }
    BN2.isBN = function isBN(num) {
      if (num instanceof BN2) {
        return true;
      }
      return num !== null && typeof num === "object" && num.constructor.wordSize === BN2.wordSize && Array.isArray(num.words);
    };
    BN2.max = function max(left, right) {
      if (left.cmp(right) > 0) return left;
      return right;
    };
    BN2.min = function min(left, right) {
      if (left.cmp(right) < 0) return left;
      return right;
    };
    BN2.prototype._init = function init3(number, base3, endian) {
      if (typeof number === "number") {
        return this._initNumber(number, base3, endian);
      }
      if (typeof number === "object") {
        return this._initArray(number, base3, endian);
      }
      if (base3 === "hex") {
        base3 = 16;
      }
      assert2(base3 === (base3 | 0) && base3 >= 2 && base3 <= 36);
      number = number.toString().replace(/\s+/g, "");
      var start = 0;
      if (number[0] === "-") {
        start++;
        this.negative = 1;
      }
      if (start < number.length) {
        if (base3 === 16) {
          this._parseHex(number, start, endian);
        } else {
          this._parseBase(number, base3, start);
          if (endian === "le") {
            this._initArray(this.toArray(), base3, endian);
          }
        }
      }
    };
    BN2.prototype._initNumber = function _initNumber(number, base3, endian) {
      if (number < 0) {
        this.negative = 1;
        number = -number;
      }
      if (number < 67108864) {
        this.words = [number & 67108863];
        this.length = 1;
      } else if (number < 4503599627370496) {
        this.words = [
          number & 67108863,
          number / 67108864 & 67108863
        ];
        this.length = 2;
      } else {
        assert2(number < 9007199254740992);
        this.words = [
          number & 67108863,
          number / 67108864 & 67108863,
          1
        ];
        this.length = 3;
      }
      if (endian !== "le") return;
      this._initArray(this.toArray(), base3, endian);
    };
    BN2.prototype._initArray = function _initArray(number, base3, endian) {
      assert2(typeof number.length === "number");
      if (number.length <= 0) {
        this.words = [0];
        this.length = 1;
        return this;
      }
      this.length = Math.ceil(number.length / 3);
      this.words = new Array(this.length);
      for (var i3 = 0; i3 < this.length; i3++) {
        this.words[i3] = 0;
      }
      var j2, w2;
      var off = 0;
      if (endian === "be") {
        for (i3 = number.length - 1, j2 = 0; i3 >= 0; i3 -= 3) {
          w2 = number[i3] | number[i3 - 1] << 8 | number[i3 - 2] << 16;
          this.words[j2] |= w2 << off & 67108863;
          this.words[j2 + 1] = w2 >>> 26 - off & 67108863;
          off += 24;
          if (off >= 26) {
            off -= 26;
            j2++;
          }
        }
      } else if (endian === "le") {
        for (i3 = 0, j2 = 0; i3 < number.length; i3 += 3) {
          w2 = number[i3] | number[i3 + 1] << 8 | number[i3 + 2] << 16;
          this.words[j2] |= w2 << off & 67108863;
          this.words[j2 + 1] = w2 >>> 26 - off & 67108863;
          off += 24;
          if (off >= 26) {
            off -= 26;
            j2++;
          }
        }
      }
      return this.strip();
    };
    function parseHex4Bits(string2, index) {
      var c2 = string2.charCodeAt(index);
      if (c2 >= 65 && c2 <= 70) {
        return c2 - 55;
      } else if (c2 >= 97 && c2 <= 102) {
        return c2 - 87;
      } else {
        return c2 - 48 & 15;
      }
    }
    function parseHexByte(string2, lowerBound, index) {
      var r2 = parseHex4Bits(string2, index);
      if (index - 1 >= lowerBound) {
        r2 |= parseHex4Bits(string2, index - 1) << 4;
      }
      return r2;
    }
    BN2.prototype._parseHex = function _parseHex(number, start, endian) {
      this.length = Math.ceil((number.length - start) / 6);
      this.words = new Array(this.length);
      for (var i3 = 0; i3 < this.length; i3++) {
        this.words[i3] = 0;
      }
      var off = 0;
      var j2 = 0;
      var w2;
      if (endian === "be") {
        for (i3 = number.length - 1; i3 >= start; i3 -= 2) {
          w2 = parseHexByte(number, start, i3) << off;
          this.words[j2] |= w2 & 67108863;
          if (off >= 18) {
            off -= 18;
            j2 += 1;
            this.words[j2] |= w2 >>> 26;
          } else {
            off += 8;
          }
        }
      } else {
        var parseLength = number.length - start;
        for (i3 = parseLength % 2 === 0 ? start + 1 : start; i3 < number.length; i3 += 2) {
          w2 = parseHexByte(number, start, i3) << off;
          this.words[j2] |= w2 & 67108863;
          if (off >= 18) {
            off -= 18;
            j2 += 1;
            this.words[j2] |= w2 >>> 26;
          } else {
            off += 8;
          }
        }
      }
      this.strip();
    };
    function parseBase(str, start, end, mul5) {
      var r2 = 0;
      var len = Math.min(str.length, end);
      for (var i3 = start; i3 < len; i3++) {
        var c2 = str.charCodeAt(i3) - 48;
        r2 *= mul5;
        if (c2 >= 49) {
          r2 += c2 - 49 + 10;
        } else if (c2 >= 17) {
          r2 += c2 - 17 + 10;
        } else {
          r2 += c2;
        }
      }
      return r2;
    }
    BN2.prototype._parseBase = function _parseBase(number, base3, start) {
      this.words = [0];
      this.length = 1;
      for (var limbLen = 0, limbPow = 1; limbPow <= 67108863; limbPow *= base3) {
        limbLen++;
      }
      limbLen--;
      limbPow = limbPow / base3 | 0;
      var total = number.length - start;
      var mod = total % limbLen;
      var end = Math.min(total, total - mod) + start;
      var word = 0;
      for (var i3 = start; i3 < end; i3 += limbLen) {
        word = parseBase(number, i3, i3 + limbLen, base3);
        this.imuln(limbPow);
        if (this.words[0] + word < 67108864) {
          this.words[0] += word;
        } else {
          this._iaddn(word);
        }
      }
      if (mod !== 0) {
        var pow = 1;
        word = parseBase(number, i3, number.length, base3);
        for (i3 = 0; i3 < mod; i3++) {
          pow *= base3;
        }
        this.imuln(pow);
        if (this.words[0] + word < 67108864) {
          this.words[0] += word;
        } else {
          this._iaddn(word);
        }
      }
      this.strip();
    };
    BN2.prototype.copy = function copy(dest) {
      dest.words = new Array(this.length);
      for (var i3 = 0; i3 < this.length; i3++) {
        dest.words[i3] = this.words[i3];
      }
      dest.length = this.length;
      dest.negative = this.negative;
      dest.red = this.red;
    };
    BN2.prototype.clone = function clone() {
      var r2 = new BN2(null);
      this.copy(r2);
      return r2;
    };
    BN2.prototype._expand = function _expand(size) {
      while (this.length < size) {
        this.words[this.length++] = 0;
      }
      return this;
    };
    BN2.prototype.strip = function strip() {
      while (this.length > 1 && this.words[this.length - 1] === 0) {
        this.length--;
      }
      return this._normSign();
    };
    BN2.prototype._normSign = function _normSign() {
      if (this.length === 1 && this.words[0] === 0) {
        this.negative = 0;
      }
      return this;
    };
    BN2.prototype.inspect = function inspect6() {
      return (this.red ? "<BN-R: " : "<BN: ") + this.toString(16) + ">";
    };
    var zeros = [
      "",
      "0",
      "00",
      "000",
      "0000",
      "00000",
      "000000",
      "0000000",
      "00000000",
      "000000000",
      "0000000000",
      "00000000000",
      "000000000000",
      "0000000000000",
      "00000000000000",
      "000000000000000",
      "0000000000000000",
      "00000000000000000",
      "000000000000000000",
      "0000000000000000000",
      "00000000000000000000",
      "000000000000000000000",
      "0000000000000000000000",
      "00000000000000000000000",
      "000000000000000000000000",
      "0000000000000000000000000"
    ];
    var groupSizes = [
      0,
      0,
      25,
      16,
      12,
      11,
      10,
      9,
      8,
      8,
      7,
      7,
      7,
      7,
      6,
      6,
      6,
      6,
      6,
      6,
      6,
      5,
      5,
      5,
      5,
      5,
      5,
      5,
      5,
      5,
      5,
      5,
      5,
      5,
      5,
      5,
      5
    ];
    var groupBases = [
      0,
      0,
      33554432,
      43046721,
      16777216,
      48828125,
      60466176,
      40353607,
      16777216,
      43046721,
      1e7,
      19487171,
      35831808,
      62748517,
      7529536,
      11390625,
      16777216,
      24137569,
      34012224,
      47045881,
      64e6,
      4084101,
      5153632,
      6436343,
      7962624,
      9765625,
      11881376,
      14348907,
      17210368,
      20511149,
      243e5,
      28629151,
      33554432,
      39135393,
      45435424,
      52521875,
      60466176
    ];
    BN2.prototype.toString = function toString2(base3, padding) {
      base3 = base3 || 10;
      padding = padding | 0 || 1;
      var out;
      if (base3 === 16 || base3 === "hex") {
        out = "";
        var off = 0;
        var carry = 0;
        for (var i3 = 0; i3 < this.length; i3++) {
          var w2 = this.words[i3];
          var word = ((w2 << off | carry) & 16777215).toString(16);
          carry = w2 >>> 24 - off & 16777215;
          off += 2;
          if (off >= 26) {
            off -= 26;
            i3--;
          }
          if (carry !== 0 || i3 !== this.length - 1) {
            out = zeros[6 - word.length] + word + out;
          } else {
            out = word + out;
          }
        }
        if (carry !== 0) {
          out = carry.toString(16) + out;
        }
        while (out.length % padding !== 0) {
          out = "0" + out;
        }
        if (this.negative !== 0) {
          out = "-" + out;
        }
        return out;
      }
      if (base3 === (base3 | 0) && base3 >= 2 && base3 <= 36) {
        var groupSize = groupSizes[base3];
        var groupBase = groupBases[base3];
        out = "";
        var c2 = this.clone();
        c2.negative = 0;
        while (!c2.isZero()) {
          var r2 = c2.modn(groupBase).toString(base3);
          c2 = c2.idivn(groupBase);
          if (!c2.isZero()) {
            out = zeros[groupSize - r2.length] + r2 + out;
          } else {
            out = r2 + out;
          }
        }
        if (this.isZero()) {
          out = "0" + out;
        }
        while (out.length % padding !== 0) {
          out = "0" + out;
        }
        if (this.negative !== 0) {
          out = "-" + out;
        }
        return out;
      }
      assert2(false, "Base should be between 2 and 36");
    };
    BN2.prototype.toNumber = function toNumber() {
      var ret = this.words[0];
      if (this.length === 2) {
        ret += this.words[1] * 67108864;
      } else if (this.length === 3 && this.words[2] === 1) {
        ret += 4503599627370496 + this.words[1] * 67108864;
      } else if (this.length > 2) {
        assert2(false, "Number can only safely store up to 53 bits");
      }
      return this.negative !== 0 ? -ret : ret;
    };
    BN2.prototype.toJSON = function toJSON2() {
      return this.toString(16);
    };
    BN2.prototype.toBuffer = function toBuffer(endian, length) {
      assert2(typeof Buffer2 !== "undefined");
      return this.toArrayLike(Buffer2, endian, length);
    };
    BN2.prototype.toArray = function toArray2(endian, length) {
      return this.toArrayLike(Array, endian, length);
    };
    BN2.prototype.toArrayLike = function toArrayLike(ArrayType, endian, length) {
      var byteLength = this.byteLength();
      var reqLength = length || Math.max(1, byteLength);
      assert2(byteLength <= reqLength, "byte array longer than desired length");
      assert2(reqLength > 0, "Requested array length <= 0");
      this.strip();
      var littleEndian = endian === "le";
      var res = new ArrayType(reqLength);
      var b2, i3;
      var q2 = this.clone();
      if (!littleEndian) {
        for (i3 = 0; i3 < reqLength - byteLength; i3++) {
          res[i3] = 0;
        }
        for (i3 = 0; !q2.isZero(); i3++) {
          b2 = q2.andln(255);
          q2.iushrn(8);
          res[reqLength - i3 - 1] = b2;
        }
      } else {
        for (i3 = 0; !q2.isZero(); i3++) {
          b2 = q2.andln(255);
          q2.iushrn(8);
          res[i3] = b2;
        }
        for (; i3 < reqLength; i3++) {
          res[i3] = 0;
        }
      }
      return res;
    };
    if (Math.clz32) {
      BN2.prototype._countBits = function _countBits(w2) {
        return 32 - Math.clz32(w2);
      };
    } else {
      BN2.prototype._countBits = function _countBits(w2) {
        var t = w2;
        var r2 = 0;
        if (t >= 4096) {
          r2 += 13;
          t >>>= 13;
        }
        if (t >= 64) {
          r2 += 7;
          t >>>= 7;
        }
        if (t >= 8) {
          r2 += 4;
          t >>>= 4;
        }
        if (t >= 2) {
          r2 += 2;
          t >>>= 2;
        }
        return r2 + t;
      };
    }
    BN2.prototype._zeroBits = function _zeroBits(w2) {
      if (w2 === 0) return 26;
      var t = w2;
      var r2 = 0;
      if ((t & 8191) === 0) {
        r2 += 13;
        t >>>= 13;
      }
      if ((t & 127) === 0) {
        r2 += 7;
        t >>>= 7;
      }
      if ((t & 15) === 0) {
        r2 += 4;
        t >>>= 4;
      }
      if ((t & 3) === 0) {
        r2 += 2;
        t >>>= 2;
      }
      if ((t & 1) === 0) {
        r2++;
      }
      return r2;
    };
    BN2.prototype.bitLength = function bitLength() {
      var w2 = this.words[this.length - 1];
      var hi2 = this._countBits(w2);
      return (this.length - 1) * 26 + hi2;
    };
    function toBitArray(num) {
      var w2 = new Array(num.bitLength());
      for (var bit = 0; bit < w2.length; bit++) {
        var off = bit / 26 | 0;
        var wbit = bit % 26;
        w2[bit] = (num.words[off] & 1 << wbit) >>> wbit;
      }
      return w2;
    }
    BN2.prototype.zeroBits = function zeroBits() {
      if (this.isZero()) return 0;
      var r2 = 0;
      for (var i3 = 0; i3 < this.length; i3++) {
        var b2 = this._zeroBits(this.words[i3]);
        r2 += b2;
        if (b2 !== 26) break;
      }
      return r2;
    };
    BN2.prototype.byteLength = function byteLength() {
      return Math.ceil(this.bitLength() / 8);
    };
    BN2.prototype.toTwos = function toTwos(width) {
      if (this.negative !== 0) {
        return this.abs().inotn(width).iaddn(1);
      }
      return this.clone();
    };
    BN2.prototype.fromTwos = function fromTwos(width) {
      if (this.testn(width - 1)) {
        return this.notn(width).iaddn(1).ineg();
      }
      return this.clone();
    };
    BN2.prototype.isNeg = function isNeg() {
      return this.negative !== 0;
    };
    BN2.prototype.neg = function neg4() {
      return this.clone().ineg();
    };
    BN2.prototype.ineg = function ineg() {
      if (!this.isZero()) {
        this.negative ^= 1;
      }
      return this;
    };
    BN2.prototype.iuor = function iuor(num) {
      while (this.length < num.length) {
        this.words[this.length++] = 0;
      }
      for (var i3 = 0; i3 < num.length; i3++) {
        this.words[i3] = this.words[i3] | num.words[i3];
      }
      return this.strip();
    };
    BN2.prototype.ior = function ior(num) {
      assert2((this.negative | num.negative) === 0);
      return this.iuor(num);
    };
    BN2.prototype.or = function or2(num) {
      if (this.length > num.length) return this.clone().ior(num);
      return num.clone().ior(this);
    };
    BN2.prototype.uor = function uor(num) {
      if (this.length > num.length) return this.clone().iuor(num);
      return num.clone().iuor(this);
    };
    BN2.prototype.iuand = function iuand(num) {
      var b2;
      if (this.length > num.length) {
        b2 = num;
      } else {
        b2 = this;
      }
      for (var i3 = 0; i3 < b2.length; i3++) {
        this.words[i3] = this.words[i3] & num.words[i3];
      }
      this.length = b2.length;
      return this.strip();
    };
    BN2.prototype.iand = function iand(num) {
      assert2((this.negative | num.negative) === 0);
      return this.iuand(num);
    };
    BN2.prototype.and = function and(num) {
      if (this.length > num.length) return this.clone().iand(num);
      return num.clone().iand(this);
    };
    BN2.prototype.uand = function uand(num) {
      if (this.length > num.length) return this.clone().iuand(num);
      return num.clone().iuand(this);
    };
    BN2.prototype.iuxor = function iuxor(num) {
      var a2;
      var b2;
      if (this.length > num.length) {
        a2 = this;
        b2 = num;
      } else {
        a2 = num;
        b2 = this;
      }
      for (var i3 = 0; i3 < b2.length; i3++) {
        this.words[i3] = a2.words[i3] ^ b2.words[i3];
      }
      if (this !== a2) {
        for (; i3 < a2.length; i3++) {
          this.words[i3] = a2.words[i3];
        }
      }
      this.length = a2.length;
      return this.strip();
    };
    BN2.prototype.ixor = function ixor(num) {
      assert2((this.negative | num.negative) === 0);
      return this.iuxor(num);
    };
    BN2.prototype.xor = function xor(num) {
      if (this.length > num.length) return this.clone().ixor(num);
      return num.clone().ixor(this);
    };
    BN2.prototype.uxor = function uxor(num) {
      if (this.length > num.length) return this.clone().iuxor(num);
      return num.clone().iuxor(this);
    };
    BN2.prototype.inotn = function inotn(width) {
      assert2(typeof width === "number" && width >= 0);
      var bytesNeeded = Math.ceil(width / 26) | 0;
      var bitsLeft = width % 26;
      this._expand(bytesNeeded);
      if (bitsLeft > 0) {
        bytesNeeded--;
      }
      for (var i3 = 0; i3 < bytesNeeded; i3++) {
        this.words[i3] = ~this.words[i3] & 67108863;
      }
      if (bitsLeft > 0) {
        this.words[i3] = ~this.words[i3] & 67108863 >> 26 - bitsLeft;
      }
      return this.strip();
    };
    BN2.prototype.notn = function notn(width) {
      return this.clone().inotn(width);
    };
    BN2.prototype.setn = function setn(bit, val) {
      assert2(typeof bit === "number" && bit >= 0);
      var off = bit / 26 | 0;
      var wbit = bit % 26;
      this._expand(off + 1);
      if (val) {
        this.words[off] = this.words[off] | 1 << wbit;
      } else {
        this.words[off] = this.words[off] & ~(1 << wbit);
      }
      return this.strip();
    };
    BN2.prototype.iadd = function iadd(num) {
      var r2;
      if (this.negative !== 0 && num.negative === 0) {
        this.negative = 0;
        r2 = this.isub(num);
        this.negative ^= 1;
        return this._normSign();
      } else if (this.negative === 0 && num.negative !== 0) {
        num.negative = 0;
        r2 = this.isub(num);
        num.negative = 1;
        return r2._normSign();
      }
      var a2, b2;
      if (this.length > num.length) {
        a2 = this;
        b2 = num;
      } else {
        a2 = num;
        b2 = this;
      }
      var carry = 0;
      for (var i3 = 0; i3 < b2.length; i3++) {
        r2 = (a2.words[i3] | 0) + (b2.words[i3] | 0) + carry;
        this.words[i3] = r2 & 67108863;
        carry = r2 >>> 26;
      }
      for (; carry !== 0 && i3 < a2.length; i3++) {
        r2 = (a2.words[i3] | 0) + carry;
        this.words[i3] = r2 & 67108863;
        carry = r2 >>> 26;
      }
      this.length = a2.length;
      if (carry !== 0) {
        this.words[this.length] = carry;
        this.length++;
      } else if (a2 !== this) {
        for (; i3 < a2.length; i3++) {
          this.words[i3] = a2.words[i3];
        }
      }
      return this;
    };
    BN2.prototype.add = function add5(num) {
      var res;
      if (num.negative !== 0 && this.negative === 0) {
        num.negative = 0;
        res = this.sub(num);
        num.negative ^= 1;
        return res;
      } else if (num.negative === 0 && this.negative !== 0) {
        this.negative = 0;
        res = num.sub(this);
        this.negative = 1;
        return res;
      }
      if (this.length > num.length) return this.clone().iadd(num);
      return num.clone().iadd(this);
    };
    BN2.prototype.isub = function isub(num) {
      if (num.negative !== 0) {
        num.negative = 0;
        var r2 = this.iadd(num);
        num.negative = 1;
        return r2._normSign();
      } else if (this.negative !== 0) {
        this.negative = 0;
        this.iadd(num);
        this.negative = 1;
        return this._normSign();
      }
      var cmp = this.cmp(num);
      if (cmp === 0) {
        this.negative = 0;
        this.length = 1;
        this.words[0] = 0;
        return this;
      }
      var a2, b2;
      if (cmp > 0) {
        a2 = this;
        b2 = num;
      } else {
        a2 = num;
        b2 = this;
      }
      var carry = 0;
      for (var i3 = 0; i3 < b2.length; i3++) {
        r2 = (a2.words[i3] | 0) - (b2.words[i3] | 0) + carry;
        carry = r2 >> 26;
        this.words[i3] = r2 & 67108863;
      }
      for (; carry !== 0 && i3 < a2.length; i3++) {
        r2 = (a2.words[i3] | 0) + carry;
        carry = r2 >> 26;
        this.words[i3] = r2 & 67108863;
      }
      if (carry === 0 && i3 < a2.length && a2 !== this) {
        for (; i3 < a2.length; i3++) {
          this.words[i3] = a2.words[i3];
        }
      }
      this.length = Math.max(this.length, i3);
      if (a2 !== this) {
        this.negative = 1;
      }
      return this.strip();
    };
    BN2.prototype.sub = function sub(num) {
      return this.clone().isub(num);
    };
    function smallMulTo(self2, num, out) {
      out.negative = num.negative ^ self2.negative;
      var len = self2.length + num.length | 0;
      out.length = len;
      len = len - 1 | 0;
      var a2 = self2.words[0] | 0;
      var b2 = num.words[0] | 0;
      var r2 = a2 * b2;
      var lo2 = r2 & 67108863;
      var carry = r2 / 67108864 | 0;
      out.words[0] = lo2;
      for (var k2 = 1; k2 < len; k2++) {
        var ncarry = carry >>> 26;
        var rword = carry & 67108863;
        var maxJ = Math.min(k2, num.length - 1);
        for (var j2 = Math.max(0, k2 - self2.length + 1); j2 <= maxJ; j2++) {
          var i3 = k2 - j2 | 0;
          a2 = self2.words[i3] | 0;
          b2 = num.words[j2] | 0;
          r2 = a2 * b2 + rword;
          ncarry += r2 / 67108864 | 0;
          rword = r2 & 67108863;
        }
        out.words[k2] = rword | 0;
        carry = ncarry | 0;
      }
      if (carry !== 0) {
        out.words[k2] = carry | 0;
      } else {
        out.length--;
      }
      return out.strip();
    }
    var comb10MulTo = function comb10MulTo2(self2, num, out) {
      var a2 = self2.words;
      var b2 = num.words;
      var o3 = out.words;
      var c2 = 0;
      var lo2;
      var mid;
      var hi2;
      var a0 = a2[0] | 0;
      var al0 = a0 & 8191;
      var ah0 = a0 >>> 13;
      var a1 = a2[1] | 0;
      var al1 = a1 & 8191;
      var ah1 = a1 >>> 13;
      var a22 = a2[2] | 0;
      var al2 = a22 & 8191;
      var ah2 = a22 >>> 13;
      var a3 = a2[3] | 0;
      var al3 = a3 & 8191;
      var ah3 = a3 >>> 13;
      var a4 = a2[4] | 0;
      var al4 = a4 & 8191;
      var ah4 = a4 >>> 13;
      var a5 = a2[5] | 0;
      var al5 = a5 & 8191;
      var ah5 = a5 >>> 13;
      var a6 = a2[6] | 0;
      var al6 = a6 & 8191;
      var ah6 = a6 >>> 13;
      var a7 = a2[7] | 0;
      var al7 = a7 & 8191;
      var ah7 = a7 >>> 13;
      var a8 = a2[8] | 0;
      var al8 = a8 & 8191;
      var ah8 = a8 >>> 13;
      var a9 = a2[9] | 0;
      var al9 = a9 & 8191;
      var ah9 = a9 >>> 13;
      var b0 = b2[0] | 0;
      var bl0 = b0 & 8191;
      var bh0 = b0 >>> 13;
      var b1 = b2[1] | 0;
      var bl1 = b1 & 8191;
      var bh1 = b1 >>> 13;
      var b22 = b2[2] | 0;
      var bl2 = b22 & 8191;
      var bh2 = b22 >>> 13;
      var b3 = b2[3] | 0;
      var bl3 = b3 & 8191;
      var bh3 = b3 >>> 13;
      var b4 = b2[4] | 0;
      var bl4 = b4 & 8191;
      var bh4 = b4 >>> 13;
      var b5 = b2[5] | 0;
      var bl5 = b5 & 8191;
      var bh5 = b5 >>> 13;
      var b6 = b2[6] | 0;
      var bl6 = b6 & 8191;
      var bh6 = b6 >>> 13;
      var b7 = b2[7] | 0;
      var bl7 = b7 & 8191;
      var bh7 = b7 >>> 13;
      var b8 = b2[8] | 0;
      var bl8 = b8 & 8191;
      var bh8 = b8 >>> 13;
      var b9 = b2[9] | 0;
      var bl9 = b9 & 8191;
      var bh9 = b9 >>> 13;
      out.negative = self2.negative ^ num.negative;
      out.length = 19;
      lo2 = Math.imul(al0, bl0);
      mid = Math.imul(al0, bh0);
      mid = mid + Math.imul(ah0, bl0) | 0;
      hi2 = Math.imul(ah0, bh0);
      var w0 = (c2 + lo2 | 0) + ((mid & 8191) << 13) | 0;
      c2 = (hi2 + (mid >>> 13) | 0) + (w0 >>> 26) | 0;
      w0 &= 67108863;
      lo2 = Math.imul(al1, bl0);
      mid = Math.imul(al1, bh0);
      mid = mid + Math.imul(ah1, bl0) | 0;
      hi2 = Math.imul(ah1, bh0);
      lo2 = lo2 + Math.imul(al0, bl1) | 0;
      mid = mid + Math.imul(al0, bh1) | 0;
      mid = mid + Math.imul(ah0, bl1) | 0;
      hi2 = hi2 + Math.imul(ah0, bh1) | 0;
      var w1 = (c2 + lo2 | 0) + ((mid & 8191) << 13) | 0;
      c2 = (hi2 + (mid >>> 13) | 0) + (w1 >>> 26) | 0;
      w1 &= 67108863;
      lo2 = Math.imul(al2, bl0);
      mid = Math.imul(al2, bh0);
      mid = mid + Math.imul(ah2, bl0) | 0;
      hi2 = Math.imul(ah2, bh0);
      lo2 = lo2 + Math.imul(al1, bl1) | 0;
      mid = mid + Math.imul(al1, bh1) | 0;
      mid = mid + Math.imul(ah1, bl1) | 0;
      hi2 = hi2 + Math.imul(ah1, bh1) | 0;
      lo2 = lo2 + Math.imul(al0, bl2) | 0;
      mid = mid + Math.imul(al0, bh2) | 0;
      mid = mid + Math.imul(ah0, bl2) | 0;
      hi2 = hi2 + Math.imul(ah0, bh2) | 0;
      var w2 = (c2 + lo2 | 0) + ((mid & 8191) << 13) | 0;
      c2 = (hi2 + (mid >>> 13) | 0) + (w2 >>> 26) | 0;
      w2 &= 67108863;
      lo2 = Math.imul(al3, bl0);
      mid = Math.imul(al3, bh0);
      mid = mid + Math.imul(ah3, bl0) | 0;
      hi2 = Math.imul(ah3, bh0);
      lo2 = lo2 + Math.imul(al2, bl1) | 0;
      mid = mid + Math.imul(al2, bh1) | 0;
      mid = mid + Math.imul(ah2, bl1) | 0;
      hi2 = hi2 + Math.imul(ah2, bh1) | 0;
      lo2 = lo2 + Math.imul(al1, bl2) | 0;
      mid = mid + Math.imul(al1, bh2) | 0;
      mid = mid + Math.imul(ah1, bl2) | 0;
      hi2 = hi2 + Math.imul(ah1, bh2) | 0;
      lo2 = lo2 + Math.imul(al0, bl3) | 0;
      mid = mid + Math.imul(al0, bh3) | 0;
      mid = mid + Math.imul(ah0, bl3) | 0;
      hi2 = hi2 + Math.imul(ah0, bh3) | 0;
      var w3 = (c2 + lo2 | 0) + ((mid & 8191) << 13) | 0;
      c2 = (hi2 + (mid >>> 13) | 0) + (w3 >>> 26) | 0;
      w3 &= 67108863;
      lo2 = Math.imul(al4, bl0);
      mid = Math.imul(al4, bh0);
      mid = mid + Math.imul(ah4, bl0) | 0;
      hi2 = Math.imul(ah4, bh0);
      lo2 = lo2 + Math.imul(al3, bl1) | 0;
      mid = mid + Math.imul(al3, bh1) | 0;
      mid = mid + Math.imul(ah3, bl1) | 0;
      hi2 = hi2 + Math.imul(ah3, bh1) | 0;
      lo2 = lo2 + Math.imul(al2, bl2) | 0;
      mid = mid + Math.imul(al2, bh2) | 0;
      mid = mid + Math.imul(ah2, bl2) | 0;
      hi2 = hi2 + Math.imul(ah2, bh2) | 0;
      lo2 = lo2 + Math.imul(al1, bl3) | 0;
      mid = mid + Math.imul(al1, bh3) | 0;
      mid = mid + Math.imul(ah1, bl3) | 0;
      hi2 = hi2 + Math.imul(ah1, bh3) | 0;
      lo2 = lo2 + Math.imul(al0, bl4) | 0;
      mid = mid + Math.imul(al0, bh4) | 0;
      mid = mid + Math.imul(ah0, bl4) | 0;
      hi2 = hi2 + Math.imul(ah0, bh4) | 0;
      var w4 = (c2 + lo2 | 0) + ((mid & 8191) << 13) | 0;
      c2 = (hi2 + (mid >>> 13) | 0) + (w4 >>> 26) | 0;
      w4 &= 67108863;
      lo2 = Math.imul(al5, bl0);
      mid = Math.imul(al5, bh0);
      mid = mid + Math.imul(ah5, bl0) | 0;
      hi2 = Math.imul(ah5, bh0);
      lo2 = lo2 + Math.imul(al4, bl1) | 0;
      mid = mid + Math.imul(al4, bh1) | 0;
      mid = mid + Math.imul(ah4, bl1) | 0;
      hi2 = hi2 + Math.imul(ah4, bh1) | 0;
      lo2 = lo2 + Math.imul(al3, bl2) | 0;
      mid = mid + Math.imul(al3, bh2) | 0;
      mid = mid + Math.imul(ah3, bl2) | 0;
      hi2 = hi2 + Math.imul(ah3, bh2) | 0;
      lo2 = lo2 + Math.imul(al2, bl3) | 0;
      mid = mid + Math.imul(al2, bh3) | 0;
      mid = mid + Math.imul(ah2, bl3) | 0;
      hi2 = hi2 + Math.imul(ah2, bh3) | 0;
      lo2 = lo2 + Math.imul(al1, bl4) | 0;
      mid = mid + Math.imul(al1, bh4) | 0;
      mid = mid + Math.imul(ah1, bl4) | 0;
      hi2 = hi2 + Math.imul(ah1, bh4) | 0;
      lo2 = lo2 + Math.imul(al0, bl5) | 0;
      mid = mid + Math.imul(al0, bh5) | 0;
      mid = mid + Math.imul(ah0, bl5) | 0;
      hi2 = hi2 + Math.imul(ah0, bh5) | 0;
      var w5 = (c2 + lo2 | 0) + ((mid & 8191) << 13) | 0;
      c2 = (hi2 + (mid >>> 13) | 0) + (w5 >>> 26) | 0;
      w5 &= 67108863;
      lo2 = Math.imul(al6, bl0);
      mid = Math.imul(al6, bh0);
      mid = mid + Math.imul(ah6, bl0) | 0;
      hi2 = Math.imul(ah6, bh0);
      lo2 = lo2 + Math.imul(al5, bl1) | 0;
      mid = mid + Math.imul(al5, bh1) | 0;
      mid = mid + Math.imul(ah5, bl1) | 0;
      hi2 = hi2 + Math.imul(ah5, bh1) | 0;
      lo2 = lo2 + Math.imul(al4, bl2) | 0;
      mid = mid + Math.imul(al4, bh2) | 0;
      mid = mid + Math.imul(ah4, bl2) | 0;
      hi2 = hi2 + Math.imul(ah4, bh2) | 0;
      lo2 = lo2 + Math.imul(al3, bl3) | 0;
      mid = mid + Math.imul(al3, bh3) | 0;
      mid = mid + Math.imul(ah3, bl3) | 0;
      hi2 = hi2 + Math.imul(ah3, bh3) | 0;
      lo2 = lo2 + Math.imul(al2, bl4) | 0;
      mid = mid + Math.imul(al2, bh4) | 0;
      mid = mid + Math.imul(ah2, bl4) | 0;
      hi2 = hi2 + Math.imul(ah2, bh4) | 0;
      lo2 = lo2 + Math.imul(al1, bl5) | 0;
      mid = mid + Math.imul(al1, bh5) | 0;
      mid = mid + Math.imul(ah1, bl5) | 0;
      hi2 = hi2 + Math.imul(ah1, bh5) | 0;
      lo2 = lo2 + Math.imul(al0, bl6) | 0;
      mid = mid + Math.imul(al0, bh6) | 0;
      mid = mid + Math.imul(ah0, bl6) | 0;
      hi2 = hi2 + Math.imul(ah0, bh6) | 0;
      var w6 = (c2 + lo2 | 0) + ((mid & 8191) << 13) | 0;
      c2 = (hi2 + (mid >>> 13) | 0) + (w6 >>> 26) | 0;
      w6 &= 67108863;
      lo2 = Math.imul(al7, bl0);
      mid = Math.imul(al7, bh0);
      mid = mid + Math.imul(ah7, bl0) | 0;
      hi2 = Math.imul(ah7, bh0);
      lo2 = lo2 + Math.imul(al6, bl1) | 0;
      mid = mid + Math.imul(al6, bh1) | 0;
      mid = mid + Math.imul(ah6, bl1) | 0;
      hi2 = hi2 + Math.imul(ah6, bh1) | 0;
      lo2 = lo2 + Math.imul(al5, bl2) | 0;
      mid = mid + Math.imul(al5, bh2) | 0;
      mid = mid + Math.imul(ah5, bl2) | 0;
      hi2 = hi2 + Math.imul(ah5, bh2) | 0;
      lo2 = lo2 + Math.imul(al4, bl3) | 0;
      mid = mid + Math.imul(al4, bh3) | 0;
      mid = mid + Math.imul(ah4, bl3) | 0;
      hi2 = hi2 + Math.imul(ah4, bh3) | 0;
      lo2 = lo2 + Math.imul(al3, bl4) | 0;
      mid = mid + Math.imul(al3, bh4) | 0;
      mid = mid + Math.imul(ah3, bl4) | 0;
      hi2 = hi2 + Math.imul(ah3, bh4) | 0;
      lo2 = lo2 + Math.imul(al2, bl5) | 0;
      mid = mid + Math.imul(al2, bh5) | 0;
      mid = mid + Math.imul(ah2, bl5) | 0;
      hi2 = hi2 + Math.imul(ah2, bh5) | 0;
      lo2 = lo2 + Math.imul(al1, bl6) | 0;
      mid = mid + Math.imul(al1, bh6) | 0;
      mid = mid + Math.imul(ah1, bl6) | 0;
      hi2 = hi2 + Math.imul(ah1, bh6) | 0;
      lo2 = lo2 + Math.imul(al0, bl7) | 0;
      mid = mid + Math.imul(al0, bh7) | 0;
      mid = mid + Math.imul(ah0, bl7) | 0;
      hi2 = hi2 + Math.imul(ah0, bh7) | 0;
      var w7 = (c2 + lo2 | 0) + ((mid & 8191) << 13) | 0;
      c2 = (hi2 + (mid >>> 13) | 0) + (w7 >>> 26) | 0;
      w7 &= 67108863;
      lo2 = Math.imul(al8, bl0);
      mid = Math.imul(al8, bh0);
      mid = mid + Math.imul(ah8, bl0) | 0;
      hi2 = Math.imul(ah8, bh0);
      lo2 = lo2 + Math.imul(al7, bl1) | 0;
      mid = mid + Math.imul(al7, bh1) | 0;
      mid = mid + Math.imul(ah7, bl1) | 0;
      hi2 = hi2 + Math.imul(ah7, bh1) | 0;
      lo2 = lo2 + Math.imul(al6, bl2) | 0;
      mid = mid + Math.imul(al6, bh2) | 0;
      mid = mid + Math.imul(ah6, bl2) | 0;
      hi2 = hi2 + Math.imul(ah6, bh2) | 0;
      lo2 = lo2 + Math.imul(al5, bl3) | 0;
      mid = mid + Math.imul(al5, bh3) | 0;
      mid = mid + Math.imul(ah5, bl3) | 0;
      hi2 = hi2 + Math.imul(ah5, bh3) | 0;
      lo2 = lo2 + Math.imul(al4, bl4) | 0;
      mid = mid + Math.imul(al4, bh4) | 0;
      mid = mid + Math.imul(ah4, bl4) | 0;
      hi2 = hi2 + Math.imul(ah4, bh4) | 0;
      lo2 = lo2 + Math.imul(al3, bl5) | 0;
      mid = mid + Math.imul(al3, bh5) | 0;
      mid = mid + Math.imul(ah3, bl5) | 0;
      hi2 = hi2 + Math.imul(ah3, bh5) | 0;
      lo2 = lo2 + Math.imul(al2, bl6) | 0;
      mid = mid + Math.imul(al2, bh6) | 0;
      mid = mid + Math.imul(ah2, bl6) | 0;
      hi2 = hi2 + Math.imul(ah2, bh6) | 0;
      lo2 = lo2 + Math.imul(al1, bl7) | 0;
      mid = mid + Math.imul(al1, bh7) | 0;
      mid = mid + Math.imul(ah1, bl7) | 0;
      hi2 = hi2 + Math.imul(ah1, bh7) | 0;
      lo2 = lo2 + Math.imul(al0, bl8) | 0;
      mid = mid + Math.imul(al0, bh8) | 0;
      mid = mid + Math.imul(ah0, bl8) | 0;
      hi2 = hi2 + Math.imul(ah0, bh8) | 0;
      var w8 = (c2 + lo2 | 0) + ((mid & 8191) << 13) | 0;
      c2 = (hi2 + (mid >>> 13) | 0) + (w8 >>> 26) | 0;
      w8 &= 67108863;
      lo2 = Math.imul(al9, bl0);
      mid = Math.imul(al9, bh0);
      mid = mid + Math.imul(ah9, bl0) | 0;
      hi2 = Math.imul(ah9, bh0);
      lo2 = lo2 + Math.imul(al8, bl1) | 0;
      mid = mid + Math.imul(al8, bh1) | 0;
      mid = mid + Math.imul(ah8, bl1) | 0;
      hi2 = hi2 + Math.imul(ah8, bh1) | 0;
      lo2 = lo2 + Math.imul(al7, bl2) | 0;
      mid = mid + Math.imul(al7, bh2) | 0;
      mid = mid + Math.imul(ah7, bl2) | 0;
      hi2 = hi2 + Math.imul(ah7, bh2) | 0;
      lo2 = lo2 + Math.imul(al6, bl3) | 0;
      mid = mid + Math.imul(al6, bh3) | 0;
      mid = mid + Math.imul(ah6, bl3) | 0;
      hi2 = hi2 + Math.imul(ah6, bh3) | 0;
      lo2 = lo2 + Math.imul(al5, bl4) | 0;
      mid = mid + Math.imul(al5, bh4) | 0;
      mid = mid + Math.imul(ah5, bl4) | 0;
      hi2 = hi2 + Math.imul(ah5, bh4) | 0;
      lo2 = lo2 + Math.imul(al4, bl5) | 0;
      mid = mid + Math.imul(al4, bh5) | 0;
      mid = mid + Math.imul(ah4, bl5) | 0;
      hi2 = hi2 + Math.imul(ah4, bh5) | 0;
      lo2 = lo2 + Math.imul(al3, bl6) | 0;
      mid = mid + Math.imul(al3, bh6) | 0;
      mid = mid + Math.imul(ah3, bl6) | 0;
      hi2 = hi2 + Math.imul(ah3, bh6) | 0;
      lo2 = lo2 + Math.imul(al2, bl7) | 0;
      mid = mid + Math.imul(al2, bh7) | 0;
      mid = mid + Math.imul(ah2, bl7) | 0;
      hi2 = hi2 + Math.imul(ah2, bh7) | 0;
      lo2 = lo2 + Math.imul(al1, bl8) | 0;
      mid = mid + Math.imul(al1, bh8) | 0;
      mid = mid + Math.imul(ah1, bl8) | 0;
      hi2 = hi2 + Math.imul(ah1, bh8) | 0;
      lo2 = lo2 + Math.imul(al0, bl9) | 0;
      mid = mid + Math.imul(al0, bh9) | 0;
      mid = mid + Math.imul(ah0, bl9) | 0;
      hi2 = hi2 + Math.imul(ah0, bh9) | 0;
      var w9 = (c2 + lo2 | 0) + ((mid & 8191) << 13) | 0;
      c2 = (hi2 + (mid >>> 13) | 0) + (w9 >>> 26) | 0;
      w9 &= 67108863;
      lo2 = Math.imul(al9, bl1);
      mid = Math.imul(al9, bh1);
      mid = mid + Math.imul(ah9, bl1) | 0;
      hi2 = Math.imul(ah9, bh1);
      lo2 = lo2 + Math.imul(al8, bl2) | 0;
      mid = mid + Math.imul(al8, bh2) | 0;
      mid = mid + Math.imul(ah8, bl2) | 0;
      hi2 = hi2 + Math.imul(ah8, bh2) | 0;
      lo2 = lo2 + Math.imul(al7, bl3) | 0;
      mid = mid + Math.imul(al7, bh3) | 0;
      mid = mid + Math.imul(ah7, bl3) | 0;
      hi2 = hi2 + Math.imul(ah7, bh3) | 0;
      lo2 = lo2 + Math.imul(al6, bl4) | 0;
      mid = mid + Math.imul(al6, bh4) | 0;
      mid = mid + Math.imul(ah6, bl4) | 0;
      hi2 = hi2 + Math.imul(ah6, bh4) | 0;
      lo2 = lo2 + Math.imul(al5, bl5) | 0;
      mid = mid + Math.imul(al5, bh5) | 0;
      mid = mid + Math.imul(ah5, bl5) | 0;
      hi2 = hi2 + Math.imul(ah5, bh5) | 0;
      lo2 = lo2 + Math.imul(al4, bl6) | 0;
      mid = mid + Math.imul(al4, bh6) | 0;
      mid = mid + Math.imul(ah4, bl6) | 0;
      hi2 = hi2 + Math.imul(ah4, bh6) | 0;
      lo2 = lo2 + Math.imul(al3, bl7) | 0;
      mid = mid + Math.imul(al3, bh7) | 0;
      mid = mid + Math.imul(ah3, bl7) | 0;
      hi2 = hi2 + Math.imul(ah3, bh7) | 0;
      lo2 = lo2 + Math.imul(al2, bl8) | 0;
      mid = mid + Math.imul(al2, bh8) | 0;
      mid = mid + Math.imul(ah2, bl8) | 0;
      hi2 = hi2 + Math.imul(ah2, bh8) | 0;
      lo2 = lo2 + Math.imul(al1, bl9) | 0;
      mid = mid + Math.imul(al1, bh9) | 0;
      mid = mid + Math.imul(ah1, bl9) | 0;
      hi2 = hi2 + Math.imul(ah1, bh9) | 0;
      var w10 = (c2 + lo2 | 0) + ((mid & 8191) << 13) | 0;
      c2 = (hi2 + (mid >>> 13) | 0) + (w10 >>> 26) | 0;
      w10 &= 67108863;
      lo2 = Math.imul(al9, bl2);
      mid = Math.imul(al9, bh2);
      mid = mid + Math.imul(ah9, bl2) | 0;
      hi2 = Math.imul(ah9, bh2);
      lo2 = lo2 + Math.imul(al8, bl3) | 0;
      mid = mid + Math.imul(al8, bh3) | 0;
      mid = mid + Math.imul(ah8, bl3) | 0;
      hi2 = hi2 + Math.imul(ah8, bh3) | 0;
      lo2 = lo2 + Math.imul(al7, bl4) | 0;
      mid = mid + Math.imul(al7, bh4) | 0;
      mid = mid + Math.imul(ah7, bl4) | 0;
      hi2 = hi2 + Math.imul(ah7, bh4) | 0;
      lo2 = lo2 + Math.imul(al6, bl5) | 0;
      mid = mid + Math.imul(al6, bh5) | 0;
      mid = mid + Math.imul(ah6, bl5) | 0;
      hi2 = hi2 + Math.imul(ah6, bh5) | 0;
      lo2 = lo2 + Math.imul(al5, bl6) | 0;
      mid = mid + Math.imul(al5, bh6) | 0;
      mid = mid + Math.imul(ah5, bl6) | 0;
      hi2 = hi2 + Math.imul(ah5, bh6) | 0;
      lo2 = lo2 + Math.imul(al4, bl7) | 0;
      mid = mid + Math.imul(al4, bh7) | 0;
      mid = mid + Math.imul(ah4, bl7) | 0;
      hi2 = hi2 + Math.imul(ah4, bh7) | 0;
      lo2 = lo2 + Math.imul(al3, bl8) | 0;
      mid = mid + Math.imul(al3, bh8) | 0;
      mid = mid + Math.imul(ah3, bl8) | 0;
      hi2 = hi2 + Math.imul(ah3, bh8) | 0;
      lo2 = lo2 + Math.imul(al2, bl9) | 0;
      mid = mid + Math.imul(al2, bh9) | 0;
      mid = mid + Math.imul(ah2, bl9) | 0;
      hi2 = hi2 + Math.imul(ah2, bh9) | 0;
      var w11 = (c2 + lo2 | 0) + ((mid & 8191) << 13) | 0;
      c2 = (hi2 + (mid >>> 13) | 0) + (w11 >>> 26) | 0;
      w11 &= 67108863;
      lo2 = Math.imul(al9, bl3);
      mid = Math.imul(al9, bh3);
      mid = mid + Math.imul(ah9, bl3) | 0;
      hi2 = Math.imul(ah9, bh3);
      lo2 = lo2 + Math.imul(al8, bl4) | 0;
      mid = mid + Math.imul(al8, bh4) | 0;
      mid = mid + Math.imul(ah8, bl4) | 0;
      hi2 = hi2 + Math.imul(ah8, bh4) | 0;
      lo2 = lo2 + Math.imul(al7, bl5) | 0;
      mid = mid + Math.imul(al7, bh5) | 0;
      mid = mid + Math.imul(ah7, bl5) | 0;
      hi2 = hi2 + Math.imul(ah7, bh5) | 0;
      lo2 = lo2 + Math.imul(al6, bl6) | 0;
      mid = mid + Math.imul(al6, bh6) | 0;
      mid = mid + Math.imul(ah6, bl6) | 0;
      hi2 = hi2 + Math.imul(ah6, bh6) | 0;
      lo2 = lo2 + Math.imul(al5, bl7) | 0;
      mid = mid + Math.imul(al5, bh7) | 0;
      mid = mid + Math.imul(ah5, bl7) | 0;
      hi2 = hi2 + Math.imul(ah5, bh7) | 0;
      lo2 = lo2 + Math.imul(al4, bl8) | 0;
      mid = mid + Math.imul(al4, bh8) | 0;
      mid = mid + Math.imul(ah4, bl8) | 0;
      hi2 = hi2 + Math.imul(ah4, bh8) | 0;
      lo2 = lo2 + Math.imul(al3, bl9) | 0;
      mid = mid + Math.imul(al3, bh9) | 0;
      mid = mid + Math.imul(ah3, bl9) | 0;
      hi2 = hi2 + Math.imul(ah3, bh9) | 0;
      var w12 = (c2 + lo2 | 0) + ((mid & 8191) << 13) | 0;
      c2 = (hi2 + (mid >>> 13) | 0) + (w12 >>> 26) | 0;
      w12 &= 67108863;
      lo2 = Math.imul(al9, bl4);
      mid = Math.imul(al9, bh4);
      mid = mid + Math.imul(ah9, bl4) | 0;
      hi2 = Math.imul(ah9, bh4);
      lo2 = lo2 + Math.imul(al8, bl5) | 0;
      mid = mid + Math.imul(al8, bh5) | 0;
      mid = mid + Math.imul(ah8, bl5) | 0;
      hi2 = hi2 + Math.imul(ah8, bh5) | 0;
      lo2 = lo2 + Math.imul(al7, bl6) | 0;
      mid = mid + Math.imul(al7, bh6) | 0;
      mid = mid + Math.imul(ah7, bl6) | 0;
      hi2 = hi2 + Math.imul(ah7, bh6) | 0;
      lo2 = lo2 + Math.imul(al6, bl7) | 0;
      mid = mid + Math.imul(al6, bh7) | 0;
      mid = mid + Math.imul(ah6, bl7) | 0;
      hi2 = hi2 + Math.imul(ah6, bh7) | 0;
      lo2 = lo2 + Math.imul(al5, bl8) | 0;
      mid = mid + Math.imul(al5, bh8) | 0;
      mid = mid + Math.imul(ah5, bl8) | 0;
      hi2 = hi2 + Math.imul(ah5, bh8) | 0;
      lo2 = lo2 + Math.imul(al4, bl9) | 0;
      mid = mid + Math.imul(al4, bh9) | 0;
      mid = mid + Math.imul(ah4, bl9) | 0;
      hi2 = hi2 + Math.imul(ah4, bh9) | 0;
      var w13 = (c2 + lo2 | 0) + ((mid & 8191) << 13) | 0;
      c2 = (hi2 + (mid >>> 13) | 0) + (w13 >>> 26) | 0;
      w13 &= 67108863;
      lo2 = Math.imul(al9, bl5);
      mid = Math.imul(al9, bh5);
      mid = mid + Math.imul(ah9, bl5) | 0;
      hi2 = Math.imul(ah9, bh5);
      lo2 = lo2 + Math.imul(al8, bl6) | 0;
      mid = mid + Math.imul(al8, bh6) | 0;
      mid = mid + Math.imul(ah8, bl6) | 0;
      hi2 = hi2 + Math.imul(ah8, bh6) | 0;
      lo2 = lo2 + Math.imul(al7, bl7) | 0;
      mid = mid + Math.imul(al7, bh7) | 0;
      mid = mid + Math.imul(ah7, bl7) | 0;
      hi2 = hi2 + Math.imul(ah7, bh7) | 0;
      lo2 = lo2 + Math.imul(al6, bl8) | 0;
      mid = mid + Math.imul(al6, bh8) | 0;
      mid = mid + Math.imul(ah6, bl8) | 0;
      hi2 = hi2 + Math.imul(ah6, bh8) | 0;
      lo2 = lo2 + Math.imul(al5, bl9) | 0;
      mid = mid + Math.imul(al5, bh9) | 0;
      mid = mid + Math.imul(ah5, bl9) | 0;
      hi2 = hi2 + Math.imul(ah5, bh9) | 0;
      var w14 = (c2 + lo2 | 0) + ((mid & 8191) << 13) | 0;
      c2 = (hi2 + (mid >>> 13) | 0) + (w14 >>> 26) | 0;
      w14 &= 67108863;
      lo2 = Math.imul(al9, bl6);
      mid = Math.imul(al9, bh6);
      mid = mid + Math.imul(ah9, bl6) | 0;
      hi2 = Math.imul(ah9, bh6);
      lo2 = lo2 + Math.imul(al8, bl7) | 0;
      mid = mid + Math.imul(al8, bh7) | 0;
      mid = mid + Math.imul(ah8, bl7) | 0;
      hi2 = hi2 + Math.imul(ah8, bh7) | 0;
      lo2 = lo2 + Math.imul(al7, bl8) | 0;
      mid = mid + Math.imul(al7, bh8) | 0;
      mid = mid + Math.imul(ah7, bl8) | 0;
      hi2 = hi2 + Math.imul(ah7, bh8) | 0;
      lo2 = lo2 + Math.imul(al6, bl9) | 0;
      mid = mid + Math.imul(al6, bh9) | 0;
      mid = mid + Math.imul(ah6, bl9) | 0;
      hi2 = hi2 + Math.imul(ah6, bh9) | 0;
      var w15 = (c2 + lo2 | 0) + ((mid & 8191) << 13) | 0;
      c2 = (hi2 + (mid >>> 13) | 0) + (w15 >>> 26) | 0;
      w15 &= 67108863;
      lo2 = Math.imul(al9, bl7);
      mid = Math.imul(al9, bh7);
      mid = mid + Math.imul(ah9, bl7) | 0;
      hi2 = Math.imul(ah9, bh7);
      lo2 = lo2 + Math.imul(al8, bl8) | 0;
      mid = mid + Math.imul(al8, bh8) | 0;
      mid = mid + Math.imul(ah8, bl8) | 0;
      hi2 = hi2 + Math.imul(ah8, bh8) | 0;
      lo2 = lo2 + Math.imul(al7, bl9) | 0;
      mid = mid + Math.imul(al7, bh9) | 0;
      mid = mid + Math.imul(ah7, bl9) | 0;
      hi2 = hi2 + Math.imul(ah7, bh9) | 0;
      var w16 = (c2 + lo2 | 0) + ((mid & 8191) << 13) | 0;
      c2 = (hi2 + (mid >>> 13) | 0) + (w16 >>> 26) | 0;
      w16 &= 67108863;
      lo2 = Math.imul(al9, bl8);
      mid = Math.imul(al9, bh8);
      mid = mid + Math.imul(ah9, bl8) | 0;
      hi2 = Math.imul(ah9, bh8);
      lo2 = lo2 + Math.imul(al8, bl9) | 0;
      mid = mid + Math.imul(al8, bh9) | 0;
      mid = mid + Math.imul(ah8, bl9) | 0;
      hi2 = hi2 + Math.imul(ah8, bh9) | 0;
      var w17 = (c2 + lo2 | 0) + ((mid & 8191) << 13) | 0;
      c2 = (hi2 + (mid >>> 13) | 0) + (w17 >>> 26) | 0;
      w17 &= 67108863;
      lo2 = Math.imul(al9, bl9);
      mid = Math.imul(al9, bh9);
      mid = mid + Math.imul(ah9, bl9) | 0;
      hi2 = Math.imul(ah9, bh9);
      var w18 = (c2 + lo2 | 0) + ((mid & 8191) << 13) | 0;
      c2 = (hi2 + (mid >>> 13) | 0) + (w18 >>> 26) | 0;
      w18 &= 67108863;
      o3[0] = w0;
      o3[1] = w1;
      o3[2] = w2;
      o3[3] = w3;
      o3[4] = w4;
      o3[5] = w5;
      o3[6] = w6;
      o3[7] = w7;
      o3[8] = w8;
      o3[9] = w9;
      o3[10] = w10;
      o3[11] = w11;
      o3[12] = w12;
      o3[13] = w13;
      o3[14] = w14;
      o3[15] = w15;
      o3[16] = w16;
      o3[17] = w17;
      o3[18] = w18;
      if (c2 !== 0) {
        o3[19] = c2;
        out.length++;
      }
      return out;
    };
    if (!Math.imul) {
      comb10MulTo = smallMulTo;
    }
    function bigMulTo(self2, num, out) {
      out.negative = num.negative ^ self2.negative;
      out.length = self2.length + num.length;
      var carry = 0;
      var hncarry = 0;
      for (var k2 = 0; k2 < out.length - 1; k2++) {
        var ncarry = hncarry;
        hncarry = 0;
        var rword = carry & 67108863;
        var maxJ = Math.min(k2, num.length - 1);
        for (var j2 = Math.max(0, k2 - self2.length + 1); j2 <= maxJ; j2++) {
          var i3 = k2 - j2;
          var a2 = self2.words[i3] | 0;
          var b2 = num.words[j2] | 0;
          var r2 = a2 * b2;
          var lo2 = r2 & 67108863;
          ncarry = ncarry + (r2 / 67108864 | 0) | 0;
          lo2 = lo2 + rword | 0;
          rword = lo2 & 67108863;
          ncarry = ncarry + (lo2 >>> 26) | 0;
          hncarry += ncarry >>> 26;
          ncarry &= 67108863;
        }
        out.words[k2] = rword;
        carry = ncarry;
        ncarry = hncarry;
      }
      if (carry !== 0) {
        out.words[k2] = carry;
      } else {
        out.length--;
      }
      return out.strip();
    }
    function jumboMulTo(self2, num, out) {
      var fftm = new FFTM();
      return fftm.mulp(self2, num, out);
    }
    BN2.prototype.mulTo = function mulTo(num, out) {
      var res;
      var len = this.length + num.length;
      if (this.length === 10 && num.length === 10) {
        res = comb10MulTo(this, num, out);
      } else if (len < 63) {
        res = smallMulTo(this, num, out);
      } else if (len < 1024) {
        res = bigMulTo(this, num, out);
      } else {
        res = jumboMulTo(this, num, out);
      }
      return res;
    };
    function FFTM(x2, y3) {
      this.x = x2;
      this.y = y3;
    }
    FFTM.prototype.makeRBT = function makeRBT(N2) {
      var t = new Array(N2);
      var l2 = BN2.prototype._countBits(N2) - 1;
      for (var i3 = 0; i3 < N2; i3++) {
        t[i3] = this.revBin(i3, l2, N2);
      }
      return t;
    };
    FFTM.prototype.revBin = function revBin(x2, l2, N2) {
      if (x2 === 0 || x2 === N2 - 1) return x2;
      var rb = 0;
      for (var i3 = 0; i3 < l2; i3++) {
        rb |= (x2 & 1) << l2 - i3 - 1;
        x2 >>= 1;
      }
      return rb;
    };
    FFTM.prototype.permute = function permute(rbt, rws, iws, rtws, itws, N2) {
      for (var i3 = 0; i3 < N2; i3++) {
        rtws[i3] = rws[rbt[i3]];
        itws[i3] = iws[rbt[i3]];
      }
    };
    FFTM.prototype.transform = function transform(rws, iws, rtws, itws, N2, rbt) {
      this.permute(rbt, rws, iws, rtws, itws, N2);
      for (var s2 = 1; s2 < N2; s2 <<= 1) {
        var l2 = s2 << 1;
        var rtwdf = Math.cos(2 * Math.PI / l2);
        var itwdf = Math.sin(2 * Math.PI / l2);
        for (var p2 = 0; p2 < N2; p2 += l2) {
          var rtwdf_ = rtwdf;
          var itwdf_ = itwdf;
          for (var j2 = 0; j2 < s2; j2++) {
            var re2 = rtws[p2 + j2];
            var ie2 = itws[p2 + j2];
            var ro2 = rtws[p2 + j2 + s2];
            var io2 = itws[p2 + j2 + s2];
            var rx = rtwdf_ * ro2 - itwdf_ * io2;
            io2 = rtwdf_ * io2 + itwdf_ * ro2;
            ro2 = rx;
            rtws[p2 + j2] = re2 + ro2;
            itws[p2 + j2] = ie2 + io2;
            rtws[p2 + j2 + s2] = re2 - ro2;
            itws[p2 + j2 + s2] = ie2 - io2;
            if (j2 !== l2) {
              rx = rtwdf * rtwdf_ - itwdf * itwdf_;
              itwdf_ = rtwdf * itwdf_ + itwdf * rtwdf_;
              rtwdf_ = rx;
            }
          }
        }
      }
    };
    FFTM.prototype.guessLen13b = function guessLen13b(n3, m4) {
      var N2 = Math.max(m4, n3) | 1;
      var odd = N2 & 1;
      var i3 = 0;
      for (N2 = N2 / 2 | 0; N2; N2 = N2 >>> 1) {
        i3++;
      }
      return 1 << i3 + 1 + odd;
    };
    FFTM.prototype.conjugate = function conjugate(rws, iws, N2) {
      if (N2 <= 1) return;
      for (var i3 = 0; i3 < N2 / 2; i3++) {
        var t = rws[i3];
        rws[i3] = rws[N2 - i3 - 1];
        rws[N2 - i3 - 1] = t;
        t = iws[i3];
        iws[i3] = -iws[N2 - i3 - 1];
        iws[N2 - i3 - 1] = -t;
      }
    };
    FFTM.prototype.normalize13b = function normalize13b(ws2, N2) {
      var carry = 0;
      for (var i3 = 0; i3 < N2 / 2; i3++) {
        var w2 = Math.round(ws2[2 * i3 + 1] / N2) * 8192 + Math.round(ws2[2 * i3] / N2) + carry;
        ws2[i3] = w2 & 67108863;
        if (w2 < 67108864) {
          carry = 0;
        } else {
          carry = w2 / 67108864 | 0;
        }
      }
      return ws2;
    };
    FFTM.prototype.convert13b = function convert13b(ws2, len, rws, N2) {
      var carry = 0;
      for (var i3 = 0; i3 < len; i3++) {
        carry = carry + (ws2[i3] | 0);
        rws[2 * i3] = carry & 8191;
        carry = carry >>> 13;
        rws[2 * i3 + 1] = carry & 8191;
        carry = carry >>> 13;
      }
      for (i3 = 2 * len; i3 < N2; ++i3) {
        rws[i3] = 0;
      }
      assert2(carry === 0);
      assert2((carry & -8192) === 0);
    };
    FFTM.prototype.stub = function stub(N2) {
      var ph = new Array(N2);
      for (var i3 = 0; i3 < N2; i3++) {
        ph[i3] = 0;
      }
      return ph;
    };
    FFTM.prototype.mulp = function mulp(x2, y3, out) {
      var N2 = 2 * this.guessLen13b(x2.length, y3.length);
      var rbt = this.makeRBT(N2);
      var _3 = this.stub(N2);
      var rws = new Array(N2);
      var rwst = new Array(N2);
      var iwst = new Array(N2);
      var nrws = new Array(N2);
      var nrwst = new Array(N2);
      var niwst = new Array(N2);
      var rmws = out.words;
      rmws.length = N2;
      this.convert13b(x2.words, x2.length, rws, N2);
      this.convert13b(y3.words, y3.length, nrws, N2);
      this.transform(rws, _3, rwst, iwst, N2, rbt);
      this.transform(nrws, _3, nrwst, niwst, N2, rbt);
      for (var i3 = 0; i3 < N2; i3++) {
        var rx = rwst[i3] * nrwst[i3] - iwst[i3] * niwst[i3];
        iwst[i3] = rwst[i3] * niwst[i3] + iwst[i3] * nrwst[i3];
        rwst[i3] = rx;
      }
      this.conjugate(rwst, iwst, N2);
      this.transform(rwst, iwst, rmws, _3, N2, rbt);
      this.conjugate(rmws, _3, N2);
      this.normalize13b(rmws, N2);
      out.negative = x2.negative ^ y3.negative;
      out.length = x2.length + y3.length;
      return out.strip();
    };
    BN2.prototype.mul = function mul5(num) {
      var out = new BN2(null);
      out.words = new Array(this.length + num.length);
      return this.mulTo(num, out);
    };
    BN2.prototype.mulf = function mulf(num) {
      var out = new BN2(null);
      out.words = new Array(this.length + num.length);
      return jumboMulTo(this, num, out);
    };
    BN2.prototype.imul = function imul(num) {
      return this.clone().mulTo(num, this);
    };
    BN2.prototype.imuln = function imuln(num) {
      assert2(typeof num === "number");
      assert2(num < 67108864);
      var carry = 0;
      for (var i3 = 0; i3 < this.length; i3++) {
        var w2 = (this.words[i3] | 0) * num;
        var lo2 = (w2 & 67108863) + (carry & 67108863);
        carry >>= 26;
        carry += w2 / 67108864 | 0;
        carry += lo2 >>> 26;
        this.words[i3] = lo2 & 67108863;
      }
      if (carry !== 0) {
        this.words[i3] = carry;
        this.length++;
      }
      return this;
    };
    BN2.prototype.muln = function muln(num) {
      return this.clone().imuln(num);
    };
    BN2.prototype.sqr = function sqr() {
      return this.mul(this);
    };
    BN2.prototype.isqr = function isqr() {
      return this.imul(this.clone());
    };
    BN2.prototype.pow = function pow(num) {
      var w2 = toBitArray(num);
      if (w2.length === 0) return new BN2(1);
      var res = this;
      for (var i3 = 0; i3 < w2.length; i3++, res = res.sqr()) {
        if (w2[i3] !== 0) break;
      }
      if (++i3 < w2.length) {
        for (var q2 = res.sqr(); i3 < w2.length; i3++, q2 = q2.sqr()) {
          if (w2[i3] === 0) continue;
          res = res.mul(q2);
        }
      }
      return res;
    };
    BN2.prototype.iushln = function iushln(bits) {
      assert2(typeof bits === "number" && bits >= 0);
      var r2 = bits % 26;
      var s2 = (bits - r2) / 26;
      var carryMask = 67108863 >>> 26 - r2 << 26 - r2;
      var i3;
      if (r2 !== 0) {
        var carry = 0;
        for (i3 = 0; i3 < this.length; i3++) {
          var newCarry = this.words[i3] & carryMask;
          var c2 = (this.words[i3] | 0) - newCarry << r2;
          this.words[i3] = c2 | carry;
          carry = newCarry >>> 26 - r2;
        }
        if (carry) {
          this.words[i3] = carry;
          this.length++;
        }
      }
      if (s2 !== 0) {
        for (i3 = this.length - 1; i3 >= 0; i3--) {
          this.words[i3 + s2] = this.words[i3];
        }
        for (i3 = 0; i3 < s2; i3++) {
          this.words[i3] = 0;
        }
        this.length += s2;
      }
      return this.strip();
    };
    BN2.prototype.ishln = function ishln(bits) {
      assert2(this.negative === 0);
      return this.iushln(bits);
    };
    BN2.prototype.iushrn = function iushrn(bits, hint, extended) {
      assert2(typeof bits === "number" && bits >= 0);
      var h4;
      if (hint) {
        h4 = (hint - hint % 26) / 26;
      } else {
        h4 = 0;
      }
      var r2 = bits % 26;
      var s2 = Math.min((bits - r2) / 26, this.length);
      var mask = 67108863 ^ 67108863 >>> r2 << r2;
      var maskedWords = extended;
      h4 -= s2;
      h4 = Math.max(0, h4);
      if (maskedWords) {
        for (var i3 = 0; i3 < s2; i3++) {
          maskedWords.words[i3] = this.words[i3];
        }
        maskedWords.length = s2;
      }
      if (s2 === 0) ;
      else if (this.length > s2) {
        this.length -= s2;
        for (i3 = 0; i3 < this.length; i3++) {
          this.words[i3] = this.words[i3 + s2];
        }
      } else {
        this.words[0] = 0;
        this.length = 1;
      }
      var carry = 0;
      for (i3 = this.length - 1; i3 >= 0 && (carry !== 0 || i3 >= h4); i3--) {
        var word = this.words[i3] | 0;
        this.words[i3] = carry << 26 - r2 | word >>> r2;
        carry = word & mask;
      }
      if (maskedWords && carry !== 0) {
        maskedWords.words[maskedWords.length++] = carry;
      }
      if (this.length === 0) {
        this.words[0] = 0;
        this.length = 1;
      }
      return this.strip();
    };
    BN2.prototype.ishrn = function ishrn(bits, hint, extended) {
      assert2(this.negative === 0);
      return this.iushrn(bits, hint, extended);
    };
    BN2.prototype.shln = function shln(bits) {
      return this.clone().ishln(bits);
    };
    BN2.prototype.ushln = function ushln(bits) {
      return this.clone().iushln(bits);
    };
    BN2.prototype.shrn = function shrn(bits) {
      return this.clone().ishrn(bits);
    };
    BN2.prototype.ushrn = function ushrn(bits) {
      return this.clone().iushrn(bits);
    };
    BN2.prototype.testn = function testn(bit) {
      assert2(typeof bit === "number" && bit >= 0);
      var r2 = bit % 26;
      var s2 = (bit - r2) / 26;
      var q2 = 1 << r2;
      if (this.length <= s2) return false;
      var w2 = this.words[s2];
      return !!(w2 & q2);
    };
    BN2.prototype.imaskn = function imaskn(bits) {
      assert2(typeof bits === "number" && bits >= 0);
      var r2 = bits % 26;
      var s2 = (bits - r2) / 26;
      assert2(this.negative === 0, "imaskn works only with positive numbers");
      if (this.length <= s2) {
        return this;
      }
      if (r2 !== 0) {
        s2++;
      }
      this.length = Math.min(s2, this.length);
      if (r2 !== 0) {
        var mask = 67108863 ^ 67108863 >>> r2 << r2;
        this.words[this.length - 1] &= mask;
      }
      return this.strip();
    };
    BN2.prototype.maskn = function maskn(bits) {
      return this.clone().imaskn(bits);
    };
    BN2.prototype.iaddn = function iaddn(num) {
      assert2(typeof num === "number");
      assert2(num < 67108864);
      if (num < 0) return this.isubn(-num);
      if (this.negative !== 0) {
        if (this.length === 1 && (this.words[0] | 0) < num) {
          this.words[0] = num - (this.words[0] | 0);
          this.negative = 0;
          return this;
        }
        this.negative = 0;
        this.isubn(num);
        this.negative = 1;
        return this;
      }
      return this._iaddn(num);
    };
    BN2.prototype._iaddn = function _iaddn(num) {
      this.words[0] += num;
      for (var i3 = 0; i3 < this.length && this.words[i3] >= 67108864; i3++) {
        this.words[i3] -= 67108864;
        if (i3 === this.length - 1) {
          this.words[i3 + 1] = 1;
        } else {
          this.words[i3 + 1]++;
        }
      }
      this.length = Math.max(this.length, i3 + 1);
      return this;
    };
    BN2.prototype.isubn = function isubn(num) {
      assert2(typeof num === "number");
      assert2(num < 67108864);
      if (num < 0) return this.iaddn(-num);
      if (this.negative !== 0) {
        this.negative = 0;
        this.iaddn(num);
        this.negative = 1;
        return this;
      }
      this.words[0] -= num;
      if (this.length === 1 && this.words[0] < 0) {
        this.words[0] = -this.words[0];
        this.negative = 1;
      } else {
        for (var i3 = 0; i3 < this.length && this.words[i3] < 0; i3++) {
          this.words[i3] += 67108864;
          this.words[i3 + 1] -= 1;
        }
      }
      return this.strip();
    };
    BN2.prototype.addn = function addn(num) {
      return this.clone().iaddn(num);
    };
    BN2.prototype.subn = function subn(num) {
      return this.clone().isubn(num);
    };
    BN2.prototype.iabs = function iabs() {
      this.negative = 0;
      return this;
    };
    BN2.prototype.abs = function abs() {
      return this.clone().iabs();
    };
    BN2.prototype._ishlnsubmul = function _ishlnsubmul(num, mul5, shift) {
      var len = num.length + shift;
      var i3;
      this._expand(len);
      var w2;
      var carry = 0;
      for (i3 = 0; i3 < num.length; i3++) {
        w2 = (this.words[i3 + shift] | 0) + carry;
        var right = (num.words[i3] | 0) * mul5;
        w2 -= right & 67108863;
        carry = (w2 >> 26) - (right / 67108864 | 0);
        this.words[i3 + shift] = w2 & 67108863;
      }
      for (; i3 < this.length - shift; i3++) {
        w2 = (this.words[i3 + shift] | 0) + carry;
        carry = w2 >> 26;
        this.words[i3 + shift] = w2 & 67108863;
      }
      if (carry === 0) return this.strip();
      assert2(carry === -1);
      carry = 0;
      for (i3 = 0; i3 < this.length; i3++) {
        w2 = -(this.words[i3] | 0) + carry;
        carry = w2 >> 26;
        this.words[i3] = w2 & 67108863;
      }
      this.negative = 1;
      return this.strip();
    };
    BN2.prototype._wordDiv = function _wordDiv(num, mode) {
      var shift = this.length - num.length;
      var a2 = this.clone();
      var b2 = num;
      var bhi = b2.words[b2.length - 1] | 0;
      var bhiBits = this._countBits(bhi);
      shift = 26 - bhiBits;
      if (shift !== 0) {
        b2 = b2.ushln(shift);
        a2.iushln(shift);
        bhi = b2.words[b2.length - 1] | 0;
      }
      var m4 = a2.length - b2.length;
      var q2;
      if (mode !== "mod") {
        q2 = new BN2(null);
        q2.length = m4 + 1;
        q2.words = new Array(q2.length);
        for (var i3 = 0; i3 < q2.length; i3++) {
          q2.words[i3] = 0;
        }
      }
      var diff = a2.clone()._ishlnsubmul(b2, 1, m4);
      if (diff.negative === 0) {
        a2 = diff;
        if (q2) {
          q2.words[m4] = 1;
        }
      }
      for (var j2 = m4 - 1; j2 >= 0; j2--) {
        var qj = (a2.words[b2.length + j2] | 0) * 67108864 + (a2.words[b2.length + j2 - 1] | 0);
        qj = Math.min(qj / bhi | 0, 67108863);
        a2._ishlnsubmul(b2, qj, j2);
        while (a2.negative !== 0) {
          qj--;
          a2.negative = 0;
          a2._ishlnsubmul(b2, 1, j2);
          if (!a2.isZero()) {
            a2.negative ^= 1;
          }
        }
        if (q2) {
          q2.words[j2] = qj;
        }
      }
      if (q2) {
        q2.strip();
      }
      a2.strip();
      if (mode !== "div" && shift !== 0) {
        a2.iushrn(shift);
      }
      return {
        div: q2 || null,
        mod: a2
      };
    };
    BN2.prototype.divmod = function divmod(num, mode, positive) {
      assert2(!num.isZero());
      if (this.isZero()) {
        return {
          div: new BN2(0),
          mod: new BN2(0)
        };
      }
      var div, mod, res;
      if (this.negative !== 0 && num.negative === 0) {
        res = this.neg().divmod(num, mode);
        if (mode !== "mod") {
          div = res.div.neg();
        }
        if (mode !== "div") {
          mod = res.mod.neg();
          if (positive && mod.negative !== 0) {
            mod.iadd(num);
          }
        }
        return {
          div,
          mod
        };
      }
      if (this.negative === 0 && num.negative !== 0) {
        res = this.divmod(num.neg(), mode);
        if (mode !== "mod") {
          div = res.div.neg();
        }
        return {
          div,
          mod: res.mod
        };
      }
      if ((this.negative & num.negative) !== 0) {
        res = this.neg().divmod(num.neg(), mode);
        if (mode !== "div") {
          mod = res.mod.neg();
          if (positive && mod.negative !== 0) {
            mod.isub(num);
          }
        }
        return {
          div: res.div,
          mod
        };
      }
      if (num.length > this.length || this.cmp(num) < 0) {
        return {
          div: new BN2(0),
          mod: this
        };
      }
      if (num.length === 1) {
        if (mode === "div") {
          return {
            div: this.divn(num.words[0]),
            mod: null
          };
        }
        if (mode === "mod") {
          return {
            div: null,
            mod: new BN2(this.modn(num.words[0]))
          };
        }
        return {
          div: this.divn(num.words[0]),
          mod: new BN2(this.modn(num.words[0]))
        };
      }
      return this._wordDiv(num, mode);
    };
    BN2.prototype.div = function div(num) {
      return this.divmod(num, "div", false).div;
    };
    BN2.prototype.mod = function mod(num) {
      return this.divmod(num, "mod", false).mod;
    };
    BN2.prototype.umod = function umod(num) {
      return this.divmod(num, "mod", true).mod;
    };
    BN2.prototype.divRound = function divRound(num) {
      var dm = this.divmod(num);
      if (dm.mod.isZero()) return dm.div;
      var mod = dm.div.negative !== 0 ? dm.mod.isub(num) : dm.mod;
      var half = num.ushrn(1);
      var r2 = num.andln(1);
      var cmp = mod.cmp(half);
      if (cmp < 0 || r2 === 1 && cmp === 0) return dm.div;
      return dm.div.negative !== 0 ? dm.div.isubn(1) : dm.div.iaddn(1);
    };
    BN2.prototype.modn = function modn(num) {
      assert2(num <= 67108863);
      var p2 = (1 << 26) % num;
      var acc = 0;
      for (var i3 = this.length - 1; i3 >= 0; i3--) {
        acc = (p2 * acc + (this.words[i3] | 0)) % num;
      }
      return acc;
    };
    BN2.prototype.idivn = function idivn(num) {
      assert2(num <= 67108863);
      var carry = 0;
      for (var i3 = this.length - 1; i3 >= 0; i3--) {
        var w2 = (this.words[i3] | 0) + carry * 67108864;
        this.words[i3] = w2 / num | 0;
        carry = w2 % num;
      }
      return this.strip();
    };
    BN2.prototype.divn = function divn(num) {
      return this.clone().idivn(num);
    };
    BN2.prototype.egcd = function egcd(p2) {
      assert2(p2.negative === 0);
      assert2(!p2.isZero());
      var x2 = this;
      var y3 = p2.clone();
      if (x2.negative !== 0) {
        x2 = x2.umod(p2);
      } else {
        x2 = x2.clone();
      }
      var A2 = new BN2(1);
      var B3 = new BN2(0);
      var C2 = new BN2(0);
      var D2 = new BN2(1);
      var g2 = 0;
      while (x2.isEven() && y3.isEven()) {
        x2.iushrn(1);
        y3.iushrn(1);
        ++g2;
      }
      var yp = y3.clone();
      var xp = x2.clone();
      while (!x2.isZero()) {
        for (var i3 = 0, im = 1; (x2.words[0] & im) === 0 && i3 < 26; ++i3, im <<= 1) ;
        if (i3 > 0) {
          x2.iushrn(i3);
          while (i3-- > 0) {
            if (A2.isOdd() || B3.isOdd()) {
              A2.iadd(yp);
              B3.isub(xp);
            }
            A2.iushrn(1);
            B3.iushrn(1);
          }
        }
        for (var j2 = 0, jm = 1; (y3.words[0] & jm) === 0 && j2 < 26; ++j2, jm <<= 1) ;
        if (j2 > 0) {
          y3.iushrn(j2);
          while (j2-- > 0) {
            if (C2.isOdd() || D2.isOdd()) {
              C2.iadd(yp);
              D2.isub(xp);
            }
            C2.iushrn(1);
            D2.iushrn(1);
          }
        }
        if (x2.cmp(y3) >= 0) {
          x2.isub(y3);
          A2.isub(C2);
          B3.isub(D2);
        } else {
          y3.isub(x2);
          C2.isub(A2);
          D2.isub(B3);
        }
      }
      return {
        a: C2,
        b: D2,
        gcd: y3.iushln(g2)
      };
    };
    BN2.prototype._invmp = function _invmp(p2) {
      assert2(p2.negative === 0);
      assert2(!p2.isZero());
      var a2 = this;
      var b2 = p2.clone();
      if (a2.negative !== 0) {
        a2 = a2.umod(p2);
      } else {
        a2 = a2.clone();
      }
      var x1 = new BN2(1);
      var x2 = new BN2(0);
      var delta = b2.clone();
      while (a2.cmpn(1) > 0 && b2.cmpn(1) > 0) {
        for (var i3 = 0, im = 1; (a2.words[0] & im) === 0 && i3 < 26; ++i3, im <<= 1) ;
        if (i3 > 0) {
          a2.iushrn(i3);
          while (i3-- > 0) {
            if (x1.isOdd()) {
              x1.iadd(delta);
            }
            x1.iushrn(1);
          }
        }
        for (var j2 = 0, jm = 1; (b2.words[0] & jm) === 0 && j2 < 26; ++j2, jm <<= 1) ;
        if (j2 > 0) {
          b2.iushrn(j2);
          while (j2-- > 0) {
            if (x2.isOdd()) {
              x2.iadd(delta);
            }
            x2.iushrn(1);
          }
        }
        if (a2.cmp(b2) >= 0) {
          a2.isub(b2);
          x1.isub(x2);
        } else {
          b2.isub(a2);
          x2.isub(x1);
        }
      }
      var res;
      if (a2.cmpn(1) === 0) {
        res = x1;
      } else {
        res = x2;
      }
      if (res.cmpn(0) < 0) {
        res.iadd(p2);
      }
      return res;
    };
    BN2.prototype.gcd = function gcd(num) {
      if (this.isZero()) return num.abs();
      if (num.isZero()) return this.abs();
      var a2 = this.clone();
      var b2 = num.clone();
      a2.negative = 0;
      b2.negative = 0;
      for (var shift = 0; a2.isEven() && b2.isEven(); shift++) {
        a2.iushrn(1);
        b2.iushrn(1);
      }
      do {
        while (a2.isEven()) {
          a2.iushrn(1);
        }
        while (b2.isEven()) {
          b2.iushrn(1);
        }
        var r2 = a2.cmp(b2);
        if (r2 < 0) {
          var t = a2;
          a2 = b2;
          b2 = t;
        } else if (r2 === 0 || b2.cmpn(1) === 0) {
          break;
        }
        a2.isub(b2);
      } while (true);
      return b2.iushln(shift);
    };
    BN2.prototype.invm = function invm(num) {
      return this.egcd(num).a.umod(num);
    };
    BN2.prototype.isEven = function isEven() {
      return (this.words[0] & 1) === 0;
    };
    BN2.prototype.isOdd = function isOdd() {
      return (this.words[0] & 1) === 1;
    };
    BN2.prototype.andln = function andln(num) {
      return this.words[0] & num;
    };
    BN2.prototype.bincn = function bincn(bit) {
      assert2(typeof bit === "number");
      var r2 = bit % 26;
      var s2 = (bit - r2) / 26;
      var q2 = 1 << r2;
      if (this.length <= s2) {
        this._expand(s2 + 1);
        this.words[s2] |= q2;
        return this;
      }
      var carry = q2;
      for (var i3 = s2; carry !== 0 && i3 < this.length; i3++) {
        var w2 = this.words[i3] | 0;
        w2 += carry;
        carry = w2 >>> 26;
        w2 &= 67108863;
        this.words[i3] = w2;
      }
      if (carry !== 0) {
        this.words[i3] = carry;
        this.length++;
      }
      return this;
    };
    BN2.prototype.isZero = function isZero() {
      return this.length === 1 && this.words[0] === 0;
    };
    BN2.prototype.cmpn = function cmpn(num) {
      var negative = num < 0;
      if (this.negative !== 0 && !negative) return -1;
      if (this.negative === 0 && negative) return 1;
      this.strip();
      var res;
      if (this.length > 1) {
        res = 1;
      } else {
        if (negative) {
          num = -num;
        }
        assert2(num <= 67108863, "Number is too big");
        var w2 = this.words[0] | 0;
        res = w2 === num ? 0 : w2 < num ? -1 : 1;
      }
      if (this.negative !== 0) return -res | 0;
      return res;
    };
    BN2.prototype.cmp = function cmp(num) {
      if (this.negative !== 0 && num.negative === 0) return -1;
      if (this.negative === 0 && num.negative !== 0) return 1;
      var res = this.ucmp(num);
      if (this.negative !== 0) return -res | 0;
      return res;
    };
    BN2.prototype.ucmp = function ucmp(num) {
      if (this.length > num.length) return 1;
      if (this.length < num.length) return -1;
      var res = 0;
      for (var i3 = this.length - 1; i3 >= 0; i3--) {
        var a2 = this.words[i3] | 0;
        var b2 = num.words[i3] | 0;
        if (a2 === b2) continue;
        if (a2 < b2) {
          res = -1;
        } else if (a2 > b2) {
          res = 1;
        }
        break;
      }
      return res;
    };
    BN2.prototype.gtn = function gtn(num) {
      return this.cmpn(num) === 1;
    };
    BN2.prototype.gt = function gt2(num) {
      return this.cmp(num) === 1;
    };
    BN2.prototype.gten = function gten(num) {
      return this.cmpn(num) >= 0;
    };
    BN2.prototype.gte = function gte(num) {
      return this.cmp(num) >= 0;
    };
    BN2.prototype.ltn = function ltn(num) {
      return this.cmpn(num) === -1;
    };
    BN2.prototype.lt = function lt2(num) {
      return this.cmp(num) === -1;
    };
    BN2.prototype.lten = function lten(num) {
      return this.cmpn(num) <= 0;
    };
    BN2.prototype.lte = function lte(num) {
      return this.cmp(num) <= 0;
    };
    BN2.prototype.eqn = function eqn(num) {
      return this.cmpn(num) === 0;
    };
    BN2.prototype.eq = function eq6(num) {
      return this.cmp(num) === 0;
    };
    BN2.red = function red(num) {
      return new Red(num);
    };
    BN2.prototype.toRed = function toRed(ctx) {
      assert2(!this.red, "Already a number in reduction context");
      assert2(this.negative === 0, "red works only with positives");
      return ctx.convertTo(this)._forceRed(ctx);
    };
    BN2.prototype.fromRed = function fromRed() {
      assert2(this.red, "fromRed works only with numbers in reduction context");
      return this.red.convertFrom(this);
    };
    BN2.prototype._forceRed = function _forceRed(ctx) {
      this.red = ctx;
      return this;
    };
    BN2.prototype.forceRed = function forceRed(ctx) {
      assert2(!this.red, "Already a number in reduction context");
      return this._forceRed(ctx);
    };
    BN2.prototype.redAdd = function redAdd(num) {
      assert2(this.red, "redAdd works only with red numbers");
      return this.red.add(this, num);
    };
    BN2.prototype.redIAdd = function redIAdd(num) {
      assert2(this.red, "redIAdd works only with red numbers");
      return this.red.iadd(this, num);
    };
    BN2.prototype.redSub = function redSub(num) {
      assert2(this.red, "redSub works only with red numbers");
      return this.red.sub(this, num);
    };
    BN2.prototype.redISub = function redISub(num) {
      assert2(this.red, "redISub works only with red numbers");
      return this.red.isub(this, num);
    };
    BN2.prototype.redShl = function redShl(num) {
      assert2(this.red, "redShl works only with red numbers");
      return this.red.shl(this, num);
    };
    BN2.prototype.redMul = function redMul(num) {
      assert2(this.red, "redMul works only with red numbers");
      this.red._verify2(this, num);
      return this.red.mul(this, num);
    };
    BN2.prototype.redIMul = function redIMul(num) {
      assert2(this.red, "redMul works only with red numbers");
      this.red._verify2(this, num);
      return this.red.imul(this, num);
    };
    BN2.prototype.redSqr = function redSqr() {
      assert2(this.red, "redSqr works only with red numbers");
      this.red._verify1(this);
      return this.red.sqr(this);
    };
    BN2.prototype.redISqr = function redISqr() {
      assert2(this.red, "redISqr works only with red numbers");
      this.red._verify1(this);
      return this.red.isqr(this);
    };
    BN2.prototype.redSqrt = function redSqrt() {
      assert2(this.red, "redSqrt works only with red numbers");
      this.red._verify1(this);
      return this.red.sqrt(this);
    };
    BN2.prototype.redInvm = function redInvm() {
      assert2(this.red, "redInvm works only with red numbers");
      this.red._verify1(this);
      return this.red.invm(this);
    };
    BN2.prototype.redNeg = function redNeg() {
      assert2(this.red, "redNeg works only with red numbers");
      this.red._verify1(this);
      return this.red.neg(this);
    };
    BN2.prototype.redPow = function redPow(num) {
      assert2(this.red && !num.red, "redPow(normalNum)");
      this.red._verify1(this);
      return this.red.pow(this, num);
    };
    var primes = {
      k256: null,
      p224: null,
      p192: null,
      p25519: null
    };
    function MPrime(name2, p2) {
      this.name = name2;
      this.p = new BN2(p2, 16);
      this.n = this.p.bitLength();
      this.k = new BN2(1).iushln(this.n).isub(this.p);
      this.tmp = this._tmp();
    }
    MPrime.prototype._tmp = function _tmp() {
      var tmp = new BN2(null);
      tmp.words = new Array(Math.ceil(this.n / 13));
      return tmp;
    };
    MPrime.prototype.ireduce = function ireduce(num) {
      var r2 = num;
      var rlen;
      do {
        this.split(r2, this.tmp);
        r2 = this.imulK(r2);
        r2 = r2.iadd(this.tmp);
        rlen = r2.bitLength();
      } while (rlen > this.n);
      var cmp = rlen < this.n ? -1 : r2.ucmp(this.p);
      if (cmp === 0) {
        r2.words[0] = 0;
        r2.length = 1;
      } else if (cmp > 0) {
        r2.isub(this.p);
      } else {
        if (r2.strip !== void 0) {
          r2.strip();
        } else {
          r2._strip();
        }
      }
      return r2;
    };
    MPrime.prototype.split = function split(input, out) {
      input.iushrn(this.n, 0, out);
    };
    MPrime.prototype.imulK = function imulK(num) {
      return num.imul(this.k);
    };
    function K256() {
      MPrime.call(
        this,
        "k256",
        "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe fffffc2f"
      );
    }
    inherits2(K256, MPrime);
    K256.prototype.split = function split(input, output) {
      var mask = 4194303;
      var outLen = Math.min(input.length, 9);
      for (var i3 = 0; i3 < outLen; i3++) {
        output.words[i3] = input.words[i3];
      }
      output.length = outLen;
      if (input.length <= 9) {
        input.words[0] = 0;
        input.length = 1;
        return;
      }
      var prev = input.words[9];
      output.words[output.length++] = prev & mask;
      for (i3 = 10; i3 < input.length; i3++) {
        var next = input.words[i3] | 0;
        input.words[i3 - 10] = (next & mask) << 4 | prev >>> 22;
        prev = next;
      }
      prev >>>= 22;
      input.words[i3 - 10] = prev;
      if (prev === 0 && input.length > 10) {
        input.length -= 10;
      } else {
        input.length -= 9;
      }
    };
    K256.prototype.imulK = function imulK(num) {
      num.words[num.length] = 0;
      num.words[num.length + 1] = 0;
      num.length += 2;
      var lo2 = 0;
      for (var i3 = 0; i3 < num.length; i3++) {
        var w2 = num.words[i3] | 0;
        lo2 += w2 * 977;
        num.words[i3] = lo2 & 67108863;
        lo2 = w2 * 64 + (lo2 / 67108864 | 0);
      }
      if (num.words[num.length - 1] === 0) {
        num.length--;
        if (num.words[num.length - 1] === 0) {
          num.length--;
        }
      }
      return num;
    };
    function P224() {
      MPrime.call(
        this,
        "p224",
        "ffffffff ffffffff ffffffff ffffffff 00000000 00000000 00000001"
      );
    }
    inherits2(P224, MPrime);
    function P192() {
      MPrime.call(
        this,
        "p192",
        "ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff"
      );
    }
    inherits2(P192, MPrime);
    function P25519() {
      MPrime.call(
        this,
        "25519",
        "7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed"
      );
    }
    inherits2(P25519, MPrime);
    P25519.prototype.imulK = function imulK(num) {
      var carry = 0;
      for (var i3 = 0; i3 < num.length; i3++) {
        var hi2 = (num.words[i3] | 0) * 19 + carry;
        var lo2 = hi2 & 67108863;
        hi2 >>>= 26;
        num.words[i3] = lo2;
        carry = hi2;
      }
      if (carry !== 0) {
        num.words[num.length++] = carry;
      }
      return num;
    };
    BN2._prime = function prime(name2) {
      if (primes[name2]) return primes[name2];
      var prime2;
      if (name2 === "k256") {
        prime2 = new K256();
      } else if (name2 === "p224") {
        prime2 = new P224();
      } else if (name2 === "p192") {
        prime2 = new P192();
      } else if (name2 === "p25519") {
        prime2 = new P25519();
      } else {
        throw new Error("Unknown prime " + name2);
      }
      primes[name2] = prime2;
      return prime2;
    };
    function Red(m4) {
      if (typeof m4 === "string") {
        var prime = BN2._prime(m4);
        this.m = prime.p;
        this.prime = prime;
      } else {
        assert2(m4.gtn(1), "modulus must be greater than 1");
        this.m = m4;
        this.prime = null;
      }
    }
    Red.prototype._verify1 = function _verify1(a2) {
      assert2(a2.negative === 0, "red works only with positives");
      assert2(a2.red, "red works only with red numbers");
    };
    Red.prototype._verify2 = function _verify2(a2, b2) {
      assert2((a2.negative | b2.negative) === 0, "red works only with positives");
      assert2(
        a2.red && a2.red === b2.red,
        "red works only with red numbers"
      );
    };
    Red.prototype.imod = function imod(a2) {
      if (this.prime) return this.prime.ireduce(a2)._forceRed(this);
      return a2.umod(this.m)._forceRed(this);
    };
    Red.prototype.neg = function neg4(a2) {
      if (a2.isZero()) {
        return a2.clone();
      }
      return this.m.sub(a2)._forceRed(this);
    };
    Red.prototype.add = function add5(a2, b2) {
      this._verify2(a2, b2);
      var res = a2.add(b2);
      if (res.cmp(this.m) >= 0) {
        res.isub(this.m);
      }
      return res._forceRed(this);
    };
    Red.prototype.iadd = function iadd(a2, b2) {
      this._verify2(a2, b2);
      var res = a2.iadd(b2);
      if (res.cmp(this.m) >= 0) {
        res.isub(this.m);
      }
      return res;
    };
    Red.prototype.sub = function sub(a2, b2) {
      this._verify2(a2, b2);
      var res = a2.sub(b2);
      if (res.cmpn(0) < 0) {
        res.iadd(this.m);
      }
      return res._forceRed(this);
    };
    Red.prototype.isub = function isub(a2, b2) {
      this._verify2(a2, b2);
      var res = a2.isub(b2);
      if (res.cmpn(0) < 0) {
        res.iadd(this.m);
      }
      return res;
    };
    Red.prototype.shl = function shl(a2, num) {
      this._verify1(a2);
      return this.imod(a2.ushln(num));
    };
    Red.prototype.imul = function imul(a2, b2) {
      this._verify2(a2, b2);
      return this.imod(a2.imul(b2));
    };
    Red.prototype.mul = function mul5(a2, b2) {
      this._verify2(a2, b2);
      return this.imod(a2.mul(b2));
    };
    Red.prototype.isqr = function isqr(a2) {
      return this.imul(a2, a2.clone());
    };
    Red.prototype.sqr = function sqr(a2) {
      return this.mul(a2, a2);
    };
    Red.prototype.sqrt = function sqrt(a2) {
      if (a2.isZero()) return a2.clone();
      var mod3 = this.m.andln(3);
      assert2(mod3 % 2 === 1);
      if (mod3 === 3) {
        var pow = this.m.add(new BN2(1)).iushrn(2);
        return this.pow(a2, pow);
      }
      var q2 = this.m.subn(1);
      var s2 = 0;
      while (!q2.isZero() && q2.andln(1) === 0) {
        s2++;
        q2.iushrn(1);
      }
      assert2(!q2.isZero());
      var one = new BN2(1).toRed(this);
      var nOne = one.redNeg();
      var lpow = this.m.subn(1).iushrn(1);
      var z2 = this.m.bitLength();
      z2 = new BN2(2 * z2 * z2).toRed(this);
      while (this.pow(z2, lpow).cmp(nOne) !== 0) {
        z2.redIAdd(nOne);
      }
      var c2 = this.pow(z2, q2);
      var r2 = this.pow(a2, q2.addn(1).iushrn(1));
      var t = this.pow(a2, q2);
      var m4 = s2;
      while (t.cmp(one) !== 0) {
        var tmp = t;
        for (var i3 = 0; tmp.cmp(one) !== 0; i3++) {
          tmp = tmp.redSqr();
        }
        assert2(i3 < m4);
        var b2 = this.pow(c2, new BN2(1).iushln(m4 - i3 - 1));
        r2 = r2.redMul(b2);
        c2 = b2.redSqr();
        t = t.redMul(c2);
        m4 = i3;
      }
      return r2;
    };
    Red.prototype.invm = function invm(a2) {
      var inv = a2._invmp(this.m);
      if (inv.negative !== 0) {
        inv.negative = 0;
        return this.imod(inv).redNeg();
      } else {
        return this.imod(inv);
      }
    };
    Red.prototype.pow = function pow(a2, num) {
      if (num.isZero()) return new BN2(1).toRed(this);
      if (num.cmpn(1) === 0) return a2.clone();
      var windowSize = 4;
      var wnd = new Array(1 << windowSize);
      wnd[0] = new BN2(1).toRed(this);
      wnd[1] = a2;
      for (var i3 = 2; i3 < wnd.length; i3++) {
        wnd[i3] = this.mul(wnd[i3 - 1], a2);
      }
      var res = wnd[0];
      var current = 0;
      var currentLen = 0;
      var start = num.bitLength() % 26;
      if (start === 0) {
        start = 26;
      }
      for (i3 = num.length - 1; i3 >= 0; i3--) {
        var word = num.words[i3];
        for (var j2 = start - 1; j2 >= 0; j2--) {
          var bit = word >> j2 & 1;
          if (res !== wnd[0]) {
            res = this.sqr(res);
          }
          if (bit === 0 && current === 0) {
            currentLen = 0;
            continue;
          }
          current <<= 1;
          current |= bit;
          currentLen++;
          if (currentLen !== windowSize && (i3 !== 0 || j2 !== 0)) continue;
          res = this.mul(res, wnd[current]);
          currentLen = 0;
          current = 0;
        }
        start = 26;
      }
      return res;
    };
    Red.prototype.convertTo = function convertTo(num) {
      var r2 = num.umod(this.m);
      return r2 === num ? r2.clone() : r2;
    };
    Red.prototype.convertFrom = function convertFrom(num) {
      var res = num.clone();
      res.red = null;
      return res;
    };
    BN2.mont = function mont2(num) {
      return new Mont(num);
    };
    function Mont(m4) {
      Red.call(this, m4);
      this.shift = this.m.bitLength();
      if (this.shift % 26 !== 0) {
        this.shift += 26 - this.shift % 26;
      }
      this.r = new BN2(1).iushln(this.shift);
      this.r2 = this.imod(this.r.sqr());
      this.rinv = this.r._invmp(this.m);
      this.minv = this.rinv.mul(this.r).isubn(1).div(this.m);
      this.minv = this.minv.umod(this.r);
      this.minv = this.r.sub(this.minv);
    }
    inherits2(Mont, Red);
    Mont.prototype.convertTo = function convertTo(num) {
      return this.imod(num.ushln(this.shift));
    };
    Mont.prototype.convertFrom = function convertFrom(num) {
      var r2 = this.imod(num.mul(this.rinv));
      r2.red = null;
      return r2;
    };
    Mont.prototype.imul = function imul(a2, b2) {
      if (a2.isZero() || b2.isZero()) {
        a2.words[0] = 0;
        a2.length = 1;
        return a2;
      }
      var t = a2.imul(b2);
      var c2 = t.maskn(this.shift).mul(this.minv).imaskn(this.shift).mul(this.m);
      var u2 = t.isub(c2).iushrn(this.shift);
      var res = u2;
      if (u2.cmp(this.m) >= 0) {
        res = u2.isub(this.m);
      } else if (u2.cmpn(0) < 0) {
        res = u2.iadd(this.m);
      }
      return res._forceRed(this);
    };
    Mont.prototype.mul = function mul5(a2, b2) {
      if (a2.isZero() || b2.isZero()) return new BN2(0)._forceRed(this);
      var t = a2.mul(b2);
      var c2 = t.maskn(this.shift).mul(this.minv).imaskn(this.shift).mul(this.m);
      var u2 = t.isub(c2).iushrn(this.shift);
      var res = u2;
      if (u2.cmp(this.m) >= 0) {
        res = u2.isub(this.m);
      } else if (u2.cmpn(0) < 0) {
        res = u2.iadd(this.m);
      }
      return res._forceRed(this);
    };
    Mont.prototype.invm = function invm(a2) {
      var res = this.imod(a2._invmp(this.m).mul(this.r2));
      return res._forceRed(this);
    };
  })(module, commonjsGlobal);
})(bn$3);
var bnExports = bn$3.exports;
var minimalisticAssert = assert$f;
function assert$f(val, msg) {
  if (!val)
    throw new Error(msg || "Assertion failed");
}
assert$f.equal = function assertEqual(l2, r2, msg) {
  if (l2 != r2)
    throw new Error(msg || "Assertion failed: " + l2 + " != " + r2);
};
var utils$l = {};
(function(exports) {
  var utils2 = exports;
  function toArray2(msg, enc) {
    if (Array.isArray(msg))
      return msg.slice();
    if (!msg)
      return [];
    var res = [];
    if (typeof msg !== "string") {
      for (var i3 = 0; i3 < msg.length; i3++)
        res[i3] = msg[i3] | 0;
      return res;
    }
    if (enc === "hex") {
      msg = msg.replace(/[^a-z0-9]+/ig, "");
      if (msg.length % 2 !== 0)
        msg = "0" + msg;
      for (var i3 = 0; i3 < msg.length; i3 += 2)
        res.push(parseInt(msg[i3] + msg[i3 + 1], 16));
    } else {
      for (var i3 = 0; i3 < msg.length; i3++) {
        var c2 = msg.charCodeAt(i3);
        var hi2 = c2 >> 8;
        var lo2 = c2 & 255;
        if (hi2)
          res.push(hi2, lo2);
        else
          res.push(lo2);
      }
    }
    return res;
  }
  utils2.toArray = toArray2;
  function zero22(word) {
    if (word.length === 1)
      return "0" + word;
    else
      return word;
  }
  utils2.zero2 = zero22;
  function toHex3(msg) {
    var res = "";
    for (var i3 = 0; i3 < msg.length; i3++)
      res += zero22(msg[i3].toString(16));
    return res;
  }
  utils2.toHex = toHex3;
  utils2.encode = function encode3(arr, enc) {
    if (enc === "hex")
      return toHex3(arr);
    else
      return arr;
  };
})(utils$l);
(function(exports) {
  var utils2 = exports;
  var BN2 = bnExports;
  var minAssert = minimalisticAssert;
  var minUtils = utils$l;
  utils2.assert = minAssert;
  utils2.toArray = minUtils.toArray;
  utils2.zero2 = minUtils.zero2;
  utils2.toHex = minUtils.toHex;
  utils2.encode = minUtils.encode;
  function getNAF2(num, w2, bits) {
    var naf = new Array(Math.max(num.bitLength(), bits) + 1);
    var i3;
    for (i3 = 0; i3 < naf.length; i3 += 1) {
      naf[i3] = 0;
    }
    var ws2 = 1 << w2 + 1;
    var k2 = num.clone();
    for (i3 = 0; i3 < naf.length; i3++) {
      var z2;
      var mod = k2.andln(ws2 - 1);
      if (k2.isOdd()) {
        if (mod > (ws2 >> 1) - 1)
          z2 = (ws2 >> 1) - mod;
        else
          z2 = mod;
        k2.isubn(z2);
      } else {
        z2 = 0;
      }
      naf[i3] = z2;
      k2.iushrn(1);
    }
    return naf;
  }
  utils2.getNAF = getNAF2;
  function getJSF2(k1, k2) {
    var jsf = [
      [],
      []
    ];
    k1 = k1.clone();
    k2 = k2.clone();
    var d1 = 0;
    var d22 = 0;
    var m8;
    while (k1.cmpn(-d1) > 0 || k2.cmpn(-d22) > 0) {
      var m14 = k1.andln(3) + d1 & 3;
      var m24 = k2.andln(3) + d22 & 3;
      if (m14 === 3)
        m14 = -1;
      if (m24 === 3)
        m24 = -1;
      var u1;
      if ((m14 & 1) === 0) {
        u1 = 0;
      } else {
        m8 = k1.andln(7) + d1 & 7;
        if ((m8 === 3 || m8 === 5) && m24 === 2)
          u1 = -m14;
        else
          u1 = m14;
      }
      jsf[0].push(u1);
      var u2;
      if ((m24 & 1) === 0) {
        u2 = 0;
      } else {
        m8 = k2.andln(7) + d22 & 7;
        if ((m8 === 3 || m8 === 5) && m14 === 2)
          u2 = -m24;
        else
          u2 = m24;
      }
      jsf[1].push(u2);
      if (2 * d1 === u1 + 1)
        d1 = 1 - d1;
      if (2 * d22 === u2 + 1)
        d22 = 1 - d22;
      k1.iushrn(1);
      k2.iushrn(1);
    }
    return jsf;
  }
  utils2.getJSF = getJSF2;
  function cachedProperty2(obj, name2, computer) {
    var key2 = "_" + name2;
    obj.prototype[name2] = function cachedProperty3() {
      return this[key2] !== void 0 ? this[key2] : this[key2] = computer.call(this);
    };
  }
  utils2.cachedProperty = cachedProperty2;
  function parseBytes2(bytes) {
    return typeof bytes === "string" ? utils2.toArray(bytes, "hex") : bytes;
  }
  utils2.parseBytes = parseBytes2;
  function intFromLE(bytes) {
    return new BN2(bytes, "hex", "le");
  }
  utils2.intFromLE = intFromLE;
})(utils$m);
var brorand = { exports: {} };
var r$3;
brorand.exports = function rand(len) {
  if (!r$3)
    r$3 = new Rand(null);
  return r$3.generate(len);
};
function Rand(rand3) {
  this.rand = rand3;
}
brorand.exports.Rand = Rand;
Rand.prototype.generate = function generate(len) {
  return this._rand(len);
};
Rand.prototype._rand = function _rand(n3) {
  if (this.rand.getBytes)
    return this.rand.getBytes(n3);
  var res = new Uint8Array(n3);
  for (var i3 = 0; i3 < res.length; i3++)
    res[i3] = this.rand.getByte();
  return res;
};
if (typeof self === "object") {
  if (self.crypto && self.crypto.getRandomValues) {
    Rand.prototype._rand = function _rand2(n3) {
      var arr = new Uint8Array(n3);
      self.crypto.getRandomValues(arr);
      return arr;
    };
  } else if (self.msCrypto && self.msCrypto.getRandomValues) {
    Rand.prototype._rand = function _rand2(n3) {
      var arr = new Uint8Array(n3);
      self.msCrypto.getRandomValues(arr);
      return arr;
    };
  } else if (typeof window === "object") {
    Rand.prototype._rand = function() {
      throw new Error("Not implemented yet");
    };
  }
} else {
  try {
    var crypto$2 = require$$0$3;
    if (typeof crypto$2.randomBytes !== "function")
      throw new Error("Not supported");
    Rand.prototype._rand = function _rand2(n3) {
      return crypto$2.randomBytes(n3);
    };
  } catch (e2) {
  }
}
var brorandExports = brorand.exports;
var curve = {};
var BN$7 = bnExports;
var utils$k = utils$m;
var getNAF = utils$k.getNAF;
var getJSF = utils$k.getJSF;
var assert$e = utils$k.assert;
function BaseCurve(type, conf) {
  this.type = type;
  this.p = new BN$7(conf.p, 16);
  this.red = conf.prime ? BN$7.red(conf.prime) : BN$7.mont(this.p);
  this.zero = new BN$7(0).toRed(this.red);
  this.one = new BN$7(1).toRed(this.red);
  this.two = new BN$7(2).toRed(this.red);
  this.n = conf.n && new BN$7(conf.n, 16);
  this.g = conf.g && this.pointFromJSON(conf.g, conf.gRed);
  this._wnafT1 = new Array(4);
  this._wnafT2 = new Array(4);
  this._wnafT3 = new Array(4);
  this._wnafT4 = new Array(4);
  this._bitLength = this.n ? this.n.bitLength() : 0;
  var adjustCount = this.n && this.p.div(this.n);
  if (!adjustCount || adjustCount.cmpn(100) > 0) {
    this.redN = null;
  } else {
    this._maxwellTrick = true;
    this.redN = this.n.toRed(this.red);
  }
}
var base = BaseCurve;
BaseCurve.prototype.point = function point() {
  throw new Error("Not implemented");
};
BaseCurve.prototype.validate = function validate() {
  throw new Error("Not implemented");
};
BaseCurve.prototype._fixedNafMul = function _fixedNafMul(p2, k2) {
  assert$e(p2.precomputed);
  var doubles = p2._getDoubles();
  var naf = getNAF(k2, 1, this._bitLength);
  var I3 = (1 << doubles.step + 1) - (doubles.step % 2 === 0 ? 2 : 1);
  I3 /= 3;
  var repr = [];
  var j2;
  var nafW;
  for (j2 = 0; j2 < naf.length; j2 += doubles.step) {
    nafW = 0;
    for (var l2 = j2 + doubles.step - 1; l2 >= j2; l2--)
      nafW = (nafW << 1) + naf[l2];
    repr.push(nafW);
  }
  var a2 = this.jpoint(null, null, null);
  var b2 = this.jpoint(null, null, null);
  for (var i3 = I3; i3 > 0; i3--) {
    for (j2 = 0; j2 < repr.length; j2++) {
      nafW = repr[j2];
      if (nafW === i3)
        b2 = b2.mixedAdd(doubles.points[j2]);
      else if (nafW === -i3)
        b2 = b2.mixedAdd(doubles.points[j2].neg());
    }
    a2 = a2.add(b2);
  }
  return a2.toP();
};
BaseCurve.prototype._wnafMul = function _wnafMul(p2, k2) {
  var w2 = 4;
  var nafPoints = p2._getNAFPoints(w2);
  w2 = nafPoints.wnd;
  var wnd = nafPoints.points;
  var naf = getNAF(k2, w2, this._bitLength);
  var acc = this.jpoint(null, null, null);
  for (var i3 = naf.length - 1; i3 >= 0; i3--) {
    for (var l2 = 0; i3 >= 0 && naf[i3] === 0; i3--)
      l2++;
    if (i3 >= 0)
      l2++;
    acc = acc.dblp(l2);
    if (i3 < 0)
      break;
    var z2 = naf[i3];
    assert$e(z2 !== 0);
    if (p2.type === "affine") {
      if (z2 > 0)
        acc = acc.mixedAdd(wnd[z2 - 1 >> 1]);
      else
        acc = acc.mixedAdd(wnd[-z2 - 1 >> 1].neg());
    } else {
      if (z2 > 0)
        acc = acc.add(wnd[z2 - 1 >> 1]);
      else
        acc = acc.add(wnd[-z2 - 1 >> 1].neg());
    }
  }
  return p2.type === "affine" ? acc.toP() : acc;
};
BaseCurve.prototype._wnafMulAdd = function _wnafMulAdd(defW, points, coeffs, len, jacobianResult) {
  var wndWidth = this._wnafT1;
  var wnd = this._wnafT2;
  var naf = this._wnafT3;
  var max = 0;
  var i3;
  var j2;
  var p2;
  for (i3 = 0; i3 < len; i3++) {
    p2 = points[i3];
    var nafPoints = p2._getNAFPoints(defW);
    wndWidth[i3] = nafPoints.wnd;
    wnd[i3] = nafPoints.points;
  }
  for (i3 = len - 1; i3 >= 1; i3 -= 2) {
    var a2 = i3 - 1;
    var b2 = i3;
    if (wndWidth[a2] !== 1 || wndWidth[b2] !== 1) {
      naf[a2] = getNAF(coeffs[a2], wndWidth[a2], this._bitLength);
      naf[b2] = getNAF(coeffs[b2], wndWidth[b2], this._bitLength);
      max = Math.max(naf[a2].length, max);
      max = Math.max(naf[b2].length, max);
      continue;
    }
    var comb = [
      points[a2],
      /* 1 */
      null,
      /* 3 */
      null,
      /* 5 */
      points[b2]
      /* 7 */
    ];
    if (points[a2].y.cmp(points[b2].y) === 0) {
      comb[1] = points[a2].add(points[b2]);
      comb[2] = points[a2].toJ().mixedAdd(points[b2].neg());
    } else if (points[a2].y.cmp(points[b2].y.redNeg()) === 0) {
      comb[1] = points[a2].toJ().mixedAdd(points[b2]);
      comb[2] = points[a2].add(points[b2].neg());
    } else {
      comb[1] = points[a2].toJ().mixedAdd(points[b2]);
      comb[2] = points[a2].toJ().mixedAdd(points[b2].neg());
    }
    var index = [
      -3,
      /* -1 -1 */
      -1,
      /* -1 0 */
      -5,
      /* -1 1 */
      -7,
      /* 0 -1 */
      0,
      /* 0 0 */
      7,
      /* 0 1 */
      5,
      /* 1 -1 */
      1,
      /* 1 0 */
      3
      /* 1 1 */
    ];
    var jsf = getJSF(coeffs[a2], coeffs[b2]);
    max = Math.max(jsf[0].length, max);
    naf[a2] = new Array(max);
    naf[b2] = new Array(max);
    for (j2 = 0; j2 < max; j2++) {
      var ja2 = jsf[0][j2] | 0;
      var jb = jsf[1][j2] | 0;
      naf[a2][j2] = index[(ja2 + 1) * 3 + (jb + 1)];
      naf[b2][j2] = 0;
      wnd[a2] = comb;
    }
  }
  var acc = this.jpoint(null, null, null);
  var tmp = this._wnafT4;
  for (i3 = max; i3 >= 0; i3--) {
    var k2 = 0;
    while (i3 >= 0) {
      var zero = true;
      for (j2 = 0; j2 < len; j2++) {
        tmp[j2] = naf[j2][i3] | 0;
        if (tmp[j2] !== 0)
          zero = false;
      }
      if (!zero)
        break;
      k2++;
      i3--;
    }
    if (i3 >= 0)
      k2++;
    acc = acc.dblp(k2);
    if (i3 < 0)
      break;
    for (j2 = 0; j2 < len; j2++) {
      var z2 = tmp[j2];
      if (z2 === 0)
        continue;
      else if (z2 > 0)
        p2 = wnd[j2][z2 - 1 >> 1];
      else if (z2 < 0)
        p2 = wnd[j2][-z2 - 1 >> 1].neg();
      if (p2.type === "affine")
        acc = acc.mixedAdd(p2);
      else
        acc = acc.add(p2);
    }
  }
  for (i3 = 0; i3 < len; i3++)
    wnd[i3] = null;
  if (jacobianResult)
    return acc;
  else
    return acc.toP();
};
function BasePoint(curve2, type) {
  this.curve = curve2;
  this.type = type;
  this.precomputed = null;
}
BaseCurve.BasePoint = BasePoint;
BasePoint.prototype.eq = function eq() {
  throw new Error("Not implemented");
};
BasePoint.prototype.validate = function validate2() {
  return this.curve.validate(this);
};
BaseCurve.prototype.decodePoint = function decodePoint(bytes, enc) {
  bytes = utils$k.toArray(bytes, enc);
  var len = this.p.byteLength();
  if ((bytes[0] === 4 || bytes[0] === 6 || bytes[0] === 7) && bytes.length - 1 === 2 * len) {
    if (bytes[0] === 6)
      assert$e(bytes[bytes.length - 1] % 2 === 0);
    else if (bytes[0] === 7)
      assert$e(bytes[bytes.length - 1] % 2 === 1);
    var res = this.point(
      bytes.slice(1, 1 + len),
      bytes.slice(1 + len, 1 + 2 * len)
    );
    return res;
  } else if ((bytes[0] === 2 || bytes[0] === 3) && bytes.length - 1 === len) {
    return this.pointFromX(bytes.slice(1, 1 + len), bytes[0] === 3);
  }
  throw new Error("Unknown point format");
};
BasePoint.prototype.encodeCompressed = function encodeCompressed(enc) {
  return this.encode(enc, true);
};
BasePoint.prototype._encode = function _encode(compact) {
  var len = this.curve.p.byteLength();
  var x2 = this.getX().toArray("be", len);
  if (compact)
    return [this.getY().isEven() ? 2 : 3].concat(x2);
  return [4].concat(x2, this.getY().toArray("be", len));
};
BasePoint.prototype.encode = function encode2(enc, compact) {
  return utils$k.encode(this._encode(compact), enc);
};
BasePoint.prototype.precompute = function precompute(power) {
  if (this.precomputed)
    return this;
  var precomputed = {
    doubles: null,
    naf: null,
    beta: null
  };
  precomputed.naf = this._getNAFPoints(8);
  precomputed.doubles = this._getDoubles(4, power);
  precomputed.beta = this._getBeta();
  this.precomputed = precomputed;
  return this;
};
BasePoint.prototype._hasDoubles = function _hasDoubles(k2) {
  if (!this.precomputed)
    return false;
  var doubles = this.precomputed.doubles;
  if (!doubles)
    return false;
  return doubles.points.length >= Math.ceil((k2.bitLength() + 1) / doubles.step);
};
BasePoint.prototype._getDoubles = function _getDoubles(step, power) {
  if (this.precomputed && this.precomputed.doubles)
    return this.precomputed.doubles;
  var doubles = [this];
  var acc = this;
  for (var i3 = 0; i3 < power; i3 += step) {
    for (var j2 = 0; j2 < step; j2++)
      acc = acc.dbl();
    doubles.push(acc);
  }
  return {
    step,
    points: doubles
  };
};
BasePoint.prototype._getNAFPoints = function _getNAFPoints(wnd) {
  if (this.precomputed && this.precomputed.naf)
    return this.precomputed.naf;
  var res = [this];
  var max = (1 << wnd) - 1;
  var dbl5 = max === 1 ? null : this.dbl();
  for (var i3 = 1; i3 < max; i3++)
    res[i3] = res[i3 - 1].add(dbl5);
  return {
    wnd,
    points: res
  };
};
BasePoint.prototype._getBeta = function _getBeta() {
  return null;
};
BasePoint.prototype.dblp = function dblp(k2) {
  var r2 = this;
  for (var i3 = 0; i3 < k2; i3++)
    r2 = r2.dbl();
  return r2;
};
var utils$j = utils$m;
var BN$6 = bnExports;
var inherits$3 = inherits_browserExports;
var Base$2 = base;
var assert$d = utils$j.assert;
function ShortCurve(conf) {
  Base$2.call(this, "short", conf);
  this.a = new BN$6(conf.a, 16).toRed(this.red);
  this.b = new BN$6(conf.b, 16).toRed(this.red);
  this.tinv = this.two.redInvm();
  this.zeroA = this.a.fromRed().cmpn(0) === 0;
  this.threeA = this.a.fromRed().sub(this.p).cmpn(-3) === 0;
  this.endo = this._getEndomorphism(conf);
  this._endoWnafT1 = new Array(4);
  this._endoWnafT2 = new Array(4);
}
inherits$3(ShortCurve, Base$2);
var short = ShortCurve;
ShortCurve.prototype._getEndomorphism = function _getEndomorphism(conf) {
  if (!this.zeroA || !this.g || !this.n || this.p.modn(3) !== 1)
    return;
  var beta;
  var lambda;
  if (conf.beta) {
    beta = new BN$6(conf.beta, 16).toRed(this.red);
  } else {
    var betas = this._getEndoRoots(this.p);
    beta = betas[0].cmp(betas[1]) < 0 ? betas[0] : betas[1];
    beta = beta.toRed(this.red);
  }
  if (conf.lambda) {
    lambda = new BN$6(conf.lambda, 16);
  } else {
    var lambdas = this._getEndoRoots(this.n);
    if (this.g.mul(lambdas[0]).x.cmp(this.g.x.redMul(beta)) === 0) {
      lambda = lambdas[0];
    } else {
      lambda = lambdas[1];
      assert$d(this.g.mul(lambda).x.cmp(this.g.x.redMul(beta)) === 0);
    }
  }
  var basis;
  if (conf.basis) {
    basis = conf.basis.map(function(vec) {
      return {
        a: new BN$6(vec.a, 16),
        b: new BN$6(vec.b, 16)
      };
    });
  } else {
    basis = this._getEndoBasis(lambda);
  }
  return {
    beta,
    lambda,
    basis
  };
};
ShortCurve.prototype._getEndoRoots = function _getEndoRoots(num) {
  var red = num === this.p ? this.red : BN$6.mont(num);
  var tinv = new BN$6(2).toRed(red).redInvm();
  var ntinv = tinv.redNeg();
  var s2 = new BN$6(3).toRed(red).redNeg().redSqrt().redMul(tinv);
  var l1 = ntinv.redAdd(s2).fromRed();
  var l2 = ntinv.redSub(s2).fromRed();
  return [l1, l2];
};
ShortCurve.prototype._getEndoBasis = function _getEndoBasis(lambda) {
  var aprxSqrt = this.n.ushrn(Math.floor(this.n.bitLength() / 2));
  var u2 = lambda;
  var v2 = this.n.clone();
  var x1 = new BN$6(1);
  var y1 = new BN$6(0);
  var x2 = new BN$6(0);
  var y22 = new BN$6(1);
  var a0;
  var b0;
  var a1;
  var b1;
  var a2;
  var b2;
  var prevR;
  var i3 = 0;
  var r2;
  var x3;
  while (u2.cmpn(0) !== 0) {
    var q2 = v2.div(u2);
    r2 = v2.sub(q2.mul(u2));
    x3 = x2.sub(q2.mul(x1));
    var y3 = y22.sub(q2.mul(y1));
    if (!a1 && r2.cmp(aprxSqrt) < 0) {
      a0 = prevR.neg();
      b0 = x1;
      a1 = r2.neg();
      b1 = x3;
    } else if (a1 && ++i3 === 2) {
      break;
    }
    prevR = r2;
    v2 = u2;
    u2 = r2;
    x2 = x1;
    x1 = x3;
    y22 = y1;
    y1 = y3;
  }
  a2 = r2.neg();
  b2 = x3;
  var len1 = a1.sqr().add(b1.sqr());
  var len2 = a2.sqr().add(b2.sqr());
  if (len2.cmp(len1) >= 0) {
    a2 = a0;
    b2 = b0;
  }
  if (a1.negative) {
    a1 = a1.neg();
    b1 = b1.neg();
  }
  if (a2.negative) {
    a2 = a2.neg();
    b2 = b2.neg();
  }
  return [
    { a: a1, b: b1 },
    { a: a2, b: b2 }
  ];
};
ShortCurve.prototype._endoSplit = function _endoSplit(k2) {
  var basis = this.endo.basis;
  var v1 = basis[0];
  var v2 = basis[1];
  var c1 = v2.b.mul(k2).divRound(this.n);
  var c2 = v1.b.neg().mul(k2).divRound(this.n);
  var p1 = c1.mul(v1.a);
  var p2 = c2.mul(v2.a);
  var q1 = c1.mul(v1.b);
  var q2 = c2.mul(v2.b);
  var k1 = k2.sub(p1).sub(p2);
  var k22 = q1.add(q2).neg();
  return { k1, k2: k22 };
};
ShortCurve.prototype.pointFromX = function pointFromX(x2, odd) {
  x2 = new BN$6(x2, 16);
  if (!x2.red)
    x2 = x2.toRed(this.red);
  var y22 = x2.redSqr().redMul(x2).redIAdd(x2.redMul(this.a)).redIAdd(this.b);
  var y3 = y22.redSqrt();
  if (y3.redSqr().redSub(y22).cmp(this.zero) !== 0)
    throw new Error("invalid point");
  var isOdd = y3.fromRed().isOdd();
  if (odd && !isOdd || !odd && isOdd)
    y3 = y3.redNeg();
  return this.point(x2, y3);
};
ShortCurve.prototype.validate = function validate3(point5) {
  if (point5.inf)
    return true;
  var x2 = point5.x;
  var y3 = point5.y;
  var ax = this.a.redMul(x2);
  var rhs = x2.redSqr().redMul(x2).redIAdd(ax).redIAdd(this.b);
  return y3.redSqr().redISub(rhs).cmpn(0) === 0;
};
ShortCurve.prototype._endoWnafMulAdd = function _endoWnafMulAdd(points, coeffs, jacobianResult) {
  var npoints = this._endoWnafT1;
  var ncoeffs = this._endoWnafT2;
  for (var i3 = 0; i3 < points.length; i3++) {
    var split = this._endoSplit(coeffs[i3]);
    var p2 = points[i3];
    var beta = p2._getBeta();
    if (split.k1.negative) {
      split.k1.ineg();
      p2 = p2.neg(true);
    }
    if (split.k2.negative) {
      split.k2.ineg();
      beta = beta.neg(true);
    }
    npoints[i3 * 2] = p2;
    npoints[i3 * 2 + 1] = beta;
    ncoeffs[i3 * 2] = split.k1;
    ncoeffs[i3 * 2 + 1] = split.k2;
  }
  var res = this._wnafMulAdd(1, npoints, ncoeffs, i3 * 2, jacobianResult);
  for (var j2 = 0; j2 < i3 * 2; j2++) {
    npoints[j2] = null;
    ncoeffs[j2] = null;
  }
  return res;
};
function Point$2(curve2, x2, y3, isRed) {
  Base$2.BasePoint.call(this, curve2, "affine");
  if (x2 === null && y3 === null) {
    this.x = null;
    this.y = null;
    this.inf = true;
  } else {
    this.x = new BN$6(x2, 16);
    this.y = new BN$6(y3, 16);
    if (isRed) {
      this.x.forceRed(this.curve.red);
      this.y.forceRed(this.curve.red);
    }
    if (!this.x.red)
      this.x = this.x.toRed(this.curve.red);
    if (!this.y.red)
      this.y = this.y.toRed(this.curve.red);
    this.inf = false;
  }
}
inherits$3(Point$2, Base$2.BasePoint);
ShortCurve.prototype.point = function point2(x2, y3, isRed) {
  return new Point$2(this, x2, y3, isRed);
};
ShortCurve.prototype.pointFromJSON = function pointFromJSON(obj, red) {
  return Point$2.fromJSON(this, obj, red);
};
Point$2.prototype._getBeta = function _getBeta2() {
  if (!this.curve.endo)
    return;
  var pre = this.precomputed;
  if (pre && pre.beta)
    return pre.beta;
  var beta = this.curve.point(this.x.redMul(this.curve.endo.beta), this.y);
  if (pre) {
    var curve2 = this.curve;
    var endoMul = function(p2) {
      return curve2.point(p2.x.redMul(curve2.endo.beta), p2.y);
    };
    pre.beta = beta;
    beta.precomputed = {
      beta: null,
      naf: pre.naf && {
        wnd: pre.naf.wnd,
        points: pre.naf.points.map(endoMul)
      },
      doubles: pre.doubles && {
        step: pre.doubles.step,
        points: pre.doubles.points.map(endoMul)
      }
    };
  }
  return beta;
};
Point$2.prototype.toJSON = function toJSON() {
  if (!this.precomputed)
    return [this.x, this.y];
  return [this.x, this.y, this.precomputed && {
    doubles: this.precomputed.doubles && {
      step: this.precomputed.doubles.step,
      points: this.precomputed.doubles.points.slice(1)
    },
    naf: this.precomputed.naf && {
      wnd: this.precomputed.naf.wnd,
      points: this.precomputed.naf.points.slice(1)
    }
  }];
};
Point$2.fromJSON = function fromJSON(curve2, obj, red) {
  if (typeof obj === "string")
    obj = JSON.parse(obj);
  var res = curve2.point(obj[0], obj[1], red);
  if (!obj[2])
    return res;
  function obj2point(obj2) {
    return curve2.point(obj2[0], obj2[1], red);
  }
  var pre = obj[2];
  res.precomputed = {
    beta: null,
    doubles: pre.doubles && {
      step: pre.doubles.step,
      points: [res].concat(pre.doubles.points.map(obj2point))
    },
    naf: pre.naf && {
      wnd: pre.naf.wnd,
      points: [res].concat(pre.naf.points.map(obj2point))
    }
  };
  return res;
};
Point$2.prototype.inspect = function inspect() {
  if (this.isInfinity())
    return "<EC Point Infinity>";
  return "<EC Point x: " + this.x.fromRed().toString(16, 2) + " y: " + this.y.fromRed().toString(16, 2) + ">";
};
Point$2.prototype.isInfinity = function isInfinity() {
  return this.inf;
};
Point$2.prototype.add = function add(p2) {
  if (this.inf)
    return p2;
  if (p2.inf)
    return this;
  if (this.eq(p2))
    return this.dbl();
  if (this.neg().eq(p2))
    return this.curve.point(null, null);
  if (this.x.cmp(p2.x) === 0)
    return this.curve.point(null, null);
  var c2 = this.y.redSub(p2.y);
  if (c2.cmpn(0) !== 0)
    c2 = c2.redMul(this.x.redSub(p2.x).redInvm());
  var nx = c2.redSqr().redISub(this.x).redISub(p2.x);
  var ny = c2.redMul(this.x.redSub(nx)).redISub(this.y);
  return this.curve.point(nx, ny);
};
Point$2.prototype.dbl = function dbl() {
  if (this.inf)
    return this;
  var ys1 = this.y.redAdd(this.y);
  if (ys1.cmpn(0) === 0)
    return this.curve.point(null, null);
  var a2 = this.curve.a;
  var x2 = this.x.redSqr();
  var dyinv = ys1.redInvm();
  var c2 = x2.redAdd(x2).redIAdd(x2).redIAdd(a2).redMul(dyinv);
  var nx = c2.redSqr().redISub(this.x.redAdd(this.x));
  var ny = c2.redMul(this.x.redSub(nx)).redISub(this.y);
  return this.curve.point(nx, ny);
};
Point$2.prototype.getX = function getX() {
  return this.x.fromRed();
};
Point$2.prototype.getY = function getY() {
  return this.y.fromRed();
};
Point$2.prototype.mul = function mul(k2) {
  k2 = new BN$6(k2, 16);
  if (this.isInfinity())
    return this;
  else if (this._hasDoubles(k2))
    return this.curve._fixedNafMul(this, k2);
  else if (this.curve.endo)
    return this.curve._endoWnafMulAdd([this], [k2]);
  else
    return this.curve._wnafMul(this, k2);
};
Point$2.prototype.mulAdd = function mulAdd(k1, p2, k2) {
  var points = [this, p2];
  var coeffs = [k1, k2];
  if (this.curve.endo)
    return this.curve._endoWnafMulAdd(points, coeffs);
  else
    return this.curve._wnafMulAdd(1, points, coeffs, 2);
};
Point$2.prototype.jmulAdd = function jmulAdd(k1, p2, k2) {
  var points = [this, p2];
  var coeffs = [k1, k2];
  if (this.curve.endo)
    return this.curve._endoWnafMulAdd(points, coeffs, true);
  else
    return this.curve._wnafMulAdd(1, points, coeffs, 2, true);
};
Point$2.prototype.eq = function eq2(p2) {
  return this === p2 || this.inf === p2.inf && (this.inf || this.x.cmp(p2.x) === 0 && this.y.cmp(p2.y) === 0);
};
Point$2.prototype.neg = function neg(_precompute) {
  if (this.inf)
    return this;
  var res = this.curve.point(this.x, this.y.redNeg());
  if (_precompute && this.precomputed) {
    var pre = this.precomputed;
    var negate = function(p2) {
      return p2.neg();
    };
    res.precomputed = {
      naf: pre.naf && {
        wnd: pre.naf.wnd,
        points: pre.naf.points.map(negate)
      },
      doubles: pre.doubles && {
        step: pre.doubles.step,
        points: pre.doubles.points.map(negate)
      }
    };
  }
  return res;
};
Point$2.prototype.toJ = function toJ() {
  if (this.inf)
    return this.curve.jpoint(null, null, null);
  var res = this.curve.jpoint(this.x, this.y, this.curve.one);
  return res;
};
function JPoint(curve2, x2, y3, z2) {
  Base$2.BasePoint.call(this, curve2, "jacobian");
  if (x2 === null && y3 === null && z2 === null) {
    this.x = this.curve.one;
    this.y = this.curve.one;
    this.z = new BN$6(0);
  } else {
    this.x = new BN$6(x2, 16);
    this.y = new BN$6(y3, 16);
    this.z = new BN$6(z2, 16);
  }
  if (!this.x.red)
    this.x = this.x.toRed(this.curve.red);
  if (!this.y.red)
    this.y = this.y.toRed(this.curve.red);
  if (!this.z.red)
    this.z = this.z.toRed(this.curve.red);
  this.zOne = this.z === this.curve.one;
}
inherits$3(JPoint, Base$2.BasePoint);
ShortCurve.prototype.jpoint = function jpoint(x2, y3, z2) {
  return new JPoint(this, x2, y3, z2);
};
JPoint.prototype.toP = function toP() {
  if (this.isInfinity())
    return this.curve.point(null, null);
  var zinv = this.z.redInvm();
  var zinv2 = zinv.redSqr();
  var ax = this.x.redMul(zinv2);
  var ay = this.y.redMul(zinv2).redMul(zinv);
  return this.curve.point(ax, ay);
};
JPoint.prototype.neg = function neg2() {
  return this.curve.jpoint(this.x, this.y.redNeg(), this.z);
};
JPoint.prototype.add = function add2(p2) {
  if (this.isInfinity())
    return p2;
  if (p2.isInfinity())
    return this;
  var pz2 = p2.z.redSqr();
  var z2 = this.z.redSqr();
  var u1 = this.x.redMul(pz2);
  var u2 = p2.x.redMul(z2);
  var s1 = this.y.redMul(pz2.redMul(p2.z));
  var s2 = p2.y.redMul(z2.redMul(this.z));
  var h4 = u1.redSub(u2);
  var r2 = s1.redSub(s2);
  if (h4.cmpn(0) === 0) {
    if (r2.cmpn(0) !== 0)
      return this.curve.jpoint(null, null, null);
    else
      return this.dbl();
  }
  var h22 = h4.redSqr();
  var h32 = h22.redMul(h4);
  var v2 = u1.redMul(h22);
  var nx = r2.redSqr().redIAdd(h32).redISub(v2).redISub(v2);
  var ny = r2.redMul(v2.redISub(nx)).redISub(s1.redMul(h32));
  var nz = this.z.redMul(p2.z).redMul(h4);
  return this.curve.jpoint(nx, ny, nz);
};
JPoint.prototype.mixedAdd = function mixedAdd(p2) {
  if (this.isInfinity())
    return p2.toJ();
  if (p2.isInfinity())
    return this;
  var z2 = this.z.redSqr();
  var u1 = this.x;
  var u2 = p2.x.redMul(z2);
  var s1 = this.y;
  var s2 = p2.y.redMul(z2).redMul(this.z);
  var h4 = u1.redSub(u2);
  var r2 = s1.redSub(s2);
  if (h4.cmpn(0) === 0) {
    if (r2.cmpn(0) !== 0)
      return this.curve.jpoint(null, null, null);
    else
      return this.dbl();
  }
  var h22 = h4.redSqr();
  var h32 = h22.redMul(h4);
  var v2 = u1.redMul(h22);
  var nx = r2.redSqr().redIAdd(h32).redISub(v2).redISub(v2);
  var ny = r2.redMul(v2.redISub(nx)).redISub(s1.redMul(h32));
  var nz = this.z.redMul(h4);
  return this.curve.jpoint(nx, ny, nz);
};
JPoint.prototype.dblp = function dblp2(pow) {
  if (pow === 0)
    return this;
  if (this.isInfinity())
    return this;
  if (!pow)
    return this.dbl();
  var i3;
  if (this.curve.zeroA || this.curve.threeA) {
    var r2 = this;
    for (i3 = 0; i3 < pow; i3++)
      r2 = r2.dbl();
    return r2;
  }
  var a2 = this.curve.a;
  var tinv = this.curve.tinv;
  var jx = this.x;
  var jy = this.y;
  var jz = this.z;
  var jz4 = jz.redSqr().redSqr();
  var jyd = jy.redAdd(jy);
  for (i3 = 0; i3 < pow; i3++) {
    var jx2 = jx.redSqr();
    var jyd2 = jyd.redSqr();
    var jyd4 = jyd2.redSqr();
    var c2 = jx2.redAdd(jx2).redIAdd(jx2).redIAdd(a2.redMul(jz4));
    var t1 = jx.redMul(jyd2);
    var nx = c2.redSqr().redISub(t1.redAdd(t1));
    var t2 = t1.redISub(nx);
    var dny = c2.redMul(t2);
    dny = dny.redIAdd(dny).redISub(jyd4);
    var nz = jyd.redMul(jz);
    if (i3 + 1 < pow)
      jz4 = jz4.redMul(jyd4);
    jx = nx;
    jz = nz;
    jyd = dny;
  }
  return this.curve.jpoint(jx, jyd.redMul(tinv), jz);
};
JPoint.prototype.dbl = function dbl2() {
  if (this.isInfinity())
    return this;
  if (this.curve.zeroA)
    return this._zeroDbl();
  else if (this.curve.threeA)
    return this._threeDbl();
  else
    return this._dbl();
};
JPoint.prototype._zeroDbl = function _zeroDbl() {
  var nx;
  var ny;
  var nz;
  if (this.zOne) {
    var xx = this.x.redSqr();
    var yy = this.y.redSqr();
    var yyyy = yy.redSqr();
    var s2 = this.x.redAdd(yy).redSqr().redISub(xx).redISub(yyyy);
    s2 = s2.redIAdd(s2);
    var m4 = xx.redAdd(xx).redIAdd(xx);
    var t = m4.redSqr().redISub(s2).redISub(s2);
    var yyyy8 = yyyy.redIAdd(yyyy);
    yyyy8 = yyyy8.redIAdd(yyyy8);
    yyyy8 = yyyy8.redIAdd(yyyy8);
    nx = t;
    ny = m4.redMul(s2.redISub(t)).redISub(yyyy8);
    nz = this.y.redAdd(this.y);
  } else {
    var a2 = this.x.redSqr();
    var b2 = this.y.redSqr();
    var c2 = b2.redSqr();
    var d4 = this.x.redAdd(b2).redSqr().redISub(a2).redISub(c2);
    d4 = d4.redIAdd(d4);
    var e2 = a2.redAdd(a2).redIAdd(a2);
    var f5 = e2.redSqr();
    var c8 = c2.redIAdd(c2);
    c8 = c8.redIAdd(c8);
    c8 = c8.redIAdd(c8);
    nx = f5.redISub(d4).redISub(d4);
    ny = e2.redMul(d4.redISub(nx)).redISub(c8);
    nz = this.y.redMul(this.z);
    nz = nz.redIAdd(nz);
  }
  return this.curve.jpoint(nx, ny, nz);
};
JPoint.prototype._threeDbl = function _threeDbl() {
  var nx;
  var ny;
  var nz;
  if (this.zOne) {
    var xx = this.x.redSqr();
    var yy = this.y.redSqr();
    var yyyy = yy.redSqr();
    var s2 = this.x.redAdd(yy).redSqr().redISub(xx).redISub(yyyy);
    s2 = s2.redIAdd(s2);
    var m4 = xx.redAdd(xx).redIAdd(xx).redIAdd(this.curve.a);
    var t = m4.redSqr().redISub(s2).redISub(s2);
    nx = t;
    var yyyy8 = yyyy.redIAdd(yyyy);
    yyyy8 = yyyy8.redIAdd(yyyy8);
    yyyy8 = yyyy8.redIAdd(yyyy8);
    ny = m4.redMul(s2.redISub(t)).redISub(yyyy8);
    nz = this.y.redAdd(this.y);
  } else {
    var delta = this.z.redSqr();
    var gamma = this.y.redSqr();
    var beta = this.x.redMul(gamma);
    var alpha = this.x.redSub(delta).redMul(this.x.redAdd(delta));
    alpha = alpha.redAdd(alpha).redIAdd(alpha);
    var beta4 = beta.redIAdd(beta);
    beta4 = beta4.redIAdd(beta4);
    var beta8 = beta4.redAdd(beta4);
    nx = alpha.redSqr().redISub(beta8);
    nz = this.y.redAdd(this.z).redSqr().redISub(gamma).redISub(delta);
    var ggamma8 = gamma.redSqr();
    ggamma8 = ggamma8.redIAdd(ggamma8);
    ggamma8 = ggamma8.redIAdd(ggamma8);
    ggamma8 = ggamma8.redIAdd(ggamma8);
    ny = alpha.redMul(beta4.redISub(nx)).redISub(ggamma8);
  }
  return this.curve.jpoint(nx, ny, nz);
};
JPoint.prototype._dbl = function _dbl() {
  var a2 = this.curve.a;
  var jx = this.x;
  var jy = this.y;
  var jz = this.z;
  var jz4 = jz.redSqr().redSqr();
  var jx2 = jx.redSqr();
  var jy2 = jy.redSqr();
  var c2 = jx2.redAdd(jx2).redIAdd(jx2).redIAdd(a2.redMul(jz4));
  var jxd4 = jx.redAdd(jx);
  jxd4 = jxd4.redIAdd(jxd4);
  var t1 = jxd4.redMul(jy2);
  var nx = c2.redSqr().redISub(t1.redAdd(t1));
  var t2 = t1.redISub(nx);
  var jyd8 = jy2.redSqr();
  jyd8 = jyd8.redIAdd(jyd8);
  jyd8 = jyd8.redIAdd(jyd8);
  jyd8 = jyd8.redIAdd(jyd8);
  var ny = c2.redMul(t2).redISub(jyd8);
  var nz = jy.redAdd(jy).redMul(jz);
  return this.curve.jpoint(nx, ny, nz);
};
JPoint.prototype.trpl = function trpl() {
  if (!this.curve.zeroA)
    return this.dbl().add(this);
  var xx = this.x.redSqr();
  var yy = this.y.redSqr();
  var zz = this.z.redSqr();
  var yyyy = yy.redSqr();
  var m4 = xx.redAdd(xx).redIAdd(xx);
  var mm = m4.redSqr();
  var e2 = this.x.redAdd(yy).redSqr().redISub(xx).redISub(yyyy);
  e2 = e2.redIAdd(e2);
  e2 = e2.redAdd(e2).redIAdd(e2);
  e2 = e2.redISub(mm);
  var ee2 = e2.redSqr();
  var t = yyyy.redIAdd(yyyy);
  t = t.redIAdd(t);
  t = t.redIAdd(t);
  t = t.redIAdd(t);
  var u2 = m4.redIAdd(e2).redSqr().redISub(mm).redISub(ee2).redISub(t);
  var yyu4 = yy.redMul(u2);
  yyu4 = yyu4.redIAdd(yyu4);
  yyu4 = yyu4.redIAdd(yyu4);
  var nx = this.x.redMul(ee2).redISub(yyu4);
  nx = nx.redIAdd(nx);
  nx = nx.redIAdd(nx);
  var ny = this.y.redMul(u2.redMul(t.redISub(u2)).redISub(e2.redMul(ee2)));
  ny = ny.redIAdd(ny);
  ny = ny.redIAdd(ny);
  ny = ny.redIAdd(ny);
  var nz = this.z.redAdd(e2).redSqr().redISub(zz).redISub(ee2);
  return this.curve.jpoint(nx, ny, nz);
};
JPoint.prototype.mul = function mul2(k2, kbase) {
  k2 = new BN$6(k2, kbase);
  return this.curve._wnafMul(this, k2);
};
JPoint.prototype.eq = function eq3(p2) {
  if (p2.type === "affine")
    return this.eq(p2.toJ());
  if (this === p2)
    return true;
  var z2 = this.z.redSqr();
  var pz2 = p2.z.redSqr();
  if (this.x.redMul(pz2).redISub(p2.x.redMul(z2)).cmpn(0) !== 0)
    return false;
  var z3 = z2.redMul(this.z);
  var pz3 = pz2.redMul(p2.z);
  return this.y.redMul(pz3).redISub(p2.y.redMul(z3)).cmpn(0) === 0;
};
JPoint.prototype.eqXToP = function eqXToP(x2) {
  var zs2 = this.z.redSqr();
  var rx = x2.toRed(this.curve.red).redMul(zs2);
  if (this.x.cmp(rx) === 0)
    return true;
  var xc2 = x2.clone();
  var t = this.curve.redN.redMul(zs2);
  for (; ; ) {
    xc2.iadd(this.curve.n);
    if (xc2.cmp(this.curve.p) >= 0)
      return false;
    rx.redIAdd(t);
    if (this.x.cmp(rx) === 0)
      return true;
  }
};
JPoint.prototype.inspect = function inspect2() {
  if (this.isInfinity())
    return "<EC JPoint Infinity>";
  return "<EC JPoint x: " + this.x.toString(16, 2) + " y: " + this.y.toString(16, 2) + " z: " + this.z.toString(16, 2) + ">";
};
JPoint.prototype.isInfinity = function isInfinity2() {
  return this.z.cmpn(0) === 0;
};
var BN$5 = bnExports;
var inherits$2 = inherits_browserExports;
var Base$1 = base;
var utils$i = utils$m;
function MontCurve(conf) {
  Base$1.call(this, "mont", conf);
  this.a = new BN$5(conf.a, 16).toRed(this.red);
  this.b = new BN$5(conf.b, 16).toRed(this.red);
  this.i4 = new BN$5(4).toRed(this.red).redInvm();
  this.two = new BN$5(2).toRed(this.red);
  this.a24 = this.i4.redMul(this.a.redAdd(this.two));
}
inherits$2(MontCurve, Base$1);
var mont = MontCurve;
MontCurve.prototype.validate = function validate4(point5) {
  var x2 = point5.normalize().x;
  var x22 = x2.redSqr();
  var rhs = x22.redMul(x2).redAdd(x22.redMul(this.a)).redAdd(x2);
  var y3 = rhs.redSqrt();
  return y3.redSqr().cmp(rhs) === 0;
};
function Point$1(curve2, x2, z2) {
  Base$1.BasePoint.call(this, curve2, "projective");
  if (x2 === null && z2 === null) {
    this.x = this.curve.one;
    this.z = this.curve.zero;
  } else {
    this.x = new BN$5(x2, 16);
    this.z = new BN$5(z2, 16);
    if (!this.x.red)
      this.x = this.x.toRed(this.curve.red);
    if (!this.z.red)
      this.z = this.z.toRed(this.curve.red);
  }
}
inherits$2(Point$1, Base$1.BasePoint);
MontCurve.prototype.decodePoint = function decodePoint2(bytes, enc) {
  return this.point(utils$i.toArray(bytes, enc), 1);
};
MontCurve.prototype.point = function point3(x2, z2) {
  return new Point$1(this, x2, z2);
};
MontCurve.prototype.pointFromJSON = function pointFromJSON2(obj) {
  return Point$1.fromJSON(this, obj);
};
Point$1.prototype.precompute = function precompute2() {
};
Point$1.prototype._encode = function _encode2() {
  return this.getX().toArray("be", this.curve.p.byteLength());
};
Point$1.fromJSON = function fromJSON2(curve2, obj) {
  return new Point$1(curve2, obj[0], obj[1] || curve2.one);
};
Point$1.prototype.inspect = function inspect3() {
  if (this.isInfinity())
    return "<EC Point Infinity>";
  return "<EC Point x: " + this.x.fromRed().toString(16, 2) + " z: " + this.z.fromRed().toString(16, 2) + ">";
};
Point$1.prototype.isInfinity = function isInfinity3() {
  return this.z.cmpn(0) === 0;
};
Point$1.prototype.dbl = function dbl3() {
  var a2 = this.x.redAdd(this.z);
  var aa2 = a2.redSqr();
  var b2 = this.x.redSub(this.z);
  var bb = b2.redSqr();
  var c2 = aa2.redSub(bb);
  var nx = aa2.redMul(bb);
  var nz = c2.redMul(bb.redAdd(this.curve.a24.redMul(c2)));
  return this.curve.point(nx, nz);
};
Point$1.prototype.add = function add3() {
  throw new Error("Not supported on Montgomery curve");
};
Point$1.prototype.diffAdd = function diffAdd(p2, diff) {
  var a2 = this.x.redAdd(this.z);
  var b2 = this.x.redSub(this.z);
  var c2 = p2.x.redAdd(p2.z);
  var d4 = p2.x.redSub(p2.z);
  var da2 = d4.redMul(a2);
  var cb = c2.redMul(b2);
  var nx = diff.z.redMul(da2.redAdd(cb).redSqr());
  var nz = diff.x.redMul(da2.redISub(cb).redSqr());
  return this.curve.point(nx, nz);
};
Point$1.prototype.mul = function mul3(k2) {
  var t = k2.clone();
  var a2 = this;
  var b2 = this.curve.point(null, null);
  var c2 = this;
  for (var bits = []; t.cmpn(0) !== 0; t.iushrn(1))
    bits.push(t.andln(1));
  for (var i3 = bits.length - 1; i3 >= 0; i3--) {
    if (bits[i3] === 0) {
      a2 = a2.diffAdd(b2, c2);
      b2 = b2.dbl();
    } else {
      b2 = a2.diffAdd(b2, c2);
      a2 = a2.dbl();
    }
  }
  return b2;
};
Point$1.prototype.mulAdd = function mulAdd2() {
  throw new Error("Not supported on Montgomery curve");
};
Point$1.prototype.jumlAdd = function jumlAdd() {
  throw new Error("Not supported on Montgomery curve");
};
Point$1.prototype.eq = function eq4(other) {
  return this.getX().cmp(other.getX()) === 0;
};
Point$1.prototype.normalize = function normalize() {
  this.x = this.x.redMul(this.z.redInvm());
  this.z = this.curve.one;
  return this;
};
Point$1.prototype.getX = function getX2() {
  this.normalize();
  return this.x.fromRed();
};
var utils$h = utils$m;
var BN$4 = bnExports;
var inherits$1 = inherits_browserExports;
var Base = base;
var assert$c = utils$h.assert;
function EdwardsCurve(conf) {
  this.twisted = (conf.a | 0) !== 1;
  this.mOneA = this.twisted && (conf.a | 0) === -1;
  this.extended = this.mOneA;
  Base.call(this, "edwards", conf);
  this.a = new BN$4(conf.a, 16).umod(this.red.m);
  this.a = this.a.toRed(this.red);
  this.c = new BN$4(conf.c, 16).toRed(this.red);
  this.c2 = this.c.redSqr();
  this.d = new BN$4(conf.d, 16).toRed(this.red);
  this.dd = this.d.redAdd(this.d);
  assert$c(!this.twisted || this.c.fromRed().cmpn(1) === 0);
  this.oneC = (conf.c | 0) === 1;
}
inherits$1(EdwardsCurve, Base);
var edwards = EdwardsCurve;
EdwardsCurve.prototype._mulA = function _mulA(num) {
  if (this.mOneA)
    return num.redNeg();
  else
    return this.a.redMul(num);
};
EdwardsCurve.prototype._mulC = function _mulC(num) {
  if (this.oneC)
    return num;
  else
    return this.c.redMul(num);
};
EdwardsCurve.prototype.jpoint = function jpoint2(x2, y3, z2, t) {
  return this.point(x2, y3, z2, t);
};
EdwardsCurve.prototype.pointFromX = function pointFromX2(x2, odd) {
  x2 = new BN$4(x2, 16);
  if (!x2.red)
    x2 = x2.toRed(this.red);
  var x22 = x2.redSqr();
  var rhs = this.c2.redSub(this.a.redMul(x22));
  var lhs = this.one.redSub(this.c2.redMul(this.d).redMul(x22));
  var y22 = rhs.redMul(lhs.redInvm());
  var y3 = y22.redSqrt();
  if (y3.redSqr().redSub(y22).cmp(this.zero) !== 0)
    throw new Error("invalid point");
  var isOdd = y3.fromRed().isOdd();
  if (odd && !isOdd || !odd && isOdd)
    y3 = y3.redNeg();
  return this.point(x2, y3);
};
EdwardsCurve.prototype.pointFromY = function pointFromY(y3, odd) {
  y3 = new BN$4(y3, 16);
  if (!y3.red)
    y3 = y3.toRed(this.red);
  var y22 = y3.redSqr();
  var lhs = y22.redSub(this.c2);
  var rhs = y22.redMul(this.d).redMul(this.c2).redSub(this.a);
  var x2 = lhs.redMul(rhs.redInvm());
  if (x2.cmp(this.zero) === 0) {
    if (odd)
      throw new Error("invalid point");
    else
      return this.point(this.zero, y3);
  }
  var x3 = x2.redSqrt();
  if (x3.redSqr().redSub(x2).cmp(this.zero) !== 0)
    throw new Error("invalid point");
  if (x3.fromRed().isOdd() !== odd)
    x3 = x3.redNeg();
  return this.point(x3, y3);
};
EdwardsCurve.prototype.validate = function validate5(point5) {
  if (point5.isInfinity())
    return true;
  point5.normalize();
  var x2 = point5.x.redSqr();
  var y22 = point5.y.redSqr();
  var lhs = x2.redMul(this.a).redAdd(y22);
  var rhs = this.c2.redMul(this.one.redAdd(this.d.redMul(x2).redMul(y22)));
  return lhs.cmp(rhs) === 0;
};
function Point(curve2, x2, y3, z2, t) {
  Base.BasePoint.call(this, curve2, "projective");
  if (x2 === null && y3 === null && z2 === null) {
    this.x = this.curve.zero;
    this.y = this.curve.one;
    this.z = this.curve.one;
    this.t = this.curve.zero;
    this.zOne = true;
  } else {
    this.x = new BN$4(x2, 16);
    this.y = new BN$4(y3, 16);
    this.z = z2 ? new BN$4(z2, 16) : this.curve.one;
    this.t = t && new BN$4(t, 16);
    if (!this.x.red)
      this.x = this.x.toRed(this.curve.red);
    if (!this.y.red)
      this.y = this.y.toRed(this.curve.red);
    if (!this.z.red)
      this.z = this.z.toRed(this.curve.red);
    if (this.t && !this.t.red)
      this.t = this.t.toRed(this.curve.red);
    this.zOne = this.z === this.curve.one;
    if (this.curve.extended && !this.t) {
      this.t = this.x.redMul(this.y);
      if (!this.zOne)
        this.t = this.t.redMul(this.z.redInvm());
    }
  }
}
inherits$1(Point, Base.BasePoint);
EdwardsCurve.prototype.pointFromJSON = function pointFromJSON3(obj) {
  return Point.fromJSON(this, obj);
};
EdwardsCurve.prototype.point = function point4(x2, y3, z2, t) {
  return new Point(this, x2, y3, z2, t);
};
Point.fromJSON = function fromJSON3(curve2, obj) {
  return new Point(curve2, obj[0], obj[1], obj[2]);
};
Point.prototype.inspect = function inspect4() {
  if (this.isInfinity())
    return "<EC Point Infinity>";
  return "<EC Point x: " + this.x.fromRed().toString(16, 2) + " y: " + this.y.fromRed().toString(16, 2) + " z: " + this.z.fromRed().toString(16, 2) + ">";
};
Point.prototype.isInfinity = function isInfinity4() {
  return this.x.cmpn(0) === 0 && (this.y.cmp(this.z) === 0 || this.zOne && this.y.cmp(this.curve.c) === 0);
};
Point.prototype._extDbl = function _extDbl() {
  var a2 = this.x.redSqr();
  var b2 = this.y.redSqr();
  var c2 = this.z.redSqr();
  c2 = c2.redIAdd(c2);
  var d4 = this.curve._mulA(a2);
  var e2 = this.x.redAdd(this.y).redSqr().redISub(a2).redISub(b2);
  var g2 = d4.redAdd(b2);
  var f5 = g2.redSub(c2);
  var h4 = d4.redSub(b2);
  var nx = e2.redMul(f5);
  var ny = g2.redMul(h4);
  var nt2 = e2.redMul(h4);
  var nz = f5.redMul(g2);
  return this.curve.point(nx, ny, nz, nt2);
};
Point.prototype._projDbl = function _projDbl() {
  var b2 = this.x.redAdd(this.y).redSqr();
  var c2 = this.x.redSqr();
  var d4 = this.y.redSqr();
  var nx;
  var ny;
  var nz;
  var e2;
  var h4;
  var j2;
  if (this.curve.twisted) {
    e2 = this.curve._mulA(c2);
    var f5 = e2.redAdd(d4);
    if (this.zOne) {
      nx = b2.redSub(c2).redSub(d4).redMul(f5.redSub(this.curve.two));
      ny = f5.redMul(e2.redSub(d4));
      nz = f5.redSqr().redSub(f5).redSub(f5);
    } else {
      h4 = this.z.redSqr();
      j2 = f5.redSub(h4).redISub(h4);
      nx = b2.redSub(c2).redISub(d4).redMul(j2);
      ny = f5.redMul(e2.redSub(d4));
      nz = f5.redMul(j2);
    }
  } else {
    e2 = c2.redAdd(d4);
    h4 = this.curve._mulC(this.z).redSqr();
    j2 = e2.redSub(h4).redSub(h4);
    nx = this.curve._mulC(b2.redISub(e2)).redMul(j2);
    ny = this.curve._mulC(e2).redMul(c2.redISub(d4));
    nz = e2.redMul(j2);
  }
  return this.curve.point(nx, ny, nz);
};
Point.prototype.dbl = function dbl4() {
  if (this.isInfinity())
    return this;
  if (this.curve.extended)
    return this._extDbl();
  else
    return this._projDbl();
};
Point.prototype._extAdd = function _extAdd(p2) {
  var a2 = this.y.redSub(this.x).redMul(p2.y.redSub(p2.x));
  var b2 = this.y.redAdd(this.x).redMul(p2.y.redAdd(p2.x));
  var c2 = this.t.redMul(this.curve.dd).redMul(p2.t);
  var d4 = this.z.redMul(p2.z.redAdd(p2.z));
  var e2 = b2.redSub(a2);
  var f5 = d4.redSub(c2);
  var g2 = d4.redAdd(c2);
  var h4 = b2.redAdd(a2);
  var nx = e2.redMul(f5);
  var ny = g2.redMul(h4);
  var nt2 = e2.redMul(h4);
  var nz = f5.redMul(g2);
  return this.curve.point(nx, ny, nz, nt2);
};
Point.prototype._projAdd = function _projAdd(p2) {
  var a2 = this.z.redMul(p2.z);
  var b2 = a2.redSqr();
  var c2 = this.x.redMul(p2.x);
  var d4 = this.y.redMul(p2.y);
  var e2 = this.curve.d.redMul(c2).redMul(d4);
  var f5 = b2.redSub(e2);
  var g2 = b2.redAdd(e2);
  var tmp = this.x.redAdd(this.y).redMul(p2.x.redAdd(p2.y)).redISub(c2).redISub(d4);
  var nx = a2.redMul(f5).redMul(tmp);
  var ny;
  var nz;
  if (this.curve.twisted) {
    ny = a2.redMul(g2).redMul(d4.redSub(this.curve._mulA(c2)));
    nz = f5.redMul(g2);
  } else {
    ny = a2.redMul(g2).redMul(d4.redSub(c2));
    nz = this.curve._mulC(f5).redMul(g2);
  }
  return this.curve.point(nx, ny, nz);
};
Point.prototype.add = function add4(p2) {
  if (this.isInfinity())
    return p2;
  if (p2.isInfinity())
    return this;
  if (this.curve.extended)
    return this._extAdd(p2);
  else
    return this._projAdd(p2);
};
Point.prototype.mul = function mul4(k2) {
  if (this._hasDoubles(k2))
    return this.curve._fixedNafMul(this, k2);
  else
    return this.curve._wnafMul(this, k2);
};
Point.prototype.mulAdd = function mulAdd3(k1, p2, k2) {
  return this.curve._wnafMulAdd(1, [this, p2], [k1, k2], 2, false);
};
Point.prototype.jmulAdd = function jmulAdd2(k1, p2, k2) {
  return this.curve._wnafMulAdd(1, [this, p2], [k1, k2], 2, true);
};
Point.prototype.normalize = function normalize2() {
  if (this.zOne)
    return this;
  var zi2 = this.z.redInvm();
  this.x = this.x.redMul(zi2);
  this.y = this.y.redMul(zi2);
  if (this.t)
    this.t = this.t.redMul(zi2);
  this.z = this.curve.one;
  this.zOne = true;
  return this;
};
Point.prototype.neg = function neg3() {
  return this.curve.point(
    this.x.redNeg(),
    this.y,
    this.z,
    this.t && this.t.redNeg()
  );
};
Point.prototype.getX = function getX3() {
  this.normalize();
  return this.x.fromRed();
};
Point.prototype.getY = function getY2() {
  this.normalize();
  return this.y.fromRed();
};
Point.prototype.eq = function eq5(other) {
  return this === other || this.getX().cmp(other.getX()) === 0 && this.getY().cmp(other.getY()) === 0;
};
Point.prototype.eqXToP = function eqXToP2(x2) {
  var rx = x2.toRed(this.curve.red).redMul(this.z);
  if (this.x.cmp(rx) === 0)
    return true;
  var xc2 = x2.clone();
  var t = this.curve.redN.redMul(this.z);
  for (; ; ) {
    xc2.iadd(this.curve.n);
    if (xc2.cmp(this.curve.p) >= 0)
      return false;
    rx.redIAdd(t);
    if (this.x.cmp(rx) === 0)
      return true;
  }
};
Point.prototype.toP = Point.prototype.normalize;
Point.prototype.mixedAdd = Point.prototype.add;
(function(exports) {
  var curve2 = exports;
  curve2.base = base;
  curve2.short = short;
  curve2.mont = mont;
  curve2.edwards = edwards;
})(curve);
var curves$2 = {};
var hash$2 = {};
var utils$g = {};
var assert$b = minimalisticAssert;
var inherits = inherits_browserExports;
utils$g.inherits = inherits;
function isSurrogatePair(msg, i3) {
  if ((msg.charCodeAt(i3) & 64512) !== 55296) {
    return false;
  }
  if (i3 < 0 || i3 + 1 >= msg.length) {
    return false;
  }
  return (msg.charCodeAt(i3 + 1) & 64512) === 56320;
}
function toArray(msg, enc) {
  if (Array.isArray(msg))
    return msg.slice();
  if (!msg)
    return [];
  var res = [];
  if (typeof msg === "string") {
    if (!enc) {
      var p2 = 0;
      for (var i3 = 0; i3 < msg.length; i3++) {
        var c2 = msg.charCodeAt(i3);
        if (c2 < 128) {
          res[p2++] = c2;
        } else if (c2 < 2048) {
          res[p2++] = c2 >> 6 | 192;
          res[p2++] = c2 & 63 | 128;
        } else if (isSurrogatePair(msg, i3)) {
          c2 = 65536 + ((c2 & 1023) << 10) + (msg.charCodeAt(++i3) & 1023);
          res[p2++] = c2 >> 18 | 240;
          res[p2++] = c2 >> 12 & 63 | 128;
          res[p2++] = c2 >> 6 & 63 | 128;
          res[p2++] = c2 & 63 | 128;
        } else {
          res[p2++] = c2 >> 12 | 224;
          res[p2++] = c2 >> 6 & 63 | 128;
          res[p2++] = c2 & 63 | 128;
        }
      }
    } else if (enc === "hex") {
      msg = msg.replace(/[^a-z0-9]+/ig, "");
      if (msg.length % 2 !== 0)
        msg = "0" + msg;
      for (i3 = 0; i3 < msg.length; i3 += 2)
        res.push(parseInt(msg[i3] + msg[i3 + 1], 16));
    }
  } else {
    for (i3 = 0; i3 < msg.length; i3++)
      res[i3] = msg[i3] | 0;
  }
  return res;
}
utils$g.toArray = toArray;
function toHex(msg) {
  var res = "";
  for (var i3 = 0; i3 < msg.length; i3++)
    res += zero2(msg[i3].toString(16));
  return res;
}
utils$g.toHex = toHex;
function htonl(w2) {
  var res = w2 >>> 24 | w2 >>> 8 & 65280 | w2 << 8 & 16711680 | (w2 & 255) << 24;
  return res >>> 0;
}
utils$g.htonl = htonl;
function toHex32(msg, endian) {
  var res = "";
  for (var i3 = 0; i3 < msg.length; i3++) {
    var w2 = msg[i3];
    if (endian === "little")
      w2 = htonl(w2);
    res += zero8(w2.toString(16));
  }
  return res;
}
utils$g.toHex32 = toHex32;
function zero2(word) {
  if (word.length === 1)
    return "0" + word;
  else
    return word;
}
utils$g.zero2 = zero2;
function zero8(word) {
  if (word.length === 7)
    return "0" + word;
  else if (word.length === 6)
    return "00" + word;
  else if (word.length === 5)
    return "000" + word;
  else if (word.length === 4)
    return "0000" + word;
  else if (word.length === 3)
    return "00000" + word;
  else if (word.length === 2)
    return "000000" + word;
  else if (word.length === 1)
    return "0000000" + word;
  else
    return word;
}
utils$g.zero8 = zero8;
function join32(msg, start, end, endian) {
  var len = end - start;
  assert$b(len % 4 === 0);
  var res = new Array(len / 4);
  for (var i3 = 0, k2 = start; i3 < res.length; i3++, k2 += 4) {
    var w2;
    if (endian === "big")
      w2 = msg[k2] << 24 | msg[k2 + 1] << 16 | msg[k2 + 2] << 8 | msg[k2 + 3];
    else
      w2 = msg[k2 + 3] << 24 | msg[k2 + 2] << 16 | msg[k2 + 1] << 8 | msg[k2];
    res[i3] = w2 >>> 0;
  }
  return res;
}
utils$g.join32 = join32;
function split32(msg, endian) {
  var res = new Array(msg.length * 4);
  for (var i3 = 0, k2 = 0; i3 < msg.length; i3++, k2 += 4) {
    var m4 = msg[i3];
    if (endian === "big") {
      res[k2] = m4 >>> 24;
      res[k2 + 1] = m4 >>> 16 & 255;
      res[k2 + 2] = m4 >>> 8 & 255;
      res[k2 + 3] = m4 & 255;
    } else {
      res[k2 + 3] = m4 >>> 24;
      res[k2 + 2] = m4 >>> 16 & 255;
      res[k2 + 1] = m4 >>> 8 & 255;
      res[k2] = m4 & 255;
    }
  }
  return res;
}
utils$g.split32 = split32;
function rotr32$1(w2, b2) {
  return w2 >>> b2 | w2 << 32 - b2;
}
utils$g.rotr32 = rotr32$1;
function rotl32$2(w2, b2) {
  return w2 << b2 | w2 >>> 32 - b2;
}
utils$g.rotl32 = rotl32$2;
function sum32$3(a2, b2) {
  return a2 + b2 >>> 0;
}
utils$g.sum32 = sum32$3;
function sum32_3$1(a2, b2, c2) {
  return a2 + b2 + c2 >>> 0;
}
utils$g.sum32_3 = sum32_3$1;
function sum32_4$2(a2, b2, c2, d4) {
  return a2 + b2 + c2 + d4 >>> 0;
}
utils$g.sum32_4 = sum32_4$2;
function sum32_5$2(a2, b2, c2, d4, e2) {
  return a2 + b2 + c2 + d4 + e2 >>> 0;
}
utils$g.sum32_5 = sum32_5$2;
function sum64$1(buf, pos, ah2, al) {
  var bh = buf[pos];
  var bl = buf[pos + 1];
  var lo2 = al + bl >>> 0;
  var hi2 = (lo2 < al ? 1 : 0) + ah2 + bh;
  buf[pos] = hi2 >>> 0;
  buf[pos + 1] = lo2;
}
utils$g.sum64 = sum64$1;
function sum64_hi$1(ah2, al, bh, bl) {
  var lo2 = al + bl >>> 0;
  var hi2 = (lo2 < al ? 1 : 0) + ah2 + bh;
  return hi2 >>> 0;
}
utils$g.sum64_hi = sum64_hi$1;
function sum64_lo$1(ah2, al, bh, bl) {
  var lo2 = al + bl;
  return lo2 >>> 0;
}
utils$g.sum64_lo = sum64_lo$1;
function sum64_4_hi$1(ah2, al, bh, bl, ch, cl, dh, dl) {
  var carry = 0;
  var lo2 = al;
  lo2 = lo2 + bl >>> 0;
  carry += lo2 < al ? 1 : 0;
  lo2 = lo2 + cl >>> 0;
  carry += lo2 < cl ? 1 : 0;
  lo2 = lo2 + dl >>> 0;
  carry += lo2 < dl ? 1 : 0;
  var hi2 = ah2 + bh + ch + dh + carry;
  return hi2 >>> 0;
}
utils$g.sum64_4_hi = sum64_4_hi$1;
function sum64_4_lo$1(ah2, al, bh, bl, ch, cl, dh, dl) {
  var lo2 = al + bl + cl + dl;
  return lo2 >>> 0;
}
utils$g.sum64_4_lo = sum64_4_lo$1;
function sum64_5_hi$1(ah2, al, bh, bl, ch, cl, dh, dl, eh2, el) {
  var carry = 0;
  var lo2 = al;
  lo2 = lo2 + bl >>> 0;
  carry += lo2 < al ? 1 : 0;
  lo2 = lo2 + cl >>> 0;
  carry += lo2 < cl ? 1 : 0;
  lo2 = lo2 + dl >>> 0;
  carry += lo2 < dl ? 1 : 0;
  lo2 = lo2 + el >>> 0;
  carry += lo2 < el ? 1 : 0;
  var hi2 = ah2 + bh + ch + dh + eh2 + carry;
  return hi2 >>> 0;
}
utils$g.sum64_5_hi = sum64_5_hi$1;
function sum64_5_lo$1(ah2, al, bh, bl, ch, cl, dh, dl, eh2, el) {
  var lo2 = al + bl + cl + dl + el;
  return lo2 >>> 0;
}
utils$g.sum64_5_lo = sum64_5_lo$1;
function rotr64_hi$1(ah2, al, num) {
  var r2 = al << 32 - num | ah2 >>> num;
  return r2 >>> 0;
}
utils$g.rotr64_hi = rotr64_hi$1;
function rotr64_lo$1(ah2, al, num) {
  var r2 = ah2 << 32 - num | al >>> num;
  return r2 >>> 0;
}
utils$g.rotr64_lo = rotr64_lo$1;
function shr64_hi$1(ah2, al, num) {
  return ah2 >>> num;
}
utils$g.shr64_hi = shr64_hi$1;
function shr64_lo$1(ah2, al, num) {
  var r2 = ah2 << 32 - num | al >>> num;
  return r2 >>> 0;
}
utils$g.shr64_lo = shr64_lo$1;
var common$5 = {};
var utils$f = utils$g;
var assert$a = minimalisticAssert;
function BlockHash$4() {
  this.pending = null;
  this.pendingTotal = 0;
  this.blockSize = this.constructor.blockSize;
  this.outSize = this.constructor.outSize;
  this.hmacStrength = this.constructor.hmacStrength;
  this.padLength = this.constructor.padLength / 8;
  this.endian = "big";
  this._delta8 = this.blockSize / 8;
  this._delta32 = this.blockSize / 32;
}
common$5.BlockHash = BlockHash$4;
BlockHash$4.prototype.update = function update(msg, enc) {
  msg = utils$f.toArray(msg, enc);
  if (!this.pending)
    this.pending = msg;
  else
    this.pending = this.pending.concat(msg);
  this.pendingTotal += msg.length;
  if (this.pending.length >= this._delta8) {
    msg = this.pending;
    var r2 = msg.length % this._delta8;
    this.pending = msg.slice(msg.length - r2, msg.length);
    if (this.pending.length === 0)
      this.pending = null;
    msg = utils$f.join32(msg, 0, msg.length - r2, this.endian);
    for (var i3 = 0; i3 < msg.length; i3 += this._delta32)
      this._update(msg, i3, i3 + this._delta32);
  }
  return this;
};
BlockHash$4.prototype.digest = function digest(enc) {
  this.update(this._pad());
  assert$a(this.pending === null);
  return this._digest(enc);
};
BlockHash$4.prototype._pad = function pad() {
  var len = this.pendingTotal;
  var bytes = this._delta8;
  var k2 = bytes - (len + this.padLength) % bytes;
  var res = new Array(k2 + this.padLength);
  res[0] = 128;
  for (var i3 = 1; i3 < k2; i3++)
    res[i3] = 0;
  len <<= 3;
  if (this.endian === "big") {
    for (var t = 8; t < this.padLength; t++)
      res[i3++] = 0;
    res[i3++] = 0;
    res[i3++] = 0;
    res[i3++] = 0;
    res[i3++] = 0;
    res[i3++] = len >>> 24 & 255;
    res[i3++] = len >>> 16 & 255;
    res[i3++] = len >>> 8 & 255;
    res[i3++] = len & 255;
  } else {
    res[i3++] = len & 255;
    res[i3++] = len >>> 8 & 255;
    res[i3++] = len >>> 16 & 255;
    res[i3++] = len >>> 24 & 255;
    res[i3++] = 0;
    res[i3++] = 0;
    res[i3++] = 0;
    res[i3++] = 0;
    for (t = 8; t < this.padLength; t++)
      res[i3++] = 0;
  }
  return res;
};
var sha = {};
var common$4 = {};
var utils$e = utils$g;
var rotr32 = utils$e.rotr32;
function ft_1$1(s2, x2, y3, z2) {
  if (s2 === 0)
    return ch32$1(x2, y3, z2);
  if (s2 === 1 || s2 === 3)
    return p32(x2, y3, z2);
  if (s2 === 2)
    return maj32$1(x2, y3, z2);
}
common$4.ft_1 = ft_1$1;
function ch32$1(x2, y3, z2) {
  return x2 & y3 ^ ~x2 & z2;
}
common$4.ch32 = ch32$1;
function maj32$1(x2, y3, z2) {
  return x2 & y3 ^ x2 & z2 ^ y3 & z2;
}
common$4.maj32 = maj32$1;
function p32(x2, y3, z2) {
  return x2 ^ y3 ^ z2;
}
common$4.p32 = p32;
function s0_256$1(x2) {
  return rotr32(x2, 2) ^ rotr32(x2, 13) ^ rotr32(x2, 22);
}
common$4.s0_256 = s0_256$1;
function s1_256$1(x2) {
  return rotr32(x2, 6) ^ rotr32(x2, 11) ^ rotr32(x2, 25);
}
common$4.s1_256 = s1_256$1;
function g0_256$1(x2) {
  return rotr32(x2, 7) ^ rotr32(x2, 18) ^ x2 >>> 3;
}
common$4.g0_256 = g0_256$1;
function g1_256$1(x2) {
  return rotr32(x2, 17) ^ rotr32(x2, 19) ^ x2 >>> 10;
}
common$4.g1_256 = g1_256$1;
var utils$d = utils$g;
var common$3 = common$5;
var shaCommon$1 = common$4;
var rotl32$1 = utils$d.rotl32;
var sum32$2 = utils$d.sum32;
var sum32_5$1 = utils$d.sum32_5;
var ft_1 = shaCommon$1.ft_1;
var BlockHash$3 = common$3.BlockHash;
var sha1_K = [
  1518500249,
  1859775393,
  2400959708,
  3395469782
];
function SHA1() {
  if (!(this instanceof SHA1))
    return new SHA1();
  BlockHash$3.call(this);
  this.h = [
    1732584193,
    4023233417,
    2562383102,
    271733878,
    3285377520
  ];
  this.W = new Array(80);
}
utils$d.inherits(SHA1, BlockHash$3);
var _1 = SHA1;
SHA1.blockSize = 512;
SHA1.outSize = 160;
SHA1.hmacStrength = 80;
SHA1.padLength = 64;
SHA1.prototype._update = function _update(msg, start) {
  var W2 = this.W;
  for (var i3 = 0; i3 < 16; i3++)
    W2[i3] = msg[start + i3];
  for (; i3 < W2.length; i3++)
    W2[i3] = rotl32$1(W2[i3 - 3] ^ W2[i3 - 8] ^ W2[i3 - 14] ^ W2[i3 - 16], 1);
  var a2 = this.h[0];
  var b2 = this.h[1];
  var c2 = this.h[2];
  var d4 = this.h[3];
  var e2 = this.h[4];
  for (i3 = 0; i3 < W2.length; i3++) {
    var s2 = ~~(i3 / 20);
    var t = sum32_5$1(rotl32$1(a2, 5), ft_1(s2, b2, c2, d4), e2, W2[i3], sha1_K[s2]);
    e2 = d4;
    d4 = c2;
    c2 = rotl32$1(b2, 30);
    b2 = a2;
    a2 = t;
  }
  this.h[0] = sum32$2(this.h[0], a2);
  this.h[1] = sum32$2(this.h[1], b2);
  this.h[2] = sum32$2(this.h[2], c2);
  this.h[3] = sum32$2(this.h[3], d4);
  this.h[4] = sum32$2(this.h[4], e2);
};
SHA1.prototype._digest = function digest2(enc) {
  if (enc === "hex")
    return utils$d.toHex32(this.h, "big");
  else
    return utils$d.split32(this.h, "big");
};
var utils$c = utils$g;
var common$2 = common$5;
var shaCommon = common$4;
var assert$9 = minimalisticAssert;
var sum32$1 = utils$c.sum32;
var sum32_4$1 = utils$c.sum32_4;
var sum32_5 = utils$c.sum32_5;
var ch32 = shaCommon.ch32;
var maj32 = shaCommon.maj32;
var s0_256 = shaCommon.s0_256;
var s1_256 = shaCommon.s1_256;
var g0_256 = shaCommon.g0_256;
var g1_256 = shaCommon.g1_256;
var BlockHash$2 = common$2.BlockHash;
var sha256_K = [
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
];
function SHA256$1() {
  if (!(this instanceof SHA256$1))
    return new SHA256$1();
  BlockHash$2.call(this);
  this.h = [
    1779033703,
    3144134277,
    1013904242,
    2773480762,
    1359893119,
    2600822924,
    528734635,
    1541459225
  ];
  this.k = sha256_K;
  this.W = new Array(64);
}
utils$c.inherits(SHA256$1, BlockHash$2);
var _256 = SHA256$1;
SHA256$1.blockSize = 512;
SHA256$1.outSize = 256;
SHA256$1.hmacStrength = 192;
SHA256$1.padLength = 64;
SHA256$1.prototype._update = function _update2(msg, start) {
  var W2 = this.W;
  for (var i3 = 0; i3 < 16; i3++)
    W2[i3] = msg[start + i3];
  for (; i3 < W2.length; i3++)
    W2[i3] = sum32_4$1(g1_256(W2[i3 - 2]), W2[i3 - 7], g0_256(W2[i3 - 15]), W2[i3 - 16]);
  var a2 = this.h[0];
  var b2 = this.h[1];
  var c2 = this.h[2];
  var d4 = this.h[3];
  var e2 = this.h[4];
  var f5 = this.h[5];
  var g2 = this.h[6];
  var h4 = this.h[7];
  assert$9(this.k.length === W2.length);
  for (i3 = 0; i3 < W2.length; i3++) {
    var T1 = sum32_5(h4, s1_256(e2), ch32(e2, f5, g2), this.k[i3], W2[i3]);
    var T2 = sum32$1(s0_256(a2), maj32(a2, b2, c2));
    h4 = g2;
    g2 = f5;
    f5 = e2;
    e2 = sum32$1(d4, T1);
    d4 = c2;
    c2 = b2;
    b2 = a2;
    a2 = sum32$1(T1, T2);
  }
  this.h[0] = sum32$1(this.h[0], a2);
  this.h[1] = sum32$1(this.h[1], b2);
  this.h[2] = sum32$1(this.h[2], c2);
  this.h[3] = sum32$1(this.h[3], d4);
  this.h[4] = sum32$1(this.h[4], e2);
  this.h[5] = sum32$1(this.h[5], f5);
  this.h[6] = sum32$1(this.h[6], g2);
  this.h[7] = sum32$1(this.h[7], h4);
};
SHA256$1.prototype._digest = function digest3(enc) {
  if (enc === "hex")
    return utils$c.toHex32(this.h, "big");
  else
    return utils$c.split32(this.h, "big");
};
var utils$b = utils$g;
var SHA256 = _256;
function SHA224() {
  if (!(this instanceof SHA224))
    return new SHA224();
  SHA256.call(this);
  this.h = [
    3238371032,
    914150663,
    812702999,
    4144912697,
    4290775857,
    1750603025,
    1694076839,
    3204075428
  ];
}
utils$b.inherits(SHA224, SHA256);
var _224 = SHA224;
SHA224.blockSize = 512;
SHA224.outSize = 224;
SHA224.hmacStrength = 192;
SHA224.padLength = 64;
SHA224.prototype._digest = function digest4(enc) {
  if (enc === "hex")
    return utils$b.toHex32(this.h.slice(0, 7), "big");
  else
    return utils$b.split32(this.h.slice(0, 7), "big");
};
var utils$a = utils$g;
var common$1 = common$5;
var assert$8 = minimalisticAssert;
var rotr64_hi = utils$a.rotr64_hi;
var rotr64_lo = utils$a.rotr64_lo;
var shr64_hi = utils$a.shr64_hi;
var shr64_lo = utils$a.shr64_lo;
var sum64 = utils$a.sum64;
var sum64_hi = utils$a.sum64_hi;
var sum64_lo = utils$a.sum64_lo;
var sum64_4_hi = utils$a.sum64_4_hi;
var sum64_4_lo = utils$a.sum64_4_lo;
var sum64_5_hi = utils$a.sum64_5_hi;
var sum64_5_lo = utils$a.sum64_5_lo;
var BlockHash$1 = common$1.BlockHash;
var sha512_K = [
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
];
function SHA512$1() {
  if (!(this instanceof SHA512$1))
    return new SHA512$1();
  BlockHash$1.call(this);
  this.h = [
    1779033703,
    4089235720,
    3144134277,
    2227873595,
    1013904242,
    4271175723,
    2773480762,
    1595750129,
    1359893119,
    2917565137,
    2600822924,
    725511199,
    528734635,
    4215389547,
    1541459225,
    327033209
  ];
  this.k = sha512_K;
  this.W = new Array(160);
}
utils$a.inherits(SHA512$1, BlockHash$1);
var _512 = SHA512$1;
SHA512$1.blockSize = 1024;
SHA512$1.outSize = 512;
SHA512$1.hmacStrength = 192;
SHA512$1.padLength = 128;
SHA512$1.prototype._prepareBlock = function _prepareBlock(msg, start) {
  var W2 = this.W;
  for (var i3 = 0; i3 < 32; i3++)
    W2[i3] = msg[start + i3];
  for (; i3 < W2.length; i3 += 2) {
    var c0_hi = g1_512_hi(W2[i3 - 4], W2[i3 - 3]);
    var c0_lo = g1_512_lo(W2[i3 - 4], W2[i3 - 3]);
    var c1_hi = W2[i3 - 14];
    var c1_lo = W2[i3 - 13];
    var c2_hi = g0_512_hi(W2[i3 - 30], W2[i3 - 29]);
    var c2_lo = g0_512_lo(W2[i3 - 30], W2[i3 - 29]);
    var c3_hi = W2[i3 - 32];
    var c3_lo = W2[i3 - 31];
    W2[i3] = sum64_4_hi(
      c0_hi,
      c0_lo,
      c1_hi,
      c1_lo,
      c2_hi,
      c2_lo,
      c3_hi,
      c3_lo
    );
    W2[i3 + 1] = sum64_4_lo(
      c0_hi,
      c0_lo,
      c1_hi,
      c1_lo,
      c2_hi,
      c2_lo,
      c3_hi,
      c3_lo
    );
  }
};
SHA512$1.prototype._update = function _update3(msg, start) {
  this._prepareBlock(msg, start);
  var W2 = this.W;
  var ah2 = this.h[0];
  var al = this.h[1];
  var bh = this.h[2];
  var bl = this.h[3];
  var ch = this.h[4];
  var cl = this.h[5];
  var dh = this.h[6];
  var dl = this.h[7];
  var eh2 = this.h[8];
  var el = this.h[9];
  var fh = this.h[10];
  var fl = this.h[11];
  var gh = this.h[12];
  var gl = this.h[13];
  var hh = this.h[14];
  var hl = this.h[15];
  assert$8(this.k.length === W2.length);
  for (var i3 = 0; i3 < W2.length; i3 += 2) {
    var c0_hi = hh;
    var c0_lo = hl;
    var c1_hi = s1_512_hi(eh2, el);
    var c1_lo = s1_512_lo(eh2, el);
    var c2_hi = ch64_hi(eh2, el, fh, fl, gh);
    var c2_lo = ch64_lo(eh2, el, fh, fl, gh, gl);
    var c3_hi = this.k[i3];
    var c3_lo = this.k[i3 + 1];
    var c4_hi = W2[i3];
    var c4_lo = W2[i3 + 1];
    var T1_hi = sum64_5_hi(
      c0_hi,
      c0_lo,
      c1_hi,
      c1_lo,
      c2_hi,
      c2_lo,
      c3_hi,
      c3_lo,
      c4_hi,
      c4_lo
    );
    var T1_lo = sum64_5_lo(
      c0_hi,
      c0_lo,
      c1_hi,
      c1_lo,
      c2_hi,
      c2_lo,
      c3_hi,
      c3_lo,
      c4_hi,
      c4_lo
    );
    c0_hi = s0_512_hi(ah2, al);
    c0_lo = s0_512_lo(ah2, al);
    c1_hi = maj64_hi(ah2, al, bh, bl, ch);
    c1_lo = maj64_lo(ah2, al, bh, bl, ch, cl);
    var T2_hi = sum64_hi(c0_hi, c0_lo, c1_hi, c1_lo);
    var T2_lo = sum64_lo(c0_hi, c0_lo, c1_hi, c1_lo);
    hh = gh;
    hl = gl;
    gh = fh;
    gl = fl;
    fh = eh2;
    fl = el;
    eh2 = sum64_hi(dh, dl, T1_hi, T1_lo);
    el = sum64_lo(dl, dl, T1_hi, T1_lo);
    dh = ch;
    dl = cl;
    ch = bh;
    cl = bl;
    bh = ah2;
    bl = al;
    ah2 = sum64_hi(T1_hi, T1_lo, T2_hi, T2_lo);
    al = sum64_lo(T1_hi, T1_lo, T2_hi, T2_lo);
  }
  sum64(this.h, 0, ah2, al);
  sum64(this.h, 2, bh, bl);
  sum64(this.h, 4, ch, cl);
  sum64(this.h, 6, dh, dl);
  sum64(this.h, 8, eh2, el);
  sum64(this.h, 10, fh, fl);
  sum64(this.h, 12, gh, gl);
  sum64(this.h, 14, hh, hl);
};
SHA512$1.prototype._digest = function digest5(enc) {
  if (enc === "hex")
    return utils$a.toHex32(this.h, "big");
  else
    return utils$a.split32(this.h, "big");
};
function ch64_hi(xh, xl, yh, yl, zh) {
  var r2 = xh & yh ^ ~xh & zh;
  if (r2 < 0)
    r2 += 4294967296;
  return r2;
}
function ch64_lo(xh, xl, yh, yl, zh, zl) {
  var r2 = xl & yl ^ ~xl & zl;
  if (r2 < 0)
    r2 += 4294967296;
  return r2;
}
function maj64_hi(xh, xl, yh, yl, zh) {
  var r2 = xh & yh ^ xh & zh ^ yh & zh;
  if (r2 < 0)
    r2 += 4294967296;
  return r2;
}
function maj64_lo(xh, xl, yh, yl, zh, zl) {
  var r2 = xl & yl ^ xl & zl ^ yl & zl;
  if (r2 < 0)
    r2 += 4294967296;
  return r2;
}
function s0_512_hi(xh, xl) {
  var c0_hi = rotr64_hi(xh, xl, 28);
  var c1_hi = rotr64_hi(xl, xh, 2);
  var c2_hi = rotr64_hi(xl, xh, 7);
  var r2 = c0_hi ^ c1_hi ^ c2_hi;
  if (r2 < 0)
    r2 += 4294967296;
  return r2;
}
function s0_512_lo(xh, xl) {
  var c0_lo = rotr64_lo(xh, xl, 28);
  var c1_lo = rotr64_lo(xl, xh, 2);
  var c2_lo = rotr64_lo(xl, xh, 7);
  var r2 = c0_lo ^ c1_lo ^ c2_lo;
  if (r2 < 0)
    r2 += 4294967296;
  return r2;
}
function s1_512_hi(xh, xl) {
  var c0_hi = rotr64_hi(xh, xl, 14);
  var c1_hi = rotr64_hi(xh, xl, 18);
  var c2_hi = rotr64_hi(xl, xh, 9);
  var r2 = c0_hi ^ c1_hi ^ c2_hi;
  if (r2 < 0)
    r2 += 4294967296;
  return r2;
}
function s1_512_lo(xh, xl) {
  var c0_lo = rotr64_lo(xh, xl, 14);
  var c1_lo = rotr64_lo(xh, xl, 18);
  var c2_lo = rotr64_lo(xl, xh, 9);
  var r2 = c0_lo ^ c1_lo ^ c2_lo;
  if (r2 < 0)
    r2 += 4294967296;
  return r2;
}
function g0_512_hi(xh, xl) {
  var c0_hi = rotr64_hi(xh, xl, 1);
  var c1_hi = rotr64_hi(xh, xl, 8);
  var c2_hi = shr64_hi(xh, xl, 7);
  var r2 = c0_hi ^ c1_hi ^ c2_hi;
  if (r2 < 0)
    r2 += 4294967296;
  return r2;
}
function g0_512_lo(xh, xl) {
  var c0_lo = rotr64_lo(xh, xl, 1);
  var c1_lo = rotr64_lo(xh, xl, 8);
  var c2_lo = shr64_lo(xh, xl, 7);
  var r2 = c0_lo ^ c1_lo ^ c2_lo;
  if (r2 < 0)
    r2 += 4294967296;
  return r2;
}
function g1_512_hi(xh, xl) {
  var c0_hi = rotr64_hi(xh, xl, 19);
  var c1_hi = rotr64_hi(xl, xh, 29);
  var c2_hi = shr64_hi(xh, xl, 6);
  var r2 = c0_hi ^ c1_hi ^ c2_hi;
  if (r2 < 0)
    r2 += 4294967296;
  return r2;
}
function g1_512_lo(xh, xl) {
  var c0_lo = rotr64_lo(xh, xl, 19);
  var c1_lo = rotr64_lo(xl, xh, 29);
  var c2_lo = shr64_lo(xh, xl, 6);
  var r2 = c0_lo ^ c1_lo ^ c2_lo;
  if (r2 < 0)
    r2 += 4294967296;
  return r2;
}
var utils$9 = utils$g;
var SHA512 = _512;
function SHA384() {
  if (!(this instanceof SHA384))
    return new SHA384();
  SHA512.call(this);
  this.h = [
    3418070365,
    3238371032,
    1654270250,
    914150663,
    2438529370,
    812702999,
    355462360,
    4144912697,
    1731405415,
    4290775857,
    2394180231,
    1750603025,
    3675008525,
    1694076839,
    1203062813,
    3204075428
  ];
}
utils$9.inherits(SHA384, SHA512);
var _384 = SHA384;
SHA384.blockSize = 1024;
SHA384.outSize = 384;
SHA384.hmacStrength = 192;
SHA384.padLength = 128;
SHA384.prototype._digest = function digest6(enc) {
  if (enc === "hex")
    return utils$9.toHex32(this.h.slice(0, 12), "big");
  else
    return utils$9.split32(this.h.slice(0, 12), "big");
};
sha.sha1 = _1;
sha.sha224 = _224;
sha.sha256 = _256;
sha.sha384 = _384;
sha.sha512 = _512;
var ripemd = {};
var utils$8 = utils$g;
var common = common$5;
var rotl32 = utils$8.rotl32;
var sum32 = utils$8.sum32;
var sum32_3 = utils$8.sum32_3;
var sum32_4 = utils$8.sum32_4;
var BlockHash = common.BlockHash;
function RIPEMD160() {
  if (!(this instanceof RIPEMD160))
    return new RIPEMD160();
  BlockHash.call(this);
  this.h = [1732584193, 4023233417, 2562383102, 271733878, 3285377520];
  this.endian = "little";
}
utils$8.inherits(RIPEMD160, BlockHash);
ripemd.ripemd160 = RIPEMD160;
RIPEMD160.blockSize = 512;
RIPEMD160.outSize = 160;
RIPEMD160.hmacStrength = 192;
RIPEMD160.padLength = 64;
RIPEMD160.prototype._update = function update2(msg, start) {
  var A2 = this.h[0];
  var B3 = this.h[1];
  var C2 = this.h[2];
  var D2 = this.h[3];
  var E2 = this.h[4];
  var Ah = A2;
  var Bh = B3;
  var Ch = C2;
  var Dh = D2;
  var Eh = E2;
  for (var j2 = 0; j2 < 80; j2++) {
    var T2 = sum32(
      rotl32(
        sum32_4(A2, f$6(j2, B3, C2, D2), msg[r$2[j2] + start], K$2(j2)),
        s$1[j2]
      ),
      E2
    );
    A2 = E2;
    E2 = D2;
    D2 = rotl32(C2, 10);
    C2 = B3;
    B3 = T2;
    T2 = sum32(
      rotl32(
        sum32_4(Ah, f$6(79 - j2, Bh, Ch, Dh), msg[rh$1[j2] + start], Kh(j2)),
        sh$1[j2]
      ),
      Eh
    );
    Ah = Eh;
    Eh = Dh;
    Dh = rotl32(Ch, 10);
    Ch = Bh;
    Bh = T2;
  }
  T2 = sum32_3(this.h[1], C2, Dh);
  this.h[1] = sum32_3(this.h[2], D2, Eh);
  this.h[2] = sum32_3(this.h[3], E2, Ah);
  this.h[3] = sum32_3(this.h[4], A2, Bh);
  this.h[4] = sum32_3(this.h[0], B3, Ch);
  this.h[0] = T2;
};
RIPEMD160.prototype._digest = function digest7(enc) {
  if (enc === "hex")
    return utils$8.toHex32(this.h, "little");
  else
    return utils$8.split32(this.h, "little");
};
function f$6(j2, x2, y3, z2) {
  if (j2 <= 15)
    return x2 ^ y3 ^ z2;
  else if (j2 <= 31)
    return x2 & y3 | ~x2 & z2;
  else if (j2 <= 47)
    return (x2 | ~y3) ^ z2;
  else if (j2 <= 63)
    return x2 & z2 | y3 & ~z2;
  else
    return x2 ^ (y3 | ~z2);
}
function K$2(j2) {
  if (j2 <= 15)
    return 0;
  else if (j2 <= 31)
    return 1518500249;
  else if (j2 <= 47)
    return 1859775393;
  else if (j2 <= 63)
    return 2400959708;
  else
    return 2840853838;
}
function Kh(j2) {
  if (j2 <= 15)
    return 1352829926;
  else if (j2 <= 31)
    return 1548603684;
  else if (j2 <= 47)
    return 1836072691;
  else if (j2 <= 63)
    return 2053994217;
  else
    return 0;
}
var r$2 = [
  0,
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
  10,
  11,
  12,
  13,
  14,
  15,
  7,
  4,
  13,
  1,
  10,
  6,
  15,
  3,
  12,
  0,
  9,
  5,
  2,
  14,
  11,
  8,
  3,
  10,
  14,
  4,
  9,
  15,
  8,
  1,
  2,
  7,
  0,
  6,
  13,
  11,
  5,
  12,
  1,
  9,
  11,
  10,
  0,
  8,
  12,
  4,
  13,
  3,
  7,
  15,
  14,
  5,
  6,
  2,
  4,
  0,
  5,
  9,
  7,
  12,
  2,
  10,
  14,
  1,
  3,
  8,
  11,
  6,
  15,
  13
];
var rh$1 = [
  5,
  14,
  7,
  0,
  9,
  2,
  11,
  4,
  13,
  6,
  15,
  8,
  1,
  10,
  3,
  12,
  6,
  11,
  3,
  7,
  0,
  13,
  5,
  10,
  14,
  15,
  8,
  12,
  4,
  9,
  1,
  2,
  15,
  5,
  1,
  3,
  7,
  14,
  6,
  9,
  11,
  8,
  12,
  2,
  10,
  0,
  4,
  13,
  8,
  6,
  4,
  1,
  3,
  11,
  15,
  0,
  5,
  12,
  2,
  13,
  9,
  7,
  10,
  14,
  12,
  15,
  10,
  4,
  1,
  5,
  8,
  7,
  6,
  2,
  13,
  14,
  0,
  3,
  9,
  11
];
var s$1 = [
  11,
  14,
  15,
  12,
  5,
  8,
  7,
  9,
  11,
  13,
  14,
  15,
  6,
  7,
  9,
  8,
  7,
  6,
  8,
  13,
  11,
  9,
  7,
  15,
  7,
  12,
  15,
  9,
  11,
  7,
  13,
  12,
  11,
  13,
  6,
  7,
  14,
  9,
  13,
  15,
  14,
  8,
  13,
  6,
  5,
  12,
  7,
  5,
  11,
  12,
  14,
  15,
  14,
  15,
  9,
  8,
  9,
  14,
  5,
  6,
  8,
  6,
  5,
  12,
  9,
  15,
  5,
  11,
  6,
  8,
  13,
  12,
  5,
  12,
  13,
  14,
  11,
  8,
  5,
  6
];
var sh$1 = [
  8,
  9,
  9,
  11,
  13,
  15,
  15,
  5,
  7,
  7,
  8,
  11,
  14,
  14,
  12,
  6,
  9,
  13,
  15,
  7,
  12,
  8,
  9,
  11,
  7,
  7,
  12,
  7,
  6,
  15,
  13,
  11,
  9,
  7,
  15,
  11,
  8,
  6,
  6,
  14,
  12,
  13,
  5,
  14,
  13,
  13,
  7,
  5,
  15,
  5,
  8,
  11,
  14,
  14,
  6,
  14,
  6,
  9,
  12,
  9,
  12,
  5,
  15,
  8,
  8,
  5,
  12,
  9,
  12,
  5,
  14,
  6,
  8,
  13,
  6,
  5,
  15,
  13,
  11,
  11
];
var utils$7 = utils$g;
var assert$7 = minimalisticAssert;
function Hmac(hash3, key2, enc) {
  if (!(this instanceof Hmac))
    return new Hmac(hash3, key2, enc);
  this.Hash = hash3;
  this.blockSize = hash3.blockSize / 8;
  this.outSize = hash3.outSize / 8;
  this.inner = null;
  this.outer = null;
  this._init(utils$7.toArray(key2, enc));
}
var hmac = Hmac;
Hmac.prototype._init = function init(key2) {
  if (key2.length > this.blockSize)
    key2 = new this.Hash().update(key2).digest();
  assert$7(key2.length <= this.blockSize);
  for (var i3 = key2.length; i3 < this.blockSize; i3++)
    key2.push(0);
  for (i3 = 0; i3 < key2.length; i3++)
    key2[i3] ^= 54;
  this.inner = new this.Hash().update(key2);
  for (i3 = 0; i3 < key2.length; i3++)
    key2[i3] ^= 106;
  this.outer = new this.Hash().update(key2);
};
Hmac.prototype.update = function update3(msg, enc) {
  this.inner.update(msg, enc);
  return this;
};
Hmac.prototype.digest = function digest8(enc) {
  this.outer.update(this.inner.digest());
  return this.outer.digest(enc);
};
(function(exports) {
  var hash3 = exports;
  hash3.utils = utils$g;
  hash3.common = common$5;
  hash3.sha = sha;
  hash3.ripemd = ripemd;
  hash3.hmac = hmac;
  hash3.sha1 = hash3.sha.sha1;
  hash3.sha256 = hash3.sha.sha256;
  hash3.sha224 = hash3.sha.sha224;
  hash3.sha384 = hash3.sha.sha384;
  hash3.sha512 = hash3.sha.sha512;
  hash3.ripemd160 = hash3.ripemd.ripemd160;
})(hash$2);
var secp256k1;
var hasRequiredSecp256k1;
function requireSecp256k1() {
  if (hasRequiredSecp256k1) return secp256k1;
  hasRequiredSecp256k1 = 1;
  secp256k1 = {
    doubles: {
      step: 4,
      points: [
        [
          "e60fce93b59e9ec53011aabc21c23e97b2a31369b87a5ae9c44ee89e2a6dec0a",
          "f7e3507399e595929db99f34f57937101296891e44d23f0be1f32cce69616821"
        ],
        [
          "8282263212c609d9ea2a6e3e172de238d8c39cabd5ac1ca10646e23fd5f51508",
          "11f8a8098557dfe45e8256e830b60ace62d613ac2f7b17bed31b6eaff6e26caf"
        ],
        [
          "175e159f728b865a72f99cc6c6fc846de0b93833fd2222ed73fce5b551e5b739",
          "d3506e0d9e3c79eba4ef97a51ff71f5eacb5955add24345c6efa6ffee9fed695"
        ],
        [
          "363d90d447b00c9c99ceac05b6262ee053441c7e55552ffe526bad8f83ff4640",
          "4e273adfc732221953b445397f3363145b9a89008199ecb62003c7f3bee9de9"
        ],
        [
          "8b4b5f165df3c2be8c6244b5b745638843e4a781a15bcd1b69f79a55dffdf80c",
          "4aad0a6f68d308b4b3fbd7813ab0da04f9e336546162ee56b3eff0c65fd4fd36"
        ],
        [
          "723cbaa6e5db996d6bf771c00bd548c7b700dbffa6c0e77bcb6115925232fcda",
          "96e867b5595cc498a921137488824d6e2660a0653779494801dc069d9eb39f5f"
        ],
        [
          "eebfa4d493bebf98ba5feec812c2d3b50947961237a919839a533eca0e7dd7fa",
          "5d9a8ca3970ef0f269ee7edaf178089d9ae4cdc3a711f712ddfd4fdae1de8999"
        ],
        [
          "100f44da696e71672791d0a09b7bde459f1215a29b3c03bfefd7835b39a48db0",
          "cdd9e13192a00b772ec8f3300c090666b7ff4a18ff5195ac0fbd5cd62bc65a09"
        ],
        [
          "e1031be262c7ed1b1dc9227a4a04c017a77f8d4464f3b3852c8acde6e534fd2d",
          "9d7061928940405e6bb6a4176597535af292dd419e1ced79a44f18f29456a00d"
        ],
        [
          "feea6cae46d55b530ac2839f143bd7ec5cf8b266a41d6af52d5e688d9094696d",
          "e57c6b6c97dce1bab06e4e12bf3ecd5c981c8957cc41442d3155debf18090088"
        ],
        [
          "da67a91d91049cdcb367be4be6ffca3cfeed657d808583de33fa978bc1ec6cb1",
          "9bacaa35481642bc41f463f7ec9780e5dec7adc508f740a17e9ea8e27a68be1d"
        ],
        [
          "53904faa0b334cdda6e000935ef22151ec08d0f7bb11069f57545ccc1a37b7c0",
          "5bc087d0bc80106d88c9eccac20d3c1c13999981e14434699dcb096b022771c8"
        ],
        [
          "8e7bcd0bd35983a7719cca7764ca906779b53a043a9b8bcaeff959f43ad86047",
          "10b7770b2a3da4b3940310420ca9514579e88e2e47fd68b3ea10047e8460372a"
        ],
        [
          "385eed34c1cdff21e6d0818689b81bde71a7f4f18397e6690a841e1599c43862",
          "283bebc3e8ea23f56701de19e9ebf4576b304eec2086dc8cc0458fe5542e5453"
        ],
        [
          "6f9d9b803ecf191637c73a4413dfa180fddf84a5947fbc9c606ed86c3fac3a7",
          "7c80c68e603059ba69b8e2a30e45c4d47ea4dd2f5c281002d86890603a842160"
        ],
        [
          "3322d401243c4e2582a2147c104d6ecbf774d163db0f5e5313b7e0e742d0e6bd",
          "56e70797e9664ef5bfb019bc4ddaf9b72805f63ea2873af624f3a2e96c28b2a0"
        ],
        [
          "85672c7d2de0b7da2bd1770d89665868741b3f9af7643397721d74d28134ab83",
          "7c481b9b5b43b2eb6374049bfa62c2e5e77f17fcc5298f44c8e3094f790313a6"
        ],
        [
          "948bf809b1988a46b06c9f1919413b10f9226c60f668832ffd959af60c82a0a",
          "53a562856dcb6646dc6b74c5d1c3418c6d4dff08c97cd2bed4cb7f88d8c8e589"
        ],
        [
          "6260ce7f461801c34f067ce0f02873a8f1b0e44dfc69752accecd819f38fd8e8",
          "bc2da82b6fa5b571a7f09049776a1ef7ecd292238051c198c1a84e95b2b4ae17"
        ],
        [
          "e5037de0afc1d8d43d8348414bbf4103043ec8f575bfdc432953cc8d2037fa2d",
          "4571534baa94d3b5f9f98d09fb990bddbd5f5b03ec481f10e0e5dc841d755bda"
        ],
        [
          "e06372b0f4a207adf5ea905e8f1771b4e7e8dbd1c6a6c5b725866a0ae4fce725",
          "7a908974bce18cfe12a27bb2ad5a488cd7484a7787104870b27034f94eee31dd"
        ],
        [
          "213c7a715cd5d45358d0bbf9dc0ce02204b10bdde2a3f58540ad6908d0559754",
          "4b6dad0b5ae462507013ad06245ba190bb4850f5f36a7eeddff2c27534b458f2"
        ],
        [
          "4e7c272a7af4b34e8dbb9352a5419a87e2838c70adc62cddf0cc3a3b08fbd53c",
          "17749c766c9d0b18e16fd09f6def681b530b9614bff7dd33e0b3941817dcaae6"
        ],
        [
          "fea74e3dbe778b1b10f238ad61686aa5c76e3db2be43057632427e2840fb27b6",
          "6e0568db9b0b13297cf674deccb6af93126b596b973f7b77701d3db7f23cb96f"
        ],
        [
          "76e64113f677cf0e10a2570d599968d31544e179b760432952c02a4417bdde39",
          "c90ddf8dee4e95cf577066d70681f0d35e2a33d2b56d2032b4b1752d1901ac01"
        ],
        [
          "c738c56b03b2abe1e8281baa743f8f9a8f7cc643df26cbee3ab150242bcbb891",
          "893fb578951ad2537f718f2eacbfbbbb82314eef7880cfe917e735d9699a84c3"
        ],
        [
          "d895626548b65b81e264c7637c972877d1d72e5f3a925014372e9f6588f6c14b",
          "febfaa38f2bc7eae728ec60818c340eb03428d632bb067e179363ed75d7d991f"
        ],
        [
          "b8da94032a957518eb0f6433571e8761ceffc73693e84edd49150a564f676e03",
          "2804dfa44805a1e4d7c99cc9762808b092cc584d95ff3b511488e4e74efdf6e7"
        ],
        [
          "e80fea14441fb33a7d8adab9475d7fab2019effb5156a792f1a11778e3c0df5d",
          "eed1de7f638e00771e89768ca3ca94472d155e80af322ea9fcb4291b6ac9ec78"
        ],
        [
          "a301697bdfcd704313ba48e51d567543f2a182031efd6915ddc07bbcc4e16070",
          "7370f91cfb67e4f5081809fa25d40f9b1735dbf7c0a11a130c0d1a041e177ea1"
        ],
        [
          "90ad85b389d6b936463f9d0512678de208cc330b11307fffab7ac63e3fb04ed4",
          "e507a3620a38261affdcbd9427222b839aefabe1582894d991d4d48cb6ef150"
        ],
        [
          "8f68b9d2f63b5f339239c1ad981f162ee88c5678723ea3351b7b444c9ec4c0da",
          "662a9f2dba063986de1d90c2b6be215dbbea2cfe95510bfdf23cbf79501fff82"
        ],
        [
          "e4f3fb0176af85d65ff99ff9198c36091f48e86503681e3e6686fd5053231e11",
          "1e63633ad0ef4f1c1661a6d0ea02b7286cc7e74ec951d1c9822c38576feb73bc"
        ],
        [
          "8c00fa9b18ebf331eb961537a45a4266c7034f2f0d4e1d0716fb6eae20eae29e",
          "efa47267fea521a1a9dc343a3736c974c2fadafa81e36c54e7d2a4c66702414b"
        ],
        [
          "e7a26ce69dd4829f3e10cec0a9e98ed3143d084f308b92c0997fddfc60cb3e41",
          "2a758e300fa7984b471b006a1aafbb18d0a6b2c0420e83e20e8a9421cf2cfd51"
        ],
        [
          "b6459e0ee3662ec8d23540c223bcbdc571cbcb967d79424f3cf29eb3de6b80ef",
          "67c876d06f3e06de1dadf16e5661db3c4b3ae6d48e35b2ff30bf0b61a71ba45"
        ],
        [
          "d68a80c8280bb840793234aa118f06231d6f1fc67e73c5a5deda0f5b496943e8",
          "db8ba9fff4b586d00c4b1f9177b0e28b5b0e7b8f7845295a294c84266b133120"
        ],
        [
          "324aed7df65c804252dc0270907a30b09612aeb973449cea4095980fc28d3d5d",
          "648a365774b61f2ff130c0c35aec1f4f19213b0c7e332843967224af96ab7c84"
        ],
        [
          "4df9c14919cde61f6d51dfdbe5fee5dceec4143ba8d1ca888e8bd373fd054c96",
          "35ec51092d8728050974c23a1d85d4b5d506cdc288490192ebac06cad10d5d"
        ],
        [
          "9c3919a84a474870faed8a9c1cc66021523489054d7f0308cbfc99c8ac1f98cd",
          "ddb84f0f4a4ddd57584f044bf260e641905326f76c64c8e6be7e5e03d4fc599d"
        ],
        [
          "6057170b1dd12fdf8de05f281d8e06bb91e1493a8b91d4cc5a21382120a959e5",
          "9a1af0b26a6a4807add9a2daf71df262465152bc3ee24c65e899be932385a2a8"
        ],
        [
          "a576df8e23a08411421439a4518da31880cef0fba7d4df12b1a6973eecb94266",
          "40a6bf20e76640b2c92b97afe58cd82c432e10a7f514d9f3ee8be11ae1b28ec8"
        ],
        [
          "7778a78c28dec3e30a05fe9629de8c38bb30d1f5cf9a3a208f763889be58ad71",
          "34626d9ab5a5b22ff7098e12f2ff580087b38411ff24ac563b513fc1fd9f43ac"
        ],
        [
          "928955ee637a84463729fd30e7afd2ed5f96274e5ad7e5cb09eda9c06d903ac",
          "c25621003d3f42a827b78a13093a95eeac3d26efa8a8d83fc5180e935bcd091f"
        ],
        [
          "85d0fef3ec6db109399064f3a0e3b2855645b4a907ad354527aae75163d82751",
          "1f03648413a38c0be29d496e582cf5663e8751e96877331582c237a24eb1f962"
        ],
        [
          "ff2b0dce97eece97c1c9b6041798b85dfdfb6d8882da20308f5404824526087e",
          "493d13fef524ba188af4c4dc54d07936c7b7ed6fb90e2ceb2c951e01f0c29907"
        ],
        [
          "827fbbe4b1e880ea9ed2b2e6301b212b57f1ee148cd6dd28780e5e2cf856e241",
          "c60f9c923c727b0b71bef2c67d1d12687ff7a63186903166d605b68baec293ec"
        ],
        [
          "eaa649f21f51bdbae7be4ae34ce6e5217a58fdce7f47f9aa7f3b58fa2120e2b3",
          "be3279ed5bbbb03ac69a80f89879aa5a01a6b965f13f7e59d47a5305ba5ad93d"
        ],
        [
          "e4a42d43c5cf169d9391df6decf42ee541b6d8f0c9a137401e23632dda34d24f",
          "4d9f92e716d1c73526fc99ccfb8ad34ce886eedfa8d8e4f13a7f7131deba9414"
        ],
        [
          "1ec80fef360cbdd954160fadab352b6b92b53576a88fea4947173b9d4300bf19",
          "aeefe93756b5340d2f3a4958a7abbf5e0146e77f6295a07b671cdc1cc107cefd"
        ],
        [
          "146a778c04670c2f91b00af4680dfa8bce3490717d58ba889ddb5928366642be",
          "b318e0ec3354028add669827f9d4b2870aaa971d2f7e5ed1d0b297483d83efd0"
        ],
        [
          "fa50c0f61d22e5f07e3acebb1aa07b128d0012209a28b9776d76a8793180eef9",
          "6b84c6922397eba9b72cd2872281a68a5e683293a57a213b38cd8d7d3f4f2811"
        ],
        [
          "da1d61d0ca721a11b1a5bf6b7d88e8421a288ab5d5bba5220e53d32b5f067ec2",
          "8157f55a7c99306c79c0766161c91e2966a73899d279b48a655fba0f1ad836f1"
        ],
        [
          "a8e282ff0c9706907215ff98e8fd416615311de0446f1e062a73b0610d064e13",
          "7f97355b8db81c09abfb7f3c5b2515888b679a3e50dd6bd6cef7c73111f4cc0c"
        ],
        [
          "174a53b9c9a285872d39e56e6913cab15d59b1fa512508c022f382de8319497c",
          "ccc9dc37abfc9c1657b4155f2c47f9e6646b3a1d8cb9854383da13ac079afa73"
        ],
        [
          "959396981943785c3d3e57edf5018cdbe039e730e4918b3d884fdff09475b7ba",
          "2e7e552888c331dd8ba0386a4b9cd6849c653f64c8709385e9b8abf87524f2fd"
        ],
        [
          "d2a63a50ae401e56d645a1153b109a8fcca0a43d561fba2dbb51340c9d82b151",
          "e82d86fb6443fcb7565aee58b2948220a70f750af484ca52d4142174dcf89405"
        ],
        [
          "64587e2335471eb890ee7896d7cfdc866bacbdbd3839317b3436f9b45617e073",
          "d99fcdd5bf6902e2ae96dd6447c299a185b90a39133aeab358299e5e9faf6589"
        ],
        [
          "8481bde0e4e4d885b3a546d3e549de042f0aa6cea250e7fd358d6c86dd45e458",
          "38ee7b8cba5404dd84a25bf39cecb2ca900a79c42b262e556d64b1b59779057e"
        ],
        [
          "13464a57a78102aa62b6979ae817f4637ffcfed3c4b1ce30bcd6303f6caf666b",
          "69be159004614580ef7e433453ccb0ca48f300a81d0942e13f495a907f6ecc27"
        ],
        [
          "bc4a9df5b713fe2e9aef430bcc1dc97a0cd9ccede2f28588cada3a0d2d83f366",
          "d3a81ca6e785c06383937adf4b798caa6e8a9fbfa547b16d758d666581f33c1"
        ],
        [
          "8c28a97bf8298bc0d23d8c749452a32e694b65e30a9472a3954ab30fe5324caa",
          "40a30463a3305193378fedf31f7cc0eb7ae784f0451cb9459e71dc73cbef9482"
        ],
        [
          "8ea9666139527a8c1dd94ce4f071fd23c8b350c5a4bb33748c4ba111faccae0",
          "620efabbc8ee2782e24e7c0cfb95c5d735b783be9cf0f8e955af34a30e62b945"
        ],
        [
          "dd3625faef5ba06074669716bbd3788d89bdde815959968092f76cc4eb9a9787",
          "7a188fa3520e30d461da2501045731ca941461982883395937f68d00c644a573"
        ],
        [
          "f710d79d9eb962297e4f6232b40e8f7feb2bc63814614d692c12de752408221e",
          "ea98e67232d3b3295d3b535532115ccac8612c721851617526ae47a9c77bfc82"
        ]
      ]
    },
    naf: {
      wnd: 7,
      points: [
        [
          "f9308a019258c31049344f85f89d5229b531c845836f99b08601f113bce036f9",
          "388f7b0f632de8140fe337e62a37f3566500a99934c2231b6cb9fd7584b8e672"
        ],
        [
          "2f8bde4d1a07209355b4a7250a5c5128e88b84bddc619ab7cba8d569b240efe4",
          "d8ac222636e5e3d6d4dba9dda6c9c426f788271bab0d6840dca87d3aa6ac62d6"
        ],
        [
          "5cbdf0646e5db4eaa398f365f2ea7a0e3d419b7e0330e39ce92bddedcac4f9bc",
          "6aebca40ba255960a3178d6d861a54dba813d0b813fde7b5a5082628087264da"
        ],
        [
          "acd484e2f0c7f65309ad178a9f559abde09796974c57e714c35f110dfc27ccbe",
          "cc338921b0a7d9fd64380971763b61e9add888a4375f8e0f05cc262ac64f9c37"
        ],
        [
          "774ae7f858a9411e5ef4246b70c65aac5649980be5c17891bbec17895da008cb",
          "d984a032eb6b5e190243dd56d7b7b365372db1e2dff9d6a8301d74c9c953c61b"
        ],
        [
          "f28773c2d975288bc7d1d205c3748651b075fbc6610e58cddeeddf8f19405aa8",
          "ab0902e8d880a89758212eb65cdaf473a1a06da521fa91f29b5cb52db03ed81"
        ],
        [
          "d7924d4f7d43ea965a465ae3095ff41131e5946f3c85f79e44adbcf8e27e080e",
          "581e2872a86c72a683842ec228cc6defea40af2bd896d3a5c504dc9ff6a26b58"
        ],
        [
          "defdea4cdb677750a420fee807eacf21eb9898ae79b9768766e4faa04a2d4a34",
          "4211ab0694635168e997b0ead2a93daeced1f4a04a95c0f6cfb199f69e56eb77"
        ],
        [
          "2b4ea0a797a443d293ef5cff444f4979f06acfebd7e86d277475656138385b6c",
          "85e89bc037945d93b343083b5a1c86131a01f60c50269763b570c854e5c09b7a"
        ],
        [
          "352bbf4a4cdd12564f93fa332ce333301d9ad40271f8107181340aef25be59d5",
          "321eb4075348f534d59c18259dda3e1f4a1b3b2e71b1039c67bd3d8bcf81998c"
        ],
        [
          "2fa2104d6b38d11b0230010559879124e42ab8dfeff5ff29dc9cdadd4ecacc3f",
          "2de1068295dd865b64569335bd5dd80181d70ecfc882648423ba76b532b7d67"
        ],
        [
          "9248279b09b4d68dab21a9b066edda83263c3d84e09572e269ca0cd7f5453714",
          "73016f7bf234aade5d1aa71bdea2b1ff3fc0de2a887912ffe54a32ce97cb3402"
        ],
        [
          "daed4f2be3a8bf278e70132fb0beb7522f570e144bf615c07e996d443dee8729",
          "a69dce4a7d6c98e8d4a1aca87ef8d7003f83c230f3afa726ab40e52290be1c55"
        ],
        [
          "c44d12c7065d812e8acf28d7cbb19f9011ecd9e9fdf281b0e6a3b5e87d22e7db",
          "2119a460ce326cdc76c45926c982fdac0e106e861edf61c5a039063f0e0e6482"
        ],
        [
          "6a245bf6dc698504c89a20cfded60853152b695336c28063b61c65cbd269e6b4",
          "e022cf42c2bd4a708b3f5126f16a24ad8b33ba48d0423b6efd5e6348100d8a82"
        ],
        [
          "1697ffa6fd9de627c077e3d2fe541084ce13300b0bec1146f95ae57f0d0bd6a5",
          "b9c398f186806f5d27561506e4557433a2cf15009e498ae7adee9d63d01b2396"
        ],
        [
          "605bdb019981718b986d0f07e834cb0d9deb8360ffb7f61df982345ef27a7479",
          "2972d2de4f8d20681a78d93ec96fe23c26bfae84fb14db43b01e1e9056b8c49"
        ],
        [
          "62d14dab4150bf497402fdc45a215e10dcb01c354959b10cfe31c7e9d87ff33d",
          "80fc06bd8cc5b01098088a1950eed0db01aa132967ab472235f5642483b25eaf"
        ],
        [
          "80c60ad0040f27dade5b4b06c408e56b2c50e9f56b9b8b425e555c2f86308b6f",
          "1c38303f1cc5c30f26e66bad7fe72f70a65eed4cbe7024eb1aa01f56430bd57a"
        ],
        [
          "7a9375ad6167ad54aa74c6348cc54d344cc5dc9487d847049d5eabb0fa03c8fb",
          "d0e3fa9eca8726909559e0d79269046bdc59ea10c70ce2b02d499ec224dc7f7"
        ],
        [
          "d528ecd9b696b54c907a9ed045447a79bb408ec39b68df504bb51f459bc3ffc9",
          "eecf41253136e5f99966f21881fd656ebc4345405c520dbc063465b521409933"
        ],
        [
          "49370a4b5f43412ea25f514e8ecdad05266115e4a7ecb1387231808f8b45963",
          "758f3f41afd6ed428b3081b0512fd62a54c3f3afbb5b6764b653052a12949c9a"
        ],
        [
          "77f230936ee88cbbd73df930d64702ef881d811e0e1498e2f1c13eb1fc345d74",
          "958ef42a7886b6400a08266e9ba1b37896c95330d97077cbbe8eb3c7671c60d6"
        ],
        [
          "f2dac991cc4ce4b9ea44887e5c7c0bce58c80074ab9d4dbaeb28531b7739f530",
          "e0dedc9b3b2f8dad4da1f32dec2531df9eb5fbeb0598e4fd1a117dba703a3c37"
        ],
        [
          "463b3d9f662621fb1b4be8fbbe2520125a216cdfc9dae3debcba4850c690d45b",
          "5ed430d78c296c3543114306dd8622d7c622e27c970a1de31cb377b01af7307e"
        ],
        [
          "f16f804244e46e2a09232d4aff3b59976b98fac14328a2d1a32496b49998f247",
          "cedabd9b82203f7e13d206fcdf4e33d92a6c53c26e5cce26d6579962c4e31df6"
        ],
        [
          "caf754272dc84563b0352b7a14311af55d245315ace27c65369e15f7151d41d1",
          "cb474660ef35f5f2a41b643fa5e460575f4fa9b7962232a5c32f908318a04476"
        ],
        [
          "2600ca4b282cb986f85d0f1709979d8b44a09c07cb86d7c124497bc86f082120",
          "4119b88753c15bd6a693b03fcddbb45d5ac6be74ab5f0ef44b0be9475a7e4b40"
        ],
        [
          "7635ca72d7e8432c338ec53cd12220bc01c48685e24f7dc8c602a7746998e435",
          "91b649609489d613d1d5e590f78e6d74ecfc061d57048bad9e76f302c5b9c61"
        ],
        [
          "754e3239f325570cdbbf4a87deee8a66b7f2b33479d468fbc1a50743bf56cc18",
          "673fb86e5bda30fb3cd0ed304ea49a023ee33d0197a695d0c5d98093c536683"
        ],
        [
          "e3e6bd1071a1e96aff57859c82d570f0330800661d1c952f9fe2694691d9b9e8",
          "59c9e0bba394e76f40c0aa58379a3cb6a5a2283993e90c4167002af4920e37f5"
        ],
        [
          "186b483d056a033826ae73d88f732985c4ccb1f32ba35f4b4cc47fdcf04aa6eb",
          "3b952d32c67cf77e2e17446e204180ab21fb8090895138b4a4a797f86e80888b"
        ],
        [
          "df9d70a6b9876ce544c98561f4be4f725442e6d2b737d9c91a8321724ce0963f",
          "55eb2dafd84d6ccd5f862b785dc39d4ab157222720ef9da217b8c45cf2ba2417"
        ],
        [
          "5edd5cc23c51e87a497ca815d5dce0f8ab52554f849ed8995de64c5f34ce7143",
          "efae9c8dbc14130661e8cec030c89ad0c13c66c0d17a2905cdc706ab7399a868"
        ],
        [
          "290798c2b6476830da12fe02287e9e777aa3fba1c355b17a722d362f84614fba",
          "e38da76dcd440621988d00bcf79af25d5b29c094db2a23146d003afd41943e7a"
        ],
        [
          "af3c423a95d9f5b3054754efa150ac39cd29552fe360257362dfdecef4053b45",
          "f98a3fd831eb2b749a93b0e6f35cfb40c8cd5aa667a15581bc2feded498fd9c6"
        ],
        [
          "766dbb24d134e745cccaa28c99bf274906bb66b26dcf98df8d2fed50d884249a",
          "744b1152eacbe5e38dcc887980da38b897584a65fa06cedd2c924f97cbac5996"
        ],
        [
          "59dbf46f8c94759ba21277c33784f41645f7b44f6c596a58ce92e666191abe3e",
          "c534ad44175fbc300f4ea6ce648309a042ce739a7919798cd85e216c4a307f6e"
        ],
        [
          "f13ada95103c4537305e691e74e9a4a8dd647e711a95e73cb62dc6018cfd87b8",
          "e13817b44ee14de663bf4bc808341f326949e21a6a75c2570778419bdaf5733d"
        ],
        [
          "7754b4fa0e8aced06d4167a2c59cca4cda1869c06ebadfb6488550015a88522c",
          "30e93e864e669d82224b967c3020b8fa8d1e4e350b6cbcc537a48b57841163a2"
        ],
        [
          "948dcadf5990e048aa3874d46abef9d701858f95de8041d2a6828c99e2262519",
          "e491a42537f6e597d5d28a3224b1bc25df9154efbd2ef1d2cbba2cae5347d57e"
        ],
        [
          "7962414450c76c1689c7b48f8202ec37fb224cf5ac0bfa1570328a8a3d7c77ab",
          "100b610ec4ffb4760d5c1fc133ef6f6b12507a051f04ac5760afa5b29db83437"
        ],
        [
          "3514087834964b54b15b160644d915485a16977225b8847bb0dd085137ec47ca",
          "ef0afbb2056205448e1652c48e8127fc6039e77c15c2378b7e7d15a0de293311"
        ],
        [
          "d3cc30ad6b483e4bc79ce2c9dd8bc54993e947eb8df787b442943d3f7b527eaf",
          "8b378a22d827278d89c5e9be8f9508ae3c2ad46290358630afb34db04eede0a4"
        ],
        [
          "1624d84780732860ce1c78fcbfefe08b2b29823db913f6493975ba0ff4847610",
          "68651cf9b6da903e0914448c6cd9d4ca896878f5282be4c8cc06e2a404078575"
        ],
        [
          "733ce80da955a8a26902c95633e62a985192474b5af207da6df7b4fd5fc61cd4",
          "f5435a2bd2badf7d485a4d8b8db9fcce3e1ef8e0201e4578c54673bc1dc5ea1d"
        ],
        [
          "15d9441254945064cf1a1c33bbd3b49f8966c5092171e699ef258dfab81c045c",
          "d56eb30b69463e7234f5137b73b84177434800bacebfc685fc37bbe9efe4070d"
        ],
        [
          "a1d0fcf2ec9de675b612136e5ce70d271c21417c9d2b8aaaac138599d0717940",
          "edd77f50bcb5a3cab2e90737309667f2641462a54070f3d519212d39c197a629"
        ],
        [
          "e22fbe15c0af8ccc5780c0735f84dbe9a790badee8245c06c7ca37331cb36980",
          "a855babad5cd60c88b430a69f53a1a7a38289154964799be43d06d77d31da06"
        ],
        [
          "311091dd9860e8e20ee13473c1155f5f69635e394704eaa74009452246cfa9b3",
          "66db656f87d1f04fffd1f04788c06830871ec5a64feee685bd80f0b1286d8374"
        ],
        [
          "34c1fd04d301be89b31c0442d3e6ac24883928b45a9340781867d4232ec2dbdf",
          "9414685e97b1b5954bd46f730174136d57f1ceeb487443dc5321857ba73abee"
        ],
        [
          "f219ea5d6b54701c1c14de5b557eb42a8d13f3abbcd08affcc2a5e6b049b8d63",
          "4cb95957e83d40b0f73af4544cccf6b1f4b08d3c07b27fb8d8c2962a400766d1"
        ],
        [
          "d7b8740f74a8fbaab1f683db8f45de26543a5490bca627087236912469a0b448",
          "fa77968128d9c92ee1010f337ad4717eff15db5ed3c049b3411e0315eaa4593b"
        ],
        [
          "32d31c222f8f6f0ef86f7c98d3a3335ead5bcd32abdd94289fe4d3091aa824bf",
          "5f3032f5892156e39ccd3d7915b9e1da2e6dac9e6f26e961118d14b8462e1661"
        ],
        [
          "7461f371914ab32671045a155d9831ea8793d77cd59592c4340f86cbc18347b5",
          "8ec0ba238b96bec0cbdddcae0aa442542eee1ff50c986ea6b39847b3cc092ff6"
        ],
        [
          "ee079adb1df1860074356a25aa38206a6d716b2c3e67453d287698bad7b2b2d6",
          "8dc2412aafe3be5c4c5f37e0ecc5f9f6a446989af04c4e25ebaac479ec1c8c1e"
        ],
        [
          "16ec93e447ec83f0467b18302ee620f7e65de331874c9dc72bfd8616ba9da6b5",
          "5e4631150e62fb40d0e8c2a7ca5804a39d58186a50e497139626778e25b0674d"
        ],
        [
          "eaa5f980c245f6f038978290afa70b6bd8855897f98b6aa485b96065d537bd99",
          "f65f5d3e292c2e0819a528391c994624d784869d7e6ea67fb18041024edc07dc"
        ],
        [
          "78c9407544ac132692ee1910a02439958ae04877151342ea96c4b6b35a49f51",
          "f3e0319169eb9b85d5404795539a5e68fa1fbd583c064d2462b675f194a3ddb4"
        ],
        [
          "494f4be219a1a77016dcd838431aea0001cdc8ae7a6fc688726578d9702857a5",
          "42242a969283a5f339ba7f075e36ba2af925ce30d767ed6e55f4b031880d562c"
        ],
        [
          "a598a8030da6d86c6bc7f2f5144ea549d28211ea58faa70ebf4c1e665c1fe9b5",
          "204b5d6f84822c307e4b4a7140737aec23fc63b65b35f86a10026dbd2d864e6b"
        ],
        [
          "c41916365abb2b5d09192f5f2dbeafec208f020f12570a184dbadc3e58595997",
          "4f14351d0087efa49d245b328984989d5caf9450f34bfc0ed16e96b58fa9913"
        ],
        [
          "841d6063a586fa475a724604da03bc5b92a2e0d2e0a36acfe4c73a5514742881",
          "73867f59c0659e81904f9a1c7543698e62562d6744c169ce7a36de01a8d6154"
        ],
        [
          "5e95bb399a6971d376026947f89bde2f282b33810928be4ded112ac4d70e20d5",
          "39f23f366809085beebfc71181313775a99c9aed7d8ba38b161384c746012865"
        ],
        [
          "36e4641a53948fd476c39f8a99fd974e5ec07564b5315d8bf99471bca0ef2f66",
          "d2424b1b1abe4eb8164227b085c9aa9456ea13493fd563e06fd51cf5694c78fc"
        ],
        [
          "336581ea7bfbbb290c191a2f507a41cf5643842170e914faeab27c2c579f726",
          "ead12168595fe1be99252129b6e56b3391f7ab1410cd1e0ef3dcdcabd2fda224"
        ],
        [
          "8ab89816dadfd6b6a1f2634fcf00ec8403781025ed6890c4849742706bd43ede",
          "6fdcef09f2f6d0a044e654aef624136f503d459c3e89845858a47a9129cdd24e"
        ],
        [
          "1e33f1a746c9c5778133344d9299fcaa20b0938e8acff2544bb40284b8c5fb94",
          "60660257dd11b3aa9c8ed618d24edff2306d320f1d03010e33a7d2057f3b3b6"
        ],
        [
          "85b7c1dcb3cec1b7ee7f30ded79dd20a0ed1f4cc18cbcfcfa410361fd8f08f31",
          "3d98a9cdd026dd43f39048f25a8847f4fcafad1895d7a633c6fed3c35e999511"
        ],
        [
          "29df9fbd8d9e46509275f4b125d6d45d7fbe9a3b878a7af872a2800661ac5f51",
          "b4c4fe99c775a606e2d8862179139ffda61dc861c019e55cd2876eb2a27d84b"
        ],
        [
          "a0b1cae06b0a847a3fea6e671aaf8adfdfe58ca2f768105c8082b2e449fce252",
          "ae434102edde0958ec4b19d917a6a28e6b72da1834aff0e650f049503a296cf2"
        ],
        [
          "4e8ceafb9b3e9a136dc7ff67e840295b499dfb3b2133e4ba113f2e4c0e121e5",
          "cf2174118c8b6d7a4b48f6d534ce5c79422c086a63460502b827ce62a326683c"
        ],
        [
          "d24a44e047e19b6f5afb81c7ca2f69080a5076689a010919f42725c2b789a33b",
          "6fb8d5591b466f8fc63db50f1c0f1c69013f996887b8244d2cdec417afea8fa3"
        ],
        [
          "ea01606a7a6c9cdd249fdfcfacb99584001edd28abbab77b5104e98e8e3b35d4",
          "322af4908c7312b0cfbfe369f7a7b3cdb7d4494bc2823700cfd652188a3ea98d"
        ],
        [
          "af8addbf2b661c8a6c6328655eb96651252007d8c5ea31be4ad196de8ce2131f",
          "6749e67c029b85f52a034eafd096836b2520818680e26ac8f3dfbcdb71749700"
        ],
        [
          "e3ae1974566ca06cc516d47e0fb165a674a3dabcfca15e722f0e3450f45889",
          "2aeabe7e4531510116217f07bf4d07300de97e4874f81f533420a72eeb0bd6a4"
        ],
        [
          "591ee355313d99721cf6993ffed1e3e301993ff3ed258802075ea8ced397e246",
          "b0ea558a113c30bea60fc4775460c7901ff0b053d25ca2bdeee98f1a4be5d196"
        ],
        [
          "11396d55fda54c49f19aa97318d8da61fa8584e47b084945077cf03255b52984",
          "998c74a8cd45ac01289d5833a7beb4744ff536b01b257be4c5767bea93ea57a4"
        ],
        [
          "3c5d2a1ba39c5a1790000738c9e0c40b8dcdfd5468754b6405540157e017aa7a",
          "b2284279995a34e2f9d4de7396fc18b80f9b8b9fdd270f6661f79ca4c81bd257"
        ],
        [
          "cc8704b8a60a0defa3a99a7299f2e9c3fbc395afb04ac078425ef8a1793cc030",
          "bdd46039feed17881d1e0862db347f8cf395b74fc4bcdc4e940b74e3ac1f1b13"
        ],
        [
          "c533e4f7ea8555aacd9777ac5cad29b97dd4defccc53ee7ea204119b2889b197",
          "6f0a256bc5efdf429a2fb6242f1a43a2d9b925bb4a4b3a26bb8e0f45eb596096"
        ],
        [
          "c14f8f2ccb27d6f109f6d08d03cc96a69ba8c34eec07bbcf566d48e33da6593",
          "c359d6923bb398f7fd4473e16fe1c28475b740dd098075e6c0e8649113dc3a38"
        ],
        [
          "a6cbc3046bc6a450bac24789fa17115a4c9739ed75f8f21ce441f72e0b90e6ef",
          "21ae7f4680e889bb130619e2c0f95a360ceb573c70603139862afd617fa9b9f"
        ],
        [
          "347d6d9a02c48927ebfb86c1359b1caf130a3c0267d11ce6344b39f99d43cc38",
          "60ea7f61a353524d1c987f6ecec92f086d565ab687870cb12689ff1e31c74448"
        ],
        [
          "da6545d2181db8d983f7dcb375ef5866d47c67b1bf31c8cf855ef7437b72656a",
          "49b96715ab6878a79e78f07ce5680c5d6673051b4935bd897fea824b77dc208a"
        ],
        [
          "c40747cc9d012cb1a13b8148309c6de7ec25d6945d657146b9d5994b8feb1111",
          "5ca560753be2a12fc6de6caf2cb489565db936156b9514e1bb5e83037e0fa2d4"
        ],
        [
          "4e42c8ec82c99798ccf3a610be870e78338c7f713348bd34c8203ef4037f3502",
          "7571d74ee5e0fb92a7a8b33a07783341a5492144cc54bcc40a94473693606437"
        ],
        [
          "3775ab7089bc6af823aba2e1af70b236d251cadb0c86743287522a1b3b0dedea",
          "be52d107bcfa09d8bcb9736a828cfa7fac8db17bf7a76a2c42ad961409018cf7"
        ],
        [
          "cee31cbf7e34ec379d94fb814d3d775ad954595d1314ba8846959e3e82f74e26",
          "8fd64a14c06b589c26b947ae2bcf6bfa0149ef0be14ed4d80f448a01c43b1c6d"
        ],
        [
          "b4f9eaea09b6917619f6ea6a4eb5464efddb58fd45b1ebefcdc1a01d08b47986",
          "39e5c9925b5a54b07433a4f18c61726f8bb131c012ca542eb24a8ac07200682a"
        ],
        [
          "d4263dfc3d2df923a0179a48966d30ce84e2515afc3dccc1b77907792ebcc60e",
          "62dfaf07a0f78feb30e30d6295853ce189e127760ad6cf7fae164e122a208d54"
        ],
        [
          "48457524820fa65a4f8d35eb6930857c0032acc0a4a2de422233eeda897612c4",
          "25a748ab367979d98733c38a1fa1c2e7dc6cc07db2d60a9ae7a76aaa49bd0f77"
        ],
        [
          "dfeeef1881101f2cb11644f3a2afdfc2045e19919152923f367a1767c11cceda",
          "ecfb7056cf1de042f9420bab396793c0c390bde74b4bbdff16a83ae09a9a7517"
        ],
        [
          "6d7ef6b17543f8373c573f44e1f389835d89bcbc6062ced36c82df83b8fae859",
          "cd450ec335438986dfefa10c57fea9bcc521a0959b2d80bbf74b190dca712d10"
        ],
        [
          "e75605d59102a5a2684500d3b991f2e3f3c88b93225547035af25af66e04541f",
          "f5c54754a8f71ee540b9b48728473e314f729ac5308b06938360990e2bfad125"
        ],
        [
          "eb98660f4c4dfaa06a2be453d5020bc99a0c2e60abe388457dd43fefb1ed620c",
          "6cb9a8876d9cb8520609af3add26cd20a0a7cd8a9411131ce85f44100099223e"
        ],
        [
          "13e87b027d8514d35939f2e6892b19922154596941888336dc3563e3b8dba942",
          "fef5a3c68059a6dec5d624114bf1e91aac2b9da568d6abeb2570d55646b8adf1"
        ],
        [
          "ee163026e9fd6fe017c38f06a5be6fc125424b371ce2708e7bf4491691e5764a",
          "1acb250f255dd61c43d94ccc670d0f58f49ae3fa15b96623e5430da0ad6c62b2"
        ],
        [
          "b268f5ef9ad51e4d78de3a750c2dc89b1e626d43505867999932e5db33af3d80",
          "5f310d4b3c99b9ebb19f77d41c1dee018cf0d34fd4191614003e945a1216e423"
        ],
        [
          "ff07f3118a9df035e9fad85eb6c7bfe42b02f01ca99ceea3bf7ffdba93c4750d",
          "438136d603e858a3a5c440c38eccbaddc1d2942114e2eddd4740d098ced1f0d8"
        ],
        [
          "8d8b9855c7c052a34146fd20ffb658bea4b9f69e0d825ebec16e8c3ce2b526a1",
          "cdb559eedc2d79f926baf44fb84ea4d44bcf50fee51d7ceb30e2e7f463036758"
        ],
        [
          "52db0b5384dfbf05bfa9d472d7ae26dfe4b851ceca91b1eba54263180da32b63",
          "c3b997d050ee5d423ebaf66a6db9f57b3180c902875679de924b69d84a7b375"
        ],
        [
          "e62f9490d3d51da6395efd24e80919cc7d0f29c3f3fa48c6fff543becbd43352",
          "6d89ad7ba4876b0b22c2ca280c682862f342c8591f1daf5170e07bfd9ccafa7d"
        ],
        [
          "7f30ea2476b399b4957509c88f77d0191afa2ff5cb7b14fd6d8e7d65aaab1193",
          "ca5ef7d4b231c94c3b15389a5f6311e9daff7bb67b103e9880ef4bff637acaec"
        ],
        [
          "5098ff1e1d9f14fb46a210fada6c903fef0fb7b4a1dd1d9ac60a0361800b7a00",
          "9731141d81fc8f8084d37c6e7542006b3ee1b40d60dfe5362a5b132fd17ddc0"
        ],
        [
          "32b78c7de9ee512a72895be6b9cbefa6e2f3c4ccce445c96b9f2c81e2778ad58",
          "ee1849f513df71e32efc3896ee28260c73bb80547ae2275ba497237794c8753c"
        ],
        [
          "e2cb74fddc8e9fbcd076eef2a7c72b0ce37d50f08269dfc074b581550547a4f7",
          "d3aa2ed71c9dd2247a62df062736eb0baddea9e36122d2be8641abcb005cc4a4"
        ],
        [
          "8438447566d4d7bedadc299496ab357426009a35f235cb141be0d99cd10ae3a8",
          "c4e1020916980a4da5d01ac5e6ad330734ef0d7906631c4f2390426b2edd791f"
        ],
        [
          "4162d488b89402039b584c6fc6c308870587d9c46f660b878ab65c82c711d67e",
          "67163e903236289f776f22c25fb8a3afc1732f2b84b4e95dbda47ae5a0852649"
        ],
        [
          "3fad3fa84caf0f34f0f89bfd2dcf54fc175d767aec3e50684f3ba4a4bf5f683d",
          "cd1bc7cb6cc407bb2f0ca647c718a730cf71872e7d0d2a53fa20efcdfe61826"
        ],
        [
          "674f2600a3007a00568c1a7ce05d0816c1fb84bf1370798f1c69532faeb1a86b",
          "299d21f9413f33b3edf43b257004580b70db57da0b182259e09eecc69e0d38a5"
        ],
        [
          "d32f4da54ade74abb81b815ad1fb3b263d82d6c692714bcff87d29bd5ee9f08f",
          "f9429e738b8e53b968e99016c059707782e14f4535359d582fc416910b3eea87"
        ],
        [
          "30e4e670435385556e593657135845d36fbb6931f72b08cb1ed954f1e3ce3ff6",
          "462f9bce619898638499350113bbc9b10a878d35da70740dc695a559eb88db7b"
        ],
        [
          "be2062003c51cc3004682904330e4dee7f3dcd10b01e580bf1971b04d4cad297",
          "62188bc49d61e5428573d48a74e1c655b1c61090905682a0d5558ed72dccb9bc"
        ],
        [
          "93144423ace3451ed29e0fb9ac2af211cb6e84a601df5993c419859fff5df04a",
          "7c10dfb164c3425f5c71a3f9d7992038f1065224f72bb9d1d902a6d13037b47c"
        ],
        [
          "b015f8044f5fcbdcf21ca26d6c34fb8197829205c7b7d2a7cb66418c157b112c",
          "ab8c1e086d04e813744a655b2df8d5f83b3cdc6faa3088c1d3aea1454e3a1d5f"
        ],
        [
          "d5e9e1da649d97d89e4868117a465a3a4f8a18de57a140d36b3f2af341a21b52",
          "4cb04437f391ed73111a13cc1d4dd0db1693465c2240480d8955e8592f27447a"
        ],
        [
          "d3ae41047dd7ca065dbf8ed77b992439983005cd72e16d6f996a5316d36966bb",
          "bd1aeb21ad22ebb22a10f0303417c6d964f8cdd7df0aca614b10dc14d125ac46"
        ],
        [
          "463e2763d885f958fc66cdd22800f0a487197d0a82e377b49f80af87c897b065",
          "bfefacdb0e5d0fd7df3a311a94de062b26b80c61fbc97508b79992671ef7ca7f"
        ],
        [
          "7985fdfd127c0567c6f53ec1bb63ec3158e597c40bfe747c83cddfc910641917",
          "603c12daf3d9862ef2b25fe1de289aed24ed291e0ec6708703a5bd567f32ed03"
        ],
        [
          "74a1ad6b5f76e39db2dd249410eac7f99e74c59cb83d2d0ed5ff1543da7703e9",
          "cc6157ef18c9c63cd6193d83631bbea0093e0968942e8c33d5737fd790e0db08"
        ],
        [
          "30682a50703375f602d416664ba19b7fc9bab42c72747463a71d0896b22f6da3",
          "553e04f6b018b4fa6c8f39e7f311d3176290d0e0f19ca73f17714d9977a22ff8"
        ],
        [
          "9e2158f0d7c0d5f26c3791efefa79597654e7a2b2464f52b1ee6c1347769ef57",
          "712fcdd1b9053f09003a3481fa7762e9ffd7c8ef35a38509e2fbf2629008373"
        ],
        [
          "176e26989a43c9cfeba4029c202538c28172e566e3c4fce7322857f3be327d66",
          "ed8cc9d04b29eb877d270b4878dc43c19aefd31f4eee09ee7b47834c1fa4b1c3"
        ],
        [
          "75d46efea3771e6e68abb89a13ad747ecf1892393dfc4f1b7004788c50374da8",
          "9852390a99507679fd0b86fd2b39a868d7efc22151346e1a3ca4726586a6bed8"
        ],
        [
          "809a20c67d64900ffb698c4c825f6d5f2310fb0451c869345b7319f645605721",
          "9e994980d9917e22b76b061927fa04143d096ccc54963e6a5ebfa5f3f8e286c1"
        ],
        [
          "1b38903a43f7f114ed4500b4eac7083fdefece1cf29c63528d563446f972c180",
          "4036edc931a60ae889353f77fd53de4a2708b26b6f5da72ad3394119daf408f9"
        ]
      ]
    }
  };
  return secp256k1;
}
(function(exports) {
  var curves2 = exports;
  var hash3 = hash$2;
  var curve$1 = curve;
  var utils2 = utils$m;
  var assert2 = utils2.assert;
  function PresetCurve(options) {
    if (options.type === "short")
      this.curve = new curve$1.short(options);
    else if (options.type === "edwards")
      this.curve = new curve$1.edwards(options);
    else
      this.curve = new curve$1.mont(options);
    this.g = this.curve.g;
    this.n = this.curve.n;
    this.hash = options.hash;
    assert2(this.g.validate(), "Invalid curve");
    assert2(this.g.mul(this.n).isInfinity(), "Invalid curve, G*N != O");
  }
  curves2.PresetCurve = PresetCurve;
  function defineCurve(name2, options) {
    Object.defineProperty(curves2, name2, {
      configurable: true,
      enumerable: true,
      get: function() {
        var curve2 = new PresetCurve(options);
        Object.defineProperty(curves2, name2, {
          configurable: true,
          enumerable: true,
          value: curve2
        });
        return curve2;
      }
    });
  }
  defineCurve("p192", {
    type: "short",
    prime: "p192",
    p: "ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff",
    a: "ffffffff ffffffff ffffffff fffffffe ffffffff fffffffc",
    b: "64210519 e59c80e7 0fa7e9ab 72243049 feb8deec c146b9b1",
    n: "ffffffff ffffffff ffffffff 99def836 146bc9b1 b4d22831",
    hash: hash3.sha256,
    gRed: false,
    g: [
      "188da80e b03090f6 7cbf20eb 43a18800 f4ff0afd 82ff1012",
      "07192b95 ffc8da78 631011ed 6b24cdd5 73f977a1 1e794811"
    ]
  });
  defineCurve("p224", {
    type: "short",
    prime: "p224",
    p: "ffffffff ffffffff ffffffff ffffffff 00000000 00000000 00000001",
    a: "ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff fffffffe",
    b: "b4050a85 0c04b3ab f5413256 5044b0b7 d7bfd8ba 270b3943 2355ffb4",
    n: "ffffffff ffffffff ffffffff ffff16a2 e0b8f03e 13dd2945 5c5c2a3d",
    hash: hash3.sha256,
    gRed: false,
    g: [
      "b70e0cbd 6bb4bf7f 321390b9 4a03c1d3 56c21122 343280d6 115c1d21",
      "bd376388 b5f723fb 4c22dfe6 cd4375a0 5a074764 44d58199 85007e34"
    ]
  });
  defineCurve("p256", {
    type: "short",
    prime: null,
    p: "ffffffff 00000001 00000000 00000000 00000000 ffffffff ffffffff ffffffff",
    a: "ffffffff 00000001 00000000 00000000 00000000 ffffffff ffffffff fffffffc",
    b: "5ac635d8 aa3a93e7 b3ebbd55 769886bc 651d06b0 cc53b0f6 3bce3c3e 27d2604b",
    n: "ffffffff 00000000 ffffffff ffffffff bce6faad a7179e84 f3b9cac2 fc632551",
    hash: hash3.sha256,
    gRed: false,
    g: [
      "6b17d1f2 e12c4247 f8bce6e5 63a440f2 77037d81 2deb33a0 f4a13945 d898c296",
      "4fe342e2 fe1a7f9b 8ee7eb4a 7c0f9e16 2bce3357 6b315ece cbb64068 37bf51f5"
    ]
  });
  defineCurve("p384", {
    type: "short",
    prime: null,
    p: "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe ffffffff 00000000 00000000 ffffffff",
    a: "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe ffffffff 00000000 00000000 fffffffc",
    b: "b3312fa7 e23ee7e4 988e056b e3f82d19 181d9c6e fe814112 0314088f 5013875a c656398d 8a2ed19d 2a85c8ed d3ec2aef",
    n: "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff c7634d81 f4372ddf 581a0db2 48b0a77a ecec196a ccc52973",
    hash: hash3.sha384,
    gRed: false,
    g: [
      "aa87ca22 be8b0537 8eb1c71e f320ad74 6e1d3b62 8ba79b98 59f741e0 82542a38 5502f25d bf55296c 3a545e38 72760ab7",
      "3617de4a 96262c6f 5d9e98bf 9292dc29 f8f41dbd 289a147c e9da3113 b5f0b8c0 0a60b1ce 1d7e819d 7a431d7c 90ea0e5f"
    ]
  });
  defineCurve("p521", {
    type: "short",
    prime: null,
    p: "000001ff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff",
    a: "000001ff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffc",
    b: "00000051 953eb961 8e1c9a1f 929a21a0 b68540ee a2da725b 99b315f3 b8b48991 8ef109e1 56193951 ec7e937b 1652c0bd 3bb1bf07 3573df88 3d2c34f1 ef451fd4 6b503f00",
    n: "000001ff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffa 51868783 bf2f966b 7fcc0148 f709a5d0 3bb5c9b8 899c47ae bb6fb71e 91386409",
    hash: hash3.sha512,
    gRed: false,
    g: [
      "000000c6 858e06b7 0404e9cd 9e3ecb66 2395b442 9c648139 053fb521 f828af60 6b4d3dba a14b5e77 efe75928 fe1dc127 a2ffa8de 3348b3c1 856a429b f97e7e31 c2e5bd66",
      "00000118 39296a78 9a3bc004 5c8a5fb4 2c7d1bd9 98f54449 579b4468 17afbd17 273e662c 97ee7299 5ef42640 c550b901 3fad0761 353c7086 a272c240 88be9476 9fd16650"
    ]
  });
  defineCurve("curve25519", {
    type: "mont",
    prime: "p25519",
    p: "7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed",
    a: "76d06",
    b: "1",
    n: "1000000000000000 0000000000000000 14def9dea2f79cd6 5812631a5cf5d3ed",
    hash: hash3.sha256,
    gRed: false,
    g: [
      "9"
    ]
  });
  defineCurve("ed25519", {
    type: "edwards",
    prime: "p25519",
    p: "7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed",
    a: "-1",
    c: "1",
    // -121665 * (121666^(-1)) (mod P)
    d: "52036cee2b6ffe73 8cc740797779e898 00700a4d4141d8ab 75eb4dca135978a3",
    n: "1000000000000000 0000000000000000 14def9dea2f79cd6 5812631a5cf5d3ed",
    hash: hash3.sha256,
    gRed: false,
    g: [
      "216936d3cd6e53fec0a4e231fdd6dc5c692cc7609525a7b2c9562d608f25d51a",
      // 4/5
      "6666666666666666666666666666666666666666666666666666666666666658"
    ]
  });
  var pre;
  try {
    pre = requireSecp256k1();
  } catch (e2) {
    pre = void 0;
  }
  defineCurve("secp256k1", {
    type: "short",
    prime: "k256",
    p: "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe fffffc2f",
    a: "0",
    b: "7",
    n: "ffffffff ffffffff ffffffff fffffffe baaedce6 af48a03b bfd25e8c d0364141",
    h: "1",
    hash: hash3.sha256,
    // Precomputed endomorphism
    beta: "7ae96a2b657c07106e64479eac3434e99cf0497512f58995c1396c28719501ee",
    lambda: "5363ad4cc05c30e0a5261c028812645a122e22ea20816678df02967c1b23bd72",
    basis: [
      {
        a: "3086d221a7d46bcde86c90e49284eb15",
        b: "-e4437ed6010e88286f547fa90abfe4c3"
      },
      {
        a: "114ca50f7a8e2f3f657c1108d9d44cfd8",
        b: "3086d221a7d46bcde86c90e49284eb15"
      }
    ],
    gRed: false,
    g: [
      "79be667ef9dcbbac55a06295ce870b07029bfcdb2dce28d959f2815b16f81798",
      "483ada7726a3c4655da4fbfc0e1108a8fd17b448a68554199c47d08ffb10d4b8",
      pre
    ]
  });
})(curves$2);
var hash$1 = hash$2;
var utils$6 = utils$l;
var assert$6 = minimalisticAssert;
function HmacDRBG$1(options) {
  if (!(this instanceof HmacDRBG$1))
    return new HmacDRBG$1(options);
  this.hash = options.hash;
  this.predResist = !!options.predResist;
  this.outLen = this.hash.outSize;
  this.minEntropy = options.minEntropy || this.hash.hmacStrength;
  this._reseed = null;
  this.reseedInterval = null;
  this.K = null;
  this.V = null;
  var entropy = utils$6.toArray(options.entropy, options.entropyEnc || "hex");
  var nonce = utils$6.toArray(options.nonce, options.nonceEnc || "hex");
  var pers = utils$6.toArray(options.pers, options.persEnc || "hex");
  assert$6(
    entropy.length >= this.minEntropy / 8,
    "Not enough entropy. Minimum is: " + this.minEntropy + " bits"
  );
  this._init(entropy, nonce, pers);
}
var hmacDrbg = HmacDRBG$1;
HmacDRBG$1.prototype._init = function init2(entropy, nonce, pers) {
  var seed = entropy.concat(nonce).concat(pers);
  this.K = new Array(this.outLen / 8);
  this.V = new Array(this.outLen / 8);
  for (var i3 = 0; i3 < this.V.length; i3++) {
    this.K[i3] = 0;
    this.V[i3] = 1;
  }
  this._update(seed);
  this._reseed = 1;
  this.reseedInterval = 281474976710656;
};
HmacDRBG$1.prototype._hmac = function hmac2() {
  return new hash$1.hmac(this.hash, this.K);
};
HmacDRBG$1.prototype._update = function update4(seed) {
  var kmac = this._hmac().update(this.V).update([0]);
  if (seed)
    kmac = kmac.update(seed);
  this.K = kmac.digest();
  this.V = this._hmac().update(this.V).digest();
  if (!seed)
    return;
  this.K = this._hmac().update(this.V).update([1]).update(seed).digest();
  this.V = this._hmac().update(this.V).digest();
};
HmacDRBG$1.prototype.reseed = function reseed(entropy, entropyEnc, add5, addEnc) {
  if (typeof entropyEnc !== "string") {
    addEnc = add5;
    add5 = entropyEnc;
    entropyEnc = null;
  }
  entropy = utils$6.toArray(entropy, entropyEnc);
  add5 = utils$6.toArray(add5, addEnc);
  assert$6(
    entropy.length >= this.minEntropy / 8,
    "Not enough entropy. Minimum is: " + this.minEntropy + " bits"
  );
  this._update(entropy.concat(add5 || []));
  this._reseed = 1;
};
HmacDRBG$1.prototype.generate = function generate2(len, enc, add5, addEnc) {
  if (this._reseed > this.reseedInterval)
    throw new Error("Reseed is required");
  if (typeof enc !== "string") {
    addEnc = add5;
    add5 = enc;
    enc = null;
  }
  if (add5) {
    add5 = utils$6.toArray(add5, addEnc || "hex");
    this._update(add5);
  }
  var temp = [];
  while (temp.length < len) {
    this.V = this._hmac().update(this.V).digest();
    temp = temp.concat(this.V);
  }
  var res = temp.slice(0, len);
  this._update(add5);
  this._reseed++;
  return utils$6.encode(res, enc);
};
var BN$3 = bnExports;
var utils$5 = utils$m;
var assert$5 = utils$5.assert;
function KeyPair$3(ec2, options) {
  this.ec = ec2;
  this.priv = null;
  this.pub = null;
  if (options.priv)
    this._importPrivate(options.priv, options.privEnc);
  if (options.pub)
    this._importPublic(options.pub, options.pubEnc);
}
var key$1 = KeyPair$3;
KeyPair$3.fromPublic = function fromPublic(ec2, pub2, enc) {
  if (pub2 instanceof KeyPair$3)
    return pub2;
  return new KeyPair$3(ec2, {
    pub: pub2,
    pubEnc: enc
  });
};
KeyPair$3.fromPrivate = function fromPrivate(ec2, priv2, enc) {
  if (priv2 instanceof KeyPair$3)
    return priv2;
  return new KeyPair$3(ec2, {
    priv: priv2,
    privEnc: enc
  });
};
KeyPair$3.prototype.validate = function validate6() {
  var pub2 = this.getPublic();
  if (pub2.isInfinity())
    return { result: false, reason: "Invalid public key" };
  if (!pub2.validate())
    return { result: false, reason: "Public key is not a point" };
  if (!pub2.mul(this.ec.curve.n).isInfinity())
    return { result: false, reason: "Public key * N != O" };
  return { result: true, reason: null };
};
KeyPair$3.prototype.getPublic = function getPublic(compact, enc) {
  if (typeof compact === "string") {
    enc = compact;
    compact = null;
  }
  if (!this.pub)
    this.pub = this.ec.g.mul(this.priv);
  if (!enc)
    return this.pub;
  return this.pub.encode(enc, compact);
};
KeyPair$3.prototype.getPrivate = function getPrivate(enc) {
  if (enc === "hex")
    return this.priv.toString(16, 2);
  else
    return this.priv;
};
KeyPair$3.prototype._importPrivate = function _importPrivate(key2, enc) {
  this.priv = new BN$3(key2, enc || 16);
  this.priv = this.priv.umod(this.ec.curve.n);
};
KeyPair$3.prototype._importPublic = function _importPublic(key2, enc) {
  if (key2.x || key2.y) {
    if (this.ec.curve.type === "mont") {
      assert$5(key2.x, "Need x coordinate");
    } else if (this.ec.curve.type === "short" || this.ec.curve.type === "edwards") {
      assert$5(key2.x && key2.y, "Need both x and y coordinate");
    }
    this.pub = this.ec.curve.point(key2.x, key2.y);
    return;
  }
  this.pub = this.ec.curve.decodePoint(key2, enc);
};
KeyPair$3.prototype.derive = function derive(pub2) {
  if (!pub2.validate()) {
    assert$5(pub2.validate(), "public point not validated");
  }
  return pub2.mul(this.priv).getX();
};
KeyPair$3.prototype.sign = function sign(msg, enc, options) {
  return this.ec.sign(msg, this, enc, options);
};
KeyPair$3.prototype.verify = function verify(msg, signature2, options) {
  return this.ec.verify(msg, signature2, this, void 0, options);
};
KeyPair$3.prototype.inspect = function inspect5() {
  return "<Key priv: " + (this.priv && this.priv.toString(16, 2)) + " pub: " + (this.pub && this.pub.inspect()) + " >";
};
var BN$2 = bnExports;
var utils$4 = utils$m;
var assert$4 = utils$4.assert;
function Signature$3(options, enc) {
  if (options instanceof Signature$3)
    return options;
  if (this._importDER(options, enc))
    return;
  assert$4(options.r && options.s, "Signature without r or s");
  this.r = new BN$2(options.r, 16);
  this.s = new BN$2(options.s, 16);
  if (options.recoveryParam === void 0)
    this.recoveryParam = null;
  else
    this.recoveryParam = options.recoveryParam;
}
var signature$1 = Signature$3;
function Position() {
  this.place = 0;
}
function getLength(buf, p2) {
  var initial = buf[p2.place++];
  if (!(initial & 128)) {
    return initial;
  }
  var octetLen = initial & 15;
  if (octetLen === 0 || octetLen > 4) {
    return false;
  }
  if (buf[p2.place] === 0) {
    return false;
  }
  var val = 0;
  for (var i3 = 0, off = p2.place; i3 < octetLen; i3++, off++) {
    val <<= 8;
    val |= buf[off];
    val >>>= 0;
  }
  if (val <= 127) {
    return false;
  }
  p2.place = off;
  return val;
}
function rmPadding(buf) {
  var i3 = 0;
  var len = buf.length - 1;
  while (!buf[i3] && !(buf[i3 + 1] & 128) && i3 < len) {
    i3++;
  }
  if (i3 === 0) {
    return buf;
  }
  return buf.slice(i3);
}
Signature$3.prototype._importDER = function _importDER(data, enc) {
  data = utils$4.toArray(data, enc);
  var p2 = new Position();
  if (data[p2.place++] !== 48) {
    return false;
  }
  var len = getLength(data, p2);
  if (len === false) {
    return false;
  }
  if (len + p2.place !== data.length) {
    return false;
  }
  if (data[p2.place++] !== 2) {
    return false;
  }
  var rlen = getLength(data, p2);
  if (rlen === false) {
    return false;
  }
  if ((data[p2.place] & 128) !== 0) {
    return false;
  }
  var r2 = data.slice(p2.place, rlen + p2.place);
  p2.place += rlen;
  if (data[p2.place++] !== 2) {
    return false;
  }
  var slen = getLength(data, p2);
  if (slen === false) {
    return false;
  }
  if (data.length !== slen + p2.place) {
    return false;
  }
  if ((data[p2.place] & 128) !== 0) {
    return false;
  }
  var s2 = data.slice(p2.place, slen + p2.place);
  if (r2[0] === 0) {
    if (r2[1] & 128) {
      r2 = r2.slice(1);
    } else {
      return false;
    }
  }
  if (s2[0] === 0) {
    if (s2[1] & 128) {
      s2 = s2.slice(1);
    } else {
      return false;
    }
  }
  this.r = new BN$2(r2);
  this.s = new BN$2(s2);
  this.recoveryParam = null;
  return true;
};
function constructLength(arr, len) {
  if (len < 128) {
    arr.push(len);
    return;
  }
  var octets = 1 + (Math.log(len) / Math.LN2 >>> 3);
  arr.push(octets | 128);
  while (--octets) {
    arr.push(len >>> (octets << 3) & 255);
  }
  arr.push(len);
}
Signature$3.prototype.toDER = function toDER(enc) {
  var r2 = this.r.toArray();
  var s2 = this.s.toArray();
  if (r2[0] & 128)
    r2 = [0].concat(r2);
  if (s2[0] & 128)
    s2 = [0].concat(s2);
  r2 = rmPadding(r2);
  s2 = rmPadding(s2);
  while (!s2[0] && !(s2[1] & 128)) {
    s2 = s2.slice(1);
  }
  var arr = [2];
  constructLength(arr, r2.length);
  arr = arr.concat(r2);
  arr.push(2);
  constructLength(arr, s2.length);
  var backHalf = arr.concat(s2);
  var res = [48];
  constructLength(res, backHalf.length);
  res = res.concat(backHalf);
  return utils$4.encode(res, enc);
};
var BN$1 = bnExports;
var HmacDRBG = hmacDrbg;
var utils$3 = utils$m;
var curves$1 = curves$2;
var rand2 = brorandExports;
var assert$3 = utils$3.assert;
var KeyPair$2 = key$1;
var Signature$2 = signature$1;
function EC(options) {
  if (!(this instanceof EC))
    return new EC(options);
  if (typeof options === "string") {
    assert$3(
      Object.prototype.hasOwnProperty.call(curves$1, options),
      "Unknown curve " + options
    );
    options = curves$1[options];
  }
  if (options instanceof curves$1.PresetCurve)
    options = { curve: options };
  this.curve = options.curve.curve;
  this.n = this.curve.n;
  this.nh = this.n.ushrn(1);
  this.g = this.curve.g;
  this.g = options.curve.g;
  this.g.precompute(options.curve.n.bitLength() + 1);
  this.hash = options.hash || options.curve.hash;
}
var ec$1 = EC;
EC.prototype.keyPair = function keyPair(options) {
  return new KeyPair$2(this, options);
};
EC.prototype.keyFromPrivate = function keyFromPrivate(priv2, enc) {
  return KeyPair$2.fromPrivate(this, priv2, enc);
};
EC.prototype.keyFromPublic = function keyFromPublic(pub2, enc) {
  return KeyPair$2.fromPublic(this, pub2, enc);
};
EC.prototype.genKeyPair = function genKeyPair(options) {
  if (!options)
    options = {};
  var drbg = new HmacDRBG({
    hash: this.hash,
    pers: options.pers,
    persEnc: options.persEnc || "utf8",
    entropy: options.entropy || rand2(this.hash.hmacStrength),
    entropyEnc: options.entropy && options.entropyEnc || "utf8",
    nonce: this.n.toArray()
  });
  var bytes = this.n.byteLength();
  var ns2 = this.n.sub(new BN$1(2));
  for (; ; ) {
    var priv2 = new BN$1(drbg.generate(bytes));
    if (priv2.cmp(ns2) > 0)
      continue;
    priv2.iaddn(1);
    return this.keyFromPrivate(priv2);
  }
};
EC.prototype._truncateToN = function _truncateToN(msg, truncOnly, bitLength) {
  var byteLength;
  if (BN$1.isBN(msg) || typeof msg === "number") {
    msg = new BN$1(msg, 16);
    byteLength = msg.byteLength();
  } else if (typeof msg === "object") {
    byteLength = msg.length;
    msg = new BN$1(msg, 16);
  } else {
    var str = msg.toString();
    byteLength = str.length + 1 >>> 1;
    msg = new BN$1(str, 16);
  }
  if (typeof bitLength !== "number") {
    bitLength = byteLength * 8;
  }
  var delta = bitLength - this.n.bitLength();
  if (delta > 0)
    msg = msg.ushrn(delta);
  if (!truncOnly && msg.cmp(this.n) >= 0)
    return msg.sub(this.n);
  else
    return msg;
};
EC.prototype.sign = function sign2(msg, key2, enc, options) {
  if (typeof enc === "object") {
    options = enc;
    enc = null;
  }
  if (!options)
    options = {};
  if (typeof msg !== "string" && typeof msg !== "number" && !BN$1.isBN(msg)) {
    assert$3(
      typeof msg === "object" && msg && typeof msg.length === "number",
      "Expected message to be an array-like, a hex string, or a BN instance"
    );
    assert$3(msg.length >>> 0 === msg.length);
    for (var i3 = 0; i3 < msg.length; i3++) assert$3((msg[i3] & 255) === msg[i3]);
  }
  key2 = this.keyFromPrivate(key2, enc);
  msg = this._truncateToN(msg, false, options.msgBitLength);
  assert$3(!msg.isNeg(), "Can not sign a negative message");
  var bytes = this.n.byteLength();
  var bkey = key2.getPrivate().toArray("be", bytes);
  var nonce = msg.toArray("be", bytes);
  assert$3(new BN$1(nonce).eq(msg), "Can not sign message");
  var drbg = new HmacDRBG({
    hash: this.hash,
    entropy: bkey,
    nonce,
    pers: options.pers,
    persEnc: options.persEnc || "utf8"
  });
  var ns1 = this.n.sub(new BN$1(1));
  for (var iter = 0; ; iter++) {
    var k2 = options.k ? options.k(iter) : new BN$1(drbg.generate(this.n.byteLength()));
    k2 = this._truncateToN(k2, true);
    if (k2.cmpn(1) <= 0 || k2.cmp(ns1) >= 0)
      continue;
    var kp = this.g.mul(k2);
    if (kp.isInfinity())
      continue;
    var kpX = kp.getX();
    var r2 = kpX.umod(this.n);
    if (r2.cmpn(0) === 0)
      continue;
    var s2 = k2.invm(this.n).mul(r2.mul(key2.getPrivate()).iadd(msg));
    s2 = s2.umod(this.n);
    if (s2.cmpn(0) === 0)
      continue;
    var recoveryParam = (kp.getY().isOdd() ? 1 : 0) | (kpX.cmp(r2) !== 0 ? 2 : 0);
    if (options.canonical && s2.cmp(this.nh) > 0) {
      s2 = this.n.sub(s2);
      recoveryParam ^= 1;
    }
    return new Signature$2({ r: r2, s: s2, recoveryParam });
  }
};
EC.prototype.verify = function verify2(msg, signature2, key2, enc, options) {
  if (!options)
    options = {};
  msg = this._truncateToN(msg, false, options.msgBitLength);
  key2 = this.keyFromPublic(key2, enc);
  signature2 = new Signature$2(signature2, "hex");
  var r2 = signature2.r;
  var s2 = signature2.s;
  if (r2.cmpn(1) < 0 || r2.cmp(this.n) >= 0)
    return false;
  if (s2.cmpn(1) < 0 || s2.cmp(this.n) >= 0)
    return false;
  var sinv = s2.invm(this.n);
  var u1 = sinv.mul(msg).umod(this.n);
  var u2 = sinv.mul(r2).umod(this.n);
  var p2;
  if (!this.curve._maxwellTrick) {
    p2 = this.g.mulAdd(u1, key2.getPublic(), u2);
    if (p2.isInfinity())
      return false;
    return p2.getX().umod(this.n).cmp(r2) === 0;
  }
  p2 = this.g.jmulAdd(u1, key2.getPublic(), u2);
  if (p2.isInfinity())
    return false;
  return p2.eqXToP(r2);
};
EC.prototype.recoverPubKey = function(msg, signature2, j2, enc) {
  assert$3((3 & j2) === j2, "The recovery param is more than two bits");
  signature2 = new Signature$2(signature2, enc);
  var n3 = this.n;
  var e2 = new BN$1(msg);
  var r2 = signature2.r;
  var s2 = signature2.s;
  var isYOdd = j2 & 1;
  var isSecondKey = j2 >> 1;
  if (r2.cmp(this.curve.p.umod(this.curve.n)) >= 0 && isSecondKey)
    throw new Error("Unable to find sencond key candinate");
  if (isSecondKey)
    r2 = this.curve.pointFromX(r2.add(this.curve.n), isYOdd);
  else
    r2 = this.curve.pointFromX(r2, isYOdd);
  var rInv = signature2.r.invm(n3);
  var s1 = n3.sub(e2).mul(rInv).umod(n3);
  var s22 = s2.mul(rInv).umod(n3);
  return this.g.mulAdd(s1, r2, s22);
};
EC.prototype.getKeyRecoveryParam = function(e2, signature2, Q2, enc) {
  signature2 = new Signature$2(signature2, enc);
  if (signature2.recoveryParam !== null)
    return signature2.recoveryParam;
  for (var i3 = 0; i3 < 4; i3++) {
    var Qprime;
    try {
      Qprime = this.recoverPubKey(e2, signature2, i3);
    } catch (e3) {
      continue;
    }
    if (Qprime.eq(Q2))
      return i3;
  }
  throw new Error("Unable to find valid recovery factor");
};
var utils$2 = utils$m;
var assert$2 = utils$2.assert;
var parseBytes$2 = utils$2.parseBytes;
var cachedProperty$1 = utils$2.cachedProperty;
function KeyPair$1(eddsa2, params) {
  this.eddsa = eddsa2;
  this._secret = parseBytes$2(params.secret);
  if (eddsa2.isPoint(params.pub))
    this._pub = params.pub;
  else
    this._pubBytes = parseBytes$2(params.pub);
}
KeyPair$1.fromPublic = function fromPublic2(eddsa2, pub2) {
  if (pub2 instanceof KeyPair$1)
    return pub2;
  return new KeyPair$1(eddsa2, { pub: pub2 });
};
KeyPair$1.fromSecret = function fromSecret(eddsa2, secret2) {
  if (secret2 instanceof KeyPair$1)
    return secret2;
  return new KeyPair$1(eddsa2, { secret: secret2 });
};
KeyPair$1.prototype.secret = function secret() {
  return this._secret;
};
cachedProperty$1(KeyPair$1, "pubBytes", function pubBytes() {
  return this.eddsa.encodePoint(this.pub());
});
cachedProperty$1(KeyPair$1, "pub", function pub() {
  if (this._pubBytes)
    return this.eddsa.decodePoint(this._pubBytes);
  return this.eddsa.g.mul(this.priv());
});
cachedProperty$1(KeyPair$1, "privBytes", function privBytes() {
  var eddsa2 = this.eddsa;
  var hash3 = this.hash();
  var lastIx = eddsa2.encodingLength - 1;
  var a2 = hash3.slice(0, eddsa2.encodingLength);
  a2[0] &= 248;
  a2[lastIx] &= 127;
  a2[lastIx] |= 64;
  return a2;
});
cachedProperty$1(KeyPair$1, "priv", function priv() {
  return this.eddsa.decodeInt(this.privBytes());
});
cachedProperty$1(KeyPair$1, "hash", function hash() {
  return this.eddsa.hash().update(this.secret()).digest();
});
cachedProperty$1(KeyPair$1, "messagePrefix", function messagePrefix() {
  return this.hash().slice(this.eddsa.encodingLength);
});
KeyPair$1.prototype.sign = function sign3(message) {
  assert$2(this._secret, "KeyPair can only verify");
  return this.eddsa.sign(message, this);
};
KeyPair$1.prototype.verify = function verify3(message, sig) {
  return this.eddsa.verify(message, sig, this);
};
KeyPair$1.prototype.getSecret = function getSecret(enc) {
  assert$2(this._secret, "KeyPair is public only");
  return utils$2.encode(this.secret(), enc);
};
KeyPair$1.prototype.getPublic = function getPublic2(enc) {
  return utils$2.encode(this.pubBytes(), enc);
};
var key = KeyPair$1;
var BN = bnExports;
var utils$1 = utils$m;
var assert$1 = utils$1.assert;
var cachedProperty = utils$1.cachedProperty;
var parseBytes$1 = utils$1.parseBytes;
function Signature$1(eddsa2, sig) {
  this.eddsa = eddsa2;
  if (typeof sig !== "object")
    sig = parseBytes$1(sig);
  if (Array.isArray(sig)) {
    assert$1(sig.length === eddsa2.encodingLength * 2, "Signature has invalid size");
    sig = {
      R: sig.slice(0, eddsa2.encodingLength),
      S: sig.slice(eddsa2.encodingLength)
    };
  }
  assert$1(sig.R && sig.S, "Signature without R or S");
  if (eddsa2.isPoint(sig.R))
    this._R = sig.R;
  if (sig.S instanceof BN)
    this._S = sig.S;
  this._Rencoded = Array.isArray(sig.R) ? sig.R : sig.Rencoded;
  this._Sencoded = Array.isArray(sig.S) ? sig.S : sig.Sencoded;
}
cachedProperty(Signature$1, "S", function S() {
  return this.eddsa.decodeInt(this.Sencoded());
});
cachedProperty(Signature$1, "R", function R() {
  return this.eddsa.decodePoint(this.Rencoded());
});
cachedProperty(Signature$1, "Rencoded", function Rencoded() {
  return this.eddsa.encodePoint(this.R());
});
cachedProperty(Signature$1, "Sencoded", function Sencoded() {
  return this.eddsa.encodeInt(this.S());
});
Signature$1.prototype.toBytes = function toBytes() {
  return this.Rencoded().concat(this.Sencoded());
};
Signature$1.prototype.toHex = function toHex2() {
  return utils$1.encode(this.toBytes(), "hex").toUpperCase();
};
var signature = Signature$1;
var hash2 = hash$2;
var curves = curves$2;
var utils = utils$m;
var assert = utils.assert;
var parseBytes = utils.parseBytes;
var KeyPair = key;
var Signature = signature;
function EDDSA(curve2) {
  assert(curve2 === "ed25519", "only tested with ed25519 so far");
  if (!(this instanceof EDDSA))
    return new EDDSA(curve2);
  curve2 = curves[curve2].curve;
  this.curve = curve2;
  this.g = curve2.g;
  this.g.precompute(curve2.n.bitLength() + 1);
  this.pointClass = curve2.point().constructor;
  this.encodingLength = Math.ceil(curve2.n.bitLength() / 8);
  this.hash = hash2.sha512;
}
var eddsa = EDDSA;
EDDSA.prototype.sign = function sign4(message, secret2) {
  message = parseBytes(message);
  var key2 = this.keyFromSecret(secret2);
  var r2 = this.hashInt(key2.messagePrefix(), message);
  var R4 = this.g.mul(r2);
  var Rencoded2 = this.encodePoint(R4);
  var s_ = this.hashInt(Rencoded2, key2.pubBytes(), message).mul(key2.priv());
  var S4 = r2.add(s_).umod(this.curve.n);
  return this.makeSignature({ R: R4, S: S4, Rencoded: Rencoded2 });
};
EDDSA.prototype.verify = function verify4(message, sig, pub2) {
  message = parseBytes(message);
  sig = this.makeSignature(sig);
  if (sig.S().gte(sig.eddsa.curve.n) || sig.S().isNeg()) {
    return false;
  }
  var key2 = this.keyFromPublic(pub2);
  var h4 = this.hashInt(sig.Rencoded(), key2.pubBytes(), message);
  var SG = this.g.mul(sig.S());
  var RplusAh = sig.R().add(key2.pub().mul(h4));
  return RplusAh.eq(SG);
};
EDDSA.prototype.hashInt = function hashInt() {
  var hash3 = this.hash();
  for (var i3 = 0; i3 < arguments.length; i3++)
    hash3.update(arguments[i3]);
  return utils.intFromLE(hash3.digest()).umod(this.curve.n);
};
EDDSA.prototype.keyFromPublic = function keyFromPublic2(pub2) {
  return KeyPair.fromPublic(this, pub2);
};
EDDSA.prototype.keyFromSecret = function keyFromSecret(secret2) {
  return KeyPair.fromSecret(this, secret2);
};
EDDSA.prototype.makeSignature = function makeSignature(sig) {
  if (sig instanceof Signature)
    return sig;
  return new Signature(this, sig);
};
EDDSA.prototype.encodePoint = function encodePoint(point5) {
  var enc = point5.getY().toArray("le", this.encodingLength);
  enc[this.encodingLength - 1] |= point5.getX().isOdd() ? 128 : 0;
  return enc;
};
EDDSA.prototype.decodePoint = function decodePoint3(bytes) {
  bytes = utils.parseBytes(bytes);
  var lastIx = bytes.length - 1;
  var normed = bytes.slice(0, lastIx).concat(bytes[lastIx] & -129);
  var xIsOdd = (bytes[lastIx] & 128) !== 0;
  var y3 = utils.intFromLE(normed);
  return this.curve.pointFromY(y3, xIsOdd);
};
EDDSA.prototype.encodeInt = function encodeInt(num) {
  return num.toArray("le", this.encodingLength);
};
EDDSA.prototype.decodeInt = function decodeInt(bytes) {
  return utils.intFromLE(bytes);
};
EDDSA.prototype.isPoint = function isPoint(val) {
  return val instanceof this.pointClass;
};
(function(exports) {
  var elliptic2 = exports;
  elliptic2.version = require$$0.version;
  elliptic2.utils = utils$m;
  elliptic2.rand = brorandExports;
  elliptic2.curve = curve;
  elliptic2.curves = curves$2;
  elliptic2.ec = ec$1;
  elliptic2.eddsa = eddsa;
})(elliptic);
const C$4 = { waku: { publish: "waku_publish", batchPublish: "waku_batchPublish", subscribe: "waku_subscribe", batchSubscribe: "waku_batchSubscribe", subscription: "waku_subscription", unsubscribe: "waku_unsubscribe", batchUnsubscribe: "waku_batchUnsubscribe", batchFetchMessages: "waku_batchFetchMessages" }, irn: { publish: "irn_publish", batchPublish: "irn_batchPublish", subscribe: "irn_subscribe", batchSubscribe: "irn_batchSubscribe", subscription: "irn_subscription", unsubscribe: "irn_unsubscribe", batchUnsubscribe: "irn_batchUnsubscribe", batchFetchMessages: "irn_batchFetchMessages" }, iridium: { publish: "iridium_publish", batchPublish: "iridium_batchPublish", subscribe: "iridium_subscribe", batchSubscribe: "iridium_batchSubscribe", subscription: "iridium_subscription", unsubscribe: "iridium_unsubscribe", batchUnsubscribe: "iridium_batchUnsubscribe", batchFetchMessages: "iridium_batchFetchMessages" } };
var define_process_env_default = {};
const Pe = ":";
function Ye$1(e2) {
  const [t, n3] = e2.split(Pe);
  return { namespace: t, reference: n3 };
}
function Hr$2(e2, t = []) {
  const n3 = [];
  return Object.keys(e2).forEach((r2) => {
    if (t.length && !t.includes(r2)) return;
    const o3 = e2[r2];
    n3.push(...o3.accounts);
  }), n3;
}
function Le$3(e2, t) {
  return e2.includes(":") ? [e2] : t.chains || [];
}
const Ft$2 = "ReactNative", H$2 = { reactNative: "react-native", node: "node", browser: "browser", unknown: "unknown" }, Gt$2 = "js";
function et$1() {
  return typeof process$1 < "u" && typeof process$1.versions < "u" && typeof process$1.versions.node < "u";
}
function ne$1() {
  return !getDocument_1() && !!getNavigator_1() && navigator.product === Ft$2;
}
function Wr$2() {
  return ne$1() && typeof global < "u" && typeof (global == null ? void 0 : global.Platform) < "u" && (global == null ? void 0 : global.Platform.OS) === "android";
}
function zr$2() {
  return ne$1() && typeof global < "u" && typeof (global == null ? void 0 : global.Platform) < "u" && (global == null ? void 0 : global.Platform.OS) === "ios";
}
function Ae$2() {
  return !et$1() && !!getNavigator_1() && !!getDocument_1();
}
function ue$2() {
  return ne$1() ? H$2.reactNative : et$1() ? H$2.node : Ae$2() ? H$2.browser : H$2.unknown;
}
function Jr$2() {
  var e2;
  try {
    return ne$1() && typeof global < "u" && typeof (global == null ? void 0 : global.Application) < "u" ? (e2 = global.Application) == null ? void 0 : e2.applicationId : void 0;
  } catch {
    return;
  }
}
function Wt$2(e2, t) {
  const n3 = new URLSearchParams(e2);
  for (const r2 of Object.keys(t).sort()) if (t.hasOwnProperty(r2)) {
    const o3 = t[r2];
    o3 !== void 0 && n3.set(r2, o3);
  }
  return n3.toString();
}
function Yr$2() {
  return getWindowMetadata_1() || { name: "", description: "", url: "", icons: [""] };
}
function zt$2() {
  if (ue$2() === H$2.reactNative && typeof global < "u" && typeof (global == null ? void 0 : global.Platform) < "u") {
    const { OS: n3, Version: r2 } = global.Platform;
    return [n3, r2].join("-");
  }
  const e2 = detect();
  if (e2 === null) return "unknown";
  const t = e2.os ? e2.os.replace(" ", "").toLowerCase() : "unknown";
  return e2.type === "browser" ? [t, e2.name, e2.version].join("-") : [t, e2.version].join("-");
}
function Jt$2() {
  var e2;
  const t = ue$2();
  return t === H$2.browser ? [t, ((e2 = getLocation_1()) == null ? void 0 : e2.host) || "unknown"].join(":") : t;
}
function Yt$2(e2, t, n3) {
  const r2 = zt$2(), o3 = Jt$2();
  return [[e2, t].join("-"), [Gt$2, n3].join("-"), r2, o3].join("/");
}
function Zr$2({ protocol: e2, version: t, relayUrl: n3, sdkVersion: r2, auth: o3, projectId: s2, useOnCloseEvent: i3, bundleId: c2, packageName: u2 }) {
  const a2 = n3.split("?"), l2 = Yt$2(e2, t, r2), f5 = { auth: o3, ua: l2, projectId: s2, useOnCloseEvent: i3 || void 0, packageName: u2 || void 0, bundleId: c2 || void 0 }, d4 = Wt$2(a2[1] || "", f5);
  return a2[0] + "?" + d4;
}
function re$2(e2, t) {
  return e2.filter((n3) => t.includes(n3)).length === e2.length;
}
function no$2(e2) {
  return Object.fromEntries(e2.entries());
}
function ro$2(e2) {
  return new Map(Object.entries(e2));
}
function co$2(e2 = cjs$3.FIVE_MINUTES, t) {
  const n3 = cjs$3.toMiliseconds(e2 || cjs$3.FIVE_MINUTES);
  let r2, o3, s2, i3;
  return { resolve: (c2) => {
    s2 && r2 && (clearTimeout(s2), r2(c2), i3 = Promise.resolve(c2));
  }, reject: (c2) => {
    s2 && o3 && (clearTimeout(s2), o3(c2));
  }, done: () => new Promise((c2, u2) => {
    if (i3) return c2(i3);
    s2 = setTimeout(() => {
      const a2 = new Error(t);
      i3 = Promise.reject(a2), u2(a2);
    }, n3), r2 = c2, o3 = u2;
  }) };
}
function ao$2(e2, t, n3) {
  return new Promise(async (r2, o3) => {
    const s2 = setTimeout(() => o3(new Error(n3)), t);
    try {
      const i3 = await e2;
      r2(i3);
    } catch (i3) {
      o3(i3);
    }
    clearTimeout(s2);
  });
}
function tt$1(e2, t) {
  if (typeof t == "string" && t.startsWith(`${e2}:`)) return t;
  if (e2.toLowerCase() === "topic") {
    if (typeof t != "string") throw new Error('Value must be "string" for expirer target type: topic');
    return `topic:${t}`;
  } else if (e2.toLowerCase() === "id") {
    if (typeof t != "number") throw new Error('Value must be "number" for expirer target type: id');
    return `id:${t}`;
  }
  throw new Error(`Unknown expirer target type: ${e2}`);
}
function uo$1(e2) {
  return tt$1("topic", e2);
}
function fo$1(e2) {
  return tt$1("id", e2);
}
function lo$1(e2) {
  const [t, n3] = e2.split(":"), r2 = { id: void 0, topic: void 0 };
  if (t === "topic" && typeof n3 == "string") r2.topic = n3;
  else if (t === "id" && Number.isInteger(Number(n3))) r2.id = Number(n3);
  else throw new Error(`Invalid target, expected id:number or topic:string, got ${t}:${n3}`);
  return r2;
}
function ho$1(e2, t) {
  return cjs$3.fromMiliseconds(Date.now() + cjs$3.toMiliseconds(e2));
}
function po$1(e2) {
  return Date.now() >= cjs$3.toMiliseconds(e2);
}
function go$1(e2, t) {
  return `${e2}${t ? `:${t}` : ""}`;
}
function Q$2(e2 = [], t = []) {
  return [.../* @__PURE__ */ new Set([...e2, ...t])];
}
async function yo$1({ id: e2, topic: t, wcDeepLink: n3 }) {
  var r2;
  try {
    if (!n3) return;
    const o3 = typeof n3 == "string" ? JSON.parse(n3) : n3, s2 = o3 == null ? void 0 : o3.href;
    if (typeof s2 != "string") return;
    const i3 = en$2(s2, e2, t), c2 = ue$2();
    if (c2 === H$2.browser) {
      if (!((r2 = getDocument_1()) != null && r2.hasFocus())) {
        console.warn("Document does not have focus, skipping deeplink.");
        return;
      }
      tn$2(i3);
    } else c2 === H$2.reactNative && typeof (global == null ? void 0 : global.Linking) < "u" && await global.Linking.openURL(i3);
  } catch (o3) {
    console.error(o3);
  }
}
function en$2(e2, t, n3) {
  const r2 = `requestId=${t}&sessionTopic=${n3}`;
  e2.endsWith("/") && (e2 = e2.slice(0, -1));
  let o3 = `${e2}`;
  if (e2.startsWith("https://t.me")) {
    const s2 = e2.includes("?") ? "&startapp=" : "?startapp=";
    o3 = `${o3}${s2}${on$2(r2, true)}`;
  } else o3 = `${o3}/wc?${r2}`;
  return o3;
}
function tn$2(e2) {
  let t = "_self";
  rn$2() ? t = "_top" : (nn$2() || e2.startsWith("https://") || e2.startsWith("http://")) && (t = "_blank"), window.open(e2, t, "noreferrer noopener");
}
async function mo$1(e2, t) {
  let n3 = "";
  try {
    if (Ae$2() && (n3 = localStorage.getItem(t), n3)) return n3;
    n3 = await e2.getItem(t);
  } catch (r2) {
    console.error(r2);
  }
  return n3;
}
function bo$1(e2, t) {
  if (!e2.includes(t)) return null;
  const n3 = e2.split(/([&,?,=])/), r2 = n3.indexOf(t);
  return n3[r2 + 2];
}
function wo$1() {
  return typeof crypto < "u" && crypto != null && crypto.randomUUID ? crypto.randomUUID() : "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/gu, (e2) => {
    const t = Math.random() * 16 | 0;
    return (e2 === "x" ? t : t & 3 | 8).toString(16);
  });
}
function Eo$1() {
  return typeof process$1 < "u" && define_process_env_default.IS_VITEST === "true";
}
function nn$2() {
  return typeof window < "u" && (!!window.TelegramWebviewProxy || !!window.Telegram || !!window.TelegramWebviewProxyProto);
}
function rn$2() {
  try {
    return window.self !== window.top;
  } catch {
    return false;
  }
}
function on$2(e2, t = false) {
  const n3 = Buffer.from(e2).toString("base64");
  return t ? n3.replace(/[=]/g, "") : n3;
}
function rt$1(e2) {
  return Buffer.from(e2, "base64").toString("utf-8");
}
function vo$1(e2) {
  return new Promise((t) => setTimeout(t, e2));
}
function Ne$2(e2) {
  if (!Number.isSafeInteger(e2) || e2 < 0) throw new Error("positive integer expected, got " + e2);
}
function xo$1(e2) {
  return e2 instanceof Uint8Array || ArrayBuffer.isView(e2) && e2.constructor.name === "Uint8Array";
}
function je$2(e2, ...t) {
  if (!xo$1(e2)) throw new Error("Uint8Array expected");
  if (t.length > 0 && !t.includes(e2.length)) throw new Error("Uint8Array expected of length " + t + ", got length=" + e2.length);
}
function ot$1(e2) {
  if (typeof e2 != "function" || typeof e2.create != "function") throw new Error("Hash should be wrapped by utils.wrapConstructor");
  Ne$2(e2.outputLen), Ne$2(e2.blockLen);
}
function me$2(e2, t = true) {
  if (e2.destroyed) throw new Error("Hash instance has been destroyed");
  if (t && e2.finished) throw new Error("Hash#digest() has already been called");
}
function sn$2(e2, t) {
  je$2(e2);
  const n3 = t.outputLen;
  if (e2.length < n3) throw new Error("digestInto() expects output buffer of length at least " + n3);
}
const Ce$1 = BigInt(2 ** 32 - 1), cn$2 = BigInt(32);
function Oo$1(e2, t = false) {
  return t ? { h: Number(e2 & Ce$1), l: Number(e2 >> cn$2 & Ce$1) } : { h: Number(e2 >> cn$2 & Ce$1) | 0, l: Number(e2 & Ce$1) | 0 };
}
function Io$1(e2, t = false) {
  let n3 = new Uint32Array(e2.length), r2 = new Uint32Array(e2.length);
  for (let o3 = 0; o3 < e2.length; o3++) {
    const { h: s2, l: i3 } = Oo$1(e2[o3], t);
    [n3[o3], r2[o3]] = [s2, i3];
  }
  return [n3, r2];
}
const Ao$1 = (e2, t, n3) => e2 << n3 | t >>> 32 - n3, No$1 = (e2, t, n3) => t << n3 | e2 >>> 32 - n3, So$1 = (e2, t, n3) => t << n3 - 32 | e2 >>> 64 - n3, Uo$1 = (e2, t, n3) => e2 << n3 - 32 | t >>> 64 - n3, be$1 = typeof globalThis == "object" && "crypto" in globalThis ? globalThis.crypto : void 0;
function _o$1(e2) {
  return new Uint32Array(e2.buffer, e2.byteOffset, Math.floor(e2.byteLength / 4));
}
function st$1(e2) {
  return new DataView(e2.buffer, e2.byteOffset, e2.byteLength);
}
function J$3(e2, t) {
  return e2 << 32 - t | e2 >>> t;
}
const an$2 = new Uint8Array(new Uint32Array([287454020]).buffer)[0] === 68;
function To$1(e2) {
  return e2 << 24 & 4278190080 | e2 << 8 & 16711680 | e2 >>> 8 & 65280 | e2 >>> 24 & 255;
}
function un$2(e2) {
  for (let t = 0; t < e2.length; t++) e2[t] = To$1(e2[t]);
}
function $o$1(e2) {
  if (typeof e2 != "string") throw new Error("utf8ToBytes expected string, got " + typeof e2);
  return new Uint8Array(new TextEncoder().encode(e2));
}
function we$1(e2) {
  return typeof e2 == "string" && (e2 = $o$1(e2)), je$2(e2), e2;
}
let it$1 = class it {
  clone() {
    return this._cloneInto();
  }
};
function fn$2(e2) {
  const t = (r2) => e2().update(we$1(r2)).digest(), n3 = e2();
  return t.outputLen = n3.outputLen, t.blockLen = n3.blockLen, t.create = () => e2(), t;
}
function Se$2(e2 = 32) {
  if (be$1 && typeof be$1.getRandomValues == "function") return be$1.getRandomValues(new Uint8Array(e2));
  if (be$1 && typeof be$1.randomBytes == "function") return be$1.randomBytes(e2);
  throw new Error("crypto.getRandomValues must be defined");
}
const ln$2 = [], dn$2 = [], hn$2 = [], Ro$1 = BigInt(0), Ue$3 = BigInt(1), Po$1 = BigInt(2), Lo$1 = BigInt(7), Bo$1 = BigInt(256), jo$1 = BigInt(113);
for (let e2 = 0, t = Ue$3, n3 = 1, r2 = 0; e2 < 24; e2++) {
  [n3, r2] = [r2, (2 * n3 + 3 * r2) % 5], ln$2.push(2 * (5 * r2 + n3)), dn$2.push((e2 + 1) * (e2 + 2) / 2 % 64);
  let o3 = Ro$1;
  for (let s2 = 0; s2 < 7; s2++) t = (t << Ue$3 ^ (t >> Lo$1) * jo$1) % Bo$1, t & Po$1 && (o3 ^= Ue$3 << (Ue$3 << BigInt(s2)) - Ue$3);
  hn$2.push(o3);
}
const [Co$1, ko$1] = Io$1(hn$2, true), pn$2 = (e2, t, n3) => n3 > 32 ? So$1(e2, t, n3) : Ao$1(e2, t, n3), gn$2 = (e2, t, n3) => n3 > 32 ? Uo$1(e2, t, n3) : No$1(e2, t, n3);
function Do$1(e2, t = 24) {
  const n3 = new Uint32Array(10);
  for (let r2 = 24 - t; r2 < 24; r2++) {
    for (let i3 = 0; i3 < 10; i3++) n3[i3] = e2[i3] ^ e2[i3 + 10] ^ e2[i3 + 20] ^ e2[i3 + 30] ^ e2[i3 + 40];
    for (let i3 = 0; i3 < 10; i3 += 2) {
      const c2 = (i3 + 8) % 10, u2 = (i3 + 2) % 10, a2 = n3[u2], l2 = n3[u2 + 1], f5 = pn$2(a2, l2, 1) ^ n3[c2], d4 = gn$2(a2, l2, 1) ^ n3[c2 + 1];
      for (let g2 = 0; g2 < 50; g2 += 10) e2[i3 + g2] ^= f5, e2[i3 + g2 + 1] ^= d4;
    }
    let o3 = e2[2], s2 = e2[3];
    for (let i3 = 0; i3 < 24; i3++) {
      const c2 = dn$2[i3], u2 = pn$2(o3, s2, c2), a2 = gn$2(o3, s2, c2), l2 = ln$2[i3];
      o3 = e2[l2], s2 = e2[l2 + 1], e2[l2] = u2, e2[l2 + 1] = a2;
    }
    for (let i3 = 0; i3 < 50; i3 += 10) {
      for (let c2 = 0; c2 < 10; c2++) n3[c2] = e2[i3 + c2];
      for (let c2 = 0; c2 < 10; c2++) e2[i3 + c2] ^= ~n3[(c2 + 2) % 10] & n3[(c2 + 4) % 10];
    }
    e2[0] ^= Co$1[r2], e2[1] ^= ko$1[r2];
  }
  n3.fill(0);
}
let Bt$2 = class Bt extends it$1 {
  constructor(t, n3, r2, o3 = false, s2 = 24) {
    if (super(), this.blockLen = t, this.suffix = n3, this.outputLen = r2, this.enableXOF = o3, this.rounds = s2, this.pos = 0, this.posOut = 0, this.finished = false, this.destroyed = false, Ne$2(r2), 0 >= this.blockLen || this.blockLen >= 200) throw new Error("Sha3 supports only keccak-f1600 function");
    this.state = new Uint8Array(200), this.state32 = _o$1(this.state);
  }
  keccak() {
    an$2 || un$2(this.state32), Do$1(this.state32, this.rounds), an$2 || un$2(this.state32), this.posOut = 0, this.pos = 0;
  }
  update(t) {
    me$2(this);
    const { blockLen: n3, state: r2 } = this;
    t = we$1(t);
    const o3 = t.length;
    for (let s2 = 0; s2 < o3; ) {
      const i3 = Math.min(n3 - this.pos, o3 - s2);
      for (let c2 = 0; c2 < i3; c2++) r2[this.pos++] ^= t[s2++];
      this.pos === n3 && this.keccak();
    }
    return this;
  }
  finish() {
    if (this.finished) return;
    this.finished = true;
    const { state: t, suffix: n3, pos: r2, blockLen: o3 } = this;
    t[r2] ^= n3, (n3 & 128) !== 0 && r2 === o3 - 1 && this.keccak(), t[o3 - 1] ^= 128, this.keccak();
  }
  writeInto(t) {
    me$2(this, false), je$2(t), this.finish();
    const n3 = this.state, { blockLen: r2 } = this;
    for (let o3 = 0, s2 = t.length; o3 < s2; ) {
      this.posOut >= r2 && this.keccak();
      const i3 = Math.min(r2 - this.posOut, s2 - o3);
      t.set(n3.subarray(this.posOut, this.posOut + i3), o3), this.posOut += i3, o3 += i3;
    }
    return t;
  }
  xofInto(t) {
    if (!this.enableXOF) throw new Error("XOF is not possible for this instance");
    return this.writeInto(t);
  }
  xof(t) {
    return Ne$2(t), this.xofInto(new Uint8Array(t));
  }
  digestInto(t) {
    if (sn$2(t, this), this.finished) throw new Error("digest() was already called");
    return this.writeInto(t), this.destroy(), t;
  }
  digest() {
    return this.digestInto(new Uint8Array(this.outputLen));
  }
  destroy() {
    this.destroyed = true, this.state.fill(0);
  }
  _cloneInto(t) {
    const { blockLen: n3, suffix: r2, outputLen: o3, rounds: s2, enableXOF: i3 } = this;
    return t || (t = new Bt(n3, r2, o3, i3, s2)), t.state32.set(this.state32), t.pos = this.pos, t.posOut = this.posOut, t.finished = this.finished, t.rounds = s2, t.suffix = r2, t.outputLen = o3, t.enableXOF = i3, t.destroyed = this.destroyed, t;
  }
};
const Mo$1 = (e2, t, n3) => fn$2(() => new Bt$2(t, e2, n3)), Vo$1 = Mo$1(1, 136, 256 / 8), Ho$1 = "https://rpc.walletconnect.org/v1";
function ct$1(e2) {
  const t = `Ethereum Signed Message:
${e2.length}`, n3 = new TextEncoder().encode(t + e2);
  return "0x" + Buffer.from(Vo$1(n3)).toString("hex");
}
async function yn$2(e2, t, n3, r2, o3, s2) {
  switch (n3.t) {
    case "eip191":
      return await mn$2(e2, t, n3.s);
    case "eip1271":
      return await bn$2(e2, t, n3.s, r2, o3, s2);
    default:
      throw new Error(`verifySignature failed: Attempted to verify CacaoSignature with unknown type: ${n3.t}`);
  }
}
async function mn$2(e2, t, n3) {
  return (await recoverAddress({ hash: ct$1(t), signature: n3 })).toLowerCase() === e2.toLowerCase();
}
async function bn$2(e2, t, n3, r2, o3, s2) {
  const i3 = Ye$1(r2);
  if (!i3.namespace || !i3.reference) throw new Error(`isValidEip1271Signature failed: chainId must be in CAIP-2 format, received: ${r2}`);
  try {
    const c2 = "0x1626ba7e", u2 = "0000000000000000000000000000000000000000000000000000000000000040", a2 = "0000000000000000000000000000000000000000000000000000000000000041", l2 = n3.substring(2), f5 = ct$1(t).substring(2), d4 = c2 + f5 + u2 + a2 + l2, g2 = await fetch(`${s2 || Ho$1}/?chainId=${r2}&projectId=${o3}`, { method: "POST", body: JSON.stringify({ id: Ko$1(), jsonrpc: "2.0", method: "eth_call", params: [{ to: e2, data: d4 }, "latest"] }) }), { result: y3 } = await g2.json();
    return y3 ? y3.slice(0, c2.length).toLowerCase() === c2.toLowerCase() : false;
  } catch (c2) {
    return console.error("isValidEip1271Signature: ", c2), false;
  }
}
function Ko$1() {
  return Date.now() + Math.floor(Math.random() * 1e3);
}
var Fo$1 = Object.defineProperty, qo$1 = Object.defineProperties, Go$1 = Object.getOwnPropertyDescriptors, wn$2 = Object.getOwnPropertySymbols, Wo$1 = Object.prototype.hasOwnProperty, zo$1 = Object.prototype.propertyIsEnumerable, En$2 = (e2, t, n3) => t in e2 ? Fo$1(e2, t, { enumerable: true, configurable: true, writable: true, value: n3 }) : e2[t] = n3, at$1 = (e2, t) => {
  for (var n3 in t || (t = {})) Wo$1.call(t, n3) && En$2(e2, n3, t[n3]);
  if (wn$2) for (var n3 of wn$2(t)) zo$1.call(t, n3) && En$2(e2, n3, t[n3]);
  return e2;
}, vn$2 = (e2, t) => qo$1(e2, Go$1(t));
const Jo$1 = "did:pkh:", ke$3 = (e2) => e2 == null ? void 0 : e2.split(":"), xn$2 = (e2) => {
  const t = e2 && ke$3(e2);
  if (t) return e2.includes(Jo$1) ? t[3] : t[1];
}, On$2 = (e2) => {
  const t = e2 && ke$3(e2);
  if (t) return t[2] + ":" + t[3];
}, ut$2 = (e2) => {
  const t = e2 && ke$3(e2);
  if (t) return t.pop();
};
async function Yo$1(e2) {
  const { cacao: t, projectId: n3 } = e2, { s: r2, p: o3 } = t, s2 = In$2(o3, o3.iss), i3 = ut$2(o3.iss);
  return await yn$2(i3, s2, r2, On$2(o3.iss), n3);
}
const In$2 = (e2, t) => {
  const n3 = `${e2.domain} wants you to sign in with your Ethereum account:`, r2 = ut$2(t);
  if (!e2.aud && !e2.uri) throw new Error("Either `aud` or `uri` is required to construct the message");
  let o3 = e2.statement || void 0;
  const s2 = `URI: ${e2.aud || e2.uri}`, i3 = `Version: ${e2.version}`, c2 = `Chain ID: ${xn$2(t)}`, u2 = `Nonce: ${e2.nonce}`, a2 = `Issued At: ${e2.iat}`, l2 = e2.exp ? `Expiration Time: ${e2.exp}` : void 0, f5 = e2.nbf ? `Not Before: ${e2.nbf}` : void 0, d4 = e2.requestId ? `Request ID: ${e2.requestId}` : void 0, g2 = e2.resources ? `Resources:${e2.resources.map((h4) => `
- ${h4}`).join("")}` : void 0, y3 = Me$3(e2.resources);
  if (y3) {
    const h4 = oe$1(y3);
    o3 = dt$2(o3, h4);
  }
  return [n3, r2, "", o3, "", s2, i3, c2, u2, a2, l2, f5, d4, g2].filter((h4) => h4 != null).join(`
`);
};
function Un$2(e2) {
  return Buffer.from(JSON.stringify(e2)).toString("base64");
}
function _n$2(e2) {
  return JSON.parse(Buffer.from(e2, "base64").toString("utf-8"));
}
function Y$2(e2) {
  if (!e2) throw new Error("No recap provided, value is undefined");
  if (!e2.att) throw new Error("No `att` property found");
  const t = Object.keys(e2.att);
  if (!(t != null && t.length)) throw new Error("No resources found in `att` property");
  t.forEach((n3) => {
    const r2 = e2.att[n3];
    if (Array.isArray(r2)) throw new Error(`Resource must be an object: ${n3}`);
    if (typeof r2 != "object") throw new Error(`Resource must be an object: ${n3}`);
    if (!Object.keys(r2).length) throw new Error(`Resource object is empty: ${n3}`);
    Object.keys(r2).forEach((o3) => {
      const s2 = r2[o3];
      if (!Array.isArray(s2)) throw new Error(`Ability limits ${o3} must be an array of objects, found: ${s2}`);
      if (!s2.length) throw new Error(`Value of ${o3} is empty array, must be an array with objects`);
      s2.forEach((i3) => {
        if (typeof i3 != "object") throw new Error(`Ability limits (${o3}) must be an array of objects, found: ${i3}`);
      });
    });
  });
}
function Tn$2(e2, t, n3, r2 = {}) {
  return n3 == null ? void 0 : n3.sort((o3, s2) => o3.localeCompare(s2)), { att: { [e2]: ft$1(t, n3, r2) } };
}
function ft$1(e2, t, n3 = {}) {
  t = t == null ? void 0 : t.sort((o3, s2) => o3.localeCompare(s2));
  const r2 = t.map((o3) => ({ [`${e2}/${o3}`]: [n3] }));
  return Object.assign({}, ...r2);
}
function De$2(e2) {
  return Y$2(e2), `urn:recap:${Un$2(e2).replace(/=/g, "")}`;
}
function oe$1(e2) {
  const t = _n$2(e2.replace("urn:recap:", ""));
  return Y$2(t), t;
}
function ts$1(e2, t, n3) {
  const r2 = Tn$2(e2, t, n3);
  return De$2(r2);
}
function lt$1(e2) {
  return e2 && e2.includes("urn:recap:");
}
function ns$1(e2, t) {
  const n3 = oe$1(e2), r2 = oe$1(t), o3 = Rn$2(n3, r2);
  return De$2(o3);
}
function Rn$2(e2, t) {
  Y$2(e2), Y$2(t);
  const n3 = Object.keys(e2.att).concat(Object.keys(t.att)).sort((o3, s2) => o3.localeCompare(s2)), r2 = { att: {} };
  return n3.forEach((o3) => {
    var s2, i3;
    Object.keys(((s2 = e2.att) == null ? void 0 : s2[o3]) || {}).concat(Object.keys(((i3 = t.att) == null ? void 0 : i3[o3]) || {})).sort((c2, u2) => c2.localeCompare(u2)).forEach((c2) => {
      var u2, a2;
      r2.att[o3] = vn$2(at$1({}, r2.att[o3]), { [c2]: ((u2 = e2.att[o3]) == null ? void 0 : u2[c2]) || ((a2 = t.att[o3]) == null ? void 0 : a2[c2]) });
    });
  }), r2;
}
function dt$2(e2 = "", t) {
  Y$2(t);
  const n3 = "I further authorize the stated URI to perform the following actions on my behalf: ";
  if (e2.includes(n3)) return e2;
  const r2 = [];
  let o3 = 0;
  Object.keys(t.att).forEach((c2) => {
    const u2 = Object.keys(t.att[c2]).map((f5) => ({ ability: f5.split("/")[0], action: f5.split("/")[1] }));
    u2.sort((f5, d4) => f5.action.localeCompare(d4.action));
    const a2 = {};
    u2.forEach((f5) => {
      a2[f5.ability] || (a2[f5.ability] = []), a2[f5.ability].push(f5.action);
    });
    const l2 = Object.keys(a2).map((f5) => (o3++, `(${o3}) '${f5}': '${a2[f5].join("', '")}' for '${c2}'.`));
    r2.push(l2.join(", ").replace(".,", "."));
  });
  const s2 = r2.join(" "), i3 = `${n3}${s2}`;
  return `${e2 ? e2 + " " : ""}${i3}`;
}
function rs$1(e2) {
  var t;
  const n3 = oe$1(e2);
  Y$2(n3);
  const r2 = (t = n3.att) == null ? void 0 : t.eip155;
  return r2 ? Object.keys(r2).map((o3) => o3.split("/")[1]) : [];
}
function os$1(e2) {
  const t = oe$1(e2);
  Y$2(t);
  const n3 = [];
  return Object.values(t.att).forEach((r2) => {
    Object.values(r2).forEach((o3) => {
      var s2;
      (s2 = o3 == null ? void 0 : o3[0]) != null && s2.chains && n3.push(o3[0].chains);
    });
  }), [...new Set(n3.flat())];
}
function Me$3(e2) {
  if (!e2) return;
  const t = e2 == null ? void 0 : e2[e2.length - 1];
  return lt$1(t) ? t : void 0;
}
function ht$2(e2) {
  if (!Number.isSafeInteger(e2) || e2 < 0) throw new Error("positive integer expected, got " + e2);
}
function Ln$2(e2) {
  return e2 instanceof Uint8Array || ArrayBuffer.isView(e2) && e2.constructor.name === "Uint8Array";
}
function F$2(e2, ...t) {
  if (!Ln$2(e2)) throw new Error("Uint8Array expected");
  if (t.length > 0 && !t.includes(e2.length)) throw new Error("Uint8Array expected of length " + t + ", got length=" + e2.length);
}
function Bn$2(e2, t = true) {
  if (e2.destroyed) throw new Error("Hash instance has been destroyed");
  if (t && e2.finished) throw new Error("Hash#digest() has already been called");
}
function ss$1(e2, t) {
  F$2(e2);
  const n3 = t.outputLen;
  if (e2.length < n3) throw new Error("digestInto() expects output buffer of length at least " + n3);
}
function jn$2(e2) {
  if (typeof e2 != "boolean") throw new Error(`boolean expected, not ${e2}`);
}
const se$2 = (e2) => new Uint32Array(e2.buffer, e2.byteOffset, Math.floor(e2.byteLength / 4)), is$1 = (e2) => new DataView(e2.buffer, e2.byteOffset, e2.byteLength), cs$1 = new Uint8Array(new Uint32Array([287454020]).buffer)[0] === 68;
if (!cs$1) throw new Error("Non little-endian hardware is not supported");
function as$1(e2) {
  if (typeof e2 != "string") throw new Error("string expected");
  return new Uint8Array(new TextEncoder().encode(e2));
}
function pt$2(e2) {
  if (typeof e2 == "string") e2 = as$1(e2);
  else if (Ln$2(e2)) e2 = gt$2(e2);
  else throw new Error("Uint8Array expected, got " + typeof e2);
  return e2;
}
function us$1(e2, t) {
  if (t == null || typeof t != "object") throw new Error("options must be defined");
  return Object.assign(e2, t);
}
function fs$2(e2, t) {
  if (e2.length !== t.length) return false;
  let n3 = 0;
  for (let r2 = 0; r2 < e2.length; r2++) n3 |= e2[r2] ^ t[r2];
  return n3 === 0;
}
const ls$1 = (e2, t) => {
  function n3(r2, ...o3) {
    if (F$2(r2), e2.nonceLength !== void 0) {
      const l2 = o3[0];
      if (!l2) throw new Error("nonce / iv required");
      e2.varSizeNonce ? F$2(l2) : F$2(l2, e2.nonceLength);
    }
    const s2 = e2.tagLength;
    s2 && o3[1] !== void 0 && F$2(o3[1]);
    const i3 = t(r2, ...o3), c2 = (l2, f5) => {
      if (f5 !== void 0) {
        if (l2 !== 2) throw new Error("cipher output not supported");
        F$2(f5);
      }
    };
    let u2 = false;
    return { encrypt(l2, f5) {
      if (u2) throw new Error("cannot encrypt() twice with same key + nonce");
      return u2 = true, F$2(l2), c2(i3.encrypt.length, f5), i3.encrypt(l2, f5);
    }, decrypt(l2, f5) {
      if (F$2(l2), s2 && l2.length < s2) throw new Error("invalid ciphertext length: smaller than tagLength=" + s2);
      return c2(i3.decrypt.length, f5), i3.decrypt(l2, f5);
    } };
  }
  return Object.assign(n3, e2), n3;
};
function Cn$2(e2, t, n3 = true) {
  if (t === void 0) return new Uint8Array(e2);
  if (t.length !== e2) throw new Error("invalid output length, expected " + e2 + ", got: " + t.length);
  if (n3 && !ds$1(t)) throw new Error("invalid output, must be aligned");
  return t;
}
function kn$2(e2, t, n3, r2) {
  if (typeof e2.setBigUint64 == "function") return e2.setBigUint64(t, n3, r2);
  const o3 = BigInt(32), s2 = BigInt(4294967295), i3 = Number(n3 >> o3 & s2), c2 = Number(n3 & s2), u2 = 4, a2 = 0;
  e2.setUint32(t + u2, i3, r2), e2.setUint32(t + a2, c2, r2);
}
function ds$1(e2) {
  return e2.byteOffset % 4 === 0;
}
function gt$2(e2) {
  return Uint8Array.from(e2);
}
function Ee$2(...e2) {
  for (let t = 0; t < e2.length; t++) e2[t].fill(0);
}
const Dn$2 = (e2) => Uint8Array.from(e2.split("").map((t) => t.charCodeAt(0))), hs$1 = Dn$2("expand 16-byte k"), ps$1 = Dn$2("expand 32-byte k"), gs$1 = se$2(hs$1), ys$1 = se$2(ps$1);
function x$6(e2, t) {
  return e2 << t | e2 >>> 32 - t;
}
function yt$1(e2) {
  return e2.byteOffset % 4 === 0;
}
const Ve$2 = 64, ms$1 = 16, Mn$2 = 2 ** 32 - 1, Vn$2 = new Uint32Array();
function bs$2(e2, t, n3, r2, o3, s2, i3, c2) {
  const u2 = o3.length, a2 = new Uint8Array(Ve$2), l2 = se$2(a2), f5 = yt$1(o3) && yt$1(s2), d4 = f5 ? se$2(o3) : Vn$2, g2 = f5 ? se$2(s2) : Vn$2;
  for (let y3 = 0; y3 < u2; i3++) {
    if (e2(t, n3, r2, l2, i3, c2), i3 >= Mn$2) throw new Error("arx: counter overflow");
    const h4 = Math.min(Ve$2, u2 - y3);
    if (f5 && h4 === Ve$2) {
      const m4 = y3 / 4;
      if (y3 % 4 !== 0) throw new Error("arx: invalid block position");
      for (let B3 = 0, b2; B3 < ms$1; B3++) b2 = m4 + B3, g2[b2] = d4[b2] ^ l2[B3];
      y3 += Ve$2;
      continue;
    }
    for (let m4 = 0, B3; m4 < h4; m4++) B3 = y3 + m4, s2[B3] = o3[B3] ^ a2[m4];
    y3 += h4;
  }
}
function ws$1(e2, t) {
  const { allowShortKeys: n3, extendNonceFn: r2, counterLength: o3, counterRight: s2, rounds: i3 } = us$1({ allowShortKeys: false, counterLength: 8, counterRight: false, rounds: 20 }, t);
  if (typeof e2 != "function") throw new Error("core must be a function");
  return ht$2(o3), ht$2(i3), jn$2(s2), jn$2(n3), (c2, u2, a2, l2, f5 = 0) => {
    F$2(c2), F$2(u2), F$2(a2);
    const d4 = a2.length;
    if (l2 === void 0 && (l2 = new Uint8Array(d4)), F$2(l2), ht$2(f5), f5 < 0 || f5 >= Mn$2) throw new Error("arx: counter overflow");
    if (l2.length < d4) throw new Error(`arx: output (${l2.length}) is shorter than data (${d4})`);
    const g2 = [];
    let y3 = c2.length, h4, m4;
    if (y3 === 32) g2.push(h4 = gt$2(c2)), m4 = ys$1;
    else if (y3 === 16 && n3) h4 = new Uint8Array(32), h4.set(c2), h4.set(c2, 16), m4 = gs$1, g2.push(h4);
    else throw new Error(`arx: invalid 32-byte key, got length=${y3}`);
    yt$1(u2) || g2.push(u2 = gt$2(u2));
    const B3 = se$2(h4);
    if (r2) {
      if (u2.length !== 24) throw new Error("arx: extended nonce must be 24 bytes");
      r2(m4, B3, se$2(u2.subarray(0, 16)), B3), u2 = u2.subarray(16);
    }
    const b2 = 16 - o3;
    if (b2 !== u2.length) throw new Error(`arx: nonce must be ${b2} or 16 bytes`);
    if (b2 !== 12) {
      const I3 = new Uint8Array(12);
      I3.set(u2, s2 ? 0 : 12 - u2.length), u2 = I3, g2.push(u2);
    }
    const _3 = se$2(u2);
    return bs$2(e2, m4, B3, _3, a2, l2, f5, i3), Ee$2(...g2), l2;
  };
}
const M$4 = (e2, t) => e2[t++] & 255 | (e2[t++] & 255) << 8;
let Es$1 = class Es {
  constructor(t) {
    this.blockLen = 16, this.outputLen = 16, this.buffer = new Uint8Array(16), this.r = new Uint16Array(10), this.h = new Uint16Array(10), this.pad = new Uint16Array(8), this.pos = 0, this.finished = false, t = pt$2(t), F$2(t, 32);
    const n3 = M$4(t, 0), r2 = M$4(t, 2), o3 = M$4(t, 4), s2 = M$4(t, 6), i3 = M$4(t, 8), c2 = M$4(t, 10), u2 = M$4(t, 12), a2 = M$4(t, 14);
    this.r[0] = n3 & 8191, this.r[1] = (n3 >>> 13 | r2 << 3) & 8191, this.r[2] = (r2 >>> 10 | o3 << 6) & 7939, this.r[3] = (o3 >>> 7 | s2 << 9) & 8191, this.r[4] = (s2 >>> 4 | i3 << 12) & 255, this.r[5] = i3 >>> 1 & 8190, this.r[6] = (i3 >>> 14 | c2 << 2) & 8191, this.r[7] = (c2 >>> 11 | u2 << 5) & 8065, this.r[8] = (u2 >>> 8 | a2 << 8) & 8191, this.r[9] = a2 >>> 5 & 127;
    for (let l2 = 0; l2 < 8; l2++) this.pad[l2] = M$4(t, 16 + 2 * l2);
  }
  process(t, n3, r2 = false) {
    const o3 = r2 ? 0 : 2048, { h: s2, r: i3 } = this, c2 = i3[0], u2 = i3[1], a2 = i3[2], l2 = i3[3], f5 = i3[4], d4 = i3[5], g2 = i3[6], y3 = i3[7], h4 = i3[8], m4 = i3[9], B3 = M$4(t, n3 + 0), b2 = M$4(t, n3 + 2), _3 = M$4(t, n3 + 4), I3 = M$4(t, n3 + 6), k2 = M$4(t, n3 + 8), E2 = M$4(t, n3 + 10), L3 = M$4(t, n3 + 12), j2 = M$4(t, n3 + 14);
    let v2 = s2[0] + (B3 & 8191), O4 = s2[1] + ((B3 >>> 13 | b2 << 3) & 8191), w2 = s2[2] + ((b2 >>> 10 | _3 << 6) & 8191), R4 = s2[3] + ((_3 >>> 7 | I3 << 9) & 8191), A2 = s2[4] + ((I3 >>> 4 | k2 << 12) & 8191), T2 = s2[5] + (k2 >>> 1 & 8191), N2 = s2[6] + ((k2 >>> 14 | E2 << 2) & 8191), S4 = s2[7] + ((E2 >>> 11 | L3 << 5) & 8191), U2 = s2[8] + ((L3 >>> 8 | j2 << 8) & 8191), $2 = s2[9] + (j2 >>> 5 | o3), p2 = 0, C2 = p2 + v2 * c2 + O4 * (5 * m4) + w2 * (5 * h4) + R4 * (5 * y3) + A2 * (5 * g2);
    p2 = C2 >>> 13, C2 &= 8191, C2 += T2 * (5 * d4) + N2 * (5 * f5) + S4 * (5 * l2) + U2 * (5 * a2) + $2 * (5 * u2), p2 += C2 >>> 13, C2 &= 8191;
    let D2 = p2 + v2 * u2 + O4 * c2 + w2 * (5 * m4) + R4 * (5 * h4) + A2 * (5 * y3);
    p2 = D2 >>> 13, D2 &= 8191, D2 += T2 * (5 * g2) + N2 * (5 * d4) + S4 * (5 * f5) + U2 * (5 * l2) + $2 * (5 * a2), p2 += D2 >>> 13, D2 &= 8191;
    let P3 = p2 + v2 * a2 + O4 * u2 + w2 * c2 + R4 * (5 * m4) + A2 * (5 * h4);
    p2 = P3 >>> 13, P3 &= 8191, P3 += T2 * (5 * y3) + N2 * (5 * g2) + S4 * (5 * d4) + U2 * (5 * f5) + $2 * (5 * l2), p2 += P3 >>> 13, P3 &= 8191;
    let G2 = p2 + v2 * l2 + O4 * a2 + w2 * u2 + R4 * c2 + A2 * (5 * m4);
    p2 = G2 >>> 13, G2 &= 8191, G2 += T2 * (5 * h4) + N2 * (5 * y3) + S4 * (5 * g2) + U2 * (5 * d4) + $2 * (5 * f5), p2 += G2 >>> 13, G2 &= 8191;
    let X2 = p2 + v2 * f5 + O4 * l2 + w2 * a2 + R4 * u2 + A2 * c2;
    p2 = X2 >>> 13, X2 &= 8191, X2 += T2 * (5 * m4) + N2 * (5 * h4) + S4 * (5 * y3) + U2 * (5 * g2) + $2 * (5 * d4), p2 += X2 >>> 13, X2 &= 8191;
    let Z2 = p2 + v2 * d4 + O4 * f5 + w2 * l2 + R4 * a2 + A2 * u2;
    p2 = Z2 >>> 13, Z2 &= 8191, Z2 += T2 * c2 + N2 * (5 * m4) + S4 * (5 * h4) + U2 * (5 * y3) + $2 * (5 * g2), p2 += Z2 >>> 13, Z2 &= 8191;
    let he2 = p2 + v2 * g2 + O4 * d4 + w2 * f5 + R4 * l2 + A2 * a2;
    p2 = he2 >>> 13, he2 &= 8191, he2 += T2 * u2 + N2 * c2 + S4 * (5 * m4) + U2 * (5 * h4) + $2 * (5 * y3), p2 += he2 >>> 13, he2 &= 8191;
    let pe2 = p2 + v2 * y3 + O4 * g2 + w2 * d4 + R4 * f5 + A2 * l2;
    p2 = pe2 >>> 13, pe2 &= 8191, pe2 += T2 * a2 + N2 * u2 + S4 * c2 + U2 * (5 * m4) + $2 * (5 * h4), p2 += pe2 >>> 13, pe2 &= 8191;
    let ge2 = p2 + v2 * h4 + O4 * y3 + w2 * g2 + R4 * d4 + A2 * f5;
    p2 = ge2 >>> 13, ge2 &= 8191, ge2 += T2 * l2 + N2 * a2 + S4 * u2 + U2 * c2 + $2 * (5 * m4), p2 += ge2 >>> 13, ge2 &= 8191;
    let ye2 = p2 + v2 * m4 + O4 * h4 + w2 * y3 + R4 * g2 + A2 * d4;
    p2 = ye2 >>> 13, ye2 &= 8191, ye2 += T2 * f5 + N2 * l2 + S4 * a2 + U2 * u2 + $2 * c2, p2 += ye2 >>> 13, ye2 &= 8191, p2 = (p2 << 2) + p2 | 0, p2 = p2 + C2 | 0, C2 = p2 & 8191, p2 = p2 >>> 13, D2 += p2, s2[0] = C2, s2[1] = D2, s2[2] = P3, s2[3] = G2, s2[4] = X2, s2[5] = Z2, s2[6] = he2, s2[7] = pe2, s2[8] = ge2, s2[9] = ye2;
  }
  finalize() {
    const { h: t, pad: n3 } = this, r2 = new Uint16Array(10);
    let o3 = t[1] >>> 13;
    t[1] &= 8191;
    for (let c2 = 2; c2 < 10; c2++) t[c2] += o3, o3 = t[c2] >>> 13, t[c2] &= 8191;
    t[0] += o3 * 5, o3 = t[0] >>> 13, t[0] &= 8191, t[1] += o3, o3 = t[1] >>> 13, t[1] &= 8191, t[2] += o3, r2[0] = t[0] + 5, o3 = r2[0] >>> 13, r2[0] &= 8191;
    for (let c2 = 1; c2 < 10; c2++) r2[c2] = t[c2] + o3, o3 = r2[c2] >>> 13, r2[c2] &= 8191;
    r2[9] -= 8192;
    let s2 = (o3 ^ 1) - 1;
    for (let c2 = 0; c2 < 10; c2++) r2[c2] &= s2;
    s2 = ~s2;
    for (let c2 = 0; c2 < 10; c2++) t[c2] = t[c2] & s2 | r2[c2];
    t[0] = (t[0] | t[1] << 13) & 65535, t[1] = (t[1] >>> 3 | t[2] << 10) & 65535, t[2] = (t[2] >>> 6 | t[3] << 7) & 65535, t[3] = (t[3] >>> 9 | t[4] << 4) & 65535, t[4] = (t[4] >>> 12 | t[5] << 1 | t[6] << 14) & 65535, t[5] = (t[6] >>> 2 | t[7] << 11) & 65535, t[6] = (t[7] >>> 5 | t[8] << 8) & 65535, t[7] = (t[8] >>> 8 | t[9] << 5) & 65535;
    let i3 = t[0] + n3[0];
    t[0] = i3 & 65535;
    for (let c2 = 1; c2 < 8; c2++) i3 = (t[c2] + n3[c2] | 0) + (i3 >>> 16) | 0, t[c2] = i3 & 65535;
    Ee$2(r2);
  }
  update(t) {
    Bn$2(this);
    const { buffer: n3, blockLen: r2 } = this;
    t = pt$2(t);
    const o3 = t.length;
    for (let s2 = 0; s2 < o3; ) {
      const i3 = Math.min(r2 - this.pos, o3 - s2);
      if (i3 === r2) {
        for (; r2 <= o3 - s2; s2 += r2) this.process(t, s2);
        continue;
      }
      n3.set(t.subarray(s2, s2 + i3), this.pos), this.pos += i3, s2 += i3, this.pos === r2 && (this.process(n3, 0, false), this.pos = 0);
    }
    return this;
  }
  destroy() {
    Ee$2(this.h, this.r, this.buffer, this.pad);
  }
  digestInto(t) {
    Bn$2(this), ss$1(t, this), this.finished = true;
    const { buffer: n3, h: r2 } = this;
    let { pos: o3 } = this;
    if (o3) {
      for (n3[o3++] = 1; o3 < 16; o3++) n3[o3] = 0;
      this.process(n3, 0, true);
    }
    this.finalize();
    let s2 = 0;
    for (let i3 = 0; i3 < 8; i3++) t[s2++] = r2[i3] >>> 0, t[s2++] = r2[i3] >>> 8;
    return t;
  }
  digest() {
    const { buffer: t, outputLen: n3 } = this;
    this.digestInto(t);
    const r2 = t.slice(0, n3);
    return this.destroy(), r2;
  }
};
function vs$2(e2) {
  const t = (r2, o3) => e2(o3).update(pt$2(r2)).digest(), n3 = e2(new Uint8Array(32));
  return t.outputLen = n3.outputLen, t.blockLen = n3.blockLen, t.create = (r2) => e2(r2), t;
}
const xs$2 = vs$2((e2) => new Es$1(e2));
function Os$2(e2, t, n3, r2, o3, s2 = 20) {
  let i3 = e2[0], c2 = e2[1], u2 = e2[2], a2 = e2[3], l2 = t[0], f5 = t[1], d4 = t[2], g2 = t[3], y3 = t[4], h4 = t[5], m4 = t[6], B3 = t[7], b2 = o3, _3 = n3[0], I3 = n3[1], k2 = n3[2], E2 = i3, L3 = c2, j2 = u2, v2 = a2, O4 = l2, w2 = f5, R4 = d4, A2 = g2, T2 = y3, N2 = h4, S4 = m4, U2 = B3, $2 = b2, p2 = _3, C2 = I3, D2 = k2;
  for (let G2 = 0; G2 < s2; G2 += 2) E2 = E2 + O4 | 0, $2 = x$6($2 ^ E2, 16), T2 = T2 + $2 | 0, O4 = x$6(O4 ^ T2, 12), E2 = E2 + O4 | 0, $2 = x$6($2 ^ E2, 8), T2 = T2 + $2 | 0, O4 = x$6(O4 ^ T2, 7), L3 = L3 + w2 | 0, p2 = x$6(p2 ^ L3, 16), N2 = N2 + p2 | 0, w2 = x$6(w2 ^ N2, 12), L3 = L3 + w2 | 0, p2 = x$6(p2 ^ L3, 8), N2 = N2 + p2 | 0, w2 = x$6(w2 ^ N2, 7), j2 = j2 + R4 | 0, C2 = x$6(C2 ^ j2, 16), S4 = S4 + C2 | 0, R4 = x$6(R4 ^ S4, 12), j2 = j2 + R4 | 0, C2 = x$6(C2 ^ j2, 8), S4 = S4 + C2 | 0, R4 = x$6(R4 ^ S4, 7), v2 = v2 + A2 | 0, D2 = x$6(D2 ^ v2, 16), U2 = U2 + D2 | 0, A2 = x$6(A2 ^ U2, 12), v2 = v2 + A2 | 0, D2 = x$6(D2 ^ v2, 8), U2 = U2 + D2 | 0, A2 = x$6(A2 ^ U2, 7), E2 = E2 + w2 | 0, D2 = x$6(D2 ^ E2, 16), S4 = S4 + D2 | 0, w2 = x$6(w2 ^ S4, 12), E2 = E2 + w2 | 0, D2 = x$6(D2 ^ E2, 8), S4 = S4 + D2 | 0, w2 = x$6(w2 ^ S4, 7), L3 = L3 + R4 | 0, $2 = x$6($2 ^ L3, 16), U2 = U2 + $2 | 0, R4 = x$6(R4 ^ U2, 12), L3 = L3 + R4 | 0, $2 = x$6($2 ^ L3, 8), U2 = U2 + $2 | 0, R4 = x$6(R4 ^ U2, 7), j2 = j2 + A2 | 0, p2 = x$6(p2 ^ j2, 16), T2 = T2 + p2 | 0, A2 = x$6(A2 ^ T2, 12), j2 = j2 + A2 | 0, p2 = x$6(p2 ^ j2, 8), T2 = T2 + p2 | 0, A2 = x$6(A2 ^ T2, 7), v2 = v2 + O4 | 0, C2 = x$6(C2 ^ v2, 16), N2 = N2 + C2 | 0, O4 = x$6(O4 ^ N2, 12), v2 = v2 + O4 | 0, C2 = x$6(C2 ^ v2, 8), N2 = N2 + C2 | 0, O4 = x$6(O4 ^ N2, 7);
  let P3 = 0;
  r2[P3++] = i3 + E2 | 0, r2[P3++] = c2 + L3 | 0, r2[P3++] = u2 + j2 | 0, r2[P3++] = a2 + v2 | 0, r2[P3++] = l2 + O4 | 0, r2[P3++] = f5 + w2 | 0, r2[P3++] = d4 + R4 | 0, r2[P3++] = g2 + A2 | 0, r2[P3++] = y3 + T2 | 0, r2[P3++] = h4 + N2 | 0, r2[P3++] = m4 + S4 | 0, r2[P3++] = B3 + U2 | 0, r2[P3++] = b2 + $2 | 0, r2[P3++] = _3 + p2 | 0, r2[P3++] = I3 + C2 | 0, r2[P3++] = k2 + D2 | 0;
}
const Is$2 = ws$1(Os$2, { counterRight: false, counterLength: 4, allowShortKeys: false }), As$2 = new Uint8Array(16), Hn$2 = (e2, t) => {
  e2.update(t);
  const n3 = t.length % 16;
  n3 && e2.update(As$2.subarray(n3));
}, Ns$2 = new Uint8Array(32);
function Kn$2(e2, t, n3, r2, o3) {
  const s2 = e2(t, n3, Ns$2), i3 = xs$2.create(s2);
  o3 && Hn$2(i3, o3), Hn$2(i3, r2);
  const c2 = new Uint8Array(16), u2 = is$1(c2);
  kn$2(u2, 0, BigInt(o3 ? o3.length : 0), true), kn$2(u2, 8, BigInt(r2.length), true), i3.update(c2);
  const a2 = i3.digest();
  return Ee$2(s2, c2), a2;
}
const Ss$1 = (e2) => (t, n3, r2) => ({ encrypt(s2, i3) {
  const c2 = s2.length;
  i3 = Cn$2(c2 + 16, i3, false), i3.set(s2);
  const u2 = i3.subarray(0, -16);
  e2(t, n3, u2, u2, 1);
  const a2 = Kn$2(e2, t, n3, u2, r2);
  return i3.set(a2, c2), Ee$2(a2), i3;
}, decrypt(s2, i3) {
  i3 = Cn$2(s2.length - 16, i3, false);
  const c2 = s2.subarray(0, -16), u2 = s2.subarray(-16), a2 = Kn$2(e2, t, n3, c2, r2);
  if (!fs$2(u2, a2)) throw new Error("invalid tag");
  return i3.set(s2.subarray(0, -16)), e2(t, n3, i3, i3, 1), Ee$2(a2), i3;
} }), Fn$2 = ls$1({ blockSize: 64, nonceLength: 12, tagLength: 16 }, Ss$1(Is$2));
let qn$2 = class qn extends it$1 {
  constructor(t, n3) {
    super(), this.finished = false, this.destroyed = false, ot$1(t);
    const r2 = we$1(n3);
    if (this.iHash = t.create(), typeof this.iHash.update != "function") throw new Error("Expected instance of class which extends utils.Hash");
    this.blockLen = this.iHash.blockLen, this.outputLen = this.iHash.outputLen;
    const o3 = this.blockLen, s2 = new Uint8Array(o3);
    s2.set(r2.length > o3 ? t.create().update(r2).digest() : r2);
    for (let i3 = 0; i3 < s2.length; i3++) s2[i3] ^= 54;
    this.iHash.update(s2), this.oHash = t.create();
    for (let i3 = 0; i3 < s2.length; i3++) s2[i3] ^= 106;
    this.oHash.update(s2), s2.fill(0);
  }
  update(t) {
    return me$2(this), this.iHash.update(t), this;
  }
  digestInto(t) {
    me$2(this), je$2(t, this.outputLen), this.finished = true, this.iHash.digestInto(t), this.oHash.update(t), this.oHash.digestInto(t), this.destroy();
  }
  digest() {
    const t = new Uint8Array(this.oHash.outputLen);
    return this.digestInto(t), t;
  }
  _cloneInto(t) {
    t || (t = Object.create(Object.getPrototypeOf(this), {}));
    const { oHash: n3, iHash: r2, finished: o3, destroyed: s2, blockLen: i3, outputLen: c2 } = this;
    return t = t, t.finished = o3, t.destroyed = s2, t.blockLen = i3, t.outputLen = c2, t.oHash = n3._cloneInto(t.oHash), t.iHash = r2._cloneInto(t.iHash), t;
  }
  destroy() {
    this.destroyed = true, this.oHash.destroy(), this.iHash.destroy();
  }
};
const mt$2 = (e2, t, n3) => new qn$2(e2, t).update(n3).digest();
mt$2.create = (e2, t) => new qn$2(e2, t);
function Us$1(e2, t, n3) {
  return ot$1(e2), n3 === void 0 && (n3 = new Uint8Array(e2.outputLen)), mt$2(e2, we$1(n3), we$1(t));
}
const bt = new Uint8Array([0]), Gn$2 = new Uint8Array();
function _s$1(e2, t, n3, r2 = 32) {
  if (ot$1(e2), Ne$2(r2), r2 > 255 * e2.outputLen) throw new Error("Length should be <= 255*HashLen");
  const o3 = Math.ceil(r2 / e2.outputLen);
  n3 === void 0 && (n3 = Gn$2);
  const s2 = new Uint8Array(o3 * e2.outputLen), i3 = mt$2.create(e2, t), c2 = i3._cloneInto(), u2 = new Uint8Array(i3.outputLen);
  for (let a2 = 0; a2 < o3; a2++) bt[0] = a2 + 1, c2.update(a2 === 0 ? Gn$2 : u2).update(n3).update(bt).digestInto(u2), s2.set(u2, e2.outputLen * a2), i3._cloneInto(c2);
  return i3.destroy(), c2.destroy(), u2.fill(0), bt.fill(0), s2.slice(0, r2);
}
const Ts$2 = (e2, t, n3, r2, o3) => _s$1(e2, Us$1(e2, t, n3), r2, o3);
function $s$1(e2, t, n3, r2) {
  if (typeof e2.setBigUint64 == "function") return e2.setBigUint64(t, n3, r2);
  const o3 = BigInt(32), s2 = BigInt(4294967295), i3 = Number(n3 >> o3 & s2), c2 = Number(n3 & s2), u2 = r2 ? 4 : 0, a2 = r2 ? 0 : 4;
  e2.setUint32(t + u2, i3, r2), e2.setUint32(t + a2, c2, r2);
}
function Rs$2(e2, t, n3) {
  return e2 & t ^ ~e2 & n3;
}
function Ps$2(e2, t, n3) {
  return e2 & t ^ e2 & n3 ^ t & n3;
}
let Ls$3 = class Ls extends it$1 {
  constructor(t, n3, r2, o3) {
    super(), this.blockLen = t, this.outputLen = n3, this.padOffset = r2, this.isLE = o3, this.finished = false, this.length = 0, this.pos = 0, this.destroyed = false, this.buffer = new Uint8Array(t), this.view = st$1(this.buffer);
  }
  update(t) {
    me$2(this);
    const { view: n3, buffer: r2, blockLen: o3 } = this;
    t = we$1(t);
    const s2 = t.length;
    for (let i3 = 0; i3 < s2; ) {
      const c2 = Math.min(o3 - this.pos, s2 - i3);
      if (c2 === o3) {
        const u2 = st$1(t);
        for (; o3 <= s2 - i3; i3 += o3) this.process(u2, i3);
        continue;
      }
      r2.set(t.subarray(i3, i3 + c2), this.pos), this.pos += c2, i3 += c2, this.pos === o3 && (this.process(n3, 0), this.pos = 0);
    }
    return this.length += t.length, this.roundClean(), this;
  }
  digestInto(t) {
    me$2(this), sn$2(t, this), this.finished = true;
    const { buffer: n3, view: r2, blockLen: o3, isLE: s2 } = this;
    let { pos: i3 } = this;
    n3[i3++] = 128, this.buffer.subarray(i3).fill(0), this.padOffset > o3 - i3 && (this.process(r2, 0), i3 = 0);
    for (let f5 = i3; f5 < o3; f5++) n3[f5] = 0;
    $s$1(r2, o3 - 8, BigInt(this.length * 8), s2), this.process(r2, 0);
    const c2 = st$1(t), u2 = this.outputLen;
    if (u2 % 4) throw new Error("_sha2: outputLen should be aligned to 32bit");
    const a2 = u2 / 4, l2 = this.get();
    if (a2 > l2.length) throw new Error("_sha2: outputLen bigger than state");
    for (let f5 = 0; f5 < a2; f5++) c2.setUint32(4 * f5, l2[f5], s2);
  }
  digest() {
    const { buffer: t, outputLen: n3 } = this;
    this.digestInto(t);
    const r2 = t.slice(0, n3);
    return this.destroy(), r2;
  }
  _cloneInto(t) {
    t || (t = new this.constructor()), t.set(...this.get());
    const { blockLen: n3, buffer: r2, length: o3, finished: s2, destroyed: i3, pos: c2 } = this;
    return t.length = o3, t.pos = c2, t.finished = s2, t.destroyed = i3, o3 % n3 && t.buffer.set(r2), t;
  }
};
const Bs$1 = new Uint32Array([1116352408, 1899447441, 3049323471, 3921009573, 961987163, 1508970993, 2453635748, 2870763221, 3624381080, 310598401, 607225278, 1426881987, 1925078388, 2162078206, 2614888103, 3248222580, 3835390401, 4022224774, 264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986, 2554220882, 2821834349, 2952996808, 3210313671, 3336571891, 3584528711, 113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291, 1695183700, 1986661051, 2177026350, 2456956037, 2730485921, 2820302411, 3259730800, 3345764771, 3516065817, 3600352804, 4094571909, 275423344, 430227734, 506948616, 659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779, 1955562222, 2024104815, 2227730452, 2361852424, 2428436474, 2756734187, 3204031479, 3329325298]), ie$2 = new Uint32Array([1779033703, 3144134277, 1013904242, 2773480762, 1359893119, 2600822924, 528734635, 1541459225]), ce$2 = new Uint32Array(64);
let js$2 = class js extends Ls$3 {
  constructor() {
    super(64, 32, 8, false), this.A = ie$2[0] | 0, this.B = ie$2[1] | 0, this.C = ie$2[2] | 0, this.D = ie$2[3] | 0, this.E = ie$2[4] | 0, this.F = ie$2[5] | 0, this.G = ie$2[6] | 0, this.H = ie$2[7] | 0;
  }
  get() {
    const { A: t, B: n3, C: r2, D: o3, E: s2, F: i3, G: c2, H: u2 } = this;
    return [t, n3, r2, o3, s2, i3, c2, u2];
  }
  set(t, n3, r2, o3, s2, i3, c2, u2) {
    this.A = t | 0, this.B = n3 | 0, this.C = r2 | 0, this.D = o3 | 0, this.E = s2 | 0, this.F = i3 | 0, this.G = c2 | 0, this.H = u2 | 0;
  }
  process(t, n3) {
    for (let f5 = 0; f5 < 16; f5++, n3 += 4) ce$2[f5] = t.getUint32(n3, false);
    for (let f5 = 16; f5 < 64; f5++) {
      const d4 = ce$2[f5 - 15], g2 = ce$2[f5 - 2], y3 = J$3(d4, 7) ^ J$3(d4, 18) ^ d4 >>> 3, h4 = J$3(g2, 17) ^ J$3(g2, 19) ^ g2 >>> 10;
      ce$2[f5] = h4 + ce$2[f5 - 7] + y3 + ce$2[f5 - 16] | 0;
    }
    let { A: r2, B: o3, C: s2, D: i3, E: c2, F: u2, G: a2, H: l2 } = this;
    for (let f5 = 0; f5 < 64; f5++) {
      const d4 = J$3(c2, 6) ^ J$3(c2, 11) ^ J$3(c2, 25), g2 = l2 + d4 + Rs$2(c2, u2, a2) + Bs$1[f5] + ce$2[f5] | 0, h4 = (J$3(r2, 2) ^ J$3(r2, 13) ^ J$3(r2, 22)) + Ps$2(r2, o3, s2) | 0;
      l2 = a2, a2 = u2, u2 = c2, c2 = i3 + g2 | 0, i3 = s2, s2 = o3, o3 = r2, r2 = g2 + h4 | 0;
    }
    r2 = r2 + this.A | 0, o3 = o3 + this.B | 0, s2 = s2 + this.C | 0, i3 = i3 + this.D | 0, c2 = c2 + this.E | 0, u2 = u2 + this.F | 0, a2 = a2 + this.G | 0, l2 = l2 + this.H | 0, this.set(r2, o3, s2, i3, c2, u2, a2, l2);
  }
  roundClean() {
    ce$2.fill(0);
  }
  destroy() {
    this.set(0, 0, 0, 0, 0, 0, 0, 0), this.buffer.fill(0);
  }
};
const He$1 = fn$2(() => new js$2());
/*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */
const Wn$2 = BigInt(0);
function wt$2(e2) {
  return e2 instanceof Uint8Array || ArrayBuffer.isView(e2) && e2.constructor.name === "Uint8Array";
}
function zn$2(e2) {
  if (!wt$2(e2)) throw new Error("Uint8Array expected");
}
const Cs$2 = Array.from({ length: 256 }, (e2, t) => t.toString(16).padStart(2, "0"));
function ks$1(e2) {
  zn$2(e2);
  let t = "";
  for (let n3 = 0; n3 < e2.length; n3++) t += Cs$2[e2[n3]];
  return t;
}
function Ds$2(e2) {
  if (typeof e2 != "string") throw new Error("hex string expected, got " + typeof e2);
  return e2 === "" ? Wn$2 : BigInt("0x" + e2);
}
const ee = { _0: 48, _9: 57, A: 65, F: 70, a: 97, f: 102 };
function Jn$2(e2) {
  if (e2 >= ee._0 && e2 <= ee._9) return e2 - ee._0;
  if (e2 >= ee.A && e2 <= ee.F) return e2 - (ee.A - 10);
  if (e2 >= ee.a && e2 <= ee.f) return e2 - (ee.a - 10);
}
function Yn$2(e2) {
  if (typeof e2 != "string") throw new Error("hex string expected, got " + typeof e2);
  const t = e2.length, n3 = t / 2;
  if (t % 2) throw new Error("hex string expected, got unpadded hex of length " + t);
  const r2 = new Uint8Array(n3);
  for (let o3 = 0, s2 = 0; o3 < n3; o3++, s2 += 2) {
    const i3 = Jn$2(e2.charCodeAt(s2)), c2 = Jn$2(e2.charCodeAt(s2 + 1));
    if (i3 === void 0 || c2 === void 0) {
      const u2 = e2[s2] + e2[s2 + 1];
      throw new Error('hex string expected, got non-hex character "' + u2 + '" at index ' + s2);
    }
    r2[o3] = i3 * 16 + c2;
  }
  return r2;
}
function Xn$2(e2) {
  return zn$2(e2), Ds$2(ks$1(Uint8Array.from(e2).reverse()));
}
function Ms$1(e2, t) {
  return Yn$2(e2.toString(16).padStart(t * 2, "0"));
}
function Vs$2(e2, t) {
  return Ms$1(e2, t).reverse();
}
function Zn$2(e2, t, n3) {
  let r2;
  if (typeof t == "string") try {
    r2 = Yn$2(t);
  } catch (s2) {
    throw new Error(e2 + " must be hex string or Uint8Array, cause: " + s2);
  }
  else if (wt$2(t)) r2 = Uint8Array.from(t);
  else throw new Error(e2 + " must be hex string or Uint8Array");
  const o3 = r2.length;
  if (typeof n3 == "number" && o3 !== n3) throw new Error(e2 + " of length " + n3 + " expected, got " + o3);
  return r2;
}
const Et$3 = (e2) => typeof e2 == "bigint" && Wn$2 <= e2;
function Hs$2(e2, t, n3) {
  return Et$3(e2) && Et$3(t) && Et$3(n3) && t <= e2 && e2 < n3;
}
function Qn$2(e2, t, n3, r2) {
  if (!Hs$2(t, n3, r2)) throw new Error("expected valid " + e2 + ": " + n3 + " <= n < " + r2 + ", got " + t);
}
const Ks$1 = { bigint: (e2) => typeof e2 == "bigint", function: (e2) => typeof e2 == "function", boolean: (e2) => typeof e2 == "boolean", string: (e2) => typeof e2 == "string", stringOrUint8Array: (e2) => typeof e2 == "string" || wt$2(e2), isSafeInteger: (e2) => Number.isSafeInteger(e2), array: (e2) => Array.isArray(e2), field: (e2, t) => t.Fp.isValid(e2), hash: (e2) => typeof e2 == "function" && Number.isSafeInteger(e2.outputLen) };
function Fs$1(e2, t, n3 = {}) {
  const r2 = (o3, s2, i3) => {
    const c2 = Ks$1[s2];
    if (typeof c2 != "function") throw new Error("invalid validator function");
    const u2 = e2[o3];
    if (!(i3 && u2 === void 0) && !c2(u2, e2)) throw new Error("param " + String(o3) + " is invalid. Expected " + s2 + ", got " + u2);
  };
  for (const [o3, s2] of Object.entries(t)) r2(o3, s2, false);
  for (const [o3, s2] of Object.entries(n3)) r2(o3, s2, true);
  return e2;
}
const ve$1 = BigInt(0), Ke$3 = BigInt(1);
function er$2(e2, t) {
  const n3 = e2 % t;
  return n3 >= ve$1 ? n3 : t + n3;
}
function qs$3(e2, t, n3) {
  if (t < ve$1) throw new Error("invalid exponent, negatives unsupported");
  if (n3 <= ve$1) throw new Error("invalid modulus");
  if (n3 === Ke$3) return ve$1;
  let r2 = Ke$3;
  for (; t > ve$1; ) t & Ke$3 && (r2 = r2 * e2 % n3), e2 = e2 * e2 % n3, t >>= Ke$3;
  return r2;
}
function z$5(e2, t, n3) {
  let r2 = e2;
  for (; t-- > ve$1; ) r2 *= r2, r2 %= n3;
  return r2;
}
BigInt(0), BigInt(1), BigInt(0), BigInt(1), BigInt(2), BigInt(8);
const xe$2 = BigInt(0), vt$2 = BigInt(1);
function Gs$2(e2) {
  return Fs$1(e2, { a: "bigint" }, { montgomeryBits: "isSafeInteger", nByteLength: "isSafeInteger", adjustScalarBytes: "function", domain: "function", powPminus2: "function", Gu: "bigint" }), Object.freeze({ ...e2 });
}
function Ws$2(e2) {
  const t = Gs$2(e2), { P: n3 } = t, r2 = (b2) => er$2(b2, n3), o3 = t.montgomeryBits, s2 = Math.ceil(o3 / 8), i3 = t.nByteLength, c2 = t.adjustScalarBytes || ((b2) => b2), u2 = t.powPminus2 || ((b2) => qs$3(b2, n3 - BigInt(2), n3));
  function a2(b2, _3, I3) {
    const k2 = r2(b2 * (_3 - I3));
    return _3 = r2(_3 - k2), I3 = r2(I3 + k2), [_3, I3];
  }
  const l2 = (t.a - BigInt(2)) / BigInt(4);
  function f5(b2, _3) {
    Qn$2("u", b2, xe$2, n3), Qn$2("scalar", _3, xe$2, n3);
    const I3 = _3, k2 = b2;
    let E2 = vt$2, L3 = xe$2, j2 = b2, v2 = vt$2, O4 = xe$2, w2;
    for (let A2 = BigInt(o3 - 1); A2 >= xe$2; A2--) {
      const T2 = I3 >> A2 & vt$2;
      O4 ^= T2, w2 = a2(O4, E2, j2), E2 = w2[0], j2 = w2[1], w2 = a2(O4, L3, v2), L3 = w2[0], v2 = w2[1], O4 = T2;
      const N2 = E2 + L3, S4 = r2(N2 * N2), U2 = E2 - L3, $2 = r2(U2 * U2), p2 = S4 - $2, C2 = j2 + v2, D2 = j2 - v2, P3 = r2(D2 * N2), G2 = r2(C2 * U2), X2 = P3 + G2, Z2 = P3 - G2;
      j2 = r2(X2 * X2), v2 = r2(k2 * r2(Z2 * Z2)), E2 = r2(S4 * $2), L3 = r2(p2 * (S4 + r2(l2 * p2)));
    }
    w2 = a2(O4, E2, j2), E2 = w2[0], j2 = w2[1], w2 = a2(O4, L3, v2), L3 = w2[0], v2 = w2[1];
    const R4 = u2(L3);
    return r2(E2 * R4);
  }
  function d4(b2) {
    return Vs$2(r2(b2), s2);
  }
  function g2(b2) {
    const _3 = Zn$2("u coordinate", b2, s2);
    return i3 === 32 && (_3[31] &= 127), Xn$2(_3);
  }
  function y3(b2) {
    const _3 = Zn$2("scalar", b2), I3 = _3.length;
    if (I3 !== s2 && I3 !== i3) {
      let k2 = "" + s2 + " or " + i3;
      throw new Error("invalid scalar, expected " + k2 + " bytes, got " + I3);
    }
    return Xn$2(c2(_3));
  }
  function h4(b2, _3) {
    const I3 = g2(_3), k2 = y3(b2), E2 = f5(I3, k2);
    if (E2 === xe$2) throw new Error("invalid private or public key received");
    return d4(E2);
  }
  const m4 = d4(t.Gu);
  function B3(b2) {
    return h4(b2, m4);
  }
  return { scalarMult: h4, scalarMultBase: B3, getSharedSecret: (b2, _3) => h4(b2, _3), getPublicKey: (b2) => B3(b2), utils: { randomPrivateKey: () => t.randomBytes(t.nByteLength) }, GuBytes: m4 };
}
const xt$2 = BigInt("57896044618658097711785492504343953926634992332820282019728792003956564819949");
BigInt(0);
const zs$1 = BigInt(1), tr$2 = BigInt(2), Js$2 = BigInt(3), Ys$2 = BigInt(5);
BigInt(8);
function Xs$2(e2) {
  const t = BigInt(10), n3 = BigInt(20), r2 = BigInt(40), o3 = BigInt(80), s2 = xt$2, c2 = e2 * e2 % s2 * e2 % s2, u2 = z$5(c2, tr$2, s2) * c2 % s2, a2 = z$5(u2, zs$1, s2) * e2 % s2, l2 = z$5(a2, Ys$2, s2) * a2 % s2, f5 = z$5(l2, t, s2) * l2 % s2, d4 = z$5(f5, n3, s2) * f5 % s2, g2 = z$5(d4, r2, s2) * d4 % s2, y3 = z$5(g2, o3, s2) * g2 % s2, h4 = z$5(y3, o3, s2) * g2 % s2, m4 = z$5(h4, t, s2) * l2 % s2;
  return { pow_p_5_8: z$5(m4, tr$2, s2) * e2 % s2, b2: c2 };
}
function Zs$2(e2) {
  return e2[0] &= 248, e2[31] &= 127, e2[31] |= 64, e2;
}
const Ot$2 = Ws$2({ P: xt$2, a: BigInt(486662), montgomeryBits: 255, nByteLength: 32, Gu: BigInt(9), powPminus2: (e2) => {
  const t = xt$2, { pow_p_5_8: n3, b2: r2 } = Xs$2(e2);
  return er$2(z$5(n3, Js$2, t) * r2, t);
}, adjustScalarBytes: Zs$2, randomBytes: Se$2 }), It$2 = "base10", V$2 = "base16", At$2 = "base64pad", Qs$2 = "base64url", Oe$2 = "utf8", Nt$2 = 0, Ie$1 = 1, _e$3 = 2, ei$2 = 0, nr$2 = 1, Te$1 = 12, St$3 = 32;
function ti$2() {
  const e2 = Ot$2.utils.randomPrivateKey(), t = Ot$2.getPublicKey(e2);
  return { privateKey: toString(e2, V$2), publicKey: toString(t, V$2) };
}
function ni$2() {
  const e2 = Se$2(St$3);
  return toString(e2, V$2);
}
function ri$2(e2, t) {
  const n3 = Ot$2.getSharedSecret(fromString(e2, V$2), fromString(t, V$2)), r2 = Ts$2(He$1, n3, void 0, void 0, St$3);
  return toString(r2, V$2);
}
function oi$2(e2) {
  const t = He$1(fromString(e2, V$2));
  return toString(t, V$2);
}
function si$2(e2) {
  const t = He$1(fromString(e2, Oe$2));
  return toString(t, V$2);
}
function Ut$2(e2) {
  return fromString(`${e2}`, It$2);
}
function fe$1(e2) {
  return Number(toString(e2, It$2));
}
function ii$2(e2) {
  const t = Ut$2(typeof e2.type < "u" ? e2.type : Nt$2);
  if (fe$1(t) === Ie$1 && typeof e2.senderPublicKey > "u") throw new Error("Missing sender public key for type 1 envelope");
  const n3 = typeof e2.senderPublicKey < "u" ? fromString(e2.senderPublicKey, V$2) : void 0, r2 = typeof e2.iv < "u" ? fromString(e2.iv, V$2) : Se$2(Te$1), o3 = fromString(e2.symKey, V$2), s2 = Fn$2(o3, r2).encrypt(fromString(e2.message, Oe$2));
  return _t$3({ type: t, sealed: s2, iv: r2, senderPublicKey: n3, encoding: e2.encoding });
}
function ci$2(e2) {
  const t = fromString(e2.symKey, V$2), { sealed: n3, iv: r2 } = Fe$2(e2), o3 = Fn$2(t, r2).decrypt(n3);
  if (o3 === null) throw new Error("Failed to decrypt");
  return toString(o3, Oe$2);
}
function ai$2(e2, t) {
  const n3 = Ut$2(_e$3), r2 = Se$2(Te$1), o3 = fromString(e2, Oe$2);
  return _t$3({ type: n3, sealed: o3, iv: r2, encoding: t });
}
function ui$2(e2, t) {
  const { sealed: n3 } = Fe$2({ encoded: e2, encoding: t });
  return toString(n3, Oe$2);
}
function _t$3(e2) {
  const { encoding: t = At$2 } = e2;
  if (fe$1(e2.type) === _e$3) return toString(concat([e2.type, e2.sealed]), t);
  if (fe$1(e2.type) === Ie$1) {
    if (typeof e2.senderPublicKey > "u") throw new Error("Missing sender public key for type 1 envelope");
    return toString(concat([e2.type, e2.senderPublicKey, e2.iv, e2.sealed]), t);
  }
  return toString(concat([e2.type, e2.iv, e2.sealed]), t);
}
function Fe$2(e2) {
  const { encoded: t, encoding: n3 = At$2 } = e2, r2 = fromString(t, n3), o3 = r2.slice(ei$2, nr$2), s2 = nr$2;
  if (fe$1(o3) === Ie$1) {
    const a2 = s2 + St$3, l2 = a2 + Te$1, f5 = r2.slice(s2, a2), d4 = r2.slice(a2, l2), g2 = r2.slice(l2);
    return { type: o3, sealed: g2, iv: d4, senderPublicKey: f5 };
  }
  if (fe$1(o3) === _e$3) {
    const a2 = r2.slice(s2), l2 = Se$2(Te$1);
    return { type: o3, sealed: a2, iv: l2 };
  }
  const i3 = s2 + Te$1, c2 = r2.slice(s2, i3), u2 = r2.slice(i3);
  return { type: o3, sealed: u2, iv: c2 };
}
function fi$2(e2, t) {
  const n3 = Fe$2({ encoded: e2, encoding: t == null ? void 0 : t.encoding });
  return rr$2({ type: fe$1(n3.type), senderPublicKey: typeof n3.senderPublicKey < "u" ? toString(n3.senderPublicKey, V$2) : void 0, receiverPublicKey: t == null ? void 0 : t.receiverPublicKey });
}
function rr$2(e2) {
  const t = (e2 == null ? void 0 : e2.type) || Nt$2;
  if (t === Ie$1) {
    if (typeof (e2 == null ? void 0 : e2.senderPublicKey) > "u") throw new Error("missing sender public key");
    if (typeof (e2 == null ? void 0 : e2.receiverPublicKey) > "u") throw new Error("missing receiver public key");
  }
  return { type: t, senderPublicKey: e2 == null ? void 0 : e2.senderPublicKey, receiverPublicKey: e2 == null ? void 0 : e2.receiverPublicKey };
}
function li$2(e2) {
  return e2.type === Ie$1 && typeof e2.senderPublicKey == "string" && typeof e2.receiverPublicKey == "string";
}
function di$2(e2) {
  return e2.type === _e$3;
}
function or$2(e2) {
  return new elliptic.ec("p256").keyFromPublic({ x: Buffer.from(e2.x, "base64").toString("hex"), y: Buffer.from(e2.y, "base64").toString("hex") }, "hex");
}
function hi$2(e2) {
  let t = e2.replace(/-/g, "+").replace(/_/g, "/");
  const n3 = t.length % 4;
  return n3 > 0 && (t += "=".repeat(4 - n3)), t;
}
function pi$2(e2) {
  return Buffer.from(hi$2(e2), "base64");
}
function gi$2(e2, t) {
  const [n3, r2, o3] = e2.split("."), s2 = pi$2(o3);
  if (s2.length !== 64) throw new Error("Invalid signature length");
  const i3 = s2.slice(0, 32).toString("hex"), c2 = s2.slice(32, 64).toString("hex"), u2 = `${n3}.${r2}`, a2 = He$1(u2), l2 = or$2(t), f5 = toString(a2, V$2);
  if (!l2.verify(f5, { r: i3, s: c2 })) throw new Error("Invalid signature");
  return sn$3(e2).payload;
}
const sr$2 = "irn";
function yi$2(e2) {
  return (e2 == null ? void 0 : e2.relay) || { protocol: sr$2 };
}
function mi$2(e2) {
  const t = C$4[e2];
  if (typeof t > "u") throw new Error(`Relay Protocol not supported: ${e2}`);
  return t;
}
function ir$2(e2, t = "-") {
  const n3 = {}, r2 = "relay" + t;
  return Object.keys(e2).forEach((o3) => {
    if (o3.startsWith(r2)) {
      const s2 = o3.replace(r2, ""), i3 = e2[o3];
      n3[s2] = i3;
    }
  }), n3;
}
function bi$2(e2) {
  if (!e2.includes("wc:")) {
    const a2 = rt$1(e2);
    a2 != null && a2.includes("wc:") && (e2 = a2);
  }
  e2 = e2.includes("wc://") ? e2.replace("wc://", "") : e2, e2 = e2.includes("wc:") ? e2.replace("wc:", "") : e2;
  const t = e2.indexOf(":"), n3 = e2.indexOf("?") !== -1 ? e2.indexOf("?") : void 0, r2 = e2.substring(0, t), o3 = e2.substring(t + 1, n3).split("@"), s2 = typeof n3 < "u" ? e2.substring(n3) : "", i3 = new URLSearchParams(s2), c2 = {};
  i3.forEach((a2, l2) => {
    c2[l2] = a2;
  });
  const u2 = typeof c2.methods == "string" ? c2.methods.split(",") : void 0;
  return { protocol: r2, topic: cr$2(o3[0]), version: parseInt(o3[1], 10), symKey: c2.symKey, relay: ir$2(c2), methods: u2, expiryTimestamp: c2.expiryTimestamp ? parseInt(c2.expiryTimestamp, 10) : void 0 };
}
function cr$2(e2) {
  return e2.startsWith("//") ? e2.substring(2) : e2;
}
function ar$2(e2, t = "-") {
  const n3 = "relay", r2 = {};
  return Object.keys(e2).forEach((o3) => {
    const s2 = o3, i3 = n3 + t + s2;
    e2[s2] && (r2[i3] = e2[s2]);
  }), r2;
}
function wi$2(e2) {
  const t = new URLSearchParams(), n3 = ar$2(e2.relay);
  Object.keys(n3).sort().forEach((o3) => {
    t.set(o3, n3[o3]);
  }), t.set("symKey", e2.symKey), e2.expiryTimestamp && t.set("expiryTimestamp", e2.expiryTimestamp.toString()), e2.methods && t.set("methods", e2.methods.join(","));
  const r2 = t.toString();
  return `${e2.protocol}:${e2.topic}@${e2.version}?${r2}`;
}
function Ei$2(e2, t, n3) {
  return `${e2}?wc_ev=${n3}&topic=${t}`;
}
function le$3(e2) {
  const t = [];
  return e2.forEach((n3) => {
    const [r2, o3] = n3.split(":");
    t.push(`${r2}:${o3}`);
  }), t;
}
function lr$2(e2) {
  const t = [];
  return Object.values(e2).forEach((n3) => {
    t.push(...le$3(n3.accounts));
  }), t;
}
function dr$2(e2, t) {
  const n3 = [];
  return Object.values(e2).forEach((r2) => {
    le$3(r2.accounts).includes(t) && n3.push(...r2.methods);
  }), n3;
}
function hr$2(e2, t) {
  const n3 = [];
  return Object.values(e2).forEach((r2) => {
    le$3(r2.accounts).includes(t) && n3.push(...r2.events);
  }), n3;
}
function Tt$2(e2) {
  return e2.includes(":");
}
function pr$2(e2) {
  return Tt$2(e2) ? e2.split(":")[0] : e2;
}
function gr$2(e2) {
  const t = {};
  return e2 == null ? void 0 : e2.forEach((n3) => {
    var r2;
    const [o3, s2] = n3.split(":");
    t[o3] || (t[o3] = { accounts: [], chains: [], events: [], methods: [] }), t[o3].accounts.push(n3), (r2 = t[o3].chains) == null || r2.push(`${o3}:${s2}`);
  }), t;
}
function Ti$2(e2, t) {
  t = t.map((r2) => r2.replace("did:pkh:", ""));
  const n3 = gr$2(t);
  for (const [r2, o3] of Object.entries(n3)) o3.methods ? o3.methods = Q$2(o3.methods, e2) : o3.methods = e2, o3.events = ["chainChanged", "accountsChanged"];
  return n3;
}
const yr$2 = { INVALID_METHOD: { message: "Invalid method.", code: 1001 }, INVALID_EVENT: { message: "Invalid event.", code: 1002 }, INVALID_UPDATE_REQUEST: { message: "Invalid update request.", code: 1003 }, INVALID_EXTEND_REQUEST: { message: "Invalid extend request.", code: 1004 }, INVALID_SESSION_SETTLE_REQUEST: { message: "Invalid session settle request.", code: 1005 }, UNAUTHORIZED_METHOD: { message: "Unauthorized method.", code: 3001 }, UNAUTHORIZED_EVENT: { message: "Unauthorized event.", code: 3002 }, UNAUTHORIZED_UPDATE_REQUEST: { message: "Unauthorized update request.", code: 3003 }, UNAUTHORIZED_EXTEND_REQUEST: { message: "Unauthorized extend request.", code: 3004 }, USER_REJECTED: { message: "User rejected.", code: 5e3 }, USER_REJECTED_CHAINS: { message: "User rejected chains.", code: 5001 }, USER_REJECTED_METHODS: { message: "User rejected methods.", code: 5002 }, USER_REJECTED_EVENTS: { message: "User rejected events.", code: 5003 }, UNSUPPORTED_CHAINS: { message: "Unsupported chains.", code: 5100 }, UNSUPPORTED_METHODS: { message: "Unsupported methods.", code: 5101 }, UNSUPPORTED_EVENTS: { message: "Unsupported events.", code: 5102 }, UNSUPPORTED_ACCOUNTS: { message: "Unsupported accounts.", code: 5103 }, UNSUPPORTED_NAMESPACE_KEY: { message: "Unsupported namespace key.", code: 5104 }, USER_DISCONNECTED: { message: "User disconnected.", code: 6e3 }, SESSION_SETTLEMENT_FAILED: { message: "Session settlement failed.", code: 7e3 }, WC_METHOD_UNSUPPORTED: { message: "Unsupported wc_ method.", code: 10001 } }, mr$2 = { NOT_INITIALIZED: { message: "Not initialized.", code: 1 }, NO_MATCHING_KEY: { message: "No matching key.", code: 2 }, RESTORE_WILL_OVERRIDE: { message: "Restore will override.", code: 3 }, RESUBSCRIBED: { message: "Resubscribed.", code: 4 }, MISSING_OR_INVALID: { message: "Missing or invalid.", code: 5 }, EXPIRED: { message: "Expired.", code: 6 }, UNKNOWN_TYPE: { message: "Unknown type.", code: 7 }, MISMATCHED_TOPIC: { message: "Mismatched topic.", code: 8 }, NON_CONFORMING_NAMESPACES: { message: "Non conforming namespaces.", code: 9 } };
function te$1(e2, t) {
  const { message: n3, code: r2 } = mr$2[e2];
  return { message: t ? `${n3} ${t}` : n3, code: r2 };
}
function de$2(e2, t) {
  const { message: n3, code: r2 } = yr$2[e2];
  return { message: t ? `${n3} ${t}` : n3, code: r2 };
}
function $e$3(e2, t) {
  return Array.isArray(e2) ? true : false;
}
function qe$2(e2) {
  return Object.getPrototypeOf(e2) === Object.prototype && Object.keys(e2).length;
}
function ae$1(e2) {
  return typeof e2 > "u";
}
function q$3(e2, t) {
  return t && ae$1(e2) ? true : typeof e2 == "string" && !!e2.trim().length;
}
function Ge$3(e2, t) {
  return t && ae$1(e2) ? true : typeof e2 == "number" && !isNaN(e2);
}
function $i$2(e2, t) {
  const { requiredNamespaces: n3 } = t, r2 = Object.keys(e2.namespaces), o3 = Object.keys(n3);
  let s2 = true;
  return re$2(o3, r2) ? (r2.forEach((i3) => {
    const { accounts: c2, methods: u2, events: a2 } = e2.namespaces[i3], l2 = le$3(c2), f5 = n3[i3];
    (!re$2(Le$3(i3, f5), l2) || !re$2(f5.methods, u2) || !re$2(f5.events, a2)) && (s2 = false);
  }), s2) : false;
}
function Re$1(e2) {
  return q$3(e2, false) && e2.includes(":") ? e2.split(":").length === 2 : false;
}
function br$2(e2) {
  if (q$3(e2, false) && e2.includes(":")) {
    const t = e2.split(":");
    if (t.length === 3) {
      const n3 = t[0] + ":" + t[1];
      return !!t[2] && Re$1(n3);
    }
  }
  return false;
}
function Ri$2(e2) {
  function t(n3) {
    try {
      return typeof new URL(n3) < "u";
    } catch {
      return false;
    }
  }
  try {
    if (q$3(e2, false)) {
      if (t(e2)) return true;
      const n3 = rt$1(e2);
      return t(n3);
    }
  } catch {
  }
  return false;
}
function Pi$2(e2) {
  var t;
  return (t = e2 == null ? void 0 : e2.proposer) == null ? void 0 : t.publicKey;
}
function Li$2(e2) {
  return e2 == null ? void 0 : e2.topic;
}
function Bi$1(e2, t) {
  let n3 = null;
  return q$3(e2 == null ? void 0 : e2.publicKey, false) || (n3 = te$1("MISSING_OR_INVALID", `${t} controller public key should be a string`)), n3;
}
function Rt$3(e2) {
  let t = true;
  return $e$3(e2) ? e2.length && (t = e2.every((n3) => q$3(n3, false))) : t = false, t;
}
function wr$2(e2, t, n3) {
  let r2 = null;
  return $e$3(t) && t.length ? t.forEach((o3) => {
    r2 || Re$1(o3) || (r2 = de$2("UNSUPPORTED_CHAINS", `${n3}, chain ${o3} should be a string and conform to "namespace:chainId" format`));
  }) : Re$1(e2) || (r2 = de$2("UNSUPPORTED_CHAINS", `${n3}, chains must be defined as "namespace:chainId" e.g. "eip155:1": {...} in the namespace key OR as an array of CAIP-2 chainIds e.g. eip155: { chains: ["eip155:1", "eip155:5"] }`)), r2;
}
function Er$2(e2, t, n3) {
  let r2 = null;
  return Object.entries(e2).forEach(([o3, s2]) => {
    if (r2) return;
    const i3 = wr$2(o3, Le$3(o3, s2), `${t} ${n3}`);
    i3 && (r2 = i3);
  }), r2;
}
function vr$2(e2, t) {
  let n3 = null;
  return $e$3(e2) ? e2.forEach((r2) => {
    n3 || br$2(r2) || (n3 = de$2("UNSUPPORTED_ACCOUNTS", `${t}, account ${r2} should be a string and conform to "namespace:chainId:address" format`));
  }) : n3 = de$2("UNSUPPORTED_ACCOUNTS", `${t}, accounts should be an array of strings conforming to "namespace:chainId:address" format`), n3;
}
function xr$2(e2, t) {
  let n3 = null;
  return Object.values(e2).forEach((r2) => {
    if (n3) return;
    const o3 = vr$2(r2 == null ? void 0 : r2.accounts, `${t} namespace`);
    o3 && (n3 = o3);
  }), n3;
}
function Or$2(e2, t) {
  let n3 = null;
  return Rt$3(e2 == null ? void 0 : e2.methods) ? Rt$3(e2 == null ? void 0 : e2.events) || (n3 = de$2("UNSUPPORTED_EVENTS", `${t}, events should be an array of strings or empty array for no events`)) : n3 = de$2("UNSUPPORTED_METHODS", `${t}, methods should be an array of strings or empty array for no methods`), n3;
}
function Pt$1(e2, t) {
  let n3 = null;
  return Object.values(e2).forEach((r2) => {
    if (n3) return;
    const o3 = Or$2(r2, `${t}, namespace`);
    o3 && (n3 = o3);
  }), n3;
}
function ji$1(e2, t, n3) {
  let r2 = null;
  if (e2 && qe$2(e2)) {
    const o3 = Pt$1(e2, t);
    o3 && (r2 = o3);
    const s2 = Er$2(e2, t, n3);
    s2 && (r2 = s2);
  } else r2 = te$1("MISSING_OR_INVALID", `${t}, ${n3} should be an object with data`);
  return r2;
}
function Ir$2(e2, t) {
  let n3 = null;
  if (e2 && qe$2(e2)) {
    const r2 = Pt$1(e2, t);
    r2 && (n3 = r2);
    const o3 = xr$2(e2, t);
    o3 && (n3 = o3);
  } else n3 = te$1("MISSING_OR_INVALID", `${t}, namespaces should be an object with data`);
  return n3;
}
function Ar$2(e2) {
  return q$3(e2.protocol, true);
}
function Ci$2(e2, t) {
  let n3 = false;
  return !e2 ? n3 = true : e2 && $e$3(e2) && e2.length && e2.forEach((r2) => {
    n3 = Ar$2(r2);
  }), n3;
}
function ki$1(e2) {
  return typeof e2 == "number";
}
function Di$2(e2) {
  return typeof e2 < "u" && typeof e2 !== null;
}
function Mi$1(e2) {
  return !(!e2 || typeof e2 != "object" || !e2.code || !Ge$3(e2.code, false) || !e2.message || !q$3(e2.message, false));
}
function Vi$1(e2) {
  return !(ae$1(e2) || !q$3(e2.method, false));
}
function Hi$1(e2) {
  return !(ae$1(e2) || ae$1(e2.result) && ae$1(e2.error) || !Ge$3(e2.id, false) || !q$3(e2.jsonrpc, false));
}
function Ki$1(e2) {
  return !(ae$1(e2) || !q$3(e2.name, false));
}
function Fi$1(e2, t) {
  return !(!Re$1(t) || !lr$2(e2).includes(t));
}
function qi$1(e2, t, n3) {
  return q$3(n3, false) ? dr$2(e2, t).includes(n3) : false;
}
function Gi$1(e2, t, n3) {
  return q$3(n3, false) ? hr$2(e2, t).includes(n3) : false;
}
function Nr$2(e2, t, n3) {
  let r2 = null;
  const o3 = Wi$1(e2), s2 = zi$2(t), i3 = Object.keys(o3), c2 = Object.keys(s2), u2 = Sr$2(Object.keys(e2)), a2 = Sr$2(Object.keys(t)), l2 = u2.filter((f5) => !a2.includes(f5));
  return l2.length && (r2 = te$1("NON_CONFORMING_NAMESPACES", `${n3} namespaces keys don't satisfy requiredNamespaces.
      Required: ${l2.toString()}
      Received: ${Object.keys(t).toString()}`)), re$2(i3, c2) || (r2 = te$1("NON_CONFORMING_NAMESPACES", `${n3} namespaces chains don't satisfy required namespaces.
      Required: ${i3.toString()}
      Approved: ${c2.toString()}`)), Object.keys(t).forEach((f5) => {
    if (!f5.includes(":") || r2) return;
    const d4 = le$3(t[f5].accounts);
    d4.includes(f5) || (r2 = te$1("NON_CONFORMING_NAMESPACES", `${n3} namespaces accounts don't satisfy namespace accounts for ${f5}
        Required: ${f5}
        Approved: ${d4.toString()}`));
  }), i3.forEach((f5) => {
    r2 || (re$2(o3[f5].methods, s2[f5].methods) ? re$2(o3[f5].events, s2[f5].events) || (r2 = te$1("NON_CONFORMING_NAMESPACES", `${n3} namespaces events don't satisfy namespace events for ${f5}`)) : r2 = te$1("NON_CONFORMING_NAMESPACES", `${n3} namespaces methods don't satisfy namespace methods for ${f5}`));
  }), r2;
}
function Wi$1(e2) {
  const t = {};
  return Object.keys(e2).forEach((n3) => {
    var r2;
    n3.includes(":") ? t[n3] = e2[n3] : (r2 = e2[n3].chains) == null || r2.forEach((o3) => {
      t[o3] = { methods: e2[n3].methods, events: e2[n3].events };
    });
  }), t;
}
function Sr$2(e2) {
  return [...new Set(e2.map((t) => t.includes(":") ? t.split(":")[0] : t))];
}
function zi$2(e2) {
  const t = {};
  return Object.keys(e2).forEach((n3) => {
    if (n3.includes(":")) t[n3] = e2[n3];
    else {
      const r2 = le$3(e2[n3].accounts);
      r2 == null ? void 0 : r2.forEach((o3) => {
        t[o3] = { accounts: e2[n3].accounts.filter((s2) => s2.includes(`${o3}:`)), methods: e2[n3].methods, events: e2[n3].events };
      });
    }
  }), t;
}
function Ji$1(e2, t) {
  return Ge$3(e2, false) && e2 <= t.max && e2 >= t.min;
}
function Yi$1() {
  const e2 = ue$2();
  return new Promise((t) => {
    switch (e2) {
      case H$2.browser:
        t(Ur$2());
        break;
      case H$2.reactNative:
        t(_r$2());
        break;
      case H$2.node:
        t(Tr$2());
        break;
      default:
        t(true);
    }
  });
}
function Ur$2() {
  return Ae$2() && (navigator == null ? void 0 : navigator.onLine);
}
async function _r$2() {
  if (ne$1() && typeof global < "u" && global != null && global.NetInfo) {
    const e2 = await (global == null ? void 0 : global.NetInfo.fetch());
    return e2 == null ? void 0 : e2.isConnected;
  }
  return true;
}
function Tr$2() {
  return true;
}
function Xi$1(e2) {
  switch (ue$2()) {
    case H$2.browser:
      $r$2(e2);
      break;
    case H$2.reactNative:
      Rr$2(e2);
      break;
  }
}
function $r$2(e2) {
  !ne$1() && Ae$2() && (window.addEventListener("online", () => e2(true)), window.addEventListener("offline", () => e2(false)));
}
function Rr$2(e2) {
  var _a2;
  ne$1() && typeof global < "u" && global != null && global.NetInfo && ((_a2 = global) == null ? void 0 : _a2.NetInfo.addEventListener((t) => e2(t == null ? void 0 : t.isConnected)));
}
const Lt$2 = {};
let Zi$1 = class Zi {
  static get(t) {
    return Lt$2[t];
  }
  static set(t, n3) {
    Lt$2[t] = n3;
  }
  static delete(t) {
    delete Lt$2[t];
  }
};
class IEvents {
}
let n$2 = class n extends IEvents {
  constructor(e2) {
    super();
  }
};
const s = cjs$3.FIVE_SECONDS, r$1 = { pulse: "heartbeat_pulse" };
let i$2 = class i extends n$2 {
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
const suspectProtoRx = /"(?:_|\\u0{2}5[Ff]){2}(?:p|\\u0{2}70)(?:r|\\u0{2}72)(?:o|\\u0{2}6[Ff])(?:t|\\u0{2}74)(?:o|\\u0{2}6[Ff])(?:_|\\u0{2}5[Ff]){2}"\s*:/;
const suspectConstructorRx = /"(?:c|\\u0063)(?:o|\\u006[Ff])(?:n|\\u006[Ee])(?:s|\\u0073)(?:t|\\u0074)(?:r|\\u0072)(?:u|\\u0075)(?:c|\\u0063)(?:t|\\u0074)(?:o|\\u006[Ff])(?:r|\\u0072)"\s*:/;
const JsonSigRx = /^\s*["[{]|^\s*-?\d{1,16}(\.\d{1,17})?([Ee][+-]?\d+)?\s*$/;
function jsonParseTransform(key2, value) {
  if (key2 === "__proto__" || key2 === "constructor" && value && typeof value === "object" && "prototype" in value) {
    warnKeyDropped(key2);
    return;
  }
  return value;
}
function warnKeyDropped(key2) {
  console.warn(`[destr] Dropping "${key2}" key to prevent prototype pollution.`);
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
const BASE64_PREFIX = "base64:";
function serializeRaw(value) {
  if (typeof value === "string") {
    return value;
  }
  return BASE64_PREFIX + base64Encode(value);
}
function deserializeRaw(value) {
  if (typeof value !== "string") {
    return value;
  }
  if (!value.startsWith(BASE64_PREFIX)) {
    return value;
  }
  return base64Decode(value.slice(BASE64_PREFIX.length));
}
function base64Decode(input) {
  if (globalThis.Buffer) {
    return Buffer.from(input, "base64");
  }
  return Uint8Array.from(
    globalThis.atob(input),
    (c2) => c2.codePointAt(0)
  );
}
function base64Encode(input) {
  if (globalThis.Buffer) {
    return Buffer.from(input).toString("base64");
  }
  return globalThis.btoa(String.fromCodePoint(...input));
}
function normalizeKey(key2) {
  var _a2;
  if (!key2) {
    return "";
  }
  return ((_a2 = key2.split("?")[0]) == null ? void 0 : _a2.replace(/[/\\]/g, ":").replace(/:+/g, ":").replace(/^:|:$/g, "")) || "";
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
    getInstance: () => data,
    hasItem(key2) {
      return data.has(key2);
    },
    getItem(key2) {
      return data.get(key2) ?? null;
    },
    getItemRaw(key2) {
      return data.get(key2) ?? null;
    },
    setItem(key2, value) {
      data.set(key2, value);
    },
    setItemRaw(key2, value) {
      data.set(key2, value);
    },
    removeItem(key2) {
      data.delete(key2);
    },
    getKeys() {
      return [...data.keys()];
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
  const getMount = (key2) => {
    for (const base3 of context.mountpoints) {
      if (key2.startsWith(base3)) {
        return {
          base: base3,
          relativeKey: key2.slice(base3.length),
          driver: context.mounts[base3]
        };
      }
    }
    return {
      base: "",
      relativeKey: key2,
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
  const onChange = (event, key2) => {
    if (!context.watching) {
      return;
    }
    key2 = normalizeKey(key2);
    for (const listener of context.watchListeners) {
      listener(event, key2);
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
      const key2 = normalizeKey(isStringItem ? item : item.key);
      const value = isStringItem ? void 0 : item.value;
      const options2 = isStringItem || !item.options ? commonOptions : { ...commonOptions, ...item.options };
      const mount = getMount(key2);
      getBatch(mount).items.push({
        key: key2,
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
    hasItem(key2, opts = {}) {
      key2 = normalizeKey(key2);
      const { relativeKey, driver } = getMount(key2);
      return asyncCall(driver.hasItem, relativeKey, opts);
    },
    getItem(key2, opts = {}) {
      key2 = normalizeKey(key2);
      const { relativeKey, driver } = getMount(key2);
      return asyncCall(driver.getItem, relativeKey, opts).then(
        (value) => destr(value)
      );
    },
    getItems(items, commonOptions = {}) {
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
    getItemRaw(key2, opts = {}) {
      key2 = normalizeKey(key2);
      const { relativeKey, driver } = getMount(key2);
      if (driver.getItemRaw) {
        return asyncCall(driver.getItemRaw, relativeKey, opts);
      }
      return asyncCall(driver.getItem, relativeKey, opts).then(
        (value) => deserializeRaw(value)
      );
    },
    async setItem(key2, value, opts = {}) {
      if (value === void 0) {
        return storage.removeItem(key2);
      }
      key2 = normalizeKey(key2);
      const { relativeKey, driver } = getMount(key2);
      if (!driver.setItem) {
        return;
      }
      await asyncCall(driver.setItem, relativeKey, stringify(value), opts);
      if (!driver.watch) {
        onChange("update", key2);
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
    async setItemRaw(key2, value, opts = {}) {
      if (value === void 0) {
        return storage.removeItem(key2, opts);
      }
      key2 = normalizeKey(key2);
      const { relativeKey, driver } = getMount(key2);
      if (driver.setItemRaw) {
        await asyncCall(driver.setItemRaw, relativeKey, value, opts);
      } else if (driver.setItem) {
        await asyncCall(driver.setItem, relativeKey, serializeRaw(value), opts);
      } else {
        return;
      }
      if (!driver.watch) {
        onChange("update", key2);
      }
    },
    async removeItem(key2, opts = {}) {
      if (typeof opts === "boolean") {
        opts = { removeMeta: opts };
      }
      key2 = normalizeKey(key2);
      const { relativeKey, driver } = getMount(key2);
      if (!driver.removeItem) {
        return;
      }
      await asyncCall(driver.removeItem, relativeKey, opts);
      if (opts.removeMeta || opts.removeMata) {
        await asyncCall(driver.removeItem, relativeKey + "$", opts);
      }
      if (!driver.watch) {
        onChange("remove", key2);
      }
    },
    // Meta
    async getMeta(key2, opts = {}) {
      if (typeof opts === "boolean") {
        opts = { nativeOnly: opts };
      }
      key2 = normalizeKey(key2);
      const { relativeKey, driver } = getMount(key2);
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
    setMeta(key2, value, opts = {}) {
      return this.setItem(key2 + "$", value, opts);
    },
    removeMeta(key2, opts = {}) {
      return this.removeItem(key2 + "$", opts);
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
        for (const key2 of rawKeys) {
          const fullKey = mount.mountpoint + normalizeKey(key2);
          if (!maskedMounts.some((p2) => fullKey.startsWith(p2))) {
            allKeys.push(fullKey);
          }
        }
        maskedMounts = [
          mount.mountpoint,
          ...maskedMounts.filter((p2) => !p2.startsWith(mount.mountpoint))
        ];
      }
      return base3 ? allKeys.filter(
        (key2) => key2.startsWith(base3) && key2[key2.length - 1] !== "$"
      ) : allKeys.filter((key2) => key2[key2.length - 1] !== "$");
    },
    // Utils
    async clear(base3, opts = {}) {
      base3 = normalizeBaseKey(base3);
      await Promise.all(
        getMounts(base3, false).map(async (m4) => {
          if (m4.driver.clear) {
            return asyncCall(m4.driver.clear, m4.relativeBase, opts);
          }
          if (m4.driver.removeItem) {
            const keys2 = await m4.driver.getKeys(m4.relativeBase || "", opts);
            return Promise.all(
              keys2.map((key2) => m4.driver.removeItem(key2, opts))
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
        context.mountpoints.sort((a2, b2) => b2.length - a2.length);
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
      var _a2, _b;
      base3 = normalizeBaseKey(base3);
      if (!base3 || !context.mounts[base3]) {
        return;
      }
      if (context.watching && base3 in context.unwatch) {
        (_b = (_a2 = context.unwatch)[base3]) == null ? void 0 : _b.call(_a2);
        delete context.unwatch[base3];
      }
      if (_dispose) {
        await dispose(context.mounts[base3]);
      }
      context.mountpoints = context.mountpoints.filter((key2) => key2 !== base3);
      delete context.mounts[base3];
    },
    getMount(key2 = "") {
      key2 = normalizeKey(key2) + ":";
      const m4 = getMount(key2);
      return {
        driver: m4.driver,
        base: m4.base
      };
    },
    getMounts(base3 = "", opts = {}) {
      base3 = normalizeKey(base3);
      const mounts = getMounts(base3, opts.parents);
      return mounts.map((m4) => ({
        driver: m4.driver,
        base: m4.mountpoint
      }));
    },
    // Aliases
    keys: (base3, opts = {}) => storage.getKeys(base3, opts),
    get: (key2, opts = {}) => storage.getItem(key2, opts),
    set: (key2, value, opts = {}) => storage.setItem(key2, value, opts),
    has: (key2, opts = {}) => storage.hasItem(key2, opts),
    del: (key2, opts = {}) => storage.removeItem(key2, opts),
    remove: (key2, opts = {}) => storage.removeItem(key2, opts)
  };
  return storage;
}
function watch(driver, onChange, base3) {
  return driver.watch ? driver.watch((event, key2) => onChange(event, base3 + key2)) : () => {
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
function get(key2, customStore = defaultGetStore()) {
  return customStore("readonly", (store) => promisifyRequest(store.get(key2)));
}
function set$1(key2, value, customStore = defaultGetStore()) {
  return customStore("readwrite", (store) => {
    store.put(value, key2);
    return promisifyRequest(store.transaction);
  });
}
function del(key2, customStore = defaultGetStore()) {
  return customStore("readwrite", (store) => {
    store.delete(key2);
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
const x$5 = "idb-keyval";
var z$4 = (i3 = {}) => {
  const t = i3.base && i3.base.length > 0 ? `${i3.base}:` : "", e2 = (s2) => t + s2;
  let n3;
  return i3.dbName && i3.storeName && (n3 = createStore(i3.dbName, i3.storeName)), { name: x$5, options: i3, async hasItem(s2) {
    return !(typeof await get(e2(s2), n3) > "u");
  }, async getItem(s2) {
    return await get(e2(s2), n3) ?? null;
  }, setItem(s2, a2) {
    return set$1(e2(s2), a2, n3);
  }, removeItem(s2) {
    return del(e2(s2), n3);
  }, getKeys() {
    return keys(n3);
  }, clear() {
    return clear(n3);
  } };
};
const D$3 = "WALLET_CONNECT_V2_INDEXED_DB", E$4 = "keyvaluestorage";
let _$5 = class _ {
  constructor() {
    this.indexedDb = createStorage({ driver: z$4({ dbName: D$3, storeName: E$4 }) });
  }
  async getKeys() {
    return this.indexedDb.getKeys();
  }
  async getEntries() {
    return (await this.indexedDb.getItems(await this.indexedDb.getKeys())).map((t) => [t.key, t.value]);
  }
  async getItem(t) {
    const e2 = await this.indexedDb.getItem(t);
    if (e2 !== null) return e2;
  }
  async setItem(t, e2) {
    await this.indexedDb.setItem(t, safeJsonStringify(e2));
  }
  async removeItem(t) {
    await this.indexedDb.removeItem(t);
  }
};
var l$2 = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, c$4 = { exports: {} };
(function() {
  let i3;
  function t() {
  }
  i3 = t, i3.prototype.getItem = function(e2) {
    return this.hasOwnProperty(e2) ? String(this[e2]) : null;
  }, i3.prototype.setItem = function(e2, n3) {
    this[e2] = String(n3);
  }, i3.prototype.removeItem = function(e2) {
    delete this[e2];
  }, i3.prototype.clear = function() {
    const e2 = this;
    Object.keys(e2).forEach(function(n3) {
      e2[n3] = void 0, delete e2[n3];
    });
  }, i3.prototype.key = function(e2) {
    return e2 = e2 || 0, Object.keys(this)[e2];
  }, i3.prototype.__defineGetter__("length", function() {
    return Object.keys(this).length;
  }), typeof l$2 < "u" && l$2.localStorage ? c$4.exports = l$2.localStorage : typeof window < "u" && window.localStorage ? c$4.exports = window.localStorage : c$4.exports = new t();
})();
function k$3(i3) {
  var t;
  return [i3[0], safeJsonParse((t = i3[1]) != null ? t : "")];
}
let K$1 = class K {
  constructor() {
    this.localStorage = c$4.exports;
  }
  async getKeys() {
    return Object.keys(this.localStorage);
  }
  async getEntries() {
    return Object.entries(this.localStorage).map(k$3);
  }
  async getItem(t) {
    const e2 = this.localStorage.getItem(t);
    if (e2 !== null) return safeJsonParse(e2);
  }
  async setItem(t, e2) {
    this.localStorage.setItem(t, safeJsonStringify(e2));
  }
  async removeItem(t) {
    this.localStorage.removeItem(t);
  }
};
const N$3 = "wc_storage_version", y$4 = 1, O$5 = async (i3, t, e2) => {
  const n3 = N$3, s2 = await t.getItem(n3);
  if (s2 && s2 >= y$4) {
    e2(t);
    return;
  }
  const a2 = await i3.getKeys();
  if (!a2.length) {
    e2(t);
    return;
  }
  const m4 = [];
  for (; a2.length; ) {
    const r2 = a2.shift();
    if (!r2) continue;
    const o3 = r2.toLowerCase();
    if (o3.includes("wc@") || o3.includes("walletconnect") || o3.includes("wc_") || o3.includes("wallet_connect")) {
      const f5 = await i3.getItem(r2);
      await t.setItem(r2, f5), m4.push(r2);
    }
  }
  await t.setItem(n3, y$4), e2(t), j$4(i3, m4);
}, j$4 = async (i3, t) => {
  t.length && t.forEach(async (e2) => {
    await i3.removeItem(e2);
  });
};
let h$3 = class h {
  constructor() {
    this.initialized = false, this.setInitialized = (e2) => {
      this.storage = e2, this.initialized = true;
    };
    const t = new K$1();
    this.storage = t;
    try {
      const e2 = new _$5();
      O$5(t, e2, this.setInitialized);
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
function tryStringify(o3) {
  try {
    return JSON.stringify(o3);
  } catch (e2) {
    return '"[Circular]"';
  }
}
var quickFormatUnescaped = format$1;
function format$1(f5, args, opts) {
  var ss2 = opts && opts.stringify || tryStringify;
  var offset = 1;
  if (typeof f5 === "object" && f5 !== null) {
    var len = args.length + offset;
    if (len === 1) return f5;
    var objects = new Array(len);
    objects[0] = ss2(f5);
    for (var index = 1; index < len; index++) {
      objects[index] = ss2(args[index]);
    }
    return objects.join(" ");
  }
  if (typeof f5 !== "string") {
    return f5;
  }
  var argLen = args.length;
  if (argLen === 0) return f5;
  var str = "";
  var a2 = 1 - offset;
  var lastPos = -1;
  var flen = f5 && f5.length || 0;
  for (var i3 = 0; i3 < flen; ) {
    if (f5.charCodeAt(i3) === 37 && i3 + 1 < flen) {
      lastPos = lastPos > -1 ? lastPos : 0;
      switch (f5.charCodeAt(i3 + 1)) {
        case 100:
        case 102:
          if (a2 >= argLen)
            break;
          if (args[a2] == null) break;
          if (lastPos < i3)
            str += f5.slice(lastPos, i3);
          str += Number(args[a2]);
          lastPos = i3 + 2;
          i3++;
          break;
        case 105:
          if (a2 >= argLen)
            break;
          if (args[a2] == null) break;
          if (lastPos < i3)
            str += f5.slice(lastPos, i3);
          str += Math.floor(Number(args[a2]));
          lastPos = i3 + 2;
          i3++;
          break;
        case 79:
        case 111:
        case 106:
          if (a2 >= argLen)
            break;
          if (args[a2] === void 0) break;
          if (lastPos < i3)
            str += f5.slice(lastPos, i3);
          var type = typeof args[a2];
          if (type === "string") {
            str += "'" + args[a2] + "'";
            lastPos = i3 + 2;
            i3++;
            break;
          }
          if (type === "function") {
            str += args[a2].name || "<anonymous>";
            lastPos = i3 + 2;
            i3++;
            break;
          }
          str += ss2(args[a2]);
          lastPos = i3 + 2;
          i3++;
          break;
        case 115:
          if (a2 >= argLen)
            break;
          if (lastPos < i3)
            str += f5.slice(lastPos, i3);
          str += String(args[a2]);
          lastPos = i3 + 2;
          i3++;
          break;
        case 37:
          if (lastPos < i3)
            str += f5.slice(lastPos, i3);
          str += "%";
          lastPos = i3 + 2;
          i3++;
          a2--;
          break;
      }
      ++a2;
    }
    ++i3;
  }
  if (lastPos === -1)
    return f5;
  else if (lastPos < flen) {
    str += f5.slice(lastPos);
  }
  return str;
}
const format = quickFormatUnescaped;
var browser = pino;
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
  if (opts.browser.write) opts.browser.asObject = true;
  const serializers = opts.serializers || {};
  const serialize = shouldSerialize(opts.browser.serialize, serializers);
  let stdErrSerialize = opts.browser.serialize;
  if (Array.isArray(opts.browser.serialize) && opts.browser.serialize.indexOf("!stdSerializers.err") > -1) stdErrSerialize = false;
  const levels = ["error", "fatal", "warn", "info", "debug", "trace"];
  if (typeof proto === "function") {
    proto.error = proto.fatal = proto.warn = proto.info = proto.debug = proto.trace = proto;
  }
  if (opts.enabled === false) opts.level = "silent";
  const level = opts.level || "info";
  const logger = Object.create(proto);
  if (!logger.log) logger.log = noop;
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
  if (transmit2) logger._logEvent = createLogEventShape();
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
  if (!opts.transmit && logger[level] === noop) return;
  logger[level] = /* @__PURE__ */ function(write) {
    return function LOG() {
      const ts2 = opts.timestamp();
      const args = new Array(arguments.length);
      const proto = Object.getPrototypeOf && Object.getPrototypeOf(this) === _console ? _console : this;
      for (var i3 = 0; i3 < args.length; i3++) args[i3] = arguments[i3];
      if (opts.serialize && !opts.asObject) {
        applySerializers(args, this._serialize, this.serializers, this._stdErrSerialize);
      }
      if (opts.asObject) write.call(proto, asObject(this, level, args, ts2));
      else write.apply(proto, args);
      if (opts.transmit) {
        const transmitLevel = opts.transmit.level || logger.level;
        const transmitValue = pino.levels.values[transmitLevel];
        const methodValue = pino.levels.values[level];
        if (methodValue < transmitValue) return;
        transmit(this, {
          ts: ts2,
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
function asObject(logger, level, args, ts2) {
  if (logger._serialize) applySerializers(args, logger._serialize, logger.serializers, logger._stdErrSerialize);
  const argsCloned = args.slice();
  let msg = argsCloned[0];
  const o3 = {};
  if (ts2) {
    o3.time = ts2;
  }
  o3.level = pino.levels.values[level];
  let lvl = (logger._childLevel | 0) + 1;
  if (lvl < 1) lvl = 1;
  if (msg !== null && typeof msg === "object") {
    while (lvl-- && typeof argsCloned[0] === "object") {
      Object.assign(o3, argsCloned.shift());
    }
    msg = argsCloned.length ? format(argsCloned.shift(), argsCloned) : void 0;
  } else if (typeof msg === "string") msg = format(argsCloned.shift(), argsCloned);
  if (msg !== void 0) o3.msg = msg;
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
  const ts2 = opts.ts;
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
  logger._logEvent.ts = ts2;
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
  for (const key2 in err) {
    if (obj[key2] === void 0) {
      obj[key2] = err[key2];
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
function passthrough(a2) {
  return a2;
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
    if (typeof globalThis !== "undefined") return globalThis;
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
const gt$1 = /* @__PURE__ */ getDefaultExportFromCjs(browser);
const c$3 = { level: "info" }, n$1 = "custom_context", l$1 = 1e3 * 1024;
let O$4 = class O {
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
let d$4 = class d {
  constructor(e2) {
    this.head = null, this.tail = null, this.lengthInNodes = 0, this.maxSizeInBytes = e2, this.sizeInBytes = 0;
  }
  append(e2) {
    const t = new O$4(e2);
    if (t.size > this.maxSizeInBytes) throw new Error(`[LinkedList] Value too big to insert into list: ${e2} with size ${t.size}`);
    for (; this.size + t.size > this.maxSizeInBytes; ) this.shift();
    this.head ? (this.tail && (this.tail.next = t), this.tail = t) : (this.head = t, this.tail = t), this.lengthInNodes++, this.sizeInBytes += t.size;
  }
  shift() {
    if (!this.head) return;
    const e2 = this.head;
    this.head = this.head.next, this.head || (this.tail = null), this.lengthInNodes--, this.sizeInBytes -= e2.size;
  }
  toArray() {
    const e2 = [];
    let t = this.head;
    for (; t !== null; ) e2.push(t.value), t = t.next;
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
      if (!e2) return { done: true, value: null };
      const t = e2.value;
      return e2 = e2.next, { done: false, value: t };
    } };
  }
};
let L$4 = class L {
  constructor(e2, t = l$1) {
    this.level = e2 ?? "error", this.levelValue = browser.levels.values[this.level], this.MAX_LOG_SIZE_IN_BYTES = t, this.logs = new d$4(this.MAX_LOG_SIZE_IN_BYTES);
  }
  forwardToConsole(e2, t) {
    t === browser.levels.values.error ? console.error(e2) : t === browser.levels.values.warn ? console.warn(e2) : t === browser.levels.values.debug ? console.debug(e2) : t === browser.levels.values.trace ? console.trace(e2) : console.log(e2);
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
    this.logs = new d$4(this.MAX_LOG_SIZE_IN_BYTES);
  }
  getLogArray() {
    return Array.from(this.logs);
  }
  logsToBlob(e2) {
    const t = this.getLogArray();
    return t.push(safeJsonStringify({ extraMetadata: e2 })), new Blob(t, { type: "application/json" });
  }
};
let m$2 = class m {
  constructor(e2, t = l$1) {
    this.baseChunkLogger = new L$4(e2, t);
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
let B$2 = class B {
  constructor(e2, t = l$1) {
    this.baseChunkLogger = new L$4(e2, t);
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
var x$4 = Object.defineProperty, S$3 = Object.defineProperties, _$4 = Object.getOwnPropertyDescriptors, p$4 = Object.getOwnPropertySymbols, T$5 = Object.prototype.hasOwnProperty, z$3 = Object.prototype.propertyIsEnumerable, f$5 = (r2, e2, t) => e2 in r2 ? x$4(r2, e2, { enumerable: true, configurable: true, writable: true, value: t }) : r2[e2] = t, i$1 = (r2, e2) => {
  for (var t in e2 || (e2 = {})) T$5.call(e2, t) && f$5(r2, t, e2[t]);
  if (p$4) for (var t of p$4(e2)) z$3.call(e2, t) && f$5(r2, t, e2[t]);
  return r2;
}, g$3 = (r2, e2) => S$3(r2, _$4(e2));
function k$2(r2) {
  return g$3(i$1({}, r2), { level: (r2 == null ? void 0 : r2.level) || c$3.level });
}
function v$6(r2, e2 = n$1) {
  return r2[e2] || "";
}
function b$2(r2, e2, t = n$1) {
  return r2[t] = e2, r2;
}
function y$3(r2, e2 = n$1) {
  let t = "";
  return typeof r2.bindings > "u" ? t = v$6(r2, e2) : t = r2.bindings().context || "", t;
}
function w$4(r2, e2, t = n$1) {
  const o3 = y$3(r2, t);
  return o3.trim() ? `${o3}/${e2}` : e2;
}
function E$3(r2, e2, t = n$1) {
  const o3 = w$4(r2, e2, t), a2 = r2.child({ context: o3 });
  return b$2(a2, o3, t);
}
function C$3(r2) {
  var e2, t;
  const o3 = new m$2((e2 = r2.opts) == null ? void 0 : e2.level, r2.maxSizeInBytes);
  return { logger: gt$1(g$3(i$1({}, r2.opts), { level: "trace", browser: g$3(i$1({}, (t = r2.opts) == null ? void 0 : t.browser), { write: (a2) => o3.write(a2) }) })), chunkLoggerController: o3 };
}
function I$2(r2) {
  var e2;
  const t = new B$2((e2 = r2.opts) == null ? void 0 : e2.level, r2.maxSizeInBytes);
  return { logger: gt$1(g$3(i$1({}, r2.opts), { level: "trace" }), t), chunkLoggerController: t };
}
function A$1(r2) {
  return typeof r2.loggerOverride < "u" && typeof r2.loggerOverride != "string" ? { logger: r2.loggerOverride, chunkLoggerController: null } : typeof window < "u" ? C$3(r2) : I$2(r2);
}
var a = Object.defineProperty, u$1 = (e2, s2, r2) => s2 in e2 ? a(e2, s2, { enumerable: true, configurable: true, writable: true, value: r2 }) : e2[s2] = r2, c$2 = (e2, s2, r2) => u$1(e2, typeof s2 != "symbol" ? s2 + "" : s2, r2);
let h$2 = class h2 extends IEvents {
  constructor(s2) {
    super(), this.opts = s2, c$2(this, "protocol", "wc"), c$2(this, "version", 2);
  }
};
var p$3 = Object.defineProperty, b$1 = (e2, s2, r2) => s2 in e2 ? p$3(e2, s2, { enumerable: true, configurable: true, writable: true, value: r2 }) : e2[s2] = r2, v$5 = (e2, s2, r2) => b$1(e2, s2 + "", r2);
let I$1 = class I extends IEvents {
  constructor(s2, r2) {
    super(), this.core = s2, this.logger = r2, v$5(this, "records", /* @__PURE__ */ new Map());
  }
};
let y$2 = class y {
  constructor(s2, r2) {
    this.logger = s2, this.core = r2;
  }
};
let m$1 = class m2 extends IEvents {
  constructor(s2, r2) {
    super(), this.relayer = s2, this.logger = r2;
  }
};
let d$3 = class d2 extends IEvents {
  constructor(s2) {
    super();
  }
};
let f$4 = class f {
  constructor(s2, r2, t, q2) {
    this.core = s2, this.logger = r2, this.name = t;
  }
};
let P$3 = class P extends IEvents {
  constructor(s2, r2) {
    super(), this.relayer = s2, this.logger = r2;
  }
};
let S$2 = class S2 extends IEvents {
  constructor(s2, r2) {
    super(), this.core = s2, this.logger = r2;
  }
};
let M$3 = class M {
  constructor(s2, r2, t) {
    this.core = s2, this.logger = r2, this.store = t;
  }
};
let O$3 = class O2 {
  constructor(s2, r2) {
    this.projectId = s2, this.logger = r2;
  }
};
let R$1 = class R2 {
  constructor(s2, r2, t) {
    this.core = s2, this.logger = r2, this.telemetryEnabled = t;
  }
};
var T$4 = Object.defineProperty, k$1 = (e2, s2, r2) => s2 in e2 ? T$4(e2, s2, { enumerable: true, configurable: true, writable: true, value: r2 }) : e2[s2] = r2, i2 = (e2, s2, r2) => k$1(e2, typeof s2 != "symbol" ? s2 + "" : s2, r2);
let J$2 = class J {
  constructor(s2) {
    this.opts = s2, i2(this, "protocol", "wc"), i2(this, "version", 2);
  }
};
let V$1 = class V {
  constructor(s2) {
    this.client = s2;
  }
};
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
  if (hasRequiredCrypto) return crypto$1;
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
  if (hasRequiredEnv) return env;
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
class n2 extends e {
  constructor() {
    super();
  }
}
class r extends n2 {
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
let o$2 = class o extends r {
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
      if (!this.connection.connected) try {
        await this.open();
      } catch (n3) {
        s2(n3);
      }
      this.events.on(`${t.id}`, (n3) => {
        isJsonRpcError(n3) ? s2(n3.error) : i3(n3.result);
      });
      try {
        await this.connection.send(t, e2);
      } catch (n3) {
        s2(n3);
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
const v$4 = () => typeof WebSocket < "u" ? WebSocket : typeof global < "u" && typeof global.WebSocket < "u" ? global.WebSocket : typeof window < "u" && typeof window.WebSocket < "u" ? window.WebSocket : typeof self < "u" && typeof self.WebSocket < "u" ? self.WebSocket : require("ws"), w$3 = () => typeof WebSocket < "u" || typeof global < "u" && typeof global.WebSocket < "u" || typeof window < "u" && typeof window.WebSocket < "u" || typeof self < "u" && typeof self.WebSocket < "u", d$2 = (r2) => r2.split("?")[0], h$1 = 10, b = v$4();
let f$3 = class f2 {
  constructor(e2) {
    if (this.url = e2, this.events = new eventsExports.EventEmitter(), this.registering = false, !isWsUrl(e2)) throw new Error(`Provided URL is not compatible with WebSocket connection: ${e2}`);
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
      this.socket.onclose = (n3) => {
        this.onClose(n3), e2();
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
    if (!isWsUrl(e2)) throw new Error(`Provided URL is not compatible with WebSocket connection: ${e2}`);
    if (this.registering) {
      const t = this.events.getMaxListeners();
      return (this.events.listenerCount("register_error") >= t || this.events.listenerCount("open") >= t) && this.events.setMaxListeners(t + 1), new Promise((n3, s2) => {
        this.events.once("register_error", (o3) => {
          this.resetMaxListeners(), s2(o3);
        }), this.events.once("open", () => {
          if (this.resetMaxListeners(), typeof this.socket > "u") return s2(new Error("WebSocket connection is missing or invalid"));
          n3(this.socket);
        });
      });
    }
    return this.url = e2, this.registering = true, new Promise((t, n3) => {
      const s2 = cjs.isReactNative() ? void 0 : { rejectUnauthorized: !isLocalhostUrl(e2) }, o3 = new b(e2, [], s2);
      w$3() ? o3.onerror = (i3) => {
        const a2 = i3;
        n3(this.emitError(a2.error));
      } : o3.on("error", (i3) => {
        n3(this.emitError(i3));
      }), o3.onopen = () => {
        this.onOpen(o3), t(o3);
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
    if (typeof e2.data > "u") return;
    const t = typeof e2.data == "string" ? safeJsonParse(e2.data) : e2.data;
    this.events.emit("payload", t);
  }
  onError(e2, t) {
    const n3 = this.parseError(t), s2 = n3.message || n3.toString(), o3 = formatJsonRpcError(e2, s2);
    this.events.emit("payload", o3);
  }
  parseError(e2, t = this.url) {
    return parseConnectionError(e2, d$2(t), "WS");
  }
  resetMaxListeners() {
    this.events.getMaxListeners() > h$1 && this.events.setMaxListeners(h$1);
  }
  emitError(e2) {
    const t = this.parseError(new Error((e2 == null ? void 0 : e2.message) || `WebSocket connection failed for host: ${d$2(this.url)}`));
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
  function baseTimes(n3, iteratee) {
    var index = -1, result = Array(n3);
    while (++index < n3) {
      result[index] = iteratee(index);
    }
    return result;
  }
  function baseUnary(func) {
    return function(value) {
      return func(value);
    };
  }
  function cacheHas(cache, key2) {
    return cache.has(key2);
  }
  function getValue(object, key2) {
    return object == null ? void 0 : object[key2];
  }
  function mapToArray(map) {
    var index = -1, result = Array(map.size);
    map.forEach(function(value, key2) {
      result[++index] = [key2, value];
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
  var DataView2 = getNative(root, "DataView"), Map2 = getNative(root, "Map"), Promise2 = getNative(root, "Promise"), Set2 = getNative(root, "Set"), WeakMap2 = getNative(root, "WeakMap"), nativeCreate = getNative(Object, "create");
  var dataViewCtorString = toSource(DataView2), mapCtorString = toSource(Map2), promiseCtorString = toSource(Promise2), setCtorString = toSource(Set2), weakMapCtorString = toSource(WeakMap2);
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
  function hashDelete(key2) {
    var result = this.has(key2) && delete this.__data__[key2];
    this.size -= result ? 1 : 0;
    return result;
  }
  function hashGet(key2) {
    var data = this.__data__;
    if (nativeCreate) {
      var result = data[key2];
      return result === HASH_UNDEFINED ? void 0 : result;
    }
    return hasOwnProperty.call(data, key2) ? data[key2] : void 0;
  }
  function hashHas(key2) {
    var data = this.__data__;
    return nativeCreate ? data[key2] !== void 0 : hasOwnProperty.call(data, key2);
  }
  function hashSet(key2, value) {
    var data = this.__data__;
    this.size += this.has(key2) ? 0 : 1;
    data[key2] = nativeCreate && value === void 0 ? HASH_UNDEFINED : value;
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
  function listCacheDelete(key2) {
    var data = this.__data__, index = assocIndexOf(data, key2);
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
  function listCacheGet(key2) {
    var data = this.__data__, index = assocIndexOf(data, key2);
    return index < 0 ? void 0 : data[index][1];
  }
  function listCacheHas(key2) {
    return assocIndexOf(this.__data__, key2) > -1;
  }
  function listCacheSet(key2, value) {
    var data = this.__data__, index = assocIndexOf(data, key2);
    if (index < 0) {
      ++this.size;
      data.push([key2, value]);
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
  function mapCacheDelete(key2) {
    var result = getMapData(this, key2)["delete"](key2);
    this.size -= result ? 1 : 0;
    return result;
  }
  function mapCacheGet(key2) {
    return getMapData(this, key2).get(key2);
  }
  function mapCacheHas(key2) {
    return getMapData(this, key2).has(key2);
  }
  function mapCacheSet(key2, value) {
    var data = getMapData(this, key2), size = data.size;
    data.set(key2, value);
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
  function stackDelete(key2) {
    var data = this.__data__, result = data["delete"](key2);
    this.size = data.size;
    return result;
  }
  function stackGet(key2) {
    return this.__data__.get(key2);
  }
  function stackHas(key2) {
    return this.__data__.has(key2);
  }
  function stackSet(key2, value) {
    var data = this.__data__;
    if (data instanceof ListCache) {
      var pairs = data.__data__;
      if (!Map2 || pairs.length < LARGE_ARRAY_SIZE - 1) {
        pairs.push([key2, value]);
        this.size = ++data.size;
        return this;
      }
      data = this.__data__ = new MapCache(pairs);
    }
    data.set(key2, value);
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
    for (var key2 in value) {
      if (hasOwnProperty.call(value, key2) && !(skipIndexes && // Safari 9 has enumerable `arguments.length` in strict mode.
      (key2 == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
      isBuff && (key2 == "offset" || key2 == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
      isType && (key2 == "buffer" || key2 == "byteLength" || key2 == "byteOffset") || // Skip index properties.
      isIndex(key2, length)))) {
        result.push(key2);
      }
    }
    return result;
  }
  function assocIndexOf(array, key2) {
    var length = array.length;
    while (length--) {
      if (eq6(array[length][0], key2)) {
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
    for (var key2 in Object(object)) {
      if (hasOwnProperty.call(object, key2) && key2 != "constructor") {
        result.push(key2);
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
        return eq6(+object, +other);
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
      var key2 = objProps[index];
      if (!(isPartial ? key2 in other : hasOwnProperty.call(other, key2))) {
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
      key2 = objProps[index];
      var objValue = object[key2], othValue = other[key2];
      if (customizer) {
        var compared = isPartial ? customizer(othValue, objValue, key2, other, object, stack) : customizer(objValue, othValue, key2, object, other, stack);
      }
      if (!(compared === void 0 ? objValue === othValue || equalFunc(objValue, othValue, bitmask, customizer, stack) : compared)) {
        result = false;
        break;
      }
      skipCtor || (skipCtor = key2 == "constructor");
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
  function getMapData(map, key2) {
    var data = map.__data__;
    return isKeyable(key2) ? data[typeof key2 == "string" ? "string" : "hash"] : data.map;
  }
  function getNative(object, key2) {
    var value = getValue(object, key2);
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
  if (DataView2 && getTag(new DataView2(new ArrayBuffer(1))) != dataViewTag || Map2 && getTag(new Map2()) != mapTag || Promise2 && getTag(Promise2.resolve()) != promiseTag || Set2 && getTag(new Set2()) != setTag || WeakMap2 && getTag(new WeakMap2()) != weakMapTag) {
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
  function eq6(value, other) {
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
const Ls$2 = /* @__PURE__ */ getDefaultExportFromCjs(lodash_isequalExports);
const xe$1 = "wc", Oe$1 = 2, he$1 = "core", B$1 = `${xe$1}@2:${he$1}:`, mt$1 = { name: he$1, logger: "error" }, vt$1 = { database: ":memory:" }, ft = "crypto", Ae$1 = "client_ed25519_seed", _t$2 = cjs$3.ONE_DAY, Et$2 = "keychain", wt$1 = "0.3", It$1 = "messages", Tt$1 = "0.3", Ne$1 = cjs$3.SIX_HOURS, Ct$1 = "publisher", Pt = "irn", St$2 = "error", $e$2 = "wss://relay.walletconnect.org", Rt$2 = "relayer", T$3 = { message: "relayer_message", message_ack: "relayer_message_ack", connect: "relayer_connect", disconnect: "relayer_disconnect", error: "relayer_error", connection_stalled: "relayer_connection_stalled", transport_closed: "relayer_transport_closed", publish: "relayer_publish" }, xt$1 = "_subscription", L$3 = { payload: "payload", connect: "connect", disconnect: "disconnect", error: "error" }, Ot$1 = 0.1, me$1 = "2.19.0", Q$1 = { link_mode: "link_mode", relay: "relay" }, At$1 = "0.3", Nt$1 = "WALLETCONNECT_CLIENT_ID", ze$1 = "WALLETCONNECT_LINK_MODE_APPS", $$3 = { created: "subscription_created", deleted: "subscription_deleted", expired: "subscription_expired", disabled: "subscription_disabled", sync: "subscription_sync", resubscribed: "subscription_resubscribed" }, $t = "subscription", zt$1 = "0.3", Lt$1 = cjs$3.FIVE_SECONDS * 1e3, kt$1 = "pairing", Ut$1 = "0.3", ie$1 = { wc_pairingDelete: { req: { ttl: cjs$3.ONE_DAY, prompt: false, tag: 1e3 }, res: { ttl: cjs$3.ONE_DAY, prompt: false, tag: 1001 } }, wc_pairingPing: { req: { ttl: cjs$3.THIRTY_SECONDS, prompt: false, tag: 1002 }, res: { ttl: cjs$3.THIRTY_SECONDS, prompt: false, tag: 1003 } }, unregistered_method: { req: { ttl: cjs$3.ONE_DAY, prompt: false, tag: 0 }, res: { ttl: cjs$3.ONE_DAY, prompt: false, tag: 0 } } }, se$1 = { create: "pairing_create", expire: "pairing_expire", delete: "pairing_delete", ping: "pairing_ping" }, F$1 = { created: "history_created", updated: "history_updated", deleted: "history_deleted", sync: "history_sync" }, Ft$1 = "history", Mt$1 = "0.3", Kt$1 = "expirer", M$2 = { created: "expirer_created", deleted: "expirer_deleted", expired: "expirer_expired", sync: "expirer_sync" }, Bt$1 = "0.3", jt$1 = "verify-api", js$1 = "https://verify.walletconnect.com", Vt$1 = "https://verify.walletconnect.org", le$2 = Vt$1, qt$1 = `${le$2}/v3`, Gt$1 = [js$1, Vt$1], Ht$1 = "echo", Yt$1 = "https://echo.walletconnect.com", q$2 = { pairing_started: "pairing_started", pairing_uri_validation_success: "pairing_uri_validation_success", pairing_uri_not_expired: "pairing_uri_not_expired", store_new_pairing: "store_new_pairing", subscribing_pairing_topic: "subscribing_pairing_topic", subscribe_pairing_topic_success: "subscribe_pairing_topic_success", existing_pairing: "existing_pairing", pairing_not_expired: "pairing_not_expired", emit_inactive_pairing: "emit_inactive_pairing", emit_session_proposal: "emit_session_proposal", subscribing_to_pairing_topic: "subscribing_to_pairing_topic" }, J$1 = { no_wss_connection: "no_wss_connection", no_internet_connection: "no_internet_connection", malformed_pairing_uri: "malformed_pairing_uri", active_pairing_already_exists: "active_pairing_already_exists", subscribe_pairing_topic_failure: "subscribe_pairing_topic_failure", pairing_expired: "pairing_expired", proposal_expired: "proposal_expired", proposal_listener_not_found: "proposal_listener_not_found" }, qs$2 = { session_approve_started: "session_approve_started", proposal_not_expired: "proposal_not_expired", session_namespaces_validation_success: "session_namespaces_validation_success", create_session_topic: "create_session_topic", subscribing_session_topic: "subscribing_session_topic", subscribe_session_topic_success: "subscribe_session_topic_success", publishing_session_approve: "publishing_session_approve", session_approve_publish_success: "session_approve_publish_success", store_session: "store_session", publishing_session_settle: "publishing_session_settle", session_settle_publish_success: "session_settle_publish_success" }, Gs$1 = { no_internet_connection: "no_internet_connection", no_wss_connection: "no_wss_connection", proposal_expired: "proposal_expired", subscribe_session_topic_failure: "subscribe_session_topic_failure", session_approve_publish_failure: "session_approve_publish_failure", session_settle_publish_failure: "session_settle_publish_failure", session_approve_namespace_validation_failure: "session_approve_namespace_validation_failure", proposal_not_found: "proposal_not_found" }, Hs$1 = { authenticated_session_approve_started: "authenticated_session_approve_started", authenticated_session_not_expired: "authenticated_session_not_expired", chains_caip2_compliant: "chains_caip2_compliant", chains_evm_compliant: "chains_evm_compliant", create_authenticated_session_topic: "create_authenticated_session_topic", cacaos_verified: "cacaos_verified", store_authenticated_session: "store_authenticated_session", subscribing_authenticated_session_topic: "subscribing_authenticated_session_topic", subscribe_authenticated_session_topic_success: "subscribe_authenticated_session_topic_success", publishing_authenticated_session_approve: "publishing_authenticated_session_approve", authenticated_session_approve_publish_success: "authenticated_session_approve_publish_success" }, Ys$1 = { no_internet_connection: "no_internet_connection", no_wss_connection: "no_wss_connection", missing_session_authenticate_request: "missing_session_authenticate_request", session_authenticate_request_expired: "session_authenticate_request_expired", chains_caip2_compliant_failure: "chains_caip2_compliant_failure", chains_evm_compliant_failure: "chains_evm_compliant_failure", invalid_cacao: "invalid_cacao", subscribe_authenticated_session_topic_failure: "subscribe_authenticated_session_topic_failure", authenticated_session_approve_publish_failure: "authenticated_session_approve_publish_failure", authenticated_session_pending_request_not_found: "authenticated_session_pending_request_not_found" }, Jt$1 = 0.1, Xt$1 = "event-client", Wt$1 = 86400, Zt$1 = "https://pulse.walletconnect.org/batch";
function Js$1(n3, e2) {
  if (n3.length >= 255) throw new TypeError("Alphabet too long");
  for (var t = new Uint8Array(256), s2 = 0; s2 < t.length; s2++) t[s2] = 255;
  for (var i3 = 0; i3 < n3.length; i3++) {
    var r2 = n3.charAt(i3), o3 = r2.charCodeAt(0);
    if (t[o3] !== 255) throw new TypeError(r2 + " is ambiguous");
    t[o3] = i3;
  }
  var a2 = n3.length, c2 = n3.charAt(0), h4 = Math.log(a2) / Math.log(256), u2 = Math.log(256) / Math.log(a2);
  function g2(l2) {
    if (l2 instanceof Uint8Array || (ArrayBuffer.isView(l2) ? l2 = new Uint8Array(l2.buffer, l2.byteOffset, l2.byteLength) : Array.isArray(l2) && (l2 = Uint8Array.from(l2))), !(l2 instanceof Uint8Array)) throw new TypeError("Expected Uint8Array");
    if (l2.length === 0) return "";
    for (var y3 = 0, O4 = 0, w2 = 0, v2 = l2.length; w2 !== v2 && l2[w2] === 0; ) w2++, y3++;
    for (var k2 = (v2 - w2) * u2 + 1 >>> 0, I3 = new Uint8Array(k2); w2 !== v2; ) {
      for (var V3 = l2[w2], X2 = 0, K3 = k2 - 1; (V3 !== 0 || X2 < O4) && K3 !== -1; K3--, X2++) V3 += 256 * I3[K3] >>> 0, I3[K3] = V3 % a2 >>> 0, V3 = V3 / a2 >>> 0;
      if (V3 !== 0) throw new Error("Non-zero carry");
      O4 = X2, w2++;
    }
    for (var Y2 = k2 - O4; Y2 !== k2 && I3[Y2] === 0; ) Y2++;
    for (var ge2 = c2.repeat(y3); Y2 < k2; ++Y2) ge2 += n3.charAt(I3[Y2]);
    return ge2;
  }
  function m4(l2) {
    if (typeof l2 != "string") throw new TypeError("Expected String");
    if (l2.length === 0) return new Uint8Array();
    var y3 = 0;
    if (l2[y3] !== " ") {
      for (var O4 = 0, w2 = 0; l2[y3] === c2; ) O4++, y3++;
      for (var v2 = (l2.length - y3) * h4 + 1 >>> 0, k2 = new Uint8Array(v2); l2[y3]; ) {
        var I3 = t[l2.charCodeAt(y3)];
        if (I3 === 255) return;
        for (var V3 = 0, X2 = v2 - 1; (I3 !== 0 || V3 < w2) && X2 !== -1; X2--, V3++) I3 += a2 * k2[X2] >>> 0, k2[X2] = I3 % 256 >>> 0, I3 = I3 / 256 >>> 0;
        if (I3 !== 0) throw new Error("Non-zero carry");
        w2 = V3, y3++;
      }
      if (l2[y3] !== " ") {
        for (var K3 = v2 - w2; K3 !== v2 && k2[K3] === 0; ) K3++;
        for (var Y2 = new Uint8Array(O4 + (v2 - K3)), ge2 = O4; K3 !== v2; ) Y2[ge2++] = k2[K3++];
        return Y2;
      }
    }
  }
  function A2(l2) {
    var y3 = m4(l2);
    if (y3) return y3;
    throw new Error(`Non-${e2} character`);
  }
  return { encode: g2, decodeUnsafe: m4, decode: A2 };
}
var Xs$1 = Js$1, Ws$1 = Xs$1;
const Qt$1 = (n3) => {
  if (n3 instanceof Uint8Array && n3.constructor.name === "Uint8Array") return n3;
  if (n3 instanceof ArrayBuffer) return new Uint8Array(n3);
  if (ArrayBuffer.isView(n3)) return new Uint8Array(n3.buffer, n3.byteOffset, n3.byteLength);
  throw new Error("Unknown type, must be binary type");
}, Zs$1 = (n3) => new TextEncoder().encode(n3), Qs$1 = (n3) => new TextDecoder().decode(n3);
let er$1 = class er {
  constructor(e2, t, s2) {
    this.name = e2, this.prefix = t, this.baseEncode = s2;
  }
  encode(e2) {
    if (e2 instanceof Uint8Array) return `${this.prefix}${this.baseEncode(e2)}`;
    throw Error("Unknown type, must be binary type");
  }
};
let tr$1 = class tr {
  constructor(e2, t, s2) {
    if (this.name = e2, this.prefix = t, t.codePointAt(0) === void 0) throw new Error("Invalid prefix character");
    this.prefixCodePoint = t.codePointAt(0), this.baseDecode = s2;
  }
  decode(e2) {
    if (typeof e2 == "string") {
      if (e2.codePointAt(0) !== this.prefixCodePoint) throw Error(`Unable to decode multibase string ${JSON.stringify(e2)}, ${this.name} decoder only supports inputs prefixed with ${this.prefix}`);
      return this.baseDecode(e2.slice(this.prefix.length));
    } else throw Error("Can only multibase decode strings");
  }
  or(e2) {
    return ei$1(this, e2);
  }
};
let ir$1 = class ir {
  constructor(e2) {
    this.decoders = e2;
  }
  or(e2) {
    return ei$1(this, e2);
  }
  decode(e2) {
    const t = e2[0], s2 = this.decoders[t];
    if (s2) return s2.decode(e2);
    throw RangeError(`Unable to decode multibase string ${JSON.stringify(e2)}, only inputs prefixed with ${Object.keys(this.decoders)} are supported`);
  }
};
const ei$1 = (n3, e2) => new ir$1({ ...n3.decoders || { [n3.prefix]: n3 }, ...e2.decoders || { [e2.prefix]: e2 } });
let sr$1 = class sr {
  constructor(e2, t, s2, i3) {
    this.name = e2, this.prefix = t, this.baseEncode = s2, this.baseDecode = i3, this.encoder = new er$1(e2, t, s2), this.decoder = new tr$1(e2, t, i3);
  }
  encode(e2) {
    return this.encoder.encode(e2);
  }
  decode(e2) {
    return this.decoder.decode(e2);
  }
};
const ve = ({ name: n3, prefix: e2, encode: t, decode: s2 }) => new sr$1(n3, e2, t, s2), ue$1 = ({ prefix: n3, name: e2, alphabet: t }) => {
  const { encode: s2, decode: i3 } = Ws$1(t, e2);
  return ve({ prefix: n3, name: e2, encode: s2, decode: (r2) => Qt$1(i3(r2)) });
}, rr$1 = (n3, e2, t, s2) => {
  const i3 = {};
  for (let u2 = 0; u2 < e2.length; ++u2) i3[e2[u2]] = u2;
  let r2 = n3.length;
  for (; n3[r2 - 1] === "="; ) --r2;
  const o3 = new Uint8Array(r2 * t / 8 | 0);
  let a2 = 0, c2 = 0, h4 = 0;
  for (let u2 = 0; u2 < r2; ++u2) {
    const g2 = i3[n3[u2]];
    if (g2 === void 0) throw new SyntaxError(`Non-${s2} character`);
    c2 = c2 << t | g2, a2 += t, a2 >= 8 && (a2 -= 8, o3[h4++] = 255 & c2 >> a2);
  }
  if (a2 >= t || 255 & c2 << 8 - a2) throw new SyntaxError("Unexpected end of data");
  return o3;
}, nr$1 = (n3, e2, t) => {
  const s2 = e2[e2.length - 1] === "=", i3 = (1 << t) - 1;
  let r2 = "", o3 = 0, a2 = 0;
  for (let c2 = 0; c2 < n3.length; ++c2) for (a2 = a2 << 8 | n3[c2], o3 += 8; o3 > t; ) o3 -= t, r2 += e2[i3 & a2 >> o3];
  if (o3 && (r2 += e2[i3 & a2 << t - o3]), s2) for (; r2.length * t & 7; ) r2 += "=";
  return r2;
}, C$2 = ({ name: n3, prefix: e2, bitsPerChar: t, alphabet: s2 }) => ve({ prefix: e2, name: n3, encode(i3) {
  return nr$1(i3, s2, t);
}, decode(i3) {
  return rr$1(i3, s2, t, n3);
} }), or$1 = ve({ prefix: "\0", name: "identity", encode: (n3) => Qs$1(n3), decode: (n3) => Zs$1(n3) });
var ar$1 = Object.freeze({ __proto__: null, identity: or$1 });
const cr$1 = C$2({ prefix: "0", name: "base2", alphabet: "01", bitsPerChar: 1 });
var hr$1 = Object.freeze({ __proto__: null, base2: cr$1 });
const lr$1 = C$2({ prefix: "7", name: "base8", alphabet: "01234567", bitsPerChar: 3 });
var ur$1 = Object.freeze({ __proto__: null, base8: lr$1 });
const dr$1 = ue$1({ prefix: "9", name: "base10", alphabet: "0123456789" });
var pr$1 = Object.freeze({ __proto__: null, base10: dr$1 });
const gr$1 = C$2({ prefix: "f", name: "base16", alphabet: "0123456789abcdef", bitsPerChar: 4 }), yr$1 = C$2({ prefix: "F", name: "base16upper", alphabet: "0123456789ABCDEF", bitsPerChar: 4 });
var br$1 = Object.freeze({ __proto__: null, base16: gr$1, base16upper: yr$1 });
const Dr$1 = C$2({ prefix: "b", name: "base32", alphabet: "abcdefghijklmnopqrstuvwxyz234567", bitsPerChar: 5 }), mr$1 = C$2({ prefix: "B", name: "base32upper", alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567", bitsPerChar: 5 }), vr$1 = C$2({ prefix: "c", name: "base32pad", alphabet: "abcdefghijklmnopqrstuvwxyz234567=", bitsPerChar: 5 }), fr$1 = C$2({ prefix: "C", name: "base32padupper", alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567=", bitsPerChar: 5 }), _r$1 = C$2({ prefix: "v", name: "base32hex", alphabet: "0123456789abcdefghijklmnopqrstuv", bitsPerChar: 5 }), Er$1 = C$2({ prefix: "V", name: "base32hexupper", alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUV", bitsPerChar: 5 }), wr$1 = C$2({ prefix: "t", name: "base32hexpad", alphabet: "0123456789abcdefghijklmnopqrstuv=", bitsPerChar: 5 }), Ir$1 = C$2({ prefix: "T", name: "base32hexpadupper", alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUV=", bitsPerChar: 5 }), Tr$1 = C$2({ prefix: "h", name: "base32z", alphabet: "ybndrfg8ejkmcpqxot1uwisza345h769", bitsPerChar: 5 });
var Cr$1 = Object.freeze({ __proto__: null, base32: Dr$1, base32upper: mr$1, base32pad: vr$1, base32padupper: fr$1, base32hex: _r$1, base32hexupper: Er$1, base32hexpad: wr$1, base32hexpadupper: Ir$1, base32z: Tr$1 });
const Pr$1 = ue$1({ prefix: "k", name: "base36", alphabet: "0123456789abcdefghijklmnopqrstuvwxyz" }), Sr$1 = ue$1({ prefix: "K", name: "base36upper", alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ" });
var Rr$1 = Object.freeze({ __proto__: null, base36: Pr$1, base36upper: Sr$1 });
const xr$1 = ue$1({ name: "base58btc", prefix: "z", alphabet: "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz" }), Or$1 = ue$1({ name: "base58flickr", prefix: "Z", alphabet: "123456789abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ" });
var Ar$1 = Object.freeze({ __proto__: null, base58btc: xr$1, base58flickr: Or$1 });
const Nr$1 = C$2({ prefix: "m", name: "base64", alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", bitsPerChar: 6 }), $r$1 = C$2({ prefix: "M", name: "base64pad", alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=", bitsPerChar: 6 }), zr$1 = C$2({ prefix: "u", name: "base64url", alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_", bitsPerChar: 6 }), Lr$1 = C$2({ prefix: "U", name: "base64urlpad", alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_=", bitsPerChar: 6 });
var kr$1 = Object.freeze({ __proto__: null, base64: Nr$1, base64pad: $r$1, base64url: zr$1, base64urlpad: Lr$1 });
const ti$1 = Array.from("🚀🪐☄🛰🌌🌑🌒🌓🌔🌕🌖🌗🌘🌍🌏🌎🐉☀💻🖥💾💿😂❤😍🤣😊🙏💕😭😘👍😅👏😁🔥🥰💔💖💙😢🤔😆🙄💪😉☺👌🤗💜😔😎😇🌹🤦🎉💞✌✨🤷😱😌🌸🙌😋💗💚😏💛🙂💓🤩😄😀🖤😃💯🙈👇🎶😒🤭❣😜💋👀😪😑💥🙋😞😩😡🤪👊🥳😥🤤👉💃😳✋😚😝😴🌟😬🙃🍀🌷😻😓⭐✅🥺🌈😈🤘💦✔😣🏃💐☹🎊💘😠☝😕🌺🎂🌻😐🖕💝🙊😹🗣💫💀👑🎵🤞😛🔴😤🌼😫⚽🤙☕🏆🤫👈😮🙆🍻🍃🐶💁😲🌿🧡🎁⚡🌞🎈❌✊👋😰🤨😶🤝🚶💰🍓💢🤟🙁🚨💨🤬✈🎀🍺🤓😙💟🌱😖👶🥴▶➡❓💎💸⬇😨🌚🦋😷🕺⚠🙅😟😵👎🤲🤠🤧📌🔵💅🧐🐾🍒😗🤑🌊🤯🐷☎💧😯💆👆🎤🙇🍑❄🌴💣🐸💌📍🥀🤢👅💡💩👐📸👻🤐🤮🎼🥵🚩🍎🍊👼💍📣🥂"), Ur$1 = ti$1.reduce((n3, e2, t) => (n3[t] = e2, n3), []), Fr$1 = ti$1.reduce((n3, e2, t) => (n3[e2.codePointAt(0)] = t, n3), []);
function Mr$1(n3) {
  return n3.reduce((e2, t) => (e2 += Ur$1[t], e2), "");
}
function Kr$1(n3) {
  const e2 = [];
  for (const t of n3) {
    const s2 = Fr$1[t.codePointAt(0)];
    if (s2 === void 0) throw new Error(`Non-base256emoji character: ${t}`);
    e2.push(s2);
  }
  return new Uint8Array(e2);
}
const Br$1 = ve({ prefix: "🚀", name: "base256emoji", encode: Mr$1, decode: Kr$1 });
var jr$1 = Object.freeze({ __proto__: null, base256emoji: Br$1 }), Vr$1 = si$1, ii$1 = 128, Gr$1 = -128, Hr$1 = Math.pow(2, 31);
function si$1(n3, e2, t) {
  e2 = e2 || [], t = t || 0;
  for (var s2 = t; n3 >= Hr$1; ) e2[t++] = n3 & 255 | ii$1, n3 /= 128;
  for (; n3 & Gr$1; ) e2[t++] = n3 & 255 | ii$1, n3 >>>= 7;
  return e2[t] = n3 | 0, si$1.bytes = t - s2 + 1, e2;
}
var Yr$1 = Le$2, Jr$1 = 128, ri$1 = 127;
function Le$2(n3, s2) {
  var t = 0, s2 = s2 || 0, i3 = 0, r2 = s2, o3, a2 = n3.length;
  do {
    if (r2 >= a2) throw Le$2.bytes = 0, new RangeError("Could not decode varint");
    o3 = n3[r2++], t += i3 < 28 ? (o3 & ri$1) << i3 : (o3 & ri$1) * Math.pow(2, i3), i3 += 7;
  } while (o3 >= Jr$1);
  return Le$2.bytes = r2 - s2, t;
}
var Xr$1 = Math.pow(2, 7), Wr$1 = Math.pow(2, 14), Zr$1 = Math.pow(2, 21), Qr$1 = Math.pow(2, 28), en$1 = Math.pow(2, 35), tn$1 = Math.pow(2, 42), sn$1 = Math.pow(2, 49), rn$1 = Math.pow(2, 56), nn$1 = Math.pow(2, 63), on$1 = function(n3) {
  return n3 < Xr$1 ? 1 : n3 < Wr$1 ? 2 : n3 < Zr$1 ? 3 : n3 < Qr$1 ? 4 : n3 < en$1 ? 5 : n3 < tn$1 ? 6 : n3 < sn$1 ? 7 : n3 < rn$1 ? 8 : n3 < nn$1 ? 9 : 10;
}, an$1 = { encode: Vr$1, decode: Yr$1, encodingLength: on$1 }, ni$1 = an$1;
const oi$1 = (n3, e2, t = 0) => (ni$1.encode(n3, e2, t), e2), ai$1 = (n3) => ni$1.encodingLength(n3), ke$2 = (n3, e2) => {
  const t = e2.byteLength, s2 = ai$1(n3), i3 = s2 + ai$1(t), r2 = new Uint8Array(i3 + t);
  return oi$1(n3, r2, 0), oi$1(t, r2, s2), r2.set(e2, i3), new cn$1(n3, t, e2, r2);
};
let cn$1 = class cn {
  constructor(e2, t, s2, i3) {
    this.code = e2, this.size = t, this.digest = s2, this.bytes = i3;
  }
};
const ci$1 = ({ name: n3, code: e2, encode: t }) => new hn$1(n3, e2, t);
let hn$1 = class hn {
  constructor(e2, t, s2) {
    this.name = e2, this.code = t, this.encode = s2;
  }
  digest(e2) {
    if (e2 instanceof Uint8Array) {
      const t = this.encode(e2);
      return t instanceof Uint8Array ? ke$2(this.code, t) : t.then((s2) => ke$2(this.code, s2));
    } else throw Error("Unknown type, must be binary type");
  }
};
const hi$1 = (n3) => async (e2) => new Uint8Array(await crypto.subtle.digest(n3, e2)), ln$1 = ci$1({ name: "sha2-256", code: 18, encode: hi$1("SHA-256") }), un$1 = ci$1({ name: "sha2-512", code: 19, encode: hi$1("SHA-512") });
var dn$1 = Object.freeze({ __proto__: null, sha256: ln$1, sha512: un$1 });
const li$1 = 0, pn$1 = "identity", ui$1 = Qt$1, gn$1 = (n3) => ke$2(li$1, ui$1(n3)), yn$1 = { code: li$1, name: pn$1, encode: ui$1, digest: gn$1 };
var bn$1 = Object.freeze({ __proto__: null, identity: yn$1 });
new TextEncoder(), new TextDecoder();
const di$1 = { ...ar$1, ...hr$1, ...ur$1, ...pr$1, ...br$1, ...Cr$1, ...Rr$1, ...Ar$1, ...kr$1, ...jr$1 };
({ ...dn$1, ...bn$1 });
function Dn$1(n3 = 0) {
  return globalThis.Buffer != null && globalThis.Buffer.allocUnsafe != null ? globalThis.Buffer.allocUnsafe(n3) : new Uint8Array(n3);
}
function pi$1(n3, e2, t, s2) {
  return { name: n3, prefix: e2, encoder: { name: n3, prefix: e2, encode: t }, decoder: { decode: s2 } };
}
const gi$1 = pi$1("utf8", "u", (n3) => "u" + new TextDecoder("utf8").decode(n3), (n3) => new TextEncoder().encode(n3.substring(1))), Ue$2 = pi$1("ascii", "a", (n3) => {
  let e2 = "a";
  for (let t = 0; t < n3.length; t++) e2 += String.fromCharCode(n3[t]);
  return e2;
}, (n3) => {
  n3 = n3.substring(1);
  const e2 = Dn$1(n3.length);
  for (let t = 0; t < n3.length; t++) e2[t] = n3.charCodeAt(t);
  return e2;
}), mn$1 = { utf8: gi$1, "utf-8": gi$1, hex: di$1.base16, latin1: Ue$2, ascii: Ue$2, binary: Ue$2, ...di$1 };
function vn$1(n3, e2 = "utf8") {
  const t = mn$1[e2];
  if (!t) throw new Error(`Unsupported encoding "${e2}"`);
  return (e2 === "utf8" || e2 === "utf-8") && globalThis.Buffer != null && globalThis.Buffer.from != null ? globalThis.Buffer.from(n3, "utf8") : t.decoder.decode(`${t.prefix}${n3}`);
}
var fn$1 = Object.defineProperty, _n$1 = (n3, e2, t) => e2 in n3 ? fn$1(n3, e2, { enumerable: true, configurable: true, writable: true, value: t }) : n3[e2] = t, G$1 = (n3, e2, t) => _n$1(n3, typeof e2 != "symbol" ? e2 + "" : e2, t);
let yi$1 = class yi {
  constructor(e2, t) {
    this.core = e2, this.logger = t, G$1(this, "keychain", /* @__PURE__ */ new Map()), G$1(this, "name", Et$2), G$1(this, "version", wt$1), G$1(this, "initialized", false), G$1(this, "storagePrefix", B$1), G$1(this, "init", async () => {
      if (!this.initialized) {
        const s2 = await this.getKeyChain();
        typeof s2 < "u" && (this.keychain = s2), this.initialized = true;
      }
    }), G$1(this, "has", (s2) => (this.isInitialized(), this.keychain.has(s2))), G$1(this, "set", async (s2, i3) => {
      this.isInitialized(), this.keychain.set(s2, i3), await this.persist();
    }), G$1(this, "get", (s2) => {
      this.isInitialized();
      const i3 = this.keychain.get(s2);
      if (typeof i3 > "u") {
        const { message: r2 } = te$1("NO_MATCHING_KEY", `${this.name}: ${s2}`);
        throw new Error(r2);
      }
      return i3;
    }), G$1(this, "del", async (s2) => {
      this.isInitialized(), this.keychain.delete(s2), await this.persist();
    }), this.core = e2, this.logger = E$3(t, this.name);
  }
  get context() {
    return y$3(this.logger);
  }
  get storageKey() {
    return this.storagePrefix + this.version + this.core.customStoragePrefix + "//" + this.name;
  }
  async setKeyChain(e2) {
    await this.core.storage.setItem(this.storageKey, no$2(e2));
  }
  async getKeyChain() {
    const e2 = await this.core.storage.getItem(this.storageKey);
    return typeof e2 < "u" ? ro$2(e2) : void 0;
  }
  async persist() {
    await this.setKeyChain(this.keychain);
  }
  isInitialized() {
    if (!this.initialized) {
      const { message: e2 } = te$1("NOT_INITIALIZED", this.name);
      throw new Error(e2);
    }
  }
};
var En$1 = Object.defineProperty, wn$1 = (n3, e2, t) => e2 in n3 ? En$1(n3, e2, { enumerable: true, configurable: true, writable: true, value: t }) : n3[e2] = t, P$2 = (n3, e2, t) => wn$1(n3, typeof e2 != "symbol" ? e2 + "" : e2, t);
let bi$1 = class bi {
  constructor(e2, t, s2) {
    this.core = e2, this.logger = t, P$2(this, "name", ft), P$2(this, "keychain"), P$2(this, "randomSessionIdentifier", ni$2()), P$2(this, "initialized", false), P$2(this, "init", async () => {
      this.initialized || (await this.keychain.init(), this.initialized = true);
    }), P$2(this, "hasKeys", (i3) => (this.isInitialized(), this.keychain.has(i3))), P$2(this, "getClientId", async () => {
      this.isInitialized();
      const i3 = await this.getClientSeed(), r2 = Po$2(i3);
      return Qe$1(r2.publicKey);
    }), P$2(this, "generateKeyPair", () => {
      this.isInitialized();
      const i3 = ti$2();
      return this.setPrivateKey(i3.publicKey, i3.privateKey);
    }), P$2(this, "signJWT", async (i3) => {
      this.isInitialized();
      const r2 = await this.getClientSeed(), o3 = Po$2(r2), a2 = this.randomSessionIdentifier, c2 = _t$2;
      return await Qo$1(a2, i3, c2, o3);
    }), P$2(this, "generateSharedKey", (i3, r2, o3) => {
      this.isInitialized();
      const a2 = this.getPrivateKey(i3), c2 = ri$2(a2, r2);
      return this.setSymKey(c2, o3);
    }), P$2(this, "setSymKey", async (i3, r2) => {
      this.isInitialized();
      const o3 = r2 || oi$2(i3);
      return await this.keychain.set(o3, i3), o3;
    }), P$2(this, "deleteKeyPair", async (i3) => {
      this.isInitialized(), await this.keychain.del(i3);
    }), P$2(this, "deleteSymKey", async (i3) => {
      this.isInitialized(), await this.keychain.del(i3);
    }), P$2(this, "encode", async (i3, r2, o3) => {
      this.isInitialized();
      const a2 = rr$2(o3), c2 = safeJsonStringify(r2);
      if (di$2(a2)) return ai$2(c2, o3 == null ? void 0 : o3.encoding);
      if (li$2(a2)) {
        const m4 = a2.senderPublicKey, A2 = a2.receiverPublicKey;
        i3 = await this.generateSharedKey(m4, A2);
      }
      const h4 = this.getSymKey(i3), { type: u2, senderPublicKey: g2 } = a2;
      return ii$2({ type: u2, symKey: h4, message: c2, senderPublicKey: g2, encoding: o3 == null ? void 0 : o3.encoding });
    }), P$2(this, "decode", async (i3, r2, o3) => {
      this.isInitialized();
      const a2 = fi$2(r2, o3);
      if (di$2(a2)) {
        const c2 = ui$2(r2, o3 == null ? void 0 : o3.encoding);
        return safeJsonParse(c2);
      }
      if (li$2(a2)) {
        const c2 = a2.receiverPublicKey, h4 = a2.senderPublicKey;
        i3 = await this.generateSharedKey(c2, h4);
      }
      try {
        const c2 = this.getSymKey(i3), h4 = ci$2({ symKey: c2, encoded: r2, encoding: o3 == null ? void 0 : o3.encoding });
        return safeJsonParse(h4);
      } catch (c2) {
        this.logger.error(`Failed to decode message from topic: '${i3}', clientId: '${await this.getClientId()}'`), this.logger.error(c2);
      }
    }), P$2(this, "getPayloadType", (i3, r2 = At$2) => {
      const o3 = Fe$2({ encoded: i3, encoding: r2 });
      return fe$1(o3.type);
    }), P$2(this, "getPayloadSenderPublicKey", (i3, r2 = At$2) => {
      const o3 = Fe$2({ encoded: i3, encoding: r2 });
      return o3.senderPublicKey ? toString(o3.senderPublicKey, V$2) : void 0;
    }), this.core = e2, this.logger = E$3(t, this.name), this.keychain = s2 || new yi$1(this.core, this.logger);
  }
  get context() {
    return y$3(this.logger);
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
      e2 = this.keychain.get(Ae$1);
    } catch {
      e2 = ni$2(), await this.keychain.set(Ae$1, e2);
    }
    return vn$1(e2, "base16");
  }
  getSymKey(e2) {
    return this.keychain.get(e2);
  }
  isInitialized() {
    if (!this.initialized) {
      const { message: e2 } = te$1("NOT_INITIALIZED", this.name);
      throw new Error(e2);
    }
  }
};
var In$1 = Object.defineProperty, Tn$1 = (n3, e2, t) => e2 in n3 ? In$1(n3, e2, { enumerable: true, configurable: true, writable: true, value: t }) : n3[e2] = t, H$1 = (n3, e2, t) => Tn$1(n3, typeof e2 != "symbol" ? e2 + "" : e2, t);
let Di$1 = class Di extends y$2 {
  constructor(e2, t) {
    super(e2, t), this.logger = e2, this.core = t, H$1(this, "messages", /* @__PURE__ */ new Map()), H$1(this, "name", It$1), H$1(this, "version", Tt$1), H$1(this, "initialized", false), H$1(this, "storagePrefix", B$1), H$1(this, "init", async () => {
      if (!this.initialized) {
        this.logger.trace("Initialized");
        try {
          const s2 = await this.getRelayerMessages();
          typeof s2 < "u" && (this.messages = s2), this.logger.debug(`Successfully Restored records for ${this.name}`), this.logger.trace({ type: "method", method: "restore", size: this.messages.size });
        } catch (s2) {
          this.logger.debug(`Failed to Restore records for ${this.name}`), this.logger.error(s2);
        } finally {
          this.initialized = true;
        }
      }
    }), H$1(this, "set", async (s2, i3) => {
      this.isInitialized();
      const r2 = si$2(i3);
      let o3 = this.messages.get(s2);
      return typeof o3 > "u" && (o3 = {}), typeof o3[r2] < "u" || (o3[r2] = i3, this.messages.set(s2, o3), await this.persist()), r2;
    }), H$1(this, "get", (s2) => {
      this.isInitialized();
      let i3 = this.messages.get(s2);
      return typeof i3 > "u" && (i3 = {}), i3;
    }), H$1(this, "has", (s2, i3) => {
      this.isInitialized();
      const r2 = this.get(s2), o3 = si$2(i3);
      return typeof r2[o3] < "u";
    }), H$1(this, "del", async (s2) => {
      this.isInitialized(), this.messages.delete(s2), await this.persist();
    }), this.logger = E$3(e2, this.name), this.core = t;
  }
  get context() {
    return y$3(this.logger);
  }
  get storageKey() {
    return this.storagePrefix + this.version + this.core.customStoragePrefix + "//" + this.name;
  }
  async setRelayerMessages(e2) {
    await this.core.storage.setItem(this.storageKey, no$2(e2));
  }
  async getRelayerMessages() {
    const e2 = await this.core.storage.getItem(this.storageKey);
    return typeof e2 < "u" ? ro$2(e2) : void 0;
  }
  async persist() {
    await this.setRelayerMessages(this.messages);
  }
  isInitialized() {
    if (!this.initialized) {
      const { message: e2 } = te$1("NOT_INITIALIZED", this.name);
      throw new Error(e2);
    }
  }
};
var Cn$1 = Object.defineProperty, Pn$1 = Object.defineProperties, Sn$1 = Object.getOwnPropertyDescriptors, mi$1 = Object.getOwnPropertySymbols, Rn$1 = Object.prototype.hasOwnProperty, xn$1 = Object.prototype.propertyIsEnumerable, Fe$1 = (n3, e2, t) => e2 in n3 ? Cn$1(n3, e2, { enumerable: true, configurable: true, writable: true, value: t }) : n3[e2] = t, fe = (n3, e2) => {
  for (var t in e2 || (e2 = {})) Rn$1.call(e2, t) && Fe$1(n3, t, e2[t]);
  if (mi$1) for (var t of mi$1(e2)) xn$1.call(e2, t) && Fe$1(n3, t, e2[t]);
  return n3;
}, Me$2 = (n3, e2) => Pn$1(n3, Sn$1(e2)), j$3 = (n3, e2, t) => Fe$1(n3, typeof e2 != "symbol" ? e2 + "" : e2, t);
let On$1 = class On extends m$1 {
  constructor(e2, t) {
    super(e2, t), this.relayer = e2, this.logger = t, j$3(this, "events", new eventsExports.EventEmitter()), j$3(this, "name", Ct$1), j$3(this, "queue", /* @__PURE__ */ new Map()), j$3(this, "publishTimeout", cjs$3.toMiliseconds(cjs$3.ONE_MINUTE)), j$3(this, "initialPublishTimeout", cjs$3.toMiliseconds(cjs$3.ONE_SECOND * 15)), j$3(this, "needsTransportRestart", false), j$3(this, "publish", async (s2, i3, r2) => {
      var o3;
      this.logger.debug("Publishing Payload"), this.logger.trace({ type: "method", method: "publish", params: { topic: s2, message: i3, opts: r2 } });
      const a2 = (r2 == null ? void 0 : r2.ttl) || Ne$1, c2 = yi$2(r2), h4 = (r2 == null ? void 0 : r2.prompt) || false, u2 = (r2 == null ? void 0 : r2.tag) || 0, g2 = (r2 == null ? void 0 : r2.id) || getBigIntRpcId().toString(), m4 = { topic: s2, message: i3, opts: { ttl: a2, relay: c2, prompt: h4, tag: u2, id: g2, attestation: r2 == null ? void 0 : r2.attestation, tvf: r2 == null ? void 0 : r2.tvf } }, A2 = `Failed to publish payload, please try again. id:${g2} tag:${u2}`;
      try {
        const l2 = new Promise(async (y3) => {
          const O4 = ({ id: v2 }) => {
            m4.opts.id === v2 && (this.removeRequestFromQueue(v2), this.relayer.events.removeListener(T$3.publish, O4), y3(m4));
          };
          this.relayer.events.on(T$3.publish, O4);
          const w2 = ao$2(new Promise((v2, k2) => {
            this.rpcPublish({ topic: s2, message: i3, ttl: a2, prompt: h4, tag: u2, id: g2, attestation: r2 == null ? void 0 : r2.attestation, tvf: r2 == null ? void 0 : r2.tvf }).then(v2).catch((I3) => {
              this.logger.warn(I3, I3 == null ? void 0 : I3.message), k2(I3);
            });
          }), this.initialPublishTimeout, `Failed initial publish, retrying.... id:${g2} tag:${u2}`);
          try {
            await w2, this.events.removeListener(T$3.publish, O4);
          } catch (v2) {
            this.queue.set(g2, Me$2(fe({}, m4), { attempt: 1 })), this.logger.warn(v2, v2 == null ? void 0 : v2.message);
          }
        });
        this.logger.trace({ type: "method", method: "publish", params: { id: g2, topic: s2, message: i3, opts: r2 } }), await ao$2(l2, this.publishTimeout, A2);
      } catch (l2) {
        if (this.logger.debug("Failed to Publish Payload"), this.logger.error(l2), (o3 = r2 == null ? void 0 : r2.internal) != null && o3.throwOnFailedPublish) throw l2;
      } finally {
        this.queue.delete(g2);
      }
    }), j$3(this, "on", (s2, i3) => {
      this.events.on(s2, i3);
    }), j$3(this, "once", (s2, i3) => {
      this.events.once(s2, i3);
    }), j$3(this, "off", (s2, i3) => {
      this.events.off(s2, i3);
    }), j$3(this, "removeListener", (s2, i3) => {
      this.events.removeListener(s2, i3);
    }), this.relayer = e2, this.logger = E$3(t, this.name), this.registerEventListeners();
  }
  get context() {
    return y$3(this.logger);
  }
  async rpcPublish(e2) {
    var t, s2, i3, r2;
    const { topic: o3, message: a2, ttl: c2 = Ne$1, prompt: h4, tag: u2, id: g2, attestation: m4, tvf: A2 } = e2, l2 = { method: mi$2(yi$2().protocol).publish, params: fe({ topic: o3, message: a2, ttl: c2, prompt: h4, tag: u2, attestation: m4 }, A2), id: g2 };
    ae$1((t = l2.params) == null ? void 0 : t.prompt) && ((s2 = l2.params) == null || delete s2.prompt), ae$1((i3 = l2.params) == null ? void 0 : i3.tag) && ((r2 = l2.params) == null || delete r2.tag), this.logger.debug("Outgoing Relay Payload"), this.logger.trace({ type: "message", direction: "outgoing", request: l2 });
    const y3 = await this.relayer.request(l2);
    return this.relayer.events.emit(T$3.publish, e2), this.logger.debug("Successfully Published Payload"), y3;
  }
  removeRequestFromQueue(e2) {
    this.queue.delete(e2);
  }
  checkQueue() {
    this.queue.forEach(async (e2, t) => {
      const s2 = e2.attempt + 1;
      this.queue.set(t, Me$2(fe({}, e2), { attempt: s2 }));
      const { topic: i3, message: r2, opts: o3, attestation: a2 } = e2;
      this.logger.warn({}, `Publisher: queue->publishing: ${e2.opts.id}, tag: ${e2.opts.tag}, attempt: ${s2}`), await this.rpcPublish(Me$2(fe({}, e2), { topic: i3, message: r2, ttl: o3.ttl, prompt: o3.prompt, tag: o3.tag, id: o3.id, attestation: a2, tvf: o3.tvf })), this.logger.warn({}, `Publisher: queue->published: ${e2.opts.id}`);
    });
  }
  registerEventListeners() {
    this.relayer.core.heartbeat.on(r$1.pulse, () => {
      if (this.needsTransportRestart) {
        this.needsTransportRestart = false, this.relayer.events.emit(T$3.connection_stalled);
        return;
      }
      this.checkQueue();
    }), this.relayer.on(T$3.message_ack, (e2) => {
      this.removeRequestFromQueue(e2.id.toString());
    });
  }
};
var An$1 = Object.defineProperty, Nn$1 = (n3, e2, t) => e2 in n3 ? An$1(n3, e2, { enumerable: true, configurable: true, writable: true, value: t }) : n3[e2] = t, re$1 = (n3, e2, t) => Nn$1(n3, typeof e2 != "symbol" ? e2 + "" : e2, t);
let $n$1 = class $n {
  constructor() {
    re$1(this, "map", /* @__PURE__ */ new Map()), re$1(this, "set", (e2, t) => {
      const s2 = this.get(e2);
      this.exists(e2, t) || this.map.set(e2, [...s2, t]);
    }), re$1(this, "get", (e2) => this.map.get(e2) || []), re$1(this, "exists", (e2, t) => this.get(e2).includes(t)), re$1(this, "delete", (e2, t) => {
      if (typeof t > "u") {
        this.map.delete(e2);
        return;
      }
      if (!this.map.has(e2)) return;
      const s2 = this.get(e2);
      if (!this.exists(e2, t)) return;
      const i3 = s2.filter((r2) => r2 !== t);
      if (!i3.length) {
        this.map.delete(e2);
        return;
      }
      this.map.set(e2, i3);
    }), re$1(this, "clear", () => {
      this.map.clear();
    });
  }
  get topics() {
    return Array.from(this.map.keys());
  }
};
var zn$1 = Object.defineProperty, Ln$1 = Object.defineProperties, kn$1 = Object.getOwnPropertyDescriptors, vi$1 = Object.getOwnPropertySymbols, Un$1 = Object.prototype.hasOwnProperty, Fn$1 = Object.prototype.propertyIsEnumerable, Ke$2 = (n3, e2, t) => e2 in n3 ? zn$1(n3, e2, { enumerable: true, configurable: true, writable: true, value: t }) : n3[e2] = t, de$1 = (n3, e2) => {
  for (var t in e2 || (e2 = {})) Un$1.call(e2, t) && Ke$2(n3, t, e2[t]);
  if (vi$1) for (var t of vi$1(e2)) Fn$1.call(e2, t) && Ke$2(n3, t, e2[t]);
  return n3;
}, Be$1 = (n3, e2) => Ln$1(n3, kn$1(e2)), D$2 = (n3, e2, t) => Ke$2(n3, typeof e2 != "symbol" ? e2 + "" : e2, t);
let fi$1 = class fi extends P$3 {
  constructor(e2, t) {
    super(e2, t), this.relayer = e2, this.logger = t, D$2(this, "subscriptions", /* @__PURE__ */ new Map()), D$2(this, "topicMap", new $n$1()), D$2(this, "events", new eventsExports.EventEmitter()), D$2(this, "name", $t), D$2(this, "version", zt$1), D$2(this, "pending", /* @__PURE__ */ new Map()), D$2(this, "cached", []), D$2(this, "initialized", false), D$2(this, "pendingSubscriptionWatchLabel", "pending_sub_watch_label"), D$2(this, "pollingInterval", 20), D$2(this, "storagePrefix", B$1), D$2(this, "subscribeTimeout", cjs$3.toMiliseconds(cjs$3.ONE_MINUTE)), D$2(this, "initialSubscribeTimeout", cjs$3.toMiliseconds(cjs$3.ONE_SECOND * 15)), D$2(this, "clientId"), D$2(this, "batchSubscribeTopicsLimit", 500), D$2(this, "init", async () => {
      this.initialized || (this.logger.trace("Initialized"), this.registerEventListeners(), await this.restore()), this.initialized = true;
    }), D$2(this, "subscribe", async (s2, i3) => {
      this.isInitialized(), this.logger.debug("Subscribing Topic"), this.logger.trace({ type: "method", method: "subscribe", params: { topic: s2, opts: i3 } });
      try {
        const r2 = yi$2(i3), o3 = { topic: s2, relay: r2, transportType: i3 == null ? void 0 : i3.transportType };
        this.pending.set(s2, o3);
        const a2 = await this.rpcSubscribe(s2, r2, i3);
        return typeof a2 == "string" && (this.onSubscribe(a2, o3), this.logger.debug("Successfully Subscribed Topic"), this.logger.trace({ type: "method", method: "subscribe", params: { topic: s2, opts: i3 } })), a2;
      } catch (r2) {
        throw this.logger.debug("Failed to Subscribe Topic"), this.logger.error(r2), r2;
      }
    }), D$2(this, "unsubscribe", async (s2, i3) => {
      this.isInitialized(), typeof (i3 == null ? void 0 : i3.id) < "u" ? await this.unsubscribeById(s2, i3.id, i3) : await this.unsubscribeByTopic(s2, i3);
    }), D$2(this, "isSubscribed", async (s2) => {
      if (this.topics.includes(s2)) return true;
      const i3 = `${this.pendingSubscriptionWatchLabel}_${s2}`;
      return await new Promise((r2, o3) => {
        const a2 = new cjs$3.Watch();
        a2.start(i3);
        const c2 = setInterval(() => {
          (!this.pending.has(s2) && this.topics.includes(s2) || this.cached.some((h4) => h4.topic === s2)) && (clearInterval(c2), a2.stop(i3), r2(true)), a2.elapsed(i3) >= Lt$1 && (clearInterval(c2), a2.stop(i3), o3(new Error("Subscription resolution timeout")));
        }, this.pollingInterval);
      }).catch(() => false);
    }), D$2(this, "on", (s2, i3) => {
      this.events.on(s2, i3);
    }), D$2(this, "once", (s2, i3) => {
      this.events.once(s2, i3);
    }), D$2(this, "off", (s2, i3) => {
      this.events.off(s2, i3);
    }), D$2(this, "removeListener", (s2, i3) => {
      this.events.removeListener(s2, i3);
    }), D$2(this, "start", async () => {
      await this.onConnect();
    }), D$2(this, "stop", async () => {
      await this.onDisconnect();
    }), D$2(this, "restart", async () => {
      await this.restore(), await this.onRestart();
    }), D$2(this, "checkPending", async () => {
      if (this.pending.size === 0 && (!this.initialized || !this.relayer.connected)) return;
      const s2 = [];
      this.pending.forEach((i3) => {
        s2.push(i3);
      }), await this.batchSubscribe(s2);
    }), D$2(this, "registerEventListeners", () => {
      this.relayer.core.heartbeat.on(r$1.pulse, async () => {
        await this.checkPending();
      }), this.events.on($$3.created, async (s2) => {
        const i3 = $$3.created;
        this.logger.info(`Emitting ${i3}`), this.logger.debug({ type: "event", event: i3, data: s2 }), await this.persist();
      }), this.events.on($$3.deleted, async (s2) => {
        const i3 = $$3.deleted;
        this.logger.info(`Emitting ${i3}`), this.logger.debug({ type: "event", event: i3, data: s2 }), await this.persist();
      });
    }), this.relayer = e2, this.logger = E$3(t, this.name), this.clientId = "";
  }
  get context() {
    return y$3(this.logger);
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
  get hasAnyTopics() {
    return this.topicMap.topics.length > 0 || this.pending.size > 0 || this.cached.length > 0 || this.subscriptions.size > 0;
  }
  hasSubscription(e2, t) {
    let s2 = false;
    try {
      s2 = this.getSubscription(e2).topic === t;
    } catch {
    }
    return s2;
  }
  reset() {
    this.cached = [], this.initialized = true;
  }
  onDisable() {
    this.cached = this.values, this.subscriptions.clear(), this.topicMap.clear();
  }
  async unsubscribeByTopic(e2, t) {
    const s2 = this.topicMap.get(e2);
    await Promise.all(s2.map(async (i3) => await this.unsubscribeById(e2, i3, t)));
  }
  async unsubscribeById(e2, t, s2) {
    this.logger.debug("Unsubscribing Topic"), this.logger.trace({ type: "method", method: "unsubscribe", params: { topic: e2, id: t, opts: s2 } });
    try {
      const i3 = yi$2(s2);
      await this.restartToComplete({ topic: e2, id: t, relay: i3 }), await this.rpcUnsubscribe(e2, t, i3);
      const r2 = de$2("USER_DISCONNECTED", `${this.name}, ${e2}`);
      await this.onUnsubscribe(e2, t, r2), this.logger.debug("Successfully Unsubscribed Topic"), this.logger.trace({ type: "method", method: "unsubscribe", params: { topic: e2, id: t, opts: s2 } });
    } catch (i3) {
      throw this.logger.debug("Failed to Unsubscribe Topic"), this.logger.error(i3), i3;
    }
  }
  async rpcSubscribe(e2, t, s2) {
    var i3;
    (!s2 || (s2 == null ? void 0 : s2.transportType) === Q$1.relay) && await this.restartToComplete({ topic: e2, id: e2, relay: t });
    const r2 = { method: mi$2(t.protocol).subscribe, params: { topic: e2 } };
    this.logger.debug("Outgoing Relay Payload"), this.logger.trace({ type: "payload", direction: "outgoing", request: r2 });
    const o3 = (i3 = s2 == null ? void 0 : s2.internal) == null ? void 0 : i3.throwOnFailedPublish;
    try {
      const a2 = await this.getSubscriptionId(e2);
      if ((s2 == null ? void 0 : s2.transportType) === Q$1.link_mode) return setTimeout(() => {
        (this.relayer.connected || this.relayer.connecting) && this.relayer.request(r2).catch((u2) => this.logger.warn(u2));
      }, cjs$3.toMiliseconds(cjs$3.ONE_SECOND)), a2;
      const c2 = new Promise(async (u2) => {
        const g2 = (m4) => {
          m4.topic === e2 && (this.events.removeListener($$3.created, g2), u2(m4.id));
        };
        this.events.on($$3.created, g2);
        try {
          const m4 = await ao$2(new Promise((A2, l2) => {
            this.relayer.request(r2).catch((y3) => {
              this.logger.warn(y3, y3 == null ? void 0 : y3.message), l2(y3);
            }).then(A2);
          }), this.initialSubscribeTimeout, `Subscribing to ${e2} failed, please try again`);
          this.events.removeListener($$3.created, g2), u2(m4);
        } catch {
        }
      }), h4 = await ao$2(c2, this.subscribeTimeout, `Subscribing to ${e2} failed, please try again`);
      if (!h4 && o3) throw new Error(`Subscribing to ${e2} failed, please try again`);
      return h4 ? a2 : null;
    } catch (a2) {
      if (this.logger.debug("Outgoing Relay Subscribe Payload stalled"), this.relayer.events.emit(T$3.connection_stalled), o3) throw a2;
    }
    return null;
  }
  async rpcBatchSubscribe(e2) {
    if (!e2.length) return;
    const t = e2[0].relay, s2 = { method: mi$2(t.protocol).batchSubscribe, params: { topics: e2.map((i3) => i3.topic) } };
    this.logger.debug("Outgoing Relay Payload"), this.logger.trace({ type: "payload", direction: "outgoing", request: s2 });
    try {
      await await ao$2(new Promise((i3) => {
        this.relayer.request(s2).catch((r2) => this.logger.warn(r2)).then(i3);
      }), this.subscribeTimeout, "rpcBatchSubscribe failed, please try again");
    } catch {
      this.relayer.events.emit(T$3.connection_stalled);
    }
  }
  async rpcBatchFetchMessages(e2) {
    if (!e2.length) return;
    const t = e2[0].relay, s2 = { method: mi$2(t.protocol).batchFetchMessages, params: { topics: e2.map((r2) => r2.topic) } };
    this.logger.debug("Outgoing Relay Payload"), this.logger.trace({ type: "payload", direction: "outgoing", request: s2 });
    let i3;
    try {
      i3 = await await ao$2(new Promise((r2, o3) => {
        this.relayer.request(s2).catch((a2) => {
          this.logger.warn(a2), o3(a2);
        }).then(r2);
      }), this.subscribeTimeout, "rpcBatchFetchMessages failed, please try again");
    } catch {
      this.relayer.events.emit(T$3.connection_stalled);
    }
    return i3;
  }
  rpcUnsubscribe(e2, t, s2) {
    const i3 = { method: mi$2(s2.protocol).unsubscribe, params: { topic: e2, id: t } };
    return this.logger.debug("Outgoing Relay Payload"), this.logger.trace({ type: "payload", direction: "outgoing", request: i3 }), this.relayer.request(i3);
  }
  onSubscribe(e2, t) {
    this.setSubscription(e2, Be$1(de$1({}, t), { id: e2 })), this.pending.delete(t.topic);
  }
  onBatchSubscribe(e2) {
    e2.length && e2.forEach((t) => {
      this.setSubscription(t.id, de$1({}, t)), this.pending.delete(t.topic);
    });
  }
  async onUnsubscribe(e2, t, s2) {
    this.events.removeAllListeners(t), this.hasSubscription(t, e2) && this.deleteSubscription(t, s2), await this.relayer.messages.del(e2);
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
    this.subscriptions.set(e2, de$1({}, t)), this.topicMap.set(t.topic, e2), this.events.emit($$3.created, t);
  }
  getSubscription(e2) {
    this.logger.debug("Getting subscription"), this.logger.trace({ type: "method", method: "getSubscription", id: e2 });
    const t = this.subscriptions.get(e2);
    if (!t) {
      const { message: s2 } = te$1("NO_MATCHING_KEY", `${this.name}: ${e2}`);
      throw new Error(s2);
    }
    return t;
  }
  deleteSubscription(e2, t) {
    this.logger.debug("Deleting subscription"), this.logger.trace({ type: "method", method: "deleteSubscription", id: e2, reason: t });
    const s2 = this.getSubscription(e2);
    this.subscriptions.delete(e2), this.topicMap.delete(s2.topic, e2), this.events.emit($$3.deleted, Be$1(de$1({}, s2), { reason: t }));
  }
  async persist() {
    await this.setRelayerSubscriptions(this.values), this.events.emit($$3.sync);
  }
  async onRestart() {
    if (this.cached.length) {
      const e2 = [...this.cached], t = Math.ceil(this.cached.length / this.batchSubscribeTopicsLimit);
      for (let s2 = 0; s2 < t; s2++) {
        const i3 = e2.splice(0, this.batchSubscribeTopicsLimit);
        await this.batchSubscribe(i3);
      }
    }
    this.events.emit($$3.resubscribed);
  }
  async restore() {
    try {
      const e2 = await this.getRelayerSubscriptions();
      if (typeof e2 > "u" || !e2.length) return;
      if (this.subscriptions.size) {
        const { message: t } = te$1("RESTORE_WILL_OVERRIDE", this.name);
        throw this.logger.error(t), this.logger.error(`${this.name}: ${JSON.stringify(this.values)}`), new Error(t);
      }
      this.cached = e2, this.logger.debug(`Successfully Restored subscriptions for ${this.name}`), this.logger.trace({ type: "method", method: "restore", subscriptions: this.values });
    } catch (e2) {
      this.logger.debug(`Failed to Restore subscriptions for ${this.name}`), this.logger.error(e2);
    }
  }
  async batchSubscribe(e2) {
    e2.length && (await this.rpcBatchSubscribe(e2), this.onBatchSubscribe(await Promise.all(e2.map(async (t) => Be$1(de$1({}, t), { id: await this.getSubscriptionId(t.topic) })))));
  }
  async batchFetchMessages(e2) {
    if (!e2.length) return;
    this.logger.trace(`Fetching batch messages for ${e2.length} subscriptions`);
    const t = await this.rpcBatchFetchMessages(e2);
    t && t.messages && (await vo$1(cjs$3.toMiliseconds(cjs$3.ONE_SECOND)), await this.relayer.handleBatchMessageEvents(t.messages));
  }
  async onConnect() {
    await this.restart(), this.reset();
  }
  onDisconnect() {
    this.onDisable();
  }
  isInitialized() {
    if (!this.initialized) {
      const { message: e2 } = te$1("NOT_INITIALIZED", this.name);
      throw new Error(e2);
    }
  }
  async restartToComplete(e2) {
    !this.relayer.connected && !this.relayer.connecting && (this.cached.push(e2), await this.relayer.transportOpen());
  }
  async getClientId() {
    return this.clientId || (this.clientId = await this.relayer.core.crypto.getClientId()), this.clientId;
  }
  async getSubscriptionId(e2) {
    return si$2(e2 + await this.getClientId());
  }
};
var Mn$1 = Object.defineProperty, _i$1 = Object.getOwnPropertySymbols, Kn$1 = Object.prototype.hasOwnProperty, Bn$1 = Object.prototype.propertyIsEnumerable, je$1 = (n3, e2, t) => e2 in n3 ? Mn$1(n3, e2, { enumerable: true, configurable: true, writable: true, value: t }) : n3[e2] = t, Ei$1 = (n3, e2) => {
  for (var t in e2 || (e2 = {})) Kn$1.call(e2, t) && je$1(n3, t, e2[t]);
  if (_i$1) for (var t of _i$1(e2)) Bn$1.call(e2, t) && je$1(n3, t, e2[t]);
  return n3;
}, p$2 = (n3, e2, t) => je$1(n3, typeof e2 != "symbol" ? e2 + "" : e2, t);
let wi$1 = class wi extends d$3 {
  constructor(e2) {
    super(e2), p$2(this, "protocol", "wc"), p$2(this, "version", 2), p$2(this, "core"), p$2(this, "logger"), p$2(this, "events", new eventsExports.EventEmitter()), p$2(this, "provider"), p$2(this, "messages"), p$2(this, "subscriber"), p$2(this, "publisher"), p$2(this, "name", Rt$2), p$2(this, "transportExplicitlyClosed", false), p$2(this, "initialized", false), p$2(this, "connectionAttemptInProgress", false), p$2(this, "relayUrl"), p$2(this, "projectId"), p$2(this, "packageName"), p$2(this, "bundleId"), p$2(this, "hasExperiencedNetworkDisruption", false), p$2(this, "pingTimeout"), p$2(this, "heartBeatTimeout", cjs$3.toMiliseconds(cjs$3.THIRTY_SECONDS + cjs$3.FIVE_SECONDS)), p$2(this, "reconnectTimeout"), p$2(this, "connectPromise"), p$2(this, "reconnectInProgress", false), p$2(this, "requestsInFlight", []), p$2(this, "connectTimeout", cjs$3.toMiliseconds(cjs$3.ONE_SECOND * 15)), p$2(this, "request", async (t) => {
      var s2, i3;
      this.logger.debug("Publishing Request Payload");
      const r2 = t.id || getBigIntRpcId().toString();
      await this.toEstablishConnection();
      try {
        this.logger.trace({ id: r2, method: t.method, topic: (s2 = t.params) == null ? void 0 : s2.topic }, "relayer.request - publishing...");
        const o3 = `${r2}:${((i3 = t.params) == null ? void 0 : i3.tag) || ""}`;
        this.requestsInFlight.push(o3);
        const a2 = await this.provider.request(t);
        return this.requestsInFlight = this.requestsInFlight.filter((c2) => c2 !== o3), a2;
      } catch (o3) {
        throw this.logger.debug(`Failed to Publish Request: ${r2}`), o3;
      }
    }), p$2(this, "resetPingTimeout", () => {
      if (et$1()) try {
        clearTimeout(this.pingTimeout), this.pingTimeout = setTimeout(() => {
          var t, s2, i3;
          this.logger.debug({}, "pingTimeout: Connection stalled, terminating..."), (i3 = (s2 = (t = this.provider) == null ? void 0 : t.connection) == null ? void 0 : s2.socket) == null || i3.terminate();
        }, this.heartBeatTimeout);
      } catch (t) {
        this.logger.warn(t, t == null ? void 0 : t.message);
      }
    }), p$2(this, "onPayloadHandler", (t) => {
      this.onProviderPayload(t), this.resetPingTimeout();
    }), p$2(this, "onConnectHandler", () => {
      this.logger.warn({}, "Relayer connected 🛜"), this.startPingTimeout(), this.events.emit(T$3.connect);
    }), p$2(this, "onDisconnectHandler", () => {
      this.logger.warn({}, "Relayer disconnected 🛑"), this.requestsInFlight = [], this.onProviderDisconnect();
    }), p$2(this, "onProviderErrorHandler", (t) => {
      this.logger.fatal(`Fatal socket error: ${t.message}`), this.events.emit(T$3.error, t), this.logger.fatal("Fatal socket error received, closing transport"), this.transportClose();
    }), p$2(this, "registerProviderListeners", () => {
      this.provider.on(L$3.payload, this.onPayloadHandler), this.provider.on(L$3.connect, this.onConnectHandler), this.provider.on(L$3.disconnect, this.onDisconnectHandler), this.provider.on(L$3.error, this.onProviderErrorHandler);
    }), this.core = e2.core, this.logger = typeof e2.logger < "u" && typeof e2.logger != "string" ? E$3(e2.logger, this.name) : gt$1(k$2({ level: e2.logger || St$2 })), this.messages = new Di$1(this.logger, e2.core), this.subscriber = new fi$1(this, this.logger), this.publisher = new On$1(this, this.logger), this.relayUrl = (e2 == null ? void 0 : e2.relayUrl) || $e$2, this.projectId = e2.projectId, Wr$2() ? this.packageName = Jr$2() : zr$2() && (this.bundleId = Jr$2()), this.provider = {};
  }
  async init() {
    if (this.logger.trace("Initialized"), this.registerEventListeners(), await Promise.all([this.messages.init(), this.subscriber.init()]), this.initialized = true, this.subscriber.hasAnyTopics) try {
      await this.transportOpen();
    } catch (e2) {
      this.logger.warn(e2, e2 == null ? void 0 : e2.message);
    }
  }
  get context() {
    return y$3(this.logger);
  }
  get connected() {
    var e2, t, s2;
    return ((s2 = (t = (e2 = this.provider) == null ? void 0 : e2.connection) == null ? void 0 : t.socket) == null ? void 0 : s2.readyState) === 1 || false;
  }
  get connecting() {
    var e2, t, s2;
    return ((s2 = (t = (e2 = this.provider) == null ? void 0 : e2.connection) == null ? void 0 : t.socket) == null ? void 0 : s2.readyState) === 0 || this.connectPromise !== void 0 || false;
  }
  async publish(e2, t, s2) {
    this.isInitialized(), await this.publisher.publish(e2, t, s2), await this.recordMessageEvent({ topic: e2, message: t, publishedAt: Date.now(), transportType: Q$1.relay });
  }
  async subscribe(e2, t) {
    var s2, i3, r2;
    this.isInitialized(), (!(t != null && t.transportType) || (t == null ? void 0 : t.transportType) === "relay") && await this.toEstablishConnection();
    const o3 = typeof ((s2 = t == null ? void 0 : t.internal) == null ? void 0 : s2.throwOnFailedPublish) > "u" ? true : (i3 = t == null ? void 0 : t.internal) == null ? void 0 : i3.throwOnFailedPublish;
    let a2 = ((r2 = this.subscriber.topicMap.get(e2)) == null ? void 0 : r2[0]) || "", c2;
    const h4 = (u2) => {
      u2.topic === e2 && (this.subscriber.off($$3.created, h4), c2());
    };
    return await Promise.all([new Promise((u2) => {
      c2 = u2, this.subscriber.on($$3.created, h4);
    }), new Promise(async (u2, g2) => {
      a2 = await this.subscriber.subscribe(e2, Ei$1({ internal: { throwOnFailedPublish: o3 } }, t)).catch((m4) => {
        o3 && g2(m4);
      }) || a2, u2();
    })]), a2;
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
    this.provider.disconnect && (this.hasExperiencedNetworkDisruption || this.connected) ? await ao$2(this.provider.disconnect(), 2e3, "provider.disconnect()").catch(() => this.onProviderDisconnect()) : this.onProviderDisconnect();
  }
  async transportClose() {
    this.transportExplicitlyClosed = true, await this.transportDisconnect();
  }
  async transportOpen(e2) {
    if (!this.subscriber.hasAnyTopics) {
      this.logger.warn("Starting WS connection skipped because the client has no topics to work with.");
      return;
    }
    if (this.connectPromise ? (this.logger.debug({}, "Waiting for existing connection attempt to resolve..."), await this.connectPromise, this.logger.debug({}, "Existing connection attempt resolved")) : (this.connectPromise = new Promise(async (t, s2) => {
      await this.connect(e2).then(t).catch(s2).finally(() => {
        this.connectPromise = void 0;
      });
    }), await this.connectPromise), !this.connected) throw new Error(`Couldn't establish socket connection to the relay server: ${this.relayUrl}`);
  }
  async restartTransport(e2) {
    this.logger.debug({}, "Restarting transport..."), !this.connectionAttemptInProgress && (this.relayUrl = e2 || this.relayUrl, await this.confirmOnlineStateOrThrow(), await this.transportClose(), await this.transportOpen());
  }
  async confirmOnlineStateOrThrow() {
    if (!await Yi$1()) throw new Error("No internet connection detected. Please restart your network and try again.");
  }
  async handleBatchMessageEvents(e2) {
    if ((e2 == null ? void 0 : e2.length) === 0) {
      this.logger.trace("Batch message events is empty. Ignoring...");
      return;
    }
    const t = e2.sort((s2, i3) => s2.publishedAt - i3.publishedAt);
    this.logger.debug(`Batch of ${t.length} message events sorted`);
    for (const s2 of t) try {
      await this.onMessageEvent(s2);
    } catch (i3) {
      this.logger.warn(i3, "Error while processing batch message event: " + (i3 == null ? void 0 : i3.message));
    }
    this.logger.trace(`Batch of ${t.length} message events processed`);
  }
  async onLinkMessageEvent(e2, t) {
    const { topic: s2 } = e2;
    if (!t.sessionExists) {
      const i3 = ho$1(cjs$3.FIVE_MINUTES), r2 = { topic: s2, expiry: i3, relay: { protocol: "irn" }, active: false };
      await this.core.pairing.pairings.set(s2, r2);
    }
    this.events.emit(T$3.message, e2), await this.recordMessageEvent(e2);
  }
  async connect(e2) {
    await this.confirmOnlineStateOrThrow(), e2 && e2 !== this.relayUrl && (this.relayUrl = e2, await this.transportDisconnect()), this.connectionAttemptInProgress = true, this.transportExplicitlyClosed = false;
    let t = 1;
    for (; t < 6; ) {
      try {
        if (this.transportExplicitlyClosed) break;
        this.logger.debug({}, `Connecting to ${this.relayUrl}, attempt: ${t}...`), await this.createProvider(), await new Promise(async (s2, i3) => {
          const r2 = () => {
            i3(new Error("Connection interrupted while trying to subscribe"));
          };
          this.provider.once(L$3.disconnect, r2), await ao$2(new Promise((o3, a2) => {
            this.provider.connect().then(o3).catch(a2);
          }), this.connectTimeout, `Socket stalled when trying to connect to ${this.relayUrl}`).catch((o3) => {
            i3(o3);
          }).finally(() => {
            this.provider.off(L$3.disconnect, r2), clearTimeout(this.reconnectTimeout);
          }), await new Promise(async (o3, a2) => {
            const c2 = () => {
              a2(new Error("Connection interrupted while trying to subscribe"));
            };
            this.provider.once(L$3.disconnect, c2), await this.subscriber.start().then(o3).catch(a2).finally(() => {
              this.provider.off(L$3.disconnect, c2);
            });
          }), this.hasExperiencedNetworkDisruption = false, s2();
        });
      } catch (s2) {
        await this.subscriber.stop();
        const i3 = s2;
        this.logger.warn({}, i3.message), this.hasExperiencedNetworkDisruption = true;
      } finally {
        this.connectionAttemptInProgress = false;
      }
      if (this.connected) {
        this.logger.debug({}, `Connected to ${this.relayUrl} successfully on attempt: ${t}`);
        break;
      }
      await new Promise((s2) => setTimeout(s2, cjs$3.toMiliseconds(t * 1))), t++;
    }
  }
  startPingTimeout() {
    var e2, t, s2, i3, r2;
    if (et$1()) try {
      (t = (e2 = this.provider) == null ? void 0 : e2.connection) != null && t.socket && ((r2 = (i3 = (s2 = this.provider) == null ? void 0 : s2.connection) == null ? void 0 : i3.socket) == null || r2.on("ping", () => {
        this.resetPingTimeout();
      })), this.resetPingTimeout();
    } catch (o3) {
      this.logger.warn(o3, o3 == null ? void 0 : o3.message);
    }
  }
  async createProvider() {
    this.provider.connection && this.unregisterProviderListeners();
    const e2 = await this.core.crypto.signJWT(this.relayUrl);
    this.provider = new o$2(new f$3(Zr$2({ sdkVersion: me$1, protocol: this.protocol, version: this.version, relayUrl: this.relayUrl, projectId: this.projectId, auth: e2, useOnCloseEvent: true, bundleId: this.bundleId, packageName: this.packageName }))), this.registerProviderListeners();
  }
  async recordMessageEvent(e2) {
    const { topic: t, message: s2 } = e2;
    await this.messages.set(t, s2);
  }
  async shouldIgnoreMessageEvent(e2) {
    const { topic: t, message: s2 } = e2;
    if (!s2 || s2.length === 0) return this.logger.warn(`Ignoring invalid/empty message: ${s2}`), true;
    if (!await this.subscriber.isSubscribed(t)) return this.logger.warn(`Ignoring message for non-subscribed topic ${t}`), true;
    const i3 = this.messages.has(t, s2);
    return i3 && this.logger.warn(`Ignoring duplicate message: ${s2}`), i3;
  }
  async onProviderPayload(e2) {
    if (this.logger.debug("Incoming Relay Payload"), this.logger.trace({ type: "payload", direction: "incoming", payload: e2 }), isJsonRpcRequest(e2)) {
      if (!e2.method.endsWith(xt$1)) return;
      const t = e2.params, { topic: s2, message: i3, publishedAt: r2, attestation: o3 } = t.data, a2 = { topic: s2, message: i3, publishedAt: r2, transportType: Q$1.relay, attestation: o3 };
      this.logger.debug("Emitting Relayer Payload"), this.logger.trace(Ei$1({ type: "event", event: t.id }, a2)), this.events.emit(t.id, a2), await this.acknowledgePayload(e2), await this.onMessageEvent(a2);
    } else isJsonRpcResponse(e2) && this.events.emit(T$3.message_ack, e2);
  }
  async onMessageEvent(e2) {
    await this.shouldIgnoreMessageEvent(e2) || (this.events.emit(T$3.message, e2), await this.recordMessageEvent(e2));
  }
  async acknowledgePayload(e2) {
    const t = formatJsonRpcResult(e2.id, true);
    await this.provider.connection.send(t);
  }
  unregisterProviderListeners() {
    this.provider.off(L$3.payload, this.onPayloadHandler), this.provider.off(L$3.connect, this.onConnectHandler), this.provider.off(L$3.disconnect, this.onDisconnectHandler), this.provider.off(L$3.error, this.onProviderErrorHandler), clearTimeout(this.pingTimeout);
  }
  async registerEventListeners() {
    let e2 = await Yi$1();
    Xi$1(async (t) => {
      e2 !== t && (e2 = t, t ? await this.transportOpen().catch((s2) => this.logger.error(s2, s2 == null ? void 0 : s2.message)) : (this.hasExperiencedNetworkDisruption = true, await this.transportDisconnect(), this.transportExplicitlyClosed = false));
    });
  }
  async onProviderDisconnect() {
    clearTimeout(this.pingTimeout), this.events.emit(T$3.disconnect), this.connectionAttemptInProgress = false, !this.reconnectInProgress && (this.reconnectInProgress = true, await this.subscriber.stop(), this.subscriber.hasAnyTopics && (this.transportExplicitlyClosed || (this.reconnectTimeout = setTimeout(async () => {
      await this.transportOpen().catch((e2) => this.logger.error(e2, e2 == null ? void 0 : e2.message)), this.reconnectTimeout = void 0, this.reconnectInProgress = false;
    }, cjs$3.toMiliseconds(Ot$1)))));
  }
  isInitialized() {
    if (!this.initialized) {
      const { message: e2 } = te$1("NOT_INITIALIZED", this.name);
      throw new Error(e2);
    }
  }
  async toEstablishConnection() {
    await this.confirmOnlineStateOrThrow(), !this.connected && await this.connect();
  }
};
var jn$1 = Object.defineProperty, Ii$1 = Object.getOwnPropertySymbols, Vn$1 = Object.prototype.hasOwnProperty, qn$1 = Object.prototype.propertyIsEnumerable, Ve$1 = (n3, e2, t) => e2 in n3 ? jn$1(n3, e2, { enumerable: true, configurable: true, writable: true, value: t }) : n3[e2] = t, Ti$1 = (n3, e2) => {
  for (var t in e2 || (e2 = {})) Vn$1.call(e2, t) && Ve$1(n3, t, e2[t]);
  if (Ii$1) for (var t of Ii$1(e2)) qn$1.call(e2, t) && Ve$1(n3, t, e2[t]);
  return n3;
}, z$2 = (n3, e2, t) => Ve$1(n3, typeof e2 != "symbol" ? e2 + "" : e2, t);
let Ci$1 = class Ci extends f$4 {
  constructor(e2, t, s2, i3 = B$1, r2 = void 0) {
    super(e2, t, s2, i3), this.core = e2, this.logger = t, this.name = s2, z$2(this, "map", /* @__PURE__ */ new Map()), z$2(this, "version", At$1), z$2(this, "cached", []), z$2(this, "initialized", false), z$2(this, "getKey"), z$2(this, "storagePrefix", B$1), z$2(this, "recentlyDeleted", []), z$2(this, "recentlyDeletedLimit", 200), z$2(this, "init", async () => {
      this.initialized || (this.logger.trace("Initialized"), await this.restore(), this.cached.forEach((o3) => {
        this.getKey && o3 !== null && !ae$1(o3) ? this.map.set(this.getKey(o3), o3) : Pi$2(o3) ? this.map.set(o3.id, o3) : Li$2(o3) && this.map.set(o3.topic, o3);
      }), this.cached = [], this.initialized = true);
    }), z$2(this, "set", async (o3, a2) => {
      this.isInitialized(), this.map.has(o3) ? await this.update(o3, a2) : (this.logger.debug("Setting value"), this.logger.trace({ type: "method", method: "set", key: o3, value: a2 }), this.map.set(o3, a2), await this.persist());
    }), z$2(this, "get", (o3) => (this.isInitialized(), this.logger.debug("Getting value"), this.logger.trace({ type: "method", method: "get", key: o3 }), this.getData(o3))), z$2(this, "getAll", (o3) => (this.isInitialized(), o3 ? this.values.filter((a2) => Object.keys(o3).every((c2) => Ls$2(a2[c2], o3[c2]))) : this.values)), z$2(this, "update", async (o3, a2) => {
      this.isInitialized(), this.logger.debug("Updating value"), this.logger.trace({ type: "method", method: "update", key: o3, update: a2 });
      const c2 = Ti$1(Ti$1({}, this.getData(o3)), a2);
      this.map.set(o3, c2), await this.persist();
    }), z$2(this, "delete", async (o3, a2) => {
      this.isInitialized(), this.map.has(o3) && (this.logger.debug("Deleting value"), this.logger.trace({ type: "method", method: "delete", key: o3, reason: a2 }), this.map.delete(o3), this.addToRecentlyDeleted(o3), await this.persist());
    }), this.logger = E$3(t, this.name), this.storagePrefix = i3, this.getKey = r2;
  }
  get context() {
    return y$3(this.logger);
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
        const { message: i3 } = te$1("MISSING_OR_INVALID", `Record was recently deleted - ${this.name}: ${e2}`);
        throw this.logger.error(i3), new Error(i3);
      }
      const { message: s2 } = te$1("NO_MATCHING_KEY", `${this.name}: ${e2}`);
      throw this.logger.error(s2), new Error(s2);
    }
    return t;
  }
  async persist() {
    await this.setDataStore(this.values);
  }
  async restore() {
    try {
      const e2 = await this.getDataStore();
      if (typeof e2 > "u" || !e2.length) return;
      if (this.map.size) {
        const { message: t } = te$1("RESTORE_WILL_OVERRIDE", this.name);
        throw this.logger.error(t), new Error(t);
      }
      this.cached = e2, this.logger.debug(`Successfully Restored value for ${this.name}`), this.logger.trace({ type: "method", method: "restore", value: this.values });
    } catch (e2) {
      this.logger.debug(`Failed to Restore value for ${this.name}`), this.logger.error(e2);
    }
  }
  isInitialized() {
    if (!this.initialized) {
      const { message: e2 } = te$1("NOT_INITIALIZED", this.name);
      throw new Error(e2);
    }
  }
};
var Gn$1 = Object.defineProperty, Hn$1 = (n3, e2, t) => e2 in n3 ? Gn$1(n3, e2, { enumerable: true, configurable: true, writable: true, value: t }) : n3[e2] = t, d$1 = (n3, e2, t) => Hn$1(n3, typeof e2 != "symbol" ? e2 + "" : e2, t);
let Pi$1 = class Pi {
  constructor(e2, t) {
    this.core = e2, this.logger = t, d$1(this, "name", kt$1), d$1(this, "version", Ut$1), d$1(this, "events", new wt$4()), d$1(this, "pairings"), d$1(this, "initialized", false), d$1(this, "storagePrefix", B$1), d$1(this, "ignoredPayloadTypes", [Ie$1]), d$1(this, "registeredMethods", []), d$1(this, "init", async () => {
      this.initialized || (await this.pairings.init(), await this.cleanup(), this.registerRelayerEvents(), this.registerExpirerEvents(), this.initialized = true, this.logger.trace("Initialized"));
    }), d$1(this, "register", ({ methods: s2 }) => {
      this.isInitialized(), this.registeredMethods = [.../* @__PURE__ */ new Set([...this.registeredMethods, ...s2])];
    }), d$1(this, "create", async (s2) => {
      this.isInitialized();
      const i3 = ni$2(), r2 = await this.core.crypto.setSymKey(i3), o3 = ho$1(cjs$3.FIVE_MINUTES), a2 = { protocol: Pt }, c2 = { topic: r2, expiry: o3, relay: a2, active: false, methods: s2 == null ? void 0 : s2.methods }, h4 = wi$2({ protocol: this.core.protocol, version: this.core.version, topic: r2, symKey: i3, relay: a2, expiryTimestamp: o3, methods: s2 == null ? void 0 : s2.methods });
      return this.events.emit(se$1.create, c2), this.core.expirer.set(r2, o3), await this.pairings.set(r2, c2), await this.core.relayer.subscribe(r2, { transportType: s2 == null ? void 0 : s2.transportType }), { topic: r2, uri: h4 };
    }), d$1(this, "pair", async (s2) => {
      this.isInitialized();
      const i3 = this.core.eventClient.createEvent({ properties: { topic: s2 == null ? void 0 : s2.uri, trace: [q$2.pairing_started] } });
      this.isValidPair(s2, i3);
      const { topic: r2, symKey: o3, relay: a2, expiryTimestamp: c2, methods: h4 } = bi$2(s2.uri);
      i3.props.properties.topic = r2, i3.addTrace(q$2.pairing_uri_validation_success), i3.addTrace(q$2.pairing_uri_not_expired);
      let u2;
      if (this.pairings.keys.includes(r2)) {
        if (u2 = this.pairings.get(r2), i3.addTrace(q$2.existing_pairing), u2.active) throw i3.setError(J$1.active_pairing_already_exists), new Error(`Pairing already exists: ${r2}. Please try again with a new connection URI.`);
        i3.addTrace(q$2.pairing_not_expired);
      }
      const g2 = c2 || ho$1(cjs$3.FIVE_MINUTES), m4 = { topic: r2, relay: a2, expiry: g2, active: false, methods: h4 };
      this.core.expirer.set(r2, g2), await this.pairings.set(r2, m4), i3.addTrace(q$2.store_new_pairing), s2.activatePairing && await this.activate({ topic: r2 }), this.events.emit(se$1.create, m4), i3.addTrace(q$2.emit_inactive_pairing), this.core.crypto.keychain.has(r2) || await this.core.crypto.setSymKey(o3, r2), i3.addTrace(q$2.subscribing_pairing_topic);
      try {
        await this.core.relayer.confirmOnlineStateOrThrow();
      } catch {
        i3.setError(J$1.no_internet_connection);
      }
      try {
        await this.core.relayer.subscribe(r2, { relay: a2 });
      } catch (A2) {
        throw i3.setError(J$1.subscribe_pairing_topic_failure), A2;
      }
      return i3.addTrace(q$2.subscribe_pairing_topic_success), m4;
    }), d$1(this, "activate", async ({ topic: s2 }) => {
      this.isInitialized();
      const i3 = ho$1(cjs$3.FIVE_MINUTES);
      this.core.expirer.set(s2, i3), await this.pairings.update(s2, { active: true, expiry: i3 });
    }), d$1(this, "ping", async (s2) => {
      this.isInitialized(), await this.isValidPing(s2), this.logger.warn("ping() is deprecated and will be removed in the next major release.");
      const { topic: i3 } = s2;
      if (this.pairings.keys.includes(i3)) {
        const r2 = await this.sendRequest(i3, "wc_pairingPing", {}), { done: o3, resolve: a2, reject: c2 } = co$2();
        this.events.once(go$1("pairing_ping", r2), ({ error: h4 }) => {
          h4 ? c2(h4) : a2();
        }), await o3();
      }
    }), d$1(this, "updateExpiry", async ({ topic: s2, expiry: i3 }) => {
      this.isInitialized(), await this.pairings.update(s2, { expiry: i3 });
    }), d$1(this, "updateMetadata", async ({ topic: s2, metadata: i3 }) => {
      this.isInitialized(), await this.pairings.update(s2, { peerMetadata: i3 });
    }), d$1(this, "getPairings", () => (this.isInitialized(), this.pairings.values)), d$1(this, "disconnect", async (s2) => {
      this.isInitialized(), await this.isValidDisconnect(s2);
      const { topic: i3 } = s2;
      this.pairings.keys.includes(i3) && (await this.sendRequest(i3, "wc_pairingDelete", de$2("USER_DISCONNECTED")), await this.deletePairing(i3));
    }), d$1(this, "formatUriFromPairing", (s2) => {
      this.isInitialized();
      const { topic: i3, relay: r2, expiry: o3, methods: a2 } = s2, c2 = this.core.crypto.keychain.get(i3);
      return wi$2({ protocol: this.core.protocol, version: this.core.version, topic: i3, symKey: c2, relay: r2, expiryTimestamp: o3, methods: a2 });
    }), d$1(this, "sendRequest", async (s2, i3, r2) => {
      const o3 = formatJsonRpcRequest(i3, r2), a2 = await this.core.crypto.encode(s2, o3), c2 = ie$1[i3].req;
      return this.core.history.set(s2, o3), this.core.relayer.publish(s2, a2, c2), o3.id;
    }), d$1(this, "sendResult", async (s2, i3, r2) => {
      const o3 = formatJsonRpcResult(s2, r2), a2 = await this.core.crypto.encode(i3, o3), c2 = (await this.core.history.get(i3, s2)).request.method, h4 = ie$1[c2].res;
      await this.core.relayer.publish(i3, a2, h4), await this.core.history.resolve(o3);
    }), d$1(this, "sendError", async (s2, i3, r2) => {
      const o3 = formatJsonRpcError(s2, r2), a2 = await this.core.crypto.encode(i3, o3), c2 = (await this.core.history.get(i3, s2)).request.method, h4 = ie$1[c2] ? ie$1[c2].res : ie$1.unregistered_method.res;
      await this.core.relayer.publish(i3, a2, h4), await this.core.history.resolve(o3);
    }), d$1(this, "deletePairing", async (s2, i3) => {
      await this.core.relayer.unsubscribe(s2), await Promise.all([this.pairings.delete(s2, de$2("USER_DISCONNECTED")), this.core.crypto.deleteSymKey(s2), i3 ? Promise.resolve() : this.core.expirer.del(s2)]);
    }), d$1(this, "cleanup", async () => {
      const s2 = this.pairings.getAll().filter((i3) => po$1(i3.expiry));
      await Promise.all(s2.map((i3) => this.deletePairing(i3.topic)));
    }), d$1(this, "onRelayEventRequest", (s2) => {
      const { topic: i3, payload: r2 } = s2;
      switch (r2.method) {
        case "wc_pairingPing":
          return this.onPairingPingRequest(i3, r2);
        case "wc_pairingDelete":
          return this.onPairingDeleteRequest(i3, r2);
        default:
          return this.onUnknownRpcMethodRequest(i3, r2);
      }
    }), d$1(this, "onRelayEventResponse", async (s2) => {
      const { topic: i3, payload: r2 } = s2, o3 = (await this.core.history.get(i3, r2.id)).request.method;
      switch (o3) {
        case "wc_pairingPing":
          return this.onPairingPingResponse(i3, r2);
        default:
          return this.onUnknownRpcMethodResponse(o3);
      }
    }), d$1(this, "onPairingPingRequest", async (s2, i3) => {
      const { id: r2 } = i3;
      try {
        this.isValidPing({ topic: s2 }), await this.sendResult(r2, s2, true), this.events.emit(se$1.ping, { id: r2, topic: s2 });
      } catch (o3) {
        await this.sendError(r2, s2, o3), this.logger.error(o3);
      }
    }), d$1(this, "onPairingPingResponse", (s2, i3) => {
      const { id: r2 } = i3;
      setTimeout(() => {
        isJsonRpcResult(i3) ? this.events.emit(go$1("pairing_ping", r2), {}) : isJsonRpcError(i3) && this.events.emit(go$1("pairing_ping", r2), { error: i3.error });
      }, 500);
    }), d$1(this, "onPairingDeleteRequest", async (s2, i3) => {
      const { id: r2 } = i3;
      try {
        this.isValidDisconnect({ topic: s2 }), await this.deletePairing(s2), this.events.emit(se$1.delete, { id: r2, topic: s2 });
      } catch (o3) {
        await this.sendError(r2, s2, o3), this.logger.error(o3);
      }
    }), d$1(this, "onUnknownRpcMethodRequest", async (s2, i3) => {
      const { id: r2, method: o3 } = i3;
      try {
        if (this.registeredMethods.includes(o3)) return;
        const a2 = de$2("WC_METHOD_UNSUPPORTED", o3);
        await this.sendError(r2, s2, a2), this.logger.error(a2);
      } catch (a2) {
        await this.sendError(r2, s2, a2), this.logger.error(a2);
      }
    }), d$1(this, "onUnknownRpcMethodResponse", (s2) => {
      this.registeredMethods.includes(s2) || this.logger.error(de$2("WC_METHOD_UNSUPPORTED", s2));
    }), d$1(this, "isValidPair", (s2, i3) => {
      var r2;
      if (!Di$2(s2)) {
        const { message: a2 } = te$1("MISSING_OR_INVALID", `pair() params: ${s2}`);
        throw i3.setError(J$1.malformed_pairing_uri), new Error(a2);
      }
      if (!Ri$2(s2.uri)) {
        const { message: a2 } = te$1("MISSING_OR_INVALID", `pair() uri: ${s2.uri}`);
        throw i3.setError(J$1.malformed_pairing_uri), new Error(a2);
      }
      const o3 = bi$2(s2 == null ? void 0 : s2.uri);
      if (!((r2 = o3 == null ? void 0 : o3.relay) != null && r2.protocol)) {
        const { message: a2 } = te$1("MISSING_OR_INVALID", "pair() uri#relay-protocol");
        throw i3.setError(J$1.malformed_pairing_uri), new Error(a2);
      }
      if (!(o3 != null && o3.symKey)) {
        const { message: a2 } = te$1("MISSING_OR_INVALID", "pair() uri#symKey");
        throw i3.setError(J$1.malformed_pairing_uri), new Error(a2);
      }
      if (o3 != null && o3.expiryTimestamp && cjs$3.toMiliseconds(o3 == null ? void 0 : o3.expiryTimestamp) < Date.now()) {
        i3.setError(J$1.pairing_expired);
        const { message: a2 } = te$1("EXPIRED", "pair() URI has expired. Please try again with a new connection URI.");
        throw new Error(a2);
      }
    }), d$1(this, "isValidPing", async (s2) => {
      if (!Di$2(s2)) {
        const { message: r2 } = te$1("MISSING_OR_INVALID", `ping() params: ${s2}`);
        throw new Error(r2);
      }
      const { topic: i3 } = s2;
      await this.isValidPairingTopic(i3);
    }), d$1(this, "isValidDisconnect", async (s2) => {
      if (!Di$2(s2)) {
        const { message: r2 } = te$1("MISSING_OR_INVALID", `disconnect() params: ${s2}`);
        throw new Error(r2);
      }
      const { topic: i3 } = s2;
      await this.isValidPairingTopic(i3);
    }), d$1(this, "isValidPairingTopic", async (s2) => {
      if (!q$3(s2, false)) {
        const { message: i3 } = te$1("MISSING_OR_INVALID", `pairing topic should be a string: ${s2}`);
        throw new Error(i3);
      }
      if (!this.pairings.keys.includes(s2)) {
        const { message: i3 } = te$1("NO_MATCHING_KEY", `pairing topic doesn't exist: ${s2}`);
        throw new Error(i3);
      }
      if (po$1(this.pairings.get(s2).expiry)) {
        await this.deletePairing(s2);
        const { message: i3 } = te$1("EXPIRED", `pairing topic: ${s2}`);
        throw new Error(i3);
      }
    }), this.core = e2, this.logger = E$3(t, this.name), this.pairings = new Ci$1(this.core, this.logger, this.name, this.storagePrefix);
  }
  get context() {
    return y$3(this.logger);
  }
  isInitialized() {
    if (!this.initialized) {
      const { message: e2 } = te$1("NOT_INITIALIZED", this.name);
      throw new Error(e2);
    }
  }
  registerRelayerEvents() {
    this.core.relayer.on(T$3.message, async (e2) => {
      const { topic: t, message: s2, transportType: i3 } = e2;
      if (!this.pairings.keys.includes(t) || i3 === Q$1.link_mode || this.ignoredPayloadTypes.includes(this.core.crypto.getPayloadType(s2))) return;
      const r2 = await this.core.crypto.decode(t, s2);
      try {
        isJsonRpcRequest(r2) ? (this.core.history.set(t, r2), this.onRelayEventRequest({ topic: t, payload: r2 })) : isJsonRpcResponse(r2) && (await this.core.history.resolve(r2), await this.onRelayEventResponse({ topic: t, payload: r2 }), this.core.history.delete(t, r2.id));
      } catch (o3) {
        this.logger.error(o3);
      }
    });
  }
  registerExpirerEvents() {
    this.core.expirer.on(M$2.expired, async (e2) => {
      const { topic: t } = lo$1(e2.target);
      t && this.pairings.keys.includes(t) && (await this.deletePairing(t, true), this.events.emit(se$1.expire, { topic: t }));
    });
  }
};
var Yn$1 = Object.defineProperty, Jn$1 = (n3, e2, t) => e2 in n3 ? Yn$1(n3, e2, { enumerable: true, configurable: true, writable: true, value: t }) : n3[e2] = t, S$1 = (n3, e2, t) => Jn$1(n3, typeof e2 != "symbol" ? e2 + "" : e2, t);
let Si$1 = class Si extends I$1 {
  constructor(e2, t) {
    super(e2, t), this.core = e2, this.logger = t, S$1(this, "records", /* @__PURE__ */ new Map()), S$1(this, "events", new eventsExports.EventEmitter()), S$1(this, "name", Ft$1), S$1(this, "version", Mt$1), S$1(this, "cached", []), S$1(this, "initialized", false), S$1(this, "storagePrefix", B$1), S$1(this, "init", async () => {
      this.initialized || (this.logger.trace("Initialized"), await this.restore(), this.cached.forEach((s2) => this.records.set(s2.id, s2)), this.cached = [], this.registerEventListeners(), this.initialized = true);
    }), S$1(this, "set", (s2, i3, r2) => {
      if (this.isInitialized(), this.logger.debug("Setting JSON-RPC request history record"), this.logger.trace({ type: "method", method: "set", topic: s2, request: i3, chainId: r2 }), this.records.has(i3.id)) return;
      const o3 = { id: i3.id, topic: s2, request: { method: i3.method, params: i3.params || null }, chainId: r2, expiry: ho$1(cjs$3.THIRTY_DAYS) };
      this.records.set(o3.id, o3), this.persist(), this.events.emit(F$1.created, o3);
    }), S$1(this, "resolve", async (s2) => {
      if (this.isInitialized(), this.logger.debug("Updating JSON-RPC response history record"), this.logger.trace({ type: "method", method: "update", response: s2 }), !this.records.has(s2.id)) return;
      const i3 = await this.getRecord(s2.id);
      typeof i3.response > "u" && (i3.response = isJsonRpcError(s2) ? { error: s2.error } : { result: s2.result }, this.records.set(i3.id, i3), this.persist(), this.events.emit(F$1.updated, i3));
    }), S$1(this, "get", async (s2, i3) => (this.isInitialized(), this.logger.debug("Getting record"), this.logger.trace({ type: "method", method: "get", topic: s2, id: i3 }), await this.getRecord(i3))), S$1(this, "delete", (s2, i3) => {
      this.isInitialized(), this.logger.debug("Deleting record"), this.logger.trace({ type: "method", method: "delete", id: i3 }), this.values.forEach((r2) => {
        if (r2.topic === s2) {
          if (typeof i3 < "u" && r2.id !== i3) return;
          this.records.delete(r2.id), this.events.emit(F$1.deleted, r2);
        }
      }), this.persist();
    }), S$1(this, "exists", async (s2, i3) => (this.isInitialized(), this.records.has(i3) ? (await this.getRecord(i3)).topic === s2 : false)), S$1(this, "on", (s2, i3) => {
      this.events.on(s2, i3);
    }), S$1(this, "once", (s2, i3) => {
      this.events.once(s2, i3);
    }), S$1(this, "off", (s2, i3) => {
      this.events.off(s2, i3);
    }), S$1(this, "removeListener", (s2, i3) => {
      this.events.removeListener(s2, i3);
    }), this.logger = E$3(t, this.name);
  }
  get context() {
    return y$3(this.logger);
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
      if (typeof t.response < "u") return;
      const s2 = { topic: t.topic, request: formatJsonRpcRequest(t.request.method, t.request.params, t.id), chainId: t.chainId };
      return e2.push(s2);
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
      const { message: s2 } = te$1("NO_MATCHING_KEY", `${this.name}: ${e2}`);
      throw new Error(s2);
    }
    return t;
  }
  async persist() {
    await this.setJsonRpcRecords(this.values), this.events.emit(F$1.sync);
  }
  async restore() {
    try {
      const e2 = await this.getJsonRpcRecords();
      if (typeof e2 > "u" || !e2.length) return;
      if (this.records.size) {
        const { message: t } = te$1("RESTORE_WILL_OVERRIDE", this.name);
        throw this.logger.error(t), new Error(t);
      }
      this.cached = e2, this.logger.debug(`Successfully Restored records for ${this.name}`), this.logger.trace({ type: "method", method: "restore", records: this.values });
    } catch (e2) {
      this.logger.debug(`Failed to Restore records for ${this.name}`), this.logger.error(e2);
    }
  }
  registerEventListeners() {
    this.events.on(F$1.created, (e2) => {
      const t = F$1.created;
      this.logger.info(`Emitting ${t}`), this.logger.debug({ type: "event", event: t, record: e2 });
    }), this.events.on(F$1.updated, (e2) => {
      const t = F$1.updated;
      this.logger.info(`Emitting ${t}`), this.logger.debug({ type: "event", event: t, record: e2 });
    }), this.events.on(F$1.deleted, (e2) => {
      const t = F$1.deleted;
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
        cjs$3.toMiliseconds(t.expiry || 0) - Date.now() <= 0 && (this.logger.info(`Deleting expired history log: ${t.id}`), this.records.delete(t.id), this.events.emit(F$1.deleted, t, false), e2 = true);
      }), e2 && this.persist();
    } catch (e2) {
      this.logger.warn(e2);
    }
  }
  isInitialized() {
    if (!this.initialized) {
      const { message: e2 } = te$1("NOT_INITIALIZED", this.name);
      throw new Error(e2);
    }
  }
};
var Xn$1 = Object.defineProperty, Wn$1 = (n3, e2, t) => e2 in n3 ? Xn$1(n3, e2, { enumerable: true, configurable: true, writable: true, value: t }) : n3[e2] = t, x$3 = (n3, e2, t) => Wn$1(n3, typeof e2 != "symbol" ? e2 + "" : e2, t);
let Ri$1 = class Ri extends S$2 {
  constructor(e2, t) {
    super(e2, t), this.core = e2, this.logger = t, x$3(this, "expirations", /* @__PURE__ */ new Map()), x$3(this, "events", new eventsExports.EventEmitter()), x$3(this, "name", Kt$1), x$3(this, "version", Bt$1), x$3(this, "cached", []), x$3(this, "initialized", false), x$3(this, "storagePrefix", B$1), x$3(this, "init", async () => {
      this.initialized || (this.logger.trace("Initialized"), await this.restore(), this.cached.forEach((s2) => this.expirations.set(s2.target, s2)), this.cached = [], this.registerEventListeners(), this.initialized = true);
    }), x$3(this, "has", (s2) => {
      try {
        const i3 = this.formatTarget(s2);
        return typeof this.getExpiration(i3) < "u";
      } catch {
        return false;
      }
    }), x$3(this, "set", (s2, i3) => {
      this.isInitialized();
      const r2 = this.formatTarget(s2), o3 = { target: r2, expiry: i3 };
      this.expirations.set(r2, o3), this.checkExpiry(r2, o3), this.events.emit(M$2.created, { target: r2, expiration: o3 });
    }), x$3(this, "get", (s2) => {
      this.isInitialized();
      const i3 = this.formatTarget(s2);
      return this.getExpiration(i3);
    }), x$3(this, "del", (s2) => {
      if (this.isInitialized(), this.has(s2)) {
        const i3 = this.formatTarget(s2), r2 = this.getExpiration(i3);
        this.expirations.delete(i3), this.events.emit(M$2.deleted, { target: i3, expiration: r2 });
      }
    }), x$3(this, "on", (s2, i3) => {
      this.events.on(s2, i3);
    }), x$3(this, "once", (s2, i3) => {
      this.events.once(s2, i3);
    }), x$3(this, "off", (s2, i3) => {
      this.events.off(s2, i3);
    }), x$3(this, "removeListener", (s2, i3) => {
      this.events.removeListener(s2, i3);
    }), this.logger = E$3(t, this.name);
  }
  get context() {
    return y$3(this.logger);
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
    if (typeof e2 == "string") return uo$1(e2);
    if (typeof e2 == "number") return fo$1(e2);
    const { message: t } = te$1("UNKNOWN_TYPE", `Target type: ${typeof e2}`);
    throw new Error(t);
  }
  async setExpirations(e2) {
    await this.core.storage.setItem(this.storageKey, e2);
  }
  async getExpirations() {
    return await this.core.storage.getItem(this.storageKey);
  }
  async persist() {
    await this.setExpirations(this.values), this.events.emit(M$2.sync);
  }
  async restore() {
    try {
      const e2 = await this.getExpirations();
      if (typeof e2 > "u" || !e2.length) return;
      if (this.expirations.size) {
        const { message: t } = te$1("RESTORE_WILL_OVERRIDE", this.name);
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
      const { message: s2 } = te$1("NO_MATCHING_KEY", `${this.name}: ${e2}`);
      throw this.logger.warn(s2), new Error(s2);
    }
    return t;
  }
  checkExpiry(e2, t) {
    const { expiry: s2 } = t;
    cjs$3.toMiliseconds(s2) - Date.now() <= 0 && this.expire(e2, t);
  }
  expire(e2, t) {
    this.expirations.delete(e2), this.events.emit(M$2.expired, { target: e2, expiration: t });
  }
  checkExpirations() {
    this.core.relayer.connected && this.expirations.forEach((e2, t) => this.checkExpiry(t, e2));
  }
  registerEventListeners() {
    this.core.heartbeat.on(r$1.pulse, () => this.checkExpirations()), this.events.on(M$2.created, (e2) => {
      const t = M$2.created;
      this.logger.info(`Emitting ${t}`), this.logger.debug({ type: "event", event: t, data: e2 }), this.persist();
    }), this.events.on(M$2.expired, (e2) => {
      const t = M$2.expired;
      this.logger.info(`Emitting ${t}`), this.logger.debug({ type: "event", event: t, data: e2 }), this.persist();
    }), this.events.on(M$2.deleted, (e2) => {
      const t = M$2.deleted;
      this.logger.info(`Emitting ${t}`), this.logger.debug({ type: "event", event: t, data: e2 }), this.persist();
    });
  }
  isInitialized() {
    if (!this.initialized) {
      const { message: e2 } = te$1("NOT_INITIALIZED", this.name);
      throw new Error(e2);
    }
  }
};
var Zn$1 = Object.defineProperty, Qn$1 = (n3, e2, t) => e2 in n3 ? Zn$1(n3, e2, { enumerable: true, configurable: true, writable: true, value: t }) : n3[e2] = t, _$3 = (n3, e2, t) => Qn$1(n3, typeof e2 != "symbol" ? e2 + "" : e2, t);
let xi$1 = class xi extends M$3 {
  constructor(e2, t, s2) {
    super(e2, t, s2), this.core = e2, this.logger = t, this.store = s2, _$3(this, "name", jt$1), _$3(this, "abortController"), _$3(this, "isDevEnv"), _$3(this, "verifyUrlV3", qt$1), _$3(this, "storagePrefix", B$1), _$3(this, "version", Oe$1), _$3(this, "publicKey"), _$3(this, "fetchPromise"), _$3(this, "init", async () => {
      var i3;
      this.isDevEnv || (this.publicKey = await this.store.getItem(this.storeKey), this.publicKey && cjs$3.toMiliseconds((i3 = this.publicKey) == null ? void 0 : i3.expiresAt) < Date.now() && (this.logger.debug("verify v2 public key expired"), await this.removePublicKey()));
    }), _$3(this, "register", async (i3) => {
      if (!Ae$2() || this.isDevEnv) return;
      const r2 = window.location.origin, { id: o3, decryptedId: a2 } = i3, c2 = `${this.verifyUrlV3}/attestation?projectId=${this.core.projectId}&origin=${r2}&id=${o3}&decryptedId=${a2}`;
      try {
        const h4 = getDocument_1(), u2 = this.startAbortTimer(cjs$3.ONE_SECOND * 5), g2 = await new Promise((m4, A2) => {
          const l2 = () => {
            window.removeEventListener("message", O4), h4.body.removeChild(y3), A2("attestation aborted");
          };
          this.abortController.signal.addEventListener("abort", l2);
          const y3 = h4.createElement("iframe");
          y3.src = c2, y3.style.display = "none", y3.addEventListener("error", l2, { signal: this.abortController.signal });
          const O4 = (w2) => {
            if (w2.data && typeof w2.data == "string") try {
              const v2 = JSON.parse(w2.data);
              if (v2.type === "verify_attestation") {
                if (sn$3(v2.attestation).payload.id !== o3) return;
                clearInterval(u2), h4.body.removeChild(y3), this.abortController.signal.removeEventListener("abort", l2), window.removeEventListener("message", O4), m4(v2.attestation === null ? "" : v2.attestation);
              }
            } catch (v2) {
              this.logger.warn(v2);
            }
          };
          h4.body.appendChild(y3), window.addEventListener("message", O4, { signal: this.abortController.signal });
        });
        return this.logger.debug("jwt attestation", g2), g2;
      } catch (h4) {
        this.logger.warn(h4);
      }
      return "";
    }), _$3(this, "resolve", async (i3) => {
      if (this.isDevEnv) return "";
      const { attestationId: r2, hash: o3, encryptedId: a2 } = i3;
      if (r2 === "") {
        this.logger.debug("resolve: attestationId is empty, skipping");
        return;
      }
      if (r2) {
        if (sn$3(r2).payload.id !== a2) return;
        const h4 = await this.isValidJwtAttestation(r2);
        if (h4) {
          if (!h4.isVerified) {
            this.logger.warn("resolve: jwt attestation: origin url not verified");
            return;
          }
          return h4;
        }
      }
      if (!o3) return;
      const c2 = this.getVerifyUrl(i3 == null ? void 0 : i3.verifyUrl);
      return this.fetchAttestation(o3, c2);
    }), _$3(this, "fetchAttestation", async (i3, r2) => {
      this.logger.debug(`resolving attestation: ${i3} from url: ${r2}`);
      const o3 = this.startAbortTimer(cjs$3.ONE_SECOND * 5), a2 = await fetch(`${r2}/attestation/${i3}?v2Supported=true`, { signal: this.abortController.signal });
      return clearTimeout(o3), a2.status === 200 ? await a2.json() : void 0;
    }), _$3(this, "getVerifyUrl", (i3) => {
      let r2 = i3 || le$2;
      return Gt$1.includes(r2) || (this.logger.info(`verify url: ${r2}, not included in trusted list, assigning default: ${le$2}`), r2 = le$2), r2;
    }), _$3(this, "fetchPublicKey", async () => {
      try {
        this.logger.debug(`fetching public key from: ${this.verifyUrlV3}`);
        const i3 = this.startAbortTimer(cjs$3.FIVE_SECONDS), r2 = await fetch(`${this.verifyUrlV3}/public-key`, { signal: this.abortController.signal });
        return clearTimeout(i3), await r2.json();
      } catch (i3) {
        this.logger.warn(i3);
      }
    }), _$3(this, "persistPublicKey", async (i3) => {
      this.logger.debug("persisting public key to local storage", i3), await this.store.setItem(this.storeKey, i3), this.publicKey = i3;
    }), _$3(this, "removePublicKey", async () => {
      this.logger.debug("removing verify v2 public key from storage"), await this.store.removeItem(this.storeKey), this.publicKey = void 0;
    }), _$3(this, "isValidJwtAttestation", async (i3) => {
      const r2 = await this.getPublicKey();
      try {
        if (r2) return this.validateAttestation(i3, r2);
      } catch (a2) {
        this.logger.error(a2), this.logger.warn("error validating attestation");
      }
      const o3 = await this.fetchAndPersistPublicKey();
      try {
        if (o3) return this.validateAttestation(i3, o3);
      } catch (a2) {
        this.logger.error(a2), this.logger.warn("error validating attestation");
      }
    }), _$3(this, "getPublicKey", async () => this.publicKey ? this.publicKey : await this.fetchAndPersistPublicKey()), _$3(this, "fetchAndPersistPublicKey", async () => {
      if (this.fetchPromise) return await this.fetchPromise, this.publicKey;
      this.fetchPromise = new Promise(async (r2) => {
        const o3 = await this.fetchPublicKey();
        o3 && (await this.persistPublicKey(o3), r2(o3));
      });
      const i3 = await this.fetchPromise;
      return this.fetchPromise = void 0, i3;
    }), _$3(this, "validateAttestation", (i3, r2) => {
      const o3 = gi$2(i3, r2.publicKey), a2 = { hasExpired: cjs$3.toMiliseconds(o3.exp) < Date.now(), payload: o3 };
      if (a2.hasExpired) throw this.logger.warn("resolve: jwt attestation expired"), new Error("JWT attestation expired");
      return { origin: a2.payload.origin, isScam: a2.payload.isScam, isVerified: a2.payload.isVerified };
    }), this.logger = E$3(t, this.name), this.abortController = new AbortController(), this.isDevEnv = Eo$1(), this.init();
  }
  get storeKey() {
    return this.storagePrefix + this.version + this.core.customStoragePrefix + "//verify:public:key";
  }
  get context() {
    return y$3(this.logger);
  }
  startAbortTimer(e2) {
    return this.abortController = new AbortController(), setTimeout(() => this.abortController.abort(), cjs$3.toMiliseconds(e2));
  }
};
var eo$1 = Object.defineProperty, to$1 = (n3, e2, t) => e2 in n3 ? eo$1(n3, e2, { enumerable: true, configurable: true, writable: true, value: t }) : n3[e2] = t, Oi$1 = (n3, e2, t) => to$1(n3, typeof e2 != "symbol" ? e2 + "" : e2, t);
let Ai$1 = class Ai extends O$3 {
  constructor(e2, t) {
    super(e2, t), this.projectId = e2, this.logger = t, Oi$1(this, "context", Ht$1), Oi$1(this, "registerDeviceToken", async (s2) => {
      const { clientId: i3, token: r2, notificationType: o3, enableEncrypted: a2 = false } = s2, c2 = `${Yt$1}/${this.projectId}/clients`;
      await fetch(c2, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ client_id: i3, type: o3, token: r2, always_raw: a2 }) });
    }), this.logger = E$3(t, this.context);
  }
};
var io$1 = Object.defineProperty, Ni$1 = Object.getOwnPropertySymbols, so$1 = Object.prototype.hasOwnProperty, ro$1 = Object.prototype.propertyIsEnumerable, qe$1 = (n3, e2, t) => e2 in n3 ? io$1(n3, e2, { enumerable: true, configurable: true, writable: true, value: t }) : n3[e2] = t, pe$1 = (n3, e2) => {
  for (var t in e2 || (e2 = {})) so$1.call(e2, t) && qe$1(n3, t, e2[t]);
  if (Ni$1) for (var t of Ni$1(e2)) ro$1.call(e2, t) && qe$1(n3, t, e2[t]);
  return n3;
}, E$2 = (n3, e2, t) => qe$1(n3, typeof e2 != "symbol" ? e2 + "" : e2, t);
let $i$1 = class $i extends R$1 {
  constructor(e2, t, s2 = true) {
    super(e2, t, s2), this.core = e2, this.logger = t, E$2(this, "context", Xt$1), E$2(this, "storagePrefix", B$1), E$2(this, "storageVersion", Jt$1), E$2(this, "events", /* @__PURE__ */ new Map()), E$2(this, "shouldPersist", false), E$2(this, "init", async () => {
      if (!Eo$1()) try {
        const i3 = { eventId: wo$1(), timestamp: Date.now(), domain: this.getAppDomain(), props: { event: "INIT", type: "", properties: { client_id: await this.core.crypto.getClientId(), user_agent: Yt$2(this.core.relayer.protocol, this.core.relayer.version, me$1) } } };
        await this.sendEvent([i3]);
      } catch (i3) {
        this.logger.warn(i3);
      }
    }), E$2(this, "createEvent", (i3) => {
      const { event: r2 = "ERROR", type: o3 = "", properties: { topic: a2, trace: c2 } } = i3, h4 = wo$1(), u2 = this.core.projectId || "", g2 = Date.now(), m4 = pe$1({ eventId: h4, timestamp: g2, props: { event: r2, type: o3, properties: { topic: a2, trace: c2 } }, bundleId: u2, domain: this.getAppDomain() }, this.setMethods(h4));
      return this.telemetryEnabled && (this.events.set(h4, m4), this.shouldPersist = true), m4;
    }), E$2(this, "getEvent", (i3) => {
      const { eventId: r2, topic: o3 } = i3;
      if (r2) return this.events.get(r2);
      const a2 = Array.from(this.events.values()).find((c2) => c2.props.properties.topic === o3);
      if (a2) return pe$1(pe$1({}, a2), this.setMethods(a2.eventId));
    }), E$2(this, "deleteEvent", (i3) => {
      const { eventId: r2 } = i3;
      this.events.delete(r2), this.shouldPersist = true;
    }), E$2(this, "setEventListeners", () => {
      this.core.heartbeat.on(r$1.pulse, async () => {
        this.shouldPersist && await this.persist(), this.events.forEach((i3) => {
          cjs$3.fromMiliseconds(Date.now()) - cjs$3.fromMiliseconds(i3.timestamp) > Wt$1 && (this.events.delete(i3.eventId), this.shouldPersist = true);
        });
      });
    }), E$2(this, "setMethods", (i3) => ({ addTrace: (r2) => this.addTrace(i3, r2), setError: (r2) => this.setError(i3, r2) })), E$2(this, "addTrace", (i3, r2) => {
      const o3 = this.events.get(i3);
      o3 && (o3.props.properties.trace.push(r2), this.events.set(i3, o3), this.shouldPersist = true);
    }), E$2(this, "setError", (i3, r2) => {
      const o3 = this.events.get(i3);
      o3 && (o3.props.type = r2, o3.timestamp = Date.now(), this.events.set(i3, o3), this.shouldPersist = true);
    }), E$2(this, "persist", async () => {
      await this.core.storage.setItem(this.storageKey, Array.from(this.events.values())), this.shouldPersist = false;
    }), E$2(this, "restore", async () => {
      try {
        const i3 = await this.core.storage.getItem(this.storageKey) || [];
        if (!i3.length) return;
        i3.forEach((r2) => {
          this.events.set(r2.eventId, pe$1(pe$1({}, r2), this.setMethods(r2.eventId)));
        });
      } catch (i3) {
        this.logger.warn(i3);
      }
    }), E$2(this, "submit", async () => {
      if (!this.telemetryEnabled || this.events.size === 0) return;
      const i3 = [];
      for (const [r2, o3] of this.events) o3.props.type && i3.push(o3);
      if (i3.length !== 0) try {
        if ((await this.sendEvent(i3)).ok) for (const r2 of i3) this.events.delete(r2.eventId), this.shouldPersist = true;
      } catch (r2) {
        this.logger.warn(r2);
      }
    }), E$2(this, "sendEvent", async (i3) => {
      const r2 = this.getAppDomain() ? "" : "&sp=desktop";
      return await fetch(`${Zt$1}?projectId=${this.core.projectId}&st=events_sdk&sv=js-${me$1}${r2}`, { method: "POST", body: JSON.stringify(i3) });
    }), E$2(this, "getAppDomain", () => Yr$2().url), this.logger = E$3(t, this.context), this.telemetryEnabled = s2, s2 ? this.restore().then(async () => {
      await this.submit(), this.setEventListeners();
    }) : this.persist();
  }
  get storageKey() {
    return this.storagePrefix + this.storageVersion + this.core.customStoragePrefix + "//" + this.context;
  }
};
var no$1 = Object.defineProperty, zi$1 = Object.getOwnPropertySymbols, oo$1 = Object.prototype.hasOwnProperty, ao$1 = Object.prototype.propertyIsEnumerable, Ge$2 = (n3, e2, t) => e2 in n3 ? no$1(n3, e2, { enumerable: true, configurable: true, writable: true, value: t }) : n3[e2] = t, Li$1 = (n3, e2) => {
  for (var t in e2 || (e2 = {})) oo$1.call(e2, t) && Ge$2(n3, t, e2[t]);
  if (zi$1) for (var t of zi$1(e2)) ao$1.call(e2, t) && Ge$2(n3, t, e2[t]);
  return n3;
}, f$2 = (n3, e2, t) => Ge$2(n3, typeof e2 != "symbol" ? e2 + "" : e2, t);
let _e$2 = class _e extends h$2 {
  constructor(e2) {
    var t;
    super(e2), f$2(this, "protocol", xe$1), f$2(this, "version", Oe$1), f$2(this, "name", he$1), f$2(this, "relayUrl"), f$2(this, "projectId"), f$2(this, "customStoragePrefix"), f$2(this, "events", new eventsExports.EventEmitter()), f$2(this, "logger"), f$2(this, "heartbeat"), f$2(this, "relayer"), f$2(this, "crypto"), f$2(this, "storage"), f$2(this, "history"), f$2(this, "expirer"), f$2(this, "pairing"), f$2(this, "verify"), f$2(this, "echoClient"), f$2(this, "linkModeSupportedApps"), f$2(this, "eventClient"), f$2(this, "initialized", false), f$2(this, "logChunkController"), f$2(this, "on", (o3, a2) => this.events.on(o3, a2)), f$2(this, "once", (o3, a2) => this.events.once(o3, a2)), f$2(this, "off", (o3, a2) => this.events.off(o3, a2)), f$2(this, "removeListener", (o3, a2) => this.events.removeListener(o3, a2)), f$2(this, "dispatchEnvelope", ({ topic: o3, message: a2, sessionExists: c2 }) => {
      if (!o3 || !a2) return;
      const h4 = { topic: o3, message: a2, publishedAt: Date.now(), transportType: Q$1.link_mode };
      this.relayer.onLinkMessageEvent(h4, { sessionExists: c2 });
    }), this.projectId = e2 == null ? void 0 : e2.projectId, this.relayUrl = (e2 == null ? void 0 : e2.relayUrl) || $e$2, this.customStoragePrefix = e2 != null && e2.customStoragePrefix ? `:${e2.customStoragePrefix}` : "";
    const s2 = k$2({ level: typeof (e2 == null ? void 0 : e2.logger) == "string" && e2.logger ? e2.logger : mt$1.logger, name: he$1 }), { logger: i3, chunkLoggerController: r2 } = A$1({ opts: s2, maxSizeInBytes: e2 == null ? void 0 : e2.maxLogBlobSizeInBytes, loggerOverride: e2 == null ? void 0 : e2.logger });
    this.logChunkController = r2, (t = this.logChunkController) != null && t.downloadLogsBlobInBrowser && (window.downloadLogsBlobInBrowser = async () => {
      var o3, a2;
      (o3 = this.logChunkController) != null && o3.downloadLogsBlobInBrowser && ((a2 = this.logChunkController) == null || a2.downloadLogsBlobInBrowser({ clientId: await this.crypto.getClientId() }));
    }), this.logger = E$3(i3, this.name), this.heartbeat = new i$2(), this.crypto = new bi$1(this, this.logger, e2 == null ? void 0 : e2.keychain), this.history = new Si$1(this, this.logger), this.expirer = new Ri$1(this, this.logger), this.storage = e2 != null && e2.storage ? e2.storage : new h$3(Li$1(Li$1({}, vt$1), e2 == null ? void 0 : e2.storageOptions)), this.relayer = new wi$1({ core: this, logger: this.logger, relayUrl: this.relayUrl, projectId: this.projectId }), this.pairing = new Pi$1(this, this.logger), this.verify = new xi$1(this, this.logger, this.storage), this.echoClient = new Ai$1(this.projectId || "", this.logger), this.linkModeSupportedApps = [], this.eventClient = new $i$1(this, this.logger, e2 == null ? void 0 : e2.telemetryEnabled);
  }
  static async init(e2) {
    const t = new _e(e2);
    await t.initialize();
    const s2 = await t.crypto.getClientId();
    return await t.storage.setItem(Nt$1, s2), t;
  }
  get context() {
    return y$3(this.logger);
  }
  async start() {
    this.initialized || await this.initialize();
  }
  async getLogsBlob() {
    var e2;
    return (e2 = this.logChunkController) == null ? void 0 : e2.logsToBlob({ clientId: await this.crypto.getClientId() });
  }
  async addLinkModeSupportedApp(e2) {
    this.linkModeSupportedApps.includes(e2) || (this.linkModeSupportedApps.push(e2), await this.storage.setItem(ze$1, this.linkModeSupportedApps));
  }
  async initialize() {
    this.logger.trace("Initialized");
    try {
      await this.crypto.init(), await this.history.init(), await this.expirer.init(), await this.relayer.init(), await this.heartbeat.init(), await this.pairing.init(), this.linkModeSupportedApps = await this.storage.getItem(ze$1) || [], this.initialized = true, this.logger.info("Core Initialization Success");
    } catch (e2) {
      throw this.logger.warn(`Core Initialization Failure at epoch ${Date.now()}`, e2), this.logger.error(e2.message), e2;
    }
  }
};
const co$1 = _e$2;
const De$1 = "wc", Le$1 = 2, Me$1 = "client", me = `${De$1}@${Le$1}:${Me$1}:`, _e$1 = { name: Me$1, logger: "error", controller: false, relayUrl: "wss://relay.walletconnect.org" }, ke$1 = "WALLETCONNECT_DEEPLINK_CHOICE", pt$1 = "proposal", $e$1 = "Proposal expired", ht$1 = "session", Y$1 = cjs$3.SEVEN_DAYS, dt$1 = "engine", N$2 = { wc_sessionPropose: { req: { ttl: cjs$3.FIVE_MINUTES, prompt: true, tag: 1100 }, res: { ttl: cjs$3.FIVE_MINUTES, prompt: false, tag: 1101 }, reject: { ttl: cjs$3.FIVE_MINUTES, prompt: false, tag: 1120 }, autoReject: { ttl: cjs$3.FIVE_MINUTES, prompt: false, tag: 1121 } }, wc_sessionSettle: { req: { ttl: cjs$3.FIVE_MINUTES, prompt: false, tag: 1102 }, res: { ttl: cjs$3.FIVE_MINUTES, prompt: false, tag: 1103 } }, wc_sessionUpdate: { req: { ttl: cjs$3.ONE_DAY, prompt: false, tag: 1104 }, res: { ttl: cjs$3.ONE_DAY, prompt: false, tag: 1105 } }, wc_sessionExtend: { req: { ttl: cjs$3.ONE_DAY, prompt: false, tag: 1106 }, res: { ttl: cjs$3.ONE_DAY, prompt: false, tag: 1107 } }, wc_sessionRequest: { req: { ttl: cjs$3.FIVE_MINUTES, prompt: true, tag: 1108 }, res: { ttl: cjs$3.FIVE_MINUTES, prompt: false, tag: 1109 } }, wc_sessionEvent: { req: { ttl: cjs$3.FIVE_MINUTES, prompt: true, tag: 1110 }, res: { ttl: cjs$3.FIVE_MINUTES, prompt: false, tag: 1111 } }, wc_sessionDelete: { req: { ttl: cjs$3.ONE_DAY, prompt: false, tag: 1112 }, res: { ttl: cjs$3.ONE_DAY, prompt: false, tag: 1113 } }, wc_sessionPing: { req: { ttl: cjs$3.ONE_DAY, prompt: false, tag: 1114 }, res: { ttl: cjs$3.ONE_DAY, prompt: false, tag: 1115 } }, wc_sessionAuthenticate: { req: { ttl: cjs$3.ONE_HOUR, prompt: true, tag: 1116 }, res: { ttl: cjs$3.ONE_HOUR, prompt: false, tag: 1117 }, reject: { ttl: cjs$3.FIVE_MINUTES, prompt: false, tag: 1118 }, autoReject: { ttl: cjs$3.FIVE_MINUTES, prompt: false, tag: 1119 } } }, Ee$1 = { min: cjs$3.FIVE_MINUTES, max: cjs$3.SEVEN_DAYS }, $$2 = { idle: "IDLE", active: "ACTIVE" }, Ke$1 = { eth_sendTransaction: { key: "" }, eth_sendRawTransaction: { key: "" }, wallet_sendCalls: { key: "" }, solana_signTransaction: { key: "signature" }, solana_signAllTransactions: { key: "transactions" }, solana_signAndSendTransaction: { key: "signature" } }, ut$1 = "request", gt = ["wc_sessionPropose", "wc_sessionRequest", "wc_authRequest", "wc_sessionAuthenticate"], yt = "wc", wt = "auth", mt = "authKeys", _t$1 = "pairingTopics", Et$1 = "requests", ce$1 = `${yt}@${1.5}:${wt}:`, le$1 = `${ce$1}:PUB_KEY`;
var Rs$1 = Object.defineProperty, fs$1 = Object.defineProperties, Is$1 = Object.getOwnPropertyDescriptors, St$1 = Object.getOwnPropertySymbols, vs$1 = Object.prototype.hasOwnProperty, qs$1 = Object.prototype.propertyIsEnumerable, Ue$1 = (S4, n3, e2) => n3 in S4 ? Rs$1(S4, n3, { enumerable: true, configurable: true, writable: true, value: e2 }) : S4[n3] = e2, v$3 = (S4, n3) => {
  for (var e2 in n3 || (n3 = {})) vs$1.call(n3, e2) && Ue$1(S4, e2, n3[e2]);
  if (St$1) for (var e2 of St$1(n3)) qs$1.call(n3, e2) && Ue$1(S4, e2, n3[e2]);
  return S4;
}, x$2 = (S4, n3) => fs$1(S4, Is$1(n3)), c$1 = (S4, n3, e2) => Ue$1(S4, typeof n3 != "symbol" ? n3 + "" : n3, e2);
let Ts$1 = class Ts extends V$1 {
  constructor(n3) {
    super(n3), c$1(this, "name", dt$1), c$1(this, "events", new wt$4()), c$1(this, "initialized", false), c$1(this, "requestQueue", { state: $$2.idle, queue: [] }), c$1(this, "sessionRequestQueue", { state: $$2.idle, queue: [] }), c$1(this, "requestQueueDelay", cjs$3.ONE_SECOND), c$1(this, "expectedPairingMethodMap", /* @__PURE__ */ new Map()), c$1(this, "recentlyDeletedMap", /* @__PURE__ */ new Map()), c$1(this, "recentlyDeletedLimit", 200), c$1(this, "relayMessageCache", []), c$1(this, "pendingSessions", /* @__PURE__ */ new Map()), c$1(this, "init", async () => {
      this.initialized || (await this.cleanup(), this.registerRelayerEvents(), this.registerExpirerEvents(), this.registerPairingEvents(), await this.registerLinkModeListeners(), this.client.core.pairing.register({ methods: Object.keys(N$2) }), this.initialized = true, setTimeout(() => {
        this.sessionRequestQueue.queue = this.getPendingSessionRequests(), this.processSessionRequestQueue();
      }, cjs$3.toMiliseconds(this.requestQueueDelay)));
    }), c$1(this, "connect", async (e2) => {
      this.isInitialized(), await this.confirmOnlineStateOrThrow();
      const t = x$2(v$3({}, e2), { requiredNamespaces: e2.requiredNamespaces || {}, optionalNamespaces: e2.optionalNamespaces || {} });
      await this.isValidConnect(t);
      const { pairingTopic: s2, requiredNamespaces: i3, optionalNamespaces: r2, sessionProperties: o3, relays: a2 } = t;
      let l2 = s2, u2, g2 = false;
      try {
        if (l2) {
          const R4 = this.client.core.pairing.pairings.get(l2);
          this.client.logger.warn("connect() with existing pairing topic is deprecated and will be removed in the next major release."), g2 = R4.active;
        }
      } catch (R4) {
        throw this.client.logger.error(`connect() -> pairing.get(${l2}) failed`), R4;
      }
      if (!l2 || !g2) {
        const { topic: R4, uri: D2 } = await this.client.core.pairing.create();
        l2 = R4, u2 = D2;
      }
      if (!l2) {
        const { message: R4 } = te$1("NO_MATCHING_KEY", `connect() pairing topic: ${l2}`);
        throw new Error(R4);
      }
      const h4 = await this.client.core.crypto.generateKeyPair(), d4 = N$2.wc_sessionPropose.req.ttl || cjs$3.FIVE_MINUTES, y3 = ho$1(d4), m4 = x$2(v$3({ requiredNamespaces: i3, optionalNamespaces: r2, relays: a2 ?? [{ protocol: Pt }], proposer: { publicKey: h4, metadata: this.client.metadata }, expiryTimestamp: y3, pairingTopic: l2 }, o3 && { sessionProperties: o3 }), { id: payloadId() }), I3 = go$1("session_connect", m4.id), { reject: p2, resolve: E2, done: V3 } = co$2(d4, $e$1), q2 = ({ id: R4 }) => {
        R4 === m4.id && (this.client.events.off("proposal_expire", q2), this.pendingSessions.delete(m4.id), this.events.emit(I3, { error: { message: $e$1, code: 0 } }));
      };
      return this.client.events.on("proposal_expire", q2), this.events.once(I3, ({ error: R4, session: D2 }) => {
        this.client.events.off("proposal_expire", q2), R4 ? p2(R4) : D2 && E2(D2);
      }), await this.sendRequest({ topic: l2, method: "wc_sessionPropose", params: m4, throwOnFailedPublish: true, clientRpcId: m4.id }), await this.setProposal(m4.id, m4), { uri: u2, approval: V3 };
    }), c$1(this, "pair", async (e2) => {
      this.isInitialized(), await this.confirmOnlineStateOrThrow();
      try {
        return await this.client.core.pairing.pair(e2);
      } catch (t) {
        throw this.client.logger.error("pair() failed"), t;
      }
    }), c$1(this, "approve", async (e2) => {
      var t, s2, i3;
      const r2 = this.client.core.eventClient.createEvent({ properties: { topic: (t = e2 == null ? void 0 : e2.id) == null ? void 0 : t.toString(), trace: [qs$2.session_approve_started] } });
      try {
        this.isInitialized(), await this.confirmOnlineStateOrThrow();
      } catch (P3) {
        throw r2.setError(Gs$1.no_internet_connection), P3;
      }
      try {
        await this.isValidProposalId(e2 == null ? void 0 : e2.id);
      } catch (P3) {
        throw this.client.logger.error(`approve() -> proposal.get(${e2 == null ? void 0 : e2.id}) failed`), r2.setError(Gs$1.proposal_not_found), P3;
      }
      try {
        await this.isValidApprove(e2);
      } catch (P3) {
        throw this.client.logger.error("approve() -> isValidApprove() failed"), r2.setError(Gs$1.session_approve_namespace_validation_failure), P3;
      }
      const { id: o3, relayProtocol: a2, namespaces: l2, sessionProperties: u2, sessionConfig: g2 } = e2, h4 = this.client.proposal.get(o3);
      this.client.core.eventClient.deleteEvent({ eventId: r2.eventId });
      const { pairingTopic: d4, proposer: y3, requiredNamespaces: m4, optionalNamespaces: I3 } = h4;
      let p2 = (s2 = this.client.core.eventClient) == null ? void 0 : s2.getEvent({ topic: d4 });
      p2 || (p2 = (i3 = this.client.core.eventClient) == null ? void 0 : i3.createEvent({ type: qs$2.session_approve_started, properties: { topic: d4, trace: [qs$2.session_approve_started, qs$2.session_namespaces_validation_success] } }));
      const E2 = await this.client.core.crypto.generateKeyPair(), V3 = y3.publicKey, q2 = await this.client.core.crypto.generateSharedKey(E2, V3), R4 = v$3(v$3({ relay: { protocol: a2 ?? "irn" }, namespaces: l2, controller: { publicKey: E2, metadata: this.client.metadata }, expiry: ho$1(Y$1) }, u2 && { sessionProperties: u2 }), g2 && { sessionConfig: g2 }), D2 = Q$1.relay;
      p2.addTrace(qs$2.subscribing_session_topic);
      try {
        await this.client.core.relayer.subscribe(q2, { transportType: D2 });
      } catch (P3) {
        throw p2.setError(Gs$1.subscribe_session_topic_failure), P3;
      }
      p2.addTrace(qs$2.subscribe_session_topic_success);
      const ee2 = x$2(v$3({}, R4), { topic: q2, requiredNamespaces: m4, optionalNamespaces: I3, pairingTopic: d4, acknowledged: false, self: R4.controller, peer: { publicKey: y3.publicKey, metadata: y3.metadata }, controller: E2, transportType: Q$1.relay });
      await this.client.session.set(q2, ee2), p2.addTrace(qs$2.store_session);
      try {
        p2.addTrace(qs$2.publishing_session_settle), await this.sendRequest({ topic: q2, method: "wc_sessionSettle", params: R4, throwOnFailedPublish: true }).catch((P3) => {
          throw p2 == null ? void 0 : p2.setError(Gs$1.session_settle_publish_failure), P3;
        }), p2.addTrace(qs$2.session_settle_publish_success), p2.addTrace(qs$2.publishing_session_approve), await this.sendResult({ id: o3, topic: d4, result: { relay: { protocol: a2 ?? "irn" }, responderPublicKey: E2 }, throwOnFailedPublish: true }).catch((P3) => {
          throw p2 == null ? void 0 : p2.setError(Gs$1.session_approve_publish_failure), P3;
        }), p2.addTrace(qs$2.session_approve_publish_success);
      } catch (P3) {
        throw this.client.logger.error(P3), this.client.session.delete(q2, de$2("USER_DISCONNECTED")), await this.client.core.relayer.unsubscribe(q2), P3;
      }
      return this.client.core.eventClient.deleteEvent({ eventId: p2.eventId }), await this.client.core.pairing.updateMetadata({ topic: d4, metadata: y3.metadata }), await this.client.proposal.delete(o3, de$2("USER_DISCONNECTED")), await this.client.core.pairing.activate({ topic: d4 }), await this.setExpiry(q2, ho$1(Y$1)), { topic: q2, acknowledged: () => Promise.resolve(this.client.session.get(q2)) };
    }), c$1(this, "reject", async (e2) => {
      this.isInitialized(), await this.confirmOnlineStateOrThrow();
      try {
        await this.isValidReject(e2);
      } catch (r2) {
        throw this.client.logger.error("reject() -> isValidReject() failed"), r2;
      }
      const { id: t, reason: s2 } = e2;
      let i3;
      try {
        i3 = this.client.proposal.get(t).pairingTopic;
      } catch (r2) {
        throw this.client.logger.error(`reject() -> proposal.get(${t}) failed`), r2;
      }
      i3 && (await this.sendError({ id: t, topic: i3, error: s2, rpcOpts: N$2.wc_sessionPropose.reject }), await this.client.proposal.delete(t, de$2("USER_DISCONNECTED")));
    }), c$1(this, "update", async (e2) => {
      this.isInitialized(), await this.confirmOnlineStateOrThrow();
      try {
        await this.isValidUpdate(e2);
      } catch (g2) {
        throw this.client.logger.error("update() -> isValidUpdate() failed"), g2;
      }
      const { topic: t, namespaces: s2 } = e2, { done: i3, resolve: r2, reject: o3 } = co$2(), a2 = payloadId(), l2 = getBigIntRpcId().toString(), u2 = this.client.session.get(t).namespaces;
      return this.events.once(go$1("session_update", a2), ({ error: g2 }) => {
        g2 ? o3(g2) : r2();
      }), await this.client.session.update(t, { namespaces: s2 }), await this.sendRequest({ topic: t, method: "wc_sessionUpdate", params: { namespaces: s2 }, throwOnFailedPublish: true, clientRpcId: a2, relayRpcId: l2 }).catch((g2) => {
        this.client.logger.error(g2), this.client.session.update(t, { namespaces: u2 }), o3(g2);
      }), { acknowledged: i3 };
    }), c$1(this, "extend", async (e2) => {
      this.isInitialized(), await this.confirmOnlineStateOrThrow();
      try {
        await this.isValidExtend(e2);
      } catch (a2) {
        throw this.client.logger.error("extend() -> isValidExtend() failed"), a2;
      }
      const { topic: t } = e2, s2 = payloadId(), { done: i3, resolve: r2, reject: o3 } = co$2();
      return this.events.once(go$1("session_extend", s2), ({ error: a2 }) => {
        a2 ? o3(a2) : r2();
      }), await this.setExpiry(t, ho$1(Y$1)), this.sendRequest({ topic: t, method: "wc_sessionExtend", params: {}, clientRpcId: s2, throwOnFailedPublish: true }).catch((a2) => {
        o3(a2);
      }), { acknowledged: i3 };
    }), c$1(this, "request", async (e2) => {
      this.isInitialized();
      try {
        await this.isValidRequest(e2);
      } catch (p2) {
        throw this.client.logger.error("request() -> isValidRequest() failed"), p2;
      }
      const { chainId: t, request: s2, topic: i3, expiry: r2 = N$2.wc_sessionRequest.req.ttl } = e2, o3 = this.client.session.get(i3);
      (o3 == null ? void 0 : o3.transportType) === Q$1.relay && await this.confirmOnlineStateOrThrow();
      const a2 = payloadId(), l2 = getBigIntRpcId().toString(), { done: u2, resolve: g2, reject: h4 } = co$2(r2, "Request expired. Please try again.");
      this.events.once(go$1("session_request", a2), ({ error: p2, result: E2 }) => {
        p2 ? h4(p2) : g2(E2);
      });
      const d4 = "wc_sessionRequest", y3 = this.getAppLinkIfEnabled(o3.peer.metadata, o3.transportType);
      if (y3) return await this.sendRequest({ clientRpcId: a2, relayRpcId: l2, topic: i3, method: d4, params: { request: x$2(v$3({}, s2), { expiryTimestamp: ho$1(r2) }), chainId: t }, expiry: r2, throwOnFailedPublish: true, appLink: y3 }).catch((p2) => h4(p2)), this.client.events.emit("session_request_sent", { topic: i3, request: s2, chainId: t, id: a2 }), await u2();
      const m4 = { request: x$2(v$3({}, s2), { expiryTimestamp: ho$1(r2) }), chainId: t }, I3 = this.shouldSetTVF(d4, m4);
      return await Promise.all([new Promise(async (p2) => {
        await this.sendRequest(v$3({ clientRpcId: a2, relayRpcId: l2, topic: i3, method: d4, params: m4, expiry: r2, throwOnFailedPublish: true }, I3 && { tvf: this.getTVFParams(a2, m4) })).catch((E2) => h4(E2)), this.client.events.emit("session_request_sent", { topic: i3, request: s2, chainId: t, id: a2 }), p2();
      }), new Promise(async (p2) => {
        var E2;
        if (!((E2 = o3.sessionConfig) != null && E2.disableDeepLink)) {
          const V3 = await mo$1(this.client.core.storage, ke$1);
          await yo$1({ id: a2, topic: i3, wcDeepLink: V3 });
        }
        p2();
      }), u2()]).then((p2) => p2[2]);
    }), c$1(this, "respond", async (e2) => {
      this.isInitialized(), await this.isValidRespond(e2);
      const { topic: t, response: s2 } = e2, { id: i3 } = s2, r2 = this.client.session.get(t);
      r2.transportType === Q$1.relay && await this.confirmOnlineStateOrThrow();
      const o3 = this.getAppLinkIfEnabled(r2.peer.metadata, r2.transportType);
      isJsonRpcResult(s2) ? await this.sendResult({ id: i3, topic: t, result: s2.result, throwOnFailedPublish: true, appLink: o3 }) : isJsonRpcError(s2) && await this.sendError({ id: i3, topic: t, error: s2.error, appLink: o3 }), this.cleanupAfterResponse(e2);
    }), c$1(this, "ping", async (e2) => {
      this.isInitialized(), await this.confirmOnlineStateOrThrow();
      try {
        await this.isValidPing(e2);
      } catch (s2) {
        throw this.client.logger.error("ping() -> isValidPing() failed"), s2;
      }
      const { topic: t } = e2;
      if (this.client.session.keys.includes(t)) {
        const s2 = payloadId(), i3 = getBigIntRpcId().toString(), { done: r2, resolve: o3, reject: a2 } = co$2();
        this.events.once(go$1("session_ping", s2), ({ error: l2 }) => {
          l2 ? a2(l2) : o3();
        }), await Promise.all([this.sendRequest({ topic: t, method: "wc_sessionPing", params: {}, throwOnFailedPublish: true, clientRpcId: s2, relayRpcId: i3 }), r2()]);
      } else this.client.core.pairing.pairings.keys.includes(t) && (this.client.logger.warn("ping() on pairing topic is deprecated and will be removed in the next major release."), await this.client.core.pairing.ping({ topic: t }));
    }), c$1(this, "emit", async (e2) => {
      this.isInitialized(), await this.confirmOnlineStateOrThrow(), await this.isValidEmit(e2);
      const { topic: t, event: s2, chainId: i3 } = e2, r2 = getBigIntRpcId().toString(), o3 = payloadId();
      await this.sendRequest({ topic: t, method: "wc_sessionEvent", params: { event: s2, chainId: i3 }, throwOnFailedPublish: true, relayRpcId: r2, clientRpcId: o3 });
    }), c$1(this, "disconnect", async (e2) => {
      this.isInitialized(), await this.confirmOnlineStateOrThrow(), await this.isValidDisconnect(e2);
      const { topic: t } = e2;
      if (this.client.session.keys.includes(t)) await this.sendRequest({ topic: t, method: "wc_sessionDelete", params: de$2("USER_DISCONNECTED"), throwOnFailedPublish: true }), await this.deleteSession({ topic: t, emitEvent: false });
      else if (this.client.core.pairing.pairings.keys.includes(t)) await this.client.core.pairing.disconnect({ topic: t });
      else {
        const { message: s2 } = te$1("MISMATCHED_TOPIC", `Session or pairing topic not found: ${t}`);
        throw new Error(s2);
      }
    }), c$1(this, "find", (e2) => (this.isInitialized(), this.client.session.getAll().filter((t) => $i$2(t, e2)))), c$1(this, "getPendingSessionRequests", () => this.client.pendingRequest.getAll()), c$1(this, "authenticate", async (e2, t) => {
      var s2;
      this.isInitialized(), this.isValidAuthenticate(e2);
      const i3 = t && this.client.core.linkModeSupportedApps.includes(t) && ((s2 = this.client.metadata.redirect) == null ? void 0 : s2.linkMode), r2 = i3 ? Q$1.link_mode : Q$1.relay;
      r2 === Q$1.relay && await this.confirmOnlineStateOrThrow();
      const { chains: o3, statement: a2 = "", uri: l2, domain: u2, nonce: g2, type: h4, exp: d4, nbf: y3, methods: m4 = [], expiry: I3 } = e2, p2 = [...e2.resources || []], { topic: E2, uri: V3 } = await this.client.core.pairing.create({ methods: ["wc_sessionAuthenticate"], transportType: r2 });
      this.client.logger.info({ message: "Generated new pairing", pairing: { topic: E2, uri: V3 } });
      const q2 = await this.client.core.crypto.generateKeyPair(), R4 = oi$2(q2);
      if (await Promise.all([this.client.auth.authKeys.set(le$1, { responseTopic: R4, publicKey: q2 }), this.client.auth.pairingTopics.set(R4, { topic: R4, pairingTopic: E2 })]), await this.client.core.relayer.subscribe(R4, { transportType: r2 }), this.client.logger.info(`sending request to new pairing topic: ${E2}`), m4.length > 0) {
        const { namespace: b2 } = Ye$1(o3[0]);
        let L3 = ts$1(b2, "request", m4);
        Me$3(p2) && (L3 = ns$1(L3, p2.pop())), p2.push(L3);
      }
      const D2 = I3 && I3 > N$2.wc_sessionAuthenticate.req.ttl ? I3 : N$2.wc_sessionAuthenticate.req.ttl, ee2 = { authPayload: { type: h4 ?? "caip122", chains: o3, statement: a2, aud: l2, domain: u2, version: "1", nonce: g2, iat: (/* @__PURE__ */ new Date()).toISOString(), exp: d4, nbf: y3, resources: p2 }, requester: { publicKey: q2, metadata: this.client.metadata }, expiryTimestamp: ho$1(D2) }, P3 = { eip155: { chains: o3, methods: [.../* @__PURE__ */ new Set(["personal_sign", ...m4])], events: ["chainChanged", "accountsChanged"] } }, X2 = { requiredNamespaces: {}, optionalNamespaces: P3, relays: [{ protocol: "irn" }], pairingTopic: E2, proposer: { publicKey: q2, metadata: this.client.metadata }, expiryTimestamp: ho$1(N$2.wc_sessionPropose.req.ttl), id: payloadId() }, { done: ft2, resolve: Fe2, reject: Re2 } = co$2(D2, "Request expired"), te2 = payloadId(), pe2 = go$1("session_connect", X2.id), fe2 = go$1("session_request", te2), he2 = async ({ error: b2, session: L3 }) => {
        this.events.off(fe2, Ie2), b2 ? Re2(b2) : L3 && Fe2({ session: L3 });
      }, Ie2 = async (b2) => {
        var L3, je2, Qe2;
        if (await this.deletePendingAuthRequest(te2, { message: "fulfilled", code: 0 }), b2.error) {
          const ie2 = de$2("WC_METHOD_UNSUPPORTED", "wc_sessionAuthenticate");
          return b2.error.code === ie2.code ? void 0 : (this.events.off(pe2, he2), Re2(b2.error.message));
        }
        await this.deleteProposal(X2.id), this.events.off(pe2, he2);
        const { cacaos: He2, responder: Q2 } = b2.result, qe2 = [], ze2 = [];
        for (const ie2 of He2) {
          await Yo$1({ cacao: ie2, projectId: this.client.core.projectId }) || (this.client.logger.error(ie2, "Signature verification failed"), Re2(de$2("SESSION_SETTLEMENT_FAILED", "Signature verification failed")));
          const { p: Te2 } = ie2, Ne2 = Me$3(Te2.resources), Ye2 = [On$2(Te2.iss)], It2 = ut$2(Te2.iss);
          if (Ne2) {
            const Pe2 = rs$1(Ne2), vt2 = os$1(Ne2);
            qe2.push(...Pe2), Ye2.push(...vt2);
          }
          for (const Pe2 of Ye2) ze2.push(`${Pe2}:${It2}`);
        }
        const se2 = await this.client.core.crypto.generateSharedKey(q2, Q2.publicKey);
        let de2;
        qe2.length > 0 && (de2 = { topic: se2, acknowledged: true, self: { publicKey: q2, metadata: this.client.metadata }, peer: Q2, controller: Q2.publicKey, expiry: ho$1(Y$1), requiredNamespaces: {}, optionalNamespaces: {}, relay: { protocol: "irn" }, pairingTopic: E2, namespaces: Ti$2([...new Set(qe2)], [...new Set(ze2)]), transportType: r2 }, await this.client.core.relayer.subscribe(se2, { transportType: r2 }), await this.client.session.set(se2, de2), E2 && await this.client.core.pairing.updateMetadata({ topic: E2, metadata: Q2.metadata }), de2 = this.client.session.get(se2)), (L3 = this.client.metadata.redirect) != null && L3.linkMode && (je2 = Q2.metadata.redirect) != null && je2.linkMode && (Qe2 = Q2.metadata.redirect) != null && Qe2.universal && t && (this.client.core.addLinkModeSupportedApp(Q2.metadata.redirect.universal), this.client.session.update(se2, { transportType: Q$1.link_mode })), Fe2({ auths: He2, session: de2 });
      };
      this.events.once(pe2, he2), this.events.once(fe2, Ie2);
      let ve2;
      try {
        if (i3) {
          const b2 = formatJsonRpcRequest("wc_sessionAuthenticate", ee2, te2);
          this.client.core.history.set(E2, b2);
          const L3 = await this.client.core.crypto.encode("", b2, { type: _e$3, encoding: Qs$2 });
          ve2 = Ei$2(t, E2, L3);
        } else await Promise.all([this.sendRequest({ topic: E2, method: "wc_sessionAuthenticate", params: ee2, expiry: e2.expiry, throwOnFailedPublish: true, clientRpcId: te2 }), this.sendRequest({ topic: E2, method: "wc_sessionPropose", params: X2, expiry: N$2.wc_sessionPropose.req.ttl, throwOnFailedPublish: true, clientRpcId: X2.id })]);
      } catch (b2) {
        throw this.events.off(pe2, he2), this.events.off(fe2, Ie2), b2;
      }
      return await this.setProposal(X2.id, X2), await this.setAuthRequest(te2, { request: x$2(v$3({}, ee2), { verifyContext: {} }), pairingTopic: E2, transportType: r2 }), { uri: ve2 ?? V3, response: ft2 };
    }), c$1(this, "approveSessionAuthenticate", async (e2) => {
      const { id: t, auths: s2 } = e2, i3 = this.client.core.eventClient.createEvent({ properties: { topic: t.toString(), trace: [Hs$1.authenticated_session_approve_started] } });
      try {
        this.isInitialized();
      } catch (I3) {
        throw i3.setError(Ys$1.no_internet_connection), I3;
      }
      const r2 = this.getPendingAuthRequest(t);
      if (!r2) throw i3.setError(Ys$1.authenticated_session_pending_request_not_found), new Error(`Could not find pending auth request with id ${t}`);
      const o3 = r2.transportType || Q$1.relay;
      o3 === Q$1.relay && await this.confirmOnlineStateOrThrow();
      const a2 = r2.requester.publicKey, l2 = await this.client.core.crypto.generateKeyPair(), u2 = oi$2(a2), g2 = { type: Ie$1, receiverPublicKey: a2, senderPublicKey: l2 }, h4 = [], d4 = [];
      for (const I3 of s2) {
        if (!await Yo$1({ cacao: I3, projectId: this.client.core.projectId })) {
          i3.setError(Ys$1.invalid_cacao);
          const R4 = de$2("SESSION_SETTLEMENT_FAILED", "Signature verification failed");
          throw await this.sendError({ id: t, topic: u2, error: R4, encodeOpts: g2 }), new Error(R4.message);
        }
        i3.addTrace(Hs$1.cacaos_verified);
        const { p: p2 } = I3, E2 = Me$3(p2.resources), V3 = [On$2(p2.iss)], q2 = ut$2(p2.iss);
        if (E2) {
          const R4 = rs$1(E2), D2 = os$1(E2);
          h4.push(...R4), V3.push(...D2);
        }
        for (const R4 of V3) d4.push(`${R4}:${q2}`);
      }
      const y3 = await this.client.core.crypto.generateSharedKey(l2, a2);
      i3.addTrace(Hs$1.create_authenticated_session_topic);
      let m4;
      if ((h4 == null ? void 0 : h4.length) > 0) {
        m4 = { topic: y3, acknowledged: true, self: { publicKey: l2, metadata: this.client.metadata }, peer: { publicKey: a2, metadata: r2.requester.metadata }, controller: a2, expiry: ho$1(Y$1), authentication: s2, requiredNamespaces: {}, optionalNamespaces: {}, relay: { protocol: "irn" }, pairingTopic: r2.pairingTopic, namespaces: Ti$2([...new Set(h4)], [...new Set(d4)]), transportType: o3 }, i3.addTrace(Hs$1.subscribing_authenticated_session_topic);
        try {
          await this.client.core.relayer.subscribe(y3, { transportType: o3 });
        } catch (I3) {
          throw i3.setError(Ys$1.subscribe_authenticated_session_topic_failure), I3;
        }
        i3.addTrace(Hs$1.subscribe_authenticated_session_topic_success), await this.client.session.set(y3, m4), i3.addTrace(Hs$1.store_authenticated_session), await this.client.core.pairing.updateMetadata({ topic: r2.pairingTopic, metadata: r2.requester.metadata });
      }
      i3.addTrace(Hs$1.publishing_authenticated_session_approve);
      try {
        await this.sendResult({ topic: u2, id: t, result: { cacaos: s2, responder: { publicKey: l2, metadata: this.client.metadata } }, encodeOpts: g2, throwOnFailedPublish: true, appLink: this.getAppLinkIfEnabled(r2.requester.metadata, o3) });
      } catch (I3) {
        throw i3.setError(Ys$1.authenticated_session_approve_publish_failure), I3;
      }
      return await this.client.auth.requests.delete(t, { message: "fulfilled", code: 0 }), await this.client.core.pairing.activate({ topic: r2.pairingTopic }), this.client.core.eventClient.deleteEvent({ eventId: i3.eventId }), { session: m4 };
    }), c$1(this, "rejectSessionAuthenticate", async (e2) => {
      this.isInitialized();
      const { id: t, reason: s2 } = e2, i3 = this.getPendingAuthRequest(t);
      if (!i3) throw new Error(`Could not find pending auth request with id ${t}`);
      i3.transportType === Q$1.relay && await this.confirmOnlineStateOrThrow();
      const r2 = i3.requester.publicKey, o3 = await this.client.core.crypto.generateKeyPair(), a2 = oi$2(r2), l2 = { type: Ie$1, receiverPublicKey: r2, senderPublicKey: o3 };
      await this.sendError({ id: t, topic: a2, error: s2, encodeOpts: l2, rpcOpts: N$2.wc_sessionAuthenticate.reject, appLink: this.getAppLinkIfEnabled(i3.requester.metadata, i3.transportType) }), await this.client.auth.requests.delete(t, { message: "rejected", code: 0 }), await this.client.proposal.delete(t, de$2("USER_DISCONNECTED"));
    }), c$1(this, "formatAuthMessage", (e2) => {
      this.isInitialized();
      const { request: t, iss: s2 } = e2;
      return In$2(t, s2);
    }), c$1(this, "processRelayMessageCache", () => {
      setTimeout(async () => {
        if (this.relayMessageCache.length !== 0) for (; this.relayMessageCache.length > 0; ) try {
          const e2 = this.relayMessageCache.shift();
          e2 && await this.onRelayMessage(e2);
        } catch (e2) {
          this.client.logger.error(e2);
        }
      }, 50);
    }), c$1(this, "cleanupDuplicatePairings", async (e2) => {
      if (e2.pairingTopic) try {
        const t = this.client.core.pairing.pairings.get(e2.pairingTopic), s2 = this.client.core.pairing.pairings.getAll().filter((i3) => {
          var r2, o3;
          return ((r2 = i3.peerMetadata) == null ? void 0 : r2.url) && ((o3 = i3.peerMetadata) == null ? void 0 : o3.url) === e2.peer.metadata.url && i3.topic && i3.topic !== t.topic;
        });
        if (s2.length === 0) return;
        this.client.logger.info(`Cleaning up ${s2.length} duplicate pairing(s)`), await Promise.all(s2.map((i3) => this.client.core.pairing.disconnect({ topic: i3.topic }))), this.client.logger.info("Duplicate pairings clean up finished");
      } catch (t) {
        this.client.logger.error(t);
      }
    }), c$1(this, "deleteSession", async (e2) => {
      var t;
      const { topic: s2, expirerHasDeleted: i3 = false, emitEvent: r2 = true, id: o3 = 0 } = e2, { self: a2 } = this.client.session.get(s2);
      await this.client.core.relayer.unsubscribe(s2), await this.client.session.delete(s2, de$2("USER_DISCONNECTED")), this.addToRecentlyDeleted(s2, "session"), this.client.core.crypto.keychain.has(a2.publicKey) && await this.client.core.crypto.deleteKeyPair(a2.publicKey), this.client.core.crypto.keychain.has(s2) && await this.client.core.crypto.deleteSymKey(s2), i3 || this.client.core.expirer.del(s2), this.client.core.storage.removeItem(ke$1).catch((l2) => this.client.logger.warn(l2)), this.getPendingSessionRequests().forEach((l2) => {
        l2.topic === s2 && this.deletePendingSessionRequest(l2.id, de$2("USER_DISCONNECTED"));
      }), s2 === ((t = this.sessionRequestQueue.queue[0]) == null ? void 0 : t.topic) && (this.sessionRequestQueue.state = $$2.idle), r2 && this.client.events.emit("session_delete", { id: o3, topic: s2 });
    }), c$1(this, "deleteProposal", async (e2, t) => {
      if (t) try {
        const s2 = this.client.proposal.get(e2), i3 = this.client.core.eventClient.getEvent({ topic: s2.pairingTopic });
        i3 == null ? void 0 : i3.setError(Gs$1.proposal_expired);
      } catch {
      }
      await Promise.all([this.client.proposal.delete(e2, de$2("USER_DISCONNECTED")), t ? Promise.resolve() : this.client.core.expirer.del(e2)]), this.addToRecentlyDeleted(e2, "proposal");
    }), c$1(this, "deletePendingSessionRequest", async (e2, t, s2 = false) => {
      await Promise.all([this.client.pendingRequest.delete(e2, t), s2 ? Promise.resolve() : this.client.core.expirer.del(e2)]), this.addToRecentlyDeleted(e2, "request"), this.sessionRequestQueue.queue = this.sessionRequestQueue.queue.filter((i3) => i3.id !== e2), s2 && (this.sessionRequestQueue.state = $$2.idle, this.client.events.emit("session_request_expire", { id: e2 }));
    }), c$1(this, "deletePendingAuthRequest", async (e2, t, s2 = false) => {
      await Promise.all([this.client.auth.requests.delete(e2, t), s2 ? Promise.resolve() : this.client.core.expirer.del(e2)]);
    }), c$1(this, "setExpiry", async (e2, t) => {
      this.client.session.keys.includes(e2) && (this.client.core.expirer.set(e2, t), await this.client.session.update(e2, { expiry: t }));
    }), c$1(this, "setProposal", async (e2, t) => {
      this.client.core.expirer.set(e2, ho$1(N$2.wc_sessionPropose.req.ttl)), await this.client.proposal.set(e2, t);
    }), c$1(this, "setAuthRequest", async (e2, t) => {
      const { request: s2, pairingTopic: i3, transportType: r2 = Q$1.relay } = t;
      this.client.core.expirer.set(e2, s2.expiryTimestamp), await this.client.auth.requests.set(e2, { authPayload: s2.authPayload, requester: s2.requester, expiryTimestamp: s2.expiryTimestamp, id: e2, pairingTopic: i3, verifyContext: s2.verifyContext, transportType: r2 });
    }), c$1(this, "setPendingSessionRequest", async (e2) => {
      const { id: t, topic: s2, params: i3, verifyContext: r2 } = e2, o3 = i3.request.expiryTimestamp || ho$1(N$2.wc_sessionRequest.req.ttl);
      this.client.core.expirer.set(t, o3), await this.client.pendingRequest.set(t, { id: t, topic: s2, params: i3, verifyContext: r2 });
    }), c$1(this, "sendRequest", async (e2) => {
      const { topic: t, method: s2, params: i3, expiry: r2, relayRpcId: o3, clientRpcId: a2, throwOnFailedPublish: l2, appLink: u2, tvf: g2 } = e2, h4 = formatJsonRpcRequest(s2, i3, a2);
      let d4;
      const y3 = !!u2;
      try {
        const p2 = y3 ? Qs$2 : At$2;
        d4 = await this.client.core.crypto.encode(t, h4, { encoding: p2 });
      } catch (p2) {
        throw await this.cleanup(), this.client.logger.error(`sendRequest() -> core.crypto.encode() for topic ${t} failed`), p2;
      }
      let m4;
      if (gt.includes(s2)) {
        const p2 = si$2(JSON.stringify(h4)), E2 = si$2(d4);
        m4 = await this.client.core.verify.register({ id: E2, decryptedId: p2 });
      }
      const I3 = N$2[s2].req;
      if (I3.attestation = m4, r2 && (I3.ttl = r2), o3 && (I3.id = o3), this.client.core.history.set(t, h4), y3) {
        const p2 = Ei$2(u2, t, d4);
        await global.Linking.openURL(p2, this.client.name);
      } else {
        const p2 = N$2[s2].req;
        r2 && (p2.ttl = r2), o3 && (p2.id = o3), p2.tvf = x$2(v$3({}, g2), { correlationId: h4.id }), l2 ? (p2.internal = x$2(v$3({}, p2.internal), { throwOnFailedPublish: true }), await this.client.core.relayer.publish(t, d4, p2)) : this.client.core.relayer.publish(t, d4, p2).catch((E2) => this.client.logger.error(E2));
      }
      return h4.id;
    }), c$1(this, "sendResult", async (e2) => {
      const { id: t, topic: s2, result: i3, throwOnFailedPublish: r2, encodeOpts: o3, appLink: a2 } = e2, l2 = formatJsonRpcResult(t, i3);
      let u2;
      const g2 = a2 && typeof (global == null ? void 0 : global.Linking) < "u";
      try {
        const y3 = g2 ? Qs$2 : At$2;
        u2 = await this.client.core.crypto.encode(s2, l2, x$2(v$3({}, o3 || {}), { encoding: y3 }));
      } catch (y3) {
        throw await this.cleanup(), this.client.logger.error(`sendResult() -> core.crypto.encode() for topic ${s2} failed`), y3;
      }
      let h4, d4;
      try {
        h4 = await this.client.core.history.get(s2, t);
        const y3 = h4.request;
        try {
          this.shouldSetTVF(y3.method, y3.params) && (d4 = this.getTVFParams(t, y3.params, i3));
        } catch (m4) {
          this.client.logger.warn("sendResult() -> getTVFParams() failed", m4);
        }
      } catch (y3) {
        throw this.client.logger.error(`sendResult() -> history.get(${s2}, ${t}) failed`), y3;
      }
      if (g2) {
        const y3 = Ei$2(a2, s2, u2);
        await global.Linking.openURL(y3, this.client.name);
      } else {
        const y3 = h4.request.method, m4 = N$2[y3].res;
        m4.tvf = x$2(v$3({}, d4), { correlationId: t }), r2 ? (m4.internal = x$2(v$3({}, m4.internal), { throwOnFailedPublish: true }), await this.client.core.relayer.publish(s2, u2, m4)) : this.client.core.relayer.publish(s2, u2, m4).catch((I3) => this.client.logger.error(I3));
      }
      await this.client.core.history.resolve(l2);
    }), c$1(this, "sendError", async (e2) => {
      const { id: t, topic: s2, error: i3, encodeOpts: r2, rpcOpts: o3, appLink: a2 } = e2, l2 = formatJsonRpcError(t, i3);
      let u2;
      const g2 = a2 && typeof (global == null ? void 0 : global.Linking) < "u";
      try {
        const d4 = g2 ? Qs$2 : At$2;
        u2 = await this.client.core.crypto.encode(s2, l2, x$2(v$3({}, r2 || {}), { encoding: d4 }));
      } catch (d4) {
        throw await this.cleanup(), this.client.logger.error(`sendError() -> core.crypto.encode() for topic ${s2} failed`), d4;
      }
      let h4;
      try {
        h4 = await this.client.core.history.get(s2, t);
      } catch (d4) {
        throw this.client.logger.error(`sendError() -> history.get(${s2}, ${t}) failed`), d4;
      }
      if (g2) {
        const d4 = Ei$2(a2, s2, u2);
        await global.Linking.openURL(d4, this.client.name);
      } else {
        const d4 = h4.request.method, y3 = o3 || N$2[d4].res;
        this.client.core.relayer.publish(s2, u2, y3);
      }
      await this.client.core.history.resolve(l2);
    }), c$1(this, "cleanup", async () => {
      const e2 = [], t = [];
      this.client.session.getAll().forEach((s2) => {
        let i3 = false;
        po$1(s2.expiry) && (i3 = true), this.client.core.crypto.keychain.has(s2.topic) || (i3 = true), i3 && e2.push(s2.topic);
      }), this.client.proposal.getAll().forEach((s2) => {
        po$1(s2.expiryTimestamp) && t.push(s2.id);
      }), await Promise.all([...e2.map((s2) => this.deleteSession({ topic: s2 })), ...t.map((s2) => this.deleteProposal(s2))]);
    }), c$1(this, "onRelayEventRequest", async (e2) => {
      this.requestQueue.queue.push(e2), await this.processRequestsQueue();
    }), c$1(this, "processRequestsQueue", async () => {
      if (this.requestQueue.state === $$2.active) {
        this.client.logger.info("Request queue already active, skipping...");
        return;
      }
      for (this.client.logger.info(`Request queue starting with ${this.requestQueue.queue.length} requests`); this.requestQueue.queue.length > 0; ) {
        this.requestQueue.state = $$2.active;
        const e2 = this.requestQueue.queue.shift();
        if (e2) try {
          await this.processRequest(e2);
        } catch (t) {
          this.client.logger.warn(t);
        }
      }
      this.requestQueue.state = $$2.idle;
    }), c$1(this, "processRequest", async (e2) => {
      const { topic: t, payload: s2, attestation: i3, transportType: r2, encryptedId: o3 } = e2, a2 = s2.method;
      if (!this.shouldIgnorePairingRequest({ topic: t, requestMethod: a2 })) switch (a2) {
        case "wc_sessionPropose":
          return await this.onSessionProposeRequest({ topic: t, payload: s2, attestation: i3, encryptedId: o3 });
        case "wc_sessionSettle":
          return await this.onSessionSettleRequest(t, s2);
        case "wc_sessionUpdate":
          return await this.onSessionUpdateRequest(t, s2);
        case "wc_sessionExtend":
          return await this.onSessionExtendRequest(t, s2);
        case "wc_sessionPing":
          return await this.onSessionPingRequest(t, s2);
        case "wc_sessionDelete":
          return await this.onSessionDeleteRequest(t, s2);
        case "wc_sessionRequest":
          return await this.onSessionRequest({ topic: t, payload: s2, attestation: i3, encryptedId: o3, transportType: r2 });
        case "wc_sessionEvent":
          return await this.onSessionEventRequest(t, s2);
        case "wc_sessionAuthenticate":
          return await this.onSessionAuthenticateRequest({ topic: t, payload: s2, attestation: i3, encryptedId: o3, transportType: r2 });
        default:
          return this.client.logger.info(`Unsupported request method ${a2}`);
      }
    }), c$1(this, "onRelayEventResponse", async (e2) => {
      const { topic: t, payload: s2, transportType: i3 } = e2, r2 = (await this.client.core.history.get(t, s2.id)).request.method;
      switch (r2) {
        case "wc_sessionPropose":
          return this.onSessionProposeResponse(t, s2, i3);
        case "wc_sessionSettle":
          return this.onSessionSettleResponse(t, s2);
        case "wc_sessionUpdate":
          return this.onSessionUpdateResponse(t, s2);
        case "wc_sessionExtend":
          return this.onSessionExtendResponse(t, s2);
        case "wc_sessionPing":
          return this.onSessionPingResponse(t, s2);
        case "wc_sessionRequest":
          return this.onSessionRequestResponse(t, s2);
        case "wc_sessionAuthenticate":
          return this.onSessionAuthenticateResponse(t, s2);
        default:
          return this.client.logger.info(`Unsupported response method ${r2}`);
      }
    }), c$1(this, "onRelayEventUnknownPayload", (e2) => {
      const { topic: t } = e2, { message: s2 } = te$1("MISSING_OR_INVALID", `Decoded payload on topic ${t} is not identifiable as a JSON-RPC request or a response.`);
      throw new Error(s2);
    }), c$1(this, "shouldIgnorePairingRequest", (e2) => {
      const { topic: t, requestMethod: s2 } = e2, i3 = this.expectedPairingMethodMap.get(t);
      return !i3 || i3.includes(s2) ? false : !!(i3.includes("wc_sessionAuthenticate") && this.client.events.listenerCount("session_authenticate") > 0);
    }), c$1(this, "onSessionProposeRequest", async (e2) => {
      const { topic: t, payload: s2, attestation: i3, encryptedId: r2 } = e2, { params: o3, id: a2 } = s2;
      try {
        const l2 = this.client.core.eventClient.getEvent({ topic: t });
        this.client.events.listenerCount("session_proposal") === 0 && (console.warn("No listener for session_proposal event"), l2 == null ? void 0 : l2.setError(J$1.proposal_listener_not_found)), this.isValidConnect(v$3({}, s2.params));
        const u2 = o3.expiryTimestamp || ho$1(N$2.wc_sessionPropose.req.ttl), g2 = v$3({ id: a2, pairingTopic: t, expiryTimestamp: u2 }, o3);
        await this.setProposal(a2, g2);
        const h4 = await this.getVerifyContext({ attestationId: i3, hash: si$2(JSON.stringify(s2)), encryptedId: r2, metadata: g2.proposer.metadata });
        l2 == null ? void 0 : l2.addTrace(q$2.emit_session_proposal), this.client.events.emit("session_proposal", { id: a2, params: g2, verifyContext: h4 });
      } catch (l2) {
        await this.sendError({ id: a2, topic: t, error: l2, rpcOpts: N$2.wc_sessionPropose.autoReject }), this.client.logger.error(l2);
      }
    }), c$1(this, "onSessionProposeResponse", async (e2, t, s2) => {
      const { id: i3 } = t;
      if (isJsonRpcResult(t)) {
        const { result: r2 } = t;
        this.client.logger.trace({ type: "method", method: "onSessionProposeResponse", result: r2 });
        const o3 = this.client.proposal.get(i3);
        this.client.logger.trace({ type: "method", method: "onSessionProposeResponse", proposal: o3 });
        const a2 = o3.proposer.publicKey;
        this.client.logger.trace({ type: "method", method: "onSessionProposeResponse", selfPublicKey: a2 });
        const l2 = r2.responderPublicKey;
        this.client.logger.trace({ type: "method", method: "onSessionProposeResponse", peerPublicKey: l2 });
        const u2 = await this.client.core.crypto.generateSharedKey(a2, l2);
        this.pendingSessions.set(i3, { sessionTopic: u2, pairingTopic: e2, proposalId: i3, publicKey: a2 });
        const g2 = await this.client.core.relayer.subscribe(u2, { transportType: s2 });
        this.client.logger.trace({ type: "method", method: "onSessionProposeResponse", subscriptionId: g2 }), await this.client.core.pairing.activate({ topic: e2 });
      } else if (isJsonRpcError(t)) {
        await this.client.proposal.delete(i3, de$2("USER_DISCONNECTED"));
        const r2 = go$1("session_connect", i3);
        if (this.events.listenerCount(r2) === 0) throw new Error(`emitting ${r2} without any listeners, 954`);
        this.events.emit(r2, { error: t.error });
      }
    }), c$1(this, "onSessionSettleRequest", async (e2, t) => {
      const { id: s2, params: i3 } = t;
      try {
        this.isValidSessionSettleRequest(i3);
        const { relay: r2, controller: o3, expiry: a2, namespaces: l2, sessionProperties: u2, sessionConfig: g2 } = t.params, h4 = [...this.pendingSessions.values()].find((m4) => m4.sessionTopic === e2);
        if (!h4) return this.client.logger.error(`Pending session not found for topic ${e2}`);
        const d4 = this.client.proposal.get(h4.proposalId), y3 = x$2(v$3(v$3({ topic: e2, relay: r2, expiry: a2, namespaces: l2, acknowledged: true, pairingTopic: h4.pairingTopic, requiredNamespaces: d4.requiredNamespaces, optionalNamespaces: d4.optionalNamespaces, controller: o3.publicKey, self: { publicKey: h4.publicKey, metadata: this.client.metadata }, peer: { publicKey: o3.publicKey, metadata: o3.metadata } }, u2 && { sessionProperties: u2 }), g2 && { sessionConfig: g2 }), { transportType: Q$1.relay });
        await this.client.session.set(y3.topic, y3), await this.setExpiry(y3.topic, y3.expiry), await this.client.core.pairing.updateMetadata({ topic: h4.pairingTopic, metadata: y3.peer.metadata }), this.client.events.emit("session_connect", { session: y3 }), this.events.emit(go$1("session_connect", h4.proposalId), { session: y3 }), this.pendingSessions.delete(h4.proposalId), this.deleteProposal(h4.proposalId, false), this.cleanupDuplicatePairings(y3), await this.sendResult({ id: t.id, topic: e2, result: true, throwOnFailedPublish: true });
      } catch (r2) {
        await this.sendError({ id: s2, topic: e2, error: r2 }), this.client.logger.error(r2);
      }
    }), c$1(this, "onSessionSettleResponse", async (e2, t) => {
      const { id: s2 } = t;
      isJsonRpcResult(t) ? (await this.client.session.update(e2, { acknowledged: true }), this.events.emit(go$1("session_approve", s2), {})) : isJsonRpcError(t) && (await this.client.session.delete(e2, de$2("USER_DISCONNECTED")), this.events.emit(go$1("session_approve", s2), { error: t.error }));
    }), c$1(this, "onSessionUpdateRequest", async (e2, t) => {
      const { params: s2, id: i3 } = t;
      try {
        const r2 = `${e2}_session_update`, o3 = Zi$1.get(r2);
        if (o3 && this.isRequestOutOfSync(o3, i3)) {
          this.client.logger.warn(`Discarding out of sync request - ${i3}`), this.sendError({ id: i3, topic: e2, error: de$2("INVALID_UPDATE_REQUEST") });
          return;
        }
        this.isValidUpdate(v$3({ topic: e2 }, s2));
        try {
          Zi$1.set(r2, i3), await this.client.session.update(e2, { namespaces: s2.namespaces }), await this.sendResult({ id: i3, topic: e2, result: true, throwOnFailedPublish: true });
        } catch (a2) {
          throw Zi$1.delete(r2), a2;
        }
        this.client.events.emit("session_update", { id: i3, topic: e2, params: s2 });
      } catch (r2) {
        await this.sendError({ id: i3, topic: e2, error: r2 }), this.client.logger.error(r2);
      }
    }), c$1(this, "isRequestOutOfSync", (e2, t) => t.toString().slice(0, -3) < e2.toString().slice(0, -3)), c$1(this, "onSessionUpdateResponse", (e2, t) => {
      const { id: s2 } = t, i3 = go$1("session_update", s2);
      if (this.events.listenerCount(i3) === 0) throw new Error(`emitting ${i3} without any listeners`);
      isJsonRpcResult(t) ? this.events.emit(go$1("session_update", s2), {}) : isJsonRpcError(t) && this.events.emit(go$1("session_update", s2), { error: t.error });
    }), c$1(this, "onSessionExtendRequest", async (e2, t) => {
      const { id: s2 } = t;
      try {
        this.isValidExtend({ topic: e2 }), await this.setExpiry(e2, ho$1(Y$1)), await this.sendResult({ id: s2, topic: e2, result: true, throwOnFailedPublish: true }), this.client.events.emit("session_extend", { id: s2, topic: e2 });
      } catch (i3) {
        await this.sendError({ id: s2, topic: e2, error: i3 }), this.client.logger.error(i3);
      }
    }), c$1(this, "onSessionExtendResponse", (e2, t) => {
      const { id: s2 } = t, i3 = go$1("session_extend", s2);
      if (this.events.listenerCount(i3) === 0) throw new Error(`emitting ${i3} without any listeners`);
      isJsonRpcResult(t) ? this.events.emit(go$1("session_extend", s2), {}) : isJsonRpcError(t) && this.events.emit(go$1("session_extend", s2), { error: t.error });
    }), c$1(this, "onSessionPingRequest", async (e2, t) => {
      const { id: s2 } = t;
      try {
        this.isValidPing({ topic: e2 }), await this.sendResult({ id: s2, topic: e2, result: true, throwOnFailedPublish: true }), this.client.events.emit("session_ping", { id: s2, topic: e2 });
      } catch (i3) {
        await this.sendError({ id: s2, topic: e2, error: i3 }), this.client.logger.error(i3);
      }
    }), c$1(this, "onSessionPingResponse", (e2, t) => {
      const { id: s2 } = t, i3 = go$1("session_ping", s2);
      if (this.events.listenerCount(i3) === 0) throw new Error(`emitting ${i3} without any listeners`);
      setTimeout(() => {
        isJsonRpcResult(t) ? this.events.emit(go$1("session_ping", s2), {}) : isJsonRpcError(t) && this.events.emit(go$1("session_ping", s2), { error: t.error });
      }, 500);
    }), c$1(this, "onSessionDeleteRequest", async (e2, t) => {
      const { id: s2 } = t;
      try {
        this.isValidDisconnect({ topic: e2, reason: t.params }), Promise.all([new Promise((i3) => {
          this.client.core.relayer.once(T$3.publish, async () => {
            i3(await this.deleteSession({ topic: e2, id: s2 }));
          });
        }), this.sendResult({ id: s2, topic: e2, result: true, throwOnFailedPublish: true }), this.cleanupPendingSentRequestsForTopic({ topic: e2, error: de$2("USER_DISCONNECTED") })]).catch((i3) => this.client.logger.error(i3));
      } catch (i3) {
        this.client.logger.error(i3);
      }
    }), c$1(this, "onSessionRequest", async (e2) => {
      var t, s2, i3;
      const { topic: r2, payload: o3, attestation: a2, encryptedId: l2, transportType: u2 } = e2, { id: g2, params: h4 } = o3;
      try {
        await this.isValidRequest(v$3({ topic: r2 }, h4));
        const d4 = this.client.session.get(r2), y3 = await this.getVerifyContext({ attestationId: a2, hash: si$2(JSON.stringify(formatJsonRpcRequest("wc_sessionRequest", h4, g2))), encryptedId: l2, metadata: d4.peer.metadata, transportType: u2 }), m4 = { id: g2, topic: r2, params: h4, verifyContext: y3 };
        await this.setPendingSessionRequest(m4), u2 === Q$1.link_mode && (t = d4.peer.metadata.redirect) != null && t.universal && this.client.core.addLinkModeSupportedApp((s2 = d4.peer.metadata.redirect) == null ? void 0 : s2.universal), (i3 = this.client.signConfig) != null && i3.disableRequestQueue ? this.emitSessionRequest(m4) : (this.addSessionRequestToSessionRequestQueue(m4), this.processSessionRequestQueue());
      } catch (d4) {
        await this.sendError({ id: g2, topic: r2, error: d4 }), this.client.logger.error(d4);
      }
    }), c$1(this, "onSessionRequestResponse", (e2, t) => {
      const { id: s2 } = t, i3 = go$1("session_request", s2);
      if (this.events.listenerCount(i3) === 0) throw new Error(`emitting ${i3} without any listeners`);
      isJsonRpcResult(t) ? this.events.emit(go$1("session_request", s2), { result: t.result }) : isJsonRpcError(t) && this.events.emit(go$1("session_request", s2), { error: t.error });
    }), c$1(this, "onSessionEventRequest", async (e2, t) => {
      const { id: s2, params: i3 } = t;
      try {
        const r2 = `${e2}_session_event_${i3.event.name}`, o3 = Zi$1.get(r2);
        if (o3 && this.isRequestOutOfSync(o3, s2)) {
          this.client.logger.info(`Discarding out of sync request - ${s2}`);
          return;
        }
        this.isValidEmit(v$3({ topic: e2 }, i3)), this.client.events.emit("session_event", { id: s2, topic: e2, params: i3 }), Zi$1.set(r2, s2);
      } catch (r2) {
        await this.sendError({ id: s2, topic: e2, error: r2 }), this.client.logger.error(r2);
      }
    }), c$1(this, "onSessionAuthenticateResponse", (e2, t) => {
      const { id: s2 } = t;
      this.client.logger.trace({ type: "method", method: "onSessionAuthenticateResponse", topic: e2, payload: t }), isJsonRpcResult(t) ? this.events.emit(go$1("session_request", s2), { result: t.result }) : isJsonRpcError(t) && this.events.emit(go$1("session_request", s2), { error: t.error });
    }), c$1(this, "onSessionAuthenticateRequest", async (e2) => {
      var t;
      const { topic: s2, payload: i3, attestation: r2, encryptedId: o3, transportType: a2 } = e2;
      try {
        const { requester: l2, authPayload: u2, expiryTimestamp: g2 } = i3.params, h4 = await this.getVerifyContext({ attestationId: r2, hash: si$2(JSON.stringify(i3)), encryptedId: o3, metadata: l2.metadata, transportType: a2 }), d4 = { requester: l2, pairingTopic: s2, id: i3.id, authPayload: u2, verifyContext: h4, expiryTimestamp: g2 };
        await this.setAuthRequest(i3.id, { request: d4, pairingTopic: s2, transportType: a2 }), a2 === Q$1.link_mode && (t = l2.metadata.redirect) != null && t.universal && this.client.core.addLinkModeSupportedApp(l2.metadata.redirect.universal), this.client.events.emit("session_authenticate", { topic: s2, params: i3.params, id: i3.id, verifyContext: h4 });
      } catch (l2) {
        this.client.logger.error(l2);
        const u2 = i3.params.requester.publicKey, g2 = await this.client.core.crypto.generateKeyPair(), h4 = this.getAppLinkIfEnabled(i3.params.requester.metadata, a2), d4 = { type: Ie$1, receiverPublicKey: u2, senderPublicKey: g2 };
        await this.sendError({ id: i3.id, topic: s2, error: l2, encodeOpts: d4, rpcOpts: N$2.wc_sessionAuthenticate.autoReject, appLink: h4 });
      }
    }), c$1(this, "addSessionRequestToSessionRequestQueue", (e2) => {
      this.sessionRequestQueue.queue.push(e2);
    }), c$1(this, "cleanupAfterResponse", (e2) => {
      this.deletePendingSessionRequest(e2.response.id, { message: "fulfilled", code: 0 }), setTimeout(() => {
        this.sessionRequestQueue.state = $$2.idle, this.processSessionRequestQueue();
      }, cjs$3.toMiliseconds(this.requestQueueDelay));
    }), c$1(this, "cleanupPendingSentRequestsForTopic", ({ topic: e2, error: t }) => {
      const s2 = this.client.core.history.pending;
      s2.length > 0 && s2.filter((i3) => i3.topic === e2 && i3.request.method === "wc_sessionRequest").forEach((i3) => {
        const r2 = i3.request.id, o3 = go$1("session_request", r2);
        if (this.events.listenerCount(o3) === 0) throw new Error(`emitting ${o3} without any listeners`);
        this.events.emit(go$1("session_request", i3.request.id), { error: t });
      });
    }), c$1(this, "processSessionRequestQueue", () => {
      if (this.sessionRequestQueue.state === $$2.active) {
        this.client.logger.info("session request queue is already active.");
        return;
      }
      const e2 = this.sessionRequestQueue.queue[0];
      if (!e2) {
        this.client.logger.info("session request queue is empty.");
        return;
      }
      try {
        this.sessionRequestQueue.state = $$2.active, this.emitSessionRequest(e2);
      } catch (t) {
        this.client.logger.error(t);
      }
    }), c$1(this, "emitSessionRequest", (e2) => {
      this.client.events.emit("session_request", e2);
    }), c$1(this, "onPairingCreated", (e2) => {
      if (e2.methods && this.expectedPairingMethodMap.set(e2.topic, e2.methods), e2.active) return;
      const t = this.client.proposal.getAll().find((s2) => s2.pairingTopic === e2.topic);
      t && this.onSessionProposeRequest({ topic: e2.topic, payload: formatJsonRpcRequest("wc_sessionPropose", { requiredNamespaces: t.requiredNamespaces, optionalNamespaces: t.optionalNamespaces, relays: t.relays, proposer: t.proposer, sessionProperties: t.sessionProperties }, t.id) });
    }), c$1(this, "isValidConnect", async (e2) => {
      if (!Di$2(e2)) {
        const { message: a2 } = te$1("MISSING_OR_INVALID", `connect() params: ${JSON.stringify(e2)}`);
        throw new Error(a2);
      }
      const { pairingTopic: t, requiredNamespaces: s2, optionalNamespaces: i3, sessionProperties: r2, relays: o3 } = e2;
      if (ae$1(t) || await this.isValidPairingTopic(t), !Ci$2(o3)) {
        const { message: a2 } = te$1("MISSING_OR_INVALID", `connect() relays: ${o3}`);
        throw new Error(a2);
      }
      !ae$1(s2) && qe$2(s2) !== 0 && this.validateNamespaces(s2, "requiredNamespaces"), !ae$1(i3) && qe$2(i3) !== 0 && this.validateNamespaces(i3, "optionalNamespaces"), ae$1(r2) || this.validateSessionProps(r2, "sessionProperties");
    }), c$1(this, "validateNamespaces", (e2, t) => {
      const s2 = ji$1(e2, "connect()", t);
      if (s2) throw new Error(s2.message);
    }), c$1(this, "isValidApprove", async (e2) => {
      if (!Di$2(e2)) throw new Error(te$1("MISSING_OR_INVALID", `approve() params: ${e2}`).message);
      const { id: t, namespaces: s2, relayProtocol: i3, sessionProperties: r2 } = e2;
      this.checkRecentlyDeleted(t), await this.isValidProposalId(t);
      const o3 = this.client.proposal.get(t), a2 = Ir$2(s2, "approve()");
      if (a2) throw new Error(a2.message);
      const l2 = Nr$2(o3.requiredNamespaces, s2, "approve()");
      if (l2) throw new Error(l2.message);
      if (!q$3(i3, true)) {
        const { message: u2 } = te$1("MISSING_OR_INVALID", `approve() relayProtocol: ${i3}`);
        throw new Error(u2);
      }
      ae$1(r2) || this.validateSessionProps(r2, "sessionProperties");
    }), c$1(this, "isValidReject", async (e2) => {
      if (!Di$2(e2)) {
        const { message: i3 } = te$1("MISSING_OR_INVALID", `reject() params: ${e2}`);
        throw new Error(i3);
      }
      const { id: t, reason: s2 } = e2;
      if (this.checkRecentlyDeleted(t), await this.isValidProposalId(t), !Mi$1(s2)) {
        const { message: i3 } = te$1("MISSING_OR_INVALID", `reject() reason: ${JSON.stringify(s2)}`);
        throw new Error(i3);
      }
    }), c$1(this, "isValidSessionSettleRequest", (e2) => {
      if (!Di$2(e2)) {
        const { message: l2 } = te$1("MISSING_OR_INVALID", `onSessionSettleRequest() params: ${e2}`);
        throw new Error(l2);
      }
      const { relay: t, controller: s2, namespaces: i3, expiry: r2 } = e2;
      if (!Ar$2(t)) {
        const { message: l2 } = te$1("MISSING_OR_INVALID", "onSessionSettleRequest() relay protocol should be a string");
        throw new Error(l2);
      }
      const o3 = Bi$1(s2, "onSessionSettleRequest()");
      if (o3) throw new Error(o3.message);
      const a2 = Ir$2(i3, "onSessionSettleRequest()");
      if (a2) throw new Error(a2.message);
      if (po$1(r2)) {
        const { message: l2 } = te$1("EXPIRED", "onSessionSettleRequest()");
        throw new Error(l2);
      }
    }), c$1(this, "isValidUpdate", async (e2) => {
      if (!Di$2(e2)) {
        const { message: a2 } = te$1("MISSING_OR_INVALID", `update() params: ${e2}`);
        throw new Error(a2);
      }
      const { topic: t, namespaces: s2 } = e2;
      this.checkRecentlyDeleted(t), await this.isValidSessionTopic(t);
      const i3 = this.client.session.get(t), r2 = Ir$2(s2, "update()");
      if (r2) throw new Error(r2.message);
      const o3 = Nr$2(i3.requiredNamespaces, s2, "update()");
      if (o3) throw new Error(o3.message);
    }), c$1(this, "isValidExtend", async (e2) => {
      if (!Di$2(e2)) {
        const { message: s2 } = te$1("MISSING_OR_INVALID", `extend() params: ${e2}`);
        throw new Error(s2);
      }
      const { topic: t } = e2;
      this.checkRecentlyDeleted(t), await this.isValidSessionTopic(t);
    }), c$1(this, "isValidRequest", async (e2) => {
      if (!Di$2(e2)) {
        const { message: a2 } = te$1("MISSING_OR_INVALID", `request() params: ${e2}`);
        throw new Error(a2);
      }
      const { topic: t, request: s2, chainId: i3, expiry: r2 } = e2;
      this.checkRecentlyDeleted(t), await this.isValidSessionTopic(t);
      const { namespaces: o3 } = this.client.session.get(t);
      if (!Fi$1(o3, i3)) {
        const { message: a2 } = te$1("MISSING_OR_INVALID", `request() chainId: ${i3}`);
        throw new Error(a2);
      }
      if (!Vi$1(s2)) {
        const { message: a2 } = te$1("MISSING_OR_INVALID", `request() ${JSON.stringify(s2)}`);
        throw new Error(a2);
      }
      if (!qi$1(o3, i3, s2.method)) {
        const { message: a2 } = te$1("MISSING_OR_INVALID", `request() method: ${s2.method}`);
        throw new Error(a2);
      }
      if (r2 && !Ji$1(r2, Ee$1)) {
        const { message: a2 } = te$1("MISSING_OR_INVALID", `request() expiry: ${r2}. Expiry must be a number (in seconds) between ${Ee$1.min} and ${Ee$1.max}`);
        throw new Error(a2);
      }
    }), c$1(this, "isValidRespond", async (e2) => {
      var t;
      if (!Di$2(e2)) {
        const { message: r2 } = te$1("MISSING_OR_INVALID", `respond() params: ${e2}`);
        throw new Error(r2);
      }
      const { topic: s2, response: i3 } = e2;
      try {
        await this.isValidSessionTopic(s2);
      } catch (r2) {
        throw (t = e2 == null ? void 0 : e2.response) != null && t.id && this.cleanupAfterResponse(e2), r2;
      }
      if (!Hi$1(i3)) {
        const { message: r2 } = te$1("MISSING_OR_INVALID", `respond() response: ${JSON.stringify(i3)}`);
        throw new Error(r2);
      }
    }), c$1(this, "isValidPing", async (e2) => {
      if (!Di$2(e2)) {
        const { message: s2 } = te$1("MISSING_OR_INVALID", `ping() params: ${e2}`);
        throw new Error(s2);
      }
      const { topic: t } = e2;
      await this.isValidSessionOrPairingTopic(t);
    }), c$1(this, "isValidEmit", async (e2) => {
      if (!Di$2(e2)) {
        const { message: o3 } = te$1("MISSING_OR_INVALID", `emit() params: ${e2}`);
        throw new Error(o3);
      }
      const { topic: t, event: s2, chainId: i3 } = e2;
      await this.isValidSessionTopic(t);
      const { namespaces: r2 } = this.client.session.get(t);
      if (!Fi$1(r2, i3)) {
        const { message: o3 } = te$1("MISSING_OR_INVALID", `emit() chainId: ${i3}`);
        throw new Error(o3);
      }
      if (!Ki$1(s2)) {
        const { message: o3 } = te$1("MISSING_OR_INVALID", `emit() event: ${JSON.stringify(s2)}`);
        throw new Error(o3);
      }
      if (!Gi$1(r2, i3, s2.name)) {
        const { message: o3 } = te$1("MISSING_OR_INVALID", `emit() event: ${JSON.stringify(s2)}`);
        throw new Error(o3);
      }
    }), c$1(this, "isValidDisconnect", async (e2) => {
      if (!Di$2(e2)) {
        const { message: s2 } = te$1("MISSING_OR_INVALID", `disconnect() params: ${e2}`);
        throw new Error(s2);
      }
      const { topic: t } = e2;
      await this.isValidSessionOrPairingTopic(t);
    }), c$1(this, "isValidAuthenticate", (e2) => {
      const { chains: t, uri: s2, domain: i3, nonce: r2 } = e2;
      if (!Array.isArray(t) || t.length === 0) throw new Error("chains is required and must be a non-empty array");
      if (!q$3(s2, false)) throw new Error("uri is required parameter");
      if (!q$3(i3, false)) throw new Error("domain is required parameter");
      if (!q$3(r2, false)) throw new Error("nonce is required parameter");
      if ([...new Set(t.map((a2) => Ye$1(a2).namespace))].length > 1) throw new Error("Multi-namespace requests are not supported. Please request single namespace only.");
      const { namespace: o3 } = Ye$1(t[0]);
      if (o3 !== "eip155") throw new Error("Only eip155 namespace is supported for authenticated sessions. Please use .connect() for non-eip155 chains.");
    }), c$1(this, "getVerifyContext", async (e2) => {
      const { attestationId: t, hash: s2, encryptedId: i3, metadata: r2, transportType: o3 } = e2, a2 = { verified: { verifyUrl: r2.verifyUrl || le$2, validation: "UNKNOWN", origin: r2.url || "" } };
      try {
        if (o3 === Q$1.link_mode) {
          const u2 = this.getAppLinkIfEnabled(r2, o3);
          return a2.verified.validation = u2 && new URL(u2).origin === new URL(r2.url).origin ? "VALID" : "INVALID", a2;
        }
        const l2 = await this.client.core.verify.resolve({ attestationId: t, hash: s2, encryptedId: i3, verifyUrl: r2.verifyUrl });
        l2 && (a2.verified.origin = l2.origin, a2.verified.isScam = l2.isScam, a2.verified.validation = l2.origin === new URL(r2.url).origin ? "VALID" : "INVALID");
      } catch (l2) {
        this.client.logger.warn(l2);
      }
      return this.client.logger.debug(`Verify context: ${JSON.stringify(a2)}`), a2;
    }), c$1(this, "validateSessionProps", (e2, t) => {
      Object.values(e2).forEach((s2) => {
        if (!q$3(s2, false)) {
          const { message: i3 } = te$1("MISSING_OR_INVALID", `${t} must be in Record<string, string> format. Received: ${JSON.stringify(s2)}`);
          throw new Error(i3);
        }
      });
    }), c$1(this, "getPendingAuthRequest", (e2) => {
      const t = this.client.auth.requests.get(e2);
      return typeof t == "object" ? t : void 0;
    }), c$1(this, "addToRecentlyDeleted", (e2, t) => {
      if (this.recentlyDeletedMap.set(e2, t), this.recentlyDeletedMap.size >= this.recentlyDeletedLimit) {
        let s2 = 0;
        const i3 = this.recentlyDeletedLimit / 2;
        for (const r2 of this.recentlyDeletedMap.keys()) {
          if (s2++ >= i3) break;
          this.recentlyDeletedMap.delete(r2);
        }
      }
    }), c$1(this, "checkRecentlyDeleted", (e2) => {
      const t = this.recentlyDeletedMap.get(e2);
      if (t) {
        const { message: s2 } = te$1("MISSING_OR_INVALID", `Record was recently deleted - ${t}: ${e2}`);
        throw new Error(s2);
      }
    }), c$1(this, "isLinkModeEnabled", (e2, t) => {
      var s2, i3, r2, o3, a2, l2, u2, g2, h4;
      return !e2 || t !== Q$1.link_mode ? false : ((i3 = (s2 = this.client.metadata) == null ? void 0 : s2.redirect) == null ? void 0 : i3.linkMode) === true && ((o3 = (r2 = this.client.metadata) == null ? void 0 : r2.redirect) == null ? void 0 : o3.universal) !== void 0 && ((l2 = (a2 = this.client.metadata) == null ? void 0 : a2.redirect) == null ? void 0 : l2.universal) !== "" && ((u2 = e2 == null ? void 0 : e2.redirect) == null ? void 0 : u2.universal) !== void 0 && ((g2 = e2 == null ? void 0 : e2.redirect) == null ? void 0 : g2.universal) !== "" && ((h4 = e2 == null ? void 0 : e2.redirect) == null ? void 0 : h4.linkMode) === true && this.client.core.linkModeSupportedApps.includes(e2.redirect.universal) && typeof (global == null ? void 0 : global.Linking) < "u";
    }), c$1(this, "getAppLinkIfEnabled", (e2, t) => {
      var s2;
      return this.isLinkModeEnabled(e2, t) ? (s2 = e2 == null ? void 0 : e2.redirect) == null ? void 0 : s2.universal : void 0;
    }), c$1(this, "handleLinkModeMessage", ({ url: e2 }) => {
      if (!e2 || !e2.includes("wc_ev") || !e2.includes("topic")) return;
      const t = bo$1(e2, "topic") || "", s2 = decodeURIComponent(bo$1(e2, "wc_ev") || ""), i3 = this.client.session.keys.includes(t);
      i3 && this.client.session.update(t, { transportType: Q$1.link_mode }), this.client.core.dispatchEnvelope({ topic: t, message: s2, sessionExists: i3 });
    }), c$1(this, "registerLinkModeListeners", async () => {
      var e2;
      if (Eo$1() || ne$1() && (e2 = this.client.metadata.redirect) != null && e2.linkMode) {
        const t = global == null ? void 0 : global.Linking;
        if (typeof t < "u") {
          t.addEventListener("url", this.handleLinkModeMessage, this.client.name);
          const s2 = await t.getInitialURL();
          s2 && setTimeout(() => {
            this.handleLinkModeMessage({ url: s2 });
          }, 50);
        }
      }
    }), c$1(this, "shouldSetTVF", (e2, t) => {
      if (!t || e2 !== "wc_sessionRequest") return false;
      const { request: s2 } = t;
      return Object.keys(Ke$1).includes(s2.method);
    }), c$1(this, "getTVFParams", (e2, t, s2) => {
      var i3, r2;
      try {
        const o3 = t.request.method, a2 = this.extractTxHashesFromResult(o3, s2);
        return x$2(v$3({ correlationId: e2, rpcMethods: [o3], chainId: t.chainId }, this.isValidContractData(t.request.params) && { contractAddresses: [(r2 = (i3 = t.request.params) == null ? void 0 : i3[0]) == null ? void 0 : r2.to] }), { txHashes: a2 });
      } catch (o3) {
        this.client.logger.warn("Error getting TVF params", o3);
      }
      return {};
    }), c$1(this, "isValidContractData", (e2) => {
      var t;
      if (!e2) return false;
      try {
        const s2 = (e2 == null ? void 0 : e2.data) || ((t = e2 == null ? void 0 : e2[0]) == null ? void 0 : t.data);
        if (!s2.startsWith("0x")) return false;
        const i3 = s2.slice(2);
        return /^[0-9a-fA-F]*$/.test(i3) ? i3.length % 2 === 0 : false;
      } catch {
      }
      return false;
    }), c$1(this, "extractTxHashesFromResult", (e2, t) => {
      try {
        const s2 = Ke$1[e2];
        if (typeof t == "string") return [t];
        const i3 = t[s2.key];
        if ($e$3(i3)) return i3;
        if (typeof i3 == "string") return [i3];
      } catch (s2) {
        this.client.logger.warn("Error extracting tx hashes from result", s2);
      }
      return [];
    });
  }
  isInitialized() {
    if (!this.initialized) {
      const { message: n3 } = te$1("NOT_INITIALIZED", this.name);
      throw new Error(n3);
    }
  }
  async confirmOnlineStateOrThrow() {
    await this.client.core.relayer.confirmOnlineStateOrThrow();
  }
  registerRelayerEvents() {
    this.client.core.relayer.on(T$3.message, (n3) => {
      !this.initialized || this.relayMessageCache.length > 0 ? this.relayMessageCache.push(n3) : this.onRelayMessage(n3);
    });
  }
  async onRelayMessage(n3) {
    const { topic: e2, message: t, attestation: s2, transportType: i3 } = n3, { publicKey: r2 } = this.client.auth.authKeys.keys.includes(le$1) ? this.client.auth.authKeys.get(le$1) : { responseTopic: void 0, publicKey: void 0 }, o3 = await this.client.core.crypto.decode(e2, t, { receiverPublicKey: r2, encoding: i3 === Q$1.link_mode ? Qs$2 : At$2 });
    try {
      isJsonRpcRequest(o3) ? (this.client.core.history.set(e2, o3), this.onRelayEventRequest({ topic: e2, payload: o3, attestation: s2, transportType: i3, encryptedId: si$2(t) })) : isJsonRpcResponse(o3) ? (await this.client.core.history.resolve(o3), await this.onRelayEventResponse({ topic: e2, payload: o3, transportType: i3 }), this.client.core.history.delete(e2, o3.id)) : this.onRelayEventUnknownPayload({ topic: e2, payload: o3, transportType: i3 });
    } catch (a2) {
      this.client.logger.error(a2);
    }
  }
  registerExpirerEvents() {
    this.client.core.expirer.on(M$2.expired, async (n3) => {
      const { topic: e2, id: t } = lo$1(n3.target);
      if (t && this.client.pendingRequest.keys.includes(t)) return await this.deletePendingSessionRequest(t, te$1("EXPIRED"), true);
      if (t && this.client.auth.requests.keys.includes(t)) return await this.deletePendingAuthRequest(t, te$1("EXPIRED"), true);
      e2 ? this.client.session.keys.includes(e2) && (await this.deleteSession({ topic: e2, expirerHasDeleted: true }), this.client.events.emit("session_expire", { topic: e2 })) : t && (await this.deleteProposal(t, true), this.client.events.emit("proposal_expire", { id: t }));
    });
  }
  registerPairingEvents() {
    this.client.core.pairing.events.on(se$1.create, (n3) => this.onPairingCreated(n3)), this.client.core.pairing.events.on(se$1.delete, (n3) => {
      this.addToRecentlyDeleted(n3.topic, "pairing");
    });
  }
  isValidPairingTopic(n3) {
    if (!q$3(n3, false)) {
      const { message: e2 } = te$1("MISSING_OR_INVALID", `pairing topic should be a string: ${n3}`);
      throw new Error(e2);
    }
    if (!this.client.core.pairing.pairings.keys.includes(n3)) {
      const { message: e2 } = te$1("NO_MATCHING_KEY", `pairing topic doesn't exist: ${n3}`);
      throw new Error(e2);
    }
    if (po$1(this.client.core.pairing.pairings.get(n3).expiry)) {
      const { message: e2 } = te$1("EXPIRED", `pairing topic: ${n3}`);
      throw new Error(e2);
    }
  }
  async isValidSessionTopic(n3) {
    if (!q$3(n3, false)) {
      const { message: e2 } = te$1("MISSING_OR_INVALID", `session topic should be a string: ${n3}`);
      throw new Error(e2);
    }
    if (this.checkRecentlyDeleted(n3), !this.client.session.keys.includes(n3)) {
      const { message: e2 } = te$1("NO_MATCHING_KEY", `session topic doesn't exist: ${n3}`);
      throw new Error(e2);
    }
    if (po$1(this.client.session.get(n3).expiry)) {
      await this.deleteSession({ topic: n3 });
      const { message: e2 } = te$1("EXPIRED", `session topic: ${n3}`);
      throw new Error(e2);
    }
    if (!this.client.core.crypto.keychain.has(n3)) {
      const { message: e2 } = te$1("MISSING_OR_INVALID", `session topic does not exist in keychain: ${n3}`);
      throw await this.deleteSession({ topic: n3 }), new Error(e2);
    }
  }
  async isValidSessionOrPairingTopic(n3) {
    if (this.checkRecentlyDeleted(n3), this.client.session.keys.includes(n3)) await this.isValidSessionTopic(n3);
    else if (this.client.core.pairing.pairings.keys.includes(n3)) this.isValidPairingTopic(n3);
    else if (q$3(n3, false)) {
      const { message: e2 } = te$1("NO_MATCHING_KEY", `session or pairing topic doesn't exist: ${n3}`);
      throw new Error(e2);
    } else {
      const { message: e2 } = te$1("MISSING_OR_INVALID", `session or pairing topic should be a string: ${n3}`);
      throw new Error(e2);
    }
  }
  async isValidProposalId(n3) {
    if (!ki$1(n3)) {
      const { message: e2 } = te$1("MISSING_OR_INVALID", `proposal id should be a number: ${n3}`);
      throw new Error(e2);
    }
    if (!this.client.proposal.keys.includes(n3)) {
      const { message: e2 } = te$1("NO_MATCHING_KEY", `proposal id doesn't exist: ${n3}`);
      throw new Error(e2);
    }
    if (po$1(this.client.proposal.get(n3).expiryTimestamp)) {
      await this.deleteProposal(n3);
      const { message: e2 } = te$1("EXPIRED", `proposal id: ${n3}`);
      throw new Error(e2);
    }
  }
};
let Ns$1 = class Ns extends Ci$1 {
  constructor(n3, e2) {
    super(n3, e2, pt$1, me), this.core = n3, this.logger = e2;
  }
};
let Rt$1 = class Rt extends Ci$1 {
  constructor(n3, e2) {
    super(n3, e2, ht$1, me), this.core = n3, this.logger = e2;
  }
};
let Ps$1 = class Ps extends Ci$1 {
  constructor(n3, e2) {
    super(n3, e2, ut$1, me, (t) => t.id), this.core = n3, this.logger = e2;
  }
};
let Os$1 = class Os extends Ci$1 {
  constructor(n3, e2) {
    super(n3, e2, mt, ce$1, () => le$1), this.core = n3, this.logger = e2;
  }
};
let bs$1 = class bs extends Ci$1 {
  constructor(n3, e2) {
    super(n3, e2, _t$1, ce$1), this.core = n3, this.logger = e2;
  }
};
let As$1 = class As extends Ci$1 {
  constructor(n3, e2) {
    super(n3, e2, Et$1, ce$1, (t) => t.id), this.core = n3, this.logger = e2;
  }
};
var Cs$1 = Object.defineProperty, xs$1 = (S4, n3, e2) => n3 in S4 ? Cs$1(S4, n3, { enumerable: true, configurable: true, writable: true, value: e2 }) : S4[n3] = e2, Ge$1 = (S4, n3, e2) => xs$1(S4, typeof n3 != "symbol" ? n3 + "" : n3, e2);
let Vs$1 = class Vs {
  constructor(n3, e2) {
    this.core = n3, this.logger = e2, Ge$1(this, "authKeys"), Ge$1(this, "pairingTopics"), Ge$1(this, "requests"), this.authKeys = new Os$1(this.core, this.logger), this.pairingTopics = new bs$1(this.core, this.logger), this.requests = new As$1(this.core, this.logger);
  }
  async init() {
    await this.authKeys.init(), await this.pairingTopics.init(), await this.requests.init();
  }
};
var Ds$1 = Object.defineProperty, Ls$1 = (S4, n3, e2) => n3 in S4 ? Ds$1(S4, n3, { enumerable: true, configurable: true, writable: true, value: e2 }) : S4[n3] = e2, _$2 = (S4, n3, e2) => Ls$1(S4, typeof n3 != "symbol" ? n3 + "" : n3, e2);
let Se$1 = class Se extends J$2 {
  constructor(n3) {
    super(n3), _$2(this, "protocol", De$1), _$2(this, "version", Le$1), _$2(this, "name", _e$1.name), _$2(this, "metadata"), _$2(this, "core"), _$2(this, "logger"), _$2(this, "events", new eventsExports.EventEmitter()), _$2(this, "engine"), _$2(this, "session"), _$2(this, "proposal"), _$2(this, "pendingRequest"), _$2(this, "auth"), _$2(this, "signConfig"), _$2(this, "on", (t, s2) => this.events.on(t, s2)), _$2(this, "once", (t, s2) => this.events.once(t, s2)), _$2(this, "off", (t, s2) => this.events.off(t, s2)), _$2(this, "removeListener", (t, s2) => this.events.removeListener(t, s2)), _$2(this, "removeAllListeners", (t) => this.events.removeAllListeners(t)), _$2(this, "connect", async (t) => {
      try {
        return await this.engine.connect(t);
      } catch (s2) {
        throw this.logger.error(s2.message), s2;
      }
    }), _$2(this, "pair", async (t) => {
      try {
        return await this.engine.pair(t);
      } catch (s2) {
        throw this.logger.error(s2.message), s2;
      }
    }), _$2(this, "approve", async (t) => {
      try {
        return await this.engine.approve(t);
      } catch (s2) {
        throw this.logger.error(s2.message), s2;
      }
    }), _$2(this, "reject", async (t) => {
      try {
        return await this.engine.reject(t);
      } catch (s2) {
        throw this.logger.error(s2.message), s2;
      }
    }), _$2(this, "update", async (t) => {
      try {
        return await this.engine.update(t);
      } catch (s2) {
        throw this.logger.error(s2.message), s2;
      }
    }), _$2(this, "extend", async (t) => {
      try {
        return await this.engine.extend(t);
      } catch (s2) {
        throw this.logger.error(s2.message), s2;
      }
    }), _$2(this, "request", async (t) => {
      try {
        return await this.engine.request(t);
      } catch (s2) {
        throw this.logger.error(s2.message), s2;
      }
    }), _$2(this, "respond", async (t) => {
      try {
        return await this.engine.respond(t);
      } catch (s2) {
        throw this.logger.error(s2.message), s2;
      }
    }), _$2(this, "ping", async (t) => {
      try {
        return await this.engine.ping(t);
      } catch (s2) {
        throw this.logger.error(s2.message), s2;
      }
    }), _$2(this, "emit", async (t) => {
      try {
        return await this.engine.emit(t);
      } catch (s2) {
        throw this.logger.error(s2.message), s2;
      }
    }), _$2(this, "disconnect", async (t) => {
      try {
        return await this.engine.disconnect(t);
      } catch (s2) {
        throw this.logger.error(s2.message), s2;
      }
    }), _$2(this, "find", (t) => {
      try {
        return this.engine.find(t);
      } catch (s2) {
        throw this.logger.error(s2.message), s2;
      }
    }), _$2(this, "getPendingSessionRequests", () => {
      try {
        return this.engine.getPendingSessionRequests();
      } catch (t) {
        throw this.logger.error(t.message), t;
      }
    }), _$2(this, "authenticate", async (t, s2) => {
      try {
        return await this.engine.authenticate(t, s2);
      } catch (i3) {
        throw this.logger.error(i3.message), i3;
      }
    }), _$2(this, "formatAuthMessage", (t) => {
      try {
        return this.engine.formatAuthMessage(t);
      } catch (s2) {
        throw this.logger.error(s2.message), s2;
      }
    }), _$2(this, "approveSessionAuthenticate", async (t) => {
      try {
        return await this.engine.approveSessionAuthenticate(t);
      } catch (s2) {
        throw this.logger.error(s2.message), s2;
      }
    }), _$2(this, "rejectSessionAuthenticate", async (t) => {
      try {
        return await this.engine.rejectSessionAuthenticate(t);
      } catch (s2) {
        throw this.logger.error(s2.message), s2;
      }
    }), this.name = (n3 == null ? void 0 : n3.name) || _e$1.name, this.metadata = (n3 == null ? void 0 : n3.metadata) || Yr$2(), this.signConfig = n3 == null ? void 0 : n3.signConfig;
    const e2 = typeof (n3 == null ? void 0 : n3.logger) < "u" && typeof (n3 == null ? void 0 : n3.logger) != "string" ? n3.logger : gt$1(k$2({ level: (n3 == null ? void 0 : n3.logger) || _e$1.logger }));
    this.core = (n3 == null ? void 0 : n3.core) || new co$1(n3), this.logger = E$3(e2, this.name), this.session = new Rt$1(this.core, this.logger), this.proposal = new Ns$1(this.core, this.logger), this.pendingRequest = new Ps$1(this.core, this.logger), this.engine = new Ts$1(this), this.auth = new Vs$1(this.core, this.logger);
  }
  static async init(n3) {
    const e2 = new Se(n3);
    return await e2.initialize(), e2;
  }
  get context() {
    return y$3(this.logger);
  }
  get pairing() {
    return this.core.pairing.pairings;
  }
  async initialize() {
    this.logger.trace("Initialized");
    try {
      await this.core.start(), await this.session.init(), await this.proposal.init(), await this.pendingRequest.init(), await this.auth.init(), await this.engine.init(), this.logger.info("SignClient Initialization Success"), setTimeout(() => {
        this.engine.processRelayMessageCache();
      }, cjs$3.toMiliseconds(cjs$3.ONE_SECOND));
    } catch (n3) {
      throw this.logger.info("SignClient Initialization Failure"), this.logger.error(n3.message), n3;
    }
  }
};
var browserPonyfill = { exports: {} };
(function(module, exports) {
  var __global__ = typeof globalThis !== "undefined" && globalThis || typeof self !== "undefined" && self || typeof commonjsGlobal !== "undefined" && commonjsGlobal;
  var __globalThis__ = function() {
    function F2() {
      this.fetch = false;
      this.DOMException = __global__.DOMException;
    }
    F2.prototype = __global__;
    return new F2();
  }();
  (function(globalThis2) {
    (function(exports2) {
      var g2 = typeof globalThis2 !== "undefined" && globalThis2 || typeof self !== "undefined" && self || // eslint-disable-next-line no-undef
      typeof commonjsGlobal !== "undefined" && commonjsGlobal || {};
      var support = {
        searchParams: "URLSearchParams" in g2,
        iterable: "Symbol" in g2 && "iterator" in Symbol,
        blob: "FileReader" in g2 && "Blob" in g2 && function() {
          try {
            new Blob();
            return true;
          } catch (e2) {
            return false;
          }
        }(),
        formData: "FormData" in g2,
        arrayBuffer: "ArrayBuffer" in g2
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
      function normalizeName(name2) {
        if (typeof name2 !== "string") {
          name2 = String(name2);
        }
        if (/[^a-z0-9\-#$%&'*+.^_`|~!]/i.test(name2) || name2 === "") {
          throw new TypeError('Invalid character in header field name: "' + name2 + '"');
        }
        return name2.toLowerCase();
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
          headers.forEach(function(value, name2) {
            this.append(name2, value);
          }, this);
        } else if (Array.isArray(headers)) {
          headers.forEach(function(header) {
            if (header.length != 2) {
              throw new TypeError("Headers constructor: expected name/value pair to be length 2, found" + header.length);
            }
            this.append(header[0], header[1]);
          }, this);
        } else if (headers) {
          Object.getOwnPropertyNames(headers).forEach(function(name2) {
            this.append(name2, headers[name2]);
          }, this);
        }
      }
      Headers.prototype.append = function(name2, value) {
        name2 = normalizeName(name2);
        value = normalizeValue(value);
        var oldValue = this.map[name2];
        this.map[name2] = oldValue ? oldValue + ", " + value : value;
      };
      Headers.prototype["delete"] = function(name2) {
        delete this.map[normalizeName(name2)];
      };
      Headers.prototype.get = function(name2) {
        name2 = normalizeName(name2);
        return this.has(name2) ? this.map[name2] : null;
      };
      Headers.prototype.has = function(name2) {
        return this.map.hasOwnProperty(normalizeName(name2));
      };
      Headers.prototype.set = function(name2, value) {
        this.map[normalizeName(name2)] = normalizeValue(value);
      };
      Headers.prototype.forEach = function(callback, thisArg) {
        for (var name2 in this.map) {
          if (this.map.hasOwnProperty(name2)) {
            callback.call(thisArg, this.map[name2], name2, this);
          }
        }
      };
      Headers.prototype.keys = function() {
        var items = [];
        this.forEach(function(value, name2) {
          items.push(name2);
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
        this.forEach(function(value, name2) {
          items.push([name2, value]);
        });
        return iteratorFor(items);
      };
      if (support.iterable) {
        Headers.prototype[Symbol.iterator] = Headers.prototype.entries;
      }
      function consumed(body) {
        if (body._noBody) return;
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
        var match = /charset=([A-Za-z0-9_-]+)/.exec(blob.type);
        var encoding = match ? match[1] : "utf-8";
        reader.readAsText(blob, encoding);
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
          this.bodyUsed = this.bodyUsed;
          this._bodyInit = body;
          if (!body) {
            this._noBody = true;
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
        }
        this.arrayBuffer = function() {
          if (this._bodyArrayBuffer) {
            var isConsumed = consumed(this);
            if (isConsumed) {
              return isConsumed;
            } else if (ArrayBuffer.isView(this._bodyArrayBuffer)) {
              return Promise.resolve(
                this._bodyArrayBuffer.buffer.slice(
                  this._bodyArrayBuffer.byteOffset,
                  this._bodyArrayBuffer.byteOffset + this._bodyArrayBuffer.byteLength
                )
              );
            } else {
              return Promise.resolve(this._bodyArrayBuffer);
            }
          } else if (support.blob) {
            return this.blob().then(readBlobAsArrayBuffer);
          } else {
            throw new Error("could not read as ArrayBuffer");
          }
        };
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
      var methods = ["CONNECT", "DELETE", "GET", "HEAD", "OPTIONS", "PATCH", "POST", "PUT", "TRACE"];
      function normalizeMethod(method) {
        var upcased = method.toUpperCase();
        return methods.indexOf(upcased) > -1 ? upcased : method;
      }
      function Request(input, options) {
        if (!(this instanceof Request)) {
          throw new TypeError('Please use the "new" operator, this DOM object constructor cannot be called as a function.');
        }
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
        this.signal = options.signal || this.signal || function() {
          if ("AbortController" in g2) {
            var ctrl = new AbortController();
            return ctrl.signal;
          }
        }();
        this.referrer = null;
        if ((this.method === "GET" || this.method === "HEAD") && body) {
          throw new TypeError("Body not allowed for GET or HEAD requests");
        }
        this._initBody(body);
        if (this.method === "GET" || this.method === "HEAD") {
          if (options.cache === "no-store" || options.cache === "no-cache") {
            var reParamSearch = /([?&])_=[^&]*/;
            if (reParamSearch.test(this.url)) {
              this.url = this.url.replace(reParamSearch, "$1_=" + (/* @__PURE__ */ new Date()).getTime());
            } else {
              var reQueryString = /\?/;
              this.url += (reQueryString.test(this.url) ? "&" : "?") + "_=" + (/* @__PURE__ */ new Date()).getTime();
            }
          }
        }
      }
      Request.prototype.clone = function() {
        return new Request(this, { body: this._bodyInit });
      };
      function decode2(body) {
        var form = new FormData();
        body.trim().split("&").forEach(function(bytes) {
          if (bytes) {
            var split = bytes.split("=");
            var name2 = split.shift().replace(/\+/g, " ");
            var value = split.join("=").replace(/\+/g, " ");
            form.append(decodeURIComponent(name2), decodeURIComponent(value));
          }
        });
        return form;
      }
      function parseHeaders(rawHeaders) {
        var headers = new Headers();
        var preProcessedHeaders = rawHeaders.replace(/\r?\n[\t ]+/g, " ");
        preProcessedHeaders.split("\r").map(function(header) {
          return header.indexOf("\n") === 0 ? header.substr(1, header.length) : header;
        }).forEach(function(line) {
          var parts = line.split(":");
          var key2 = parts.shift().trim();
          if (key2) {
            var value = parts.join(":").trim();
            try {
              headers.append(key2, value);
            } catch (error) {
              console.warn("Response " + error.message);
            }
          }
        });
        return headers;
      }
      Body.call(Request.prototype);
      function Response(bodyInit, options) {
        if (!(this instanceof Response)) {
          throw new TypeError('Please use the "new" operator, this DOM object constructor cannot be called as a function.');
        }
        if (!options) {
          options = {};
        }
        this.type = "default";
        this.status = options.status === void 0 ? 200 : options.status;
        if (this.status < 200 || this.status > 599) {
          throw new RangeError("Failed to construct 'Response': The status provided (0) is outside the range [200, 599].");
        }
        this.ok = this.status >= 200 && this.status < 300;
        this.statusText = options.statusText === void 0 ? "" : "" + options.statusText;
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
        var response = new Response(null, { status: 200, statusText: "" });
        response.ok = false;
        response.status = 0;
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
      exports2.DOMException = g2.DOMException;
      try {
        new exports2.DOMException();
      } catch (err) {
        exports2.DOMException = function(message, name2) {
          this.message = message;
          this.name = name2;
          var error = Error(message);
          this.stack = error.stack;
        };
        exports2.DOMException.prototype = Object.create(Error.prototype);
        exports2.DOMException.prototype.constructor = exports2.DOMException;
      }
      function fetch2(input, init3) {
        return new Promise(function(resolve, reject) {
          var request = new Request(input, init3);
          if (request.signal && request.signal.aborted) {
            return reject(new exports2.DOMException("Aborted", "AbortError"));
          }
          var xhr = new XMLHttpRequest();
          function abortXhr() {
            xhr.abort();
          }
          xhr.onload = function() {
            var options = {
              statusText: xhr.statusText,
              headers: parseHeaders(xhr.getAllResponseHeaders() || "")
            };
            if (request.url.indexOf("file://") === 0 && (xhr.status < 200 || xhr.status > 599)) {
              options.status = 200;
            } else {
              options.status = xhr.status;
            }
            options.url = "responseURL" in xhr ? xhr.responseURL : options.headers.get("X-Request-URL");
            var body = "response" in xhr ? xhr.response : xhr.responseText;
            setTimeout(function() {
              resolve(new Response(body, options));
            }, 0);
          };
          xhr.onerror = function() {
            setTimeout(function() {
              reject(new TypeError("Network request failed"));
            }, 0);
          };
          xhr.ontimeout = function() {
            setTimeout(function() {
              reject(new TypeError("Network request timed out"));
            }, 0);
          };
          xhr.onabort = function() {
            setTimeout(function() {
              reject(new exports2.DOMException("Aborted", "AbortError"));
            }, 0);
          };
          function fixUrl(url) {
            try {
              return url === "" && g2.location.href ? g2.location.href : url;
            } catch (e2) {
              return url;
            }
          }
          xhr.open(request.method, fixUrl(request.url), true);
          if (request.credentials === "include") {
            xhr.withCredentials = true;
          } else if (request.credentials === "omit") {
            xhr.withCredentials = false;
          }
          if ("responseType" in xhr) {
            if (support.blob) {
              xhr.responseType = "blob";
            } else if (support.arrayBuffer) {
              xhr.responseType = "arraybuffer";
            }
          }
          if (init3 && typeof init3.headers === "object" && !(init3.headers instanceof Headers || g2.Headers && init3.headers instanceof g2.Headers)) {
            var names = [];
            Object.getOwnPropertyNames(init3.headers).forEach(function(name2) {
              names.push(normalizeName(name2));
              xhr.setRequestHeader(name2, normalizeValue(init3.headers[name2]));
            });
            request.headers.forEach(function(value, name2) {
              if (names.indexOf(name2) === -1) {
                xhr.setRequestHeader(name2, value);
              }
            });
          } else {
            request.headers.forEach(function(value, name2) {
              xhr.setRequestHeader(name2, value);
            });
          }
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
      if (!g2.fetch) {
        g2.fetch = fetch2;
        g2.Headers = Headers;
        g2.Request = Request;
        g2.Response = Response;
      }
      exports2.Headers = Headers;
      exports2.Request = Request;
      exports2.Response = Response;
      exports2.fetch = fetch2;
      Object.defineProperty(exports2, "__esModule", { value: true });
      return exports2;
    })({});
  })(__globalThis__);
  __globalThis__.fetch.ponyfill = true;
  delete __globalThis__.fetch.polyfill;
  var ctx = __global__.fetch ? __global__ : __globalThis__;
  exports = ctx.fetch;
  exports.default = ctx.fetch;
  exports.fetch = ctx.fetch;
  exports.Headers = ctx.Headers;
  exports.Request = ctx.Request;
  exports.Response = ctx.Response;
  module.exports = exports;
})(browserPonyfill, browserPonyfill.exports);
var browserPonyfillExports = browserPonyfill.exports;
const o$1 = /* @__PURE__ */ getDefaultExportFromCjs(browserPonyfillExports);
var P$1 = Object.defineProperty, w$2 = Object.defineProperties, E$1 = Object.getOwnPropertyDescriptors, c = Object.getOwnPropertySymbols, L$2 = Object.prototype.hasOwnProperty, O$2 = Object.prototype.propertyIsEnumerable, l = (r2, t, e2) => t in r2 ? P$1(r2, t, { enumerable: true, configurable: true, writable: true, value: e2 }) : r2[t] = e2, p$1 = (r2, t) => {
  for (var e2 in t) L$2.call(t, e2) && l(r2, e2, t[e2]);
  if (c) for (var e2 of c(t)) O$2.call(t, e2) && l(r2, e2, t[e2]);
  return r2;
}, v$2 = (r2, t) => w$2(r2, E$1(t));
const j$2 = { Accept: "application/json", "Content-Type": "application/json" }, T$2 = "POST", d3 = { headers: j$2, method: T$2 }, g$2 = 10;
let f$1 = class f3 {
  constructor(t, e2 = false) {
    if (this.url = t, this.disableProviderPing = e2, this.events = new eventsExports.EventEmitter(), this.isAvailable = false, this.registering = false, !isHttpUrl(t)) throw new Error(`Provided URL is not compatible with HTTP connection: ${t}`);
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
    if (!this.isAvailable) throw new Error("Connection already closed");
    this.onClose();
  }
  async send(t) {
    this.isAvailable || await this.register();
    try {
      const e2 = safeJsonStringify(t), s2 = await (await o$1(this.url, v$2(p$1({}, d3), { body: e2 }))).json();
      this.onPayload({ data: s2 });
    } catch (e2) {
      this.onError(t.id, e2);
    }
  }
  async register(t = this.url) {
    if (!isHttpUrl(t)) throw new Error(`Provided URL is not compatible with HTTP connection: ${t}`);
    if (this.registering) {
      const e2 = this.events.getMaxListeners();
      return (this.events.listenerCount("register_error") >= e2 || this.events.listenerCount("open") >= e2) && this.events.setMaxListeners(e2 + 1), new Promise((s2, i3) => {
        this.events.once("register_error", (n3) => {
          this.resetMaxListeners(), i3(n3);
        }), this.events.once("open", () => {
          if (this.resetMaxListeners(), typeof this.isAvailable > "u") return i3(new Error("HTTP connection is missing or invalid"));
          s2();
        });
      });
    }
    this.url = t, this.registering = true;
    try {
      if (!this.disableProviderPing) {
        const e2 = safeJsonStringify({ id: 1, jsonrpc: "2.0", method: "test", params: [] });
        await o$1(t, v$2(p$1({}, d3), { body: e2 }));
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
    if (typeof t.data > "u") return;
    const e2 = typeof t.data == "string" ? safeJsonParse(t.data) : t.data;
    this.events.emit("payload", e2);
  }
  onError(t, e2) {
    const s2 = this.parseError(e2), i3 = s2.message || s2.toString(), n3 = formatJsonRpcError(t, i3);
    this.events.emit("payload", n3);
  }
  parseError(t, e2 = this.url) {
    return parseConnectionError(t, e2, "HTTP");
  }
  resetMaxListeners() {
    this.events.getMaxListeners() > g$2 && this.events.setMaxListeners(g$2);
  }
};
const be = "error", _t = "wss://relay.walletconnect.org", Ct = "wc", It = "universal_provider", $e = `${Ct}@2:${It}:`, ye = "https://rpc.walletconnect.org/v1/", w$1 = "generic", Ot = `${ye}bundler`, f4 = { DEFAULT_CHAIN_CHANGED: "default_chain_changed" };
var G = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function At() {
  this.__data__ = [], this.size = 0;
}
var jt = At;
function Ht(r2, e2) {
  return r2 === e2 || r2 !== r2 && e2 !== e2;
}
var z$1 = Ht, Et = z$1;
function St(r2, e2) {
  for (var t = r2.length; t--; ) if (Et(r2[t][0], e2)) return t;
  return -1;
}
var k = St, Nt = k, Tt = Array.prototype, Dt = Tt.splice;
function qt(r2) {
  var e2 = this.__data__, t = Nt(e2, r2);
  if (t < 0) return false;
  var i3 = e2.length - 1;
  return t == i3 ? e2.pop() : Dt.call(e2, t, 1), --this.size, true;
}
var Rt2 = qt, xt = k;
function Lt(r2) {
  var e2 = this.__data__, t = xt(e2, r2);
  return t < 0 ? void 0 : e2[t][1];
}
var Ut = Lt, Ft = k;
function Mt(r2) {
  return Ft(this.__data__, r2) > -1;
}
var Gt = Mt, zt = k;
function kt(r2, e2) {
  var t = this.__data__, i3 = zt(t, r2);
  return i3 < 0 ? (++this.size, t.push([r2, e2])) : t[i3][1] = e2, this;
}
var Bt2 = kt, Vt = jt, Jt = Rt2, Kt = Ut, Wt = Gt, Xt = Bt2;
function _$1(r2) {
  var e2 = -1, t = r2 == null ? 0 : r2.length;
  for (this.clear(); ++e2 < t; ) {
    var i3 = r2[e2];
    this.set(i3[0], i3[1]);
  }
}
_$1.prototype.clear = Vt, _$1.prototype.delete = Jt, _$1.prototype.get = Kt, _$1.prototype.has = Wt, _$1.prototype.set = Xt;
var B2 = _$1, Yt = B2;
function Zt() {
  this.__data__ = new Yt(), this.size = 0;
}
var Qt = Zt;
function er2(r2) {
  var e2 = this.__data__, t = e2.delete(r2);
  return this.size = e2.size, t;
}
var tr2 = er2;
function rr(r2) {
  return this.__data__.get(r2);
}
var ir2 = rr;
function sr2(r2) {
  return this.__data__.has(r2);
}
var nr = sr2, ar = typeof G == "object" && G && G.Object === Object && G, we = ar, or = we, cr = typeof self == "object" && self && self.Object === Object && self, hr = or || cr || Function("return this")(), C$1 = hr, pr = C$1, ur = pr.Symbol, _e2 = ur, Ce = _e2, Ie = Object.prototype, lr = Ie.hasOwnProperty, dr = Ie.toString, F = Ce ? Ce.toStringTag : void 0;
function vr(r2) {
  var e2 = lr.call(r2, F), t = r2[F];
  try {
    r2[F] = void 0;
    var i3 = true;
  } catch {
  }
  var s2 = dr.call(r2);
  return i3 && (e2 ? r2[F] = t : delete r2[F]), s2;
}
var fr = vr, mr = Object.prototype, gr = mr.toString;
function Pr(r2) {
  return gr.call(r2);
}
var br = Pr, Oe = _e2, $r = fr, yr = br, wr = "[object Null]", _r = "[object Undefined]", Ae = Oe ? Oe.toStringTag : void 0;
function Cr(r2) {
  return r2 == null ? r2 === void 0 ? _r : wr : Ae && Ae in Object(r2) ? $r(r2) : yr(r2);
}
var V2 = Cr;
function Ir(r2) {
  var e2 = typeof r2;
  return r2 != null && (e2 == "object" || e2 == "function");
}
var $$1 = Ir, Or2 = V2, Ar = $$1, jr = "[object AsyncFunction]", Hr2 = "[object Function]", Er = "[object GeneratorFunction]", Sr = "[object Proxy]";
function Nr(r2) {
  if (!Ar(r2)) return false;
  var e2 = Or2(r2);
  return e2 == Hr2 || e2 == Er || e2 == jr || e2 == Sr;
}
var te = Nr, Tr = C$1, Dr = Tr["__core-js_shared__"], qr = Dr, re = qr, je = function() {
  var r2 = /[^.]+$/.exec(re && re.keys && re.keys.IE_PROTO || "");
  return r2 ? "Symbol(src)_1." + r2 : "";
}();
function Rr(r2) {
  return !!je && je in r2;
}
var xr = Rr, Lr2 = Function.prototype, Ur = Lr2.toString;
function Fr(r2) {
  if (r2 != null) {
    try {
      return Ur.call(r2);
    } catch {
    }
    try {
      return r2 + "";
    } catch {
    }
  }
  return "";
}
var Mr = Fr, Gr = te, zr2 = xr, kr = $$1, Br = Mr, Vr = /[\\^$.*+?()[\]{}|]/g, Jr = /^\[object .+?Constructor\]$/, Kr = Function.prototype, Wr = Object.prototype, Xr = Kr.toString, Yr = Wr.hasOwnProperty, Zr = RegExp("^" + Xr.call(Yr).replace(Vr, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");
function Qr(r2) {
  if (!kr(r2) || zr2(r2)) return false;
  var e2 = Gr(r2) ? Zr : Jr;
  return e2.test(Br(r2));
}
var ei = Qr;
function ti(r2, e2) {
  return r2 == null ? void 0 : r2[e2];
}
var ri = ti, ii = ei, si = ri;
function ni(r2, e2) {
  var t = si(r2, e2);
  return ii(t) ? t : void 0;
}
var ie = ni, ai = ie, oi = C$1, ci = ai(oi, "Map"), He = ci, hi = ie, pi = hi(Object, "create"), J2 = pi, Ee = J2;
function ui() {
  this.__data__ = Ee ? Ee(null) : {}, this.size = 0;
}
var li = ui;
function di(r2) {
  var e2 = this.has(r2) && delete this.__data__[r2];
  return this.size -= e2 ? 1 : 0, e2;
}
var vi = di, fi2 = J2, mi = "__lodash_hash_undefined__", gi = Object.prototype, Pi2 = gi.hasOwnProperty;
function bi2(r2) {
  var e2 = this.__data__;
  if (fi2) {
    var t = e2[r2];
    return t === mi ? void 0 : t;
  }
  return Pi2.call(e2, r2) ? e2[r2] : void 0;
}
var $i2 = bi2, yi2 = J2, wi2 = Object.prototype, _i = wi2.hasOwnProperty;
function Ci2(r2) {
  var e2 = this.__data__;
  return yi2 ? e2[r2] !== void 0 : _i.call(e2, r2);
}
var Ii = Ci2, Oi = J2, Ai2 = "__lodash_hash_undefined__";
function ji(r2, e2) {
  var t = this.__data__;
  return this.size += this.has(r2) ? 0 : 1, t[r2] = Oi && e2 === void 0 ? Ai2 : e2, this;
}
var Hi = ji, Ei = li, Si2 = vi, Ni = $i2, Ti = Ii, Di2 = Hi;
function I2(r2) {
  var e2 = -1, t = r2 == null ? 0 : r2.length;
  for (this.clear(); ++e2 < t; ) {
    var i3 = r2[e2];
    this.set(i3[0], i3[1]);
  }
}
I2.prototype.clear = Ei, I2.prototype.delete = Si2, I2.prototype.get = Ni, I2.prototype.has = Ti, I2.prototype.set = Di2;
var qi = I2, Se2 = qi, Ri2 = B2, xi2 = He;
function Li() {
  this.size = 0, this.__data__ = { hash: new Se2(), map: new (xi2 || Ri2)(), string: new Se2() };
}
var Ui = Li;
function Fi(r2) {
  var e2 = typeof r2;
  return e2 == "string" || e2 == "number" || e2 == "symbol" || e2 == "boolean" ? r2 !== "__proto__" : r2 === null;
}
var Mi = Fi, Gi = Mi;
function zi(r2, e2) {
  var t = r2.__data__;
  return Gi(e2) ? t[typeof e2 == "string" ? "string" : "hash"] : t.map;
}
var K2 = zi, ki = K2;
function Bi(r2) {
  var e2 = ki(this, r2).delete(r2);
  return this.size -= e2 ? 1 : 0, e2;
}
var Vi = Bi, Ji = K2;
function Ki(r2) {
  return Ji(this, r2).get(r2);
}
var Wi = Ki, Xi = K2;
function Yi(r2) {
  return Xi(this, r2).has(r2);
}
var Zi2 = Yi, Qi = K2;
function es(r2, e2) {
  var t = Qi(this, r2), i3 = t.size;
  return t.set(r2, e2), this.size += t.size == i3 ? 0 : 1, this;
}
var ts = es, rs = Ui, is = Vi, ss = Wi, ns = Zi2, as = ts;
function O$1(r2) {
  var e2 = -1, t = r2 == null ? 0 : r2.length;
  for (this.clear(); ++e2 < t; ) {
    var i3 = r2[e2];
    this.set(i3[0], i3[1]);
  }
}
O$1.prototype.clear = rs, O$1.prototype.delete = is, O$1.prototype.get = ss, O$1.prototype.has = ns, O$1.prototype.set = as;
var os = O$1, cs = B2, hs = He, ps = os, us = 200;
function ls(r2, e2) {
  var t = this.__data__;
  if (t instanceof cs) {
    var i3 = t.__data__;
    if (!hs || i3.length < us - 1) return i3.push([r2, e2]), this.size = ++t.size, this;
    t = this.__data__ = new ps(i3);
  }
  return t.set(r2, e2), this.size = t.size, this;
}
var ds = ls, vs = B2, fs = Qt, ms = tr2, gs = ir2, Ps2 = nr, bs2 = ds;
function A(r2) {
  var e2 = this.__data__ = new vs(r2);
  this.size = e2.size;
}
A.prototype.clear = fs, A.prototype.delete = ms, A.prototype.get = gs, A.prototype.has = Ps2, A.prototype.set = bs2;
var $s = A, ys = ie, ws = function() {
  try {
    var r2 = ys(Object, "defineProperty");
    return r2({}, "", {}), r2;
  } catch {
  }
}(), Ne = ws, Te = Ne;
function _s(r2, e2, t) {
  e2 == "__proto__" && Te ? Te(r2, e2, { configurable: true, enumerable: true, value: t, writable: true }) : r2[e2] = t;
}
var se = _s, Cs = se, Is = z$1;
function Os2(r2, e2, t) {
  (t !== void 0 && !Is(r2[e2], t) || t === void 0 && !(e2 in r2)) && Cs(r2, e2, t);
}
var De = Os2;
function As2(r2) {
  return function(e2, t, i3) {
    for (var s2 = -1, n3 = Object(e2), a2 = i3(e2), o3 = a2.length; o3--; ) {
      var c2 = a2[r2 ? o3 : ++s2];
      if (t(n3[c2], c2, n3) === false) break;
    }
    return e2;
  };
}
var js2 = As2, Hs = js2, Es2 = Hs(), Ss = Es2, ne = { exports: {} };
(function(r2, e2) {
  var t = C$1, i3 = e2 && !e2.nodeType && e2, s2 = i3 && true && r2 && !r2.nodeType && r2, n3 = s2 && s2.exports === i3, a2 = n3 ? t.Buffer : void 0, o3 = a2 ? a2.allocUnsafe : void 0;
  function c2(u2, l2) {
    if (l2) return u2.slice();
    var P3 = u2.length, d4 = o3 ? o3(P3) : new u2.constructor(P3);
    return u2.copy(d4), d4;
  }
  r2.exports = c2;
})(ne, ne.exports);
var Ns2 = C$1, Ts2 = Ns2.Uint8Array, Ds = Ts2, qe = Ds;
function qs(r2) {
  var e2 = new r2.constructor(r2.byteLength);
  return new qe(e2).set(new qe(r2)), e2;
}
var Rs = qs, xs = Rs;
function Ls2(r2, e2) {
  var t = e2 ? xs(r2.buffer) : r2.buffer;
  return new r2.constructor(t, r2.byteOffset, r2.length);
}
var Us = Ls2;
function Fs(r2, e2) {
  var t = -1, i3 = r2.length;
  for (e2 || (e2 = Array(i3)); ++t < i3; ) e2[t] = r2[t];
  return e2;
}
var Ms = Fs, Gs = $$1, Re = Object.create, zs = /* @__PURE__ */ function() {
  function r2() {
  }
  return function(e2) {
    if (!Gs(e2)) return {};
    if (Re) return Re(e2);
    r2.prototype = e2;
    var t = new r2();
    return r2.prototype = void 0, t;
  };
}(), ks = zs;
function Bs(r2, e2) {
  return function(t) {
    return r2(e2(t));
  };
}
var Vs2 = Bs, Js = Vs2, Ks = Js(Object.getPrototypeOf, Object), xe = Ks, Ws = Object.prototype;
function Xs(r2) {
  var e2 = r2 && r2.constructor, t = typeof e2 == "function" && e2.prototype || Ws;
  return r2 === t;
}
var Le = Xs, Ys = ks, Zs = xe, Qs = Le;
function en(r2) {
  return typeof r2.constructor == "function" && !Qs(r2) ? Ys(Zs(r2)) : {};
}
var tn = en;
function rn(r2) {
  return r2 != null && typeof r2 == "object";
}
var M$1 = rn, sn = V2, nn = M$1, an = "[object Arguments]";
function on(r2) {
  return nn(r2) && sn(r2) == an;
}
var cn2 = on, Ue = cn2, hn2 = M$1, Fe = Object.prototype, pn = Fe.hasOwnProperty, un = Fe.propertyIsEnumerable, ln = Ue(/* @__PURE__ */ function() {
  return arguments;
}()) ? Ue : function(r2) {
  return hn2(r2) && pn.call(r2, "callee") && !un.call(r2, "callee");
}, Me = ln, dn = Array.isArray, Ge = dn, vn = 9007199254740991;
function fn(r2) {
  return typeof r2 == "number" && r2 > -1 && r2 % 1 == 0 && r2 <= vn;
}
var ze = fn, mn = te, gn = ze;
function Pn(r2) {
  return r2 != null && gn(r2.length) && !mn(r2);
}
var ae = Pn, bn = ae, $n2 = M$1;
function yn(r2) {
  return $n2(r2) && bn(r2);
}
var wn = yn, W = { exports: {} };
function _n() {
  return false;
}
var Cn = _n;
(function(r2, e2) {
  var t = C$1, i3 = Cn, s2 = e2 && !e2.nodeType && e2, n3 = s2 && true && r2 && !r2.nodeType && r2, a2 = n3 && n3.exports === s2, o3 = a2 ? t.Buffer : void 0, c2 = o3 ? o3.isBuffer : void 0, u2 = c2 || i3;
  r2.exports = u2;
})(W, W.exports);
var In = V2, On2 = xe, An2 = M$1, jn = "[object Object]", Hn = Function.prototype, En = Object.prototype, ke = Hn.toString, Sn = En.hasOwnProperty, Nn = ke.call(Object);
function Tn(r2) {
  if (!An2(r2) || In(r2) != jn) return false;
  var e2 = On2(r2);
  if (e2 === null) return true;
  var t = Sn.call(e2, "constructor") && e2.constructor;
  return typeof t == "function" && t instanceof t && ke.call(t) == Nn;
}
var Dn = Tn, qn2 = V2, Rn = ze, xn2 = M$1, Ln = "[object Arguments]", Un = "[object Array]", Fn = "[object Boolean]", Mn = "[object Date]", Gn = "[object Error]", zn = "[object Function]", kn = "[object Map]", Bn = "[object Number]", Vn = "[object Object]", Jn2 = "[object RegExp]", Kn = "[object Set]", Wn = "[object String]", Xn = "[object WeakMap]", Yn = "[object ArrayBuffer]", Zn = "[object DataView]", Qn = "[object Float32Array]", ea = "[object Float64Array]", ta = "[object Int8Array]", ra = "[object Int16Array]", ia = "[object Int32Array]", sa = "[object Uint8Array]", na = "[object Uint8ClampedArray]", aa = "[object Uint16Array]", oa = "[object Uint32Array]", p = {};
p[Qn] = p[ea] = p[ta] = p[ra] = p[ia] = p[sa] = p[na] = p[aa] = p[oa] = true, p[Ln] = p[Un] = p[Yn] = p[Fn] = p[Zn] = p[Mn] = p[Gn] = p[zn] = p[kn] = p[Bn] = p[Vn] = p[Jn2] = p[Kn] = p[Wn] = p[Xn] = false;
function ca(r2) {
  return xn2(r2) && Rn(r2.length) && !!p[qn2(r2)];
}
var ha = ca;
function pa(r2) {
  return function(e2) {
    return r2(e2);
  };
}
var ua = pa, oe = { exports: {} };
(function(r2, e2) {
  var t = we, i3 = e2 && !e2.nodeType && e2, s2 = i3 && true && r2 && !r2.nodeType && r2, n3 = s2 && s2.exports === i3, a2 = n3 && t.process, o3 = function() {
    try {
      var c2 = s2 && s2.require && s2.require("util").types;
      return c2 || a2 && a2.binding && a2.binding("util");
    } catch {
    }
  }();
  r2.exports = o3;
})(oe, oe.exports);
var la = ha, da = ua, Be = oe.exports, Ve = Be && Be.isTypedArray, va = Ve ? da(Ve) : la, Je = va;
function fa(r2, e2) {
  if (!(e2 === "constructor" && typeof r2[e2] == "function") && e2 != "__proto__") return r2[e2];
}
var Ke = fa, ma = se, ga = z$1, Pa = Object.prototype, ba = Pa.hasOwnProperty;
function $a(r2, e2, t) {
  var i3 = r2[e2];
  (!(ba.call(r2, e2) && ga(i3, t)) || t === void 0 && !(e2 in r2)) && ma(r2, e2, t);
}
var ya = $a, wa = ya, _a = se;
function Ca(r2, e2, t, i3) {
  var s2 = !t;
  t || (t = {});
  for (var n3 = -1, a2 = e2.length; ++n3 < a2; ) {
    var o3 = e2[n3], c2 = i3 ? i3(t[o3], r2[o3], o3, t, r2) : void 0;
    c2 === void 0 && (c2 = r2[o3]), s2 ? _a(t, o3, c2) : wa(t, o3, c2);
  }
  return t;
}
var Ia = Ca;
function Oa(r2, e2) {
  for (var t = -1, i3 = Array(r2); ++t < r2; ) i3[t] = e2(t);
  return i3;
}
var Aa = Oa, ja = 9007199254740991, Ha = /^(?:0|[1-9]\d*)$/;
function Ea(r2, e2) {
  var t = typeof r2;
  return e2 = e2 ?? ja, !!e2 && (t == "number" || t != "symbol" && Ha.test(r2)) && r2 > -1 && r2 % 1 == 0 && r2 < e2;
}
var We = Ea, Sa = Aa, Na = Me, Ta = Ge, Da = W.exports, qa = We, Ra = Je, xa = Object.prototype, La = xa.hasOwnProperty;
function Ua(r2, e2) {
  var t = Ta(r2), i3 = !t && Na(r2), s2 = !t && !i3 && Da(r2), n3 = !t && !i3 && !s2 && Ra(r2), a2 = t || i3 || s2 || n3, o3 = a2 ? Sa(r2.length, String) : [], c2 = o3.length;
  for (var u2 in r2) (e2 || La.call(r2, u2)) && !(a2 && (u2 == "length" || s2 && (u2 == "offset" || u2 == "parent") || n3 && (u2 == "buffer" || u2 == "byteLength" || u2 == "byteOffset") || qa(u2, c2))) && o3.push(u2);
  return o3;
}
var Fa = Ua;
function Ma(r2) {
  var e2 = [];
  if (r2 != null) for (var t in Object(r2)) e2.push(t);
  return e2;
}
var Ga = Ma, za = $$1, ka = Le, Ba = Ga, Va = Object.prototype, Ja = Va.hasOwnProperty;
function Ka(r2) {
  if (!za(r2)) return Ba(r2);
  var e2 = ka(r2), t = [];
  for (var i3 in r2) i3 == "constructor" && (e2 || !Ja.call(r2, i3)) || t.push(i3);
  return t;
}
var Wa = Ka, Xa = Fa, Ya = Wa, Za = ae;
function Qa(r2) {
  return Za(r2) ? Xa(r2, true) : Ya(r2);
}
var Xe = Qa, eo = Ia, to = Xe;
function ro(r2) {
  return eo(r2, to(r2));
}
var io = ro, Ye = De, so = ne.exports, no = Us, ao = Ms, oo = tn, Ze = Me, Qe = Ge, co = wn, ho = W.exports, po = te, uo = $$1, lo = Dn, vo = Je, et = Ke, fo = io;
function mo(r2, e2, t, i3, s2, n3, a2) {
  var o3 = et(r2, t), c2 = et(e2, t), u2 = a2.get(c2);
  if (u2) {
    Ye(r2, t, u2);
    return;
  }
  var l2 = n3 ? n3(o3, c2, t + "", r2, e2, a2) : void 0, P3 = l2 === void 0;
  if (P3) {
    var d4 = Qe(c2), Q2 = !d4 && ho(c2), ve2 = !d4 && !Q2 && vo(c2);
    l2 = c2, d4 || Q2 || ve2 ? Qe(o3) ? l2 = o3 : co(o3) ? l2 = ao(o3) : Q2 ? (P3 = false, l2 = so(c2, true)) : ve2 ? (P3 = false, l2 = no(c2, true)) : l2 = [] : lo(c2) || Ze(c2) ? (l2 = o3, Ze(o3) ? l2 = fo(o3) : (!uo(o3) || po(o3)) && (l2 = oo(c2))) : P3 = false;
  }
  P3 && (a2.set(c2, l2), s2(l2, c2, i3, n3, a2), a2.delete(c2)), Ye(r2, t, l2);
}
var go = mo, Po = $s, bo = De, $o = Ss, yo = go, wo = $$1, _o = Xe, Co = Ke;
function tt(r2, e2, t, i3, s2) {
  r2 !== e2 && $o(e2, function(n3, a2) {
    if (s2 || (s2 = new Po()), wo(n3)) yo(r2, e2, a2, t, tt, i3, s2);
    else {
      var o3 = i3 ? i3(Co(r2, a2), n3, a2 + "", r2, e2, s2) : void 0;
      o3 === void 0 && (o3 = n3), bo(r2, a2, o3);
    }
  }, _o);
}
var Io = tt;
function Oo(r2) {
  return r2;
}
var rt = Oo;
function Ao(r2, e2, t) {
  switch (t.length) {
    case 0:
      return r2.call(e2);
    case 1:
      return r2.call(e2, t[0]);
    case 2:
      return r2.call(e2, t[0], t[1]);
    case 3:
      return r2.call(e2, t[0], t[1], t[2]);
  }
  return r2.apply(e2, t);
}
var jo2 = Ao, Ho = jo2, it2 = Math.max;
function Eo(r2, e2, t) {
  return e2 = it2(e2 === void 0 ? r2.length - 1 : e2, 0), function() {
    for (var i3 = arguments, s2 = -1, n3 = it2(i3.length - e2, 0), a2 = Array(n3); ++s2 < n3; ) a2[s2] = i3[e2 + s2];
    s2 = -1;
    for (var o3 = Array(e2 + 1); ++s2 < e2; ) o3[s2] = i3[s2];
    return o3[e2] = t(a2), Ho(r2, this, o3);
  };
}
var So = Eo;
function No(r2) {
  return function() {
    return r2;
  };
}
var To = No, Do = To, st = Ne, qo = rt, Ro2 = st ? function(r2, e2) {
  return st(r2, "toString", { configurable: true, enumerable: false, value: Do(e2), writable: true });
} : qo, xo = Ro2, Lo = 800, Uo = 16, Fo = Date.now;
function Mo(r2) {
  var e2 = 0, t = 0;
  return function() {
    var i3 = Fo(), s2 = Uo - (i3 - t);
    if (t = i3, s2 > 0) {
      if (++e2 >= Lo) return arguments[0];
    } else e2 = 0;
    return r2.apply(void 0, arguments);
  };
}
var Go = Mo, zo = xo, ko = Go, Bo = ko(zo), Vo = Bo, Jo = rt, Ko = So, Wo = Vo;
function Xo(r2, e2) {
  return Wo(Ko(r2, e2, Jo), r2 + "");
}
var Yo = Xo, Zo = z$1, Qo = ae, ec = We, tc = $$1;
function rc(r2, e2, t) {
  if (!tc(t)) return false;
  var i3 = typeof e2;
  return (i3 == "number" ? Qo(t) && ec(e2, t.length) : i3 == "string" && e2 in t) ? Zo(t[e2], r2) : false;
}
var ic = rc, sc = Yo, nc = ic;
function ac(r2) {
  return sc(function(e2, t) {
    var i3 = -1, s2 = t.length, n3 = s2 > 1 ? t[s2 - 1] : void 0, a2 = s2 > 2 ? t[2] : void 0;
    for (n3 = r2.length > 3 && typeof n3 == "function" ? (s2--, n3) : void 0, a2 && nc(t[0], t[1], a2) && (n3 = s2 < 3 ? void 0 : n3, s2 = 1), e2 = Object(e2); ++i3 < s2; ) {
      var o3 = t[i3];
      o3 && r2(e2, o3, i3, n3);
    }
    return e2;
  });
}
var oc = ac, cc = Io, hc = oc, pc = hc(function(r2, e2, t) {
  cc(r2, e2, t);
}), uc = pc, lc = Object.defineProperty, dc = Object.defineProperties, vc = Object.getOwnPropertyDescriptors, nt = Object.getOwnPropertySymbols, fc = Object.prototype.hasOwnProperty, mc = Object.prototype.propertyIsEnumerable, at = (r2, e2, t) => e2 in r2 ? lc(r2, e2, { enumerable: true, configurable: true, writable: true, value: t }) : r2[e2] = t, X = (r2, e2) => {
  for (var t in e2 || (e2 = {})) fc.call(e2, t) && at(r2, t, e2[t]);
  if (nt) for (var t of nt(e2)) mc.call(e2, t) && at(r2, t, e2[t]);
  return r2;
}, gc = (r2, e2) => dc(r2, vc(e2));
function v$1(r2, e2, t) {
  var i3;
  const s2 = Ye$1(r2);
  return ((i3 = e2.rpcMap) == null ? void 0 : i3[s2.reference]) || `${ye}?chainId=${s2.namespace}:${s2.reference}&projectId=${t}`;
}
function y$1(r2) {
  return r2.includes(":") ? r2.split(":")[1] : r2;
}
function ot(r2) {
  return r2.map((e2) => `${e2.split(":")[0]}:${e2.split(":")[1]}`);
}
function Pc(r2, e2) {
  const t = Object.keys(e2.namespaces).filter((s2) => s2.includes(r2));
  if (!t.length) return [];
  const i3 = [];
  return t.forEach((s2) => {
    const n3 = e2.namespaces[s2].accounts;
    i3.push(...n3);
  }), i3;
}
function ce(r2 = {}, e2 = {}) {
  const t = ct(r2), i3 = ct(e2);
  return uc(t, i3);
}
function ct(r2) {
  var e2, t, i3, s2;
  const n3 = {};
  if (!qe$2(r2)) return n3;
  for (const [a2, o3] of Object.entries(r2)) {
    const c2 = Tt$2(a2) ? [a2] : o3.chains, u2 = o3.methods || [], l2 = o3.events || [], P3 = o3.rpcMap || {}, d4 = pr$2(a2);
    n3[d4] = gc(X(X({}, n3[d4]), o3), { chains: Q$2(c2, (e2 = n3[d4]) == null ? void 0 : e2.chains), methods: Q$2(u2, (t = n3[d4]) == null ? void 0 : t.methods), events: Q$2(l2, (i3 = n3[d4]) == null ? void 0 : i3.events), rpcMap: X(X({}, P3), (s2 = n3[d4]) == null ? void 0 : s2.rpcMap) });
  }
  return n3;
}
function bc(r2) {
  return r2.includes(":") ? r2.split(":")[2] : r2;
}
function ht(r2) {
  const e2 = {};
  for (const [t, i3] of Object.entries(r2)) {
    const s2 = i3.methods || [], n3 = i3.events || [], a2 = i3.accounts || [], o3 = Tt$2(t) ? [t] : i3.chains ? i3.chains : ot(i3.accounts);
    e2[t] = { chains: o3, methods: s2, events: n3, accounts: a2 };
  }
  return e2;
}
function he(r2) {
  return typeof r2 == "number" ? r2 : r2.includes("0x") ? parseInt(r2, 16) : (r2 = r2.includes(":") ? r2.split(":")[1] : r2, isNaN(Number(r2)) ? r2 : Number(r2));
}
const pt = {}, h3 = (r2) => pt[r2], pe = (r2, e2) => {
  pt[r2] = e2;
};
var $c = Object.defineProperty, yc = (r2, e2, t) => e2 in r2 ? $c(r2, e2, { enumerable: true, configurable: true, writable: true, value: t }) : r2[e2] = t, j$1 = (r2, e2, t) => yc(r2, typeof e2 != "symbol" ? e2 + "" : e2, t);
class wc {
  constructor(e2) {
    j$1(this, "name", "polkadot"), j$1(this, "client"), j$1(this, "httpProviders"), j$1(this, "events"), j$1(this, "namespace"), j$1(this, "chainId"), this.namespace = e2.namespace, this.events = h3("events"), this.client = h3("client"), this.chainId = this.getDefaultChain(), this.httpProviders = this.createHttpProviders();
  }
  updateNamespace(e2) {
    this.namespace = Object.assign(this.namespace, e2);
  }
  requestAccounts() {
    return this.getAccounts();
  }
  getDefaultChain() {
    if (this.chainId) return this.chainId;
    if (this.namespace.defaultChain) return this.namespace.defaultChain;
    const e2 = this.namespace.chains[0];
    if (!e2) throw new Error("ChainId not found");
    return e2.split(":")[1];
  }
  request(e2) {
    return this.namespace.methods.includes(e2.request.method) ? this.client.request(e2) : this.getHttpProvider().request(e2.request);
  }
  setDefaultChain(e2, t) {
    this.httpProviders[e2] || this.setHttpProvider(e2, t), this.chainId = e2, this.events.emit(f4.DEFAULT_CHAIN_CHANGED, `${this.name}:${e2}`);
  }
  getAccounts() {
    const e2 = this.namespace.accounts;
    return e2 ? e2.filter((t) => t.split(":")[1] === this.chainId.toString()).map((t) => t.split(":")[2]) || [] : [];
  }
  createHttpProviders() {
    const e2 = {};
    return this.namespace.chains.forEach((t) => {
      var i3;
      const s2 = y$1(t);
      e2[s2] = this.createHttpProvider(s2, (i3 = this.namespace.rpcMap) == null ? void 0 : i3[t]);
    }), e2;
  }
  getHttpProvider() {
    const e2 = `${this.name}:${this.chainId}`, t = this.httpProviders[e2];
    if (typeof t > "u") throw new Error(`JSON-RPC provider for ${e2} not found`);
    return t;
  }
  setHttpProvider(e2, t) {
    const i3 = this.createHttpProvider(e2, t);
    i3 && (this.httpProviders[e2] = i3);
  }
  createHttpProvider(e2, t) {
    const i3 = t || v$1(e2, this.namespace, this.client.core.projectId);
    if (!i3) throw new Error(`No RPC url provided for chainId: ${e2}`);
    return new o$2(new f$1(i3, h3("disableProviderPing")));
  }
}
var _c = Object.defineProperty, Cc = Object.defineProperties, Ic = Object.getOwnPropertyDescriptors, ut = Object.getOwnPropertySymbols, Oc = Object.prototype.hasOwnProperty, Ac = Object.prototype.propertyIsEnumerable, ue = (r2, e2, t) => e2 in r2 ? _c(r2, e2, { enumerable: true, configurable: true, writable: true, value: t }) : r2[e2] = t, lt = (r2, e2) => {
  for (var t in e2 || (e2 = {})) Oc.call(e2, t) && ue(r2, t, e2[t]);
  if (ut) for (var t of ut(e2)) Ac.call(e2, t) && ue(r2, t, e2[t]);
  return r2;
}, dt = (r2, e2) => Cc(r2, Ic(e2)), H = (r2, e2, t) => ue(r2, typeof e2 != "symbol" ? e2 + "" : e2, t);
class jc {
  constructor(e2) {
    H(this, "name", "eip155"), H(this, "client"), H(this, "chainId"), H(this, "namespace"), H(this, "httpProviders"), H(this, "events"), this.namespace = e2.namespace, this.events = h3("events"), this.client = h3("client"), this.httpProviders = this.createHttpProviders(), this.chainId = parseInt(this.getDefaultChain());
  }
  async request(e2) {
    switch (e2.request.method) {
      case "eth_requestAccounts":
        return this.getAccounts();
      case "eth_accounts":
        return this.getAccounts();
      case "wallet_switchEthereumChain":
        return await this.handleSwitchChain(e2);
      case "eth_chainId":
        return parseInt(this.getDefaultChain());
      case "wallet_getCapabilities":
        return await this.getCapabilities(e2);
      case "wallet_getCallsStatus":
        return await this.getCallStatus(e2);
    }
    return this.namespace.methods.includes(e2.request.method) ? await this.client.request(e2) : this.getHttpProvider().request(e2.request);
  }
  updateNamespace(e2) {
    this.namespace = Object.assign(this.namespace, e2);
  }
  setDefaultChain(e2, t) {
    this.httpProviders[e2] || this.setHttpProvider(parseInt(e2), t), this.chainId = parseInt(e2), this.events.emit(f4.DEFAULT_CHAIN_CHANGED, `${this.name}:${e2}`);
  }
  requestAccounts() {
    return this.getAccounts();
  }
  getDefaultChain() {
    if (this.chainId) return this.chainId.toString();
    if (this.namespace.defaultChain) return this.namespace.defaultChain;
    const e2 = this.namespace.chains[0];
    if (!e2) throw new Error("ChainId not found");
    return e2.split(":")[1];
  }
  createHttpProvider(e2, t) {
    const i3 = t || v$1(`${this.name}:${e2}`, this.namespace, this.client.core.projectId);
    if (!i3) throw new Error(`No RPC url provided for chainId: ${e2}`);
    return new o$2(new f$1(i3, h3("disableProviderPing")));
  }
  setHttpProvider(e2, t) {
    const i3 = this.createHttpProvider(e2, t);
    i3 && (this.httpProviders[e2] = i3);
  }
  createHttpProviders() {
    const e2 = {};
    return this.namespace.chains.forEach((t) => {
      var i3;
      const s2 = parseInt(y$1(t));
      e2[s2] = this.createHttpProvider(s2, (i3 = this.namespace.rpcMap) == null ? void 0 : i3[t]);
    }), e2;
  }
  getAccounts() {
    const e2 = this.namespace.accounts;
    return e2 ? [...new Set(e2.filter((t) => t.split(":")[1] === this.chainId.toString()).map((t) => t.split(":")[2]))] : [];
  }
  getHttpProvider() {
    const e2 = this.chainId, t = this.httpProviders[e2];
    if (typeof t > "u") throw new Error(`JSON-RPC provider for ${e2} not found`);
    return t;
  }
  async handleSwitchChain(e2) {
    var t, i3;
    let s2 = e2.request.params ? (t = e2.request.params[0]) == null ? void 0 : t.chainId : "0x0";
    s2 = s2.startsWith("0x") ? s2 : `0x${s2}`;
    const n3 = parseInt(s2, 16);
    if (this.isChainApproved(n3)) this.setDefaultChain(`${n3}`);
    else if (this.namespace.methods.includes("wallet_switchEthereumChain")) await this.client.request({ topic: e2.topic, request: { method: e2.request.method, params: [{ chainId: s2 }] }, chainId: (i3 = this.namespace.chains) == null ? void 0 : i3[0] }), this.setDefaultChain(`${n3}`);
    else throw new Error(`Failed to switch to chain 'eip155:${n3}'. The chain is not approved or the wallet does not support 'wallet_switchEthereumChain' method.`);
    return null;
  }
  isChainApproved(e2) {
    return this.namespace.chains.includes(`${this.name}:${e2}`);
  }
  async getCapabilities(e2) {
    var t, i3, s2;
    const n3 = (i3 = (t = e2.request) == null ? void 0 : t.params) == null ? void 0 : i3[0];
    if (!n3) throw new Error("Missing address parameter in `wallet_getCapabilities` request");
    const a2 = this.client.session.get(e2.topic), o3 = ((s2 = a2 == null ? void 0 : a2.sessionProperties) == null ? void 0 : s2.capabilities) || {};
    if (o3 != null && o3[n3]) return o3 == null ? void 0 : o3[n3];
    const c2 = await this.client.request(e2);
    try {
      await this.client.session.update(e2.topic, { sessionProperties: dt(lt({}, a2.sessionProperties || {}), { capabilities: dt(lt({}, o3 || {}), { [n3]: c2 }) }) });
    } catch (u2) {
      console.warn("Failed to update session with capabilities", u2);
    }
    return c2;
  }
  async getCallStatus(e2) {
    var t, i3;
    const s2 = this.client.session.get(e2.topic), n3 = (t = s2.sessionProperties) == null ? void 0 : t.bundler_name;
    if (n3) {
      const o3 = this.getBundlerUrl(e2.chainId, n3);
      try {
        return await this.getUserOperationReceipt(o3, e2);
      } catch (c2) {
        console.warn("Failed to fetch call status from bundler", c2, o3);
      }
    }
    const a2 = (i3 = s2.sessionProperties) == null ? void 0 : i3.bundler_url;
    if (a2) try {
      return await this.getUserOperationReceipt(a2, e2);
    } catch (o3) {
      console.warn("Failed to fetch call status from custom bundler", o3, a2);
    }
    if (this.namespace.methods.includes(e2.request.method)) return await this.client.request(e2);
    throw new Error("Fetching call status not approved by the wallet.");
  }
  async getUserOperationReceipt(e2, t) {
    var i3;
    const s2 = new URL(e2), n3 = await fetch(s2, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(formatJsonRpcRequest("eth_getUserOperationReceipt", [(i3 = t.request.params) == null ? void 0 : i3[0]])) });
    if (!n3.ok) throw new Error(`Failed to fetch user operation receipt - ${n3.status}`);
    return await n3.json();
  }
  getBundlerUrl(e2, t) {
    return `${Ot}?projectId=${this.client.core.projectId}&chainId=${e2}&bundler=${t}`;
  }
}
var Hc = Object.defineProperty, Ec = (r2, e2, t) => e2 in r2 ? Hc(r2, e2, { enumerable: true, configurable: true, writable: true, value: t }) : r2[e2] = t, E = (r2, e2, t) => Ec(r2, typeof e2 != "symbol" ? e2 + "" : e2, t);
class Sc {
  constructor(e2) {
    E(this, "name", "solana"), E(this, "client"), E(this, "httpProviders"), E(this, "events"), E(this, "namespace"), E(this, "chainId"), this.namespace = e2.namespace, this.events = h3("events"), this.client = h3("client"), this.chainId = this.getDefaultChain(), this.httpProviders = this.createHttpProviders();
  }
  updateNamespace(e2) {
    this.namespace = Object.assign(this.namespace, e2);
  }
  requestAccounts() {
    return this.getAccounts();
  }
  request(e2) {
    return this.namespace.methods.includes(e2.request.method) ? this.client.request(e2) : this.getHttpProvider().request(e2.request);
  }
  setDefaultChain(e2, t) {
    this.httpProviders[e2] || this.setHttpProvider(e2, t), this.chainId = e2, this.events.emit(f4.DEFAULT_CHAIN_CHANGED, `${this.name}:${e2}`);
  }
  getDefaultChain() {
    if (this.chainId) return this.chainId;
    if (this.namespace.defaultChain) return this.namespace.defaultChain;
    const e2 = this.namespace.chains[0];
    if (!e2) throw new Error("ChainId not found");
    return e2.split(":")[1];
  }
  getAccounts() {
    const e2 = this.namespace.accounts;
    return e2 ? [...new Set(e2.filter((t) => t.split(":")[1] === this.chainId.toString()).map((t) => t.split(":")[2]))] : [];
  }
  createHttpProviders() {
    const e2 = {};
    return this.namespace.chains.forEach((t) => {
      var i3;
      const s2 = y$1(t);
      e2[s2] = this.createHttpProvider(s2, (i3 = this.namespace.rpcMap) == null ? void 0 : i3[t]);
    }), e2;
  }
  getHttpProvider() {
    const e2 = `${this.name}:${this.chainId}`, t = this.httpProviders[e2];
    if (typeof t > "u") throw new Error(`JSON-RPC provider for ${e2} not found`);
    return t;
  }
  setHttpProvider(e2, t) {
    const i3 = this.createHttpProvider(e2, t);
    i3 && (this.httpProviders[e2] = i3);
  }
  createHttpProvider(e2, t) {
    const i3 = t || v$1(e2, this.namespace, this.client.core.projectId);
    if (!i3) throw new Error(`No RPC url provided for chainId: ${e2}`);
    return new o$2(new f$1(i3, h3("disableProviderPing")));
  }
}
var Nc = Object.defineProperty, Tc = (r2, e2, t) => e2 in r2 ? Nc(r2, e2, { enumerable: true, configurable: true, writable: true, value: t }) : r2[e2] = t, S3 = (r2, e2, t) => Tc(r2, typeof e2 != "symbol" ? e2 + "" : e2, t);
class Dc {
  constructor(e2) {
    S3(this, "name", "cosmos"), S3(this, "client"), S3(this, "httpProviders"), S3(this, "events"), S3(this, "namespace"), S3(this, "chainId"), this.namespace = e2.namespace, this.events = h3("events"), this.client = h3("client"), this.chainId = this.getDefaultChain(), this.httpProviders = this.createHttpProviders();
  }
  updateNamespace(e2) {
    this.namespace = Object.assign(this.namespace, e2);
  }
  requestAccounts() {
    return this.getAccounts();
  }
  getDefaultChain() {
    if (this.chainId) return this.chainId;
    if (this.namespace.defaultChain) return this.namespace.defaultChain;
    const e2 = this.namespace.chains[0];
    if (!e2) throw new Error("ChainId not found");
    return e2.split(":")[1];
  }
  request(e2) {
    return this.namespace.methods.includes(e2.request.method) ? this.client.request(e2) : this.getHttpProvider().request(e2.request);
  }
  setDefaultChain(e2, t) {
    this.httpProviders[e2] || this.setHttpProvider(e2, t), this.chainId = e2, this.events.emit(f4.DEFAULT_CHAIN_CHANGED, `${this.name}:${this.chainId}`);
  }
  getAccounts() {
    const e2 = this.namespace.accounts;
    return e2 ? [...new Set(e2.filter((t) => t.split(":")[1] === this.chainId.toString()).map((t) => t.split(":")[2]))] : [];
  }
  createHttpProviders() {
    const e2 = {};
    return this.namespace.chains.forEach((t) => {
      var i3;
      const s2 = y$1(t);
      e2[s2] = this.createHttpProvider(s2, (i3 = this.namespace.rpcMap) == null ? void 0 : i3[t]);
    }), e2;
  }
  getHttpProvider() {
    const e2 = `${this.name}:${this.chainId}`, t = this.httpProviders[e2];
    if (typeof t > "u") throw new Error(`JSON-RPC provider for ${e2} not found`);
    return t;
  }
  setHttpProvider(e2, t) {
    const i3 = this.createHttpProvider(e2, t);
    i3 && (this.httpProviders[e2] = i3);
  }
  createHttpProvider(e2, t) {
    const i3 = t || v$1(e2, this.namespace, this.client.core.projectId);
    if (!i3) throw new Error(`No RPC url provided for chainId: ${e2}`);
    return new o$2(new f$1(i3, h3("disableProviderPing")));
  }
}
var qc = Object.defineProperty, Rc = (r2, e2, t) => e2 in r2 ? qc(r2, e2, { enumerable: true, configurable: true, writable: true, value: t }) : r2[e2] = t, N$1 = (r2, e2, t) => Rc(r2, typeof e2 != "symbol" ? e2 + "" : e2, t);
class xc {
  constructor(e2) {
    N$1(this, "name", "algorand"), N$1(this, "client"), N$1(this, "httpProviders"), N$1(this, "events"), N$1(this, "namespace"), N$1(this, "chainId"), this.namespace = e2.namespace, this.events = h3("events"), this.client = h3("client"), this.chainId = this.getDefaultChain(), this.httpProviders = this.createHttpProviders();
  }
  updateNamespace(e2) {
    this.namespace = Object.assign(this.namespace, e2);
  }
  requestAccounts() {
    return this.getAccounts();
  }
  request(e2) {
    return this.namespace.methods.includes(e2.request.method) ? this.client.request(e2) : this.getHttpProvider().request(e2.request);
  }
  setDefaultChain(e2, t) {
    if (!this.httpProviders[e2]) {
      const i3 = t || v$1(`${this.name}:${e2}`, this.namespace, this.client.core.projectId);
      if (!i3) throw new Error(`No RPC url provided for chainId: ${e2}`);
      this.setHttpProvider(e2, i3);
    }
    this.chainId = e2, this.events.emit(f4.DEFAULT_CHAIN_CHANGED, `${this.name}:${this.chainId}`);
  }
  getDefaultChain() {
    if (this.chainId) return this.chainId;
    if (this.namespace.defaultChain) return this.namespace.defaultChain;
    const e2 = this.namespace.chains[0];
    if (!e2) throw new Error("ChainId not found");
    return e2.split(":")[1];
  }
  getAccounts() {
    const e2 = this.namespace.accounts;
    return e2 ? [...new Set(e2.filter((t) => t.split(":")[1] === this.chainId.toString()).map((t) => t.split(":")[2]))] : [];
  }
  createHttpProviders() {
    const e2 = {};
    return this.namespace.chains.forEach((t) => {
      var i3;
      e2[t] = this.createHttpProvider(t, (i3 = this.namespace.rpcMap) == null ? void 0 : i3[t]);
    }), e2;
  }
  getHttpProvider() {
    const e2 = `${this.name}:${this.chainId}`, t = this.httpProviders[e2];
    if (typeof t > "u") throw new Error(`JSON-RPC provider for ${e2} not found`);
    return t;
  }
  setHttpProvider(e2, t) {
    const i3 = this.createHttpProvider(e2, t);
    i3 && (this.httpProviders[e2] = i3);
  }
  createHttpProvider(e2, t) {
    const i3 = t || v$1(e2, this.namespace, this.client.core.projectId);
    return typeof i3 > "u" ? void 0 : new o$2(new f$1(i3, h3("disableProviderPing")));
  }
}
var Lc = Object.defineProperty, Uc = (r2, e2, t) => e2 in r2 ? Lc(r2, e2, { enumerable: true, configurable: true, writable: true, value: t }) : r2[e2] = t, T$1 = (r2, e2, t) => Uc(r2, typeof e2 != "symbol" ? e2 + "" : e2, t);
class Fc {
  constructor(e2) {
    T$1(this, "name", "cip34"), T$1(this, "client"), T$1(this, "httpProviders"), T$1(this, "events"), T$1(this, "namespace"), T$1(this, "chainId"), this.namespace = e2.namespace, this.events = h3("events"), this.client = h3("client"), this.chainId = this.getDefaultChain(), this.httpProviders = this.createHttpProviders();
  }
  updateNamespace(e2) {
    this.namespace = Object.assign(this.namespace, e2);
  }
  requestAccounts() {
    return this.getAccounts();
  }
  getDefaultChain() {
    if (this.chainId) return this.chainId;
    if (this.namespace.defaultChain) return this.namespace.defaultChain;
    const e2 = this.namespace.chains[0];
    if (!e2) throw new Error("ChainId not found");
    return e2.split(":")[1];
  }
  request(e2) {
    return this.namespace.methods.includes(e2.request.method) ? this.client.request(e2) : this.getHttpProvider().request(e2.request);
  }
  setDefaultChain(e2, t) {
    this.httpProviders[e2] || this.setHttpProvider(e2, t), this.chainId = e2, this.events.emit(f4.DEFAULT_CHAIN_CHANGED, `${this.name}:${this.chainId}`);
  }
  getAccounts() {
    const e2 = this.namespace.accounts;
    return e2 ? [...new Set(e2.filter((t) => t.split(":")[1] === this.chainId.toString()).map((t) => t.split(":")[2]))] : [];
  }
  createHttpProviders() {
    const e2 = {};
    return this.namespace.chains.forEach((t) => {
      const i3 = this.getCardanoRPCUrl(t), s2 = y$1(t);
      e2[s2] = this.createHttpProvider(s2, i3);
    }), e2;
  }
  getHttpProvider() {
    const e2 = `${this.name}:${this.chainId}`, t = this.httpProviders[e2];
    if (typeof t > "u") throw new Error(`JSON-RPC provider for ${e2} not found`);
    return t;
  }
  getCardanoRPCUrl(e2) {
    const t = this.namespace.rpcMap;
    if (t) return t[e2];
  }
  setHttpProvider(e2, t) {
    const i3 = this.createHttpProvider(e2, t);
    i3 && (this.httpProviders[e2] = i3);
  }
  createHttpProvider(e2, t) {
    const i3 = t || this.getCardanoRPCUrl(e2);
    if (!i3) throw new Error(`No RPC url provided for chainId: ${e2}`);
    return new o$2(new f$1(i3, h3("disableProviderPing")));
  }
}
var Mc = Object.defineProperty, Gc = (r2, e2, t) => e2 in r2 ? Mc(r2, e2, { enumerable: true, configurable: true, writable: true, value: t }) : r2[e2] = t, D$1 = (r2, e2, t) => Gc(r2, typeof e2 != "symbol" ? e2 + "" : e2, t);
class zc {
  constructor(e2) {
    D$1(this, "name", "elrond"), D$1(this, "client"), D$1(this, "httpProviders"), D$1(this, "events"), D$1(this, "namespace"), D$1(this, "chainId"), this.namespace = e2.namespace, this.events = h3("events"), this.client = h3("client"), this.chainId = this.getDefaultChain(), this.httpProviders = this.createHttpProviders();
  }
  updateNamespace(e2) {
    this.namespace = Object.assign(this.namespace, e2);
  }
  requestAccounts() {
    return this.getAccounts();
  }
  request(e2) {
    return this.namespace.methods.includes(e2.request.method) ? this.client.request(e2) : this.getHttpProvider().request(e2.request);
  }
  setDefaultChain(e2, t) {
    this.httpProviders[e2] || this.setHttpProvider(e2, t), this.chainId = e2, this.events.emit(f4.DEFAULT_CHAIN_CHANGED, `${this.name}:${e2}`);
  }
  getDefaultChain() {
    if (this.chainId) return this.chainId;
    if (this.namespace.defaultChain) return this.namespace.defaultChain;
    const e2 = this.namespace.chains[0];
    if (!e2) throw new Error("ChainId not found");
    return e2.split(":")[1];
  }
  getAccounts() {
    const e2 = this.namespace.accounts;
    return e2 ? [...new Set(e2.filter((t) => t.split(":")[1] === this.chainId.toString()).map((t) => t.split(":")[2]))] : [];
  }
  createHttpProviders() {
    const e2 = {};
    return this.namespace.chains.forEach((t) => {
      var i3;
      const s2 = y$1(t);
      e2[s2] = this.createHttpProvider(s2, (i3 = this.namespace.rpcMap) == null ? void 0 : i3[t]);
    }), e2;
  }
  getHttpProvider() {
    const e2 = `${this.name}:${this.chainId}`, t = this.httpProviders[e2];
    if (typeof t > "u") throw new Error(`JSON-RPC provider for ${e2} not found`);
    return t;
  }
  setHttpProvider(e2, t) {
    const i3 = this.createHttpProvider(e2, t);
    i3 && (this.httpProviders[e2] = i3);
  }
  createHttpProvider(e2, t) {
    const i3 = t || v$1(e2, this.namespace, this.client.core.projectId);
    if (!i3) throw new Error(`No RPC url provided for chainId: ${e2}`);
    return new o$2(new f$1(i3, h3("disableProviderPing")));
  }
}
var kc = Object.defineProperty, Bc = (r2, e2, t) => e2 in r2 ? kc(r2, e2, { enumerable: true, configurable: true, writable: true, value: t }) : r2[e2] = t, q$1 = (r2, e2, t) => Bc(r2, typeof e2 != "symbol" ? e2 + "" : e2, t);
class Vc {
  constructor(e2) {
    q$1(this, "name", "multiversx"), q$1(this, "client"), q$1(this, "httpProviders"), q$1(this, "events"), q$1(this, "namespace"), q$1(this, "chainId"), this.namespace = e2.namespace, this.events = h3("events"), this.client = h3("client"), this.chainId = this.getDefaultChain(), this.httpProviders = this.createHttpProviders();
  }
  updateNamespace(e2) {
    this.namespace = Object.assign(this.namespace, e2);
  }
  requestAccounts() {
    return this.getAccounts();
  }
  request(e2) {
    return this.namespace.methods.includes(e2.request.method) ? this.client.request(e2) : this.getHttpProvider().request(e2.request);
  }
  setDefaultChain(e2, t) {
    this.httpProviders[e2] || this.setHttpProvider(e2, t), this.chainId = e2, this.events.emit(f4.DEFAULT_CHAIN_CHANGED, `${this.name}:${e2}`);
  }
  getDefaultChain() {
    if (this.chainId) return this.chainId;
    if (this.namespace.defaultChain) return this.namespace.defaultChain;
    const e2 = this.namespace.chains[0];
    if (!e2) throw new Error("ChainId not found");
    return e2.split(":")[1];
  }
  getAccounts() {
    const e2 = this.namespace.accounts;
    return e2 ? [...new Set(e2.filter((t) => t.split(":")[1] === this.chainId.toString()).map((t) => t.split(":")[2]))] : [];
  }
  createHttpProviders() {
    const e2 = {};
    return this.namespace.chains.forEach((t) => {
      var i3;
      const s2 = y$1(t);
      e2[s2] = this.createHttpProvider(s2, (i3 = this.namespace.rpcMap) == null ? void 0 : i3[t]);
    }), e2;
  }
  getHttpProvider() {
    const e2 = `${this.name}:${this.chainId}`, t = this.httpProviders[e2];
    if (typeof t > "u") throw new Error(`JSON-RPC provider for ${e2} not found`);
    return t;
  }
  setHttpProvider(e2, t) {
    const i3 = this.createHttpProvider(e2, t);
    i3 && (this.httpProviders[e2] = i3);
  }
  createHttpProvider(e2, t) {
    const i3 = t || v$1(e2, this.namespace, this.client.core.projectId);
    if (!i3) throw new Error(`No RPC url provided for chainId: ${e2}`);
    return new o$2(new f$1(i3, h3("disableProviderPing")));
  }
}
var Jc = Object.defineProperty, Kc = (r2, e2, t) => e2 in r2 ? Jc(r2, e2, { enumerable: true, configurable: true, writable: true, value: t }) : r2[e2] = t, R3 = (r2, e2, t) => Kc(r2, typeof e2 != "symbol" ? e2 + "" : e2, t);
class Wc {
  constructor(e2) {
    R3(this, "name", "near"), R3(this, "client"), R3(this, "httpProviders"), R3(this, "events"), R3(this, "namespace"), R3(this, "chainId"), this.namespace = e2.namespace, this.events = h3("events"), this.client = h3("client"), this.chainId = this.getDefaultChain(), this.httpProviders = this.createHttpProviders();
  }
  updateNamespace(e2) {
    this.namespace = Object.assign(this.namespace, e2);
  }
  requestAccounts() {
    return this.getAccounts();
  }
  getDefaultChain() {
    if (this.chainId) return this.chainId;
    if (this.namespace.defaultChain) return this.namespace.defaultChain;
    const e2 = this.namespace.chains[0];
    if (!e2) throw new Error("ChainId not found");
    return e2.split(":")[1];
  }
  request(e2) {
    return this.namespace.methods.includes(e2.request.method) ? this.client.request(e2) : this.getHttpProvider().request(e2.request);
  }
  setDefaultChain(e2, t) {
    if (this.chainId = e2, !this.httpProviders[e2]) {
      const i3 = t || v$1(`${this.name}:${e2}`, this.namespace);
      if (!i3) throw new Error(`No RPC url provided for chainId: ${e2}`);
      this.setHttpProvider(e2, i3);
    }
    this.events.emit(f4.DEFAULT_CHAIN_CHANGED, `${this.name}:${this.chainId}`);
  }
  getAccounts() {
    const e2 = this.namespace.accounts;
    return e2 ? e2.filter((t) => t.split(":")[1] === this.chainId.toString()).map((t) => t.split(":")[2]) || [] : [];
  }
  createHttpProviders() {
    const e2 = {};
    return this.namespace.chains.forEach((t) => {
      var i3;
      e2[t] = this.createHttpProvider(t, (i3 = this.namespace.rpcMap) == null ? void 0 : i3[t]);
    }), e2;
  }
  getHttpProvider() {
    const e2 = `${this.name}:${this.chainId}`, t = this.httpProviders[e2];
    if (typeof t > "u") throw new Error(`JSON-RPC provider for ${e2} not found`);
    return t;
  }
  setHttpProvider(e2, t) {
    const i3 = this.createHttpProvider(e2, t);
    i3 && (this.httpProviders[e2] = i3);
  }
  createHttpProvider(e2, t) {
    const i3 = t || v$1(e2, this.namespace);
    return typeof i3 > "u" ? void 0 : new o$2(new f$1(i3, h3("disableProviderPing")));
  }
}
var Xc = Object.defineProperty, Yc = (r2, e2, t) => e2 in r2 ? Xc(r2, e2, { enumerable: true, configurable: true, writable: true, value: t }) : r2[e2] = t, x$1 = (r2, e2, t) => Yc(r2, typeof e2 != "symbol" ? e2 + "" : e2, t);
class Zc {
  constructor(e2) {
    x$1(this, "name", "tezos"), x$1(this, "client"), x$1(this, "httpProviders"), x$1(this, "events"), x$1(this, "namespace"), x$1(this, "chainId"), this.namespace = e2.namespace, this.events = h3("events"), this.client = h3("client"), this.chainId = this.getDefaultChain(), this.httpProviders = this.createHttpProviders();
  }
  updateNamespace(e2) {
    this.namespace = Object.assign(this.namespace, e2);
  }
  requestAccounts() {
    return this.getAccounts();
  }
  getDefaultChain() {
    if (this.chainId) return this.chainId;
    if (this.namespace.defaultChain) return this.namespace.defaultChain;
    const e2 = this.namespace.chains[0];
    if (!e2) throw new Error("ChainId not found");
    return e2.split(":")[1];
  }
  request(e2) {
    return this.namespace.methods.includes(e2.request.method) ? this.client.request(e2) : this.getHttpProvider().request(e2.request);
  }
  setDefaultChain(e2, t) {
    if (this.chainId = e2, !this.httpProviders[e2]) {
      const i3 = t || v$1(`${this.name}:${e2}`, this.namespace);
      if (!i3) throw new Error(`No RPC url provided for chainId: ${e2}`);
      this.setHttpProvider(e2, i3);
    }
    this.events.emit(f4.DEFAULT_CHAIN_CHANGED, `${this.name}:${this.chainId}`);
  }
  getAccounts() {
    const e2 = this.namespace.accounts;
    return e2 ? e2.filter((t) => t.split(":")[1] === this.chainId.toString()).map((t) => t.split(":")[2]) || [] : [];
  }
  createHttpProviders() {
    const e2 = {};
    return this.namespace.chains.forEach((t) => {
      e2[t] = this.createHttpProvider(t);
    }), e2;
  }
  getHttpProvider() {
    const e2 = `${this.name}:${this.chainId}`, t = this.httpProviders[e2];
    if (typeof t > "u") throw new Error(`JSON-RPC provider for ${e2} not found`);
    return t;
  }
  setHttpProvider(e2, t) {
    const i3 = this.createHttpProvider(e2, t);
    i3 && (this.httpProviders[e2] = i3);
  }
  createHttpProvider(e2, t) {
    const i3 = t || v$1(e2, this.namespace);
    return typeof i3 > "u" ? void 0 : new o$2(new f$1(i3));
  }
}
var Qc = Object.defineProperty, eh = (r2, e2, t) => e2 in r2 ? Qc(r2, e2, { enumerable: true, configurable: true, writable: true, value: t }) : r2[e2] = t, L$1 = (r2, e2, t) => eh(r2, typeof e2 != "symbol" ? e2 + "" : e2, t);
class th {
  constructor(e2) {
    L$1(this, "name", w$1), L$1(this, "client"), L$1(this, "httpProviders"), L$1(this, "events"), L$1(this, "namespace"), L$1(this, "chainId"), this.namespace = e2.namespace, this.events = h3("events"), this.client = h3("client"), this.chainId = this.getDefaultChain(), this.httpProviders = this.createHttpProviders();
  }
  updateNamespace(e2) {
    this.namespace.chains = [...new Set((this.namespace.chains || []).concat(e2.chains || []))], this.namespace.accounts = [...new Set((this.namespace.accounts || []).concat(e2.accounts || []))], this.namespace.methods = [...new Set((this.namespace.methods || []).concat(e2.methods || []))], this.namespace.events = [...new Set((this.namespace.events || []).concat(e2.events || []))], this.httpProviders = this.createHttpProviders();
  }
  requestAccounts() {
    return this.getAccounts();
  }
  request(e2) {
    return this.namespace.methods.includes(e2.request.method) ? this.client.request(e2) : this.getHttpProvider(e2.chainId).request(e2.request);
  }
  setDefaultChain(e2, t) {
    this.httpProviders[e2] || this.setHttpProvider(e2, t), this.chainId = e2, this.events.emit(f4.DEFAULT_CHAIN_CHANGED, `${this.name}:${e2}`);
  }
  getDefaultChain() {
    if (this.chainId) return this.chainId;
    if (this.namespace.defaultChain) return this.namespace.defaultChain;
    const e2 = this.namespace.chains[0];
    if (!e2) throw new Error("ChainId not found");
    return e2.split(":")[1];
  }
  getAccounts() {
    const e2 = this.namespace.accounts;
    return e2 ? [...new Set(e2.filter((t) => t.split(":")[1] === this.chainId.toString()).map((t) => t.split(":")[2]))] : [];
  }
  createHttpProviders() {
    var e2, t;
    const i3 = {};
    return (t = (e2 = this.namespace) == null ? void 0 : e2.accounts) == null || t.forEach((s2) => {
      const n3 = Ye$1(s2);
      i3[`${n3.namespace}:${n3.reference}`] = this.createHttpProvider(s2);
    }), i3;
  }
  getHttpProvider(e2) {
    const t = this.httpProviders[e2];
    if (typeof t > "u") throw new Error(`JSON-RPC provider for ${e2} not found`);
    return t;
  }
  setHttpProvider(e2, t) {
    const i3 = this.createHttpProvider(e2, t);
    i3 && (this.httpProviders[e2] = i3);
  }
  createHttpProvider(e2, t) {
    const i3 = t || v$1(e2, this.namespace, this.client.core.projectId);
    if (!i3) throw new Error(`No RPC url provided for chainId: ${e2}`);
    return new o$2(new f$1(i3, h3("disableProviderPing")));
  }
}
var rh = Object.defineProperty, ih = Object.defineProperties, sh = Object.getOwnPropertyDescriptors, vt = Object.getOwnPropertySymbols, nh = Object.prototype.hasOwnProperty, ah = Object.prototype.propertyIsEnumerable, le = (r2, e2, t) => e2 in r2 ? rh(r2, e2, { enumerable: true, configurable: true, writable: true, value: t }) : r2[e2] = t, Y = (r2, e2) => {
  for (var t in e2 || (e2 = {})) nh.call(e2, t) && le(r2, t, e2[t]);
  if (vt) for (var t of vt(e2)) ah.call(e2, t) && le(r2, t, e2[t]);
  return r2;
}, de = (r2, e2) => ih(r2, sh(e2)), g$1 = (r2, e2, t) => le(r2, typeof e2 != "symbol" ? e2 + "" : e2, t);
class Z {
  constructor(e2) {
    g$1(this, "client"), g$1(this, "namespaces"), g$1(this, "optionalNamespaces"), g$1(this, "sessionProperties"), g$1(this, "events", new wt$4()), g$1(this, "rpcProviders", {}), g$1(this, "session"), g$1(this, "providerOpts"), g$1(this, "logger"), g$1(this, "uri"), g$1(this, "disableProviderPing", false), this.providerOpts = e2, this.logger = typeof (e2 == null ? void 0 : e2.logger) < "u" && typeof (e2 == null ? void 0 : e2.logger) != "string" ? e2.logger : gt$1(k$2({ level: (e2 == null ? void 0 : e2.logger) || be })), this.disableProviderPing = (e2 == null ? void 0 : e2.disableProviderPing) || false;
  }
  static async init(e2) {
    const t = new Z(e2);
    return await t.initialize(), t;
  }
  async request(e2, t, i3) {
    const [s2, n3] = this.validateChain(t);
    if (!this.session) throw new Error("Please call connect() before request()");
    return await this.getProvider(s2).request({ request: Y({}, e2), chainId: `${s2}:${n3}`, topic: this.session.topic, expiry: i3 });
  }
  sendAsync(e2, t, i3, s2) {
    const n3 = (/* @__PURE__ */ new Date()).getTime();
    this.request(e2, i3, s2).then((a2) => t(null, formatJsonRpcResult(n3, a2))).catch((a2) => t(a2, void 0));
  }
  async enable() {
    if (!this.client) throw new Error("Sign Client not initialized");
    return this.session || await this.connect({ namespaces: this.namespaces, optionalNamespaces: this.optionalNamespaces, sessionProperties: this.sessionProperties }), await this.requestAccounts();
  }
  async disconnect() {
    var e2;
    if (!this.session) throw new Error("Please call connect() before enable()");
    await this.client.disconnect({ topic: (e2 = this.session) == null ? void 0 : e2.topic, reason: de$2("USER_DISCONNECTED") }), await this.cleanup();
  }
  async connect(e2) {
    if (!this.client) throw new Error("Sign Client not initialized");
    if (this.setNamespaces(e2), await this.cleanupPendingPairings(), !e2.skipPairing) return await this.pair(e2.pairingTopic);
  }
  async authenticate(e2, t) {
    if (!this.client) throw new Error("Sign Client not initialized");
    this.setNamespaces(e2), await this.cleanupPendingPairings();
    const { uri: i3, response: s2 } = await this.client.authenticate(e2, t);
    i3 && (this.uri = i3, this.events.emit("display_uri", i3));
    const n3 = await s2();
    if (this.session = n3.session, this.session) {
      const a2 = ht(this.session.namespaces);
      this.namespaces = ce(this.namespaces, a2), this.persist("namespaces", this.namespaces), this.onConnect();
    }
    return n3;
  }
  on(e2, t) {
    this.events.on(e2, t);
  }
  once(e2, t) {
    this.events.once(e2, t);
  }
  removeListener(e2, t) {
    this.events.removeListener(e2, t);
  }
  off(e2, t) {
    this.events.off(e2, t);
  }
  get isWalletConnect() {
    return true;
  }
  async pair(e2) {
    const { uri: t, approval: i3 } = await this.client.connect({ pairingTopic: e2, requiredNamespaces: this.namespaces, optionalNamespaces: this.optionalNamespaces, sessionProperties: this.sessionProperties });
    t && (this.uri = t, this.events.emit("display_uri", t));
    const s2 = await i3();
    this.session = s2;
    const n3 = ht(s2.namespaces);
    return this.namespaces = ce(this.namespaces, n3), this.persist("namespaces", this.namespaces), this.onConnect(), this.session;
  }
  setDefaultChain(e2, t) {
    try {
      if (!this.session) return;
      const [i3, s2] = this.validateChain(e2), n3 = this.getProvider(i3);
      n3.name === w$1 ? n3.setDefaultChain(`${i3}:${s2}`, t) : n3.setDefaultChain(s2, t);
    } catch (i3) {
      if (!/Please call connect/.test(i3.message)) throw i3;
    }
  }
  async cleanupPendingPairings(e2 = {}) {
    this.logger.info("Cleaning up inactive pairings...");
    const t = this.client.pairing.getAll();
    if ($e$3(t)) {
      for (const i3 of t) e2.deletePairings ? this.client.core.expirer.set(i3.topic, 0) : await this.client.core.relayer.subscriber.unsubscribe(i3.topic);
      this.logger.info(`Inactive pairings cleared: ${t.length}`);
    }
  }
  abortPairingAttempt() {
    this.logger.warn("abortPairingAttempt is deprecated. This is now a no-op.");
  }
  async checkStorage() {
    if (this.namespaces = await this.getFromStore("namespaces"), this.optionalNamespaces = await this.getFromStore("optionalNamespaces") || {}, this.client.session.length) {
      const e2 = this.client.session.keys.length - 1;
      this.session = this.client.session.get(this.client.session.keys[e2]), this.createProviders();
    }
  }
  async initialize() {
    this.logger.trace("Initialized"), await this.createClient(), await this.checkStorage(), this.registerEventListeners();
  }
  async createClient() {
    this.client = this.providerOpts.client || await Se$1.init({ core: this.providerOpts.core, logger: this.providerOpts.logger || be, relayUrl: this.providerOpts.relayUrl || _t, projectId: this.providerOpts.projectId, metadata: this.providerOpts.metadata, storageOptions: this.providerOpts.storageOptions, storage: this.providerOpts.storage, name: this.providerOpts.name, customStoragePrefix: this.providerOpts.customStoragePrefix, telemetryEnabled: this.providerOpts.telemetryEnabled }), this.logger.trace("SignClient Initialized");
  }
  createProviders() {
    if (!this.client) throw new Error("Sign Client not initialized");
    if (!this.session) throw new Error("Session not initialized. Please call connect() before enable()");
    const e2 = [...new Set(Object.keys(this.session.namespaces).map((t) => pr$2(t)))];
    pe("client", this.client), pe("events", this.events), pe("disableProviderPing", this.disableProviderPing), e2.forEach((t) => {
      if (!this.session) return;
      const i3 = Pc(t, this.session), s2 = ot(i3), n3 = ce(this.namespaces, this.optionalNamespaces), a2 = de(Y({}, n3[t]), { accounts: i3, chains: s2 });
      switch (t) {
        case "eip155":
          this.rpcProviders[t] = new jc({ namespace: a2 });
          break;
        case "algorand":
          this.rpcProviders[t] = new xc({ namespace: a2 });
          break;
        case "solana":
          this.rpcProviders[t] = new Sc({ namespace: a2 });
          break;
        case "cosmos":
          this.rpcProviders[t] = new Dc({ namespace: a2 });
          break;
        case "polkadot":
          this.rpcProviders[t] = new wc({ namespace: a2 });
          break;
        case "cip34":
          this.rpcProviders[t] = new Fc({ namespace: a2 });
          break;
        case "elrond":
          this.rpcProviders[t] = new zc({ namespace: a2 });
          break;
        case "multiversx":
          this.rpcProviders[t] = new Vc({ namespace: a2 });
          break;
        case "near":
          this.rpcProviders[t] = new Wc({ namespace: a2 });
          break;
        case "tezos":
          this.rpcProviders[t] = new Zc({ namespace: a2 });
          break;
        default:
          this.rpcProviders[w$1] ? this.rpcProviders[w$1].updateNamespace(a2) : this.rpcProviders[w$1] = new th({ namespace: a2 });
      }
    });
  }
  registerEventListeners() {
    if (typeof this.client > "u") throw new Error("Sign Client is not initialized");
    this.client.on("session_ping", (e2) => {
      this.events.emit("session_ping", e2);
    }), this.client.on("session_event", (e2) => {
      const { params: t } = e2, { event: i3 } = t;
      if (i3.name === "accountsChanged") {
        const s2 = i3.data;
        s2 && $e$3(s2) && this.events.emit("accountsChanged", s2.map(bc));
      } else if (i3.name === "chainChanged") {
        const s2 = t.chainId, n3 = t.event.data, a2 = pr$2(s2), o3 = he(s2) !== he(n3) ? `${a2}:${he(n3)}` : s2;
        this.onChainChanged(o3);
      } else this.events.emit(i3.name, i3.data);
      this.events.emit("session_event", e2);
    }), this.client.on("session_update", ({ topic: e2, params: t }) => {
      var i3;
      const { namespaces: s2 } = t, n3 = (i3 = this.client) == null ? void 0 : i3.session.get(e2);
      this.session = de(Y({}, n3), { namespaces: s2 }), this.onSessionUpdate(), this.events.emit("session_update", { topic: e2, params: t });
    }), this.client.on("session_delete", async (e2) => {
      await this.cleanup(), this.events.emit("session_delete", e2), this.events.emit("disconnect", de(Y({}, de$2("USER_DISCONNECTED")), { data: e2.topic }));
    }), this.on(f4.DEFAULT_CHAIN_CHANGED, (e2) => {
      this.onChainChanged(e2, true);
    });
  }
  getProvider(e2) {
    return this.rpcProviders[e2] || this.rpcProviders[w$1];
  }
  onSessionUpdate() {
    Object.keys(this.rpcProviders).forEach((e2) => {
      var t;
      this.getProvider(e2).updateNamespace((t = this.session) == null ? void 0 : t.namespaces[e2]);
    });
  }
  setNamespaces(e2) {
    const { namespaces: t, optionalNamespaces: i3, sessionProperties: s2 } = e2;
    t && Object.keys(t).length && (this.namespaces = t), i3 && Object.keys(i3).length && (this.optionalNamespaces = i3), this.sessionProperties = s2, this.persist("namespaces", t), this.persist("optionalNamespaces", i3);
  }
  validateChain(e2) {
    const [t, i3] = (e2 == null ? void 0 : e2.split(":")) || ["", ""];
    if (!this.namespaces || !Object.keys(this.namespaces).length) return [t, i3];
    if (t && !Object.keys(this.namespaces || {}).map((a2) => pr$2(a2)).includes(t)) throw new Error(`Namespace '${t}' is not configured. Please call connect() first with namespace config.`);
    if (t && i3) return [t, i3];
    const s2 = pr$2(Object.keys(this.namespaces)[0]), n3 = this.rpcProviders[s2].getDefaultChain();
    return [s2, n3];
  }
  async requestAccounts() {
    const [e2] = this.validateChain();
    return await this.getProvider(e2).requestAccounts();
  }
  onChainChanged(e2, t = false) {
    if (!this.namespaces) return;
    const [i3, s2] = this.validateChain(e2);
    s2 && (t || this.getProvider(i3).setDefaultChain(s2), this.namespaces[i3] ? this.namespaces[i3].defaultChain = s2 : this.namespaces[`${i3}:${s2}`] ? this.namespaces[`${i3}:${s2}`].defaultChain = s2 : this.namespaces[`${i3}:${s2}`] = { defaultChain: s2 }, this.persist("namespaces", this.namespaces), this.events.emit("chainChanged", s2));
  }
  onConnect() {
    this.createProviders(), this.events.emit("connect", { session: this.session });
  }
  async cleanup() {
    this.session = void 0, this.namespaces = void 0, this.optionalNamespaces = void 0, this.sessionProperties = void 0, this.persist("namespaces", void 0), this.persist("optionalNamespaces", void 0), this.persist("sessionProperties", void 0), await this.cleanupPendingPairings({ deletePairings: true });
  }
  persist(e2, t) {
    this.client.core.storage.setItem(`${$e}/${e2}`, t);
  }
  async getFromStore(e2) {
    return await this.client.core.storage.getItem(`${$e}/${e2}`);
  }
}
const oh = Z;
const T = "wc", $ = "ethereum_provider", j = `${T}@2:${$}:`, q = "https://rpc.walletconnect.org/v1/", u = ["eth_sendTransaction", "personal_sign"], M2 = ["eth_accounts", "eth_requestAccounts", "eth_sendRawTransaction", "eth_sign", "eth_signTransaction", "eth_signTypedData", "eth_signTypedData_v3", "eth_signTypedData_v4", "eth_sendTransaction", "personal_sign", "wallet_switchEthereumChain", "wallet_addEthereumChain", "wallet_getPermissions", "wallet_requestPermissions", "wallet_registerOnboarding", "wallet_watchAsset", "wallet_scanQRCode", "wallet_sendCalls", "wallet_getCapabilities", "wallet_getCallsStatus", "wallet_showCallsStatus"], m3 = ["chainChanged", "accountsChanged"], O3 = ["chainChanged", "accountsChanged", "message", "disconnect", "connect"];
var N = Object.defineProperty, D = Object.defineProperties, U = Object.getOwnPropertyDescriptors, P2 = Object.getOwnPropertySymbols, Q = Object.prototype.hasOwnProperty, L2 = Object.prototype.propertyIsEnumerable, y2 = (a2, t, s2) => t in a2 ? N(a2, t, { enumerable: true, configurable: true, writable: true, value: s2 }) : a2[t] = s2, g = (a2, t) => {
  for (var s2 in t || (t = {})) Q.call(t, s2) && y2(a2, s2, t[s2]);
  if (P2) for (var s2 of P2(t)) L2.call(t, s2) && y2(a2, s2, t[s2]);
  return a2;
}, _2 = (a2, t) => D(a2, U(t)), o2 = (a2, t, s2) => y2(a2, typeof t != "symbol" ? t + "" : t, s2);
function v(a2) {
  return Number(a2[0].split(":")[1]);
}
function C(a2) {
  return `0x${a2.toString(16)}`;
}
function x(a2) {
  const { chains: t, optionalChains: s2, methods: i3, optionalMethods: e2, events: n3, optionalEvents: h4, rpcMap: l2 } = a2;
  if (!$e$3(t)) throw new Error("Invalid chains");
  const r2 = { chains: t, methods: i3 || u, events: n3 || m3, rpcMap: g({}, t.length ? { [v(t)]: l2[v(t)] } : {}) }, c2 = n3 == null ? void 0 : n3.filter((d4) => !m3.includes(d4)), p2 = i3 == null ? void 0 : i3.filter((d4) => !u.includes(d4));
  if (!s2 && !h4 && !e2 && !(c2 != null && c2.length) && !(p2 != null && p2.length)) return { required: t.length ? r2 : void 0 };
  const I3 = (c2 == null ? void 0 : c2.length) && (p2 == null ? void 0 : p2.length) || !s2, f5 = { chains: [...new Set(I3 ? r2.chains.concat(s2 || []) : s2)], methods: [...new Set(r2.methods.concat(e2 != null && e2.length ? e2 : M2))], events: [...new Set(r2.events.concat(h4 != null && h4.length ? h4 : O3))], rpcMap: l2 };
  return { required: t.length ? r2 : void 0, optional: s2.length ? f5 : void 0 };
}
class w {
  constructor() {
    o2(this, "events", new eventsExports.EventEmitter()), o2(this, "namespace", "eip155"), o2(this, "accounts", []), o2(this, "signer"), o2(this, "chainId", 1), o2(this, "modal"), o2(this, "rpc"), o2(this, "STORAGE_KEY", j), o2(this, "on", (t, s2) => (this.events.on(t, s2), this)), o2(this, "once", (t, s2) => (this.events.once(t, s2), this)), o2(this, "removeListener", (t, s2) => (this.events.removeListener(t, s2), this)), o2(this, "off", (t, s2) => (this.events.off(t, s2), this)), o2(this, "parseAccount", (t) => this.isCompatibleChainId(t) ? this.parseAccountId(t).address : t), this.signer = {}, this.rpc = {};
  }
  static async init(t) {
    const s2 = new w();
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
    if (!this.signer.client) throw new Error("Provider not initialized. Call init() first");
    this.loadConnectOpts(t);
    const { required: s2, optional: i3 } = x(this.rpc);
    try {
      const e2 = await new Promise(async (h4, l2) => {
        var r2;
        this.rpc.showQrModal && ((r2 = this.modal) == null || r2.subscribeModal((c2) => {
          !c2.open && !this.signer.session && (this.signer.abortPairingAttempt(), l2(new Error("Connection request reset. Please try again.")));
        })), await this.signer.connect(_2(g({ namespaces: g({}, s2 && { [this.namespace]: s2 }) }, i3 && { optionalNamespaces: { [this.namespace]: i3 } }), { pairingTopic: t == null ? void 0 : t.pairingTopic })).then((c2) => {
          h4(c2);
        }).catch((c2) => {
          l2(new Error(c2.message));
        });
      });
      if (!e2) return;
      const n3 = Hr$2(e2.namespaces, [this.namespace]);
      this.setChainIds(this.rpc.chains.length ? this.rpc.chains : n3), this.setAccounts(n3), this.events.emit("connect", { chainId: C(this.chainId) });
    } catch (e2) {
      throw this.signer.logger.error(e2), e2;
    } finally {
      this.modal && this.modal.closeModal();
    }
  }
  async authenticate(t, s2) {
    if (!this.signer.client) throw new Error("Provider not initialized. Call init() first");
    this.loadConnectOpts({ chains: t == null ? void 0 : t.chains });
    try {
      const i3 = await new Promise(async (n3, h4) => {
        var l2;
        this.rpc.showQrModal && ((l2 = this.modal) == null || l2.subscribeModal((r2) => {
          !r2.open && !this.signer.session && (this.signer.abortPairingAttempt(), h4(new Error("Connection request reset. Please try again.")));
        })), await this.signer.authenticate(_2(g({}, t), { chains: this.rpc.chains }), s2).then((r2) => {
          n3(r2);
        }).catch((r2) => {
          h4(new Error(r2.message));
        });
      }), e2 = i3.session;
      if (e2) {
        const n3 = Hr$2(e2.namespaces, [this.namespace]);
        this.setChainIds(this.rpc.chains.length ? this.rpc.chains : n3), this.setAccounts(n3), this.events.emit("connect", { chainId: C(this.chainId) });
      }
      return i3;
    } catch (i3) {
      throw this.signer.logger.error(i3), i3;
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
      this.chainId = s2, this.events.emit("chainChanged", C(this.chainId)), this.persist();
    }), this.signer.on("session_update", (t) => {
      this.events.emit("session_update", t);
    }), this.signer.on("session_delete", (t) => {
      this.reset(), this.events.emit("session_delete", t), this.events.emit("disconnect", _2(g({}, de$2("USER_DISCONNECTED")), { data: t.topic, name: "USER_DISCONNECTED" }));
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
    s2.length && (this.chainId = s2[0], this.events.emit("chainChanged", C(this.chainId)), this.persist());
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
    const e2 = (s2 = t == null ? void 0 : t.chains) != null ? s2 : [], n3 = (i3 = t == null ? void 0 : t.optionalChains) != null ? i3 : [], h4 = e2.concat(n3);
    if (!h4.length) throw new Error("No chains specified in either `chains` or `optionalChains`");
    const l2 = e2.length ? (t == null ? void 0 : t.methods) || u : [], r2 = e2.length ? (t == null ? void 0 : t.events) || m3 : [], c2 = (t == null ? void 0 : t.optionalMethods) || [], p2 = (t == null ? void 0 : t.optionalEvents) || [], I3 = (t == null ? void 0 : t.rpcMap) || this.buildRpcMap(h4, t.projectId), f5 = (t == null ? void 0 : t.qrModalOptions) || void 0;
    return { chains: e2 == null ? void 0 : e2.map((d4) => this.formatChainId(d4)), optionalChains: n3.map((d4) => this.formatChainId(d4)), methods: l2, events: r2, optionalMethods: c2, optionalEvents: p2, rpcMap: I3, showQrModal: !!(t != null && t.showQrModal), qrModalOptions: f5, projectId: t.projectId, metadata: t.metadata };
  }
  buildRpcMap(t, s2) {
    const i3 = {};
    return t.forEach((e2) => {
      i3[e2] = this.getRpcUrl(e2, s2);
    }), i3;
  }
  async initialize(t) {
    if (this.rpc = this.getRpcConfig(t), this.chainId = this.rpc.chains.length ? v(this.rpc.chains) : v(this.rpc.optionalChains), this.signer = await oh.init({ projectId: this.rpc.projectId, metadata: this.rpc.metadata, disableProviderPing: t.disableProviderPing, relayUrl: t.relayUrl, storage: t.storage, storageOptions: t.storageOptions, customStoragePrefix: t.customStoragePrefix, telemetryEnabled: t.telemetryEnabled, logger: t.logger }), this.registerEventListeners(), await this.loadPersistedSession(), this.rpc.showQrModal) {
      let s2;
      try {
        const { WalletConnectModal: i3 } = await __vitePreload(() => import("./index-DX0xfL8v.js").then((n3) => n3.i), true ? __vite__mapDeps([0,1,2]) : void 0, import.meta.url);
        s2 = i3;
      } catch {
        throw new Error("To use QR modal, please install @walletconnect/modal package");
      }
      if (s2) try {
        this.modal = new s2(g({ projectId: this.rpc.projectId }, this.rpc.qrModalOptions));
      } catch (i3) {
        throw this.signer.logger.error(i3), new Error("Could not generate WalletConnectModal Instance");
      }
    }
  }
  loadConnectOpts(t) {
    if (!t) return;
    const { chains: s2, optionalChains: i3, rpcMap: e2 } = t;
    s2 && $e$3(s2) && (this.rpc.chains = s2.map((n3) => this.formatChainId(n3)), s2.forEach((n3) => {
      this.rpc.rpcMap[n3] = (e2 == null ? void 0 : e2[n3]) || this.getRpcUrl(n3);
    })), i3 && $e$3(i3) && (this.rpc.optionalChains = [], this.rpc.optionalChains = i3 == null ? void 0 : i3.map((n3) => this.formatChainId(n3)), i3.forEach((n3) => {
      this.rpc.rpcMap[n3] = (e2 == null ? void 0 : e2[n3]) || this.getRpcUrl(n3);
    }));
  }
  getRpcUrl(t, s2) {
    var i3;
    return ((i3 = this.rpc.rpcMap) == null ? void 0 : i3[t]) || `${q}?chainId=eip155:${t}&projectId=${s2 || this.rpc.projectId}`;
  }
  async loadPersistedSession() {
    if (this.session) try {
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
const z = w;
export {
  z as EthereumProvider,
  O3 as OPTIONAL_EVENTS,
  M2 as OPTIONAL_METHODS,
  m3 as REQUIRED_EVENTS,
  u as REQUIRED_METHODS,
  w as default
};
