import Button from '../atoms/Button';
import ManufacturingProcessList from '../molecules/ManufacturingProcessList';

const ManufacturingProcessSection = () => {
  return (
    <>
      <div className="flex flex-col gap-10 py-36 px-24 max-w-[1444px] mx-auto">
        <div className='flex justify-between items-center'>
          <div className='flex flex-col gap-2'>
            <p className='text-slate-500 text-base font-semibold leading-[26px] uppercase'>PROCESS</p>
            <p className='text-slate-800 text-[40px] font-medium leading-[50px]'>Our Manufacturing Process</p>
          </div>
          <div>
            <Button variant='primary-button'>Consult Now!</Button>
          </div>
        </div>
        <div className=''>
          <ManufacturingProcessList />
        </div>
      </div>
    </>
  );
};

export default ManufacturingProcessSection;
