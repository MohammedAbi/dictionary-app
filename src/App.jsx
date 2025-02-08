import { useState } from "react";
import Heading from "./components/Heading";
import Content from "./components/Content";
import searchImage from "./assets/search.png";

function App() {
  const [word, setWord] = useState("");
  const [results, setResults] = useState(null);

  // Function to fetch data
  const searchWord = async () => {
    try {
      const url = "https://api.dictionaryapi.dev/api/v2/entries/en/";
      const response = await fetch(`${url}${word}`);

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();
      console.log("Data fetched successfully:", data);
      setResults(data[0]);
      setWord("");
    } catch (error) {
      console.error("Error fetching data:", error.message);
    }
  };

  const heading = () => {
    const audioObj = results?.phonetics.find((phone) => phone.audio !== "");
    return {
      word: results?.word,
      audioUrl: audioObj ? audioObj.audio : null,
      phonetic: results?.phonetic,
    };
  };

  return (
    <div className="container mx-auto px-10">
      {/* Navbar */}
      <nav className="my-2 h-14 flex flex-row items-center">
        <h2 className="text-indigo-600 font-bold text-2xl">WordFinder</h2>
      </nav>

      {/* Input Field */}
      <div className="flex items-center">
        <input
          type="text"
          className="w-full bg-gray-100 border-none outline-none rounded-lg px-3 py-4 shadow-sm"
          value={word}
          onChange={(e) => setWord(e.target.value)}
        />
        <button className="-mx-14 px-3 py-4 rounded-lg" onClick={searchWord}>
          <img src={searchImage} width={17} alt="Search" />
        </button>
      </div>

      {/* Display results */}
      {results?.meanings?.length > 0 && (
        <>
          <Heading {...heading()} />
          {results.meanings.map((content, index) => (
            <Content key={index} {...content} />
          ))}
        </>
      )}
    </div>
  );
}

export default App;
