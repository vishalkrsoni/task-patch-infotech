const { Schema, model } = require("mongoose");

const TestimonialSchema = new Schema(
  {
    testimonialID: {
      type: Number,
    },
    name: {
      type: String,
      required: true,
    },
    photo: {
      type: String,
    },
    post: {
      type: String,
    },
    description: {
      type: String,
    },
    active: {
      type: Boolean,
      default: true,
    },
  },
  { timestamps: true }
);

module.exports = model("testimonials", TestimonialSchema);
