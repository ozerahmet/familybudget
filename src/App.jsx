import MainContent from './components/MainContent'; 
import CurrencyHeader from './components/CurrencyHeader'; 
import 'bootstrap/dist/css/bootstrap.min.css';


const App = () => {
  return (
    <>
    <CurrencyHeader />
    <div className='row d-flex justify-content-center align-items-center' style={{ height: 'auto' }}>
      <img 
        src='./src/assets/img/familybudget.png' 
        alt='Family Budget Logo' 
        className='' 
        style={{ width: '500px', objectFit: 'contain' }} 
      />
    </div>
    <MainContent />
    </>
  )
}

export default App
