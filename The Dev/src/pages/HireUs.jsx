import './css/ContactUs.css';
import Contact from '../components/Contact';

const services = [
  'Website design',
  'Software development',
  'Mobile applications',
  'Digital marketing domain and hosting',
  'SEO',
  'Cyber security service',
  'IT consulting',
  'Social media management',
  'Digital marketing',
  'Mobile productions',
  'Marketing and strategy consulting'
];


const HireUs = () => {

  return (
    <section className='main'>
      <div className='contact-container'>
        <Contact />
      </div>
    </section>
  );
}

export default HireUs