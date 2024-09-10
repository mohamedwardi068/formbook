import React, { createContext, useContext, useEffect, useState } from "react";
import { 
  addBooks, 
  addCategories, 
  addNotification, 
  categoryId, 
  getBooksByCategories, 
  getcategories, 
  getCategories, 
  getnewBooks, 
  getNewBooks, 
  getNotification 
} from "../api/api";

// Create Context
const ApiContext = createContext();

// API Provider Component
export const ApiProvider = ({ children }) => {
  const [response, setResponse] = useState([]);
  const [category, setCategory] = useState([]);
  const [newBooks, setNewBooks] = useState([]);
  const [notification, setNotification] = useState([]);
  const [booksByCategories, setBooksByCategories] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await getcategories();
        setCategory(response);
      } catch (error) {
        console.error('Error fetching categories:', error);
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
        console.error('Error fetching new books:', error);
      }
    };
    fetchNewBooks();
  }, []);

  useEffect(() => {
    const fetchNotifications = async () => {
      try {
        const response = await getNotification();
        setNotification(response);
      } catch (error) {
        console.error('Error fetching notifications:', error);
      }
    };
    fetchNotifications();
  }, []);

  useEffect(() => {
    const fetchBooksByCategories = async () => {
      try {
        const response = await getBooksByCategories();
        setBooksByCategories(response);
      } catch (error) {
        console.error('Error fetching books by categories:', error);
      }
    };
    fetchBooksByCategories();
  }, []);

  const addCategory = async (data) => {
    try {
      const response = await addCategories(data);
      setResponse(response);
      return response;
    } catch (error) {
      console.error('Error adding category:', error);
    }
  };

  const addBooks = async (data) => {
    try {
      const response = await addBooks(data);
      setResponse(response);
      return response;
    } catch (error) {
      console.error('Error adding books:', error);
    }
  };

  const addNotification = async (data) => {
    try {
      const response = await addNotification(data);
      setResponse(response);
      return response;
    } catch (error) {
      console.error('Error adding notification:', error);
    }
  };

  const getCategoryById = async (data) => {
    try {
      const response = await categoryId(data);
      setResponse(response);
      return response;
    } catch (error) {
      console.error('Error getting category by ID:', error);
    }
  };

  return (
    <ApiContext.Provider 
      value={{
        category,
        newBooks,
        addCategory,
        addBooks,
        addNotification,
        getCategoryById,
        notification,
        booksByCategories
      }}
    >
      {children}
    </ApiContext.Provider>
  );
};

// Custom Hook
export const useApi = () => {
  return useContext(ApiContext);
};
