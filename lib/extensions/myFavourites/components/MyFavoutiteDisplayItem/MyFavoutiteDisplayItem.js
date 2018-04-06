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
var Link_1 = require("office-ui-fabric-react/lib/Link");
var Spinner_1 = require("office-ui-fabric-react/lib/Spinner");
var MyFavourites_module_scss_1 = require("../MyFavourites.module.scss");
var MyFavoutiteDisplayItem = (function (_super) {
    __extends(MyFavoutiteDisplayItem, _super);
    function MyFavoutiteDisplayItem(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            status: React.createElement("span", null),
            disableButtons: false
        };
        return _this;
    }
    MyFavoutiteDisplayItem.prototype.render = function () {
        var firstLetter = this.props.displayItem.Title.charAt(0).toUpperCase();
        var showEditButton = this.props.displayItem.Mandatory;
        // const el=showEditButton?(<div>Show</div>):(<div>Hide</div>);
        return (React.createElement("div", { className: "" + MyFavourites_module_scss_1.default.ccitemContent },
            React.createElement(Link_1.Link, { href: this.props.displayItem.ItemUrl, className: MyFavourites_module_scss_1.default.ccRow },
                React.createElement("div", { className: "ms-font-su " + MyFavourites_module_scss_1.default.ccInitials }, firstLetter),
                React.createElement("div", { className: MyFavourites_module_scss_1.default.ccitemName },
                    React.createElement("span", { className: "ms-font-l" }, this.props.displayItem.Title)),
                React.createElement("div", { className: MyFavourites_module_scss_1.default.ccitemDesc }, this.props.displayItem.Description)),
            this.props.displayItem.Mandatory == false ?
                React.createElement("div", { className: MyFavourites_module_scss_1.default.ccitemDesc },
                    React.createElement(Button_1.PrimaryButton, { "data-automation-id": 'btnEdit', iconProps: { iconName: 'Edit' }, text: 'Ret', disabled: this.state.disableButtons, onClick: this._editFavourite.bind(this), className: MyFavourites_module_scss_1.default.ccButton }),
                    React.createElement(Button_1.PrimaryButton, { "data-automation-id": 'btnDel', iconProps: { iconName: 'ErrorBadge' }, text: 'Fjern', disabled: this.state.disableButtons, onClick: this._deleteFavourite.bind(this), className: MyFavourites_module_scss_1.default.ccButton }),
                    React.createElement("div", { className: MyFavourites_module_scss_1.default.ccStatus }, this.state.status))
                : null));
    };
    MyFavoutiteDisplayItem.prototype._deleteFavourite = function () {
        return __awaiter(this, void 0, void 0, function () {
            var status, disableButtons;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        status = React.createElement(Spinner_1.Spinner, { size: Spinner_1.SpinnerSize.small });
                        disableButtons = true;
                        this.setState(__assign({}, this.state, { status: status, disableButtons: disableButtons }));
                        return [4 /*yield*/, this.props.deleteFavourite(this.props.displayItem.Id)];
                    case 1:
                        _a.sent();
                        status = React.createElement("span", null);
                        disableButtons = false;
                        this.setState(__assign({}, this.state, { status: status, disableButtons: disableButtons }));
                        return [2 /*return*/];
                }
            });
        });
    };
    MyFavoutiteDisplayItem.prototype._editFavourite = function () {
        var status = React.createElement(Spinner_1.Spinner, { size: Spinner_1.SpinnerSize.small });
        var disableButtons = true;
        this.setState(__assign({}, this.state, { status: status, disableButtons: disableButtons }));
        this.props.editFavoutite(this.props.displayItem);
        status = React.createElement("span", null);
        disableButtons = false;
        this.setState(__assign({}, this.state, { status: status, disableButtons: disableButtons }));
    };
    return MyFavoutiteDisplayItem;
}(React.Component));
exports.default = MyFavoutiteDisplayItem;

//# sourceMappingURL=MyFavoutiteDisplayItem.js.map
