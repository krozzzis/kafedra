import { Component, For, JSXElement } from "solid-js";
import Post from "../post/Post";
import PostContent from "../post_content/PostContent";
import PostHeader from "../post_header/PostHeader";
import { IPostData } from "../types";
import styles from "./PostList.module.css";

const PostList: Component<{ list: IPostData[] }> = props => {
    return (
        <div class={styles.list}>
            <For each={props.list}>
                {(item) => 
                    <Post>
                        <PostHeader data={item.meta} />
                        <PostContent data={item.content} />
                    </Post>
                }
            </For>
        </div>
    );
};

export default PostList;
