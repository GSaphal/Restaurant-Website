import React from "react";
import pageData from "../data/content.json";

const CompanyInformation = () => {
  const { store } = pageData;
  const companyDetails = [
    { label: "会社名", value: store.name["jp"] },
    { label: "所在地", value: store.address["jp"] },
    { label: "業務内容", value: store.businessContent["jp"] },
    { label: "代表", value: store.representative["jp"] },
    { label: "設立", value: store.dateEstablished["jp"] },
    { label: "資本", value: store.capital["jp"] },
    { label: "運営店舗", value: store.operatingStore["jp"] },
  ];

  return (
    <div className="w-[1290px] m-auto">
      <div className="p-4 ">
        <h1 className="text-3xl mb-10 font-medium ">Company Information</h1>
        <table className=" border-collapse border border-gray-300">
          <thead>
            <tr>
              <th className="border border-gray-300 px-4 py-2 text-left ">
                Field
              </th>
              <th className="border border-gray-300 px-4 py-2 text-left ">
                Details
              </th>
            </tr>
          </thead>
          <tbody>
            {companyDetails.map((item, index) => (
              <tr key={index}>
                <td className="border border-gray-300 px-4 py-2 ">
                  {item.label}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {item.value}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CompanyInformation;
