import getIcon from "utils/getIcon";

interface Props {
  name: string;
}

const Icon = ({ name }: Props) => {
  return (
    <div
      className="w-[1.5rem] h-[1.5rem] fill-subtext1"
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: getIcon(name) }}
    />
  );
};

export default Icon;
