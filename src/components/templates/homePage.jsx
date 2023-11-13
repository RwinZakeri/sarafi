import React, { useEffect, useState } from 'react';
// coins tables
import TableCoins from '../modules/tableCoins';
// api 
import { fetchCoinsList } from '../../services/cryptoApi';

//  loading section
import { Audio } from 'react-loader-spinner';

// pagination
import Pagination from '../modules/Pagination';

//  search bar 
import Search from '../modules/Seacrch';

import Chart from '../modules/Chart';

const HomePage = () => {
    // pagination page 
    const [pages , setPages] = useState(1);
    const [data , setData] = useState([]);
    const [loading , setLoadig] = useState(true);
    const [currency , setCurrency] = useState("USD");
    const [isShowPages , setShowPages] = useState(20);
    const {chart , setChart} = useState(true);
    useEffect(()=> {
        setLoadig(true)
        const fetchData = async ()=> {
        try {

            const Response = await fetch(fetchCoinsList(pages , currency , isShowPages));
            const jsons = await Response.json();
            setData(jsons);
            setLoadig(false)
        } catch (error) {
           alert(error)
        }
    }
       

        fetchData();
    } , [pages , currency , isShowPages])

    
    return (
        <div>
            <Search currency={currency} setCurrency={setCurrency} />
            {
            
                loading ? <Audio
                height="80"
                width="80"
                radius="9"
                color="green"
                ariaLabel="loading"
                wrapperStyle
                wrapperClass
              /> : <TableCoins currency={currency} setMyChart={setChart} coins={data} />

              
            }
           ss {!!chart && <Chart/>}
            <Pagination pages={pages} isShowPages={isShowPages} setShowPages={setShowPages}  setPages={setPages} />
        </div>
    );
};

export default HomePage;