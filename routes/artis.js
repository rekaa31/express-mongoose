const express = require("express")

// creates a new router instance.
const router = express.Router()

// create new `artis`.
router.post("/", ()=>{})
// get all `artis`.
router.get("/", (req, res) => {
    res.send({msg: "get all artis"})
})
// get `artis` by id.
router.get("/:id", ()=>{})
// update `artis`.
router.patch("/:id", ()=>{})
// delete `artis`.
router.delete("/:id", ()=>{})

module.exports = router


