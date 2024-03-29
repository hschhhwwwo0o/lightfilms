import Head from "next/head";
import { IMetaInterface } from "./interface";

const Meta: React.FunctionComponent<IMetaInterface> = ({ titleShort, titleLong, description, url, keywords }) => {
  return (
    <Head>
      <title>{titleShort}</title>

      {/* Standart meta */}
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <link rel="canonical" href={url} />

      {/* Open Graph meta */}
      <meta property="og:title" content={titleLong} />
      <meta property="og:url" content={url} />
      <meta property="og:description" content={description} />

      {/* Open Graph Twitter */}
      <meta name="twitter:title" content={titleLong} />
      <meta name="twitter:description" content={description} />
    </Head>
  );
};

export default Meta;
