import React from "react";
import {render, screen} from "@testing-library/react";
import {App} from "./App";

describe("App", () => {
  it("should display a title", () => {
    render(<App />);

    expect(screen.getByRole("heading", {name: "My SOLID App"})).toBeVisible();
  });

  it("should display 5 inputs with its texts", () => {
    render(<App />);

    expect(screen.getByRole("textbox", {name: "Your name:"})).toBeVisible();
    expect(
      screen.getByRole("textbox", {name: "Your last name:"})
    ).toBeVisible();
    expect(
      screen.getByRole("textbox", {name: "Your favourite color:"})
    ).toBeVisible();
    expect(screen.getByRole("textbox", {name: "Your e-mail:"})).toBeVisible();
    expect(
      screen.getByRole("combobox", {name: "Choose your favourite fruit:"})
    ).toBeVisible();
  });

  it("should display a submit button", () => {
    render(<App />);

    expect(screen.getByRole("button", {name: "Done!"})).toBeVisible();
  });
});
