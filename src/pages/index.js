import React, { Component } from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

import "./pages.css"

class Index extends Component {
  componentDidMount() {
    // borrowed from https://dev.to/aspittel/how-to-create-the-drawing-interaction-on-dev-s-offline-page-1mbe !!
    let x, y, isPainting
    const canvas = document.querySelector("canvas")
    const context = canvas.getContext("2d")

    const colors = ["#305f72", "#f1d1b5", "#f0b7a4", "#f18c8e"]

    const setSize = () => {
      // set dimensions on the canvas
      canvas.setAttribute("width", canvas.offsetWidth)
      canvas.setAttribute("height", canvas.offsetHeight)
      context.lineJoin = "round"
      context.lineWidth = 3
    }

    const setColor = () => {
      context.strokeStyle = colors[Math.floor(Math.random() * colors.length)]
    }

    setSize()
    window.addEventListener("resize", setSize)

    function getCoordinates(event) {
      // check to see if mobile or desktop
      if (["mousedown", "mousemove"].includes(event.type)) {
        // click events
        return [event.pageX - canvas.offsetLeft, event.pageY - canvas.offsetTop]
      } else {
        // touch coordinates
        return [
          event.touches[0].pageX - canvas.offsetLeft,
          event.touches[0].pageY - canvas.offsetTop,
        ]
      }
    }

    function startPaint(e) {
      // change the old coordinates to the new ones
      isPainting = true
      let coordinates = getCoordinates(e)
      x = coordinates[0]
      y = coordinates[1]

      setColor()
    }

    canvas.addEventListener("mousedown", startPaint)
    canvas.addEventListener("touchstart", startPaint)

    function drawLine(firstX, firstY, secondX, secondY) {
      context.beginPath()
      context.moveTo(secondX, secondY)
      context.lineTo(firstX, firstY)
      context.closePath()
      context.stroke()
    }

    function paint(e) {
      if (isPainting) {
        let [newX, newY] = getCoordinates(e)
        drawLine(x, y, newX, newY)
        x = newX
        y = newY
      }
    }

    canvas.addEventListener("mousemove", paint)
    canvas.addEventListener("touchmove", paint)

    function exit() {
      isPainting = false
    }

    canvas.addEventListener("mouseup", exit)
    canvas.addEventListener("mouseleave", exit)
    canvas.addEventListener("touchend", exit)
  }

  render() {
    return (
      <Layout>
        <SEO title="Isabelle Jordan Lavandero | student + software developer" />
        <div
          style={{
            display: `grid`,
            gridTemplateRows: `1fr 1fr 0.25fr`,
            gridTemplateColumns: `repeat(5, 1fr)`,
            gridRowGap: `1.45rem`,
            alignItems: `center`,
            justifyItems: `center`,
          }}
        >
          <canvas></canvas>
          <div className="bio">
            <h1>Hello world! 👋🏼🌏</h1>
            <p>
              My name is <a href="#">Isabelle Jordan Lavandero</a>. Hailing from
              the Philippines, I’m now a senior (!) at NYU studying Computer
              Science with a minor in Media, Culture, and Communication. On
              campus, I’m in charge of marketing for the Women in Computing club
              and was a TA for several introductory CS classes. Last summer, I
              interned on the Newsroom Engineering team at The Washington Post,
              helping to build out their 2020 election results infrastructure.
              Aside from tinkering with creative and socially impactful
              applications of code, I also love cooking, reading, going to
              museums, and curating playlists. Emoji too, of course! 💁🏽🌻🌈
            </p>
          </div>

          <div className="projects">
            <h2>👩🏽‍💻 Some things I've made:</h2>
            <ul>
              <li>
                Election Receipts, a physical representation of real-time
                election results via a Raspberry Pi-controlled thermal printer.
              </li>
              <li>
                <a
                  href="https://thefifthisa.github.io/SmileyBird/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Smiley Bird
                </a>
                , a p5.js remake of Flappy Bird that implements CLM facial
                tracking to control character movement.
              </li>
              <li>
                <a
                  href="https://marketplace.visualstudio.com/items?itemName=thefifthisa.tinycarecode"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  tinycarecode
                </a>
                , a Visual Studio Code extension that integrates the Twitter API
                to display self-care reminders from @tinycarebot in your window.
              </li>
              <li>
                <a
                  href="https://wang1998tina.github.io/BirthConTrail/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  BirthConTrail
                </a>
                , a text adventure game about birth control (in)accessibility
                made using Twine.
              </li>
              <li>
                This website! (Have you tried drawing in the background yet?)
              </li>
            </ul>
          </div>

          <div className="contact">
            <h2>
              <a href="mailto:ijlavandero@gmail.com">Email</a> or{" "}
              <a
                href="https://twitter.com/thefifthisa"
                target="_blank"
                rel="noopener noreferrer"
              >
                tweet
              </a>{" "}
              me if you want to reach me!
            </h2>
            <p>
              {" "}
              You can also check out my{" "}
              <a
                href="https://github.com/thefifthisa"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
              ,{" "}
              <a
                href="https://www.linkedin.com/in/ijlavandero/"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
              , and{" "}
              <a
                href="../files/resume_ijlavandero.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                resume
              </a>
              . ✨
            </p>
          </div>
          <b id="b"></b>
          <b id="p"></b>
          <b id="c"></b>
        </div>
      </Layout>
    )
  }
}

export default Index
