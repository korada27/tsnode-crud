"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// import { Request, Response } from "express";
var user_service_1 = require("../services/user.service");
var UserRoutes = /** @class */ (function () {
    function UserRoutes() {
        this.userService = new user_service_1.UserService();
    }
    UserRoutes.prototype.routes = function (app) {
        //Sample Hello Message
        app
            .route("/")
            .get(this.userService.index);
        //DB interaction Route (Users Table)
        app
            .route("/user")
            .get(this.userService.getUsers)
            .post(this.userService.createUser);
    };
    return UserRoutes;
}());
exports.UserRoutes = UserRoutes;
