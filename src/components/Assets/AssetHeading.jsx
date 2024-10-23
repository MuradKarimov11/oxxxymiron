import { renderNode } from "../../utils/common";

export const AssetHeading = ({ content }) => (
  <h3 className="news-heading-3">{content && content.map(renderNode)}</h3>
);
