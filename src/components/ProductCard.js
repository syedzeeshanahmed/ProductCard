import React, { useState } from 'react';
import './ProductCard.css'; // Import your CSS file for styling

const ProductCard = ({ name, price, picture, inStock }) => {
    
    // Define state variables using the useState hook
    const [quantity, setQuantity] = useState(1); 
    const [isAddedToCart, setIsAddedToCart] = useState(false);

    // Function to increment the quantity
    const handleIncrement = () =>{
        console.log('High');
        setQuantity(prevQuantity => prevQuantity + 1);
    };
    
    // Function to decrement the quantity, with a check to ensure quantity doesn't go below 1
    const handleDecrement = () =>{
        console.log('Low');
        if (quantity > 1){
            setQuantity(prevQuantity => prevQuantity - 1);
        }
    };
    
    // Function to handle the click event of adding the product to the cart
    const handleClick = () => {
        // Simulating adding the product to a cart
        console.log("Added ${quantity} ${name}(s) to cart"); // Set isAddedToCart to true to indicate that the product is added to the cart
        setIsAddedToCart(true);
    };
    
    // Return the JSX for rendering the product card component
    return (
    <div className="product-card">
        <div className='product-image'>
        <img src={picture} alt={name} className="product-image" />
        </div>
        <div className="product-info">
        <h3 className="product-name">{name}</h3>
        <p className="product-price">Rs.{price}</p>
        {inStock ? (
            <div>
            <div className="quantity-controls">
                <button className="quantity-button" onClick={handleDecrement}>
                -
                </button>
                <span className="quantity">{quantity}</span>
                <button className="quantity-button" onClick={handleIncrement}>
                +
                </button>
            </div>
            <button
                className={"add-to-cart ${isAddedToCart ? 'disabled' : ''}"}
                onClick={handleClick}
                disabled={isAddedToCart}
            >
                {isAddedToCart ? 'Added to Cart' : 'Add to Cart'}
            </button>
            </div>
        ) : (
            <button className="out-of-stock" disabled>Out of Stock</button>
        )}
        </div>
    </div>
    );
    };

export default ProductCard;