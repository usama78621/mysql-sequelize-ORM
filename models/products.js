module.exports = (sequelize, DataTypes) => {
  const Product = new sequelize.define("product", {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    price: {
      type: DataTypes.INTEGER,
    },
    description: {
      type: DataTypes.TEXT,
    },
    published: {
      type: DataTypes.BOOLEAN,
    },
  });
  return Product;
};
