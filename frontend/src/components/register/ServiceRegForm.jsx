import { Fragment } from "react";
import Spinner from "../Spinner";

function ServiceRegForm({
  service,
  serviceLoading,
  userApm,
  setUserApm,
  serviceClass,
}) {
  function handleClick(service) {
    setUserApm({
      ...userApm,
      service: service,
    });
  }

  if (serviceLoading) {
    return <Spinner />;
  }
  return (
    <Fragment>
      <div class="mb-5 container row" style={{}}>
        <div class="card col-lg-5 service-reg-card ms-4">
          <div class="card-body">
            <h4>My Service: {userApm.service}</h4>
          </div>
        </div>
      </div>
      {service.map((perService) => (
        <div class={serviceClass}>
          <div
            onClick={() => handleClick(perService.srvName)}
            className="card p-4 service-card"
            style={{ height: "20em" }}
          >
            <i class="bi bi-collection-fill"></i>
            <h1 class="fs-2">{perService.srvName}</h1>
            <p className="mt-3 " style={{ color: "#392921;", height: "5em" }}>
              {perService.srvDesc}
            </p>
            <a class="btn btn-primary">₱ {perService.srvFee}</a>
          </div>
        </div>
      ))}

      {userApm.service != "" && (
        <button
          className="btn btn-next"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next"
          style={{ marginTop: "2rem", marginLeft: "55rem", width: "10rem" }}
        >
          Next <i class="bi bi-arrow-right-short"></i>
        </button>
      )}
    </Fragment>
  );
}

export default ServiceRegForm;
