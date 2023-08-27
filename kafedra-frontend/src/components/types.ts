export interface IPostMetaData {
    title: string;
    author?: string;
    date?: string;
    views?: number;
}

export interface IPostContentData {
    items: string[];
}

export interface IPostData {
    meta: IPostMetaData;
    content: IPostContentData;
}
