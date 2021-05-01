const {Model, DataTypes} = require('sequelize');
const sequelize = require('../config/connection');

class Comment extends Model{}


Comment.init(
    {
    
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        comment_text: {
            type: DataTypes.STRING,
            validate: {
            // this means the comment_text must be at least three characters long
            len: [3]
            }
        },
        user_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'user',
                key: 'id'
            }
        },
        blog_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'blog',
                key: 'id'
            }
        }
        
    },
    
    {
        sequelize,
        freezeTableName: true,
        underscored: true,
        modelName: 'comment'
    }
);


module.exports = Comment;