'use strict'

const Model = use('Model')

class Module extends Model {
    course() {
        return this.belongsTo("App/Models/Course");
    }
}

module.exports = Module;
