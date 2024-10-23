import { renderNode } from "../../utils/common";

export const AssetLink = ({ uri, content }) => (
  <a href={uri} target="_blank" rel="noopener noreferrer">
    {content && content.map(renderNode)}
  </a>
);
