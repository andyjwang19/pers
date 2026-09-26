export default function About() {
  return (
    <div
      className="relative rounded-3xl"
      style={{ maxWidth: 'calc(100vw - 200px)', maxHeight: 'calc(100vh - 200px)' }}
    >
      <img
        src="/springshow_p1.png"
        alt="2024 spring show"
        className="rounded-3xl w-full h-full object-contain"
        style={{ maxWidth: 'calc(100vw - 200px)', maxHeight: 'calc(100vh - 200px)' }}
      />
      <div className="absolute inset-0 flex items-center justify-start pl-20">
        <p className="text-lg text-white text-left max-w-[180px]">
          Andy Wang is a performance and oil paint artist, and creative technologist based in New York City.
        </p>
      </div>
    </div>
  )
}
