import React, { createContext, useContext, useState } from 'react';

const Profile = createContext(); 

const Context = (props) => {
    const [bar, setBar] = useState(false);
    const [prof, setProf] = useState(false);
  return (
    <Profile.Provider value={{
      prof,
      setProf,
      bar,
      setBar,
    }}>
        {props.children}
    </Profile.Provider>
  )
}

export default Context;

export const ProfileState = () => useContext(Profile);