module.exports = function (sequelize, DataTypes) {
    let Questions = sequelize.define ("Questions", {
        questions: {
            types: DataTypes.STRING,
            allowNull: false
        }
    });

    let Answers = sequalize.define("Answers", {
        answers: {
            text: DataTypes.TEXT,
            answer1: DataTypes.STRING,
            answer2: DataTypes.STRING,
            answer3: DataTypes.STRING,
            answer4: DataTypes.STRING,
            correctAnswer: DataTypes.STRING,
        }
    });

    Questions.associate = function(models) {
        Questions.belogsTo(models.Category,{
            foreignKey: {
                allowNull:false
            }
        });
    };
};