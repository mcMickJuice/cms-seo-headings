import { ComponentType, ReactElement } from "react";
import {
  CMSContent,
  CMSContentTypeId,
  FullWidthCMSData,
  HeadingTag,
  StoryBlockData,
} from "./types";
export const FullWidthBanner = (data: FullWidthCMSData) => {
  return (
    <div>
      <em>Full Width Banner</em>
      <Heading as="h1">{data.heading}</Heading>
      <Heading as="h2">{data.subheading}</Heading>
    </div>
  );
};

const Heading = ({ children, as }: { children: string; as: HeadingTag }) => {
  if (as === "h1") return <h1>{children}</h1>;
  if (as === "h2") return <h2>{children}</h2>;
  return null;
};
export const Storyblock = (data: StoryBlockData) => {
  return (
    <div>
      <em>Storyblock Data</em>
      <Heading as="h1">{data.heading}</Heading>
      <Heading as="h2">{data.subheading}</Heading>
    </div>
  );
};

const cmsContentMap: Record<CMSContentTypeId, ComponentType<any>> = {
  "full-width": FullWidthBanner,
  storyblock: Storyblock,
};
const getCMSComponent = (
  contentTypeId: CMSContentTypeId,
): ComponentType<any> => {
  const c = cmsContentMap[contentTypeId];

  if (c == null) {
    throw new Error(
      `content type Id ${contentTypeId} not a valid content type!`,
    );
  }
  return c;
};
export const CMSSection = ({ content }: { content: CMSContent }) => {
  const Component = getCMSComponent(content.contentTypeId);

  return <Component {...content} />;
};
