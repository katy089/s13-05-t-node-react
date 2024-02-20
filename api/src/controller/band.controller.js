const bandModel = require("../models/band.models")

const createBand = async (req, res) => {
    try {
        const { name } = req.body

        if (!name) return res.status(400).json({ error: "Debe ingresar el nombre de la banda" })

        const newBand = await bandModel.create({ name })
        res.status(201).json({ message: "Banda creada", payload: newBand })
    }
    catch (err) {
        res.status(500).json({
            message: 'Hubo un error inesperado al crear los datos',
            error: e.message,
        })
    }
}

const allBands = async (req, res) => {
    try {
        const bands = await bandModel.find({ status: 'active' })
        res.status(200).json(bands)
    }
    catch (err) {
        res.status(500).json({
            message: 'Hubo un error inesperado al traer los datos',
            error: e.message,
        })
    }
}

module.exports = {
    createBand,
    allBands
}