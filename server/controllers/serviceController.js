const uuid = require("uuid");
const path = require("path");
const { Service } = require("../models/models");
const apiError = require("../errors/apiError");

class serviceController {
  async create(req, res, next) {
    try {
      const { title, price, typeId, id } = req.body;
      const { img } = req.files;
      let fileName = uuid.v4() + ".jpg";

      img.mv(path.resolve(__dirname, "..", "static", fileName));

      const service = await Service.create({
        title,
        price,
        typeId,
        id,
        img: fileName,
      });
      return res.json(service);
    } catch (e) {
      next(apiError.badRequest(e.message));
    }
  }
  async getAll(req, res) {
    let { typeId, limit, page } = req.query;
    limit = limit || 9;
    page = page || 1;
    const offset = page * limit - limit;
    let services;
    if (typeId) {
      services = await Service.findAndCountAll({
        where: { typeId },
        limit,
        offset,
      });
    } else {
      services = await Service.findAndCountAll({ limit, offset });
    }
    return res.json(services);
  }
  async getOne(req, res) {
    const { id } = req.params;
    const service = await Service.findOne({ where: { id } });
    return res.json(service);
  }
}
module.exports = new serviceController();
