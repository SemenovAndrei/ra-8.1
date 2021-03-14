import { useState } from 'react'
import './App.css'
import Details from './components/Details/Details'
import List from './components/List/List'
import ShowSpinner from './components/ShowSpinner/ShowSpinner'
import useJsonFetch from './hooks/useJsonFetch'

function App() {
  const [info, setInfo] = useState({
    id: '',
    name: '',
  })

  const [loading, error, data] = useJsonFetch(
    `${process.env.REACT_APP_URL_DATA}/users.json`
  )

  const handleUserInfo = (el) => {
    if (el.id === info.id) {
      return
    }

    setInfo({ id: el.id, name: el.dataset.name })
  }

  return (
    <div className="App">
      {loading && <ShowSpinner />}
      {error && error.message}
      {data && <List list={data} onClick={handleUserInfo} />}
      {info.id && <Details info={info} />}
    </div>
  )
}

export default App
