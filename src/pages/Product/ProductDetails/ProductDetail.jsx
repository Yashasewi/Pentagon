import Image from "next/image";
import card from "/public/Images/collectionCard.svg";
const ProductDetails = (productData) => {
    return (
        <div className="productContainer">
            <div className="productMain">
                <div className="productImage">
                    <Image
                        className="active img-fluid"
                        src={card}
                        alt="Product Image"
                        width={510}
                        height={510}
                    />

                    <div className="productImageSmall">
                        <Image
                            className="img-fluid"
                            src={card}
                            alt="Product Image"
                            width={100}
                            height={100}
                        />
                        <Image
                            className="img-fluid"
                            src={card}
                            alt="Product Image"
                            width={100}
                            height={100}
                        />
                        <Image
                            className="img-fluid"
                            src={card}
                            alt="Product Image"
                            width={100}
                            height={100}
                        />
                        <Image
                            className="img-fluid"
                            src={card}
                            alt="Product Image"
                            width={100}
                            height={100}
                        />
                        <Image
                            className="img-fluid"
                            src={card}
                            alt="Product Image"
                            width={100}
                            height={100}
                        />
                    </div>
                </div>
                <div className="productInfo">
                    <h1 className="productTitle">Product Name</h1>
                    <div className="productPrice">$50</div>
                    <div className="productColor">
                        <div className="colorTitle">Colour</div>
                        <div className="colorList">
                            <div className="colorItem">
                                <div className="color">a</div>
                                <div className="color">b</div>
                                <div className="color">c</div>
                                <div className="color">d</div>
                            </div>
                        </div>
                    </div>
                    <div className="productSize">
                        <div className="sizeTitle">Size</div>
                        <div className="sizeList">
                        
                            <div className="sizeItem">S</div>
                            <div className="sizeItem">M</div>
                            <div className="sizeItem">L</div>
                            <div className="sizeItem">XL</div>
                            <div className="sizeItem">XXL</div>
                        </div>
                    </div>
                    <div className="productButtons">
                        <button className="addToCart">Add To Cart</button>
                        <button className="wishList">Wishlist</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

// export const getServersideProps = async (context) => {

//     const { id } = context.query;
//     const res = await fetch(`http://localhost:3000/api/products/${id}`);
//     const productData = await res.json();
// };

// pass productData as server side props to ProductDetails

// export async function getServerSideProps() {
//     return {
//         props: {
//             productData: {
//                 name: "Product Name",
//                 price: 50,
//                 description: "Product description goes here.",
//                 colors: [
//                     "#000",
//                     "#EDEDED",
//                     "#D5D6D8",
//                     "#EFE0DE",
//                     "#AB8ED1",
//                     "#F04D44",
//                 ],
//                 images: [
//                     "https://dummyimage.com/300x300/000/fff",
//                     "https://dummyimage.com/300x300/ddd/000",
//                     "https://dummyimage.com/300x300/888/fff",
//                 ],
//             },
//         },
//     };
// }

export default ProductDetails;
