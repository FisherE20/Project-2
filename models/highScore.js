
module.exports = function (sequelize, Datatypes) {
    const Highscore = sequelize.define("High_score",{
        current_score: {
            type: Datatypes.INTEGER,
        },
        high_Score: {
            type: Datatypes.INTEGER,
        }
    })

    Highscore.associate = models => {
        Highscore.belongsTo(models.User, {
            foreginKey: "id",
            as: "User"  
        })
    };
    return Highscore;
};