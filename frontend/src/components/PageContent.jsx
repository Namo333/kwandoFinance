import React from 'react';
import { content } from '../content/content';

const PageContent = ({ pageName }) => {
  const pageData = content[pageName];

  return (
    <div>
      <Typography className="text-2xl font-bold mb-4">
        {pageData.title}
      </Typography>
      <Typography>
        {pageData.description}
      </Typography>
    </div>
  );
};

export default PageContent;
