//Terrain Rotation
AFRAME.registerComponent("terrain-rotation-reader", {
  schema: {
    speedOfRotation: { type: "number", default: 0 },
  },
  init: function () {
    window.addEventListener("keydown", (e) => {
      if (e.key === "ArrowRight") {
        if (this.data.speedOfRotation < 0.1) {
          this.data.speedOfRotation += 0.01;
        }
      }
      if (e.key === "ArrowLeft") {
        if (this.data.speedOfRotation > -0.1) {
          this.data.speedOfRotation -= 0.01;
        }
      }
      if (e.key === "o") {
          this.data.speedOfRotation = 0;
      }
    });
  },
  tick: function () {
    var mapRotation = this.el.getAttribute("rotation");

    mapRotation.y += this.data.speedOfRotation;

    this.el.setAttribute("rotation", {
      x: mapRotation.x,
      y: mapRotation.y,
      z: mapRotation.z,
    });
  },
});

AFRAME.registerComponent("plane-ratation-reader", {
  schema: {
    speedOfRotation: { type: "number", default: 0 },
    speedOfAscent: { type: "number", default: 0 },
  },
  init: function () {
    window.addEventListener("keydown", (e) => {
      this.data.speedOfRotation = this.el.getAttribute("rotation");
      this.data.speedOfAscent = this.el.getAttribute("rotation");

      var planeRotation = this.data.speedOfRotation;
      var planePosition = this.data.speedOfAscent;

      if (e.key === "ArrowLeft") {
        if (planeRotation.x > -10) {
          planeRotation.x -= 0.5;
          this.el.setAttribute("rotation", planeRotation);
        }
      }

      if (e.key === "ArrowRight") {
        if (planeRotation.x < 10) {
          planeRotation.x += 0.5;
          this.el.setAttribute("rotation", planeRotation);
        }
      }

      if (e.key === "o") {
          planeRotation.x = 0;
          this.el.setAttribute("rotation", planeRotation);
      }

      if (e.key === "ArrowUp") {
        if (planePosition.y < 2) {
          planePosition.y += 0.01;
          this.el.setAttribute("position", planePosition);
        }
        if (planeRotation.z < 20) {
          planeRotation.z += 0.5;
          this.el.setAttribute("rotation", planeRotation);
        }
      }

      if (e.key === "ArrowDown") {
        // console.log("1");
        if (planePosition.y > -2) {
          planePosition.y -= 0.01;
          this.el.setAttribute("position", planePosition);
          // console.log("2");
        }
        if (planeRotation.z > -10) {
          planeRotation.z -= 0.5;
          this.el.setAttribute("rotation", planeRotation);
          // console.log("3");
        }
      }

      if (e.key === "p") {
          planeRotation.z = 0;
          this.el.setAttribute("rotation", planeRotation);
      }
    });
  }
});
