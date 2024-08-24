import React, { SetStateAction } from "react";


interface SummaryInquiryProps {
  accountName: string;
  accountNo: string;
  accountData: string;
  week: number;
  accountCreateDate: string;
  accountExpiryDate: string;


}

const SummaryInquiry = ({ accountName = "우리가족", accountNo="0000000000000", accountData="200,000" ,week = 4,  accountCreateDate= "2024.08.10",  accountExpiryDate="2025.07.31" }: SummaryInquiryProps) => {

  return (
    <section className="w-full flex flex-col">
      <div className="summary-inquiry-card p-5 bg-[#F4F6FA] w-full flex flex-col items-center gap-7 justify-center ">
        <div className="flex flex-col justify-center items-center font-light">
          <article className="account-info text-[14px] mb-5">
            <span className="text-main-600">{accountName}</span>
            <span className="text-gray-500">모임</span>
          </article>
          <article className="account-no text-gray-500 text-[14px]"/>{accountNo}
          <article className="account-data text-gray-900 font-bold text-[28px]">
            <span/>{accountData}
            <span/>원
          </article>
        </div>
        <div className="text-[14px] text-gray-500">
          <span>만기일</span>
          <span>{accountExpiryDate}</span>
        </div>
        <div className="card flex flex-col w-full gap-4 bg-white rounded-[12px] p-5 ">
          <div className="account-info text-[14px]">
            <div className="flex flex-row justify-between"> 
              <span>기본 금리</span>
              <span>1.80%</span>
            </div>
            <div className="flex flex-row justify-between">
              <span>최대 우대 금리</span>
              <span>4.80%</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SummaryInquiry;