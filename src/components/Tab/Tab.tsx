type Props = {
  name: string;
  isActive: boolean;
}

const Tab = (props: Props) => {
  return (
    <div>
      {props.name}
    </div>
  )
}

export default Tab;