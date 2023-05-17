import React, { useState } from "react";

function PromoUpdate({ promo, handleUpdate }) {
  const [promoData, setPromoData] = useState({
    _id: promo._id,
    promoName: promo.promoName,
    promoDesc: promo.promoDesc,
    promoCode: promo.promoCode,
    promoDiscount: promo.promoDiscount,
  });
  const btnId = promo.promoName.replace(/\s+/g, "");

  return (
    <>
      {/* <!-- Button trigger modal --> */}
      <button
        type="button"
        class="btn btn-warning ms-3"
        data-bs-toggle="modal"
        data-bs-target={`#${btnId}`}
      >
        Update
      </button>
      {/* <!-- Modal --> */}
      <div
        class="modal fade"
        id={btnId}
        tabindex="-1"
        aria-labelledby="updatePromotionModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <form onSubmit={() => handleUpdate(promoData)}>
            <div class="modal-content">
              <div class="modal-header">
                <h1 class="modal-title fs-5" id="updatePromotionModalLabel">
                  Update Promotions
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
                      value={promoData.promoName}
                      onChange={(e) =>
                        setPromoData({
                          ...promoData,
                          promoName: e.target.value,
                        })
                      }
                      required
                    />
                  </div>

                  {/* Promo Code */}
                  <div class="col-sm-6 col-lg-5">
                    <label className="col-form-label">Promo Code</label>
                    <input
                      type="text"
                      class="form-control"
                      value={promoData.promoCode}
                      onChange={(e) =>
                        setPromoData({
                          ...promoData,
                          promoCode: e.target.value,
                        })
                      }
                      required
                    />
                  </div>

                  {/* Promo Discount */}
                  <label for="inputPassword6" class="col-form-label">
                    Promo Discount
                  </label>
                  <div class="col-sm-6 col-lg-5">
                    <input
                      type="number"
                      class="form-control"
                      value={promoData.promoDiscount}
                      onChange={(e) =>
                        setPromoData({
                          ...promoData,
                          promoDiscount: e.target.value,
                        })
                      }
                      required
                    />
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
                      value={promoData.promoDesc}
                      onChange={(e) =>
                        setPromoData({
                          ...promoData,
                          promoDesc: e.target.value,
                        })
                      }
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
                  Update Promotions
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default PromoUpdate;
