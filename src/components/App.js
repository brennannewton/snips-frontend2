import React from 'react';
import './App.css';
import '../css/style.css';
import axios from 'axios';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import SnipList from './SnipList';
import SearchBar from './SearchBar';
import CreateSnip from './CreateSnip';
import Home from './Home';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      snippets: [],
    };
  }

  async componentDidMount() {
    const { data } = await axios.get('http://localhost:5000/api/snippets');
    this.setState({
      snippets: data,
    });
  }

  fetchSnippets = async text => {
    const { data: snippets } = await axios.get(
      'http://localhost:5000/api/snippets'
    );
    const searchText = text.toLowerCase();
    const searchResults = snippets.filter(
      snippet =>
        snippet.title.toLowerCase().includes(searchText) ||
        snippet.description.toLowerCase().includes(searchText) ||
        snippet.code.toLowerCase().includes(searchText) ||
        snippet.language.toLowerCase().includes(searchText)
    );
    this.setState({
      snippets: searchResults,
    });
  };

  createSnip = async newData => {
    const newSnip = await axios.post(
      'http://localhost:5000/api/snippets',
      newData
    );
    const snips = this.state.snippets;
    snips.push(newSnip.data);
    this.setState({ snippets: snips });
  };

  render() {
    return (
      <Router>
        <header className="default-header">
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="about">About</Link>
              </li>
              <li>
                <Link to="snippets">Snippets</Link>
              </li>
              <li>
                <Link to="account">Account</Link>
              </li>
            </ul>
          </nav>
        </header>
        <Switch>
          <Route path="/" exact render={() => <Home />} />
          <Route path="/about" exact render={() => 'About'} />
          <Route
            path="/snippets"
            render={() => (
              <>
                <CreateSnip onCreate={this.createSnip} />
                <SearchBar onSearch={this.fetchSnippets} />
                <SnipList snippets={this.state.snippets} />
              </>
            )}
          />
          <Route path="/account" render={() => 'Account'} />
          <Route render={() => <h1>404</h1>} />
        </Switch>
      </Router>
    );
  }
}

export default App;
