import React, { useEffect, useState } from "react";
import "./Prize.css";
import $ from "jquery";
const prizes = [
  {
    text: "a",
    image: "/prizes/prize1.png",
    order: 0,
  },
  {
    text: "b",
    image: "/prizes/prize2.png",
    order: 1,
  },
  {
    text: "c",
    image: "/prizes/prize3.png",
    order: 2,
  },
  {
    text: "d",
    image: "/prizes/prize4.png",
    order: 3,
  },
  {
    text: "e",
    image: "/prizes/prize5.png",
    order: 4,
  },
  {
    text: "f",
    image: "/prizes/prize6.png",
    order: 5,
  },
  {
    text: "g",
    image: "/prizes/prize7.png",
    order: 6,
  },
  {
    text: "h",
    image: "/prizes/prize8.png",
    order: 7,
  },
  {
    text: "i",
    image: "/prizes/prize9.png",
    order: 8,
  },
  {
    text: "j",
    image: "/prizes/prize10.png",
    order: 9,
  },
  {
    text: "k",
    image: "/prizes/prize11.png",
    order: 10,
  },
  {
    text: "l",
    image: "/prizes/prize12.png",
    order: 11,
  },
  {
    text: "m",
    image: "/prizes/prize13.png",
    order: 12,
  },
  {
    text: "n",
    image: "/prizes/prize14.png",
    order: 13,
  },
  {
    text: "o",
    image: "/prizes/prize15.png",
    order: 14,
  },
  {
    text: "p",
    image: "/prizes/prize10.png",
    order: 15,
  },
  {
    text: "q",
    image: "/prizes/prize11.png",
    order: 16,
  },
  {
    text: "r",
    image: "/prizes/prize12.png",
    order: 17,
  },
  {
    text: "s",
    image: "/prizes/prize13.png",
    order: 18,
  },
  {
    text: "t",
    image: "/prizes/prize14.png",
    order: 19,
  },
  {
    text: "u",
    image: "/prizes/prize15.png",
    order: 20,
  },
  {
    text: "v",
    image: "/prizes/prize9.png",
    order: 21,
  },
  {
    text: "w",
    image: "/prizes/prize8.png",
    order: 22,
  },
  {
    text: "x",
    image: "/prizes/prize7.png",
    order: 23,
  },
  {
    text: "y",
    image: "/prizes/prize6.png",
    order: 24,
  },
  {
    text: "z",
    image: "/prizes/prize5.png",
    order: 25,
  },
  {
    text: "aa",
    image: "/prizes/prize4.png",
    order: 26,
  },
  {
    text: "ab",
    image: "/prizes/prize3.png",
    order: 27,
  },
];
const total_items = 24;
const minimum_jumps = 70;

