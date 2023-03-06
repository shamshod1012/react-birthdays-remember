import "./list.css";
import { useState } from "react";

const List = (props) => {
  let [data, setData] = useState(props.data);
  console.log(data);
  let [bool, setBool] = useState(true);
  function btnF() {
    if (bool) {
      setData([]);
      setBool(false);
    } else {
      setData(props.data);
      setBool(true);
    }
  }
  return (
    <div className="container">
      <p className="length">{data.length} birthdays todoy</p>
      {data.map((element) => {
        return (
          <li className="person_container" key={element.id}>
            <div className="img_container">
              <img
                src={element.img}
                alt="Person img"
                width={100}
                height={100}
              />
            </div>
            <div className="info_container">
              <h3> {element.name} </h3>
              <p> {element.age} years</p>
            </div>
          </li>
        );
      })}

      <button onClick={btnF} className="btn">
        Clear all
      </button>
    </div>
  );
};
export default List;
