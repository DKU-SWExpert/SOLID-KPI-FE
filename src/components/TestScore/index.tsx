import {CFormInput} from "@coreui/react";
import CommonCard from "@components/CommonCard";
import React from "react";

interface TestScoreProps {
    value: string;
    onChange: (value: string) => void;
}

const TestScore: React.FC<TestScoreProps> = ({value, onChange}) => {
    return (
        <CommonCard header="성적 점수" textBgColor="info" style={{maxWidth: "100rem"}}>
            <CFormInput
                type="text"
                className="mb-4 bg-dawn text-white border-gray"
                style={{maxWidth: "15rem"}}
                value={value}
                onChange={(e) => onChange(e.target.value)}
            />
        </CommonCard>
    );
};

export default TestScore;
