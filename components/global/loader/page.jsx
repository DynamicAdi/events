import React from 'react'

function Loader() {
  return (
    <div className=" flex-col gap-4 w-screen h-screen flex items-center justify-center">
  <div
    className="w-20 h-20 border-4 border-transparent text-primary text-4xl animate-spin flex items-center justify-center border-t-primary rounded-full"
  >
    <div
      className="w-16 h-16 border-4 border-transparent text-primary text-2xl animate-spin flex items-center justify-center border-t-primary rounded-full"
    ></div>
  </div>
</div>

  )
}

export default Loader