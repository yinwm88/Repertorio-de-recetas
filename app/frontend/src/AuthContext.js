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
    Cookies.set('userEmail', correo, { expires: 7 }); 
    Cookies.set('authToken', token, { expires: 7 });
  };

  const logout = () => {
    setCurrentUser(null);
    Cookies.remove('userEmail');
    Cookies.remove('authToken');
  };

  const isTokenStored = () => {
    return !!Cookies.get('authToken');
  };

  const getToken = () => {
    return Cookies.get('authToken');
  };

  const getUserDataFromCookies = () => {
    const userEmail = Cookies.get('userEmail');
    return userEmail ? userEmail : null;
  };


  const changePassword = async (currentPassword, newPassword) => {
    if (currentPassword && newPassword) {
      const formBody = [];
      formBody.push(`currentPassword=${encodeURIComponent(currentPassword)}`);
      formBody.push(`newPassword=${encodeURIComponent(newPassword)}`);
      try {
        const response = await fetch('http://localhost:30001/ruta/para/cambiar/contraseña', {
          method: 'PUT',
          headers: {
              'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
              'Authorization': `Bearer ${getToken()}`,
          },
          body: formBody.join("&"),
          token: getToken(),
        });
        let data;
        try {
          data = await response.json();
        } catch (error) {
          // Si la respuesta no es JSON, manejar el error o establecer un mensaje predeterminado
          console.error('No se recibió un JSON válido:');
        }
        
        if (response.ok) {
          // Si el código de estado indica éxito
          alert(data.message || '¡Contraseña cambiada con exito!');
          
        } else {
          // Si el servidor respondió con un error
          alert(data.message || 'Hubo un problema al cambiar la contraseña. Por favor, intenta nuevamente.');
        }
      } catch (error) {
        console.error('Error al cambiar la contraseña:', error.message);
        alert('Error al cambiar la contraseña. Por favor, inténtalo de nuevo más tarde.');
        throw error;
      }
    }else{
      alert('Por favor, completa todos los campos.');
    }
  };
  
  
  const value = {
    currentUser,
    login,
    logout,
    isTokenStored,
    getToken,
    getUserDataFromCookies,
    changePassword
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
