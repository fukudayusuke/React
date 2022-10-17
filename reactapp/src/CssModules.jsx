import classes from "./CssModules.module.scss";


export const CssModules = () => {
    return(
        <div className={classes.container} >
            <p className={classes.title} >Is this CSS Modules </p>
            <button className={classes.button} > Button </button>
        </div>
    );
};