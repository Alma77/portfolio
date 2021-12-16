import { screen, render } from '@testing-library/react'
import Portrait from './Portrait'

describe("Portrait Test", () => {
    test("Verify correct image is being loaded", () =>  {

        render(
            <Portrait />
        )

        const image = screen.getByRole('img')
        expect(image).toHaveAttribute('src', 'Portrait.jpg')
    })
})   