import {useState} from "react";
import CommonCard from "@components/CommonCard";
import TestCategory from "@components/TestCategory";
import TestDate from "@components/TestDate";
import ApplicationForm from "@components/ApplicationForm";
import SaveButton from "@components/SaveButton";

const SwTestApplication = () => {
    const [formData, setFormData] = useState({
        category: "",
        date: "",
        applicationDetails: {
            studentId: "",
            birthDate: "",
            email: "",
            name: "",
            grade: "",
            department: "",
            phone: "",
            topcitId: "",
        }
    });

    const handleUpdate = (field: string, value: string) => {
        if (field in formData.applicationDetails) {
            setFormData((prevData) => ({
                ...prevData,
                applicationDetails: {
                    ...prevData.applicationDetails,
                    [field]: value,
                },
            }));
        } else {
            setFormData((prevData) => ({
                ...prevData,
                [field]: value,
            }));
        }
    };

    const handleSave = () => {
        if (!formData.category) {
            alert("시험 구분을 선택해주세요.");
            return;
        }
        if (!formData.date) {
            alert("시험 일자를 입력해주세요.");
            return;
        }
        const details = formData.applicationDetails;
        if (!details.birthDate || !details.email || !details.grade || !details.phone || !details.topcitId) {
            alert("모든 기본정보를 입력해주세요.");
            return;
        }
        /*
        axios.post("/api/save-test-request", formData, {
                headers: {
                    "Content-Type": "application/json",
                },
            })
            .then((response) => {
                if (response.status === 200) {
                    alert("데이터가 성공적으로 저장되었습니다.");
                } else {
                    alert("데이터 저장에 실패했습니다. 다시 시도해주세요.");
                }
            })
            .catch((error) => {
                console.error("Error while saving data:", error);
                alert("데이터 저장 중 오류가 발생했습니다.");
            });
         */
    };

    return (
        <>
            <CommonCard header="SW 역량 테스트 신청" textBgColor="primary" style={{maxWidth: "15rem"}}/>

            <TestCategory
                value={formData.category}
                onChange={(value) => handleUpdate("category", value)}
            />
            <TestDate
                value={formData.date}
                onChange={(value) => handleUpdate("date", value)}
            />
            <ApplicationForm
                value={formData.applicationDetails}
                onChange={(field, value) => handleUpdate(field, value)}
            />
            <SaveButton onClick={handleSave}/>
        </>
    );
};

export default SwTestApplication;
