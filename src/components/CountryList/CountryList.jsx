import { Grid, GridItem } from 'components';
import { Country } from 'pages';
import { Link, useLocation } from 'react-router-dom';

export const CountryList = ({ countries }) => {
  const location = useLocation();

  console.log(`list`, location);

  return (
    <Grid>
      {countries.map(({ id, flag, country }) => (
        <GridItem key={id}>
          <Link to={`/country/${id}`} state={{ from: location }}>
            <img src={flag} alt={country} />
          </Link>
        </GridItem>
      ))}
    </Grid>
  );
};
