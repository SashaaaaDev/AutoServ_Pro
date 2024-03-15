const Router = require("express");
const router = new Router();

const serviceRouter = require("./serviceRouters");
const userRouter = require("./userRouters");
const typeRouter = require("./typeRouters");
const basketRouter = require("./basketRouters");
const basketServRouter = require("./basketServiceRouters");

router.use("/user", userRouter);
router.use("/service", serviceRouter);
router.use("/type", typeRouter);
router.use("/basket", basketRouter);
router.use("/basket-service", basketServRouter);
module.exports = router;
