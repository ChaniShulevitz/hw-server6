import { Request, Response, Router, Express } from 'express';
import TaskService from './tasks/tasks-service';
import TaskRouter from './tasks/tasks-api';

const HOST = "localhost";
const PORT = 5000;
export default class App {

    private app: Express;
    private TaskService: TaskService;
    private TaskRouter: TaskRouter;

    constructor() {

    }

    public init() {


        this.app.listen(PORT, HOST, () => {
            console.log(`Listening on: http://${HOST}:${PORT}`);
        })
    }
}


