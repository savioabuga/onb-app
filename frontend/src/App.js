import React from 'react';
import {connect} from 'react-redux';
import {addDataToMap} from 'kepler.gl/actions';
import AutoSizer from 'react-virtualized/dist/commonjs/AutoSizer';
import KeplerGlSchema from 'kepler.gl/schemas';
import { processGeojson } from 'kepler.gl/processors'
import config from './config'

import KeplerGl from 'kepler.gl';


class App extends React.Component {

  componentDidMount() {
    this.loadData()
  }

  _fetchData(url) {
    return fetch(`${process.env.REACT_APP_BACKEND_URL}${url}`).then((response) => {
      if (response.status >= 200 && response.status < 300) {
        return response
      }
      throw Error("Could not load data")

    }).then(
      (response) => response.json()
    )
  }

  async loadData() {
    let regionsData = await this._fetchData("regions/");
    let officesData = await this._fetchData("offices/");
    this._loadGeojsonData(regionsData, officesData)
  }

  _loadGeojsonData(regionsData, officesData) {

    const datasets = [
      {
        info: { label: 'NGO X Offices', id: 'ngo-x-offices', color: [76, 175, 80] },
        data: processGeojson(officesData)
      },
      {
        info: { label: 'NGO X Regions', id: 'ngo-x-regions', color: [76, 175, 80] },
        data: processGeojson(regionsData)
      }
    ]

    const loadedData = KeplerGlSchema.load(
      datasets,
      config
    );
    // load geojson
    this.props.dispatch(
      addDataToMap({
        datasets: datasets,
        config: loadedData.config,
        options: {
          centerMap: false
        }
      })
    );
  }

  render() {

    return (
        <div style={{position: 'absolute', width: '100%', height: '100%'}}>
          <AutoSizer>
            {({height, width}) => (
              <KeplerGl mapboxApiAccessToken={`${process.env.REACT_APP_MAPBOX_TOKEN}`} id="map" width={width} height={height} />
            )}
          </AutoSizer>
        </div>
    );
  }
}

const mapStateToProps = state => state;
const dispatchToProps = dispatch => ({dispatch});

export default connect(mapStateToProps, dispatchToProps)(App);
