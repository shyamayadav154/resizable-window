import Split from "react-split";
import "./App.css";

function App() {
  return (
    <Split
      cursor="col-resize"
      direction="vertical"
      style={{ height: "100vh" }}
      minSize={0}
      sizes={[0, 50, 50, 0]}
    >
      <div></div>
      <Split
        sizes={[0, 50, 50, 0]}
        minSize={0}
        cursor="col-resize"
        style={{ display: "flex" }}
      >
        <div></div>

        <div style={{ background: "#808080", display:'flex', justifyContent:'center', alignItems:'center' }}>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis, aut.</p>
        </div>
        <div style={{ background: "#808080",display:'flex', justifyContent:'center', alignItems:'center'  }}>
          <p style={{ background: "red" }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat, eveniet!</p>
        </div>
        <div></div>
      </Split>
      <Split
        sizes={[0, 100, 0]}
        minSize={0}
        className="split"
        style={{ display: "flex" }}
      >
        <div style={{ background: "#" }}></div>
        <div style={{ background: "#808080" }}>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Alias, sapiente!</p>
        </div>
        <div></div>
      </Split>
      <div></div>
    </Split>
  );
}

export default App;
