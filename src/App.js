import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Index from './component/Website/Index'
import Header from './component/Website/Header'
import Slider from 'react-slick'
import helmet1 from './images/helmet1.png'
import helmet2 from './images/helmet2.png'
import helmet3 from './images/helmet3.png'
import './App.css'
import { FaArrowRight, FaArrowLeft} from 'react-icons/fa'
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';

function App() {

  const NextArrow = ({onClick}) => {
    return (
      <div className="arrow next" onClick={onClick}>
        <FaArrowRight/>
      </div>
    )
  }
  const PrevArrow = ({onClick}) => {
    return (
      <div className="arrow next" onClick={onClick}>
        <FaArrowLeft/>
      </div>
    )
  }
 
  const settings = {
    infinite: true,
    lazyLoad: true,
    speed: 300,
    slidesToShow: 3,
    centerMode: true,
    centerPadding: 0,
    // nextArrow: <NextArrow/>,
    // prevArrow: <PrevArrow/>
  }
  const images = [helmet1, helmet2, helmet3]

  return (
    <Router>
      <Switch>
          <Route exact path="/" render={()=>{
            return (
              <>
                <Header/>
                <Index/>
              </>
            )
          }}/>
      </Switch>
    </Router>
    // <div className="App">
    //   <Slider {...settings}>
    //       {images.map((img, idx) => (
    //           // <Grid container justify="center">
    //           // </Grid>
    //           <div>
    //               <img src={img} alt={img}/>
    //           </div>

    //       ))}
    //   </Slider>
    // </div>
  );
}

export default App;