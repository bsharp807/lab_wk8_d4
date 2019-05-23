import React from "react";
import Pic from "./Pic";
import './picslist.css'

const PicsList = props => {
  let i = 1;
  let column1 = [];
  let column2 = [];
  let column3 = [];
  let column4 = [];

  props.doggos.map((element, index) => {
    if (i === 1) {
      column1.unshift(element);
      i++;
    } else if (i === 2) {
      column2.unshift(element);
      i++;
    } else if (i === 3) {
      column3.unshift(element);
      i++;
    } else if (i === 4) {
      column4.unshift(element);
      i = 1;
    }
  });

  const mapcolumn1 = () => {
    console.log(column1);
    if (column1.length > 0) {
      return column1.map((element, index) => {
        return <Pic url={element.message} key={index} />;
      });
    }
    return null;
  };
  const mapcolumn2 = () => {
    if (column2.length > 0) {
      return column2.map((element, index) => {
        return <Pic url={element.message} key={index} />;
      });
    }
    return null;
  };
  const mapcolumn3 = () => {
    if (column3.length > 0) {
      return column3.map((element, index) => {
        return <Pic url={element.message} key={index} />;
      });
    }
    return null;
  };
  const mapcolumn4 = () => {
    if (column4.length > 0) {
      return column4.map((element, index) => {
        return <Pic url={element.message} key={index} />;
      });
    }
    return null;
  };

  return (
    <div>
      <div className='column1'>{mapcolumn1()}</div>
      <div className='column2'>{mapcolumn2()}</div>
      <div className='column3'>{mapcolumn3()}</div>
      <div className='column4'>{mapcolumn4()}</div>
    </div>
  );
};

export default PicsList;
