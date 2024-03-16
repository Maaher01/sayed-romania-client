const Clients = () => {
  const clientImages = [
    "././src/assets/img/client1.png",
    "././src/assets/img/client2.png",
    "././src/assets/img/client3.png",
    "././src/assets/img/client4.png",
    "././src/assets/img/client5.png",
    "././src/assets/img/client1.png",
    "././src/assets/img/client2.png",
    "././src/assets/img/client3.png",
    "././src/assets/img/client4.png",
  ];

  return (
    <div>
      <div className="clients overlay">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-md-12 col-12">
              <div className="owl-carousel clients-slider">
                {clientImages.map((imageUrl, index) => (
                  <div key={index} className="single-clients">
                    <img src={imageUrl} alt="#" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Clients;
