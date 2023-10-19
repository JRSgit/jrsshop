

function SugestionTop() {
  return (
    <div className="flex gap-3 mt-4 ml-2">
      <h3 className="text-md font-bold">Talves você goste: </h3>
      <div >
        <ul className="flex gap-2">
          <li className="text-blue-400 underline"><a href="#">polos</a>  </li>
          <li className="text-blue-400 underline"><a href="#">social</a>  </li>
          <li className="text-blue-400 underline"><a href="#">esports</a>  </li>
          <li className="text-blue-400 underline"><a href="#">brim</a>  </li>
          <li className="text-blue-400 underline"><a href="#">bermudas</a> </li>
        </ul>
      </div>
    </div>
  )
}

export default SugestionTop