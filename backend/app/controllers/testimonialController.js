const Testimonial = require("../models/testimonial");
// const mongoose = require("mongoose");
// const validator = require("validator");

// working
const getAllTestimonials = async (req, res) => {
  try {
    let testimonials = await Testimonial.find({});
    res.send({
      status: "Details fetched successfully",
      total: testimonials.length,
      testimonials,
    });
  } catch (err) {
    res.send({
      status: "error fetching details",
      message: err,
    });
  }
};

//working
const addTestimonial = async (req, res) => {
  const { name, photo, post, description } = req.body;

  // Validate input
  if (!name) {
    return res.status(400).json({
      status: "error",
      message: "Missing required fields. Please provide name",
    });
  }
  try {
    const totaltestimonials = await Testimonial.find({});
    const testimonialID =
      totaltestimonials[totaltestimonials.length - 1].testimonialID + 1;

    const newTestimonial = await Testimonial.create({
      testimonialID,
      name,
      photo,
      post,
      description,
    });

    if (newTestimonial) {
      res.send({
        status: "success",
        message: "added successfully",
      });
    } else {
      res.send({
        status: "error",
        message: "Could not add Testimonial",
      });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({
      status: "error",
      message: "Could not add Testimonial",
      error,
    });
  }
};

// working
const softDeleteTestimonialById = async (req, res) => {
  const { testimonialId } = req.params;
  try {
    const testimonial = await Testimonial.findById(testimonialId);
    if (!testimonial) {
      return res.status(404).send({
        status: "error",
        message: "No such testimonial found",
      });
    }
    if (!testimonial.active) {
      return res.status(400).send({
        status: "error",
        message: "testimonial has already been deleted",
      });
    }
    testimonial.active = false;
    await testimonial.save();

    res.send({
      status: "success",
      message: "Testimonial has been deleted successfully",
    });
  } catch (err) {
    console.error(err);
    res.status(500).send({
      status: "error",
      message: "Could not delete, please try again later",
    });
  }
};

//working
const deleteTestimonialById = async (req, res) => {
  const { testimonialId } = req.params;
  try {
    const deletedTestimonial = await Testimonial.findByIdAndDelete(
      testimonialId
    );
    res.send({
      status: "success",
      message: "Deleted Successfully",
      deletedTestimonial,
    });
  } catch (err) {
    res.status(500).send({
      status: "error",
      message: "Cannot delete due to internal error",
      err,
    });
  }
};

const getTestimonialById = async (req, res) => {
  const { testimonialId } = req.params;
  try {
    const testimonial = await Testimonial.findOne({ _id: testimonialId });
    console.log(testimonial);
    if (!testimonial) {
      res.status(404).send({
        status: "error",
        message: "Testimonial not found",
      });
    } else {
      res.send({
        status: "success",
        message: " Data fetched successfully",
        testimonial,
      });
    }
  } catch (err) {
    res.status(500).send({
      status: "error",
      message: "Error fetching data from database",
      error: err,
    });
  }
};

const updateTestimonialById = async (req, res) => {
  const { testimonialId } = req.params;
  const { name, photo, post, description } = req.body;

  const updatedData = {
    name,
    photo,
    post,
    description,
  };
  try {
    const testimonial = await Testimonial.findOne({ _id: testimonialId });
    if (!testimonial) {
      return res.status(404).send({
        status: "error",
        message: "testimonial not found",
      });
    }
    if (!testimonial.active) {
      return res.status(400).send({
        status: "error",
        message: "Testimonial has been deleted",
      });
    }
    const updatedTestimonial = await Testimonial.findByIdAndUpdate(
      testimonial._id,
      updatedData
    );
    res.send({
      status: "success",
      message: "Updated details Successfully",
      updatedTestimonial,
    });
  } catch (err) {
    console.error(err);
    res.status(500).send({
      status: "error",
      message: "Could not update details, try again later",
    });
  }
};

module.exports = {
  addTestimonial,
  getAllTestimonials,
  getTestimonialById,
  updateTestimonialById,
  softDeleteTestimonialById,
  deleteTestimonialById,
};
