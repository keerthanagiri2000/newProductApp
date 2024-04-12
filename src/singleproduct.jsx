import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const SingleProductPage = () => {
    const [product, setProduct] = useState(null);
    const { productId } = useParams();

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const response = await axios.get(`https://fakestoreapi.com/products/${productId}`);
                setProduct(response.data);
            } catch (error) {
                console.error('Error fetching product:', error);
            }
        };

        fetchProduct();
    }, [productId]);
    return (
        <div>
            {product && (
                <div className="productcard">
                    <img className="single-image" src={product.image} alt={product.title} />
                    <h3>{product.title}</h3>
                    <h4>{product.price}</h4>
                    <p>{product.description}</p>
                    <p>Ratings: {product.rating.rate}</p>
                </div>
            )}
        </div>
    )
};

export default SingleProductPage;