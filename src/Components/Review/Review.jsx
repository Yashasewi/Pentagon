function Review() {
  return (
    <div className="reviewDiv">
      <div className="reviewHeadline">
        <h1>What people say about us?</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
          ullamcorper congue eros
        </p>
      </div>
      <div className="reviewSection">
        <div className="reviewCard">
          <h2 className="reviewButton">T-shirt</h2>
          <p className="reviewText">
            Lorem ipsum is placeholder text commonly used in the graphic, print,
            and publishing industries for previewing layouts and visual mockups.
          </p>
        </div>
        <div className="reviewCard">
          <h2 className="reviewButton">Sweater</h2>
          <p className="reviewText">
            Lorem ipsum is placeholder text commonly used in the graphic, print,
            and publishing industries for previewing layouts and visual mockups.
          </p>
        </div>
        <div className="reviewCard">
          <h2 className="reviewButton">Long Sleeve</h2>
          <p className="reviewText">
            Lorem ipsum is placeholder text commonly used in the graphic, print,
            and publishing industries for previewing layouts and visual mockups.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Review;
