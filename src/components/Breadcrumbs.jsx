const Breadcrumbs = ({ pageTitle }) => {
  return (
    <div>
      <div class="breadcrumbs overlay">
        <div class="container">
          <div class="bread-inner">
            <div class="row">
              <div class="col-12">
                <h2>{pageTitle}</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Breadcrumbs;
