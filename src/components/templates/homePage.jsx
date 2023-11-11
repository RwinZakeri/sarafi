import React, { useEffect, useState } from 'react';
// coins tables
import TableCoins from '../modules/tableCoins';
// api 
import { fetchCoinsList } from '../../services/cryptoApi';
const HomePage = () => {
    const [data , setData] = useState([]);
    useEffect(()=> {
        const fetchData = async ()=> {
            const Response = await fetch(fetchCoinsList());
            const jsons = await Response.json();
            setData(jsons);
        }

        fetchData();
    } , [])

    return (
        <div>
            <TableCoins coins={data} />
        </div>
    );
};

export default HomePage;