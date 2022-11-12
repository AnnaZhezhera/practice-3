import { Section, Container, CountryInfo, Loader } from 'components';
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchCountry } from '../service/country-service';

export const Country = () => {
  const { id } = useParams();
  const [country, setCountry] = useState({});

  useEffect(() => {
    fetchCountry(id).then(data => {
      setCountry(data);
      console.log(data);
    });
  }, [id]);

  console.log(country);

  return (
    <Section>
      <Container>
        <CountryInfo countryInfo={country} />
      </Container>
    </Section>
  );
};
