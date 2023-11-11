import React from 'react';
import upChart from '../../assets/chart-up.svg';
import downChart from '../../assets/chart-down.svg';

const TableCoins = ({coins}) => {
    console.log(coins);
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
                        coins.map((item)=> <tr key={item.id}>
                            <td>
                                <div>
                                    <img src={item.image} alt={item.name} />
                                    <span>{item.symbol.toUpperCase()}</span>
                                </div>
                            </td>
                            <td>{item.name}</td>
                            <td>${item.current_price.toLocaleString()}</td>
                            <td>{item.price_change_percentage_24h.toFixed(2)}%</td>
                            <td>{item.total_volume.toLocaleString()}</td>
                            <td> <img src={
                                
                                item.price_change_percentage_24h > 0 ? upChart : downChart} alt={item.name} /> </td>
                                      
                            
                        </tr>)
                    }
                </tbody>
            </table>
        </div>
    );
};

export default TableCoins;