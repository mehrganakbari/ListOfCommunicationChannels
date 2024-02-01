import React from "react";
import data from "../data/data.json";

function Buttons() {
  return (
    <div>
      {data.data.map((item) => (
        <a href={item.link}>
          <button
            className={`group relative m-2 py-3 w-full xs2:w-3/4 overflow-hidden rounded-lg bg-[#2457f5] md:text-lg shadow`}
          >
            <div
              className={`absolute inset-0 py-3 w-12 bg-[#1a2f6e] transition-all duration-[200ms] ease-out group-hover:w-full group-hover:text-right group-hover:px-5 text-lite`}
            >
              {item.id}
            </div>
            <span className={`relative text-lite group-hover:text-lite`}>
              <a>{item.title}</a>
            </span>
          </button>
        </a>
      ))}
    </div>
  );
}

export default Buttons;
