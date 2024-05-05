import { Title } from "./Title";
import { Link } from "./Link";

export function Connect() {
  const networks = [
    {
      name: "GitHub",
      label: "@joo-pss",
      path: "https://github.com/joo-pss",
    },
    {
      name: "LinkedIn",
      label: "João Silva",
      path: "https://www.linkedin.com/in/joaopss255",
    },
  ];

  return (
    <>
      <Title text="Connect" />
      {networks.map((network, index) => (
        <div
          key={network.name}
          className="mb-4 flex flex-col gap-1 sm:mb-2 sm:flex-row sm:gap-6"
        >
          <span className="min-w-24 font-medium">{network.name}</span>
          <span className={`${index === 1 && "ml-0.5"}`}>
            <Link label={network.label} path={network.path} />
          </span>
        </div>
      ))}
    </>
  );
}
