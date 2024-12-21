import React from "react";
import { CFormSelect } from "@coreui/react";
import CommonCard from "@components/CommonCard";

interface TestCategoryProps {
    value: string;
    onChange: (value: string) => void;
}

const TestCategory: React.FC<TestCategoryProps> = ({ value, onChange }) => {
    const tests: Record<string, string> = {
        topcit: "TOPCIT",
        pccp: "PCCP",
        pcce: "PCCE",
    };

    return (
        <CommonCard header="시험 구분" textBgColor="info" style={{ maxWidth: "100rem" }}>
            <CFormSelect
                className="bg-dawn text-white border-gray"
                style={{ maxWidth: "15rem" }}
                value={value}
                onChange={(e) => onChange(e.target.value)}
            >
                <option value="">시험 선택</option>
                {Object.entries(tests).map(([key, value]) => (
                    <option key={key} value={key}>
                        {value}
                    </option>
                ))}
            </CFormSelect>
        </CommonCard>
    );
};

export default TestCategory;
