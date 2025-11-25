import { Input, Form, message, Dropdown, Space, Breadcrumb } from "antd";
import CustomDatePicker from "../components/Calender";
import { SoundOutlined, RedoOutlined } from "@ant-design/icons";
import CustomButton from "../components/Button";
import React from "react";
import CustomInput from "../components/Input";
import { DownOutlined } from "@ant-design/icons";
import PagePartition from "../components/Breadcrumb";
import CaptchaBox from "../components/CaptchaBox";
import HeadingBar from "../components/HeadingBar";
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

  return (
    <>
      <HeadingBar title="Get Result" />
      <PagePartition
        items={[{ title: "Home", to: "/" }, { title: "Get Result" }]}
      />
      <div className="form-format">
        <Form form={form} layout="vertical" className="form-style">
          <Form.Item label="Select Exam Type" name="examType">
            <Dropdown
              trigger={["click"]}
              menu={{
                items: [
                  { label: "Pre Exam", key: "Pre Exam" },
                  { label: "Main Exam", key: "Main Exam" },
                  { label: "Interview", key: "Interview" },
                ],
                onClick: ({ key }) => {
                  form.setFieldsValue({ examType: key });
                },
              }}
            >
              <div className="custom-dropdown-box">
                <span>
                  {form.getFieldValue("examType") || "Select Exam Type"}
                </span>
                <DownOutlined />
              </div>
            </Dropdown>
          </Form.Item>

          <Form.Item label="Application No" name="applicationNo">
            <CustomInput placeholder="Enter Application Number" />
          </Form.Item>

          <Form.Item label="Date Of Birth" name="dob">
            <CustomDatePicker placeholder="Enter Date of Birth" />
          </Form.Item>

          <Form.Item label="CAPTCHA" name="captcha">
            {/* <CustomInput
              placeholder="Enter CAPTCHA"
              className="captcha-class"
            /> */}
            <CaptchaBox
              length={6}
              onVerify={(isValid) => {
                if (isValid) alert("Captcha correct!");
                else alert("Invalid captcha!");
              }}
            />
            {/* 

            <RedoOutlined
              className="captcha-icon"
              onClick={() => message.info("Captcha refreshed")}
            />

            <SoundOutlined
              className="captcha-icon"
              onClick={() => message.info("Playing CAPTCHA audio")}
            /> */}
          </Form.Item>

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
    </>
  );
};

export default Result;
