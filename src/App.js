import React from 'react'
import axios from 'axios'
import { parseString } from 'xml2js'

function App() {
  const getAbstract = () => {
    console.log('gotten abstract')
    axios.get(`http://export.arxiv.org/api/query?search_query=all:electron&start=0&max_results=1`)
      .then(res => {
        let returned = res.data
        parseString(returned, function (err, result) {
          console.dir(result.feed.entry[0].summary[0]);
        })
      })
  }

  return (
    <div>
      <h1>arxiv abstract getter</h1>
      <textarea placeholder="abstract goes here"></textarea>
      <br></br>
      <button onClick={getAbstract}>
        get abstract
      </button>
    </div>
  )
}

export default App;
