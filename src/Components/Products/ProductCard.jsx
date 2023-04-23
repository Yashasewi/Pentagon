import React from "react";
import Image from "next/image";
import Hero from "/public/images/Hero.png";

const ProductCard = ({
    title,
    brand,
    price,
    discountedPrice,
    rating,
    isOversized,
    fabricType,
}) => {
    return (
        <div className="product-card">
            <div className="product-img-wrapper">
                {/* <img src={imgSrc} alt={title} className="product-img" /> */}
                <Image
                    src={Hero}
                    alt={title}
                    loading="lazy"
                    width={300}
                    height={350}
                />
            </div>
            <div className="product-details">
                <div className="product-name">
                    <h3 className="brand-name">{brand}</h3>
                    <h2 className="product-title">{title}</h2>
                </div>
                <div className="product-prices">
                    {discountedPrice && (
                        <div className="discounted-price">
                            <span>₹</span>
                            {discountedPrice}
                        </div>
                    )}
                    {price && <div className="actual-price">₹{price}</div>}
                </div>
                {fabricType && (
                    <div className="fabric-tag">
                        <div className="fabric-label">{fabricType}</div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default ProductCard;
