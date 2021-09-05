import { useState, useRef, useMemo } from "react";
import Count from './Count';

const Parent = () => {
    const [times, setTimes] = useState(0);
    const useMemoRef = useRef(0);

    const incrementUseMemoRef = () => useMemoRef.current++;

    const memoizedValue = useMemo(()=>incrementUseMemoRef(),[times]);
    return(
        <>
        <div>
            <button type="button" onClick={()=>setTimes(times+1)}>Force render</button>
        </div>
        <Count memoizedValue={memoizedValue} />
        </>
    )
}

export default Parent;
