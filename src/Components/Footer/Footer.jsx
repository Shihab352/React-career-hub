import social from '../Images/social.png'

const Footer = () => {
    return (
        <div>
            <footer className=" bg-base-200 text-base-content p-10 pb-52">
               <div className="footer max-w-6xl mx-auto ">
               
               <aside>
                    <h2 className="manrope-extrabold text-3xl text-white">Career Hub</h2>
                    <p>
                    There are many variations of passages <br />
                     of Lorem Ipsum , but the majority have <br />
                      suffered alteration in some form.
                    </p>
                    <img src={social} alt="" />
                </aside>
                <nav>
                    <h6 className="footer-title manrope-semibold text-xl text-white">Services</h6>
                    <a className="link link-hover">Branding</a>
                    <a className="link link-hover">Design</a>
                    <a className="link link-hover">Marketing</a>
                    <a className="link link-hover">Advertisement</a>
                </nav>
                <nav>
                    <h6 className="footer-title  manrope-semibold text-xl text-white">Company</h6>
                    <a className="link link-hover">Product</a>
                    <a className="link link-hover">Contact</a>
                    <a className="link link-hover">Jobs</a>
                    <a className="link link-hover">Support</a>
                </nav>
                <nav>
                    <h6 className="footer-title manrope-semibold text-xl text-white">Legal</h6>
                    <a className="link link-hover">Terms of use</a>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Cookie policy</a>
                </nav> 
               
                
               </div>
            </footer>
        </div>
    );
};

export default Footer;