import {
  Input,
  Form,
  message,
  Dropdown,
  Space,
  Breadcrumb,
  Row,
  Col,
} from "antd";
import CustomDatePicker from "../components/Calender";
import { SoundOutlined, RedoOutlined } from "@ant-design/icons";
import CustomButton from "../components/Button";
import React, { useState, useEffect } from "react";
import CustomInput from "../components/Input";
import PagePartition from "../components/Breadcrumb";
import CaptchaBox from "../components/CaptchaBox";
import CustomDropdown from "../components/CustomDropdown";
import Pageheader from "../components/PageHeader";
import Language from "../data/Language";

import {
  SkeletonInput,
  SkeletonButton,
  SkeletonLine,
} from "../components/SkeletonComponent";

const Result = ({ currentLang }) => {
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, [currentLang]);

  const onFinish = (values) => {
    message.success(`Fetching result for ${values.applicationNo}...`);
  };

  const options = [
    { label: "Pre Exam", key: "Pre Exam" },
    { label: "Main Exam", key: "Main Exam" },
    { label: "Interview", key: "Interview" },
  ];

  return (
    <>
      <div>
        {loading ? (
          <SkeletonLine width="35%" />
        ) : (
          <Pageheader title={Language[currentLang].result} />
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
                    {Language[currentLang].result}
                  </span>
                ),
              },
            ]}
          />
        )}

        <div className="form-format">
          <Form form={form} layout="vertical" className="form-style">
            <Row gutter={[8, 8]}>
              <Col xs={24} sm={24} md={8} lg={8} xl={8}>
                {loading ? (
                  <>
                    <SkeletonLine width="50%" />
                    <SkeletonInput />
                  </>
                ) : (
                  <Form.Item
                    label={Language[currentLang].resultDropDown}
                    name="examType"
                  >
                    <CustomDropdown
                      options={options}
                      currentLang={currentLang}
                      defaultValue={null}
                    />
                  </Form.Item>
                )}
              </Col>

              <Col xs={24} sm={24} md={8} lg={8} xl={8}>
                {loading ? (
                  <>
                    <SkeletonLine width="60%" />
                    <SkeletonInput />
                  </>
                ) : (
                  <Form.Item
                    label={Language[currentLang].ApplicationNo}
                    name="applicationNo"
                  >
                    <CustomInput
                      placeholder={Language[currentLang].applicationPlaceholder}
                    />
                  </Form.Item>
                )}
              </Col>

              <Col xs={24} sm={24} md={8} lg={8} xl={8}>
                {loading ? (
                  <>
                    <SkeletonLine width="40%" />
                    <SkeletonInput />
                  </>
                ) : (
                  <Form.Item label={Language[currentLang].dob} name="dob">
                    <CustomDatePicker
                      placeholder={Language[currentLang].dobPlacerholder}
                    />
                  </Form.Item>
                )}
              </Col>

              <Col xs={24} sm={24} md={8} lg={8} xl={8}>
                {loading ? (
                  <>
                    <SkeletonLine width="40%" />
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
            <div className="result-btn-group header-actions">
              {loading ? (
                <>
                  <SkeletonButton width={120} />
                  <SkeletonButton width={160} />
                </>
              ) : (
                <>
                  <CustomButton
                    type="default"
                    buttontext={Language[currentLang].cancel}
                    classname="cancel-btn"
                  />

                  <CustomButton
                    type="primary"
                    buttontext={Language[currentLang].resultButton}
                    classname="header-login-btn submit-btn"
                  />
                </>
              )}
            </div>
          </Form>
        </div>
      </div>
    </>
  );
};

export default Result;
