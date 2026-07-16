type Props = {
  title: string;
  subtitle: string;
};

export default function SectionTitle({
  title,
  subtitle,
}: Props) {
  return (
    <div className="mb-14 text-center">

      <p className="uppercase tracking-[0.4em] text-sm text-yellow-600">
        {subtitle}
      </p>

      <h2 className="mt-3 text-5xl font-bold">
        {title}
      </h2>

    </div>
  );
}