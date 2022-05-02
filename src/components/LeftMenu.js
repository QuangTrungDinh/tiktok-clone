import LeftMenuGeneral from "./LeftMenuGeneral";
import ListAccounts from "./ListAccounts";
import { followingAccounts, suggestedgAccounts } from "../data/ListAccounts";

const LeftMenu = (props) => {
  return (
    <div class="left">
      <div class="left-menu">
        <LeftMenuGeneral videoType={props.videoType} changeState={props.changeState} />
        <ListAccounts title="Suggested accounts" accounts={suggestedgAccounts}/>
        <ListAccounts title="Following accounts" accounts={ followingAccounts } />
      </div>
    </div>
  );
};

export default LeftMenu;
