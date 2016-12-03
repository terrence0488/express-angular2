"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var BaseRoute_1 = require("./BaseRoute");
var IndexRoute = (function (_super) {
    __extends(IndexRoute, _super);
    function IndexRoute() {
        _super.call(this);
    }
    IndexRoute.create = function (router) {
        router.get("/", function (req, res, next) {
            new IndexRoute().Index(req, res, next);
        });
    };
    IndexRoute.prototype.Index = function (req, res, next) {
        this.title = "Express Angular2";
        var options = {
            "message": "Welcome to the Express Angular2"
        };
        this.render(req, res, "Index", options);
    };
    return IndexRoute;
}(BaseRoute_1.BaseRoute));
exports.IndexRoute = IndexRoute;
//# sourceMappingURL=Index.js.map