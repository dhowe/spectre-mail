import React from 'react';
import ReactDOM from 'react-dom';

import Email from './Email';

import './inlined.css';

/**
 * This file is not used when rendering the email on the server.
 * It's the perfect place to include mock data for development.
 */

const mockUser = {
  "name": "Sally", "influences": ["Immigration issues", "Images of large crowds", "Short, punchy slogans"], "clientId": 1, "hasImage": true, "targetId": "-1", "descriptors": ["Sally is a perfectionist.", "She prefers to plan everything to the last detail, which has consequently led to her being very successful and extremely reliable.", "Sally is far more intellectually curious and sensitive to beauty than most."], "virtue": "power", "adIssue": "leave", "traits": { "openness": 0.8253353111345854, "conscientiousness": 0.8656814140739604, "extraversion": 0.6890590896284885, "agreeableness": 0.6008941864440192, "neuroticism": 0.20154338443905195 }, "login": "sally4983578918989@mail.com", "loginType": "email", "gender": "female", "createdAt": "2019-06-03T00:12:07.599Z", "similars": [], "category": 0, "_id": "888888888888888888888888", "__v": 0
};

const mockData = {
  city: 'Madrid',
  weather: [
    {
      "date": "2017-04-25",
      "name": "Light Rain",
      "abbr": "lr",
      "tMax": 22.532857142857143,
      "tMin": 10.307142857142859
    },
    {
      "date": "2017-04-26",
      "name": "Heavy Cloud",
      "abbr": "hc",
      "tMax": 18.62285714285714,
      "tMin": 6.680000000000001
    },
    {
      "date": "2017-04-27",
      "name": "Heavy Cloud",
      "abbr": "hc",
      "tMax": 15.20142857142857,
      "tMin": 3.5985714285714288
    },
    {
      "date": "2017-04-28",
      "name": "Heavy Cloud",
      "abbr": "hc",
      "tMax": 15.881428571428572,
      "tMin": 6.3985714285714295
    },
    {
      "date": "2017-04-29",
      "name": "Heavy Rain",
      "abbr": "hr",
      "tMax": 15.994285714285715,
      "tMin": 7.71
    },
    {
      "date": "2017-04-30",
      "name": "Light Rain",
      "abbr": "lr",
      "tMax": 17.581666666666667,
      "tMin": 6.489999999999999
    }
  ],
};

ReactDOM.render(
  <Email data={mockUser} />,
  document.getElementById('root')
);
