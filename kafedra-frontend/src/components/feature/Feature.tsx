import styles from "./Feature.module.css"

import { Component } from "solid-js";

const Feature: Component<{ icon: any, kind?: string, name: string }> = props => {
    return (
        <div class={styles.feature}>
            <img src={props.icon} class={styles.icon} alt={props.kind} />
            <span class={styles.name}>
                {props.name}
            </span>
        </div>
    );
};

export default Feature;
