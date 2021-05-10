module.exports = (sequelize, datTtype) => {
    return sequelize.define('post', {
        id: {
            type: datTtype.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        title: {
            type: datTtype.STRING,
            unique: true,
        },
        text: {
            type: datTtype.TEXT
        },
        autor: {
            type: datTtype.STRING
        }
    });
}