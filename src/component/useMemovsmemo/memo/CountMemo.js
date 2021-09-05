import React, { useRef } from 'react';

const Count = () => {
    const renderCount = useRef(0);
    return(
        <>
        <p>Nothing has changed here but I have re-rendered now: {" "}
        <span>{(renderCount.current++)}.times </span></p>
        </>
    )
}

export default React.memo(Count);
