export interface Product {
  id: number;
  slug: string;
  title: string;
  image: string;
  gallery?: string[];
  price: number;
  comparePrice?: number;
  rating: number;
  reviewCount: number;
  category: string;
  badge?: string;
  isFeatured?: boolean;

  description?: string;

  specifications?: {
    material: string;
    color: string;
    thickness: string;
    warranty: string;
  };

  reviews?: ProductReview[];
}

export type ProductReview = {
  id: number;
  author: string;
  city: string;
  rating: number;
  comment: string;
};
