const { Basket } = require("../models/models");

class BasketController {
  async createBasket(req, res) {
    try {
      const { userId } = req.body;
      const basket = await Basket.create({ userId });
      return res.status(201).json(basket);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: "Internal server error" });
    }
  }

  async getBasketById(req, res) {
    try {
      const { id } = req.params;
      const basket = await Basket.findByPk(id);
      if (!basket) {
        return res.status(404).json({ message: "Basket not found" });
      }
      return res.status(200).json(basket);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: "Internal server error" });
    }
  }

  async updateBasket(req, res) {
    try {
      const { id } = req.params;
      const { userId } = req.body;
      const basket = await Basket.findByPk(id);
      if (!basket) {
        return res.status(404).json({ message: "Basket not found" });
      }
      basket.userId = userId;
      await basket.save();
      return res.status(200).json(basket);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: "Internal server error" });
    }
  }

  async deleteBasket(req, res) {
    try {
      const { id } = req.params;
      const basket = await Basket.findByPk(id);
      if (!basket) {
        return res.status(404).json({ message: "Basket not found" });
      }
      await basket.destroy();
      return res.status(200).json({ message: "Basket deleted" });
    } catch (error) {
      console.error(error);
    }
  }
}

module.exports = new BasketController();
