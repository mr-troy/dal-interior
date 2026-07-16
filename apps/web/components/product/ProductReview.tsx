import { Product } from "@/types/product";

type Props = {
  product: Product;
};

export default function ProductReview({ product }: Props) {
  if (!product.reviews?.length) {
    return null;
  }

  return (
    <section className="mt-20">
      <div className="mb-10">
        <h2 className="text-3xl font-bold">Ulasan Pelanggan</h2>

        <p className="mt-2 text-lg text-yellow-600">
          ⭐ {product.rating} ({product.reviewCount} Review)
        </p>
      </div>

      <div className="space-y-6">
        {product.reviews.map((review) => (
          <article
            key={review.id}
            className="rounded-2xl border border-neutral-200 bg-white p-6"
          >
            <div className="mb-3 text-yellow-500">
              {"⭐".repeat(review.rating)}
            </div>

            <p className="leading-7 text-neutral-700">"{review.comment}"</p>

            <p className="mt-4 font-semibold">
              {review.author}
              <span className="font-normal text-neutral-500">
                {" "}
                • {review.city}
              </span>
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
