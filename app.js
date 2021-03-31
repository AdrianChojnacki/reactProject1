const ValidationMessage = (props) => {
  const { txt } = props;
  return <p>{txt}</p>;
};

const displayMessage = (isConfirmed, isFormSubmitted) => {
  if (isFormSubmitted) {
    if (isConfirmed) {
      return <ValidationMessage txt="Możesz obejrzeć film. Zapraszamy!" />;
    } else {
      return <ValidationMessage txt="Nie możesz obejrzeć tego filmu, jeśli nie masz skończonych 16 lat." />;
    }
  } else {
    return null;
  }
};

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

  render() {
    const { isConfirmed, isFormSubmitted } = this.state;

    return (
      <>
        <h1>Kup bilet na horror roku!</h1>
        <form onSubmit={this.handleSubmit}>
          <input type="checkbox" id="age" onChange={this.handleChange} checked={isConfirmed} />
          <label htmlFor="age">Mam conajmniej 16 lat</label>
          <br />
          <button type="submit">Kup bilet</button>
        </form>
        {displayMessage(isConfirmed, isFormSubmitted)}
      </>
    );
  }
}

ReactDOM.render(<TicketShop />, document.querySelector(`#root`));
