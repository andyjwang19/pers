const sections = ['Spur', 'IXL', 'Various internships']

export default function WorkExperience() {
  return (
    <div className="flex -m-[100px] min-h-screen w-screen">
      <div className="flex-1" />
      <div className="border-l-2 border-black flex flex-col w-40 flex-shrink-0">
        {sections.map((section, i) => (
          <div
            key={section}
            className={`px-3 py-4 text-sm cursor-pointer hover:bg-black hover:text-white${i < sections.length - 1 ? ' border-b border-black' : ''}`}
          >
            {section}
          </div>
        ))}
      </div>
    </div>
  )
}
