import { Component, For } from "solid-js";

import styles from "./PostContent.module.css"
import { IPostContentData } from "../types";

const PostContent: Component<{ data: IPostContentData }> = props => {
    return (
        <For each={props.data.items}>
            {(item) => <p class={styles.p}>{item}</p>}
        </For>
    );
};

export default PostContent;
