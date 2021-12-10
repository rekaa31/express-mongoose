
class ArtisController {
    // instance methodnya => harus buat instance baru bisa akses methodnya
    // async createNewArtis(req, res) {
    //     res.send({msg: "ini controller untuk create new artis"})
    // }

    // class method => tidak perlu buat instance untuk akses methodnya.
    static async createNewArtis(req, res) {
        res.send({msg: "ini controller untuk create new artis"})
    }

    static async getAllArtis(req, res) {
        res.send({msg: "ini controller untuk get all artis"})
    }

    static async getArtisByID(req, res) {
        res.send({msg: "ini controller untuk get artis by id"})
    }

    static async updateArtis(req, res) {
        res.send({msg: "ini controller untuk update artis"})
    }

    static async deleteArtis(req, res) {
        res.send({msg: "ini controller delete artis"})
    }
}


module.exports = ArtisController