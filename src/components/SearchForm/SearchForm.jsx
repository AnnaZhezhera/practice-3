import { useState } from 'react';
import { FiSearch } from 'react-icons/fi';
import { BtnSearch, Select, SearchFormStyled } from './SearchForm.styled';

export const SearchForm = ({ fetchRegion }) => {
  const [region, setRegion] = useState(``);

  const handelRegion = e => {
    e.preventDefault();
    fetchRegion(region);
  };
  const chooseRegion = event => {
    setRegion(event.target.value);
  };
  return (
    <SearchFormStyled onSubmit={handelRegion}>
      <BtnSearch type="submit">
        <FiSearch size="16px" />
      </BtnSearch>
      <Select
        aria-label="select"
        name="region"
        required
        onChange={chooseRegion}
        defaultValue={'DEFAULT'}
      >
        <option value="DEFAULT" disabled defaultValue="">
          Select a region and press enter
        </option>
        <option value="africa">Africa</option>
        <option value="america">America</option>
        <option value="asia">Asia</option>
        <option value="europe">Europe</option>
        <option value="Oceania">Oceania</option>
      </Select>
    </SearchFormStyled>
  );
};
