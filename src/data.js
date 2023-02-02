
const mongoose = require("mongoose");
mongoose.set('strictQuery', false);

const url="mongodb+srv://recharladivyareddy:Divya456@cluster0.7knqidh.mongodb.net/VehcileRegistration?retryWrites=true&w=majority";

mongoose.connect(url).then(() => {console.log("CON")}).catch( () => {console.log("NOT CON")});

const Schema = mongoose.Schema;
const itemSchema = new Schema({
    ownername:String,
    RCnumber:String,
  }, 
  {collection: "Users"}
  );

  const Item = mongoose.model("", itemSchema);

Item.find({}, (err, items) => {
  if(err) console.warn(err);
  console.log(items);
});