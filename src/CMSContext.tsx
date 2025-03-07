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
  const headingConfig = context.pageContent.header_tag_treatment.find(
    (t) => t.content_id === contentId,
  );
  if (headingConfig == null) return {};

  return {
    headingTag:
      headingConfig.field === "heading" ? headingConfig.tag : undefined,
    subheadingTag:
      headingConfig.field === "subheading" ? headingConfig.tag : undefined,
  };
};
