import React from 'react';
import { Link } from 'gatsby';
import Helmet from 'react-helmet';

const NotFoundPage = () => {
  return (
    <>
      <Helmet>
        <title>Nothing Found</title>
      </Helmet>
      <main>
        <div>Page Not Found</div>
        <Link to="/">Go Home</Link>
      </main>
    </>
  );
};

export default NotFoundPage;
