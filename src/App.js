// import WheelComponent from "react-wheel-of-prizes";
// import "react-wheel-of-prizes/dist/index.css";
import Wheel from "lottery-wheel";
import { useEffect } from "react";
const App = () => {
  const segments = [
    "Aesthetic Stickers",
    "Leaf Headphones",
    "Stickers & Amazon-GC",
    "Iphone 13",
    "MI TV",
    "OnePlus Nord CE 2 Lite",
    "Airpods Pro",
    "Alexa Echo Dot",
    "Blender + Ext. Chord + Amazon-GC",
    "Nokia Phone",
    "Flaming Hot Cheetos",
    "IBA Makeup Kit",
    "Bitcoin Tee+Poster",
    "IBA Makeup Kit",
    "Kurta",
    "Apple Homepod Mini",
  ];
  const segColors = [
    "#EE4040",
    "#F0CF50",
    "#815CD1",
    "#3DA5E0",
    "#34A24F",
    "#F9AA1F",
    "#EC3F3F",
    "#FF9000",
    "#EE4040",
    "#F0CF50",
    "#815CD1",
    "#3DA5E0",
    "#34A24F",
    "#F9AA1F",
    "#EC3F3F",
    "#FF9000",
  ];
  const onFinished = (winner) => {
    console.log(winner);
  };
  useEffect(() => {
    const wheel = new Wheel({
      el: document.getElementById("wheel"),
      data: [
        {
          text: "Aesthetic Stickers",
          color: "#EE4040",
          fontSize: 19,
          fontColor: "#000",
          chance: 0,
        },
        {
          text: "Leaf Headphones",
          color: "#F0CF50",
          fontSize: 19,
          fontColor: "#000",
          chance: 0,
        },
        {
          text: "Stickers & Amazon-GC",
          color: "#815CD1",
          fontSize: 19,
          fontColor: "#000",
          chance: 0,
        },
        {
          text: "Iphone 13",
          color: "#3DA5E0",
          fontSize: 19,
          fontColor: "#000",
          chance: 0,
        },
        {
          text: "MI TV",
          color: "#34A24F",
          fontSize: 19,
          fontColor: "#000",
          chance: 0,
        },
        {
          text: "OnePlus Nord CE 2 Lite",
          color: "#F0CF50",
          fontSize: 19,
          fontColor: "#000",
          chance: 0,
        },
        {
          text: "Airpods Pro",
          color: "#3DA5E0",
          fontSize: 19,
          fontColor: "#000",
          chance: 0,
        },
        {
          text: "Alexa Echo Dot",
          color: "#815CD1",
          fontSize: 19,
          fontColor: "#000",
          chance: 0,
        },
        {
          text: "Blender + Ext. Chord + Amazon-GC",
          color: "#815CD1",
          fontSize: 19,
          fontColor: "#000",
          chance: 0,
        },
        {
          text: "Nokia Phone",
          color: "#F0CF50",
          fontSize: 19,
          fontColor: "#000",
          chance: 5,
        },
        // {
        //   text: "Flaming Hot Cheetos",
        //   color: "#815CD1",
        //   fontSize: 19,
        // fontColor: '#000',
        //   chance: 0,
        // },
        // {
        //   text: "IBA Makeup Kit",
        //   color: "#F0CF50",
        //   fontSize: 19,
        // fontColor: '#000',
        //   chance: 0,
        // },
        // {
        //   text: "Bitcoin Tee+Poster",
        //   color: "#F0CF50",
        //   fontSize: 19,
        // fontColor: '#000',
        //   chance: 0,
        // },
        {
          text: "Kurta",
          color: "#3DA5E0",
          fontSize: 19,
          fontColor: "#000",
          chance: 0,
        },
        {
          text: "Apple Homepod Mini",
          color: "#815CD1",
          fontSize: 19,
          fontColor: "#000",
          chance: 0,
        },
      ],
      limit: 1,
      draw: true,
      theme: "light",
      radius: 550,
      buttonWidth: 75,
      color: {
        button: "#fef5e7",
        buttonFont: "#34495e",
      },
      onSuccess(data) {
        alert(data.text);
      },
      onFail() {
        alert("You have no more chance to draw");
      },
    });
    // setTimeout(() => {
    //   wheel.draw();
    // }, 2000);
  }, []);
  return (
    // {/* <WheelComponent
    //   segments={segments}
    //   segColors={segColors}
    //   winningSegment="Kurta"
    //   onFinished={(winner) => onFinished(winner)}
    //   primaryColor="black"
    //   contrastColor="white"
    //   buttonText="Spin"
    //   isOnlyOnce={true}
    //   size={500}
    //   upDuration={100}
    //   downDuration={100000}
    //   fontFamily="Arial"
    // /> */}
    <svg id="wheel"></svg>
  );
};

export default App;
