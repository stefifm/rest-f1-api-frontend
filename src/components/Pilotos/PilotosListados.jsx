import { useContext } from 'react'
import { F1Context } from '../../Context/Context'
import moment from 'moment'
import Table from 'react-bootstrap/Table'
import './pilotosLista.css'

function PilotosListados() {
  const {
    pilotos,
    Pagina,
    RegistrosTotal,
    Paginas,
    buscarPilotos,
    consultarPiloto,
    deletePilotoById,
    modificarPiloto
  } = useContext(F1Context)

  return (
    <div className='table-responsive m-5'>
      <Table
        responsive
        bordered
        hover
        className='tabla-pilotos text-center'>
        <thead>
          <tr>
            <th>IdPiloto</th>
            <th>NombrePiloto</th>
            <th>FechaNacimiento</th>
            <th>CantidadCarreras</th>
            <th>Campeon</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {pilotos &&
            pilotos.map((item) => (
              <tr key={item.IdPiloto}>
                <td>{item.IdPiloto}</td>
                <td>{item.NombrePiloto}</td>
                <td>{moment(item.FechaNacimiento).format('DD/MM/YYYY')}</td>
                <td>{item.CantidadCarreras}</td>
                <td>{item.Campeon ? 'SI' : 'NO'}</td>
                <td className='botones-accion'>
                  <button
                    className='btn btn-sm btn-outline-primary boton-accion'
                    onClick={() => consultarPiloto(item)}>
                    <i className='fa fa-eye'></i>
                  </button>
                  <button
                    className='btn btn-sm btn-outline-primary boton-accion'
                    onClick={() => modificarPiloto(item)}>
                    <i className='fa fa-pencil'></i>
                  </button>
                  <button
                    className='btn btn-sm btn-outline-danger boton-accion'
                    onClick={() => deletePilotoById(item)}>
                    <i className='fa fa-trash'></i>
                  </button>
                </td>
              </tr>
            ))}
        </tbody>
      </Table>
      {/* Paginador */}
      <div className='paginador'>
        <div className='row'>
          <div className='col'>
            <span className='pyBadge'>Registros: {RegistrosTotal}</span>
          </div>
          <div className='col text-center'>
            Pagina: &nbsp;
            <select
              value={Pagina}
              onChange={(e) => {
                buscarPilotos(e.target.value)
              }}>
              {Paginas?.map((x) => (
                <option
                  value={x}
                  key={x}>
                  {x}
                </option>
              ))}
            </select>
            &nbsp; de {Paginas?.length}
          </div>
        </div>
      </div>
    </div>
  )
}

export default PilotosListados
