import { configureStore } from '@reduxjs/toolkit'
import { screen, render } from '@testing-library/react'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import uiSlice from '../../Store/ui-Slice'
import MainHeader from './MainHeader'

const store = configureStore({reducer: {ui: uiSlice.reducer}})
describe("MainHeader Tests", () => {
    test("Resume Button is Available", () => {
        render (
            <Provider store={store}>
                <BrowserRouter>
                    <MainHeader />
                </BrowserRouter>
            </Provider>
        )

        const resumeButton = screen.queryByRole('button', {name: "View Resume"})
        expect(resumeButton).toHaveAccessibleName("View Resume")
    }),
    test("Home NavLink is Available", () => {
        render(
            <Provider store={store}>
                <BrowserRouter>
                    <MainHeader />
                </BrowserRouter>
            </Provider>
        )

        const HomeLink = screen.queryByRole('link', {name: "Home"})
        expect(HomeLink).toHaveAttribute('href', '/')
    }),
    test("About Me NavLink is Available", () => {
        render(
            <Provider store={store}>
                <BrowserRouter>
                    <MainHeader />
                </BrowserRouter>
            </Provider>
        )

        const HomeLink = screen.queryByRole('link', {name: "About Me"})
        expect(HomeLink).toHaveAttribute('href', '/about')
    }),
    test("Blogs NavLink is Available", () => {
        render(
            <Provider store={store}>
                <BrowserRouter>
                    <MainHeader />
                </BrowserRouter>
            </Provider>
        )

        const HomeLink = screen.queryByRole('link', {name: "Blogs"})
        expect(HomeLink).toHaveAttribute('href', '/blogs')
    }),
    test("Contact Me NavLink is Available", () => {
        render(
            <Provider store={store}>
                <BrowserRouter>
                    <MainHeader />
                </BrowserRouter>
            </Provider>
        )

        const HomeLink = screen.queryByRole('link', {name: "Contact Me"})
        expect(HomeLink).toHaveAttribute('href', '/contactme')
    })
})