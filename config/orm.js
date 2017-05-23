var Burger = require("../models").Burger;


// Helper function for SQL syntax.
function printQuestionMarks(num) {
  var arr = [];

  for (var i = 0; i < num; i++) {
    arr.push("?");
  }

  return arr.toString();
}

// Helper function for SQL syntax.
function objToSql(ob) {
  var arr = [];

  for (var key in ob) {
    if (Object.hasOwnProperty.call(ob, key)) {
      arr.push(key + "=" + ob[key]);
    }
  }

  return arr.toString();
}

var burgerBuy = {
  selectAll: function (cb) {
    Burger.findAll().then(function(res) {
      cb(res);
    });
  },
  insertOne: function(name, cb) {

    Burger.create({
      burger_name: name,
      devoured: false
    }).then(function(res) {
      cb(res);
    });
  },
  updateOne: function(vals, cb) {

    Burger.update({
      devoured: true
    },
      {
        where: {
          id: vals
        }
      }).then(function(res) {

      cb(res);
    });
  }
};

// Export the orm object for the model.
module.exports = burgerBuy;
