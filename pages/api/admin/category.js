import connectdb from "../../../Middleware/mongoose";
import Category from "../../../Models/category";


export default async (req, res) => {
    await connectdb();
    switch (req.method) {
        case "POST":
            await addCategory(req , res)
            break;
        case "GET":
            await getCategory(req , res)
            break;
        case "PUT":
            await updateCategory(req , res)
            break;
        case "DELETE":
            await  deleteCategory(req , res)
            break;
        default:
            return res.status(405).end(`Method ${req.method} Not Allowed`)
    }
}

// Adding Category
/* eslint-disable no-undef */


const addCategory = async (req, res) => {
  try {
    const { name, slug, featured, image, description } = req.body;

    if (!name || !slug || !featured || !image || !description) {
      return res.status(422).json({ error: "Please fill all the fields" });
    }

    // Create a new instance of the Category model
    const category = new Category({
      name,
      slug,
      image,
      featured,
      description,
    });

    // Save the category to the database
    await category.save();

    return res.status(201).json({ msg: 'Category added successfully' });
  } catch (error) {
    console.log('error adding category', error.message);
    return res.status(500).json({ error: "something went wrong" });
  }
};



// deleting  Category
const deleteCategory = async (req, res) => {
    const { id } = req.query;
    try {
        await Category.findByIdAndDelete(id);
        return res.status(200).json({ msg: "category deleted successfully" });
    }
    catch (error) {
        console.log('error in deleting Category data (backend) => ' + error);
        return res.status(405).json({ error: "cannot delete category" });
    }
}

// updating Category

const updateCategory = async (req, res) => {
    const data = req.body;
    const id = data._id;
    try
    {
        await Category.findByIdAndUpdate(id , data)
        return res.status(200).json({msg : 'category updated successfully'})
        
    }
    catch(error)
    {
        console.log('error in getting category data by id (server) => ' + error)
        return res.status(408).json({error : 'cannot update category data'})
    }
}


// getting Category
const getCategory = async (req, res) => {
    try
    {
        const categories = await Category.find({});
        return res.status(201).send({categories});
    }
    catch(error)
    {
        console.log('error in getting Categories data (backend) => ' + error);
        return res.status(405).json({error : "cannot get categories"});
    }
}