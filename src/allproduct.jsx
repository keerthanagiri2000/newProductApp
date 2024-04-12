import axios from 'axios';
import './App.css'
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaTrash } from 'react-icons/fa'

const AllproductPage = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetchProducts();
    }, []);

    const fetchProducts = async () => {
        try {
            const response = await axios.get('https://fakestoreapi.com/products');
            setProducts(response.data);
        } catch (error) {
            console.error('Error fetching products:', error);
        }
    };

    const handleDelete = async (productId) => {
        try {
           const res = await axios.delete(`https://fakestoreapi.com/products/${productId}`);
           alert("Product Successfully deleted")
           fetchProducts();
        } catch (error) {
            console.error('Error deleting product:', error);
        }
    };

    
    return (
        <div className='productcard-container'>
            {products.map((product) => (
                <div className='productcard' key={product.id}>
                    <Link to={`/product/${product.id}`}>
                        <img className="image" src={product.image} alt="Product Image" />
                        <h3>{product.title}</h3>
                        <h4>{product.price}</h4>
                        <p>{product.description}</p>
                        <p>Ratings: {product.rating.rate}</p>
                    </Link>
                    <button onClick={() => handleDelete(product.id)}>
                        <FaTrash />
                    </button>
                </div>
            ))}
        </div>
    )
};

export default AllproductPage;