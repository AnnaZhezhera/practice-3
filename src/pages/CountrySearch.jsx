import {
  Container,
  SearchForm,
  Section,
  Heading,
  Loader,
  CountryList,
} from 'components';
import { useEffect, useState } from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';

import { fetchByRegion } from '../service/country-service';

export const CountrySearch = () => {
  //   const [region, setRegion] = useState(``);
  const [countries, setCountries] = useState([]);
  const [searchParams, setsearchParams] = useSearchParams();

  const fetchRegion = name => {
    // setRegion(name);
    setsearchParams({ name });
  };

  useEffect(() => {
    const name = searchParams.get('name');
    if (!name) {
      return;
    }
    fetchByRegion(name).then(data => setCountries(data));
  }, [searchParams]);

  return (
    <Section>
      <Container>
        <SearchForm fetchRegion={fetchRegion} />
        <CountryList countries={countries} />
      </Container>
    </Section>
  );
};
