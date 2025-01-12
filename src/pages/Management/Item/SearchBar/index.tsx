import React from "react";
import { CFormInput } from "@coreui/react";
import { useItemStore } from "@/store/item";

const SearchBar: React.FC = () => {
  const { search, setSearch } = useItemStore();

  return (
    <CFormInput
      className="bg-dawn-light text-white border-gray gray-placeholder"
      placeholder="이름을 입력해주세요..."
      value={search}
      onChange={(e) => setSearch(e.target.value)}
    />
  );
};

export default SearchBar;
