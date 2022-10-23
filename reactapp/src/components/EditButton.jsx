const style = {
    width:"100px",
    padding:"6px",
    borderRadius:"8px"
};

export const EditButton  = ( prop ) =>
{
    const { isAdmin } = prop;

    return(
        <button style={style} disabled={!isAdmin} >Edit</button>
    );
};