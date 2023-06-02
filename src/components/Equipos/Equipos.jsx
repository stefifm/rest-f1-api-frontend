import { useContext } from 'react'
import { F1Context } from '../../Context/Context'
import Table from 'react-bootstrap/Table'
import './equipos.css'
const Equipos = () => {
  const { equipos } = useContext(F1Context)
  return (
    <Table
      striped
      bordered
      hover
      responsive
      className='tabla-equipos'>
      <thead>
        <tr>
          <th style={{ background: '#005792', color: '#ffffff' }}>IdEquipoF1</th>
          <th style={{ background: '#005792', color: '#ffffff' }}>NombreEquipo</th>
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
  )
}

export default Equipos
