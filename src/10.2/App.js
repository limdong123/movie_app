import React from "react";

function Food({name, image}){
  return (
  <div>
    <h1>I like {name} </h1>
    <img src = {image}/>
    </div>
    );
}

const foodILike = [
  {
    name: "Kimchi",
    image:
    "https://health.chosun.com/site/data/img_dir/2021/09/01/2021090100998_0.jpg"
  },
  {
    name: "pizza",
    image:
    "https://src.hidoc.co.kr/image/lib/2020/6/17/1592363657269_0.jpg"
  },
  {
    name: "potato",
    image:
    "https://health.chosun.com/site/data/img_dir/2020/05/07/2020050702573_0.jpg"
  },
  {
    name: "tomato",
    image:
    "http://www.foodnmed.com/news/photo/201906/18564_4259_4656.jpg"
  },
]

function App() {
  return (
    <div>
      <h1>HELLO</h1>
      {foodILike.map(dish => <Food name={dish.name} image={dish.image}/>)}
    </div>
  );
}

export default App;
