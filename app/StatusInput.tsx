"use client";

import { SetStateAction, useState } from "react";
import { findSteamIds } from "./steam";

const handleSubmit = (consoleInput: string) => {
  const steam64Ids = findSteamIds(consoleInput);
  console.log(steam64Ids);
};

export default function StatusInput() {
  const [consoleInput, setConsoleInput] = useState("");

  const handleChange = (event: {
    target: { value: SetStateAction<string> };
  }) => {
    setConsoleInput(event.target.value);
  };

  const submit = () => {
    handleSubmit(consoleInput);
  };

  return (
    <>
      <div>
        <textarea className={"status"} onChange={handleChange}></textarea>
      </div>
      <button onClick={submit}>Submit</button>
    </>
  );
}
