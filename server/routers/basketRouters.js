const Router = require("express");
const router = new Router();
const basketController = require("../controllers/basketController");

router.post("/", basketController.createBasket); // Створення корзини
router.get("/:id", basketController.getBasketById); // Отримання корзини за ID
router.put("/:id", basketController.updateBasket); // Оновлення корзини за ID
router.delete("/:id", basketController.deleteBasket); // Видалення корзини за ID



module.exports = router;
