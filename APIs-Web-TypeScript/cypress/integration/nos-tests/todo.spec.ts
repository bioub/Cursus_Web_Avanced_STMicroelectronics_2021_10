/// <reference types="cypress" />

describe('Ma todolist', () => {
  beforeEach(() => {
    cy.intercept(
      {
        method: 'GET',
        url: 'http://localhost:3000/todos',
      },
      {
        statusCode: 200,
        body: [
          { id: 1, title: 'ABC', completed: false },
          { id: 2, title: 'DEF', completed: true },
          { id: 3, title: 'GHI', completed: false },
        ],
        headers: { 'Access-Control-Allow-Origin': 'http://localhost:8080', 'Access-Control-Allow-Credentials': 'true' },
        delayMs: 100,
      },
    ).as('getTodos');

    // cy.wait('@getTodos');
    cy.visit('http://localhost:8080');
  });

  it('should show 3 todos', () => {
    cy.get('.todo-row').should('have.length', 3);
  });

  it('should add a todo', () => {
    cy.intercept(
      {
        method: 'POST',
        url: 'http://localhost:3000/todos',
      },
      {
        statusCode: 200,
        body: { id: 4, title: 'KLM', completed: false },
        headers: { 'Access-Control-Allow-Origin': 'http://localhost:8080', 'Access-Control-Allow-Credentials': 'true' },
        delayMs: 100,
      },
    ).as('postTodo');
    cy.get('.todo-input').type('KLM{enter}');
  });
});
