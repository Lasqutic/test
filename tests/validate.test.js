const { validate } = require('../src/index.js');

describe('validate', () => {
  test('should pass with valid payload', () => {
    expect(() =>
      validate({
        data: {
          payload: {
            name: 'John',
            email: '@mail',
            password: '123Password'
          }
        },
        name: 'TestFunc',
        instance: {}
      })
    ).not.toThrow();
  });

  test('should throw if payload is not an object', () => {
    expect(() =>
      validate({
        data: { payload: 'not-an-object' },
        name: 'TestFunc',
        instance: {}
      })
    ).toThrow('TestFunc: payload should be an object');
  });

  test('should throw if payload have required field name', () => {
    expect(() =>
      validate({
        data: {
          payload: {
            email: '@mail',
            password: '123Password'
          }
        },
        name: 'TestFunc',
        instance: {}
      })
    ).toThrow('TestFunc: payload should have required field name');
  });

  test('should throw if payload.name is empty', () => {
    expect(() =>
      validate({
        data: {
          payload: {
            name: '',
            email: '@mail',
            password: '123Password'
          }
        },
        name: 'TestFunc',
        instance: {}
      })
    ).toThrow('TestFunc: payload.name should not be empty');
  });

  test('should throw if payload dont have required field email', () => {
    expect(() =>
      validate({
        data: {
          payload: {
            name: { first: "john", last: "Test" },
            password: '123Password'
          }
        },
        name: 'TestFunc',
        instance: {}
      })
    ).toThrow('TestFunc: payload.name should be a string');
  });

  test('should throw if payload.email is empty ', () => {
    expect(() =>
      validate({
        data: {
          payload: {
            name: 'John',
            email: '',
            password: '123Password'
          }
        },
        name: 'TestFunc',
        instance: {}
      })
    ).toThrow('TestFunc: payload.email should not be empty');
  });

  test('should throw if payload.email !== "string"', () => {
    expect(() =>
      validate({
        data: {
          payload: {
            name: 'John',
            email: true,
            password: '123Password'
          }
        },
        name: 'TestFunc',
        instance: {}
      })
    ).toThrow('TestFunc: payload.email should be a string');
  });

  test('should throw if payload.password not exist', () => {
    expect(() =>
      validate({
        data: {
          payload: {
            name: 'John',
            email: '@mail',
          }
        },
        name: 'TestFunc',
        instance: {}
      })
    ).toThrow('TestFunc: payload should have required field password');
  });

  test('should throw if payload.password is empty string', () => {
    expect(() =>
      validate({
        data: {
          payload: {
            name: 'John',
            email: '@mail',
            password: ''
          }
        },
        name: 'TestFunc',
        instance: {}
      })
    ).toThrow('TestFunc: payload.password should not be empty');
  });

  test('should throw if payload.email is empty ', () => {
    expect(() =>
      validate({
        data: {
          payload: {
            name: 'John',
            email: '@mail',
            password: 1234567
          }
        },
        name: 'TestFunc',
        instance: {}
      })
    ).toThrow('TestFunc: payload.password should be a string');
  });
}); 
