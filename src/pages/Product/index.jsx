import ProductCard from "../../Components/Products/ProductCard";

const productsData = [
  {
    id: 1,
    imgSrc:
      "https://images.Pentagon.com/t640/men-thats-what-she-said-graphic-printed-oversized-t-shirt-18-585805-1681281367-1.jpg",
    alt: "Shop Men's Black That's What She Said Typography Oversized T-shirt-Front",
    title: "Men's Black ",
    brand: "Pentagon x the office",
    price: 1249,
    discountedPrice: 249,
    rating: 4.6,
    isOversized: true,
    fabricType: "100% COTTON",
  },
  {
    id: 2,
    imgSrc:
      "https://images.Pentagon.com/t640/men-printed-casual-green-Pentagon-17-315338-1622460467.jpg",
    alt: "Shop Men's Green Casual Printed Shirt-Front Pentagon",
    title: "Men's Green Casual Printed Shirt",
    brand: "Pentagon",
    price: 1599,
    discountedPrice: 599,
    rating: 4.2,
    isOversized: false,
    fabricType: "100% COTTON",
  },
  {
    id: 3,
    imageSrc:
      "https://images.Pentagon.com/t640/men-navy-blue-solid-cotton-biker-joggers-311539-1586387275.jpg",
    alt: "Shop Men's Navy Blue Solid Cotton Biker Joggers-Front Pentagon",
    title: "Men's Navy Blue Solid Cotton Biker Joggers",
    brand: "Pentagon",
    price: 1999,
    discountedPrice: 999,
    rating: 4.8,
    isOversized: false,
    fabricType: "100% COTTON",
  },
  {
    id: 4,
    imageSrc:
      "https://images.Pentagon.com/t640/men-maroon-solid-polo-collar-t-shirt-18-594065-1599672179.jpg",
    alt: "Shop Men's Maroon Solid Polo Collar T-shirt-Front Pentagon",
    title: "Men's Maroon Solid Polo Collar T-shirt",
    brand: "Pentagon",
    price: 999,
    discountedPrice: 499,
    rating: 4.5,
    isOversized: false,
    fabricType: "100% COTTON",
  },
  {
    id: 5,
    imageSrc:
      "https://images.Pentagon.com/t640/men-biker-jogger-pants-black-317935-1625680779.jpg",
    alt: "Shop Men's Biker Jogger Pants Black-Front Pentagon",
    title: "Men's Biker Jogger Pants Black",
    brand: "Pentagon",
    price: 1299,
    discountedPrice: null,
    rating: 4.7,
    isOversized: false,
    fabricType: "100% COTTON",
  },
  {
    id: 7,
    imageSrc:
      "https://images.Pentagon.com/t540/men-black-half-sleeve-t-shirt-panda-pool-party-animal-design-t-shirt-men-s-printed-t-shirts-330196-1617797173.jpg",
    alt: "Shop Men's Black Panda Pool Party Animal Half Sleeve T-shirt-Front",
    title: "Men's Black Panda Pool Party Animal Half Sleeve T-shirt",
    brand: "Pentagon",
    price: 499,
    rating: 4.4,
    fabricType: "100% COTTON",
  },
  {
    id: 8,
    imageSrc:
      "https://images.Pentagon.com/t540/men-graphic-printed-half-sleeve-t-shirt-18-565360-1680350817.jpg",
    alt: "Shop Men's Grey Typography Printed Half Sleeve T-shirt-Front",
    title: "Men's Grey Typography Printed Half Sleeve T-shirt",
    brand: "Pentagon",
    price: 499,
    rating: 4.2,
    fabricType: "100% COTTON",
  },
  {
    id: 9,
    imageSrc:
      "https://images.Pentagon.com/t540/men-navy-blue-solid-hoodie-half-sleeve-t-shirt-men-s-hooded-t-shirts-310543-1622005154.jpg",
    alt: "Shop Men's Navy Blue Solid Hoodie Half Sleeve T-shirt-Front",
    title: "Men's Navy Blue Solid Hoodie Half Sleeve T-shirt",
    brand: "Pentagon",
    price: 899,
    rating: 4.6,
    fabricType: "100% COTTON",
  },
  {
    id: 10,
    imageSrc:
      "https://images.Pentagon.com/t540/men-black-half-sleeve-t-shirt-today-s-mood-oversized-t-shirt-19-616838-1672399247.jpg",
    alt: "Shop Men's Black Today's Mood Oversized Half Sleeve T-shirt-Front",
    title: "Men's Black Today's Mood Oversized Half Sleeve T-shirt",
    brand: "Pentagon",
    price: 699,
    rating: 4.5,
    isOversized: true,
    fabricType: "100% COTTON",
  },

  // add more products as needed
];

function Index() {
  return (
    <div className="main">
      <h1>All Products</h1>
      <div className="product-container">
        {productsData.map((product) => (
          <ProductCard
            key={product.id}
            alt={product.alt}
            title={product.title}
            brand={product.brand}
            price={product.price}
            discountedPrice={product.discountedPrice}
            rating={product.rating}
            isOversized={product.isOversized}
            fabricType={product.fabricType}
          />
        ))}
      </div>
    </div>
  );
}

export default Index;
