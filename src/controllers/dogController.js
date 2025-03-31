import Dog from "../models/dogModel.js";

export const addDog = async (req, res) => {
  const { name, race, owner, age, image } = req.body;
  console.log("Datos recibidos en el backend:", req.body);
  try {
    const newDog = new Dog({ name, race, owner, age, image });
    await newDog.save();
    res.status(201).json({
      message: "el perro fue agregado correctamente a la base de datos",
      newDog,
    });
  } catch (error) {
    res.status(500).json({
      message: "error al intentar agregar este perro a la base de datos",
      error,
    });
  }
};
export const getDogs = async (req, res) => {
  try {
    const dogs = await Dog.find();
    res.status(200).json({ dogs: dogs });
  } catch (error) {
    res.status(500).json(
      {
        message: "error al traer todos los perros de la bd",
        error: error.message,
      },
      error
    );
  }
};
export const getDog = async (req, res) => {
  try {
    const { id } = req.params;
    if (!id) {
      return res.status(400).json({ message: "El ID es requerido" });
    }
    const dog = await Dog.findById(id);
    res.status(200).json({
      success: true,
      dog: dog,
    });
  } catch (error) {
    res.status(500).json({
      message: "no se ha encontrado el perro que busca",
      error: error.message,
    });
  }
};

export const deleteDog = async (req, res) => {
  const { id } = req.params;
  try {
    if (!id) {
      return res.status(400).json({ message: "El ID es requerido" });
    }
    const dog = await Dog.findByIdAndDelete(id);
    res.status(200).json({
      success: true,
      message: "el perro seleccionado se ha eliminado con exito",
    });
  } catch (error) {
    res.status(500).json({
      message: "no se ha encontrado el perro que busca",
      error: error.message,
    });
  }
};
export const updateDog = async (req, res) => {
  const { id } = req.params;

  try {
    if (!id) {
      return res.status(400).json({ message: "El ID es requerido" });
    }
    const updatedDog = await Dog.findByIdAndUpdate(id, req.body, { new: true });
    if (!updatedDog) {
      return res.status(404).json({ message: "Perro no encontrado" });
    }

    res.status(200).json({
      success: true,
      message: "Loa datos del perro seleccionado se actualizaron con éxito!",
      dog: updatedDog,
    });
  } catch (error) {
    res.status(500).json({
      message: "no se ha encontrado el perro que busca",
      error: error.message,
    });
  }
};
