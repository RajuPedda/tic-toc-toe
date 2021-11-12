import Game from "./pages/Game";
import Start from "./pages/Start";
import Finished from "./pages/Finished";
import gameHook from "./hooks/useTicTacToe";

const App = () => {
  const game = gameHook();

  const styles = {
    appContainer: {
      display: 'flex',
      height: '100vh',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#53565A',
    }
  }

  return (
    <div style={styles.appContainer}>
      {game.status === "readyToStart" && <Start handleStart={game.handleStart} />}
     
      {game.status === "started" && (
        <Game board={game.board} handleClick={game.handleClick} />
      )}

      {game.status === "finished" && (
        <Finished name={game.winner} restart={game.handleRestart} />
      )}
    </div>
  );
};
export default App;
