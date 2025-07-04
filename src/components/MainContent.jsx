import MuiButton from '@mui/material/Button';


const Content = () => {
  return (
    <>
      <ContentButtons />
    </>
  )
}

const ContentButtons = () => {
  return (
    <>    
      <div className='col-sm-12 d-flex justify-content-center align-items-center' style={{marginTop:'50px'}}>
        <div className='col-sm-3'>
            <MuiButton variant="contained" className='col-sm-6' style={{width: '100%', borderRadius: '10px', height: '70px'}}>Varlığım</MuiButton>
        </div>
      </div>
    </>
  )
}

export default Content
