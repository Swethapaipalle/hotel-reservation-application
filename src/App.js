import React, { useState, useEffect } from 'react';
import SearchPage from './components/search-container/SearchPage';
import ResultsTable from './components/results-page- container/ResultsTable';
import { Grid } from '@mui/material';
import './App.scss';
import { BehaviorSubject, of, merge } from 'rxjs';
import { debounceTime, map, distinctUntilChanged, filter, switchMap, catchError } from 'rxjs/operators';
import data from './reservations.json';


function App() {
  const [state, setState] = useState({
    data: [],
    loading: false,
    errorMessage: '',
    noResults: false
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
          merge(
            of({loading: true, errorMessage: '', noResults: false}),
            of({data, loading: false, noResults: data.length === 0})
          )
        ),
        catchError(e => ({
          loading: false,
          errorMessage: 'An application error occured'
        }))
      ).subscribe( newState => {
        console.log('new state' + JSON.stringify(newState));
        setState(s => Object.assign({}, s, newState));
      });

      return () => {
        observable.unsubscribe()
        subject.unsubscribe();
      }
    }
  }, [subject]);

  const onChange = e => {
    console.log('e ' + e.target.value);
    console.log('subject ' + subject);
    if(e.target.value.length === 0) {
      console.log("data in container", data)
      setState({
        data: data,
        loading: false,
        errorMessage: '',
        noResults: false
      })
    } else {
      setState({
        data: [],
        loading: false,
        errorMessage: '',
        noResults: false
      })
      return subject.next(e.target.value);
    }
  };

  return (
    <Grid container className="app-container">
      <SearchPage loading={state.loading} onChange={onChange} />
      <ResultsTable data={state.data} errorMessage={state.errorMessage} noResults={state.noResults} />

    </Grid>
  );
}

export default App;
