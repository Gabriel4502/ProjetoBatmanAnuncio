import React, { createContext, useState } from "react";

export const NovoContext = createContext();

export const NovoStore = ({children}) => {
    const [valor, setValor] = useState(false);

    return (
        <NovoContext.Provider value={{valor, setValor}}>
            {children}
        </NovoContext.Provider>
    )
}



