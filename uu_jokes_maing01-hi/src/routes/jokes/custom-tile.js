//@@viewOn:imports
import UU5 from "uu5g04";
import { createVisualComponent } from "uu5g04-hooks";
import Config from "./config/config";
import Css from "../jokes/common/modal-manager.css";
//@@viewOff:imports

const STATICS = {
  //@@viewOn:statics
  displayName: Config.TAG + "CustomTile",
  nestingLevel: "bigBoxCollection",
  //@@viewOff:statics
};

export const CustomTile = createVisualComponent({
  ...STATICS,

  //@@viewOn:propTypes
  propTypes: {
    data: UU5.PropTypes.object,
    handleOpenDetailsModal: UU5.PropTypes.func
  },
  //@@viewOff:propTypes

  //@@viewOn:defaultProps
  defaultProps: {},
  //@@viewOff:defaultProps

  render(props) {
    //@@viewOn:private
    const { data: joke } = props;
    //@@viewOff:private

    //@@viewOn:interface
    //@@viewOff:interface

    //@@viewOn:render
    const className = Config.Css.css``;
    const attrs = UU5.Common.VisualComponent.getAttrs(props, className);
    const currentNestingLevel = UU5.Utils.NestingLevel.getNestingLevel(
      props,
      STATICS
    );

    return currentNestingLevel ? (
      <div {...attrs}>
        <UU5.Bricks.Card className="uu5-common-padding-s" width={250}>
        <UU5.Bricks.Text content={joke?.data?.name} />
        <UU5.Bricks.Text content={joke?.data?.id} />
        <UU5.Bricks.Text content={joke?.data?.uuIdentityName} />
        <UU5.Bricks.Button colorSchema="orange" className="active" bgStyle="outline"
          onClick={() => props.handleOpenDetailsModal(joke?.data)}>Update<UU5.Bricks.Icon
              icon="plus4u-pencil" />
          </UU5.Bricks.Button>
          <UU5.Bricks.Button className={Css.deleteButton()} colorSchema="red" borderRadius="2px"
            onClick={() => onDelete(joke.id)}><UU5.Bricks.Icon
              icon="plus4u5-trash-can" />Delete</UU5.Bricks.Button>
        </UU5.Bricks.Card>
      </div>
    ) : null;
    //@@viewOff:render
  },
});

export default CustomTile;
