const Books = (sequelize, DataTypes) => {
  const Book = sequelize.define("Books", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
    title: DataTypes.STRING,
    author: DataTypes.STRING,
    pageQuantity: DataTypes.INTEGER,
    createdAt: DataTypes.DATE,
  }, {
    timestamps: false,
  });

  return Book;
};

module.exports = Books;
