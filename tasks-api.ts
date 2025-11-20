import { Request, Response, Router } from 'express';
import  TaskService from './tasks-service';
import { Task } from './models';
export default class TaskRouter{
public router:Router;
constructor(private tasksService:TaskService){
    this.router=Router();
}

 public init() {
 }
      private setRoutes() {
    
     this.router.get('/', (req: Request, res: Response) => {     
            res.send(this.tasksService.getAll());
        });
      
        
        this.router.post('/', (req: Request, res: Response) => {
            const t = req.body.title as string;
            const d = req.body.doDate as Date;
            const tsk=req.body as Task;
            const generateId=this.tasksService.createTask(tsk);
            res.status(201).send(generateId);
             
       
        });
         this.router.patch('/:id', (req: Request, res: Response) => {
            const id=req.params.id as string;
            this.tasksService.completeTask(id);
            res.status(201);
             
       
        });

}
 }
