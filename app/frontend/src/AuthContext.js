import React, { createContext, useContext, useState, useEffect } from 'react';
import Cookies from 'js-cookie';

const AuthContext = createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    if (isTokenStored()) {
      const userFromCookies = getUserDataFromCookies();
      if (userFromCookies) {
        setCurrentUser(userFromCookies);
      }
    }
  }, []);

  const login = (correo, token) => {
    setCurrentUser(correo);
    // Guarda el correo y el token en las cookies
    Cookies.set('userEmail', correo, { expires: 7 }); // Expira en 7 días
    Cookies.set('authToken', token, { expires: 7 });
  };

  const logout = () => {
    setCurrentUser(null);
    // Elimina las cookies cuando el usuario cierra sesión
    Cookies.remove('userEmail');
    Cookies.remove('authToken');
  };

  const isTokenStored = () => {
    // Verifica si el token está guardado y no es nulo
    return !!Cookies.get('authToken');
  };

  const getToken = () => {
    // Obtiene el token guardado
    return Cookies.get('authToken');
  };

  const getUserDataFromCookies = () => {
    // Obtiene los datos del usuario desde las cookies
    const userEmail = Cookies.get('userEmail');
    return userEmail ? userEmail : null;
  };

  const value = {
    currentUser,
    login,
    logout,
    isTokenStored,
    getToken,
    getUserDataFromCookies
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
