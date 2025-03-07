import React, { useContext } from "react";
import { HeadingOptions, PageContent } from "./types";
const CMSPageContext = React.createContext<CMSPageContext | undefined>(
  undefined,
);

export interface CMSPageContext {
  pageContent: PageContent;
}
export const CMSPageContextProvider = ({
  pageContent,
  children,
}: {
  pageContent: PageContent;
  children: React.ReactNode;
}) => {
  return (
    <CMSPageContext.Provider value={{ pageContent }}>
      {children}
    </CMSPageContext.Provider>
  );
};

export const usePageContentHeader = (contentId: string): HeadingOptions => {
  const context = useContext(CMSPageContext);

  if (context == null) return {};
  const headingConfigs = context.pageContent.header_tag_treatment.filter(
    (t) => t.content_id === contentId,
  );
  if (headingConfigs.length === 0) return {};
  const headingConfig: HeadingOptions = {
    headingTag: undefined,
    subheadingTag: undefined,
  };
  headingConfigs.forEach((config) => {
    if (config.field === "heading") {
      headingConfig.headingTag = config.tag;
      return;
    }
    if (config.field === "subheading") {
      headingConfig.subheadingTag = config.tag;
      return;
    }
  });
  return headingConfig;
};
