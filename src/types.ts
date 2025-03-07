export interface PageContent {
  id: string;
  content_type_id: string;
  name: string;
  header_tag_treatment: {
    content_id: string;
    field: "heading" | "subheading";
    tag: "h1" | "h2" | "h3" | "h4" | "h5";
  }[];
}
export type HeadingTag = "h1" | "h2" | "h3" | "h4" | "h5";
export interface HeadingOptions {
  headingTag?: HeadingTag;
  subheadingTag?: HeadingTag;
}
