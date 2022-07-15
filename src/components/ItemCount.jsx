import React, {useState} from "react";
import pepino from "../assets/img/pepino.png";

function ItemCount(props) {
    const [count, setCount] = useState(props.initial);

    function handleAdd() {
      if (count<props.stock) {
        setCount(count+1);
      }
    }

    function handleSubstract() {
      if (count>1)
      setCount(count-1);
    }



    return (
      <>
        <section> 
        <div>
          <h2>Pepino</h2>
          <img 
          style={{width:80}}
          src={pepino} alt="berenjena"/>


          <button onClick={handleSubstract}> - </button>
          <span> {count} </span>
          <button onClick={handleAdd}> + </button>

        </div>

        </section>
      </>
    )
}

export default ItemCount;