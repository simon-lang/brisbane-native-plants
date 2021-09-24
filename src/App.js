// @format

import "./App.css";
import React from "react";
import classNames from "classnames";
import data from "./data.json";
import { createGlobalState } from "react-hooks-global-state";

const initialState = {
  showTable: false,
  searchTerm: "",
};
const { useGlobalState } = createGlobalState(initialState);

data.forEach((d, i) => {
  d.index = i;
});

function Hero() {
  const [showTable, setShowTable] = useGlobalState("showTable");
  return (
    <div>
      <main class="">
        <div class="sm:text-center lg:text-left">
          <h1 class="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
            <span class="block xl:inline">Brisbane free </span>
            <span class="block text-green-600 xl:inline">native plants</span>
            <span class="block xl:inline"> program</span>
          </h1>
          <p class="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-1">
            Brisbane City Council offers a variety of plants through the Free
            Native Plants Program, suitable for all garden types and sizes.
            Descriptions, growing conditions and fauna attracting information
            will help you choose the plants most suitable for your garden. Every
            plant adds to our city's urban forest, supports our unique wildlife
            and makes Brisbane cleaner, greener and more sustainable.
          </p>
          {!showTable && (
            <div class="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
              <div class="rounded-md shadow">
                <button
                  onClick={() => setShowTable(true)}
                  class="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-green-600 hover:bg-green-700 md:py-4 md:text-lg md:px-10"
                >
                  Find a plant
                </button>
              </div>
              <div class="mt-3 sm:mt-0 sm:ml-3">
                <a
                  href="https://www.brisbane.qld.gov.au/clean-and-green/green-home-and-community/sustainable-gardening/free-native-plants-program"
                  class="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-green-700 bg-green-100 hover:bg-green-200 md:py-4 md:text-lg md:px-10"
                >
                  Learn More
                </a>
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}

function SearchBar() {
  const [, setSearchTerm] = useGlobalState("searchTerm");
  const onChange = (e) => {
    setSearchTerm(e.target.value);
  };
  const onChangeFilters = e => {
    console.log('....')
  }
  return (
    <div className="SearchBar">
      <div>
        <div class="mt-1 relative rounded-md shadow-sm">
          <input
            type="text"
            name="search"
            id="search"
            autofocus
            class="text-2xl focus:ring-green-500 focus:border-green-500 block w-full pl-2 pr-2 border-gray-300 rounded-sm"
            placeholder="Search plants..."
            onChange={onChange}
          />
        </div>
        <div>
          <label>
            <input type="checkbox" value="Tufting plants and grasses" onChange={ onChangeFilters } />
            Tufting plants and grasses
          </label>
        </div>
      </div>
    </div>
  );
}

function Card(props) {
  const { type, name, commonName, description, attracts, index } = props.item;
  return (
    <div className="border p-4 bg-white">
      <div className="overflow-y-hidden" style={{ height: "16rem" }}>
        <img
          src={process.env.PUBLIC_URL + "/images/plants/" + index + ".jpg"}
          alt={name}
        />
      </div>
      <div className="text-xl font-semibold">
        {commonName}(<em className="italic">{name}</em>)
      </div>
      <div className="text-lg">{type}</div>
      <div className="">{description}</div>
      Attracts {attracts}
      <div hidden>
        <small>
          <a href={"http://google.com/search?q=" + name}>Google Search</a>
        </small>
      </div>
    </div>
  );
}

function App() {
  const [showTable] = useGlobalState("showTable");
  const [searchTerm] = useGlobalState("searchTerm");

  return (
    <div className="mx-auto mt-10  max-w-7xl">
      <Hero></Hero>
      <div className={classNames({ invisible: !showTable })}>
        <SearchBar></SearchBar>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 lg:grid-rows-3 gap-4 ">
          {data
            .filter(
              (d) => JSON.stringify(d).toLowerCase().indexOf(searchTerm) !== -1
            )
            .map((d) => (
              <Card item={d}></Card>
            ))}
        </div>
        {/* {selected && <Card item={selected}></Card>} */}
      </div>
    </div>
  );
}

export default App;
