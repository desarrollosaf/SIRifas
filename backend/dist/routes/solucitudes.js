"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const solicitudes_1 = require("../controllers/solicitudes");
const router = (0, express_1.Router)();
router.get("/api/solicitudes/getSolicitudesp", solicitudes_1.getSolicitudesp);
exports.default = router;
