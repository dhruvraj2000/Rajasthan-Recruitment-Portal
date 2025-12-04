import { Input, Form, Row, message, Col } from "antd";
import CustomDatePicker from "../components/Calender";
import { SoundOutlined, RedoOutlined } from "@ant-design/icons";
import CustomButton from "../components/Button";
import CustomInput from "../components/Input";
import PagePartition from "../components/Breadcrumb";
import CaptchaBox from "../components/CaptchaBox";
import Language from "../data/Language";
import Pageheader from "../components/PageHeader";
import { useState, useEffect } from "react";

import {
  SkeletonInput,
  SkeletonButton,
  SkeletonLine,
} from "../components/SkeletonComponent";

const Ssoid = ({ currentLang }) => {
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1200);
    return () => clearTimeout(timer);
  }, [currentLang]);

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
        {loading ? (
          <SkeletonLine width="30%" />
        ) : (
          <Pageheader title={Language[currentLang].ssoid} />
        )}

        {loading ? (
          <SkeletonLine width="50%" />
        ) : (
          <PagePartition
            items={[
              { title: Language[currentLang].home, to: "/" },
              {
                title: (
                  <span style={{ fontWeight: 700 }}>
                    {Language[currentLang].ssoid}
                  </span>
                ),
              },
            ]}
          />
        )}

        <div className="form-format">
          <Form className="form-style" form={form} layout="vertical">
            <div className="">
              <Row gutter={[8, 8]}>
                <Col xs={24} sm={24} md={12} lg={12} xl={12}>
                  {loading ? (
                    <>
                      <SkeletonLine width="40%" />
                      <SkeletonInput />
                    </>
                  ) : (
                    <Form.Item
                      label={Language[currentLang].ApplicationNo}
                      name="applicationNo"
                      rules={[
                        {
                          required: true,
                          message: "Please enter application number!",
                        },
                      ]}
                    >
                      <CustomInput
                        placeholder={
                          Language[currentLang].applicationPlaceholder
                        }
                      />
                    </Form.Item>
                  )}
                </Col>

                <Col xs={24} sm={24} md={12} lg={12} xl={12}>
                  {loading ? (
                    <>
                      <SkeletonLine width="40%" />
                      <SkeletonInput />
                    </>
                  ) : (
                    <Form.Item
                      label={Language[currentLang].dob}
                      name="dob"
                      rules={[
                        {
                          required: true,
                          message: "Please select date of birth!",
                        },
                      ]}
                    >
                      <CustomDatePicker
                        placeholder={Language[currentLang].dobPlacerholder}
                      />
                    </Form.Item>
                  )}
                </Col>

                <Col xs={24} sm={24} md={12} lg={12} xl={12}>
                  {loading ? (
                    <>
                      <SkeletonLine width="35%" />
                      <SkeletonInput />
                    </>
                  ) : (
                    <Form.Item
                      label={Language[currentLang].captcha}
                      name="captcha"
                    >
                      <CaptchaBox
                        length={6}
                        currentLang={currentLang}
                        onVerify={(isValid) => {
                          if (isValid) alert("Captcha correct!");
                          else alert("Invalid captcha!");
                        }}
                      />
                    </Form.Item>
                  )}
                </Col>
              </Row>

              <div className="ssoid-btn-group">
                {loading ? (
                  <SkeletonButton width={120} />
                ) : (
                  <CustomButton
                    type="default"
                    buttontext={Language[currentLang].cancel}
                    classname="cancel-btn"
                    id="cancelBtn"
                  />
                )}

                <div className="header-actions">
                  {loading ? (
                    <SkeletonButton width={150} />
                  ) : (
                    <CustomButton
                      type="primary"
                      buttontext={Language[currentLang].ssoButton}
                      classname="header-login-btn submit-btn"
                      id="submitBtn"
                    />
                  )}
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
