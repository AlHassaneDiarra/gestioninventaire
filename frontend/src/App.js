import React from 'react';
import ProductList from './components/ProductList';
import ShoppingList from './components/ShoppingList';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
    return (
        <div className="App">
            <ProductList />
            <ShoppingList />
        </div>
    );
}

export default App;
