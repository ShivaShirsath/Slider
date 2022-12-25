import Slider from "./Slider";

function App() {
  const urls = [
    "https://wallpaperaccess.com/full/796831.png",
    "https://wallpaperaccess.com/full/314827.jpg",
    "https://wallpaperaccess.com/full/796851.png",
  ];
  return (
    <Slider
      contents={urls.map((url, i) => (
        <img src={url} alt={i} />
      ))}
    />
  );
}

export default App;
