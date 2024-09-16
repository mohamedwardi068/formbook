import React, { createContext, useContext, useEffect, useState } from "react";
import {
  addBooks,
  addCategories,
  categoryId,
  getcategories,
  getnewBooks,
} from "../api/api";

const ApiContext = createContext(); 
export const ApiProvider = ({ children }) => {
  const [category, setCategory] = useState([]);
  const [newBooks, setNewBooks] = useState([]);
  
  const [response, setResponse] = useState([]);

  // Fetch categories
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await getcategories();
        setCategory(response);
      } catch (error) {
        console.error("API Error (fetchCategories):", error);
      }
    };
    fetchCategories();
  }, []);


  useEffect(() => {
    const fetchNewBooks = async () => {
      try {
        const response = await getnewBooks();
        setNewBooks(response);
      } catch (error) {
        console.error("API Error (fetchNewBooks):", error);
      }
    };
    fetchNewBooks();
  }, []);

  const addCat = async (data) => {
    try {
      const response = await addCategories(data);
      setResponse(response);
      return response;
    } catch (error) {
      console.error("API Error (addCat):", error);
    }
  };

  // Add new books
  const addBooksHandler = async (data) => {
    try {
      const response = await addBooks(data);
      setResponse(response);
      return response;
    } catch (error) {
      console.error("API Error (addBooks):", error);
    }
  };

  // Get category by ID
  const getCategoryId = async (data) => {
    try {
      const response = await categoryId(data);
      setResponse(response);
      return response;
    } catch (error) {
      console.error("API Error (getCategoryId):", error);
    }
  };

  return (
    <ApiContext.Provider
      value={{
        category,
        newBooks,
        addCat,
        addBooksHandler, 
        getCategoryId, 
        
       
      }}
    >
      {children}
    </ApiContext.Provider>
  );
};


export const useApi = () => {
  return useContext(ApiContext); 
};
