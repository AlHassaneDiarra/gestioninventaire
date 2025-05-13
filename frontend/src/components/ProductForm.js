import React, { useState, useEffect } from 'react';
import axios from 'axios';

function ProductForm({ product, onClose, onSave }) {
    const [formData, setFormData] = useState({
        name: '',
        description: '',
        product_type: '',
        quantity: 0,
        min_threshold: 0
    });

    useEffect(() => {
        if (product) {
            setFormData(product); // Charge les données si on édite un produit existant
        }
    }, [product]);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const request = product
            ? axios.put(`http://127.0.0.1:8000/api/products/${product.id}/`, formData)
            : axios.post('http://127.0.0.1:8000/api/products/', formData);

        request
            .then(response => {
                console.log("Réponse de l'API :", response.data); // Vérifie la réponse de l'API
                onSave(); // Recharge la liste des produits
                onClose(); // Ferme le formulaire
            })
            .catch(error => console.error("Erreur lors de l'ajout ou de la modification :", error));
    };

    return (
        <div className="modal">
            <div className="modal-content">
                <span className="close" onClick={onClose}>&times;</span>
                <h2>{product ? "Modifier le produit" : "Ajouter un produit"}</h2>
                <form onSubmit={handleSubmit}>
                    <input type="text" name="name" placeholder="Nom" value={formData.name} onChange={handleChange} className="form-control my-2" />
                    <input type="text" name="description" placeholder="Description" value={formData.description} onChange={handleChange} className="form-control my-2" />
                    <input type="text" name="product_type" placeholder="Type" value={formData.product_type} onChange={handleChange} className="form-control my-2" />
                    <input type="number" name="quantity" placeholder="Quantité" value={formData.quantity} onChange={handleChange} className="form-control my-2" />
                    <input type="number" name="min_threshold" placeholder="Seuil minimum" value={formData.min_threshold} onChange={handleChange} className="form-control my-2" />
                    <button type="submit" className="btn btn-primary">Enregistrer</button>
                </form>
            </div>
        </div>
    );
}

export default ProductForm;
