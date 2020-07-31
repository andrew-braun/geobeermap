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
                <div class="site-identity">
                    <div className="site-title">
                      {data.site.siteMetadata.title}
                    </div>
                    <div className="site-description">
                      {data.site.siteMetadata.description}
                    </div>
                </div>
                <nav className="main-nav">
                  <ul className="nav-list">
                    <li className="nav-list-item">
                      <a href="/blog" className="nav-list-link">
                        Blog
                      </a>
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