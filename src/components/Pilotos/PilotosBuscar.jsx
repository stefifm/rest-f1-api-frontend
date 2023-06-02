import { useContext } from 'react'
import { F1Context } from '../../Context/Context'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import './pilotosBuscar.css'
import Container from 'react-bootstrap/Container'

function PilotosBuscar() {
  const { NombrePiloto, setNombrePiloto, Campeon, setCampeon, buscarPilotos, agregarPiloto } =
    useContext(F1Context)

  return (
    <Form
      className='form-search'
      onSubmit={(e) => e.preventDefault()}>
      <Container fluid>
        <div className='grupo-buscar'>
          <Form.Group
            controlId='NombrePilotoGroup'
            className='nombre-piloto-group'>
            <Form.Label className='label-buscar'>Nombre:</Form.Label>

            <Form.Control
              type='text'
              placeholder='Nombre'
              onChange={(e) => setNombrePiloto(e.target.value)}
              value={NombrePiloto}
              maxLength='55'
              autoFocus
              className='input-buscar'
            />
          </Form.Group>

          <Form.Group
            controlId='CampeonGroup'
            className='campeon-group'>
            <Form.Label className='label-buscar'>Campeon:</Form.Label>
            <Form.Select
              onChange={(e) => setCampeon(e.target.value)}
              value={Campeon}
              className='select-buscar'>
              <option value={null}></option>
              <option value={false}>NO</option>
              <option value={true}>SI</option>
            </Form.Select>
          </Form.Group>
        </div>

        <hr />

        <div className='botones-buscar'>
          <Button
            variant='primary'
            type='button'
            className='btn-buscar'
            onClick={() => buscarPilotos(1)}>
            <i className='fa fa-search'> </i> Buscar
          </Button>

          <Button
            variant='primary'
            type='button'
            className='btn-agregar'
            onClick={() => agregarPiloto()}>
            <i className='fa fa-plus'> </i> Agregar
          </Button>
        </div>
      </Container>
    </Form>
  )
}

export default PilotosBuscar
