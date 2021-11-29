import { Request, Response } from 'express';
import { create, find, findByIdAndDelete } from './model';
import { Todo } from './todo';

export async function todoListCtrl(req: Request, res: Response) {
  const todos = await find();
  res.json(todos);
}

export async function todoAddCtrl(req: Request<any, Todo>, res: Response) {
  const todo = await create(req.body);
  res.status(201).json(todo);
}

export async function todoDeleteCtrl(
  req: Request<{ todoId: string }>,
  res: Response,
) {
  const todo = await findByIdAndDelete(req.params.todoId);

  if (!todo) {
    return res.status(404).json({
      reason: 'Todo not found',
    });
  }

  res.json(todo);
}
