import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => {
  const getDays = () => {
    const today = new Date()
    const yearInProgress = today.getFullYear()
    const recalentadoDay = new Date(`12/25/${yearInProgress}`)

    const timeDifference = recalentadoDay.getTime() - today.getTime()
    const daysDifference = timeDifference / (1000 * 3600 * 24)
    return Math.floor(daysDifference)
  }
  const days = getDays()
  return (
    <Layout>
      <img
        style={{
          position: "absolute",
          top: "20px",
          width: "200px",
          height: "200px",
          padding: "1rem",
        }}
        src={require("../components/background.gif")}
      ></img>
      <marquee
        bgcolor="#000080"
        style={{ color: "white", fontSize: "20px" }}
        behavior="alternate"
      >
        ¿Ya mero llega el recalentado?
      </marquee>
      <img
        style={{
          position: "absolute",
          bottom: "0px",
          left: "100px",
          width: "150px",
          height: "150px",
          padding: "1rem",
        }}
        src={require("../components/chayane.gif")}
      ></img>
      <img
        style={{
          position: "absolute",
          bottom: "340px",
          right: "100px",
          width: "150px",
          height: "150px",
          padding: "1rem",
        }}
        src={require("../components/pavo.gif")}
      ></img>
      <img
        style={{
          position: "absolute",
          bottom: "50px",
          right: "300px",
          width: "150px",
          height: "150px",
          padding: "1rem",
        }}
        src={require("../components/piolin.gif")}
      ></img>
      <img
        style={{
          position: "absolute",
          bottom: "100px",
          right: "100px",
          width: "150px",
          height: "150px",
          padding: "1rem",
        }}
        src={require("../components/reno.gif")}
      ></img>
      <img
        style={{
          position: "absolute",
          bottom: "100px",
          left: "200px",
          width: "150px",
          height: "150px",
          padding: "1rem",
        }}
        src={require("../components/pirata.gif")}
      ></img>
      <img
        style={{
          position: "absolute",
          bottom: "100px",
          right: "100px",
          width: "150px",
          height: "150px",
          padding: "1rem",
        }}
        src={require("../components/pavofuerte.gif")}
      ></img>
      <marquee>
        <img
          style={{
            bottom: "120px",
            right: "1200px",
            width: "150px",
            height: "150px",
            padding: "1rem",
          }}
          src={require("../components/pinguino.gif")}
        ></img>
      </marquee>
      <img
        style={{
          position: "absolute",
          left: "100px",
          top: "200px",
          width: "150px",
          height: "150px",
          padding: "1rem",
        }}
        src={require("../components/esfera.gif")}
      ></img>
      <img
        style={{
          position: "absolute",
          left: "10px",
          top: "250px",
          width: "150px",
          height: "150px",
          padding: "1rem",
        }}
        src={require("../components/bebe.gif")}
      ></img>
      <img
        style={{
          position: "absolute",
          right: "10px",
          bottom: "0px",
          width: "150px",
          height: "150px",
          padding: "1rem",
        }}
        src={require("../components/bmo.gif")}
      ></img>
      <img
        style={{
          position: "absolute",
          left: "45%",
          bottom: "0px",
          width: "150px",
          height: "150px",
          padding: "1rem",
        }}
        src={require("../components/mario.gif")}
      ></img>
      <img
        style={{
          position: "absolute",
          right: "55%",
          bottom: "50px",
          width: "150px",
          height: "150px",
          padding: "1rem",
        }}
        src={require("../components/santaduende.gif")}
      ></img>
      <img
        style={{
          position: "absolute",
          left: "45%",
          top: "50px",
          width: "150px",
          height: "150px",
        }}
        src={require("../components/minion.gif")}
      ></img>
      <marquee>
        <img
          style={{
            bottom: "100px",
            right: "300px",
            width: "150px",
            height: "150px",
            padding: "1rem",
          }}
          src={require("../components/santa.gif")}
        ></img>
      </marquee>
      <marquee>
        <img
          style={{
            bottom: "100px",
            right: "300px",
            width: "150px",
            height: "150px",
            padding: "1rem",
          }}
          src={require("../components/sonic.gif")}
        ></img>
      </marquee>

      <div style={{ position: "absolute", left: "50%", top: "0px" }}>
        <div style={{ position: "relative", left: "-50%" }}>
          <h1
            style={{
              color: "white",
              textAlign: "center",
              fontSize: "40px",
              paddingTop: "200px",
              margin: "0px",
            }}
          >
            Faltan
          </h1>
          <p
            style={{
              color: "yellow",
              textAlign: "center",
              fontSize: "40px",
              margin: "0px",
              fontWeight: "bold",
            }}
          >
            {`${days} ${days === 1 ? "día" : "dias"}`}
          </p>
          <h1
            style={{
              color: "red",
              textAlign: "center",
              fontSize: "40px",
              margin: "0px",
              fontWeight: "bold",
            }}
          >
            para el recalentado
          </h1>
        </div>
      </div>
    </Layout>
  )
}

export default IndexPage
