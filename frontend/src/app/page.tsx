import { Form } from "./form";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <Form />
    </main>
  );
}