const Books = (sequelize, DataTypes) => {
  const Book = sequelize.define("Books", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    title: DataTypes.STRING,
    author: DataTypes.STRING,
    pageQuantity: DataTypes.INTEGER,
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE,
  }, {
    underscored: true,
    tableName: 'Books'
  });

  return Book;
};

module.exports = Books;
