import { Heart , ChevronRight, X } from "lucide-react";

const TinderCardButtons = () => {
  return (
    <div className="min-w-full m-auto flex justify-between p-6">
      <button className=" btn btn-circle btn-outline text-red-600 bg-clearGray size-12 ">
        <X />
      </button>
      <button className=" btn btn-circle btn-outline text-pink-600  bg-clearGray  size-12  ">
        <Heart />
      </button>
      <button className=" btn btn-circle btn-outline text-green-600  bg-clearGray size-12  ">
        <ChevronRight />
      </button>
    </div>
  );
};

export default TinderCardButtons;
