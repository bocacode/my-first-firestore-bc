import { restaurantsCol } from './connectDb.js'

// restaurantsCol.get() // get ALL restaurants
//   .then(snapshot => {
//     // loop through all results
//     snapshot.docs.forEach(doc => console.log(doc.data()))
//   })
//   .catch(console.error)

restaurantsCol
  // .where('name', '==', 'Bolay')
  .where('rating', '>=', 4.75)
  .get()
  .then(snapshot => {
    // loop through all results
    snapshot.docs.forEach(doc => console.log(doc.data()))
  })
  .catch(console.error)