const Prize = () => {
  const [list, setList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [prizeOrder, setPrizeOrder] = useState(-1);
  let currentIndex = -1;
  let jumps = 0;
  let speed = 100;
  let timer = 0;
  let prize = -1;
  function controllSpeed() {
    jumps += 1;
    $(`[data-order="${currentIndex}"]`).removeClass("is-active");
    currentIndex += 1;
    if (currentIndex > total_items - 1) {
      currentIndex = 0;
    }
    $(`[data-order="${currentIndex}"]`).addClass("is-active");
    if (jumps > minimum_jumps + 10 && prize === currentIndex) {
      clearTimeout(timer);
      console.log(`You Have Won a Prize >ext}`);
      prize = -1;
      jumps = 0;
    } else {
      if (jumps < minimum_jumps) {
        speed -= 5;
      } else if (jumps === minimum_jumps) {
        // const random_number = generatePrizeNumber();
        // const random_number = 4;
        var index = list.findIndex((p) => p.order == prizeOrder);
        console.log("index", index);
        prize = index;
      } else {
        if (jumps > minimum_jumps + 10 && prize === currentIndex + 1) {
          speed += 600;
        } else {
          speed += 20;
        }
      }
      if (speed < 40) {
        speed = 40;
      }
      timer = setTimeout(controllSpeed, speed);
    }
  }
  useEffect(() => {
    console.log("called");
    if (prizes.length === 28) {
      loadList();
    }
  }, []);
  function loadList() {
    let prizeOrder = 19;
    let tempList = prizes;
    console.log(tempList);
    while (tempList.length > 24) {
      let random = Math.floor(Math.random() * 15);
      console.log(random);
      if (tempList[random]?.order !== prizeOrder) {
        tempList.splice(random, 1);
      } else if (random < 14) {
        tempList.splice(random + 1, 1);
      } else {
        tempList.splice(random - 1, 1);
      }
    }
    console.log(tempList);
    setList(tempList);
    setPrizeOrder(prizeOrder);
    setLoading(false);
  }
  if (loading) {
    return <h1>Loading</h1>;
  } else {
    return (
      <>
        {!loading && (
          <div>
            <section className="container" id="js-lotto">
              <div
                className="square"
                style={{ backgroundImage: `url(${list[0].image})` }}
                data-order="0"
              >
                <div className="square__content"></div>
              </div>
              <div
                className="square"
                style={{ backgroundImage: `url(${list[1].image})` }}
                data-order="1"
              >
                <div className="square__content"></div>
              </div>
              <div
                className="square"
                style={{ backgroundImage: `url(${list[2].image})` }}
                data-order="2"
              >
                <div className="square__content"></div>
              </div>
              <div
                className="square"
                style={{ backgroundImage: `url(${list[3].image})` }}
                data-order="3"
              >
                <div className="square__content"></div>
              </div>
              <div
                className="square"
                style={{ backgroundImage: `url(${list[4].image})` }}
                data-order="4"
              >
                <div className="square__content"></div>
              </div>
            </section>
            <section className="container" id="js-lotto">
              <div
                className="square"
                style={{ backgroundImage: `url(${list[23].image})` }}
                data-order="23"
              >
                <div className="square__content"></div>
              </div>
              <div
                className="square"
                style={{ backgroundImage: `url(${list[14].image})` }}
                data-order="14"
              >
                <div className="square__content"></div>
              </div>
              <div
                className="square"
                style={{ backgroundImage: `url(${list[13].image})` }}
                data-order="13"
              >
                <div className="square__content"></div>
              </div>
              <div
                className="square"
                style={{ backgroundImage: `url(${list[12].image})` }}
                data-order="12"
              >
                <div className="square__content"></div>
              </div>
              <div
                className="square"
                style={{ backgroundImage: `url(${list[5].image})` }}
                data-order="5"
              >
                <div className="square__content"></div>
              </div>
            </section>
            <section className="container" id="js-lotto">
              <div
                className="square"
                style={{ backgroundImage: `url(${list[22].image})` }}
                data-order="22"
              >
                <div className="square__content"></div>
              </div>
              <div
                className="square"
                style={{ backgroundImage: `url(${list[15].image})` }}
                data-order="15"
              >
                <div className="square__content"></div>
              </div>
              <div
                className="square square__start-btn"
                style={{ backgroundImage: "url(/start-button.png)" }}
                id="js-start"
                onClick={() => controllSpeed()}
              >
                {/* <div>👉☠️👾</div> */}
                {/* <image src="http://localhost:3000/start-button.png" /> */}
              </div>

              <div
                className="square"
                style={{ backgroundImage: `url(${list[11].image})` }}
                data-order="11"
              >
                <div className="square__content"></div>
              </div>
              <div
                className="square"
                style={{ backgroundImage: `url(${list[6].image})` }}
                data-order="6"
              >
                <div className="square__content"></div>
              </div>
            </section>
            <section className="container" id="js-lotto">
              <div
                className="square"
                style={{ backgroundImage: `url(${list[21].image})` }}
                data-order="21"
              >
                <div className="square__content"></div>
              </div>
              <div
                className="square"
                style={{ backgroundImage: `url(${list[16].image})` }}
                data-order="16"
              >
                <div className="square__content"></div>
              </div>
              <div
                className="square"
                style={{ backgroundImage: `url(${list[17].image})` }}
                data-order="17"
              >
                <div className="square__content"></div>
              </div>
              <div
                className="square"
                style={{ backgroundImage: `url(${list[10].image})` }}
                data-order="10"
              >
                <div className="square__content"></div>
              </div>
              <div
                className="square"
                style={{ backgroundImage: `url(${list[7].image})` }}
                data-order="7"
              >
                <div className="square__content"></div>
              </div>
            </section>
            <section className="container" id="js-lotto">
              <div
                className="square"
                style={{ backgroundImage: `url(${list[20].image})` }}
                data-order="20"
              >
                <div className="square__content"></div>
              </div>
              <div
                className="square"
                style={{ backgroundImage: `url(${list[19].image})` }}
                data-order="19"
              >
                <div className="square__content"></div>
              </div>
              <div
                className="square"
                style={{ backgroundImage: `url(${list[18].image})` }}
                data-order="18"
              >
                <div className="square__content"></div>
              </div>
              <div
                className="square"
                style={{ backgroundImage: `url(${list[9].image})` }}
                data-order="9"
              >
                <div className="square__content"></div>
              </div>
              <div
                className="square"
                style={{ backgroundImage: `url(${list[8].image})` }}
                data-order="8"
              >
                <div className="square__content"></div>
              </div>
            </section>
          </div>
        )}
      </>
    );
  }
};

export default Prize;
