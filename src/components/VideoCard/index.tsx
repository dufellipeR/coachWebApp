import React, { IframeHTMLAttributes } from 'react';

import { Container } from './styles';

interface IframeProps extends IframeHTMLAttributes<string> {
  title?: string;
  source: string;
}

const VideoCard: React.FC<IframeProps> = ({ source, ...rest }) => {
  return (
    <Container>
      <iframe
        title="Clutch"
        src={source}
        frameBorder="0"
        allowFullScreen
        scrolling="no"
        height="350px"
        width="400px"
      />
    </Container>
  );
};

export default VideoCard;
