import React from 'react';
import Reusehero from '../components/reusehero';
import Link from 'next/link';

const About = () => {
  return (
    <div className="min-h-screen  py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white shadow-xl rounded-lg overflow-hidden">
       <Reusehero title={"About H.Q"} parag={""}/>

          <div className="p-8 md:p-12">
        <div className="  w-full">
        <h3 className="text-lg font-semibold text-black mb-4">About Us</h3>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              We are a family-owned Nigerian Restaurant located in the heart of Fallowfield, Manchester. Our roots come from Benin City, Edo State, Nigeria, and we aim to become the Headquarters for all things Nigeria, starting with our delicious food.
            </p>
</div>
            <h3 className="text-lg font-semibold text-black mb-4">Our Mission</h3>
            <p className="text-base text-gray-700 mb-6 leading-relaxed">
              At H.Q, we believe in the power of food to bring people together. We proudly serve authentic Nigerian dishes from all corners of Nigeria, offering a unique experience that’s more than just a meal. It’s a journey into the rich culinary traditions of Nigeria.
            </p>
<div className="flex flex-col justify-start">
            <h3 className="text-lg font-semibold text-black mb-4">What We Offer</h3>
            <p className="text-base text-gray-700 mb-6 leading-relaxed">
              If you haven’t already tried Nigerian food, H.Q is the perfect place to begin your education. From the Northern-inspired Suya (grilled beef or lamb) to South Eastern Pounded Yam and Egusi Soup, and the West’s famous Boli (Roasted Plantain), we bring Nigerian food, culture, and atmosphere to your doorstep.
            </p>
            <Link href={'https://www.pronto-food-online.com/ordering/restaurant/menu?restaurant_uid=175b2cdb-5680-4673-b025-59f548105410&glfa_cid=1694974390.1601939947&glfa_t=1601940069781'} target="_blank" className='  mb-6  font-bold right-24 w-32  text-red-500 border text-center  py-1 hover:text-green-500 rounded-sm'   > Order online</Link>
</div>
            <h3 className="text-lg font-semibold text-black mb-4">Tailored to Your Taste</h3>
            <p className="text-base text-gray-700 mb-6 leading-relaxed">
              For those wary of spice, we tailor our dishes from mild, medium, to extra hot and spicy. Nigerian food is about flavors—more than just heat. You’ll experience the rich, savory, and sweet balance that defines our cooking. From the first bite, you’ll be captivated by the depth of flavor.
            </p>

            <h3 className="text-lg font-semibold text-black mb-4">An Invitation to Nigeria</h3>
            <p className="text-base text-gray-700 leading-relaxed">
              We invite you to come and have a taste of Nigeria at H.Q, and we promise that you will never remain the same again. Whether you're new to Nigerian food or a long-time fan, we're here to give you the best culinary experience possible. Come enjoy, and let’s celebrate our rich heritage together.
            </p>
          </div>

      
        </div>
      </div>
    </div>
  );
};

export default About;
