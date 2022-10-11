import React, { useState, useEffect } from 'react';
import SearchPage from './components/search-container/SearchPage';
import ResultsTable from './components/results-page- container/ResultsTable';
import { Grid } from '@mui/material';
import './App.scss';
import { BehaviorSubject, of, merge } from 'rxjs';
import { map, distinctUntilChanged, filter, switchMap, catchError } from 'rxjs/operators';
import { useContext } from 'react';
import { ReservationContext } from "./useContext/context";
import data from'./reservations.json'

function App() {
	const [state, dispatch] = useContext(ReservationContext);
	const [reservationState, setReservationState] = useState({
		data: [],
		noResults: true
	});
	const [subject, setSubject] = useState(null);

	useEffect(() => {
		if(subject === null) {
			const sub = new BehaviorSubject('');
			setSubject(sub);
		} else {
			const observable = subject.pipe(
				map(s => s.trim()),
				distinctUntilChanged(),
				filter(s => s.length >= 1),
				filter(s => s.includes('IDM')),
				switchMap(term =>
					merge(of({ noResults: false}),
						of({data, noResults: data.length === 0}))
				),
				catchError(e => ({
					errorMessage: 'An application error occured'
				}))).subscribe( newState => {
				setReservationState(s => Object.assign({}, s, newState));
			});

			return () => {
				observable.unsubscribe()
				subject.unsubscribe();
			}
		}
	}, [subject]);

	useEffect(() => {
		dispatch({
			type: "SET_RESERVATION",
			payload: reservationState
		});

	}, [reservationState]);

	const onChange = e => {
		if(e.target.value.length === 0) {
			setReservationState({
				data: [],
				noResults: true
			})
		} else {
			return subject.next(e.target.value);
		}
	};

	return (
		<Grid container className="app-container">
			<SearchPage onChange={onChange} />
			<ResultsTable />
		</Grid>
	);
}
export default App;
