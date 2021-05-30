import React, { useContext, useState, useEffect, useRef } from "react";

import "antd/dist/antd.css";
import { Table, Input, Button, Form, Select } from "antd";

import TableData from "../../common/data";
import SelectComponent from "../Select/SelectComponent";
import Popup from '../Popup/Popup'
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
        render: (text, record, index) => (
          <SelectComponent
            record={record}
            defaultValue={record.action}
            options={record.actionsArray}
          />
        ),
      },
      {
        title: "Parameter/Service Type",
        dataIndex: "serviceType",
        render: (text, record, index) => (
          <SelectComponent
            record={record}
            defaultValue={record.serviceType}
            options={record.serviceTypesArray}
          />
        ),
      },
      {
        title: "Parameter/Description",
        dataIndex: "description",
        render: (text, record, index) => (
          <SelectComponent
            record={record}
            defaultValue={record.description}
            options={record.descriptionsArray}
          />
        ),
      },
      {
        title: "Desired Value/Expected Value",
        dataIndex: "desiredValuesArray",
        render: (text, record, index) => (
          <SelectComponent
            record={record}
            defaultValue={record.desiredValue}
            options={record.desiredValuesArray}
          />
        ),
      },
      {
        title: "Extensions",
        dataIndex: "extensions",
      },
      {
        title: "Additional Remarks",
        dataIndex: "comments",
      },
    ];
    this.state = {
      dataSource: TableData.testcase.TestCaseFormid,
      popup: {
        visible: false, 
        x: 0, y: 0
      }
    };
  }

  componentDidMount() {
    /** Test sequence */
    const testSequenceValue = this.state.dataSource?.filter(
      (testsuite) => testsuite.type === "Test Sequence"
    );
    const testSequenceDesiredValue = testSequenceValue
      .map((val) => val.desiredValue.toString())
      .filter((val) => val !== "");
    //testSequenceDesiredValue.unshift("desiredValue");

    const testSequenceActions = testSequenceValue
      .map((val) => val.action)
      .filter((val) => val !== "");
    //testSequenceComments.unshift("comments");
    const testSequenceServiceTypes = testSequenceValue
      .map((val) => val.serviceType)
      .filter((val) => val !== "");
    //testSequenceExtensions.unshift("extensions");
    const testSequenceDescriptions = testSequenceValue
    .map((val) => val.description)
    .filter((val) => val !== "");

    /** Post conditions */

    const postCondtionValue = this.state.dataSource.filter(
      (testsuite) => testsuite.type === "Post Conditions"
    );
    const postCondistionDesiredValue = postCondtionValue
      .map((val) => val.desiredValue)
      .filter((val) => val !== "");
    //postCondistionDesiredValue.unshift("desiredValue");
    const postCondistionActions = postCondtionValue
      .map((val) => val.action)
      .filter((val) => val !== "");
    // postCondistionComments.unshift("comments");
    const postCondistionServiceTypes = postCondtionValue
      .map((val) => val.serviceType)
      .filter((val) => val !== "");
    //postCondistionExtensions.unshift("extensions");
    const postCondistionDescriptions = postCondtionValue
    .map((val) => val.description)
    .filter((val) => val !== "");

    /** pre condition */
    const preCondtionValue = this.state.dataSource?.filter(
      (testsuite) => testsuite.type === "Pre Conditions"
    );
    const preCondistionDesiredValue = preCondtionValue
      .map((val) => val.desiredValue)
      .filter((val) => val !== "");
    //preCondistionDesiredValue.unshift("desiredValue");

    const preCondistionActions = preCondtionValue
      .map((val) => val.action)
      .filter((val) => val !== "");
    //preCondistionComments.unshift("comments");
    const preCondistionServiceTypes = preCondtionValue
      .map((val) => val.serviceType)
      .filter((val) => val !== "");
    //preCondistionExtensions.unshift("extensions");
    const preCondistionDescritions = preCondtionValue
      .map((val) => val.description)
      .filter((val) => val !== "");

    const testSequenceVal = this.state.dataSource?.map((testsuite) => {
      if (testsuite.type === "Test Sequence") {
        testsuite["desiredValuesArray"] = testSequenceDesiredValue;
        testsuite["actionsArray"] = testSequenceActions;
        testsuite["serviceTypesArray"] = testSequenceServiceTypes;
        testsuite["descriptionsArray"] = testSequenceDescriptions;
      }
      if (testsuite.type === "Post Conditions") {
        testsuite["desiredValuesArray"] = postCondistionDesiredValue;
        testsuite["actionsArray"] = postCondistionActions;
        testsuite["serviceTypesArray"] = postCondistionServiceTypes;
        testsuite["descriptionsArray"] = postCondistionDescriptions;
      }
      if (testsuite.type === "Pre Conditions") {
        testsuite["desiredValuesArray"] = preCondistionDesiredValue;
        testsuite["actionsArray"] = preCondistionActions;
        testsuite["serviceTypesArray"] = preCondistionServiceTypes;
        testsuite["descriptionsArray"] = preCondistionDescritions;
      }
      return testsuite;
    });
  }

  onRow = record => ({
    onContextMenu: event => {
      event.preventDefault()
      if (!this.state.visible) {
        const that = this
        document.addEventListener(`click`, function onClickOutside() {
          that.setState({popup: {visible: false}})
          document.removeEventListener(`click`, onClickOutside)
        })
      }
      this.setState({
        popup: {
          record,
          visible: true,
          x: event.clientX,
          y: event.clientY
        }
      })
    }
  })

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
          dataSource={dataSource}
          columns={columns}
          pagination={{ pageSize: 300}}
          onRow={this.onRow}
          // scroll={{ y: 2000 }}
          rowClassName={(record, index) =>
            record.idHead === "#"
              ? "idHeadBackgroundColor"
              : "nonIdHeadBackgroundColor"
          }
        />
        <Popup {...this.state.popup}/>
        <style jsx global>{`
          .nonIdHeadBackgroundColor {
            background: #fff;
          }
          .idHeadBackgroundColor {
            background: #c5c5c5;
          }
          .ant-table-thead > tr > th {
            border: 0;
          }
          .ant-table-thead > tr > th:not(:last-child):not(.ant-table-selection-column):not(.ant-table-row-expand-icon-cell):not([colspan])::before {
            background-color: transparent;
          }
          .ant-table-thead > tr > th, .ant-table-tbody > tr > td, .ant-table tfoot > tr > th, .ant-table tfoot > tr > td {
            padding: 8px;
          }
          .ant-table-tbody > tr > td:nth-child(2) div .ant-select, .ant-table-thead > tr > th:nth-child(2) {
            width: 110px !important;
          }
          .ant-table-tbody > tr > td:nth-child(3) div .ant-select, .ant-table-thead > tr > th:nth-child(3) {
            width: 175px !important;
          }
          .ant-table-tbody > tr > td:nth-child(4) div .ant-select, .ant-table-thead > tr > th:nth-child(4) {
            width: 285px !important;
          }
          .ant-table-tbody > tr > td:nth-child(5) div .ant-select, .ant-table-thead > tr > th:nth-child(5) {
            width: 200px !important;
          }
          .ant-select:not(.ant-select-customize-input) .ant-select-selector, .ant-table-tbody > tr > td {
            border: 0;
          }
        `}</style>
      </div>
    );
  }
}

export default EditableTable;
