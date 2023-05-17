function HomeService({ service }) {
  return (
    <>
      <div className="card p-4 service-card" style={{ height: "20em" }}>
        <i class="bi bi-collection-fill"></i>
        <h1 class="fs-2">{service.srvName}</h1>
        <p className="mt-3 " style={{ color: "#392921;", height: "5em" }}>
          {service.srvDesc}
        </p>
        <a class="btn btn-primary">₱ {service.srvFee}</a>
      </div>
    </>
  );
}

export default HomeService;
