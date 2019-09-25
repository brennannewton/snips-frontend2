import React from 'react';

export default class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      password: '',
    };
  }

  handleSubmit = event => {
    event.preventDefault();
    this.props.onLogin(this.state);
  };

  handleChange = event => {
    const { target } = event;
    const { value } = target;
    const { name } = target;

    this.setState({
      [name]: value,
    });
  };

  render() {
    return (
      <form id="login-form" onSubmit={this.handleSubmit}>
        <h2>Log in</h2>
        <label>Username</label>
        <input
          type="text"
          name="name"
          id="name"
          value={this.state.name}
          onChange={this.handleChange}
        />
        <label>Password</label>
        <input
          type="text"
          name="password"
          id="password"
          value={this.state.password}
          onChange={this.handleChange}
        />
        <button type="submit">Log in</button>
      </form>
    );
  }
}
