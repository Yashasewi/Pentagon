import Image from "next/image";
function Collection() {
  const card =
    "https://tailwindui.com/img/ecommerce-images/product-page-02-featured-product-shot.jpg";
  return (
    <div className="collection">
      <div className="collection_heading">
        <h1>New Collection!</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
          ullamcorper congue eros
        </p>
      </div>
      <div className="cardDiv">
        <div className="card">
          <Image
            className="card_image "
            src={card}
            alt="test"
            width={300}
            height={300}
          />
          <p className="cardButton">T-shirt</p>
        </div>
        <div className="card">
          <Image
            className="card_image "
            src={card}
            alt="test"
            width={300}
            height={300}
          />
          <p className="cardButton">Sweater</p>
        </div>
        <div className="card">
          <Image
            className="card_image "
            src={card}
            alt="test"
            width={300}
            height={300}
          />
          <p className="cardButton">Long Sleeve</p>
        </div>
      </div>
    </div>
  );
}

export default Collection;
