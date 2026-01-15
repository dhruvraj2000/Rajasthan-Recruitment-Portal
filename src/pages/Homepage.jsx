import { useState, useEffect } from "react";
import { Card, Row } from "antd";
import { motion } from "framer-motion";
import { Users, FileCheck, Briefcase, ArrowRight, Bell } from "lucide-react";
import Sectionlabel from "../components/Sectionlabel";
import Language from "../data/Language";
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

const HomePage = ({currentLang,}) => {


  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 500);
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
    heading: Language[currentLang].heading1,
    sub: Language[currentLang].step1,
  },
  {
    heading: Language[currentLang].heading2,
    sub: Language[currentLang].step2,
  },
  {
    heading: Language[currentLang].heading3,
    sub: Language[currentLang].step3,
  },
  {
    heading: Language[currentLang].heading4,
    sub: Language[currentLang].step4,
  },
  {
    heading: Language[currentLang].heading5,
    sub: Language[currentLang].step5,
  },
  {
    heading: Language[currentLang].heading6,
    sub: Language[currentLang].step6,
  },
  {
    heading: Language[currentLang].heading7,
    sub: Language[currentLang].step7,
  },
  {
    heading: Language[currentLang].heading8,
    sub: Language[currentLang].step8,
  },
  {
    heading: Language[currentLang].heading9,
    sub: Language[currentLang].step9,
  },
  {
    heading: Language[currentLang].heading10,
    sub: Language[currentLang].step10, // FIXED
  },
  {
    heading: Language[currentLang].heading11,
    sub: Language[currentLang].step11,
  },
  {
    heading: Language[currentLang].heading12,
    sub: Language[currentLang].step12,
  },
  {
    heading: Language[currentLang].heading13,
    sub: Language[currentLang].step13,
  },
  {
    heading: Language[currentLang].heading14,
    sub: Language[currentLang].step14,
  },
];


  const jobs = [
    {
      icon: <img src="1.png"  alt="Jamadar Grade II logo"/>,

      jobs: "Jamadar Grade II 2024,",
      sub: "RPSC",
      date: "12-Dec-2024",
    },
    {
      icon: <img src="2.png" alt="Statistical Officer logo"/>,
      jobs: "Statistical Officer 2025",
      sub: "RSSB",
      date: "12-Dec-2024",
    },
    {
      icon: <img src="2.png" alt="Primary Teacher logo"/>,
      jobs: "Primary Teacher 2025",
      sub: "RPSC",
      date: "12-Dec-2024",
    },
  ];
const stakeholders = [
  {
    icon: <img src="/images/ICFRE-Arid-Forest-Research-Institute.png" alt="ICFRE Arid Forest Research Institute logo" />,
    name: "ICFRE-Arid Forest Research Institute",
  },
  {
    icon: <img src="/1.png" alt="ICFRE Arid Forest Research Institute logo" />,
    name: "ICFRE-Arid Forest Research Institute",
  },
  {
    icon: <img src="/2.png" alt="National Health Mission Rajasthan logo" />,
    name: "National Health Mission, Rajasthan",
  },
  {
    icon: <img src="3.png" alt="Department of Sanskrit Education Rajasthan logo" />,
    name: "Department of Sanskrit Education, Govt. of Rajasthan",
  },
  {
    icon: <img src="4.png" alt="Directorate Police Telecommunication Rajasthan logo" />,
    name: "Directorate Police Telecommunication, Rajasthan",
  },
  {
    icon: <img src="1.png" alt="Rajasthan State Pollution Control Board logo" />,
    name: "Rajasthan State Pollution Control Board",
  },
];

  const departmentStats = [
    {
      icon: <img src="1.png" alt="Staff Selection Board logo"/>,
      dept: "Staff Selection Board",
      count: "27,35,2369",
    },
    {
      icon: <img src="2.png" alt="Public Service Commission logo"/>,
      dept: "Public Service Commission",
      count: "15,46,5925",
    },
    { icon: <img src="3.png" alt="Rajasthan Police logo"/>, dept: "Rajasthan Police", count: "92,864" },
    {
      icon: <img src="4.png" alt="Other Departments logo"/>,
      dept: "Other Departments",
      count: "51,22,274",
    },
  ];

const noticeTabs = [
  {
    key: "1",
    label: Language[currentLang].notification,
    children: <p>Latest updates and alerts.</p>,
  },
  {
    key: "2",
    label: Language[currentLang].recruitments,
    children: <p>Active job recruitments.</p>,
  },
  {
    key: "3",
    label: Language[currentLang].studentUpdates,
    children: <p>Important student information.</p>,
  },
];


  return (
    <div className="app-wrapper">
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
                title= {Language[currentLang].oneTimeRegistration}
                value="56,90,391"
                icon={<Users />}
              />
              <AnimatedStat
                title={Language[currentLang].recruitmentsPublished}
                value="268"
                icon={<FileCheck />}
              />
              <AnimatedStat
                title={Language[currentLang].employmentCreated}
                value="5,73,868"
                icon={<Briefcase />}
              />
              <AnimatedStat
                title={Language[currentLang].applicationsSubmitted}
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
                  {Language[currentLang].guide1}
                </h3>

                <p className="info-desc">
                 {Language[currentLang].heading}
                </p>

                <ul className="blue-pulse-list">
                  <li>
                    {Language[currentLang].instruction1}
                  </li>
                  <li>{Language[currentLang].instruction2}</li>
                  <li>
                   {Language[currentLang].instruction3}
                  </li>
                  <li>
                   {Language[currentLang].instruction4}
                  </li>
                  <li>
                    {Language[currentLang].instruction5}
                  </li>
                  <li>
                   {Language[currentLang].instruction6}
                  </li>
                  <li>
                   {Language[currentLang].instruction7}
                  </li>
                </ul>

                <div className="text-center start-one-time-btn">
                  <CustomButton
                    type="primary"
                    buttontext={Language[currentLang].otrButton}
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
                  <Bell className="notice-icon" /> {Language[currentLang].noticeBoard}
                </h3>
                <CustomTabs defaultActiveKey="1" items={noticeTabs} />
              </>
            )}
          </Card>
        </section>

        <section className="section-block">
          <Sectionlabel
            labeltext={Language[currentLang].stagesStep}
            sublabeltext={Language[currentLang].sublabeltext}
          />

          <div className="steps-grid">
            {loading
              ? [...Array(4)].map((_, i) => (
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
                      <div className="step-text">{Language[currentLang].step}</div>
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
            labeltext={Language[currentLang].departmentWise}
            sublabeltext={Language[currentLang].submittedApplication}
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
          <Sectionlabel labeltext={Language[currentLang].job} sublabeltext={Language[currentLang].opening} />

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
  <p className="job-name">{job.jobs}</p>
  <span className="job-subtitle">{job.sub}</span>
</div>

                        <CustomButton
                          type="default"
                          buttontext={Language[currentLang].applyBtn}
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
          <Sectionlabel labeltext={Language[currentLang].official} sublabeltext={Language[currentLang].swtakeholders} />

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
