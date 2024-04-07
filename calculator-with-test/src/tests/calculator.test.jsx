import { test, expect } from "vitest";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Calculator from "../Calculator";

// test("calculate addition", async () => {
//   render(<Calculator />);

//   const firstNumInput = screen.getByPlaceholderText("First number");
//   userEvent.type(firstNumInput, "5");
//   await waitFor(() => {
//     expect(firstNumInput.value).toBe("5");
//   });

//   const operatorSelect = screen.getByRole("combobox");
//   userEvent.selectOptions(operatorSelect, "+");

//   const secondNumInput = screen.getByPlaceholderText("Second number");
//   userEvent.type(secondNumInput, "7");
//   await waitFor(() => {
//     expect(secondNumInput.value).toBe("7");
//   });

//   userEvent.click(screen.getByRole("button", { name: "=" }));

//   await waitFor(() => {
//     expect(screen.getByPlaceholderText("Result").value).toBe("12");
//   });
// });

// test("calculate subtraction", async () => {
//   render(<Calculator />);

//   const firstNumInput = screen.getByPlaceholderText("First number");
//   userEvent.type(firstNumInput, "8");
//   await waitFor(() => {
//     expect(firstNumInput.value).toBe("8");
//   });

//   const operatorSelect = screen.getByRole("combobox");
//   userEvent.selectOptions(operatorSelect, "-");

//   const secondNumInput = screen.getByPlaceholderText("Second number");
//   userEvent.type(secondNumInput, "3");
//   await waitFor(() => {
//     expect(secondNumInput.value).toBe("3");
//   });

//   userEvent.click(screen.getByRole("button", { name: "=" }));

//   await waitFor(() => {
//     expect(screen.getByPlaceholderText("Result").value).toBe("5");
//   });
// });

// test("calculate multiplication", async () => {
//   render(<Calculator />);

//   const firstNumInput = screen.getByPlaceholderText("First number");
//   userEvent.type(firstNumInput, "7");
//   await waitFor(() => {
//     expect(firstNumInput.value).toBe("7");
//   });

//   const operatorSelect = screen.getByRole("combobox");
//   userEvent.selectOptions(operatorSelect, "*");

//   const secondNumInput = screen.getByPlaceholderText("Second number");
//   userEvent.type(secondNumInput, "6");
//   await waitFor(() => {
//     expect(secondNumInput.value).toBe("6");
//   });

//   userEvent.click(screen.getByRole("button", { name: "=" }));

//   await waitFor(() => {
//     expect(screen.getByPlaceholderText("Result").value).toBe("42");
//   });
// });

test("calculate division", async () => {
  render(<Calculator />);

  const firstNumInput = screen.getByPlaceholderText("First number");
  userEvent.type(firstNumInput, "50");
  await waitFor(() => {
    expect(firstNumInput.value).toBe("50");
  });

  const operatorSelect = screen.getByRole("combobox");
  userEvent.selectOptions(operatorSelect, "/");

  const secondNumInput = screen.getByPlaceholderText("Second number");
  userEvent.type(secondNumInput, "5");
  await waitFor(() => {
    expect(secondNumInput.value).toBe("5");
  });

  userEvent.click(screen.getByRole("button", { name: "=" }));

  await waitFor(() => {
    expect(screen.getByPlaceholderText("Result").value).toBe("10");
  });
});
