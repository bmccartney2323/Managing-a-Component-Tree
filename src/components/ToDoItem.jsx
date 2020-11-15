import React from "react";

function ToDoItem(props) {
  // const [isDone, setIsDone] = useState(false);

  // function handleClick() {
  //   // setIsDone((prevValue) => {
  //   //   return !prevValue;
  //   // });
  // }
  return (
    //Need the div to allow this to work!
    <div
      onClick={() => {
        props.onChecked(props.id);
      }}
    >
      <li>{props.text}</li>
    </div>
  );
}

export default ToDoItem;
