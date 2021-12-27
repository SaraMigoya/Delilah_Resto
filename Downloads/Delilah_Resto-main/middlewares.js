require("dotenv").config();
const jwt = require("jsonwebtoken");
var jwtClave = process.env.JWTPASSWORD
var codigoToken;
const models = require("./models");

const dataLogin = async (req, res, next) => {
    const { email, password } = req.body

    if (!email || !password) {
        res.status(400).json({
            error: 'faltan campos'
        })
    }
    let access = await validateUser(email, password)
    if (access) {
        req.token = access.codigoToken
        req.user = access.dataUser
        next();
    }

    else {
        res.status(401).json({

            error: "email o password invalidas"

        })
    }
}


const validateJwt = (req, res, next) => {

    const codigoToken = req.headers.authorization.split(' ')[1];

    jwt.verify(codigoToken, jwtClave, (err, decoded) => {
        if (err) {
            res.send('No está autorizado');
        }
        req.user = decoded;
        next()
    });
}


function generatedToken(nombre, isAdmin) {

    const payload = {
        nombreUser: nombre,
        admin: isAdmin,
    }

    var token = jwt.sign(payload, jwtClave);
    console.log(token)
    return token
}


function validateClave(password) {
    if (password.length >= 8) {
        var mayuscula = false;
        var minuscula = false;
        var numero = false;
        var caracter_raro = false;

        for (var i = 0; i < password.length; i++) {
            if (password.charCodeAt(i) >= 65 && password.charCodeAt(i) <= 90) {
                mayuscula = true;
            }
            else if (password.charCodeAt(i) >= 97 && password.charCodeAt(i) <= 122) {
                minuscula = true;
            }
            else if (password.charCodeAt(i) >= 48 && password.charCodeAt(i) <= 57) {
                numero = true;
            }
            else {
                caracter_raro = true;
            }
        }
        if (mayuscula == true && minuscula == true && caracter_raro == true && numero == true) {
            return true;
        }
    }
    return false;
}



function validateEmail(valor) {

    if (/^([\da-z_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/.test(valor)) {
        return true
    } else {
        return false
    }
}


const validateUser = async (email, password) => {
    const userSelected = await models.usuario.findOne({
        where: { email: email }
    })
    if (userSelected) {
        if (userSelected.password == password.trim()) {
            codigoToken = generatedToken(userSelected.username, userSelected.isAdmin)
            const dataUser = { nombre: userSelected.username, isadmin: userSelected.isAdmin }

            return { codigoToken, dataUser };
        }
        else {
            return false;
        }
    }
    else {
        return false;
    }
}


const dataReceived = (req, res, next) => {
    const { username, full_name, email, phone, adress, password, isAdmin } = req.body;
    if (!username || !full_name || !email || !phone || !adress || !password) {
        return res.status(400).json({
            error: 'faltan campos'
        })
    }
    if (isNaN(phone)) {
        return res.status(400).json({
            error: 'Edad incorrecto'
        })
    }
    if (validateEmail(email) === false) {
        return res.status(400).json({
            error: 'Email incorrecto'
        })
    }
    if (validateClave(password) === false) {
        return res.status(400).json({
            error: 'Password incorrecto'
        })
    }

    next()
}

const productosCreados = (req, res, next) => {
    const { name, description, price, stock } = req.body;
    if (!name || !description || !price || ! stock) {
        return res.status(400).json({
            error: 'faltan campos. por favor completar'
        })
    }
    next()
}


module.exports = { dataReceived, dataLogin, validateJwt, validateClave, validateEmail, validateUser, productosCreados, generatedToken };
