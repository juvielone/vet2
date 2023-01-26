import React from "react";
import ServiceForm from "../../components/admin/ServiceForm";
import AdminNav from "./AdminNav";

const ServicePage = () => {
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
            <ServiceForm />
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
              <tr>
                <th scope="row">1</th>
                <td>Vaccine</td>
                <td style={{ width: "25rem" }}>
                  <p>
                    Vaccinations protect your dog against diseases, some of
                    which are life threatening and can be easily spread to other
                    dogs. Your puppy’s first vaccination will normally be at
                    about eight weeks of age, with a second dose at 10-12 weeks.
                    Your puppy won’t have full protection until two weeks after
                    the second vaccination takes effect.
                  </p>
                </td>
                <td style={{ color: "green", fontWeight: "bold" }}>545.00</td>
                <td>
                  <button type="button" className="btn btn-dark">
                    <i class="bi bi-pencil-square pe-2"></i>
                    Edit
                  </button>
                  <button type="button" className="btn btn-danger ms-3">
                    <i class="bi bi-trash3 pe-2"></i>
                    Delete
                  </button>
                </td>
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>Grooming</td>
                <td>
                  <p>
                    Hygienic care and cleaning of a dog, as well as a process by
                    which a dog's physical appearance is enhanced for showing or
                    other types of competition. A dog groomer (or simply
                    "groomer") is a person who earns their living grooming dogs.
                  </p>
                </td>
                <td style={{ color: "green", fontWeight: "bold" }}>450.00</td>
                <td>
                  <button type="button" className="btn btn-dark">
                    <i class="bi bi-pencil-square pe-2"></i>
                    Edit
                  </button>
                  <button type="button" className="btn btn-danger ms-3">
                    <i class="bi bi-trash3 pe-2"></i>
                    Delete
                  </button>
                </td>
              </tr>
              <tr>
                <th scope="row">3</th>
                <td>Check-Up</td>
                <td>
                  <p>
                    Wellness exams for pets and they are your cat or dog's best
                    opportunity to achieve long-term health and a high-quality
                    life. However, you may be asking yourself, what happens at
                    pet checkups to make them so important for my pet? Today our
                    Front Worth veterinarians answer that question.
                  </p>
                </td>
                <td style={{ color: "green", fontWeight: "bold" }}>650.00</td>
                <td>
                  <button type="button" className="btn btn-dark">
                    <i class="bi bi-pencil-square pe-2"></i>
                    Edit
                  </button>
                  <button type="button" className="btn btn-danger ms-3">
                    <i class="bi bi-trash3 pe-2"></i>
                    Delete
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default ServicePage;
