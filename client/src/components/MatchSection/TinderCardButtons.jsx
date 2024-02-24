import { Music, Undo2, X } from "lucide-react";

const TinderCardButtons = () => {
  return (
    <div className="min-w-full m-auto flex justify-between p-8">
      <button className=" btn btn-circle btn-outline btn-primary bg-clearGray text-red-600  size-20 ">
        <X />
      </button>
      <button className=" btn btn-circle btn-outline  btn-primary bg-clearGray  size-20  ">
        <Music />
      </button>
      <button className=" btn btn-circle btn-outline  btn-primary bg-clearGray size-20  ">
        <Undo2 />
      </button>
    </div>
  );
};

export default TinderCardButtons;
