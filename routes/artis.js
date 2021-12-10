const express = require("express")

const ArtisController = require("../controllers/artis.controller")

// creates a new router instance.
const router = express.Router()

router.post("/", ArtisController.createNewArtis)
router.get("/", ArtisController.getAllArtis)
router.get("/search", ArtisController.getArtisByQueryParams)
router.get("/:id", ArtisController.getArtisByID)
router.get("/name/:name/genre/:genre", ArtisController.getArtisByCondition)
router.get("/songs/:songs", ArtisController.getArtisBySongs)
router.patch("/:id", ArtisController.updateArtis)
router.delete("/:id", ArtisController.deleteArtis)
router.delete("/genre/:genre", ArtisController.deleteArtisByGenre)

module.exports = router


