const sequelize = require("../db");
const { DataTypes } = require("sequelize");

const User = sequelize.define("user", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  email: {
    type: DataTypes.STRING,
    unique: true,
    // allowNull: false,
  },
  // name: {
  //   type: DataTypes.STRING,
  //   // allowNull: false,
  // },
  password: {
    type: DataTypes.STRING,
    // allowNull: false,
  },
  role: {
    type: DataTypes.STRING,
    defaultValue: "USER",
  },
});

const Basket = sequelize.define("baskets", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  state: {
    type: DataTypes.STRING,
    defaultValue: "active",
  },
});

const Service = sequelize.define("service", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  price: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  img: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});
const BasketService = sequelize.define("basketService", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
});
const Type = sequelize.define("type", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
});
User.hasOne(Basket);
Basket.belongsTo(User);

Basket.hasMany(BasketService);
BasketService.belongsTo(Basket);

Service.hasMany(BasketService);
BasketService.belongsTo(Service);

Type.hasMany(Service);
Service.belongsTo(Type);

module.exports = {
  User,
  Basket,
  Service,
  BasketService,
  Type,
};
