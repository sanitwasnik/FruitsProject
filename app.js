const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/fruitDB");

const  fruitSchema = new mongoose.Schema({
  name:
   {
    type: String,
    required: [true,]
  },
  rating:{
    type: Number,
    min: 1,
    max: 10
  },
  review: String
});

const Fruit = mongoose.model("Fruit", fruitSchema);

const fruit = new Fruit({


  rating: 5,
  review: "good"
});
// fruit.save();

const peopleSchema = new mongoose.Schema({
  name: String,
  age: Number,
  favioriteFruit: fruitSchema
});

const People = mongoose.model("People", peopleSchema);


const mango = new Fruit({
  name: "mango",
  rating: 9,
  review:" best"
});
mango.save();

People.updateOne({name:"john"},{favioriteFruit: mango}, function(err){
  if(err){
    console.log(err);
  }else{
    console.log("updated");
  }
});
// const people = new People({
//   name: "ammy ",
//   age: 79,
//   favioriteFruit: pineapple
// });
// people.save();

// const kiwi = new Fruit({
//   name: "kiwi",
//   rating: 5,
//   review: "sweet"
//
// });
// const orange = new Fruit({
//   name: "orange",
//   rating: 5,
//   review: "sour"
//
// });
// const banana = new Fruit({
//   name: "banana",
//   rating: 5,
//   review: "healthy"
//
// });


// Fruit.insertMany([kiwi, orange, banana], function(err){
//   if(err){
//     console.log("error");
//   }else{
//     console.log("successfully saved the fruits");
//   }
// });


// Fruit.find(function(err, fruits){
//   if(err){
//     console.log("error");
//   }else{
//
//
//
//
//
//     fruits.forEach(function(fruit){
//       console.log(fruit.name);
//     });
//   }
// });



// People.deleteMany({name:"john"}, function(err){
//   if(err){
//     console.log(err);
//   }else{
//     console.log("Deleted");
//   }
// });
