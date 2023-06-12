import { useContext } from 'react'
import { F1Context } from '../../Context/Context'
import Table from 'react-bootstrap/Table'
import './equipos.css'
import Loader from '../Loader/Loader'
function Equipos() {
  const tituloPagina = 'Equipos de F1'
  const { equipos } = useContext(F1Context)
  return (
    <>
      {equipos.length === 0 ? (
        <>
          <Loader />
        </>
      ) : (
        <>
          <h1 className='tituloPagina'>{tituloPagina}</h1>
          <Table
            striped
            bordered
            hover
            responsive
            className='tabla-equipos'>
            <thead>
              <tr>
                <th>IdEquipoF1</th>
                <th>NombreEquipo</th>
              </tr>
            </thead>
            <tbody>
              {equipos.map((equipo) => (
                <tr key={equipo.IdEquipoF1}>
                  <td>{equipo.IdEquipoF1}</td>
                  <td>{equipo.NombreEquipo}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </>
      )}
    </>
  )
}

export default Equipos
