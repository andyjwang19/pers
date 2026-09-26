import { Link } from 'react-router-dom'

const linkClass = 'text-4xl leading-none p-[3px] hover:text-white hover:bg-black'

export default function Splash() {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center">
      <div className="flex flex-col items-center gap-4">
        <Link to="/engineering" className={linkClass}>andy wang</Link>
        <div className="relative flex items-center justify-center" style={{ height: '35vh', width: '35vh' }}>
          <Link to="/personal" className={`${linkClass} absolute right-full mr-8 whitespace-nowrap`}>personal</Link>
          <img
            src="/afternoon_sq.png"
            alt="Afternoon"
            style={{ height: '35vh', width: 'auto' }}
          />
          <Link to="/art" className={`${linkClass} absolute left-full ml-8 whitespace-nowrap`}>art</Link>
        </div>
        <Link to="/engineering" className={linkClass}>engineering</Link>
      </div>
    </div>
  )
}
