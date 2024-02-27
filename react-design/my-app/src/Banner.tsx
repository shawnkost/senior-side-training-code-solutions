type Props = {
  item: string;
};

export function Banner({ item }: Props) {
  return (
    <div>
      <h3>{item}</h3>
    </div>
  );
}
