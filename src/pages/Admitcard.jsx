import React, { useState } from "react";
import { Row, Col, Input } from "antd";
import { SearchOutlined } from '@ant-design/icons';
import Table from "../components/Table";
import PagePartition from "../components/Breadcrumb";


const Admitcard = () => {

  const [searchText, setSearchText] = useState("");
  return (

<div>
  <PagePartition
          items={[
            { title: "Home", to: "/" },
            { title: <span style={{ fontWeight: 700 }}>Admit Card</span>   }
          ]}
        />

    <div className="admitcard-container">

      <Row justify="start">
        <Col xs={20} sm={12} md={8} lg={6}>
          <Input
            placeholder="Search"
            prefix={<SearchOutlined />}
            allowClear
            className="search-input"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
        </Col>
      </Row>

      <div className="table-box">
        <Table searchText={searchText} />   
      </div>
    </div>
    </div>
  );
};

export default Admitcard;
