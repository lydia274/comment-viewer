import React from "react"
import Article from "../../components/Article/Article"

export default function About() {
  return (
    <>
      <div>
        <Article
          title="About the project"
          body="The project is built on React JS, using API to fetch data from https://random-data-api.com/"
        />
        <Article body="Easter Egg! Hover the color band in the header to see  its background change" />
      </div>
    </>
  )
}
