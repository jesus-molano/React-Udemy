import { todoReducer } from '../../components/08-useReducer/todoReducer';
import { demoTodos } from '../fixtures/demoTodos';

describe('todoReducer tests', () => {
	test('should return the default state', () => {
		const state = todoReducer(demoTodos, {});
		expect(state).toEqual(demoTodos);
	});
	test('should add a TODO', () => {
		const newTodo = {
			id: 3,
			desc: 'Jelou',
			done: false,
		};
		const action = {
			type: 'add',
			payload: newTodo,
		};
		const state = todoReducer(demoTodos, action);
		expect(state.length).toBe(3);
		expect(state).toEqual([...demoTodos, newTodo]);
	});
	test('should delete todo', () => {
		const action = {
			type: 'delete',
			payload: 1,
		};
		const state = todoReducer(demoTodos, action);
		expect(state.length).toBe(1);
		expect(state).toEqual([demoTodos[1]]);
	});
  test('should toggle the todo', () => {
    const action = {
			type: 'toggle',
			payload: 2,
		};
    const state = todoReducer(demoTodos, action);
    expect(state[1].done).toBe(true);
    expect(state[0]).toEqual(demoTodos[0])
  });
});
