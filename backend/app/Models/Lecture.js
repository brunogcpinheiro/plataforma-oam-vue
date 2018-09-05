'use strict';

const Model = use('Model');

class Lecture extends Model {
    course() {
        return this.belongsTo("App/Models/Course");
    }
    
    module() {
        return this.belongsTo("App/Models/Module");
    }
}

module.exports = Lecture;
