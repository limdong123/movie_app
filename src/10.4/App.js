import React from "react";
import propTypes from "prop-types";


const foodILike = [
  {
    id:1,
    name: "Kimchi",
    image:
      "https://health.chosun.com/site/data/img_dir/2021/09/01/2021090100998_0.jpg",
    rating: 5    
  },
  {
    id:2,
    name: "pizza",
    image:
      "https://src.hidoc.co.kr/image/lib/2020/6/17/1592363657269_0.jpg",
      rating: 4.9
  },
  {
    id:3,
    name: "potato",
    image:
      "https://health.chosun.com/site/data/img_dir/2020/05/07/2020050702573_0.jpg",
      rating: 3.2
  },
  {
    id:4,
    name: "tomato",
    image:
      "http://www.foodnmed.com/news/photo/201906/18564_4259_4656.jpg",
    rating: 3.6
  },
]

function Food({ name, image, rating }) {
  return (
    <div>
      <h1>I like {name} </h1>
      <h3>{rating} / 5.0</h3>
      <img src={image} alt={name} />
    </div>
  );
}

function App() {
  return (
    <div>
      <h1>HELLO</h1>
      {foodILike.map(dish =>
        <Food 
        key={dish.id}
        name={dish.name}
        image={dish.image}
        rating={dish.rating}
        />)}
    </div>
  );
}

Food.propTypes = {
  name: propTypes.string.isRequired,
  image:propTypes.string.isRequired,
  rating:propTypes.number.isRequired
}

export default App;
