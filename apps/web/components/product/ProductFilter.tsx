type Props = {
  categories: string[];
  value: string;
  onChange: (value: string) => void;
};

export default function ProductFilter({ categories, value, onChange }: Props) {
  return (
    <section className="pb-12">
      <div className="mx-auto flex max-w-7xl flex-wrap gap-4 px-6">
        {categories.map((item) => (
          <button
            key={item}
            type="button"
            onClick={() => onChange(item)}
            className={`rounded-full border px-5 py-3 transition ${
              value === item
                ? "border-black bg-black text-white"
                : "border-neutral-300 hover:bg-black hover:text-white"
            }`}
          >
            {item}
          </button>
        ))}
      </div>
    </section>
  );
}
