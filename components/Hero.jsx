// components/Hero.jsx
import styles from '../app/styles/Hero.module.css';

const textStyles = {
  marginTop: '342px',
  marginLeft: '100px',
  marginRight: '498px',
  marginBottom: 'auto',
  textAlign: 'left',
};

const buttonStyles = {
  marginTop: '40px',
  marginLeft: '260px',
  marginRight: 'auto',
  marginBottom: 'auto',
  textAlign: 'center',
};

const Hero = () => {
  return (
    <section
      className={`${styles.heroBackground} flex flex-col justify-center items-center min-h-screen`}
    >
      <div className="w-full px-4 sm:w-auto sm:px-0">
        <h1
          style={textStyles}
          className={`${styles.heroText} text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-medium leading-tight`}
        >
          Daily devotion app for those who live sent.
        </h1>
      </div>
      <button
        style={buttonStyles}
        className="mt-8 bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-8 rounded-full transition duration-300 ease-in-out transform hover:-translate-y-1"
      >
        Download now
      </button>
    </section>
  );
};

export default Hero;
