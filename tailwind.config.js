/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin')

module.exports = {
  content: ["./src/**/*.{html,js,php}"],
  theme: {
    extend: {
      spacing: {
      px: '1px',
      0: '0',
      "1":"0.1rem","2":"0.2rem","3":"0.3rem","4":"0.4rem","5":"0.5rem","6":"0.6rem","7":"0.7rem","8":"0.8rem","9":"0.9rem","10":"1rem","11":"1.1rem","12":"1.2rem","13":"1.3rem","14":"1.4rem","15":"1.5rem","16":"1.6rem","17":"1.7rem","18":"1.8rem","19":"1.9rem","20":"2rem","21":"2.1rem","22":"2.2rem","23":"2.3rem","24":"2.4rem","25":"2.5rem","26":"2.6rem","27":"2.7rem","28":"2.8rem","29":"2.9rem","30":"3rem","31":"3.1rem","32":"3.2rem","33":"3.3rem","34":"3.4rem","35":"3.5rem","36":"3.6rem","37":"3.7rem","38":"3.8rem","39":"3.9rem","40":"4rem","41":"4.1rem","42":"4.2rem","43":"4.3rem","44":"4.4rem","45":"4.5rem","46":"4.6rem","47":"4.7rem","48":"4.8rem","49":"4.9rem","50":"5rem","51":"5.1rem","52":"5.2rem","53":"5.3rem","54":"5.4rem","55":"5.5rem","56":"5.6rem","57":"5.7rem","58":"5.8rem","59":"5.9rem","60":"6rem","61":"6.1rem","62":"6.2rem","63":"6.3rem","64":"6.4rem","65":"6.5rem","66":"6.6rem","67":"6.7rem","68":"6.8rem","69":"6.9rem","70":"7rem","71":"7.1rem","72":"7.2rem","73":"7.3rem","74":"7.4rem","75":"7.5rem","76":"7.6rem","77":"7.7rem","78":"7.8rem","79":"7.9rem","80":"8rem","81":"8.1rem","82":"8.2rem","83":"8.3rem","84":"8.4rem","85":"8.5rem","86":"8.6rem","87":"8.7rem","88":"8.8rem","89":"8.9rem","90":"9rem","91":"9.1rem","92":"9.2rem","93":"9.3rem","94":"9.4rem","95":"9.5rem","96":"9.6rem","97":"9.7rem","98":"9.8rem","99":"9.9rem","100":"10rem","101":"10.1rem","102":"10.2rem","103":"10.3rem","104":"10.4rem","105":"10.5rem","106":"10.6rem","107":"10.7rem","108":"10.8rem","109":"10.9rem","110":"11rem","111":"11.1rem","112":"11.2rem","113":"11.3rem","114":"11.4rem","115":"11.5rem","116":"11.6rem","117":"11.7rem","118":"11.8rem","119":"11.9rem",
    },
    borderRadius: {
      "1":"0.1rem","2":"0.2rem","3":"0.3rem","4":"0.4rem","5":"0.5rem","6":"0.6rem","7":"0.7rem","8":"0.8rem","9":"0.9rem","10":"1rem","11":"1.1rem","12":"1.2rem","13":"1.3rem","14":"1.4rem","15":"1.5rem","16":"1.6rem","17":"1.7rem","18":"1.8rem","19":"1.9rem","20":"2rem","21":"2.1rem","22":"2.2rem","23":"2.3rem","24":"2.4rem","25":"2.5rem","26":"2.6rem","27":"2.7rem","28":"2.8rem","29":"2.9rem","30":"3rem","31":"3.1rem","32":"3.2rem","33":"3.3rem","34":"3.4rem","35":"3.5rem","36":"3.6rem","37":"3.7rem","38":"3.8rem","39":"3.9rem","40":"4rem","41":"4.1rem","42":"4.2rem","43":"4.3rem","44":"4.4rem","45":"4.5rem","46":"4.6rem","47":"4.7rem","48":"4.8rem","49":"4.9rem","50":"5rem",
    },
    borderWidth: {
      "1":"0.1rem","2":"0.2rem","3":"0.3rem","4":"0.4rem","5":"0.5rem","6":"0.6rem","7":"0.7rem","8":"0.8rem","9":"0.9rem","10":"1rem","11":"1.1rem","12":"1.2rem","13":"1.3rem","14":"1.4rem","15":"1.5rem","16":"1.6rem","17":"1.7rem","18":"1.8rem","19":"1.9rem","20":"2rem","21":"2.1rem","22":"2.2rem","23":"2.3rem","24":"2.4rem","25":"2.5rem","26":"2.6rem","27":"2.7rem","28":"2.8rem","29":"2.9rem","30":"3rem","31":"3.1rem","32":"3.2rem","33":"3.3rem","34":"3.4rem","35":"3.5rem","36":"3.6rem","37":"3.7rem","38":"3.8rem","39":"3.9rem","40":"4rem","41":"4.1rem","42":"4.2rem","43":"4.3rem","44":"4.4rem","45":"4.5rem","46":"4.6rem","47":"4.7rem","48":"4.8rem","49":"4.9rem","50":"5rem",
    }
    },
    screens: {
      'cos': {'max': '1440px'},
      'xl': {'max': '1024px'},
      'sm': {'max': '500px'}
    },
    colors: {
      "primary-color": "var(--primary-color)",
    }
  },
  plugins: [
    plugin(function({ matchUtilities, theme }) {
      matchUtilities(
        {
          text: (value) => {
            return {fontSize: `${value}`}
          },
        },
        { values: theme('spacing') }
      )
    })
  ],
  experimental: {
    optimizeUniversalDefaults: true
  },
};
