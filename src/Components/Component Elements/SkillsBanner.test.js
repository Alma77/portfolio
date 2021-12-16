import { configureStore } from "@reduxjs/toolkit";
import { screen, render } from '@testing-library/react'
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import SkillsBanner from "./SkillsBanner";
import skillDetailSlice from "../../Store/skillDetail-Slice";

const store = configureStore({reducer:{skillDetail: skillDetailSlice.reducer }})
describe("Verify Skills Banner displays correctly", () => {
    test("Verify Skills Display", () => {
        render(
            <Provider store={store}>
                <BrowserRouter>
                    <SkillsBanner />
                </BrowserRouter>
            </Provider>
        )

        const skills = screen.queryAllByRole('img');
        expect(skills[0]).toHaveAttribute('src', 'cSharp.png')
        expect(skills[1]).toHaveAttribute('src', 'aspNet.png')
        expect(skills[2]).toHaveAttribute('src', 'html5.png')
        expect(skills[3]).toHaveAttribute('src', 'css3.png')
        expect(skills[4]).toHaveAttribute('src', 'sass.png')
        expect(skills[5]).toHaveAttribute('src', 'bootstrap.png')
        expect(skills[6]).toHaveAttribute('src', 'javascript.png')
        expect(skills[7]).toHaveAttribute('src', 'react.png')
        expect(skills[8]).toHaveAttribute('src', 'postgresql.png')
        expect(skills[9]).toHaveAttribute('src', 'xamarinForms.png')
    })
})