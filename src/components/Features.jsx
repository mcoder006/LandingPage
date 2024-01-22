import React from 'react'

const Features = () => {
  return (
    <div className="container mx-auto my-10 md:grid flex md:grid-cols-2 space-y-12 rounded p-3 md:text-xl flex-col">
      <div>
        <h1 className="text-xl md:text-2xl md:text-left text-center max-w-md md:texr-4xl font-bold mb-3 md:mb-4">
          What's new about manage ?
        </h1>
        <p className="max-w-sm text-center text-darkGrayishBlue md:text-left">
          Manage provides all the functionality of your team needs, without the
          complexity. Our software is tailor-made for mordern digital product
          teams.
        </p>
      </div>

      {/* Numbered List */}

      <div className="flex flex-col space-y-6 md:w-3/4">
        <div className="flex justify-between w-full">
          <button className="flex px-2 rounded-full bg-orange-500 text-white h-fit">
            1
          </button>
          <p className="text-sm w-3/4">
            <h1 className="font-bold text-xl bg-brightRedSupLight p-1 rounded ">
              Track Companys wide Progress
            </h1>
            Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Corporis blanditiis quae molestiae
            tempora eum cumque dolorem aut reiciendis sint minus.
          </p>
        </div>

        <div className="flex justify-between w-full">
          <button className="flex px-2 rounded-full bg-orange-500 text-white h-fit">
            2
          </button>
          <p className="text-sm w-3/4">
            <h1 className="font-bold text-xl bg-brightRedSupLight p-1 rounded ">
              Advanced Built in reports
            </h1>
            Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Corporis blanditiis quae molestiae
            tempora eum cumque dolorem aut reiciendis sint minus.
          </p>
        </div>

        <div className="flex justify-between w-full">
          <button className="flex px-2 rounded-full bg-orange-500 text-white h-fit">
            3
          </button>
          <p className="text-sm w-3/4">
            <h1 className="font-bold text-xl bg-brightRedSupLight p-1 rounded ">
              Everything you needs in one place
            </h1>
            Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Corporis blanditiis quae molestiae
            tempora eum cumque dolorem aut reiciendis sint minus.
          </p>
        </div>

        <div className="flex justify-between w-full">
          <button className="flex px-2 rounded-full bg-orange-500 text-white h-fit">
            4
          </button>
          <p className="text-sm w-3/4">
            <h1 className="font-bold text-xl bg-brightRedSupLight p-1 rounded ">
              Track Companys wide Progress
            </h1>
            Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Corporis blanditiis quae molestiae
            tempora eum cumque dolorem aut reiciendis sint minus.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Features