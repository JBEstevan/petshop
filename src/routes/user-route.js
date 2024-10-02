import { Router } from "express";
import {
  store,
  index,
  show,
  update,
  destroy,
  signup,
  login,
} from "../controllers/user-controller.js";

import check_token from "../middlewares/check_token.js";
import check_role from "../middlewares/check_role.js"
import via_cep from "../middlewares/via_cep.js"

const router = Router();

router.post("/", check_token, check_role(["ADM"]), via_cep, store);
router.get("/", check_token, check_role(["USU"]), index);
router.get("/:id", check_token, show);
router.put("/:id", check_token, via_cep, update);
router.delete("/:id", check_token, destroy);

router.post("/signup", signup);
router.post("/login", login);

export default router;

/* 
Onde está o check_token o usuario tem que estar logado
tanto faz o nivel de acesso

Onde está o check_role ai depende do nivel de acesso
*/