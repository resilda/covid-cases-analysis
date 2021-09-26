import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import dataActions from '../../../../modules/data/dataActions'
import dataSelectors from '../../../../modules/data/dataSelecters'
import { AlbaniaNewsContainer } from './styles/AlbaniaNewsContainer'
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
    color: '#CC0000',
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
    width: 1000,
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
  activeCasesCell: {
    color: '#FF9900',
  },
  recoveredCell: {
    color: '#00CC00',
  },
  image: {
    width: '45px',
    height: '55px',
    border: '1px solid #377867',
  },
}))

function AlbaniaCovidNews() {
  const historyData = useSelector(dataSelectors.selectedHistoryData)

  const dispatch = useDispatch()
  const classes = useStyles()

  useEffect(() => {
    dispatch(dataActions.fetchAllHistoryData())
  }, [dispatch])

  return (
    <AlbaniaNewsContainer>
      <Navbar isGlobeFilterAvailable={false} />
      <div className={classes.globeDescription}>
        <h2 className={classes.globeTitle}>How is the situation in Albania?</h2>
        <p>
          In the current page, there are displayed some real-time data related
          to Covid-19 cases in Albanian country.
        </p>
        <p className={classes.globeParagraph}>
          Get informed daily related to Covid-19 situation.
        </p>
      </div>
      <div className={classes.wrapper}>
        <Paper className={classes.root}>
          <Table className={classes.table}>
            <TableHead>
              <TableCell className={classes.headerCell}>New Cases</TableCell>
              <TableCell className={classes.headerCell}>Active Cases</TableCell>
              <TableCell className={classes.headerCell}>Total Cases</TableCell>
              <TableCell className={classes.headerCell}>
                Recovered Cases
              </TableCell>
              <TableCell className={classes.headerCell}>Date</TableCell>
            </TableHead>
            {historyData.map((data) => (
              <TableBody key={data.cases.new}>
                <TableRow className={classes.row}>
                  <TableCell className={classes.newCasesCell}>
                    {data.cases.new}
                  </TableCell>
                  <TableCell className={classes.activeCasesCell}>
                    {data.cases.active}
                  </TableCell>
                  <TableCell className={classes.cell}>
                    {data.cases.total}
                  </TableCell>
                  <TableCell className={classes.recoveredCell}>
                    {data.cases.recovered}
                  </TableCell>
                  <TableCell className={classes.cell}>{data.day}</TableCell>
                </TableRow>
              </TableBody>
            ))}
            <TableFooter></TableFooter>
          </Table>
        </Paper>
      </div>{' '}
    </AlbaniaNewsContainer>
  )
}

export default AlbaniaCovidNews
