export const ColoredMessage = ( prop ) => {
    console.log( prop );

    const { color, children } = prop;
        
    const contentsStyle = {
        color : color,
        fontsize : "20px"
    };

    return (
        <>
        <p style={contentsStyle} > {children }</p>
        </>
    );
}