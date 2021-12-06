import UU5 from "uu5g04";
import "uu5g04-bricks";
import { createVisualComponent, useState, useRef } from "uu5g04-hooks";
import Css from "../bricks/itemList.css";

import Plus4U5 from "uu_plus4u5g01";
import "uu_plus4u5g01-bricks";

import Config from "./config/config.js";
import Lsi from "../config/lsi.js";
import WelcomeRow from "../bricks/welcome-row.js";
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


export const ItemList = createVisualComponent({
  ...STATICS,

  propTypes: {
      itemList: UU5.PropTypes.array.isRequired,
      setItemList: UU5.PropTypes.func.isRequired
  },

  //@@viewOn:propTypes
  //@@viewOff:propTypes

  //@@viewOn:defaultProps
  //@@viewOff:defaultProps

  render(props) {
    const [show, setShow] = useState(2)
    const [itemList, setItemList] = useState([
      
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
      <div className={Css.wrapper()}{...attrs}>
         <UU5.Bricks.Header level="1" content="Items"/>
         <UU5.Bricks.Button borderRadius="12px"content="+ item" colorSchema="green" content="+ item" onClick={handleClick}/>
         <UU5.Bricks.Ul type="none" className={Css.itemList()} >
        {itemList.slice(0, show).map(item => (
          <UU5.Bricks.Li key={item.id}>
            <UU5.Bricks.Card className="uu5-common-padding-s" width={500}>
            <UU5.Bricks.Text content={item.name}/>
            <UU5.Bricks.Text content={item.desc}/>
            <UU5.Bricks.Rating value={item.rate}/>
            <UU5.Bricks.Button className={Css.deleteButton()} colorSchema="red" borderRadius="12px" 
            onClick={()=>onDelete(item.id)}><UU5.Bricks.Icon
            icon="plus4u5-trash-can"/></UU5.Bricks.Button> </UU5.Bricks.Card></UU5.Bricks.Li>
         ) )}
        </UU5.Bricks.Ul>
        {itemList.length > show ?
        <UU5.Bricks.Button borderRadius="12px"content="Load more" onClick = {loadMore} colorSchema="blue" /> 
        : null}
      </div>
    );
    //@@viewOff:render
  },
});

export default Some;