import React from 'react';
import logo from './images/logo.png'
import menu from './images/menu.png'
import news1 from './images/news1.png'
import news2 from './images/news2.png'
import news3 from './images/news3.png'
import news4 from './images/news4.png'
import Video from './images/breakingNews.mp4'
import Video2 from './images/video2.mp4'
import Video3 from './images/video3.mp4'
import Video4 from './images/video4.mp4'
import whatsapp from './images/whatsapp.png'
import twitter from './images/twitter.png'
import facebook from './images/facebook.png'
import instagram from './images/instagram.png'
import linkedin from './images/linkedin.png'
import youtube from './images/youtube.png'
import spotify from './images/spotify.png'
import telegram from './images/telegram.png'
import playstore from './images/playstore.png'
import apple from './images/apple.png'
import './header.css'
function Header(){
    const menuStyle={
         width:"40px",
         height: "40px",
         alignItems:'center',
         marginTop:"auto",
         marginBottom:"auto",
         backgroundColor:"white",
         borderRadius:"10px",
         marginRight:"10px"
    }
    const logoStyle={
        width:"250px",
        height: "70px",
        marginleft: "10px",
      
        marginTop: "auto",
        marginBottom: "auto",
    }
    return(
        <header>
            <div>
                <img src={logo} style={logoStyle}/>
            </div>
            <div style={{display:"flex"}}>
              
                <button className='subscribe'>Subscribe</button>
                <img src={menu} style={menuStyle}/>
                
            </div>
        </header>
    )
}
function Main(){
  
    return(
      
        <div>
            <div className='newsVideo'>
                <video className='video' src={Video} width="800" height="500" controls="controls" autoplay="true"/>
                <div>
                    <div style={{display:"flex",marginTop:"10px"}}>
                        <video className='video' src={Video2} width="300" height="150" controls="controls" autoplay="false" />
                        <h1 style={{color:"white"}}>Sports News</h1>
                    </div>
                    <div style={{display:"flex",marginTop:"10px"}}>
                        <video className='video' src={Video4} width="300" height="150" controls="controls" autoplay="false" />
                        <h1 style={{color:"white"}}>Election Result <br></br> Announcement</h1>
                    </div>
                    <div style={{display:"flex",marginTop:"10px"}}>
                        <video className='video' src={Video3} width="300" height="150" controls="controls" autoplay="false" />
                        <h1 style={{color:"white"}}>New Update</h1>
                    </div>
                </div>
            </div>
          
            <div className='news'>
            <img className='newsImg' src={news1}/>
            <img className='newsImg' src={news2}/>
            <img className='newsImg' src={news3}/>
            <img className='newsImg' src={news4}/>
            </div>
        </div>
    )
}
function Footer(){
  
   const logoStyle={
       width:"250px",
       height: "70px",
       marginleft: "10px",
       marginTop: "auto",
       marginBottom: "auto",
   }
  
    return(
        <div className='movBottom'>
        <footer>
              <div>
                <img src={logo} style={logoStyle}/>
            </div>
            <div style={{display:"flex"}}>
            <div style={{display:"flex"}} className='download'>
              
              <img className='icon' src={playstore}/>
              <a className='download'><span style={{fontSize:"10px"}}>GET IT ON </span><br></br> Google Play</a>
          </div>
          <div style={{display:"flex"}} className='download'>
            
            <img className='icon' src={apple}/>
            <a className='download' style={{width:"100px"}}><span style={{fontSize:"11px"}}>Download on the </span><br></br>App Store</a>
        </div>
            </div>
           
           
        </footer>
        <div className='footerSplit'>
                <div>
                    <hr style={{border:"4px solid",marginLeft:"10px",marginRight:"40px"}}></hr>
                    <h4>News Wave</h4>
                    <a href='#'>About Us</a>
                    <a href='#'>News Archive</a>
                    <a href='#'>Sitemap</a>
                    <a href='#'>Print Subscription</a>
                    <a href='#'>Digital Subscription</a>
                    <a href='#'>Rss Feeds</a>
                    <h4>Contact Us</h4>
                    <a href='#'>Contact Us</a>
                    <a href='#'>Social Media</a>
                    <a href='#'>Advertise with Us</a>
                   
                </div>
                <div>
                <hr style={{border:"4px solid",marginLeft:"10px",marginRight:"40px"}}></hr>
                    <h4>Other Products</h4>
                    <a href='#'>Roof and Floor</a>
                    <a href='#'>STEP</a>
                    <a href='#'>Images</a>
                    <h4>Popular Section</h4>
                    <a href='#'>Elections</a>
                    <a href='#'>Latest News</a>
                    <a href='#'>National News</a>
                    <a href='#'>International News</a>
                    <a href='#'>Video</a>
                    <a href='#'>Life & Style</a>
                    <a href='#'>Food</a>

                </div>
                <div>
                <hr style={{border:"4px solid",marginLeft:"10px",marginRight:"40px"}}></hr>
                    <h4>Business</h4>
                    <a href='#'>Agri-Business</a>
                    <a href='#'>Industry</a>
                    <a href='#'>Economy</a>
                    <a href='#'>Markets</a>
                    <a href='#'>Budget</a>

                    <h4>Sports</h4>
                    <a href='https://www.espncricinfo.com/'>Cricket</a>
                    <a href='https://www.bbc.co.uk/sport/football'>Football</a>
                    <a href='https://thehockeynews.com/'>Hockey</a>
                    <a href='https://www.newsnow.co.uk/h/Sport/Tennis'>Tennis</a>
                    <a href='https://www.newsnow.co.uk/h/Sport/Athletics'>Athletics</a>
                </div>
                <div>
                <hr style={{border:"4px solid",marginLeft:"10px",marginRight:"40px"}}></hr>
                    <h4>States</h4>
                    <a href='https://timesofindia.indiatimes.com/india/tamil-nadu'>Tamil Nadu</a>
                    <a href='https://www.manoramaonline.com/news/kerala.html'>Kerala</a>
                    <a href='https://www.ndtv.com/karnataka-news'>Karnataka</a>
                    <a href='https://telanganatoday.com/'>Telangana</a>
                    <a href='https://timesofindia.indiatimes.com/india/andhra-pradesh'>Andhra Pradesh</a>
                    <h4>Cities</h4>
                    <a href='https://timesofindia.indiatimes.com/city/chennai'>Chennai</a>
                    <a href='https://timesofindia.indiatimes.com/city/bangalore'>Bangaluru</a>
                    <a href='https://timesofindia.indiatimes.com/city/coimbatore'>Coimbatore</a>
                    <a href='https://timesofindia.indiatimes.com/city/delhi'>Delhi</a>
                    <a href='https://timesofindia.indiatimes.com/city/kochi'>Kochi</a>
                </div>
                <div>
                <hr style={{border:"4px solid",marginLeft:"10px",marginRight:"40px"}}></hr>
                    <h4>Trending</h4>
                    <a href='#'>Gold Rate Today</a>
                    <a href='#'>Silver Rate Today</a>
                    <a href='#'>Tech News</a>
                    <a href='#'>India News</a>
                    <a href='#'>Morning stampede</a>
                    <h4>Sci-Tech</h4>
                    <a href='#'>Science</a>
                    <a href='#'>Technology</a>
                    <a href='#'>Health</a>
                    <a href='#'>Agriculture</a>
                    <a href='#'>Environment</a>
                    <a href='#'>Gadgets</a>
                    <a href='#'>Internet</a>

                </div>
            </div>
            <div>
                <img className='icon' src={whatsapp}/>
                <img className='icon' src={twitter}/>
                <img className='icon' src={facebook}/>
                <img className='icon' src={instagram}/>
                <img className='icon' src={linkedin}/>
                <img className='icon' src={youtube}/>
                <img className='icon' src={spotify}/>
                <img className='icon' src={telegram}/>

            </div>
            <div style={{display:"flex",marginTop:"20px"}}>
                <a>TERMS OF USE  / </a>
                <a>PRIVACY POLICY  / </a>
            </div>
            <div>
                <h5>Copyright &copy; 2024, NEWS WAVE. or its Affiliated Companies. All Rights Reserved</h5>
            </div>
        </div>
    )
}
function Call(){
    return(
        <div>
            <Header/>
            <Main/>
            <Footer/>
        </div>
    )
}
export default Call;