import { Link, useLocation } from "react-router-dom";
import { useState } from "react";

const Hotels = () => {
  const location = useLocation();
  const active = location.pathname;

  const [showModal, setShowModal] = useState(false);

  return (


    <>

      <div className="main-content">
        <div className="hotel-header">
          <h1>Hotels</h1>
          <button
            className="add-hotel-btn"
            onClick={() => setShowModal(true)}
          >
            + Add Hotel
          </button>
        </div>


        {showModal && (
          <div
            className="modal-overlay"
            onClick={() => setShowModal(false)}
          >
            <div
              className="modal-card"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="modal-header">
                <h2>Add Hotel</h2>
                <span
                  className="close-btn"
                  onClick={() => setShowModal(false)}
                >
                  ×
                </span>
              </div>

              <form className="hotel-form">
                <label>Hotel Name*</label>
                <input type="text" required />

                <label>Location*</label>
                <input type="text" required />

                <label>Price / Room*</label>
                <input type="number" required />

                <label>Total Rooms*</label>
                <input type="number" required />

                <label>Owner Name*</label>
                <input type="text" required />

                <label>Phone*</label>
                <input type="tel" required />

                <button type="submit" className="save-btn">
                  Save
                </button>
              </form>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Hotels;
