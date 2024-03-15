const Basket = require('../models/Basket');

const checkBasketState = async (req, res, next) => {
  try {
    const { basketId } = req.params;
    const basket = await Basket.findByPk(basketId);
    if (!basket) {
      return res.status(404).json({ message: 'Basket not found' });
    }
    if (basket.state !== 'active') {
      return res.status(403).json({ message: 'Basket is not active' });
    }
    next();
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

module.exports = checkBasketState;
