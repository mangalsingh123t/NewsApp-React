/* eslint-disable react/prop-types */

import image from '../assets/news.jpeg'

export default function NewsItem({ title, description, src, url }) {
  return (
    <>
      <div className="card bg-dark text-light mb-3 d-inline-block my-3  mx-3 " style={{ maxWidth: "410px" }}>
        <img src={src ? src : image} style={{ height: "300px", width: "400px" }} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{title.slice(0, 50)}</h5>
          <p className="card-text">{description ? description.slice(0, 90) : "This is Indias largest Statue"}</p>
          <a href={url} className="btn btn-primary">Read More</a>
        </div>
      </div>
    </>
  )
}