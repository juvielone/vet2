const express = require("express");
const router = express.Router();
// const { protect } = require("../middleware/authMid");
const {
  getSched,
  sendSched,
  updateSched,
  deleteSched,
} = require("../controllers/schedController");

router.route("/").post(sendSched);
router.route("/:email").get(getSched);
router.route("/:id").put(updateSched).delete(deleteSched);

module.exports = router;
