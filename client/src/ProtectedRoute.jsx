import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate, Route } from 'react-router-dom';

// This component will render the `element` if the user is authenticated,
// otherwise, it will redirect to the login page.
const ProtectedRoute = ({ element, ...rest }) => {

  const token = localStorage.getItem('token'); 



  // Return the route component or redirect based on authentication status
  return token ? element : <Navigate to="/" />;
};

export default ProtectedRoute;
