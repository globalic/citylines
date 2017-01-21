import React, {PureComponent} from 'react';
import {browserHistory} from 'react-router';

import {Panel, PanelHeader, PanelBody} from './panel';
import LinesTree from './city/lines-tree';
import {Map, Source, Layer, Popup} from './map';
import Year from './city/year';

import MainStore from '../stores/main-store';
import CityStore from '../stores/city-store';

class City extends PureComponent {
  constructor(props, context) {
    super(props, context);

    this.urlName = this.props.params.city_url_name;

    this.state = CityStore.getState(this.urlName);

    this.bindedOnChange = this.onChange.bind(this);
    this.bindedOnYearChange = this.onYearChange.bind(this);
    this.bindedOnLineToggle = this.onLineToggle.bind(this);
    this.bindedOnLinesShownChange = this.onLinesShownChange.bind(this);
    this.bindedOnMouseMove = this.onMouseMove.bind(this);
    this.bindedOnMouseClick = this.onMouseClick.bind(this);
    this.bindedOnMapMove = this.onMapMove.bind(this);
    this.bindedOnMapLoad = this.onMapLoad.bind(this);
  }

  componentWillMount() {
    MainStore.addChangeListener(this.bindedOnChange);
    CityStore.addChangeListener(this.bindedOnChange);
  }

  componentWillUnmount() {
    MainStore.removeChangeListener(this.bindedOnChange);
    CityStore.removeChangeListener(this.bindedOnChange);
  }

  componentDidMount() {
    CityStore.load(this.urlName, this.params());
  }

  params() {
    return this.props.location.query;
  }

  updateParams(newParams) {
    const params = Object.assign({}, this.params(), newParams);

    // If new params are equal to the current ones, we don't push the state to the
    // browser history
    if (JSON.stringify(params) === JSON.stringify(this.params())) return;

    browserHistory.push({...this.props.location, query: params});
  }

  onChange() {
    this.setState(CityStore.getState(this.urlName));
  }

  onMapLoad(map) {
    CityStore.loadStore(this.urlName);
  }

  onMapMove(geo) {
    if (this.state.playing) return;
    const newGeo = `${geo.lat},${geo.lon},${geo.zoom},${geo.bearing},${geo.pitch}`;
    this.updateParams({geo: newGeo});
  }

  onYearChange() {
    if (this.state.playing) return;
    const newYear = this.state.currentYear;
    this.updateParams({year: newYear});
  }

  onLineToggle(lineUrlName) {
    CityStore.toggleLine(this.urlName, lineUrlName);
  }

  onLinesShownChange() {
    const linesShown = this.state.linesShown.join(',');
    this.updateParams({lines: linesShown});
  }

  onMouseMove(point, features) {
    CityStore.hover(this.urlName, features);
  }

  onMouseClick(point, features) {
    CityStore.clickFeatures(this.urlName, point, features);
  }

  render() {
    return (
        <div className="o-grid o-panel">
          <Panel display={this.state.main.displayPanel}>
            <PanelHeader>
              <div className="panel-header-title">
                <h3 className="c-heading">{this.state.name}</h3>
              </div>
              <Year
                urlName={this.urlName}
                min={(this.state.config.years || {}).start}
                max={(this.state.config.years || {}).end}
                year={this.state.currentYear}
                playing={this.state.playing}
                onYearChange={this.bindedOnYearChange}
              />
            </PanelHeader>
            <PanelBody>
              <ul style={{marginLeft: "1em"}} className="c-tree">
                <LinesTree
                  name={'Líneas'}
                  defaultExpanded={true}
                  lines={this.state.lines}
                  linesShown={this.state.linesShown}
                  onLineToggle={this.bindedOnLineToggle}
                  onLinesShownChange={this.bindedOnLinesShownChange}
                />
              </ul>
            </PanelBody>
          </Panel>
          <Map
            mapboxAccessToken={this.state.config.mapbox_access_token}
            mapboxStyle={this.state.config.mapbox_style}
            center={this.state.config.coords}
            zoom={this.state.config.zoom}
            bearing={this.state.config.bearing}
            pitch={this.state.config.pitch}
            onLoad={this.bindedOnMapLoad}
            onMove={this.bindedOnMapMove}
            onMouseMove={this.bindedOnMouseMove}
            onMouseClick={this.bindedOnMouseClick}
            disableMouseEvents={this.state.playing} >
            { this.state.sources.map((source) => { return (
                <Source
                  key={source.name}
                  name={source.name}
                  data={source.data}
                />
              )
            }) }
            { this.state.layers.map((layer) => { return (
                <Layer
                  key={layer.id}
                  id={layer.id}
                  source={layer.source}
                  type={layer.type}
                  paint={layer.paint}
                  filter={layer.filter}
                />
              )
            }) }
            { this.state.clickedFeatures && <Popup
              point = {this.state.clickedFeatures.point}
              />}
          </Map>
        </div>
        );
  }
}

export default City
