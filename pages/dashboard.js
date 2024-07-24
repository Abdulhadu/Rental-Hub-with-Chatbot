import React, { useState, useEffect } from 'react';
import jwt_decode from 'jwt-decode';
import { getUserById, updateUser } from '../services/admin';

const Dashboard = () => {
  const [userData, setUserData] = useState({
    email: '',
    firstName: '',
    lastName: '',
    country: '',
    language: '',
    phone: '',
    province: '',
    city: '',
    postalCode: '',
    address: ''
  });

  useEffect(() => {
    const fetchUserData = async () => {
      const token = localStorage.getItem('token');
      if (token) {
        var decodedToken = jwt_decode(token, "secretkey");
        const username = decodedToken.email;
        console.log("Token is:",username);
        try {
          const data = await getUserById(username);
          setUserData(data);
          console.log("user data is :", data )
        } catch (error) {
          console.error(error);
        }
      }
    };

    fetchUserData();
  }, []);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setUserData((prevState) => ({
      ...prevState,
      [id]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem('token');
    var decodedToken = jwt_decode(token, "secretkey");
    const username = decodedToken.email;
    console.log("Token in submition time:",username);
    try {
      const data = await updateUser(username, userData);
      console.log("new data is: ", data)
      setUserData(data);
      alert('User data updated successfully!');
    } catch (error) {
      console.error('Error updating user data:', error);
    }
  };

  return (
    <div className="bg-gray-200 min-h-screen pt-2 font-mono my-16">
      <div className="container mx-auto">
        <div className="inputs w-full max-w-2xl p-6 mx-auto">
          <h2 className="text-2xl text-gray-900">Account Setting</h2>
          <form className="mt-6 border-t border-gray-400 pt-4" onSubmit={handleSubmit}>
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full md:w-full px-3 mb-6">
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="email">
                  Email Address
                </label>
                <input
                  className="appearance-none block w-full bg-white text-gray-700 border border-gray-400 shadow-inner rounded-md py-3 px-4 leading-tight focus:outline-none focus:border-gray-500"
                  id="email"
                  type="email"
                  value={userData.email}
                  onChange={handleChange}
                  disabled
                />
              </div>
              <div className="w-full md:w-full px-3 mb-6">
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                  Password
                </label>
                <button className="appearance-none bg-gray-200 text-gray-900 px-2 py-1 shadow-sm border border-gray-400 rounded-md">
                  Change your password
                </button>
              </div>
              <div className="w-full md:w-full px-3 mb-6">
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="country">
                  Pick your country
                </label>
                <div className="flex-shrink w-full inline-block relative">
                  <select
                    className="block appearance-none text-gray-600 w-full bg-white border border-gray-400 shadow-inner px-4 py-2 pr-8 rounded"
                    id="country"
                    value={userData.country}
                    onChange={handleChange}
                  >
                    <option>Choose ...</option>
                    <option>USA</option>
                    <option>France</option>
                    <option>Spain</option>
                    <option>UK</option>
                  </select>
                  <div className="pointer-events-none absolute top-0 mt-3 right-0 flex items-center px-2 text-gray-600">
                    <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                      <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                    </svg>
                  </div>
                </div>
              </div>
              <div className="w-full md:w-full px-3 mb-6">
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="language">
                  Fav language
                </label>
                <div className="flex-shrink w-full inline-block relative">
                  <select
                    className="block appearance-none text-gray-600 w-full bg-white border border-gray-400 shadow-inner px-4 py-2 pr-8 rounded"
                    id="language"
                    value={userData.language}
                    onChange={handleChange}
                  >
                    <option>Choose...</option>
                    <option>English</option>
                    <option>French</option>
                    <option>Spanish</option>
                  </select>
                  <div className="pointer-events-none absolute top-0 mt-3 right-0 flex items-center px-2 text-gray-600">
                    <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                      <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                    </svg>
                  </div>
                </div>
              </div>
             
                <div className="personal w-full border-t border-gray-400 pt-4">
                  <h2 className="text-2xl text-gray-900">Personal info:</h2>
                  <div className="flex items-center justify-between mt-4">
                    <div className="w-full md:w-1/2 px-3 mb-6">
                      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="firstName">
                        First Name
                      </label>
                      <input
                        className="appearance-none block w-full bg-white text-gray-700 border border-gray-400 shadow-inner rounded-md py-3 px-4 leading-tight focus:outline-none focus:border-gray-500"
                        type="text"
                        id="firstName"
                        value={userData.firstname}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="w-full md:w-1/2 px-3 mb-6">
                      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="lastName">
                        Last Name
                      </label>
                      <input
                        className="appearance-none block w-full bg-white text-gray-700 border border-gray-400 shadow-inner rounded-md py-3 px-4 leading-tight focus:outline-none focus:border-gray-500"
                        type="text"
                        id="lastName"
                        value={userData.lastname}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>
                  <div className="flex items-center justify-between mt-4">
                    <div className="w-full md:w-1/2 px-3 mb-6">
                      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="phone">
                        Phone no *
                      </label>
                      <input
                        className="appearance-none block w-full bg-white text-gray-700 border border-gray-400 shadow-inner rounded-md py-3 px-4 leading-tight focus:outline-none focus:border-gray-500"
                        type="text"
                        id="phone"
                        value={userData.phone}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="w-full md:w-1/2 px-3 mb-6">
                      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="province">
                        Province *
                      </label>
                      <input
                        className="appearance-none block w-full bg-white text-gray-700 border border-gray-400 shadow-inner rounded-md py-3 px-4 leading-tight focus:outline-none focus:border-gray-500"
                        type="text"
                        id="province"
                        value={userData.province}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>
                  <div className="flex items-center justify-between mt-4">
                    <div className="w-full md:w-1/2 px-3 mb-6">
                      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="city">
                        City *
                      </label>
                      <input
                        className="appearance-none block w-full bg-white text-gray-700 border border-gray-400 shadow-inner rounded-md py-3 px-4 leading-tight focus:outline-none focus:border-gray-500"
                        type="text"
                        id="city"
                        value={userData.city}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="w-full md:w-1/2 px-3 mb-6">
                      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="postalCode">
                        Postal Code *
                      </label>
                      <input
                        className="appearance-none block w-full bg-white text-gray-700 border border-gray-400 shadow-inner rounded-md py-3 px-4 leading-tight focus:outline-none focus:border-gray-500"
                        type="text"
                        id="postalCode"
                        value={userData.postalCode}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>
                </div>
                <div className="w-full md:w-full px-3 mb-6">
                  <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="address">
                    Address
                  </label>
                  <textarea
                    className="appearance-none block w-full bg-white text-gray-700 border border-gray-400 shadow-inner rounded-md py-3 px-4 leading-tight focus:outline-none focus:border-gray-500"
                    id="address"
                    value={userData.address}
                    onChange={handleChange}
                    rows="3"
                    required
                  />
                </div>
                </div>
                  <div className="flex justify-end">
                    <button
                      type="submit"
                      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    >
                      Save
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        );
      };
      
export default Dashboard;