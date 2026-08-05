import { Router } from "express";
import { SpecialtyController } from "./specialty.controller";

const router = Router();

router.get("/", SpecialtyController.getAllSpecialty);
router.get("/:id", SpecialtyController.getSpecialty);
router.delete("/:id", SpecialtyController.deleteSpecialty);
router.post("/", SpecialtyController.createSpecialty);

export const SpecialtyRoutes = router;
