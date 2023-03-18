const { Router } = require("express");
const testimonialRouter = Router();
const {
  addTestimonial,
  getAllTestimonials,
  getTestimonialById,
  updateTestimonialById,
  softDeleteTestimonialById,
  deleteTestimonialById,
} = require("../controllers/testimonialController");


testimonialRouter.post("/", addTestimonial);


testimonialRouter.get("/", getAllTestimonials);
testimonialRouter.get("/:testimonialId", getTestimonialById);


testimonialRouter.put("/:testimonialId", updateTestimonialById);
testimonialRouter.patch("/:testimonialId", softDeleteTestimonialById);


testimonialRouter.delete("/:testimonialId", deleteTestimonialById);

module.exports = testimonialRouter;
