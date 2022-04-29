import { restaurantsCol } from "./connectDb.js"

const restaurant = { // creating an object -- in this case a specific restaurant
                    // we want to add to our database
  name: 'Mister 01',
  address: '555 N Federal Hwy Suite #5, Boca Raton, FL 33432',
  cuisine: 'Pizza',
  rating: 4.9,
  phone: '(786) 677-2903',
}

restaurantsCol.add(restaurant) // adding the restaurant to our restaurants collection
  .then(doc => console.log('Created restaurant', doc.id)) // handle resolve
  .catch(err => console.error(err)) // handle reject

const restaurant2 = {
  name: 'Bolay',
  address: '7060 W Palmetto Park Rd, Boca Raton, FL 33433',
  cuisine: 'American',
  rating: 4.6,
}

async function addRestaurant(data) {
  try {
    const doc = await restaurantsCol.add(data) // add restaurant to collection
    console.log('Created restaurant', doc.id) // handle resolve
  } catch(err) {
    console.error(err) // handle reject
  }
}
addRestaurant(restaurant2)

