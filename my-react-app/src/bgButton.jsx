function BgButton({changeBg}) {
  
  return (

<div className="flex justify-center mt-5 bg-amber-100 p-2 rounded-3xl">
  <button onClick={() => changeBg('bg-blue-500')}
  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-10 ml-10">
    blue
</button>
<button onClick={() => changeBg('bg-green-500')}
className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded  mr-10 ml-10">
    green
</button>   
<button onClick={() => changeBg('bg-yellow-500')}
className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded  mr-10 ml-10">
  yellow
   </button>
<button onClick={() => changeBg('bg-red-500')}
 className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded  mr-10 ml-10">
    red
</button>
<button onClick={() => changeBg('bg-neutral-800')}
 className="bg-neutral-800 hover:bg-black text-white font-bold py-2 px-4 rounded  mr-10 ml-10">
    neutral
</button>
<button onClick={() => changeBg('bg-black')}
 className="bg-neutral-500 hover:bg-black text-white font-bold py-2 px-4 rounded  mr-10 ml-10">
    Reset
</button>
</div>
  )
}
export default BgButton