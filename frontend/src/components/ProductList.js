import React, { useState, useEffect } from 'react';
import axios from 'axios';

function ProductList() {
    const [products, setProducts] = useState([]); // Liste des produits
    const [showForm, setShowForm] = useState(false); // Affiche/Masque le formulaire
    const [formData, setFormData] = useState({
        name: '',
        description: '',
        product_type: '',
        quantity: 0,
        min_threshold: 0
    }); // Données du produit en cours d'ajout ou de modification
    const [editingProduct, setEditingProduct] = useState(null); // Produit en cours de modification

    // Fonction pour charger les produits depuis l'API
    const fetchProducts = () => {
        axios.get('http://127.0.0.1:8000/api/products/')
            .then(response => {
                console.log("Produits chargés :", response.data); // Log des produits
                setProducts(response.data);
            })
            .catch(error => console.error("Erreur de chargement :", error));
    };

    useEffect(() => {
        fetchProducts();
    }, []);

    // Gère les changements de valeurs dans le formulaire
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    // Ouvre le formulaire pour ajouter un nouveau produit
    const handleAddProductClick = () => {
        setEditingProduct(null); // Aucune édition en cours
        setFormData({ name: '', description: '', product_type: '', quantity: 0, min_threshold: 0 }); // Réinitialise le formulaire
        setShowForm(true); // Affiche le formulaire
    };

    // Ouvre le formulaire pour modifier un produit existant
    const handleEditProductClick = (product) => {
        setEditingProduct(product.id); // Définit le produit en cours d'édition
        setFormData({
            name: product.name,
            description: product.description,
            product_type: product.product_type,
            quantity: product.quantity,
            min_threshold: product.min_threshold
        }); // Charge les données du produit dans le formulaire
        setShowForm(true); // Affiche le formulaire
    };

    // Soumet le formulaire pour ajouter ou modifier un produit
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Soumission du formulaire :", formData); // Log des données du formulaire

        const request = editingProduct
            ? axios.put(`http://127.0.0.1:8000/api/products/${editingProduct}/`, formData)
            : axios.post('http://127.0.0.1:8000/api/products/', formData);

        request
            .then(response => {
                console.log("Réponse de l'API :", response.data); // Vérifie la réponse de l'API
                fetchProducts(); // Recharge la liste des produits
                setShowForm(false); // Masque le formulaire
                setEditingProduct(null); // Réinitialise l'état d'édition
                setFormData({ name: '', description: '', product_type: '', quantity: 0, min_threshold: 0 }); // Réinitialise le formulaire
            })
            .catch(error => console.error("Erreur d'ajout ou de modification :", error));
    };

    // Supprime un produit
    const handleDeleteProduct = (id) => {
        axios.delete(`http://127.0.0.1:8000/api/products/${id}/`)
            .then(() => {
                console.log("Produit supprimé avec succès");
                fetchProducts(); // Recharge la liste des produits après suppression
            })
            .catch(error => console.error("Erreur de suppression :", error));
    };

    return (
        <div className="container">
            <h1 className="my-4">Inventaire des Produits</h1>
            <button onClick={handleAddProductClick} className="btn btn-primary mb-3">Ajouter un produit</button>

            {/* Formulaire d'ajout/modification */}
            {showForm && (
                <div className="mb-4">
                    <h2>{editingProduct ? "Modifier le produit" : "Ajouter un produit"}</h2>
                    <form onSubmit={handleSubmit}>
                        <input type="text" name="name" placeholder="Nom" value={formData.name} onChange={handleChange} className="form-control my-2" required />
                        <input type="text" name="description" placeholder="Description" value={formData.description} onChange={handleChange} className="form-control my-2" required />
                        <input type="text" name="product_type" placeholder="Type" value={formData.product_type} onChange={handleChange} className="form-control my-2" required />
                        <input type="number" name="quantity" placeholder="Quantité" value={formData.quantity} onChange={handleChange} className="form-control my-2" required />
                        <input type="number" name="min_threshold" placeholder="Seuil minimum" value={formData.min_threshold} onChange={handleChange} className="form-control my-2" required />
                        <button type="submit" className="btn btn-success">Enregistrer</button>
                        <button type="button" onClick={() => setShowForm(false)} className="btn btn-secondary mx-2">Annuler</button>
                    </form>
                </div>
            )}

            {/* Liste des produits */}
            <ul className="list-group">
                {products.map(product => (
                    <li key={product.id} className="list-group-item d-flex justify-content-between align-items-center">
                        {product.name} - {product.quantity} en stock
                        <div>
                            <button onClick={() => handleEditProductClick(product)} className="btn btn-secondary mx-1">Modifier</button>
                            <button onClick={() => handleDeleteProduct(product.id)} className="btn btn-danger">Supprimer</button>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default ProductList;
