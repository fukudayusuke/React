import { EditButton } from "./EditButton";

const style = {
    width:"300px",
    height:"200px",
    margin:"8px",
    borderRadius:"8px",
    backgroundColor:"#e9dbd0",
    display:"flex",
    flexDirection:"column",
    justifyContent:"center",
    alignItems:"center"
};


export const Card = ( prop ) =>
{
    const { isAdmin } = prop;

    return (
        <div style={style}>
            <p>Fukuda Yusuke</p>
            <EditButton isAdmin={isAdmin}/>
        </div>
    );
}