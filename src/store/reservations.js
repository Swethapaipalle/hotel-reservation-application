// import { BehaviorSubject, from, merge } from 'rxjs';
// import data from'./../reservations.json'
// import {catchError, distinctUntilChanged, filter, map, switchMap, tap} from "rxjs/operators";
//
// const subject = new BehaviorSubject('');
//
// const initialState = {
// 	noResults:'',
// 	data: []
// };
//
// let state = initialState;
// const source = from(data);
// const reservationStore = {
// 	init: (value)=> {
// 		console.log('val', value);
//
// 		// if (subject === null) {
// 		// 	const sub = new BehaviorSubject('');
// 		// 	setSubject(sub);
// 		// } else {
// 		state = source.pipe(
// 				filter(s => s.includes('IDM')),
// 				catchError(e => ({
// 					errorMessage: 'An application error occured'
// 				}))
// 			)
// 		subject.next(state);
// 		// 	.subscribe(newState => {
// 			// 	setReservationState(s => Object.assign({}, s, newState));
// 			// });
//
// 			return () => {
// 				state.unsubscribe()
// 				subject.unsubscribe();
// 			}
// 		// }
// 	},
// 	subscribe: setState => subject.subscribe(setState),
//
// 	// add: (payload) => {
// 	// 	console.log('add');
// 	// 	const data = {
// 	// 		reservations: [...reservationState.data, payload],
// 	// 		noResults: false
// 	// 	};
// 	// 	setReservationState(data);
// 	// },
// 	initialState
// };
//
// export default reservationStore;

