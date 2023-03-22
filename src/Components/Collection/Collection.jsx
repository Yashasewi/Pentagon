import Image from "next/image";

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
          <Image
            src="/public/pentagon.png"
            alt="sdfgh"
            width={20}
            height={25}
          />
          <p className="cardButton">T-shirt</p>
        </div>
        <div className="card">
        <Image
            src="/public/pentagon.png"
            alt="sdfgh"
            width={20}
            height={25}
          />
          <p className="cardButton">Sweater</p>
        </div>
        <div className="card">
        <Image
            src="/public/pentagon.png"
            alt="sdfgh"
            width={20}
            height={25}
          />
          <p className="cardButton">Long Sleeve</p>
        </div>
      </div>
    </div>
  );
}

export default Collection;
