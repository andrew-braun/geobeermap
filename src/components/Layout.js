import React from "react"
import { useStaticQuery, Link, graphql } from "gatsby"
import "./layout.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(
    graphql`
        query {
        site {
            siteMetadata {
            title
            description
            }
        }
        }
    `
    )
    return (
        <div className="main-grid">
            <header className="main-header">
              <Link to = "/">
                <div className="site-identity">
                    <div className="site-title">
                      {data.site.siteMetadata.title}
                    </div>
                    <div className="site-description">
                      {data.site.siteMetadata.description}
                    </div>
                </div>
              </Link>
                <nav className="main-nav">
                  <ul className="nav-list">
                    <li className="nav-list-item">
                      <Link
                        to="/"
                        className="nav-list-link">
                        Home
                        </Link>
                    </li>
                    <li className="nav-list-item">
                    <Link
                        to="/blog"
                        className="nav-list-link">
                        Blog
                        </Link>
                    </li>
                  </ul>
                </nav>
            </header>
            <main className="main-container">
              {children}
            </main>
            <footer className="main-footer">
                <p>Made by Andrew Braun</p>
            </footer>
        </div>
    )
}

export default Layout