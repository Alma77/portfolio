import { configureStore } from "@reduxjs/toolkit";
import { screen, render } from '@testing-library/react'
import { Provider, useDispatch, useSelector } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import About from "./About";
import uiSlice from "../../Store/ui-Slice";
import skillDetailSlice from "../../Store/skillDetail-Slice";
import { uiActions } from "../../Store/ui-Slice";

const store = configureStore({reducer: {ui: uiSlice.reducer, skillDetail: skillDetailSlice.reducer}})
describe("About Page Tests", () => {
    test("NotOnLandingPage() called", () => {
        render(
            <Provider store={store}>
                <BrowserRouter>
                    <About />
                </BrowserRouter>
            </Provider>
        )

        let isOnLandingPage = true;

        const NotOnlandingPage = jest.fn(uiActions.NotOnLandingPage()).mockReturnValue(store.getState().ui.onLandingPage)

        isOnLandingPage = NotOnlandingPage()

        expect(isOnLandingPage).toBe(false);
    })
})