import { useContext } from "react";
import { AdminFlagContext } from "./providers/AdminFlagProvider";


const style = {
    width:"100px",
    padding:"6px",
    borderRadius:"8px"
};

export const EditButton  = ( prop ) =>
{
    // const { isAdmin } = prop;
    // const contextValue  = useContext(AdninFlagContext);
    // console.log( contextValue );

    const { isAdmin } = useContext( AdminFlagContext );

    return(
        <button style={style} disabled={!isAdmin} >Edit</button>
    );
};