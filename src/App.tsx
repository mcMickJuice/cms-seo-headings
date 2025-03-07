import { CMSSection, FullWidthBanner, Storyblock } from "./CMSContentTypes";
import "./styles.css";
import { PageContent } from "./types";
const data: PageContent = {
  id: "page-content",
  content_type_id: "page-layout",
  name: "page",
  header_tag_treatment: [],
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
      {data.data.map((d) => (
        <CMSSection key={d.contentId} content={d} />
      ))}
    </div>
  );
}
