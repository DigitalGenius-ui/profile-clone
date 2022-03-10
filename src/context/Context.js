import React, { createContext, useContext, useEffect, useState } from 'react';

const Profile = createContext(); 

const Context = (props) => {
    const [checked, setChecked] = useState(false);

  useEffect(() => {
    setChecked((prev) => !prev);
  },[]);
  return (
    <Profile.Provider value={{
        checked : checked
    }}>
        {props.children}
    </Profile.Provider>
  )
}

export default Context;

export const ProfileState = () => useContext(Profile);