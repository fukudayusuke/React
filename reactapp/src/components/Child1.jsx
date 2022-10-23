import { Child2 } from "./Child2";
import { Child3 } from "./Child3";
import { useState, memo } from "react";

const style = {
    height:"200px",
    backgroundColor:"lightblue",
    padding:"8px"
};


export const  Child1= memo(( prop ) =>
{
    const { onClickReset } = prop;

    console.log(" Child1 Rendering ");
    return  (
        <div style={style}>
            <p>Child1</p>
            <button onClick={onClickReset} >Reset</button>
            <Child2/>
            <Child3/>
        </div>
    );
});