//@@viewOn:revision
// coded: Sofiia Franchuk (2734-2114-1), 11.08.2021
// reviewed:
//@@viewOff:revision
import Config from "../config/config";

const modalFix = () => Config.Css.css`
  padding: 20px;
  box-sizing: border-box;
  margin-left: auto;
  margin-right: auto;
  border: none;
`;

const deleteButton = () => Config.Css.css`
margin-left: 30px;
padding-left: 15px;
padding-right: 15px;
`

export default {
  modalFix,
  deleteButton
};
