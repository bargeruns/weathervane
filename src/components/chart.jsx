import _ from 'lodash';
import React from 'react';
import { Sparklines, SparklinesLine, SparklinesReferenceLine } from 'react-sparklines';

export default (props) => {
  function average(data) {
    return _.round(_.sum(data)/data.length);
  }

  return (
    <div>
      <Sparklines data={props.data}>
        <SparklinesLine color={props.color}/>
        <SparklinesReferenceLine type='avg' />
      </Sparklines>
      <div>5-day average: {average(props.data)} {props.unit}</div>
    </div>
  );
};
