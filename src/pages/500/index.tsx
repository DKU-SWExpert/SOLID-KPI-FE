import Layout from "@/components/Layout";
import GoBackHomeButton from "@components/Button/GoBackHomeButton.tsx";
import styles from "./InternalError.module.css";

const InternalError = () => {
    return (
        <Layout>
            <div className={styles.container}>
                <h1 className={styles.heading}>서버에러가 발생했습니다.</h1>
                <small className={styles.errorCode}>500 Internal Server Error</small>
                <h3 className={styles.message}>잠시 후 다시 시도해주세요</h3>
                <GoBackHomeButton />
            </div>
        </Layout>
    );
};

export default InternalError;
