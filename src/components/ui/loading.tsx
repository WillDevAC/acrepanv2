import { RotatingLines } from "react-loader-spinner";

export function Loading() {
  return (
    <div className="fixed top-0 left-0 w-screen h-screen flex items-center justify-center bg-black bg-opacity-50 z-10">
      <div className="flex items-center justify-center p-3 rounded-lg bg-gray-800">
        <RotatingLines width="30" strokeColor="white"/>
      </div>
    </div>
  );
}
