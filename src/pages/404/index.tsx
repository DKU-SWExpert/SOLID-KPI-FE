import GoBackHomeButton from "@components/Button/GoBackHomeButton.tsx";
import styles from "./NotFound.module.css";

const NotFound = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>존재하지 않는 페이지입니다.</h1>
      <small className={styles.errorCode}>404 NOT FOUND</small>
      <GoBackHomeButton />
    </div>
  );
};

export default NotFound;
