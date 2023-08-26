import React from "react"
import "./Article.css"

function Article({ title, body, imgUrl, url, urlText }) {
  return (
    <div className="article-container">
      {title && <h1>{title}</h1>}
      {body && <p>{body}</p>}
      {imgUrl && <img src={imgUrl} />}
      {url && urlText && <a href={url}>{urlText}</a>}
    </div>
  )
}

export default Article
