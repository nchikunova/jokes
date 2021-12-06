//@@viewOn:imports
import { useContext } from "uu5g04-hooks";
import Context from "./item-list-context.js";
//@@viewOff:imports

export function useItemList() {
  return useContext(Context);
}

export default useItemList;