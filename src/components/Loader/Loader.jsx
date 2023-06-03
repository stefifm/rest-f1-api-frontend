import './loader.css'
import loader from '../../assets/loader.svg'

function Loader() {
  return (
    <div className='loader'>
      <img
        src={loader}
        alt='loader'
        className='wheel'
      />
      <div className='road'></div>
    </div>
  )
}

export default Loader
