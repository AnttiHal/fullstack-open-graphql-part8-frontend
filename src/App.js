import { useState } from 'react'
import Authors from './components/Authors'
import Books from './components/Books'
import NewBook from './components/NewBook'
import { ALL_AUTHORS, ALL_BOOKS } from './queries'
import { useQuery } from '@apollo/client'
import SetBirthYear from './components/SetBirthYear'



const App = () => {
  const [page, setPage] = useState('authors')

  const authors = useQuery(ALL_AUTHORS, {
    pollInterval: 2000
  })

  const books = useQuery(ALL_BOOKS, {
    pollInterval: 2000
  })

  if (authors.loading || books.loading) {
    return <div>loading...</div>
  }

  return (
    <div>
      <div>
        <button onClick={() => setPage('authors')}>authors</button>
        <button onClick={() => setPage('books')}>books</button>
        <button onClick={() => setPage('add')}>add book</button>
        <button onClick={() => setPage('birth')}>set birthyear</button>
      </div>

      <Authors show={page === 'authors'} authors={authors.data.allAuthors}/>

      <Books show={page === 'books' } books={books.data.allBooks}/>

      <NewBook show={page === 'add'} />

      <SetBirthYear show={page === 'birth'} authors={authors.data.allAuthors}/>
    </div>
  )
}

export default App
