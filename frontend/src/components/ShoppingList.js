import React, { useEffect, useState } from 'react';
import axios from 'axios';

function ShoppingList() {
    const [shoppingList, setShoppingList] = useState([]);

    useEffect(() => {
        axios.get('http://127.0.0.1:8000/api/products/')
            .then(response => {
                const itemsToBuy = response.data.filter(product => product.quantity < product.min_threshold);
                setShoppingList(itemsToBuy);
            })
            .catch(error => console.error(error));
    }, []);

    return (
        <div className="container">
            <h2 className="my-4">Liste d'achat</h2>
            <ul className="list-group">
                {shoppingList.map(item => (
                    <li key={item.id} className="list-group-item">
                        {item.name} - {item.quantity} en stock (Seuil minimum : {item.min_threshold})
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default ShoppingList;
