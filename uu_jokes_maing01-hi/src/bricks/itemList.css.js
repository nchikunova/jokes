import Config from './config/config'

const deleteButton = () => Config.Css.css `
margin-left: 430px
`;

const itemList = () => Config.Css.css `
    display: flex;
    flex-direction: column;`;

const wrapper = () => Config.Css.css `
    margin-left: 20px
`;
const item = () => Config.Css.css `
border-radius: 10px;
border-color: blueviolet;
`;




export default {
    deleteButton,
    itemList,
    wrapper,
    item
}