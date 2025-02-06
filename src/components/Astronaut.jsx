import React from 'react';

const AstronautScene = () => {
  return (
    <div
      className="scene"
      style={{
        position: 'relative',
        width: '100%',
        height: '700px',
        backgroundColor: 'transparent',
        overflow: 'hidden'
      }}
    >
      {/* Embedded CSS */}
      <style>{`
        /* ────── Cosmic Dust Animation ────── */
        @keyframes spaceDust {
          0% { opacity: 0.3; transform: translate(0,0) scale(0.8); }
          25% { opacity: 0.8; transform: translate(10px,150px) scale(1); }
          50% { opacity: 1; transform: translate(-10px,300px) scale(1.1); }
          75% { opacity: 0.8; transform: translate(10px,450px) scale(1); }
          100% { opacity: 0.3; transform: translate(0,600px) scale(0.8); }
        }

        /* ────── Astronaut Rotation Animation ────── */
        @keyframes astronaut {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }

        /* ────── Floating Bounce Animation (bounces off container walls) ────── */
        @keyframes floatBounce {
          0% { transform: translate(0,0); }
          20% { transform: translate(300px,-200px); }
          25% { transform: translate(290px,-190px); }
          40% { transform: translate(500px,150px); }
          45% { transform: translate(480px,160px); }
          60% { transform: translate(-300px,200px); }
          65% { transform: translate(-290px,190px); }
          80% { transform: translate(-500px,-150px); }
          85% { transform: translate(-480px,-140px); }
          100% { transform: translate(0,0); }
        }

        /* ────── Arm Waving Animations ────── */
        @keyframes wave-left {
          0% { transform: rotate(-30deg); }
          50% { transform: rotate(-15deg); }
          100% { transform: rotate(-30deg); }
        }
        @keyframes wave-right {
          0% { transform: rotate(30deg); }
          50% { transform: rotate(15deg); }
          100% { transform: rotate(30deg); }
        }

        /* ────── Cosmic Dust Containers & Stars ────── */
        .box-of-star1, .box-of-star2, .box-of-star3, .box-of-star4 {
          width: 100%;
          position: absolute;
          z-index: 10;
          left: 0;
          top: 0;
          height: 700px;
          pointer-events: none;
        }
        .box-of-star1 { animation: spaceDust 10s linear infinite; }
        .box-of-star2 { animation: spaceDust 10s -1.64s linear infinite; }
        .box-of-star3 { animation: spaceDust 10s -2.30s linear infinite; }
        .box-of-star4 { animation: spaceDust 10s -3.30s linear infinite; }
        .star {
          width: 4px;
          height: 4px;
          border-radius: 50%;
          background-color: #a3d2f7;
          position: absolute;
          z-index: 10;
          opacity: 0.9;
          box-shadow: 0 0 8px rgba(163,210,247,0.8);
        }
        .star:before {
          content: "";
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background-color: #a3d2f7;
          position: absolute;
          z-index: 10;
          top: 60px;
          left: 50px;
          opacity: 0.8;
        }
        .star:after {
          content: "";
          width: 10px;
          height: 10px;
          border-radius: 50%;
          background-color: #a3d2f7;
          position: absolute;
          z-index: 10;
          top: 10px;
          left: 90px;
          opacity: 0.8;
        }
        /* Example star positions – adjust or add as needed */
        .star-position1 { top: 30px; left: 20px; }
        .star-position2 { top: 110px; left: 250px; }
        .star-position3 { top: 60px; left: 570px; }
        .star-position4 { top: 120px; left: 900px; }
        .star-position5 { top: 20px; left: 1120px; }
        .star-position6 { top: 90px; left: 1280px; }
        .star-position7 { top: 30px; left: 1480px; }

        /* ────── Astronaut Container & Rotation ────── */
        .astronaut {
          width: 200px;
          height: 320px;
          position: relative;
          z-index: 11;
          animation: astronaut 8s linear infinite;
          filter: drop-shadow(0 0 10px rgba(0,255,255,0.5));
        }

        /* ────── Jetpack ────── */
        .jetpack {
          width: 60px;
          height: 100px;
          position: absolute;
          z-index: 1;
          top: 110px;
          left: calc(50% - 100px);
          background: linear-gradient(135deg, #4a00e0, #8e2de2);
          border-radius: 15px;
          box-shadow: inset 0 0 10px rgba(0,0,0,0.3);
        }

        /* ────── Head (Helmet) ────── */
        .head {
          width: 90px;
          height: 90px;
          position: absolute;
          z-index: 3;
          background: linear-gradient(145deg, #ffffff, #dfe9f3);
          border-radius: 50%;
          top: 20px;
          left: calc(50% - 45px);
          border: 2px solid #b0bfc8;
          overflow: hidden;
        }
        .head:after {
          content: "";
          width: 60px;
          height: 30px;
          position: absolute;
          bottom: 15px;
          left: calc(50% - 30px);
          background: linear-gradient(to bottom, rgba(0,123,255,0.7), rgba(0,200,255,0.7));
          border-radius: 5px;
        }
        .head:before {
          content: "";
          width: 12px;
          height: 25px;
          position: absolute;
          top: calc(50% - 12.5px);
          left: -4px;
          background-color: #b0bfc8;
          border-radius: 5px;
          box-shadow: 92px 0 0 #b0bfc8;
        }

        /* ────── Body ────── */
        .body {
          width: 100px;
          height: 120px;
          position: absolute;
          z-index: 2;
          background: linear-gradient(145deg, #ffffff, #f7f7f7);
          border-radius: 15px;
          top: 110px;
          left: calc(50% - 50px);
          box-shadow: inset 0 0 5px rgba(0,0,0,0.2);
        }
        /* Chest Panel (Emblem) positioned within the body */
        .body .panel {
          width: 40px;
          height: 40px;
          position: absolute;
          top: 40px;
          left: calc(50% - 20px);
          background: radial-gradient(circle, #ff7e67, #ff3d00);
          border-radius: 50%;
          box-shadow: inset 0 0 8px rgba(0,0,0,0.4);
        }

        /* ────── Updated Arms (Now Raised & Waving) ────── */
        .arm {
          width: 25px;
          height: 70px;
          position: absolute;
          z-index: 2;
          background: linear-gradient(145deg, #ffffff, #f7f7f7);
          border-radius: 15px;
          transform-origin: top center;
        }
        .arm-left {
          left: calc(50% - 80px);
          top: 110px;
          transform: rotate(-30deg);
          animation: wave-left 2s ease-in-out infinite;
        }
        .arm-right {
          left: calc(50% + 55px);
          top: 110px;
          transform: rotate(30deg);
          animation: wave-right 2s ease-in-out infinite;
        }

        /* ────── Updated Legs (Attached to the Body) ────── */
        .leg {
          width: 30px;
          height: 50px;
          position: absolute;
          z-index: 2;
          background: linear-gradient(145deg, #ffffff, #f7f7f7);
          border-radius: 10px;
        }
        .leg-left {
          left: calc(50% - 40px);
          top: 230px;
        }
        .leg-right {
          left: calc(50% + 10px);
          top: 230px;
        }

        /* ────── Wrapper & Floating Animation ────── */
        .astronaut-wrapper {
          position: fixed;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
        }
        .astronaut-float {
          animation: floatBounce 20s ease-in-out infinite;
          transition: transform 0.3s ease;
        }
        .astronaut-float:hover {
          transform: scale(1.05);
        }
      `}</style>

      {/* Cosmic Dust Layers */}
      <div className="box-of-star1">
        <div className="star star-position1"></div>
        <div className="star star-position2"></div>
      </div>
      <div className="box-of-star2">
        <div className="star star-position3"></div>
        <div className="star star-position4"></div>
      </div>
      <div className="box-of-star3">
        <div className="star star-position5"></div>
        <div className="star star-position6"></div>
      </div>
      <div className="box-of-star4">
        <div className="star star-position7"></div>
      </div>

      {/* Astronaut with Bouncing Floating & Rotation Animations */}
      <div className="astronaut-wrapper">
        <div className="astronaut-float">
          <div className="astronaut">
            <div className="jetpack"></div>
            <div className="head"></div>
            <div className="body">
              <div className="panel"></div>
            </div>
            <div className="arm arm-left"></div>
            <div className="arm arm-right"></div>
            <div className="leg leg-left"></div>
            <div className="leg leg-right"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AstronautScene;
