import UU5 from "uu5g04";
import "uu5g04-bricks";
import { createVisualComponent, useState, useRef, useDataList} from "uu5g04-hooks";
import Css from "../bricks/itemList.css";
import "uu_plus4u5g01-bricks";
import {ItemListContext} from '../core/item-list/context/context';
import ItemList from './item-list'
import Calls from 'calls'


import Config from "./config/config.js";
//@@viewOff:imports

const STATICS = {
  //@@viewOn:statics
  displayName: Config.TAG + "Home",
  //@@viewOff:statics
};

export const Jokes = createVisualComponent({
  ...STATICS,

  //@@viewOn:propTypes
  //@@viewOff:propTypes

  //@@viewOn:defaultProps
  //@@viewOff:defaultProps

  render() {
    const dataListResult = useDataList({
      handlerMap: {
        load: Calls.jokeList,
        createItem: Calls.createItem,
      },
      itemHandlerMap: {}
    });
    //@@viewOn:private
    //@@viewOff:private

    //@@viewOn:interface
    //@@viewOff:interface

    //@@viewOn:render
    const {data, handlerMap} = dataListResult;
    return (
      <div>
    {data && JSON.stringify(data)}
      </div>
    );
    //@@viewOff:render
  },
});

export default Jokes;