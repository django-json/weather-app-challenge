import React, { Component, Fragment } from "react";
import moment from "moment";

import "./App.css";

import SideBar from "./components/sidebar/sidebar.component";
import Main from "./components/main/main.component";
import Error from "./components/error/error.component";
import Spinner from "./components/spinner/spinner.component";

import {
  getCurrentDate,
  setSession,
  checkItemFromSessionStorage,
} from "./utils/utils";

class App extends Component {
  constructor() {
    super();

    this.state = {
      isOpenSearchNavigationDrawer: false,
      searchResultsVisibility: false,
      searchValue: "",
      searchErrorMessage: "",
      cities: [],
      cityWeather: null,
      cityTodaysWeather: null,
      cityForecastWeather: [],
      currentTemperatureUnit: "celsius",
      error: "",
    };

    this.openSearchNavigationDrawer = this.openSearchNavigationDrawer.bind(
      this
    );
    this.closeSearchNavigationDrawer = this.closeSearchNavigationDrawer.bind(
      this
    );
    this.handleSearchChange = this.handleSearchChange.bind(this);
    this.handleSearchClick = this.handleSearchClick.bind(this);
    this.handleSearchResultItemClick = this.handleSearchResultItemClick.bind(
      this
    );
    this.searchResultsVisibilityStatus = this.searchResultsVisibilityStatus.bind(
      this
    );
    this.extractWeatherFromArrayByType = this.extractWeatherFromArrayByType.bind(
      this
    );
    this.setCityWeather = this.setCityWeather.bind(this);
    this.clearInputSearchValue = this.clearInputSearchValue.bind(this);
    this.clearSearchNavigationDrawer = this.clearSearchNavigationDrawer.bind(
      this
    );
    this.toggleTemperatureUnit = this.toggleTemperatureUnit.bind(this);
    this.getUserPositionError = this.getUserPositionError.bind(this);
    this.hasError = this.hasError.bind(this);

    //API Query Methods
    this.getSearchResults = this.getSearchResults.bind(this);
    this.getWeatherByCityId = this.getWeatherByCityId.bind(this);
    this.getUserPosition = this.getUserPosition.bind(this);
    this.getUserPositionSuccess = this.getUserPositionSuccess.bind(this);
  }

