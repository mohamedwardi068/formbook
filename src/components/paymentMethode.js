import React from 'react';
import Select from 'react-select';
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube, FaPinterest } from 'react-icons/fa';

const customSingleValue = ({ data }) => (
    <div className="flex items-center">
      {data.icon && (
        <img src={data.icon} alt="" className="w-4 h-4 rounded-full mr-1" />
      )}
      <span className="text-sm">{data.label}</span>
    </div>
);

const customStyles = {
    control: (provided) => ({
      ...provided,
      minHeight: '30px',
      height: '30px',
      fontSize: '12px'
    }),
    valueContainer: (provided) => ({
      ...provided,
      height: '30px',
      padding: '0 6px'
    }),
    input: (provided) => ({
      ...provided,
      display: 'none',
    }),
    indicatorSeparator: () => ({
      display: 'none',
    }),
    indicatorsContainer: (provided) => ({
      ...provided,
      height: '30px',
    }),
};

const options = [
    { value: 'eng', label: 'ENG', icon: 'https://upload.wikimedia.org/wikipedia/en/a/a4/Flag_of_the_United_States.svg' },
    { value: 'fra', label: 'FRA', icon: 'https://upload.wikimedia.org/wikipedia/en/thumb/c/c3/Flag_of_France.svg/125px-Flag_of_France.svg.png' },
];

