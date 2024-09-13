import IconNoResults from '../Icons/IconNoResults';
import Button from '../Button/Button';

type NoResultProps = {
  handleTriggerFocusSearchInputField: () => void;
};

const NoResult = (props: NoResultProps) => {
  const { handleTriggerFocusSearchInputField } = props;
  return (
    <div className='w-full flex items-center justify-center pt-[100px]'>
      <div className='w-full lg:w-1/2'>
        <IconNoResults />
        <div className='flex items-center flex-col justify-center'>
          <h2 className='text-center text-black text-xl font-semibold leading-loose pb-2'>
            There’s no user here
          </h2>
          <p className='text-center text-black text-base font-normal leading-relaxed pb-4'>
            Let's explore the github universal <b>now</b>!
          </p>
          <div className='flex gap-3'>
            <Button onClick={handleTriggerFocusSearchInputField}>
              Get's started
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NoResult;
