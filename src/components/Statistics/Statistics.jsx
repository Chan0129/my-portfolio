import PropTypes from 'prop-types';
import style from './Statistics.module.css';

export const Statistics = ({ title, stats }) => {
  const generateRandomColor = () => {
    return `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(
      Math.random() * 256
    )}, ${Math.floor(Math.random() * 256)})`;
  };

  return (
    <section className={style.Statistics}>
      {title ? <h2 className={style.title}>{title}</h2> : null}

      <ul className={style.statList}>
        {stats.map(stat => (
          <li
            className={style.item}
            key={stat.id}
            style={{ backgroundColor: generateRandomColor() }}
          >
            <span className={style.label}>{stat.label}</span>
            <span className={style.percentage}>{stat.percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.object.isRequired,
    })
  ).isRequired,
};
