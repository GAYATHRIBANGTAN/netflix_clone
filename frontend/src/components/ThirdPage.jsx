import '/src/components/ThirdPage.css'
const ThirdPage=()=>{
    return (
        <div className="Thirdbgcontainer">
          <div className="Thirdleft-content">
          <img src='/src/images/3rd-girl.png' alt='girl'></img>
          <div className='box'>
            <img src='/src/images/boxshot.png' alt='book' id='book'></img>
            <h3>Stranger Things</h3>
            <span>Downloading...</span>
            <img src='/src/images/download-icon.gif' alt='gif' id='download'></img>
          </div>
          </div>
          <div className="Thirdright-content">
          <h1>Download your shows to watch offline</h1>
    <h2>Save your favourites easily and always have something to watch.</h2>  
        </div>
          </div>
        
      );
}
export default ThirdPage