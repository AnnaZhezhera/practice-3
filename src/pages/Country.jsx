import { Section, Container, CountryInfo, Loader } from 'components';
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams, Link, useLocation } from 'react-router-dom';
import { fetchCountry } from '../service/country-service';

export const Country = () => {
  const { id } = useParams();
  const [country, setCountry] = useState({});
  const location = useLocation();

  useEffect(() => {
    fetchCountry(id).then(data => setCountry(data));
  }, [id]);

  const goBackLink = location.state?.from ?? '/';
  return (
    <Section>
      <Container>
        <div
          style={{
            marginBottom: '60px',
            color: '#f2f2f2',
            letterSpacing: '0.06em',
            textDecoration: 'underline',

            borderColor: 'gray',
          }}
        >
          <Link to={goBackLink}>Back to Countries</Link>
        </div>

        <CountryInfo countryInfo={country} />
      </Container>
    </Section>
  );
};
