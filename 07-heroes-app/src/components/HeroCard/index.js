import { Link } from 'react-router-dom';
import {heroesImages} from '../../helpers/heroImages'
import './HeroCard.css';

const HeroCard = ({ hero }) => {
	const { id, superhero, alter_ego, first_appearance, publisher, characters } = hero;
	return (
		<Link to={`./hero/${id}`} className="hero-card">
            <img src={heroesImages(`./${id}.jpg`).default} className="img img-responsive" alt={superhero} />
            
            <div className="profile-name">{superhero}</div>
            <div className="profile-position">{alter_ego}</div>
            <div className="profile-overview">
                <div className="profile-overview">
                    <div className="row">
                        <div className="col-ms-4">
                            <h3>{publisher}</h3>
                            <p>First appearance: <br />{first_appearance}</p>
                            {
                                (alter_ego !== characters)
                                && <p>{characters}</p>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </Link>
	);
};

export default HeroCard;
