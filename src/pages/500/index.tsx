import Layout from "@/components/Layout";
import GoBackHomeButton from "@/components/Button/GoBackHomeButton";

const InternalError = () => {
  return (
    <>
      <Layout>
        <h1>서버에러가 발생했습니다.</h1>
        <small>500 Internal Server Error</small>
        <h3>잠시 후 다시 시도해주세요</h3>
        <GoBackHomeButton />
      </Layout>
    </>
  );
};

export default InternalError;
