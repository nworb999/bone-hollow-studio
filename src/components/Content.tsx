import React, { ReactNode } from 'react';
import { LeftContent, RightContent, CenterContent } from './Containers';

type ContentProps = {
    alignment: 'left' | 'right' | 'center';
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
        default:
            return null;
    }
};

export default Content;
