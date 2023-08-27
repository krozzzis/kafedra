import { Component, Show } from "solid-js";
import { A } from "@solidjs/router";

import type { IPostMetaData } from "../types";
import Feature from "../feature/Feature";
import styles from "./PostHeader.module.css"

import user from "/user.svg";
import calendar from "/calendar.svg";
import views from "/views.svg";


const PostHeader: Component<{ data: IPostMetaData }> = props => {
    return (
        <header class={styles.header}>
            <h1>{props.data.title}</h1>
            <div class={styles.feature_list}>
              <Show when={props.data.author}>
                  <A href={"/@" + props.data.author}><Feature name={props.data.author} kind="author" icon={user} /></A>
              </Show>
              <Show when={props.data.date}>
                  <Feature name={props.data.date || ""} kind="date" icon={calendar} />
              </Show>
              <Show when={props.data.views}>
                  <Feature name={props.data.views?.toString() || ""} kind="views" icon={views} />
              </Show>
            </div>
        </header>
    );
};

export default PostHeader;
