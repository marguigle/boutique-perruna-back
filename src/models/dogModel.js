import mongoose from "mongoose";

const dogSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    race: {
      type: String,
    },
    owner: {
      type: String,
      required: true,
    },
    age: {
      type: Number,
    },
    image: {
      type: String,
    },

    vacunado: {
      type: Boolean,
    },

    antiparasitario: {
      type: Boolean,
    },

    castrado: {
      type: Boolean,
    },
  },
  { timestamps: true }
);

const DogModel = mongoose.model("Dog", dogSchema);
export default DogModel;
