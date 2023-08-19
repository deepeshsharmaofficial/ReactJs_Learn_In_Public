import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <form
        style={styles.form}
      >
        <h3 style={styles.h3}>Sign Up</h3>
        <input style={styles.pad} placeholder="Username" />
        <input style={styles.pad} placeholder="Email" />
        <input style={styles.pad} placeholder="Password" />
        <div
          style={styles.div}
        >
          <button
            style={styles.btn}
          >
            Cancel
          </button>
          <button
            style={styles.btn}
          >
            Login
          </button>
        </div>
      </form>
    </div>
  );
}

const styles = {
  form : {
    width: "60%",
    margin: "50px auto",
    display: "flex",
    flexDirection: "column",
    gap: 20
  },

  btn : {
      outline: "none",
      paddingBlock: 5,
      width: 100,
      backgroundColor: "red",
      color: "white",
      cursor: "pointer"
  },

  div : {
    display: "flex",
    justifyContent: "center",
    gap: 20
  },

  pad : { padding: 10 },

  h3 : { fontSize: "2rem", letterSpacing: 2 }
  
}