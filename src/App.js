import { useEffect, useState } from 'react'
import './App.css'
import List from './components/List/List'

function App() {
  const [list, setList] = useState('')

  console.log(list)

  useEffect(() => {
    const loadData = async () => {
      try {
        const response = await fetch(process.env.REACT_APP_URL_LIST)
        console.log(response)
        if (response.ok) {
          const json = await response.json()
          setList(json)
        }
      } catch (e) {
        console.error(e)
      }
    }

    loadData()
  }, [])

  return <div className="App">{list && <List list={list} />}</div>
}

export default App
