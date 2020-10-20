import express from "express";
import * as bodyParser from "body-parser";
import { UserRoutes } from "./routes/users.route";

class App {
  // Create a new express application instance
  public app: express.Application = express();
  public routePrv: UserRoutes = new UserRoutes();

  constructor() {
    this.app = express();
    this.config();
    this.routePrv.routes(this.app);
  }

  private config(): void {
    this.app.use(bodyParser.json());
    this.app.use(bodyParser.urlencoded({ extended: false }));
  }
}

export default new App().app;