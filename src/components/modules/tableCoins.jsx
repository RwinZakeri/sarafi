import React from 'react';
import upChart from '../../assets/chart-up.svg';
import downChart from '../../assets/chart-down.svg';
import styles from "./TableCoin.module.css";
const TableCoins = ({coins , currency , setMyChart}) => {
    console.log(coins);
    console.log(currency);

    return (
        <div>
            <table>
                <thead>
                <tr>
                    <th>Coin</th>
                    <th>Name</th>
                    <th>Price</th>
                    <th>24h</th>
                    <th>TotalVolume</th>
                </tr>
                </thead>
                <tbody>
                    {
                        coins.map((item)=> 
                            <TableRow coin={item} setMyChart={setMyChart} currency={currency} key={item.id} />
                        )
                    }
                </tbody>
            </table>
        </div>
    );
};

export default TableCoins;



const TableRow = ({coin , setMyChart})=> {
    const dolar = "$";
    const euro = "€";
    const yen = "¥" ;
    const showHandler = ()=> {
        setMyChart(true)
        console.log("object");
    }
    return (
        <tr>
            <td>
                <div onClick={showHandler}>
                    <img src={coin.image} alt={coin.name} />
                    <span>{coin.symbol.toUpperCase()}</span>
                </div>
            </td>
            <td>{coin.name}</td>
        {/*  fix it later {currency == "USD" ? dolar : currency == "JPY" ? yen : currency == ""} */}
            <td>{coin.current_price.toLocaleString()}</td>
            <td>{coin.price_change_percentage_24h.toFixed(2)}%</td>
            <td>{coin.total_volume.toLocaleString()}</td>
            <td> <img src={

                coin.price_change_percentage_24h > 0 ? upChart : downChart} alt={coin.name} />
            </td>      
        </tr>
    )
}