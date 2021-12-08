//@@viewOn:imports
import UU5 from "uu5g04";
import { createVisualComponent } from "uu5g04-hooks";
import Config from "./config/config";
import Uu5Tiles from "uu5tilesg02";

import CustomTile from "./custom-tile";
//@@viewOff:imports
import { useContextModal } from './common/modal-manager';
import { useJoke } from './context/use-joke';
import { JokeUpdateHeader, JokeUpdateControls, JokeUpdateForm } from "./joke-update-form/joke-update-form";

const STATICS = {
    //@@viewOn:statics
    displayName: Config.TAG + "Tiles",
    nestingLevel: "bigBoxCollection",
    //@@viewOff:statics
};

export const Tiles = createVisualComponent({
    ...STATICS,

    //@@viewOn:propTypes
    propTypes: {
        data: UU5.PropTypes.array,
    },
    //@@viewOff:propTypes

    //@@viewOn:defaultProps
    defaultProps: {},
    //@@viewOff:defaultProps

    render(props) {

        //@@viewOn:hooks
        const [open, close] = useContextModal();
        const { data, handlerMap } = useJoke();
    //@@viewOff:hooks
        //@@viewOn:private
        function handleOpenDetailsModal(data) {
            open({
                header: <JokeUpdateHeader />,
                content: <JokeUpdateForm data={data} closeModal={close} />,
                footer: <JokeUpdateControls />

            });
        }
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
            <Uu5Tiles.ControllerProvider
                data={data}
            >
                <Uu5Tiles.Grid
                    tileMinWidth={200}
                    tileMaxWidth={400}
                    tileSpacing={8}
                    rowSpacing={8}
                    
                >
                    <CustomTile handleOpenDetailsModal={handleOpenDetailsModal}/>
                </Uu5Tiles.Grid>
            </Uu5Tiles.ControllerProvider>
        ) : null;
        //@@viewOff:render
    },
});

export default Tiles;
