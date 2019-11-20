import React, { Component } from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

import "./pages.css"

class Index extends Component {
  render() {
    return (
      <Layout>
        <SEO title="Isabelle Jordan Lavandero" />
        <div className="content">
          <h1>Hello world, I'm Isabelle! 👋🏼🌏</h1>
          <p>
            Hailing from the Philippines, I’m now a senior at NYU studying
            computer science with a minor in media, culture, and communication.
            I know that’s a mouthful, but in a nutshell, I’m passionate about
            the intersection of technology and storytelling. On campus, I’m the
            marketing director for the Women in Computing club and was a
            teaching assistant for several introductory CS classes. Last summer,
            I interned on the Newsroom Engineering team at The Washington Post,
            helping to build out the front-end infrastructure of their 2020
            election coverage. Aside from tinkering with creative applications
            of code, I also love reading, cooking, going to museums, and
            curating playlists.{" "}
            <strong>
              I’m currently looking for full-time opportunities starting June
              2020, so any leads would be much appreciated!
            </strong>
          </p>
        </div>
      </Layout>
    )
  }
}

export default Index
