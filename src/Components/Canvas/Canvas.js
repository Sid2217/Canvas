import React, { useState } from "react";
import { jsPDF } from "jspdf";

function Canvas() {
  var [x, setColor] = useState("black");
  var flag = false,
    prevX = 0,
    currX = 0,
    prevY = 0,
    currY = 0,
    dot_flag = false,
    y = 2;

  React.useEffect(() => {
    const canvas = document.getElementById("myCanvas");
    const ctx = canvas.getContext("2d");

    console.log("use Effect", x);
    canvas.addEventListener(
      "mousemove",
      function (e) {
        findxy("move", e);
      },
      false
    );
    canvas.addEventListener(
      "mousedown",
      function (e) {
        findxy("down", e);
      },
      false
    );
    canvas.addEventListener(
      "mouseup",
      function (e) {
        findxy("up", e);
      },
      false
    );
    canvas.addEventListener(
      "mouseout",
      function (e) {
        findxy("out", e);
      },
      false
    );
  }, [x]);

  const findxy = (res, e) => {
    const canvas = document.getElementById("myCanvas");
    const ctx = canvas.getContext("2d");

    if (res == "down") {
      prevX = currX;
      prevY = currY;
      currX = e.clientX - canvas.offsetLeft;
      currY = e.clientY - canvas.offsetTop;

      flag = true;
      dot_flag = true;
      if (dot_flag) {
        ctx.beginPath();
        ctx.fillStyle = x;
        ctx.fillRect(currX, currY, 2, 2);
        ctx.closePath();
        dot_flag = false;
      }
    }
    if (res == "up" || res == "out") {
      flag = false;
    }
    if (res == "move") {
      if (flag) {
        prevX = currX;
        prevY = currY;
        currX = e.clientX - canvas.offsetLeft;
        currY = e.clientY - canvas.offsetTop;
        console.log(x);
        draw(x);
      }
    }
  };

  const draw = (x) => {
    const ctx = document.getElementById("myCanvas").getContext("2d");

    ctx.beginPath();
    ctx.moveTo(prevX, prevY);
    ctx.lineTo(currX, currY);
    console.log(x);
    ctx.strokeStyle = x;
    ctx.lineWidth = y;
    ctx.stroke();
    ctx.closePath();
  };

  const pdf = () => {
    const canvas = document.getElementById("myCanvas");
    var imgData = canvas.toDataURL("image/png", 1);
    var pdf = new jsPDF();
    pdf.addImage(imgData, "png", 0, 0);
    pdf.save("download.pdf");
  };

  const clear = () => {
    const canvas = document.getElementById("myCanvas");
    const context = canvas.getContext("2d");

    context.clearRect(0, 0, canvas.width, canvas.height);
  };

  return (
    <div>
      <canvas
        id="myCanvas"
        width="500"
        height="500"
        background="white"
        style={{ border: "1px solid #d3d3d3" }}
      ></canvas>
      {/* <button onClick={() => init()}>Add Point</button> */}
      <div style={{ position: "absolute", top: "12%", left: "43%" }}>
        Choose Color
      </div>
      <div
        style={{
          position: "absolute",
          top: "15%",
          left: "35%",
          width: "15px",
          height: "15px",
          borderRadius: "20px",
          background: "green",
        }}
        onClick={() => setColor("green")}
      ></div>
      <div
        style={{
          position: "absolute",
          top: "15%",
          left: "45%",
          width: "15px",
          height: "15px",
          borderRadius: "20px",
          background: "red",
        }}
        onClick={() => setColor("red")}
      ></div>
      <div
        style={{
          position: "absolute",
          top: "25%",
          left: "35%",
          width: "15px",
          height: "15px",
          borderRadius: "20px",
          background: "blue",
        }}
        onClick={() => setColor("blue")}
      ></div>
      <div
        style={{
          position: "absolute",
          top: "25%",
          left: "45%",
          width: "15px",
          height: "15px",
          borderRadius: "20px",
          background: "yellow",
        }}
        onClick={() => setColor("yellow")}
      ></div>
      <button onClick={() => pdf()}>download</button>
      <button onClick={() => clear()}>Clear</button>
    </div>
  );
}

export default Canvas;
