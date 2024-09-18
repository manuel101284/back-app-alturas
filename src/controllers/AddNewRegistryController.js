const Registry = require('../models/RegistryModel.js');

const AddNewRegistry = async (req, res) => {
  const {
    nameRegistry,
    emailRegistry,
    phoneRegistry,
  } = req.body;

  const RegistryExisted = await Registry.findOne({ emailRegistry });
  
  if (RegistryExisted) {
    console.log("Este correo ya está registrado");
    res.send("Este correo ya está registrado");
  } else {
    const NewRegistry = new Registry({
      nameRegistry: nameRegistry,
      emailRegistry: emailRegistry,
      phoneRegistry: phoneRegistry
    })

    NewRegistry.save();
    console.log("Su registro ha terminado satisfactoriamente");
    res.send("Su registro ha terminado satisfactoriamente");
  }
}

module.exports = {
  AddNewRegistry
}
