import React, { ReactNode } from 'react';
import { LeftContent, RightContent, CenterContent, MediaContent } from './Containers';

type ContentProps = {
    alignment: 'left' | 'right' | 'center' | 'media';
    children: ReactNode;
};

const Content: React.FC<ContentProps> = ({ alignment, children }) => {
    switch (alignment) {
        case 'left':
            return <LeftContent>{children}</LeftContent>;
        case 'right':
            return <RightContent>{children}</RightContent>;
        case 'center':
            return <CenterContent>{children}</CenterContent>;
        case 'media':
            return <MediaContent>{children}</MediaContent>;
        default:
            return null;
    }
};

export default Content;
