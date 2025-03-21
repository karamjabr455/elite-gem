export const isLoggedIn = () => {
    const user = localStorage.getItem('user');
    return user !== null;
  };
  
  export const saveUserData = (userData) => {
    localStorage.setItem('user', JSON.stringify(userData));
  };
  
  export const getUserData = () => {
    const user = localStorage.getItem('user');
    return user ? JSON.parse(user) : null;
  };