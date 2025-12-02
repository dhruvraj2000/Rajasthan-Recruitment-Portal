import React, { useState, useEffect } from "react";
import { Row, Col } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import Table from "../components/Table";
import PagePartition from "../components/Breadcrumb";
import Pageheader from "../components/PageHeader";
import CustomInput from "../components/Input";
import Language from "../data/Language";
import { SkeletonInput } from "../components/SkeletonComponent";




const Admitcard = ({ currentLang }) => {
  const [loading, setLoading] = useState(true);

  const [searchText, setSearchText] = useState("");


  useEffect(() =>{
    const timer = setTimeout(()=> setLoading(false), 3000);

    return () => clearTimeout(timer);
  }, []);

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
          <Row>
            <Col xs={20} sm={12} md={8} lg={8}>
        {loading? (
          <SkeletonInput/>
          
        ):(
          
          <CustomInput
          placeholder={Language[currentLang].searchByName}
          prefix={<SearchOutlined />}
          allowClear={true}
          className={"search-input"}
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          
          />
        )}
            </Col>

            <Col span={24}>
            
              <Table searchText={searchText}  currentLang={currentLang}/>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
};

export default Admitcard;
