import LandingPage from "./LandingPage";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { screen, render } from '@testing-library/react'
import uiSlice from "../../Store/ui-Slice";

const store = configureStore( {reducer: {ui: uiSlice.reducer}})

describe("Landing Page Test", () => {
    test("Veryify Cartoon Imports Correctly", () => {
        render (
           <Provider store={store}>
                <BrowserRouter>
                    <LandingPage />
                </BrowserRouter>
            </Provider> 
        )
        

        const IconElement = screen.getByRole('img');
        expect(IconElement).toHaveAttribute('src', 'me.png');
    }),
    test("Verify Social Links appear correctly", () => {
        render(
            <Provider store={store}>
                <BrowserRouter>
                    <LandingPage />
                </BrowserRouter>
            </Provider>
        )
        
        const LinkList = screen.queryAllByRole('link')
        expect(LinkList[0]).toHaveAttribute('href', 'https://www.linkedin.com/in/tanner-trimble-36a109186/')
        expect(LinkList[1]).toHaveAttribute('href', 'https://www.github.com/Alma77')
        expect(LinkList[2]).toHaveAttribute('href', 'https://www.instagram.com/trimble.tanner77/')
    })
})