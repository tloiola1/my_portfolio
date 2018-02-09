
const db = require("../models");
const validator = require("validator");

module.exports = (app)=> {

   app.post("/apicontact", function (req, res){
     console.log(req);
   	const name = req.body.name;
    const email = req.body.email;
    const message = req.body.message;

    if(validator.isEmpty(name) || validator.isEmpty(email) || validator.isEmpty(message)){
    console.log('*******'+ validator.isEmpty(name)+'**********');
      return;
    }

    db.contacts.create({
      name,
      email,
      message
    }).then((result)=> {
    	if (result.changedRows == 0) {
        // If no rows were changed, then the ID must not exist, so 404
        return res.status(404).end();
      }
      else {
        res.redirect("/thanks");
        res.status(200).end();
      }
    });
  });
};