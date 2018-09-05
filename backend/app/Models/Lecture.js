'use strict';

const Model = use('Model');

class Lecture extends Model {
    module() {
        return this.belongsTo("App/Models/Module");
    }
}

module.exports = Lecture;
