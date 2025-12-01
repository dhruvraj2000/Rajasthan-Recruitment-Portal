import { Input, Form, message } from "antd";
import CustomDatePicker from "../components/Calender";
import { SoundOutlined, RedoOutlined } from "@ant-design/icons";
import CustomButton from "../components/Button";

import CustomInput from "../components/Input";
import PagePartition from "../components/Breadcrumb";
import CaptchaBox from "../components/CaptchaBox";
import HeadingBar from "../components/HeadingBar";
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
      <HeadingBar title="Get SSO ID" />
      <PagePartition
        items={[{ title: "Home", to: "/" }, { title: <span style={{fontWeight: 700}}>Get SSO ID </span> }]}
      />

      <div className="form-format">
        <Form className="form-style" form={form} layout="vertical">
          <Form.Item
            label="Application No."
            name="applicationNo"
            id="application"
          >
            <CustomInput placeholder="Enter Application No." />
          </Form.Item>

          <Form.Item label="Date Of Birth" name="dob" id="dob">
            <CustomDatePicker placeholder="Enter Date of Birth" />
          </Form.Item>

          <Form.Item label="CAPTCHA" name="captcha" id="captcha">
            <CaptchaBox
              length={6}
              onVerify={(isValid) => {
                if (isValid) alert("Captcha correct!");
                else alert("Invalid captcha!");
              }}
            />
            {/* <CustomInput placeholder="Enter CAPTCHA" className="captcha-class" /> */}

            {/* <RedoOutlined
            className="ant-svg"
            onClick={() => message.info("Captcha refreshed")}
          />

          <SoundOutlined
            className="ant-svg"
            onClick={() => message.info("Playing CAPTCHA audio")}
          /> */}
          </Form.Item>

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
        </Form>
      </div>
    </>
  );
};

export default Ssoid;
