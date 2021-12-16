import { configureStore } from "@reduxjs/toolkit";
import blogPostSlice from "../../Store/blogPost-Slice";

const store = configureStore({reducer:{blogPost: blogPostSlice.reducer}})
describe("Blog Post Tests", () => {
    test("Verify Blogs Import Correctly", () => {
        const blogPosts = store.getState().blogPost.blogPosts

        blogPosts.map( blog => {
            import(`../../Documents/BlogPost${blog.id}/${blog.title}.md`)
                .then(res => {
                    fetch(res.default)
                    .then(res => res.text())
                    .then(res => expect(res).toContain(blog.title))
                }
            );
        });
    })
})