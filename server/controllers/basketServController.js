const { BasketService } = require("../models/models");

class BasketServiceController {
  async addToBasket(req, res) {
    try {
      const { basketId, serviceId } = req.body;

      const existingService = await BasketService.findOne({
        where: {
          basketId: basketId,
          serviceId: serviceId,
        },
      });

      if (existingService) {
        return res
          .status(400)
          .json({ message: "Service already in the basket" });
      }

      await BasketService.create({ basketId, serviceId });

      return res.status(200).json({ message: "Service added to the basket" });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: "Internal server error" });
    }
  }

  async removeFromBasket(req, res) {
    try {
      const { basketId, serviceId } = req.body;

      await BasketService.destroy({ where: { basketId, serviceId } });

      return res
        .status(200)
        .json({ message: "Service removed from the basket" });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: "Internal server error" });
    }
  }

  async getAllServicesInBasket(req, res) {
    try {
      const { basketId } = req.params;

      const basketServices = await BasketService.findAll({
        where: { basketId },
      });

      return res.status(200).json(basketServices);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: "Internal server error" });
    }
  }
  // // TODO
  // async updateBasketService(req, res) {
  //   try {
  //     const { basketId, serviceId } = req.body;

  //   }
  //   catch (error) {
  //   }
  // }
}

module.exports = new BasketServiceController();
