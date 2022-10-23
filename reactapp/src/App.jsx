import { useState, memo } from "react";
import { useEffect } from "react";

import { ColoredMessage } from "./components/ColoredMessage";
import { CssModules } from "./CssModules";
import { StyledJsx } from "./components/StyledJsx";
import { Child1 } from "./components/Child1";
import { Child4 } from "./components/Child4";
import { useCallback } from "react";
import { Card } from "./components/Card";



export const App = memo(() => 
{
    // return null;
    console.log("APP rendering");

    const [ num, setNum ] = useState(0);
    const [ isAdmin, setIsAdmin ] = useState(false);

//    useEffect( () => {
//        alert();
//    }, [num] )

    const onClickButton = () => 
    {
        // alert();
        setNum( num+1 );
    };

    const onClickReset = useCallback(() =>
    {
        setNum(0);
    },[]);

    const onClickSwitch = () =>
    {
        setIsAdmin( !isAdmin );
    };


    return (
        <>
        {/* <h1 style= {{ color : "red" }} > hellow would </h1> */}
        {/* <ColoredMessage color="blue" message="Media1" /> */}
        {/* <ColoredMessage color="pink" message="Media2" /> */}
        {/* <ColoredMessage > fukuda </ColoredMessage > */}
        <button onClick={onClickButton}>Button</button>
        <p>{num}</p>
        <Child1 onClickReset={onClickReset}/>
        <Child4/>
        {/* <CssModules></CssModules> */}
        {/* <StyledJsx></StyledJsx> */}

        { isAdmin ? <span>   admin</span> : <span>not admin</span> }
        <button onClick={onClickSwitch} > toggle </button>
        <Card isAdmin = {isAdmin}/>
        </>
    );
});
