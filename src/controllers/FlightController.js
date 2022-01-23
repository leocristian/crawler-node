const axios = require("axios")

class FlightController {
    async get(req, res) {
        const { Origem, Destino, DataIda, DataVolta, Adultos, Criancas, Bebes } = req.body

        const data = {
            Origem: Origem,
            Destino: Destino,
            DataIda: DataIda,
            DataVolta: DataVolta,
            Adultos: Adultos,
            Criancas: Criancas,
            Bebes: Bebes
        }

        const response = await axios.post("https://viajemais.voeazul.com.br/", data)

        console.log(response)

        return res.send(response.data)
    }
}

module.exports = new FlightController()