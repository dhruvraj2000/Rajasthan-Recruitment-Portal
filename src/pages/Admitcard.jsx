import React, { useState } from "react";
import { Row, Col } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import Table from "../components/Table";
import PagePartition from "../components/Breadcrumb";
import Pageheader from "../components/PageHeader";
import CustomInput from "../components/Input";

const Admitcard = () => {
  const [searchText, setSearchText] = useState("");
  return (
    <div>
      <Pageheader title="Admit Card" />
      <PagePartition
        items={[
          { title: "Home", to: "/" },
          { title: <span style={{ fontWeight: 700 }}>Admit Card</span> },
        ]}
      />

      <div className="admitcard-container">
        <Row justify="start">
          <Col></Col>
          <Col></Col>
        </Row>

        <div className="table-box">
          <Row>
            <Col xs={20} sm={12} md={8} lg={6}>
              <CustomInput
                placeholder={"Search by Name"}
                prefix={<SearchOutlined />}
                allowClear={true}
                className={"search-input"}
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)}
              />
            </Col>

            <Col span={24}>
              <Table searchText={searchText} />
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
};

export default Admitcard;
