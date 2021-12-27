const express = require("express");
const models = require("../models")
const router = express.Router();
const { dataReceived, dataLogin, validateJwt } = require("../middlewares");


router.post("/", dataReceived, async (req, res) => {
    const { username, full_name, email, phone, adress, password, isAdmin } = req.body
    const newUser = {
        username,
        full_name,
        email,
        phone,
        adress,
        password,
        isAdmin
    }


    const usu = await models.usuario.create(newUser)
    if (usu) return res.status(200).json(usu);

    res.status(400).json({
        message: "No se pudo crear el usuario"
    })


})

    .get("/", validateJwt, async (req, res) => {

        if (req.user.admin == false) {
            res.send("no estás autorizado para acceder a esta información")
            return

        }

        console.log(req.user.admin)
        const usuarios = await models.usuario.findAll();
        if (usuarios.length > 0) return res.status(200).json(usuarios);
        res.status(400).json({
            message: "No se encontraron usuarios registrados con esos datos"
        })
    })

    .get("/:id", async (req, res) => {
        const user = await models.usuario.findOne({
            where: { id: req.params.id }
        })
        res.status(200).json(user)

    })

    .get("/:username", validateJwt, async (req, res) => {

        if (req.user.nombreUser === req.params.username) {

            const myUser = await models.usuario.findOne({
                where: { username: req.params.username }
            })
            return res.status(200).json(myUser);
        }
        else {
            res.status(401).json({ message: "¡Lo sentimos!No es posible acceder a esa información"})
        }

    })


    .put('/:id', async (req, res) => {
        const updateUser = await models.usuario.update(req.body, {
            where: { id: req.params.id }
        });
        console.log(updateUser);

        if (updateUser) return res.status(201).json({ message: "Actualizado con exito" });
        res.status(400).json({
            message: `No se encontro usuario con el email: ${req.params.email} o contraseá`
        });

    })


    .delete('/:id', validateJwt, async (req, res) => {

        if (req.user.admin == false) {
            res.send("no estás autorizado para acceder a esta información")
            return
        }
        const borrarUsuario = await models.usuario.destroy({
            where: { id: req.params.id }
        })

        if (borrarUsuario) return res.status(200).json({ message: "Eliminado con exito" });
        res.status(400).json({
            message: `No se encontro usuario con el ID: ${req.params.id}`
        })
    })

    .post("/login", dataLogin, (req, res) => {
        res.status(200).json({
            exito: {
                token: req.token,
                user: req.user
            }
        })
    })


module.exports = router;