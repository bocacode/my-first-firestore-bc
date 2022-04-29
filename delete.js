import { restaurantsCol } from "./connectDb.js"

// delete 6HjfW8dJ4KF5KwyKwZpU
restaurantsCol.doc('6HjfW8dJ4KF5KwyKwZpU').delete()
  .then(res => console.log('Success deleting 6HjfW8dJ4KF5KwyKwZpU!!'))
  .catch(err => console.error('Error deleting 6HjfW8dJ4KF5KwyKwZpU: ', err))

restaurantsCol.doc('1XpWYi25q9qgLmTulbax').delete()
  .then(res => console.log('Success deleting 1XpWYi25q9qgLmTulbax!!'))
  .catch(err => console.error('Error deleting 1XpWYi25q9qgLmTulbax: ', err))


