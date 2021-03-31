const PositiveMessage = () => <p>Możesz obejrzeć film. Zapraszamy!</p>;

const NegativeMessage = () => <p>Nie możesz obejrzeć tego filmu, jeśli nie masz skończonych 16 lat.</p>;

class TicketShop extends React.Component {
  state = {
    isConfirmed: false,
    isFormSubmitted: false,
  };

  handleChange = () => {
    this.setState({
      isConfirmed: !this.state.isConfirmed,
      isFormSubmitted: false,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    if (!this.state.isFormSubmitted) {
      this.setState({
        isFormSubmitted: true,
      });
    }
  };

  displayMessage = () => {
    if (this.state.isFormSubmitted) {
      if (this.state.isConfirmed) {
        return <PositiveMessage />;
      } else {
        return <NegativeMessage />;
      }
    } else {
      return null;
    }
  };

  render() {
    return (
      <>
        <h1>Kup bilet na horror roku!</h1>
        <form onSubmit={this.handleSubmit}>
          <input type="checkbox" id="age" onChange={this.handleChange} checked={this.state.isConfirmed} />
          <label htmlFor="age">Mam conajmniej 16 lat</label>
          <br />
          <button type="submit">Kup bilet</button>
        </form>
        {this.displayMessage()}
      </>
    );
  }
}

ReactDOM.render(<TicketShop />, document.querySelector(`#root`));
