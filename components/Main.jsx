import React from "react";
import Search from "./Search";

import algoliasearch from "algoliasearch/lite";
import { InstantSearch } from "react-instantsearch-hooks";

const searchClient = algoliasearch(
  "26QDFHNWBW",
  "d6fb1433c39e6efd876e4c40815363db"
);

const INDEX_NAME = "doc_search_nextjs_update";
const Main = ({ hideSearchHandler }) => {
  return (
    <>
      <InstantSearch
        searchClient={searchClient}
        indexName={INDEX_NAME}
        suppressExperimentalWarning
      >
        <Search hideSearchHandler={hideSearchHandler} />
      </InstantSearch>
    </>
  );
};

export default Main;
