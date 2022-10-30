import { createContext, useState } from "react";

export const AdminFlagContext = createContext({});

export const AdminFlagProvider = ( prop ) =>
{
    const { children } = prop;

    const [ isAdmin, setIsAdmin ] = useState(false);

    // const sampleObj = { sampleValue : "test" };

    return(
        // <AdninFlagContext.Provider value={ sampleObj }>
        <AdminFlagContext.Provider value={ { isAdmin, setIsAdmin } }>
            {children}
        </AdminFlagContext.Provider>
    );
};