import { ComponentType } from "react";
import { usePageContentHeader } from "./CMSContext";
import {
  CMSContent,
  CMSContentTypeId,
  FullWidthCMSData,
  HeadingOptions,
  HeadingTag,
  StoryBlockData,
} from "./types";

// OPTION 1 - CMS components call the usePageContentHeader hook. CMS components that don't render heading components will not call this
// OPTION 2 - HeadingOptions are provided as props to all CMS components. It's up to them to use these props.
export const FullWidthBanner = (data: FullWidthCMSData) => {
  // OPTION 1 - components call usePageContentHeader hook to get heading options
  const headingTags = usePageContentHeader(data.contentId);
  const headingTag = headingTags.headingTag ?? "h2";
  const subHeadingTag = headingTags.subheadingTag ?? "h3";
  return (
    <div>
      <em>Full Width Banner</em>
      <Heading as={headingTag}>{data.heading}</Heading>
      <Heading as={subHeadingTag}>{data.subheading}</Heading>
    </div>
  );
};

const Heading = ({ children, as }: { children: string; as: HeadingTag }) => {
  if (as === "h1") return <h1>{children}</h1>;
  if (as === "h2") return <h2>{children}</h2>;
  if (as === "h3") return <h3>{children}</h3>;
  if (as === "h4") return <h4>{children}</h4>;
  if (as === "h5") return <h5>{children}</h5>;
  return null;
};
export const Storyblock = (data: StoryBlockData & HeadingOptions) => {
  // re: OPTION 2 - components are passed in heading options, they don't need to call it
  const headingTag = data.headingTag ?? "h2";
  const subHeadingTag = data.subheadingTag ?? "h3";
  return (
    <div>
      <em>Storyblock Data</em>
      <Heading as={headingTag}>{data.heading}</Heading>
      <Heading as={subHeadingTag}>{data.subheading}</Heading>
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
  // OPTION 2: call hook outside of CMS component, then pass in heading options as part of props
  const headingOptions = usePageContentHeader(content.contentId);
  const Component = getCMSComponent(content.contentTypeId);

  return <Component {...content} {...headingOptions} />;
};
