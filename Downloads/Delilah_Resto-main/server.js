const express = require("express");
const app = express();
const cors = require("cors");
const helmet = require("helmet")

const usersController = require("./Controller/usersController")
const productsController = require("./Controller/productsController")
const ordersController = require("./Controller/ordersController")
const initialController = require("./Controller/initialController")
const db = require("./conexion")
const models = require("./models")



app.use(express.json())
app.use(cors());
app.use(helmet());
app.use("/users", usersController);
app.use("/products", productsController);
app.use("/orders", ordersController);
app.use("/initialProducts", initialController);
app.use("/init", initialController);


db.init()
    .then(async () => {

        db.sequelize.sync({ force: false }).then(() => {
            console.log("Database Connected Succesfull…");
        }).catch(err => {
            console.log(err);
        });

        console.log('Conectado a la Base de Datos');
        app.set("port", process.env.PORT || 3000);
        app.listen(app.get("port"), () => {
            console.log("Server on port", app.get("port"))
        })

    }).catch((err) => {
        console.log('Error al conectar a la db', err);
    });

//Associations

models.pedidos.hasMany(models.detalle_pedidos)
models.detalle_pedidos.belongsTo(models.pedidos) 

models.estados.hasMany(models.pedidos)
models.pedidos.belongsTo(models.estados)

