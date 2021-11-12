interface Props {
  name: string | null;
  restart(): void;
}

const Finished = (props: Props) => {
  const { name, restart } = props;
  return (
    <div className= "main">
      <div>
        <h3>
          {name && `Player ${name} won the game`}
          {!name && "It's a tie "}
        </h3>
        <div className="button-main">
          <button className="start-button" onClick={restart}>Start Again</button>
        </div>
      </div>
    </div>
  );
};

export default Finished;
