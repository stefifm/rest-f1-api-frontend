import { useContext } from 'react'
import { F1Context } from '../../Context/Context'
import Form from 'react-bootstrap/esm/Form'
import Button from 'react-bootstrap/esm/Button'
import { useForm } from 'react-hook-form'
import './pilotosFormulario.css'
const PilotosForm = () => {
  const { equipos, AccionABMC, piloto, grabarPiloto, volver } = useContext(F1Context)

  const {
    handleSubmit,
    register,
    formState: { errors, isValid, touchedFields, isSubmitted }
  } = useForm({
    values: piloto
  })

  const onSubmit = (data) => {
    grabarPiloto(data)
  }

  if (!piloto) return null

  return (
    <Form
      className='form-registro'
      onSubmit={handleSubmit(onSubmit)}>
      <fieldset disabled={AccionABMC === 'C'}>
        {/* Campo Nombre de Piloto */}
        <Form.Group
          className='mb-3'
          controlId='NombrePilotoGroup'>
          <Form.Label>
            Nombre <span className='text-danger'>*</span>{' '}
          </Form.Label>
          <Form.Control
            type='text'
            {...register('NombrePiloto', {
              required: { value: true, message: 'NombrePiloto es requerido' },
              minLength: { value: 3, message: 'NombrePiloto debe tener al menos 3 caracteres' },
              maxLength: { value: 50, message: 'NombrePiloto debe tener como máximo 50 caracteres' }
            })}
            autoFocus
            className={`${errors.NombrePiloto?.message ? 'is-invalid' : ''}`}
          />
          {errors.NombrePiloto && (
            <Form.Text className='text-danger'>{errors.NombrePiloto.message}</Form.Text>
          )}
        </Form.Group>

        {/* Campo FechaNacimiento */}
        <Form.Group
          className='mb-3'
          controlId='FechaNacimientoGroup'>
          <Form.Label>
            Fecha de Nacimiento <span className='text-danger'>*</span>
          </Form.Label>
          <Form.Control
            type='date'
            {...register('FechaNacimiento', {
              required: { value: true, message: 'FechaNacimiento es requerido' }
            })}
            className={`${errors.FechaNacimiento?.message ? 'is-invalid' : ''}`}
          />
          {errors.FechaNacimiento && (
            <Form.Text className='text-danger'>{errors.FechaNacimiento.message}</Form.Text>
          )}
        </Form.Group>

        {/* Campo Id Equipo de F1 */}
        <Form.Group
          className='mb-3'
          controlId='IdEquipoF1Group'>
          <Form.Label>
            Equipo de F1 <span className='text-danger'>*</span>
          </Form.Label>
          <Form.Select
            {...register('IdEquipoF1', {
              required: { value: true, message: 'IdEquipoF1 es requerido' }
            })}>
            <option
              value=''
              key={1}></option>
            {equipos.map((item) => (
              <option
                key={item.IdEquipoF1}
                value={item.IdEquipoF1}>
                {item.NombreEquipo}
              </option>
            ))}
          </Form.Select>
          {errors.IdEquipoF1 && (
            <Form.Text className='text-danger'>{errors.IdEquipoF1.message}</Form.Text>
          )}
        </Form.Group>

        {/* Campo cantidad de carreras */}
        <Form.Group
          className='mb-3'
          controlId='CarrerasGroup'>
          <Form.Label>
            Carreras disputadas <span className='text-danger'>*</span>
          </Form.Label>
          <Form.Control
            type='number'
            {...register('CantidadCarreras', {
              required: { value: true, message: 'CantidadCarreras es requerido' },
              min: { value: 0, message: 'CantidadCarreras debe ser mayor o igual a 0' },
              max: { value: 1000000, message: 'CantidadCarreras debe ser menor a 1000000' }
            })}
          />
          {errors.CantidadCarreras && (
            <Form.Text className='text-danger'>{errors.CantidadCarreras.message}</Form.Text>
          )}
        </Form.Group>

        {/* Campo Campeon */}
        <Form.Group
          className='mb-3'
          controlId='CampeonGroup'>
          <Form.Label>
            Campeón <span className='text-danger'>*</span>
          </Form.Label>
          <Form.Select {...register('Campeon')}>
            <option value=''></option>
            <option value={true}>SI</option>
            <option value={false}>NO</option>
          </Form.Select>
        </Form.Group>
      </fieldset>

      {/* Botones */}
      <div className='botones-form'>
        {AccionABMC !== 'C' && (
          <Button
            className='btn-save'
            type='submit'>
            <i className='fa fa-save pe-1'></i> Guardar
          </Button>
        )}
        <Button
          className='btn-cancel'
          type='button'
          onClick={() => volver()}>
          <i className='fa fa-undo'></i>
          {AccionABMC === 'C' ? ' Volver' : ' Cancelar'}
        </Button>
      </div>

      {/* Mensaje de error */}
      {!isValid && isSubmitted && (
        <div className='alert alert-danger mt-4'>
          <i className='fa fa-exclamation-sign'></i>
          <strong> Error: </strong>Verifique que todos los campos estén completos
        </div>
      )}
    </Form>
  )
}

export default PilotosForm
