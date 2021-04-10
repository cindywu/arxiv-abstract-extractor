import React from 'react'
import axios from 'axios'
import { parseString } from 'xml2js'

function App() {
  function setValue(value) {
    document.getElementById("abstract-box").innerHTML = value
  }

  const getAbstract = () => {
    console.log('gotten abstract')
    axios.get(`http://export.arxiv.org/api/query?search_query=all:electron&start=0&max_results=1`)
      .then(res => {
        let returned = res.data
        parseString(returned, function (err, result) {
          let abstract = result.feed.entry[0].summary[0].replace(/(\r\n|\n|\r)/gm, "")
          setValue(abstract)
        })
      })
  }

  return (
    <div>
      <h1>arxiv abstract getter</h1>
      <textarea id="abstract-box" placeholder="abstract goes here"></textarea>
      <br></br>
      <button onClick={getAbstract}>
        get abstract
      </button>
    </div>
  )
}

export default App;
