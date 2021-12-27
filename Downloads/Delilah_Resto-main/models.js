const conexion = require("./conexion")
const sequelize = conexion.sequelize
const { Model, DataTypes } = require('sequelize');


sequelize.define()

class usuario extends Model { }
usuario.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    username: DataTypes.STRING,
    full_name: DataTypes.STRING,
    email: DataTypes.STRING,
    phone: DataTypes.STRING,
    adress: DataTypes.STRING,
    password: DataTypes.STRING,
    isAdmin: DataTypes.BOOLEAN,

}, {
    sequelize,
    modelName: "Usuario"
});


class productos extends Model { }
productos.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    img_url: DataTypes.STRING,
    price: DataTypes.FLOAT,
    stock: DataTypes.INTEGER

}, {
    sequelize,
    modelName: "Productos"
});



class pedidos extends Model { }
pedidos.init({
    order_id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    payment_method: DataTypes.STRING,
    total: DataTypes.INTEGER,
    user_id: DataTypes.INTEGER,


}, {
    sequelize,
    modelName: "Pedidos2"
});



class detalle_pedidos extends Model { }
detalle_pedidos.init({

    id_detail: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },

    product_name: DataTypes.STRING,
    product_cantidad: DataTypes.INTEGER,
    product_price: DataTypes.FLOAT

}, {
    sequelize,
    modelName: "Detalle_pedido"
});

class estados extends Model { }
estados.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true
    },
    estado: {type:DataTypes.STRING}

}, {
    sequelize,
    modelName: "Estado"
});
 


module.exports = { usuario, productos, pedidos, detalle_pedidos, estados}

