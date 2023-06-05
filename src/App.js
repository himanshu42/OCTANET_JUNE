import logo from './res/Shopify-Logo.png';
import img1 from './res/t1.svg';
import img2 from './res/t2.svg';
import img3 from './res/t3.svg';
import lg1 from './res/lg1.svg';
import lg2 from './res/lg2.svg';
import lg3 from './res/lg3.svg';
import lg4 from './res/lg4.svg';
import lg5 from './res/lg5.svg';
import lg6 from './res/lg6.svg';
import lg7 from './res/lg7.svg';
import lg8 from './res/lg8.svg';
import lg9 from './res/lg9.svg';
import lg10 from './res/lg10.svg';
import mrket from './res/mrket.svg';
import bd1 from './res/bd1.svgz';
import bd2 from './res/bd2.svgz';
import plus from './res/plus.png';
import './App.css';

function App() {
  return (
    <div className="App bg">
      {/*-----------header----------*/}
      <header className="">
        <div className="container-fluid">
          <div className="row htop">
            <div className="col-12">
              <div className="rd1 d-flex align-items-center justify-content-center mt-4">
                <img src={logo} className="lc" alt="logo" />
                <p className="m-0 slg">shopify</p>
              </div>
            </div>
            <div className="col-12">
              <div className="heading mt-3">
                <p className="d-flex align-items-center justify-content-center m-0">Bring your ideas to life for ₹20/month</p>
              </div>
            </div>
            <div className="col-12 d-flex align-items-center justify-content-center mt-5">
                <div className="rd2 d-flex align-items-center justify-content-center">
                  <input type="text" name="search" id="s1" placeholder="Enter your email address" />
                  <input type="button" value="start free trial" />
                </div>
            </div>
            <div className="col-12 d-flex align-items-center justify-content-center mt-2">
                <div className="rd2a d-flex align-items-center justify-content-center">
                  <input type="text" name="search" id="s1" placeholder="Enter your email address" />
                </div>
            </div>
            <div className="col-12 d-flex align-items-center justify-content-center mt-2">
                <div className="rd2ab d-flex align-items-center justify-content-center">
                  <input type="button" value="start free trial" />
                </div>
            </div>
            <div className="col-12">
              <div className="d-flex align-items-center justify-content-center">
              <p className="rd3">Try Shopify free for 3 days, no credit card required. By entering your email, you agree to receive</p>
              </div>
              <div className="d-flex align-items-center justify-content-center">
              <p className="rd4">marketing emails from Shopify.</p>
              </div>
            </div>
          </div>
          <div className="row bg">
            <div className="col-12 d-flex justify-content-center align-items-center mt-5">
              <img className="cic" src={mrket} alt="" />
            </div>
          </div>
        </div>
      </header>
      {/*-----------header END----------*/}
      <div className="container">
        <div className="row pt-4 bg">
          <div className="col-lg-4 col-sm-12 col-md-12">
            <img src={img1} className="mb-2" alt="" />
            <p className="heading2">Customizable templates</p>
            <p className="ttle">Free website designs to launch your store quickly and easily.</p>
          </div>
          <div className="col-lg-4 col-sm-12 col-md-12">
          <img className="mb-2" src={img2} alt="" />
          <p className="heading2">All in one</p>
          <p className="ttle">Shopify takes care of everything from marketing and payments to secure transactions and shipping.</p>
          </div>
          <div className="col-lg-4 col-sm-12 col-md-12">
          <img className="mb-2" src={img3} alt="" />
          <p className="heading2">A safe and efficient platform</p>
          <p className="ttle">Millions of users trust Shopify to manage their online stores.</p>
          </div>
        </div>
        <hr className="lbhr mb-5" />
        <div className="row text-center clgs">
          <div className="col-lg">
            <img src={lg1} alt="" />
          </div>
          <div className="col-lg">
            <img src={lg2} alt="" />
          </div>
          <div className="col-lg">
            <img src={lg3} alt="" />
          </div>
          <div className="col-lg">
            <img src={lg4} alt="" />
          </div>
          <div className="col-lg">
            <img src={lg5} alt="" />
          </div>
        </div>
        {/*-------------------------------*/}
        <div className="row text-center mb-5 clgs1">
          <div className="col-6">
            <img className="img-fluid" src={lg1} alt="" />
          </div>
          <div className="col-6">
            <img className="img-fluid" src={lg2} alt="" />
          </div>
        </div>
        <div className="row text-center mb-5 clgs1">
          <div className="col-6">
            <img className="img-fluid" src={lg3} alt="" />
          </div>
          <div className="col-6">
            <img className="img-fluid" src={lg4} alt="" />
          </div>
        </div>
        <div className="row text-center mb-5 clgs1">
          <div className="col-6">
            <img className="img-fluid" src={lg5} alt="" />
          </div>
          <div className="col-6">
            <img className="img-fluid" src={lg6} alt="" />
          </div>
        </div>
        <div className="row text-center mb-5 clgs1">
          <div className="col-6">
            <img className="img-fluid" src={lg7} alt="" />
          </div>
          <div className="col-6">
            <img className="img-fluid" src={lg8} alt="" />
          </div>
        </div>
        <div className="row text-center mb-5 clgs1">
          <div className="col-6">
            <img className="img-fluid" src={lg9} alt="" />
          </div>
          <div className="col-6">
            <img className="img-fluid" src={lg10} alt="" />
          </div>
        </div>
        {/*--------------------------------*/}
        <div className="row mt-4 text-center clgs">
          <div className="col-lg">
            <img src={lg6} alt="" />
          </div>
          <div className="col-lg">
            <img src={lg7} alt="" />
          </div>
          <div className="col-lg">
            <img src={lg8} alt="" />
          </div>
          <div className="col-lg">
            <img src={lg9} alt="" />
          </div>
          <div className="col-lg">
            <img src={lg10} alt="" />
          </div>
        </div>
        <hr className="lbhr mt-5" />
        <div className="row mt-5">
          <div className="col-12 mt-5">
            <h1 className="smhd">"Shopify is better than any other platform we've played with, and we've played with them all."</h1>
          </div>
          <div className="col-12">
            <p className="smhd2">Jonathon Bayme, CEO of Theory11</p>
          </div>
        </div>
      </div>

      {/*--------------------------*/}
      <div className="container-fluid">
        <div className="row">
          <div className="col-12 bdbg">
            <div className="bd1c">
              <img src={bd1} alt="" />
            </div>
            <div>
              <h3 className="bdhead">Build your dream business for ₹20/month</h3>
            </div>
            <div>
              <p className="bdtit">Start your free trial and enjoy 3 months of Shopify for ₹20/month on select plans.</p>
            </div>
            <div className="d-flex justify-content-center align-items-center mt-5">
              <div className="rd2 bdsearch bg-white d-flex align-items-center justify-content-center">
                <input type="text" name="search" id="s1" placeholder="Enter your email address" />
                <input type="button" value="start free trial" />
              </div>
            </div>
            <div className="col-12 d-flex align-items-center justify-content-center mt-2">
                <div className="rd2a d-flex align-items-center justify-content-center bg-white">
                  <input type="text" name="search" id="s1" placeholder="Enter your email address" />
                </div>
            </div>
            <div className="col-12 d-flex align-items-center justify-content-center mt-2">
                <div className="rd2ab d-flex align-items-center justify-content-center">
                  <input type="button" value="start free trial" />
                </div>
            </div>
            <div>
              <p className="bdtit2">Try Shopify free for 3 days, no credit card required. By entering your email, you agree to receive marketing emails from Shopify.</p>
            </div>
            <div>
              <img className="bd2c" src={bd2} alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className="container sliden">
        <div className="row">
          <div className="col-12">
            <h1 className="faq">FAQ</h1>
          </div>
        </div>
        <div className="row accordion">
          <div className="col-2"></div>
          <div className="col-8">
            <div className="row">
              <div className="col-11">
                <button className="fbt1">What is Shopify and how does it work?</button>
              </div>
              <div className="col-1">
                <div className="fbt2"><img className="fbt2i" src={plus} alt="" /></div>
              </div>
            </div>            
            <div className="accordionDrop">
              <p className="fbtit">Shopify is a complete commerce platform that lets you start, grow, and manage a business.</p>
              <p className="fbtit">With Shopify, you can:</p>
              <ul>
                <li className="fbtli">Create and customize an online store</li>
                <li className="fbtli">Sell in multiple places, including web, mobile, social media, online marketplaces, brick-and-mortar locations, and pop-up shops</li>
                <li className="fbtli">Manage products, inventory, payments, and shipping</li>
              </ul>
              <p className="fbtit">Shopify is completely cloud-based and hosted, which means you don't have to worry about upgrading or maintaining software or web servers. This gives you the flexibility to access and run your business from almost anywhere, including your mobile device.</p>
            </div>
            <hr className="mt-5 mb-5" />
          </div>
          <div className="col-2"></div>
        </div>
        {/*------------2---------------*/}
        <div className="row a1">
          <div className="col-2"></div>
          <div className="col-8">
            <div className="row">
              <div className="col-11">
                <button className="fbt1">How much does Shopify cost?</button>
              </div>
              <div className="col-1">
                <div className="fbt2"><img className="fbt2i" src={plus} alt="" /></div>
              </div>
            </div>            
            <div className="ad">
              <p className="fbtit">Try Shopify free for 3 days, no credit card required.</p>
              <p className="fbtit">After your trial expires, choose a pricing plan that suits the size and stage of your business.</p>
            </div>
            <hr className="mt-5 mb-5" />
          </div>
          <div className="col-2"></div>
        </div>
        {/*------------3----------------*/}
        <div className="row acc">
          <div className="col-2"></div>
          <div className="col-8">
            <div className="row">
              <div className="col-11">
                <button className="fbt1">Can I use my own domain name with Shopify?</button>
              </div>
              <div className="col-1">
                <div className="fbt2"><img className="fbt2i" src={plus} alt="" /></div>
              </div>
            </div>            
            <div className="add">
              <p className="fbtit">Yes, you can use your own domain name with Shopify.</p>
              <p className="fbtit">If you have an existing domain name, you can connect it to Shopify from your store's admin.</p>
              <p className="fbtit">If you don't have a domain name yet, you can either buy one through Shopify or a third-party provider.</p>
            </div>
            <hr className="mt-5 mb-5" />
          </div>
          <div className="col-2"></div>
        </div>
        {/*-------------4---------------*/}
        <div className="row acn">
          <div className="col-2"></div>
          <div className="col-8">
            <div className="row">
              <div className="col-11">
                <button className="fbt1">Do I need to be a designer or developer to use Shopify?</button>
              </div>
              <div className="col-1">
                <div className="fbt2"><img className="fbt2i" src={plus} alt="" /></div>
              </div>
            </div>            
            <div className="adn">
              <p className="fbtit">No, you don't need to be a designer or developer to use Shopify.</p>
              <p className="fbtit">Signing up for Shopify allows you to:</p>
              <ul>
                <li className="fbtli">Customize the look and feel of your store with the online store builder and themes.</li>
                <li className="fbtli">Add features and functionality to your store with apps.</li>
              </ul>
              <p className="fbtit">If you need extra help, you can contact our support team, or visit the Shopify Expert Marketplace to search for and hire a certified Shopify expert.</p>
            </div>
            <hr className="mt-5 mb-5" />
          </div>
          <div className="col-2"></div>
        </div>
      </div>

      {/*---------media query------------*/}
      
      <div className="container mqslide">
        <div className="row">
          <div className="col-12">
            <h1 className="faq">FAQ</h1>
          </div>
        </div>
        <div className="row accordion">
          <div className="col-10 accordian">
            <button className="fbt1">What is Shopify and how does it work?</button>
          </div>
          <div className="col-2">
            <img className="fbt2i" src={plus} alt="" />
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <div className="accordionDrop">
              <p className="fbtit">Shopify is a complete commerce platform that lets you start, grow, and manage a business.</p>
              <p className="fbtit">With Shopify, you can:</p>
              <ul>
                <li className="fbtli">Create and customize an online store</li>
                <li className="fbtli">Sell in multiple places, including web, mobile, social media, online marketplaces, brick-and-mortar locations, and pop-up shops</li>
                <li className="fbtli">Manage products, inventory, payments, and shipping</li>
              </ul>
              <p className="fbtit">Shopify is completely cloud-based and hosted, which means you don't have to worry about upgrading or maintaining software or web servers. This gives you the flexibility to access and run your business from almost anywhere, including your mobile device.</p>
            </div>
            <hr className="mt-5 mb-5" />
          </div>
        </div>
        {/*--------------2-----------*/}
        <div className="row a1">
          <div className="col-10 accordian">
            <button className="fbt1">How much does Shopify cost?</button>
          </div>
          <div className="col-2">
            <img className="fbt2i" src={plus} alt="" />
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <div className="ad">
              <p className="fbtit">Try Shopify free for 3 days, no credit card required.</p>
              <p className="fbtit">After your trial expires, choose a pricing plan that suits the size and stage of your business.</p>
            </div>
            <hr className="mt-5 mb-5" />
          </div>
        </div>
        {/*---------3----------*/}
        <div className="row acc">
          <div className="col-10 accordian">
            <button className="fbt1">Can I use my own domain name with Shopify?</button>
          </div>
          <div className="col-2">
            <img className="fbt2i" src={plus} alt="" />
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <div className="add">
              <p className="fbtit">Yes, you can use your own domain name with Shopify.</p>
              <p className="fbtit">If you have an existing domain name, you can connect it to Shopify from your store's admin.</p>
              <p className="fbtit">If you don't have a domain name yet, you can either buy one through Shopify or a third-party provider.</p>
            </div>
            <hr className="mt-5 mb-5" />
          </div>
        </div>
        {/*---------4-------------*/}
        <div className="row acn">
          <div className="col-10 accordian">
            <button className="fbt1">Do I need to be a designer or developer to use Shopify</button>
          </div>
          <div className="col-2">
            <img className="fbt2i" src={plus} alt="" />
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <div className="adn">
              <p className="fbtit">No, you don't need to be a designer or developer to use Shopify.</p>
              <p className="fbtit">Signing up for Shopify allows you to:</p>
              <ul>
                <li className="fbtli">Customize the look and feel of your store with the online store builder and themes.</li>
                <li className="fbtli">Add features and functionality to your store with apps.</li>
              </ul>
              <p className="fbtit">If you need extra help, you can contact our support team, or visit the Shopify Expert Marketplace to search for and hire a certified Shopify expert.</p>
            </div>
            <hr className="mt-5 mb-5" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
