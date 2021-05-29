import React from "react";
import Table from "../components/Table/TableComponent";
import TreeComponent from "../components/TreeComponent/TreeComponent";
const Home = () => {
  return (
    <div>
      <div className="miteContainer">
        <TreeComponent />
        <Table />
      </div>
      <style jsx global>{`
        .miteContainer {
          display: flex;
          flexdirection: column;
        }
        .idHeadBackgroundColor {
          background: #c5c5c5;
        }
      `}</style>
    </div>
  );
};

export default Home;
