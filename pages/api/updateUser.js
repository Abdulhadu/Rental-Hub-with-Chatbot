import connectdb from "../../Middleware/mongoose";
import User from "../../Models/User";

export default async (req, res) => {
  await connectdb();
  const { userId } = req.query;
  const userData = req.body;

  try {
    const user = await User.findOneAndUpdate({email: userId}, userData, { new: true });
    return res.status(200).json(user);
  } catch (error) {
    console.log('error in updating user data (server) => ', error);
    return res.status(500).json({ error: 'Cannot update user data' });
  }
};