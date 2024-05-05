import { Link } from "./Link";

interface ProjectProps {
  name: string;
  repository: string;
  description: string;
  gifPath: string;
  createdAt: string;
}

export function Project(props: ProjectProps) {
  return (
    <div className="mb-8 flex flex-col gap-3 sm:flex-row sm:gap-6">
      <span className="min-w-24 font-medium">{props.createdAt}</span>
      <div className="space-y-1.5">
        <img src={props.gifPath} className="mb-4 h-8 w-8 rounded-sm" />
        <h3>
          <Link label={props.name} path={props.repository} />
        </h3>
        <p>{props.description}</p>
      </div>
    </div>
  );
}
