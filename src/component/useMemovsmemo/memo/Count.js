import React, { useRef } from 'react';
// import { count } from 'yargs';

const Count = () => {
    const renderCount = useRef(0);
    return(
        <>
        <p>Nothing has changed here but I have re-rendered now: {" "}
        <span>{(renderCount.current++)}.times </span></p>
        </>
    )
}

export default Count;
