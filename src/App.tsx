import * as React from "react";
import api from "./api";
import Results from "./Results";
import rickFace from "./rick-face.png";
import Search from "./Search";

import "./App.css";

interface IAppState {
  info: object;
  results: any[];
  query?: string;
  resource: string;
  searched: boolean;
  loading: boolean;
};

class App extends React.Component<any, IAppState> {
  public constructor(props: any) {
    super(props);
    this.state = {
      info: {},
      loading: false,
      query: undefined,
      resource: "character",
      results: [],
      searched: false
    };
  }

  public onQueryChange = (event: any) => {
      this.setState({
        query: event.target.value
      });
  }

  public onResourceChange = (event: any) => {
    this.setState({
      resource: event.target.value,
      results: []
    });
  }

  public searchAPI = ():any => {
    const { query = "", resource } = this.state;
    this.setState({
      loading: true,
      searched: true
    });
    return api.search(resource, query)
      .then(({ info, results }) =>
        this.setState({
          info,
          loading: false,
          results
        })
    );
  }

  public render() {
    const {
      info,
      loading,
      searched,
      resource,
      results
    } = this.state;

    return (
      <div className="app">
        <header className="app-header">
          <img src={rickFace} className="app-logo" alt="logo" />
          <h1>The Rick and Morty API</h1>
          <h3>Continuing the search for Sechuan sauce</h3>
        </header>
        <Search onSearch={this.searchAPI} onQueryChange={this.onQueryChange} onResourceChange={this.onResourceChange} />
        <Results resource={resource} loading={loading} searched={searched} results={results} info={info} />
      </div>
    );
  }
}

export default App;
