import React, { useMemo } from 'react'
import Navbar from '../../../main/navbar/Navbar'
import { Chart } from 'react-charts'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(() => ({
  globeDescription: {
    textAlign: 'center',
  },
  globeTitle: {
    marginTop: '80px',
    marginBottom: '30px',
    color: '#00CC00',
  },
  globeParagraph: {
    marginBottom: '20px',
  },
  chartsWrapper: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  chart: {
    width: '500px',
    height: '300px',
    marginTop: '100px',
    marginRight: '50px',
  },
}))

export default function CovidStatistics() {
  const globalData = useMemo(
    () => [
      {
        label: 'Covid-19 cases around the globe',
        data: [
          { x: 1, y: 20000 },
          { x: 2, y: 40000 },
          { x: 3, y: 60000 },
          { x: 4, y: 70000 },
          { x: 5, y: 80500 },
          { x: 6, y: 30000 },
        ],
        color: '#ff7f0e',
      },
    ],

    [],
  )

  const albaniaData = useMemo(
    () => [
      {
        label: 'Covid-19 cases in Albania',
        data: [
          { x: 1, y: 66000 },
          { x: 2, y: 22000 },
          { x: 3, y: 33000 },
          { x: 4, y: 22000 },
          { x: 5, y: 66000 },
          { x: 6, y: 55000 },
        ],
        color: '#CC0000',
      },
    ],
    [],
  )

  const axesGlobe = useMemo(
    () => [
      { primary: true, type: 'linear', position: 'bottom' },
      { type: 'linear', position: 'left' },
    ],
    [],
  )

  const axesAlbania = useMemo(
    () => [
      { primary: true, type: 'linear', position: 'bottom', color: '#000000' },
      { type: 'linear', position: 'left' },
    ],
    [],
  )

  const classes = useStyles()

  return (
    <div>
      <Navbar isGlobeFilterAvailable={false} />
      <div className={classes.globeDescription}>
        <h2 className={classes.globeTitle}>
          Get a closer look at the charts!!
        </h2>
        <p>
          The first one represents Covid-19 cases around the globe since the
          start of the pandemic. Fortunately, the number of active cases has
          dropped, regarding the choice of population to be vaccinated.
        </p>
        <p className={classes.globeParagraph}>
          The second one represents Covid-19 cases in Albania, in the last
          couple of months. As you can see, the cases have had a raise and drop
          depending in different periods of month.
        </p>
      </div>
      <div className={classes.chartsWrapper}>
        <div className={classes.chart}>
          <Chart data={globalData} axes={axesGlobe} />
        </div>
        <div className={classes.chart}>
          <Chart data={albaniaData} axes={axesAlbania} />
        </div>
      </div>
    </div>
  )
}
