import logo from '../assets/coz_logo_192.png';

export default function Footer() {
  return (
    <footer>
      <div>
        <div className='logo_container'>
          <img src={logo} alt='codestates_logo' />
          <p>COZ SHOPPING</p>
        </div>
        <p>© {new Date().getFullYear()} Code States. All rights reserved.</p>
      </div>
      <nav>
        <a href='https://codestates.com' className='hover:text-gray-500'>
          Terms of Service
        </a>
        <a href='https://codestates.com' className='hover:text-gray-500'>
          Privacy Policy
        </a>
        <a href='https://codestates.com' className='hover:text-gray-500'>
          Contact Us
        </a>
      </nav>
    </footer>
  );
}
