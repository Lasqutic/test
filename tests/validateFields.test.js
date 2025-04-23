const { validateFields } = require('../src/index.js');

describe('validateFields', () => {
    test('should pass with only allowed fields', () => {
        expect(() => {
            validateFields({
                data: {
                    name: 'John',
                    email: 'john@example.com',
                    password: '123456',
                    payload: {
                        meta: {},
                        source: {},
                        algorithm: 'z'
                    }
                },
                name: 'TestFunc',
                instance: {}
            });
        }).not.toThrow();
    });
  
    test('should throw with disallowed field', () => {
        expect(() => {
            validateFields({
                data: {
                    invalidField: 'test'
                },
                name: 'TestFunc',
                instance: {}
            });
        }).toThrow('TestFunc: data contains not allowed field — invalidField');
    });
  
    test('should throw with disallowed nested field', () => {
        expect(() => {
            validateFields({
                data: {
                    payload: {
                        notAllowed: true
                    }
                },
                name: 'TestFunc',
                instance: {}
            });
        }).toThrow('TestFunc: data contains not allowed field — notAllowed');
    });
  
    test('should allow empty object', () => {
        expect(() => {
            validateFields({
                data: {},
                name: 'TestFunc',
                instance: {}
            });
        }).not.toThrow();
    });
  
    test('should handle mixed allowed and disallowed fields', () => {
        expect(() => {
            validateFields({
                data: {
                    name: 'Test',
                    age: '21'
                },
                name: 'TestFunc',
                instance: {}
            });
        }).toThrow('TestFunc: data contains not allowed field — age');
    });
  });
  