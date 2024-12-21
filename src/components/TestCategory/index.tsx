import { CFormSelect } from "@coreui/react";
import CommonCard from "@components/CommonCard";

const TestCategory = () => {
    const tests = {
        topcit: "TOPCIT",
        pccp: "PCCP",
        pce: "PCCE",
    };

    return (
        <CommonCard header="시험 구분" textBgColor="info" style={{ maxWidth: "100rem" }}>
            <CFormSelect className="bg-dawn text-white border-gray" style={{ maxWidth: "15rem" }}>
                <option>시험 선택</option>
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
