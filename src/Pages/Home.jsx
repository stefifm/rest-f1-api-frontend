import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <section className='mt-4 p-5 home-card'>
      <h1>
        <i className='fa fa-flag-checkered'></i> F1 API
      </h1>
      <p>Este ejemplo está desarrollado con las siguientes tecnologías:</p>
      <p>
        Backend: NodeJS, Express, WebApiRest, Swagger, Sequelize, Sqlite, multiples capas en
        JavaScript/TypeScript
      </p>
      <p>Frontend: Single Page Application, HTML, CSS, Bootstrap, NodeJS, JavaScript y React</p>
      <Link
        to='/pilotos'
        className='btn btn-lg btn-primary'>
        <i className='fa fa-search pe-2'></i>
        Ver Pilotos
      </Link>
    </section>
  )
}

export default Home
