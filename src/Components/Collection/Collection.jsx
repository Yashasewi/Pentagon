import Image from "next/image";
import card from "/public/Images/hero.jpg";
import Link from "next/link";
function Collection() {
  const collection = [
    {
      name: "Anime",
      src: "",
    },
    {
      name: "Custom",
      src: "",
    },
    {
      name: "Abstract",
      src: "",
    },
  ];
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
        {collection.map((user, index) => (
          <Link href={`/${user.name}`}>
            <div className="card">
              <Image
                className="card_image "
                src={card}
                alt="test"
                width={300}
                height={300}
              />
              <p className="cardButton">{user.name}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Collection;
