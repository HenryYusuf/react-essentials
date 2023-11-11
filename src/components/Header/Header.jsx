// Image
import reactImg from "../../assets/react-core-concepts.png";

// Css
import "./Header.css";

// Array
const reactDescription = ["Fundamental", "Crucial", "Core"];

// Function generate random number(integer)
function genRandomint(max) {
  return Math.floor(Math.random() * (max + 1));
}

function Header() {
  const description = reactDescription[genRandomint(2)];

  return (
    <header>
      <img src={reactImg} alt="Stylized atom" />
      <h1>React Essentials</h1>
      <p>
        {description} React concepts you will need for almost any app you are
        going to build!
      </p>
    </header>
  );
}

export default Header;
