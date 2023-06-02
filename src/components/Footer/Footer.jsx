import './footer.css'

function Footer() {
  return (
    <footer className='text-center'>
      <span className='titulo-copy'>@ F1 API</span>
      <span className='m-4'>-</span>
      Seguinos en:
      <a
        href='https://www.linkedin.com/in/stefania-bruera/'
        className='social linkedin'
        target='_blank'
        rel='noreferrer'>
        <i className='fab fa-linkedin'></i>
      </a>
      <a
        href='https://twitter.com/stefifm'
        className='social twitter'
        target='_blank'
        rel='noreferrer'>
        <i className='fab fa-twitter-square'></i>
      </a>
      <a
        href='https://github.com/stefifm'
        className='social github'
        target='_blank'
        rel='noreferrer'>
        <i className='fab fa-github-square'></i>
      </a>
    </footer>
  )
}

export default Footer
