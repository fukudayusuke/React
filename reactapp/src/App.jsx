import { useState } from "react";
import { useEffect } from "react";

import { ColoredMessage } from "./components/ColoredMessage";
import { CssModules } from "./CssModules";

export const App = () => 
{
    // return null;

    const [ num, setNum ] = useState(0);

    useEffect( () => {
        alert();
    }, [num] )

    const onClickButton = () => 
    {
        // alert();
        setNum( num+1 );
    };


    return (
        <>
        {/* <h1 style= {{ color : "red" }} > hellow would </h1> */}
        {/* <ColoredMessage color="blue" message="Media1" /> */}
        {/* <ColoredMessage color="pink" message="Media2" /> */}
        {/* <ColoredMessage > fukuda </ColoredMessage > */}
        {/* <button onClick={onClickButton}>Button</button> */}
        {/* <p>{num}</p> */}
        <CssModules></CssModules>
        </>
    );
};
