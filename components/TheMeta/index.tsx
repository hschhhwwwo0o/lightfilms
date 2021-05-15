const TheMeta: React.FunctionComponent = () => {
    return <>
        <meta charSet="UTF-8" />
        <meta httpEquiv="Content-Type" content="text/html; charset=UTF-8" />

        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta httpEquiv="X-UA-Compatible" content="chrome=1" />

        {/* Google verification */}
        <meta name="google-site-verification" content="oa86IUz2uq8Y3XYsiHGgJjbtBDNZ2TIp21FvivYJ7aU" />

        {/* Favicons */}
        <link rel="shortcut icon" type="image/x-icon" href="/static/favicon.ico" />
        <link type="image/png" sizes="16x16" rel="icon" href="/static/favicon/favicon-16x16.png" />
        <link type="image/png" sizes="32x32" rel="icon" href="/static/favicon/favicon-32x32.png" />
        <link type="image/png" sizes="48x48" rel="icon" href="/static/favicon/favicon-48x48.png" />
        <link type="image/png" sizes="72x72" rel="icon" href="/static/favicon/favicon-72x72.png" />
        <link type="image/png" sizes="96x96" rel="icon" href="/static/favicon/favicon-96x96.png" />
        <link type="image/png" sizes="120x120" rel="icon" href="/static/favicon/favicon-120x120.png" />

        <link type="image/png" sizes="192x192" rel="icon" href="/static/android/android-icon-192x192.png" />

        <link sizes="120x120" rel="apple-touch-icon" href="/static/apple/apple-touch-icon-57x57.png" />
        <link sizes="120x120" rel="apple-touch-icon" href="/static/apple/apple-touch-icon-76x76.png" />
        <link sizes="120x120" rel="apple-touch-icon" href="/static/apple/apple-touch-icon-120x120.png" />
        <link sizes="180x180" rel="apple-touch-icon" href="/static/apple/apple-touch-icon-180x180.png" />

        {/* Standart */}
        <meta name="hostname" content="lightfilms-ssandry.vercel.app" />
        <meta httpEquiv="Content-language" content="en-US" />
        <meta name="robots" content="index, follow" />
        <link rel="manifest" href="/static/manifest.json" />
        <meta name="msapplication-config" content="https://lightfilms-ssandry.vercel.app/static/browserconfig.xml" />

        <meta name="theme-color" content="#181818" />

        {/* Copyright */}
        <meta name="author" content="Saveliy Meetrofanov. GitHub: @ssandry" />
        <meta name="publisher" content="@ssandry" />
        <meta name="copyright" content={`${new Date().getFullYear()} @ssandry`} />

        {/* Open Graph */}
        <meta 
            property="og:image" 
            content="https://lightfilms-ssandry.vercel.app/static/promo/lightfilms-promo.png" 
        />
        <meta 
            property="og:image:secure_url" 
            content="https://lightfilms-ssandry.vercel.app/static/promo/lightfilms-promo.png" 
        />
        <meta property="og:image:type" content="image/png" /> 
        <meta property="og:image:alt" content="LIGHTFILMS. More about cinema and persons" /> 
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:site_name" content="LIGHTFILMS" />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:locale:alternate" content="en_UK" />

        {/* Open Graph Twitter */}
        <meta 
            name="twitter:image" 
            content="https://lightfilms-ssandry.vercel.app/static/promo/lightfilms-twitter-promo.png" 
        />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@lightfilms" />
        <meta name="twitter:creator" content="@ssandry" />
        <meta name="twitter:image:width" content="900" />
        <meta name="twitter:image:height" content="900" />
    </>
}

export default TheMeta;