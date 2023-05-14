export function Home() {
  return (
    <div className="grid grid-cols-10">
      <section id="section-right" className="col-span-8 p-5 pl-10">
        <div className="text-3xl text-white p-5 rounded-2xl font-bold bg-gradient-to-r from-cyan-500 to-blue-500">
          <p>Three.js</p>
          <p>If you don't make changes now,</p>
          <p>when will you make them?</p>
        </div>
      </section>
      <section id="section-left" className="col-span-2 p-5 pr-10">
        <div className="bg-gradient-to-r from-cyan-500 to-blue-500">
          <p>Portfolio Picture</p>
          <p>This is Aaron Prince!</p>
          <p>Born in 1999</p>
          <p>2022 Graduated at NCNU</p>
          <p>Computer Scientist Degree</p>
          <section>
            <p>Link to my github: ""</p>
            <p>Link to my CV: ""</p>
          </section>
        </div>
      </section>
    </div>
  );
}
