

// getting all users data
export const getUserData = async () => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/admin/user`, {
      method: "GET",
    });
    const data = await res.json();
    return data;
  } catch (error) {
    console.log("error in fetching user data for admin (services) => " + error);
  }
};

// Adding Category
export const add_Category = async (category) => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/admin/category`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(category),
    });

    const data = await res.json();
    return data;
  } catch (err) {
    console.log("Facing error at addCategory client => " + err);
  }
};

// getting all categories data
export const getCategoriesData = async () => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/admin/category`, {
      method: "GET",
    });
    const data = await res.json();
    return data.categories;
  } catch (error) {
    console.log("error in getting Categories data (services) => " + error);
  }
};

// deleting  Category
export const deleteCategory = async (id) => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/admin/category?id=${id}`, {
      method: "DELETE",
    });
    const data = await res.json();
    return data;
  } catch (error) {
    console.log("error in deleting category Data => " + error);
  }
};

// getting Category by id
export const getCategoryById = async (id) => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/admin/getCategoryById?id=${id}`, {
      method: "GET",
    });
    const data = await res.json();
    return data;
  } catch (error) {
    console.log("error in getting specific category (services) => " + error);
  }
};

// updating Category
export const update_Category = async (category) => {
  console.log(" i got call");
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/admin/category`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(category),
    });
    const data = await res.json();
    return data;
  } catch (error) {
    console.log("error in updating category (services) => " + error);
  }
};

// ---------------------------------------------- Products---------------------------------------------------------------------------------

// adding Product
export const add_products = async (product) => {
  try {
    console.log("products are: ", product);
    const res = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/admin/product`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(product),
    });
    const data = await res.json();
    return data;
  } catch (error) {
    console.log("error in saving product (services) => " + error);
  }
};

// getting all products data
export const getProductsData = async () => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/admin/product`, {
      method: "GET",
    });
    const data = await res.json();

    console.log("data im get product", data);
    return JSON.parse(JSON.stringify(data));
  } catch (error) {
    console.log("error in getting products data (services) => " + error);
  }
};

// delete specific product

export const delete_Product = async (id) => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/admin/product?id=${id}`, {
      method: "DELETE",
    });
    const data = await res.json();
    return data;
  } catch (error) {
    console.log("error in deleting product Data (services) => " + error);
  }
};

// getting Category by id
export const getProductByID = async (id) => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/admin/getProductByID?id=${id}`, {
      method: "GET",
    });
    const data = await res.json();
    return data;
  } catch (error) {
    console.log("error in getting specific product (services) => " + error);
  }
};

// updating Category
export const update_product = async (product) => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/admin/product`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(product),
    });
    const data = await res.json();
    return data;
  } catch (error) {
    console.log("error in updating category (services) => " + error);
  }
};

// --------------------------------- view product by categories -----------------------

export const get_Product_By_Category = async (id) => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_HOST}/api/frontend/getProductByCategory?id=${id}`,
      {
        method: "GET",
      }
    );
    const data = await res.json();
    return data;
  } catch (error) {
    console.log("error at getting product by category (services) => " + error);
  }
};

//-------------------------------------Orders----------------------//

// getting all Orders
export const getOrdersData = async () => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/admin/order`, {
      method: "GET",
    });
    const data = await res.json();

    console.log("data in getOrdersData", data);

    // Convert the products object to an array
    const modifiedData = data.map((order) => {
      const productsArray = Object.values(order.products);
      return {
        ...order,
        products: productsArray,
      };
    });

    return modifiedData;
  } catch (error) {
    console.log("error in getting products data (services) => " + error);
  }
};


export const getOrderById = async (username) => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/getOrderById?userId=${username}`, {
      method: "GET",
    });
    const data = await res.json();
    return data;
  } catch (error) {
    console.log("error in getting specific Order (services) => " + error);
  }
};


// Update the order Status
export const updateOrderStatus = (orderId) => {
  const updatedStatus = "Shipped"; // Replace with the new status

  fetch(`/api/order/${orderId}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ status: updatedStatus }),
  })
    .then((response) => response.json())
    .then((data) => {
      console.error("Order updated success:", data);
    })
    .catch((error) => {
      console.error("Error updating order status:", error);
    });
};






//   ---------------------------admin--------------------------------

// getting all Admin data
export const getAdminData = async () => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/admin/adminUser`, {
      method: "GET",
    });
    const data = await res.json();
    return data.adminUser;
  } catch (error) {
    console.log("error in getting Admin data (services) => " + error);
  }
};

// Delete the Admin data
export const deleteAdmin = async (id) => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/admin/adminUser?id=${id}`, {
      method: "DELETE",
    });
    const data = await res.json();
    return data;
  } catch (error) {
    console.log("error in deleting Admin Data => " + error);
  }
};

export const getUserDetails = async (username) => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/admin/user/${username}`, {
      method: 'GET',
    });
    if (!res.ok) {
      throw new Error(`Error fetching user details: ${res.statusText}`);
    }
    const data = await res.json();
    return data;
  } catch (error) {
    console.error("Error fetching user details:", error);
    throw error;
  }
};

export const updateUserDetails = async (username, userData) => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/users/${username}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData),
    });
    if (!res.ok) {
      throw new Error(`Error updating user details: ${res.statusText}`);
    }
    const data = await res.json();
    return data;
  } catch (error) {
    console.error("Error updating user details:", error);
    throw error;
  }
};



// ------------------------------ User ---------------------------- 
export const getUserById = async (username) => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/getUserById?userId=${username}`, {
      method: "GET",
    });
    const data = await res.json();
    return data;
  } catch (error) {
    console.log("Error in getting specific user (services) => " + error);
  }
};

export const updateUser = async (username, userData) => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/updateUser?userId=${username}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    });
    const data = await res.json();
    return data;
  } catch (error) {
    console.log("Error in updating user data (services) => " + error);
  }
};