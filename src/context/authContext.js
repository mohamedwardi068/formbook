import React, { createContext, useState} from 'react';
import axios from 'axios';
const base=process.env.BASE_URL_AUTH
// Create the AuthContext
const AuthContext = createContext();
// Provide the AuthContext to the app
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(localStorage.getItem('authToken') || null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [authentificate,setAuthentificate]=useState(false)

  // Function to handle signup
  const signup = async (firstName,lastName,email,password,street,city,state,postalCode,avatar,phoneNumber) => {
    try {
      setLoading(true);
      const response = await axios.post(`http://localhost:8000/v1/users/signup`, { firstName,lastName,email,password,street,city,state,postalCode,avatar,phoneNumber}
       , { headers: { Authorization: `Bearer ${token}` } }
      );
      
      const {  client } = response;
      localStorage.setItem('authToken', token);
      setToken(token);
      setUser(client);
      setAuthentificate(true);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      setError(error.response?.data?.message || 'An error occurred during signup');
    }
  };

  // Function to handle login
  const login = async (email, password) => {
    try {
      setLoading(true);
      const response = await axios.post(`http://localhost:8000/v1/users/login`, { email, password });
      
      const { token, client } = response.data;
      localStorage.setItem('authToken', token);
      setToken(token);
      setAuthentificate(true)
      setUser(client);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      setAuthentificate(false)

      setError(error.response?.data?.message || 'Invalid email or password');
    }
  };

  // Function to handle logout
  const logout = () => {
    setToken(null);
    setUser(null);
    localStorage.removeItem('authToken');
  };

  // // Automatically set the user if a valid token exists on mount
  // useEffect(() => {
  //   if (token) {
  //     axios
  //       .get('/api/me', )
  //       .then(response => setUser(response.data.client))
  //       .catch(() => logout());
  //   }
  // }, [token]);

  return (
    <AuthContext.Provider value={{ user, authentificate,token, loading, error, signup, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook to use the AuthContext
export const useAuth = () => {
  const context = React.useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
