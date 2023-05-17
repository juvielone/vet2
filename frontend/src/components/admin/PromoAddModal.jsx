function PromoAddModal() {
  return (
    <>
      {/* <!-- Button trigger modal --> */}
      <button
        type="button"
        class="btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target="#promotionModal"
      >
        Add Promotions
      </button>
      {/* <!-- Modal --> */}
      <div
        class="modal fade"
        id="promotionModal"
        tabindex="-1"
        aria-labelledby="promotionModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <form>
            <div class="modal-content">
              <div class="modal-header">
                <h1 class="modal-title fs-5" id="promotionModalLabel">
                  Add Promotions
                </h1>
                <button
                  type="button"
                  class="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div class="modal-body">
                <div className="row">
                  {/* Promo Name */}
                  <div className="col-lg-6">
                    <label className="col-form-label">Promo Name</label>
                    <input
                      type="text"
                      class="form-control form-control"
                      required
                    />
                  </div>

                  {/* Promo Code */}
                  <div class="col-sm-6 col-lg-5">
                    <label className="col-form-label">Promo Code</label>
                    <input type="text" class="form-control" required />
                  </div>

                  {/* Promo Discount */}
                  <label for="inputPassword6" class="col-form-label">
                    Promo Discount
                  </label>
                  <div class="col-sm-6 col-lg-5">
                    <input type="number" class="form-control" required />
                  </div>

                  {/* Promo Description */}
                  <label for="inputPassword6" class="col-form-label">
                    Promo Description
                  </label>
                  <div class="col-sm-6 col-lg-12">
                    <textarea
                      type="text"
                      class="form-control"
                      rows="4"
                      required
                    />
                  </div>
                </div>
              </div>
              <div class="modal-footer">
                <button
                  type="button"
                  class="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Close
                </button>
                <button type="submit" class="btn btn-primary">
                  Add Promotions
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default PromoAddModal;
