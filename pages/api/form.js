import Form from "../../Models/form";
import connectdb from "../../Middleware/mongoose";


const handler = async (req, res) => {
  if (req.method === "POST") {
    console.log(req.body);
    const { username,  password } = req.body; 
    const u = new Form({ username, password});

    await u.save();

    res.status(200).json({ success: "Success" });
  } else {
    res.status(400).json({ error: "This Method is not Allowed" });
  }
};

export default connectdb(handler);
