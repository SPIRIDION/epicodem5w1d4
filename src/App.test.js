import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import App from './App';

describe('rendering tests', () => {
  it('Welcome component', () => {
    render(<App/>)
    const welcomeMessage = screen.getByText(/WELCOME ON EPIBOOKS/i)
      expect(welcomeMessage).toBeInTheDocument()
    })

  it('150 fantasy books?', () => {
    render(<App/>)
    const allBooks = screen.getAllByTestId('card')
    expect(allBooks).toHaveLength(150)
  })

  it('CommentArea Present?', () => {
    render(<App/>)
    const checkFromPlaceholder = screen.getByPlaceholderText(/Write a comment.../i)
    expect(checkFromPlaceholder).toBeInTheDocument()
  })
})

describe('filter tests', () => {
  it('find 3 cards with the word "destiny"', async () => {
    render(<App/>)
    const inputField = screen.getByPlaceholderText(/Write a comment.../i)
    fireEvent.change(inputField, {target: {value: 'destiny'}})
    await waitFor(() => {
      const filteredBooks = screen.getAllByTestId('card')
      expect(filteredBooks).toHaveLength(3)
    })
  })
})