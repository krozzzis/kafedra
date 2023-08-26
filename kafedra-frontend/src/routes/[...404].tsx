import styles from "./NotFound.module.css";

import { Title } from "solid-start";
import { HttpStatusCode } from "solid-start/server";

export default function NotFound() {
  return (
    <main class={styles.content}>
      <Title>Not Found</Title>
      <HttpStatusCode code={404} />
      <h1 class={styles.h1}>404</h1>
      <h2 class={styles.h2}>Page Not Found</h2>
    </main>
  );
}
