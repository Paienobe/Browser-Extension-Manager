import express from "express";
import {
  createExtension,
  updateExtension,
  deleteExtension,
  getExtensions,
} from "../../controllers/extensions";

const router = express.Router();

router.route("/").post(createExtension).get(getExtensions);
router.route("/:id").patch(updateExtension).delete(deleteExtension);

export default router;
