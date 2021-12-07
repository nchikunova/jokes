import UU5 from "uu5g04";
import "uu5g04-bricks";
import { createVisualComponent } from "uu5g04-hooks";
import Css from "../bricks/itemList.css";
import "uu_plus4u5g01-bricks";
import {useItemList} from '../core/item-list/context/context'

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


export const ItemList = createVisualComponent({
  ...STATICS,

  //@@viewOn:propTypes
  propTypes: {
    setItemList: UU5.PropTypes.func.isRequired
  },

  //@@viewOff:propTypes

  //@@viewOn:defaultProps
  //@@viewOff:defaultProps



  render(props) {
    const itemList = useItemList();


    function onDelete(id) {
      props.setItemList(itemList.filter(value => value.id !== id ))
    }

    
    function onHandleButtonClick(item){
      props.modal.current.open({
        header: item.name,
        content: item.desc,
        footer: <UU5.Bricks.Button content="Close" onClick={props.modal.current.close}/>
      })
    }
    //@@viewOn:private
    //@@viewOff:private

    //@@viewOn:interface
    //@@viewOff:interface

    //@@viewOn:render
    const attrs = UU5.Common.VisualComponent.getAttrs(props);
    return (
      <div className={Css.wrapper()}{...attrs}>
         <UU5.Bricks.Ul type="none" className={Css.itemList()} >
        {itemList.slice(0, props.show).map(item => (
          <UU5.Bricks.Li key={item.id}>
          <UU5.Bricks.Card className="uu5-common-padding-s" width={500}>
            {/* One more solution for modal window */}
          {/* <UU5.Bricks.LinkModal
            children={   
              <div>       
            <UU5.Bricks.Text content={item.name}/>
              <UU5.Bricks.Rating value={item.rate}/>
              </div> }
                component={<UU5.Bricks.Text content={item.desc}/>
              }/> */}
              <UU5.Bricks.Text content={item.name}/>
              <UU5.Bricks.Text content={item.desc}/>
              <UU5.Bricks.Rating value={item.rate}/>
              <UU5.Bricks.Button className = {Css.showMore()} content="more details..." onClick={() => onHandleButtonClick(item)}/>
                <UU5.Bricks.Button className={Css.deleteButton()} colorSchema="red" borderRadius="12px" 
                onClick={()=>onDelete(item.id)}><UU5.Bricks.Icon
                icon="plus4u5-trash-can"/></UU5.Bricks.Button>   
                </UU5.Bricks.Card>
            </UU5.Bricks.Li>
         ) )}
        </UU5.Bricks.Ul>
        
      </div>
    );
    //@@viewOff:render
  },
});

export default ItemList;