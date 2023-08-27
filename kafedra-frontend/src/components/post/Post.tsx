import styles from "./Post.module.css"

import { JSXElement } from "solid-js";

export default function Post (props: { children: JSXElement }) {
    return (
        <>
            <div class={styles.post}>
                {props.children}
            </div>
        </>
    );
}
