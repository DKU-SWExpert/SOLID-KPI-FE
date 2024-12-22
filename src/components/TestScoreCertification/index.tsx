import {CFormInput} from "@coreui/react";
import CommonCard from "@components/CommonCard";
import React from "react";

interface TestScoreProps {
    value: File | null;
    onChange: (value: File | null) => void;
}

const TestScore: React.FC<TestScoreProps> = ({onChange}) => {
    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0] || null;
        onChange(file);
    };

    return (
        <CommonCard header="성적 증명서" textBgColor="info" style={{maxWidth: "100rem"}}>
            <CFormInput
                type="file"
                className="mb-4 bg-dawn text-white border-gray"
                style={{maxWidth: "15rem"}}
                onChange={handleFileChange}
            />
        </CommonCard>
    );
};

export default TestScore;
