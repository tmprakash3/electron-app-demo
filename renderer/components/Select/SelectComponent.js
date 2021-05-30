import React from "react";
import { Select } from "antd";
import "antd/dist/antd.css";
const { Option } = Select;

const SelectComponent = ({ record, defaultValue, options }) => {
  function onChange(value) {
    console.log(`selected ${value}`);
  }

  function onBlur() {
    console.log("blur");
  }

  function onFocus() {
    console.log("focus");
  }

  function onSearch(val) {
    console.log("search:", val);
  }
  return (
    <div>
      {record.idHead === "#" ? (
        <></>
      ) : (
        <Select
          showSearch
          placeholder="Select a person"
          optionFilterProp="children"
          onChange={onChange}
          onFocus={onFocus}
          onBlur={onBlur}
          onSearch={onSearch}
          defaultValue={defaultValue}
          style={{width: 150}}
        >
          {options?.map((option, i) => (
            <React.Fragment key={`${i}_${option}`}>
              <Option value={`${i}_${option}`}>{option}</Option>
            </React.Fragment>
          ))}
        </Select>
      )}
      <style jsx global>{`
        .ant-select-arrow{
          display: none
        }
      `}</style>
    </div>
  );
};

export default SelectComponent;
