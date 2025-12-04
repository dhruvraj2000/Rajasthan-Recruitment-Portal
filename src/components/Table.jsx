import React from 'react';
import { Table, Space, } from 'antd';
import Button from "../components/Button";
import Language from '../data/Language';
import { SkeletonButton, SkeletonLine } from './SkeletonComponent';
import { useEffect, useState } from 'react';


const TableComponent = ({ searchText, currentLang }) => {
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);


const handlePageChange = (page) => {
  setCurrentPage(page);
  setLoading(true); 

  setTimeout(() => {
    setLoading(false); 
  }, 3000);
};


  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  const columns = [
  {
    title:( <span  className="header-light-blue" style={{ fontWeight: "700", fontSize: "18px" }}>
       {Language[currentLang]?.admitcard || "Admit Card"}
    </span>
    ),
    dataIndex: 'admitcard',
    key: 'admitcard',

    render: (text, record) => {
      const before = text.split("(")[0];
      const inside = text.match(/\(([^)]+)\)/)?.[1];

      return (


 <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>

      
        {record.img && (
          <img 
            src={record.img} 
            alt="logo"
            style={{ width: "35px", height: "35px", objectFit: "contain" }}
          />
        )}


        
        <div>
          {before}
          {inside && <b> ({inside})</b>}
        </div>
        </div>
   );
    
}
  },

  {
  title: ( <span className="header-light-blue" style={{ fontWeight: "700", fontSize: "18px" }}>
   {Language[currentLang]?.action || "Action"}
  </span>
  ),
  key: 'action',
  render: (_, record) => (
    <Space size="middle" direction="vertical">

        <div className='header-actions'>
          {loading? (
            <SkeletonButton/>
          ):(
            <Button 
            type="primary"
            buttontext={Language[currentLang]?.getAdmit || "Get Admit Card"}
            
            classname="my-admit-btn  header-login-btn"
            />
          )}


      {record.hasCenterMap === true && (
        loading ?(
          <SkeletonButton/>

        ):(
        <Button 
        type="primary"
        classname="my-center-btn  header-login-btn"
        buttontext={Language[currentLang]?.getCenter || "Get Center Map"}
        />
        )
      )}  

        </div>
    </Space>
  ),
},

];

