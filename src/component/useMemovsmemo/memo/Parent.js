import React, { useState, useEffect } from 'react';
import Count from './Count';
import CountMemo from './CountMemo';
 
const Parent = () => {
    const [cheeseType, setCheeseType] = useState('');
    const [wine, setWine] = useState('');

    const whichWineGoesBest = () => {
        switch (cheeseType) {
            case 'MOZARELLA':
                return setWine('CABERNET');
            case 'CHEDDAR':
                return setWine('CHARDONAY');
            case 'PARMESAN':
                return setWine('MERLOT');
            default:
                return setWine('CHARDONAY');
        }
    };

    useEffect(() => {
        let mounted = true;
        if(mounted) {
            whichWineGoesBest()
        }
        return() => (mounted = false)
    });

    return(
        <>
        <div>
            <h3>Without React.memo() or useMemo()</h3>
            <h1>Select cheese which will go best!</h1>
            <button type="button" onClick={()=>setCheeseType('MOZARELLA')}>MOZARELLA</button>
            <button type="button" onClick={()=>setCheeseType('CHEDDAR')}>CHEDDAR</button>
            <button type="button" onClick={()=>setCheeseType('PARMESAN')}>PARMESAN</button>
            {cheeseType && (
                <p>For {cheeseType}, <span>{wine}</span>{" "} goes</p>
            )}
            <Count />
        </div>
        <hr/>
        <div>
            <h3>React.memo()</h3>
            <h1>Select cheese which will go best!</h1>
            <button type="button" onClick={()=>setCheeseType('MOZARELLA')}>MOZARELLA</button>
            <button type="button" onClick={()=>setCheeseType('CHEDDAR')}>CHEDDAR</button>
            <button type="button" onClick={()=>setCheeseType('PARMESAN')}>PARMESAN</button>
            {cheeseType && (
                <p>For {cheeseType}, <span>{wine}</span>{" "} goes</p>
            )}
            <CountMemo />
        </div>
        </>
    )
}

export default Parent;
