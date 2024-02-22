import { Music, Undo2, X  } from 'lucide-react'


const TinderCardButtons = () => {
  return (
    <>
      <button className=" btn btn-circle btn-outline btn-primary bg-clearGray  p-2">
        <X />{" "}
      </button>
      <button className=" btn btn-circle btn-outline  btn-primary bg-clearGray  p-2 ">
        <Music />{" "}
      </button>
      <button className=" btn btn-circle btn-outline  btn-primary bg-clearGray p-2 ">
        <Undo2 />
      </button>
    </>
  );
}

export default TinderCardButtons