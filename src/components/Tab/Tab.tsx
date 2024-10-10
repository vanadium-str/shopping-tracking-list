type Props = {
  name: string;
  isActive: boolean;
  handleClick(): void;
};

const Tab = (props: Props) => {
  const { name, isActive } = props;

  return (
    <div
      className={`
        mx-3 cursor-pointer 
        ${isActive && 'text-white border-b-2 border-solid border-blue-500'}
      `}
      onClick={props.handleClick}
    >
      {name}
    </div>
  );
};

export default Tab;
