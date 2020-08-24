import moment from 'moment';

// 0 - 2 - night 2
// 2 - 4 - night 3
// 4 - 6 - (sunrise 1)
// 6 - 8 - (sunrise 2)
// 8 - 10 - morning 1
// 10 - 12 - morning 2
// 12 - 14 - (noon)
// 14 - 16 - afternoon 1
// 16 - 18 - afternoon 2
// 18 - 19 - evening 1 (sunset 1)
// 19 - 20 - evening 2 (sunset 2)
// 20 - 22 - night 1
// 22 - 24 - night 1

const getWallpaper = () => {
  const t = moment();
  const currentHour = t.hour();

  let pictureState = 'NOON';

  switch(currentHour) {
    case 0:
    case 1:
    case 2:
      pictureState = 'NIGHT_2'
      break;
    case 3:
    case 4:
      pictureState = 'NIGHT_3'
      break;
    case 5:
    case 6:
      pictureState = 'SUNRISE_1'
      break;
    case 7:
    case 8:
      pictureState = 'SUNRISE_2'
      break;
    case 9:
    case 10:
      pictureState = 'MORNING_1'
      break;
    case 11:
    case 12:
      pictureState = 'MORNING_2'
      break;
    case 13:
    case 14:
      pictureState = 'NOON'
      break;
    case 15:
    case 16:
      pictureState = 'AFTERNOON_1'
      break;
    case 17:
    case 18:
      pictureState = 'AFTERNOON_2'
      break;
    case 19:
      pictureState = 'SUNSET_1'
      break;
    case 20:
      pictureState = 'SUNSET_2'
      break;
    case 21:
    case 22:
    case 23:
      pictureState = 'NIGHT_1'
      break;
    default:
      break;
  }
  
  return pictureState;
} 

export default getWallpaper;