function PaymentMethode() {
    return (
        <footer className="bg-white p-8 mt-[1%]">
          <div className="container mx-auto grid grid-cols-1 md:grid-cols-6 gap-8">
            <div className="col-span-2">
              <h3 className="text-xl font-bold mb-4 text-black">
                ONLINE Electronic MARKET
              </h3>
              <p className="text-gray-700 mb-2 text-1xl font-semibold">HOTLINE 24/7</p>
              <p className="text-blue-700 mb-4 text-4xl font-bold">(025) 3686 25 16</p>
              <p className="text-gray-700 mb-4">
                257 Thatcher Road St, Brooklyn, Manhattan,   <br /> NY 10092
                <br />
                
              </p>
              <div className="flex space-x-4 mb-4">
                <a href="https://twitter.com" className="text-2xl bg-gray-200 p-2 rounded-full"><FaTwitter /></a>
                <a href="https://facebook.com" className="text-2xl bg-gray-200 p-2 rounded-full"><FaFacebook /></a>
                <a href="https://instagram.com" className="text-2xl bg-gray-200 p-2 rounded-full"><FaInstagram /></a>
                <a href="https://youtube.com" className="text-2xl bg-gray-200 p-2 rounded-full"><FaYoutube /></a>
                <a href="https://pinterest.com" className="text-2xl bg-gray-200 p-2 rounded-full"><FaPinterest /></a>
              </div>
              
            </div>
            <div>
              <h3 className="text-xl font-extrabold text-black ">TOP CATEGORIES</h3>
              <ul>
                <button className="block mt-2">TV/Televisios</button>
                <button className="block mt-1">Computers</button>
                <button className="block mt-1">Laptops</button>
                <button className="block mt-1">Mobile & Tablets</button>
                <button className="block mt-1">Audios</button>
                <button className="block mt-1">Cameras</button>
                <button className="block mt-1">Gadget</button>
                <button className="block mt-1">Sport Equipements</button>
                <button className="block mt-1">Office</button>
                <button className="block mt-1">Smart Home</button>

              </ul>
            </div>
            <div>
              <h3 className="text-xl font-extrabold text-black">COMPANY</h3>
              <ul>
                <button className="block">About Swoo</button>
                <button className="block">Contact</button>
                <button className="block">Career</button>
                <button className="block">Blog</button>
                <button className="block">Sitemap</button>
                <button className="block">Store Locations</button>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-extrabold text-black">HELP CENTER</h3>
              <ul>
                <button className="block">Customer Service</button>
                <button className="block">Policy</button>
                <button className="block">Terms & Conditions</button>
                <button className="block">Track Order</button>
                <button className="block">FAQs</button>
                <button className="block">My Account</button>
                <button className="block">Product Support</button>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-extrabold text-black">PARTNER</h3>
              <ul>
                <button className="block">Become Seller</button>
                <button className="block">Affiliate</button>
                <button className="block">Advertise</button>
                <button className="block">Partnership</button>
              </ul>
            </div>
          </div>
          
          <div className="mt-[10%] flex justify-between items-center border-t border-gray-300 pt-4">
            <p className="text-gray-700 text-sm mr-5">&copy; 2024 <span className='font-extrabold text-black'>Shawonetc3</span>. All Rights Reserved</p>
            <div className="flex space-x-4 items-center mr-[10%]">
              <img src="https://s3-alpha-sig.figma.com/img/4f88/470e/f7ca7089c358161cd638255e61147b79?Expires=1725235200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Go2YENRm4d80ZMPmq4RVpSruxKwc0IcS6Yoa2ETuLJyw8H5vgxvRrRqPngl8CdP0mMumn7LgQkjk1Sc7MTCU6ssP7e2ZtIZXQH1ALl0EJsp7h7ehW~m~MVdM9jr1j65F6R-DHhdR-CfvIPm9gTLWCWYfAglgMSQ0zCy5kMufI-nQdgOYdBfjkbxVvWQUKy3ae3MPiIIY8zafUU4nM41EUlfalW6ZdRTi65nX9dGQGGUpTFLsawX96r2~0gJSsNdPbzhdfpqq~A13nCc5vorruyP4cn5kjSqucrO4fMrhVzy5sQv0Oo-HpADEeMtonRPLSmfklxs016M5PxQOGuxrMw__" alt="PayPal" className="w-4 h-auto"/>
              <img src="https://s3-alpha-sig.figma.com/img/6bd6/f9a9/a1d8c62348529d351a6bbed14866b496?Expires=1725235200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=e2CSOE1J8~fxzIWRoGEQoCH6kEXrioloUAZVg9UBlPnm0Zn1CrTHbvOUXGp3gsNf3-PHQcz9LnngiTiuxAQbg5SdZr1QXVxh~SsQLY0M6Vazf93eaQKJOAkdiIoMCiEh53ihNdUAiep9nEtWuiNm47e2R7JTXnPUSoNuJoVJ6EdDd4Ce8Rx1VA0CZ8Bp9tm6DKgwNpK-wDV25iqdvmZMQhPeNCbFVWG40ttJsCNHDjyOnsIwJVHURjlH5F~vmYcim0V70Cit4L7NHCggmiqPX73SCLbLIPGIUtrcdJkAF~fPIcH01w8qB8tR73rbg8oT-39rHHftkJ7PFhKr4FGX1A__" alt="MasterCard" className="w-7 h-auto"/>
              <img src="https://s3-alpha-sig.figma.com/img/5b9d/40ec/dd1b5c0980dfc3ae57c167489f831783?Expires=1725235200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=hwaMcGj2zRHLftCOW1B39PkJj7Tr2Og0QuRBKSgQbBsdj7VQqXWwW1fyDS9Vq5~JURclxlmC2vSmFHbfCLbv58lgQUwhaPGB4RP6oEGIhi1Mr2A37orH4hcOm2PgNWchiSy08yjqI5d5raUqCN8uDj5dSnLL9OdPNkXOVk7A1LWdYqqAslWoKllMpnVJI6ulTAl2EJ1WgPP5-q9Y2YcpnOXbKiOQ4fxKU2gqyg3jBTuc9HfePihvwBAvkRJQA8ZCUtbZMu7KvdbccxE0Oo~n2XqdRO-nUyM6Dqr3Ns29S1TME0zf5eej~kmA8ZnLMdJlFPgceuh5w1yaRYJEIufEbQ__" alt="Visa" className="w-10 h-auto"/>
              <img src="https://s3-alpha-sig.figma.com/img/3b5e/4d88/66baeaa152d51cf08f5031769fbf6263?Expires=1725235200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=MoDQeBs6UBF7Z7R8L3ujZNTBtlPPWGOJZHbnSKOKfWkH~l~iGnlEul7iOSoCYQFsNLxofe5SuNw34N9sK4ToATcMs7YXIPKbPJm~CIkkOcGnRO~eljsqqF9XieLJhbfXCYOKbhlhcRFANYCW15OxgKlNexhIToH36y9~4vWInCukep3hhigsAy29-cwrLeY2sBMchT2vtOx5D5ivTLPYTK7ikiqMZRoE3pgB1hcHowqxBVeaTpfpwBLQwmgrVX1EokFbLMOw-9SCX7BPX4l45L92i09QFkteuCUk1xORkl3ynv3esrquYb6BHq19SkP1Zec8tunqQmh9Nsg1B2db2Q__" alt="Stripe" className="w-10 h-auto"/>
              <img src="https://s3-alpha-sig.figma.com/img/647c/cd9e/ac28cd11f9fb6cd49c52dea670811cb9?Expires=1725235200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=BRnouPhAlvgChg8b9HxDiNGSi0cqeJJFEvElvAQZSY4e571TthkxTnxU4Fcf5gbPHni3gT4pEgrT96cg8NX4S9C5M3P7SVYEUO498woGpIpkw9XYB5FNKyiLMpBn0ANOTeiB3QwioUG3uTN6IZsLML5q5eHy~s~oimKuUp-q2dHCUo40Cm72e7OZPNwI9BSv2g~DSwPtV0flWTQg2HHV7DFaOucEie-OEXQJVmbettMI2GdU~qCQeyMhWNyM3YqUoyZr1GYGNLgNotq-8ngfniHXjUzJvdZTlWmACNrHMuvUw8icGgDnFA7z-kX2aphpRc3mWE4sZImhjvgOq3SXxg__" alt="Klarna" className="w-12 h-auto"/>
            </div>
            <div className="flex space-x-4 mr-24">
                <div className="mr-0 md:ml-4 mt-2 md:mt-0"> 
                   <select className="border border-gray-300 p-1 rounded text-sm">
                    <option>USD</option>
                  </select>
                </div>
                <div className="ml-0 md:ml-4 mt-2 md:mt-0 w-20 h-8">
                  <Select
                    styles={customStyles}
                    options={options}
                    components={{ SingleValue: customSingleValue }}
                    defaultValue={options[0]}
                  />
                </div>
              </div>
          </div>
        </footer>
    );
}

export default PaymentMethode;
