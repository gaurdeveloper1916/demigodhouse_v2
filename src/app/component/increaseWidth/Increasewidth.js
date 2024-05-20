import "./index.css";
const Increasewidth = () => {
  const IntialImages = [
    "https://img.freepik.com/free-photo/vibrant-scene-with-dj-techno-party_23-2150551537.jpg?ga=GA1.1.1887626236.1712805731&",
    "https://img.freepik.com/premium-photo/clubbing-dj-lively-energetic-performance-with-electronic-dance-music_734790-6060.jpg?ga=GA1.1.1887626236.1712805731&",
    "https://img.freepik.com/premium-photo/dynamic-image-dj-console-energizing-party-with-vibrant-beats_99096-4039.jpg?ga=GA1.1.1887626236.1712805731&",
    "https://img.freepik.com/premium-photo/dj-with-headphones-night-club-party-blue-light-people-crowd-background_968517-142771.jpg?ga=GA1.1.1887626236.1712805731&",
    "https://img.freepik.com/free-photo/vibrant-scene-with-dj-techno-party_23-2150551537.jpg?ga=GA1.1.1887626236.1712805731&",
    // "https://img.freepik.com/premium-photo/clubbing-dj-lively-energetic-performance-with-electronic-dance-music_734790-6060.jpg?ga=GA1.1.1887626236.1712805731&",
    // "https://img.freepik.com/free-photo/vibrant-scene-with-dj-techno-party_23-2150551537.jpg?ga=GA1.1.1887626236.1712805731&",
    // "https://img.freepik.com/premium-photo/dynamic-image-dj-console-energizing-party-with-vibrant-beats_99096-4039.jpg?ga=GA1.1.1887626236.1712805731&",
    // "https://img.freepik.com/premium-photo/dj-with-headphones-night-club-party-blue-light-people-crowd-background_968517-142771.jpg?ga=GA1.1.1887626236.1712805731&",
  ];
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="d-flex gap-2  p-4">
            {IntialImages.map((item, i) => {
              return (
                <>
                  <div className="custom-img-wrapper d-flex ">
                    <img className="custom-img-width rounded" src={item}></img>
                    <div className="text-container p-2">
                      <p className="text-white fw-bold">Event Name XYZ</p>
                      <button className="button-all bg-black">Book Now</button>
                    </div>
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Increasewidth;
