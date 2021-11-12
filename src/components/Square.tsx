interface Props {
  index: number,
  value: string,
  handleClick(index: number): void,
}

const Square = (props: Props) => {
  const { index, value, handleClick } = props;
  const styles = {
    button: {
      width: "100px",
      height: "100px",
      fontSize: "46px",
      backgroundColor: "#ffffff",
      color: "#6f6d41",
      cursor: "pointer"
    }
  };
  
  return (
    <button style={styles.button} onClick={() => handleClick(index)}>
      {value}
    </button>
  )
}
export default Square;
