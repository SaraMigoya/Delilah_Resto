const express = require("express");
const router = express.Router();
const models = require("../models");
const { productosCreados, validateJwt } = require("../middlewares");

router.post("/", productosCreados, validateJwt, async (req, res) => {

    if (req.user.admin == false) {
        res.send("Sólo un administrador puede realizar altas y/o modificar productos.")
        return
    }

    const { name, description, price , stock} = req.body;
    const newProduct = {
        name,
        description,
        price,
        stock
    }

    const product = await models.productos.create(newProduct)

    if (product) return res.status(200).json(product);

    res.status(400).json({
        message: "No se pudo crear el usuario"
    })

})

   
    .get("/", async (req, res) => {
        const product = await models.productos.findAll()

        if (product.length > 0) return res.status(200).json(product);
        res.status(400).json({
            message: "No se encontraron product registrados con esos datos"
        })
    })

    .get("/:id", async (req, res) => {
        const product = await models.productos.findOne({
            where: { id: req.params.id }
        })
        res.status(200).json(product)

    })

    .put("/:id", validateJwt, async (req, res) => {

        if (req.user.admin == false) {
            res.send("Sólo un administrador puede realizar altas y/o modificar productos")
            return
        }
        const updateProduct = await models.productos.update(req.body, {
            where: { id: req.params.id }
        })


        if (updateProduct) return res.status(200).json({ messege: `${req.body.name} fue actualizado con exito` })
        return res.status(400).json({ message: `No se encontro producto con el ID: ${req.params.id}` })
    })

    .delete("/:id", validateJwt, async (req, res) => {
        if (req.user.admin == false) {
            res.send("Sólo un administrador puede realizar altas y/o modificar productos")
            return
        }
        const deleteProduct = await models.productos.destroy({
            where: { id: req.params.id }
        })
        if (deleteProduct) return res.status(200).json({ messege: `El producto fue eliminado con exito` })
        return res.status(400).json({
            message: `No se encontro el producto con el ID: ${req.params.id}`
        })
    })




module.exports = router