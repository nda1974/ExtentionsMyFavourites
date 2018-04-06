"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var sp_pnp_js_1 = require("sp-pnp-js");
var sp_core_library_1 = require("@microsoft/sp-core-library");
var LOG_SOURCE = "CC_MyFavourites_ApplicationCustomizer";
var FAVOURITES_LIST_NAME = "Favourites";
var MANDATORY_FAVOURITES_LIST_NAME = "MandatoryFavourites";
var MyFavouritesService = (function () {
    function MyFavouritesService(_props) {
        this._sessionStorageKey = "MyFavourites_";
        this._props = _props;
        this._context = _props.context;
        // this._currentWebUrl = this._context.pageContext.web.absoluteUrl;
        this._currentWebUrl = "https://lbforsikring.sharepoint.com/sites/intra";
        this._sessionStorageKey += this._currentWebUrl;
        sp_pnp_js_1.default.setup({
            sp: {
                // baseUrl: this._currentWebUrl
                baseUrl: "https://lbforsikring.sharepoint.com/sites/intra"
            }
        });
    }
    MyFavouritesService.prototype.getMyFavourites = function (tryFromCache) {
        return __awaiter(this, void 0, void 0, function () {
            var myFavourites, lbFavourites, i, i, spread;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        myFavourites = [];
                        lbFavourites = [];
                        return [4 /*yield*/, this._fetchFromSPList()];
                    case 1:
                        // if(tryFromCache) {
                        //     myFavourites = this._fetchFromSessionStorge();
                        //     if(myFavourites.length) {
                        //         return myFavourites;
                        //     }
                        // }
                        myFavourites = _a.sent();
                        return [4 /*yield*/, this._fetchFromSPList2()];
                    case 2:
                        lbFavourites = _a.sent();
                        for (i = 0; i < myFavourites.length; i++) {
                            myFavourites[i].Mandatory == false;
                        }
                        for (i = 0; i < lbFavourites.length; i++) {
                            lbFavourites[i].Mandatory == true;
                        }
                        spread = myFavourites.concat(lbFavourites);
                        // let favInCache: string = JSON.stringify(myFavourites);
                        // let favInCache: string = JSON.stringify(spread);
                        // window.sessionStorage.setItem(this._sessionStorageKey, favInCache);
                        // return myFavourites;
                        return [2 /*return*/, spread];
                }
            });
        });
    };
    MyFavouritesService.prototype.saveFavourite = function (favouriteItem) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, sp_pnp_js_1.default.sp.web.lists.getByTitle(FAVOURITES_LIST_NAME).items.add({
                        'Title': favouriteItem.Title,
                        'Description': favouriteItem.Description,
                        'ItemUrl': window.location.href,
                        'Mandatory': false
                    }).then(function (result) { return __awaiter(_this, void 0, void 0, function () {
                        var addedItem;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0:
                                    addedItem = result.data;
                                    console.log(addedItem);
                                    return [4 /*yield*/, this.getMyFavourites(false)];
                                case 1:
                                    _a.sent();
                                    return [2 /*return*/, true];
                            }
                        });
                    }); }, function (error) {
                        return false;
                    })];
            });
        });
    };
    MyFavouritesService.prototype.deleteFavourite = function (favouriteItemId) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, sp_pnp_js_1.default.sp.web.lists.getByTitle(FAVOURITES_LIST_NAME).items.getById(favouriteItemId).delete()
                        .then(function () { return __awaiter(_this, void 0, void 0, function () {
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0: return [4 /*yield*/, this.getMyFavourites(false)];
                                case 1:
                                    _a.sent();
                                    return [2 /*return*/, true];
                            }
                        });
                    }); }, function (error) {
                        return false;
                    })];
            });
        });
    };
    MyFavouritesService.prototype.updateFavourite = function (favouriteItem) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, sp_pnp_js_1.default.sp.web.lists.getByTitle(FAVOURITES_LIST_NAME).items.getById(favouriteItem.Id).update({
                        'Title': favouriteItem.Title,
                        'Description': favouriteItem.Description
                    }).then(function (result) { return __awaiter(_this, void 0, void 0, function () {
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0:
                                    console.log(result);
                                    return [4 /*yield*/, this.getMyFavourites(false)];
                                case 1:
                                    _a.sent();
                                    return [2 /*return*/, true];
                            }
                        });
                    }); }, function (error) {
                        return false;
                    })];
            });
        });
    };
    MyFavouritesService.prototype._fetchFromSessionStorge = function () {
        var result = [];
        var stringResult = window.sessionStorage.getItem(this._sessionStorageKey);
        if (stringResult) {
            try {
                sp_core_library_1.Log.info(LOG_SOURCE, "Fetched favourites from cache");
                result = JSON.parse(stringResult);
            }
            catch (error) {
                sp_core_library_1.Log.error(LOG_SOURCE, error);
            }
        }
        return result;
    };
    MyFavouritesService.prototype._fetchFromSPList = function () {
        return __awaiter(this, void 0, void 0, function () {
            var currentUserId;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this._getUserId()];
                    case 1:
                        currentUserId = _a.sent();
                        return [2 /*return*/, sp_pnp_js_1.default.sp.web.lists.getByTitle(FAVOURITES_LIST_NAME)
                                .items
                                .select("Id", "Title", "ItemUrl", "Description", "Mandatory")
                                .filter("Author eq " + currentUserId)
                                .get()
                                .then(function (myFavourites) {
                                sp_core_library_1.Log.info(LOG_SOURCE, "Fetched favourites from list");
                                return myFavourites;
                            })
                                .catch(function (error) {
                                sp_core_library_1.Log.error(LOG_SOURCE, error);
                                return [];
                            })];
                }
            });
        });
    };
    MyFavouritesService.prototype._fetchFromSPList2 = function () {
        return __awaiter(this, void 0, void 0, function () {
            var w, currentUserId;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        w = new sp_pnp_js_1.Web("https://lbforsikring.sharepoint.com/sites/intra");
                        return [4 /*yield*/, this._getUserId()];
                    case 1:
                        currentUserId = _a.sent();
                        return [2 /*return*/, w.lists.getByTitle(MANDATORY_FAVOURITES_LIST_NAME)
                                .items
                                .select("Id", "Title", "ItemUrl", "Description", "Mandatory")
                                .get()
                                .then(function (myFavourites) {
                                sp_core_library_1.Log.info(LOG_SOURCE, "Fetched favourites from list");
                                return myFavourites;
                            })
                                .catch(function (error) {
                                sp_core_library_1.Log.error(LOG_SOURCE, error);
                                return [];
                            })];
                }
            });
        });
    };
    MyFavouritesService.prototype._getUserId = function () {
        return sp_pnp_js_1.default.sp.site.rootWeb.ensureUser(this._context.pageContext.user.email).then(function (result) {
            return result.data.Id;
        });
    };
    return MyFavouritesService;
}());
exports.MyFavouritesService = MyFavouritesService;

//# sourceMappingURL=MyFavouritesService.js.map
