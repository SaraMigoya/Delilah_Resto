const express = require("express");
const router = express.Router();
const models = require("../models");




router.post("/initialProducts", async (req, res) => {


    const newProduct = [

        {
            name: "Baguel de salmon",
            description: "Baguel de salmon con queso finlandia",
            img_url: "h",
            price: "230",
            stock: "500"
        },

        {
            name: "Hamburguesa clasica",
            description: "Hamburguesa con queso lechuga y tomate",
            img_url: "https://pbs.twimg.com/media/EM1m9p_UcAESoHj?format=jpg&name=900x900",
            price: "150",
            stock: "500"
        },

        {
            name: "Ensalada Veggie",
            description: "Ensalada de rúcula parmesano y arroz",
            img_url: "https://www.samadhicomida.com/product/ensalada-veggie-gourmet/",
            price: "180",
            stock: "550"
        },

        {
            name: "Tacos",
            description: "Tacos de ternera y vegetales ",
            img_url: "https://cookpad.com/es/recipe/images/cb53be8630367058",
            price: "250",
            stock: "500"
        },

        {
            name: "Milanesa napolitada",
            description: "Milanesa napolitana con papas fritas",
            img_url: "https://astelus.com/wp-content/viajes/Milanesa-con-papas-fritas.jpg",
            price: "299",
            stock: "500"
        }
    ]

    newProduct.forEach(e => {
        models.productos.create(e)
    });


    res.status(200).json({ message: "¡Producto creado con éxito!" })
})

    .post("/initialStatus", async (req,res) => {
        const nuevosEstados = [
            {
                id: 1,
                estado: "Iniciado"
            },
            {
                id: 2,
                estado: "En preparacion"
            },
            {
                id: 3,
                estado: "Enviando"
            },
            {
                id: 4,
                estado: "Entregado"
            },
            {
                id: 5,
                estado: "Finalizado exitosamente"
            },
            {
                id: 6,
                estado: "Finalizado por cancelacion"
            }
        ]
    
        nuevosEstados.forEach(el => {
            models.estados.create(el)
        }); 
        res.status(200).json({message: "Estado creado con éxito"})
    })

    .post("/initialUsers", async (req,res) => {
        const newsUsers = [
            {
                username: "SaraMi",
                full_name: "Sara Migoya",
                email: "sara@gmail.com",
                phone: 221334422,
                adress: "Libertador 455",
                password: "SaraM123/",
                isAdmin: "true"
            },
            {
                username: "Evaluador",
                full_name: "Evaluador",
                email: "evaluador@gmail.com",
                phone: 221334422,
                adress: "Libertador 455",
                password: "Evaluador123/",
                isAdmin: "false"
            }
        
        ]
        newsUsers.forEach(e => {
            models.usuario.create(e)
        });

        res.status(200).json({ message: "Usuario creado con éxito!" })
    
    })


module.exports = router