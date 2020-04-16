import dynamic from 'next/dynamic';
import React, { useState } from 'react';
import Head from 'next/head';

const CMS = dynamic(
  () =>
    import('netlify-cms-app').then((cms) => {
      cms.init();
      // cms.registerPreviewTemplate("<input collection here>", withStyled(YourComponent));
      cms.registerEditorComponent({
        id: 'youtube',
        label: 'Youtube',
        fields: [{ name: 'id', label: 'Youtube Video ID' }],
        pattern: /^{{<\s?youtube (\S+)\s?>}}/,
        fromBlock: function (match) {
          return {
            id: match[1],
          };
        },
        toBlock: function (obj) {
          return '{{< youtube ' + obj.id + ' >}}';
        },
        toPreview: function (obj) {
          return (
            '<img src="http://img.youtube.com/vi/' +
            obj.id +
            '/maxresdefault.jpg" alt="Youtube Video"/>'
          );
        },
      });
    }),
  { ssr: false },
);

const Admin = () => {
  return (
    <>
      <Head>
        <script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>
      </Head>
      <CMS />
    </>
  );
};

export default Admin;
