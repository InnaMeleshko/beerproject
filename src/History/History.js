import React from "react";
import { useNavigate } from "react-router-dom";

import Button from "@mui/material/Button";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

const History = () => {
  const navigate = useNavigate();
  const goBack = () => navigate(-1);
  return (
    <div className="Container">
      <div className="Container">
        <Header title="Drinking history" />
        <div className="Container-inner">
          <div>
            <div className="Inner-data">
              <h3>Numbers of beers</h3>
              <span></span> {/* insert total   */}
            </div>

            <div className="Inner-data">
              <h3>Final volume</h3>
              <span></span> {/* insert  counter + counter 2 + counter 3  */}
            </div>
          </div>
          <div>
            <Button variant="orange" onClick={goBack}>
              Go back
            </Button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
export default History;
