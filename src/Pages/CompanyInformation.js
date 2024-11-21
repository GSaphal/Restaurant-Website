import React from 'react';

const CompanyInformation = () => {
    const companyDetails = [
        { label: "Company name", value: "SRS Co., Ltd." },
        { label: "Location", value: "〒364-0031 Kitamoto City, Saitama Prefecture 1-61 Urban ST103 TEL/FAX 048-592-2155" },
        { label: "Business content", value: "Management of a restaurant" },
        { label: "Representative", value: "Candel Gobinda" },
        { label: "Established", value: "April 20, 2022" },
        { label: "Capital", value: "5 million yen" },
        { label: "Operating store", value: "Asian Dining Haven North Book West Exit" },
    ];

    return (
       < div className='w-[1290px] m-auto'>
        <div className="p-4 ">
            <h1 className="text-3xl mb-10 font-medium ">Company Information</h1>
            <table className=" border-collapse border border-gray-300">
                <thead>
                    <tr>
                        <th className="border border-gray-300 px-4 py-2 text-left ">Field</th>
                        <th className="border border-gray-300 px-4 py-2 text-left ">Details</th>
                    </tr>
                </thead>
                <tbody>
                    {companyDetails.map((item, index) => (
                        <tr key={index} >
                            <td className="border border-gray-300 px-4 py-2 ">{item.label}</td>
                            <td className="border border-gray-300 px-4 py-2">{item.value}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
        </div>
    );
};

export default CompanyInformation;
