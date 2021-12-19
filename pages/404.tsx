import Meta from "../components/Meta";
import TheHeader from "../components/TheHeader/index";

// Custom Error Page

// A 404 page may be accessed very often.
// Server-rendering an error page for every visit increases the load of the Next.js server.
// This can result in increased costs and slow experiences.

// To avoid the above pitfalls, Next.js provides
// a static 404 page by default without having to add any additional files.

const __404: React.FunctionComponent = () => {
  return (
    <>
      <Meta
        titleShort="Page unavailable"
        titleLong="LIGHTFILMS. Page unavailable"
        description="LIGHTFILMS. Page unavailable"
        url="https://lightfilms-ssandry.vercel.app/404"
        keywords="LIGHTFILMS, Page unavailable"
      />
      <TheHeader />
      <div className="custom404">
        <section>
          <h1>404</h1>
        </section>
      </div>
    </>
  );
};

export default __404;
