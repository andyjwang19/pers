import { motion, useAnimation } from 'framer-motion'
import { useEffect, useRef } from 'react'

const projects = [
  { src: '/rennygong1.png', alt: "Renny Gong's Website" },
  { src: '/hotspotCode_1.png', alt: 'HotSpot' },
  { src: '/chefmike1.jpg', alt: "Chef Mike's Alert Site" },
  { src: '/dm1.png', alt: 'Polyphonic Drum Machine' },
  { src: '/delia1.png', alt: "Delia's Site" },
  { src: '/ps_frontend1.png', alt: 'Personal Website' },
]

const seeds = [
  { x: 12, y: 15, dx: 55, dy: 40,  dur: 4.0 },
  { x: 58, y: 8,  dx: -50, dy: 60, dur: 5.2 },
  { x: 72, y: 55, dx: 40, dy: -55, dur: 3.8 },
  { x: 8,  y: 60, dx: 65, dy: 30,  dur: 5.5 },
  { x: 40, y: 70, dx: -55, dy: -40, dur: 4.6 },
  { x: 30, y: 25, dx: 35, dy: 65,  dur: 4.9 },
]

function FloatingImage({ src, alt, seed }: { src: string; alt: string; seed: typeof seeds[0] }) {
  const controls = useAnimation()
  const hovering = useRef(false)

  useEffect(() => {
    let frame = 0
    let cancelled = false

    async function float() {
      while (!cancelled && !hovering.current) {
        await controls.start({
          x: seed.dx,
          y: seed.dy,
          transition: { duration: seed.dur, ease: 'easeInOut' },
        })
        if (cancelled || hovering.current) break
        await controls.start({
          x: 0,
          y: 0,
          transition: { duration: seed.dur, ease: 'easeInOut' },
        })
        frame++
      }
    }

    float()
    return () => { cancelled = true }
  }, [])

  return (
    <motion.img
      src={src}
      alt={alt}
      animate={controls}
      whileHover={{ scale: 1.4 }}
      transition={{ type: 'spring', stiffness: 260, damping: 18 }}
      onHoverStart={() => {
        hovering.current = true
        controls.stop()
      }}
      onHoverEnd={() => {
        hovering.current = false
        // restart float
        async function refloat() {
          while (!hovering.current) {
            await controls.start({
              x: seed.dx,
              y: seed.dy,
              transition: { duration: seed.dur, ease: 'easeInOut' },
            })
            if (hovering.current) break
            await controls.start({
              x: 0,
              y: 0,
              transition: { duration: seed.dur, ease: 'easeInOut' },
            })
          }
        }
        refloat()
      }}
      style={{
        position: 'absolute',
        left: `${seed.x}%`,
        top: `${seed.y}%`,
        width: '180px',
        cursor: 'pointer',
        userSelect: 'none',
      }}
    />
  )
}

export default function PassionProjects() {
  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        overflow: 'hidden',
      }}
    >
      {projects.map((p, i) => (
        <FloatingImage key={p.src} src={p.src} alt={p.alt} seed={seeds[i]} />
      ))}
    </div>
  )
}
