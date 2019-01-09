import React, { Component } from 'react';

class CountryFactory extends Component {
 
  constructor(props) {
    super(props);
    this.state = { labels: [], countries: [], msg: "" };
  }
  async componentDidMount() {
    const labels = await fetch("http://localhost:3333/labels").then(res => res.json());
    const countries = await fetch("http://localhost:3333/countries").then(res => res.json());
    this.setState({ labels: labels, countries: countries });
  }
   getLabels = () => {
     return this.labels;
   }
   
   getCountries = () => {
     return this.countries;
   }
}

export default new CountryFactory();