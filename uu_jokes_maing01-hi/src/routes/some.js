import UU5 from "uu5g04";
import "uu5g04-bricks";
import { createVisualComponent, useState} from "uu5g04-hooks";
import Css from "../bricks/itemList.css";
import "uu_plus4u5g01-bricks";
import {ItemListContext} from '../core/item-list/context/context';
import ItemList from './item-list'


import Config from "./config/config.js";
//@@viewOff:imports

const STATICS = {
  //@@viewOn:statics
  displayName: Config.TAG + "Home",
  //@@viewOff:statics
};

const CLASS_NAMES = {
  welcomeRow: () => Config.Css.css`
    padding: 56px 0 20px;
    max-width: 624px;
    margin: 0 auto;
    text-align: center;
  
    ${UU5.Utils.ScreenSize.getMinMediaQueries("s", `text-align: left;`)}
  
    .uu5-bricks-header {
      margin-top: 8px;
    }
    
    .plus4u5-bricks-user-photo {
      margin: 0 auto;
    }
  `,
};


export const Some = createVisualComponent({
  ...STATICS,

  //@@viewOn:propTypes
  //@@viewOff:propTypes

  //@@viewOn:defaultProps
  //@@viewOff:defaultProps

  render(props) {
    const [show, setShow] = useState(2)
    const [itemList, setItemList] = useState([
      {
        id: 1,
        name: "Name 1",
        desc: "Some desc 1",
        rate: 4,
      },
      {
        id: 2,
        name: "Name 2",
        desc: "Some desc 2",
        rate: 2,
      },
      {
        id: 3,
        name: "Name 3",
        desc: "Some desc 3",
        rate: 3,
      },
      {
        id: 4,
        name: "Name 4",
        desc: "Some desc 4",
        rate: 4,
      },
      {
        id: 5,
        name: "Name 5",
        desc: "Some desc 5",
        rate: 5,
      },
    ]);

    const handleClick =(e)=>{
      const newItem = {
        id: Math.floor(Math.random() * (10000 - 6 + 1) + 6),
        name: "Name",
        desc: "Some desc ",
        rate: Math.round(Math.random() * 5) // <0, 5>,
      }
      console.log(newItem.rate);
      setItemList(itemList=> [newItem, ...itemList])
    }


    const onDelete=(id) => {
      setItemList(itemList.filter(value => value.id !== id ))
    }
    function loadMore(){
        setShow(prev => prev +2)
  }
    //@@viewOn:private
    //@@viewOff:private

    //@@viewOn:interface
    //@@viewOff:interface

    //@@viewOn:render
    const attrs = UU5.Common.VisualComponent.getAttrs(props);
    return (
      <ItemListContext.Provider value={itemList}>
      <div className={Css.wrapper()}{...attrs}>
         <UU5.Bricks.Header level="1" content="Items"/>
         <UU5.Bricks.Button borderRadius="12px"content="+ item" colorSchema="green" content="+ item" onClick={handleClick}/>
         <ItemList show={show} setItemList={setItemList}/>

        {itemList.length > show ?
        <UU5.Bricks.Button borderRadius="12px"content="Load more" onClick = {loadMore} colorSchema="blue" /> 
        : null}

      </div>
      </ItemListContext.Provider>

    );
    //@@viewOff:render
  },
});

export default Some;