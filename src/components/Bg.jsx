// import React, { useEffect, useRef } from 'react';

// const StarryNight = () => {
//   const canvasRef = useRef(null);

//   useEffect(() => {
//     const canvas = canvasRef.current;
//     const ctx = canvas.getContext("2d");

//     canvas.width = window.innerWidth;
//     canvas.height = window.innerHeight;

//     let stars = [];

//     // Star Class
//     class Star {
//       constructor() {
//         this.x = Math.random() * canvas.width;
//         this.y = Math.random() * canvas.height;
//         this.size = Math.random() * 3;
//         this.speedY = Math.random() * 0.3;
//       }

//       draw() {
//         ctx.fillStyle = "white";
//         ctx.beginPath();
//         ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
//         ctx.fill();
//       }

//       update() {
//         this.y += this.speedY;
//         if (this.y > canvas.height) this.y = 0;
//       }
//     }

//     // Create 100 Stars
//     function createStars() {
//       for (let i = 0; i < 100; i++) {
//         stars.push(new Star());
//       }
//     }

//     // Animation Loop
//     function animate() {
//       ctx.clearRect(0, 0, canvas.width, canvas.height);
//       stars.forEach((star) => {
//         star.update();
//         star.draw();
//       });
//       requestAnimationFrame(animate);
//     }

//     // Initialize the stars
//     createStars();
//     animate();

//     // Clean up when component unmounts
//     return () => {
//       stars = [];
//     };
//   }, []);

//   return (
//     <div className='new'>
//       <canvas ref={canvasRef} id="stars"></canvas>
//       <div className="moon"></div>
//       <div className="content">
//       </div>
//       <div className="hills"></div>
//     </div>
//   );
// };

// export default StarryNight;




// /* Reset styles */
// .new {
//     margin: 0;
//     padding: 0;
//     overflow: hidden;
//     background: #0b132b; /* Dark blue night sky */
//     color: white;
//     font-family: Arial, sans-serif;
//     height: 100vh;
//   }
  
//   /* Stars Canvas */
//   #stars {
//     position: fixed;
//     top: 0;
//     left: 0;
//     width: 100vw;
//     height: 100vh;
//     z-index: 1;
//   }
  
//   /* 🌙 Static Moon (No Glow) */
//   .moon {
//     position: absolute;
//     top: 10%;
//     right: 10%;
//     width: 120px;
//     height: 120px;
//     background: radial-gradient(circle, #fff 50%, rgba(255, 255, 255, 0.3) 75%);
//     border-radius: 50%;
//     z-index: 2;
//   }
  
//   /* Multi-Colored Hills */
//   .hills {
//     position: absolute;
//     bottom: 0;
//     width: 100%;
//     height: 300px;
//     z-index: 3;
//     background:
//       url('data:image/svg+xml,<svg viewBox="0 0 1440 320" xmlns="http://www.w3.org/2000/svg"><path fill="%231b3a4b" fill-opacity="1" d="M0,288L48,261.3C96,235,192,181,288,170.7C384,160,480,192,576,213.3C672,235,768,245,864,250.7C960,256,1056,256,1152,240C1248,224,1344,192,1392,176L1440,160L1440,320L0,320Z"/></svg>'),
//       url('data:image/svg+xml,<svg viewBox="0 0 1440 320" xmlns="http://www.w3.org/2000/svg"><path fill="%23304357" fill-opacity="1" d="M0,256L48,234.7C96,213,192,171,288,144C384,117,480,107,576,133.3C672,160,768,224,864,224C960,224,1056,160,1152,138.7C1248,117,1344,139,1392,149.3L1440,160L1440,320L0,320Z"/></svg>'),
//       url('data:image/svg+xml,<svg viewBox="0 0 1440 320" xmlns="http://www.w3.org/2000/svg"><path fill="%23504b6d" fill-opacity="1" d="M0,256L48,234.7C96,213,192,181,288,154.7C384,128,480,96,576,122.7C672,149,768,235,864,234.7C960,234,1056,160,1152,133.3C1248,107,1344,149,1392,170.7L1440,192L1440,320L0,320Z"/></svg>');
//     background-repeat: no-repeat;
//     background-size: cover;
//   }
  
//   /* Content */
//   .content {
//     position: absolute;
//     top: 30%;
//     left: 50%;
//     transform: translate(-50%, -50%);
//     text-align: center;
//     font-size: 2rem;
//     z-index: 3;
//   }
  