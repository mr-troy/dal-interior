type Props = {
  value: string;
  onChange: (value: string) => void;
};

export default function ProductSearch({ value, onChange }: Props) {
  return (
    <section className="py-10">
      <div className="mx-auto max-w-7xl px-6">
        <input
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder="Cari produk..."
          className="
            w-full
            rounded-full
            border
            border-neutral-300
            px-6
            py-4
            text-lg
            outline-none
            transition
            focus:border-amber-500
          "
        />
      </div>
    </section>
  );
}
