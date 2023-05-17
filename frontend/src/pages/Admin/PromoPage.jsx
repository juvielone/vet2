import AdminNav from "./AdminNav";
import Spinner from "../../components/Spinner";
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  reset,
  getAllPromo,
  createPromo,
  updatePromo,
  deletePromo,
} from "../../features/promotion/promoSlice";
import PromoAddModal from "../../components/admin/PromoAddModal";
import PromoUpdate from "./PromoUpdate";

function PromoPage() {
  // Initialize Navigate  & Dispatch
  const dispatch = useDispatch();

  // Initial States  ===================================
  const [promoData, setPromoData] = useState({
    promoName: "",
    promoDesc: "",
    promoCode: "",
    promoDiscount: "",
  });

  const handleSubmit = () => {
    dispatch(createPromo(promoData));
    // Refresh component
    // window.location.reload(false);
  };

  const handleUpdate = (srvData) => {
    // Update Data
    dispatch(updatePromo(srvData));
    // Refresh component
    window.location.reload(false);
  };

  const handleDelete = (id) => {
    dispatch(deletePromo(id));
  };

  // Call promotion
  const { promotion, isLoading, isError, message } = useSelector(
    (state) => state.promotion
  );
  useEffect(() => {
    if (isError) {
      console.log(message);
    }

    // Fetch all service
    dispatch(getAllPromo());

    // Clear appointment state when user unmounts(leave) the dashboard
    return () => {
      dispatch(reset());
    };
  }, [isError, message, dispatch]);

  if (isLoading) {
    return <Spinner />;
  }
  return (
    <>
      <AdminNav />
      <div className="container">
        <div style={{ marginLeft: "15em", marginTop: "2rem" }}>
          <h1 className="mb-5">Promotions</h1>

          <PromoAddModal
            promoData={promoData}
            setPromoData={setPromoData}
            handleSubmit={handleSubmit}
          />

          {/* ==================================================================== */}
          <div className="table mt-5 pb-5">
            <table class="table table-hover" style={{ width: "65rem" }}>
              <thead>
                <tr>
                  <th style={{ width: "9rem" }} scope="col">
                    Promo Name
                  </th>
                  <th scope="col">Promo Description</th>
                  <th scope="col">Promo Code</th>
                  <th scope="col">Promo Discount</th>
                  <th style={{ width: "15rem" }} scope="col">
                    Action Buttons
                  </th>
                </tr>
              </thead>
              <tbody>
                {promotion.map((promo, index) => (
                  <tr>
                    <td>{promo.promoName}</td>
                    <td>{promo.promoDesc}</td>
                    <td>{promo.promoCode}</td>
                    <td>{promo.promoDiscount}%</td>
                    <td>
                      <button
                        className="btn btn-danger"
                        onClick={() => handleDelete(promo._id)}
                      >
                        Delete
                      </button>
                      <PromoUpdate promo={promo} handleUpdate={handleUpdate} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}

export default PromoPage;
