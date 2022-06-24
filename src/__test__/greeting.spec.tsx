import "@testing-library/jest-dom/extend-expect";
import {fireEvent, render, screen } from '@testing-library/react'
import { Greeting } from "../components/greeting"

describe("Test Greeting Component", () => {
    test("Greeting without name", async () => {
        // Render the component
        render(<Greeting />)

        // Check if the message exists.
        expect(screen.getByText("Hello, World!")).toBeInTheDocument();

        // eslint-disable-next-line testing-library/no-debugging-utils
        // screen.debug();
    });

    test("Greeting with name = John", async () => {
        render(<Greeting name="John" />)

        // Check if the message exists.
        expect(screen.getByText("Hello, John!")).toBeInTheDocument();

        // eslint-disable-next-line testing-library/no-debugging-utils
        // screen.debug();
    });


    test("Greeting with name = John and click the button", async () => {
        render(<Greeting name="John" />)

        // Check if the message exists.
        expect(screen.getByText("Hello, John!")).toBeInTheDocument();

        // Get the button and click it.
        const button = screen.getByText("Click Me");
        fireEvent.click(button);

        // Check if the message is changed.
        expect(screen.getByText("Have a nice day!")).toBeInTheDocument();

        // eslint-disable-next-line testing-library/no-debugging-utils
        // screen.debug();
    });
});
