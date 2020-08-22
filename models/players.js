

module.exports = function(sequelize, Datatypes){
    const Players = sequelize.define("players",{
        name:{
            type: Datatypes.STRING,
            allowNull: false,
            unique: true
        },

        score:{
            type: Datatypes.INTEGER,
            allowNull: false
        }
    })
    
    Players.associate = models => {
        Players.belongsTo(models.User,{
            foreignKey:{
                allowNull: false
            }
        })
    }
    return Players;
}