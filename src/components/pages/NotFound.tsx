import MainTemplate from "../templates/MainTemplate";

const NotFound = () => {
  return (
    <MainTemplate>
      <div className="flex items-center justify-center h-screen">
        <h1 className='text-slate-800 font-medium text-4xl'>Content not Found</h1>
      </div>
    </MainTemplate>
  );
};

export default NotFound;
