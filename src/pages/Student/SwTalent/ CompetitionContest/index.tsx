import Title from "@components/Card/Title.tsx";
import {CCard, CCardBody, CCardHeader, CFormInput, CInputGroup, CInputGroupText} from "@coreui/react";
import React, {useState} from "react";

const CompetitionContest = () => {
    const [formData, setFormData] = useState({
        startDate: "",
        endDate: "",
        contestName: "",
        host: "",
        professor: "",
    });

    const handleInputChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
    ) => {
        const {name, value} = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    return (
        <div className="container px-4">
            <Title title="경진대회 / 공모전 신청"/>

            <CCard
                textBgColor="info"
                className="mt-4 mb-4"
                style={{maxWidth: "100rem", borderRadius: "0.75rem"}}
            >
                <CCardHeader className="text-white">기간</CCardHeader>
                <CCardBody className="bg-dawn-light d-flex" style={{
                    borderBottomLeftRadius: "0.75rem",
                    borderBottomRightRadius: "0.75rem",
                }}>
                    <CInputGroup>
                        <CInputGroupText
                            className="text-white border-gray"
                            style={{maxWidth: "15rem", backgroundColor: "#2A303D"}}
                        >
                            시작 일자
                        </CInputGroupText>
                        <CFormInput
                            name="startDate"
                            type="date"
                            className="bg-dawn-light text-white border-gray"
                            style={{maxWidth: "15rem"}}
                            value={formData.startDate}
                            onChange={handleInputChange}
                        />
                    </CInputGroup>
                    <CInputGroup>
                        <CInputGroupText
                            className="text-white border-gray"
                            style={{maxWidth: "15rem", backgroundColor: "#2A303D"}}
                        >
                            종료 일자
                        </CInputGroupText>
                        <CFormInput
                            name="endDate"
                            type="date"
                            className="bg-dawn-light text-white border-gray"
                            style={{maxWidth: "15rem"}}
                            value={formData.endDate}
                            onChange={handleInputChange}
                        />
                    </CInputGroup>
                </CCardBody>
            </CCard>
        </div>
    )
}

export default CompetitionContest;
