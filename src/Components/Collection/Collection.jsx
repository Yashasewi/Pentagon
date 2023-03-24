import Image from "next/image";
import card from "/public/Images/collectionCard.svg";
function Collection() {
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
          <Image src={card} alt="sdfgh" width={300} height={220} />
          <p className="cardButton">T-shirt</p>
        </div>
        <div className="card">
          <Image src={card} alt="sdfgh" width={300} height={220} />
          <p className="cardButton">Sweater</p>
        </div>
        <div className="card">
          <Image src={card} alt="sdfgh" width={300} height={220} />
          <p className="cardButton">Long Sleeve</p>
        </div>
      </div>
    </div>
  );
}

export default Collection;
