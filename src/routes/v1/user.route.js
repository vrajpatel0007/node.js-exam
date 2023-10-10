const express = require("express");
const uservalidation = require("../../validations/user.validtion")
const usercontroller = require("../../controllers/user.controller")
const validate = require("../../middlewares/validate")
const router = express.Router();

router.post(
  "/create-user",
  validate(uservalidation.createuser),
  usercontroller.createUser
)

/** Get user list */
router.get(
  "/list",
  validate(uservalidation.getUserList),
  usercontroller.getUserList
);

/** Delete user */
router.delete(
  "/delete-user/:userId",
  validate(uservalidation.updateDetails),
  usercontroller.deleteUser
);
router.put(
  "/update-details/:userId",
  validate(uservalidation.updateDetails),
  usercontroller.updateDetails
);


module.exports = router;