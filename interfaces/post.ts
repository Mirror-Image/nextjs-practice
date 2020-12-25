import {NextPageContext} from "next";

export interface MyPost {
  id: string | number,
  title: string,
  body: string,
}

export interface PostNextPageContext extends NextPageContext {
  query: {
    id: string,
  },
}
