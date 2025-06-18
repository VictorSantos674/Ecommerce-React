import { Product } from '../features/products/productsSlice';

export function filterProducts(
  products: Product[],
  search: string,
  category: string
): Product[] {
  return products.filter(p => {
    const matchesName = p.name.toLowerCase().includes(search.toLowerCase());
    const matchesCategory = category === 'Todos' || p.category === category;
    return matchesName && matchesCategory;
  });
}
