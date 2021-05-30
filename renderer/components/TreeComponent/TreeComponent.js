import React from "react";
import "antd/dist/antd.css";
import { Tree, Switch } from "antd";
import { CarryOutOutlined, FormOutlined } from "@ant-design/icons";
const treeData = [
  {
    title: "DemoProject",
    key: "0-0",
    icon: <CarryOutOutlined />,
    children: [
      {
        title: "Test Case1",
        key: "0-0-0",
        icon: <CarryOutOutlined />,
        children: [
          {
            title: "Test suite 1",
            key: "0-0-0-0",
            icon: <CarryOutOutlined />,
          },
          {
            title: "Test suite 2",
            key: "0-0-0-2",
            icon: <CarryOutOutlined />,
          },
        ],
      },
      {
        title: "Test case 2",
        key: "0-0-1",
        icon: <CarryOutOutlined />,
        children: [
          {
            title: "Test suite 2-1",
            key: "0-0-1-0",
            icon: <CarryOutOutlined />,
          },
        ],
      },
      // {
      //   title: "parent 1-2",
      //   key: "0-0-2",
      //   icon: <CarryOutOutlined />,
      //   children: [
      //     {
      //       title: "leaf",
      //       key: "0-0-2-0",
      //       icon: <CarryOutOutlined />,
      //     },
      //     {
      //       title: "leaf",
      //       key: "0-0-2-1",
      //       icon: <CarryOutOutlined />,
      //       switcherIcon: <FormOutlined />,
      //     },
      //   ],
      // },
    ],
  },
  {
    title: "parent 2",
    key: "0-1",
    icon: <CarryOutOutlined />,
    children: [
      {
        title: "parent 2-0",
        key: "0-1-0",
        icon: <CarryOutOutlined />,
        children: [
          {
            title: "Test suite 2-1",
            key: "0-1-0-0",
            icon: <CarryOutOutlined />,
          },
          {
            title: "Test suite 2-2",
            key: "0-1-0-1",
            icon: <CarryOutOutlined />,
          },
        ],
      },
    ],
  },
];

const TreeComponent = () => {
  const onSelect = (selectedKeys, info) => {
    console.log("selected", selectedKeys, info);
  };

  return (
    <div>
      <Tree
        showLine={true}
        defaultExpandedKeys={["0-0-0"]}
        onSelect={onSelect}
        treeData={treeData}
      />
    </div>
  );
};

export default TreeComponent;
