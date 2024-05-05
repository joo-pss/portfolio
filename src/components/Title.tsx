interface TitleProps {
  text: string;
}

export function Title(props: TitleProps) {
  return <h2 className="mb-8 mt-10 font-medium text-zinc-50">{props.text}</h2>;
}
