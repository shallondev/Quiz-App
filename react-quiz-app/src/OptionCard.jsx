import React from 'react'

function OptionCard() {
  return (
    <section className="ml-40">
      <div id="quiz-coercion" className="rounded-xl px-5 py-6 bg-slate-700 hover:bg-slate-600 hover:cursor-pointer mb-4 pr-40">
        <h1 className="text-white text-3xl font-bold">
          <span className="rounded-lg text-green-600 bg-green-200 p-1 mr-5" id="quiz-0">'1'</span>
          <span className="rounded-lg text-gray-600 bg-gray-200 p-1 mr-5 px-3 hidden" id="choice-0">A</span>     
          <span >JS Coercion</span>
      </h1>
      </div>  

      <div id="quiz-coercion2" className="rounded-xl px-3 py-6 bg-slate-700 hover:bg-slate-600 hover:cursor-pointer mb-4 hidden">
        <h1 className="text-white text-3xl font-bold">
          <span className="rounded-lg text-gray-600 bg-gray-200 p-1 mr-5 px-3 hidden" id="choice-1">B</span> 
        </h1>
      </div>  

      <div id="quiz-coercion3" className="rounded-xl px-3 py-6 bg-slate-700 hover:bg-slate-600 hover:cursor-pointer mb-4 hidden">
        <h1 className="text-white text-3xl font-bold">
          <span className="rounded-lg text-gray-600 bg-gray-200 p-1 mr-5 px-3 hidden" id="choice-2">C</span> 
        </h1>
      </div>

      <div id="quiz-coercion3" className="rounded-xl px-3 py-6 bg-slate-700 hover:bg-slate-600 hover:cursor-pointer hidden">
        <h1 className="text-white text-3xl font-bold">
          <span className="rounded-lg text-gray-600 bg-gray-200 p-1 mr-5 px-3 hidden" id="choice-3">D</span>
        </h1>
      </div> 
    </section>
  )
}

export default OptionCard