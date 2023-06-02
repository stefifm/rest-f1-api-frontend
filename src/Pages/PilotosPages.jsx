import { useContext } from 'react'
import { F1Context } from '../Context/Context'

import PilotosBuscar from '../components/Pilotos/PilotosBuscar'
import PilotosListados from '../components/Pilotos/PilotosListados'
import PilotosForm from '../components/Pilotos/PilotosForm'

function PilotosPages() {
  const { TituloAccionABMC, AccionABMC, pilotos } = useContext(F1Context)

  return (
    <>
      {AccionABMC === 'L' && <PilotosBuscar />}
      {AccionABMC === 'L' && pilotos?.length > 0 && <PilotosListados />}
      {AccionABMC === 'L' && pilotos?.length === 0 && (
        <div className='alert alert-info mensajesAlert'>
          <i className='fa fa-exclamation-sign'></i>
          No se encontraron registros...
        </div>
      )}

      {AccionABMC !== 'L' && <PilotosForm />}
    </>
  )
}

export default PilotosPages
