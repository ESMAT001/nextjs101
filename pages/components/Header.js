import Head from 'next/head';

function CustomHead({ title }) {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content="next js app" />
      <link rel="icon" href="/favicon.ico" />
      // Material Icons Link
      <link
        href="https://fonts.googleapis.com/icon?family=Material+Icons"
        rel="stylesheet"
      />

      // Font Awesome Link
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.2/css/all.min.css"
        integrity="sha512-HK5fgLBL+xu6dm/Ii3z4xhlSUyZgTT9tuc/hSrtw6uzJOvgRr2a9jyxxT1ely+B+xFAmJKVSTbpM/CuL7qxO8w=="
        crossOrigin="anonymous"
      />
    </Head>
  )
}

export default CustomHead
