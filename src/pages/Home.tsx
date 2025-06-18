import { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../storeHooks';
import { fetchProducts, Product } from '../features/products/productsSlice';
import { selectProducts, selectLoading } from '../features/products/productSelectors';
import ProductCard from '../components/ProductCard';
import FilterBar from '../components/FilterBar';
import { filterProducts } from '../utils/filters';

export default function Home() {
  const dispatch = useAppDispatch();
  const products = useAppSelector(selectProducts);
  const loading = useAppSelector(selectLoading);

  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('Todos');

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const filtered = filterProducts(products, search, category);

  return (
    <div style={{ padding: '2rem' }}>
      <h1>Catálogo de Produtos</h1>
      <FilterBar
        search={search}
        onSearchChange={setSearch}
        category={category}
        onCategoryChange={setCategory}
      />
      {loading ? <p>Carregando...</p> : (
        <div style={{ display: 'grid', gap: '1rem', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))' }}>
          {filtered.map(p => <ProductCard key={p.id} product={p} />)}
        </div>
      )}
    </div>
  );
}
