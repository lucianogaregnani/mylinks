function LinksLoader() {
  return new Array(3).fill(0).map(() => (
    <div className="relative animate-pulse  gap-4 border-gray-200 w-full rounded-2xl h-[8.5rem] pl-[4rem] flex flex-col justify-center">
      <div className="absolute left-2 w-[1rem] h-[2rem] bg-gray-200 rounded-sm" />
      <div className="flex gap-2">
        <div className="bg-gray-200 animate-pulse w-[10rem] h-[1rem]" />
        <div className="h-[1rem] w-[1rem] rounded-sm bg-gray-200" />
      </div>

      <div className="flex gap-2">
        <div className="bg-gray-200 animate-pulse w-[10rem] h-[1rem]" />
        <div className="h-[1rem] w-[1rem] rounded-sm bg-gray-200" />
      </div>
      <div className="flex gap-4">
        <div className="h-[1rem] w-[1rem] rounded-full bg-gray-200" />
        <div className="h-[1rem] w-[1rem] rounded-full bg-gray-200" />
      </div>

      <div className="absolute right-6 w-[2.2rem] h-[1.2rem] bg-gray-200 rounded-full" />
    </div>
  ));
}

export default LinksLoader;
