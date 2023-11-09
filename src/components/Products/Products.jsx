import React from 'react'

function Products() {
  return (
    <div>
      <div className="flex">
        <div className="w-1/3"></div>
        <div className="w-1/3">
          <h2 className="uppercase text-2xl font-bold text-slate-800 my-5">
            Cart
          </h2>
          <div className="border p-3 justify-between rounded-lg items-center flex mt-2 gap-2">
            <Link>
              <img className="w-16 h-16" />
            </Link>
            <Link className="flex-1">
              <p className="hover:underline font-semibold text-slate-700"></p>
            </Link>
            <div className="flex flex-col items-center">
              <button
                type="button"
                onClick
                className="rounded-lg uppercase text-red-700 font-semibold hover:opacity-70"
              >
                delete
              </button>
              <Link>
                <button className="rounded-lg uppercase text-green-700 font-semibold hover:opacity-70">
                  edit
                </button>
              </Link>
            </div>
          </div>
          <div className="w-1/3"></div>
        </div>
      </div>
    </div>
  )
}

export default Products