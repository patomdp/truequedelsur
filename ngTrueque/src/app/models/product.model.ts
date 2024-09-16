export interface Product {
    id: string;
    title: string;
    description: string;
    category: string;
    subcategory: string;
    imageUrl: string;
    location: string;
    isFavorite: boolean;
    owner: {
      id: string;
      name: string;
      avatarUrl: string;
      rating: number;
    };
    lookingFor: string;
  }