// import { Request, Response } from "express";
import { UserService } from "../services/user.service";
import express from "express";

export class UserRoutes {
  
  public userService: UserService = new UserService();

  public routes(app: express.Application): void {

    //Sample Hello Message
    app
      .route("/")
      .get(this.userService.index);


    //DB interaction Route (Users Table)
    app
      .route("/user")
      .get(this.userService.getUsers)
      .post(this.userService.createUser);
  }
}