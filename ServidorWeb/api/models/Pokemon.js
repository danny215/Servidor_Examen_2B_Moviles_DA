/**
 * Pokemon.js
 *
 * @description :: A model definition.  Represents a database table/collection/etc.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    numero:{
      type:"number"
    },
    nombre:{
      type:"string"
    },
    poderUno:{
      type:"string"
    },
    poderDos:{
      type:"string"
    },
    fechaCaptura:{
      type:"string"
    },
    nivel:{
      type:"number"
    },

    entrenadorId:{
     type:"number"
    }

  },

};

