const { newUser, allUser, oneUser, updateuser } = require("../controller/userController")

const router = require("express").Router()

router.post("/user", newUser)
router.get("/user",allUser);
router.get("/user/:id",oneUser)
router.put("/user/:id",updateuser)


module.exports = router