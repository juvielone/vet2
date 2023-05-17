import AdminNav from "./AdminNav";
import PromoAddModal from "../../components/admin/PromoAddModal";

function PromoPage() {
  return (
    <>
      <AdminNav />
      <div className="container">
        <div
          style={{ width: "fitContent", marginLeft: "15em", marginTop: "2rem" }}
        >
          <h1 className="mb-5">Promotions</h1>

          <PromoAddModal />

          {/* ==================================================================== */}
          <div className="table">
            <table class="table">
              <thead>
                <tr>
                  <th scope="col">Promo Name</th>
                  <th scope="col">Promo Description</th>
                  <th scope="col">Promo Code</th>
                  <th scope="col">Promo Discount</th>
                  <th scope="col">Action / Status</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">1</th>
                  <td>Mark</td>
                  <td>Otto</td>
                  <td>@mdo</td>
                </tr>
                <tr>
                  <th scope="row">2</th>
                  <td>Jacob</td>
                  <td>Thornton</td>
                  <td>@fat</td>
                </tr>
                <tr>
                  <th scope="row">3</th>
                  <td colspan="2">Larry the Bird</td>
                  <td>@twitter</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}

export default PromoPage;
