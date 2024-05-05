import { ArrowUpRight } from "@phosphor-icons/react";

interface LinkProps {
  path: string;
  label: string;
}

export function Link(props: LinkProps) {
  return (
    <span className="inline-block">
      <a
        href={props.path}
        target="_blank"
        className="flex gap-1 text-zinc-50 hover:underline"
      >
        {props.label}
        <span>
          <ArrowUpRight className="mt-1" />
        </span>
      </a>
    </span>
  );
}
