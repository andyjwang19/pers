import { Link } from 'react-router-dom'
import { useState } from 'react'

const navClass = 'absolute text-4xl leading-none p-[3px] text-white hover:text-black hover:bg-white cursor-pointer'
const dupClass = 'fixed text-4xl leading-none p-[3px] text-black hover:text-white hover:bg-black cursor-pointer'

export default function Home() {
  const [anyHovered, setAnyHovered] = useState(false)
  const [engineeringHovered, setEngineeringHovered] = useState(false)

  const hoverProps = {
    onMouseEnter: () => setAnyHovered(true),
    onMouseLeave: () => setAnyHovered(false),
  }

  const engineeringHoverProps = {
    onMouseEnter: () => { setAnyHovered(true); setEngineeringHovered(true) },
    onMouseLeave: () => { setAnyHovered(false); setEngineeringHovered(false) },
  }

  return (
    <div className="min-h-screen bg-white flex items-center justify-center p-[100px]">
      <div className="relative">
        <Link to="/art" className={`${navClass} top-0 left-0`} {...hoverProps}>andy wang</Link>
        <Link to="/art/works" className={`${navClass} top-0 right-0`} {...hoverProps}>works</Link>
        <Link to="/art/about" className={`${navClass} bottom-0 left-0`} {...hoverProps}>about</Link>
        <Link to="/engineering" className={`${navClass} bottom-0 right-0`} {...engineeringHoverProps}>engineering</Link>
        <Link to="/" className={`${navClass} text-2xl`} style={{ position: 'absolute', top: '2.5rem', left: 0 }}>{'<'}</Link>
        <video
          src={`${import.meta.env.BASE_URL}GrowingFlowers_last4min_compressed.mp4`}
          autoPlay
          loop
          muted
          playsInline
          style={{ width: '500px', maxWidth: 'calc(100vw - 200px)', maxHeight: 'calc(100vh - 200px)', display: 'block' }}
        />
      </div>

      {anyHovered && (
        <>
          <Link to="/art" className={`${dupClass} top-0 left-0`}>{engineeringHovered ? 'andy wang engineering' : 'andy wang'}</Link>
          <Link to="/art/works" className={`${dupClass} top-0 right-0`}>{engineeringHovered ? 'work experience' : 'works'}</Link>
          <Link to="/art/about" className={`${dupClass} bottom-0 left-0`}>about</Link>
          <Link to="/engineering" className={`${dupClass} bottom-0 right-0`}>{engineeringHovered ? 'passion projects' : 'engineering'}</Link>
        </>
      )}
    </div>
  )
}
