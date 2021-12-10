const express = require("express")

const ArtisController = require("../controllers/artis.controller")

// creates a new router instance.
const router = express.Router()

router.post("/", ArtisController.createNewArtis)
router.get("/", ArtisController.getAllArtis)
router.get("/:id", ArtisController.getArtisByID)
router.patch("/:id", ArtisController.updateArtis)
router.delete("/:id", ArtisController.deleteArtis)

module.exports = router


