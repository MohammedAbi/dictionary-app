import React from "react";

const Content = ({ partOfSpeech, definitions, synonyms }) => {
  return (
    <div className="my-3">
      <div className="flex flex-row items-center text-lg font-bold font-serif">
        <p>{partOfSpeech}</p>
        <hr className="w-full ml-10" />
      </div>
      <p className="text-gray-800 mt-3 font-semibold">Meaning</p>
      <ul className="list-disc px-10 text-gray-800 text-sm space-y-2">
        {definitions.map((def, index) => (
          <li key={index}>{def.definition}</li>
        ))}
      </ul>
      {synonyms.length > 0 && (
        <p className="text-gray-800 text-sm mt-2">
          <strong>Synonyms:</strong>{" "}
          {synonyms.map((synonym, index) => (
            <span key={index} className="text-indigo-500">
              {synonym}
              {index < synonyms.length - 1 ? ", " : ""}
            </span>
          ))}
        </p>
      )}
    </div>
  );
};

export default Content;
