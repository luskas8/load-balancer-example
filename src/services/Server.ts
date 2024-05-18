import Express, { Router as TRouter, Express as TExpress } from "express";

export class Server {
    private app: TExpress;

    private constructor() {
        this.app = Express();
    }

    public static build(): Server {
        return new Server();
    }

    public middleswares() {
        this.app.use(Express.json());
    }

    public route(routes: TRouter) {
        this.app.use(routes);
    }

    public start(port: any) {
        this.app.listen(port, () => {
            console.log(`Server is running on port ${port}`);
        })
    }
}