import { GetStaticProps } from "next";
import { ApolloClient, InMemoryCache } from "@apollo/client";
import { useState } from "react";
import { GET_PRODUCERS } from "../graphql/queries";
import { IPersonCard } from "../interfaces";
import { __QLPersons } from "../assets/utils/__ql";
import { __filterPersons } from "../assets/utils/__filter";
import DefaultLayout from "../layouts";
import Meta from "../components/Meta";
import Chooser from "../components/Chooser";
import Grid from "../components/Grid";
import Card from "../components/Card";

interface ProducersPageProps {
  producers: IPersonCard[];
}

const ProducersPage: React.FC<ProducersPageProps> = ({ producers }) => {
  const [country, setCountry] = useState("all");
  const [year, setYear] = useState("all");

  return (
    <DefaultLayout>
      <Meta
        titleShort="LIGHTFILMS : Producers"
        titleLong="Read biographies of the greatest movie directors"
        description={`The best producers, directors of the last century. Read the biography of the best directors, about their works. LIGHTFILMS. Biographies of directors. ${producers[0].name}, ${producers[1].name}, ${producers[2].name} `}
        url="https://lightfilms-ssandry.vercel.app/producers"
        keywords={`The best acters, directors, producers of the last century, biography of the best producers, LIGHTFILMS, Biographies of directors. ${producers[0].name}, ${producers[1].name}, ${producers[2].name} `}
      />
      <Chooser h1="PRODUCERS">
        <ul id="countrys">
          <li
            onClick={() => {
              setCountry("all");
            }}
            className={country === "all" ? "sq sq_bright" : "sq"}
          />
          {["Japan", "France", "Russia", "USA", "British", "Germany"].map((element) => {
            return (
              <li
                onClick={() => {
                  setCountry(element);
                }}
                className={country === element ? "bright" : ""}
                key={element}
              >
                {element}
              </li>
            );
          })}
        </ul>
        <ul id="years">
          <li
            onClick={() => {
              setYear("all");
            }}
            className={year === "all" ? "sq sq_bright" : "sq"}
          ></li>
          <li
            onClick={() => {
              setYear("1950");
            }}
            className={year === "1950" ? "bright" : ""}
          >
            50’s
          </li>
          <li
            onClick={() => {
              setYear("1960");
            }}
            className={year === "1960" ? "bright" : ""}
          >
            60’s
          </li>
          <li
            onClick={() => {
              setYear("1970");
            }}
            className={year === "1970" ? "bright" : ""}
          >
            70’s
          </li>
          <li
            onClick={() => {
              setYear("1980");
            }}
            className={year === "1980" ? "bright" : ""}
          >
            80’s
          </li>
        </ul>
      </Chooser>
      <Grid>
        {__filterPersons([country, year], producers).map((producer) => {
          return (
            <Card
              key={producer.id}
              HREF={`/person/[id]`}
              AS={`/person/${producer.id}`}
              ALT={`Producer ${producer.name}, ${producer.countries[0]}, ${producer.yearsPopular[0]}`}
              h3={producer.name}
              h6bot={producer.countries[0]}
              h6top={producer.title}
              img={producer.imgs[0]}
              img2={producer.imgs[1]}
              type="double"
            />
          );
        })}
      </Grid>
    </DefaultLayout>
  );
};

export const getStaticProps: GetStaticProps = async (ctx) => {
  if (process.env.MODE === "development") {
    try {
      const client = new ApolloClient({
        uri: process.env.DEV_GRAPHQL_SERVER,
        cache: new InMemoryCache(),
      });

      const { data } = await client.query({ query: GET_PRODUCERS });

      return {
        props: {
          producers: data.getProducers,
        },
      };
    } catch (err) {
      throw new Error(`Error: ${err}`);
    }
  } else if (process.env.MODE === "production") {
    try {
      const client = new ApolloClient({
        uri: process.env.PROD_GRAPHQL_SERVER,
        cache: new InMemoryCache(),
      });

      const { data } = await client.query({ query: GET_PRODUCERS });

      return {
        props: {
          producers: data.getProducers,
        },
      };
    } catch (err) {
      throw new Error(`Error: ${err}`);
    }
  } else {
    throw new SyntaxError(`The MODE is written incorrectly. Check the syntax in .env`);
  }
};

export default ProducersPage;
