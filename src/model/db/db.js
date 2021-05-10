const Sequalize = require('sequelize');
const PostModel = require('../factory/post');
const Keys = require('../keys');


const sequelize = new Sequalize(Keys.database.database, Keys.database.user, Keys.database.password, { 
    host: Keys.database.host, 
    dialect: Keys.database.dialect
});

const post = PostModel(sequelize, Sequalize);

sequelize.sync({force:false}).then(() =>{
    console.log('Tablas sincronizadas');
})

module.exports = {post}
