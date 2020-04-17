import Head from 'next/head';
import React from 'react';
import { MetaProps } from '../../../types';

const Meta: React.FC<MetaProps> = (props) => {
  const { config, pageTitle } = props;

  return (
    <>
      <Head>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
        <meta charSet="utf-8" />
        <meta name="language" content="en" />
        {props.pageTitle ? (
          <title>
            {props.pageTitle} - {config.title}
          </title>
        ) : (
          <title>
            {config.title} - {config.shortDescription}
          </title>
        )}
        <meta name="description" content={config.description} />
        <link
          href="https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,200;1,200&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Dancing+Script&family=Lobster&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Varela&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Vollkorn&display=swap"
          rel="stylesheet"
        />
      </Head>
    </>
  );
};

export default Meta;
