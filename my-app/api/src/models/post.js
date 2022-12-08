const mongoose = require("mongoose")

const PostScheme = new mongoose.Schema(
    {
        rol: {
            type: ["dueño", "inmobiliaria"],
            required: true
        },
        tipoBusqueda: {
            type: ["comprar", "alquilar", "temporal"],
            required: true
        },
        tipoVivienda: {
            type: ["departamento", "casa", "ph", "terreno", "local comercial", "oficina"],
            required: true
        },
        tipoAmbiente: {
            type: ["2 ambiente", "3 ambiente", "4 ambiente"],
            required: true
        },
        ciudad: {
            type: ["Buenos Aires", "Catamarca", "Chaco", "Chubut", "Cordoba", "Corrientes", "Entre Rios", "Formosa", "Jujuy", "La Pampa",
                "La Rioja", "Mendoza", "Misiones", "Neuquen", "Rio Negro", "Salta", "San Juan", "San Luis", "Santa Cruz",
                "Santa Fe", "Santiago del Estero", "Tierra del Fuego", "Tucuman"],
            required: true
        },
        caracteristicas: {
            type: ["parking", "asador", "pileta", "zom", "hogar"]
        },
        imagen: {
            type: String
        },
        valor: {
            type: String
        },
        contacto: {
            type: ["celular", "mail"]
        },
        celular: {
            type: String
        },
        mail: {
            type: String
        }
    },
    {
        timestamps: true,
    }
)

module.exports = mongoose.model("posts", UserScheme)