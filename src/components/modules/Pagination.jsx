import React, { useState } from 'react';

const Pagination = ({pages , setPages , setShowPages , isShowPages}) => {
    const previosHandler = ()=> {
        if(pages < 1){
            return;
        }else{
            
            setPages(e=> e - 1)
        }

    }

    const nextHandler = ()=> {  

             setPages(e=> e + 1)
    }

    return (
        <div>

            <button onClick={previosHandler}>previous</button>
            <p style={{color : pages === 1 ? "red" : "inherit"}}>1</p>
            <p style={{color : pages === 2 ? "red" : "inherit"}}>2</p>
            {
                pages > 2 && pages < 9 && (
                    <>
                    <span>...</span>
                    <p>{pages}</p>
                    </>
                )
            }
            <span>...</span>
            <p>9</p>
            <p>10</p>
 
            <p>{pages}</p>
            
            <button onClick={nextHandler}>next</button>

            <select value={isShowPages} onChange={e => setShowPages(e.target.value)}>
                <option value="20">20</option>
                <option value="100">100</option>
            </select>
        </div>
    );
};

export default Pagination;