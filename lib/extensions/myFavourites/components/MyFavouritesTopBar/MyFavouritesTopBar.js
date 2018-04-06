"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
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
var React = require("react");
var Button_1 = require("office-ui-fabric-react/lib/Button");
var Panel_1 = require("office-ui-fabric-react/lib/Panel");
var Dialog_1 = require("office-ui-fabric-react/lib/Dialog");
var TextField_1 = require("office-ui-fabric-react/lib/TextField");
var Spinner_1 = require("office-ui-fabric-react/lib/Spinner");
var MessageBar_1 = require("office-ui-fabric-react/lib/MessageBar");
var List_1 = require("office-ui-fabric-react/lib/List");
var FocusZone_1 = require("office-ui-fabric-react/lib/FocusZone");
var MyFavouritesService_1 = require("../../../services/MyFavouritesService");
var MyFavoutiteDisplayItem_1 = require("../MyFavoutiteDisplayItem/MyFavoutiteDisplayItem");
var MyFavourites_module_scss_1 = require("../MyFavourites.module.scss");
var MyFavouritesTopBar = (function (_super) {
    __extends(MyFavouritesTopBar, _super);
    function MyFavouritesTopBar(props) {
        var _this = _super.call(this, props) || this;
        _this._self = _this;
        _this._MyFavouriteItems = [];
        _this.state = {
            showPanel: false,
            showDialog: false,
            dialogTitle: "",
            myFavouriteItems: [],
            itemInContext: {
                Id: 0,
                Title: "",
                Description: "",
                Mandatory: false
            },
            isEdit: false,
            status: React.createElement(Spinner_1.Spinner, { size: Spinner_1.SpinnerSize.large, label: "Henter..." }),
            disableButtons: false
        };
        _this._MyFavouritesServiceInstance = new MyFavouritesService_1.MyFavouritesService(_this.props);
        _this._getMyFavourites.bind(_this);
        return _this;
    }
    MyFavouritesTopBar.prototype.render = function () {
        return (React.createElement("div", { className: MyFavourites_module_scss_1.default.ccTopBar },
            React.createElement(Button_1.PrimaryButton, { "data-id": "menuButton", title: "Vis mine favoritter", text: "Mine favoritter", ariaLabel: "Vis", iconProps: { iconName: "View" }, className: MyFavourites_module_scss_1.default.ccTopBarButton, onClick: this._showMenu.bind(this) }),
            React.createElement(Button_1.PrimaryButton, { "data-id": "menuButton", title: "Tilføj denne side til 'Mine favoritter'", text: "Tilføj", ariaLabel: "Tilføj", iconProps: { iconName: "Add" }, className: MyFavourites_module_scss_1.default.ccTopBarButton, onClick: this._showDialog.bind(this) }),
            React.createElement(Panel_1.Panel, { isOpen: this.state.showPanel, type: Panel_1.PanelType.medium, onDismiss: this._hideMenu.bind(this), headerText: "Mine favoritter", headerClassName: "ms-font-xl " + MyFavourites_module_scss_1.default.ccPanelHeader, isLightDismiss: true },
                React.createElement("div", { "data-id": "menuPanel" },
                    React.createElement(TextField_1.TextField, { placeholder: "Filtrer favoritter...", iconProps: { iconName: "Filter" }, onBeforeChange: this._onFilterChanged.bind(this) }),
                    React.createElement("div", null, this.state.status),
                    React.createElement(FocusZone_1.FocusZone, { direction: FocusZone_1.FocusZoneDirection.vertical }, this.state.myFavouriteItems.length > 0 ?
                        React.createElement(List_1.List, { items: this.state.myFavouriteItems, onRenderCell: this._onRenderCell.bind(this) }) :
                        React.createElement(MessageBar_1.MessageBar, { messageBarType: MessageBar_1.MessageBarType.warning, isMultiline: false }, "Du har ingen favoritter.")))),
            React.createElement(Dialog_1.Dialog, { hidden: !this.state.showDialog, onDismiss: this._hideDialog, dialogContentProps: {
                    type: Dialog_1.DialogType.largeHeader,
                    title: this.state.dialogTitle
                }, modalProps: {
                    titleAriaId: "myFavDialog",
                    subtitleAriaId: "myFavDialog",
                    isBlocking: false,
                    containerClassName: "ms-dialogMainOverride"
                } },
                React.createElement("div", null, this.state.status),
                React.createElement(TextField_1.TextField, { label: "Navn", onChanged: this._setTitle.bind(this), value: this.state.itemInContext.Title }),
                React.createElement(TextField_1.TextField, { label: "Beskrivelse", multiline: true, rows: 4, onChanged: this._setDescription.bind(this), value: this.state.itemInContext.Description }),
                React.createElement(Dialog_1.DialogFooter, null,
                    React.createElement(Button_1.PrimaryButton, { onClick: this._saveMyFavourite.bind(this), disabled: this.state.disableButtons, text: "Gem", iconProps: { iconName: "Save" }, className: MyFavourites_module_scss_1.default.ccDialogButton }),
                    React.createElement(Button_1.DefaultButton, { onClick: this._hideDialog.bind(this), disabled: this.state.disableButtons, text: "Annuller", iconProps: { iconName: "Cancel" } })))));
    };
    //#region CRUD
    MyFavouritesTopBar.prototype.deleteFavourite = function (favouriteItemId) {
        return __awaiter(this, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this._MyFavouritesServiceInstance.deleteFavourite(favouriteItemId)];
                    case 1:
                        result = _a.sent();
                        if (result) {
                            this._getMyFavourites();
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    MyFavouritesTopBar.prototype.editFavourite = function (favouriteItem) {
        console.log(favouriteItem);
        var status = React.createElement("span", null);
        var dialogTitle = "Rediger favorit";
        this.setState(__assign({}, this.state, { showPanel: false, itemInContext: favouriteItem, isEdit: true, showDialog: true, dialogTitle: dialogTitle, status: status }));
    };
    MyFavouritesTopBar.prototype._getMyFavourites = function () {
        return __awaiter(this, void 0, void 0, function () {
            var status, myFavouriteItems;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        status = React.createElement(Spinner_1.Spinner, { size: Spinner_1.SpinnerSize.large, label: 'Henter...' });
                        this.setState(__assign({}, this.state, { status: status }));
                        return [4 /*yield*/, this._MyFavouritesServiceInstance.getMyFavourites(true)];
                    case 1:
                        myFavouriteItems = _a.sent();
                        console.log(myFavouriteItems);
                        this._MyFavouriteItems = myFavouriteItems;
                        status = React.createElement("span", null);
                        this.setState(__assign({}, this.state, { myFavouriteItems: myFavouriteItems, status: status }));
                        return [2 /*return*/];
                }
            });
        });
    };
    MyFavouritesTopBar.prototype._saveMyFavourite = function () {
        return __awaiter(this, void 0, void 0, function () {
            var status, disableButtons, itemToSave, itemToEdit, result, _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        status = React.createElement(Spinner_1.Spinner, { size: Spinner_1.SpinnerSize.large, label: 'Henter...' });
                        disableButtons = true;
                        this.setState(__assign({}, this.state, { status: status, disableButtons: disableButtons }));
                        itemToSave = {
                            Title: this.state.itemInContext.Title,
                            Description: this.state.itemInContext.Description,
                            Mandatory: false
                        };
                        itemToEdit = __assign({}, itemToSave, { Id: this.state.itemInContext.Id });
                        if (!this.state.isEdit) return [3 /*break*/, 2];
                        return [4 /*yield*/, this._MyFavouritesServiceInstance.updateFavourite(itemToEdit)];
                    case 1:
                        _a = _b.sent();
                        return [3 /*break*/, 4];
                    case 2: return [4 /*yield*/, this._MyFavouritesServiceInstance.saveFavourite(itemToSave)];
                    case 3:
                        _a = _b.sent();
                        _b.label = 4;
                    case 4:
                        result = _a;
                        if (result) {
                            status = React.createElement(MessageBar_1.MessageBar, { messageBarType: MessageBar_1.MessageBarType.success, isMultiline: false }, "Done!");
                        }
                        else {
                            status = React.createElement(MessageBar_1.MessageBar, { messageBarType: MessageBar_1.MessageBarType.error, isMultiline: false }, "There was an error!");
                        }
                        disableButtons = false;
                        this.setState(__assign({}, this.state, { status: status, disableButtons: disableButtons }));
                        return [2 /*return*/];
                }
            });
        });
    };
    //#endregion
    //#region Render related
    MyFavouritesTopBar.prototype._showMenu = function () {
        this._getMyFavourites();
        this.setState({ showPanel: true });
    };
    MyFavouritesTopBar.prototype._hideMenu = function () {
        this.setState({ showPanel: false });
    };
    MyFavouritesTopBar.prototype._showDialog = function () {
        var itemInContext = {
            Id: 0,
            Title: "",
            Description: "",
            Mandatory: false
        };
        var isEdit = false;
        var status = React.createElement("span", null);
        var dialogTitle = "Tilføj til mine favoritter";
        this.setState(__assign({}, this.state, { itemInContext: itemInContext, isEdit: isEdit, showDialog: true, dialogTitle: dialogTitle, status: status }));
    };
    MyFavouritesTopBar.prototype._hideDialog = function () {
        this.setState({ showDialog: false });
    };
    MyFavouritesTopBar.prototype._onRenderCell = function (myFavouriteItem, index) {
        var animationClass = "ms-slideDownIn20";
        return (React.createElement("div", { className: animationClass + " " + MyFavourites_module_scss_1.default.ccitemCell, "data-is-focusable": true },
            React.createElement(MyFavoutiteDisplayItem_1.default, { displayItem: myFavouriteItem, deleteFavourite: this.deleteFavourite.bind(this), editFavoutite: this.editFavourite.bind(this) })));
    };
    MyFavouritesTopBar.prototype._onFilterChanged = function (text) {
        var items = this._MyFavouriteItems;
        this.setState({
            myFavouriteItems: text ?
                items.filter(function (item) { return item.Title.toLowerCase().indexOf(text.toLowerCase()) >= 0; }) :
                items
        });
    };
    //#endregion
    MyFavouritesTopBar.prototype._setTitle = function (value) {
        var itemInContext = this.state.itemInContext;
        itemInContext.Title = value;
        this.setState(__assign({}, this.state, { itemInContext: itemInContext }));
    };
    MyFavouritesTopBar.prototype._setDescription = function (value) {
        var itemInContext = this.state.itemInContext;
        itemInContext.Description = value;
        this.setState(__assign({}, this.state, { itemInContext: itemInContext }));
    };
    return MyFavouritesTopBar;
}(React.Component));
exports.default = MyFavouritesTopBar;

//# sourceMappingURL=MyFavouritesTopBar.js.map
