function StyleLoader({ length }: { length: number }) {
  return new Array(length).fill(0).map((_number, index: number) => {
    return (
      <div key={index} className="animate-pulse flex flex-col items-center">
        <p className="rounded-xl mb-1 bg-gray-200 w-[2.7rem] h-[1rem]" />
        <div className="bg-gray-200 w-[4.3rem] rounded-xl h-[4.3rem] border-[1px]" />
      </div>
    );
  });
}

export default StyleLoader;
