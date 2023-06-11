import React from "react";
import {render, screen} from "@testing-library/react";
import {App} from "./App";

describe("App", () => {
  it("should display a title, 4 inputs with its texts and a submit button", () => {
    render(<App />);

    expect(screen.getByRole("heading", {name: "My SOLID App"})).toBeVisible();
    expect(screen.getByRole("textbox", {name: "Your name:"})).toBeVisible();
    expect(screen.getByRole("textbox", {name: "Your e-mail:"})).toBeVisible();
    expect(
      screen.getByRole("combobox", {name: "Choose your favourite fruit:"})
    ).toBeVisible();
    expect(
      screen.getByRole("spinbutton", {name: "Amount of fruits:"})
    ).toBeVisible();
    expect(screen.getByRole("button", {name: "Done!"})).toBeVisible();
  });
});
