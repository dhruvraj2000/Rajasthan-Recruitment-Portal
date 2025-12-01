import { Input, Form, Row, message, Col } from "antd";
import CustomDatePicker from "../components/Calender";
import { SoundOutlined, RedoOutlined } from "@ant-design/icons";
import CustomButton from "../components/Button";
import React from "react";
import CustomInput from "../components/Input";
import PagePartition from "../components/Breadcrumb";
import CaptchaBox from "../components/CaptchaBox";

import Pageheader from "../components/PageHeader";
const Ssoid = () => {
  const [form] = Form.useForm();

  const onFinish = (values) => {
    message.success(`Fetching SSO ID for ${values.applicationNo}...`);
    navigate(
      `/viewssoidbyapplication?applicationNo=${
        values.applicationNo
      }&dob=${values.dob.format("YYYY-MM-DD")}`
    );
  };

  return (
    <>
      <div>
        <Pageheader title="Get SSO ID" />
        <PagePartition
          items={[
            { title: "Home", to: "/" },
            { title: <span style={{ fontWeight: 700 }}>Get SSO ID </span> },
          ]}
        />

        <div className="form-format">
          <Form className="form-style" form={form} layout="vertical">
            <div className="">
              <Row gutter={[8, 8]}>
                <Col xs={24} sm={24} md={12} lg={12} xl={12}>
                  <Form.Item
                    label="Application No."
                    name="applicationNo"
                    rules={[
                      {
                        required: true,
                        message: "Please enter application number!",
                      },
                    ]}
                  >
                    <CustomInput placeholder="Enter Application No." />
                  </Form.Item>
                </Col>

                <Col xs={24} sm={24} md={12} lg={12} xl={12}>
                  <Form.Item
                    label="Date Of Birth"
                    name="dob"
                    rules={[
                      {
                        required: true,
                        message: "Please select date of birth!",
                      },
                    ]}
                  >
                    <CustomDatePicker placeholder="Enter Date of Birth" />
                  </Form.Item>
                </Col>

                <Col xs={24} sm={24} md={12} lg={12} xl={12}>
                  <Form.Item
                    label="CAPTCHA"
                    name="captcha"
                    rules={[
                      { required: true, message: "Please enter captcha!" },
                    ]}
                  >
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

              <div className="ssoid-btn-group">
                <CustomButton
                  type="default"
                  buttontext="Cancel"
                  classname="cancel-btn"
                  id="cancelBtn"
                />

                <div className="header-actions">
                  <CustomButton
                    type="primary"
                    buttontext="View SSO ID"
                    classname="header-login-btn submit-btn"
                    id="submitBtn"
                  />
                </div>
              </div>
            </div>
          </Form>
        </div>
      </div>
    </>
  );
};

export default Ssoid;
