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
  const cta = () => {
    setShowTable(true);
    document.getElementById("SearchBar").scrollIntoView();
    setTimeout(() => {
      document.querySelector("#SearchBar input").select();
    }, 10);
  };
  return (
    <div>
      <main className="">
        <div className="p-4">
          <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
            <span className="">Brisbane free </span>
            <span className="text-green-600">native plants</span>
            <span className=""> program</span>
          </h1>
          <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:mx-auto md:mt-5 md:text-xl lg:mx-1">
            Brisbane City Council offers a variety of plants through the Free
            Native Plants Program, suitable for all garden types and sizes.
            Descriptions, growing conditions and fauna attracting information
            will help you choose the plants most suitable for your garden. Every
            plant adds to our city's urban forest, supports our unique wildlife
            and makes Brisbane cleaner, greener and more sustainable.
          </p>
          <div className="mt-5 sm:mt-8 sm:flex">
            <div className="rounded-md shadow">
              <button
                onClick={() => cta()}
                className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-green-600 hover:bg-green-700 md:py-4 md:text-lg md:px-10"
              >
                Find a plant
              </button>
            </div>
            <div className="mt-3 sm:mt-0 sm:ml-3">
              <a
                href="https://www.brisbane.qld.gov.au/clean-and-green/green-home-and-community/sustainable-gardening/free-native-plants-program"
                className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-green-700 bg-green-100 hover:bg-green-200 md:py-4 md:text-lg md:px-10"
              >
                Learn More
              </a>
            </div>
          </div>
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
  const onChangeFilters = (e) => {
    console.log("....");
  };
  return (
    <div className="SearchBar p-4" id="SearchBar">
      <div>
        <div className="mt-1 relative rounded-md shadow-sm">
          <input
            type="text"
            name="search"
            id="search"
            className="text-2xl focus:ring-green-500 focus:border-green-500 block w-full pl-2 pr-2 border-gray-300 rounded-sm"
            placeholder="Search plants..."
            onChange={onChange}
          />
        </div>
        <div hidden>
          <label>
            <input
              type="checkbox"
              value="Tufting plants and grasses"
              onChange={onChangeFilters}
            />
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
      <div
        className={classNames({
          "overflow-hidden": !showTable,
          "h-1": !showTable,
        })}
      >
        <div className={classNames({ invisible: !showTable, x: true })}>
          <SearchBar></SearchBar>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 lg:grid-rows-3 gap-4 ">
            {data
              .filter(
                (d) =>
                  JSON.stringify(d).toLowerCase().indexOf(searchTerm) !== -1
              )
              .map((d) => (
                <Card item={d} key={d.index}></Card>
              ))}
          </div>
          {/* {selected && <Card item={selected}></Card>} */}
        </div>
      </div>
    </div>
  );
}

export default App;
