import { gql } from "@apollo/client";

export const ALL_PERSON_FIELDS = {
  fragment: gql`
    fragment PersonFragment on Person {
      id
      name
      title
      countries
      imgs
      type
      briefAbout
      about {
        mostPopularFilm {
          h3
          h6top
          h6bot
          id
          img
        }
        paragraphs
      }
      filmography {
        h3
        h6top
        h6bot
        id
        img
      }
      yearsPopular
    }
  `,
};

export const ALL_FILM_FIELDS = {
  fragment: gql`
    fragment FilmFragment on Film {
      id
      title
      coverIMG
      producedBy
      genres
      countries
      year
      producer {
        h3
        h6top
        h6bot
        id
        imgs
      }
      collage
      briefAbout
      about {
        img
        paragraphs
      }
      acters {
        h3
        h6top
        h6bot
        id
        imgs
      }
    }
  `,
};

export const ALL_TIME_FIELDS = {
  fragment: gql`
    fragment TimeFragment on Time {
      id
      title
      sections {
        title
        p
      }
      bestMovies {
        h3
        h6top
        h6bot
        id
        img
      }
    }
  `,
};
