import { createContext } from "react";

export const AdninFlagContext = createContext({});

export const AdminFlagProvider = ( prop ) =>
{
    const { children } = prop;

    const sampleObj = { sampleValue : "test" };

    return(
        <AdninFlagContext.Provider value={ sampleObj }>
            {children}
        </AdninFlagContext.Provider>
    );
};