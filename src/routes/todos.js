const Todo = require('../models/todo');
const CG = require('../core/crud-generator');

// TODO: need to improve client code of CG
const cg = new CG(Todo);
cg.all();

module.exports = cg.getExport();