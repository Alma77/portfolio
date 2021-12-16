import { uiActions } from '../../Store/ui-Slice'
import { configureStore } from '@reduxjs/toolkit'
import { screen, render } from '@testing-library/react'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import BlogList from './BlogList'
import uiSlice from '../../Store/ui-Slice'
import blogPostSlice from '../../Store/blogPost-Slice'

const store = configureStore({reducer:{ui: uiSlice.reducer, blogPost: blogPostSlice.reducer}})
describe("Blog List Tests", () =>  {
    test("All Blogs are appearing Correctly", () => {
        render(
            <Provider store={store}>
                <BrowserRouter>
                    <BlogList />
                </BrowserRouter>
            </Provider>
        )

        const blogs = store.getState().blogPost.blogPosts
        const cards = screen.queryAllByRole('link')

        const length = blogs.length;

        for(let i = 0; i > length; i++)
        {
            expect(cards[i]).toHaveAttribute('href', `blogs/${blogs[i].id}`)
        }
    })
})