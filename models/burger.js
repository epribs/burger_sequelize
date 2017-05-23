module.exports = function(sequelize, DataTypes) {
  var Burger = sequelize.define("Burger", {
    burger_name: DataTypes.STRING,
    devoured: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    }
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Burger;
};

//
// var burger = {
//   all: function(cb) {
//     orm.selectAll("burgers", function(res) {
//       cb(res);
//     });
//   },
//   create: function(cols, vals, cb) {
//     console.log("cols " + cols);
//     console.log("vals " + vals);
//     orm.insertOne("burgers", cols, vals, function(res) {
//       cb(res);
//     });
//   },
//   update: function(objColVal, id, cb) {
//     orm.updateOne("burgers", id, function(res) {
//       cb(res);
//     });
//   },
//   delete: function(condition, cb) {
//     // orm.delete("burgers", condition, function(res) {
//     //   cb(res);
//     // });
//   }
// };

//module.exports = Burger;
