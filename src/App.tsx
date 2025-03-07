import { CMSSection, FullWidthBanner, Storyblock } from "./CMSContentTypes";
import { CMSPageContextProvider } from "./CMSContext";
import "./styles.css";
import { PageContent } from "./types";
const pageData: PageContent = {
  id: "page-content",
  content_type_id: "page-layout",
  name: "page",
  header_tag_treatment: [
    {
      content_id: "full-width-1",
      tag: "h1",
      field: "heading",
    },
    {
      content_id: "storyblock-1",
      tag: "h3",
      field: "heading",
    },
    {
      content_id: "storyblock-1",
      tag: "h5",
      field: "subheading",
    },
  ],
  data: [
    {
      contentTypeId: "full-width",
      contentId: "full-width-1",
      heading: "Buy Groceries!",
      subheading: "Buy groceries for SAME DAY DELIVERY!",
    },
    {
      contentTypeId: "storyblock",
      contentId: "storyblock-1",
      heading: "Buy these products",
      subheading: "Same day delivery on all of these!",
    },
  ],
};
export default function App() {
  return (
    <div>
      <CMSPageContextProvider pageContent={pageData}>
        {pageData.data.map((d) => (
          <CMSSection key={d.contentId} content={d} />
        ))}
      </CMSPageContextProvider>
    </div>
  );
}
