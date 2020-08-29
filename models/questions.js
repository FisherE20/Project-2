module.exports = function (sequelize, DataTypes) {
    let Questions = sequelize.define ("Questions", {
        
        question_field: {
            type: DataTypes.STRING,
            allowNull: false
        },


        answer1: {
            type:DataTypes.STRING
        },
        answer2: {
            type:DataTypes.STRING
        },
        answer3: {
            type:DataTypes.STRING
        },
        answer4: {
            type:DataTypes.STRING
        },
        
        correctAnswer: {
            type:DataTypes.STRING
        },


        CategoryID: {
            type:DataTypes.INTEGER,
            allowNull: true
        }
    });

    return Questions;

};


