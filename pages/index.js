import Head from "next/head";
import React from "react";
import mongoose from "mongoose";
import Product from "../Models/Product";
import Category from "../Models/category";
import Link from "next/link";
import PropTypes from "prop-types";

export default function Home({ products, categories }) {
  return (
    <div className="container">
      <Head>
        <title>Rental HUB</title>
        <link rel="icon" href="logo.png" />
      </Head>

      {/* slider */}
      <div className="block">
        <img className="w-screen" src="/banner-3.jpg" alt="new"></img>
      </div>

      {/* Catagories */}
      <h2 className="text-xs mt-10 text-center text-purple-800 tracking-widest font-bold title-font mb-1">
        Explore our Featured
      </h2>
      <h1 className="text-center sm:text-3xl text-2xl font-bold title-font text-gray-900">
        Our Categories
      </h1>
      <div className="sm:container lg:px-20 mx-auto ">
        <section className="text-gray-600 body-font">
          <div className="container px-5 py-24 mx-auto ">
            <div className="flex flex-wrap -m-4 ">
              {categories.map((category) => (
                <div
                  key={category._id}
                  className="p-4 md:w-1/3 hover:drop-shadow-xl"
                >
                  <div className="h-full border-2 border-gray-300 border-opacity-60 rounded-lg overflow-hidden">
                    <img
                      className="lg:h-48 md:h-36 w-full object-cover object-center"
                      src={category.image}
                      alt={category.name}
                    />
                    <div className="p-6 bg-white">
                      <h2 className="tracking-widest text-xs title-font font-medium text-purple-800">
                        CATEGORY
                      </h2>
                      <h1 className="title-font text-lg font-bold text-gray-900 mb-3">
                        {category.name}
                      </h1>
                      <p className="leading-relaxed mb-3">
                        {category.description}
                      </p>
                      <p className="leading-relaxed text-violet-800 mb-3">
                        {category.featured
                          ? "Featured Category"
                          : "Regular Category"}
                      </p>
                      <div className="flex items-center flex-wrap">
                        <a className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">
                          Learn More
                          <svg
                            className="w-4 h-4 ml-2"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth="2"
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <path d="M5 12h14"></path>
                            <path d="M12 5l7 7-7 7"></path>
                          </svg>
                        </a>
                        <span className="text-purple-900 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                          <svg
                            className="w-4 h-4 mr-1"
                            stroke="currentColor"
                            strokeWidth="2"
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            viewBox="0 0 24 24"
                          >
                            <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                            <circle cx="12" cy="12" r="3"></circle>
                          </svg>
                          1.2K
                        </span>
                        <span className="text-purple-900 inline-flex items-center leading-none text-sm">
                          <svg
                            className="w-4 h-4 mr-1"
                            stroke="currentColor"
                            strokeWidth="2"
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            viewBox="0 0 24 24"
                          >
                            <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                          </svg>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
      {/* Banner  */}
      <section className="body-font lg:px-20 mx-auto">
        <img src="banner-2.jpg" height={130} width={1400} alt="new" />
      </section>
      {/* Products  */}
      <section className="mt-10 body-font lg:px-8 mx-auto max-w-7xl">
        <h2 className="text-xs text-center text-purple-800 tracking-widest font-bold title-font mb-1">
          Explore our Products
        </h2>
        <h1 className="text-center sm:text-3xl text-2xl font-bold title-font text-gray-900">
          Latest Products
        </h1>
        <div className="container px-5 py-24 mx-auto">
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
            {Object.keys(products).map((item) => (
              <div
                key={item._id}
                className="p-4 shadow-lg hover:shadow-2xl border-2"
              >
                <Link
                  passHref={true}
                  legacyBehavior
                  href={`/product/${products[item].Slug}`}
                >
                  <a className="block relative h-50 px-2 py-2 sm:px-4 sm:py-4 rounded overflow-hidden">
                    <img
                      alt="ecommerce"
                      className="object-cover object-center w-full h-full block"
                      src={products[item].img}
                    />

                    <div className="mt-4">
                      <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                        {products[item].Category}
                      </h3>
                      <h2 className="text-gray-900 title-font sm:text-lg md:text-lg font-medium">
                        {products[item].title}
                      </h2>
                      <p className="mt-1 font-bold">${products[item].price}</p>
                      <div className="mt-0.5 sm:mt-1">
                        {products[item].Size.includes("SM") && (
                          <span className="border-2 text-sm mx-0.5 sm:mx-0.5 sm:px-1.5">
                            SM
                          </span>
                        )}
                        {products[item].Size.includes("M") && (
                          <span className="border-2 text-sm mx-0.5 sm:mx-0.5 sm:px-1.5">
                            M
                          </span>
                        )}
                        {products[item].Size.includes("L") && (
                          <span className="border-2 text-sm  mx-0.5 sm:mx-0.5 sm:px-1.5">
                            L
                          </span>
                        )}
                        {products[item].Size.includes("XL") && (
                          <span className="border-2 text-sm mx-0.5 sm:mx-0.5 sm:px-1.5">
                            XL
                          </span>
                        )}
                        {products[item].Size.includes("XXL") && (
                          <span className="border-2 text-sm mx-0.5 sm:mx-0.5 sm:px-1.5">
                            XXL
                          </span>
                        )}
                      </div>
                      <div className="mt-1">
                        {products[item].Color.includes("white") && (
                          <button className="border-2 border-gray-300 rounded-full w-3 h-3 sm:w-6 sm:h-6 focus:outline-none"></button>
                        )}
                        {products[item].Color.includes("black") && (
                          <button className="border-2 border-gray-300 ml-1 bg-gray-800 rounded-full w-3 h-3 sm:w-6 sm:h-6 focus:outline-none"></button>
                        )}
                        {products[item].Color.includes("green") && (
                          <button className="border-2 border-gray-300 ml-1 bg-green-500 rounded-full w-3 h-3 sm:w-6 sm:h-6 focus:outline-none"></button>
                        )}
                        {products[item].Color.includes("yellow") && (
                          <button className="border-2 border-gray-300 ml-1 bg-yellow-500 rounded-full w-3 h-3 sm:w-6 sm:h-6 focus:outline-none"></button>
                        )}
                        {products[item].Color.includes("red") && (
                          <button className="border-2 border-gray-300 ml-1 bg-red-500 rounded-full w-3 h-3 sm:w-6 sm:h-6 focus:outline-none"></button>
                        )}
                      </div>
                    </div>
                  </a>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Banner  */}
      <section className="body-font lg:px-20 mx-auto">
        <img src="banner-1.jpg" height={130} width={1400} alt="new" />
      </section>

      {/* Testimonials   */}

      <section className="text-gray-600 body-font lg:px-10 mx-auto">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-20">
            <h2 className="text-xs text-purple-800 tracking-widest font-bold title-font mb-1">
              Features of Our Store
            </h2>
            <h1 className="sm:text-3xl text-2xl font-bold title-font text-gray-900">
              Services to Our Customers
            </h1>
          </div>
          <div className="flex flex-wrap -m-4 drop-shadow-xl ">
            <div className="p-4 md:w-1/3 hover:drop-shadow-2xl black">
              <div className="flex rounded-lg h-full bg-gray-100 p-8 flex-col">
                <div className="flex items-center mb-3">
                  <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-purple-800 text-white flex-shrink-0">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                    >
                      <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                    </svg>
                  </div>
                  <h2 className="text-purple-800 text-lg title-font font-bold">
                    Good Communication
                  </h2>
                </div>
                <div className="flex-grow">
                  <p className="leading-relaxed text-base">
                    Blue bottle crucifix vinyl post-ironic four dollar toast
                    vegan taxidermy. Gastropub indxgo juice poutine.
                  </p>
                  <a className="mt-3 text-purple-800 inline-flex items-center">
                    Learn More
                    <svg
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      className="w-4 h-4 ml-2"
                      viewBox="0 0 24 24"
                    >
                      <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            <div className="p-4 md:w-1/3 hover:drop-shadow-2xl black">
              <div className="flex rounded-lg h-full bg-gray-100 p-8 flex-col">
                <div className="flex items-center mb-3">
                  <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-purple-800 text-white flex-shrink-0">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                      <circle cx="12" cy="7" r="4"></circle>
                    </svg>
                  </div>
                  <h2 className="text-purple-800 text-lg title-font font-bold">
                    Happy Custumers
                  </h2>
                </div>
                <div className="flex-grow">
                  <p className="leading-relaxed text-base">
                    Blue bottle crucifix vinyl post-ironic four dollar toast
                    vegan taxidermy. Gastropub indxgo juice poutine.
                  </p>
                  <a className="mt-3 text-purple-800 inline-flex items-center">
                    Learn More
                    <svg
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      className="w-4 h-4 ml-2"
                      viewBox="0 0 24 24"
                    >
                      <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            <div className="p-4 md:w-1/3 hover:drop-shadow-2xl black">
              <div className="flex rounded-lg h-full bg-gray-100 p-8 flex-col">
                <div className="flex items-center mb-3">
                  <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-purple-800 text-white flex-shrink-0">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                    >
                      <circle cx="6" cy="6" r="3"></circle>
                      <circle cx="6" cy="18" r="3"></circle>
                      <path d="M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12"></path>
                    </svg>
                  </div>
                  <h2 className="text-purple-800 text-lg title-font font-bold">
                    Deliver Safely
                  </h2>
                </div>
                <div className="flex-grow">
                  <p className="leading-relaxed text-base">
                    Blue bottle crucifix vinyl post-ironic four dollar toast
                    vegan taxidermy. Gastropub indxgo juice poutine.
                  </p>
                  <a className="mt-3 text-purple-800 inline-flex items-center">
                    Learn More
                    <svg
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      className="w-4 h-4 ml-2"
                      viewBox="0 0 24 24"
                    >
                      <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* statistics */}

      <section className="text-purple-800 body-font lg:px-20 mx-auto">
        <div className="container px-5 py-24 mx-auto flex flex-wrap justify-center">
          <div className="flex flex-wrap -mx-4 mt-auto mb-auto lg:w-1/2 sm:w-2/3 content-start sm:pr-10">
            <div className="w-full sm:p-4 px-4 mb-6">
              <h1 className="title-font font-bold text-xl mb-2 text-black">
                Statistic of Our Online Store
              </h1>
              <div className="leading-relaxed">
                Pour-over craft beer pug drinking vinegar live-edge gastropub,
                keytar neutra sustainable fingerstache kickstarter.
              </div>
            </div>
            <div className="p-4 sm:w-1/2 lg:w-1/4 w-1/2">
              <h2 className="title-font font-bold text-3xl text-purple-900">
                2.7K
              </h2>
              <p className="leading-relaxed">Users</p>
            </div>
            <div className="p-4 sm:w-1/2 lg:w-1/4 w-1/2">
              <h2 className="title-font font-bold text-3xl text-purple-900">
                1.8K
              </h2>
              <p className="leading-relaxed">Subscribes</p>
            </div>
            <div className="p-4 sm:w-1/2 lg:w-1/4 w-1/2">
              <h2 className="title-font font-bold text-3xl text-purple-900">
                35
              </h2>
              <p className="leading-relaxed">Downloads</p>
            </div>
            <div className="p-4 sm:w-1/2 lg:w-1/4 w-1/2">
              <h2 className="title-font font-bold text-3xl text-purple-900">
                4
              </h2>
              <p className="leading-relaxed">Products</p>
            </div>
          </div>
          <div className="lg:w-1/3  sm:w-1/3  w-full rounded-lg overflow-hidden mt-6 sm:mt-0">
            <img
              className="object-cover object-center w-full h-full"
              src="blog-2.jpg"
              alt="stats"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
Home.propTypes = {
  products: PropTypes.object.isRequired,
  categories: PropTypes.array.isRequired, // Add this line
};
export async function getServerSideProps() {
  if (!mongoose.connections[0].readyState) {
    mongoose.connect(`${process.env.MONGO_URI}`);
  }

  let products = await Product.find();
  let tshirt = {};
  for (let item of products) {
    if (item.title in tshirt) {
      if (
        !tshirt[item.title].Color.includes(item.Color) &&
        item.avaliableQty > 0
      ) {
        tshirt[item.title].Color.push(item.Color);
      }
      if (
        !tshirt[item.title].Size.includes(item.Size) &&
        item.avaliableQty > 0
      ) {
        tshirt[item.title].Size.push(item.Size);
      }
    } else {
      tshirt[item.title] = JSON.parse(JSON.stringify(item));
      if (item.avaliableQty > 0) {
        tshirt[item.title].Color = [item.Color];
        tshirt[item.title].Size = [item.Size];
      }
    }
  }

  const categories = await Category.find({});

  return {
    props: {
      products: JSON.parse(JSON.stringify(tshirt)),
      categories: JSON.parse(JSON.stringify(categories)),
    },
  };
}
