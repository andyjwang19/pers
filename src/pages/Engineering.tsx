export default function Engineering() {
  return (
    <div className="flex items-center gap-12" style={{ maxHeight: 'calc(100vh - 200px)' }}>
      <img
        src="/andy_engineering.jpeg"
        alt="Andy Wang"
        className="object-cover rounded-sm flex-shrink-0"
        style={{ height: '280px', width: 'auto' }}
      />
      <p className="text-lg leading-relaxed max-w-[320px]">
        Andy Wang is a software engineer based in New York City, currently working as the founding
        product engineer at Spur (YC 24). He has skills and experience in fullstack AI and product
        engineering. He has a strong interest in both distributed systems and UX design.
      </p>
    </div>
  )
}
