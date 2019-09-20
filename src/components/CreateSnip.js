import React from 'react';

export default class CreateSnip extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      author: 'Brennan',
      code: '',
      title: '',
      description: '',
      language: '',
    };
  }

  handleSubmit = event => {
    event.preventDefault();
    this.props.onCreate(this.state);
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
      <form id="create-snip" onSubmit={this.handleSubmit}>
        <label id="form-title">Create a Snip</label>
        <label id="title-label">Title</label>
        <label id="language-label">Language</label>
        <input
          type="text"
          name="title"
          id="title"
          value={this.state.title}
          onChange={this.handleChange}
        />
        <select
          name="language"
          id="language"
          value={this.state.language}
          onChange={this.handleChange}
        >
          <option value="" disabled selected>
            Select a language
          </option>
          <option value="javascript">JavaScript</option>
          <option value="html">HTML</option>
          <option value="css">CSS</option>
          <option value="sql">SQL</option>
        </select>
        <label id="description-label">Description</label>
        <textarea
          name="description"
          id="description"
          value={this.state.description}
          onChange={this.handleChange}
        />
        <label id="code-label">Code</label>
        <textarea
          name="code"
          id="code"
          value={this.state.code}
          onChange={this.handleChange}
        />
        <button type="submit">Create</button>
      </form>
    );
  }
}
