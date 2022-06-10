import Head from "next/head";
import '../styles/globals.css';
import Script from 'next/script'

function MyApp({ Component, pageProps }) {

  return (
    <>
      <Head>
        
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <meta name="title" content="Shridhar Kamat - Portfolio Site"/>
        <meta name="description" content="A front-end web developer and freelancer based in Goa"/>
        <meta property="og:type" content="website"/>
        <meta property="og:url" content="https://shridharkamat.dev/"/>
        <meta property="og:title" content="Shridhar Kamat - Portfolio Site"/>
        <meta property="og:description" content="A front-end web developer and freelancer based in Goa"/>
        <meta property="og:image" content="https://i.ibb.co/0FdNgg9/Frame-3-1.png"/>
        <meta name="twitter:card" content="summary_large_image"/>
        <meta name="twitter:title" content="Shridhar Kamat - Portfolio Site"/>
        <meta name="twitter:description" content="A front-end web developer and freelancer based in Goa"/>
        <meta name="twitter:site" content="@shridhar_kdev"/>
        <meta name="twitter:image" content="https://i.ibb.co/0FdNgg9/Frame-3-1.png"/>
        <meta name="twitter:creator" content="@shridhar_kdev"/>
        <meta property="twitter:url" content="https://shridharkamat.dev/"/>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true"/>
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;700;800&display=swap" rel="stylesheet"/> 
        
        <Script data-name="BMC-Widget" data-cfasync="false" src="https://cdnjs.buymeacoffee.com/1.0.0/widget.prod.min.js" data-id="shridharkamat" data-description="Support me on Buy me a coffee!" data-message="" data-color="#1DA1F2" data-position="Right" data-x_margin="18" data-y_margin="18"></Script>
      </Head>
      <main >
        <Component {...pageProps} />
      </main>
    </>
  )
}

export default MyApp
