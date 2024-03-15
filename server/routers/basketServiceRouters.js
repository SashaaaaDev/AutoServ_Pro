const Router = require("express");
const router = new Router();
const basketServiceController = require("../controllers/basketServController");


router.post("/", basketServiceController.addToBasket); // Додавання сервісу до корзини
router.get("/:basketId", basketServiceController.getAllServicesInBasket); // Отримання сервісу корзини за ID
// router.put('/basket-service/:id', basketServiceController.updateById); // Оновлення сервісу корзини за ID
router.delete("/:basketId", basketServiceController.removeFromBasket); // Видалення сервісу корзини за ID

module.exports = router;