import {useState} from "react";
import TestCategory from "@components/TestCategory";
import TestDate from "@components/TestDate";
import SaveButton from "@components/SaveButton";
import TestLevel from "@components/TestLevel";
import TestScore from "@components/TestScore";
import TestScoreCertification from "@components/TestScoreCertification";
import Title from "@components/Card/Title.tsx";

const SwTestEnterResult = () => {
    const [formData, setFormData] = useState({
        category: "",
        date: "",
        level: "",
        score: "",
        file: null as File | null
    });

    const handleUpdate = (field: string, value: string | File | null) => {
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
            alert("성적 증명서를 첨부해 주세요.");
            return;
        }
        console.log(formData);
    };

    return (
        <div className="container px-4">
            <Title title="SW 역량 테스트 결과 입력" />

            <TestCategory
                value={formData.category}
                onChange={(value) => handleUpdate("category", value)}
            />
            <TestDate
                value={formData.date}
                onChange={(value) => handleUpdate("date", value)}
            />
            <TestLevel
                value={formData.level}
                onChange={(value) => handleUpdate("level", value)}
            />
            <TestScore
                value={formData.score}
                onChange={(value) => handleUpdate("score", value)}
            />
            <TestScoreCertification
                value={formData.file}
                onChange={(value) => handleUpdate("file", value)}
            />
            <SaveButton onClick={handleSave}/>
        </div>
    );
};

export default SwTestEnterResult;
