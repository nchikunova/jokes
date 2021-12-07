import UU5 from "uu5g04";
import "uu5g04-bricks";
import { createVisualComponent, useState, useRef, useDataList } from "uu5g04-hooks";
import "uu_plus4u5g01-bricks";
import Calls from 'calls'
import CustomTile from "./custom-tile.js";
import Uu5Tiles from "uu5tilesg02";
import Config from "../config/config.js";
//@@viewOff:imports
import { DataListStateResolver } from '../jokes/common/data-list-state-resolver';
import { ModalManager } from "./common/modal-manager.js";
import Tiles from './Tiles'

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
    const { data, handlerMap } = dataListResult;
    return (
      <ModalManager>
        <DataListStateResolver dataList={dataListResult}>
          <Tiles data={data}/>
        </DataListStateResolver>
      </ModalManager>
    );
    //@@viewOff:render
  },
});

export default Jokes;