import { render } from 'ejs';
import { Request, Response } from 'express';

const messages = [
  {
    text: 'Hi there!',
    user: 'Amando',
    added: new Date(),
  },
  {
    text: 'Hello World!',
    user: 'Charles',
    added: new Date(),
  },
];

export const homePage = (res: Response, req: Request) => {
  res.statusCode = 200;
  res.render('index', { messages });
};

export const newMessage = (res: Response, req: Request) => {
  const newExpression = 'test';
  if (req.method === 'GET') {
    req.statusCode = 200;
    res.render('new', { newExpression });
  } else if (req.method === 'POST') {
    req.statusCode = 200;
    res.json('created');
  } else {
    throw new Error('Requested Method not allowed.');
  }
};
