import {useState} from "react";
import CommonCard from "@components/CommonCard";
import TestCategory from "@components/TestCategory";
import TestDate from "@components/TestDate";
import SaveButton from "@components/SaveButton";

const SwTestRequest = () => {
    const [formData, setFormData] = useState({
        category: "",
        date: "",
        level: "",
        score: "",
        file: ""
    });

    const handleUpdate = (field: string, value: string) => {
        setFormData((prevData) => ({
            ...prevData,
            [field]: value,
        }));
    };

    const handleSave = () => {
        if (!formData.category) {
            alert("시험 구분을 선택해 주세요.");
            return;
        }
        if (!formData.date) {
            alert("시험 일자를 입력해 주세요.");
            return;
        }
        if (!formData.level) {
            alert("성적 Level 을 입력해 주세요.");
            return;
        }
        if (!formData.score) {
            alert("성적 점수를 입력해 주세요.");
            return;
        }
        if (!formData.file) {
            alert("성적 증명서를 입력해 주세요.");
            return;
        }
    };

    return (
        <>
            <CommonCard header="SW 역량 테스트 결과 입력" textBgColor="primary" style={{maxWidth: "15rem"}}/>

            <TestCategory
                value={formData.category}
                onChange={(value) => handleUpdate("category", value)}
            />
            <TestDate
                value={formData.date}
                onChange={(value) => handleUpdate("date", value)}
            />
            <SaveButton onClick={handleSave}/>
        </>
    );
};

export default SwTestRequest;
