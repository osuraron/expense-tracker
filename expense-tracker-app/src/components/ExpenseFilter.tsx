import categories from "../categories";

//typescript props for onselectcategory
interface Props {
  onSelectCategory: (category: string) => void;
}

const ExpenseFilter = ({ onSelectCategory }: Props) => {
  return (
    <select
      className="form-select"
      onChange={(event) => onSelectCategory(event.target.value)}
    >
      {/* display category based on selected */}
      <option value="">All categories</option>
      {categories.map((category) => (
        <option key={category}>{category}</option>
      ))}
    </select>
  );
};

export default ExpenseFilter;
