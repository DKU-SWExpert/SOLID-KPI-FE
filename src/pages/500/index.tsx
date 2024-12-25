import GoBackHomeButton from "@components/Button/GoBackHomeButton.tsx";
import styles from "./InternalError.module.css";
import "@styles/custom-color.css";

const InternalError = () => {
  return (
      <div className={`${styles.container} bg-dawn-light`}>
          <h1 className={`${styles.heading} text-white`}>서버에러가 발생했습니다.</h1>
          <small className={styles.errorCode}>500 Internal Server Error</small>
          <h3 className={`${styles.message} text-white`}>잠시 후 다시 시도해주세요</h3>
          <GoBackHomeButton/>
      </div>
  );
};

export default InternalError;
