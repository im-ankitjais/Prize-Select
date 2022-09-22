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
const minimum_jumps = 80;

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
      console.log(`You Have Won a Prize ${list[prize].text}`);
      prize = -1;
      jumps = 0;
    } else {
      if (jumps < minimum_jumps) {
        speed -= 5;
      } else if (jumps === minimum_jumps) {
        var index = list.findIndex((p) => p.order === prizeOrder);
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
    // api call
    let prizeOrder = 23; // set winner prize order:number
    let tempList = prizes;
    while (tempList.length > total_items) {
      let random = Math.floor(Math.random() * prizes.length);
      if (tempList[random]?.order !== prizeOrder) {
        tempList.splice(random, 1);
      } else if (random < total_items) {
        tempList.splice(random + 1, 1);
      } else {
        tempList.splice(random - 1, 1);
      }
    }
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
              {[0, 1, 2, 3, 4].map((order, index) => (
                <div
                  className="square"
                  style={{ backgroundImage: `url(${list[order].image})` }}
                  data-order={order}
                >
                  {/* <div className="square__content">{list[order].text}</div> */}
                </div>
              ))}
            </section>
            <section className="container" id="js-lotto">
              {[23, 14, 13, 12, 5].map((order, index) => (
                <div
                  className="square"
                  style={{ backgroundImage: `url(${list[order].image})` }}
                  data-order={order}
                >
                  {/* <div className="square__content">{list[order].text}</div> */}
                </div>
              ))}
            </section>
            <section className="container" id="js-lotto">
              {[22, 15].map((order, index) => (
                <div
                  className="square"
                  style={{ backgroundImage: `url(${list[order].image})` }}
                  data-order={order}
                >
                  {/* <div className="square__content">{list[order].text}</div> */}
                </div>
              ))}
              <div
                className="square square__start-btn"
                style={{ backgroundImage: "url(/start-button.png)" }}
                id="js-start"
                onClick={() => controllSpeed()}
              ></div>
              {[11, 6].map((order, index) => (
                <div
                  className="square"
                  style={{ backgroundImage: `url(${list[order].image})` }}
                  data-order={order}
                >
                  {/* <div className="square__content">{list[order].text}</div> */}
                </div>
              ))}
            </section>
            <section className="container" id="js-lotto">
              {[21, 16, 17, 10, 7].map((order, index) => (
                <div
                  className="square"
                  style={{ backgroundImage: `url(${list[order].image})` }}
                  data-order={order}
                >
                  {/* <div className="square__content">{list[order].text}</div> */}
                </div>
              ))}
            </section>
            <section className="container" id="js-lotto">
              {[20, 19, 18, 9, 8].map((order, index) => (
                <div
                  className="square"
                  style={{ backgroundImage: `url(${list[order].image})` }}
                  data-order={order}
                >
                  {/* <div className="square__content">{list[order].text}</div> */}
                </div>
              ))}
            </section>
          </div>
        )}
      </>
    );
  }
};

export default Prize;

/*
Changes to be done when prizes list is changed:
1. Add prize images in public/prizes folder.
2. Add parameter like image, order in prizes array.
1. change total_items value.
2. in useEffect change prizes.length

Set Prize:
1. Call api to get prize in loadList Function.
2. set prize according to order parameter.
*/
