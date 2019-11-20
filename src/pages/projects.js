import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

import "./pages.css"

const Work = () => (
  <Layout>
    <SEO title="Work | Isabelle Jordan Lavandero" />
    <div className="content">
      <h1>👩🏽‍💻 Some things I've made: ⚒️</h1>
      <div
        style={{
          textAlign: `left`,
        }}
      >
        <ul>
          <li>
            @ The Washington Post:
            <ul>
              <li>
                Prototypes for live race pages using React, Next.js, AMP, and
                WebSockets (
                <a
                  href="https://www.washingtonpost.com/elections/election-results/virginia/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  eventually used during actual elections!
                </a>
                )
              </li>
              <li>
                <a
                  href="https://washpost.engineering/2019/10/22/our-new-engineering-blog-postcode/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  PostCode
                </a>
                , a complete redesign of the engineering blog using PageBuilder Fusion, a React-based rendering engine
              </li>
              <li>
                <a
                  href="https://drive.google.com/file/d/1yya-ziO7MuJF5kyQjEk4gPoEKEGDm3Xv/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Election Receipts
                </a>
                , a physical representation of real-time election results via a
                Raspberry Pi-controlled thermal printer
              </li>
            </ul>
          </li>
          <li>
            <a
              href="https://thefifthisa.github.io/SmileyBird/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Smiley Bird
            </a>
            , a p5.js remake of Flappy Bird that implements CLM facial tracking
            to control character movement
          </li>
          <li>
            <a
              href="https://marketplace.visualstudio.com/items?itemName=thefifthisa.tinycarecode"
              target="_blank"
              rel="noopener noreferrer"
            >
              tinycarecode
            </a>
            , a Visual Studio Code extension that integrates the Twitter API to
            display self-care notifications from @tinycarebot
          </li>
          <li>
            <strong>In the works:</strong> a 2D (possibly 3D) real-time music
            visualizer using OpenGL!
          </li>
        </ul>
      </div>
    </div>
  </Layout>
)

export default Work
