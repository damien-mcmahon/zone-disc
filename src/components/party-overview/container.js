import { connect } from 'react-redux';
import { countriesSelector, networksSelector} from 'app/selectors';

import PartyOverview from '.';

const mapStateToProps = state => ({
    countries: countriesSelector(state),
    networks: networksSelector(state)
});

export default connect(mapStateToProps)(PartyOverview);
