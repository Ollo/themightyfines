const shows = [
  // {
  //   date: "October 3rd, 2020",
  //   location: "Front Range Brewing Company",
  //   time: "6:30pm - 8:30pm ",
  //   link: "https://www.frontrangebrewingcompany.com/lafayettebreweryevents",
  //   active: false,
  // },
  // {
  //   date: "October 30th, 2020",
  //   location: "VisionQuest Brewing Company",
  //   time: "6pm - 8pm",
  //   link: "https://www.facebook.com/visionquestbrewery/",
  //   active: false,
  // },
  // {
  //   date: "April 3rd, 2021",
  //   location: "Private Garden Party",
  //   time: "5pm - 8pm",
  //   link: "/",
  //   active: false,
  // },
  // {
  //   date: "May 8th, 2021",
  //   location: "Kettle and Spoke",
  //   time: "5pm - 8pm",
  //   link: "https://www.facebook.com/events/3740126042707909/",
  //   active: false,
  // },
  // {
  //   date: "June 5th, 2021",
  //   location: "VisionQuest Brewing Company",
  //   time: "5pm - 8pm",
  //   link: "http://www.visionquestbrewing.com/events/brandywine-and-the-mighty-fines-2",
  //   active: false,
  // },
  // {
  //   date: "August 13th, 2021",
  //   location: "Cellar West Artisan Ales",
  //   time: "7pm - 9pm",
  //   link: "https://www.cellarwest.com/sunset-concerts",
  //   active: false,
  // },
  // {
  //   date: "August 28th, 2021",
  //   location: "Kettle and Spoke",
  //   time: "6pm - 9pm",
  //   link: "https://www.facebook.com/KettleandSpoke/events/",
  //   active: false,
  // },
  // {
  //   date: "September 18th, 2021",
  //   location: "Rollinsville, CO",
  //   name: "Howlin Wind Brewing and Blending",
  //   time: "3pm - 6pm",
  //   link: "https://www.facebook.com/events/188121240053869",
  //   active: false,
  //   poster: 'images/posters/placeholder.jpg'
  // },
  // {
  //   date: "October 31st",
  //   location: "Boulder, CO",
  //   name: "Grateful Halloween ~ Kettle and Spoke",
  //   time: "5pm - 8:30pm",
  //   link: "https://www.facebook.com/events/178809114435692",
  //   active: false,
  //   poster: 'images/posters/2021-10-31.jpg'
  // },
  // {
  //   date: "November 6th, 2021",
  //   location: "Boulder, CO",
  //   name: "Beyond the Mountain Brewing Company",
  //   time: "6pm - 9pm",
  //   link: "https://www.facebook.com/events/309177470864776",
  //   active: false,
  //   poster: 'images/posters/2021-11-3.jpg'
  // },
  {
    date: "January 22nd, 2022",
    location: "Denver, CO",
    name: "Bloodies & Bluegrass @ Mile High Spirits",
    time: "2pm - 6pm",
    link: "/",
    active: false,
    poster: 'images/posters/2022-1-22.jpg'
  },
  {
    date: "February 19th, 2022",
    location: "Boulder, CO",
    name: "The Fox Theater",
    time: "Doors @ 8:30pm",
    link: "https://www.axs.com/events/417573/jane-and-matthews-with-graham-good-the-painters-phantom-phare-brandy-tickets?skin=foxtheatre",
    active: false,
    poster: 'images/posters/2022-2-19.jpg'
  },
  {
    date: "February 25th, 2022",
    location: "Boulder, CO",
    name: "Brandywine Trio @ Kettle & Spoke",
    time: "7pm - 9pm",
    link: "https://www.facebook.com/events/424610889443934",
    active: false,
    poster: 'images/posters/placeholder.jpg'
  },
  {
    date: "March 11th, 2022",
    location: "Dillon, CO",
    name: "Keystone Winter Bluegrass Weekend",
    time: "Doors @ 6:30pm",
    link: "https://warrenstation.com/event/winterbluegrass2022/",
    active: false,
    poster: 'images/posters/2022-3-11.jpg'
  },
  {
    date: "March 26th, 2022",
    location: "Denver, CO",
    name: "The Lodge at Wood Boss",
    time: "Doors @ 7:00pm",
    link: "https://www.eventbrite.com/e/high-lonesome-w-brandywine-and-the-mighty-fines-at-the-lodge-tickets-224966840877?fbclid=IwAR2QAz2Fi7fpd3rf34Y2t8wrTCun8OdftoYCTGoZb5IASigZsAmrq4fKCyg",
    active: false,
    poster: 'images/posters/2022-3-26.png',
  },
  {
    date: "April 15th, 2022",
    location: "Lyons, CO",
    name: "MainStage Brewing",
    time: "6pm - 9pm",
    link: "https://www.mainstagebrewing.com/music/brandywine-the-mighty-fines",
    active: false,
    poster: 'images/posters/2022-4-15.png'
  },
  {
    date: "April 23th, 2022",
    location: "Lyons, CO",
    name: "FoCoMX ~ Equinox Brewing",
    time: "3pm",
    link: "https://focomx.focoma.org/artists/brandywine-and-mighty-fines",
    active: false,
    poster: 'images/posters/2022-4-23.jpg'
  },
  {
    date: "April 29th, 2022",
    location: "Jamestown, CO",
    name: "Jamestown Mercantile",
    time: "7pm - 9pm",
    link: "https://www.jamestownmercantile.com/calendar",
    active: false,
    poster: 'images/posters/2022-4-29.jpg'
  },
  {
    date: "May 1st, 2022",
    location: "Longmont, CO",
    name: "(ECHO) Birthday Party ~ Left Hand Brewery Beer Garden",
    link: "https://www.echocolorado.com/news",
    active: false,
    poster: 'images/posters/placeholder.jpg'
  },
  {
    date: "May 28th, 2022",
    location: "Estes Park, CO",
    name: "Full Throttle Distillery",
    link: "https://www.facebook.com/theMightyFines/photos/a.128056302089629/562039912024597",
    active: false,
    time: '5pm - 8pm',
    poster: 'images/posters/2022-5-28.jpg'
  },
  {
    date: "June 4th, 2022",
    location: "Altona, CO",
    name: "Private Event",
    active: false,
    poster: 'images/posters/2022-6-4.png'
  },
  {
    date: "June 18th, 2022",
    location: "Longmont, CO",
    name: "Wibby Brewing",
    link: "https://www.facebook.com/events/1227315141412371",
    time: '6pm - 9pm',
    active: false,
    poster: 'images/posters/2022-06-18.jpg'
  },
  {
    date: "June 22nd, 2022",
    location: "Denver, CO",
    name: "Cervantes Masterpiece ~ Jay Roemer Band, Southbound String Band",
    link: "https://www.etix.com/ticket/p/3977797/jay-roemer-band-ftmembers-of-hot-buttered-rum-chain-station-wsouthbound-string-band-ftmembers-of-morsel-clay-stunit-denver-cervantesother-side",
    active: false,
    time: '7:30pm',
    poster: 'images/posters/2022-06-22.jpg'
  },
  {
    date: "June 25th, 2022",
    location: "Littleton, CO",
    name: "Breckenridge Brewery Farmhouse",
    link: "https://www.facebook.com/events/342620314611644",
    active: false,
    poster: 'images/posters/placeholder.jpg'
  },
  {
    date: "July 23rd, 2022",
    location: "Rollinsville, CO",
    name: "Stage Stop Pub",
    link: "https://www.facebook.com/stagestoppub",
    active: false,
    poster: 'images/posters/2022-7-23.png'
  },
  {
    date: "August 12th, 2022",
    location: "Guffey, CO",
    name: "Humm Family Gathering",
    link: "https://hummfamilygathering.ticketleap.com/2022/?fbclid=IwAR2_0C2dreRI0zWLNcCgblCb0dFblxVKG59gQLk1EmMBSCvUTLuYR-gvJDw",
    active: false,
    poster: 'images/posters/2022-08-12.jpg'
  },
  {
    date: "August 16th, 2022",
    location: "Boulder, CO",
    name: "Gloo ~ Company Picnic",
    link: "",
    active: false,
    poster: 'images/posters/placeholder.jpg'
  },
  {
    date: "August 26th, 2022",
    location: "Lafayette, CO",
    name: "Cellar West ~ Summer Concert Series",
    link: "https://www.cellarwest.com/events",
    active: false,
    poster: 'images/posters/2022-8-26.jpg'
  },
  {
    date: "September 10th, 2022",
    location: "Copper Mountain",
    name: "Union Peak Festival",
    link: "https://www.coppercolorado.com/things-to-do/events/union-peak-festival?fbclid=IwAR2gR-GqvIGCcCcM1PCJ9rccMOtJsy_XxlZsTI2wFmr6Bco5FzFKDn8Y7No",
    active: false,
    time: "12 - 1:30pm",
    poster: 'images/posters/2022-9-10.jpg'
  },
  {
    date: "September 11th, 2022",
    location: "Denver, CO",
    name: "Number Thirty Eight",
    link: "https://nmbr38.com/events/6snb7y485ekrtea-l7y3n-x6wmn-9cz9x-emzed-njw22-fmh2l-gz8y9-5r6tf-le2y6-lh5wp-5d9rt-98fr9-2cmhz-2ytkh-ndasd-jd29w-ytkdd-mhjlt-gg936-4wktz-8l7s6-mjaez-ddmhb-6cdmb-t2zey-5cepa-5ma8x-n59k9-smrx4-jk24p",
    active: false,
    time: "3pm - 5pm",
    poster: 'images/posters/placeholder.jpg'
  },
  {
    date: "September 17th, 2022",
    location: "Palisade, CO",
    name: "Palisade Brewing Company",
    link: "https://fb.me/e/3vlSKp4PZ",
    active: true,
    time: "7pm",
    poster: 'images/posters/2022-9-17.jpg'
  },
]

module.exports = shows
