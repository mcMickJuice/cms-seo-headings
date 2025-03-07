export interface PageContent {
  id: string;
  content_type_id: string;
  name: string;
  header_tag_treatment: {
    content_id: string;
    field: "heading" | "subheading";
    tag: "h1" | "h2" | "h3" | "h4" | "h5";
  }[];
  data: CMSContent[];
}
export type HeadingTag = "h1" | "h2" | "h3" | "h4" | "h5";
export interface HeadingOptions {
  headingTag?: HeadingTag;
  subheadingTag?: HeadingTag;
}
export interface FullWidthCMSData {
  contentTypeId: "full-width";
  contentId: string;
  heading: string;
  subheading: string;
}
export interface StoryBlockData {
  contentTypeId: "storyblock";
  contentId: string;
  heading: string;
  subheading: string;
}
export type CMSContent = FullWidthCMSData | StoryBlockData;
export type CMSContentTypeId = CMSContent["contentTypeId"];
