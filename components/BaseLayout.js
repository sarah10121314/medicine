import styles from "../styles/Layout.module.css";
import Header from "./Header";
import Footer from "./Footer";
import Sidebar from "./Sidebar";

export default function Base({ children }) {
  return (
    <>
      <Header className={styles.header}></Header>
      <div className={styles.middle}>
        <Sidebar />
        <div className={styles.content}>{children}</div>
      </div>
      <Footer/>
    </>
  );
}
