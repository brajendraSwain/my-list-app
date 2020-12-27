import React from "react";
import "./App.css";
import { CardList } from "./components/card-list/card-list.component";
import { medicines } from "./data/medicines";
import { Card } from "./components/card/card.component";
import { SearchBox } from "./components/search-box/search-box.component";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      medicineList: medicines,
      searchText: ""
    };
  }
  handleChange = e => {
    this.setState({ searchText: e.target.value });
  };
  render() {
    const filteredMedicines = this.state.medicineList.filter(med =>
      med.toLowerCase().includes(this.state.searchText.toLowerCase())
    );
    return (
      <div className="app">
        <SearchBox handleChange={this.handleChange}></SearchBox>
        <CardList>
          {filteredMedicines.map(med => (
            <Card key={med}>{med}</Card>
          ))}
        </CardList>
      </div>
    );
  }
}

export default App;
