import React, { createContext, useContext, useState} from 'react';
const EdenContext = createContext();

const Context = ({children}) => {
    const [displayName, setDisplayName] = useState('');

    return <EdenContext.Provider value={{ displayName, setDisplayName }}>{children}</EdenContext.Provider>;
}

export default Context;

export const EdenState = () => {
	return useContext(EdenContext);
};
