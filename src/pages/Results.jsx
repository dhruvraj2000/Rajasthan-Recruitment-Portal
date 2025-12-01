import { Input, Form, message, Dropdown, Space, Breadcrumb, Row, Col } from "antd";
import CustomDatePicker from "../components/Calender";
import { SoundOutlined, RedoOutlined } from "@ant-design/icons";
import CustomButton from "../components/Button";
import React from "react";
import CustomInput from "../components/Input";
import { DownOutlined } from "@ant-design/icons";
import PagePartition from "../components/Breadcrumb";
import CaptchaBox from "../components/CaptchaBox";
import CustomDropdown from "../components/CustomDropdown";
import Pageheader from "../components/PageHeader";
// import HeadingBar from "../components/HeadingBar";
const Result = () => {
  const [form] = Form.useForm();

  const onFinish = (values) => {
    message.success(`Fetching SSO ID for ${values.applicationNo}...`);
    navigate(
      `/viewssoidbyapplication?applicationNo=${
        values.applicationNo
      }&dob=${values.dob.format("YYYY-MM-DD")}`
    );
  };
  const optons = [
    { label: "Pre Exam", key: "Pre Exam" },
    { label: "Main Exam", key: "Main Exam" },
    { label: "Interview", key: "Interview" },
  ]

  return (
    <>
      <div>

        <Pageheader title="Get Result" />
      {/* <HeadingBar title="Get Result" /> */}
      <PagePartition
        items={[{ title: "Home", to: "/" }, { title: <span style={{fontWeight: 700}}> Get Result </span> }]}
      />
      <div className="form-format">
          <Form form={ form } layout="vertical" className="form-style">
            <Row gutter={[8, 8]}>
              <Col xs={24} sm={24} md={8} lg={8} xl={8}>
                  <Form.Item label="Select Exam Type" name="examType">
            <CustomDropdown options={optons}/>

          </Form.Item>
              </Col>
              <Col xs={ 24 } sm={ 24 } md={ 8 } lg={ 8 } xl={ 8 }>

 <Form.Item label="Application No" name="applicationNo">
            <CustomInput placeholder="Enter Application Number" />
          </Form.Item>
              </Col>
              <Col xs={ 24 } sm={ 24 } md={ 8 } lg={ 8 } xl={ 8 }>
                  <Form.Item label="Date Of Birth" name="dob">
            <CustomDatePicker placeholder="Enter Date of Birth" />
          </Form.Item>
               </Col>

              <Col xs={ 24 } sm={ 24 } md={ 8 } lg={ 8 } xl={ 8 }>
                   <Form.Item label="CAPTCHA" name="captcha">

            <CaptchaBox
              length={6}
              onVerify={(isValid) => {
                if (isValid) alert("Captcha correct!");
                else alert("Invalid captcha!");
              }}
            />

          </Form.Item>
               </Col>
            </Row>








          <div className="result-btn-group header-actions">
            <CustomButton
              type="default"
              buttontext="Cancel"
              classname="cancel-btn"
            />

            <CustomButton
              type="primary"
              buttontext="Get Result"
              classname="header-login-btn submit-btn"
            />
          </div>
        </Form>
        </div>
        </div>
    </>
  );
};

export default Result;
