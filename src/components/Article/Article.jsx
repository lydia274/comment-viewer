import React from "react"
import "./Article.css"

function Article({ title, body }) {
  return (
    <div className="article-container">
      {title && <h1>{title}</h1>}
      <p>{body}</p>
    </div>
  )
}

export default Article
