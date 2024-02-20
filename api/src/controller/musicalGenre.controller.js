const musicalGenreModel = require("../models/musicalGenre.models")

const createMusicalGenre = async (req, res) => {
    try {
        const { name } = req.body

        if (!name) return res.status(400).json({ error: "Debe ingresar el nombre del genero musical" })

        const newMusicalGenre = await musicalGenreModel.create({ name })
        res.status(201).json({ message: "Genero creado", payload: newMusicalGenre })
    }
    catch (err) {
        res.status(500).json({
            message: 'Hubo un error inesperado al crear los datos',
            error: e.message,
        })
    }
}

const allMusicalGenres = async (req, res) => {
    try {
        const musicalGenres = await musicalGenreModel.find({ status: 'active' })
        res.status(200).json(musicalGenres)
    }
    catch (err) {
        res.status(500).json({
            message: 'Hubo un error inesperado al traer los datos',
            error: e.message,
        })
    }
}

module.exports = {
    createMusicalGenre,
    allMusicalGenres
}