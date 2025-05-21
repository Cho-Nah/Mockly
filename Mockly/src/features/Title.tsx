export function Title() {
  return (
    <>
      <div>
        <div className="mt-56 flex w-full flex-col items-center text-center">
          <div>
            <h1 className="text-8xl">Mockly</h1>
            <p className="mt-4 text-2xl">Description</p>
          </div>

          <button className="mt-8 h-12 w-56 rounded-sm bg-purple-500 p-2 text-stone-50">
            Default
          </button>
        </div>
      </div>
    </>
  );
}
