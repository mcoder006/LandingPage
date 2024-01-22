import React from 'react'

const Testamonials = () => {
  return (
    <div className="container mx-auto max-w-6xl px-5">
      <div className="text-4xl font-bold text-center capitalize">
        What's different about manage ?
      </div>

      {/* Testamonials container */}
      <div className="flex flex-col mt-24  md:flex-row md:space-x-6">
        {/* Testamonials 1 */}
        <div className="flex flex-col items-center p-6 space-y-6 rounded-lg bg-veryLightGray md:w-1/3">
          <img
            className="w-16 -mt-14 "
            src="data:image/jpeg;base64,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"
            alt=""
          />
          <div className="font-bold text-center">
            <h1 className="texl-xl">Anisha</h1>
            <p className="font-normal">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Optio
              inventore sequi ea temporibus ipsam minima excepturi deserunt,
              amet delectus repellat quidem, fugiat odio, praesentium nemo
              reiciendis tempore sapiente tempora animi?
            </p>
          </div>
        </div>

        <div className="md:flex flex-col items-center p-6 space-y-6 rounded-lg bg-veryLightGray md:w-1/3 hidden">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6nQrJr_n6tn2D0xkdPR3dz1CS_2ej2z1KVbithDmW0whW1vkD117f6MYKFPTbGdooLhI&usqp=CAU"
            alt="Dev"
            className="w-16 -mt-14 rounded"
          />
          <div className="font-bold text-center">
            <h1 className="texl-xl">Dev</h1>
            <p className="font-normal">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Optio
              inventore sequi ea temporibus ipsam minima excepturi deserunt,
              amet delectus repellat quidem, fugiat odio, praesentium nemo
              reiciendis tempore sapiente tempora animi?
            </p>
          </div>
        </div>

        <div className="md:flex flex-col items-center p-6 space-y-6 rounded-lg bg-veryLightGray md:w-1/3 hidden">
          <img
            src="https://www.shutterstock.com/image-vector/young-smiling-man-avatar-brown-600nw-2261401207.jpg"
            alt="Dev"
            className="w-16 -mt-14 rounded"
          />
          <div className="font-bold text-center">
            <h1 className="texl-xl">Rakesh</h1>
            <p className="font-normal">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Optio
              inventore sequi ea temporibus ipsam minima excepturi deserunt,
              amet delectus repellat quidem, fugiat odio, praesentium nemo
              reiciendis tempore sapiente tempora animi?
            </p>
          </div>
        </div>
      </div>
      <div className="mx-auto md:block w-full justify-center items-center py-5 mb-6">
        <a className="bg-orange-500 text-white py-1 rounded-full text-center justify-center items-center text-[16px] lg:block w-fit hover:bg-orange-600 mx-auto text-xl px-3">
          Get Started
        </a>
      </div>
    </div>
  );
}

export default Testamonials