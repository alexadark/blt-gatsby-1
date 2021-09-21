const allWpExperienceQuery = `
  {
    allWpExperience {
      nodes {
     experienceDataAttr {
          city
          latitudeOfLocation1
          latitudeOfLocation2
          latitudeOfLocation3
          longitudeOfLocation1
          longitudeOfLocation2
          longitudeOfLocation3
          profile
          region
          priceFrom
          minAge
          whenIsIt
        }
        id
        title
        uri
        date
        nodeType
        featuredImage {
          node {
            altText
            sourceUrl
            caption
            description
            localFile {
              childImageSharp {
                gatsbyImageData(
                  # width: 940
                  # height: 626
                  quality: 80
                  aspectRatio: 1.5
                  layout: CONSTRAINED
                  placeholder: BLURRED
                )
                original {
                  height
                  width
                  src
                }
              }
            }
          }
        }
        commonDataAttributes {
          textCountry
          textContinent
          standfirst
        }
        bestTimes {
          nodes {
            name
          }
        }
        settings {
          nodes {
            name
          }
        }
        factoryThemes {
          nodes {
            name
          }
        }
        especiallyFors {
          nodes {
            name
          }
        }
        whenAvailables {
          nodes {
            name
          }
        }
        experienceTypes {
          nodes {
            name
          }
        }
        attractionTypes {
          nodes {
            name
          }
        }
        activityTypes {
          nodes {
            name
          }
        }
        eventTypes {
          nodes {
            name
          }
        }
        priceRanges {
          nodes {
            name
          }
        }
        ageGroups {
          nodes {
            name
          }
        }
      }
    }
  }
`;
const allWpDestinationQuery = `
  {
    allWpDestination {
      nodes {
       destinationDataAttributes {
          latitudeOfLocation1
          longitudeOfLocation1
          region
        }
        id
        title
        uri
        date
        nodeType
        featuredImage {
          node {
            altText
            sourceUrl
            caption
            description
            localFile {
              childImageSharp {
                gatsbyImageData(
                  # width: 940
                  # height: 626
                  quality: 80
                  aspectRatio: 1.5
                  layout: CONSTRAINED
                  placeholder: BLURRED
                )
                original {
                  height
                  width
                  src
                }
              }
            }
          }
        }
        commonDataAttributes {
          textCountry
          textContinent
          standfirst
        }
        bestTimes {
          nodes {
            name
          }
        }
        settings {
          nodes {
            name
          }
        }
        especiallyFors {
          nodes {
            name
          }
        }
      }
    }
  }
`;
const allWpPlaceToStayQuery = `
  {
    allWpPlaceToStay {
      nodes {
        ptsDataAttr {
          city
          latitudeOfLocation1
          longitudeOfLocation1
          priceCheckingLinks {
            url
            logo {
              sourceUrl
              title
              altText
            }
          }
          website
          starRating
        }
        id
        title
        uri
        date
        nodeType
        featuredImage {
          node {
            altText
            sourceUrl
            caption
            description
            localFile {
              childImageSharp {
                gatsbyImageData(
                  # width: 940
                  # height: 626
                  quality: 80
                  aspectRatio: 1.5
                  layout: CONSTRAINED
                  placeholder: BLURRED
                )
                original {
                  height
                  width
                  src
                }
              }
            }
          }
        }
        commonDataAttributes {
          textCountry
          textContinent
          standfirst
        }
        bestTimes {
          nodes {
            name
          }
        }
        settings {
          nodes {
            name
          }
        }
        factoryThemes {
          nodes {
            name
          }
        }
        especiallyFors {
          nodes {
            name
          }
        }
        hotelBrands {
          nodes {
            name
          }
        }
        standards {
          nodes {
            name
          }
        }
        accommodationTypes {
          nodes {
            name
          }
        }
        roomTypes {
          nodes {
            name
          }
        }
        hotelFacilities {
          nodes {
            name
          }
        }
        forFamilies {
          nodes {
            name
          }
        }
        skiFacilities {
          nodes {
            name
          }
        }
        priceRangePounds {
          nodes {
            name
          }
        }
        allInclusives {
          nodes {
            name
          }
        }
      }
    }
  }
`;
const allWpRoundUpQuery = `
  {
    allWpRoundUp {
      nodes {
        id
        title
        uri
        date
        nodeType
        featuredImage {
          node {
            altText
            sourceUrl
            caption
            description
            localFile {
              childImageSharp {
                gatsbyImageData(
                  # width: 940
                  # height: 626
                  quality: 80
                  aspectRatio: 1.5
                  layout: CONSTRAINED
                  placeholder: BLURRED
                )
                original {
                  height
                  width
                  src
                }
              }
            }
          }
        }
        commonDataAttributes {
          textCountry
          textContinent
          standfirst
        }
        bestTimes {
          nodes {
            name
          }
        }
        settings {
          nodes {
            name
          }
        }
        factoryThemes {
          nodes {
            name
          }
        }
        especiallyFors {
          nodes {
            name
          }
        }
        recommendationTypes {
          nodes {
            name
          }
        }
      }
    }
  }
`;
const allWpItineraryQuery = `
  {
    allWpItinerary {
      nodes {
        itineraryDataAttributes {
          latitudeOfLocation1
          longitudeOfLocation1
          minAge
        }
        id
        title
        uri
        date
        nodeType
        featuredImage {
          node {
            altText
            sourceUrl
            caption
            description
            localFile {
              childImageSharp {
                gatsbyImageData(
                  # width: 940
                  # height: 626
                  quality: 80
                  aspectRatio: 1.5
                  layout: CONSTRAINED
                  placeholder: BLURRED
                )
                original {
                  height
                  width
                  src
                }
              }
            }
          }
        }
        commonDataAttributes {
          textCountry
          textContinent
          standfirst
        }
        bestTimes {
          nodes {
            name
          }
        }
        settings {
          nodes {
            name
          }
        }
        factoryThemes {
          nodes {
            name
          }
        }
        especiallyFors {
          nodes {
            name
          }
        }
      }
    }
  }
`;

