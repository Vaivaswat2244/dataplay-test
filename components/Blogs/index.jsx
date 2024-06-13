import { SectionHeader } from "../common/HeaderCard/section-header";
import BlogsSlider from "../sliders/BlogsSlider";

export const BlogSec = () => {
  return (
    <div className="custom-container mt-5">
      <SectionHeader
        underlineHeader={`NEWS & BLOGS`}
        title={`Our Insightful Blogs`}
        subtitle={"Simplifying concepts for every learner."}
      />
      <BlogsSlider />
    </div>
  );
};
