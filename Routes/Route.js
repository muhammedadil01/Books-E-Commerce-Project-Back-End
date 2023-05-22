const express = require("express")
const Create = require("../Controller/usercreate")
const userregistration = require("../Controller/UserRegistration")
const userlogin = require("../Controller/UserLogin")
const Bookpost = require("../Controller/BookPost")
const recievedata = require("../Controller/Bookget")
const removebook = require("../Controller/BookRemove")
const bookRead = require("../Controller/BookRead")
const updatebook = require("../Controller/BookUpdate")
const clientPost = require("../Controller/clientPost")
const clientdata = require("../Controller/clientget")
const removeclient = require("../Controller/clientremove")
const clientRead = require("../Controller/clientRead")
const updateclient = require("../Controller/ClientUpdate")
const customerPost = require("../Controller/customerCreate")
const customerdata = require("../Controller/customerTable")
const customerRead = require("../Controller/customerRead")
const removecustomer = require("../Controller/customerRemove")
const updatecustomer = require("../Controller/customerUpdate")
const TeamMemberPost = require("../Controller/TeamMemberCreate")
const teammemberdata = require("../Controller/TeamMemberTable")
const TeamMemberRead = require("../Controller/TeamMemberRead")
const removeTeammember = require("../Controller/TeamMemberRemove")
const updateTeamMember = require("../Controller/TeamMemberUpdate")
const OrderPost = require("../Controller/Ordercreate")
const orderdata = require("../Controller/OrderTable")
const orderRead = require("../Controller/OrderRead")
const removeorder = require("../Controller/OrderRemove")
const updateOrder = require("../Controller/OrderUpdate")
const Adminregistration = require("../Controller/Adminregistration")
const adminlogin = require("../Controller/Adminlogin")


const router = express.Router()

router.route("/create").post(Create)
router.route("/register").post(userregistration)
router.route("/login").post(userlogin)
router.route("/bookpost").post(Bookpost)
router.route("/bookdata").get(recievedata)
router.route("/deletebook/:id").delete(removebook)
router.route("/readbook/:id").get(bookRead)
router.route("/updatebook/:id").put(updatebook)
router.route("/clientpost").post(clientPost)
router.route("/clientdata").get(clientdata)
router.route("/deleteclient/:id").delete(removeclient)
router.route("/readclient/:id").get(clientRead)
router.route("/updateclient/:id").put(updateclient)
router.route("/customercreate").post(customerPost)
router.route("/customerdata").get(customerdata)
router.route("/readcustomer/:id").get(customerRead)
router.route("/deletecustomer/:id").delete(removecustomer)
router.route("/updatecustomer/:id").put(updatecustomer)
router.route("/teammembercreate").post(TeamMemberPost)
router.route("/teammemberdata").get(teammemberdata)
router.route("/readteammember/:id").get(TeamMemberRead)
router.route("/deleteteammember/:id").delete(removeTeammember)
router.route("/updateteammember/:id").put(updateTeamMember)
router.route("/ordercreate").post(OrderPost)
router.route("/orderdata").get(orderdata)
router.route("/readorder/:id").get(orderRead)
router.route("/deleteorder/:id").delete(removeorder)
router.route("/updateorder/:id").put(updateOrder)
router.route("/Adminregister").post(Adminregistration)
router.route("/Adminlogin").post(adminlogin)


module.exports = router