import React from "react"
import "./Footer.css"
import { Link } from "react-router-dom"

function Footer() {
  return (
    <footer id="footer">
      <div className="container-footer">
        <div id="about-footer">
          <h3 className="list-title">Extraterrestrial and Extraordinary</h3>
          <p>
            The project is built on React JS, using API to fetch data from
            https://random-data-api.com/.
          </p>
        </div>
        <div>
          <ul className="list-block">
            <li className="list-title">
              <Link to="/" className="">
                Home
              </Link>
            </li>
            <li className="">
              <Link to="/about/" className="">
                About
              </Link>
            </li>
            <li className="">
              <Link to="/more/" className="">
                More projects
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <ul className="list-block">
            <li className="list-title">
              <Link to="#" className="">
                Partenaires
              </Link>
            </li>
            <li className="">
              <Link to="#" className="">
                Villes
              </Link>
            </li>
            <li className="">
              <Link to="#" className="">
                Régions IDF
              </Link>
            </li>
            <li className="">
              <Link to="#" className="">
                Hôpitaux
              </Link>
            </li>
            <li className="">
              <Link to="#" className="">
                Entreprises, institutions
              </Link>
            </li>
            <br />

            <li className="">
              <Link to="#" className="">
                Politique de confidentialité
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <ul className="list-block">
            <li className="list-title">
              <Link to="#" className="">
                Contact me
              </Link>
            </li>
            <li className="">
              <Link to="#" className="">
                Blog
              </Link>
            </li>
            <li className="">
              <Link to="#" className="">
                Les soirées citoyennes
              </Link>
            </li>

            <li>
              <div className="socials-container">
                <Link to="#" className="">
                  <img
                    src="https://cdn2.iconfinder.com/data/icons/user-interface-line-38/24/Untitled-5-19-256.png"
                    alt="person"
                  />
                </Link>
                <Link to="#" className="">
                  <img
                    src="https://cdn1.iconfinder.com/data/icons/social-media-outline-6/128/SocialMedia_Facebook-Outline-512.png"
                    alt="fb"
                  />
                </Link>
                <Link to="#" className="">
                  <img
                    src="https://cdn1.iconfinder.com/data/icons/social-media-outline-6/128/SocialMedia_Instagram-Outline-256.png"
                    alt="insta"
                  />
                </Link>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  )
}
export default Footer
