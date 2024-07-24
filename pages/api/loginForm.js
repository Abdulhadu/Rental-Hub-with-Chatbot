import Form from "../../Models/form";
import connectdb from "../../Middleware/mongoose";
import jwt from 'jsonwebtoken';

const handler = async (req, res) => {
  if (req.method == "POST") {
    console.log(req.body);
    console.log(req.body.username);
    let user = await Form.findOne({ "username": req.body.username });
    if (user) {
     
      if (req.body.username == user.username && req.body.password == user.password) {
        var token = jwt.sign({ email: user.email, firstname: user.firstname, lastname: user.lastname }, 'secretkey', {
          expiresIn: '2h'	// expires in 365 days
        });
        res.status(200).json({ success: true, token });
      } else {
        res.status(200).json({ success: false, error: "Please Enter Valid Credentials" });
      }
    }
    else {
      res.status(200).json({ success: false, error: "User are not register yet First Signup " });
    }

  }
};
export default connectdb(handler);
