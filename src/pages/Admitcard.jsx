import React, { useState, useEffect } from "react";
import { Row, Col } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import Table from "../components/Table";
import PagePartition from "../components/Breadcrumb";
import Pageheader from "../components/PageHeader";
import CustomInput from "../components/Input";
import Language from "../data/Language";






const Admitcard = ({ currentLang }) => {
  const [searchText, setSearchText] = useState("");
 
  return (
    <div>
      <Pageheader title={Language[currentLang].admitcard} />
      <PagePartition
        items={[
           { title: Language[currentLang].home, to: "/" },
          { title: <span style={{ fontWeight: 700 }}>{Language[currentLang].admitcard}</span> },
        ]}
      />

      <div className="admitcard-container">
        <Row justify="start">
          <Col></Col>
          <Col></Col>
        </Row>
 
          
        <div className="table-box"> 
    <div className="overlay-loader">
    
    </div>


           
          <Row>
            <Col xs={20} sm={12} md={8} lg={8}>
              <CustomInput
               

                  placeholder={Language[currentLang].searchByName}
                  prefix={<SearchOutlined />}
                  allowClear={true}
                  className={"search-input"}
                  value={searchText}
                  onChange={(e) => setSearchText(e.target.value)}
                  
                  />
                  </Col>

            <Col span={24}>
              <Table searchText={searchText}  currentLang={currentLang} />
              
            </Col>
          </Row>
        </div>
        </div>
      </div>
  );
};

export default Admitcard;
