import { useState, useRef } from 'react';

function App() {
  const ref = useRef();
  const [value, setValue] = useState("");

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handleHover = (e) => {
    if (value === "") {
      const buttonWidth = ref.current.offsetWidth;
      const buttonPosition = ref.current.getBoundingClientRect().left; // Get the button position
      const mousePosition = e.clientX; // Get the mouse position
      const currentPosition = ref.current.style.left;// Get the current position of the button
  
      if (currentPosition === "0px" || currentPosition === "") {
        if (buttonPosition + buttonWidth > mousePosition) {
          ref.current.style.left = `calc(100% - ${buttonWidth}px)`; // Move to the right
        }
      } else {
        if (buttonPosition < mousePosition) {
          ref.current.style.left = "0px"; // Move to the left
        }
      }
    }
    else {
      // if the input is not empty, move the button in original position
      ref.current.style.left = null; // Move to the left
    }
  };

  return (


    <div className="App" style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>
      <div style={{ background: "#85c884", padding: "50px", height: "80px", borderRadius: "5px" }}>
        <form>
          <input id="email" type="text" required onChange={handleChange} style={{ border: "1px solid gray", outline: "none", padding: "7px", borderRadius: "5px" }} />
          <div
            style={{ position: "relative", display: "flex", justifyContent: "center" }}
            onMouseMove={handleHover}
          >
            <button
              id="submit"
              type="submit"
              ref={ref}
              style={{ position: "absolute",marginTop: "10px", transition: "left 0.0000001s ease", borderRadius: "5px", border: "none", background: "#fff", padding: "10px", cursor: "pointer"}}
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>



  );
}

export default App;
