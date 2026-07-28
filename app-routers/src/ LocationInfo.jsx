import { useLocation } from "react-router-dom";

function LocationInfo() {
  const location = useLocation();

  return (
    <>
      <p>Поточний шлях: {location.pathname || "відсутні"}</p>
      <p>Параметри: {location.search || "відсутні"}</p>
      <p>Хеш: {location.hash || "відсутні"}</p>
      <p>Повідомлення: {location.state || "відсутні"}</p>
    </>
  );
}

export default LocationInfo;