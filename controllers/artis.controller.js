const ArtisModel = require("../models/artis.model")

class ArtisController {
    // instance methodnya => harus buat instance baru bisa akses methodnya
    // async createNewArtis(req, res) {
    //     res.send({msg: "ini controller untuk create new artis"})
    // }

    // class method => tidak perlu buat instance untuk akses methodnya.
    // {name: "bob"}
    static async createNewArtis(req, res) {
        // get `name` from req body.
        // create a new artis object.
        // save to db.
        try {
            const body = req.body;

            const name = body.name;
            const genre = body.genre;
            const songs = body.songs;
            const artis = new ArtisModel({name: name, genre: genre, songs: songs})
        
            const saved = await artis.save()
            res.status(201).send(saved);
        } catch (error) {
            res.status(500).send({err: error})
        }

    }

    static async getAllArtis(req, res) {
        try {
            const artisList = await ArtisModel.find()
            res.status(200).send(artisList);
        } catch (error) {
            res.status(500).send({err: error})
        }
    }

    static async getArtisByID(req, res) {
        try {
            const id = req.params.id;

            const artisList = await ArtisModel.findOne({_id: id})
            res.status(200).send(artisList);
        } catch (error) {
            res.status(500).send({err: error})
        }
    }

    static async getArtisByCondition(req, res) {
        try {
            const name = req.params.name;
            const genre = req.params.genre;

            const artisList = await ArtisModel.find({name: name, genre:genre})
            res.status(200).send(artisList);
        } catch (error) {
            res.status(500).send({err: error})
        }
    }

    static async getArtisBySongs(req, res) {
        try {
            const songs = req.params.songs;
        
            const artisList = await ArtisModel.find({songs: songs})
            res.status(200).send(artisList);
        } catch (error) {
            res.status(500).send({err: error})
        }
    }

    static async getArtisByQueryParams(req, res) {
        try {
            const params = req.query;
            const artisList = await ArtisModel.find(params)
            res.status(200).send(artisList);
        } catch (error) {
            res.status(500).send({err: error})
        }
    }

    static async updateArtis(req, res) {
        try {
            // Ambil ID dari parameter
            const id = req.params.id;

            // Ambil data dari Body
            const body = req.body;
            const genre = body.genre;

            // Proses Update Data
            await ArtisModel.updateOne({_id: id}, {genre: genre})
            res.status(200).send({message: "Success"})
        } catch (error) {
            res.status(500).send({err: error})
        }
    }

    static async deleteArtis(req, res) {
        try {
            const id = req.params.id;
            await ArtisModel.deleteOne({_id: id})
            res.status(200).send({message: `${id} has been Deleted`})
        } catch (error) {
            res.status(500).send({err: error})
        }
    }

    static async deleteArtisByGenre(req, res) {
        try {
            const genre = req.params.genre;
            await ArtisModel.deleteOne({genre: genre})
            res.status(200).send({message: `${genre} has been Deleted`})
        } catch (error) {
            res.status(500).send({err: error})
        }
    }
}


module.exports = ArtisController