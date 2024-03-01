import PreferencesColumn from "./PreferencesColumn";
import TabColumn from "./TabColumn";
import TinderColumn from "./TinderColumn";

function Match() {
  return (
    <div className="grid grid-cols-12">
      <div className="col-span-3">
        <TabColumn />
      </div>
      <div className="col-span-6">
        <TinderColumn />
      </div>
      <div className="col-span-3">
        <PreferencesColumn />
      </div>
    </div>
  );
}

export default Match;