  componentDidMount() {
    this.getUserPosition();
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.cityWeather !== this.state.cityWeather) {
      const cityTodaysWeather = this.extractWeatherFromArrayByType(
        this.state.cityWeather,
        "today"
      );
      const cityForecastWeather = this.extractWeatherFromArrayByType(
        this.state.cityWeather,
        "forecast"
      );
      this.setState({ cityTodaysWeather, cityForecastWeather });
    }
  }

  getUserPosition() {
    navigator.geolocation.getCurrentPosition(
      this.getUserPositionSuccess,
      this.getUserPositionError
    );
  }

  getUserPositionSuccess(position) {
    fetch(
      `https://cors-anywhere.herokuapp.com/https://www.metaweather.com/api/location/search/?lattlong=${position.coords.latitude},${position.coords.longitude}`
    )
      .then((res) => res.json())
      .then(async (location) => {
        const cityWeather = await this.getWeatherByCityId(location[0].woeid);
        this.setCityWeather(cityWeather);
      })
      .catch((err) => {
        this.hasError(err);
      });
  }

  async getUserPositionError(error) {
    const DEFAULT_CITY_LONDON_ID = 44418;
    const cityWeather = await this.getWeatherByCityId(DEFAULT_CITY_LONDON_ID);
    this.setCityWeather(cityWeather);
  }

  /* Params:
      "data": raw weather data
      "type": today and forecast
  */
  extractWeatherFromArrayByType(data, type) {
    const { consolidated_weather } = data;
    switch (type) {
      case "today":
        const todaysWeather = consolidated_weather.find(
          (weather) =>
            moment(weather.applicable_date).format("YYYY-MM-DD") ===
            getCurrentDate("YYYY-MM-DD")
        );
        const cityTitle = this.state.cityWeather.title;

        return { ...todaysWeather, cityTitle };
      case "forecast":
        return consolidated_weather.filter(
          (weather) =>
            moment(weather.applicable_date).format("YYYY-MM-DD") !==
            getCurrentDate("YYYY-MM-DD")
        );
      default:
        return;
    }
  }

  openSearchNavigationDrawer() {
    this.setState({ isOpenSearchNavigationDrawer: true });
  }

  closeSearchNavigationDrawer() {
    this.setState({ isOpenSearchNavigationDrawer: false });
  }

  handleSearchChange(event) {
    const searchValue = event.target.value;
    this.setState({ searchValue });
  }

  async handleSearchClick() {
    const { searchValue, searchResultsVisibility } = this.state;
    this.setState({ cities: await this.getSearchResults(searchValue) }, () => {
      if (!searchResultsVisibility) {
        this.searchResultsVisibilityStatus(true);
      }
    });
  }

  async handleSearchResultItemClick(cityId) {
    const cityWeather = await this.getWeatherByCityId(cityId);
    this.setCityWeather(cityWeather);
  }

  getSearchResults(searchValue) {
    const item = checkItemFromSessionStorage(searchValue);
    if (!item) {
      return fetch(
        `https://cors-anywhere.herokuapp.com/https://www.metaweather.com/api/location/search/?query=${searchValue.toLowerCase()}`
      )
        .then((res) => res.json())
        .then((data) => {
          setSession(searchValue, data);
          return data;
        })
        .catch((err) => {
          this.hasError(err);
        });
    } else {
      return item;
    }
  }

  getWeatherByCityId(id) {
    const item = checkItemFromSessionStorage(id);
    if (!item) {
      return fetch(
        `https://cors-anywhere.herokuapp.com/https://www.metaweather.com/api/location/${id}/`
      )
        .then((res) => res.json())
        .then((data) => {
          setSession(id, data);
          return data;
        })
        .catch((err) => {
          this.hasError(err);
        });
    } else {
      return item;
    }
  }

  setCityWeather(cityWeather) {
    this.setState({ cityWeather }, () => {
      if (this.state.isOpenSearchNavigationDrawer) {
        this.clearSearchNavigationDrawer();
      }
    });
  }

  searchResultsVisibilityStatus(status) {
    this.setState({ searchResultsVisibility: status });
  }

  clearInputSearchValue() {
    this.setState({ searchValue: "" });
  }

  clearSearchNavigationDrawer() {
    this.closeSearchNavigationDrawer();

    const { searchResultsVisibility, searchValue } = this.state;
    searchResultsVisibility && this.searchResultsVisibilityStatus(false);
    searchValue && this.clearInputSearchValue();
  }

  toggleTemperatureUnit(currentTemperatureUnit) {
    this.setState({ currentTemperatureUnit });
  }

  hasError(error) {
    this.setState({ error });
  }

  render() {
    const {
      isOpenSearchNavigationDrawer,
      searchValue,
      searchResultsVisibility,
      cities,
      cityTodaysWeather,
      cityForecastWeather,
      cityWeather,
      currentTemperatureUnit,
      error,
    } = this.state;
    return (
      <div className="weather-app">
        {!error ? (
          cityWeather && cityTodaysWeather && cityForecastWeather ? (
            <Fragment>
              <SideBar
                isOpenSearchNavigationDrawer={isOpenSearchNavigationDrawer}
                searchValue={searchValue}
                searchResultsVisibility={searchResultsVisibility}
                cityTodaysWeather={cityTodaysWeather}
                currentTemperatureUnit={currentTemperatureUnit}
                getUserPosition={this.getUserPosition}
                openSearchNavigationDrawer={this.openSearchNavigationDrawer}
                clearSearchNavigationDrawer={this.clearSearchNavigationDrawer}
                handleSearchChange={this.handleSearchChange}
                handleSearchClick={this.handleSearchClick}
                handleSearchResultItemClick={this.handleSearchResultItemClick}
                cities={cities}
              />
              <Main
                cityTodaysWeather={cityTodaysWeather}
                cityForecastWeather={cityForecastWeather}
                currentTemperatureUnit={currentTemperatureUnit}
                toggleTemperatureUnit={this.toggleTemperatureUnit}
              />
            </Fragment>
          ) : (
            <Spinner />
          )
        ) : (
          <Error />
        )}
      </div>
    );
  }
}

export default App;
