import styles from "./Display.module.css";
const Display = ({ calValue }) => {
  return (
    <input className={styles.display} type="text" value={calValue} readOnly />
  );
};

export default Display;
