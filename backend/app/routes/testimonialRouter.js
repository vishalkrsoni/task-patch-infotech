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
const {uploadImageTos3}  = require("../services/uploadToS3");



// testimonialRouter.post("/", uploadImageTos3.single("file"), addTestimonial);
testimonialRouter.post("/", addTestimonial);




testimonialRouter.get("/", getAllTestimonials);
testimonialRouter.get("/:testimonialId", getTestimonialById);


testimonialRouter.put("/:testimonialId", updateTestimonialById);
testimonialRouter.patch("/:testimonialId", softDeleteTestimonialById);


testimonialRouter.delete("/:testimonialId", deleteTestimonialById);

module.exports = testimonialRouter;
