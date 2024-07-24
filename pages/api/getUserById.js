import connectdb from "../../Middleware/mongoose";
import User from "../../Models/User";

export default async (req, res) => {
  await connectdb();
  const { userId } = req.query;
//   console.log("body is: ",req.body.username);
//   console.log("username:", username)

  try {
    const user = await User.findOne({email: userId});
    return res.status(200).json(user);
  } catch (error) {
    console.log('error in getting user data by id (server) => ', error);
    return res.status(500).json({ error: 'Cannot get user data' });
  }
};