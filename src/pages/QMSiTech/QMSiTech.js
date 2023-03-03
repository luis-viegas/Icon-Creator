import React, { useState } from 'react';
import './QMSiTech.scss';
import 'devexpress-diagram/dist/dx-diagram.min.css'
import 'lion.svg';
import Diagram, {
  ContextMenu,
  ContextToolbox,
  PropertiesPanel,
  Group,
  Tab,
  HistoryToolbar,
  ViewToolbar,
  MainToolbar,
  Command,
  Toolbox,
  CustomShape,
  PageSize,
} from 'devextreme-react/diagram';


import images from './images';


var images1 = images[0];
var images2 = images[1];
var images3 = images[2];


const pageCommands = ['pageSize', 'pageOrientation', 'pageColor'];
const menuCommands = ['bringToFront', 'sendToBack', 'lock', 'unlock'];

export default function Profile() {

  let diagramRef = React.createRef();

  function componentDidMount() {
    const diagram = this.diagramRef.current.instance;
    fetch('data/diagram-hardware.json')
      .then((response) => response.json())
      .then((json) => {
        diagram.import(JSON.stringify(json));
      })
      .catch(() => {
        throw new Error('Data Loading Error');
      });
  }



  return (
    <React.Fragment>
      <h2 className={'content-block'}>QMSiTech</h2>

      <Diagram id="diagram" ref={diagramRef} units='px'>
        
      {images2.map(function(name){
        return <CustomShape
        category="fase2"
        type={name}
        title={name}
        backgroundImageUrl={name}
        allowEditText={false}/>
      })}
      {images1.map(function(name){
        return <CustomShape
        category="fase1"
        type={name}
        title={name}
        backgroundImageUrl={name}
        allowEditText={false}/>
      })}
      {images3.map(function(name){
        return <CustomShape
        category="fase3"
        type={name}
        title={name}
        backgroundImageUrl={name}
        allowEditText={false}/>
      })}
      

      <ContextMenu enabled={false}/>
      <ContextToolbox enabled={false}/>
      <HistoryToolbar visible={false} />
      <ViewToolbar visible={true} />
      <MainToolbar visible={false}/>
      <PropertiesPanel visibility={'disabled'}/>
      <PageSize height={500} width={500} />



      <Toolbox visibility="visible" showSearch={false} shapeIconsPerRow={10} width={350}>
        <Group category="fase1" title="Fase1" />
        <Group category="fase2" title="Fase2" />
        <Group category="fase3" title="Fase3" />
      </Toolbox>
    </Diagram>
      
    </React.Fragment>
  );
}

