const mongoose = require("mongoose")

const PostScheme = new mongoose.Schema(
    {
        imagen: {
            type: String,
            required: true
        },
        valor: {
            type: String,
            required: true
        },
        ciudad: {
            type: ["Buenos Aires", "Catamarca", "Chaco", "Chubut", "Cordoba", "Corrientes", "Entre Rios", "Formosa", "Jujuy", "La Pampa",
                "La Rioja", "Mendoza", "Misiones", "Neuquen", "Rio Negro", "Salta", "San Juan", "San Luis", "Santa Cruz",
                "Santa Fe", "Santiago del Estero", "Tierra del Fuego", "Tucuman"],
            required: true
        },
        detalle: {
            type: String
        },
        caracteristicas: {
            type: ["parking", "asador", "pileta", "zom", "hogar"]
        },
        rol: {
            type: ["dueño", "inmobiliaria"],
            required: true
        },
    },
    {
        timestamps: true,
    }
)

module.exports = mongoose.model("posts", UserScheme)