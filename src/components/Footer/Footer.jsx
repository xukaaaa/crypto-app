import React from 'react'

function Footer() {
   return (
      <div className="w-full py-6 shadow-footer fixed bottom-0">
         <div className="w-[1300px] mx-auto flex items-center justify-between px-4 ">
            <p>© 2023 CoinGecko. All Rights Reserved.</p>
            <div>
               <button>
                  <img
                     loading="lazy"
                     alt="Google Play Store Button"
                     width="135"
                     height="40"
                     className="mr-2"
                     src="https://static.coingecko.com/s/coingecko_logos/google_play_store-cb1f298b04afa7f74639a948d9b2e22e4aa6eea9486a2b0442c2cf9bdcda63e8.svg"
                  />
               </button>
               <button>
                  <img
                     loading="lazy"
                     alt="Apple App Store Button"
                     width="135"
                     height="40"
                     src="https://static.coingecko.com/s/coingecko_logos/apple_app_store-558245a688cc13737dfb861fd82b252d75d5afbaf343c06e3067a454675bbe05.svg"
                  />
               </button>
            </div>
         </div>
      </div>
   )
}

export default Footer
