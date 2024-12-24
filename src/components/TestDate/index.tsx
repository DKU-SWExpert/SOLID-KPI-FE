import { CFormInput } from "@coreui/react";
import CommonCard from "@components/CommonCard";

interface TestDateProps {
    value: string;
    onChange: (value: string) => void;
}

const TestDate: React.FC<TestDateProps> = ({ value, onChange }) => {

    return (
        <CommonCard header="시험 일자" textBgColor="info" style={{ maxWidth: "100rem" }}>
            <CFormInput
                type="date"
                className="bg-dawn-light text-white border-gray"
                style={{ maxWidth: "15rem" }}
                value={value}
                onChange={(e) => onChange(e.target.value)}
            />
        </CommonCard>
    );
};

export default TestDate;
