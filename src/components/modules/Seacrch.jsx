import React, { useEffect, useState } from 'react';
import { searchCoin } from '../../services/cryptoApi';
import { Audio } from 'react-loader-spinner'
const Search = ({currency , setCurrency }) => {
    const [text , setText] = useState("");
    const [coins , setCoins] = useState([]);
    const [isLoading , setIsloading] = useState(false);
    useEffect(()=> {
        const controller = new AbortController();      
        if(!text) {
            setIsloading(false);
            return;
        };
        setCoins([])
           const searches = async ()=> {
            try {
                
                const Response = await fetch(searchCoin(text) , {signal : controller.signal});
                const json = await Response.json();
                console.log(json);
                setIsloading(false)
                if(json.coins) {setCoins(json.coins)} else {
                    alert(json.status.error_message)
                };
                
            } catch (error) {
                if(error.name !== "AbortError"){
                    alert(error.message);
                }
            }
              
            };

        setIsloading(true)
        searches();
        return ()=> controller.abort();
    } , [text])
    
    return (
        <div>
            <input type='text' placeholder='search ...' value={text} onChange={e=> setText(e.target.value)} />
            <select value={currency} onChange={e => setCurrency(e.target.value)}>
                <option value="usd">USD</option>
                <option value="eur">EUR</option>
                <option value="jpy">JPY</ option>
            </select>
            <div>
            {isLoading && <Audio
                height="80"
                width="80"
                radius="9"
                color="green"
                ariaLabel="loading"
                wrapperStyle
                wrapperClass
              /> }
                <ul>
                    {coins.map(coin => <li key={coin.id}>
                            <img src={coin.thumb} alt={coin.name} />
                            <p>{coin.name}</p>
                        </li>)}
                </ul>
            </div>
        </div>
    );
};

export default Search;