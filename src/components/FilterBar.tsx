import styled from 'styled-components';

const Bar = styled.div`
  display: flex;
  gap: 1rem;
  margin-bottom: 1.5rem;
`;

type Props = {
  search: string;
  onSearchChange: (v: string) => void;
  category: string;
  onCategoryChange: (v: string) => void;
};

export default function FilterBar({
  search,
  onSearchChange,
  category,
  onCategoryChange,
}: Props) {
  return (
    <Bar>
      <input
        type="text"
        placeholder="Buscar produto"
        value={search}
        onChange={e => onSearchChange(e.target.value)}
      />
      <select value={category} onChange={e => onCategoryChange(e.target.value)}>
        <option value="Todos">Todos</option>
        <option value="Roupas">Roupas</option>
        <option value="Calçados">Calçados</option>
      </select>
    </Bar>
  );
}
