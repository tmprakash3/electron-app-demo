import React, { useContext, useState, useEffect, useRef } from "react";

import "antd/dist/antd.css";
import { Table, Input, Button, Form, Select } from "antd";

import TableData from "../../common/data";
//import styled from "styled-jsx";


const EditableContext = React.createContext(null);
const { Option } = Select;

const EditableRow = ({ index, ...props }) => {
  const [form] = Form.useForm();
  return (
    <Form form={form} component={false}>
      <EditableContext.Provider value={form}>
        <tr {...props} />
      </EditableContext.Provider>
    </Form>
  );
};

const EditableCell = ({
  title,
  editable,
  children,
  dataIndex,
  record,
  ...restProps
}) => {
  const [editing, setEditing] = useState(false);
  const inputRef = useRef(null);
  const form = useContext(EditableContext);
  useEffect(() => {
    if (editing) {
      inputRef.current.focus();
    }
  }, [editing]);

  const toggleEdit = () => {
    setEditing(!editing);
    form.setFieldsValue({
      [dataIndex]: record[dataIndex],
    });
  };

  console.log({ title, dataIndex, children, record });

  const save = async () => {
    try {
      const values = await form.validateFields();
      toggleEdit();
      handleSave({ ...record, ...values });
    } catch (errInfo) {
      console.log("Save failed:", errInfo);
    }
  };

  let childNode = children;

  if (editable) {
    childNode = editing ? (
      <Form.Item
        style={{
          margin: 0,
        }}
        name={dataIndex}
        rules={[
          {
            required: true,
            message: `${title} is required.`,
          },
        ]}
      >
        <Input
          ref={inputRef}
          onPressEnter={save}
          onBlur={save}
          style={getColor}
        />
      </Form.Item>
    ) : (
      <div
        className="editable-cell-value-wrap"
        style={{
          paddingRight: 24,
        }}
        onClick={toggleEdit}
      >
        {children}
      </div>
    );
  }

  return <td {...restProps}>{childNode}</td>;
};

class EditableTable extends React.Component {
  constructor(props) {
    super(props);
    this.columns = [
      {
        title: "#",
        dataIndex: "idHead",
      },
      {
        title: "Action",
        dataIndex: "action",
      },
      {
        title: "Parameter / Service Type",
        dataIndex: "serviceType",
      },
      {
        title: "Parameter / Description",
        dataIndex: "description",
      },
      {
        title: "Desired Value / Expected Value",
        dataIndex: "desiredValuesArray",
      },
      {
        title: "Extensions",
        dataIndex: "extensionsArray",
      },
      {
        title: "Additional Remarks",
        dataIndex: "commentsArray",
      },
    ];
    this.state = {
      dataSource: TableData.testcase.TestCaseFormid,
    };
  }

  render() {
    const { dataSource } = this.state;
    const components = {
      body: {
        row: EditableRow,
        cell: EditableCell,
      },
    };
    const columns = this.columns.map((col) => {
      if (!col.editable) {
        return col;
      }

      return {
        ...col,
        onCell: (record) => ({
          record,
          editable: col.editable,
          dataIndex: col.dataIndex,
          title: col.title,
        }),
      };
    });
    return (
        <div>
          <Table
            components={components}
            bordered
            dataSource={dataSource}
            columns={columns}
            rowClassName={(record, index) =>
              record.idHead === "#"
                ? "idHeadBackgroundColor"
                : "nonIdHeadBackgroundColor"
            }
          />
           <style jsx global>{`
            .nonIdHeadBackgroundColor {
              background: #fff;
            }
            .idHeadBackgroundColor {
              background: #c5c5c5;
            }
      `}</style>
        </div>
    );
  }
}

export default EditableTable;
