import dynamic from 'next/dynamic';
import React, { useState } from 'react';
import Head from 'next/head';

const CMS: any = dynamic(
  // @ts-ignore
  () => {
    return import('netlify-cms-app').then((cms: any) => {
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
    });
  },
  { ssr: false },
);

const Admin = () => {
  React.useEffect(() => {
    document.getElementById('__next').style.height = 'auto';
  }, []);

  return (
    <>
      <Head>
        <script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>
        <script src="/netlify_identity_redirect_scripts.js" />
      </Head>
      <CMS />
    </>
  );
};

export default Admin;
