const express = require("express");
const router = express.Router();
const app = express();
const models = require("../models");
const { validateJwt } = require("../middlewares");



router.post("/", validateJwt, async (req, res) => {

    const { id, payment_method, cantidad } = req.body

    const username = await models.usuario.findOne({
        where: { username: req.user.nombreUser }
    })

    let array_consulta = Array.isArray(cantidad);

    if (array_consulta) {
        var total_order = 0

        for (let i = 0; i < cantidad.length; i++) {

            const product = await models.productos.findOne({
                where: { id: id[i] }
            })

            total_order += (product.price * cantidad[i])
            const newStock = product.stock - cantidad[i]


            if (newStock < 0) {
                return res.send(`¡Lo sentimos! No hay suficiente stock para realizar el pedido.cl`)
            }

            await models.productos.update({ stock: newStock }, {
                where: { id: id[i] }
            })

            const newDetail = {
                product_name: product.dataValues.name,
                product_cantidad: cantidad[i],
                product_price: product.dataValues.price
            }
            await models.detalle_pedidos.create(newDetail)

        }

        newOrder = {
            payment_method: payment_method,
            total: total_order,
            user_id: username.id,
            EstadoId: 1

        }

        const pedidoRealizado = await models.pedidos.create(newOrder)
        await models.detalle_pedidos.update({ Pedidos2OrderId: pedidoRealizado.order_id }, {
            where: { Pedidos2OrderId: null }
        });
        if (pedidoRealizado) return res.status(200).json({ pedidoRealizado });
        res.status(400).json({
            message: "No se pudo realizar el pedido"
        })


    } else {

        const product = await models.productos.findOne({
            where: { id: id }
        })

        const newStock = product.stock - cantidad


        if (newStock < 0) {
            return res.send(`¡Lo sentimos! No hay suficiente stock para realizar el pedido.`)
        }

        await models.productos.update({ stock: newStock }, {
            where: { id: id }
        })

        const newDetail = {
            product_name: product.dataValues.name,
            product_cantidad: cantidad,
            product_price: product.dataValues.price
        }
        await models.detalle_pedidos.create(newDetail)



        newOrder = {
            payment_method: payment_method,
            total: product.price * cantidad,
            user_id: username.id,
            EstadoId: 1

        }

        const pedidoRealizado = await models.pedidos.create(newOrder)
        await models.detalle_pedidos.update({ Pedidos2OrderId: pedidoRealizado.order_id }, {
            where: { Pedidos2OrderId: null }
        });
        if (pedidoRealizado) return res.status(200).json({ message: `¡Tu pedido ya fue registrado!. Número de pedido: ${pedidoRealizado.order_id}.Total: $ ${pedidoRealizado.total}. Forma de pago: ${pedidoRealizado.payment_method}` });
        res.status(400).json({
            message: "¡Lo sentimos! No se pudo realizar el pedido"
        })


    }

})

    .get("/", validateJwt, async (req, res) => {

        //trae únicamente los pedidos del us logueado
        if (req.user.admin == false) {
            const username = await models.usuario.findOne({
                where: { username: req.user.nombreUser }
            })

            const order2 = await models.pedidos.findOne({
                where: { user_id: username.id },

            })

            const detail_orders = await models.detalle_pedidos.findOne({
                where: { Pedidos2OrderId: order2.order_id }
            })

            const order = await models.pedidos.findAll({
                where: { user_id: username.id },
                include: [
                    {
                        all: true,
                        model: detail_orders,
                        attributes: ["id_detail", "product_name", "product_cantidad"]
                    },
                    {
                        all: true,
                        model: models.estados,
                    }

                ]
            })

            res.status(200).json(order)

        } if (req.user.admin == true) {

            // trae todos los pedidos. Solo el administrador pueder acceder
            const allOrders = await models.pedidos.findAll({
                include: [
                    {
                        all: true,
                        model: models.detalle_pedidos,
                        attributes: ["id_detail", "product_name", "product_cantidad"]
                    },
                    {
                        all: true,
                        model: models.estados,
                    }

                ]
            });
            if (allOrders) return res.status(200).json(allOrders);
            return res.status(400).send({ status: "ERROR", message: error.message })
        }

    })


    .get("/:id", validateJwt, async (req, res) => {

        if (req.user.admin == false) {
            res.send("Sólo un administrador puede acceder a esta información.")
            return
        }
        const order = await models.pedidos.findOne({
            where: { order_id: req.params.id }
        })
        res.status(200).json(order)
    })


    .put("/:id", validateJwt, async (req, res) => {

        if (req.user.admin == false) {
            res.send("Sólo un administrador puede modificar y/o eliminar un pedido.")
            return
        }
        /////// CAMBIAR SI EXISTE BODY

        const { id_estado } = req.body

        if (id_estado) {

            const pedido = await models.pedidos.findOne({
                where: { order_id: req.params.id }
            })

            if (pedido) {

                const estadoAnterior = await models.estados.findOne({
                    where: { id: pedido.EstadoId }
                })

                await models.pedidos.update({ "EstadoId": id_estado }, {
                    where: { order_id: req.params.id }
                });

                const pedidoActualizado = await models.pedidos.findOne({
                    where: { order_id: req.params.id }
                })


                const estadoNuevo = await models.estados.findOne({
                    where: { id: pedidoActualizado.EstadoId }
                })


                if (estadoNuevo) return res.status(200).json({
                    message: `Actualizado con exito. El estado del pedido ${req.params.id} paso de "${estadoAnterior.estado}" a "${estadoNuevo.estado}" `

                })
            } else {
                return res.status(400).json({
                    message: `Error al actualizar estado.MOTIVO: El pedido ${req.params.id} no existe`
                })
            }

        }


        ////////// CAMBIAR SI NO HAY BODY
        const pedido = await models.pedidos.findOne({
            where: { order_id: req.params.id }
        })

        if (pedido) {

            const estadoAnterior = await models.estados.findOne({
                where: { id: pedido.EstadoId }
            })


            if (estadoAnterior.id == 5 || estadoAnterior.id == 6) {
                return res.status(201).json({ message: "Su pedido ya fue finalizado." })
            }

            await models.pedidos.update({ "EstadoId": (pedido.EstadoId + 1) }, {
                where: { order_id: req.params.id }
            });

            const pedidoActualizado = await models.pedidos.findOne({
                where: { order_id: req.params.id }
            })

            const estadoNuevo = await models.estados.findOne({
                where: { id: pedidoActualizado.EstadoId }
            })



            if (estadoNuevo) return res.status(200).json({
                message: `Estado actualizado con exito. El estado del pedido ${req.params.id} paso de "${estadoAnterior.dataValues.estado}" a "${estadoNuevo.dataValues.estado}" `
            })
            console.log(estadoNuevo)
            console.log(estadoAnterior)


        } else {
            return res.status(400).json({
                message: `Error al actualizar estado. MOTIVO: El pedido ${req.params.id} no existe`
            })
        }

    })

    .delete("/:id", validateJwt, async (req, res) => {


        if (req.user.admin == false) {
            res.send("Sólo un administrador puede modificar y/o eliminar un pedido.")
            return
        }
        const deleteOrder = await models.pedidos.destroy({
            where: { order_id: req.params.id }

        })
        if (deleteOrder) return res.status(200).json({ messege: `${req.body.name} fue eliminado con exito` })
        return res.status(400).json({
            message: `No se encontro producto con el ID: ${req.params.id}`
        })
    })



module.exports = router