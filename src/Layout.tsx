import { Link, useLocation } from 'react-router-dom'

const navClass = 'absolute text-4xl leading-none p-[3px] hover:text-white hover:bg-black cursor-pointer flex items-center gap-1'

function Dot() {
  return <span className="w-2 h-2 rounded-full bg-black inline-block flex-shrink-0" />
}

export default function Layout({ children }: { children: React.ReactNode }) {
  const { pathname } = useLocation()
  const isEngineering = pathname.startsWith('/engineering')

  return (
    <div className="min-h-screen bg-white relative flex items-center justify-center p-[100px]">
      {isEngineering && (
        <Link to="/" className={`${navClass} text-2xl`} style={{ position: 'absolute', top: '2.5rem', left: 0 }}>{'<'}</Link>
      )}
      <Link to={isEngineering ? '/engineering' : '/art'} className={`${navClass} top-0 left-0`}>
        {isEngineering ? 'andy wang engineering' : 'andy wang'}
        {(pathname === '/art' || pathname === '/engineering') && <Dot />}
      </Link>
      <Link to={isEngineering ? '/engineering/work' : '/art/works'} className={`${navClass} top-0 right-0`}>
        {(pathname === '/art/works' || pathname.startsWith('/engineering/work')) && <Dot />}
        {isEngineering ? 'work experience' : 'works'}
      </Link>
      <Link to={isEngineering ? '/art' : '/art/about'} className={`${navClass} bottom-0 left-0`}>
        {isEngineering ? 'art' : 'about'}
        {pathname === '/art/about' && <Dot />}
      </Link>
      <Link to={isEngineering ? '/engineering/projects' : '/engineering'} className={`${navClass} bottom-0 right-0`}>
        {pathname.startsWith('/engineering/projects') && <Dot />}
        {isEngineering ? 'passion projects' : 'engineering'}
      </Link>
      {children}
    </div>
  )
}
