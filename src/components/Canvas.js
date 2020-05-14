import React, { useEffect, useRef } from "react";

const Canvas = () => {
  let ref = useRef();

  useEffect(() => {
    function connect() {
        let opacityValue=1;
        for (let c = 0; c < circleArray.length; c++) {
            for (let d = c; d < circleArray.length; d++) {
                let distance = ((circleArray[c].x - circleArray[d].x) *
                (circleArray[c].x - circleArray[d].x)) +
                ((circleArray[c].y - circleArray[d].y) *
                (circleArray[c].y - circleArray[d].y));

                if(distance < (canvas.width/7)*(canvas.height/7)){
                    opacityValue=1-(distance/20000);
                    context.strokeStyle='rgba(0,0,0,' + opacityValue + ')';
                    context.lineWidth=1;
                    context.beginPath();
                    context.moveTo(circleArray[c].x, circleArray[c].y);
                    context.lineTo(circleArray[d].x, circleArray[d].y);
                    context.stroke();
                }
            }
        }
      }
    initialize();
    function initialize() {
      window.addEventListener("resize", resizeCanvas, false);
    }
    function resizeCanvas() {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    }

    let canvas = ref.current;
    let context = canvas.getContext("2d");

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    let requestId;

    function Circle(x, y, dx, dy, radius) {
      this.x = x;
      this.y = y;
      this.dx = dx;
      this.dy = dy;
      this.radius = radius;
      this.draw = () => {
        context.beginPath();
        context.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
        context.fillStyle = "grey";
        context.fill();

      };
      this.update = () => {
        if (this.x + this.radius > canvas.width || this.x - this.radius < 0) {
          this.dx = -this.dx;
        }
        if (this.y + this.radius > canvas.height || this.y - this.radius < 0) {
          this.dy = -this.dy;
        }
        this.x += this.dx;
        this.y += this.dy;

        this.draw();

      };
    }

    var circleArray = [];

    for (let a = 0; a < 40; a++) {
      var x = Math.random() * (window.innerWidth - radius * 2) + radius;
      var y = Math.random() * (window.innerHeight - radius * 2) + radius;
      var dx = (Math.random() - 0.5) * 2;
      var dy = (Math.random() - 0.5) * 2;
      var radius = Math.random() * 5 + 1;

      circleArray.push(new Circle(x, y, dx, dy, radius));
    }

    const render = () => {
    requestId = requestAnimationFrame(render);
      context.clearRect(0, 0, canvas.width, canvas.height);
      for (let b = 0; b < circleArray.length; b++) {
        circleArray[b].update();
      }
      connect();
    }
    render();



    return () => {
      cancelAnimationFrame(requestId);
    };
  },[]);

  return <canvas ref={ref} />;
};

export default Canvas;