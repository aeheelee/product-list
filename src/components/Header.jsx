import logo from '../assets/coz_logo_192.png';

export default function Header() {
  return (
    <header>
      <div className='logo_container'>
        <img alt='logo' src={logo} />
        <h1>COZ SHOPPING</h1>
      </div>
      <label>
        <input placeholder='원하는 상품을 찾아보세요!' type='text' name='search' />
        <span>
          <i className='fa-solid fa-magnifying-glass'></i>
        </span>
      </label>
    </header>
  );
}
