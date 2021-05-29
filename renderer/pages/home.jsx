import React from "react";
import Table from "../components/Table/TableComponent";
import TreeComponent from "../components/TreeComponent/TreeComponent";
const Home = () => {
  return (
    <div className="mitePageContainer">
      <h2 className="miteHeader">MITE Project</h2>
      <div className="miteContainer">
        <div className="leftChild">
          <div className="leftChildSubheading">
            <p>Project Navigator</p>
          </div>
          <div className="treeComponent">
          <TreeComponent />
          </div>
        </div>
        <div className="rightChild">
        <div className="rightChildSubheading">
            <p>System check to test</p>
            <p>PTC ID: NEW ITEM</p>
          </div>
          <Table />
        </div>
      </div>
      <style jsx global>{`
        .mitePageContainer {
          padding: 24px 8px;
        }
        .miteContainer {
          display: flex;
          flex-direction: row; 
        }
        .miteHeader {
          margin-bottom: 16px;
        }
        .idHeadBackgroundColor {
          background: #c5c5c5;
        }
        .idHeadBackgroundColor:hover {
          background: #c5c5c5;
      }
        .leftChild {
          flex: 15;
          border: 1px solid #e5e5e5;
          margin-right: 8px;
        }
        .leftChild p {
          margin-bottom: 0;
        }
        .treeComponent {
          padding: 0 8px;
        }
        .rightChild {
          flex: 85;
          border: 1px solid #e5e5e5;
        }
        .rightChild p {
          margin-bottom: 0;
        }
        .leftChildSubheading {
            background: #c0bfc0;
            padding: 8px;
            margin-bottom: 16px;
            font-weight: 600;
        }
        .rightChildSubheading {
          display: flex;
          align-items: center;
          font-weight: 600;
          justify-content: space-between;
          background: #a1b5cd;
          padding: 8px;
          margin: 0
        }
      `}</style>
    </div>
  );
};

export default Home;
