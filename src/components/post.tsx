import React from "react";
import { DanbooruPost } from "~/types/post";
import { cn } from "~/lib/utils";

const extMap = new Map<string, JSX.Element>([
  ["jpg", <img loading="lazy" decoding="async" />],
  ["png", <img loading="lazy" decoding="async" />],
  ["gif", <img loading="lazy" decoding="async" />],
  ["webp", <img loading="lazy" decoding="async" />],
  [
    "mp4",
    <video controls>
      <source />
    </video>
  ],
  [
    "webm",
    <video controls>
      <source />
    </video>
  ]
]);

const Post: React.FC<DanbooruPost> = props => {
  const { file_url, file_ext, tag_string } = props;
  const el = extMap.get(file_ext);

  if (!el) {
    return null;
  }

  if (file_ext === "mp4" || file_ext === "webm") {
    const clonedElement = React.cloneElement(
      el,
      {
        className: cn("mx-auto", "rounded-md", "shadow-md", "mt-4")
      },
      <source src={file_url} type={`video/${file_ext}`} />
    );
    return <div>{clonedElement}</div>;
  }

  const clonedElement = React.cloneElement(el, {
    src: file_url,
    alt: tag_string,
    className: cn("mx-auto", "rounded-md", "shadow-md", "mt-4")
  });

  return clonedElement;
};

export { Post };
