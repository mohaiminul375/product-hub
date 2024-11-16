export default function ProductCard({ product }) {
  console.log(product);
  const { _id, name, image, category, price,description } = product;
  return (
    <div className="card card-compact bg-base-100 md:w-72 shadow-xl">
      <figure>
        <img src={image} alt={name} />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p className="text-sm font-semibold">Category: {category}</p>
        <p className="text-sm font-semibold">Price: ${price}</p>
        <div className="w-full">
          <button
            onClick={() => document.getElementById(_id).showModal()}
            className="py-3 rounded-md border-2 hover:bg-[#1E99F5] hover:duration-300 hover:text-white font-bold  w-full"
          >
            View Details
          </button>
        </div>
      </div>
      <dialog id={_id} className="modal">
        <div className="modal-box">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>
          <div>
            <h1>Product Id: {_id}</h1>
            <div className="space-y-2 mt-3">
              <h2 className="font-bold">Product Name: <span className="text-[#1E99F5]">{name}</span></h2>
              <p className="font-bold">Description: <span className="text-[#1E99F5] font-normal">{description}</span></p>
              <p className="font-semibold">Category: <span className="text-[#1E99F5]">{category}</span></p>
              <p className="font-semibold">Price: <span className="text-[#1E99F5]">${price}</span></p>
              {/* <p>Price: ${price}</p> */}
            </div>
          </div>
        </div>
      </dialog>
    </div>
  );
}
