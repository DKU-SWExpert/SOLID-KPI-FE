import CommonCard from "@components/CommonCard";
import TestCategory from "@components/TestCategory";
import TestDate from "@components/TestDate";
import ApplicationForm from "@components/ApplicationForm";
import SaveButton from "@components/SaveButton";

const SwTestRequest = () => {
    return (
        <>
            <CommonCard header="SW 역량 테스트 신청" textBgColor="primary" style={{ maxWidth: "15rem" }} />

            <TestCategory />
            <TestDate />
            <ApplicationForm />
            <SaveButton />
        </>
    );
};

export default SwTestRequest;
