import { Fragment } from "react";
import Spinner from "../Spinner";

function ServiceRegForm({ service, serviceLoading, serviceClass }) {
  if (serviceLoading) {
    return <Spinner />;
  }
  return (
    <Fragment>
      {service.map((perService) => (
        <div class={serviceClass}>
          <div className="card p-4 service-card" style={{ height: "20em" }}>
            <i class="bi bi-collection-fill"></i>
            <h1 class="fs-2">{perService.srvName}</h1>
            <p className="mt-3 " style={{ color: "#392921;", height: "5em" }}>
              {perService.srvDesc}
            </p>
            <a class="btn btn-primary">₱ {perService.srvFee}</a>
          </div>
        </div>
      ))}
      <button
        className="btn btn-next"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="next"
        style={{ marginTop: "2rem", marginLeft: "55rem", width: "10rem" }}
      >
        Next <i class="bi bi-arrow-right-short"></i>
      </button>
    </Fragment>
  );
}

export default ServiceRegForm;
