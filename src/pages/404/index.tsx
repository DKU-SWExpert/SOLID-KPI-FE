import Layout from "@/components/Layout";
import GoBackHomeButton from "@/components/Button/GoBackHomeButton";

const NotFound = () => {
  return (
    <>
      <Layout>
        <h1>존재하지 않는 페이지입니다.</h1>
        <small>404 NOT FOUND</small>
        {/* 홈으로 돌아가기 버튼 만들기 */}
        <GoBackHomeButton />
      </Layout>
    </>
  );
};

export default NotFound;
