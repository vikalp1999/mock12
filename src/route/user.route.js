const express= require("express");
const { invest } = require("../controller/invest.controller");
const { register, login, getUser } = require("../controller/user.controller");
const router=express.Router();

router.route("/signup").post(register);
router.route("/login").post(login);
router.route("/getuser/:id").get(getUser)
router.route("/calculate/:P/:i/:n").get(invest)
module.exports=router;