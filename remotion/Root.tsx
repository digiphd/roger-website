import React from "react";
import { Composition } from "remotion";
import { OGImage, type OGImageProps } from "./compositions/OGImage";

const defaultProps: OGImageProps = {
  title: "Blog Post Title",
  tags: ["tag1", "tag2"],
  date: "April 6, 2026",
  author: "Roger Chappel",
  siteUrl: "rogerchappel.com",
};

export const RemotionRoot: React.FC = () => {
  return (
    <>
      <Composition
        id="OGImage"
        component={OGImage}
        durationInFrames={1}
        fps={1}
        width={1200}
        height={630}
        defaultProps={defaultProps}
      />
    </>
  );
};
