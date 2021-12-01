import { Request, Response } from 'express';
import { inject, injectable } from 'inversify';
import { container } from '../container';
import { TodosModel } from './model';
import { Todo } from './todo';

@injectable()
export class TodosController {

  @inject(TodosModel)
  private model!: TodosModel;

  async list(req: Request, res: Response) {
    const todos = await this.model.find();
    res.json(todos);
  }

  async add(req: Request<any, Todo>, res: Response) {
    const todo = await this.model.create(req.body);
    res.status(201).json(todo);
  }

  async delete(
    req: Request<{ todoId: string }>,
    res: Response,
  ) {
    const todo = await this.model.findByIdAndDelete(req.params.todoId);

    if (!todo) {
      return res.status(404).json({
        reason: 'Todo not found',
      });
    }

    res.json(todo);
  }

}
