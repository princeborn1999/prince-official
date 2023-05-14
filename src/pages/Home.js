export function Home() {
  return (
    <div className="flex">
      <section id="section-right">
        <div className="text-3xl text-white p-10 rounded-2xl font-bold bg-gradient-to-r from-cyan-500 to-blue-500">
          <p>If you don't make changes now,</p>
          <p>when will you make them?</p>
        </div>
        <div>
          circle about Where should you look? Skill - Experience - Interest
        </div>
      </section>
      <section id="section-left" className="p-5 shadow-lg">
        <p>Portfolio Picture</p>
        <p>This is Aaron Prince!</p>
        <p>Born in 1999</p>
        <p>2022 Graduated at NCNU</p>
        <p>Computer Scientist Degree</p>
      </section>
    </div>
  );
}
