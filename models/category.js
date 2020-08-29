module.exports =  function (sequelize, DataTypes) {
    let Category = sequelize.define("Category", {
        category_name: {
            type: DataTypes.STRING,
            allowNull: true
        }
    });

    return Category;

};