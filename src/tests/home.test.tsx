import { test, describe, expect } from 'vitest'
import { render, screen } from '@testing-library/react'

const Component = () => {
  return <div>This is a test</div>
}

describe('Home Test', () => {
  test('should render the home page', () => {
    render(<Component />)
    expect(screen.getByText(/This is a test/i)).toBeInTheDocument()
  })
})
