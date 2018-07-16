/**
 * Entrenador.js
 *
 * @description :: A model definition.  Represents a database table/collection/etc.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    nombre:{
      type:"string"
    },
    apellido:{
      type:"string"
    },
    fechaNacimiento:{
      type: "string"
    },
    medallas:{
      type: "number"
    },
    campeonActual:{
      type:"number"
    }

  },

};

