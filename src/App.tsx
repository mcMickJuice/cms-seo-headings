import "./styles.css";
import { HeadingTag } from "./types";
interface FullWidthCMSData {
  contentId: string;
  heading: string;
  subheading: string;
}
const FullWidthBanner = (data: FullWidthCMSData) => {
  return (
    <div>
      <em>Full Width Banner</em>
      <Heading as="h1">{data.heading}</Heading>
      <Heading as="h2">{data.subheading}</Heading>
    </div>
  );
};
interface StoryBlockData {
  contentId: string;
  heading: string;
  subheading: string;
}

const Heading = ({ children, as }: { children: string; as: HeadingTag }) => {
  if (as === "h1") return <h1>{children}</h1>;
  if (as === "h2") return <h2>{children}</h2>;
  return null;
};
const Storyblock = (data: StoryBlockData) => {
  return (
    <div>
      <em>Storyblock Data</em>
      <Heading as="h1">{data.heading}</Heading>
      <Heading as="h2">{data.subheading}</Heading>
    </div>
  );
};
export default function App() {
  return (
    <>
      <FullWidthBanner
        contentId="1"
        heading="This is the header"
        subheading="This is the subheader"
      />
      <Storyblock
        contentId="2"
        heading="This is the header"
        subheading="This is the subheader"
      />
    </>
  );
}
