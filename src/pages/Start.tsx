import { useState, useMemo, FormEvent } from "react";
import './Start.css'

interface Props {
  handleStart(players: string[]): void;
}

const Start = (props: Props) => {
  const { handleStart } = props;
  const [players, setPlayers] = useState(["", ""]);
  const handleInput = (event: FormEvent<HTMLInputElement>, index: number) => {
    const newPlayers = [...players];
    newPlayers.splice(index, 1, event.currentTarget.value);
    setPlayers(newPlayers);
  };
  const canStart = useMemo(
    () => players.every((player) => player && player.length > 0),
    [players]
  );
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!canStart) return;
    handleStart(players);
  };

  return (
      <form onSubmit={handleSubmit}>
          <div className="main">
              <div>
                <h1>Tic Toc Toe</h1>
                <div>
                  <input value={players[0]}
                   type="text" placeholder="Player1 name" 
                   className="name"
                   onInput={(e) => handleInput(e, 0)}/>
                </div>

                <div className="second-input">
                  <input value={players[1]} type="text" placeholder="Player2 name" 
                  className="name" onInput={(e) => handleInput(e, 1)}/>
                </div>

              <div className="login-button">
                  <button className= "start-button" type="submit" >Start</button>
              </div>

            </div>
          </div>
      </form>
  );
};
export default Start;
