import {CFormSelect} from "@coreui/react";
import CommonCard from "@components/CommonCard";
import React from "react";

interface TestLevelProps {
    value: string;
    onChange: (value: string) => void;
}

const TestLevel: React.FC<TestLevelProps> = ({value, onChange}) => {
    const category: Record<string, string> = {
        level1: "Level 1",
        level2: "Level 2",
        level3: "Level 3",
        level4: "Level 4",
        level5: "Level 5",
    };

    return (
        <CommonCard header="성적 Level" textBgColor="info" style={{maxWidth: "100rem"}}>
            <CFormSelect
                className="bg-dawn text-white border-gray"
                style={{maxWidth: "15rem"}}
                value={value}
                onChange={(e) => onChange(e.target.value)}
            >
                <option value="">시험 선택</option>
                {Object.entries(category).map(([key, value]) => (
                    <option key={key} value={key}>
                        {value}
                    </option>
                ))}
            </CFormSelect>
        </CommonCard>
    );
};

export default TestLevel;
