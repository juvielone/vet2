import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  createSrv,
  getAllSrv,
  deleteSrv,
  updateSrv,
  reset,
} from "../../features/service/srvSlice";

import AdminNav from "./AdminNav";
import ServiceForm from "../../components/admin/ServiceForm";
import EditService from "../../components/admin/EditService";

const ServicePage = () => {
  // Initialize Navigate  & Dispatch
  const dispatch = useDispatch();

  // Initial States  ===================================
  const [srvData, setSrvData] = useState({
    serviceName: "",
    serviceDesc: "",
    serviceFee: "",
  });

  // Modal for creating services
  const [show, setShow] = useState(false);

  const handleSubmit = () => {
    dispatch(createSrv(srvData));
    setShow(false);
  };

  const handleDelete = (id) => {
    dispatch(deleteSrv(id));
    console.log(id);
  };

  const handleUpdate = (srvData) => {
    // Update Data
    dispatch(updateSrv(srvData));
    // Refresh component
    window.location.reload(false);
  };

  // Call service
  const { service, isLoading, isError, message } = useSelector(
    (state) => state.service
  );
  useEffect(() => {
    if (isError) {
      console.log(message);
    }

    // Fetch all service
    dispatch(getAllSrv());

    // Clear appointment state when user unmounts(leave) the dashboard
    return () => {
      dispatch(reset());
    };
  }, [isError, message, dispatch]);
  console.log(srvData);

  return (
    <>
      <AdminNav />
      <div className="">
        <div
          className="row container pb-5"
          style={{
            position: "relative",
            top: "1rem",
            left: "20.5rem",
            width: "70.2rem",
            height: "80%",
          }}
        >
          <span className="pt-5 pb-3">
            <ServiceForm
              srvData={srvData}
              setSrvData={setSrvData}
              handleSubmit={handleSubmit}
              show={show}
              setShow={setShow}
            />
          </span>
          <table class="table table-striped table-sm">
            <thead className="table-dark">
              <tr>
                <th scope="col">Service No</th>
                <th scope="col" className="pe-5">
                  <span className="pe-5">Service Name</span>
                </th>
                <th scope="col pe-2">Description</th>
                <th scope="col pe-2 ">Amount</th>
                <th scope="col pe-2">Action</th>
              </tr>
            </thead>
            <tbody>
              {/* Service from DB ======================== */}
              {service.map((srv, index) => (
                <tr>
                  <th scope="row">1</th>
                  <td>{srv.srvName}</td>
                  <td style={{ width: "25rem" }}>
                    <p>{srv.srvDesc}</p>
                  </td>
                  <td style={{ color: "green", fontWeight: "bold" }}>
                    {srv.srvFee}
                  </td>
                  <td>
                    {/* <button type="button" className="btn btn-dark">
                      <i class="bi bi-pencil-square pe-2"></i>
                      Edit
                    </button> */}
                    <EditService
                      service={srv}
                      handleUpdate={handleUpdate}
                      index={index}
                    />

                    <button
                      type="button"
                      className="btn btn-danger ms-3"
                      onClick={() => handleDelete(srv._id)}
                    >
                      <i class="bi bi-trash3 pe-2"></i>
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default ServicePage;
