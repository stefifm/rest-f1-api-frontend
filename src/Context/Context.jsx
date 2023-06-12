import { createContext, useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { getEquipos } from '../api/equipos-server'
import { getPilotos, getPiloto, createUpdatePiloto, deletePiloto } from '../api/pilotos-service'
import { modalDialogService } from '../services/modal-dialog-service'
import Swal from 'sweetalert2'

export const F1Context = createContext()

export const F1ContextProvider = ({ children }) => {
  const [equipos, setEquipos] = useState([])

  const TituloAccionABMC = {
    A: '(Agregar)',
    B: '(Eliminar)',
    M: '(Modificar)',
    C: '(Consultar)',
    L: '(Listado)'
  }
  const [AccionABMC, setAccionABMC] = useState('L')

  const [NombrePiloto, setNombrePiloto] = useState('')
  const [Campeon, setCampeon] = useState('')

  const [pilotos, setPilotos] = useState(null)
  const [piloto, setPiloto] = useState(null)
  const [RegistrosTotal, setRegistrosTotal] = useState(0)
  const [Pagina, setPagina] = useState(1)
  const [Paginas, setPaginas] = useState([])

  const getEquiposData = async () => {
    const { data } = await getEquipos()
    setEquipos(data)
  }

  useEffect(() => {
    getEquiposData()
  }, [])

  const buscarPilotos = async (_pagina) => {
    if (_pagina && _pagina !== Pagina) {
      setPagina(_pagina)
    } else {
      _pagina = Pagina
    }
    modalDialogService.BloquearPantalla(true)
    const data = await getPilotos(NombrePiloto, Campeon, _pagina)
    modalDialogService.BloquearPantalla(false)
    setPilotos(data.Items)
    setRegistrosTotal(data.RegistrosTotal)

    const arrPaginas = []
    for (let i = 1; i <= Math.ceil(data.RegistrosTotal / 10); i++) {
      arrPaginas.push(i)
    }
    setPaginas(arrPaginas)
  }

  // Funcion para buscar piloto por id

  const getPilotoById = async (item, accionABMC) => {
    const data = await getPiloto(item)
    setPiloto(data)
    setAccionABMC(accionABMC)
  }

  // Funcion para consultar piloto

  const consultarPiloto = async (item) => {
    getPilotoById(item, 'C')
  }

  // Funcion para modificar un piloto

  const modificarPiloto = async (item) => {
    getPilotoById(item, 'M')
  }

  // Funcion para agregar un piloto
  const agregarPiloto = async () => {
    setAccionABMC('A')
    setPiloto({
      IdPiloto: 0,
      NombrePiloto: null,
      IdEquipoF1: null,
      FechaNacimiento: null,
      Campeon: null
    })
    setAccionABMC('A')
  }

  // Funcion para grabar un piloto

  const grabarPiloto = async (item) => {
    try {
      await createUpdatePiloto(item)
      Swal.fire({
        title: 'Éxito!',
        text: 'Registro grabado correctamente',
        icon: 'success',
        confirmButtonText: 'Ok'
      })
    } catch (error) {
      modalDialogService.Alert(error?.response?.data?.message ?? error.toString())
    }
    await buscarPilotos()
    volver()
  }

  // Funcion para eliminar un piloto
  const deletePilotoById = async (item) => {
    const res = await Swal.fire({
      title: 'Atención!',
      text: '¿Seguro desea eliminar el registro?',
      icon: 'question',
      showCancelButton: true,
      confirmButtonText: 'Si',
      cancelButtonText: 'No'
    })
    if (res.isConfirmed) {
      await deletePiloto(item)
      await buscarPilotos()
    }
  }

  const volver = () => {
    setAccionABMC('L')
  }

  return (
    <F1Context.Provider
      value={{
        equipos,
        NombrePiloto,
        setNombrePiloto,
        Campeon,
        setCampeon,
        pilotos,
        setPilotos,
        piloto,
        setPiloto,
        RegistrosTotal,
        setRegistrosTotal,
        Pagina,
        setPagina,
        Paginas,
        setPaginas,
        TituloAccionABMC,
        AccionABMC,
        setAccionABMC,
        buscarPilotos,
        consultarPiloto,
        modificarPiloto,
        agregarPiloto,
        grabarPiloto,
        deletePilotoById,
        volver
      }}>
      {children}
    </F1Context.Provider>
  )
}

F1ContextProvider.propTypes = {
  children: PropTypes.node.isRequired
}
