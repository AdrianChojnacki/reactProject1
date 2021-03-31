const OrderForm = (props) => {
  const { change, submit, checked } = props;
  return (
    <form onSubmit={submit}>
      <input type="checkbox" id="age" onChange={change} checked={checked} />
      <label htmlFor="age">Mam conajmniej 16 lat</label>
      <br />
      <button type="submit">Kup bilet</button>
    </form>
  );
};

const ValidationMessage = (props) => {
  const { txt } = props;
  return <p>{txt}</p>;
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

  displayMessage = () => {
    if (this.state.isFormSubmitted) {
      if (this.state.isConfirmed) {
        return <ValidationMessage txt="Możesz obejrzeć film. Zapraszamy!" />;
      } else {
        return <ValidationMessage txt="Nie możesz obejrzeć tego filmu, jeśli nie masz skończonych 16 lat." />;
      }
    } else {
      return null;
    }
  };

  render() {
    const { handleChange, handleSubmit } = this;
    const { isConfirmed } = this.state;

    return (
      <>
        <h1>Kup bilet na horror roku!</h1>
        <OrderForm change={handleChange} submit={handleSubmit} checked={isConfirmed} />
        {this.displayMessage()}
      </>
    );
  }
}

ReactDOM.render(<TicketShop />, document.querySelector(`#root`));
