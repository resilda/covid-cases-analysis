import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import dataActions from '../../../../modules/data/dataActions'
import dataSelectors from '../../../../modules/data/dataSelecters'
import { GlobeNewsContainer } from './styles/GlobeNewsContainer'
import Navbar from '../../../main/navbar/Navbar'
import Paper from '@material-ui/core/Paper'
import Table from '@material-ui/core/Table'
import TableHead from '@material-ui/core/TableHead'
import TableBody from '@material-ui/core/TableBody'
import TableRow from '@material-ui/core/TableRow'
import TableCell from '@material-ui/core/TableCell'
import TableFooter from '@material-ui/core/TableFooter'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(() => ({
  globeDescription: {
    textAlign: 'center',
  },
  globeTitle: {
    marginTop: '80px',
    marginBottom: '30px',
    color: '#FF9900',
  },
  globeParagraph: {
    marginBottom: '20px',
  },
  wrapper: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  root: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: 1200,
    marginBottom: 70,
    color: 'rgba(247, 240, 240, 0.925)',
    borderRadius: '7px',
    marginTop: '60px',
  },
  row: {
    cursor: 'pointer',
  },
  headerCell: {
    fontWeight: 'bold',
    fontSize: '14.5px',
  },
  cell: {
    fontSize: '14.5px',
  },
  newCasesCell: {
    color: '#CC0000',
  },
  totalCasesCell: {
    color: '#FF9900',
  },
  dateCell: {
    color: '#00CC00',
  },
  image: {
    width: '45px',
    height: '55px',
    border: '1px solid #377867',
  },
}))

function GlobeCovidNews() {
  const statisticsData = useSelector(dataSelectors.selectedStatisticsData)
  const selectedCountry = useSelector(dataSelectors.selectedFilteredCountry)

  const [getCountryByUser, setGetCountryByUser] = useState(selectedCountry)

  const dispatch = useDispatch()
  const classes = useStyles()

  useEffect(() => {
    dispatch(dataActions.fetchAllStatisticsData())
  }, [dispatch])

  return (
    <GlobeNewsContainer>
      <Navbar
        getCountryByUser={getCountryByUser}
        setGetCountryByUser={setGetCountryByUser}
        isGlobeFilterAvailable={true}
      />
      <div className={classes.globeDescription}>
        <h2 className={classes.globeTitle}>
          How is the situation around the globe?
        </h2>
        <p>
          In the current page, there are displayed some real-time data related
          to Covid-19 cases in all country's category.
        </p>
        <p className={classes.globeParagraph}>
          Filter the country required in the search bar above, and get your
          information within seconds.
        </p>
      </div>
      <div className={classes.wrapper}>
        <Paper className={classes.root}>
          <Table className={classes.table}>
            <TableHead>
              <TableCell className={classes.headerCell}>Continent</TableCell>
              <TableCell className={classes.headerCell}>Country</TableCell>
              <TableCell className={classes.headerCell}>Population</TableCell>
              <TableCell className={classes.headerCell}>New Cases</TableCell>
              <TableCell className={classes.headerCell}>Total Cases</TableCell>
              <TableCell className={classes.headerCell}>Total Tests</TableCell>
              <TableCell className={classes.headerCell}>Date</TableCell>
            </TableHead>
            {statisticsData.map((data) => (
              <TableBody key={data.country}>
                <TableRow className={classes.row}>
                  <TableCell className={classes.cell}>
                    {data.continent}
                  </TableCell>
                  <TableCell className={classes.cell}>{data.country}</TableCell>
                  <TableCell className={classes.cell}>
                    {data.population}
                  </TableCell>
                  <TableCell className={classes.newCasesCell}>
                    {data.cases.new}
                  </TableCell>
                  <TableCell className={classes.totalCasesCell}>
                    {data.cases.total}
                  </TableCell>
                  <TableCell className={classes.cell}>
                    {data.tests.total}
                  </TableCell>
                  <TableCell className={classes.dateCell}>{data.day}</TableCell>
                </TableRow>
              </TableBody>
            ))}
            <TableFooter></TableFooter>
          </Table>
        </Paper>
      </div>
    </GlobeNewsContainer>
  )
}

export default GlobeCovidNews
