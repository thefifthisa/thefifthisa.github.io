import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

import "./pages.css"

const Contact = () => (
  <Layout>
    <SEO title="Contact | Isabelle Jordan Lavandero" />
    <div className="content contact">
      <h1>
        <a
          href="mailto:ijlavandero@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Email
        </a>{" "}
        or{" "}
        <a
          href="https://twitter.com/thefifthisa"
          target="_blank"
          rel="noopener noreferrer"
        >
          tweet
        </a>{" "}
        me if you want to reach me! 💬
      </h1>
      <p>
        You can also check out my{" "}
        <a
          href="https://github.com/thefifthisa"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>{" "}
        and{" "}
        <a
          href="https://www.linkedin.com/in/ijlavandero/"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </a>
        .
      </p>
    </div>
  </Layout>
)

export default Contact
