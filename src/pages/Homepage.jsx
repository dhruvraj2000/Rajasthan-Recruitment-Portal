import { useState, useEffect } from "react";
import { Card, Row } from "antd";
import { motion } from "framer-motion";
import { Users, FileCheck, Briefcase, ArrowRight, Bell } from "lucide-react";
import Sectionlabel from "../components/Sectionlabel";

import AnimatedStat from "../components/stats/AnimatedStat";
import CustomButton from "../components/Button";
import CustomTabs from "../components/Tabs";
import Slider from "react-slick";

import {
  SkeletonButton,
  SkeletonCard,
  SkeletonCircle,
  SkeletonImg,
  SkeletonInput,
  SkeletonLine,
  SkeletonSquare,
} from "../components/SkeletonComponent";

const HomePage = () => {
  const [theme, setTheme] = useState("theme-blue");

  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

const settings = {
  arrows: false,
  autoplay: true,
  infinite: true,
  speed: 200,
  slidesToShow: 4,
  slidesToScroll: 1,
  initialSlide: 0,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
        initialSlide: 0,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
      },
    },
  ],
};


  const stepsData = [
    {
      heading: "Registration",
      sub: "Initial Registration Stage for All Applicants",
    },
    {
      heading: "Advertisement",
      sub: "Official Release of Recruitment Notification",
    },
    {
      heading: "Application",
      sub: "Student Application Entry & Verification Phase",
    },
    {
      heading: "Admit Card",
      sub: "Admit Card Release & Exam Details Notification",
    },
    { heading: "Examination", sub: "Eligibility-Based Examination Stage" },
    { heading: "Answer Key", sub: "Provisional Answer Key & Objection Window" },
    {
      heading: "Provisional Shortlist",
      sub: "Names of Shortlisted Candidates",
    },
    { heading: "Verify Document", sub: "DigiLocker-based Document Check" },
    { heading: "Result", sub: "Final Merit List Announcement" },
    {
      heading: "Preference Based Service Allocation",
      sub: "Candidate Service Preference Stage (If Any)",
    },
    { heading: "Recommendations", sub: "Candidate Recommendation Stage" },
    { heading: "Medical Test", sub: "Health Screening for Final Selection" },
    { heading: "Police verification", sub: "Police Clearance for Appointment" },
    {
      heading: "Appointment And Posting",
      sub: "Issuance of Appointment Order and Joining and Assignment to Post",
    },
  ];

  const jobs = [
    {
      icon: <img src="1.png" />,
      jobs: "Jamadar Grade II 2024,",
      sub: "RPSC",
      date: "12-Dec-2024",
    },
    {
      icon: <img src="2.png" />,
      jobs: "Statistical Officer 2025",
      sub: "RSSB",
      date: "12-Dec-2024",
    },
    {
      icon: <img src="2.png" />,
      jobs: "Primary Teacher 2025",
      sub: "RPSC",
      date: "12-Dec-2024",
    },
  ];

  const stakeholders = [
    { icon: <img src="1.png" />, name: "ICFRE-Arid Forest Research Institute" },
    { icon: <img src="2.png" />, name: "National Health Mission, Rajasthan" },
    {
      icon: <img src="3.png" />,
      name: "Department of Sanskrit Education, Govt. of Rajasthan",
    },
    {
      icon: <img src="4.png" />,
      name: "Directorate Police Telecommunication, Rajasthan",
    },
    {
      icon: <img src="1.png" />,
      name: "Rajasthan State Pollution Control Board",
    },
  ];

  const departmentStats = [
    {
      icon: <img src="1.png" />,
      dept: "Staff Selection Board",
      count: "27,35,2369",
    },
    {
      icon: <img src="2.png" />,
      dept: "Public Service Commission",
      count: "15,46,5925",
    },
    { icon: <img src="3.png" />, dept: "Rajasthan Police", count: "92,864" },
    {
      icon: <img src="4.png" />,
      dept: "Other Departments",
      count: "51,22,274",
    },
  ];

  const noticeTabs = [
    {
      key: "1",
      label: "Notifications",
      children: <p>Latest updates and alerts.</p>,
    },
    {
      key: "2",
      label: "Recruitments",
      children: <p>Active job recruitments.</p>,
    },
    {
      key: "3",
      label: "Student Updates",
      children: <p>Important student information.</p>,
    },
  ];

  return (
    <div className={`app-wrapper ${theme}`}>
      <div>
        <section className="stats-grid">
          {loading ? (
            <>
              <div className="stat-skeleton-card">
                <SkeletonCard />
              </div>
              <div className="stat-skeleton-card">
                <SkeletonCard />
              </div>
              <div className="stat-skeleton-card">
                <SkeletonCard />
              </div>
              <div className="stat-skeleton-card">
                <SkeletonCard />
              </div>
            </>
          ) : (
            <>
              <AnimatedStat
                title="One Time Registration"
                value="56,90,391"
                icon={<Users />}
              />
              <AnimatedStat
                title="Recruitments Published"
                value="268"
                icon={<FileCheck />}
              />
              <AnimatedStat
                title="Employment Created"
                value="5,73,868"
                icon={<Briefcase />}
              />
              <AnimatedStat
                title="Applications Submitted"
                value="4,80,33,432"
                icon={<FileCheck />}
              />
            </>
          )}
        </section>

        <section className="two-cols">
          <Card className="info-card">
            {loading ? (
              <>
                <SkeletonLine width="50%" />
                <SkeletonCard />
                <SkeletonButton width={200} />
              </>
            ) : (
              <>
                <h3 className="info-title">
                  Your Gateway to Government Jobs in Rajasthan
                </h3>

                <p className="info-desc">
                  Rajasthan Recruitment Portal is a unified portal for various
                  recruitments in the state of Rajasthan.
                </p>

                <ul className="blue-pulse-list">
                  <li>
                    One-time registration system for candidates through single
                    sign-on
                  </li>
                  <li>Integration with Aadhaar, Jan-Aadhar and Employee ID</li>
                  <li>
                    Informational coordination from advertisement to application
                  </li>
                  <li>
                    Coordination between departments and recruitment institutes
                  </li>
                  <li>
                    Updates via dashboard, email, SMS, WhatsApp & social media
                  </li>
                  <li>
                    DigiLocker & e-Vault integration for document authentication
                  </li>
                  <li>
                    Analytical presentation of information and achievements
                  </li>
                </ul>

                <div className="text-center start-one-time-btn">
                  <CustomButton
                    type="primary"
                    buttontext="Start One Time Registration"
                    classname="primary-btn"
                  />
                </div>
              </>
            )}
          </Card>

          <Card className="notice-card">
            {loading ? (
              <>
                <SkeletonLine width="50%" />
                <SkeletonCard />
              </>
            ) : (
              <>
                <h3 className="notice-title">
                  <Bell className="notice-icon" /> Notice Board
                </h3>
                <CustomTabs defaultActiveKey="1" items={noticeTabs} />
              </>
            )}
          </Card>
        </section>

        <section className="section-block">
          <Sectionlabel
            labeltext="Stages of the"
            sublabeltext="Examination Life Cycle"
          />

          <div className="steps-grid">
            {loading
              ? [...Array(14)].map((_, i) => (
                  <Card className="step-card" key={i}>
                    <SkeletonLine width="40%" />
                    <SkeletonLine width="60%" />
                  </Card>
                ))
              : stepsData.map((step, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                  >
                    <Card className="step-card">
                      <div className="step-number">
                        {String(i + 1).padStart(2, "0")}
                      </div>
                      <div className="step-text">STEP</div>
                    </Card>

                    <div className="step-description">
                      <p className="step-description-heading">{step.heading}</p>
                      <p className="step-description-subheading">{step.sub}</p>
                    </div>
                  </motion.div>
                ))}
          </div>
        </section>

        <section className="section-block ">
          <Sectionlabel
            labeltext="Department Wise"
            sublabeltext="Submitted Application"
          />

          <div className="dept-grid">
            {loading
              ? [...Array(4)].map((_, i) => (
                  <Card className="dept-card" key={i}>
                    <SkeletonCircle size={50} />
                    <SkeletonLine width="70%" />
                    <SkeletonLine width="50%" />
                  </Card>
                ))
              : departmentStats.map((d, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                  >
                    <Card className="dept-card">
                      <div className="dept-card-inner">
                        <div className="dept-icon">{d.icon}</div>
                        <div className="dept-title">{d.dept}</div>
                      </div>
                      <div className="dept-count">
                        <label>{d.count}</label> Applications
                      </div>
                    </Card>
                  </motion.div>
                ))}
          </div>
        </section>

        <section className="section-block">
          <Sectionlabel labeltext="Job" sublabeltext="Openings" />

          <div className="job-list">
            {loading
              ? [...Array(3)].map((_, i) => (
                  <Card className="job-card" key={i}>
                    <div className="job-card-inner">
                      {/* LEFT CIRCLE SKELETON */}
                      <SkeletonCircle size={50} />

                      {/* TITLE + SUBTITLE */}
                      <div className="job-title" style={{ flex: 1 }}>
                        <SkeletonLine width="60%" />
                        <SkeletonLine width="40%" />
                      </div>

                      {/* APPLY BUTTON */}
                      <SkeletonButton width={110} />
                    </div>
                  </Card>
                ))
              : jobs.map((job, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                  >
                    <Card className="job-card">
                      <div className="job-card-inner">
                        <div className="job-title-img">{job.icon}</div>

                        <div className="job-title">
                          <p>{job.jobs}</p>
                          <label>{job.sub}</label>
                        </div>

                        <CustomButton
                          type="default"
                          buttontext="Apply"
                          classname="outline-btn"
                          icons={<ArrowRight />}
                        />
                      </div>

                      <div className="last-reg-date">
                        <label>{job.date}</label>
                      </div>
                    </Card>
                  </motion.div>
                ))}
          </div>
        </section>

        <section className="section-block">
          <Sectionlabel labeltext="Official" sublabeltext="Stakeholders" />

          <Slider {...settings} className="stakeholder-slider">
            {loading
              ? [...Array(4)].map((_, i) => (
                  <Card className="stake-card" key={i}>
                    {/* Circle skeleton instead of image */}
                    <SkeletonCircle size={50} />
                    <SkeletonLine width="80%" />
                  </Card>
                ))
              : stakeholders.map((s, i) => (
                  <motion.div
                    className="Stakeholders-div"
                    key={i}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                  >
                    <Card className="stake-card">
                      <div className="stake-card-inner">
                        <div>{s.icon}</div>
                        <p>{s.name}</p>
                      </div>
                    </Card>
                  </motion.div>
                ))}
          </Slider>
        </section>
      </div>
    </div>
  );
};

export default HomePage;
