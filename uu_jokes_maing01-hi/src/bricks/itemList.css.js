import Config from './config/config'

const item = () => Config.Css.css `
margin-left: 250px
`;

const itemList = () => Config.Css.css `
    display: flex;
    flex-direction: column;
`;

const wrapper = () => Config.Css.css `
    margin-left: 20px
`;

export default {
    item,
    itemList,
    wrapper
}