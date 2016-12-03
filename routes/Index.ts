import { Express, Router, Request, Response, NextFunction } from 'express';
import { BaseRoute } from "./BaseRoute";

export class IndexRoute extends BaseRoute {

    public static create(router: Router) {
        router.get("/", (req: Request, res: Response, next: NextFunction) => {
            new IndexRoute().Index(req, res, next);
        });
    }

    constructor() {
        super();
    }

    public Index(req: Request, res: Response, next: NextFunction) {
        this.title = "Express Angular2";
        let options: Object = {
            "message": "Welcome to the Express Angular2"
        };

        this.render(req, res, "Index", options);
    }
}