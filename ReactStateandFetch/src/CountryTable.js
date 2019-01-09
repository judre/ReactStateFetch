import React, { Component } from "react";

class CountryTable extends Component {
  constructor(props) {
    super(props);
    this.state = { labels: [], countries: [], msg: "" };
  }
  async componentDidMount() {
    const labels = await fetch("http://localhost:3333/labels").then(res => res.json());
    const countries = await fetch("http://localhost:3333/countries").then(res => res.json());
    this.setState({ labels: labels, countries: countries });
    console.log(this.state.labels);
    console.log(this.state.countries);

  }
  render() {
    const labelsHeaders = (
      <tr>
        <th>{this.state.labels[0]}</th>
        <th>{this.state.labels[1]}</th>
        <th>{this.state.labels[2]}</th>
        <th>{this.state.labels[3]}</th>
        <th>{this.state.labels[4]}</th>
        <th>{this.state.labels[5]}</th>
        <th>{this.state.labels[6]}</th>
        <th>{this.state.labels[7]}</th>
        <th>{this.state.labels[8]}</th>
        <th>{this.state.labels[9]}</th>
      </tr>);
      const countriesHeaders = this.state.countries.map((country, index) =>
      <tr key={index}>
        <td>{country.name}</td>
        <td>{country.capital}</td>
        <td>{country.region}</td>
        <td>{country.population}</td>
        <td>{country.area}</td>
        <td>{country.timezones}</td>
        <td>{country.borders}</td>
        <td>{country.topLevelDomain}</td>
        <td>{country.currencies}</td>
        <td>{country.languages}</td>
      </tr>);
      
      return (
        <table className="table">
          <thead>
          {labelsHeaders}
          </thead>
          
          <tbody>
           {countriesHeaders}
          </tbody>
        </table>
      );
    }
  }
export default CountryTable;