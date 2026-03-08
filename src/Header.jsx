import Me from "./assets/Me.jpeg";
const Header = () => {
  return (
    <>
      <header>
        <div>
          <nav>
            <a href={Me} target="_blank">
              Me
            </a>
          </nav>
        </div>
      </header>
    </>
  );
};
export default Header;
