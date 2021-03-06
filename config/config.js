process.env.NODE_ENV = process.env.NODE_ENV || 'development';
process.env.PORT = process.env.PORT || 3000;

switch (process.env.NODE_ENV) {
  case 'development':
    process.env.MONGODB_URL = 'mongodb://localhost:27017/TodoApp';
    break;

  case 'production':
    process.env.MONGODB_URL = '';
    break;
}

console.log('ENV: ', process.env.NODE_ENV);
console.log('MONGODB: ', process.env.MONGODB_URL);
