import react, { useState } from "react";

const Header = () => {
  const [count, setCount] = useState(1);
  return (
    <div>
      Count is {count}
      <a
        onClick={() => {
          setCount(count + 1);
        }}
      >
        <br />
        Add Count
      </a>
    </div>
  );
};

export default Header;