const queries = [
  {
    query: allWpItineraryQuery,
    transformer: ({ data }) => {
      return data.allWpItinerary.nodes.map((item) => {
        return {
          ...item,
          date_timestamp: new Date(item.date).getTime(),
          bestTimes: mergeArray(item.bestTimes),
          settings: mergeArray(item.settings),
          especiallyFors: mergeArray(item.especiallyFors),
          factoryThemes: mergeArray(item.factoryThemes),
        };
      });
    },
    indexName: `Alldata`,
  },
  {
    query: allWpRoundUpQuery,
    transformer: ({ data }) => {
      return data.allWpRoundUp.nodes.map((item) => {
        return {
          ...item,
          date_timestamp: new Date(item.date).getTime(),
          bestTimes: mergeArray(item.bestTimes),
          settings: mergeArray(item.settings),
          especiallyFors: mergeArray(item.especiallyFors),
          factoryThemes: mergeArray(item.factoryThemes),
          recommendationTypes: mergeArray(item.recommendationTypes),
        };
      });
    },
    indexName: `Alldata`,
  },
  {
    query: allWpPlaceToStayQuery,
    transformer: ({ data }) => {
      return data.allWpPlaceToStay.nodes.map((item) => {
        return {
          ...item,
          date_timestamp: new Date(item.date).getTime(),
          bestTimes: mergeArray(item.bestTimes),
          settings: mergeArray(item.settings),
          especiallyFors: mergeArray(item.especiallyFors),
          factoryThemes: mergeArray(item.factoryThemes),
          hotelBrands: mergeArray(item.hotelBrands),
          standards: mergeArray(item.standards),
          accommodationTypes: mergeArray(item.accommodationTypes),
          roomTypes: mergeArray(item.roomTypes),
          hotelFacilities: mergeArray(item.hotelFacilities),
          forFamilies: mergeArray(item.forFamilies),
          skiFacilities: mergeArray(item.skiFacilities),
          priceRangePounds: mergeArray(item.priceRangePounds),
          allInclusives: mergeArray(item.allInclusives),
        };
      });
    },
    indexName: `Alldata`,
  },
  {
    query: allWpDestinationQuery,
    transformer: ({ data }) => {
      return data.allWpDestination.nodes.map((item) => {
        return {
          ...item,
          date_timestamp: new Date(item.date).getTime(),
          bestTimes: mergeArray(item.bestTimes),
          settings: mergeArray(item.settings),
          especiallyFors: mergeArray(item.especiallyFors),
        };
      });
    },
    indexName: `Alldata`,
  },
  {
    query: allWpExperienceQuery,
    transformer: ({ data }) => {
      return data.allWpExperience.nodes.map((item) => {
        return {
          ...item,
          date_timestamp: new Date(item.date).getTime(),
          bestTimes: mergeArray(item.bestTimes),
          settings: mergeArray(item.settings),
          factoryThemes: mergeArray(item.factoryThemes),
          especiallyFors: mergeArray(item.especiallyFors),
          whenAvailables: mergeArray(item.whenAvailables),
          experienceTypes: mergeArray(item.experienceTypes),
          attractionTypes: mergeArray(item.attractionTypes),
          activityTypes: mergeArray(item.activityTypes),
          eventTypes: mergeArray(item.eventTypes),
          priceRanges: mergeArray(item.priceRanges),
          ageGroups: mergeArray(item.ageGroups),
        };
      });
    },
    indexName: `Alldata`,
  },
];
// console.log(queries);
module.exports = queries;

const mergeArray = (items) => {
  const isArray = Array.isArray(items.nodes);
  if (!isArray) return [];
  return items.nodes.map((item) => item.name);
};
