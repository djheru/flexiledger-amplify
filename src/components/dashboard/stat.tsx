import { Divider } from '../catalyst/divider';

export function Stat({
  title,
  value,
  icon,
}: {
  title: string;
  value: string;
  change: string;
  icon: JSX.Element;
}) {
  return (
    <div>
      <Divider />
      <div className="ml-2 mt-4 text-lg/6 font-medium sm:text-sm/6">
        {title}
      </div>
      <div className="mb-4 ml-2 mt-2 flex items-center gap-2 text-xl font-semibold sm:text-2xl md:text-3xl">
        {icon}
        <span>{value}</span>
      </div>
      <Divider />
    </div>
  );
}
