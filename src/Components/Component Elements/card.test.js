import Card from "./Card";
import blogPostSlice from "../../Store/blogPost-Slice";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import { render, screen } from "@testing-library/react";

const store = configureStore({ reducer: { blogPost: blogPostSlice.reducer } })
function TestWrapper({ children }) {
  return <Router >
    <Provider store={store}>
      {children}
    </Provider>
  </Router>
}

describe("Card tests", () => {
    test("Confirm Consuming a RESTful API Card is properly Rendered", () => {
        render(<TestWrapper children={<Card id={1} title="Consuming a RESTful API"/>} />);
        expect(screen.getByText('Consuming a RESTful API')).toBeInTheDocument();
    }),
    test("Confirm Securing an API with Json Web Tokens and Micorosoft.Authorization Card is properly Rendered", () => {
        render(<TestWrapper children={<Card id={2} title="Securing an API with Json Web Tokens and Microsoft.Authorization"/>} />);
        expect(screen.getByText('Securing an API with Json Web Tokens and Microsoft.Authorization')).toBeInTheDocument();
    }),
    test("Confirm TodoListAPI Documentation Card is properly Rendered", () => {
        render(<TestWrapper children={<Card id={3} title="TodoListAPI Documentation"/>} />);
        expect(screen.getByText('TodoListAPI Documentation')).toBeInTheDocument();
    }),
    test("Confirm SQL- 01_01_2020 - 09_11_2021 CDC Covid Deaths Dataset Analysis Card is properly Rendered", () => {
        render(<TestWrapper children={<Card id={4} title="SQL- 01_01_2020 - 09_11_2021 CDC Covid Deaths Dataset Analysis"/>} />);
        expect(screen.getByText('SQL- 01_01_2020 - 09_11_2021 CDC Covid Deaths Dataset Analysis')).toBeInTheDocument();
    })
})