const data = [
  {
    key: '1',
    admitcard: 'LAB ATTENDANT DIRECT RECRUITMENT 2025 (RSSB)',
    hasCenterMap: true,
    img : "/1.png",
  },
  {
    key: '2',
    admitcard: 'EX SERVICEMAN (RPSC)',
    img : "/2.png",
  },
 {
    key: '3',
    admitcard: 'SI 2025 (RPSC)',
    img : "/2.png",
  },

   {
    key: '4',
    admitcard: 'z RECRUITMENT FOR DEMO OF SCRUTINY FORM (RSSB)',
    img : "/1.png",
  },
   {
    key: '5',
    admitcard: ' SI 2021 (RPSC)',
    img : "/2.png",
  },
   {
    key: '6',
    admitcard: 'DIRECT RECRUITMENT OF VARIOUS CONTRACTUAL POSTS OF NHM AND RAJMES -2025 (RSSB)',
    img : "/1.png",
  },
 {
    key: '7',
    admitcard: 'TEST NEW CATEGORY AND SCRIBE 2025 (RPSC)',
    img : "/2.png",
  },

   {
    key: '8',
    admitcard: 'TEST OTR EKYC RPSC (RPSC)',
    img : "/2.png",
  },

{
    key: '9',
    admitcard: 'COMMON ELIGIBILITY TEST (GRADUATE LEVEL)-2024 (RSSB)',
    img : "/1.png",
  },

{
    key: '10',
    admitcard: 'RAS 23 (RPSC)',
    img : "/2.png",
  },

  {
    key: '11',
    admitcard: 'Test Recruitment Pankaj 1 (RSSB)',
    img : "/1.png",
  },

{
    key: '12',
    admitcard: ' EXPLORATION AND EXCAVATION OFFICER / CURATOR EXAM - 2023 (RPSC)',
    img : "/2.png",
  },
{
    key: '13',
    admitcard: 'TESTING RECRUITMENT JUNE 2024 (RPSC)',
    img : "/2.png",
  },

{
    key: '14',
    admitcard: 'STENOGRAPHER AND PERSONAL ASSISTANT GRADE -II DIRECT JOINT RECRUITMENT - 2024 (RSSB)',
    img : "/1.png",
  },
{
    key: '15',
    admitcard: 'TEST SCRIBE ENTRY 2024 (RPSC)',
    img : "/2.png",
  },
{
    key: '16',
    admitcard: 'TEST COLLEGE PREVIOUS 2023 (RPSC)',
    img : "/2.png",
  },
{
    key: '17',
    admitcard: 'Demo -Informatics Assistant Direct Recruitment-2023 (RSSB)',
    img : "/1.png",
  },
{
    key: '18',
    admitcard: 'TEST SCRUTINY ATTESTATION FORM (RPSC)',
    img : "/2.png",
  },
{
    key: '19',
    admitcard: 'DEMO RECRUITMENT 2023 (RPSC)',
    img : "/2.png",
  },
{
    key: '20',
    admitcard: 'RSSB Department Recruitment 2023 (RSSB)',
    img : "/1.png",
  },
{
    key: '21',
    admitcard: 'TEST EDUCATION (RPSC)',
    img : "/2.png",
  },
{
    key: '22',
    admitcard: 'TEST OTR SYNC FIRST (RPSC)',
    img : "/2.png",
  },
{
    key: '23',
    admitcard: 'COMMON ELIGIBILITY TEST (GRADUATE LEVEL)-2022 (RSSB)',
    img : "/1.png",
  },
{
    key: '24',
    admitcard: 'DEMO - Police Constable Recruitment - 2021 (RAJCOP)',
    img : "/3.png",
  },
{
    key: '25',
    admitcard: 'Test Otr Police (RAJCOP)',
    img : "/3.png",
  },
{
    key: '26',
    admitcard: 'Demo- Librarian Garde III Direct Recruitment-2022 (RSSB)',
    img : "/1.png",
  },
{
    key: '27',
    admitcard: ' FEMALE HEALTH WORKER CONTRACTUAL RECRUITMENT (ANM) - 2023 (RSSB)',
    img : "/1.png",
  },
{
    key: '28',
    admitcard: 'Demo Direct Recruitment of Assistant Public Relations Officer - 2021 (RSSB)',
    img : "/1.png",
  },
{
    key: '29',
    admitcard: 'Test Post Change (RPSC)',
    img : "/2.png",
  },
{
    key: '30',
    admitcard: 'Demo - Direct Joint Recruitment of Lab Assistant - 2022 (RSSB)',
    img : "/1.png",
  },
{
    key: '31',
    admitcard: 'TEST RAS 21 DETAILED FORM (RPSC)',
    img : "/2.png",

  },
{
    key: '32',
    admitcard: 'OTR DOMACILE CHECK (RPSC)',
    img : "/2.png",
  },
{
    key: '33',
    admitcard: 'Recruitment for Junior Instructor(Technical Education Department) (RSSB)',
    img : "/1.png",
  },
{
    key: '34',
    admitcard: 'Demo Home Guard Recruitment (RAJCOP)',
    img : "/3.png",
  },
{
    key: '35',
    admitcard: 'Direct Recruitment of Para Medical cader Lab Technician and Assistant Radiographer -2020 (RSSB)',
    img : "/1.png",
  },



];

  const filteredData = data.filter((item) =>
    item.admitcard.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
     <Table
  columns={columns}
  dataSource={filteredData}
  pagination={{
    current: currentPage,
    pageSize: 10,
    onChange: handlePageChange,
  }}
  className="custom-table"
/>

  );
};

export default TableComponent;
