// Jest setup file
process.env.NODE_ENV = 'test';
process.env.JWT_SECRET = 'test-jwt-secret-key';
process.env.MONGODB_URI = 'mongodb://localhost:27017/ecommerce_test';

// Mock mongoose for tests
jest.mock('mongoose', () => {
  const mockConnect = jest.fn().mockResolvedValue({
    connection: { host: 'localhost' }
  });
  
  return {
    connect: mockConnect,
    disconnect: jest.fn().mockResolvedValue(undefined),
    connection: {
      collections: {},
      host: 'localhost'
    },
    Schema: class MockSchema {
      constructor() {}
      pre() { return this; }
      index() { return this; }
    },
    model: jest.fn().mockImplementation(() => {
      const mockModel = class {
        constructor(data) {
          Object.assign(this, data);
          this._id = 'mock-id';
        }
        
        static find() {
          return {
            populate: () => ({
              sort: () => ({
                limit: () => ({
                  skip: () => []
                })
              })
            })
          };
        }
        
        static findById() {
          return Promise.resolve(null);
        }
        
        static findOne() {
          return Promise.resolve(null);
        }
        
        static findByIdAndUpdate() {
          return Promise.resolve(null);
        }
        
        static findByIdAndDelete() {
          return Promise.resolve(null);
        }
        
        static create() {
          return Promise.resolve(new mockModel());
        }
        
        static countDocuments() {
          return Promise.resolve(0);
        }
        
        save() {
          return Promise.resolve(this);
        }
        
        matchPassword() {
          return Promise.resolve(false);
        }
      };
      
      return mockModel;
    })
  };
});