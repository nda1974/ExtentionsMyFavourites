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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var ReactDOM = require("react-dom");
var decorators_1 = require("@microsoft/decorators");
var sp_application_base_1 = require("@microsoft/sp-application-base");
var MyFavouritesTopBar_1 = require("./components/MyFavouritesTopBar/MyFavouritesTopBar");
var LOG_SOURCE = 'MyFavouritesApplicationCustomizer';
/** A Custom Action which can be run during execution of a Client Side Application */
var MyFavouritesApplicationCustomizer = (function (_super) {
    __extends(MyFavouritesApplicationCustomizer, _super);
    function MyFavouritesApplicationCustomizer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MyFavouritesApplicationCustomizer.prototype.onInit = function () {
        var placeholder;
        placeholder = this.context.placeholderProvider.tryCreateContent(sp_application_base_1.PlaceholderName.Top);
        // init the react top bar component.
        var element = React.createElement(MyFavouritesTopBar_1.default, {
            context: this.context
        });
        // render the react element in the top placeholder.
        ReactDOM.render(element, placeholder.domElement);
        return Promise.resolve();
    };
    __decorate([
        decorators_1.override
    ], MyFavouritesApplicationCustomizer.prototype, "onInit", null);
    return MyFavouritesApplicationCustomizer;
}(sp_application_base_1.BaseApplicationCustomizer));
exports.default = MyFavouritesApplicationCustomizer;

//# sourceMappingURL=MyFavouritesApplicationCustomizer.js.map
