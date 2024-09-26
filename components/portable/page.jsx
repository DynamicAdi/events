import React from 'react';
import { PortableText } from '@portabletext/react';

const myPortableTextComponents = {
  types: {
    image: ({ value }) => {
      return <img src={value.asset.url} alt={value.alt || 'Image'} />;
    },
  },
  marks: {
    link: ({ children, value }) => {
      const target = (value?.href || '').startsWith('http') ? '_blank' : '_self';
      return (
        <a href={value?.href} target={target} rel={target === '_blank' ? 'noopener noreferrer' : undefined}>
          {children}
        </a>
      );
    },
  },
};


const RichText = ({ blocks }) => {
  return <PortableText value={blocks} components={myPortableTextComponents} />;
};

export default RichText;